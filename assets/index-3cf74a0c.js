import{c as B,f as ni,r as si}from"./vendor-04b9cdeb.js";var qt={},at={},M=function(t){return t&&t.Math===Math&&t},c=M(typeof globalThis=="object"&&globalThis)||M(typeof window=="object"&&window)||M(typeof self=="object"&&self)||M(typeof B=="object"&&B)||M(typeof B=="object"&&B)||function(){return this}()||Function("return this")(),oi={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},lt=typeof document=="object"&&document.all,l=typeof lt>"u"&&lt!==void 0?function(t){return typeof t=="function"||t===lt}:function(t){return typeof t=="function"},ui=l,P=function(t){return typeof t=="object"?t!==null:ui(t)},li=c,ve=P,jt=li.document,hi=ve(jt)&&ve(jt.createElement),Ht=function(t){return hi?jt.createElement(t):{}},ci=Ht,ht=ci("span").classList,fe=ht&&ht.constructor&&ht.constructor.prototype,vi=fe===Object.prototype?void 0:fe,d=function(t){try{return!!t()}catch{return!0}},fi=d,ur=!fi(function(){var t=(function(){}).bind();return typeof t!="function"||t.hasOwnProperty("prototype")}),lr=ur,hr=Function.prototype,Ct=hr.call,di=lr&&hr.bind.bind(Ct,Ct),v=lr?di:function(t){return function(){return Ct.apply(t,arguments)}},cr=v,pi=cr({}.toString),mi=cr("".slice),vr=function(t){return mi(pi(t),8,-1)},bi=v,gi=d,yi=vr,ct=Object,$i=bi("".split),Oi=gi(function(){return!ct("z").propertyIsEnumerable(0)})?function(t){return yi(t)==="String"?$i(t,""):ct(t)}:ct,fr=function(t){return t==null},Pi=fr,Ti=TypeError,nt=function(t){if(Pi(t))throw new Ti("Can't call method on "+t);return t},Si=Oi,xi=nt,L=function(t){return Si(xi(t))},dr={exports:{}},de=c,Ei=Object.defineProperty,Xt=function(t,e){try{Ei(de,t,{value:e,configurable:!0,writable:!0})}catch{de[t]=e}return e},Di=c,Ri=Xt,pe="__core-js_shared__",me=dr.exports=Di[pe]||Ri(pe,{});(me.versions||(me.versions=[])).push({version:"3.37.1",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Jt=dr.exports,be=Jt,pr=function(t,e){return be[t]||(be[t]=e||{})},Ii=nt,wi=Object,mr=function(t){return wi(Ii(t))},Mi=v,Ai=mr,_i=Mi({}.hasOwnProperty),y=Object.hasOwn||function(e,r){return _i(Ai(e),r)},Ni=v,ji=0,Ci=Math.random(),Li=Ni(1 .toString),br=function(t){return"Symbol("+(t===void 0?"":t)+")_"+Li(++ji+Ci,36)},Vi=typeof navigator<"u"&&String(navigator.userAgent)||"",gr=c,vt=Vi,ge=gr.process,ye=gr.Deno,$e=ge&&ge.versions||ye&&ye.version,Oe=$e&&$e.v8,f,tt;Oe&&(f=Oe.split("."),tt=f[0]>0&&f[0]<4?1:+(f[0]+f[1]));!tt&&vt&&(f=vt.match(/Edge\/(\d+)/),(!f||f[1]>=74)&&(f=vt.match(/Chrome\/(\d+)/),f&&(tt=+f[1])));var Fi=tt,Pe=Fi,Bi=d,Gi=c,ki=Gi.String,yr=!!Object.getOwnPropertySymbols&&!Bi(function(){var t=Symbol("symbol detection");return!ki(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&Pe&&Pe<41}),Wi=yr,$r=Wi&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Ui=c,Ki=pr,Te=y,Yi=br,zi=yr,qi=$r,I=Ui.Symbol,ft=Ki("wks"),Hi=qi?I.for||I:I&&I.withoutSetter||Yi,T=function(t){return Te(ft,t)||(ft[t]=zi&&Te(I,t)?I[t]:Hi("Symbol."+t)),ft[t]},Xi=P,Ji=String,Zi=TypeError,st=function(t){if(Xi(t))return t;throw new Zi(Ji(t)+" is not an object")},Or={},Qi=d,$=!Qi(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),ta=$,ea=d,Pr=ta&&ea(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),S={},ra=$,ia=d,aa=Ht,Tr=!ra&&!ia(function(){return Object.defineProperty(aa("div"),"a",{get:function(){return 7}}).a!==7}),na=ur,G=Function.prototype.call,ot=na?G.bind(G):function(){return G.apply(G,arguments)},dt=c,sa=l,oa=function(t){return sa(t)?t:void 0},Zt=function(t,e){return arguments.length<2?oa(dt[t]):dt[t]&&dt[t][e]},ua=v,la=ua({}.isPrototypeOf),ha=Zt,ca=l,va=la,fa=$r,da=Object,Sr=fa?function(t){return typeof t=="symbol"}:function(t){var e=ha("Symbol");return ca(e)&&va(e.prototype,da(t))},pa=String,ma=function(t){try{return pa(t)}catch{return"Object"}},ba=l,ga=ma,ya=TypeError,xr=function(t){if(ba(t))return t;throw new ya(ga(t)+" is not a function")},$a=xr,Oa=fr,Pa=function(t,e){var r=t[e];return Oa(r)?void 0:$a(r)},pt=ot,mt=l,bt=P,Ta=TypeError,Sa=function(t,e){var r,i;if(e==="string"&&mt(r=t.toString)&&!bt(i=pt(r,t))||mt(r=t.valueOf)&&!bt(i=pt(r,t))||e!=="string"&&mt(r=t.toString)&&!bt(i=pt(r,t)))return i;throw new Ta("Can't convert object to primitive value")},xa=ot,Se=P,xe=Sr,Ea=Pa,Da=Sa,Ra=T,Ia=TypeError,wa=Ra("toPrimitive"),Ma=function(t,e){if(!Se(t)||xe(t))return t;var r=Ea(t,wa),i;if(r){if(e===void 0&&(e="default"),i=xa(r,t,e),!Se(i)||xe(i))return i;throw new Ia("Can't convert object to primitive value")}return e===void 0&&(e="number"),Da(t,e)},Aa=Ma,_a=Sr,Er=function(t){var e=Aa(t,"string");return _a(e)?e:e+""},Na=$,ja=Tr,Ca=Pr,k=st,Ee=Er,La=TypeError,gt=Object.defineProperty,Va=Object.getOwnPropertyDescriptor,yt="enumerable",$t="configurable",Ot="writable";S.f=Na?Ca?function(e,r,i){if(k(e),r=Ee(r),k(i),typeof e=="function"&&r==="prototype"&&"value"in i&&Ot in i&&!i[Ot]){var a=Va(e,r);a&&a[Ot]&&(e[r]=i.value,i={configurable:$t in i?i[$t]:a[$t],enumerable:yt in i?i[yt]:a[yt],writable:!1})}return gt(e,r,i)}:gt:function(e,r,i){if(k(e),r=Ee(r),k(i),ja)try{return gt(e,r,i)}catch{}if("get"in i||"set"in i)throw new La("Accessors not supported");return"value"in i&&(e[r]=i.value),e};var Fa=Math.ceil,Ba=Math.floor,Ga=Math.trunc||function(e){var r=+e;return(r>0?Ba:Fa)(r)},ka=Ga,Dr=function(t){var e=+t;return e!==e||e===0?0:ka(e)},Wa=Dr,Ua=Math.max,Ka=Math.min,Ya=function(t,e){var r=Wa(t);return r<0?Ua(r+e,0):Ka(r,e)},za=Dr,qa=Math.min,Ha=function(t){var e=za(t);return e>0?qa(e,9007199254740991):0},Xa=Ha,Ja=function(t){return Xa(t.length)},Za=L,Qa=Ya,tn=Ja,De=function(t){return function(e,r,i){var a=Za(e),n=tn(a);if(n===0)return!t&&-1;var s=Qa(i,n),o;if(t&&r!==r){for(;n>s;)if(o=a[s++],o!==o)return!0}else for(;n>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}},en={includes:De(!0),indexOf:De(!1)},Qt={},rn=v,Pt=y,an=L,nn=en.indexOf,sn=Qt,Re=rn([].push),Rr=function(t,e){var r=an(t),i=0,a=[],n;for(n in r)!Pt(sn,n)&&Pt(r,n)&&Re(a,n);for(;e.length>i;)Pt(r,n=e[i++])&&(~nn(a,n)||Re(a,n));return a},te=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],on=Rr,un=te,ln=Object.keys||function(e){return on(e,un)},hn=$,cn=Pr,vn=S,fn=st,dn=L,pn=ln;Or.f=hn&&!cn?Object.defineProperties:function(e,r){fn(e);for(var i=dn(r),a=pn(r),n=a.length,s=0,o;n>s;)vn.f(e,o=a[s++],i[o]);return e};var mn=Zt,bn=mn("document","documentElement"),gn=pr,yn=br,Ie=gn("keys"),ee=function(t){return Ie[t]||(Ie[t]=yn(t))},$n=st,On=Or,we=te,Pn=Qt,Tn=bn,Sn=Ht,xn=ee,Me=">",Ae="<",Lt="prototype",Vt="script",Ir=xn("IE_PROTO"),Tt=function(){},wr=function(t){return Ae+Vt+Me+t+Ae+"/"+Vt+Me},_e=function(t){t.write(wr("")),t.close();var e=t.parentWindow.Object;return t=null,e},En=function(){var t=Sn("iframe"),e="java"+Vt+":",r;return t.style.display="none",Tn.appendChild(t),t.src=String(e),r=t.contentWindow.document,r.open(),r.write(wr("document.F=Object")),r.close(),r.F},W,J=function(){try{W=new ActiveXObject("htmlfile")}catch{}J=typeof document<"u"?document.domain&&W?_e(W):En():_e(W);for(var t=we.length;t--;)delete J[Lt][we[t]];return J()};Pn[Ir]=!0;var Mr=Object.create||function(e,r){var i;return e!==null?(Tt[Lt]=$n(e),i=new Tt,Tt[Lt]=null,i[Ir]=e):i=J(),r===void 0?i:On.f(i,r)},Dn=T,Rn=Mr,In=S.f,Ft=Dn("unscopables"),Bt=Array.prototype;Bt[Ft]===void 0&&In(Bt,Ft,{configurable:!0,value:Rn(null)});var wn=function(t){Bt[Ft][t]=!0},re={},Mn=c,An=l,Ne=Mn.WeakMap,_n=An(Ne)&&/native code/.test(String(Ne)),ie=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}},Nn=$,jn=S,Cn=ie,ut=Nn?function(t,e,r){return jn.f(t,e,Cn(1,r))}:function(t,e,r){return t[e]=r,t},Ln=_n,Ar=c,Vn=P,Fn=ut,St=y,xt=Jt,Bn=ee,Gn=Qt,je="Object already initialized",Gt=Ar.TypeError,kn=Ar.WeakMap,et,C,rt,Wn=function(t){return rt(t)?C(t):et(t,{})},Un=function(t){return function(e){var r;if(!Vn(e)||(r=C(e)).type!==t)throw new Gt("Incompatible receiver, "+t+" required");return r}};if(Ln||xt.state){var p=xt.state||(xt.state=new kn);p.get=p.get,p.has=p.has,p.set=p.set,et=function(t,e){if(p.has(t))throw new Gt(je);return e.facade=t,p.set(t,e),e},C=function(t){return p.get(t)||{}},rt=function(t){return p.has(t)}}else{var R=Bn("state");Gn[R]=!0,et=function(t,e){if(St(t,R))throw new Gt(je);return e.facade=t,Fn(t,R,e),e},C=function(t){return St(t,R)?t[R]:{}},rt=function(t){return St(t,R)}}var _r={set:et,get:C,has:rt,enforce:Wn,getterFor:Un},ae={},Nr={},jr={}.propertyIsEnumerable,Cr=Object.getOwnPropertyDescriptor,Kn=Cr&&!jr.call({1:2},1);Nr.f=Kn?function(e){var r=Cr(this,e);return!!r&&r.enumerable}:jr;var Yn=$,zn=ot,qn=Nr,Hn=ie,Xn=L,Jn=Er,Zn=y,Qn=Tr,Ce=Object.getOwnPropertyDescriptor;ae.f=Yn?Ce:function(e,r){if(e=Xn(e),r=Jn(r),Qn)try{return Ce(e,r)}catch{}if(Zn(e,r))return Hn(!zn(qn.f,e,r),e[r])};var Lr={exports:{}},kt=$,ts=y,Vr=Function.prototype,es=kt&&Object.getOwnPropertyDescriptor,ne=ts(Vr,"name"),rs=ne&&(function(){}).name==="something",is=ne&&(!kt||kt&&es(Vr,"name").configurable),Fr={EXISTS:ne,PROPER:rs,CONFIGURABLE:is},as=v,ns=l,Wt=Jt,ss=as(Function.toString);ns(Wt.inspectSource)||(Wt.inspectSource=function(t){return ss(t)});var os=Wt.inspectSource,se=v,us=d,ls=l,U=y,Ut=$,hs=Fr.CONFIGURABLE,cs=os,Br=_r,vs=Br.enforce,fs=Br.get,Le=String,Z=Object.defineProperty,ds=se("".slice),ps=se("".replace),ms=se([].join),bs=Ut&&!us(function(){return Z(function(){},"length",{value:8}).length!==8}),gs=String(String).split("String"),ys=Lr.exports=function(t,e,r){ds(Le(e),0,7)==="Symbol("&&(e="["+ps(Le(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!U(t,"name")||hs&&t.name!==e)&&(Ut?Z(t,"name",{value:e,configurable:!0}):t.name=e),bs&&r&&U(r,"arity")&&t.length!==r.arity&&Z(t,"length",{value:r.arity});try{r&&U(r,"constructor")&&r.constructor?Ut&&Z(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch{}var i=vs(t);return U(i,"source")||(i.source=ms(gs,typeof e=="string"?e:"")),t};Function.prototype.toString=ys(function(){return ls(this)&&fs(this).source||cs(this)},"toString");var $s=Lr.exports,Os=l,Ps=S,Ts=$s,Ss=Xt,oe=function(t,e,r,i){i||(i={});var a=i.enumerable,n=i.name!==void 0?i.name:e;if(Os(r)&&Ts(r,n,i),i.global)a?t[e]=r:Ss(e,r);else{try{i.unsafe?t[e]&&(a=!0):delete t[e]}catch{}a?t[e]=r:Ps.f(t,e,{value:r,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return t},Gr={},xs=Rr,Es=te,Ds=Es.concat("length","prototype");Gr.f=Object.getOwnPropertyNames||function(e){return xs(e,Ds)};var kr={};kr.f=Object.getOwnPropertySymbols;var Rs=Zt,Is=v,ws=Gr,Ms=kr,As=st,_s=Is([].concat),Ns=Rs("Reflect","ownKeys")||function(e){var r=ws.f(As(e)),i=Ms.f;return i?_s(r,i(e)):r},Ve=y,js=Ns,Cs=ae,Ls=S,Vs=function(t,e,r){for(var i=js(e),a=Ls.f,n=Cs.f,s=0;s<i.length;s++){var o=i[s];!Ve(t,o)&&!(r&&Ve(r,o))&&a(t,o,n(e,o))}},Fs=d,Bs=l,Gs=/#|\.prototype\./,V=function(t,e){var r=Ws[ks(t)];return r===Ks?!0:r===Us?!1:Bs(e)?Fs(e):!!e},ks=V.normalize=function(t){return String(t).replace(Gs,".").toLowerCase()},Ws=V.data={},Us=V.NATIVE="N",Ks=V.POLYFILL="P",Ys=V,K=c,zs=ae.f,qs=ut,Hs=oe,Xs=Xt,Js=Vs,Zs=Ys,Wr=function(t,e){var r=t.target,i=t.global,a=t.stat,n,s,o,m,b,u;if(i?s=K:a?s=K[r]||Xs(r,{}):s=K[r]&&K[r].prototype,s)for(o in e){if(b=e[o],t.dontCallGetSet?(u=zs(s,o),m=u&&u.value):m=s[o],n=Zs(i?o:r+(a?".":"#")+o,t.forced),!n&&m!==void 0){if(typeof b==typeof m)continue;Js(b,m)}(t.sham||m&&m.sham)&&qs(b,"sham",!0),Hs(s,o,b,t)}},Qs=d,to=!Qs(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),eo=y,ro=l,io=mr,ao=ee,no=to,Fe=ao("IE_PROTO"),Kt=Object,so=Kt.prototype,Ur=no?Kt.getPrototypeOf:function(t){var e=io(t);if(eo(e,Fe))return e[Fe];var r=e.constructor;return ro(r)&&e instanceof r?r.prototype:e instanceof Kt?so:null},oo=d,uo=l,lo=P,Be=Ur,ho=oe,co=T,Yt=co("iterator"),Kr=!1,E,Et,Dt;[].keys&&(Dt=[].keys(),"next"in Dt?(Et=Be(Be(Dt)),Et!==Object.prototype&&(E=Et)):Kr=!0);var vo=!lo(E)||oo(function(){var t={};return E[Yt].call(t)!==t});vo&&(E={});uo(E[Yt])||ho(E,Yt,function(){return this});var Yr={IteratorPrototype:E,BUGGY_SAFARI_ITERATORS:Kr},fo=S.f,po=y,mo=T,Ge=mo("toStringTag"),ue=function(t,e,r){t&&!r&&(t=t.prototype),t&&!po(t,Ge)&&fo(t,Ge,{configurable:!0,value:e})},bo=Yr.IteratorPrototype,go=Mr,yo=ie,$o=ue,Oo=re,Po=function(){return this},To=function(t,e,r,i){var a=e+" Iterator";return t.prototype=go(bo,{next:yo(+!i,r)}),$o(t,a,!1),Oo[a]=Po,t},So=v,xo=xr,Eo=function(t,e,r){try{return So(xo(Object.getOwnPropertyDescriptor(t,e)[r]))}catch{}},Do=P,Ro=function(t){return Do(t)||t===null},Io=Ro,wo=String,Mo=TypeError,Ao=function(t){if(Io(t))return t;throw new Mo("Can't set "+wo(t)+" as a prototype")},_o=Eo,No=P,jo=nt,Co=Ao,Lo=Object.setPrototypeOf||("__proto__"in{}?function(){var t=!1,e={},r;try{r=_o(Object.prototype,"__proto__","set"),r(e,[]),t=e instanceof Array}catch{}return function(a,n){return jo(a),Co(n),No(a)&&(t?r(a,n):a.__proto__=n),a}}():void 0),Vo=Wr,Fo=ot,zr=Fr,Bo=l,Go=To,ke=Ur,We=Lo,ko=ue,Wo=ut,Rt=oe,Uo=T,Ko=re,qr=Yr,Yo=zr.PROPER,zo=zr.CONFIGURABLE,Ue=qr.IteratorPrototype,Y=qr.BUGGY_SAFARI_ITERATORS,A=Uo("iterator"),Ke="keys",_="values",Ye="entries",qo=function(){return this},Ho=function(t,e,r,i,a,n,s){Go(r,e,i);var o=function(g){if(g===a&&x)return x;if(!Y&&g&&g in u)return u[g];switch(g){case Ke:return function(){return new r(this,g)};case _:return function(){return new r(this,g)};case Ye:return function(){return new r(this,g)}}return function(){return new r(this)}},m=e+" Iterator",b=!1,u=t.prototype,D=u[A]||u["@@iterator"]||a&&u[a],x=!Y&&D||o(a),he=e==="Array"&&u.entries||D,O,w,F;if(he&&(O=ke(he.call(new t)),O!==Object.prototype&&O.next&&(ke(O)!==Ue&&(We?We(O,Ue):Bo(O[A])||Rt(O,A,qo)),ko(O,m,!0))),Yo&&a===_&&D&&D.name!==_&&(zo?Wo(u,"name",_):(b=!0,x=function(){return Fo(D,this)})),a)if(w={values:o(_),keys:n?x:o(Ke),entries:o(Ye)},s)for(F in w)(Y||b||!(F in u))&&Rt(u,F,w[F]);else Vo({target:e,proto:!0,forced:Y||b},w);return u[A]!==x&&Rt(u,A,x,{name:a}),Ko[e]=x,w},Xo=function(t,e){return{value:t,done:e}},Jo=L,le=wn,ze=re,Hr=_r,Zo=S.f,Qo=Ho,z=Xo,tu=$,Xr="Array Iterator",eu=Hr.set,ru=Hr.getterFor(Xr),iu=Qo(Array,"Array",function(t,e){eu(this,{type:Xr,target:Jo(t),index:0,kind:e})},function(){var t=ru(this),e=t.target,r=t.index++;if(!e||r>=e.length)return t.target=void 0,z(void 0,!0);switch(t.kind){case"keys":return z(r,!1);case"values":return z(e[r],!1)}return z([r,e[r]],!1)},"values"),qe=ze.Arguments=ze.Array;le("keys");le("values");le("entries");if(tu&&qe.name!=="values")try{Zo(qe,"name",{value:"values"})}catch{}var He=c,Jr=oi,au=vi,j=iu,Xe=ut,nu=ue,su=T,It=su("iterator"),wt=j.values,Zr=function(t,e){if(t){if(t[It]!==wt)try{Xe(t,It,wt)}catch{t[It]=wt}if(nu(t,e,!0),Jr[e]){for(var r in j)if(t[r]!==j[r])try{Xe(t,r,j[r])}catch{t[r]=j[r]}}}};for(var Mt in Jr)Zr(He[Mt]&&He[Mt].prototype,Mt);Zr(au,"DOMTokenList");var ou=T,uu=ou("toStringTag"),Qr={};Qr[uu]="z";var lu=String(Qr)==="[object z]",hu=lu,cu=l,Q=vr,vu=T,fu=vu("toStringTag"),du=Object,pu=Q(function(){return arguments}())==="Arguments",mu=function(t,e){try{return t[e]}catch{}},bu=hu?Q:function(t){var e,r,i;return t===void 0?"Undefined":t===null?"Null":typeof(r=mu(e=du(t),fu))=="string"?r:pu?Q(e):(i=Q(e))==="Object"&&cu(e.callee)?"Arguments":i},gu=bu,yu=String,ti=function(t){if(gu(t)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return yu(t)},ei=`	
\v\f\r                　\u2028\u2029\uFEFF`,$u=v,Ou=nt,Pu=ti,zt=ei,Je=$u("".replace),Tu=RegExp("^["+zt+"]+"),Su=RegExp("(^|[^"+zt+"])["+zt+"]+$"),At=function(t){return function(e){var r=Pu(Ou(e));return t&1&&(r=Je(r,Tu,"")),t&2&&(r=Je(r,Su,"$1")),r}},xu={start:At(1),end:At(2),trim:At(3)},ri=c,Eu=d,Du=v,Ru=ti,Iu=xu.trim,wu=ei,Mu=Du("".charAt),it=ri.parseFloat,Ze=ri.Symbol,Qe=Ze&&Ze.iterator,Au=1/it(wu+"-0")!==-1/0||Qe&&!Eu(function(){it(Object(Qe))}),_u=Au?function(e){var r=Iu(Ru(e)),i=it(r);return i===0&&Mu(r,0)==="-"?-0:i}:it,Nu=Wr,tr=_u;Nu({global:!0,forced:parseFloat!==tr},{parseFloat:tr});function ii(t){var e,r,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=ii(t[e]))&&(i&&(i+=" "),i+=r);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function er(){for(var t,e,r=0,i="";r<arguments.length;)(t=arguments[r++])&&(e=ii(t))&&(i&&(i+=" "),i+=e);return i}const ju=Object.freeze(Object.defineProperty({__proto__:null,clsx:er,default:er},Symbol.toStringTag,{value:"Module"})),Cu=ni(ju);Object.defineProperty(at,"__esModule",{value:!0});at.default=void 0;var h=Fu(si),Lu=Vu(Cu);function Vu(t){return t&&t.__esModule?t:{default:t}}function ai(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(ai=function(a){return a?r:e})(t)}function Fu(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=ai(e);if(r&&r.has(t))return r.get(t);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)){var s=a?Object.getOwnPropertyDescriptor(t,n):null;s&&(s.get||s.set)?Object.defineProperty(i,n,s):i[n]=t[n]}return i.default=t,r&&r.set(t,i),i}const rr=Math.abs,_t=parseFloat,N="min",q="max",Nt="any",ir="vertical",ar="tabindex",nr="data-lower",sr="data-upper",H="data-active",or="data-vertical",X="data-disabled";class Bu extends h.PureComponent{constructor(){super(),this.element=(0,h.createRef)(),this.input=[(0,h.createRef)(),(0,h.createRef)()],this.thumb=[(0,h.createRef)(),(0,h.createRef)()],this.range=(0,h.createRef)(),this.options={},this.firstCall=!0,this.isControlled=!1,this.externalInput=!1,this.isComponentMounted=!1,this.lastValueProp=[]}componentDidMount(){this.isComponentMounted||(this.value=this.setMinMaxProps(),this.index=this.setMinMaxProps(0,1),this.thumbWidth=this.setMinMaxProps(),this.thumbHeight=this.setMinMaxProps(),this.rangeLimits=this.setMinMaxProps(),this.sliderValue=this.setMinMaxProps(),this.maxRangeWidth=0,this.rangeWidth=0,this.isDragging=!1,this.thumbDrag=!1,this.startPos=0,this.reset(),this.addNodeEventListener(this.element.current,"pointerdown",e=>{this.elementFocused(e)}),this.thumb.forEach((e,r)=>{this.addNodeEventListener(e.current,"pointerdown",i=>{this.initiateThumbDrag(i,r,e.current)}),this.addNodeEventListener(e.current,"keydown",i=>{i.which>=37&&i.which<=40&&(i.preventDefault(),this.stepValue(r,i.which))})}),this.addNodeEventListener(this.range.current,"pointerdown",e=>{this.initiateRangeDrag(e)}),this.pointerMoveEvent=e=>{this.drag(e)},this.pointerUpEvent=()=>{this.isDragging&&(this.removeNodeAttribute(this.thumb[0].current,H),this.removeNodeAttribute(this.thumb[1].current,H),this.removeNodeAttribute(this.range.current,H),this.isDragging=!1,this.thumbDrag?this.options.onThumbDragEnd&&this.options.onThumbDragEnd():this.options.onRangeDragEnd&&this.options.onRangeDragEnd())},this.resizeEvent=()=>{this.syncThumbDimensions(),this.updateThumbs(),this.updateRange()},this.addNodeEventListener(document,"pointermove",this.pointerMoveEvent),this.addNodeEventListener(document,"pointerup",this.pointerUpEvent),this.addNodeEventListener(window,"resize",this.resizeEvent),this.isComponentMounted=!0)}componentDidUpdate(){this.reset()}componentWillUnmount(){this.removeNodeEventListener(document,"pointermove",this.pointerMoveEvent),this.removeNodeEventListener(document,"pointerup",this.pointerUpEvent),this.removeNodeEventListener(window,"resize",this.resizeEvent),this.isComponentMounted=!1}reset(){this.isControlled=!!this.props.value,this.isControlled&&((this.firstCall||this.props.value!==this.lastValueProp)&&(this.firstCall=!1,this.externalInput=!0),this.lastValueProp=this.props.value),this.maxRangeWidth=this.options.max-this.options.min,this.updateOrientation(),this.setValue("",!0,!1),this.updateRangeLimits(),this.updateDisabledState(),this.updateThumbsDisabledState(),this.updateTabIndexes()}isNumber(e){return!isNaN(e)&&+e+""==e+""}setMinMaxProps(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return{min:e,max:r}}iterateMinMaxProps(e){[N,q].forEach(e)}getSetProps(e,r,i){if(e)return r;i()}setNodeAttribute(e,r){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"";e.setAttribute(r,i)}removeNodeAttribute(e,r){e.removeAttribute(r)}addNodeEventListener(e,r,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;e.addEventListener(r,i,a?{passive:!1,capture:!0}:{})}removeNodeEventListener(e,r,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;e.removeEventListener(r,i,a?{passive:!1,capture:!0}:{})}fallbackToDefault(e,r){this.options[e]=this.props[e]?this.props[e]:r}ifVerticalElse(e,r){return this.options.orientation===ir?e:r}currentIndex(e){return e===1?this.index.max:this.index.min}safeMinMaxValues(){let e=!1;(!this.isNumber(this.options.min)||!this.isNumber(this.options.max))&&(e=!0),this.options.min=e?1:+this.options.min,this.options.max=e?1:+this.options.max}safeThumbsDisabledValues(){this.options.thumbsDisabled instanceof Array?(this.options.thumbsDisabled.length===1&&this.options.thumbsDisabled.push(!1),this.options.thumbsDisabled.length!==1&&this.options.thumbsDisabled.length!==2&&(this.options.thumbsDisabled=[!1,!1])):this.options.thumbsDisabled=[this.options.thumbsDisabled,this.options.thumbsDisabled],this.options.thumbsDisabled[0]=!!this.options.thumbsDisabled[0],this.options.thumbsDisabled[1]=!!this.options.thumbsDisabled[1]}setValue(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const a=this.setMinMaxProps(this.input[0].current.value,this.input[1].current.value);e=e||a,this.input[this.index.min].current.value=e.min,this.input[this.index.max].current.value=this.thumbDrag||r?e.max:e.min+this.rangeWidth,this.syncValues(),this.value.min>this.value.max&&(this.index.min=+!this.index.min,this.index.max=+!this.index.max,this.removeNodeAttribute(this.thumb[this.index.min].current,sr),this.removeNodeAttribute(this.thumb[this.index.max].current,nr),this.setNodeAttribute(this.thumb[this.index.min].current,nr),this.setNodeAttribute(this.thumb[this.index.max].current,sr),this.thumbDrag&&(this.thumbDrag=this.thumbDrag===N?q:N),this.syncValues()),this.sliderValue=r?this.value:e;let n=!1;(a.min!==this.input[0].current.value||r)&&(n=!0),(a.max!==this.input[1].current.value||r)&&(n=!0),n&&(i&&this.options.onInput&&this.options.onInput([this.value.min,this.value.max]),(!this.isControlled||this.externalInput)&&(this.externalInput=!1,this.syncThumbDimensions(),this.updateThumbs(),this.updateRange(),this.updateAriaValueAttributes()))}syncValues(){this.iterateMinMaxProps(e=>{this.value[e]=+this.input[this.index[e]].current.value})}updateThumbs(){this.iterateMinMaxProps(e=>{this.thumb[this.index[e]].current.style[this.ifVerticalElse("top","left")]="calc(".concat((this.value[e]-this.options.min)/this.maxRangeWidth*100,"% + ").concat((.5-(this.value[e]-this.options.min)/this.maxRangeWidth)*this.ifVerticalElse(this.thumbHeight,this.thumbWidth)[e],"px)")})}updateRange(){const e=this.element.current.getBoundingClientRect(),r=(.5-(this.value.min-this.options.min)/this.maxRangeWidth)*this.ifVerticalElse(this.thumbHeight,this.thumbWidth).min/this.ifVerticalElse(e.bottom-e.top,e.right-e.left),i=(.5-(this.value.max-this.options.min)/this.maxRangeWidth)*this.ifVerticalElse(this.thumbHeight,this.thumbWidth).max/this.ifVerticalElse(e.bottom-e.top,e.right-e.left);this.range.current.style[this.ifVerticalElse("top","left")]="".concat(((this.value.min-this.options.min)/this.maxRangeWidth+r)*100,"%"),this.range.current.style[this.ifVerticalElse("height","width")]="".concat(((this.value.max-this.options.min)/this.maxRangeWidth-(this.value.min-this.options.min)/this.maxRangeWidth-r+i)*100,"%")}updateRangeLimits(){this.iterateMinMaxProps((e,r)=>{this.rangeLimits[e]=this.options.thumbsDisabled[r]?this.value[e]:this.options[e]})}updateTabIndexes(){this.iterateMinMaxProps((e,r)=>{!this.options.disabled&&!this.options.thumbsDisabled[r]?this.setNodeAttribute(this.thumb[this.currentIndex(r)].current,ar,0):this.removeNodeAttribute(this.thumb[this.currentIndex(r)].current,ar)})}updateAriaValueAttributes(){this.iterateMinMaxProps(e=>{this.setNodeAttribute(this.thumb[this.index[e]].current,"aria-valuemin",this.options.min),this.setNodeAttribute(this.thumb[this.index[e]].current,"aria-valuemax",this.options.max),this.setNodeAttribute(this.thumb[this.index[e]].current,"aria-valuenow",this.value[e]),this.setNodeAttribute(this.thumb[this.index[e]].current,"aria-valuetext",this.value[e])})}updateDisabledState(){this.options.disabled?this.setNodeAttribute(this.element.current,X):this.removeNodeAttribute(this.element.current,X)}updateThumbsDisabledState(){this.options.thumbsDisabled.forEach((e,r)=>{const i=this.currentIndex(r);e?(this.setNodeAttribute(this.thumb[i].current,X),this.setNodeAttribute(this.thumb[i].current,"aria-disabled",!0)):(this.removeNodeAttribute(this.thumb[i].current,X),this.setNodeAttribute(this.thumb[i].current,"aria-disabled",!1))})}updateLimits(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;this.options[e]=r,this.safeMinMaxValues(),this.iterateMinMaxProps(i=>{this.input[0].current[i]=this.options[i],this.input[1].current[i]=this.options[i]}),this.maxRangeWidth=this.options.max-this.options.min,this.setValue("",!0),this.updateRangeLimits()}updateOrientation(){this.options.orientation===ir?this.setNodeAttribute(this.element.current,or):this.removeNodeAttribute(this.element.current,or),this.range.current.style[this.ifVerticalElse("left","top")]="",this.range.current.style[this.ifVerticalElse("width","height")]="",this.thumb[0].current.style[this.ifVerticalElse("left","top")]="",this.thumb[1].current.style[this.ifVerticalElse("left","top")]=""}syncThumbDimensions(){this.iterateMinMaxProps(e=>{this.thumbWidth[e]=_t(window.getComputedStyle(this.thumb[this.index[e]].current).width),this.thumbHeight[e]=_t(window.getComputedStyle(this.thumb[this.index[e]].current).height)})}currentPosition(e,r){const i=this.element.current.getBoundingClientRect(),a=r.getBoundingClientRect(),n=(this.ifVerticalElse(a.top-i.top,a.left-i.left)+(e["client".concat(this.ifVerticalElse("Y","X"))]-r.getBoundingClientRect()[this.ifVerticalElse("top","left")])-(this.thumbDrag?(.5-(this.value[this.thumbDrag]-this.options.min)/this.maxRangeWidth)*this.ifVerticalElse(this.thumbHeight,this.thumbWidth)[this.thumbDrag]:0))/this.ifVerticalElse(i.bottom-i.top,i.right-i.left)*this.maxRangeWidth+this.options.min;return n<this.options.min?this.options.min:n>this.options.max?this.options.max:n}doesntHaveClassName(e,r){return!e.target.classList.contains(r)}elementFocused(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=!1;if(!this.options.disabled&&(this.doesntHaveClassName(e,"range-slider__thumb")&&this.doesntHaveClassName(e,"range-slider__range")||this.options.rangeSlideDisabled&&this.doesntHaveClassName(e,"range-slider__thumb"))&&(i=!0),i&&this.options.thumbsDisabled[0]&&this.options.thumbsDisabled[1]&&(i=!1),i){const a=this.currentPosition(e,this.range.current),n=rr(this.value.min-a),s=rr(this.value.max-a);if(this.options.thumbsDisabled[0])a>=this.value.min&&(this.setValue(this.setMinMaxProps(this.value.min,a),!0,!r),this.initiateThumbDrag(e,this.index.max,this.thumb[this.index.max].current,!r));else if(this.options.thumbsDisabled[1])a<=this.value.max&&(this.setValue(this.setMinMaxProps(a,this.value.max),!0,!r),this.initiateThumbDrag(e,this.index.min,this.thumb[this.index.min].current,!r));else{let o=this.index.max;n===s?this.setValue(this.setMinMaxProps(this.value.min,a),!0,!r):(this.setValue(this.setMinMaxProps(n<s?a:this.value.min,s<n?a:this.value.max),!0,!r),o=n<s?this.index.min:this.index.max),this.initiateThumbDrag(e,o,this.thumb[o].current,!r)}r&&this.elementFocused(e,!1)}}initiateDrag(e,r){this.syncThumbDimensions(),this.setNodeAttribute(r,H),this.startPos=this.currentPosition(e,r),this.isDragging=!0}initiateThumbDrag(e,r,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;!this.options.disabled&&!this.options.thumbsDisabled[this.currentIndex(r)]&&(this.initiateDrag(e,i),this.thumbDrag=this.index.min===r?N:q,a&&this.options.onThumbDragStart&&this.options.onThumbDragStart())}initiateRangeDrag(e){!this.options.disabled&&!this.options.rangeSlideDisabled&&(this.initiateDrag(e,this.range.current),this.rangeWidth=this.value.max-this.value.min,this.thumbDrag=!1,this.options.onRangeDragStart&&this.options.onRangeDragStart())}drag(e){if(this.isDragging){const r=this.currentPosition(e,this.range.current),i=r-this.startPos;let a=this.value.min,n=this.value.max;const s=this.thumbDrag?this.rangeLimits.min:this.options.min,o=this.thumbDrag?this.rangeLimits.max:this.options.max;(!this.thumbDrag||this.thumbDrag===N)&&(a=this.thumbDrag?r:this.sliderValue.min+i),(!this.thumbDrag||this.thumbDrag===q)&&(n=this.thumbDrag?r:this.sliderValue.max+i),a>=s&&a<=o&&n>=s&&n<=o?(this.setValue({min:a,max:n}),this.startPos=r):(a>o&&this.thumbDrag&&(this.setValue(this.setMinMaxProps(o,o)),this.startPos=r),n<s&&this.thumbDrag&&(this.setValue(this.setMinMaxProps(s,s)),this.startPos=r),a<s&&(this.thumbDrag?this.setValue(this.setMinMaxProps(s,this.value.max)):this.setValue(this.setMinMaxProps(s,this.value.max-this.value.min+s)),this.startPos=r),n>o&&(this.thumbDrag?this.setValue(this.setMinMaxProps(this.value.min,o)):this.setValue(this.setMinMaxProps(this.value.min-this.value.max+o,o)),this.startPos=r)),this.thumbDrag||this.updateRangeLimits()}}actualStepValue(){const e=_t(this.input[0].current.step);return this.input[0].current.step===Nt?Nt:e===0||isNaN(e)?1:e}stepValue(e,r){const i=(r===37||r===40?-1:1)*this.ifVerticalElse(-1,1);if(!this.options.disabled&&!this.options.thumbsDisabled[this.currentIndex(e)]){let a=this.actualStepValue();a=a===Nt?1:a;let n=this.value.min+a*(this.index.min===e?i:0),s=this.value.max+a*(this.index.max===e?i:0);n>this.rangeLimits.max&&(n=this.rangeLimits.max),s<this.rangeLimits.min&&(s=this.rangeLimits.min),this.setValue({min:n,max:s},!0)}}render(){return this.fallbackToDefault("rangeSlideDisabled",!1),this.fallbackToDefault("thumbsDisabled",[!1,!1]),this.fallbackToDefault("orientation","horizontal"),this.fallbackToDefault("defaultValue",[25,75]),this.fallbackToDefault("disabled",!1),this.fallbackToDefault("onThumbDragStart",!1),this.fallbackToDefault("onRangeDragStart",!1),this.fallbackToDefault("onThumbDragEnd",!1),this.fallbackToDefault("onRangeDragEnd",!1),this.fallbackToDefault("onInput",!1),this.fallbackToDefault("step",1),this.fallbackToDefault("min",0),this.fallbackToDefault("max",100),this.props.value&&this.fallbackToDefault("value",[25,75]),this.safeMinMaxValues(),this.safeThumbsDisabledValues(),h.default.createElement("div",{"data-testid":"element",id:this.props.id,ref:this.element,className:(0,Lu.default)("range-slider",this.props.className)},h.default.createElement("input",{ref:this.input[0],type:"range",min:this.options.min,max:this.options.max,step:this.options.step,value:this.props.value?this.options.value[0]:this.isComponentMounted?this.value.min:this.options.defaultValue[0],onChange:()=>{},disabled:!0}),h.default.createElement("input",{ref:this.input[1],type:"range",min:this.options.min,max:this.options.max,step:this.options.step,value:this.props.value?this.options.value[1]:this.isComponentMounted?this.value.max:this.options.defaultValue[1],onChange:()=>{},disabled:!0}),h.default.createElement("div",{ref:this.thumb[0],role:"slider",className:"range-slider__thumb","data-lower":!0}),h.default.createElement("div",{ref:this.thumb[1],role:"slider",className:"range-slider__thumb","data-upper":!0}),h.default.createElement("div",{ref:this.range,className:"range-slider__range"}))}}var Gu=Bu;at.default=Gu;Object.defineProperty(qt,"__esModule",{value:!0});var ku=qt.default=void 0,Wu=Uu(at);function Uu(t){return t&&t.__esModule?t:{default:t}}var Ku=Wu.default;ku=qt.default=Ku;export{ku as d};
