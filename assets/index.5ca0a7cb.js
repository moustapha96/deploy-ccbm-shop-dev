import{P as h,j as e,i as N,k as P,m as v,L as C}from"./index.f58b74ca.js";import{r as o,b as y,u as S}from"./vendor.ee8c1fef.js";import{P as F}from"./ProductCardStyleOne.133ed9b6.js";import{d as L}from"./index.1718074f.js";import{P as k}from"./Pagination.449da2c0.js";import"./eye.a9839252.js";import"./chevron-left.c67ec7a4.js";function q({className:c,filterToggle:l,updateUrlParams:m,type:x=3}){const{filters:a,updateFilters:n}=o.useContext(h),r=t=>{console.log("Valeurs du slider :",t),n({...a,min:t[0],max:t[1],page:1}),m({...a,min:t[0],max:t[1],page:1})};return e.jsx("div",{className:`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] ${c||""} ${l?"block":"hidden lg:block"}`,children:e.jsxs("div",{className:"filter-subject-item pb-10 border-b border-qgray-border mt-10",children:[e.jsx("div",{className:"subject-title mb-[30px]",children:e.jsx("h1",{className:"text-black text-base font-500",children:"Échelle des prix"})}),e.jsx("div",{className:"price-range mb-5",children:e.jsx(L,{value:[a.min,a.max],onInput:r,min:5e3,max:5e6})}),e.jsxs("p",{className:"text-xs text-qblack font-400",children:["Prix (FCFA): ",a.min," - ",a.max]})]})})}function R(){const{currentProducts:c,totalProducts:l,isLoadingProduct:m,fetchProducts:x,updateFilters:a,resetFilters:n,filters:r}=o.useContext(h),t=y(),g=S();o.useEffect(()=>{n();const s=new URLSearchParams(t.search),i={page:Number.parseInt(s.get("page"))||1,category:s.get("category")||"All",search:s.get("search")||"",min:Number.parseInt(s.get("min"))||5e3,max:Number.parseInt(s.get("max"))||5e6,limit:9};a(i),window.scrollTo({top:0,left:100,behavior:"smooth"})},[t.pathname,t.search,n,a]),o.useEffect(()=>{x()},[x]);const f=(r.page-1)*r.limit+1,j=Math.min(r.page*r.limit,l),b=s=>{p({...r,page:s}),window.scrollTo({top:0,left:100,behavior:"smooth"})},w=s=>{p({category:s||"All",page:1}),window.scrollTo({top:0,left:100,behavior:"smooth"})},p=o.useCallback(s=>{const i=new URLSearchParams(t.search);Object.entries(s).forEach(([u,d])=>{d!=null&&d!==""?i.set(u,d.toString()):i.delete(u)}),g({search:i.toString()},{replace:!0})},[t.search,g]);return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"CCBM Shop | Boutique",description:"Découvrez les meilleures offres sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité.",keywords:"électroménager, boutique en ligne d'électroménager, CCBM Shop, ccbme, appareils électroménagers à prix réduits"}),e.jsx(P,{children:e.jsx("div",{className:"products-page-wrapper w-full",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsx(v,{}),e.jsxs("div",{className:"w-full lg:flex lg:space-x-[30px]",children:[e.jsx("div",{className:"lg:w-[270px]",children:e.jsx(q,{handleCategoryChange:w,updateUrlParams:p})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"products-sorting w-full bg-white flex flex-col md:flex-row justify-between p-[30px] mb-[40px]",children:e.jsxs("p",{className:"font-400 text-[13px]",children:[e.jsx("span",{className:"text-qgray",children:"Affichage"})," ",l>0?`${f}–${j} sur ${l} résultats`:"0 résultat"]})}),m?e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx(C,{className:"animate-spin"})," Chargement"]}):c.length===0?e.jsx("div",{className:"flex justify-center items-center",children:"Aucun produit trouvé"}):e.jsx("div",{className:"grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]",children:c.map(s=>e.jsx(F,{datas:s},s.id))}),e.jsx(k,{currentPage:r.page,totalPages:Math.ceil(l/r.limit),onPageChange:b})]})]})]})})})]})}export{R as default};
