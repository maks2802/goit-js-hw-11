import{i as s,S as c}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",u="36431598-58be2282cdfdc5fc3df430395";async function f(t){const o=`${d}?key=${u}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return(await(await fetch(o)).json()).hits}function y(t){const o=document.querySelector(".gallery"),n=t.map(a=>g(a)).join("");o.innerHTML=n}function g({webformatURL:t,largeImageURL:o,tags:n,likes:a,views:e,comments:r,downloads:i}){return`
    <a class="gallery-item" href="${o}">
      <div class="gallery-card">
        <img src="${t}" alt="${n}" loading="lazy" class="gallery-image"/>
        <div class="gallery-info">
          <p class="gallery-info-item"><span class="gallery-info-bold">Likes</span> <br />${a}</p>
          <p class="gallery-info-item"><span class="gallery-info-bold">Views</span> <br />${e}</p>
          <p class="gallery-info-item"><span class="gallery-info-bold">Comments</span> <br />${r}</p>
          <p class="gallery-info-item"><span class="gallery-info-bold">Downloads</span> <br />${i}</p>
        </div>
      </div>
    </a>
  `}let l;document.querySelector("#search-form").addEventListener("submit",p);async function p(t){t.preventDefault();const o=t.target.elements.searchQuery.value.trim();if(m(),!o){s.warning({title:"Warning",message:"Please enter a search query."});return}b();try{const n=await f(o);if(n.length===0){s.error({title:"Error",message:"Sorry, no images match your search query. Please try again.",position:"topRight"});return}y(n),h()}catch(n){s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(n)}finally{L()}}function m(){const t=document.querySelector(".gallery");t.innerHTML=""}function h(){l&&l.destroy(),l=new c(".gallery-item",{captionsData:"alt",captionDelay:250})}function b(){const t=document.getElementById("loading-indicator");t.style.display="block"}function L(){const t=document.getElementById("loading-indicator");t.style.display="none"}
//# sourceMappingURL=index.js.map
