import{P as g,j as e,n as w,o as y,p as v,k as C,l as k,q,L as M,r as S}from"./index.2dba7a95.js";import{r as x,b as F,u as L}from"./vendor.af94f9e3.js";function $({className:a,filterToggle:t,updateUrlParams:c,type:n=3}){const{filters:s,updateFilters:r}=x.useContext(g),i=o=>{console.log("Valeurs du slider :",o),r({...s,min:o[0],max:o[1],page:1}),c({...s,min:o[0],max:o[1],page:1})};return e.jsx("div",{className:`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] ${a||""} ${t?"block":"hidden lg:block"}`,children:e.jsxs("div",{className:"filter-subject-item pb-10 border-b border-qgray-border mt-10",children:[e.jsx("div",{className:"subject-title mb-[30px]",children:e.jsx("h1",{className:"text-black text-base font-500",children:"Échelle des prix"})}),e.jsx("div",{className:"price-range mb-5",children:e.jsx(w,{value:[s.min,s.max],onInput:i,min:4e3,max:5e6})}),e.jsxs("p",{className:"text-xs text-qblack font-400",children:["Prix (FCFA): ",s.min," - ",s.max]})]})})}const A=({currentPage:a,totalPages:t,onPageChange:c})=>{const n=()=>{const r=[];for(let i=Math.max(2,a-2);i<=Math.min(t-1,a+2);i++)r.push(i);return a-2>2&&r.unshift("..."),a+2<t-1&&r.push("..."),r.unshift(1),t!==1&&r.push(t),r};return e.jsx("nav",{className:"flex justify-center items-center mt-8 px-4","aria-label":"Pagination",children:e.jsxs("ul",{className:"flex flex-wrap justify-center items-center space-x-1 md:space-x-2",children:[e.jsx("li",{children:e.jsx("button",{onClick:()=>c(Math.max(1,a-1)),disabled:a===1,className:"p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-qyellow disabled:opacity-50 disabled:cursor-not-allowed","aria-label":"Previous page",children:e.jsx(y,{className:"w-5 h-5"})})}),n().map((s,r)=>e.jsx("li",{children:typeof s=="number"?e.jsx("button",{onClick:()=>c(s),className:`hidden sm:block px-3 py-2 rounded ${a===s?"bg-bleu-logo text-white":"bg-gray-200 text-gray-700 hover:bg-qyellow"}`,"aria-current":a===s?"page":void 0,children:s}):e.jsx("span",{className:"hidden sm:block px-3 py-2",children:s})},r)),e.jsx("li",{className:"sm:hidden",children:e.jsxs("span",{className:"px-3 py-2 text-gray-700",children:[a," / ",t]})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>c(Math.min(t,a+1)),disabled:a===t,className:"p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-qyellow disabled:opacity-50 disabled:cursor-not-allowed","aria-label":"Next page",children:e.jsx(v,{className:"w-5 h-5"})})})]})})},E=A;function P(){const{currentProducts:a,totalProducts:t,isLoadingProduct:c,fetchProducts:n,updateFilters:s,resetFilters:r,filters:i}=x.useContext(g),o=F(),h=L();x.useEffect(()=>{r();const l=new URLSearchParams(o.search),d={page:Number.parseInt(l.get("page"))||1,category:l.get("category")||"All",search:l.get("search")||"",min:Number.parseInt(l.get("min"))||4e3,max:Number.parseInt(l.get("max"))||5e6,limit:9};s(d),window.scrollTo({top:0,left:100,behavior:"smooth"})},[o.pathname,o.search,r,s]),x.useEffect(()=>{n()},[n]);const f=(i.page-1)*i.limit+1,b=Math.min(i.page*i.limit,t),j=l=>{p({...i,page:l}),window.scrollTo({top:0,left:100,behavior:"smooth"})},N=l=>{p({category:l||"All",page:1}),window.scrollTo({top:0,left:100,behavior:"smooth"})},p=x.useCallback(l=>{const d=new URLSearchParams(o.search);Object.entries(l).forEach(([u,m])=>{m!=null&&m!==""?d.set(u,m.toString()):d.delete(u)}),h({search:d.toString()},{replace:!0})},[o.search,h]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"CCBM Shop | Boutique",description:"Découvrez les meilleures offres sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité.",keywords:"électroménager, boutique en ligne d'électroménager, CCBM Shop, ccbme, appareils électroménagers à prix réduits"}),e.jsx(k,{children:e.jsx("div",{className:"products-page-wrapper w-full",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsx(q,{}),e.jsxs("div",{className:"w-full lg:flex lg:space-x-[30px]",children:[e.jsx("div",{className:"lg:w-[270px]",children:e.jsx($,{handleCategoryChange:N,updateUrlParams:p})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"products-sorting w-full bg-white flex flex-col md:flex-row justify-between p-[30px] mb-[40px]",children:e.jsxs("p",{className:"font-400 text-[13px]",children:[e.jsx("span",{className:"text-qgray",children:"Affichage"})," ",t>0?`${f}–${b} sur ${t} résultats`:"0 résultat"]})}),c?e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx(M,{className:"animate-spin"})," Chargement"]}):a.length===0?e.jsx("div",{className:"flex justify-center items-center",children:"Aucun produit trouvé"}):e.jsx("div",{className:"grid xl:grid-cols-3 grid-cols-2 gap-[30px]",children:a.map(l=>e.jsx(S,{datas:l},l.id))}),e.jsx(E,{currentPage:i.page,totalPages:Math.ceil(t/i.limit),onPageChange:j})]})]})]})})})]})}export{P as default};
