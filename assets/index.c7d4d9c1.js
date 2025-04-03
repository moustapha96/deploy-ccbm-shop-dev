import{C as j,j as e,f,K as P,u as q,k as D,l as E,q as k,y as _,t as S,m as F,J as L,B as x}from"./index.2dba7a95.js";import{r as c,u as B,L as M}from"./vendor.af94f9e3.js";import{P as y}from"./precommandeService.d553ad0b.js";import{B as T}from"./BannerPub.21e6f9b7.js";import"./truck.f9bf194d.js";function V({produit:s}){const{updatePreorder:o}=c.useContext(j),n=t=>{t.preventDefault(),o(s,s.quantity+1)},m=t=>{t.preventDefault(),s.quantity>1&&o(s,s.quantity-1)};return e.jsx("div",{className:"w-[120px] h-[40px] px-[26px] flex items-center border border-qgray-border",children:e.jsxs("div",{className:"flex justify-between items-center w-full",children:[e.jsx("button",{onClick:m,type:"button",className:"text-base text-qgray",children:"-"}),e.jsx("span",{className:"text-qblack",children:s.quantity?s.quantity:0}),e.jsx("button",{onClick:n,type:"button",className:"text-base text-qgray",children:"+"})]})})}function z({className:s}){const{preorder:o,removeFromPreorder:n}=c.useContext(j);console.log(o);const m=(t,a)=>{t.preventDefault(),n(a)};return e.jsxs("div",{className:`w-full ${s||""}`,children:[e.jsx("div",{className:"relative w-full overflow-x-auto border border-[#EDEDED]",children:e.jsx("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase",children:[e.jsx("td",{className:"py-4 pl-10 block whitespace-nowrap min-w-[300px]",children:"product"}),e.jsx("td",{className:"py-4 whitespace-nowrap text-center",children:"price"}),e.jsx("td",{className:"py-4 whitespace-nowrap  text-center",children:"quantity"}),e.jsx("td",{className:"py-4 whitespace-nowrap  text-center",children:"total"}),e.jsx("td",{className:"py-4 whitespace-nowrap text-right w-[114px]"})]}),o.map((t,a)=>e.jsxs("tr",{className:"bg-white border-b hover:bg-gray-50",children:[e.jsx("td",{className:"pl-10  py-4  w-[380px]",children:e.jsxs("div",{className:"flex space-x-6 items-center",children:[e.jsx("div",{className:"w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]",children:e.jsx("img",{src:`${t.image_256?"data:image/png;base64,"+t.image_256:"https://readymadeui.com/images/coffee1.webp"}`,alt:"product",className:"w-full h-full object-contain"})}),e.jsx("div",{className:"flex-1 flex flex-col",children:e.jsx("p",{className:"font-medium text-[15px] text-qblack",children:t.name})})]})}),e.jsx("td",{className:"text-center py-4 px-2",children:e.jsx("div",{className:"flex space-x-1 items-center justify-center",children:e.jsxs("span",{className:"text-[15px] font-normal",children:[" ",f(t.preorder_price)]})})}),e.jsx("td",{className:" py-4",children:e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(V,{produit:t})})}),e.jsx("td",{className:"text-right py-4",children:e.jsx("div",{className:"flex space-x-1 items-center justify-center",children:e.jsxs("span",{className:"text-[15px] font-normal",children:[" ",f(t.preorder_price*t.quantity)]})})}),e.jsx("td",{className:"text-right py-4",children:e.jsx("div",{className:"flex space-x-1 items-center justify-center",children:e.jsx("button",{onClick:p=>m(p,t),className:"duration-200 hover:scale-150",children:e.jsx(P,{className:"hover:text-red-500"})})})})]},a))]})})}),e.jsx("div",{className:" mt-3 transition-all duration-300 ease-in-out bg-gray-200 text-[15px]  rounded-lg font-medium text-black  text-center py-2",children:"Livraison gratuite sur Dakar"})]})}function O({cart:s=!0}){const{getPreorderTotal:o,preorder:n,clearPreorder:m}=c.useContext(j),[t,a]=c.useState(!1),[p,u]=c.useState(!1),[g,w]=c.useState(null),b=B();c.useState(!1);const{user:h}=q(),[A,N]=c.useState(null),v=async i=>{if(i.preventDefault(),h){a(!0);const d={partner_id:h.id,type_sale:"preorder",state:"sale",commitment_date:new Date,order_lines:n.map(l=>({id:l.id,quantity:l.quantity,list_price:l.preorder_price}))};console.log(d);try{const l=await y.createPreCommande(d);console.log(l),x.success("Commande créé avec succés",{position:"top-center",autoClose:5e3}),a(!1),b(`/pre-commandes/${l.id}/détails`),console.log(l),m()}catch(l){a(!1),x.error("Commande non validé ",{position:"top-center",autoClose:5e3}),console.error("Erreur lors de la récupération des modèles",l)}}const r={partner_id:null,type_sale:"preorder",state:"sale",commitment_date:new Date,order_lines:n.map(d=>({id:d.id,quantity:d.quantity,list_price:d.preorder_price}))};w(r),a(!0),u(!0)},C=async i=>{console.log("Payment data: ",i),u(!1),a(!0);try{const r=await y.createCommandeWitoutPartner(i);console.log(r),x.success("Précommande créé avec succés",{position:"top-center",autoClose:5e3}),b("/boutique"),console.log(r),m(),a(!1)}catch(r){x.error("Précommande non validé ",{position:"top-center",autoClose:5e3}),console.error("Erreur lors de la récupération des modèles",r),a(!1)}};return c.useEffect(()=>{const i=async()=>{try{const r=await fetch("https://ipinfo.io/json?token=a7bca817c4bc37");if(!r.ok)throw new Error("Error fetching location data");const d=await r.json();N(d)}catch(r){console.error("Error:",r)}};n.length>0&&i()},[n]),e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"CCBM Shop | Panier Précommande ",description:"Découvrez les meilleures offres sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité. Explorez nos produits allant des réfrigérateurs aux téléviseurs intelligents, et profitez de promotions exclusives !",keywords:"électroménager, boutique en ligne d'électroménager, CCBM Shop, ccbme, appareils électroménagers à prix réduits, smart TV, réfrigérateurs modernes, climatiseurs efficaces, promotions électroménager"}),e.jsxs(E,{childrenClasses:s?"pt-0 pb-0":"",children:[s===!1?e.jsx("div",{className:"cart-page-wrapper w-full",children:e.jsx("div",{className:"container-x mx-auto",children:e.jsx(k,{paths:[{name:"Accueil",path:"/"},{name:"Validation panier Pré commande",path:"/pre-cart"}]})})}):e.jsxs("div",{className:"cart-page-wrapper w-full bg-white pb-[60px]",children:[e.jsx("div",{className:"w-full",children:e.jsx(_,{title:"Panier Précommande",breadcrumb:[{name:"Accueil",path:"/"},{name:"Validation panier Précommande",path:"/pre-cart"}]})}),e.jsx("div",{className:"w-full mt-[23px]",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsx(z,{className:"mb-[30px]"}),e.jsx("div",{className:"w-full sm:flex justify-between",children:e.jsx("div",{className:"flex space-x-2.5 items-center",children:e.jsx(M,{to:"/boutique",children:e.jsx("div",{className:"w-[220px] h-[50px] bg-[#F6F6F6] flex justify-center items-center",children:e.jsx("span",{className:"text-sm font-semibold",children:"Continuer vos achats"})})})})}),e.jsx("div",{className:"w-full mt-[30px] flex sm:justify-end",children:e.jsxs("div",{className:"sm:w-[370px] w-full border border-[#EDEDED] px-[30px] py-[26px]",children:[e.jsx("div",{className:"total mb-6",children:e.jsxs("div",{className:" flex justify-between",children:[e.jsx("p",{className:"text-[18px] font-medium text-qblack",children:"Total panier"}),e.jsxs("p",{className:"text-[18px] font-medium text-qred",children:[" ",f(o())," "]})]})}),o()!=0&&e.jsxs(S,{type:"submit",className:"hover:bg-red-500  w-full bg-bleu-logo",onClick:i=>v(i),disabled:t,children:[t&&e.jsx(F,{className:"mr-2 h-4 w-4 animate-spin"}),"Valider le Panier"]})]})})]})}),p&&!h&&e.jsx(e.Fragment,{children:e.jsx(L,{handleCreatePartner:C,order:n,data:g,onClose:()=>u(!1)})})]}),e.jsx(T,{})]})]})}export{O as default};
