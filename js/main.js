import Python from "./components/icons/Python.js";
import addComponent from "./components/index.js";
import AddNavBar from "./components/Navbar.js";
import BICard from "./components/BICard.js";

//insere a navbar completa
AddNavBar();

/**
 * Lista das ferramentas de Business Intelligence utilizadas
 * Lista com nome do botão, src da imagem de fundo e link de destino do botão
 */
addComponent("bicards", [
  BICard({
    label: "Power BI",
    imageSrc: "images/img_pbi.png",
    link: "#"
  }),
  // BICard({
  //   label: "Metabase",
  //   imageSrc: "images/inc-mb.png",
  //   link: "under_construction.html",
  //   className: "Agora posso receber minhas classes aqui 🥳",
  //   children: [
  //     BICard({
  //       label: "Eu posso ser renderizado dentro do BICard 😱",
  //       imageSrc: "images/inc-mb.png",
  //       link: "under_construction.html",
  //       className: "Filho tbm pode! porque não? 😁",
  //       children: "Eu sou neto! 🫢 loop infinito? 🤔"
  //     })
  //   ]
  // }),
  BICard({
    label: "Metabase",
    imageSrc: "images/inc-mb.png",
    link: "under_construction.html"
  }),
  BICard({
    label: "Tableau",
    imageSrc: "images/inc-tb.png",
    link: "under_construction.html"
  }),
  BICard({
    label: "Python",
    imageSrc: "images/inc-py.png",
    link: "under_construction.html"
  }),
])

addComponent("icon-python", Python({
  width: 50,
  heigth: 50,
  className: "has-text-centered",
}))

