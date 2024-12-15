/**
 * Precisa importar o arquivo onde está a função
 */
import addComponent from "./components/index.js";
import CardSkill from "./components/CardSkill.js";
import DashboardProject from "./components/DashboardProjectMB.js";
import BICard from "./components/BICard.js";
import AddNavBar from "./components/Navbar.js";

AddNavBar();

/**    
 * Lista sobre as habilidades utilizadas na ferramenta
 * Lista com título, descrição e link da imagem
 */
addComponent("cards-skills", [
  CardSkill({
    title: "Integração de Dados",
    desc: "Conexão com diferentes fontes de dados para alimentar os dashboards.",
    imageSrc: ""
  }),
  CardSkill({
    title: "Consultas SQL",
    desc: "Escrita de queries SQL para extrair dados personalizados no Metabase.",
    imageSrc: ""
  }),
  CardSkill({
    title: "Visualização de Dados",
    desc: "Criação de gráficos e dashboards para análise interativa de dados.",
    imageSrc: "icon/dataviz.png"
  }),
  CardSkill({
    title: "Inteligência de Negócios",
    desc: "Análise de dados para auxiliar na tomada de decisões estratégicas.",
    imageSrc: "icon/BI.png"
  }),
])

/** 
 * Lista com meus dashboards de portfólio
 * Lista com título, subtítulo, descrição e link do dashboard
 */
addComponent("dashboardsProjects", [
  DashboardProject({
    id: "1",
    backgroundColor: "light",
    title: "",
    subtitle: "",
    desc: `Esse dashboard apresenta uma visão geral das finanças pessoais ao longo de 2024, permitindo o acompanhamento detalhado de entradas, saídas e investimentos. Ele inclui:
    <br> Indicadores principais: Saldo total, renda acumulada, gastos totais e valor investido no período selecionado.
    <br> Gráfico de entradas e saídas mensais: Comparação clara entre receitas e despesas mês a mês.
    <br> Resumo das despesas: Detalhamento por categoria, com valores, porcentagem das despesas e relação com as receitas.
    <br> Detalhamento de investimentos: Representação visual da distribuição entre ações e renda fixa.
    <br> Gastos por tipo de despesa: Análise comparativa dos maiores gastos categorizados.
    <br> Esse dashboard é uma ferramenta essencial para o planejamento financeiro, ajudando a identificar padrões de consumo, priorizar investimentos e tomar decisões mais informadas sobre o orçamento pessoal.`,
    resourcesUsed: "SQL",
    dateCreation: "12/2024",
    videoSrc: "videos/personalfinances.mp4"
    })
    //DashboardProject({
    //id: "2",
    //backgroundColor: "white",
    //title: "Análise de Preços de Combustíveis",
    //subtitle: "",
    //desc: ``,
  //   resourcesUsed: "DAX",
  //   dateCreation: "04/2023",
  //   link: "https://app.powerbi.com/view?r=eyJrIjoiNjdhOTI5Y2YtMDNmOS00ZmYxLTkwZDAtZjUzZTU3MzI5YjcwIiwidCI6ImM0YzEwNjgzLWRkYzgtNDM5My1hN2U1LWMyZWUwZjQzM2Q2MSJ9&pageName=ReportSection"
  // })
 ])
/**
 * Lista das ferramentas de Business Intelligence utilizadas

 */
addComponent("bicards", [
  BICard({
    label: "Power BI",
    imageSrc: "images/img_pbi.png",
    link: "PBI.html"
  }),
  BICard({
    label: "Metabase",
    imageSrc: "images/img_mb.png",
    link: "#"
  }),
  BICard({
    label: "Python",
    imageSrc: "images/inc-py.png",
    link: "under_construction.html"
  }),
])