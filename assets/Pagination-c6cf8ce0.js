import{j as s,o as n}from"./index-706b73a2.js";import{C as x}from"./chevron-left-923f3b68.js";const c=({currentPage:l,totalPages:e,onPageChange:d})=>{const o=()=>{const i=[];for(let t=Math.max(2,l-2);t<=Math.min(e-1,l+2);t++)i.push(t);return l-2>2&&i.unshift("..."),l+2<e-1&&i.push("..."),i.unshift(1),e!==1&&i.push(e),i};return s.jsx("nav",{className:"flex justify-center items-center mt-8 px-4","aria-label":"Pagination",children:s.jsxs("ul",{className:"flex flex-wrap justify-center items-center space-x-1 md:space-x-2",children:[s.jsx("li",{children:s.jsx("button",{onClick:()=>d(Math.max(1,l-1)),disabled:l===1,className:"p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-qyellow disabled:opacity-50 disabled:cursor-not-allowed","aria-label":"Previous page",children:s.jsx(x,{className:"w-5 h-5"})})}),o().map((a,i)=>s.jsx("li",{children:typeof a=="number"?s.jsx("button",{onClick:()=>d(a),className:`hidden sm:block px-3 py-2 rounded ${l===a?"bg-bleu-logo text-white":"bg-gray-200 text-gray-700 hover:bg-qyellow"}`,"aria-current":l===a?"page":void 0,children:a}):s.jsx("span",{className:"hidden sm:block px-3 py-2",children:a})},i)),s.jsx("li",{className:"sm:hidden",children:s.jsxs("span",{className:"px-3 py-2 text-gray-700",children:[l," / ",e]})}),s.jsx("li",{children:s.jsx("button",{onClick:()=>d(Math.min(e,l+1)),disabled:l===e,className:"p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-qyellow disabled:opacity-50 disabled:cursor-not-allowed","aria-label":"Next page",children:s.jsx(n,{className:"w-5 h-5"})})})]})})},p=c;export{p as P};
