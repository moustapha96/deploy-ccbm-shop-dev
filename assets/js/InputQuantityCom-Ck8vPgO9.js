import{c as r,C as l,j as t}from"./index-CX-qx_4j.js";import{b as i}from"./vendor-DZBautpX.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);function u({produit:e}){const{updateWishlist:n}=i.useContext(l),s=a=>{a.preventDefault(),n(e,e.quantity+1)},c=a=>{a.preventDefault(),e.quantity>1&&n(e,e.quantity-1)};return t.jsx("div",{className:"w-[120px] h-[40px] px-[26px] flex items-center border border-qgray-border",children:t.jsxs("div",{className:"flex justify-between items-center w-full",children:[t.jsx("button",{onClick:c,type:"button",className:"text-base text-qgray",children:"-"}),t.jsx("span",{className:"text-qblack",children:e.quantity?e.quantity:0}),t.jsx("button",{onClick:s,type:"button",className:"text-base text-qgray",children:"+"})]})})}export{y as C,u as I};
