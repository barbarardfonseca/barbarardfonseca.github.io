# barbarardfonseca.github.io
--- /dev/null
+++ c/Users/barba/OneDrive/Docs Oficial/estudos/barbarardfonseca.github.io/README.md
@@ -0,0 +1,96 @@
+# Portfólio de Dados & BI - Bárbara Fonseca
+
+Bem-vindo ao repositório do meu portfólio profissional. Aqui centralizo meus projetos de **Análise de Dados** e **Business Intelligence**, demonstrando como combino visão de negócio com habilidades técnicas em **Python**, **SQL** e **APIs** para criar soluções completas — da extração do dado até o dashboard final.
+
+🔗 **Acesse o portfólio online:** [barbarardfonseca.github.io](https://barbarardfonseca.github.io/index.html)
+
+## 🎯 Objetivo
+
+O objetivo deste site é servir como um hub interativo onde recrutadores e colegas de profissão podem explorar:
+- Dashboards interativos (Power BI e Metabase).
+- Análises exploratórias e scripts em Python.
+- Minha trajetória profissional e habilidades técnicas.
+
+## 🧠 Competências Técnicas
+
+### 📊 Análise e Visualização (Core)
+- **Ferramentas:** Power BI, Metabase.
+- **Conceitos:** Modelagem Dimensional (Star Schema), Definição de KPIs, UX para Dashboards e Storytelling.
+- **Negócio:** Análise de CRM, Financeiro, RH e Varejo.
+
+### Dados e Integração
+- ETL com Python (pandas, requests)
+- Consumo de APIs REST
+- Consultas complexas em SQL para análise ad-hoc e preparação de datasets.
+- Tratamento e limpeza de dados
+-**Bibliotecas:** Pandas, Requests, Plotly
+
+## 🗂️ Estrutura do Portfólio
+
+O site é dividido em seções dedicadas a cada tecnologia principal:
+
+### 1. Power BI
+Apresentação de relatórios focados em storytelling, análise preditiva e inteligência de negócios.
+- **Inteligência Climática:** Previsão meteorológica detalhada para cidades brasileiras, reunindo indicadores de temperatura, chuva, vento, rajadas e índice UV.
+- **Dashboard de Clientes:** Análise de CRM, receita, ticket médio e segmentação (Matriz de Ação).
+- **Análise de Combustíveis:** Monitoramento de preços e distribuição geográfica de revendas no Brasil.
+- **Dashboard de RH:** Análise de quadro de colaboradores e indicadores de gente e gestão.
+- **Dashboard Pokémon:** Um projeto criativo focado em UI/UX, fugindo dos padrões corporativos para criar uma experiência imersiva (Desafio DataB).
+
+### 2. Metabase & SQL
+Demonstração de habilidades em consultas SQL e construção de perguntas nativas.
+- **Finanças Pessoais:** Acompanhamento de receitas, despesas e investimentos com foco em planejamento financeiro.
+
+### 3. Python
+*Projeto: Análise Meteorológica (2016-2026)*
Um dashboard desenvolvido inteiramente com **Python** e **Plotly.js**, integrado a este site.
+- **Análise Meteorológica:** Dashboard construído com **Plotly.js** integrado ao site, analisando dados históricos de temperatura (2016-2026) com filtros dinâmicos e cálculo de tendências (regressão linear).
+## Principais implementações técnicas:
+
+Processamento e estruturação de dados climáticos históricos via Python.
+
+Geração automatizada de JSON embutido no HTML para construção de dashboard estático.
+
+Implementação manual de regressão linear simples para cálculo de tendência de aquecimento.
+
+Cálculo de projeção temporal (+5 anos) com base no coeficiente angular.
+
+Agregações dinâmicas por ano, mês, estado e data.
+
+Sistema de filtros interdependentes (UF, cidade, período, mês).
+
+Estratégia de agregação para otimização de performance em séries temporais extensas.
+
+Renderização interativa com Plotly.js.
+
+## 🛠️ Tecnologias Utilizadas no Site
+
+Além das ferramentas de dados, este portfólio foi construído utilizando tecnologias web modernas para garantir responsividade e organização:
+
+### Frontend
+- **HTML5 & CSS3:** Estruturação semântica e estilização personalizada.
+- **Bulma CSS Framework:** Utilizado para o sistema de grid responsivo e componentes visuais.
+- **JavaScript (ES6 Modules):** O site utiliza uma arquitetura modular. Os cards de projetos e skills são gerados dinamicamente via JavaScript (`js/components/`), facilitando a manutenção e a adição de novos projetos sem poluir o HTML.
+- **Plotly.js:** Biblioteca gráfica utilizada para renderizar gráficos interativos diretamente no navegador na seção de Python.
+
+### Design
+- **Identidade Visual:** Paleta de cores personalizada (Azul Profundo `#011826` e Dourado `#EBB922`).
+- **Ícones e SVGs:** Uso de vetores para garantir qualidade em qualquer resolução.
+
+## 📂 Estrutura de Arquivos
+
+```text
+root/
+│
+├── index.html          # Página Inicial (Hero section e visão geral)
+├── PBI.html            # Seção de Power BI
+├── Metabase.html       # Seção de Metabase
+├── layout_Python.html  # Seção de Python (Dashboard Meteorológico)
+├── sobre.html          # Página "Sobre Mim"
+├── style.css           # Estilos globais e customizações do Bulma
+│
+├── js/                 # Lógica do site
+│   ├── main.js         # Script principal
+│   ├── pbi.js          # Dados e renderização da página Power BI
+│   ├── metabase.js     # Dados e renderização da página Metabase
+│   ├── python.js       # Lógica específica da página Python
+│   └── components/     # Componentes reutilizáveis (Cards, Navbar, etc.)
+│
+├── images/             # Assets de imagem dos projetos
+└── icon/               # Ícones das tecnologias
+```
+
+## 🚀 Como executar localmente
+
+Caso queira clonar e rodar este projeto em sua máquina:
+
+1. Clone o repositório:
+   ```bash
+   git clone https://github.com/barbarardfonseca/barbarardfonseca.github.io.git
+   ```
+2. Navegue até a pasta do projeto.
+3. Como o projeto utiliza **Módulos ES6** (`<script type="module">`), você precisará de um servidor local simples para evitar erros de CORS (Cross-Origin Resource Sharing) ao carregar os arquivos JS.
+   - Se tiver o Python instalado:
+     ```bash
+     python -m http.server
+     ```
+   - Ou utilize a extensão "Live Server" do VS Code.
+4. Acesse `http://localhost:8000` no seu navegador.
+
+## 📫 Contato
+
+Se tiver dúvidas sobre os projetos ou quiser conversar sobre dados:
+
+- **LinkedIn:** Bárbara Rohr Fonseca
+- **GitHub:** @barbarardfonseca
+
+---
+*Desenvolvido por Bárbara Fonseca © 2025*