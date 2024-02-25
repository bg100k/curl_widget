"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[4058,4920,3856],{53521:(e,t,s)=>{s.d(t,{q:()=>r});var i=s(79369);class r{constructor(e,t){this._storage=new i.F,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),t&&this._storage.registerRemoveFunc("",t)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this._storage.put(this,e,t,s,1)}pop(e){return this._storage.pop(this,e)}get(e){return this._storage.get(this,e)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}resetHitRate(){}}},79369:(e,t,s)=>{s.d(t,{Cn:()=>n,F:()=>a,Mn:()=>l,Ti:()=>r,k2:()=>o});var i=s(30015);const r=-3,n=r-1;var o;!function(e){e[e.ALL=0]="ALL",e[e.SOME=1]="SOME"}(o||(o={}));class l{constructor(e,t,s){this.name=e,this._storage=t,this.id=u+++":",this.size=0,this.maxSize=-1,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),s&&(this._storage.registerRemoveFunc(this.id,s),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get storageSize(){return this._storage.size}getSize(e){return this._storage.getSize(this,e)}resetHitRate(){this._hit=this._miss=0}put(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this._storage.put(this,e,t,s,i)}pop(e){const t=this._storage.pop(this,e);return void 0===t?++this._miss:++this._hit,t}get(e){const t=this._storage.get(this,e);return void 0===t?++this._miss:++this._hit,t}peek(e){return this._storage.peek(this,e)}updateSize(e,t,s){this._storage.updateSize(this,e,t,s)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class a{get size(){return this._size}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10485760;this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new i.A,this._users=new i.A}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace((t=>t[0]!==e))}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,-1),this._checkSize()}getSize(e,t){var s;const i=this._db.get(e.id+t);return null!==(s=null===i||void 0===i?void 0:i.size)&&void 0!==s?s:0}put(e,t,s,i,l){t=e.id+t;const a=this._db.get(t);if(a&&(this._size-=a.size,e.size-=a.size,this._db.delete(t),a.entry!==s&&this._notifyRemove(t,a.entry,a.size,o.ALL)),i>this._maxSize)return void this._notifyRemove(t,s,i,o.ALL);if(void 0===s)return void console.warn("Refusing to cache undefined entry ");if(!i||i<0)return console.warn("Refusing to cache entry with size ".concat(i," for key ").concat(t)),void this._notifyRemove(t,s,0,o.ALL);const u=1+Math.max(l,n)-r;this._db.set(t,new p(s,i,u)),this._size+=i,e.size+=i,this._checkSize()}updateSize(e,t,s,i){t=e.id+t;const r=this._db.get(t);if(r&&r.entry===s){for(this._size-=r.size,e.size-=r.size;i>this._maxSize;){const e=this._notifyRemove(t,s,i,o.SOME);if(!(null!=e&&e>0))return void this._db.delete(t);i=e}r.size=i,this._size+=i,e.size+=i,this._checkSize()}}pop(e,t){t=e.id+t;const s=this._db.get(t);if(s)return this._size-=s.size,e.size-=s.size,this._db.delete(t),++this._hit,s.entry;++this._miss}get(e,t){t=e.id+t;const s=this._db.get(t);if(void 0!==s)return this._db.delete(t),s.lives=s.lifetime,this._db.set(t,s),++this._hit,s.entry;++this._miss}peek(e,t){const s=this._db.get(e.id+t);return s?++this._hit:++this._miss,null===s||void 0===s?void 0:s.entry}get performanceInfo(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},s=new Array;this._db.forEach(((e,i)=>{const r=e.lifetime;s[r]=(s[r]||0)+e.size,this._users.forAll((s=>{const{id:r,name:n}=s;if(i.startsWith(r)){const s=t[n]||0;t[n]=s+e.size}}))}));const i={};this._users.forAll((e=>{const s=e.name;if("hitRate"in e&&"number"==typeof e.hitRate&&!isNaN(e.hitRate)&&e.hitRate>0){const r=t[s]||0;t[s]=r,i[s]=Math.round(100*e.hitRate)+"%"}else i[s]="0%"}));const n=Object.keys(t);n.sort(((e,s)=>t[s]-t[e])),n.forEach((s=>e[s]=Math.round(t[s]/2**20)+"MB / "+i[s]));for(let o=s.length-1;o>=0;--o){const t=s[o];t&&(e["Priority "+(o+r-1)]=Math.round(t/this._size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll((e=>e.resetHitRate()))}clear(e){const t=e.id;this._db.forEach(((e,s)=>{s.startsWith(t)&&(this._size-=e.size,this._db.delete(s),this._notifyRemove(s,e.entry,e.size,o.ALL))})),e.size=0}clearAll(){this._db.forEach(((e,t)=>this._notifyRemove(t,e.entry,e.size,o.ALL))),this._users.forAll((e=>e.size=0)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,s,i){let r;return this._removeFuncs.some((n=>{if(e.startsWith(n[0])){const e=n[1](t,i,s);return"number"==typeof e&&(r=e),!0}return!1})),r}_checkSize(){this._users.forAll((e=>this._checkSizeLimits(e))),this._checkSizeLimits()}_checkSizeLimits(e){const t=null!==e&&void 0!==e?e:this;if(t.maxSize<0||t.size<=t.maxSize)return;const s=null===e||void 0===e?void 0:e.id;let i=!0;for(;i;){i=!1;for(const[r,n]of this._db)if(0===n.lifetime&&(!s||r.startsWith(s))){if(this._purgeItem(r,n,e),t.size<=.9*t.maxSize)return;i||(i=this._db.has(r))}}for(const[r,n]of this._db)if((!s||r.startsWith(s))&&(this._purgeItem(r,n,e),t.size<=.9*t.maxSize))return}_purgeItem(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._users.find((t=>e.startsWith(t.id)));if(this._db.delete(e),t.lives<=1){this._size-=t.size,s&&(s.size-=t.size);const i=this._notifyRemove(e,t.entry,t.size,o.SOME);null!=i&&i>0&&(this._size+=i,s&&(s.size+=i),t.lives=t.lifetime,t.size=i,this._db.set(e,t))}else--t.lives,this._db.set(e,t)}}let u=0;class p{constructor(e,t,s){this.entry=e,this.size=t,this.lifetime=s,this.lives=s}}},64920:(e,t,s)=>{s.d(t,{GB:()=>r,Qo:()=>o,Y4:()=>n});var i=s(24241);class r{}function n(e){return e instanceof i.bo?e===r.instance:"unknown"===(null===e||void 0===e?void 0:e.toString().toLowerCase())}function o(e){return n(e)?r.instance:e}r.instance=new i.oh("Etc/UTC")},76279:(e,t,s)=>{s.d(t,{$X:()=>y,Gy:()=>h,P5:()=>g,SW:()=>f,Tr:()=>m,VV:()=>o});s(19902);const i=(e,t,s)=>[t,s],r=(e,t,s)=>[t,s,e[2]],n=(e,t,s)=>[t,s,e[2],e[3]];function o(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:null!=e.extent?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function l(e,t){let{scale:s,translate:i}=e;return Math.round((t-i[0])/s[0])}function a(e,t){let{scale:s,translate:i}=e;return Math.round((i[1]-t)/s[1])}function u(e,t){let{scale:s,translate:i}=e;return t*s[0]+i[0]}function p(e,t){let{scale:s,translate:i}=e;return i[1]-t*s[1]}function d(e,t,s){const i=new Array(s.length);if(!s.length)return i;const[r,n]=e.scale;let o=u(e,s[0][0]),l=p(e,s[0][1]);i[0]=t(s[0],o,l);for(let a=1;a<s.length;a++){const e=s[a];o+=e[0]*r,l-=e[1]*n,i[a]=t(e,o,l)}return i}function c(e,t,s){const i=new Array(s.length);for(let r=0;r<s.length;r++)i[r]=d(e,t,s[r]);return i}function h(e,t,s,i,r){return t.x=l(e,s.x),t.y=a(e,s.y),t!==s&&(i&&(t.z=s.z),r&&(t.m=s.m)),t}function f(e,t,s,o,l){return null!=s&&(t.points=function(e,t,s,o){return d(e,s?o?n:r:o?r:i,t)}(e,s.points,o,l)),t}function m(e,t,s,i,r){return null==s||(t.x=u(e,s.x),t.y=p(e,s.y),t!==s&&(i&&(t.z=s.z),r&&(t.m=s.m))),t}function y(e,t,s,o,l){return null!=s&&(t.rings=function(e,t,s,o){return c(e,s?o?n:r:o?r:i,t)}(e,s.rings,o,l)),t}function g(e,t,s,o,l){return null!=s&&(t.paths=function(e,t,s,o){return c(e,s?o?n:r:o?r:i,t)}(e,s.paths,o,l)),t}},12406:(e,t,s)=>{s.d(t,{p:()=>o});var i=s(35143),r=s(46053),n=(s(81806),s(76460),s(47249),s(85842));const o=e=>{let t=class extends e{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):function(e){return"portalItem"in e}(this)?null===(e=this.portalItem)||void 0===e?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,r.MZ)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,n.$)("esri.layers.mixins.APIKeyMixin")],t),t}},19502:(e,t,s)=>{s.d(t,{b:()=>a});var i=s(35143),r=s(76460),n=s(46053),o=(s(81806),s(47249),s(85842)),l=s(13096);const a=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,l.qg)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,l.Jf)(e,r.A.getLogger(this)))}};return(0,i._)([(0,n.MZ)()],t.prototype,"title",null),(0,i._)([(0,n.MZ)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,o.$)("esri.layers.mixins.ArcGISService")],t),t}},91485:(e,t,s)=>{s.d(t,{A:()=>h});var i=s(35143),r=s(69098),n=s(42553),o=s(46053),l=(s(81806),s(76460),s(47249),s(28379)),a=s(85842),u=s(17707),p=s(90907),d=s(15427);let c=class extends((0,r.O)(n.oY)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const s of Object.keys(e))t[s]=(0,p.rS)(e[s]);return t}writeDomains(e,t){const s={};for(const r of Object.keys(e)){var i;e[r]&&(s[r]=null===(i=e[r])||void 0===i?void 0:i.toJSON())}t.domains=s}};(0,i._)([(0,o.MZ)({json:{write:!0}})],c.prototype,"id",void 0),(0,i._)([(0,o.MZ)({json:{write:!0}})],c.prototype,"name",void 0),(0,i._)([(0,o.MZ)({json:{write:!0}})],c.prototype,"domains",void 0),(0,i._)([(0,l.w)("domains")],c.prototype,"readDomains",null),(0,i._)([(0,u.K)("domains")],c.prototype,"writeDomains",null),(0,i._)([(0,o.MZ)({type:[d.A],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,i._)([(0,a.$)("esri.layers.support.FeatureType")],c);const h=c},1900:(e,t,s)=>{s.d(t,{A:()=>c});var i=s(50076),r=s(42553),n=s(76460),o=s(87663),l=s(64920),a=s(53430),u=s(67478),p=s(24241);const d=new Map;class c{static fromJSON(e){return new c(e.fields,e.timeZoneByFieldName)}static fromLayer(e){var t;return new c(null!==(t=e.fields)&&void 0!==t?t:[],y(e))}static fromLayerJSON(e){var t;return new c(null!==(t=e.fields)&&void 0!==t?t:[],y(e))}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;const s=[];for(const r of this.fields){const e=null===r||void 0===r?void 0:r.name,t=f(e);if(e&&t){var i;const n=h(e);this._fieldsMap.set(e,r),this._fieldsMap.set(n,r),this._normalizedFieldsMap.set(t,r),s.push("".concat(n,":").concat(r.type,":").concat(null===(i=this._timeZoneByFieldName)||void 0===i?void 0:i.get(e))),(0,a.vE)(r)?(this.dateFields.push(r),this._dateFieldsSet.add(r)):(0,a.WA)(r)&&(this._numericFieldsSet.add(r),this.numericFields.push(r)),(0,a.te)(r)||(0,a.Xz)(r)||(r.editable=null==r.editable||!!r.editable,r.nullable=null==r.nullable||!!r.nullable)}}s.sort(),this.uid=s.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)(0,a.te)(e)||(0,a.Xz)(e)||e.nullable||void 0!==(0,a.lD)(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===(null===e||void 0===e?void 0:e.uid)}has(e){return null!=this.get(e)}get(e){var t;if(!e)return;let s=this._fieldsMap.get(e);return s||(s=null!==(t=this._fieldsMap.get(h(e)))&&void 0!==t?t:this._normalizedFieldsMap.get(f(e)),s&&this._fieldsMap.set(e,s),s)}getTimeZone(e){const t=this.get(e&&"string"!=typeof e?e.name:e);return t?this._timeZoneByFieldName?this._timeZoneByFieldName.get(t.name):"date"===t.type||"esriFieldTypeDate"===t.type?(n.A.getLogger("esri.layers.support.FieldsIndex").error(new i.A("getTimeZone:no-timezone-information","no time zone information for field '".concat(t.name,"'"))),u.n$):m.has(t.type)?u.L5:null:null}getLuxonTimeZone(e){const t=this.getTimeZone(e);return t?t===u.L5?l.GB.instance:t===u.n$?p.mQ.utcInstance:(0,o.tE)(d,t,(()=>p.oh.create(t))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return(0,a.OH)(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){var t,s;return null!==(t=null===(s=this.get(e))||void 0===s?void 0:s.name)&&void 0!==t?t:void 0}toJSON(){return{fields:this.fields.map((e=>(0,r.Wj)(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function h(e){return e.trim().toLowerCase()}function f(e){var t,s;return null!==(t=null===(s=(0,a.rS)(e))||void 0===s?void 0:s.toLowerCase())&&void 0!==t?t:""}const m=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function y(e){var t,s,i,r,n,o,l;const a=new Map;if(!e.fields)return a;const p=!0===e.datesInUnknownTimezone,{timeInfo:d,editFieldsInfo:c}=e,f=null!==(t=d?"startField"in d?d.startField:d.startTimeField:"")&&void 0!==t?t:"",y=null!==(s=d?"endField"in d?d.endField:d.endTimeField:"")&&void 0!==s?s:"",g=function(e){return"dateFieldsTimeZone"in e}(e)?null!==(i=e.dateFieldsTimeZone)&&void 0!==i?i:null:e.dateFieldsTimeReference?(0,u.ZS)(e.dateFieldsTimeReference):null,v=c?function(e){return"timeZone"in e}(c)?null!==(r=c.timeZone)&&void 0!==r?r:g:c.dateFieldsTimeReference?(0,u.ZS)(c.dateFieldsTimeReference):null!==g&&void 0!==g?g:u.n$:null,_=d?function(e){return"timeZone"in e}(d)?null!==(n=d.timeZone)&&void 0!==n?n:g:d.timeReference?(0,u.ZS)(d.timeReference):g:null,S=new Map([[h(null!==(o=null===c||void 0===c?void 0:c.creationDateField)&&void 0!==o?o:""),v],[h(null!==(l=null===c||void 0===c?void 0:c.editDateField)&&void 0!==l?l:""),v],[h(f),_],[h(y),_]]);for(const{name:x,type:w}of e.fields)if(m.has(w))a.set(x,u.L5);else if("date"!==w&&"esriFieldTypeDate"!==w)a.set(x,null);else if(p)a.set(x,u.L5);else{var z;const e=null!==(z=S.get(h(null!==x&&void 0!==x?x:"")))&&void 0!==z?z:g;a.set(x,e)}return a}},5618:(e,t,s)=>{s.d(t,{A:()=>p});var i,r=s(35143),n=s(19276),o=s(42553),l=s(46053),a=(s(81806),s(76460),s(47249),s(85842));let u=i=class extends o.oY{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new n.A}clone(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,r._)([(0,l.MZ)({type:String,json:{write:!0}})],u.prototype,"floorField",void 0),(0,r._)([(0,l.MZ)({json:{read:!1,write:!1}})],u.prototype,"viewAllMode",void 0),(0,r._)([(0,l.MZ)({json:{read:!1,write:!1}})],u.prototype,"viewAllLevelIds",void 0),u=i=(0,r._)([(0,a.$)("esri.layers.support.LayerFloorInfo")],u);const p=u},65460:(e,t,s)=>{s.d(t,{BI:()=>y,D3:()=>f,XJ:()=>m,lc:()=>h,mX:()=>v,rU:()=>g,tH:()=>w});var i=s(88685);const r="__begin__",n="__end__",o=new RegExp(r,"ig"),l=new RegExp(n,"ig"),a=new RegExp("^"+r,"i"),u=new RegExp(n+"$","i"),p='"',d=p+" + ",c=" + "+p;function h(e){return e.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function f(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function m(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=h(e.labelExpression),t.type="conventional"),t}function y(e){const t=m(e);if(!t)return null;switch(t.type){case"conventional":return v(t.expression);case"arcade":return t.expression}return null}function g(e){const t=m(e);if(!t)return null;switch(t.type){case"conventional":return function(e){const t=null===e||void 0===e?void 0:e.match(_);return(null===t||void 0===t?void 0:t[1].trim())||null}(t.expression);case"arcade":return w(t.expression)}return null}function v(e){let t;return e?(t=(0,i.HC)(e,(e=>r+'$feature["'+e+'"]'+n)),t=a.test(t)?t.replace(a,""):p+t,t=u.test(t)?t.replace(u,""):t+p,t=t.replaceAll(o,d).replaceAll(l,c)):t='""',t}const _=/^\s*\{([^}]+)\}\s*$/i;const S=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,z=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,x=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function w(e){if(!e)return null;let t=S.exec(e)||z.exec(e);return t?t[1]||t[3]:(t=x.exec(e),t?t[2]:null)}},44141:(e,t,s)=>{s.d(t,{S:()=>d});var i=s(81806),r=s(13096);function n(e,t,s){return!!l(e,t,s)}function o(e,t,s){return l(e,t,s)}function l(e,t,s){return e&&e.hasOwnProperty(t)?e[t]:s}const a={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function u(e){var t;const s=null===e||void 0===e||null===(t=e.supportedSpatialAggregationStatistics)||void 0===t?void 0:t.map((e=>e.toLowerCase()));return{envelope:!(null===s||void 0===s||!s.includes("envelopeaggregate")),centroid:!(null===s||void 0===s||!s.includes("centroidaggregate")),convexHull:!(null===s||void 0===s||!s.includes("convexhullaggregate"))}}function p(e,t){var s;const i=null===e||void 0===e||null===(s=e.supportedOperationsWithCacheHint)||void 0===s?void 0:s.map((e=>e.toLowerCase()));return!(null===i||void 0===i||!i.includes(t.toLowerCase()))}function d(e,t){return{analytics:c(e),attachment:h(e),data:f(e),metadata:m(e),operations:y(e.capabilities,e,t),query:g(e,t),queryRelated:v(e),queryTopFeatures:_(e),editing:S(e)}}function c(e){return{supportsCacheHint:p(e.advancedQueryCapabilities,"queryAnalytics")}}function h(e){const t=e.attachmentProperties,s={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:p(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:n(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=a[e.name];t&&(s[t]=!!e.isEnabled)})),s}function f(e){return{isVersioned:n(e,"isDataVersioned",!1),supportsAttachment:n(e,"hasAttachments",!1),supportsM:n(e,"hasM",!1),supportsZ:n(e,"hasZ",!1)}}function m(e){return{supportsAdvancedFieldProperties:n(e,"supportsFieldDescriptionProperty",!1)}}function y(e,t,s){const i=e?e.toLowerCase().split(",").map((e=>e.trim())):[],o=s?(0,r.qg)(s):null,l=i.includes(null!=o&&"MapServer"===o.serverType?"data":"query"),a=i.includes("editing")&&!t.datesInUnknownTimezone;let u=a&&i.includes("create"),p=a&&i.includes("delete"),d=a&&i.includes("update");const c=i.includes("changetracking"),h=t.advancedQueryCapabilities;return a&&!(u||p||d)&&(u=p=d=!0),{supportsCalculate:n(t,"supportsCalculate",!1),supportsTruncate:n(t,"supportsTruncate",!1),supportsValidateSql:n(t,"supportsValidateSql",!1),supportsAdd:u,supportsDelete:p,supportsEditing:a,supportsChangeTracking:c,supportsQuery:l,supportsQueryAnalytics:n(h,"supportsQueryAnalytic",!1),supportsQueryAttachments:n(h,"supportsQueryAttachments",!1),supportsQueryTopFeatures:n(h,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:n(t,"supportsAttachmentsResizing",!1),supportsSync:i.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:n(t,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:n(t,"supportsAsyncConvert3D",!1)}}function g(e,t){var s;const l=e.advancedQueryCapabilities,a=e.ownershipBasedAccessControlForFeatures,d=e.archivingInfo,c=e.currentVersion,h=!(null===t||void 0===t?void 0:t.includes("MapServer"))||c>=(0,i.A)("mapserver-pbf-version-support"),f=(0,r.Wo)(t),m=new Set((null!==(s=e.supportedQueryFormats)&&void 0!==s?s:"").split(",").map((e=>e.toLowerCase().trim())));return{supportsStatistics:n(l,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:n(l,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:n(l,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:u(l),supportsCentroid:n(l,"supportsReturningGeometryCentroid",!1),supportsDistance:n(l,"supportsQueryWithDistance",!1),supportsDistinct:n(l,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:n(l,"supportsReturningQueryExtent",!1),supportsGeometryProperties:n(l,"supportsReturningGeometryProperties",!1),supportsHavingClause:n(l,"supportsHavingClause",!1),supportsOrderBy:n(l,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:n(l,"supportsPagination",!1),supportsQuantization:n(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:n(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:n(e,"supportsReturningQueryGeometry",!1),supportsResultType:n(l,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:n(l,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:n(l,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:n(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:n(l,"supportsTopFeaturesQuery",!1),supportsQueryByAnonymous:n(a,"allowAnonymousToQuery",!0),supportsQueryByOthers:n(a,"allowOthersToQuery",!0),supportsHistoricMoment:n(d,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:h&&m.has("pbf"),supportsDisjointSpatialRelationship:n(l,"supportsDisjointSpatialRel",!1),supportsCacheHint:n(l,"supportsQueryWithCacheHint",!1)||p(l,"query"),supportsDefaultSpatialReference:n(l,"supportsDefaultSR",!1),supportsCompactGeometry:f,supportsFullTextSearch:n(l,"supportsFullTextSearch",!1),maxRecordCountFactor:o(e,"maxRecordCountFactor",void 0),maxRecordCount:o(e,"maxRecordCount",void 0),standardMaxRecordCount:o(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:o(e,"tileMaxRecordCount",void 0)}}function v(e){const t=e.advancedQueryCapabilities,s=n(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:n(t,"supportsQueryRelatedPagination",!1),supportsCount:s,supportsOrderBy:s,supportsCacheHint:p(t,"queryRelated")}}function _(e){return{supportsCacheHint:p(e.advancedQueryCapabilities,"queryTopFilter")}}function S(e){const t=e.ownershipBasedAccessControlForFeatures,s=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:n(e,"allowGeometryUpdates",!0),supportsGlobalId:n(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:n(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:n(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:n(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:n(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:n(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:n(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:n(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:n(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:n(s,"supportsAsyncApplyEdits",!1),zDefault:o(e,"zDefault",void 0)}}},4414:(e,t,s)=>{s.d(t,{O3:()=>d,PU:()=>u,YW:()=>h,ex:()=>l,hv:()=>c,zp:()=>a});var i=s(15941),r=s(76931),n=s(43047),o=s(55855);const l=2.4;function a(e){return(0,r.PN)(e*l)}function u(e){return(0,r.Lz)(e)/l}function p(e,t,s,r){let{color:o,ratio:l}=t,{color:a,ratio:u}=s;if(u===l){const e=1e-6;1===u?l-=e:u+=e}const p=(0,i.qE)((r-l)/(u-l),0,1);(0,n.l)(e,o.toArray(),a.toArray(),p)}function d(e){const t=new Uint8ClampedArray(2048);if(e=e.filter((e=>{let{ratio:t}=e;return t>=0&&t<=1})).sort(((e,t)=>e.ratio-t.ratio)).map((e=>{let{color:t,ratio:s}=e;return{color:t,ratio:Math.max(s,.001)}})),e.length<1)return t;let s=e[0],i=e[0],r=1;const n=(0,o.vt)();for(let o=0;o<512;o++){const l=(o+.5)/512;for(;l>i.ratio&&r<e.length;)s=i,i=e[r++];p(n,s,i,l),t.set(n,4*o)}return t}function c(e,t,s){const i=Math.sqrt(e**2+t**2)/s;return i>1?0:3/(Math.PI*s**2)*(1-i**2)**2}function h(e){return"function"==typeof e?e:e?t=>+t[e]:()=>1}},57831:(e,t,s)=>{s.d(t,{q:()=>r});var i=s(86729);function r(e,t,s){if(null===s||void 0===s||!s.features||!s.hasZ)return;const r=(0,i.N)(s.geometryType,t,e.outSpatialReference);if(null!=r)for(const i of s.features)r(i.geometry)}},77725:(e,t,s)=>{s.d(t,{A:()=>_});var i,r=s(35143),n=s(35238),o=s(39356),l=s(45802),a=s(42553),u=s(53084),p=s(46053),d=(s(81806),s(76460),s(28379)),c=s(85842),h=s(17707),f=s(13312),m=s(19902),y=s(44135);const g=new l.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let v=i=class extends a.oY{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const s=f.A.fromJSON(t.spatialReference),i=[];for(let n=0;n<e.length;n++){var r;const t=e[n],l=o.A.fromJSON(t),a=null===(r=t.geometry)||void 0===r?void 0:r.spatialReference;null==l.geometry||a||(l.geometry.spatialReference=s);const u=t.aggregateGeometries,p=l.aggregateGeometries;if(u&&null!=p)for(const e in p){const t=p[e],i=u[e],r=null===i||void 0===i?void 0:i.spatialReference;null==t||r||(t.spatialReference=s)}i.push(l)}return i}writeGeometryType(e,t,s,i){if(e)return void g.write(e,t,s,i);const{features:r}=this;if(r)for(const n of r)if(null!=(null===n||void 0===n?void 0:n.geometry))return void g.write(n.geometry.type,t,s,i)}readQueryGeometry(e,t){if(!e)return null;const s=!!e.spatialReference,i=(0,m.rS)(e);return i&&!s&&t.spatialReference&&(i.spatialReference=f.A.fromJSON(t.spatialReference)),i}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:s}=this;if(s)for(const i of s)if(i&&null!=i.geometry&&i.geometry.spatialReference)return void(t.spatialReference=i.geometry.spatialReference.toJSON())}clone(){return new i(this.cloneProperties())}cloneProperties(){return(0,u.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let s=0;s<t.features.length;s++){const i=t.features[s];if(i.geometry){const t=null===e||void 0===e?void 0:e[s];i.geometry=(null===t||void 0===t?void 0:t.toJSON())||i.geometry}}return t}quantize(e){const{scale:[t,s],translate:[i,r]}=e,n=this.features,o=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-i)/t)),(e=>Math.round((r-e)/s)));for(let l=0,a=n.length;l<a;l++)(null===o||void 0===o?void 0:o(n[l].geometry))||(n.splice(l,1),l--,a--);return this.transform=e,this}unquantize(){var e,t;const{geometryType:s,features:i,transform:r}=this;if(!r)return this;const{translate:[n,o],scale:[l,a]}=r;let u=null,p=null;if(this.hasZ&&null!=(null===r||void 0===r||null===(e=r.scale)||void 0===e?void 0:e[2])){const{translate:[,,e],scale:[,,t]}=r;u=s=>s*t+e}if(this.hasM&&null!=(null===r||void 0===r||null===(t=r.scale)||void 0===t?void 0:t[3])){const{translate:[,,,e],scale:[,,,t]}=r;p=s=>null==s?s:s*t+e}const d=this._getHydrationFunction(s,(e=>e*l+n),(e=>o-e*a),u,p);for(const{geometry:c}of i)null!=c&&d&&d(c);return this.transform=null,this}_quantizePoints(e,t,s){let i,r;const n=[];for(let o=0,l=e.length;o<l;o++){const l=e[o];if(o>0){const e=t(l[0]),o=s(l[1]);e===i&&o===r||(n.push([e-i,o-r]),i=e,r=o)}else i=t(l[0]),r=s(l[1]),n.push([i,r])}return n.length>0?n:null}_getQuantizationFunction(e,t,s){return"point"===e?e=>(e.x=t(e.x),e.y=s(e.y),e):"polyline"===e||"polygon"===e?e=>{const i=(0,m.Bi)(e)?e.rings:e.paths,r=[];for(let n=0,o=i.length;n<o;n++){const e=i[n],o=this._quantizePoints(e,t,s);o&&r.push(o)}return r.length>0?((0,m.Bi)(e)?e.rings=r:e.paths=r,e):null}:"multipoint"===e?e=>{const i=this._quantizePoints(e.points,t,s);return i&&i.length>0?(e.points=i,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,s,i,r){return"point"===e?e=>{e.x=t(e.x),e.y=s(e.y),i&&(e.z=i(e.z))}:"polyline"===e||"polygon"===e?e=>{const n=(0,m.Bi)(e)?e.rings:e.paths;let o,l;for(let i=0,r=n.length;i<r;i++){const e=n[i];for(let i=0,r=e.length;i<r;i++){const r=e[i];i>0?(o+=r[0],l+=r[1]):(o=r[0],l=r[1]),r[0]=t(o),r[1]=s(l)}}if(i&&r)for(let t=0,s=n.length;t<s;t++){const e=n[t];for(let t=0,s=e.length;t<s;t++){const s=e[t];s[2]=i(s[2]),s[3]=r(s[3])}}else if(i)for(let t=0,s=n.length;t<s;t++){const e=n[t];for(let t=0,s=e.length;t<s;t++){const s=e[t];s[2]=i(s[2])}}else if(r)for(let t=0,s=n.length;t<s;t++){const e=n[t];for(let t=0,s=e.length;t<s;t++){const s=e[t];s[2]=r(s[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=s(e.ymin),e.xmax=t(e.xmax),e.ymax=s(e.ymax),i&&null!=e.zmax&&null!=e.zmin&&(e.zmax=i(e.zmax),e.zmin=i(e.zmin)),r&&null!=e.mmax&&null!=e.mmin&&(e.mmax=r(e.mmax),e.mmin=r(e.mmin))}:"multipoint"===e?e=>{const n=e.points;let o,l;for(let i=0,r=n.length;i<r;i++){const e=n[i];i>0?(o+=e[0],l+=e[1]):(o=e[0],l=e[1]),e[0]=t(o),e[1]=s(l)}if(i&&r)for(let t=0,s=n.length;t<s;t++){const e=n[t];e[2]=i(e[2]),e[3]=r(e[3])}else if(i)for(let t=0,s=n.length;t<s;t++){const e=n[t];e[2]=i(e[2])}else if(r)for(let t=0,s=n.length;t<s;t++){const e=n[t];e[2]=r(e[2])}}:null}};(0,r._)([(0,p.MZ)({type:String,json:{write:!0}})],v.prototype,"displayFieldName",void 0),(0,r._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"exceededTransferLimit",void 0),(0,r._)([(0,p.MZ)({type:[o.A],json:{write:!0}})],v.prototype,"features",void 0),(0,r._)([(0,d.w)("features")],v.prototype,"readFeatures",null),(0,r._)([(0,p.MZ)({type:[y.A],json:{write:!0}})],v.prototype,"fields",void 0),(0,r._)([(0,p.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],v.prototype,"geometryType",void 0),(0,r._)([(0,h.K)("geometryType")],v.prototype,"writeGeometryType",null),(0,r._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasM",void 0),(0,r._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasZ",void 0),(0,r._)([(0,p.MZ)({types:n.yR,json:{write:!0}})],v.prototype,"queryGeometry",void 0),(0,r._)([(0,d.w)("queryGeometry")],v.prototype,"readQueryGeometry",null),(0,r._)([(0,p.MZ)({type:f.A,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,r._)([(0,h.K)("spatialReference")],v.prototype,"writeSpatialReference",null),(0,r._)([(0,p.MZ)({json:{write:!0}})],v.prototype,"transform",void 0),v=i=(0,r._)([(0,c.$)("esri.rest.support.FeatureSet")],v),v.prototype.toJSON.isDefaultToJSON=!0;const _=v},84202:(e,t,s)=>{s.d(t,{A7:()=>u,Cx:()=>p,Hk:()=>d,JJ:()=>f,UK:()=>a,jM:()=>c,x3:()=>h});s(81806);var i=s(86875),r=s(7246),n=s(76940),o=s(86659),l=s(44460);const a=n.A.fromJSON(l.Cb),u=r.A.fromJSON(l.yM),p=i.A.fromJSON(l.WR),d=o.A.fromJSON(l.JZ);const c=n.A.fromJSON(l.nC),h=r.A.fromJSON(l.HW),f=i.A.fromJSON(l.b6)},44460:(e,t,s)=>{s.d(t,{Cb:()=>n,HW:()=>p,JR:()=>r,JZ:()=>a,WR:()=>l,b6:()=>d,fT:()=>i,nC:()=>u,yM:()=>o});const i=[252,146,31,255],r=[153,153,153,255],n={type:"esriSMS",style:"esriSMSCircle",size:6,color:i,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:i},l={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},u={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},p={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},d={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);
//# sourceMappingURL=4058.3c38dd1e.chunk.js.map