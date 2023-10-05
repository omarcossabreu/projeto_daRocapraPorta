(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const i=document.querySelector("#links");i.innerHTML=`
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
`;const c=document.querySelector("#footer");c.innerHTML=`
  <span>Copyright da Roça pra Porta - 2023. </br> Todos os direitos reservados.</span>
  <span><a href="https://curr.to/meus-links">Criado por Marcos Abreu</a></span>
  `;const t={element:document.querySelector(".alert-profile"),isOpen:!1,open(){t.element.classList.add("open"),t.isOpen=!0},close(){t.element.classList.remove("open"),t.isOpen=!1}},l=document.getElementById("logo");l.addEventListener("click",()=>{t.isOpen?t.close():t.open()});
