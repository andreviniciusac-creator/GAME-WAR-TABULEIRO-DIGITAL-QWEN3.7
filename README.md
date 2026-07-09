# WAR — Estratégia e Conquista

Simulação digital do clássico jogo de tabuleiro WAR, em **HTML5 + CSS3 + JavaScript puro** (sem dependências de build).

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

- 42 territórios · 6 continentes · combate com dados oficiais (até 3×2)
- IA com personalidades e níveis de competência
- Objetivos secretos ou conquista total
- Cartas de território e de estratégia
- Mapa mundi via GeoJSON (Natural Earth), com **fallback offline estável**
- Zoom/pan com mouse, roda e **pinça no touch**
- Layout com abas no tablet/mobile (Exércitos · Mapa · Comando)

## Arquitetura

| Arquivo | Status |
|---------|--------|
| `index.html` | **Principal** — UI + CSS + lógica unificados e responsivos |
| `CODE_WAR` | Legado desktop (referência) |
| `War-mobile` | Legado quebrado (não usar) |
| `COM_PYTHON` / `DOCKER` | Notas de execução (Docker incompleto no repo) |

## Correções na versão unificada

- Removidos scripts CDN não usados (`d3`, `topojson`)
- `buildMap()` assíncrono com `await` antes do turno
- Mapa offline com posições fixas (sem `Math.random`)
- Timeout no `fetch` do GeoJSON
- CSS do iPad: coluna única + abas (sem grid de 3 colunas com laterais ocultas)
- Meta viewport, safe-area, alvos de toque ≥ 44px, inputs 16px (evita zoom no iOS)
- Pinça, double-tap zoom, desbloqueio de `AudioContext` no primeiro toque
- Seleção de cor no setup acessível (`role=button`, teclado)

## Regras (resumo)

- Atacante: até 3 dados (exércitos − 1)
- Defensor: até 2 dados
- Empate favorece a defesa
- Conquistar ≥ 1 território no turno concede carta

## Licença

MIT (conforme badges do projeto original).
