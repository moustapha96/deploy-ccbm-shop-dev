import{p as a}from"./index-706b73a2.js";const i={test:{headers:{"Content-Type":"application/json","PAYDUNYA-MASTER-KEY":"voFGVcul-uCsd-1sw5-wfGz-ukqScIQoOyDu","PAYDUNYA-PRIVATE-KEY":"test_private_LJfJe2zAiwndwRq6ZF4qIDIoApZ","PAYDUNYA-TOKEN":"VaZUkYb6b1JOpZfxUe3R"},url:"https://app.paydunya.com/sandbox-api/v1/checkout-invoice/confirm/"},live:{headers:{"Content-Type":"application/json","PAYDUNYA-MASTER-KEY":"voFGVcul-uCsd-1sw5-wfGz-ukqScIQoOyDu","PAYDUNYA-PRIVATE-KEY":"live_private_KvbXuQU1IJ4z68hQOU9YeEtrUjW","PAYDUNYA-TOKEN":"cjTGi71WL8xOTCrsJisR"},url:"https://app.paydunya.com/api/v1/checkout-invoice/confirm/"}},d={createPrecommandePaiment:async r=>{try{return(await a.get(`/api/precommande/${r}/payment`)).data}catch(e){throw console.error("Erreur lors du paiement",e),e}},createPrecommandePaimentMontant:async(r,e,o)=>{try{return(await a.get(`/api/precommande/${r}/payment/${e}/${o}`)).data}catch(t){throw console.error("Erreur lors du paiement",t),t}},createPrecommandePaimentState:async(r,e,o)=>{try{return(await a.get(`/api/precommande/${r}/payment/${e}/${o}`)).data}catch(t){throw console.error("Erreur lors du paiement",t),t}},createCommandePaiment:async r=>{try{return(await a.get(`/api/commande/${r}/payment`)).data}catch(e){throw console.error("Erreur lors du paiement",e),e}},setPaymentDetails:async r=>{try{return(await a.post("/api/payment/set",r)).data}catch(e){throw console.error("Erreur lors de l'enregistrement des détails du paiement",e),e}},getPaymentDetails:async r=>{try{return(await a.get(`/api/payment/get/${r}`)).data}catch(e){throw console.error("Erreur lors de la récupération des détails du paiement",e),e}},getPaymentsPartner:async r=>{try{return(await a.get(`/api/payment/partner/${r}`)).data}catch(e){throw console.error("Erreur lors de la récupération des détails du paiement",e),e}},getPaymentDetailsById:async r=>{try{return(await a.get(`/api/payment/byId/${r}`)).data}catch(e){throw console.error("Erreur lors de la récupération des détails du paiement",e),e}},getPaymentDetailsByToken:async r=>{try{return(await a.get(`/api/payment/byToken/${r}`)).data}catch(e){throw console.error("Erreur lors de la récupération des détails du paiement",e),e}},updatePaymentDetails:async(r,e,o,t,n,p,c)=>{console.log("id precommande ",r);try{return(await a.put(`/api/payment/update/${r}`,{payment_state:e,url_facture:o,customer_name:t,customer_email:n,customer_phone:p,token_status:c})).data}catch(s){throw console.error("Erreur lors de la récupération des détails du paiement",s),s}},getPaymentDetailsByIdOrder:async r=>{try{return(await a.get(`/api/payment/byOrder/${r}`)).data}catch(e){throw console.error("Erreur lors de la récupération des détails du paiement",e),e}},putPaymentDetailByToken:async(r,e,o,t,n,p)=>{let c={url_facture:e,customer_name:o,customer_email:t,customer_phone:n,payment_state:p};console.log(c);try{return(await a.put(`/api/payment/verify/${r}`,c)).data}catch(s){throw console.error("Erreur lors de la récupération des détails du paiement",s),s}},confirmInvoice:async r=>{const e={"Content-Type":"application/json","PAYDUNYA-MASTER-KEY":"voFGVcul-uCsd-1sw5-wfGz-ukqScIQoOyDu","PAYDUNYA-PRIVATE-KEY":"live_private_KvbXuQU1IJ4z68hQOU9YeEtrUjW","PAYDUNYA-TOKEN":"cjTGi71WL8xOTCrsJisR"},o=`https://app.paydunya.com/api/v1/checkout-invoice/confirm/${r}`,t=await a.get(o,{headers:e});if(t.status===200)return t.data;throw new Error(t.data.response_text)},confirmInvoice2:async(r,e=!1)=>{const o=e?i.live:i.test,t=`${o.url}${r}`;try{const n=await a.get(t,{headers:o.headers});if(n.status===200)return n.data;throw new Error(n.data.response_text)}catch(n){throw new Error(n.message)}}},l=d;export{l as P};
