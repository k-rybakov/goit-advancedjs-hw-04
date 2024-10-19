import{a as P,S as q,i as l}from"./assets/vendor-Rdv7LHNr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const E="46595178-4dac5182a4d6048d037515019",O="https://pixabay.com/api/",p=3,m=async(a,e)=>{var r,t;const o={key:E,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:e};try{return(await P.get(O,{params:o})).data}catch(s){throw console.log(s),new Error(((t=(r=s.response)==null?void 0:r.data)==null?void 0:t.message)||"API request failed")}},M="Sorry, there are no images matching your search query. Please try again!",$=new q(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250}),y=document.querySelector(".loader"),f=document.querySelector(".load-more");l.settings({position:"topRight",transitionIn:"flipInX",transitionOut:"flipOutX"});const g=a=>{if(a.length==0){l.error({message:M,position:"topRight"});return}const e=document.querySelector(".gallery"),o=a.map(r=>`<li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
            <img
                class="gallery-image"
                src="${r.webformatURL}"
                alt="${r.tags}"
            />
        <div class="gallery-footer">
          <div class="footer-item">
            <span class="item-title">Likes</span>
            <span class="item-value">${r.likes}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Views</span>
            <span class="item-value">${r.views}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Comments</span>
            <span class="item-value">${r.comments}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Downloads</span>
            <span class="item-value">${r.downloads}</span>
          </div>
        </div>
        </a>
    </li>`).join("");e.insertAdjacentHTML("beforeend",o),$.refresh()},i=(a,e)=>{e=="error"&&l.error({message:a}),e=="success"&&l.success({message:a})},h=()=>y.style.display="block",v=()=>y.style.display="none",L=()=>{f.style.display="none",i.success({message:"We're sorry, but you've reached the end of search results."})},w=()=>f.style.display="block",S="Something went wrong :(",d=document.querySelector("form"),I=document.querySelector(".load-more");let b="",n=1,u=0;d.addEventListener("submit",async a=>{a.preventDefault();const e=d.elements.search.value.trim();if(!e){i("Query mustn't be empty","error");return}document.querySelector(".gallery").innerHTML="",b=e;try{h();const o=await m(e,n);u=parseInt(o.total/p),console.log(o),g((o==null?void 0:o.hits)??[]),n<u?w():L(),n++}catch(o){console.log(o.message),i(o.message||S,"error")}finally{v(),d.reset()}});I.addEventListener("click",async a=>{a.preventDefault(),h();try{const e=await m(b,n);g((e==null?void 0:e.hits)??[]),n<u?w():L(),n++}catch(e){console.log(e.message),i(e.message||S,"error")}finally{v()}});
//# sourceMappingURL=index.js.map
