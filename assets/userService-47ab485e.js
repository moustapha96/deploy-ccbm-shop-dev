import{p as s}from"./index-8d0eba14.js";const n={getUsers:async()=>{try{return(await s.get("/api/users")).data}catch(e){throw console.error("Erreur lors de la récupération des users",e),e}},getCompte:async e=>{try{return(await s.get(`/api/users/${e}/compte`)).data}catch(r){throw console.error(`Erreur lors de la récupération du modèle avec l'ID ${e}`,r),r}},getUserById:async e=>{try{return(await s.get(`/api/users/${e}`)).data}catch(r){throw console.error(`Erreur lors de la récupération du modèle avec l'ID ${e}`,r),r}},createUser:async e=>{try{return(await s.post("/api/new_compte",e)).data}catch(r){throw console.error("Erreur lors de la création du modèle",r),r}},updateUser:async(e,r)=>{try{return(await s.put(`/api/users/${e}/update`,r)).data}catch(o){throw console.error(`Erreur lors de la mise à jour du modèle avec l'ID ${e}`,o),o}},updateUserCompte:async(e,r)=>{try{return(await s.post(`/api/partner/${e}/update`,r)).data}catch(o){throw console.error(`Erreur lors de la mise à jour du modèle avec l'ID ${e}`,o),o}},deleteUser:async e=>{try{return(await s.delete(`/api/users/${e}`)).data}catch(r){throw console.error(`Erreur lors de la suppression du user avec l'ID ${e}`,r),r}},login:async e=>{try{return(await s.get(`/api/auth/get_tokens?username=${e.username}&password=${e.password}`)).data}catch(r){throw console.error("Erreur lors de la récupération des tokens",r),r}},verifiedCompte:async e=>{try{return(await s.get(`/api/users/verified/${e}`)).data}catch(r){throw console.error("Erreur lors de la vérification de votre compte",r),r}},resetPassword:async e=>{try{return(await s.get(`/api/reset-password/${e}`)).data}catch(r){throw console.error("Erreur lors de la récupération des tokens",r),r}},newPassword:async e=>{try{return(await s.post("/api/new-password",e)).data}catch(r){throw console.error("Erreur lors de la récupération des tokens",r),r}},refreshAccessToken:async()=>{const e=localStorage.getItem("refresh_token");try{const r=await s.post("/api/auth/refresh_token",{refresh_token:e}),{access_token:o,expires_in:t}=r.data;return localStorage.setItem("accessToken",o),localStorage.setItem("expires_in",t),r}catch(r){throw console.error("Erreur lors du rafraîchissement du token",r),r}},deleteAccessToken:async e=>{try{return(await s.post("/api/auth/delete_tokens",{refreshToken:e})).data}catch(r){throw console.error("Erreur lors de la suppression du token",r),r}},getCurrentUser:async e=>{try{return(await s.get(`/api/users/${e}`)).data}catch(r){throw console.error(`Erreur lors de la récupération de l'utilisateur avec l'ID ${e}`,r),r}},updateUserAvatar:async e=>{const r=localStorage.getItem("partner_id");try{const o=await s.put(`/api/users/avatar/${r}`,{avatar:e},{headers:{"Content-Type":"application/json"}});return console.log(o),o.data}catch(o){throw console.error("Erreur lors de la mise à jour de l'avatar",o),o}},updateUserInfo:async e=>{try{return(await s.put("/api/users/me",e)).data}catch(r){throw console.error("Erreur lors de la mise à jour des informations de l'utilisateur",r),r}},getPartnerByEmail:async e=>{try{return(await s.get(`/api/partnerByEmail/${e}`)).data}catch(r){throw console.error("Erreur lors de la?}",r),r}},createPasswordPartner:async e=>{try{return(await s.post(`/api/partner-create/${e.email}/update`,e)).data}catch(r){throw console.error("Erreur lors de la création du mot de passe",r),r}},getDetailsCompteUser:async e=>{try{return(await s.get(`api/partner/compte/${e}/details`)).data}catch(r){throw console.error("Erreur lors de la sélection des abonnements:",r),r}}};export{n as u};
