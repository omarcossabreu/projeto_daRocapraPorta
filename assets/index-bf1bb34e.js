(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();document.querySelector(".profile").innerHTML=`
<header>
  <img src="https://i.ibb.co/0JF6hRx/366189644-1047365332962027-6864602880054301877-n.jpg" alt="imagem de perfil"/>
<div id="userProfile">
  <h1>Da Roça Pra Porta</h1>
  <p>Cultivamos, higienizamos e processamos com qualidade os nossos vegetais.</p>
</div>`;const s=document.querySelector("#links");s.innerHTML=`
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
`;const n=document.querySelector("#footer");n.innerHTML=`
  <span>Copyright da Roça pra Porta - 2023. </br> Todos os direitos reservados.</span>
  <span><a href="https://curr.to/meus-links">Criado por Marcos Abreu</a></span>
  `;
