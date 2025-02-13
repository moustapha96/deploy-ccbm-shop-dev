import{C as _,u as S,j as e,i as k,k as q,m as B,s as E,f as D,p as L,l as M,y as A,B as o,w as C}from"./index.f58b74ca.js";import{r,u as F,L as T}from"./vendor.ee8c1fef.js";import{P as z}from"./ProductsTable.d353ea04.js";import{B as V}from"./BannerPub.faff75b8.js";import"./truck.9f4a2c2d.js";function Y({cartt:x=!0}){const{cart:c,getCartTotal:u,clearCart:h}=r.useContext(_),{session:U,isAuthenticated:H,token:I,user:m,comapny:O,userContext:R,saveSession:W}=S(),[n,g]=r.useState(""),[f,a]=r.useState(!1),[b,$]=r.useState(!1),[v,d]=r.useState(!1),[N,y]=r.useState(null),j=F();r.useState(null),r.useState(!1);const p=t=>{console.log(t.target.value),a(!1),g(t.target.value)},w=async t=>{if(t.preventDefault(),n==""){o.dismiss(),o.error("Veuillez choisir un mode de paiement",{position:"top-center",autoClose:5e3}),a(!1);return}if(m){a(!0);const l={partner_id:m.id,type_sale:"order",payment_mode:n!=""?n:"domicile",state:"sale",commitment_date:new Date,order_lines:c.map(s=>({id:s.id,quantity:s.quantity,list_price:s.en_promo?s.promo_price:s.list_price}))};console.log(l);try{const s=await C.createCommande(l);console.log(s),o.success("Commande créé avec succés",{position:"top-center",autoClose:5e3}),a(!1),j(`/commandes/${s.id}/détails`),console.log(s),h()}catch(s){a(!1),o.error("Commande non validé ",{position:"top-center",autoClose:5e3}),console.error("Erreur lors de la récupération des modèles",s)}}const i={partner_id:null,type_sale:"order",payment_mode:n!=""?n:"online",state:"sale",commitment_date:new Date,order_lines:c.map(l=>({id:l.id,quantity:l.quantity,list_price:l.en_promo?l.promo_price:l.list_price}))};y(i),a(!0),d(!0)},P=async t=>{console.log("Payment data: ",t),d(!1),a(!0);try{const i=await C.createCommandeWitoutPartner(t);console.log(i),o.success("Commande créé avec succés",{position:"top-center",autoClose:5e3}),j("/boutique"),console.log(i),h(),a(!1)}catch(i){o.error("Commande non validé ",{position:"top-center",autoClose:5e3}),console.error("Erreur lors de la récupération des modèles",i),a(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"CCBM Shop | Panier Commande",description:"Découvrez les meilleures offres sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité. Explorez nos produits allant des réfrigérateurs aux téléviseurs intelligents, et profitez de promotions exclusives !",keywords:"électroménager, boutique en ligne d'électroménager, CCBM Shop, ccbme, appareils électroménagers à prix réduits, smart TV, réfrigérateurs modernes, climatiseurs efficaces, promotions électroménager"}),e.jsxs(q,{childrenClasses:x?"pt-0 pb-0":"",children:[x===!1?e.jsx("div",{className:"cart-page-wrapper w-full",children:e.jsx("div",{className:"container-x mx-auto",children:e.jsx(B,{paths:[{name:"Accueil",path:"/"},{name:"Panier Commandes",path:"/cart"}]})})}):e.jsxs("div",{className:"cart-page-wrapper w-full bg-white pb-[60px]",children:[e.jsx("div",{className:"w-full",children:e.jsx(E,{title:"Panier Commande",breadcrumb:[{name:"Accueil",path:"/"},{name:"Panier Commande",path:"/cart"}]})}),e.jsx("div",{className:"w-full mt-[23px]",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsx(z,{className:"mb-[30px]"}),e.jsx("div",{className:"w-full sm:flex justify-between",children:e.jsx("div",{className:"flex space-x-2.5 items-center",children:e.jsx(T,{to:"/boutique",children:e.jsx("div",{className:"w-[220px] h-[50px] bg-[#F6F6F6] flex justify-center items-center",children:e.jsx("span",{className:"text-sm font-semibold",children:"Continuer vos achats"})})})})}),e.jsx("div",{className:"w-full mt-[30px] flex sm:justify-end",children:e.jsxs("div",{className:"sm:w-[370px] w-full border border-[#EDEDED] px-[30px] py-[26px]",children:[e.jsx("span",{className:"text-[15px] font-medium text-qblack mb-[18px]  items-center block",children:n==""&&b&&e.jsx("span",{className:"text-red-500",children:" Choisir le mode de paiement "})}),e.jsxs("div",{className:"shipping mb-6",children:[e.jsx("span",{className:"text-[15px] font-medium text-qblack mb-[18px] block",children:"Paiement"}),e.jsxs("ul",{className:"flex flex-col space-y-1",children:[e.jsx("li",{children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex space-x-2.5 items-center",children:[e.jsx("div",{className:"input-radio",children:e.jsx("input",{type:"radio",name:"price",value:"domicile",className:"bg-bleu-logo",onChange:p})}),e.jsx("span",{className:"text-[14px] text-normal text-qblack",children:"A domicile"})]})})}),e.jsx("li",{children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex space-x-2.5 items-center",children:[e.jsx("div",{className:"input-radio",children:e.jsx("input",{type:"radio",name:"price",value:"online",className:"bg-bleu-logo",onChange:p})}),e.jsx("span",{className:"text-[14px] text-normal text-qblack ",children:"En ligne"})]})})}),e.jsx("li",{children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex space-x-2.5 items-center",children:[e.jsx("div",{className:"input-radio",children:e.jsx("input",{type:"radio",name:"price",value:"echelonne",className:"bg-bleu-logo",onChange:p})}),e.jsx("span",{className:"text-[14px] text-normal text-qblack ",children:"Échelonné"})]})})})]})]}),e.jsx("div",{className:"total mb-6",children:e.jsxs("div",{className:" flex justify-between",children:[e.jsx("p",{className:"text-[18px] font-medium text-qblack",children:"Total"}),e.jsxs("p",{className:"text-[18px] font-medium text-qred",children:[" ",D(u())]})]})}),u()!=0&&e.jsxs(L,{type:"submit",className:"hover:bg-red-500  w-full bg-bleu-logo ",onClick:t=>w(t),disabled:f,children:[f&&e.jsx(M,{className:"mr-2 h-4 w-4 animate-spin"}),"Valider le Panier"]})]})})]})}),v&&!m&&e.jsx(e.Fragment,{children:e.jsx(A,{handleCreatePartner:P,order:c,data:N,onClose:()=>d(!1)})})]}),e.jsx(V,{})]})]})}export{Y as default};
