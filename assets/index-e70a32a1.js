import{C as u,j as e,u as g,B as d}from"./index-05ec55af.js";import{r,u as y,L as v}from"./vendor-04b9cdeb.js";import{B as N}from"./BreadcrumbCom-3ccf4a48.js";import{P as w}from"./PageTitle-7c2db322.js";import{c as f,f as m,T as C,d as k,e as D}from"./Layout-31d9a2bc.js";import{B as q}from"./ToggleSwitch-eec1c544.js";import"./commandeService-8671cb58.js";import{B as E}from"./BannerPub-5b39997f.js";import{c as P,a as S}from"./creditCommandeService-b177d626.js";import{S as T}from"./SEOHeader-5efd8b76.js";import"./index-a765955e.js";import"./truck-918abd0d.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=f("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=f("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);function F({produit:s}){const{updateCreditOrder:l}=r.useContext(u),c=i=>{i.preventDefault(),l(s,s.quantity+1)},x=i=>{console.log("produit.quantity"),console.log(s.quantity),i.preventDefault(),s.quantity>1&&l(s,s.quantity-1)};return e.jsx("div",{className:"w-[120px] h-[40px] px-[26px] flex items-center border border-qgray-border",children:e.jsxs("div",{className:"flex justify-between items-center w-full",children:[e.jsx("button",{onClick:x,type:"button",className:"text-base text-qgray",children:e.jsx(_,{})}),e.jsx("span",{className:"text-qblack",children:s.quantity?s.quantity:0}),e.jsx("button",{onClick:c,type:"button",className:"text-base text-qgray",children:e.jsx(B,{})})]})})}function M({className:s}){const{creditOrder:l,clearCreditOrder:c,removeFromCreditOrder:x}=r.useContext(u);console.log(l);const i=(a,n)=>{a.preventDefault(),x(n)};return e.jsxs("div",{className:`w-full ${s||""}`,children:[e.jsx("div",{className:"relative w-full overflow-x-auto border border-[#EDEDED]",children:e.jsx("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase",children:[e.jsx("td",{className:"py-4 pl-10 block whitespace-nowrap min-w-[300px]",children:"product"}),e.jsx("td",{className:"py-4 whitespace-nowrap text-center",children:"Prix"}),e.jsx("td",{className:"py-4 whitespace-nowrap  text-center",children:"Quantité"}),e.jsx("td",{className:"py-4 whitespace-nowrap  text-center",children:"total"}),e.jsx("td",{className:"py-4 whitespace-nowrap text-right w-[114px]"})]}),l&&l.map((a,n)=>e.jsxs("tr",{className:"bg-white border-b hover:bg-gray-50",children:[e.jsx("td",{className:"pl-10  py-4  w-[380px]",children:e.jsxs("div",{className:"flex space-x-6 items-center",children:[e.jsx("div",{className:"w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]",children:e.jsx("img",{src:`${a.image_256?"data:image/png;base64,"+a.image_256:"https://readymadeui.com/images/coffee1.webp"}`,alt:"product",className:"w-full h-full object-contain"})}),e.jsx("div",{className:"flex-1 flex flex-col",children:e.jsx("p",{className:"font-medium text-[15px] text-qblack",children:a.name})})]})}),e.jsx("td",{className:"text-center py-4 px-2",children:e.jsx("div",{className:"flex space-x-1 items-center justify-center",children:e.jsxs("span",{className:"text-[15px] font-normal",children:[" ",m(a.creditorder_price)]})})}),e.jsx("td",{className:" py-4",children:e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(F,{produit:a})})}),e.jsx("td",{className:"text-right py-4",children:e.jsx("div",{className:"flex space-x-1 items-center justify-center",children:e.jsxs("span",{className:"text-[15px] font-normal",children:[" ",m(a.creditorder_price*a.quantity)]})})}),e.jsx("td",{className:"text-right py-4",children:e.jsx("div",{className:"flex space-x-1 items-center justify-center",children:e.jsx("button",{onClick:p=>i(p,a),className:"duration-200 hover:scale-150",children:e.jsx(C,{className:"hover:text-red-500"})})})})]},n))]})})}),e.jsx("div",{className:" mt-3 transition-all duration-300 ease-in-out bg-gray-200 text-[15px]  rounded-lg font-medium text-black  text-center py-2",children:"Livraison gratuite sur Dakar"})]})}function U({cartt:s=!0}){const{creditOrder:l,getCreditOrderTotal:c,clearCreditOrder:x}=r.useContext(u),{user:i,parent:a}=g();r.useState("");const[n,p]=r.useState(!1);r.useState(!1),r.useState(null);const[L,j]=r.useState({});r.useState(null),r.useState(!1);const h=y();console.log(l),r.useEffect(()=>{(async()=>{const t=await P(i.id);j(t),console.log(t)})()},[]);const b=async()=>{if(p(!0),!i)d.dismiss(),d.warning("Merci de vous connecter",{position:"top-center",autoClose:5e3}),h("/login");else if(l.length===0)d.dismiss(),d.error("Veuillez ajouter au moins un article dans votre panier",{position:"top-center",autoClose:5e3});else{const o={partner_id:i.id,parent_id:a.id,type_sale:"creditorder",payment_mode:"online",state:"draft",commitment_date:new Date,order_lines:l.map(t=>({id:t.id,quantity:t.quantity,list_price:t.creditorder_price}))};console.log(o);try{const t=await S(o);console.log(t),d.success("Commande crédit créé avec succés",{position:"top-center",autoClose:5e3}),setTimeout(()=>{h(`/credit-commandes/${t.id}/détails`,{state:{commande:t}})},2e3),x()}catch(t){d.error("Commande crédit non validé ",{position:"top-center",autoClose:5e3}),console.error("Erreur lors de la récupération des modèles",t)}p(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"CCBM Shop | Panier crédit",description:"Découvrez les meilleures offres sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité. Explorez nos produits allant des réfrigérateurs aux téléviseurs intelligents, et profitez de promotions exclusives !",keywords:"électroménager, boutique en ligne d'électroménager, CCBM Shop, ccbme, appareils électroménagers à prix réduits, smart TV, réfrigérateurs modernes, climatiseurs efficaces, promotions électroménager"}),e.jsxs(k,{childrenClasses:s?"pt-0 pb-0":"",children:[s===!1?e.jsx("div",{className:"cart-page-wrapper w-full",children:e.jsx("div",{className:"container-x mx-auto",children:e.jsx(N,{paths:[{name:"Accueil",path:"/"},{name:"Panier crédit",path:"/credit-cart"}]})})}):e.jsxs("div",{className:"cart-page-wrapper w-full bg-white pb-[60px]",children:[e.jsx("div",{className:"w-full",children:e.jsx(w,{title:"Panier crédit",breadcrumb:[{name:"Accueil",path:"/"},{name:"Panier crédit",path:"/credit-cart"}]})}),e.jsx("div",{className:"w-full mt-[23px]",children:e.jsxs("div",{className:"container-x mx-auto",children:[e.jsx(M,{className:"mb-[30px]"}),e.jsx("div",{className:"w-full sm:flex justify-between",children:e.jsx("div",{className:"flex space-x-2.5 items-center",children:e.jsx(v,{to:"/boutique",children:e.jsx("div",{className:"w-[220px] h-[50px] bg-[#F6F6F6] flex justify-center items-center",children:e.jsx("span",{className:"text-sm font-semibold",children:"Continuer vos achats"})})})})}),e.jsx("div",{className:"w-full mt-[30px] flex sm:justify-end",children:e.jsx("div",{className:"sm:w-[370px] w-full border border-[#EDEDED] px-[30px] py-[26px]",children:c()!=0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-t pt-4 space-y-2",children:[{label:"Premier Tranche",value:m(c()*.5)},{label:"Deuxieme Tranche",value:m(c()*.2)},{label:"Troisieme Tranche",value:m(c()*.15)},{label:"Quatrième Tranche",value:m(c()*.15)}].map((o,t)=>e.jsxs("dl",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("dt",{className:"text-sm text-gray-500",children:o.label}),e.jsx("dd",{className:'text-sm sm:text-base font-medium text-gray-900")}',children:o.value})]},t))}),e.jsx("br",{}),e.jsxs(q,{type:"submit",className:"hover:bg-red-500  w-full bg-bleu-logo ",onClick:o=>b(),disabled:n,children:[n&&e.jsx(D,{className:"mr-2 h-4 w-4 animate-spin"}),n?"Veuillez patientez...":"Valider le panier"]})]})})})]})})]}),e.jsx(E,{})]})]})}export{U as default};
