import{g as u,j as e,n as y,k as w,l as v,o as C,L as P}from"./index.25d6e279.js";import{r as x,b as k,u as M}from"./vendor.ee8c1fef.js";import{P as S}from"./ProductCardStyleOne.fed48eae.js";import{d as F}from"./index.1718074f.js";import{C as L}from"./chevron-left.c19e2cf4.js";import"./tracking.b23baa7f.js";import"./eye.cfe27441.js";function q({className:a,filterToggle:t,updateUrlParams:o,handleCategoryChange:d,type:l=3}){const{filters:s,updateFilters:i}=x.useContext(u),n=c=>{i({...s,min:c[0],max:c[1],page:1}),o({...s,min:c[0],max:c[1],page:1})};return e.jsx("div",{className:`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] ${a||""} ${t?"block":"hidden lg:block"}`,children:e.jsxs("div",{className:"filter-subject-item pb-10 border-b border-qgray-border mt-10",children:[e.jsx("div",{className:"subject-title mb-[30px]",children:e.jsx("h1",{className:"text-black text-base font-500",children:"Échelle des prix"})}),e.jsx("div",{className:"price-range mb-5",children:e.jsx(F,{value:[s.min,s.max],onInput:n,min:4e3,max:5e6})}),e.jsxs("p",{className:"text-xs text-qblack font-400",children:["Prix (FCFA): ",s.min," - ",s.max]})]})})}const E=({currentPage:a,totalPages:t,onPageChange:o})=>{const d=()=>{const s=[];for(let i=Math.max(2,a-2);i<=Math.min(t-1,a+2);i++)s.push(i);return a-2>2&&s.unshift("..."),a+2<t-1&&s.push("..."),s.unshift(1),t!==1&&s.push(t),s};return e.jsx("nav",{className:"flex justify-center items-center mt-8 px-4","aria-label":"Pagination",children:e.jsxs("ul",{className:"flex flex-wrap justify-center items-center space-x-1 md:space-x-2",children:[e.jsx("li",{children:e.jsx("button",{onClick:()=>o(Math.max(1,a-1)),disabled:a===1,className:"p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-qyellow disabled:opacity-50 disabled:cursor-not-allowed","aria-label":"Previous page",children:e.jsx(L,{className:"w-5 h-5"})})}),d().map((l,s)=>e.jsx("li",{children:typeof l=="number"?e.jsx("button",{onClick:()=>o(l),className:`hidden sm:block px-3 py-2 rounded ${a===l?"bg-bleu-logo text-white":"bg-gray-200 text-gray-700 hover:bg-qyellow"}`,"aria-current":a===l?"page":void 0,children:l}):e.jsx("span",{className:"hidden sm:block px-3 py-2",children:l})},s)),e.jsx("li",{className:"sm:hidden",children:e.jsxs("span",{className:"px-3 py-2 text-gray-700",children:[a," / ",t]})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>o(Math.min(t,a+1)),disabled:a===t,className:"p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-qyellow disabled:opacity-50 disabled:cursor-not-allowed","aria-label":"Next page",children:e.jsx(y,{className:"w-5 h-5"})})})]})})},$=E;function D(){const{currentProductsPromo:a,totalProductsPromo:t,isLoadingProductPromo:o,fetchProdcutsPromo:d,updateFilters:l,filters:s,resetFilters:i}=x.useContext(u),n=k(),c=M();x.useEffect(()=>{i();const r=new URLSearchParams(n.search),m={page:Number.parseInt(r.get("page"))||1,category:r.get("category")||"All",search:r.get("search")||"",min:Number.parseInt(r.get("min"))||4e3,max:Number.parseInt(r.get("max"))||5e6,limit:9};l(m),console.log(s),window.scrollTo({top:0,left:100,behavior:"smooth"})},[n.search,n.pathname,i,l]),x.useEffect(()=>{d()},[d]);const f=r=>{h({...s,page:r})},j=r=>{h({category:r||"All",page:1})},h=x.useCallback(r=>{const m=new URLSearchParams(n.search);Object.entries(r).forEach(([g,p])=>{p!=null&&p!==""?m.set(g,p.toString()):m.delete(g)}),c({search:m.toString()},{replace:!0})},[n.search,c]),b=(s.page-1)*s.limit+1,N=Math.min(s.page*s.limit,t);return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"CCBM Shop | En Promo",description:"Découvrez les meilleures offres promotionnelles sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité à prix réduits.",keywords:"électroménager, promotions, offres spéciales, CCBM Shop, ccbme, appareils électroménagers à prix réduits"}),e.jsx(v,{children:e.jsx("div",{className:"products-page-wrapper w-full",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsx(C,{}),e.jsxs("div",{className:"w-full lg:flex lg:space-x-[30px]",children:[e.jsx("div",{className:"lg:w-[270px]",children:e.jsx(q,{updateUrlParams:h,handleCategoryChange:j})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"products-sorting w-full bg-white flex flex-col md:flex-row justify-between p-[30px] mb-[40px]",children:e.jsxs("p",{className:"font-400 text-[13px]",children:[e.jsx("span",{className:"text-qgray",children:"Affichage"})," ",t>0?`${b}–${N} sur ${t} résultats`:"0 résultat"]})}),o?e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx(P,{className:"animate-spin"})," Chargement"]}):a.length===0?e.jsx("div",{className:"flex justify-center items-center",children:"Aucun produit en promotion trouvé"}):e.jsx("div",{className:"grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]",children:a.map(r=>e.jsx(S,{datas:r},r.id))}),e.jsx($,{currentPage:s.page,totalPages:Math.ceil(t/s.limit),onPageChange:f})]})]})]})})})]})}export{D as default};
