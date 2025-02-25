import{c as d,F as v,j as e,k as j,l as w,w as N,x as r,q as y,m as C,B as f}from"./index.7863acfb.js";import{r as l}from"./vendor.ee8c1fef.js";import{B as k}from"./BannerPub.f7214890.js";import"./truck.45345b87.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=d("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=d("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=d("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),B={sendContact:async t=>{try{return(await v.post("/api/sendContact",t)).data}catch(a){throw console.error("Erreur lors de la création du modèle",a),a}}};function L(){l.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[]);const[t,a]=l.useState(""),[o,m]=l.useState(""),[n,x]=l.useState(""),[u,p]=l.useState(""),[h,i]=l.useState(!1),b=async s=>{s.preventDefault(),i(!0),console.log(t,o,n,u);let g={email:t,nom:o,sujet:n,message:u};try{const c=await B.sendContact(g);f.success("Mail Contact envoyer !",{position:"top-center",autoClose:5e3}),a(""),m(""),x(""),p(""),console.log(c.result)}catch(c){console.log(c),f.error("Mail Contact non envoyer !",{position:"top-center",autoClose:5e3})}finally{i(!1)}i(!1)};return l.useRef(null),e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"CCBM Shop | A propos de CCBM Shop",description:"Découvrez les meilleures offres sur CCBM Shop, votre destination privilégiée pour l'électroménager de qualité. Explorez nos produits allant des réfrigérateurs aux téléviseurs intelligents, et profitez de promotions exclusives !",keywords:"électroménager, boutique en ligne d'électroménager, CCBM Shop, ccbme, appareils électroménagers à prix réduits, smart TV, réfrigérateurs modernes, climatiseurs efficaces, promotions électroménager"}),e.jsx(w,{childrenClasses:"pt-0 pb-0",children:e.jsxs("div",{className:"about-page-wrapper w-full",children:[e.jsx("div",{className:"title-area w-full",children:e.jsx(N,{title:"Informations",breadcrumb:[{name:"Accueil",path:"/"},{name:"Informations",path:"/informations"}]})}),e.jsx("div",{className:"aboutus-wrapper w-full",children:e.jsx("div",{className:"container-x mx-auto",children:e.jsxs("div",{className:"w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0",children:[e.jsx("div",{className:"md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0",children:e.jsx("img",{src:"logo.png",alt:"CCBM Shop A propos",className:"w-full h"})}),e.jsxs("div",{className:"content flex-1 bg-gray-100 p-6 rounded shadow-md",children:[e.jsx("h1",{className:"text-[18px] font-medium text-qblack mb-2.5  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-bleu-logo duration-300 ",children:"À propos de la Boutique"}),e.jsxs("p",{className:"text-[15px] text-qgraytwo leading-7 mb-2.5",children:[e.jsx("b",{children:"CCBM Shop"}),"   est une filiale du Groupe CCBM, une boutique de vente de matériels électroniques en ligne. Nous nous engageons à offrir une large gamme de produits de haute qualité à des prix compétitifs. Que vous soyez à la recherche des dernières innovations technologiques ou d'appareils électroménagers fiables, nous avons tout ce qu'il vous faut."]}),e.jsxs("ul",{className:"text-[15px] text-qgraytwo leading-7 list-disc ml-5 mb-5",children:[e.jsx("li",{children:"Téléviseurs et home cinéma : Transformez votre salon en véritable cinéma avec nos téléviseurs haute définition et systèmes home cinéma."}),e.jsx("li",{children:"Electroménager : Équipez votre maison avec des appareils électroménagers modernes et efficaces pour simplifier votre quotidien."})]}),e.jsx("a",{href:"#contact-form",children:e.jsx("div",{className:"w-[121px] h-10",children:e.jsx("span",{className:"blue-logo-btn",children:"Contacter nous"})})})]})]})})}),e.jsx("div",{className:"contact-wrapper w-full mb-10",children:e.jsx("div",{className:"container-x mx-auto",children:e.jsxs("div",{className:"main-wrapper w-full lg:flex lg:space-x-[30px]",children:[e.jsxs("div",{className:"lg:w-1/2 w-full",children:[e.jsx("h1",{className:"text-[22px] font-semibold text-qblack leading-[30px] mb-1",children:"Nos Coordonnées"}),e.jsx("p",{className:"text-[15px] text-qgraytwo leading-[30px] mb-5",children:"Remplissez le formulaire ci-dessous ou écrivez-nous. Nous vous aiderons dans les plus brefs délais possible."}),e.jsxs("div",{className:"xl:flex xl:space-x-[30px] mb-[30px]",children:[e.jsxs("div",{className:"xl:w-1/2 w-full  h-[196px] flex flex-col item justify-center bg-[#FFEAE5] p-5",children:[e.jsx("div",{className:"flex justify-center mb-3 ",children:e.jsx(S,{})}),e.jsx("p",{className:"text-[22px] text-black leading-[30px] text-center font-semibold",children:"Téléphone"}),e.jsx("p",{className:"text-[15px] text-black leading-[30px] text-center",children:"+(221) 70 922 17 75"})]}),e.jsxs("div",{className:"xl:w-1/2 w-full h-[196px] flex flex-col item justify-center bg-[#D3EFFF] p-5",children:[e.jsx("div",{className:"flex justify-center mb-3 ",children:e.jsx(q,{})}),e.jsx("p",{className:"text-[22px] text-black leading-[30px] text-center font-semibold",children:"Email"}),e.jsx("p",{className:"text-[15px] text-black leading-[30px] text-center",children:"shop@ccbm.sn"})]})]}),e.jsxs("div",{className:"p-5 flex flex-col justify-between w-full bg-[#E7F2EC]",children:[e.jsxs("div",{className:"flex space-x-5",children:[e.jsx("span",{children:e.jsx(M,{})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-[22px] font-semibold text-qblack leading-[30px] mb-2",children:"Address"}),e.jsxs("p",{className:"text-[15px] text-qblack leading-[30px]",children:["Avenue Lamine Gueye,x Rue Marchand ",e.jsx("br",{}),"Dakar-Senegal."]})]})]}),e.jsx("div",{className:"w-full h-[206px] mt-5",children:e.jsx("iframe",{title:"CCBM SHOP",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.561291986447!2d-17.44087212425773!3d14.680820775106305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172569fa40e79%3A0x2d2fbc74fe6d15b0!2sCCBM%20Automobile!5e0!3m2!1sfr!2ssn!4v1720704349629!5m2!1sfr!2ssn",width:"600",height:"450",style:{border:"0",width:"100%",height:"100%"},allowfullscreen:"",loading:"lazy"})})]})]}),e.jsxs("div",{id:"contact-form",className:"flex-1 bg-white sm:p-10 p-3",children:[e.jsxs("div",{className:"title flex flex-col items-center",children:[e.jsx("h1",{className:"text-[34px] font-bold text-qblack",children:"CCBM Shop"}),e.jsx("span",{className:"-mt-5 block",children:e.jsx("svg",{width:"354",height:"30",viewBox:"0 0 354 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1",stroke:"#FFBB38",strokeWidth:"2",strokeLinecap:"round"})})})]}),e.jsx("form",{onSubmit:b,children:e.jsxs("div",{className:"inputs mt-5",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(r,{htmlFor:"nom",value:"Nom Complet"})}),e.jsx("input",{type:"text",placeholder:"Nom complet",value:`${o}`,name:"nom",onChange:s=>m(s.target.value),required:!0,className:`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400\r
                                                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500\r
                                                                            invalid:text-red-600\r
                                                            focus:invalid:border-red-500 focus:invalid:ring-red-500`})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(r,{htmlFor:"email",value:"Email"})}),e.jsx("input",{type:"text",placeholder:"Email",value:`${t}`,name:"email",onChange:s=>a(s.target.value),required:!0,className:`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400\r
                                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500\r
                                                                        invalid:text-red-600\r
                                                        focus:invalid:border-red-500 focus:invalid:ring-red-500`})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(r,{htmlFor:"sujet",value:"Sujet"})}),e.jsx("input",{type:"text",placeholder:"sujet",value:`${n}`,name:"sujet",onChange:s=>x(s.target.value),required:!0,className:`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400\r
                                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500\r
                                                                        invalid:text-red-600\r
                                                        focus:invalid:border-red-500 focus:invalid:ring-red-500`})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(r,{htmlFor:"message",value:"Message"})}),e.jsx("textarea",{onChange:s=>p(s.target.value),placeholder:"Type your message here",className:`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400\r
                                                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500\r
                                                                                invalid:text-red-600\r
                                                                focus:invalid:border-red-500 focus:invalid:ring-red-500`})]}),e.jsx("div",{children:e.jsx(y,{type:"submit",variant:"failure",className:` black-btn mb-6 text-sm text-white w-full h-[50px] font-semibold flex justify-center \r
                                                            hover:bg-red-500  bg-purple items-center`,disabled:h,children:h==!0?e.jsxs(e.Fragment,{children:[e.jsx(C,{className:"mr-2 h-4 w-4 animate-spin"}),e.jsx("span",{children:"en cours d'envoyer"})]}):e.jsx("span",{children:" Envoyer"})})})]})})]})]})})}),e.jsx(k,{})]})})]})}export{L as default};
