import{o as n}from"./index.f58b74ca.js";const s="https://orbitcity.sn/";async function a(r){try{return console.log(r),(await n.post(`${s}api/companies/clients/liste`,r)).data}catch(e){throw console.error("Erreur lors de la sélection des abonnements:",e),e}}async function c(){try{return(await n.get(`${s}api/companies`)).data}catch(r){throw console.error("Erreur lors de la sélection des abonnements:",r),r}}async function i(r){try{return(await n.get(`${s}api/companies/clients/compte/${r}`)).data}catch(e){throw console.error("Erreur lors de la sélection des abonnements:",e),e}}async function l(r){try{return(await n.get(`${s}api/companies/clients/commandes/${r}`)).data}catch(e){throw console.error("Erreur lors de la sélection des abonnements:",e),e}}async function p(r){try{return(await n.get(`${s}api/companies/clients/commandesECDV/${r}`)).data}catch(e){throw console.error("Erreur lors de la sélection des abonnements:",e),e}}async function d(r){try{return(await n.get(`${s}api/companies/clients/commandesRejete/${r}`)).data}catch(e){throw console.error("Erreur lors de la sélection des abonnements:",e),e}}async function m(r){try{return(await n.get(`${s}api/companies/clients/commandesApprouve/${r}`)).data}catch(e){throw console.error("Erreur lors de la sélection des abonnements:",e),e}}async function u(r,e){try{return(await n.put(`${s}api/companies/clients/commande/changeState/${r}`,{state:e})).data}catch(o){throw console.error("Erreur lors de la sélection des abonnements:",o),o}}async function h(r){try{return(await n.get(`${s}api/companies/clients/commandes/${r}`)).data}catch(e){throw console.error("Erreur lors de la sélection des abonnements:",e),e}}async function y(r){try{return(await n.post("api/companies/clients/demandeAdhesion",r)).data}catch(e){throw console.error("Erreur lors de la sélection des abonnements:",e),e}}async function w(r){try{return(await n.get(`api/creditcommandes/clients/${r}/liste`)).data}catch(e){throw console.error("Erreur lors de la sélection des abonnements:",e),e}}export{w as a,m as b,p as c,d,a as e,i as f,c as g,l as h,u as i,h as j,y as s};
