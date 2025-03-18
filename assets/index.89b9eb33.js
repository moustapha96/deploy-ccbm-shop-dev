import{u as S,j as e,l as $,q as L,y as T,L as F,f as B,v as N,B as g}from"./index.bc2eb257.js";import{u as I,b as R,r as i,L as U}from"./vendor.af94f9e3.js";import{P as x}from"./paimentService.e0fd522d.js";function H({cart:p=!0}){S();const l=I(),u=R();i.useState(null);const[w,d]=i.useState(!1),[k,V]=i.useState(null),[_,A]=i.useState(null),[P,O]=i.useState(null),[h,q]=i.useState(null),[s,f]=i.useState(null),E=()=>{s&&s.receipt_url&&window.open(s.receipt_url,"_blank","noopener,noreferrer")};i.useEffect(()=>{const r=async m=>{try{const t=await x.getPaymentDetailsByToken(m);console.log(t),console.log("response details payment "),t&&t.payment_state==="completed"&&t.token_status==!0&&(t.order_type==="order"?(console.log("arrive commande"),l(`/commandes/${t.order_id}/détails`)):t.order_type==="preorder"?(console.log("arrive precommande"),l(`/pre-commandes/${t.order_id}/détails`)):t.order_type=="creditorder"&&(console.log("arrive creditorder"),l(`/credit-commandes/${t.order_id}/détails`)))}catch(t){console.log(t)}finally{d(!1)}},o=new URLSearchParams(u.search).get("token");o&&r(o)},[u.search]),i.useEffect(()=>{const r=async m=>{d(!0);const t=setTimeout(async()=>{try{const a=await x.confirmInvoice(m);if(f(a),a.response_code==="00"&&a.status==="completed"){let n=a.receipt_url,j=a.customer.name,y=a.customer.email,b=a.customer.phone,v=a.status;console.log(v,n,j,y,b);const c=await x.putPaymentDetailByToken(m,n,j,y,b,v);console.log(c),c&&(c.type_sale==="order"?l(`/commandes/${c.id}/détails`):c.type_sale==="preorder"?l(`/pre-commandes/${c.id}/détails`):c.type_sale=="creditorder"&&l(`/credit-commandes/${c.id}/détails`))}else if(a.status==="cancelled"){g.error("Le payment a été annule",{position:"top-right",autoClose:5e3});const n=await x.putPaymentDetailByToken(m);console.log(n),n&&(n.order_type==="order"?l(`/commandes/${k.id}/détails`):n.order_type==="preorder"?l(`/pre-commandes/${_.id}/détails`):n.order_type==="creditorder"&&l(`/credit-commandes/${P.id}/détails`))}d(!1)}catch(a){console.log(a),g.error(a,{position:"top-right",autoClose:5e3}),console.error("Erreur lors de l'enregistrement des détails du paiement :",a),d(!1)}},2e3);return()=>clearTimeout(t)},o=new URLSearchParams(u.search).get("token");o&&(q(o),r(o))},[u.search]);const D=async()=>{try{const r=await x.confirmInvoice(h);f(r),r.response_code==="00"&&r.status==="completed"&&(s.order_type=="order"?l(`/commandes/${s.order_id}/détails`):s.order_type=="creditorder"?l(`/credit-commandes/${s.order_id}/détails`):l(`/pre-commandes/${s.order_id}/détails`)),console.log(r)}catch(r){console.error("Erreur lors de la confirmation de l'invoice :",r.message)}finally{d(!1)}};return e.jsx($,{childrenClasses:p?"pt-0 pb-0":"",children:p===!1?e.jsx("div",{className:"cart-page-wrapper w-full",children:e.jsx("div",{className:"container-x mx-auto",children:e.jsx(L,{paths:[{name:"Accueil",path:"/"},{name:"Tableau de bord",path:"/profile"},{name:"Validation Payment",path:"/payment-state"}]})})}):e.jsxs("div",{className:"cart-page-wrapper w-full bg-white pb-[60px]",children:[e.jsx("div",{className:"w-full",children:e.jsx(T,{title:"Statut Paiment",breadcrumb:[{name:"Accueil",path:"/"},{name:"Tableau de bord",path:"/profile"},{name:"Validation Payment",path:"/payment-state"}]})}),w&&e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:e.jsx(F,{size:50,className:"animate-spin"})}),s&&e.jsx("div",{className:"w-full mt-[23px]",children:e.jsx("div",{className:"container-x mx-auto",children:s&&s.customer&&e.jsx("div",{className:"checkout-main-content w-full",children:e.jsx("div",{className:"container-x mx-auto",children:s&&s.customer&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full lg:flex lg:space-x-[30px]",children:e.jsxs("div",{className:"flex-1",children:[e.jsx("h1",{className:"sm:text-2xl text-xl text-qblack font-medium mb-5",children:"Récapitulatif paiement"}),e.jsxs("div",{className:"w-full px-10 py-[30px] border border-[#EDEDED]",children:[e.jsxs("div",{className:"sub-total mb-6",children:[e.jsx("div",{className:" flex justify-between mb-5",children:e.jsx("p",{className:"text-[13px] font-medium text-qblack uppercase",children:"Détails Payment"})}),e.jsx("div",{className:"w-full h-[1px] bg-[#EDEDED]"})]}),e.jsx("div",{className:"product-list w-full mb-[30px]",children:e.jsx("ul",{className:"flex flex-col space-y-5",children:s&&s.customer&&e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsx("h4",{className:"text-[15px] text-qblack mb-2.5",children:"Prenom & Nom"})}),e.jsx("div",{children:e.jsxs("span",{className:"text-[15px] text-qblack font-medium",children:[" ",s.customer.name," "]})})]})}),e.jsx("li",{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsx("h4",{className:"text-[15px] text-qblack mb-2.5",children:"Téléphone"})}),e.jsx("div",{children:e.jsxs("span",{className:"text-[15px] text-qblack font-medium",children:[" ",s.customer.phone," "]})})]})}),e.jsx("li",{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsx("h4",{className:"text-[15px] text-qblack mb-2.5",children:"Email"})}),e.jsx("div",{children:e.jsxs("span",{className:"text-[15px] text-qblack font-medium",children:[" ",s.customer.email," "]})})]})}),e.jsx("li",{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsx("h4",{className:"text-[15px] text-qblack mb-2.5",children:"Montant Payé"})}),e.jsx("div",{children:e.jsxs("span",{className:"text-[15px] text-qblack font-medium",children:[" ",B(s.invoice.total_amount)," "]})})]})}),e.jsx("li",{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsx("h4",{className:"text-[15px] text-qblack mb-2.5",children:"Facture"})}),e.jsx("div",{children:e.jsx("button",{className:"text-[15px] text-qblack font-medium underline",onClick:E,children:"Ouvrir la facture"})})]})})]})})}),e.jsx("div",{className:"w-full h-[1px] bg-[#EDEDED]"})]})]})})})})})})}),!h&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"checkout-main-content w-full",children:e.jsx("div",{className:"container-x mx-auto",children:e.jsx("div",{className:"w-full sm:mb-10 mb-5",children:e.jsx("div",{className:"sm:flex sm:space-x-[18px] s",children:e.jsxs("div",{className:"flex-1 w-full mb-5 h-[70px]",children:[e.jsx("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center",children:e.jsx("span",{className:"text-[15px] font-medium",children:e.jsx("span",{children:"Token Non valide"})})}),e.jsx("br",{}),e.jsx("div",{className:"w-full h-full  text-qblack flex justify-center items-center",children:e.jsx("span",{className:"text-[15px] font-medium   ",children:e.jsxs(N,{className:"rounded-lg px-5 py-2.5 font-medium w-full hover:bg-red-500 hover:text-white text-xl",children:[" ",e.jsx(U,{to:"/boutique",children:" Retour à la boutique "})," "]})})}),e.jsx("br",{}),e.jsx("div",{className:"w-full h-full  text-qblack flex justify-center items-center",children:e.jsx("span",{className:"text-[15px] font-medium   ",children:e.jsx(N,{color:"yellow",onClick:D,className:"rounded-lg px-5 py-2.5 font-medium w-full hover:bg-red-500 hover:text-black text-xl",children:" Vérifier le payment "})})})]})})})})})})]})})}export{H as default};
