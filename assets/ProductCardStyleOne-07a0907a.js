import{C as w,a as v,u as C,j as e,f as o,S as P,b as _,c as k,N as S,B as l}from"./index-f828fcf3.js";import{u as T,r as n,L as c}from"./vendor-ee8c1fef.js";import{E as $}from"./eye-846e4664.js";function F({datas:t,type:a=3}){T();const{addToCart:p,addToWishlist:d,addToPreorder:A,preorder:u,isProductInWishlist:x,addToCreditOrder:h}=n.useContext(w),{showPopup:m,handleClosePopup:f}=v(),[g,i]=n.useState(!1),{user:r}=C(),j=s=>{s.preventDefault(),h(t,1),i(!0),console.log("Ajout au preorder :",u),l.success("Produit ajouté",{position:"top-center",autoClose:2e3})},b=s=>{console.log(`Subscribed with email: ${s}`)},y=s=>{s.preventDefault(),p(t,1),i(!0),l.success("Produit ajouté",{position:"top-center",autoClose:2e3})},N=s=>{s.preventDefault(),d(t,1),l.success("Produit ajouté",{position:"top-center",autoClose:2e3})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"product-card-one w-full h-full bg-white relative group overflow-hidden",style:{boxShadow:"0px 15px 64px 0px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"product-card-img w-full h-[300px]",style:{background:`url('data:image/png;base64,${t.image_256}') no-repeat center`},children:e.jsxs("div",{className:"absolute  left-0 right-0 flex justify-between",children:[t.en_promo&&e.jsx("div",{className:"product-type absolute left-[14px] top-[17px]",children:e.jsx("span",{className:`text-[8px] font-bold leading-none py-[5px] px-2 uppercase text-white \r
                      rounded-full tracking-wider bg-bleu-logo`,children:"En promo"})}),t.categ_id&&e.jsx("div",{className:"product-type absolute right-[14px] top-[17px]",children:e.jsx("span",{className:`text-[8px] font-bold leading-none py-[5px] px-2 uppercase text-white \r
                      rounded-full tracking-wider bg-qyellow`,children:t.categ_id})})]})}),e.jsxs("div",{className:"product-card-details px-[30px] pb-[30px] relative",children:[e.jsx(c,{to:`/single-product/${t.id}`,children:e.jsx("p",{className:"title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-bleu-logo",children:t.name})}),e.jsxs("p",{className:"price",children:[e.jsx("span",{className:"offer-price line-through text-qred font-600 text-[18px]",children:t.creditorder_price>0&&e.jsx(e.Fragment,{children:o(t.creditorder_price)})}),e.jsx("br",{}),t.en_promo?e.jsx("span",{className:"offer-price text-bleu-logo font-600 text-[18px]",children:o(t.promo_price)}):e.jsx("span",{className:"offer-price text-bleu-logo font-600 text-[18px]",children:o(t.list_price)})]}),e.jsxs("div",{className:"w-full left-0 flex flex-col gap-3  mt-3 items-center",children:[t.sale_ok&&e.jsxs("button",{type:"button",onClick:y,className:`w-full h-10 flex items-center justify-center gap-2 ${a===3?"blue-logo-btn":"yellow-btn"}`,children:[e.jsx(P,{}),e.jsx("span",{children:"Commander"})]}),r&&r.adhesion=="accepted"&&e.jsx(e.Fragment,{children:t.is_creditorder&&e.jsxs("button",{type:"button",onClick:j,className:"w-full h-20 flex items-center justify-center gap-2 vert-btn ",children:[e.jsx("span",{children:e.jsx(_,{})}),e.jsx("span",{children:"À crédit"})]})})]})]}),e.jsxs("div",{className:"quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20  transition-all duration-300 ease-in-out",children:[e.jsx("span",{className:"w-10 h-10 flex justify-center items-center bg-primarygray rounded",children:e.jsx(c,{to:`/single-product/${t.id}`,className:"cursor-pointer hover:text-gray-500 hover:scale-150 duration-300",children:e.jsx($,{})})}),e.jsx("span",{className:"w-10 h-10 flex justify-center items-center bg-primarygray rounded",children:e.jsx(k,{className:`${x(t)?"text-yellow-500":""} cursor-pointer hover:text-yellow-500 hover:scale-150 duration-300`,onClick:N})})]})]}),g&&!r&&e.jsx(S,{onClose:f,onSubscribe:b,isVisible:m})]})}export{F as P};
