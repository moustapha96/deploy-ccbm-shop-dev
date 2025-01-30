import{P as u,j as e}from"./index-e967100a.js";import{r as c,h as P,u as w}from"./vendor-04b9cdeb.js";import{B as y}from"./BreadcrumbCom-66573995.js";import{P as S}from"./ProductCardStyleOne-a5b6e913.js";import{d as F,L}from"./Layout-5a91086e.js";import{d as q}from"./index-3cf74a0c.js";import{S as A}from"./SEOHeader-9f4e5230.js";import{P as B}from"./Pagination-f9b25d26.js";import"./eye-dfd59cd1.js";import"./chevron-left-6584e509.js";function E({volume:a,volumeHandler:l,className:m,filterToggle:o,handleCategoryChange:p,type:x=3}){return c.useContext(u),e.jsx("div",{className:`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] ${m||""} ${o?"block":"hidden lg:block"}`,children:e.jsxs("div",{className:"filter-subject-item pb-10 border-b border-qgray-border mt-10",children:[e.jsx("div",{className:"subject-title mb-[30px]",children:e.jsx("h1",{className:"text-black text-base font-500",children:"Échelle des prix"})}),e.jsx("div",{className:"price-range mb-5",children:e.jsx(q,{value:[a.min,a.max],onInput:l,min:5e3,max:5e6})}),e.jsxs("p",{className:"text-xs text-qblack font-400",children:["Prix (FCFA): ",a.min," - ",a.max]})]})})}function T(){const{currentProducts:a,totalProducts:l,isLoadingProduct:m,fetchProducts:o,updateFilters:p,resetFilters:x,filters:t}=c.useContext(u),i=P(),g=w();c.useEffect(()=>{x();const s=new URLSearchParams(i.search),r={page:Number.parseInt(s.get("page"))||1,category:s.get("category")||"All",search:s.get("search")||"",min:Number.parseInt(s.get("min"))||5e3,max:Number.parseInt(s.get("max"))||5e6,limit:9};p(r),window.scrollTo({top:0,left:100,behavior:"smooth"})},[i.pathname,i.search,x,p]),c.useEffect(()=>{o()},[o]);const f=s=>{n({...t,min:s[0],max:s[1],page:1})},j=(t.page-1)*t.limit+1,b=Math.min(t.page*t.limit,l),v=s=>{n({...t,page:s})},C=s=>{const r=s.target.value;n({...t,search:r,page:1})},N=s=>{n({category:s||"All",page:1})},n=c.useCallback(s=>{const r=new URLSearchParams(i.search);Object.entries(s).forEach(([h,d])=>{d!=null&&d!==""?r.set(h,d.toString()):r.delete(h)}),g({search:r.toString()},{replace:!0})},[i.search,g]);return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"CCBM Shop | Boutique",description:"Découvrez les meilleures offres sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité.",keywords:"électroménager, boutique en ligne d'électroménager, CCBM Shop, ccbme, appareils électroménagers à prix réduits"}),e.jsx(F,{children:e.jsx("div",{className:"products-page-wrapper w-full",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsx(y,{}),e.jsxs("div",{className:"w-full lg:flex lg:space-x-[30px]",children:[e.jsx("div",{className:"lg:w-[270px]",children:e.jsx(E,{volume:[t.min,t.max],volumeHandler:f,handleCategoryChange:N})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"products-sorting w-full bg-white flex flex-col md:flex-row justify-between p-[30px] mb-[40px]",children:[e.jsxs("p",{className:"font-400 text-[13px]",children:[e.jsx("span",{className:"text-qgray",children:"Affichage"})," ",l>0?`${j}–${b} sur ${l} résultats`:"0 résultat"]}),e.jsx("input",{type:"search",placeholder:"Rechercher des produits",value:t.search,onChange:C,className:"px-3 py-2 border border-gray-300 rounded-md"})]}),m?e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx(L,{className:"animate-spin"})," Chargement"]}):a.length===0?e.jsx("div",{className:"flex justify-center items-center",children:"Aucun produit trouvé"}):e.jsx("div",{className:"grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]",children:a.map(s=>e.jsx(S,{datas:s},s.id))}),e.jsx(B,{currentPage:t.page,totalPages:Math.ceil(l/t.limit),onPageChange:v})]})]})]})})})]})}export{T as default};
