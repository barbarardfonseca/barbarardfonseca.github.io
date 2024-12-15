import { createComponent } from "./index.js";

/**
 * Componente para os dashboards do portfólio com vídeo
 * @param {*} id - id para numerar os dashboards
 * @param {*} backgroundColor - Plano de fundo deve alterar entre cinza e branco (light ou white)
 * @param {*} title - Nome do Dashboard
 * @param {*} subtitle - De qual desafio ele é ou origem
 * @param {*} desc - Descrição do Dashboard
 * @param {*} resourcesUsed - Recursos e habilidades utilizadas no dashboard
 * @param {*} dateCreation - Data de criação do dashboard
 * @param {*} imageSrc - Caminho para a imagem de preview
 * @param {*} videoSrc - Link do vídeo para redirecionamento
 * @returns 
 */

export default function DashboardProjectMB(props) {
  return createComponent({
    component: `
      <!--Dash ${props.idNumber}-->
      <div class="notification is-${props.backgroundColor}">
        <div class="columns is-desktop">
          <div class="column">
            <h1 class="title has-text-centered">${props.title}</h1>
            <h2 class="subtitle has-text-centered">${props.subtitle}</h2>
            <p class="has-text-justified">${props.desc}</p>
            <br> <strong>Recursos Utilizados:</strong> ${props.resourcesUsed}
            <br> <strong>Criação:</strong> ${props.dateCreation}
            <br>
          </div>
          <div class="column">
            <figure class="image">
               <!-- Vídeo integrado -->
              <video controls width="100%"
                <source src="${props.videoSrc}" type="video/mp4">
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </figure>
          </div>
        </div>
      </div>
      <!--end Dash ${props.idNumber}->
    `, props
    // is-5by3
  })
}