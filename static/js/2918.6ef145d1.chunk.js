"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[2918,4920],{64920:(e,t,n)=>{n.d(t,{GB:()=>r,Qo:()=>l,Y4:()=>s});var i=n(24241);class r{}function s(e){return e instanceof i.bo?e===r.instance:"unknown"===(null===e||void 0===e?void 0:e.toString().toLowerCase())}function l(e){return s(e)?r.instance:e}r.instance=new i.oh("Etc/UTC")},28778:(e,t,n)=>{n.d(t,{g:()=>i});const i={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,n){const i=new r(e.getPointX(t),e.getPointY(t),n),s=e.hasZ(t),l=e.hasM(t);return s&&(i.z=e.getPointZ(t)),l&&(i.m=e.getPointM(t)),i},exportPolygon:function(e,t,n){return new s(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new l(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new o(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){const i=e.hasZ(t),r=e.hasM(t),s=new a(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(i){const n=e.getZExtent(t);s.zmin=n.vmin,s.zmax=n.vmax}if(r){const n=e.getMExtent(t);s.mmin=n.vmin,s.mmax=n.vmax}return s}};class r{constructor(e,t,n){this.x=e,this.y=t,this.spatialReference=n,this.z=void 0,this.m=void 0}}class s{constructor(e,t,n,i){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class l{constructor(e,t,n,i){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class o{constructor(e,t,n,i){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class a{constructor(e,t,n,i,r){this.xmin=e,this.ymin=t,this.xmax=n,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},76279:(e,t,n)=>{n.d(t,{$X:()=>v,Gy:()=>m,P5:()=>y,SW:()=>h,Tr:()=>p,VV:()=>l});n(19902);const i=(e,t,n)=>[t,n],r=(e,t,n)=>[t,n,e[2]],s=(e,t,n)=>[t,n,e[2],e[3]];function l(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:null!=e.extent?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function o(e,t){let{scale:n,translate:i}=e;return Math.round((t-i[0])/n[0])}function a(e,t){let{scale:n,translate:i}=e;return Math.round((i[1]-t)/n[1])}function u(e,t){let{scale:n,translate:i}=e;return t*n[0]+i[0]}function c(e,t){let{scale:n,translate:i}=e;return i[1]-t*n[1]}function d(e,t,n){const i=new Array(n.length);if(!n.length)return i;const[r,s]=e.scale;let l=u(e,n[0][0]),o=c(e,n[0][1]);i[0]=t(n[0],l,o);for(let a=1;a<n.length;a++){const e=n[a];l+=e[0]*r,o-=e[1]*s,i[a]=t(e,l,o)}return i}function f(e,t,n){const i=new Array(n.length);for(let r=0;r<n.length;r++)i[r]=d(e,t,n[r]);return i}function m(e,t,n,i,r){return t.x=o(e,n.x),t.y=a(e,n.y),t!==n&&(i&&(t.z=n.z),r&&(t.m=n.m)),t}function h(e,t,n,l,o){return null!=n&&(t.points=function(e,t,n,l){return d(e,n?l?s:r:l?r:i,t)}(e,n.points,l,o)),t}function p(e,t,n,i,r){return null==n||(t.x=u(e,n.x),t.y=c(e,n.y),t!==n&&(i&&(t.z=n.z),r&&(t.m=n.m))),t}function v(e,t,n,l,o){return null!=n&&(t.rings=function(e,t,n,l){return f(e,n?l?s:r:l?r:i,t)}(e,n.rings,l,o)),t}function y(e,t,n,l,o){return null!=n&&(t.paths=function(e,t,n,l){return f(e,n?l?s:r:l?r:i,t)}(e,n.paths,l,o)),t}},55167:(e,t,n)=>{n.d(t,{LQ:()=>u,ag:()=>d,pL:()=>c});var i=n(98618),r=n(1484);const s=new r.A,l=new r.A,o=new r.A,a={esriGeometryPoint:i.DF,esriGeometryPolyline:i.BW,esriGeometryPolygon:i.z5,esriGeometryMultipoint:i.qK};function u(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if(null==t)return null;const l=e.hasZ&&r,a=e.hasM&&s;if(n){const u=(0,i.Nl)(o,t,e.hasZ,e.hasM,"esriGeometryPoint",n,r,s);return(0,i.DF)(u,l,a)}return(0,i.DF)(t,l,a)}function c(e,t,n,r,u,c){var d,f;let m=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:n;const p=t&&m,v=n&&h,y=null!=r?"coords"in r?r:r.geometry:null;if(null==y)return null;if(u){var g,R;let r=(0,i.kz)(l,y,t,n,e,u,m,h);return c&&(r=(0,i.Nl)(o,r,p,v,e,c)),null!==(g=null===(R=a[e])||void 0===R?void 0:R.call(a,r,p,v))&&void 0!==g?g:null}if(c){var S,x;const r=(0,i.Nl)(o,y,t,n,e,c,m,h);return null!==(S=null===(x=a[e])||void 0===x?void 0:x.call(a,r,p,v))&&void 0!==S?S:null}return(0,i.Q4)(s,y,t,n,m,h),null!==(d=null===(f=a[e])||void 0===f?void 0:f.call(a,s,p,v))&&void 0!==d?d:null}function d(e){return e&&f in e?JSON.parse(JSON.stringify(e,m)):e}const f="_geVersion",m=(e,t)=>e!==f?t:void 0},24586:(e,t,n)=>{n.d(t,{Cv:()=>v,Nk:()=>m,lK:()=>g});var i=n(18690),r=n(50346),s=n(9624),l=n(28778),o=n(80963),a=n(45417);const u=[0,0];function c(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,u),null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,u),[n.xmax,n.ymax]=e(t.xmax,t.ymax,u),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:d(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:d(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:f(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function d(e,t){const n=[];for(const i of e)n.push(f(i,t));return n}function f(e,t){const n=[];for(const i of e){const e=t(i[0],i[1],[0,0]);n.push(e),i.length>2&&e.push(i[2]),i.length>3&&e.push(i[3])}return n}async function m(e,t){if(!e||!t)return;const n=Array.isArray(e)?e.map((e=>null!=e.geometry?e.geometry.spatialReference:null)).filter(i.Ru):[e];await(0,s.initializeProjection)(n.map((e=>({source:e,dest:t}))))}const h=c.bind(null,a.je),p=c.bind(null,a.tD);function v(e,t,n,i){if(!e)return e;if(n||(n=t,t=e.spatialReference),!(0,o.fn)(t)||!(0,o.fn)(n)||(0,o.aI)(t,n))return e;if((0,a.y7)(t,n)){const t=(0,o.K8)(n)?h(e):p(e);return t.spatialReference=n,t}return(0,s.projectMany)(l.g,[e],t,n,null,i)[0]}const y=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,n,i){var s;if(null===e||void 0===e||!e.length||!t||!n||(0,o.aI)(t,n))return e;const l={geometries:e,inSpatialReference:t,outSpatialReference:n,geographicTransformation:i,resolve:(0,r.Tw)()};return this._jobs.push(l),null!==(s=this._timer)&&void 0!==s||(this._timer=setTimeout(this._process,10)),l.resolve.promise}_process(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:t,inSpatialReference:n,outSpatialReference:i,resolve:r,geographicTransformation:u}=e;(0,a.y7)(n,i)?(0,o.K8)(i)?r(t.map(h)):r(t.map(p)):r((0,s.projectMany)(l.g,t,n,i,u,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function g(e,t,n,i){return y.push(e,t,n,i)}},71857:(e,t,n)=>{n.d(t,{GC:()=>m,T2:()=>h,v8:()=>f});var i=n(45802),r=n(31633),s=n(9624),l=n(27084),o=n(19902),a=n(1438),u=n(80963),c=n(24586);const d=new i.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),f=Object.freeze({});async function m(e,t,n){const{outFields:i,orderByFields:r,groupByFieldsForStatistics:s,outStatistics:l}=e;if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(r)for(let o=0;o<r.length;o++)r[o]=r[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(l)for(let o=0;o<l.length;o++)l[o].onStatisticField&&(l[o].onStatisticField=l[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),h(e,t,n)}async function h(e,t,i){var s;if(!e)return null;let{where:m}=e;if(e.where=m=null===(s=m)||void 0===s?void 0:s.trim(),(!m||/^1 *= *1$/.test(m)||t&&t===m)&&(e.where=null),!e.geometry)return e;let h=await async function(e){const{distance:t,units:i}=e,s=e.geometry;if(null==t||"vertexAttributes"in s)return s;const l=s.spatialReference,o=i?d.fromJSON(i):(0,r.Ij)(l),a=l&&((0,u.EA)(l)||(0,u.K8)(l))?s:await(0,c.Nk)(l,u.KK).then((()=>(0,c.Cv)(s,u.KK)));return(await async function(){return(await Promise.all([n.e(2612),n.e(4050)]).then(n.bind(n,1669))).geodesicBuffer}())(a.spatialReference,a,t,o)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;h=(0,l.HA)(h),h.spatialReference=t}if(h){var v;await(0,c.Nk)(h.spatialReference,i),h=function(e,t){const n=e.spatialReference;return p(e,t)&&(0,o.ZC)(e)?{spatialReference:n,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}(h,i);const t=(await(0,a.el)((0,o.rS)(h)))[0];if(null==t)throw f;const n="quantizationParameters"in e&&(null===(v=e.quantizationParameters)||void 0===v?void 0:v.tolerance)||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,r=n&&p(h,i)?{densificationStep:8*n}:void 0,s=t.toJSON(),l=(0,c.Cv)(s,s.spatialReference,i,r);if(!l)throw f;l.spatialReference=i,e.geometry=l}return e}function p(e,t){if(!e)return!1;const n=e.spatialReference;return((0,o.ZC)(e)||(0,o.Bi)(e)||(0,o.Rg)(e))&&!(0,u.aI)(n,t)&&!(0,s.canProjectWithoutEngine)(n,t)}},81376:(e,t,n)=>{n.d(t,{tC:()=>x,c0:()=>S,xt:()=>R});var i=n(50076),r=n(11352),s=n(65658);var l=n(19902),o=n(80963);function a(e,t){return e?t?4:3:t?3:2}function u(e,t,n,i,r,s){const l=a(r,s),{coords:o,lengths:u}=i;if(!u)return!1;for(let a=0,d=0;a<u.length;a++,d+=l)if(!c(e,t,n,o[d],o[d+1]))return!1;return!0}function c(e,t,n,i,r){if(!e)return!1;const s=a(t,n),{coords:l,lengths:o}=e;let u=!1,c=0;for(const a of o)u=d(u,l,s,c,a,i,r),c+=a*s;return u}function d(e,t,n,i,r,s,l){let o=e,a=i;for(let u=i,c=i+r*n;u<c;u+=n){a=u+n,a===c&&(a=i);const e=t[u],r=t[u+1],d=t[a],f=t[a+1];(r<l&&f>=l||f<l&&r>=l)&&e+(l-r)/(f-r)*(d-e)<s&&(o=!o)}return o}var f=n(98618),m=n(1484),h=n(55167),p=n(24586);const v="unsupported-query",y={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},g={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function R(e,t,i,o,a){if((0,l.Bi)(t)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,f.Ye)(new m.A,t,!1,!1);return Promise.resolve((t=>function(e,t,n,i){return c(e,t,n,i.coords[0],i.coords[1])}(e,!1,!1,t)))}if((0,l.Bi)(t)&&"esriGeometryMultipoint"===i){const n=(0,f.Ye)(new m.A,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>u(n,!1,!1,e,o,a)))}if((0,l.ZC)(t)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>(0,r.qz)(t,(0,h.pL)(i,o,a,e))));if((0,l.ZC)(t)&&"esriGeometryMultipoint"===i&&"esriSpatialRelContains"===e)return Promise.resolve((e=>(0,r.rL)(t,(0,h.pL)(i,o,a,e))));if((0,l.ZC)(t)&&"esriSpatialRelIntersects"===e){const e=function(e){return"mesh"===e?s.xB:(0,s.xK)(e)}(i);return Promise.resolve((n=>e(t,(0,h.pL)(i,o,a,n))))}return Promise.all([n.e(2612),n.e(4050)]).then(n.bind(n,1669)).then((n=>{const r=n[y[e]].bind(null,t.spatialReference,t);return e=>r((0,h.pL)(i,o,a,e))}))}async function S(e,t,n){const{spatialRel:r,geometry:s}=e;if(s){if(!function(e){return null!=e&&!0===g.spatialRelationship[e]}(r))throw new i.A(v,"Unsupported query spatial relationship",{query:e});if((0,o.fn)(s.spatialReference)&&(0,o.fn)(n)){var a;if(!function(e){return null!=e&&!0===g.queryGeometry[(0,l.$B)(e)]}(s))throw new i.A(v,"Unsupported query geometry type",{query:e});if(!function(e){return null!=e&&!0===g.layerGeometry[e]}(t))throw new i.A(v,"Unsupported layer geometry type",{query:e});if(e.outSR)return(0,p.Nk)(null===(a=e.geometry)||void 0===a?void 0:a.spatialReference,e.outSR)}}}function x(e){if((0,l.ZC)(e))return!0;if((0,l.Bi)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},23478:(e,t,n)=>{async function i(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:i,endTimeField:r}=e;let s=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(i&&r)await t.forEach((e=>{const t=n.getAttribute(e,i),o=n.getAttribute(e,r);null==t||isNaN(t)||(s=Math.min(s,t)),null==o||isNaN(o)||(l=Math.max(l,o))}));else{const e=i||r;await t.forEach((t=>{const i=n.getAttribute(t,e);null==i||isNaN(i)||(s=Math.min(s,i),l=Math.max(l,i))}))}return{start:s,end:l}}function r(e,t,n){var i,r;if(!t||!e)return null;const{startTimeField:s,endTimeField:l}=e;if(!s&&!l)return null;const{start:o,end:a}=t;if(null===o&&null===a)return null;if(void 0===o&&void 0===a)return()=>!1;const u=null!==(i=null===(r=n.getAttributeAsTimestamp)||void 0===r?void 0:r.bind(n))&&void 0!==i?i:n.getAttribute.bind(n);return s&&l?function(e,t,n,i,r){return null!=i&&null!=r?s=>{const l=e(s,t),o=e(s,n);return(null==l||l<=r)&&(null==o||o>=i)}:null!=i?t=>{const r=e(t,n);return null==r||r>=i}:null!=r?n=>{const i=e(n,t);return null==i||i<=r}:void 0}(u,s,l,o,a):function(e,t,n,i){return null!=n&&null!=i&&n===i?i=>e(i,t)===n:null!=n&&null!=i?r=>{const s=e(r,t);return null!=s&&s>=n&&s<=i}:null!=n?i=>{const r=e(i,t);return null!=r&&r>=n}:null!=i?n=>{const r=e(n,t);return null!=r&&r<=i}:void 0}(u,s||l,o,a)}n.d(t,{I:()=>r,W:()=>i})},1900:(e,t,n)=>{n.d(t,{A:()=>f});var i=n(50076),r=n(42553),s=n(76460),l=n(87663),o=n(64920),a=n(53430),u=n(67478),c=n(24241);const d=new Map;class f{static fromJSON(e){return new f(e.fields,e.timeZoneByFieldName)}static fromLayer(e){var t;return new f(null!==(t=e.fields)&&void 0!==t?t:[],v(e))}static fromLayerJSON(e){var t;return new f(null!==(t=e.fields)&&void 0!==t?t:[],v(e))}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;const n=[];for(const r of this.fields){const e=null===r||void 0===r?void 0:r.name,t=h(e);if(e&&t){var i;const s=m(e);this._fieldsMap.set(e,r),this._fieldsMap.set(s,r),this._normalizedFieldsMap.set(t,r),n.push("".concat(s,":").concat(r.type,":").concat(null===(i=this._timeZoneByFieldName)||void 0===i?void 0:i.get(e))),(0,a.vE)(r)?(this.dateFields.push(r),this._dateFieldsSet.add(r)):(0,a.WA)(r)&&(this._numericFieldsSet.add(r),this.numericFields.push(r)),(0,a.te)(r)||(0,a.Xz)(r)||(r.editable=null==r.editable||!!r.editable,r.nullable=null==r.nullable||!!r.nullable)}}n.sort(),this.uid=n.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)(0,a.te)(e)||(0,a.Xz)(e)||e.nullable||void 0!==(0,a.lD)(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===(null===e||void 0===e?void 0:e.uid)}has(e){return null!=this.get(e)}get(e){var t;if(!e)return;let n=this._fieldsMap.get(e);return n||(n=null!==(t=this._fieldsMap.get(m(e)))&&void 0!==t?t:this._normalizedFieldsMap.get(h(e)),n&&this._fieldsMap.set(e,n),n)}getTimeZone(e){const t=this.get(e&&"string"!=typeof e?e.name:e);return t?this._timeZoneByFieldName?this._timeZoneByFieldName.get(t.name):"date"===t.type||"esriFieldTypeDate"===t.type?(s.A.getLogger("esri.layers.support.FieldsIndex").error(new i.A("getTimeZone:no-timezone-information","no time zone information for field '".concat(t.name,"'"))),u.n$):p.has(t.type)?u.L5:null:null}getLuxonTimeZone(e){const t=this.getTimeZone(e);return t?t===u.L5?o.GB.instance:t===u.n$?c.mQ.utcInstance:(0,l.tE)(d,t,(()=>c.oh.create(t))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return(0,a.OH)(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){var t,n;return null!==(t=null===(n=this.get(e))||void 0===n?void 0:n.name)&&void 0!==t?t:void 0}toJSON(){return{fields:this.fields.map((e=>(0,r.Wj)(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function m(e){return e.trim().toLowerCase()}function h(e){var t,n;return null!==(t=null===(n=(0,a.rS)(e))||void 0===n?void 0:n.toLowerCase())&&void 0!==t?t:""}const p=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function v(e){var t,n,i,r,s,l,o;const a=new Map;if(!e.fields)return a;const c=!0===e.datesInUnknownTimezone,{timeInfo:d,editFieldsInfo:f}=e,h=null!==(t=d?"startField"in d?d.startField:d.startTimeField:"")&&void 0!==t?t:"",v=null!==(n=d?"endField"in d?d.endField:d.endTimeField:"")&&void 0!==n?n:"",y=function(e){return"dateFieldsTimeZone"in e}(e)?null!==(i=e.dateFieldsTimeZone)&&void 0!==i?i:null:e.dateFieldsTimeReference?(0,u.ZS)(e.dateFieldsTimeReference):null,g=f?function(e){return"timeZone"in e}(f)?null!==(r=f.timeZone)&&void 0!==r?r:y:f.dateFieldsTimeReference?(0,u.ZS)(f.dateFieldsTimeReference):null!==y&&void 0!==y?y:u.n$:null,R=d?function(e){return"timeZone"in e}(d)?null!==(s=d.timeZone)&&void 0!==s?s:y:d.timeReference?(0,u.ZS)(d.timeReference):y:null,S=new Map([[m(null!==(l=null===f||void 0===f?void 0:f.creationDateField)&&void 0!==l?l:""),g],[m(null!==(o=null===f||void 0===f?void 0:f.editDateField)&&void 0!==o?o:""),g],[m(h),R],[m(v),R]]);for(const{name:F,type:w}of e.fields)if(p.has(w))a.set(F,u.L5);else if("date"!==w&&"esriFieldTypeDate"!==w)a.set(F,null);else if(c)a.set(F,u.L5);else{var x;const e=null!==(x=S.get(m(null!==F&&void 0!==F?F:"")))&&void 0!==x?x:y;a.set(F,e)}return a}}}]);
//# sourceMappingURL=2918.6ef145d1.chunk.js.map