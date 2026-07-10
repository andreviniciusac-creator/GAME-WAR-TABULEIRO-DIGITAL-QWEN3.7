# WAR — Estratégia e Conquista

Simulação digital do clássico **WAR** (Grow) em **HTML5 + CSS3 + JavaScript puro**, com expansão de nível:

- Capitais e centros estratégicos  
- Unidades no mapa (infantaria / tanque / navio / avião)  
- Clima e estações  
- Missões dinâmicas  
- Diplomacia (alianças e cartas)  
- Hotseat multi-humano + multiplayer **WebSocket**  
- Visual de tabuleiro (papel, dados 3D leves)

Arquivo principal:

```text
index.html
```

## Como jogar (local)

```bash
# na pasta do projeto
python -m http.server 8000
# ou
npx serve -l 8000
```

Abra http://localhost:8000

## Multiplayer online

```bash
npm install
npm start
# servidor em ws://localhost:3080
```

1. Em outro terminal, sirva o HTML (`python -m http.server 8000`).
2. No setup do jogo: **Hospedar sala** (host).
3. Outro PC/aba na mesma rede: informe o código e **Entrar na sala**.
4. O host inicia a partida; o estado é sincronizado a cada turno.

> O host é a autoridade da simulação. Clientes recebem o estado e assistem / aguardam o assento.

## Hotseat (mesmo aparelho)

No setup, escolha **2 ou 3 humanos**. Quando for o turno do outro jogador, a dica pede para passar o aparelho.

## Sistemas novos

| Sistema | O que faz |
|---------|-----------|
| **Centros ★** | 10 pontos no mapa com bônus de reforço; vitória “Domínio estratégico” = 6 centros |
| **Capitais** | Cada jogador tem capital (defesa +1); capturar dá +2 exércitos |
| **Unidades** | Visual: · infantaria, ⛨ tanque (×5), ▴ artilharia (×10), ⚓ costa, ✈ (12+) |
| **Clima** | Primavera → Verão (monção) → Outono (tempestade no mar) → Inverno siberiano |
| **Missões** | Mid-game: segurar Suez, conquistar Japão, etc. → reforços bônus |
| **Diplomacia** | Aliança por 2 rodadas (sem atacar) + dar carta a outro humano |
| **Guerra moderna** | Ataque aéreo, drones, domo de ferro, frota naval… |

## Opções no setup

- Objetivo secreto / conquista total / **domínio estratégico**  
- 1–3 humanos  
- Cartas de estratégia, defesa War (3 dados), rolar na defesa  
- Clima, missões, capitais  
- URL WebSocket e sala  

## Arquivos

| Arquivo | Função |
|---------|--------|
| `index.html` | Jogo completo |
| `server.mjs` | Multiplayer WebSocket |
| `package.json` | Dependência `ws` |
| `CODE_WAR` / `War-mobile` | Legado (não usar) |

## Licença

MIT.
