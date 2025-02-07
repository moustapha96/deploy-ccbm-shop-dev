import{E as a}from"./index-f58fad96.js";const t={getPreCommandes:async e=>{try{return(await a.get(`/api/precommandes/${e}`)).data}catch(r){throw console.error("Erreur lors de la récupération des Precommandes",r),r}},getPreCommandeById:async(e,r)=>{try{return(await a.post("/api/precommandes/details",{precommande_id:r,partner_id:e})).data}catch(o){throw console.error(`Erreur lors de la récupération du modèle avec l'ID ${r}`,o),o}},createPreCommande:async e=>{try{return(await a.post("/api/precommandes",e)).data}catch(r){throw console.error("Erreur lors de la création du modèle",r),r}},updatePreCommande:async({order:e,partner_id:r})=>{try{return console.log({order_id:e,partner_id:r}),(await a.post("/api/precommandes/update",{order_id:e,partner_id:r})).data}catch(o){throw console.error("Erreur lors de la mise à jour du modèle ",o),o}},deletePreCommande:async e=>{try{return(await a.delete(`/api/precommandes/${e}`)).data}catch(r){throw console.error(`Erreur lors de la suppression du Commande avec l'ID ${e}`,r),r}},createCommandeWitoutPartner:async e=>{try{return(await a.post("/api/commande-sans-partner",e)).data}catch(r){throw console.error("Erreur lors de la création du modèle",r),r}}};export{t as P};
