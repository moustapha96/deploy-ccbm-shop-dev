import{g,j as e,n as y,o as w,p as v,k as C,l as F,q as S,L as k,r as M}from"./index.4128a9c0.js";import{r as x,b as q,u as L}from"./vendor.af94f9e3.js";function $({className:a,filterToggle:s,updateUrlParams:o}){const{filters:r,updateFilters:i}=x.useContext(g),[t,n]=x.useState(r);x.useState({});const c=d=>{n({...t,min:d[0],max:d[1]}),o({...t,min:d[0],max:d[1]})};return e.jsx("div",{className:`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-6 pt-10 ${a||""} ${s?"block":"hidden lg:block"}`,children:e.jsxs("div",{className:"filter-subject-item pb-10 border-b border-qgray-border mt-10",children:[e.jsx("div",{className:"subject-title mb-[30px]",children:e.jsx("h1",{className:"text-black text-base font-500",children:"Échelle des prix"})}),e.jsx("div",{className:"price-range mb-5",children:e.jsx(y,{value:[r.min,r.max],onInput:c,min:4e3,max:5e6})}),e.jsxs("p",{className:"text-xs text-qblack font-400",children:["Prix (FCFA): ",r.min," - ",r.max]})]})})}const E=({currentPage:a,totalPages:s,onPageChange:o})=>{const r=()=>{const t=[];for(let n=Math.max(2,a-2);n<=Math.min(s-1,a+2);n++)t.push(n);return a-2>2&&t.unshift("..."),a+2<s-1&&t.push("..."),t.unshift(1),s!==1&&t.push(s),t};return e.jsx("nav",{className:"flex justify-center items-center mt-8 px-4","aria-label":"Pagination",children:e.jsxs("ul",{className:"flex flex-wrap justify-center items-center space-x-1 md:space-x-2",children:[e.jsx("li",{children:e.jsx("button",{onClick:()=>o(Math.max(1,a-1)),disabled:a===1,className:"p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-qyellow disabled:opacity-50 disabled:cursor-not-allowed","aria-label":"Previous page",children:e.jsx(w,{className:"w-5 h-5"})})}),r().map((i,t)=>e.jsx("li",{children:typeof i=="number"?e.jsx("button",{onClick:()=>o(i),className:`hidden sm:block px-3 py-2 rounded ${a===i?"bg-bleu-logo text-white":"bg-gray-200 text-gray-700 hover:bg-qyellow"}`,"aria-current":a===i?"page":void 0,children:i}):e.jsx("span",{className:"hidden sm:block px-3 py-2",children:i})},t)),e.jsx("li",{className:"sm:hidden",children:e.jsxs("span",{className:"px-3 py-2 text-gray-700",children:[a," / ",s]})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>o(Math.min(s,a+1)),disabled:a===s,className:"p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-qyellow disabled:opacity-50 disabled:cursor-not-allowed","aria-label":"Next page",children:e.jsx(v,{className:"w-5 h-5"})})})]})})},I=E;function R(){const{updateFilters:a,filters:s,resetFilters:o,fetchProdcutsFlash:r,isLoadingProductFlash:i,currentProductsFlash:t,totalProductsFlash:n}=x.useContext(g),c=q(),d=L();x.useEffect(()=>{o();const l=new URLSearchParams(c.search),m={page:Number.parseInt(l.get("page"))||1,category:l.get("category")||"All",search:l.get("search")||"",min:Number.parseInt(l.get("min"))||4e3,max:Number.parseInt(l.get("max"))||5e6,limit:9};a(m),console.log(s),window.scrollTo({top:0,left:100,behavior:"smooth"})},[c.search,c.pathname,o,a]),x.useEffect(()=>{r()},[r]);const f=l=>{p({...s,page:l})},j=l=>{p({category:l||"All",page:1})},p=x.useCallback(l=>{const m=new URLSearchParams(c.search);Object.entries(l).forEach(([u,h])=>{h!=null&&h!==""?m.set(u,h.toString()):m.delete(u)}),d({search:m.toString()},{replace:!0})},[c.search,d]),b=(s.page-1)*s.limit+1,N=Math.min(s.page*s.limit,n);return e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"CCBM Shop | Promo Ramadan",description:"Découvrez les meilleures offres promotionnelles sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité à prix réduits.",keywords:"électroménager, promotions, offres spéciales, CCBM Shop, ccbme, appareils électroménagers à prix réduits"}),e.jsx(F,{children:e.jsx("div",{className:"products-page-wrapper w-full",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsx(S,{}),e.jsxs("div",{className:"w-full lg:flex lg:space-x-[30px]",children:[e.jsx("div",{className:"lg:w-[270px]",children:e.jsx($,{updateUrlParams:p,handleCategoryChange:j})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"products-sorting w-full bg-white flex flex-col md:flex-row justify-between p-[30px] mb-[40px]",children:e.jsxs("p",{className:"font-400 text-[13px]",children:[e.jsx("span",{className:"text-qgray",children:"Affichage"})," ",n>0?`${b}–${N} sur ${n} résultats`:"0 résultat"]})}),i?e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx(k,{className:"animate-spin"})," Chargement"]}):t.length===0?e.jsx("div",{className:"flex justify-center items-center",children:"Aucun produit en promotion trouvé"}):e.jsx("div",{className:"grid xl:grid-cols-3 grid-cols-2 gap-[30px]",children:t.map(l=>e.jsx(M,{datas:l},l.id))}),e.jsx(I,{currentPage:s.page,totalPages:Math.ceil(n/s.limit),onPageChange:f})]})]})]})})})]})}export{R as default};
