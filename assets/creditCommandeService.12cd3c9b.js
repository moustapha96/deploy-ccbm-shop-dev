import{v as t}from"./index.5afb7798.js";async function n(e){try{return(await t.get(`/api/creditcommandes/clients/${e}/stateCommande`)).data}catch(r){throw console.error("Erreur lors de la création du commande a credit",r),r}}async function s(e,r){try{return(await t.post("api/creditcommandes/details",{partner_id:e,order_id:r})).data}catch(o){throw console.error("Erreur lors de la sélection des abonnements:",o),o}}async function c(e){try{return(await t.post("/api/creditcommandes",e)).data}catch(r){throw console.error("Erreur lors de la création du commande a credit",r),r}}export{c as a,n as c,s as g};
