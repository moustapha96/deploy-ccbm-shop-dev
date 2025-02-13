import{u as F,w as M,B as x,j as e,L as A,i as L,k as B,s as I,f as d,t as O,T,p as N,l as w}from"./index.f58b74ca.js";import{j as R,r as i}from"./vendor.ee8c1fef.js";import{f as V}from"./date-format.d160e78b.js";import{P as $}from"./PaydunyaModalService.5b165d37.js";import{P as y}from"./paimentService.53f684df.js";function X(){const{id:t}=R(),{user:s}=F(),[a,m]=i.useState(null),[v,o]=i.useState(!1),[h,r]=i.useState(!1),[n,g]=i.useState(null),[P,u]=i.useState(""),[p,_]=i.useState(0),[C,f]=i.useState(!0),b=i.useCallback(async()=>{try{const l=await M.getCommandeById(s.id,t);m(l),console.log(l);const j=await y.getPaymentDetailsByIdOrder(l.id);g(j)}catch(l){console.error("Erreur lors de la récupération des modèles",l),x.error("Erreur lors de la récupération des données de la commande")}},[s.id,t]);i.useEffect(()=>{b()},[b]),i.useEffect(()=>{const l=setTimeout(async()=>{a&&n&&n.payment_state==="completed"&&a.advance_payment_status==="not_paid"&&!n.token_status&&E()},2e3);return()=>clearTimeout(l)},[n,a]),i.useEffect(()=>{p<1e3?(u("Le montant minimum est de 1000 FCFA"),f(!0)):(u(""),f(!1)),a&&a.payment_mode=="echelonne"&&(p>a.amount_residual?(u("Le montant à payer ne doit pas dépasser le montant restant à payer"),f(!0)):(u(""),f(!1)))},[p]);const E=async()=>{o(!0);try{await y.createCommandePaiment(a.id),window.location.reload(),x.success("Paiement de la commande validé avec succès")}catch(l){console.error("Erreur lors de la création du paiement :",l),x.error("Erreur lors de la création du paiement")}finally{o(!1)}},k=(l,j)=>{if(l.preventDefault(),_(j),j<1e3){u("Le montant minimum est de 1000 FCFA");return}r(!0)},D=async l=>{console.log("Payment data: ",l),o(!1),x.success("Payment validé avec succès")},q=()=>{n!=null&&n.url_facture&&window.open(n.url_facture,"_blank","noopener,noreferrer")},S=async()=>{try{(a==null?void 0:a.advance_payment_status)==="paid"&&(n==null?void 0:n.payment_state)==="completed"?x.success("Commande déjà validée"):(await y.createCommandePaiment(a.id),x.success("Commande validée avec succès"))}catch(l){console.error("Erreur lors de la vérification du paiement :",l),x.error("Erreur lors de la vérification du paiement")}};return a?e.jsxs(e.Fragment,{children:[e.jsx(L,{title:"CCBM Shop | Détails commande",description:"Consultez les détails de votre commande sur CCBM Shop, votre destination pour l'électroménager de qualité.",keywords:"détails commande, CCBM Shop, ccbme, suivi commande, paiement électroménager"}),e.jsx(B,{childrenClasses:" pt-0 pb-0",children:e.jsxs("div",{className:"checkout-page-wrapper w-full bg-white pb-[60px]",children:[e.jsx("div",{className:"w-full mb-5",children:e.jsx(I,{title:"Détails Commande",breadcrumb:[{name:"Accueil",path:"/"},{name:"Commandes",path:"/profile#order"},{name:"Détails Commande"}]})}),e.jsx("div",{className:"checkout-main-content w-full",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsxs("div",{className:"w-full sm:mb-10 mb-5",children:[e.jsxs("div",{className:"sm:flex sm:space-x-[18px]",children:[e.jsx(c,{label:"N°Commande",value:a.name}),e.jsx(c,{label:"Paiement",value:a.payment_mode==="domicile"?"A domicile":a.payment_mode==="online"?a.advance_payment_status==="not_paid"?"Non Payé":"Payé":a.payment_mode==="echelonne"?a.advance_payment_status==="not_paid"?"Non Payé":a.advance_payment_status==="paid"?"Payé":"Partiellement Payé":"",className:a.advance_payment_status==="not_paid"?"text-red-500":a.advance_payment_status==="paid"?"text-green-500":a.advance_payment_status==="partial"?"text-yellow-500":""}),e.jsx(c,{label:"Statut",value:a.state==="sale"?"Validée":a.state==="to_delivered"?"En cours de livraison":a.state==="delivered"?"Livrée":"Non validé",className:a.state==="sale"?"text-green-500":a.state==="to_delivered"?"text-yellow-500":a.state==="delivered"?"text-green-600":"text-gray-500"})]}),a.payment_mode==="echelonne"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"sm:flex sm:space-x-[18px] mt-5",children:[e.jsx(c,{label:"Montant Restant",value:d(a.amount_residual)+" FCFA"}),e.jsx(c,{label:"Montant Total",value:["not_paid","paid"].includes(a.advance_payment_status)?e.jsx("span",{className:`text-${a.advance_payment_status==="not_paid"?"red":"green"}-500`,children:d(a.amount_total)}):""}),e.jsx(c,{label:"Montant Avancé",value:d(a.amount_total-a.amount_residual)})]})}),e.jsxs("div",{className:"sm:flex sm:space-x-[18px] mt-5",children:[e.jsx(c,{label:"Mode de Paiement",value:a.payment_mode==="online"?"En ligne":a.payment_mode==="domicile"?"A domicile":"Echelonné"}),e.jsx(c,{label:"Date de livraison",value:V(a.commitment_date)})]})]}),n&&a.advance_payment_status==="paid"&&e.jsx(z,{paymentDetails:n,handleOpenInvoice:q,handleVerifeCommandePayment:S,commande:a}),e.jsx(H,{commande:a}),e.jsx(G,{commande:a,montantAPayer:p,setMontantAPayer:_,errorMontantAPayer:P,stateButton:C,isLoading:v,validerPaiment:k}),h&&a&&e.jsx($,{handlePay:D,totalAmount:p,onClose:()=>r(!1),order:a,idOrder:a.id})]})})]})})]}):e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx(A,{className:"animate-spin mr-2"})," Chargement de la commande..."]})}const c=({label:t,value:s,className:a=""})=>e.jsx("div",{className:"sm:w-1/3 w-full mb-5 h-[70px]",children:e.jsx("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center",children:e.jsxs("span",{className:"text-[15px] font-medium",children:[t,"  : ",e.jsx("span",{className:a,children:s})]})})}),z=({paymentDetails:t,handleOpenInvoice:s,handleVerifeCommandePayment:a,commande:m})=>e.jsx("div",{className:"w-full lg:flex lg:space-x-[30px] mb-10",children:e.jsxs("div",{className:"flex-1",children:[e.jsx("h1",{className:"sm:text-2xl text-xl text-qblack font-medium mb-5",children:"Récapitulatif paiement"}),e.jsxs("div",{className:"w-full px-10 py-[30px] border border-[#EDEDED]",children:[e.jsxs("div",{className:"sub-total mb-6",children:[e.jsx("div",{className:"flex justify-between mb-5",children:e.jsx("p",{className:"text-[13px] font-medium text-qblack uppercase",children:"Détail Payment"})}),e.jsx("div",{className:"w-full h-[1px] bg-[#EDEDED]"})]}),e.jsx("div",{className:"product-list w-full mb-[30px]",children:e.jsxs("ul",{className:"flex flex-col space-y-5",children:[e.jsx("li",{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h4",{className:"text-[15px] text-qblack mb-2.5",children:"Montant Payé"}),e.jsx("span",{className:"text-[15px] text-qblack font-medium",children:d(t.amount)})]})}),e.jsx("li",{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h4",{className:"text-[15px] text-qblack mb-2.5",children:"Facture"}),e.jsx("button",{className:"text-[15px] text-qblack font-medium underline",onClick:s,children:"Ouvrir la facture"})]})}),m&&m.advance_payment_status==="not_paid"&&t.payment_state==="completed"&&e.jsx("li",{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h4",{className:"text-[15px] text-qblack mb-2.5",children:"Vérifier la commande"}),e.jsx("button",{className:"text-[15px] text-qblack font-medium underline",onClick:a,children:"Verifier"})]})})]})}),e.jsx("div",{className:"w-full h-[1px] bg-[#EDEDED]"})]})]})}),H=({commande:t})=>e.jsxs("div",{className:"w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx("h1",{className:"sm:text-2xl text-xl text-qblack font-medium mb-5",children:"Récapitulatif de la commande"}),e.jsxs("div",{className:"w-full p-4 sm:p-6 border border-[#EDEDED] rounded-lg shadow-sm",children:[e.jsxs("div",{className:"sub-total mb-6",children:[e.jsxs("div",{className:"flex justify-between mb-5",children:[e.jsx("p",{className:"text-[13px] font-medium text-qblack uppercase",children:"Produit"}),t.type_order=="commande"&&e.jsx("p",{className:"text-[13px] font-medium text-qblack uppercase",children:"Total"})]}),e.jsx("div",{className:"w-full h-[1px] bg-[#EDEDED]"})]}),e.jsx("div",{className:"product-list w-full mb-[30px]",children:e.jsx("ul",{className:"flex flex-col space-y-5",children:t.order_lines.map((s,a)=>e.jsx("li",{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-[15px] text-qblack mb-2.5",children:[s.product_name,e.jsx("sup",{className:"text-[13px] text-qgray ml-2 mt-2",children:t.type_order=="commande"&&e.jsxs("span",{children:["   = ",s.product_uom_qty," x ",s.price_total]})})]}),e.jsx("p",{className:"text-[13px] text-qgray",children:s.description})]}),e.jsx("div",{children:t.type_order=="commande"&&e.jsx("span",{className:"text-[15px] text-qblack font-medium",children:d(s.price_total)})})]})},a))})}),e.jsx("div",{className:"w-full h-[1px] bg-[#EDEDED]"}),e.jsx("div",{className:"mt-[30px]",children:e.jsxs("div",{className:"flex justify-between mb-5",children:[e.jsx("p",{className:"text-2xl font-medium text-qblack",children:"Total"}),e.jsx("p",{className:"text-2xl font-medium",children:["not_paid","paid"].includes(t.advance_payment_status)&&e.jsx("span",{className:`text-${t.advance_payment_status==="not_paid"?"red":"green"}-500`,children:d(t.amount_total)})})]})})]})]}),G=({commande:t,montantAPayer:s,setMontantAPayer:a,errorMontantAPayer:m,stateButton:v,isLoading:o,validerPaiment:h})=>e.jsx("div",{className:"w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8",children:t.advance_payment_status==="not_paid"||t.advance_payment_status==="partial"?e.jsxs(e.Fragment,{children:[t.payment_mode==="domicile"&&e.jsx("div",{className:"flex justify-center items-center mt-2",children:e.jsx("span",{className:"text-lg font-medium text-red-500 dark:text-white",children:"Le paiement se fera à domicile"})}),t.payment_mode==="echelonne"&&e.jsx("div",{children:(t.advance_payment_status==="not_paid"||t.advance_payment_status==="partial")&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"input-item mb-5",children:[e.jsx("div",{className:"mb-2 inline-block",children:e.jsx(O,{htmlFor:"montant",value:"Montant à payer"})}),e.jsx(T,{id:"montant",placeholder:"Minimum 1000 F CFA",label:"Montant*",name:"montantAPayer",type:"number",value:s,onChange:r=>a(r.target.value),max:t.amount_residual,min:1e3,required:!0,className:"invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"}),m&&e.jsx("p",{className:"text-yellow-500",children:m})]}),e.jsxs(N,{type:"submit",onClick:r=>h(r,s),className:"rounded-lg px-5 py-2.5 font-medium w-full hover:bg-red-500 hover:text-white text-xl",disabled:v,children:[o&&e.jsx(w,{className:"mr-2 h-4 w-4 animate-spin"}),"Passer à la caisse (",d(s),")"]})]})}),t.payment_mode==="online"&&e.jsxs(N,{type:"submit",onClick:r=>h(r,t.amount_total),className:"rounded-lg px-5 py-2.5 font-medium w-full hover:bg-red-500 hover:text-white text-xl",disabled:o,children:[o&&e.jsx(w,{className:"mr-2 h-4 w-4 animate-spin"}),"Passer à la caisse (",d(t.amount_total),")"]})]}):e.jsx("div",{className:"w-full h-[50px] flex justify-center items-center",children:e.jsx("span",{className:"text-green-500",children:"Le paiement a été effectué avec succès"})})});export{X as default};
