# WAR — Estratégia e Conquista

Simulação digital do clássico jogo de tabuleiro **WAR** (Grow), em **HTML5 + CSS3 + JavaScript puro** (sem dependências de build).

Um único arquivo responsivo serve **desktop, tablet e iPad/iPhone**:

```text
index.html
```

## Como executar

### Recomendado (servidor local)

Abrir o arquivo via `file://` funciona em muitos casos, mas o mapa geográfico (GeoJSON) e o áudio no iOS ficam mais confiáveis com HTTP:

```bash
# Python 3
python -m http.server 8000

# ou Node
npx serve
```

Depois abra no navegador:

- Desktop: http://localhost:8000/
- iPad (mesma rede Wi‑Fi): http://SEU-IP-LOCAL:8000/

### Abertura direta

Dê um duplo clique em `index.html` ou arraste-o para o Safari/Chrome.

> **iPad:** use a extensão `.html` e, de preferência, o servidor local. O arquivo antigo `War-mobile` (sem extensão e com JS corrompido) **não deve ser usado**.

## Funcionalidades

- 42 territórios · 6 continentes · combate com dados oficiais
- **Defesa interativa**: quando você é atacado, o painel abre e **você rola os dados**
- Painel de combate com **atacante, país de origem, país sob ataque e defensor**
- IA com personalidades e níveis de competência
- Objetivos secretos ou conquista total
- Cartas de território e de **estratégia / guerra moderna**
- Mapa mundi via GeoJSON (Natural Earth), com **fallback offline estável**
- Zoom/pan com mouse, roda e **pinça no touch**
- Layout com abas no tablet/mobile (Exércitos · Mapa · Comando)

## Guerra moderna (cartas)

Conquiste **2 ou mais** territórios no mesmo turno para receber uma carta de estratégia (máx. 3 na mão):

| Carta | Efeito |
|-------|--------|
| Ataque Aéreo | Bombardeia qualquer território inimigo (−1–2, sem conquistar) |
| Frota Naval | +1 no maior dado de ataque em rota marítima |
| Emboscada Naval | +1 dado de ataque (até 4) em rota marítima |
| Enxame de Drones | −1 em inimigo adjacente + reconhecimento |
| Domo de Ferro | Anula a 1ª perda na próxima defesa |
| Ponte Aérea | Remaneja até 5 exércitos entre territórios seus (mesmo não adjacentes) |
| Artilharia / Muralha / Blitz / Sabotagem / Espionagem / Trégua / Mobilização | Buffs e utilidades clássicos |

## Arquitetura

| Arquivo | Status |
|---------|--------|
| `index.html` | **Principal** — UI + CSS + lógica unificados e responsivos |
| `CODE_WAR` | Legado desktop (referência) |
| `War-mobile` | Legado quebrado (não usar) |
| `COM_PYTHON` / `DOCKER` | Notas de execução (Docker incompleto no repo) |

## Regras (resumo)

- Atacante: até **3 dados** (exércitos − 1)
- Defensor: até **3 dados** com a opção *Regras War* (Grow); ou 2 no estilo Risk
- **Empate favorece a defesa**
- Conquistar ≥ 1 território no turno concede carta de território
- Conquistar ≥ 2 no mesmo turno concede carta de estratégia

## Opções na ordem de batalha

- Cartas de estratégia e guerra moderna
- Mínimo de 3 exércitos por rodada
- Regras War (defesa até 3 dados)
- Eu rolo os dados quando sou atacado

## Licença

MIT (conforme badges do projeto original).
