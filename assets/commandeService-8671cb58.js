import{c as o}from"./index-05ec55af.js";const t={getCommandes:async e=>{try{return(await o.get(`/api/commandes/${e}`)).data}catch(r){throw console.error("Erreur lors de la récupération des commandes",r),r}},getCommandeTracking:async e=>{try{return(await o.post("/api/tracking",e)).data}catch(r){throw console.error("Erreur lors de la réccuperation de la commande",r),r}},deleteCommande:async e=>{try{return(await o.get(`/api/commande/${e}/delete`)).data}catch(r){throw console.error("Erreur lors de la suppression de la commande",r),r}},getCommandeAny:async e=>{try{return(await o.get(`/api/getcommande/${e}`)).data}catch(r){throw console.error("Erreur lors de la récupération des commandes",r),r}},getCommandeById:async(e,r)=>{try{return(await o.post("/api/commandes/details",{commande_id:r,partner_id:e})).data}catch(a){throw console.error(`Erreur lors de la récupération du modèle avec l'ID ${r}`,a),a}},createCommande:async e=>{try{return(await o.post("/api/commandes",e)).data}catch(r){throw console.error("Erreur lors de la création du modèle",r),r}},createCommandeWitoutPartner:async e=>{try{return(await o.post("/api/commande-sans-partner",e)).data}catch(r){throw console.error("Erreur lors de la création du modèle",r),r}},updateCommande:async(e,r)=>{try{return(await o.put(`/api/commandes/${e}`,r)).data}catch(a){throw console.error(`Erreur lors de la mise à jour du modèle avec l'ID ${e}`,a),a}}},n=t;export{n as C};
