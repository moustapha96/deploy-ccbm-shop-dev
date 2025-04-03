import{u as M,j as e,k as S,l as A,y as L,L as g,f as l,z as B,T as z,t as V,m as O,B as i,A as b,D as I}from"./index.2dba7a95.js";import{j as R,r}from"./vendor.af94f9e3.js";import{g as H}from"./creditCommandeService.b204ffba.js";import{P as d}from"./paimentService.9794dcf6.js";import{f as N}from"./date-format.d160e78b.js";import{P as $}from"./PaydunyaModalService.fd5ab123.js";import{T as Q}from"./truck.f9bf194d.js";function Z(){const{id:u}=R(),{user:p}=M(),[t,v]=r.useState(null),[m,w]=r.useState([]),[c,_]=r.useState(!0),[n,C]=r.useState(0),[F,x]=r.useState(!1),[h,f]=r.useState(""),[k,P]=r.useState(!1);r.useEffect(()=>{(async()=>{try{const a=await H(p.id,u);v(a);const o=await d.getPaymentDetailsByIdOrder(a.id);w(o||[])}catch(a){console.error("Erreur lors de la récupération de la commande",a),i.error("Impossible de charger les détails de la commande")}finally{_(!1)}})()},[u,p.id]),r.useEffect(()=>{if(t){const s=t.first_payment_state&&n<1e3||!t.first_payment_state&&n<t.first_payment_amount||c;P(s)}},[t,n,c]);const D=s=>{s&&window.open(s,"_blank","noopener,noreferrer")},E=async s=>{try{const a=await d.confirmInvoice(s.payment_token);a.response_code==="00"&&a.status==="completed"?(await d.updatePaymentDetails(s.id,a.status,a.receipt_url,a.customer.name,a.customer.email,a.customer.phone,!0),await d.createorderPaimentMontant(s.order_id,s.amount,s.payment_token),i.success("Paiement validé avec succès")):i.error("Vérification du paiement échouée")}catch(a){console.error("Erreur lors de la confirmation de l'invoice :",a),i.error("Erreur lors de la vérification du paiement")}},q=async(s,a)=>{s.preventDefault(),a<1e3?i.warning("Le Montant doit être strictement supérieur à 1000 F CFA",{position:"top-center",autoClose:5e3}):(x(!0),console.log("show modal")),console.log(a,t.id)},j=s=>{switch(s.toLowerCase()){case"pending":return"En cours de validation";case"validated":return"Validé";case"rejected":return"Rejeté";default:return"En cours"}},y=s=>{switch(s.toLowerCase()){case"pending":return e.jsx(b,{className:"w-5 h-5 text-yellow-500"});case"validated":return e.jsx(I,{className:"w-5 h-5 text-green-500"});case"rejected":return e.jsx(b,{className:"w-5 h-5 text-red-500"});default:return e.jsx(Q,{className:"w-5 h-5 text-blue-500"})}},T=()=>{if(n<1e3){i.warning("Le montant doit être supérieur à 1000 F CFA");return}x(!0)};return c?e.jsx("div",{className:"flex justify-center items-center h-screen",children:"Chargement..."}):t?e.jsxs(e.Fragment,{children:[e.jsx(S,{title:"CCBM Shop | Détails Commande à Crédit",description:"Découvrez les meilleures offres sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité. Explorez nos produits allant des réfrigérateurs aux téléviseurs intelligents, et profitez de promotions exclusives !",keywords:"électroménager, boutique en ligne d'électroménager, CCBM Shop, ccbme, appareils électroménagers à prix réduits, smart TV, réfrigérateurs modernes, climatiseurs efficaces, promotions électroménager"}),e.jsx(A,{childrenClasses:"pt-0 pb-0",children:e.jsxs("div",{className:"checkout-page-wrapper w-full bg-white pb-[60px]",children:[e.jsx("div",{className:"w-full mb-5",children:e.jsx(L,{title:"Détails Commande à Crédit",breadcrumb:[{name:"Accueil",path:"/"},{name:"Commande à Crédits",path:"/profile#commandes-a-credit"},{name:"Détails Commande à crédit "}]})}),c&&e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:e.jsx(g,{size:60,className:"animate-spin"})}),t&&e.jsx("div",{className:"checkout-main-content w-full",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsxs("div",{className:"w-full sm:mb-10 mb-5",children:[e.jsxs("div",{className:"sm:flex sm:space-x-[18px] s",children:[e.jsx("div",{className:"sm:w-1/3 w-full mb-5 h-[70px]",children:e.jsx("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center",children:e.jsxs("span",{className:"text-[15px] font-medium",children:["N°Commande à Crédit ",e.jsx("span",{children:t.name})]})})}),e.jsx("div",{className:" sm:w-1/3  flex-1 h-[70px]",children:e.jsx("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center",children:e.jsxs("span",{className:"text-[15px] font-medium",children:["Paiement :"," ",t.advance_payment_status==="not_paid"&&e.jsx("span",{className:"text-red-500",children:"Non Payé"}),t.advance_payment_status==="paid"&&e.jsx("span",{className:"text-green-500",children:" Payé "}),t.advance_payment_status==="partial"&&e.jsxs("span",{className:"text-yellow-500",children:[" ","Partiellement Payé"]})]})})}),e.jsx("div",{className:"sm:w-1/3 flex-1 h-[70px]",children:e.jsxs("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex flex-col sm:flex-row justify-center items-center p-3 sm:p-0",children:[e.jsx("strong",{children:" Statut : "})," ",e.jsx("div",{className:"flex flex-col sm:flex-row items-center mt-2 sm:mt-0 sm:ml-2",children:e.jsxs("span",{className:"mt-1 sm:mt-0 sm:ml-2 capitalize",children:[t.state=="sale"&&e.jsx("span",{className:"text-green-500",children:"Validé"}),t.state=="draft"&&e.jsx("span",{className:"text-yellow-500",children:"En cours de traitement"}),t.state=="cancel"&&e.jsx("span",{className:"text-yellow-500",children:"Annulée"}),t.state=="delivered"&&e.jsx("span",{className:"text-green-600",children:"Livrée"}),t.state=="to_delivered"&&e.jsx("span",{className:"text-yellow-500",children:"En cours de livraison"}),t.state=="validation"&&e.jsx("span",{className:"text-yellow-500",children:"En cours de validation"})]})})]})})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:space-x-[18px] space-y-5 sm:space-y-0 mb-5",children:[e.jsx("div",{className:"w-full sm:w-1/2 h-auto sm:h-[70px]",children:e.jsxs("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex flex-col sm:flex-row justify-center items-center p-3 sm:p-0",children:[e.jsx("strong",{children:"Validation RH"}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-center mt-2 sm:mt-0 sm:ml-2",children:[e.jsx("span",{className:"hidden sm:inline-block",children:y(t.validation_rh_state)}),e.jsx("span",{className:"mt-1 sm:mt-0 sm:ml-2 capitalize",children:j(t.validation_rh_state)})]})]})}),e.jsx("div",{className:"w-full sm:w-1/2 h-auto sm:h-[70px]",children:e.jsxs("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex flex-col sm:flex-row justify-center items-center p-3 sm:p-0",children:[e.jsx("strong",{children:"Approbation CCBM"}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-center mt-2 sm:mt-0 sm:ml-2",children:[e.jsx("span",{className:"hidden sm:inline-block",children:y(t.validation_admin_state)}),e.jsx("span",{className:"mt-1 sm:mt-0 sm:ml-2 capitalize",children:j(t.validation_admin_state)})]})]})})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:space-x-[18px] space-y-5 sm:space-y-0 mb-5",children:[e.jsx("div",{className:"w-full sm:w-1/2 h-auto sm:h-[70px]",children:e.jsxs("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex flex-col sm:flex-row justify-center items-center p-3 sm:p-0",children:[e.jsx("strong",{children:" Date commande "}),e.jsx("div",{className:"flex flex-col sm:flex-row items-center mt-2 sm:mt-0 sm:ml-2",children:e.jsx("span",{className:"mt-1 sm:mt-0 sm:ml-2 capitalize",children:N(t.date_order)})})]})}),e.jsx("div",{className:"w-full sm:w-1/2 h-auto sm:h-[70px]",children:e.jsxs("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex flex-col sm:flex-row justify-center items-center p-3 sm:p-0",children:[e.jsx("strong",{children:"Date de livraison"}),e.jsx("div",{className:"flex flex-col sm:flex-row items-center mt-2 sm:mt-0 sm:ml-2",children:e.jsx("span",{className:"mt-1 sm:mt-0 sm:ml-2 capitalize",children:N(t.commitment_date)})})]})})]}),e.jsxs("div",{className:"sm:flex sm:space-x-[18px] s",children:[e.jsx("div",{className:"sm:w-1/2 w-full mb-5 h-[70px]",children:e.jsxs("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex flex-col sm:flex-row justify-center items-center p-3 sm:p-0",children:[e.jsx("strong",{children:"  Total Payé  "}),e.jsx("div",{className:"flex flex-col sm:flex-row items-center mt-2 sm:mt-0 sm:ml-2",children:e.jsx("span",{className:"mt-1 sm:mt-0 sm:ml-2 capitalize",children:l(t.amount_total-t.amount_residual)})})]})}),e.jsx("div",{className:"flex-1 h-[70px]",children:e.jsxs("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex flex-col sm:flex-row justify-center items-center p-3 sm:p-0",children:[e.jsx("strong",{children:" Total Restant   "}),e.jsx("div",{className:"flex flex-col sm:flex-row items-center mt-2 sm:mt-0 sm:ml-2",children:e.jsx("span",{className:"mt-1 sm:mt-0 sm:ml-2 capitalize",children:l(t.amount_residual)})})]})})]}),m&&m.length>0&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full lg:flex lg:space-x-[30px]",children:e.jsxs("div",{className:"flex-1",children:[e.jsx("h1",{className:"sm:text-2xl text-xl text-qblack font-medium mb-5",children:"Récapitulatif paiement"}),e.jsxs("div",{className:"w-full px-10 py-[30px] border border-[#EDEDED]",children:[e.jsxs("div",{className:"sub-total mb-6",children:[e.jsx("div",{className:"flex justify-between mb-5",children:e.jsx("p",{className:"text-[13px] font-medium text-qblack uppercase",children:"Détails Payments"})}),e.jsx("div",{className:"w-full h-[1px] bg-[#EDEDED]"})]}),e.jsx("div",{className:"product-list w-full mb-[30px]",children:e.jsxs("table",{className:"min-w-full bg-white",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Prénom & Nom"}),e.jsx("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Téléphone"}),e.jsx("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Email"}),e.jsx("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Montant Payé"}),e.jsx("th",{className:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider",children:"Facture"})]})}),e.jsx("tbody",{children:Array.isArray(m)&&m.map((s,a)=>s.payment_state==="completed"&&e.jsxs("tr",{className:"bg-white",children:[e.jsx("td",{className:"px-6 py-4 whitespace-no-wrap border-b border-gray-200",children:e.jsx("div",{className:"text-sm leading-5 text-gray-900",children:s.customer_name})}),e.jsx("td",{className:"px-6 py-4 whitespace-no-wrap border-b border-gray-200",children:e.jsx("div",{className:"text-sm leading-5 text-gray-900",children:s.customer_phone})}),e.jsx("td",{className:"px-6 py-4 whitespace-no-wrap border-b border-gray-200",children:e.jsx("div",{className:"text-sm leading-5 text-gray-900",children:s.customer_email})}),e.jsx("td",{className:"px-6 py-4 whitespace-no-wrap border-b border-gray-200",children:e.jsx("div",{className:"text-sm leading-5 text-gray-900",children:l(s.amount)})}),e.jsx("td",{className:"px-6 py-4 whitespace-no-wrap border-b border-gray-200",children:s.token_status?e.jsx(e.Fragment,{children:e.jsx("button",{className:"text-sm leading-5 text-gray-900 underline",onClick:()=>D(s.url_facture),children:"Ouvrir la facture"})}):e.jsx(e.Fragment,{children:e.jsx("button",{className:"text-sm leading-5 text-gray-900 underline",onClick:o=>E(o),children:"Vérifier le payment"})})})]},a))})]})}),e.jsx("div",{className:"w-full h-[1px] bg-[#EDEDED]"})]})]})})})]}),e.jsxs("div",{className:"w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl text-qblack font-medium mb-5 text-center",children:"Récapitulatif de la commande"}),e.jsx("div",{className:"w-full p-4 sm:p-6 border border-[#EDEDED] rounded-lg shadow-sm",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center border-b pb-4",children:[e.jsx("p",{className:"text-sm font-medium text-qblack uppercase",children:"Produit"}),e.jsx("p",{className:"text-sm font-medium text-qblack uppercase",children:"Total"})]}),e.jsx("div",{className:"space-y-4",children:Array.isArray(t.order_lines)&&t.order_lines.map((s,a)=>e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("h4",{className:"text-sm sm:text-base text-qblack mb-1",children:[s.product_name,e.jsxs("sup",{className:"text-xs text-qgray ml-1",children:["x ",s.product_uom_qty]})]}),e.jsx("p",{className:"text-xs sm:text-sm text-qgray",children:s.description})]}),e.jsx("span",{className:"text-sm sm:text-base text-qblack font-medium",children:l(s.price_total)})]},a))}),e.jsx("div",{className:"border-t pt-4 space-y-2",children:[{label:"Montant Total",value:l(t.amount_total)},{label:"Premier Tranche",value:l(t.first_payment_amount),date:t.first_payment_date,state:t.first_payment_state},{label:"Deuxieme Tranche",value:l(t.second_payment_amount),date:t.second_payment_date,state:t.second_payment_state},{label:"Troisieme Tranche",value:l(t.third_payment_amount),date:t.third_payment_date,state:t.third_payment_state},{label:"Quatrième Tranche",value:l(t.fourth_payment_amount),date:t.fourth_payment_date,state:t.fourth_payment_state}].map((s,a)=>e.jsxs("dl",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("dt",{className:"text-sm text-gray-500",children:s.label}),s.date&&e.jsx("dd",{className:`text-xs sm:text-sm font-medium ${s.state?"text-green-500":"text-red-500"}`,children:s.date}),e.jsx("dd",{className:`text-sm sm:text-base font-medium ${s.state?"text-green-500":s.date?"text-red-500":"text-gray-900"}`,children:s.value})]},a))}),e.jsxs("div",{className:"border-t pt-4 space-y-2",children:[e.jsxs("dl",{className:"flex items-center justify-between gap-2",children:[e.jsx("dt",{className:"text-base sm:text-lg font-bold text-gray-900",children:"Total à payer"}),e.jsx("dd",{className:"text-base sm:text-lg font-bold text-gray-900",children:l(t.amount_total)})]}),t.amount_residual>=0&&e.jsxs(e.Fragment,{children:[e.jsxs("dl",{className:"flex items-center justify-between gap-2",children:[e.jsx("dt",{className:"text-base sm:text-lg font-bold text-gray-900",children:"Total Payé"}),e.jsx("dd",{className:"text-base sm:text-lg font-bold text-green-500",children:l(t.amount_total-t.amount_residual)})]}),e.jsxs("dl",{className:"flex items-center justify-between gap-2",children:[e.jsx("dt",{className:"text-base sm:text-lg font-bold text-gray-900",children:"Total Restant"}),e.jsx("dd",{className:"text-base sm:text-lg font-bold text-gray-900",children:l(t.amount_residual)})]})]})]}),t.validation_rh_state==="validated"&&t.validation_admin_state==="validated"&&(t.advance_payment_status==="not_paid"||t.advance_payment_status==="partial")&&e.jsxs("div",{className:"mt-6",children:[e.jsx(B,{htmlFor:"montant",children:"Montant à payer"}),e.jsx(z,{id:"montant",type:"number",value:n,onChange:s=>{const a=Number(s.target.value);a<=t.amount_residual&&(C(a),!t.first_payment_state&&a<t.first_payment_amount?f(`Le montant entré doit être supérieur ou égal à la première tranche de ${l(t.first_payment_amount)}.`):f(""))},max:t.amount_residual,min:t.first_payment_state?1e3:t.first_payment_amount,className:"mt-1"}),h&&e.jsx("p",{className:"text-red-500 mt-1",children:h}),e.jsxs(V,{onClick:q,className:"mt-4 w-full",disabled:k,children:[c&&e.jsx(O,{className:"mr-2 h-4 w-4 animate-spin"}),"Passer à la caisse (",l(n),")"]})]}),(t.validation_rh_state!=="validated"||t.validation_admin_state!=="validated")&&e.jsx("p",{className:"text-yellow-500 mt-4 text-center text-xl",children:"Merci d'attendre la validation de la commande à crédit par la RH et CCBM"}),t.validation_rh_state==="rejected"&&t.validation_admin_state==="rejected"&&e.jsx("p",{className:"text-red-500 mt-4 text-center text-xl",children:"La Commande à Crédit n'est pas acceptée"}),t.advance_payment_status==="paid"&&e.jsx("p",{className:"text-green-500 mt-4 text-center text-xl",children:"Votre paiement est déjà réglé"})]})}),F&&t&&e.jsx($,{handlePay:T,totalAmount:n,onClose:()=>x(!1),order:t,idOrder:t.id})]})]})}),!t&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex justify-center items-center ",children:[e.jsx(g,{className:"animate-spin"})," Commande à Crédit non trouvée"]})})]})})]}):e.jsx("div",{className:"text-center text-red-500 text-xl mt-10",children:"Commande non trouvée"})}export{Z as default};
