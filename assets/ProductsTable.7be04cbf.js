import{C as x,j as e,f as l,z as o}from"./index.8ffbb83c.js";import{r as i}from"./vendor.ee8c1fef.js";function d({produit:s}){const{updateCart:a}=i.useContext(x),c=t=>{t.preventDefault(),a(s,s.quantity+1)},r=t=>{t.preventDefault(),s.quantity>1&&a(s,s.quantity-1)};return e.jsx("div",{className:"w-[120px] h-[40px] px-[26px] flex items-center border border-qgray-border",children:e.jsxs("div",{className:"flex justify-between items-center w-full",children:[e.jsx("button",{onClick:r,type:"button",className:"text-base text-qgray",children:"-"}),e.jsx("span",{className:"text-qblack",children:s.quantity?s.quantity:0}),e.jsx("button",{onClick:c,type:"button",className:"text-base text-qgray",children:"+"})]})})}function j({className:s}){const{cart:a,removeFromCart:c}=i.useContext(x);console.log(a);const r=(t,n)=>{t.preventDefault(),c(n)};return e.jsxs("div",{className:`w-full ${s||""}`,children:[e.jsx("div",{className:"relative w-full overflow-x-auto border border-[#EDEDED]",children:e.jsx("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase",children:[e.jsx("td",{className:"py-4 pl-10 block whitespace-nowrap min-w-[300px]",children:"product"}),e.jsx("td",{className:"py-4 whitespace-nowrap text-center",children:"Prix"}),e.jsx("td",{className:"py-4 whitespace-nowrap  text-center",children:"Quantité"}),e.jsx("td",{className:"py-4 whitespace-nowrap  text-center",children:"total"}),e.jsx("td",{className:"py-4 whitespace-nowrap text-right w-[114px]"})]}),a.map((t,n)=>e.jsxs("tr",{className:"bg-white border-b hover:bg-gray-50",children:[e.jsx("td",{className:"pl-10  py-4  w-[380px]",children:e.jsxs("div",{className:"flex space-x-6 items-center",children:[e.jsx("div",{className:"w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]",children:e.jsx("img",{src:`${t.image_256?"data:image/png;base64,"+t.image_256:"https://readymadeui.com/images/coffee1.webp"}`,alt:`image produit ccbm shop ${t.name}`,className:"w-full h-full object-contain"})}),e.jsx("div",{className:"flex-1 flex flex-col",children:e.jsx("p",{className:"font-medium text-[15px] text-qblack",children:t.name})})]})}),e.jsx("td",{className:"text-center py-4 px-2",children:e.jsx("div",{className:"flex space-x-1 items-center justify-center",children:e.jsxs("span",{className:"text-[15px] font-normal",children:[" ",l(t.en_promo?t.promo_price:t.list_price)]})})}),e.jsx("td",{className:" py-4",children:e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(d,{produit:t})})}),e.jsx("td",{className:"text-right py-4",children:e.jsx("div",{className:"flex space-x-1 items-center justify-center",children:e.jsxs("span",{className:"text-[15px] font-normal",children:[" ",l(t.en_promo?t.promo_price*t.quantity:t.list_price*t.quantity)]})})}),e.jsx("td",{className:"text-right py-4",children:e.jsx("div",{className:"flex space-x-1 items-center justify-center",children:e.jsx("button",{onClick:m=>r(m,t),className:"duration-200 hover:scale-150",children:e.jsx(o,{className:"hover:text-red-500"})})})})]},n))]})})}),e.jsx("div",{className:" mt-3 transition-all duration-300 ease-in-out bg-gray-200 text-[15px]  rounded-lg font-medium text-black  text-center py-2",children:"Livraison gratuite sur Dakar"})]})}export{j as P};
