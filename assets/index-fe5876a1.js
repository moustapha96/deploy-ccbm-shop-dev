import{P as h,j as e}from"./index-5c4a6332.js";import{r as o,h as N,u as v}from"./vendor-579ab53f.js";import{B as P}from"./BreadcrumbCom-82dd8dc4.js";import{P as C}from"./ProductCardStyleOne-beb056d9.js";import{d as y,L as S}from"./Layout-31fbe16d.js";import{d as F}from"./index-f9b598e8.js";import{S as L}from"./SEOHeader-4c290d43.js";import{P as q}from"./Pagination-2367f832.js";import"./eye-0741527e.js";import"./chevron-left-30421e20.js";function A({className:c,filterToggle:l,updateUrlParams:d,type:p=3}){const{filters:r,updateFilters:n}=o.useContext(h),a=s=>{n({...r,min:s[0],max:s[1],page:1}),d({...r,min:s[0],max:s[1],page:1})};return e.jsx("div",{className:`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] ${c||""} ${l?"block":"hidden lg:block"}`,children:e.jsxs("div",{className:"filter-subject-item pb-10 border-b border-qgray-border mt-10",children:[e.jsx("div",{className:"subject-title mb-[30px]",children:e.jsx("h1",{className:"text-black text-base font-500",children:"Échelle des prix"})}),e.jsx("div",{className:"price-range mb-5",children:e.jsx(F,{value:[r.min,r.max],onInput:a,min:5e3,max:5e6})}),e.jsxs("p",{className:"text-xs text-qblack font-400",children:["Prix (FCFA): ",r.min," - ",r.max]})]})})}function z(){const{currentProducts:c,totalProducts:l,isLoadingProduct:d,fetchProducts:p,updateFilters:r,resetFilters:n,filters:a}=o.useContext(h),s=N(),g=v();o.useEffect(()=>{n();const t=new URLSearchParams(s.search),i={page:Number.parseInt(t.get("page"))||1,category:t.get("category")||"All",search:t.get("search")||"",min:Number.parseInt(t.get("min"))||5e3,max:Number.parseInt(t.get("max"))||5e6,limit:9};r(i),window.scrollTo({top:0,left:100,behavior:"smooth"})},[s.pathname,s.search,n,r]),o.useEffect(()=>{p()},[p]);const f=(a.page-1)*a.limit+1,j=Math.min(a.page*a.limit,l),b=t=>{x({...a,page:t}),window.scrollTo({top:0,left:100,behavior:"smooth"})},w=t=>{x({category:t||"All",page:1}),window.scrollTo({top:0,left:100,behavior:"smooth"})},x=o.useCallback(t=>{const i=new URLSearchParams(s.search);Object.entries(t).forEach(([u,m])=>{m!=null&&m!==""?i.set(u,m.toString()):i.delete(u)}),g({search:i.toString()},{replace:!0})},[s.search,g]);return e.jsxs(e.Fragment,{children:[e.jsx(L,{title:"CCBM Shop | Boutique",description:"Découvrez les meilleures offres sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité.",keywords:"électroménager, boutique en ligne d'électroménager, CCBM Shop, ccbme, appareils électroménagers à prix réduits"}),e.jsx(y,{children:e.jsx("div",{className:"products-page-wrapper w-full",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsx(P,{}),e.jsxs("div",{className:"w-full lg:flex lg:space-x-[30px]",children:[e.jsx("div",{className:"lg:w-[270px]",children:e.jsx(A,{handleCategoryChange:w,updateUrlParams:x})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"products-sorting w-full bg-white flex flex-col md:flex-row justify-between p-[30px] mb-[40px]",children:e.jsxs("p",{className:"font-400 text-[13px]",children:[e.jsx("span",{className:"text-qgray",children:"Affichage"})," ",l>0?`${f}–${j} sur ${l} résultats`:"0 résultat"]})}),d?e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx(S,{className:"animate-spin"})," Chargement"]}):c.length===0?e.jsx("div",{className:"flex justify-center items-center",children:"Aucun produit trouvé"}):e.jsx("div",{className:"grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]",children:c.map(t=>e.jsx(C,{datas:t},t.id))}),e.jsx(q,{currentPage:a.page,totalPages:Math.ceil(l/a.limit),onPageChange:b})]})]})]})})})]})}export{z as default};
