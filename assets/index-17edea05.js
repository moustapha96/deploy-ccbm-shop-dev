import{u as A,j as e,i as O,k as I,v as V,L as g,f as r,w as R,T as $,p as H,m as G,B as u}from"./index-eb87e1bf.js";import{j as J,u as K,r as n}from"./vendor-ee8c1fef.js";import{P as d}from"./paimentService-dba30554.js";import{f as y}from"./date-format-d160e78b.js";import{P as Q}from"./precommandeService-5e8d0539.js";import{P as U}from"./PaydunyaModalService-69a8ee3b.js";function re(){const{id:p}=J(),{user:N}=A();K();const[s,v]=n.useState(null),[m,c]=n.useState(!1),[w,W]=n.useState(0),[_,X]=n.useState(null),[P,h]=n.useState(!1),[i,k]=n.useState(0),[f,j]=n.useState(""),[o,D]=n.useState(null),[F,E]=n.useState(!1);console.log(p),n.useEffect(()=>{let t=!0;return(async()=>{c(!0);try{const l=await Q.getPreCommandeById(N.id,p);if(t){v(l),console.log(l);const x=await d.getPaymentDetailsByIdOrder(l.id);D(x)}}catch(l){console.error("Erreur lors de la récupération des modèles",l)}finally{c(!1)}})(),()=>{t=!1}},[]),n.useEffect(()=>{if(s){const t=s.first_payment_state&&i<1e3||!s.first_payment_state&&i<s.first_payment_amount||m;E(t)}},[s,i,m]);const C=t=>{t&&window.open(t,"_blank","noopener,noreferrer")},q=async(t,a)=>{console.log(a);try{const l=await d.confirmInvoice(a.payment_token);if(l.response_code==="00"&&l.status==="completed"){const x=l.receipt_url;let T=l.customer.name,B=l.customer.email,L=l.customer.phone,z=!0;if(await d.updatePaymentDetails(a.id,l.status,x,T,B,L,z))try{await d.createPrecommandePaimentMontant(a.order_id,a.amount,a.payment_token)&&u.success("Paiement validé avec succès",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(b){console.log(b)}finally{c(!1)}}else u.error("Vérification du paiement echouée",{position:"top-center",autoClose:5e3})}catch(l){console.error("Erreur lors de la confirmation de l'invoice :",l.message)}finally{c(!1)}},M=async(t,a)=>{t.preventDefault(),a<1e3?u.warning("Le Montant doit être strictement supérieur à 1000 F CFA",{position:"top-center",autoClose:5e3}):h(!0),console.log(a,s.id)},S=async()=>{console.log(w,_)};return e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"CCBM Shop | Détails Précommande",description:"Découvrez les meilleures offres sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité. Explorez nos produits allant des réfrigérateurs aux téléviseurs intelligents, et profitez de promotions exclusives !",keywords:"électroménager, boutique en ligne d'électroménager, CCBM Shop, ccbme, appareils électroménagers à prix réduits, smart TV, réfrigérateurs modernes, climatiseurs efficaces, promotions électroménager"}),e.jsx(I,{childrenClasses:"pt-0 pb-0",children:e.jsxs("div",{className:"checkout-page-wrapper w-full bg-white pb-[60px]",children:[e.jsx("div",{className:"w-full mb-5",children:e.jsx(V,{title:"Détails Pré Commande",breadcrumb:[{name:"Accueil",path:"/"},{name:"Précommandes",path:"/profile#preorder"},{name:"Détails Précommande "}]})}),m&&e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:e.jsx(g,{size:60,className:"animate-spin"})}),s&&e.jsx("div",{className:"checkout-main-content w-full",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsxs("div",{className:"w-full sm:mb-10 mb-5",children:[e.jsxs("div",{className:"sm:flex sm:space-x-[18px] s",children:[e.jsx("div",{className:"sm:w-1/3 w-full mb-5 h-[70px]",children:e.jsx("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center",children:e.jsxs("span",{className:"text-[15px] font-medium",children:["N°Précommande ",e.jsx("span",{children:s.name})]})})}),e.jsx("div",{className:" sm:w-1/3  flex-1 h-[70px]",children:e.jsx("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center",children:e.jsxs("span",{className:"text-[15px] font-medium",children:["Paiement :"," ",s.advance_payment_status==="not_paid"&&e.jsx("span",{className:"text-red-500",children:"Non Payé"}),s.advance_payment_status==="paid"&&e.jsx("span",{className:"text-green-500",children:" Payé "}),s.advance_payment_status==="partial"&&e.jsxs("span",{className:"text-yellow-500",children:[" ","Partiellement Payé"]})]})})}),e.jsx("div",{className:"sm:w-1/3 flex-1 h-[70px]",children:e.jsx("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center",children:e.jsxs("span",{className:"text-[15px] font-medium",children:["Statut :"," ",s.state=="sale"&&e.jsx("span",{className:"text-green-500",children:" Validée "}),s.state=="to_delivered"&&e.jsx("span",{className:"text-yellow-500",children:" En cours de livraison "}),s.state=="delivered"&&e.jsx("span",{className:"text-green-600",children:" Livrée "}),s.state!="delivered"&&s.state!="sale"&&s.state!="to_delivered"&&e.jsx("span",{className:"text-gray-500",children:" Non validé "})]})})})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:space-x-[18px] space-y-5 sm:space-y-0 mb-5",children:[e.jsx("div",{className:"w-full sm:w-1/2 h-auto sm:h-[70px]",children:e.jsxs("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex flex-col sm:flex-row justify-center items-center p-3 sm:p-0",children:[e.jsx("strong",{children:" Date Précommande "}),e.jsx("div",{className:"flex flex-col sm:flex-row items-center mt-2 sm:mt-0 sm:ml-2",children:e.jsx("span",{className:"mt-1 sm:mt-0 sm:ml-2 capitalize",children:y(s.date_order)})})]})}),e.jsx("div",{className:"w-full sm:w-1/2 h-auto sm:h-[70px]",children:e.jsxs("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex flex-col sm:flex-row justify-center items-center p-3 sm:p-0",children:[e.jsx("strong",{children:"Date de livraison"}),e.jsx("div",{className:"flex flex-col sm:flex-row items-center mt-2 sm:mt-0 sm:ml-2",children:e.jsx("span",{className:"mt-1 sm:mt-0 sm:ml-2 capitalize",children:y(s.commitment_date)})})]})})]}),e.jsxs("div",{className:"sm:flex sm:space-x-[18px] s",children:[e.jsx("div",{className:"sm:w-1/2 w-full mb-5 h-[70px]",children:e.jsxs("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex flex-col sm:flex-row justify-center items-center p-3 sm:p-0",children:[e.jsx("strong",{children:"  Total Payé   "}),e.jsx("div",{className:"flex flex-col sm:flex-row items-center mt-2 sm:mt-0 sm:ml-2",children:e.jsx("span",{className:"mt-1 sm:mt-0 sm:ml-2 capitalize",children:r(s.amount_total-s.amount_residual)})})]})}),e.jsx("div",{className:"flex-1 h-[70px]",children:e.jsxs("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex flex-col sm:flex-row justify-center items-center p-3 sm:p-0",children:[e.jsx("strong",{children:"     Total Restant   "}),e.jsx("div",{className:"flex flex-col sm:flex-row items-center mt-2 sm:mt-0 sm:ml-2",children:e.jsx("span",{className:"mt-1 sm:mt-0 sm:ml-2 capitalize",children:r(s.amount_residual)})})]})})]}),o&&o.length>0&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl text-qblack font-medium mb-5 text-center",children:"Récapitulatif Paiement"}),e.jsxs("div",{className:"w-full px-4 sm:px-10 py-6 sm:py-[30px] border border-[#EDEDED] rounded-lg",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-sm sm:text-base font-medium text-qblack uppercase mb-2",children:"Détails Paiements"}),e.jsx("div",{className:"w-full h-[1px] bg-[#EDEDED]"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full bg-white",children:[e.jsx("thead",{className:"hidden sm:table-header-group",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Prénom & Nom"}),e.jsx("th",{className:"px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Téléphone"}),e.jsx("th",{className:"px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Email"}),e.jsx("th",{className:"px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Montant Payé"}),e.jsx("th",{className:"px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Facture"})]})}),e.jsx("tbody",{children:o.map((t,a)=>t.payment_state==="completed"&&e.jsxs("tr",{className:"sm:bg-white flex flex-col sm:table-row mb-6 sm:mb-0",children:[e.jsx("td",{className:"px-4 py-3 sm:border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between sm:table-cell",children:[e.jsx("span",{className:"sm:hidden font-medium",children:"Prénom & Nom:"}),e.jsx("span",{className:"text-sm leading-5 text-gray-900",children:t.customer_name})]})}),e.jsx("td",{className:"px-4 py-3 sm:border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between sm:table-cell",children:[e.jsx("span",{className:"sm:hidden font-medium",children:"Téléphone:"}),e.jsx("span",{className:"text-sm leading-5 text-gray-900",children:t.customer_phone})]})}),e.jsx("td",{className:"px-4 py-3 sm:border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between sm:table-cell",children:[e.jsx("span",{className:"sm:hidden font-medium",children:"Email:"}),e.jsx("span",{className:"text-sm leading-5 text-gray-900",children:t.customer_email})]})}),e.jsx("td",{className:"px-4 py-3 sm:border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between sm:table-cell",children:[e.jsx("span",{className:"sm:hidden font-medium",children:"Montant Payé:"}),e.jsx("span",{className:"text-sm leading-5 text-gray-900",children:r(t.amount)})]})}),e.jsx("td",{className:"px-4 py-3 sm:border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between sm:table-cell",children:[e.jsx("span",{className:"sm:hidden font-medium",children:"Facture:"}),t.token_status?e.jsx("button",{className:"text-sm leading-5 text-blue-600 underline",onClick:()=>C(t.url_facture),children:"Ouvrir la facture"}):e.jsx("button",{className:"text-sm leading-5 text-blue-600 underline",onClick:l=>q(l,t),children:"Vérifier le paiement"})]})})]},a))})]})})]})]})})]}),e.jsxs("div",{className:"w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl text-qblack font-medium mb-5 text-center",children:"Récapitulatif de la commande"}),e.jsxs("div",{className:"w-full p-4 sm:p-6 border border-[#EDEDED] rounded-lg shadow-sm",children:[e.jsxs("div",{className:"sub-total mb-6",children:[e.jsxs("div",{className:" flex justify-between mb-5",children:[e.jsx("p",{className:"text-[13px] font-medium text-qblack uppercase",children:"Produit"}),e.jsx("p",{className:"text-[13px] font-medium text-qblack uppercase",children:"total"})]}),e.jsx("div",{className:"w-full h-[1px] bg-[#EDEDED]"})]}),e.jsx("div",{className:"product-list w-full mb-[30px]",children:e.jsx("ul",{className:"flex flex-col space-y-5",children:s.order_lines.map((t,a)=>e.jsx(e.Fragment,{children:e.jsx("li",{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-[15px] text-qblack mb-2.5",children:[t.product_name,e.jsxs("sup",{className:"text-[13px] text-qgray ml-2 mt-2",children:["x ",t.product_uom_qty]})]}),e.jsx("p",{className:"text-[13px] text-qgray",children:t.description})]}),e.jsx("div",{children:e.jsx("span",{className:"text-[15px] text-qblack font-medium",children:r(t.price_total)})})]})},a)}))})}),e.jsx("div",{className:"w-full h-[1px] bg-[#EDEDED]"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"border-t pt-4 space-y-2",children:[{label:"Montant Total",value:r(s.amount_total)},{label:"Premier Tranche",value:r(s.first_payment_amount),date:s.first_payment_date,state:s.first_payment_state},{label:"Deuxieme Tranche",value:r(s.second_payment_amount),date:s.second_payment_date,state:s.second_payment_state},{label:"Troisieme Tranche",value:r(s.third_payment_amount),date:s.third_payment_date,state:s.third_payment_state}].map((t,a)=>e.jsxs("dl",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("dt",{className:"text-sm text-gray-500",children:t.label}),t.date&&e.jsx("dd",{className:`text-xs sm:text-sm font-medium ${t.state?"text-green-500":"text-red-500"}`,children:t.date}),e.jsx("dd",{className:`text-sm sm:text-base font-medium ${t.state?"text-green-500":t.date?"text-red-500":"text-gray-900"}`,children:t.value})]},a))}),e.jsxs("dl",{className:"flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700",children:[e.jsx("dt",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"Total à payer"}),e.jsx("dd",{className:"text-lg font-bold text-gray-900 dark:text-white",children:r(s.amount_total)})]}),s.amount_residual>=0&&e.jsxs("dl",{className:"flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700",children:[e.jsx("dt",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"Total Payé"}),e.jsx("dd",{className:"text-lg font-bold text-green-500 dark:text-white",children:r(s.amount_total-s.amount_residual)})]}),s.amount_residual>=0&&e.jsxs("dl",{className:"flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700",children:[e.jsx("dt",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"Total Restant"}),e.jsx("dd",{className:"text-lg font-bold text-gray-900 dark:text-white",children:r(s.amount_residual)})]})]}),e.jsxs("div",{className:"w-full",children:[(s.advance_payment_status==="not_paid"||s.advance_payment_status==="partial")&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"input-item mb-5",children:[e.jsx("div",{className:"mb-2 inline-block",children:e.jsx(R,{htmlFor:"montant",value:"Montant à payer"})}),e.jsx($,{id:"montant",placeholder:"1000",label:"Montant*",name:"montantAPayer",type:"number",value:i,max:s.amount_residual,min:s.first_payment_state?1e3:s.first_payment_amount,onChange:t=>{const a=t.target.value;a<=s.amount_residual&&k(a),!s.first_payment_state&&a<s.first_payment_amount?j(`Le montant entré doit être supérieur ou égal à la première tranche de ${r(s.first_payment_amount)}.`):j("")},required:!0,className:"invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"}),f&&e.jsx("p",{className:"text-red-600",children:f})]}),s&&e.jsx(e.Fragment,{children:s.state!=="sale"&&s.state!=="draft"?e.jsx("div",{className:"flex justify-center items-center mt-2",children:e.jsx("span",{className:"text-lg font-medium text-red-500 dark:text-white",children:"La précommande est annulée, vous ne pouvez pas passer à la caisse."})}):e.jsxs(H,{type:"submit",onClick:t=>M(t,i),className:"rounded-lg px-5 py-2.5 font-medium w-full hover:bg-red-500 hover:text-white text-xl",disabled:F,children:[m&&e.jsx(G,{className:"mr-2 h-4 w-4 animate-spin"}),"Passer à la caisse (",r(i),")"]})}),P&&s&&e.jsx(U,{handlePay:S,totalAmount:i,onClose:()=>h(!1),order:s,idOrder:s.id})]}),s.advance_payment_status==="paid"&&e.jsx("div",{className:"flex justify-center items-center mt-2",children:e.jsx("span",{className:"text-lg font-medium text-green-500 dark:text-white",children:"Votre paiement est déjà réglé"})})]})]})]})]})}),!s&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex justify-center items-center ",children:[e.jsx(g,{className:"animate-spin"})," Précommande non trouvée"]})})]})})]})}export{re as default};
