/** Precisa importar o arquivo onde está a função */
import addComponent from "./components/index.js";
import CardSkill from "./components/CardSkill.js";
import AddNavBar from "./components/Navbar.js";

/**AddNavBar();*/

/**    
 * Lista sobre as habilidades utilizadas na ferramenta
 * Lista com título, descrição e link da imagem
 */
addComponent("cards-skills", [
  CardSkill({
    title: "Python",
    desc: "Linguagem principal para processamento de dados e lógica.",
    imageSrc: "icon/python.svg"
  }),
  CardSkill({
    title: "Pandas",
    desc: "Biblioteca para manipulação e análise de dados.",
    imageSrc: ""
  }),
  CardSkill({
    title: "Plotly",
    desc: "Criação de gráficos interativos e dinâmicos.",
    imageSrc: "icon/dataviz.png"
  }),
  CardSkill({
    title: "Frontend",
    desc: "Layout responsivo com HTML, CSS e Bulma.",
    imageSrc: "icon/BI.png"
  }),
])