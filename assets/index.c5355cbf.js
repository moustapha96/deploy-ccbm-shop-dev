import{C as k,j as e,f as E,b as q,c as T,B as b,i as _,k as F,m as M,l as D,L as A}from"./index.bdb91bf9.js";import{u as B,r,L as f}from"./vendor.ee8c1fef.js";import{D as z}from"./DataIteration.df12b4d2.js";import{P as I}from"./ProductContext.0ab2905d.js";import{E as O}from"./eye.4222e8b7.js";import{P as W}from"./Pagination.19337680.js";import"./chevron-left.9deb4cfe.js";function $({datas:s,type:j=3}){const c=B(),{addToWishlist:l,wishlist:n,addToPreorder:v,preorder:m,isProductInWishlist:d}=r.useContext(k),h=t=>{t.preventDefault(),l(s,1),console.log(n),b.success("Produit ajouté",{position:"top-center",autoClose:2e3})},x=t=>{t.preventDefault(),v(s,1),console.log("Ajout au preorder :",m),b.success("Produit ajouté",{position:"top-center",autoClose:2e3})},u=(t,i)=>{t.preventDefault(),c("/single-product/"+i.id,{state:{produit:i}})};return e.jsxs("div",{className:"product-card-one w-full h-full bg-white relative group overflow-hidden",style:{boxShadow:"0px 15px 64px 0px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"product-card-img w-full h-[300px]",style:{background:`url('data:image/png;base64,${s.image_256}') no-repeat center`},children:s.categ_id&&e.jsx("div",{className:"product-type absolute right-[14px] top-[17px]",children:e.jsx("span",{className:`text-[9px] font-700 leading-none py-[6px] px-3 uppercase text-white rounded-full tracking-wider ${s.categ_id==="popular"?"bg-[#19CC40]":"bg-qyellow"}`,children:s.categ_id})})}),e.jsxs("div",{className:"product-card-details px-[30px] pb-[30px] relative",children:[e.jsx(f,{onClick:t=>u(t,s),children:e.jsx("p",{className:"title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-bleu-logo",children:s.name})}),e.jsx("p",{className:"price",children:e.jsx("span",{className:"offer-price  text-qred font-500 text-[18px]",children:s.is_preorder?e.jsxs(e.Fragment,{children:[" ",e.jsx("br",{})," ",E(s.preorder_price)," ",e.jsx("br",{})]}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"h-12"})})})}),e.jsx("div",{className:"w-full left-0 flex flex-col gap-4 mt-3 items-center",children:s.is_preorder&&e.jsxs("button",{type:"button",onClick:x,className:"w-full h-20 flex items-center justify-center gap-2 red-btn ",children:[e.jsx("span",{children:e.jsx(q,{})}),e.jsx("span",{children:"Précommander"})]})})]}),e.jsxs("div",{className:"quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20  transition-all duration-300 ease-in-out",children:[e.jsx("span",{className:"w-10 h-10 flex justify-center items-center bg-primarygray rounded",children:e.jsx(f,{onClick:t=>u(t,s),className:"cursor-pointer hover:text-gray-500 hover:scale-150 duration-300",children:e.jsx(O,{})})}),e.jsx("span",{className:"w-10 h-10 flex justify-center items-center bg-primarygray rounded",children:e.jsx(T,{className:`${d(s)?"text-yellow-500":""} cursor-pointer hover:text-yellow-500 hover:scale-150 duration-300`,onClick:h})})]})]})}function X(){const{products:s,isLoadingProduct:j,searchContext:c,setSearchContext:l,productPrecommandeFilter:n,productPrecommande:v,setSelectedCategory:m}=r.useContext(I),[d,h]=r.useState(0),[x,u]=r.useState(6),[t,i]=r.useState([]);r.useState(!1),r.useState(!0);const[C,w]=r.useState(""),[y,H]=r.useState(!1),[N,P]=r.useState(1),g=6;r.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[]);const L=a=>{P(a);const p=(a-1)*g;h(p),u(p+g),window.scrollTo({top:0,left:100,behavior:"smooth"})};r.useEffect(()=>{i(n),l("")},[n]),r.useEffect(()=>{const a=c.toLowerCase();w(a);const p=n.filter(o=>o.name&&o.name.toLowerCase().includes(a.toLowerCase())||o.categ_id&&o.categ_id.toLowerCase().includes(a.toLowerCase())||o.description&&o.description.toLowerCase().includes(a.toLowerCase()));i(p)},[n,c]);const S=()=>{m("All"),w(""),l("")};return e.jsxs(e.Fragment,{children:[e.jsx(_,{title:"CCBM Shop | Précommande ",description:"Découvrez les meilleures offres sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité. Explorez nos produits allant des réfrigérateurs aux téléviseurs intelligents, et profitez de promotions exclusives !",keywords:"électroménager, boutique en ligne d'électroménager, CCBM Shop, ccbme, appareils électroménagers à prix réduits, smart TV, réfrigérateurs modernes, climatiseurs efficaces, promotions électroménager"}),e.jsx(F,{children:e.jsx("div",{className:"products-page-wrapper w-full",children:e.jsxs("div",{className:"container-x mx-auto justify-center",children:[e.jsx(M,{}),e.jsx("div",{className:"w-full lg:flex lg:space-x-[30px]",children:e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"flex justify-center  ",children:e.jsxs("p",{className:"mb-2 text-center bg-bleu-logo text-base md:text-xl  font-700 leading-snug py-[6px] px-3 uppercase rounded-full tracking-wider text-white animate-up-down  animate-up-down",children:["50% de réduction en précommande  ",e.jsx(f,{to:"/faq",className:"text-qyellow underline hover:text-white transition-colors duration-300",children:"en savoir plus"})]})}),y?e.jsxs(e.Fragment,{children:[" ",e.jsx("div",{className:"flex justify-center",children:e.jsx(D,{size:100,className:"mr-2 h-4 text-center w-4 animate-spin"})})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"products-sorting w-full bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mb-[40px]",children:[e.jsx("div",{children:e.jsxs("p",{className:"font-400 text-[13px]",children:[e.jsx("span",{className:"text-qgray",children:" Affichage"})," ",Math.max(0,d+1),"–",Math.min(x,t.length)," of"," ",t.length," résultats"]})}),e.jsx("div",{children:e.jsx("input",{type:"search",placeholder:"Rechercher des produits",value:C,onChange:a=>{l(a.target.value)},className:"w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})}),e.jsx("div",{className:"flex space-x-3 items-center",children:e.jsx("button",{className:" hover:text-bleu-500",onClick:S,children:"Tout"})})]}),j?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"flex justify-center items-center ",children:[e.jsx(A,{className:"animate-spin"})," ","Chargement"]})})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]",children:e.jsx(z,{datas:t,startLength:Math.max(0,d),endLength:Math.min(x,t.length),children:({datas:a})=>e.jsx("div",{"data-aos":"fade-up",children:e.jsx($,{datas:a})},a.id)})})}),e.jsx(W,{currentPage:N,totalPages:Math.ceil(t.length/g),onPageChange:L})]})]})})]})})})]})}export{X as default};
