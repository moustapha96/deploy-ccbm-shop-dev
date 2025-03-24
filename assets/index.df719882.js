import{j as e,k as h,l as v,y as f,z as a,t as j,m as b,B as C}from"./index.5afb7798.js";import{r}from"./vendor.af94f9e3.js";function t({init:i,title:n,des:o}){const[l,d]=r.useState(i||!1),c=()=>{d(!l)};return e.jsxs("div",{className:`accordion-item w-full bg-white overflow-hidden ${l?"bg-qyellow":"bg-white"}`,children:[e.jsxs("button",{onClick:c,type:"button",className:"w-full h-[60px] text-qblack flex justify-between items-center px-5",children:[e.jsx("span",{className:"sm:text-base text-sm font-semibold",children:n}),e.jsx("span",{className:"text-[#9A9A9A]",children:l?e.jsx("svg",{width:"20",height:"4",viewBox:"0 0 20 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M19.9798 2.27979C19.8586 2.56995 19.7575 2.90155 19.5959 3.17098C19.212 3.73057 18.6665 3.97927 17.9998 4C17.9593 4 17.9189 4 17.8785 4C12.6051 4 7.33175 4 2.05836 4C1.51284 4 1.02793 3.85492 0.603634 3.48187C-0.204548 2.71503 -0.204548 1.26425 0.623839 0.518135C1.02793 0.165803 1.47243 0 1.99775 0C7.33175 0 12.6455 0 17.9795 0C18.9898 0 19.7373 0.621762 19.9596 1.63731C19.9596 1.65803 19.9798 1.67876 20 1.69948C19.9798 1.88601 19.9798 2.07254 19.9798 2.27979Z",fill:"#222222"})}):e.jsx("svg",{width:"21",height:"20",viewBox:"0 0 21 20",className:"fill-current",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M20.9974 10.2344C20.9974 10.0781 20.9974 9.92188 20.9974 9.76562C20.987 9.75 20.9766 9.72917 20.9714 9.71354C20.7109 8.71354 20.1068 8.24479 19.0755 8.24479C17.0495 8.24479 15.0287 8.24479 13.0026 8.24479C12.9245 8.24479 12.8516 8.24479 12.7526 8.24479C12.7526 8.15104 12.7526 8.07292 12.7526 7.99479C12.7526 5.93229 12.7526 3.86979 12.7526 1.80208C12.7526 1.01042 12.2995 0.354168 11.5807 0.104168C11.4662 0.0625019 11.3464 0.036459 11.2266 0C11.0703 0 10.9141 0 10.7578 0C10.7474 0.00520897 10.737 0.015625 10.7266 0.020834C9.70052 0.291668 9.23698 0.885418 9.23698 1.94271C9.23698 3.95833 9.23698 5.97917 9.23698 7.99479C9.23698 8.07292 9.23698 8.14583 9.23698 8.24479C9.14323 8.24479 9.06511 8.24479 8.98698 8.24479C6.92448 8.24479 4.86198 8.24479 2.79427 8.24479C1.90365 8.24479 1.22656 8.79167 1.02865 9.65625C1.01823 9.69271 1.0026 9.72917 0.992188 9.76562C0.992188 9.92188 0.992188 10.0781 0.992188 10.2344C1.0026 10.2604 1.01302 10.2812 1.02344 10.3073C1.26823 11.2708 1.89323 11.7604 2.89323 11.7604C4.92969 11.7604 6.96615 11.7604 8.9974 11.7604C9.07032 11.7604 9.14844 11.7604 9.23698 11.7604C9.23698 11.8646 9.23698 11.9427 9.23698 12.0156C9.23698 14.0781 9.23698 16.1406 9.23698 18.1979C9.23698 18.901 9.54427 19.4375 10.1589 19.7813C10.3411 19.8854 10.5599 19.9271 10.7578 20C10.9141 20 11.0703 20 11.2266 20C11.237 19.9948 11.2474 19.9844 11.2578 19.9792C12.2787 19.7188 12.7474 19.1146 12.7474 18.0573C12.7474 16.0417 12.7474 14.0208 12.7474 12.0052C12.7474 11.9271 12.7474 11.8542 12.7474 11.7552C12.8412 11.7552 12.9193 11.7552 12.9974 11.7552C15.0599 11.7552 17.1224 11.7552 19.1901 11.7552C19.8307 11.7552 20.3464 11.5 20.6901 10.9635C20.8359 10.75 20.8984 10.4792 20.9974 10.2344Z"})})})]}),l&&e.jsx("div",{className:"p-5 border-t border-[#E5A832]",children:e.jsx("div",{"data-aos":"fade-up",children:e.jsx("p",{className:"sm:text-[15px] text-xs",children:o})})})]})}function y(){const[i,n]=r.useState(""),[o,l]=r.useState(""),[d,c]=r.useState(""),[g,p]=r.useState(""),[m,u]=r.useState(!1);r.useEffect(()=>{window.scrollTo({top:0,left:100,behavior:"smooth"})},[]);const x=async s=>{s.preventDefault(),u(!0),C.success("Contact envoyer !",{position:"top-center",autoClose:5e3}),u(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"CCBM Shop | FAQ ",description:"Découvrez les meilleures offres sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité. Explorez nos produits allant des réfrigérateurs aux téléviseurs intelligents, et profitez de promotions exclusives !",keywords:"électroménager, boutique en ligne d'électroménager, CCBM Shop, ccbme, appareils électroménagers à prix réduits, smart TV, réfrigérateurs modernes, climatiseurs efficaces, promotions électroménager"}),e.jsxs(v,{childrenClasses:"pt-0 pb-0",children:[e.jsx("div",{className:"faq-page-wrapper w-full mb-10",children:e.jsx("div",{className:"page-title w-full",children:e.jsx(f,{title:"Questions fréquemment posées",breadcrumb:[{name:"Accueil",path:"/"},{name:"FAQ",path:"/faq"}]})})}),e.jsx("div",{className:"contact-wrapper w-full mb-10",children:e.jsx("div",{className:"container-x mx-auto",children:e.jsxs("div",{className:"main-wrapper w-full lg:flex lg:space-x-[30px]",children:[e.jsxs("div",{className:"lg:w-1/2 w-full mb-10 lg:mb-0",children:[e.jsx("h1",{className:"text-qblack font-bold text-[22px] mb-4",children:"Questions fréquemment posées"}),e.jsxs("div",{className:"flex flex-col space-y-7 justify-between",children:[e.jsx(t,{title:"1. Précommande ?",des:"La précommande permet d'avoir des produits électroménagers jusqu'à une réduction de 50% garantie, moins chère sur le marché. Pour cela, au moment de la précommande, il faut verser un acompte pour confirmer la précommande. Le client peut continuer à compléter le versement en attendant la livraison du produit. Le paiement doit être complété avant la livraison du produit. Le délai de livraison est compris entre 30 et 60 jours. Une date de livraison sera communiquée après la confirmation de la précommande."}),e.jsx(t,{init:!0,title:"2. SERVICE APRES VENTE DE NOS PRODUITS ?",des:"Nos produits sont garantis d'un an. CCBM a une expérience de plus de 30 ans en termes de vente de produits électroménagers. Vous pouvez nous joindre sur le numéro affiché sur le site en cas de besoins ou de réclamation."}),e.jsx(t,{title:"3. Qu'est-ce que la commande à crédit chez CCBM Shop ?",des:"La commande à crédit est un service offert par CCBM Shop permettant aux employés d'entreprises partenaires d'acheter des produits et de les payer en plusieurs versements. Ce service est uniquement disponible pour les entreprises ayant une collaboration établie avec CCBM Shop."}),e.jsx(t,{title:"4. Comment puis-je m'inscrire pour les commandes à crédit ?",des:e.jsxs("ol",{className:"list-decimal list-inside space-y-2",children:[e.jsx("li",{children:"Créez votre compte sur CCBM Shop."}),e.jsx("li",{children:"Obtenez l'identifiant unique de votre entreprise auprès de votre service RH."}),e.jsx("li",{children:"Dans votre profil, saisissez l'identifiant de l'entreprise dans la section 'Informations Personnelles'."}),e.jsx("li",{children:"Faites une demande d'adhésion au programme de commandes à crédit dans votre tableau de bord."}),e.jsx("li",{children:"Attendez la validation de votre service RH (généralement sous 24 heures ouvrables)."})]})}),e.jsx(t,{title:"5. Comment fonctionne le paiement pour les commandes à crédit ?",des:e.jsxs("div",{children:[e.jsx("p",{children:"Le paiement pour les commandes à crédit est échelonné comme suit :"}),e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsx("li",{children:"50% à la validation de la commande"}),e.jsx("li",{children:"20% le mois suivant"}),e.jsx("li",{children:"15% le deuxième mois"}),e.jsx("li",{children:"15% le troisième mois"})]}),e.jsx("p",{className:"mt-2",children:"Les moyens de paiement acceptés sont Wave et Orange Money."})]})}),e.jsx(t,{title:"6. Que se passe-t-il si je manque un paiement ?",des:"Si un paiement n'est pas effectué dans les trois jours suivant l'échéance, votre service RH sera notifié. Ils pourront alors prélever le montant dû directement sur votre salaire pour régulariser la situation."}),e.jsx(t,{title:"7. Puis-je annuler une commande à crédit ?",des:"Les conditions d'annulation pour les commandes à crédit sont les mêmes que pour les commandes standard. Cependant, une fois que le processus de paiement a commencé, l'annulation peut être plus complexe. Il est recommandé de contacter le service client de CCBM Shop dès que possible si vous souhaitez annuler une commande à crédit."})]})]}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"bg-white sm:p-10 p-5",children:[e.jsxs("div",{className:"title flex flex-col items-center",children:[e.jsx("h1",{className:"text-[34px] font-bold text-qblack",children:"CCBM SHOP"}),e.jsx("span",{className:"-mt-5 block",children:e.jsx("svg",{width:"354",height:"30",viewBox:"0 0 354 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1",stroke:"#FFBB38",strokeWidth:"2",strokeLinecap:"round"})})})]}),e.jsx("form",{onSubmit:x,children:e.jsxs("div",{className:"inputs mt-5",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(a,{htmlFor:"nom",value:"Nom Complet"})}),e.jsx("input",{type:"text",placeholder:"Nom complet",value:`${o}`,name:"nom",onChange:s=>l(s.target.value),required:!0,className:`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400\r
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500\r
                                    invalid:text-red-600\r
                      focus:invalid:border-red-500 focus:invalid:ring-red-500`})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(a,{htmlFor:"email",value:"Adresse Email"})}),e.jsx("input",{type:"text",placeholder:"Adresse Email",value:`${i}`,name:"email",onChange:s=>n(s.target.value),required:!0,className:`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400\r
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500\r
                                    invalid:text-red-600\r
                      focus:invalid:border-red-500 focus:invalid:ring-red-500`})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(a,{htmlFor:"sujet",value:"Objet"})}),e.jsx("input",{type:"text",placeholder:"Objet",value:`${d}`,name:"sujet",onChange:s=>c(s.target.value),required:!0,className:`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400\r
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500\r
                                    invalid:text-red-600\r
                      focus:invalid:border-red-500 focus:invalid:ring-red-500`})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(a,{htmlFor:"message",value:"Message"})}),e.jsx("textarea",{onChange:s=>p(s.target.value),placeholder:"Entrez votre message ici",className:`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400\r
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500\r
                                    invalid:text-red-600\r
                      focus:invalid:border-red-500 focus:invalid:ring-red-500`})]}),e.jsx("div",{children:e.jsx(j,{type:"submit",variant:"failure",className:` black-btn mb-6 text-sm text-white w-full h-[50px] font-semibold flex justify-center \r
 hover:bg-red-500  bg-purple items-center`,disabled:m,children:m==!0?e.jsxs(e.Fragment,{children:[e.jsx(b,{className:"mr-2 h-4 w-4 animate-spin"}),e.jsx("span",{children:"en cours d'envoyer"})]}):e.jsx("span",{children:" Envoyer"})})})]})})]})})]})})})]})]})}export{y as default};
