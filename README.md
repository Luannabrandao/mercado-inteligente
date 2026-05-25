# 🥑 Mercado Inteligente — Economia do Lar (v1.0.0)

O **Mercado Inteligente** é um ecossistema web responsivo desenvolvido em **React**, projetado sob medida para simplificar o planejamento financeiro doméstico e combater o desperdício de alimentos. Com foco em acessibilidade e clareza para a gestão do lar, a interface utiliza os conceitos de **Soft UI Pastel**, equilibrando uma paleta de cores suave com uma hierarquia de dados poderosa.

---

## 🌟 Diferenciais de UI/UX & Arquitetura de Design

Diferente de dashboards genéricos, a interface foi desenhada pensando na rotina real de uso:

- **Paleta Soft UI Acolhedora:** Uso de tons pastel (Laranja, Azul, Verde e Rosa bebê) que transmitem organização, economia e leveza visual, com forte contraste em Verde Orgânico para legibilidade.
- **Hierarquia por Proporção:** Bloqueio de espaços vazios com distribuição simétrica de cards no estilo _dashboard modular_.
- **Navegação Viva (SPA):** Menu lateral que se estende por 100% da altura e reage dinamicamente (via `NavLink`) mudando de cor para indicar a página ativa.

---

## 🚀 Funcionalidades Principais

### 📊 1. Painel Geral (Dashboard)

- **Indicadores Financeiros Segmentados:** Visão clara do Gasto Mensal Total com percentual de variação, ao lado de mini-cards dedicados para despesas de **Supermercado**, **Açougue** e **Sacolão**.
- **Meta de Idas ao Mercado:** Indicador focado em eficiência doméstica para ajudar no planejamento de saídas e economia de tempo/recursos.
- **Despensa Crítica:** Alertas estáticos em blocos vermelhos de alto contraste ("⚠️ consumir agora evite o desperdício") integrados a ações de remoção inteligente se o produto for consumido (`✓ Consumi`) ou perdido (`🗑️ Estragou`).
- **Análise Gráfica & Histórico:** Gráfico de barras nativo em CSS e tabelas de feedbacks rápidos.

### 🛒 2. Lista Inteligente Expandida

- **Aninhamento Bidimensional:** Os itens de compra são organizados em duas grandes caixas master (**Itens Fixos** e **Itens Sazonais/Ofertas**).
- **Divisão por Corredor (Setores):** Dentro de cada macro-caixa, os produtos são sub-divididos automaticamente por setores (_Limpeza, Açougue, Sacolão e Itens Pesados_), facilitando o trajeto físico no mercado.
- **Sumiço Dinâmico:** Ao tocar em um produto, ele é computado como comprado e some imediatamente da lista de pendências para limpar a visão do usuário.

### 📝 3. Lançador Interativo de Cupons

- **Cupom Digital Dinâmico:** Conforme o usuário digita o produto, quantidade e valor, uma "notinha digital" estilizada vai crescendo e se calculando em tempo real ao lado direito do formulário.
- **Base Simétrica:** Centralização inferior unindo o histórico de notas salvas com barras de progresso para _Teto de Gastos Estimados_.

---

## 🛠️ Tecnologias e Conceitos Aplicados

- **React.js** (Componentização, Hooks e gerenciamento de estados com `useState`)
- **React Router Dom** (Roteamento dinâmico entre views sem recarregamento de página)
- **Clean Code & Validação Estrita:** Ajustes semânticos de acessibilidade (`htmlFor`, escopos do ESLint e tipagens dinâmicas com `Number`)
- **CSS Inline Estruturado:** Controle absoluto de layouts flexíveis (`display: flex`, `gridTemplateColumns`, `alignItems: stretch`).

---

## 📦 Inicialização Local

1. Instale as dependências:
   ```bash
   npm install
   ```
