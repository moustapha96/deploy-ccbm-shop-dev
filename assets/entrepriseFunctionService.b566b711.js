import{E as s}from"./index.3cdaf365.js";const n="https://orbitcity.sn/";async function t(){try{return(await s.get(`${n}api/companies`)).data}catch(e){throw console.error("Erreur lors de la sélection des abonnements:",e),e}}async function a(e){try{return(await s.post("api/companies/clients/demandeAdhesion",e)).data}catch(r){throw console.error("Erreur lors de la sélection des abonnements:",r),r}}async function c(e){try{return(await s.get(`api/creditcommandes/clients/${e}/liste`)).data}catch(r){throw console.error("Erreur lors de la sélection des abonnements:",r),r}}export{c as a,t as g,a as s};
