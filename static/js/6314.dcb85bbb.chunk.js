"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[6314],{93795:(e,t,n)=>{function o(e){return e=e||globalThis.location.hostname,c.some((t=>{var n;return null!=(null===(n=e)||void 0===n?void 0:n.match(t))}))}function l(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(r)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(i)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}n.d(t,{EM:()=>l,b5:()=>o});const r=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,i=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,r,a,/^jsapps.esri.com$/,s,i]},31111:(e,t,n)=>{n.d(t,{Qf:()=>r,Vd:()=>l,Vo:()=>c,lC:()=>s});var o=n(81806);const l=()=>!!(0,o.A)("enable-feature:force-wosr"),r=()=>!!(0,o.A)("enable-feature:direct-3d-object-feature-layer-display"),a=()=>o.A.add("enable-feature:direct-3d-object-feature-layer-display",!1,!0,!0),s=()=>!!(0,o.A)("enable-i3s-patching"),i=()=>o.A.add("enable-i3s-patching",!1,!0,!0),c=()=>!!(0,o.A)("enable-feature:SceneLayer-editing");!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"i3s-patching";switch(i(),a(),o.A.add("enable-feature:SceneLayer-editing",!0,!0,!0),e){case"feature-layer-view":o.A.add("enable-feature:direct-3d-object-feature-layer-display",!0,!0,!0);break;case"i3s-patching":o.A.add("enable-i3s-patching",!0,!0,!0)}}("i3s-patching")},10609:(e,t,n)=>{n.d(t,{M9:()=>c,oO:()=>u,rS:()=>d});var o=n(95444),l=n(50076),r=n(31933),a=n(78135),s=n(87708),i=n(89579);function c(e,t,n,o){const l=y(e,{},{context:o,isLabelSymbol:!1});null!=l&&(t[n]=l)}function u(e,t,n,o){const l=y(e,{},{context:o,isLabelSymbol:!0});null!=l&&(t[n]=l)}function m(e){return e instanceof a.A||e instanceof i.A}function y(e,t,n){if(null==e)return null;const{context:o,isLabelSymbol:a}=n,i=null===o||void 0===o?void 0:o.origin,c=null===o||void 0===o?void 0:o.messages;if("web-scene"===i&&!m(e)){const n=(0,s.t)(e,{retainCIM:!0,hasLabelingContext:a});return null!=n.symbol?n.symbol.write(t,o):(null!==c&&void 0!==c&&c.push(new l.A("symbol:unsupported","Symbols of type '".concat(e.declaredClass,"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView"),{symbol:e,context:o,error:n.error})),null)}return("web-map"===i||"portal-item"===i&&!(0,r.TU)(null===o||void 0===o?void 0:o.layer))&&m(e)?(null!==c&&void 0!==c&&c.push(new l.A("symbol:unsupported","Symbols of type '".concat(e.declaredClass,"' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView"),{symbol:e,context:o})),null):e.write(t,o)}function d(e,t){return(0,o.Bu)(e,null,t)}},8446:(e,t,n)=>{n.d(t,{bo:()=>d,cF:()=>y,jg:()=>h,o5:()=>f,yA:()=>b});var o=n(3825),l=n(50076),r=n(50346),a=n(90534),s=n(65308),i=n(36351),c=n(31111);let u={};function m(e,t,n){const o=null!=t.portal?t.portal:s.A.getDefault();let r;const a="".concat(o.url," - ").concat(o.user&&o.user.username," - ").concat(e);return u[a]||(u[a]=function(e,t,n){return t.load(n).then((()=>{const o=new i.A({disableExtraQuery:!0,query:"owner:".concat(p," AND type:").concat(g,' AND typekeywords:"').concat(e,'"')});return t.queryItems(o,n)})).then((t=>{let{results:o}=t,r=null;const a=e.toLowerCase();if(o&&Array.isArray(o))for(const e of o){var s;const t=null===(s=e.typeKeywords)||void 0===s?void 0:s.some((e=>e.toLowerCase()===a));if(t&&e.type===g&&e.owner===p){r=e;break}}if(!r)throw new l.A("symbolstyleutils:style-not-found","The style '".concat(e,"' could not be found"),{styleName:e});return r.load(n)}))}(e,o,n).then((e=>(r=e,e.fetchData()))).then((t=>{var n;return{data:t,baseUrl:null!==(n=r.itemUrl)&&void 0!==n?n:"",styleName:e}}))),u[a]}function y(e,t,n){return null!=(null===e||void 0===e?void 0:e.styleUrl)?async function(e,t){try{return{data:(await b(e,t)).data,baseUrl:(0,a.nM)(e),styleUrl:e}}catch(n){return(0,r.QP)(n),null}}(e.styleUrl,n):null!=(null===e||void 0===e?void 0:e.styleName)?m(e.styleName,t,n):Promise.reject(new l.A("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function d(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function f(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["gltf"];if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!(0,c.Vd)())for(const o of n){const t=e.formatInfos.find((e=>e.type===o));if(t)return t.href}return e.webRef}function b(e,t){const n={responseType:"json",query:{f:"json"},...t};return(0,o.A)((0,a.S8)(e),n)}const p="esri_en",g="Style",h="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"},87708:(e,t,n)=>{n.d(t,{c:()=>p,t:()=>g});var o=n(95444),l=n(50076),r=n(89579),a=n(37471),s=n(7246),i=n(34913),c=n(76940),u=n(27410),m=n(86875),y=n(94918),d=n(74343),f=n(86659),b=n(16911);const p={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;if(!e)return{symbol:null};const{retainId:n=p.retainId,ignoreDrivers:g=p.ignoreDrivers,hasLabelingContext:h=p.hasLabelingContext,retainCIM:v=p.retainCIM}=t;let A=null;if((0,o.wk)(e)||e instanceof r.A)A=e.clone();else if("cim"===e.type){var w;const t=null===(w=e.data)||void 0===w||null===(w=w.symbol)||void 0===w?void 0:w.type;if("CIMPointSymbol"!==t)return{error:new l.A("symbol-conversion:unsupported-cim-symbol","CIM symbol of type '".concat(t||"unknown","' is unsupported in 3D"),{symbol:e})};A=v?e.clone():a.A.fromCIMSymbol(e)}else if(e instanceof s.A)A=i.A.fromSimpleLineSymbol(e);else if(e instanceof c.A)A=a.A.fromSimpleMarkerSymbol(e);else if(e instanceof u.A)A=a.A.fromPictureMarkerSymbol(e);else if(e instanceof m.A)A=t.geometryType&&"mesh"===t.geometryType?y.A.fromSimpleFillSymbol(e):d.A.fromSimpleFillSymbol(e);else{if(!(e instanceof f.A))return{error:new l.A("symbol-conversion:unsupported-2d-symbol","2D symbol of type '".concat(e.type||e.declaredClass,"' is unsupported in 3D"),{symbol:e})};A=h?b.A.fromTextSymbol(e):a.A.fromTextSymbol(e)}return n&&A&&"cim"!==A.type&&(A.id=e.id),g&&(0,o.wk)(A)&&A.symbolLayers.forEach((e=>e.ignoreDrivers=!0)),{symbol:A}}},26314:(e,t,n)=>{n.d(t,{I:()=>b,p:()=>f,resolveWebStyleSymbol:()=>d});var o=n(95444),l=n(93795),r=n(50076),a=n(90534),s=n(65308),i=n(79453),c=n(10609),u=n(24141),m=n(8446),y=n(25158);function d(e,t,n,o){const l=e.name;return null==l?Promise.reject(new r.A("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,n){const o=m.jg.replaceAll(/\{SymbolName\}/gi,e),l=null!=t.portal?t.portal:s.A.getDefault();return(0,m.yA)(o,n).then((e=>{const t=(0,m.bo)(e.data);return(0,c.rS)(t,{portal:l,url:(0,a.An)((0,a.nM)(o)),origin:"portal-item"})}))}(l,t,o):(0,m.cF)(e,t,o).then((e=>b(e,l,t,n,m.o5,o)))}function f(e,t){return t.items.find((t=>t.name===e))}function b(e,t,n,d,b,p){var g,h,v,A;const w=null!=(null===n||void 0===n?void 0:n.portal)?n.portal:s.A.getDefault(),S={portal:w,url:(0,a.An)(e.baseUrl),origin:"portal-item"},C=f(t,e.data);if(!C){const e="The symbol name '".concat(t,"' could not be found");return Promise.reject(new r.A("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let M=(0,i.f)(b(C,d),S),D=null!==(g=null===(h=C.thumbnail)||void 0===h?void 0:h.href)&&void 0!==g?g:null;const I=null===(v=C.thumbnail)||void 0===v?void 0:v.imageData;(0,l.b5)()&&(M=null!==(A=(0,l.EM)(M))&&void 0!==A?A:"",D=(0,l.EM)(D));const k={portal:w,url:(0,a.An)((0,a.nM)(M)),origin:"portal-item"};return(0,m.yA)(M,p).then((l=>{const r="cimRef"===d?(0,m.bo)(l.data):l.data,a=(0,c.rS)(r,k);if(a&&(0,o.wk)(a)){if(D){const e=(0,i.f)(D,S);a.thumbnail=new y.V({url:e})}else I&&(a.thumbnail=new y.V({url:"data:image/png;base64,".concat(I)}));e.styleUrl?a.styleOrigin=new u.A({portal:n.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(a.styleOrigin=new u.A({portal:n.portal,styleName:e.styleName,name:t}))}return a}))}}}]);
//# sourceMappingURL=6314.dcb85bbb.chunk.js.map