const s=()=>{window.dataLayer||(window.dataLayer=[])},r=(a,t={})=>{s(),window.dataLayer.push({event:a,...t})},i=(a,t,o)=>{const e=r("purchase",{orderId:a,total:t,products:o.map(c=>({name:c.name,price:c.list_price,quantity:c.quantity}))});console.log("resultat track purchase "+e)},n=a=>{const t=r("click_image_product",{productName:a});console.log("produit cliqué "+a+"r = "+t)};export{n as a,i as t};
