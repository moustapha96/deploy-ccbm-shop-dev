import{p as Pt,C as Zt,u as kt,j as t,f as Ye,c as Qt,S as $e,B as je,q as Jt,m as en,r as tn,k as nn,n as yt,L as vt,s as St}from"./index-73db1b26.js";import{r as p,i as sn,j as an}from"./vendor-ee8c1fef.js";import{P as rn}from"./ProductCardStyleOne-0d3f39a5.js";import{D as on}from"./DataIteration-9b514a58.js";import"./ProductContext-555a5ad1.js";import{S as ln}from"./Star-26a1f5b7.js";import{I as cn}from"./InputCom-af8661ca.js";import"./eye-4dcd70b1.js";async function mn(s){try{return(await Pt.post("/api/commentaires",s)).data}catch(a){throw console.error("Erreur lors de la création du commentaire",a),a}}async function un(s){try{return(await Pt.get(`/api/commentaires/produit/${s}`)).data}catch(a){throw console.error("Erreur lors de la récupération des commentaires",a),a}}/*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */const{entries:Ut,setPrototypeOf:Rt,isFrozen:dn,getPrototypeOf:fn,getOwnPropertyDescriptor:pn}=Object;let{freeze:v,seal:O,create:Ft}=Object,{apply:Je,construct:et}=typeof Reflect<"u"&&Reflect;v||(v=function(a){return a});O||(O=function(a){return a});Je||(Je=function(a,l,i){return a.apply(l,i)});et||(et=function(a,l){return new a(...l)});const Le=j(Array.prototype.forEach),Ct=j(Array.prototype.pop),de=j(Array.prototype.push),De=j(String.prototype.toLowerCase),Ve=j(String.prototype.toString),jt=j(String.prototype.match),fe=j(String.prototype.replace),hn=j(String.prototype.indexOf),gn=j(String.prototype.trim),I=j(Object.prototype.hasOwnProperty),y=j(RegExp.prototype.test),pe=xn(TypeError);function j(s){return function(a){for(var l=arguments.length,i=new Array(l>1?l-1:0),f=1;f<l;f++)i[f-1]=arguments[f];return Je(s,a,i)}}function xn(s){return function(){for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return et(s,l)}}function c(s,a){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:De;Rt&&Rt(s,null);let i=a.length;for(;i--;){let f=a[i];if(typeof f=="string"){const h=l(f);h!==f&&(dn(a)||(a[i]=h),f=h)}s[f]=!0}return s}function Tn(s){for(let a=0;a<s.length;a++)I(s,a)||(s[a]=null);return s}function K(s){const a=Ft(null);for(const[l,i]of Ut(s))I(s,l)&&(Array.isArray(i)?a[l]=Tn(i):i&&typeof i=="object"&&i.constructor===Object?a[l]=K(i):a[l]=i);return a}function he(s,a){for(;s!==null;){const i=pn(s,a);if(i){if(i.get)return j(i.get);if(typeof i.value=="function")return j(i.value)}s=fn(s)}function l(){return null}return l}const Lt=v(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Xe=v(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ke=v(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),_n=v(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ze=v(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),En=v(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ot=v(["#text"]),Dt=v(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Qe=v(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),It=v(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Oe=v(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),bn=O(/\{\{[\w\W]*|[\w\W]*\}\}/gm),An=O(/<%[\w\W]*|[\w\W]*%>/gm),Nn=O(/\${[\w\W]*}/gm),wn=O(/^data-[\-\w.\u00B7-\uFFFF]/),yn=O(/^aria-[\-\w]+$/),Ht=O(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),vn=O(/^(?:\w+script|data):/i),Sn=O(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),zt=O(/^html$/i),Rn=O(/^[a-z][.\w]*(-[.\w]+)+$/i);var Mt=Object.freeze({__proto__:null,MUSTACHE_EXPR:bn,ERB_EXPR:An,TMPLIT_EXPR:Nn,DATA_ATTR:wn,ARIA_ATTR:yn,IS_ALLOWED_URI:Ht,IS_SCRIPT_OR_DATA:vn,ATTR_WHITESPACE:Sn,DOCTYPE_NAME:zt,CUSTOM_ELEMENT:Rn});const ge={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Cn=function(){return typeof window>"u"?null:window},jn=function(a,l){if(typeof a!="object"||typeof a.createPolicy!="function")return null;let i=null;const f="data-tt-policy-suffix";l&&l.hasAttribute(f)&&(i=l.getAttribute(f));const h="dompurify"+(i?"#"+i:"");try{return a.createPolicy(h,{createHTML(R){return R},createScriptURL(R){return R}})}catch{return console.warn("TrustedTypes policy "+h+" could not be created."),null}};function Bt(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Cn();const a=o=>Bt(o);if(a.version="3.1.6",a.removed=[],!s||!s.document||s.document.nodeType!==ge.document)return a.isSupported=!1,a;let{document:l}=s;const i=l,f=i.currentScript,{DocumentFragment:h,HTMLTemplateElement:R,Node:k,Element:U,NodeFilter:_,NamedNodeMap:W=s.NamedNodeMap||s.MozNamedAttrMap,HTMLFormElement:G,DOMParser:$,trustedTypes:F}=s,g=U.prototype,D=he(g,"cloneNode"),L=he(g,"remove"),V=he(g,"nextSibling"),Z=he(g,"childNodes"),H=he(g,"parentNode");if(typeof R=="function"){const o=l.createElement("template");o.content&&o.content.ownerDocument&&(l=o.content.ownerDocument)}let m,q="";const{implementation:Q,createNodeIterator:xe,createDocumentFragment:Te,getElementsByTagName:_e}=l,{importNode:Ie}=i;let C={};a.isSupported=typeof Ut=="function"&&typeof H=="function"&&Q&&Q.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:oe,ERB_EXPR:Ee,TMPLIT_EXPR:J,DATA_ATTR:Me,ARIA_ATTR:be,IS_SCRIPT_OR_DATA:Y,ATTR_WHITESPACE:Ae,CUSTOM_ELEMENT:ie}=Mt;let{IS_ALLOWED_URI:Ne}=Mt,T=null;const b=c({},[...Lt,...Xe,...Ke,...Ze,...Ot]);let u=null;const we=c({},[...Dt,...Qe,...It,...Oe]);let x=Object.seal(Ft(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),le=null,Pe=null,tt=!0,ke=!0,nt=!1,st=!0,ee=!1,Ue=!0,X=!1,Fe=!1,He=!1,te=!1,ye=!1,ve=!1,at=!0,rt=!1;const Wt="user-content-";let ze=!0,ce=!1,ne={},se=null;const ot=c({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let it=null;const lt=c({},["audio","video","img","source","image","track"]);let Be=null;const ct=c({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Se="http://www.w3.org/1998/Math/MathML",Re="http://www.w3.org/2000/svg",z="http://www.w3.org/1999/xhtml";let ae=z,We=!1,Ge=null;const Gt=c({},[Se,Re,z],Ve);let me=null;const qt=["application/xhtml+xml","text/html"],Yt="text/html";let E=null,re=null;const $t=l.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},qe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(re&&re===e)){if((!e||typeof e!="object")&&(e={}),e=K(e),me=qt.indexOf(e.PARSER_MEDIA_TYPE)===-1?Yt:e.PARSER_MEDIA_TYPE,E=me==="application/xhtml+xml"?Ve:De,T=I(e,"ALLOWED_TAGS")?c({},e.ALLOWED_TAGS,E):b,u=I(e,"ALLOWED_ATTR")?c({},e.ALLOWED_ATTR,E):we,Ge=I(e,"ALLOWED_NAMESPACES")?c({},e.ALLOWED_NAMESPACES,Ve):Gt,Be=I(e,"ADD_URI_SAFE_ATTR")?c(K(ct),e.ADD_URI_SAFE_ATTR,E):ct,it=I(e,"ADD_DATA_URI_TAGS")?c(K(lt),e.ADD_DATA_URI_TAGS,E):lt,se=I(e,"FORBID_CONTENTS")?c({},e.FORBID_CONTENTS,E):ot,le=I(e,"FORBID_TAGS")?c({},e.FORBID_TAGS,E):{},Pe=I(e,"FORBID_ATTR")?c({},e.FORBID_ATTR,E):{},ne=I(e,"USE_PROFILES")?e.USE_PROFILES:!1,tt=e.ALLOW_ARIA_ATTR!==!1,ke=e.ALLOW_DATA_ATTR!==!1,nt=e.ALLOW_UNKNOWN_PROTOCOLS||!1,st=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ee=e.SAFE_FOR_TEMPLATES||!1,Ue=e.SAFE_FOR_XML!==!1,X=e.WHOLE_DOCUMENT||!1,te=e.RETURN_DOM||!1,ye=e.RETURN_DOM_FRAGMENT||!1,ve=e.RETURN_TRUSTED_TYPE||!1,He=e.FORCE_BODY||!1,at=e.SANITIZE_DOM!==!1,rt=e.SANITIZE_NAMED_PROPS||!1,ze=e.KEEP_CONTENT!==!1,ce=e.IN_PLACE||!1,Ne=e.ALLOWED_URI_REGEXP||Ht,ae=e.NAMESPACE||z,x=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&mt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(x.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&mt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(x.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(x.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ee&&(ke=!1),ye&&(te=!0),ne&&(T=c({},Ot),u=[],ne.html===!0&&(c(T,Lt),c(u,Dt)),ne.svg===!0&&(c(T,Xe),c(u,Qe),c(u,Oe)),ne.svgFilters===!0&&(c(T,Ke),c(u,Qe),c(u,Oe)),ne.mathMl===!0&&(c(T,Ze),c(u,It),c(u,Oe))),e.ADD_TAGS&&(T===b&&(T=K(T)),c(T,e.ADD_TAGS,E)),e.ADD_ATTR&&(u===we&&(u=K(u)),c(u,e.ADD_ATTR,E)),e.ADD_URI_SAFE_ATTR&&c(Be,e.ADD_URI_SAFE_ATTR,E),e.FORBID_CONTENTS&&(se===ot&&(se=K(se)),c(se,e.FORBID_CONTENTS,E)),ze&&(T["#text"]=!0),X&&c(T,["html","head","body"]),T.table&&(c(T,["tbody"]),delete le.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw pe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw pe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');m=e.TRUSTED_TYPES_POLICY,q=m.createHTML("")}else m===void 0&&(m=jn(F,f)),m!==null&&typeof q=="string"&&(q=m.createHTML(""));v&&v(e),re=e}},ut=c({},["mi","mo","mn","ms","mtext"]),dt=c({},["foreignobject","annotation-xml"]),Vt=c({},["title","style","font","a","script"]),ft=c({},[...Xe,...Ke,..._n]),pt=c({},[...Ze,...En]),Xt=function(e){let n=H(e);(!n||!n.tagName)&&(n={namespaceURI:ae,tagName:"template"});const r=De(e.tagName),d=De(n.tagName);return Ge[e.namespaceURI]?e.namespaceURI===Re?n.namespaceURI===z?r==="svg":n.namespaceURI===Se?r==="svg"&&(d==="annotation-xml"||ut[d]):!!ft[r]:e.namespaceURI===Se?n.namespaceURI===z?r==="math":n.namespaceURI===Re?r==="math"&&dt[d]:!!pt[r]:e.namespaceURI===z?n.namespaceURI===Re&&!dt[d]||n.namespaceURI===Se&&!ut[d]?!1:!pt[r]&&(Vt[r]||!ft[r]):!!(me==="application/xhtml+xml"&&Ge[e.namespaceURI]):!1},M=function(e){de(a.removed,{element:e});try{H(e).removeChild(e)}catch{L(e)}},Ce=function(e,n){try{de(a.removed,{attribute:n.getAttributeNode(e),from:n})}catch{de(a.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e==="is"&&!u[e])if(te||ye)try{M(n)}catch{}else try{n.setAttribute(e,"")}catch{}},ht=function(e){let n=null,r=null;if(He)e="<remove></remove>"+e;else{const A=jt(e,/^[\r\n\t ]+/);r=A&&A[0]}me==="application/xhtml+xml"&&ae===z&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const d=m?m.createHTML(e):e;if(ae===z)try{n=new $().parseFromString(d,me)}catch{}if(!n||!n.documentElement){n=Q.createDocument(ae,"template",null);try{n.documentElement.innerHTML=We?q:d}catch{}}const N=n.body||n.documentElement;return e&&r&&N.insertBefore(l.createTextNode(r),N.childNodes[0]||null),ae===z?_e.call(n,X?"html":"body")[0]:X?n.documentElement:N},gt=function(e){return xe.call(e.ownerDocument||e,e,_.SHOW_ELEMENT|_.SHOW_COMMENT|_.SHOW_TEXT|_.SHOW_PROCESSING_INSTRUCTION|_.SHOW_CDATA_SECTION,null)},xt=function(e){return e instanceof G&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof W)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},Tt=function(e){return typeof k=="function"&&e instanceof k},B=function(e,n,r){C[e]&&Le(C[e],d=>{d.call(a,n,r,re)})},_t=function(e){let n=null;if(B("beforeSanitizeElements",e,null),xt(e))return M(e),!0;const r=E(e.nodeName);if(B("uponSanitizeElement",e,{tagName:r,allowedTags:T}),e.hasChildNodes()&&!Tt(e.firstElementChild)&&y(/<[/\w]/g,e.innerHTML)&&y(/<[/\w]/g,e.textContent)||e.nodeType===ge.progressingInstruction||Ue&&e.nodeType===ge.comment&&y(/<[/\w]/g,e.data))return M(e),!0;if(!T[r]||le[r]){if(!le[r]&&bt(r)&&(x.tagNameCheck instanceof RegExp&&y(x.tagNameCheck,r)||x.tagNameCheck instanceof Function&&x.tagNameCheck(r)))return!1;if(ze&&!se[r]){const d=H(e)||e.parentNode,N=Z(e)||e.childNodes;if(N&&d){const A=N.length;for(let S=A-1;S>=0;--S){const P=D(N[S],!0);P.__removalCount=(e.__removalCount||0)+1,d.insertBefore(P,V(e))}}}return M(e),!0}return e instanceof U&&!Xt(e)||(r==="noscript"||r==="noembed"||r==="noframes")&&y(/<\/no(script|embed|frames)/i,e.innerHTML)?(M(e),!0):(ee&&e.nodeType===ge.text&&(n=e.textContent,Le([oe,Ee,J],d=>{n=fe(n,d," ")}),e.textContent!==n&&(de(a.removed,{element:e.cloneNode()}),e.textContent=n)),B("afterSanitizeElements",e,null),!1)},Et=function(e,n,r){if(at&&(n==="id"||n==="name")&&(r in l||r in $t))return!1;if(!(ke&&!Pe[n]&&y(Me,n))){if(!(tt&&y(be,n))){if(!u[n]||Pe[n]){if(!(bt(e)&&(x.tagNameCheck instanceof RegExp&&y(x.tagNameCheck,e)||x.tagNameCheck instanceof Function&&x.tagNameCheck(e))&&(x.attributeNameCheck instanceof RegExp&&y(x.attributeNameCheck,n)||x.attributeNameCheck instanceof Function&&x.attributeNameCheck(n))||n==="is"&&x.allowCustomizedBuiltInElements&&(x.tagNameCheck instanceof RegExp&&y(x.tagNameCheck,r)||x.tagNameCheck instanceof Function&&x.tagNameCheck(r))))return!1}else if(!Be[n]){if(!y(Ne,fe(r,Ae,""))){if(!((n==="src"||n==="xlink:href"||n==="href")&&e!=="script"&&hn(r,"data:")===0&&it[e])){if(!(nt&&!y(Y,fe(r,Ae,"")))){if(r)return!1}}}}}}return!0},bt=function(e){return e!=="annotation-xml"&&jt(e,ie)},At=function(e){B("beforeSanitizeAttributes",e,null);const{attributes:n}=e;if(!n)return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:u};let d=n.length;for(;d--;){const N=n[d],{name:A,namespaceURI:S,value:P}=N,ue=E(A);let w=A==="value"?P:gn(P);if(r.attrName=ue,r.attrValue=w,r.keepAttr=!0,r.forceKeepAttr=void 0,B("uponSanitizeAttribute",e,r),w=r.attrValue,Ue&&y(/((--!?|])>)|<\/(style|title)/i,w)){Ce(A,e);continue}if(r.forceKeepAttr||(Ce(A,e),!r.keepAttr))continue;if(!st&&y(/\/>/i,w)){Ce(A,e);continue}ee&&Le([oe,Ee,J],wt=>{w=fe(w,wt," ")});const Nt=E(e.nodeName);if(Et(Nt,ue,w)){if(rt&&(ue==="id"||ue==="name")&&(Ce(A,e),w=Wt+w),m&&typeof F=="object"&&typeof F.getAttributeType=="function"&&!S)switch(F.getAttributeType(Nt,ue)){case"TrustedHTML":{w=m.createHTML(w);break}case"TrustedScriptURL":{w=m.createScriptURL(w);break}}try{S?e.setAttributeNS(S,A,w):e.setAttribute(A,w),xt(e)?M(e):Ct(a.removed)}catch{}}}B("afterSanitizeAttributes",e,null)},Kt=function o(e){let n=null;const r=gt(e);for(B("beforeSanitizeShadowDOM",e,null);n=r.nextNode();)B("uponSanitizeShadowNode",n,null),!_t(n)&&(n.content instanceof h&&o(n.content),At(n));B("afterSanitizeShadowDOM",e,null)};return a.sanitize=function(o){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,r=null,d=null,N=null;if(We=!o,We&&(o="<!-->"),typeof o!="string"&&!Tt(o))if(typeof o.toString=="function"){if(o=o.toString(),typeof o!="string")throw pe("dirty is not a string, aborting")}else throw pe("toString is not a function");if(!a.isSupported)return o;if(Fe||qe(e),a.removed=[],typeof o=="string"&&(ce=!1),ce){if(o.nodeName){const P=E(o.nodeName);if(!T[P]||le[P])throw pe("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof k)n=ht("<!---->"),r=n.ownerDocument.importNode(o,!0),r.nodeType===ge.element&&r.nodeName==="BODY"||r.nodeName==="HTML"?n=r:n.appendChild(r);else{if(!te&&!ee&&!X&&o.indexOf("<")===-1)return m&&ve?m.createHTML(o):o;if(n=ht(o),!n)return te?null:ve?q:""}n&&He&&M(n.firstChild);const A=gt(ce?o:n);for(;d=A.nextNode();)_t(d)||(d.content instanceof h&&Kt(d.content),At(d));if(ce)return o;if(te){if(ye)for(N=Te.call(n.ownerDocument);n.firstChild;)N.appendChild(n.firstChild);else N=n;return(u.shadowroot||u.shadowrootmode)&&(N=Ie.call(i,N,!0)),N}let S=X?n.outerHTML:n.innerHTML;return X&&T["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&y(zt,n.ownerDocument.doctype.name)&&(S="<!DOCTYPE "+n.ownerDocument.doctype.name+`>
`+S),ee&&Le([oe,Ee,J],P=>{S=fe(S,P," ")}),m&&ve?m.createHTML(S):S},a.setConfig=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};qe(o),Fe=!0},a.clearConfig=function(){re=null,Fe=!1},a.isValidAttribute=function(o,e,n){re||qe({});const r=E(o),d=E(e);return Et(r,d,n)},a.addHook=function(o,e){typeof e=="function"&&(C[o]=C[o]||[],de(C[o],e))},a.removeHook=function(o){if(C[o])return Ct(C[o])},a.removeHooks=function(o){C[o]&&(C[o]=[])},a.removeAllHooks=function(){C={}},a}var Ln=Bt();function On({produit:s,className:a}){const[l,i]=p.useState(1),{addToCart:f,addToWishlist:h,addToPreorder:R,isProductInWishlist:k,addToCreditOrder:U}=p.useContext(Zt),{user:_}=kt();console.log(_);const W=m=>{m.preventDefault(),f(s,l),je.success("Produit ajouté au panier",{position:"top-center",autoClose:2e3})},G=m=>{m.preventDefault(),h(s,l),je.success("Produit ajouté aux favoris",{position:"top-center",autoClose:2e3})},$=m=>{m.preventDefault(),R(s,l),je.success("Produit ajouté en précommande",{position:"top-center",autoClose:2e3})},F=m=>{m.preventDefault(),U(s,l),je.success("Produit ajouté au panier crédit",{position:"top-center",autoClose:2e3})},g=()=>{i(l+1)},D=()=>{l>1&&i(l-1)},L=["image_512","image_1","image_2","image_3","image_4"],[V,Z]=p.useState(s[L[0]]),H=m=>{Z(m)};return t.jsxs("div",{className:`product-view w-full lg:flex justify-between ${a||""}`,children:[t.jsx("div",{"data-aos":"fade-right",className:"lg:w-1/2 xl:mr-[70px] lg:mr-[50px]",children:t.jsxs("div",{className:"w-full",children:[t.jsxs("div",{className:"w-full h-[600px] border border-qgray-border flex justify-center items-center overflow-hidden relative mb-3",children:[t.jsx("img",{src:`${V?"data:image/png;base64,"+V:"https://cdn-icons-png.flaticon.com/512/130/130288.png"}`,alt:`${s.name} CCBM shop`,className:"object-contain"}),t.jsxs("div",{className:"absolute top-[30px] left-0 right-0 flex justify-between",children:[t.jsx("div",{className:"px-3 py-1 rounded-r-full bg-qyellow text-qblack flex justify-center items-center font-medium",children:t.jsx("span",{children:s.categ_id})}),s.en_promo&&t.jsx("div",{className:"px-3 py-1 rounded-l-full bg-bleu-logo text-white flex justify-center items-center font-medium",children:t.jsx("span",{children:"En promotion"})})]})]}),t.jsx("div",{className:"flex gap-2 flex-wrap",children:L&&L.length>0&&L.map(m=>t.jsx("div",{onClick:()=>H(s[m]),className:"w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer",children:s[m]&&t.jsx("img",{src:`${"data:image/png;base64,"+s[m]}`,alt:`${s.name} CCBM shop`,className:`w-full h-full object-contain ${V!==s[m]?"opacity-50":""}`})},m))})]})}),t.jsx("div",{className:"flex-1",children:t.jsxs("div",{className:"product-details w-full mt-10 lg:mt-0",children:[t.jsx("span",{className:"text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block",children:"Produit"}),t.jsx("p",{className:"text-xl font-medium text-qblack mb-4",children:s.name}),t.jsxs("div",{className:"flex flex-wrap items-end gap-4 mb-1",children:[t.jsx("span",{className:" line-through text-qred text-2xl font-medium",children:s.creditorder_price>0&&t.jsx(t.Fragment,{children:Ye(s.creditorder_price)})}),t.jsx("br",{}),s.en_promo?t.jsx(t.Fragment,{children:t.jsx("span",{className:"text-2xl font-medium text-bleu-logo",children:Ye(s.promo_price)})}):t.jsx(t.Fragment,{children:t.jsx("span",{className:"text-2xl font-medium text-bleu-logo",children:Ye(s.list_price)})})]}),t.jsxs("div",{className:"quantity-card-wrapper w-full flex flex-wrap items-center gap-4 mb-[30px]",children:[t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsxs("div",{className:"w-32 h-12 px-4 flex items-center justify-between border border-qgray-border rounded",children:[t.jsx("button",{onClick:D,type:"button",className:"text-xl text-qgray",children:"-"}),t.jsx("span",{className:"text-qblack text-lg",children:l}),t.jsx("button",{onClick:g,type:"button",className:"text-xl text-qgray",children:"+"})]}),t.jsx("button",{onClick:G,className:"w-12 h-12 flex justify-center items-center border border-qgray-border rounded hover:bg-gray-100 transition-colors duration-200",children:t.jsx(Qt,{className:`${k(s)?"fill-yellow-500 text-yellow-500":"text-qgray"} w-6 h-6`})})]}),t.jsxs("div",{className:"flex flex-wrap gap-2 flex-1",children:[s.sale_ok&&t.jsxs("button",{onClick:W,className:"flex-1 min-w-[140px] h-12 px-4 bg-bleu-logo text-white rounded-md hover:bg-bleu-claire transition-colors duration-200 flex items-center justify-center",children:[t.jsx($e,{className:"w-5 h-5 mr-2"}),t.jsx("span",{children:"Commander"})]}),s.is_preorder&&t.jsxs("button",{onClick:$,className:"flex-1 min-w-[140px] h-12 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center justify-center",children:[t.jsx($e,{className:"w-5 h-5 mr-2"}),t.jsx("span",{children:"Précommander"})]}),_&&_.adhesion=="accepted"&&s.is_creditorder&&t.jsxs("button",{onClick:F,className:"flex-1 min-w-[140px] h-12 px-4 bg-vert text-white rounded-md hover:bg-green-700 transition-colors duration-200 flex items-center justify-center",children:[t.jsx($e,{className:"w-5 h-5 mr-2"}),t.jsx("span",{children:"Acheter à crédit"})]})]})]}),t.jsx("div",{className:"mb-[20px]",children:t.jsxs("p",{className:"text-[13px] text-qgray leading-7",children:[t.jsx("span",{className:"text-qblack",children:"Catégorie :"})," ",s.categ_id]})}),t.jsx("div",{className:"social-share flex items-center w-full mt-3",children:t.jsx("h2",{children:"Description"})}),t.jsx("div",{className:"social-share flex items-center w-full",children:t.jsx("p",{className:"text-qgray text-sm text-normal mb-[30px] leading-7",children:s.description&&t.jsx("div",{dangerouslySetInnerHTML:{__html:Ln.sanitize(s.description)}})})})]})})]})}const Dn=({rating:s,ratingHandler:a,hoverRating:l,hoverHandler:i})=>t.jsx("div",{className:"star-rating flex",children:[...Array(5)].map((f,h)=>(h+=1,t.jsx("button",{type:"button",className:h<=(l||s)?"text-qyellow":"text-qgray",onClick:()=>a(h),onMouseEnter:()=>i(h),onMouseLeave:()=>i(s),children:t.jsx("svg",{width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",className:"fill-current",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"})})},h)))}),In=Dn;function Mn({comments:s,rating:a,ratingHandler:l,author:i,authorHandler:f,message:h,messageHandler:R,reviewAction:k,hoverRating:U,hoverHandler:_,reviewLoading:W}){const[G,$]=p.useState(3),F=()=>{$(g=>g+3)};return t.jsxs("div",{className:"review-wrapper w-full max-w-4xl mx-auto",children:[t.jsxs("div",{className:"w-full reviews mb-12",children:[t.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Avis des clients"}),s&&s.length>0?s.slice(0,G).map(g=>t.jsxs("div",{className:"comment-item bg-white rounded-lg shadow-md p-6 mb-4",children:[t.jsxs("div",{className:"comment-header flex justify-between items-center mb-4",children:[t.jsxs("div",{className:"flex items-center space-x-4",children:[t.jsx("div",{className:"w-12 h-12 rounded-full overflow-hidden",children:t.jsx("img",{src:"/images/comment-user-1.png",alt:`${g.author}'s avatar`,className:"w-full h-full object-cover"})}),t.jsx("div",{children:t.jsx("p",{className:"text-lg font-medium text-gray-800",children:g.author})})]}),t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx("div",{className:"flex",children:Array.from({length:5},(D,L)=>t.jsx(ln,{className:`w-5 h-5 ${L<g.review?"text-yellow-400":"text-gray-300"}`},L))}),t.jsxs("span",{className:"text-sm text-gray-600",children:["(",g.review,".0)"]})]})]}),t.jsx("p",{className:"text-gray-700 leading-relaxed mb-4",children:g.text}),g.replys&&g.replys.length>0&&t.jsx("div",{className:"replies pl-8 border-l-2 border-gray-200",children:g.replys.map(D=>t.jsxs("div",{className:"reply-item mt-4",children:[t.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[t.jsx("div",{className:"w-8 h-8 rounded-full overflow-hidden",children:t.jsx("img",{src:"/images/comment-user-2.png",alt:`${D.author}'s avatar`,className:"w-full h-full object-cover"})}),t.jsx("p",{className:"text-md font-medium text-gray-800",children:D.author})]}),t.jsx("p",{className:"text-gray-700 text-sm",children:D.text})]},D.id))})]},g.id)):t.jsx("p",{className:"text-gray-500",children:"Il n'y a pas encore de commentaires. Soyez le premier à commenter !"}),s.length>G&&t.jsx("div",{className:"w-full flex justify-center mt-6",children:t.jsx("button",{type:"button",onClick:F,className:"bg-bleu-logo hover:bg-qyellow text-white px-6 py-2 rounded-md text-sm font-semibold  transition-colors",children:"Afficher plus"})})]}),t.jsxs("div",{className:"write-review w-full bg-white rounded-lg shadow-md p-6",children:[t.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Rédigez votre commentaire"}),t.jsxs("div",{className:"flex items-center space-x-2 mb-6",children:[t.jsx(In,{hoverRating:U,hoverHandler:_,rating:a,ratingHandler:l}),t.jsxs("span",{className:"text-gray-600 text-sm",children:["(",a,".0)"]})]}),t.jsxs("form",{className:"space-y-4",children:[t.jsx(cn,{label:"Nom complet*",placeholder:"Votre nom",type:"text",name:"name",inputClasses:"w-full p-2 border rounded-md",value:i,disabled:i!=="",inputHandler:f}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message*"}),t.jsx("textarea",{id:"message",rows:4,value:h,onChange:R,className:"w-full p-2 border rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Rédigez votre commentaire ici..."})]}),t.jsx("div",{className:"flex justify-end",children:t.jsx(Jt,{onClick:k,type:"submit",className:"bg-bleu-logo text-white px-1 py-1 rounded-md text-sm font-semibold hover:bg-bleu-claire transition-colors flex items-center space-x-2",disabled:!!(W||i===""||h===""),children:W?t.jsx(en,{className:"w-2 h-2"}):t.jsx("span",{children:"Envoyer"})})})]})]})]})}function Gn(){const{user:s}=kt(),{trackEvent:a,trackPageView:l}=tn(),[i,f]=p.useState([]),[h,R]=p.useState(!1),[k,U]=p.useState(!1),[_,W]=p.useState(null),G=sn(),[$,F]=p.useState(1),[g,D]=p.useState(!1),[L,V]=p.useState("review"),[Z,H]=p.useState(0),[m,q]=p.useState(0),[Q,xe]=p.useState(s?s.name:""),[Te,_e]=p.useState(""),[Ie,C]=p.useState(!1),oe=p.useRef(null),[Ee,J]=p.useState(!1),[Me,be]=p.useState([]),{id:Y}=an();p.useEffect(()=>{_&&(async()=>{R(!0);try{const u=await St.getProduitByCategorie(_.categ_id);f(u)}catch(u){console.log(u)}R(!1)})()},[_]),p.useEffect(()=>{U(!0),(async()=>{try{if(Y){const u=await St.getProduitById(Y);W(u),a("Image","image_produit",u.name,1),console.log(u),Ae()}}catch(u){console.error("Error fetching product:",u)}U(!1)})()},[Y]),p.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"}),l(window.location.pathname)},[]);const Ae=async()=>{J(!0);try{if(Y){const b=await un(Y);be(b)}}catch(b){console.error("Error fetching comments:",b)}finally{J(!1)}},ie=p.useRef(null),Ne=()=>{ie.current&&ie.current.scrollIntoView({behavior:"smooth"})},T=async()=>{const b={author:Q,text:Te,date:new Date().toISOString(),produit_id:Y||"",review:Z||0};C(!0);try{const u=await mn(b);be(we=>[...we,u]),xe(""),_e(""),H(0),q(0),Ne()}catch(u){console.error("Error creating comment:",u)}finally{C(!1)}};return t.jsx(t.Fragment,{children:t.jsx(nn,{childrenClasses:"pt-0 pb-0",children:t.jsxs("div",{className:"single-product-wrapper w-full ",children:[_?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"product-view-main-wrapper bg-white pt-[30px] w-full",children:[t.jsx("div",{className:"breadcrumb-wrapper w-full ",children:t.jsx("div",{className:"container-x mx-auto",children:t.jsx(yt,{paths:[{name:"Accueil",path:"/"},{name:"Page Détails",path:"/single-product"}]})})}),t.jsx("div",{className:"w-full bg-white pb-[60px]",children:t.jsx("div",{className:"container-x mx-auto",children:t.jsx(On,{produit:_,quantity:$,reportHandler:()=>D(!g)})})})]}),t.jsxs("div",{className:"product-des-wrapper w-full relative pb-[60px]",ref:oe,children:[t.jsxs("div",{className:"tab-buttons w-full mb-10 mt-5 sm:mt-0",children:[t.jsx("div",{className:"container-x mx-auto",children:t.jsx("ul",{className:"flex space-x-12 ",children:t.jsx("li",{children:t.jsx("span",{onClick:()=>V("review"),className:`py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${L==="review"?"border-qyellow text-qblack ":"border-transparent text-qgray"}`,children:"Commentaires"})})})}),t.jsx("div",{className:"w-full h-[1px] bg-[#E8E8E8] absolute left-0 sm:top-[50px] top-[36px] -z-10"})]}),t.jsx("div",{className:"tab-contents w-full min-h-[400px] ",children:t.jsx("div",{className:"container-x mx-auto",children:L==="review"&&t.jsx("div",{"data-aos":"fade-up",className:"w-full tab-content-item",children:t.jsx("div",{className:"w-full",ref:ie,children:t.jsx(Mn,{reviewLoading:Ie,reviewAction:T,comments:Me.reverse().slice(0,4),author:Q,authorHandler:b=>xe(b.target.value),message:Te,messageHandler:b=>_e(b.target.value),rating:Z,ratingHandler:H,hoverRating:m,hoverHandler:q})})})})})]})]}):t.jsx(t.Fragment,{children:t.jsxs("div",{className:"product-view-main-wrapper bg-white pt-[30px] w-full",children:[t.jsx("div",{className:"breadcrumb-wrapper w-full ",children:t.jsx("div",{className:"container-x mx-auto",children:t.jsx(yt,{paths:[{name:"Accueil",path:"/"},{name:"Page Détails",path:"/single-product"}]})})}),t.jsx("div",{className:"product-view-main-wrapper bg-white pt-[30px] w-full flex justify-center items-center min-h-screen",children:t.jsxs("div",{className:"text-center",children:[k&&t.jsx("div",{className:"flex justify-center items-center w-full h-full",children:t.jsx(vt,{size:50,className:"animate-spin"})}),t.jsx("p",{className:"text-xl font-semibold",children:"Produit non disponible"}),t.jsx("button",{className:"bg-bleu-logo hover:bg-bleu-claire text-white font-bold py-2 px-4 rounded mt-4",onClick:()=>G("/boutique"),children:"Retour à la page boutique"})]})})]})}),i&&_&&t.jsx(t.Fragment,{children:t.jsx("div",{className:"related-product w-full bg-white",children:t.jsx("div",{className:"container-x mx-auto",children:t.jsxs("div",{className:"w-full py-[60px]",children:[t.jsx("h1",{className:"sm:text-3xl text-xl font-600 text-qblacktext leading-none mb-[30px]",children:"Produits Relatés"}),t.jsx("div",{"data-aos":"fade-up",className:"grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",children:h?t.jsx("div",{className:"flex justify-center items-center w-full h-full",children:t.jsx(vt,{size:50,className:"animate-spin"})}):t.jsx(on,{datas:i,startLength:0,endLength:i.length>4?4:i.length,children:({datas:b})=>t.jsx("div",{className:"item",children:t.jsx(rn,{datas:b})},b.id)})})]})})})})]})})})}export{Gn as default};
