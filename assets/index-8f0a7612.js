import{P as u,j as e}from"./index-a890a50a.js";import{r as i,h as N,u as C}from"./vendor-579ab53f.js";import{B as P}from"./BreadcrumbCom-62df247e.js";import{P as y}from"./ProductCardStyleOne-10624e63.js";import{d as S,L as F}from"./Layout-737883ba.js";import{d as L}from"./index-f9b598e8.js";import{S as q}from"./SEOHeader-1622c1be.js";import{P as A}from"./Pagination-4af7af0b.js";import"./eye-f40abd55.js";import"./chevron-left-6f1e1997.js";function B({className:c,filterToggle:l,updateUrlParams:p,type:x=3}){const{filters:a,updateFilters:n}=i.useContext(u),s=r=>{n({...a,min:r[0],max:r[1],page:1}),p({...a,min:r[0],max:r[1],page:1})};return e.jsx("div",{className:`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] ${c||""} ${l?"block":"hidden lg:block"}`,children:e.jsxs("div",{className:"filter-subject-item pb-10 border-b border-qgray-border mt-10",children:[e.jsx("div",{className:"subject-title mb-[30px]",children:e.jsx("h1",{className:"text-black text-base font-500",children:"Échelle des prix"})}),e.jsx("div",{className:"price-range mb-5",children:e.jsx(L,{value:[a.min,a.max],onInput:s,min:5e3,max:5e6})}),e.jsxs("p",{className:"text-xs text-qblack font-400",children:["Prix (FCFA): ",a.min," - ",a.max]})]})})}function D(){const{currentProducts:c,totalProducts:l,isLoadingProduct:p,fetchProducts:x,updateFilters:a,resetFilters:n,filters:s}=i.useContext(u),r=N(),h=C();i.useEffect(()=>{n();const t=new URLSearchParams(r.search),o={page:Number.parseInt(t.get("page"))||1,category:t.get("category")||"All",search:t.get("search")||"",min:Number.parseInt(t.get("min"))||5e3,max:Number.parseInt(t.get("max"))||5e6,limit:9};a(o),window.scrollTo({top:0,left:100,behavior:"smooth"})},[r.pathname,r.search,n,a]),i.useEffect(()=>{x()},[x]);const f=(s.page-1)*s.limit+1,j=Math.min(s.page*s.limit,l),b=t=>{d({...s,page:t}),window.scrollTo({top:0,left:100,behavior:"smooth"})},v=t=>{const o=t.target.value;d({...s,search:o,page:1}),window.scrollTo({top:0,left:100,behavior:"smooth"})},w=t=>{d({category:t||"All",page:1}),window.scrollTo({top:0,left:100,behavior:"smooth"})},d=i.useCallback(t=>{const o=new URLSearchParams(r.search);Object.entries(t).forEach(([g,m])=>{m!=null&&m!==""?o.set(g,m.toString()):o.delete(g)}),h({search:o.toString()},{replace:!0})},[r.search,h]);return e.jsxs(e.Fragment,{children:[e.jsx(q,{title:"CCBM Shop | Boutique",description:"Découvrez les meilleures offres sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité.",keywords:"électroménager, boutique en ligne d'électroménager, CCBM Shop, ccbme, appareils électroménagers à prix réduits"}),e.jsx(S,{children:e.jsx("div",{className:"products-page-wrapper w-full",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsx(P,{}),e.jsxs("div",{className:"w-full lg:flex lg:space-x-[30px]",children:[e.jsx("div",{className:"lg:w-[270px]",children:e.jsx(B,{handleCategoryChange:w,updateUrlParams:d})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"products-sorting w-full bg-white flex flex-col md:flex-row justify-between p-[30px] mb-[40px]",children:[e.jsxs("p",{className:"font-400 text-[13px]",children:[e.jsx("span",{className:"text-qgray",children:"Affichage"})," ",l>0?`${f}–${j} sur ${l} résultats`:"0 résultat"]}),e.jsx("input",{type:"search",placeholder:"Rechercher des produits",value:s.search,onChange:v,className:"px-3 py-2 border border-gray-300 rounded-md"})]}),p?e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx(F,{className:"animate-spin"})," Chargement"]}):c.length===0?e.jsx("div",{className:"flex justify-center items-center",children:"Aucun produit trouvé"}):e.jsx("div",{className:"grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]",children:c.map(t=>e.jsx(y,{datas:t},t.id))}),e.jsx(A,{currentPage:s.page,totalPages:Math.ceil(l/s.limit),onPageChange:b})]})]})]})})})]})}export{D as default};
