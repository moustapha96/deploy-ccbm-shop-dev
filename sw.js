if(!self.define){let e,a={};const i=(i,r)=>(i=new URL(i+".js",r).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(a[b])return;let n={};const s=e=>i(e,b),d={module:{uri:b},exports:n,require:s};a[b]=Promise.all(r.map((e=>d[e]||s(e)))).then((e=>(c(...e),n)))}}define(["./workbox-e28e86ca"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/ajax-loader-e7b44c86.gif",revision:null},{url:"assets/index-46564f48.js",revision:null},{url:"assets/index-75a99ee9.css",revision:null},{url:"assets/index-be2bf55e.js",revision:null},{url:"assets/index-c3bf4cf1.js",revision:null},{url:"assets/slick-12459f22.svg",revision:null},{url:"assets/vendor-d68c77ad.js",revision:null},{url:"assets/workbox-window.prod.es5-c46a1faa.js",revision:null},{url:"avatar.png",revision:"360b24e929f83049570907cd16e71cc5"},{url:"banner ccbm/1.png",revision:"9f80f6cee7be420c43717bce01fa6b9b"},{url:"banner ccbm/2.png",revision:"205a748b44ee96d63eeea81f3885bf6b"},{url:"banner ccbm/3.png",revision:"52cafb7bfe6d808f3d199bbf653a6101"},{url:"banner_ccbme_shop_1.png",revision:"d6de8b192bef7808ffd2370ff736215e"},{url:"banner_ccbme_shop_2.png",revision:"92857abf07bbcaa72a0b0a8bf9218e7e"},{url:"banner_ccbme_shop_3.jpg",revision:"e52fb11d7d3455e366afa5fe25c3f85c"},{url:"banner_ccbme_shop_pub_1.jpg",revision:"96c70dea3feef977136e28ebdecd3d0d"},{url:"banner_ccbme_shop_pub_2_1.png",revision:"fb92047e8e62057673df948c5d4562be"},{url:"banner_ccbme_shop_pub_2.png",revision:"ebb81ff9882b9bddb99340fc22ec6e0e"},{url:"banner_ccbme_shop_pub.png",revision:"5078bc0638d029a7d6cb212e37556a26"},{url:"creation/banner_ccbm_shop_reduction_tele.png",revision:"248454ee7f5b2fb1efe90ee460aaaed8"},{url:"creation/banner_remise_ccbm_shop.png",revision:"e21b792ad920bea9bbdff47de78f3782"},{url:"creation/ccbm_shop_banner_1_1.png",revision:"49311101569b5ab0c978cbfff289bbfc"},{url:"creation/ccbm_shop_banner_1.png",revision:"f7715813db49457db1b05daed6d6b727"},{url:"creation/ccbm_shop_banner_2.png",revision:"8d79eeed6bbf1976a17a3e4b5f9f52f5"},{url:"creation/ccbm_shop_banner_3.png",revision:"67fb494fc979952f6aaaa74498f16803"},{url:"creation/ccbm_shop_banner_4.png",revision:"4842232038a49f60252345ba9f5db6e5"},{url:"creation/ccbm_shop_banner_5.png",revision:"cbd2f405581f4d562d14e6d93ec3e81c"},{url:"creation/cuisinier.jpg",revision:"520d6ad68d2d83d52fbf827b25ab8e0f"},{url:"creation/cuisiniere.png",revision:"6397a3a7762b579028193cba7a95f2fc"},{url:"creation/image_ccbm_shop_10.png",revision:"fa63fbd1c17b65c46529186adb8c7cae"},{url:"creation/image_ccbm_shop_2.png",revision:"cbab67eebb9d72ca7554501fe253879b"},{url:"creation/image_ccbm_shop_3.png",revision:"6484c428aeafb86ebfebe675657054ad"},{url:"creation/image_ccbm_shop_4.png",revision:"28ea74561bb0109eeb8b7b92afcb0d83"},{url:"creation/image_ccbm_shop_5.png",revision:"2b1166dc44e277af0bc2781b78c9f783"},{url:"creation/image_ccbm_shop_6.png",revision:"9f80f6cee7be420c43717bce01fa6b9b"},{url:"creation/image_ccbm_shop_7.png",revision:"205a748b44ee96d63eeea81f3885bf6b"},{url:"creation/image_ccbm_shop_8.png",revision:"52cafb7bfe6d808f3d199bbf653a6101"},{url:"creation/image_ccbm_shop_television.png",revision:"a852295e8b435ccf4f7229343ee0e3c1"},{url:"creation/image_ccbm_shop.png",revision:"586d3eeefb355841192071a7cf7bcd79"},{url:"creation/machine_a_laver_ccbm_shop.png",revision:"42456aab57730cc870d443f4ca4313f6"},{url:"creation/side_bar_image_ccbm_shop.png",revision:"1d02777bb003ac388a5c9daf116b0938"},{url:"creation/television1.png",revision:"be3ab71ea28b83192c7c3d4e8bc8ba43"},{url:"creation/television2.png",revision:"bf34fdae50bad46eae5651e0271d3fce"},{url:"creation/television3.png",revision:"cd7718d6c2ea6d2b9f8abd480d75ac14"},{url:"favico.svg",revision:"868cdb0cdf4ffebbe45ce0bf24394732"},{url:"image_banner_ccbme/ccbm_image1.jpg",revision:"a8514e12923d0c4833112c74570265b2"},{url:"image_banner_ccbme/ccbm_image2.jpg",revision:"92a504fdc91ea4b72e765e182d74a8de"},{url:"image_banner_ccbme/ccbm_image3.jpg",revision:"e52fb11d7d3455e366afa5fe25c3f85c"},{url:"image_banner_ccbme/ccbm.jpg",revision:"3d02501664ec0f88b8a9fb3dd6b47638"},{url:"image_banner_ccbme/ccbmshop banner 2.jpg",revision:"11279a664c171beb84b464324706711f"},{url:"image_banner_ccbme/ccbmshop banner.jpg",revision:"96c70dea3feef977136e28ebdecd3d0d"},{url:"image_banner_ccbme/Plan de travail 1 copie.jpg",revision:"541fa9d590891aae85948d6afc836487"},{url:"images/about-banner.png",revision:"358f68ea4d0f2a1b10ca6b027f8ad053"},{url:"images/ads-1.png",revision:"958b6e028f0b808ab6b47a11135c17f4"},{url:"images/ads-2.1.png",revision:"17c17d13b0e11d3ad3b49a1f2e28b604"},{url:"images/ads-2.2.png",revision:"958b6e028f0b808ab6b47a11135c17f4"},{url:"images/ads-2.3.png",revision:"fa6a10bdb65cf08e0a14fd18fa53cd4d"},{url:"images/ads-2.4.png",revision:"7148252da9353768f13a625598984ee2"},{url:"images/ads-2.png",revision:"17c17d13b0e11d3ad3b49a1f2e28b604"},{url:"images/ads-3.png",revision:"fa6a10bdb65cf08e0a14fd18fa53cd4d"},{url:"images/ads-4.png",revision:"b8d4b685837b2ab49b9f634b07d3f0a5"},{url:"images/ads-5.png",revision:"0c0748bbdbc7e0acc4e3970bec9703aa"},{url:"images/ads-6.png",revision:"b27ce346187f4986fcb7718ed3e861c6"},{url:"images/app-screen.png",revision:"4d87e68292e626cb8f88035811879299"},{url:"images/apple-store.png",revision:"2f4703385f65500d1c28cd9a855d4176"},{url:"images/banner-1.1 (1).png",revision:"e8e24cc33bbea8cff01ca1c48f74b300"},{url:"images/banner-1.1.png",revision:"e8e24cc33bbea8cff01ca1c48f74b300"},{url:"images/banner-1.2.png",revision:"25981c0cab83ff45d926adaa868168fd"},{url:"images/banner-1.3.png",revision:"39417f217af43f18e2df96e0eec5069d"},{url:"images/banner-1.png",revision:"112722ce475af5b32fc1bd55f0a62e19"},{url:"images/banner-2.1.png",revision:"25981c0cab83ff45d926adaa868168fd"},{url:"images/banner-2.2.png",revision:"849a54b6d5ada82b916423238a751711"},{url:"images/banner-2.3.png",revision:"aed0fe83d4d516ada45e36bea7b118e3"},{url:"images/banner-2.png",revision:"e30d23f0af45915f0fe783482dd653b9"},{url:"images/banner-3.1.png",revision:"aed0fe83d4d516ada45e36bea7b118e3"},{url:"images/banner-3.png",revision:"4bf7cbcfd4eeda0742ec101d8f9b12c4"},{url:"images/banner-4.1.png",revision:"c2f240c8e8de89673e080c1b37ae9c02"},{url:"images/banner-4.2.png",revision:"c2f240c8e8de89673e080c1b37ae9c02"},{url:"images/banner-4.png",revision:"d20b0cbb8b2cfcab981f680acf884331"},{url:"images/banner-5.1.png",revision:"3ca148097fb17227ea50505bc735e3cd"},{url:"images/banner-5.2.png",revision:"3ca148097fb17227ea50505bc735e3cd"},{url:"images/banner-5.png",revision:"3ca148097fb17227ea50505bc735e3cd"},{url:"images/blog-details-1.jpg",revision:"039c82d9a592bb9f3776a2741bda3272"},{url:"images/blog-details-2.jpg",revision:"039c82d9a592bb9f3776a2741bda3272"},{url:"images/blog-img-1.jpg",revision:"88a09582143eb616772f41169339ca05"},{url:"images/blog-img-2.jpg",revision:"88a09582143eb616772f41169339ca05"},{url:"images/blog-img-3.jpg",revision:"88a09582143eb616772f41169339ca05"},{url:"images/blog-img-4.jpg",revision:"88a09582143eb616772f41169339ca05"},{url:"images/blog-img-5.jpg",revision:"88a09582143eb616772f41169339ca05"},{url:"images/blog-img-6.jpg",revision:"88a09582143eb616772f41169339ca05"},{url:"images/brand-1.png",revision:"43752e47bd2a9db9df72791f3e01a0b9"},{url:"images/brand-10.png",revision:"61c9751af00ef7105b975c0cfc199afb"},{url:"images/brand-11.png",revision:"984ca1410b9c9e7fa1c681771555090d"},{url:"images/brand-12.png",revision:"595c84212915b25491e77d08a8e5683f"},{url:"images/brand-2.png",revision:"80c33ba9801328db954e4f089c800afd"},{url:"images/brand-3.png",revision:"063526d10b1681d3ce732c520948ea0a"},{url:"images/brand-4.png",revision:"0a416a537ed2432bc3275b517d6d2dde"},{url:"images/brand-5.png",revision:"2791f443bd2eef35cb1203be5145b6e2"},{url:"images/brand-6.png",revision:"5ad2cf5e4ba05446867da0aea7c64766"},{url:"images/brand-7.png",revision:"985188815a80d0aa3042cf47959a84a2"},{url:"images/brand-8.png",revision:"5fd764ce75530fbfc2d7d0636b58e241"},{url:"images/brand-9.png",revision:"2164e3b22e9f326969cfa4f553f74032"},{url:"images/campaign-cover-countdown-2.jpg",revision:"498b0f898e3a7003cc6b4a0b0e5ff537"},{url:"images/campaign-cover-countdown-3.jpg",revision:"0a63f2eaba893fb897b9a0e301aaaeaa"},{url:"images/campaign-cover-countdown-4.jpg",revision:"0a63f2eaba893fb897b9a0e301aaaeaa"},{url:"images/campaign-cover-countdown.jpg",revision:"b352c8d8694edf5dba4ee57df605fa07"},{url:"images/card-1.svg",revision:"8565d46fcf4d9c6827ec89b6cd377d33"},{url:"images/card-2.svg",revision:"1cfe4d9b78772a2b439ccd7fb326b47c"},{url:"images/card-3.svg",revision:"414fc60e5ece2e3e6113829639a6d62c"},{url:"images/card-4.svg",revision:"a82f2ca1969204e29fdd5803e19a6999"},{url:"images/comment-user-1.png",revision:"30e887cac6d47d42018cdd83cbd58ae3"},{url:"images/comment-user-2.png",revision:"30e887cac6d47d42018cdd83cbd58ae3"},{url:"images/country-logo-16x16.png",revision:"1b22b4f2836083281c5ed7d11ae3ba60"},{url:"images/discount-banner-1.jpg",revision:"85efad935d653da12190a5d1b59f949c"},{url:"images/discount-banner-2.jpg",revision:"7a2611144a1178949b5379bf6a7a72f3"},{url:"images/discount-banner-3.1.png",revision:"4e8add15b4c913fbd2c8475168116e87"},{url:"images/discount-banner-3.jpg",revision:"05027c6b067293c87f8e9b29acc39c3d"},{url:"images/download-app-cover.png",revision:"91d3ad1723c86a4daf3a1e5c6cb393db"},{url:"images/edit-coverimg.jpg",revision:"4760ab8d449554e0f10facb98500a9db"},{url:"images/edit-logoimg.jpg",revision:"bf1bcb98db424bd7a1eda2beb1f513e4"},{url:"images/edit-profileimg.jpg",revision:"610891239b63f6480a9a20f9b5bcb6ad"},{url:"images/flash-sale-ads.png",revision:"5c05c260e73411a46a01fe28eaabe5e6"},{url:"images/footer-four.png",revision:"378e66abf564cc6f1e0cc657d7ecff02"},{url:"images/logo-2.svg",revision:"4e73a0031685982623f95b9b9cfeb989"},{url:"images/logo-3.svg",revision:"7c56c0732aa699094a07c17a99400078"},{url:"images/logo-4.svg",revision:"6d1b31f9814c9205c7bcd5410b26b56b"},{url:"images/logo-5.svg",revision:"e52405fc97053e9231cc772df4c03692"},{url:"images/logo.svg",revision:"8d4997672b3f4aa18fce8ad65140d682"},{url:"images/mega-menu-thumb.jpg",revision:"c39c332b753019e6fb5416aa90f221af"},{url:"images/new-letter.jpg",revision:"057961a91f368a096aa8fa07b485bb95"},{url:"images/payment-getways.png",revision:"26e884b6cda935dde93a6fb35fd6ccf3"},{url:"images/play-store.png",revision:"409ff06effc460cc7cd778c1d7fb44c9"},{url:"images/primary-ads.png",revision:"e6885aed8a9f722910c3c46998c50b4b"},{url:"images/product-details-1.png",revision:"224abd405a81ac2bea882847a8a7323d"},{url:"images/product-details-2.png",revision:"365bc65b7ed1d7f4bb053fb9f7a4b294"},{url:"images/product-details-3.png",revision:"e2ff0153377b1c53630746a7fe9473ae"},{url:"images/product-details-4.png",revision:"a4c61f647ed3098f537ee47922fbe73c"},{url:"images/product-details-5.png",revision:"09aed28a85306749cc93ebe2ea94a586"},{url:"images/product-img-1.jpg",revision:"04582c9fc567cbf0f772dfdfe32a2352"},{url:"images/product-img-10.jpg",revision:"590142d41a99525a8142b7f54aebbc08"},{url:"images/product-img-11.jpg",revision:"7c3fd4ae03bd42850cffc9ce449e3e70"},{url:"images/product-img-12.jpg",revision:"3c6b4cc29ec9e3c737d4c1e25e245dda"},{url:"images/product-img-13.jpg",revision:"1e762466146781dd8c23fbba65351155"},{url:"images/product-img-14.jpg",revision:"cbbc1c1120a60ad68ae2d96b190e5673"},{url:"images/product-img-15.jpg",revision:"610891239b63f6480a9a20f9b5bcb6ad"},{url:"images/product-img-16.jpg",revision:"1e762466146781dd8c23fbba65351155"},{url:"images/product-img-17.jpg",revision:"8932c0aaa945d0951faff0a28cb017f6"},{url:"images/product-img-18.jpg",revision:"8932c0aaa945d0951faff0a28cb017f6"},{url:"images/product-img-19.jpg",revision:"8932c0aaa945d0951faff0a28cb017f6"},{url:"images/product-img-2.1.jpg",revision:"efdc9f81015bcb7909a21eac9b49cd90"},{url:"images/product-img-2.10.jpg",revision:"efdc9f81015bcb7909a21eac9b49cd90"},{url:"images/product-img-2.11.jpg",revision:"efdc9f81015bcb7909a21eac9b49cd90"},{url:"images/product-img-2.3.jpg",revision:"efdc9f81015bcb7909a21eac9b49cd90"},{url:"images/product-img-2.4.jpg",revision:"efdc9f81015bcb7909a21eac9b49cd90"},{url:"images/product-img-2.5.jpg",revision:"efdc9f81015bcb7909a21eac9b49cd90"},{url:"images/product-img-2.6.jpg",revision:"efdc9f81015bcb7909a21eac9b49cd90"},{url:"images/product-img-2.7.jpg",revision:"efdc9f81015bcb7909a21eac9b49cd90"},{url:"images/product-img-2.8.jpg",revision:"efdc9f81015bcb7909a21eac9b49cd90"},{url:"images/product-img-2.9.jpg",revision:"efdc9f81015bcb7909a21eac9b49cd90"},{url:"images/product-img-2.jpg",revision:"b083846718bb7c73532f486e84860c08"},{url:"images/product-img-20.jpg",revision:"8932c0aaa945d0951faff0a28cb017f6"},{url:"images/product-img-21.jpg",revision:"8932c0aaa945d0951faff0a28cb017f6"},{url:"images/product-img-22.jpg",revision:"8932c0aaa945d0951faff0a28cb017f6"},{url:"images/product-img-23.jpg",revision:"8932c0aaa945d0951faff0a28cb017f6"},{url:"images/product-img-24.jpg",revision:"8932c0aaa945d0951faff0a28cb017f6"},{url:"images/product-img-25.jpg",revision:"8932c0aaa945d0951faff0a28cb017f6"},{url:"images/product-img-26.jpg",revision:"8932c0aaa945d0951faff0a28cb017f6"},{url:"images/product-img-27.jpg",revision:"8932c0aaa945d0951faff0a28cb017f6"},{url:"images/product-img-28.jpg",revision:"8932c0aaa945d0951faff0a28cb017f6"},{url:"images/product-img-3.jpg",revision:"7c3fd4ae03bd42850cffc9ce449e3e70"},{url:"images/product-img-4.jpg",revision:"610891239b63f6480a9a20f9b5bcb6ad"},{url:"images/product-img-5.jpg",revision:"1e762466146781dd8c23fbba65351155"},{url:"images/product-img-6.jpg",revision:"cf271b27cb25d56d56771b9d1f8292b3"},{url:"images/product-img-7.jpg",revision:"610891239b63f6480a9a20f9b5bcb6ad"},{url:"images/product-img-8.jpg",revision:"21222af9f1acbbfed2d9770029940eef"},{url:"images/product-img-9.jpg",revision:"1e762466146781dd8c23fbba65351155"},{url:"images/saller-1.png",revision:"cb7207f40a2565a8bf894a154771438a"},{url:"images/saller-2.png",revision:"db35b472a1f749074c24257af80404cb"},{url:"images/saller-3.png",revision:"05b423e48ba0f504f05c2c4a68bcf582"},{url:"images/saller-4.png",revision:"2ffa6caee0611ce63e0339077309ed80"},{url:"images/saller-5.png",revision:"6b46e074e864d5250779fa9f11e8a8f3"},{url:"images/saller-6.png",revision:"e73f44d4b7de97785b592572b9cb10ef"},{url:"images/saller-7.png",revision:"f1e0b47c68888099f178abde0b950149"},{url:"images/saller-8.png",revision:"7b7d93d9613b11079bd0c4e40735c7b0"},{url:"images/saller-9.png",revision:"6be06bcfb2fbc792a58d09e4f25e3c04"},{url:"images/saller-cover.png",revision:"661a1a979221c53730055a4f12f9861d"},{url:"images/sallers-cover-1.png",revision:"6990d9128015f746fe17cf461d52db8e"},{url:"images/sallers-cover-2.png",revision:"229e53290858762241bf70252331ae06"},{url:"images/sallers-cover-3.png",revision:"f97fbaadd809f5cb4d38088ec031dc57"},{url:"images/sallers-cover-4.png",revision:"85273406384318599821254bc5e36e19"},{url:"images/sallers-cover-5.png",revision:"b9ec2fa354a148df5d4e1319a1745509"},{url:"images/sallers-cover-6.png",revision:"6f46d1f9c2206124efa105d0ee2aa9ff"},{url:"images/sallers-cover-7.png",revision:"6990d9128015f746fe17cf461d52db8e"},{url:"images/section-category-1.jpg",revision:"5271ae585af09f2c366091cb8937a721"},{url:"images/section-category-2.jpg",revision:"5271ae585af09f2c366091cb8937a721"},{url:"images/service-bg.png",revision:"8e78ad446682e08f8436d655438853bd"},{url:"index.html",revision:"f60563e415d0807e02e3cc43410a1df3"},{url:"logo_192.png",revision:"5cedd8205932de6a41009f6f5d49ac8b"},{url:"logo_384.png",revision:"e43b11a0331d4cf7192feff95b0527f2"},{url:"logo_512.png",revision:"169cb6edddd0813c115b000c2988123e"},{url:"logo_ccbm_shop.png",revision:"7b65ab60e3489e67a02988b481d16d08"},{url:"logo.png",revision:"7b65ab60e3489e67a02988b481d16d08"},{url:"orbit_city.png",revision:"69ba835af55675db4bb027e1759b43af"},{url:"paydunya.png",revision:"912066d88416fd6614903cd16c23300e"},{url:"logo_192.png",revision:"5cedd8205932de6a41009f6f5d49ac8b"},{url:"logo_512.png",revision:"169cb6edddd0813c115b000c2988123e"},{url:"manifest.webmanifest",revision:"a2a21486bc8a51cedcc74900e13e3f07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/"),{allowlist:[/^(?!\/__).*/]})),e.registerRoute(/\.(png|jpg|gif|svg)$/,new e.StaleWhileRevalidate,"GET")}));
