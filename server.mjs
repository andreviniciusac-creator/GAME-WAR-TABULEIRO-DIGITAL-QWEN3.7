/**
 * WAR — servidor multiplayer WebSocket leve
 *
 * Uso:
 *   node server.mjs
 *   # opcional: PORT=3080 node server.mjs
 *
 * No jogo (setup):
 *   1. Host: "Hospedar sala" → anote o código
 *   2. Outros: digite o código → "Entrar na sala"
 *   3. Host inicia a partida (só o host avança a simulação e transmite o estado)
 *
 * Dependência: nenhuma (usa o módulo nativo `ws` se instalado, senão HTTP upgrade manual mínimo).
 * Preferível: npm i ws
 */

import http from 'http';
import { randomBytes } from 'crypto';
import { networkInterfaces } from 'os';

const PORT = Number(process.env.PORT) || 3080;

/** @type {Map<string, { host: any, clients: Map<number, any>, nextSeat: number, state: any }>} */
const rooms = new Map();

function code() {
  return randomBytes(3).toString('hex').slice(0, 5).toUpperCase();
}

function send(ws, obj) {
  if (ws.readyState === 1) ws.send(JSON.stringify(obj));
}

async function main() {
  let WebSocketServer;
  try {
    ({ WebSocketServer } = await import('ws'));
  } catch {
    console.error('Pacote "ws" não encontrado. Instale com:\n  npm i ws\n');
    process.exit(1);
  }

  const server = http.createServer((_req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('WAR multiplayer WebSocket · ws://localhost:' + PORT + '\n');
  });

  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws) => {
    ws.meta = { room: null, seat: null, role: null };

    ws.on('message', (raw) => {
      let msg;
      try {
        msg = JSON.parse(String(raw));
      } catch {
        return;
      }

      if (msg.type === 'host') {
        let room = (msg.room || '').toString().trim().toUpperCase();
        if (!room || rooms.has(room)) room = code();
        rooms.set(room, { host: ws, clients: new Map(), nextSeat: 1, state: null });
        ws.meta = { room, seat: 0, role: 'host' };
        send(ws, { type: 'room', room });
        send(ws, { type: 'joined', room, seat: 0, role: 'host' });
        console.log(`[host] sala ${room}`);
        return;
      }

      if (msg.type === 'join') {
        const room = (msg.room || '').toString().trim().toUpperCase();
        const r = rooms.get(room);
        if (!r) {
          send(ws, { type: 'error', error: 'Sala não encontrada: ' + room });
          return;
        }
        if (r.clients.size >= 5) {
          send(ws, { type: 'error', error: 'Sala cheia' });
          return;
        }
        const seat = r.nextSeat++;
        r.clients.set(seat, ws);
        ws.meta = { room, seat, role: 'client' };
        send(ws, { type: 'joined', room, seat, role: 'client' });
        if (r.state) send(ws, { type: 'state', state: r.state });
        console.log(`[join] sala ${room} assento ${seat}`);
        return;
      }

      if (msg.type === 'state') {
        const room = ws.meta.room || msg.room;
        const r = rooms.get(room);
        if (!r || r.host !== ws) return;
        r.state = msg.state;
        for (const [, client] of r.clients) send(client, { type: 'state', state: msg.state });
        return;
      }

      if (msg.type === 'ping') send(ws, { type: 'pong' });
    });

    ws.on('close', () => {
      const { room, seat, role } = ws.meta || {};
      if (!room) return;
      const r = rooms.get(room);
      if (!r) return;
      if (role === 'host') {
        for (const [, c] of r.clients) send(c, { type: 'error', error: 'Host saiu' });
        rooms.delete(room);
        console.log(`[close] host encerrou sala ${room}`);
      } else if (seat != null) {
        r.clients.delete(seat);
        console.log(`[close] assento ${seat} saiu de ${room}`);
      }
    });
  });

  server.listen(PORT, () => {
    console.log(`WAR WebSocket em ws://localhost:${PORT}`);
    const nets = networkInterfaces();
    for (const name of Object.keys(nets)) {
      for (const n of nets[name] || []) {
        if (n.family === 'IPv4' && !n.internal) {
          console.log(`  rede local: ws://${n.address}:${PORT}`);
        }
      }
    }
  });
}

main();
