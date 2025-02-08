import{C as c,j as e,k as i,v as x,f as s}from"./index-acc54e7c.js";import{r as l}from"./vendor-ee8c1fef.js";import{f as n}from"./date-format-d160e78b.js";function f(){const[t,m]=l.useState(null),{cart:d}=l.useContext(c);return console.log(d),e.jsx(i,{childrenClasses:"pt-0 pb-0",children:e.jsxs("div",{className:"checkout-page-wrapper w-full bg-white pb-[60px]",children:[e.jsx("div",{className:"w-full mb-5",children:e.jsx(x,{title:"Validation Commande",breadcrumb:[{name:"Accueil",path:"/"},{name:"Validation Commande",path:"/validation-commande"}]})}),t&&e.jsx("div",{className:"checkout-main-content w-full",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsxs("div",{className:"w-full sm:mb-10 mb-5",children:[e.jsxs("div",{className:"sm:flex sm:space-x-[18px] s",children:[e.jsx("div",{className:"sm:w-1/2 w-full mb-5 h-[70px]",children:e.jsx("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center",children:e.jsxs("span",{className:"text-[15px] font-medium",children:["N°Commande ",e.jsx("span",{children:t.name})]})})}),e.jsx("div",{className:"flex-1 h-[70px]",children:e.jsx("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center",children:e.jsxs("span",{className:"text-[15px] font-medium",children:["Statut :"," ",t.advance_payment_status==="not_paid"&&e.jsx("span",{className:"text-red-500",children:"(Non Payé)"}),t.advance_payment_status==="paid"&&e.jsx("span",{className:"text-green-500",children:" (Payé)"}),t.advance_payment_status==="partial"&&e.jsxs("span",{className:"text-yellow-500",children:[" ","(Partiellement Payer)"]})]})})})]}),e.jsxs("div",{className:"sm:flex sm:space-x-[18px] s",children:[e.jsx("div",{className:"sm:w-1/2 w-full mb-5 h-[70px]",children:e.jsxs("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center",children:["Date de la commande  ",e.jsx("span",{children:n(t.date_order)})]})}),e.jsx("div",{className:"flex-1 h-[70px]",children:e.jsxs("div",{className:"w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center",children:["Date de prévisionnelle livraison  ",e.jsx("span",{children:n(t.commitment_date)})]})})]})]}),e.jsx("div",{className:"w-full lg:flex lg:space-x-[30px]",children:e.jsxs("div",{className:"flex-1",children:[e.jsx("h1",{className:"sm:text-2xl text-xl text-qblack font-medium mb-5",children:"Récapitulatif de la commande"}),e.jsxs("div",{className:"w-full px-10 py-[30px] border border-[#EDEDED]",children:[e.jsxs("div",{className:"sub-total mb-6",children:[e.jsxs("div",{className:" flex justify-between mb-5",children:[e.jsx("p",{className:"text-[13px] font-medium text-qblack uppercase",children:"Produit"}),e.jsx("p",{className:"text-[13px] font-medium text-qblack uppercase",children:"total"})]}),e.jsx("div",{className:"w-full h-[1px] bg-[#EDEDED]"})]}),e.jsx("div",{className:"product-list w-full mb-[30px]",children:e.jsx("ul",{className:"flex flex-col space-y-5",children:t.order_lines.map((a,r)=>e.jsx(e.Fragment,{children:e.jsx("li",{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-[15px] text-qblack mb-2.5",children:[a.product_name,e.jsxs("sup",{className:"text-[13px] text-qgray ml-2 mt-2",children:["x ",a.product_uom_qty]})]}),e.jsx("p",{className:"text-[13px] text-qgray",children:a.description})]}),e.jsx("div",{children:e.jsx("span",{className:"text-[15px] text-qblack font-medium",children:s(a.price_total)})})]})},r)}))})}),e.jsx("div",{className:"w-full h-[1px] bg-[#EDEDED]"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("dl",{className:"flex items-center justify-between gap-4",children:[e.jsx("dt",{className:"text-gray-500 dark:text-gray-400",children:"Montant Total"}),e.jsx("dd",{className:"text-base font-medium text-gray-900 dark:text-white",children:s(t.amount_total)})]}),e.jsxs("dl",{className:"flex items-center justify-between gap-4",children:[e.jsx("dt",{className:"text-gray-500 dark:text-gray-400",children:"Premier Tranche"}),e.jsx("dd",{className:`text-base font-medium ${t.first_payment_state?"text-green-500":"text-red-500"}`,children:t.first_payment_date}),e.jsx("dd",{className:`text-base font-medium ${t.first_payment_state?"text-green-500":"text-red-500"}`,children:s(t.first_payment_amount)})]}),e.jsxs("dl",{className:"flex items-center justify-between gap-4",children:[e.jsx("dt",{className:"text-gray-500 dark:text-gray-400",children:"Deuxieme Tranche"}),e.jsx("dd",{className:`text-base font-medium ${t.second_payment_state?"text-green-500":"text-red-500"}`,children:t.second_payment_date}),e.jsx("dd",{className:`text-base font-medium ${t.second_payment_state?"text-green-500":"text-red-500"}`,children:s(t.second_payment_amount)})]}),e.jsxs("dl",{className:"flex items-center justify-between gap-4",children:[e.jsx("dt",{className:"text-gray-500 dark:text-gray-400",children:"Troisieme Tranche"}),e.jsx("dd",{className:`text-base font-medium ${t.third_payment_state?"text-green-500":"text-red-500"}`,children:t.third_payment_date}),e.jsx("dd",{className:`text-base font-medium ${t.third_payment_state?"text-green-500":"text-red-500"}`,children:s(t.third_payment_amount)})]}),e.jsxs("dl",{className:"flex items-center justify-between gap-4",children:[e.jsx("dt",{className:"text-gray-500 dark:text-gray-400",children:"Tax"}),e.jsx("dd",{className:"text-base font-medium text-gray-900 dark:text-white",children:s(t.amount_tax)})]})]}),e.jsxs("dl",{className:"flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700",children:[e.jsx("dt",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"Total"}),e.jsx("dd",{className:"text-lg font-bold text-gray-900 dark:text-white",children:s(t.amount_total)})]}),e.jsxs("dl",{className:"flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700",children:[e.jsx("dt",{className:"text-lg font-bold text-gray-900 dark:text-white",children:"Total Restant"}),e.jsx("dd",{className:"text-lg font-bold text-gray-900 dark:text-white",children:s(t.amount_residual)})]})]}),t.advance_payment_status=="not_paid"||t.advance_payment_status=="partial"?e.jsxs("div",{children:[e.jsx("div",{className:"shipping mt-[30px]",children:e.jsx("ul",{className:"flex flex-col space-y-1",children:e.jsx("li",{children:e.jsxs("div",{className:"flex space-x-2.5 items-center mb-5",children:[e.jsx("div",{className:"input-radio",children:e.jsx("input",{type:"radio",name:"price",className:"accent-pink-500",id:"bank"})}),e.jsx("label",{htmlFor:"bank",className:"text-[18px] text-normal text-qblack",children:"Credit/Debit Cards or Paypal"})]})})})}),e.jsxs("div",{className:"w-full h-[50px] black-btn flex justify-center items-center",children:[!t.first_payment_state&&e.jsx("button",{className:"rounded-lg px-5 py-2.5 font-medium w-full hover:bg-red-500 hover:text-white text-xl",children:"Paiement 1 ere tranche"}),t.first_payment_state&&!t.second_payment_state&&e.jsx("button",{className:"rounded-lg px-5 py-2.5 font-medium w-full hover:bg-red-500 hover:text-white text-xl",children:"Paiement 2 ème tranche"}),t.first_payment_state&&t.second_payment_state&&!t.third_payment_state&&e.jsx(e.Fragment,{children:e.jsx("button",{className:"rounded-lg px-5 py-2.5 font-medium w-full hover:bg-red-500 hover:text-white text-xl",children:"Paiement 3 ème tranche"})})]})]}):e.jsx("div",{className:"w-full h-[50px] flex justify-center items-center",children:e.jsxs("span",{className:"text-green-500",children:[" ","le paiement a été effectué avec succès"]})})]})]})})]})})]})})}export{f as default};
