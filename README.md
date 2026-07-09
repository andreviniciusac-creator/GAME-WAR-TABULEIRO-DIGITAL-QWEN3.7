# GAME-WAR-TABULEIRO-DIGITAL-QWEN3.7
SIMULACAO DO JOGO DE TABULEIRO WAR FEITO COM IA
# 🎲 WAR — Estratégia e Conquista

Um jogo de tabuleiro digital completo baseado no clássico WAR, implementado em HTML5, CSS3 e JavaScript puro, com mapa mundi real baseado em coordenadas geográficas.

![WAR](https://img.shields.io/badge/Status-Completo-brightgreen) ![Versão](https://img.shields.io/badge/Versão-1.0-blue) ![Licença](https://img.shields.io/badge/Licença-MIT-green)

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Como Executar](#-como-executar)
- [Regras do Jogo](#-regras-do-jogo)
- [Arquitetura](#-arquitetura)
- [Correções Implementadas](#-correções-implementadas)
- [Mapa Mundi Real](#-mapa-mundi-real)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

## 🎯 Sobre o Projeto

WAR é uma implementação digital completa do clássico jogo de tabuleiro de conquista territorial. O jogo features:

- **42 territórios** distribuídos em 6 continentes
- **Mapa mundi real** com fronteiras geográficas verdadeiras
- **Sistema de combate** seguindo as regras oficiais
- **IA com personalidades** distintas (pacífico, agressivo, estrategista, etc.)
- **Objetivos secretos** e sistema de cartas
- **Cartas de estratégia** com poderes especiais
- **Interface responsiva** que funciona em desktop e mobile

## ✨ Funcionalidades

### 🗺️ Mapa Interativo
- Zoom e pan com gestos de mouse/touch
- Fronteiras reais de países agrupadas em territórios
- Visualização de rotas de fronteira (terrestres e marítimas)
- Tooltips informativos com dados do território
- Destaque visual de territórios selecionáveis

### ⚔️ Sistema de Combate
- Rolagem de dados animada
- Cálculo de probabilidades em tempo real
- Atacante: até 3 dados (exércitos - 1)
- Defensor: até 2 dados (regra oficial WAR)
- Empate favorece a defesa
- Ataque total (blitz) automatizado

### 🤖 Inteligência Artificial
- 6 personalidades distintas:
  - **Pacífico**: Evita combate, fortifica fronteiras
  - **Agressivo & Estrategista**: Ataca cedo, persegue objetivos
  - **Mediano**: Equilibra expansão e defesa
  - **Oportunista**: Foca no vizinho mais fraco
  - **Defensivo**: Muralhas primeiro, conquista depois
  - **Estrategista**: Movimentos focados no objetivo

- 3 níveis de competência (Recruta, Oficial, Marechal)
- Personalidade e competência são independentes e secretas

### 🎴 Sistema de Cartas
- **Cartas de território**: 42 cartas + 2 coringas
- **Trocas estratégicas**: Valores crescentes (4, 6, 8, 10, 12, 15, +5)
- **Cartas de estratégia**: 8 poderes especiais
  - Artilharia Pesada (4 dados, usa 3 melhores)
  - Muralha de Ferro (+1 defesa)
  - Ponte Aérea (movimento não-adjacente)
  - Espionagem (revela objetivos)
  - Sabotagem (remove exércitos)
  - Mobilização Geral (+4 exércitos)
  - Trégua (imunidade temporária)
  - Blitzkrieg (+1 exército em conquistas)

### 🎯 Objetivos
- 8 objetivos territoriais clássicos
- 6 objetivos de destruição (eliminar cor específica)
- Modo conquista total (42 territórios)
- Modo objetivo secreto (padrão)

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização com variáveis CSS, grid, flexbox
- **JavaScript (ES6+)**: Lógica do jogo, sem dependências externas
- **SVG**: Renderização do mapa e animações
- **Web Audio API**: Efeitos sonoros procedurais
- **GeoJSON**: Dados geográficos reais (Natural Earth)

## 🚀 Como Executar

### Método 1: Abertura Direta
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/war-game.git

# Navegue até o diretório
cd war-game

# Abra o arquivo index.html no navegador
# (duplo clique ou arraste para o navegador)
