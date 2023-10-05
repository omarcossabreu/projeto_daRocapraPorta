import './reset.css'
import './style.css'

const links = document.querySelector("#links")
links.innerHTML = (`
<ul>
  <li>
    <a href="https://www.whatsapp.com/catalog/5521966258778/?app_absent=0" target="_blank">
    <ion-icon class="icon" name="logo-whatsapp"></ion-icon>
    Nosso Catálogo pelo WhatsApp</a>
  </li>
  <li>
    <a href="https://darocapraporta.lojavirtualnuvem.com.br/" target="_blank">
    <ion-icon class="icon" name="storefront-outline"></ion-icon>
    Conheça Nossa Loja Online</a>
  </li>
  <li>
    <a href="https://www.instagram.com/da_roca_pra_porta/" target="_blank">
    <ion-icon class="icon" name="logo-instagram"></ion-icon>
    Siga @da_roca_pra_porta</a>
  </li>
</ul>
`)

const footer = document.querySelector("#footer")
footer.innerHTML = (`
  <span>Copyright da Roça pra Porta - 2023. </br> Todos os direitos reservados.</span>
  <span><a href="https://curr.to/meus-links">Criado por Marcos Abreu</a></span>
  `)

  // Ao clicar na logo
  const boasVindas = {
    element: document.querySelector(".alert-profile"),
    isOpen: false,
   
      open() {
       boasVindas.element.classList.add('open')
       boasVindas.isOpen = true
      },
      close() {
        boasVindas.element.classList.remove('open')
        boasVindas.isOpen = false
      }
    }
  
  const imagem = document.getElementById("logo")

  imagem.addEventListener("click", () => {
    if(boasVindas.isOpen) {
      boasVindas.close()
    } else {
      boasVindas.open()
    }
  });

 
