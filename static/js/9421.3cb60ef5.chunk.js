"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[9421],{80979:(e,t,r)=>{r.d(t,{K:()=>i});const i=["operational-layers","basemap","ground"]},14522:(e,t,r)=>{r.d(t,{T:()=>o,U:()=>n});var i=r(15941);function n(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const n=(0,i.qE)(e,0,a);for(let i=0;i<4;i++)t[r+i]=Math.floor(256*u(n*s[i]))}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0;for(let i=0;i<4;i++)r+=e[t+i]*l[i];return r}const s=[1,256,65536,16777216],l=[1/256,1/65536,1/16777216,1/4294967296],a=o(new Uint8ClampedArray([255,255,255,255]));function u(e){return e-Math.floor(e)}},68002:(e,t,r)=>{r.d(t,{X_:()=>s,i1:()=>l,zx:()=>a});var i=r(15941),n=r(31633);const o=96;function s(e,t){const r=t||e.extent,i=e.width,s=(0,n.GA)(null===r||void 0===r?void 0:r.spatialReference);return r&&i?r.width/i*s*n.dy*o:0}function l(e,t){return e/((0,n.GA)(t)*n.dy*o)}function a(e,t,r){return function(e,t){return 0===t||(0,i.Sp)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,i.Sp)(e,t)||e>t}(e,r)}},44081:(e,t,r)=>{r.d(t,{LF:()=>l,M9:()=>a,zu:()=>u});var i=r(50076),n=r(48611),o=r(7847),s=r(58503);function l(e,t,r){try{return function(e){if(!e||0===e.length)return null;if(function(e){const t=e[0];return!!t&&"scale"in t}(e)){const t=[];for(const r of e)t.push({scale:r.scale,value:u(r.value)});return t}return u(e)}(e)}catch(n){var i;null===r||void 0===r||null===(i=r.messages)||void 0===i||i.push(n)}return null}function a(e,t,r,i){try{const i=function(e){const t=(0,o.q)(e);return t?(0,s.dw)(t)?t.map((e=>e.toJSON())):t.map((e=>{let{scale:t,effects:r}=e;return{scale:t,value:r.map((e=>e.toJSON()))}})):null}(e);(0,n.sM)(r,i,t)}catch(a){i.messages&&i.messages.push(a)}}function u(e){if(null===e||void 0===e||!e.length)return"";const t=[];for(const r of e){let e=[];switch(r.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[d(r,"amount")];break;case"blur":e=[d(r,"radius","pt")];break;case"hue-rotate":e=[d(r,"angle","deg")];break;case"drop-shadow":e=[d(r,"xoffset","pt"),d(r,"yoffset","pt"),d(r,"blurRadius","pt"),p(r,"color")];break;case"bloom":e=[d(r,"strength"),d(r,"radius","pt"),d(r,"threshold")]}const i="".concat(r.type,"(").concat(e.filter(Boolean).join(" "),")");(0,o.q)(i),t.push(i)}return t.join(" ")}function d(e,t,r){if(null==e[t])throw new i.A("effect:missing-parameter","Missing parameter '".concat(t,"' in ").concat(e.type," effect"),{effect:e});return r?e[t]+r:""+e[t]}function p(e,t){if(null==e[t])throw new i.A("effect:missing-parameter","Missing parameter '".concat(t,"' in ").concat(e.type," effect"),{effect:e});const r=e[t];return"rgba(".concat(r[0]||0,", ").concat(r[1]||0,", ").concat(r[2]||0,", ").concat(r[3]/255||0,")")}},10252:(e,t,r)=>{r.d(t,{A:()=>m});var i,n=r(35143),o=r(50076),s=r(42553),l=r(48611),a=r(46053),u=(r(81806),r(76460),r(47249),r(85842)),d=r(44081),p=r(8203);const c={read:{reader:d.LF},write:{writer:d.M9,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}},f={read:{reader:d.LF},write:{writer:d.M9,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}},y={name:"showExcludedLabels",default:!0};let h=i=class extends s.oY{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,t){const r=super.write(e,t);if(null!==t&&void 0!==t&&t.origin){var i;if(r.filter){var n;const e=Object.keys(r.filter);if(e.length>1||"where"!==e[0])return null!==(n=t.messages)&&void 0!==n&&n.push(new o.A("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:t.layer,effect:this})),null}if("showExcludedLabels"in r)return null!==(i=t.messages)&&void 0!==i&&i.push(new o.A("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:t.layer,effect:this})),null}return r}clone(){return new i({filter:null!=this.filter?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};(0,n._)([(0,a.MZ)({type:p.A,json:{write:{allowNull:!0,writer(e,t,r,i){const n=null===e||void 0===e?void 0:e.write({},i);n&&0!==Object.keys(n).length?(0,l.sM)(r,n,t):(0,l.sM)(r,null,t)}}}})],h.prototype,"filter",void 0),(0,n._)([(0,a.MZ)({json:{write:!0,origins:{"web-map":c,"portal-item":c}}})],h.prototype,"includedEffect",void 0),(0,n._)([(0,a.MZ)({json:{write:!0,origins:{"web-map":f,"portal-item":f}}})],h.prototype,"excludedEffect",void 0),(0,n._)([(0,a.MZ)({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":y,"portal-item":y}}})],h.prototype,"excludedLabelsVisible",void 0),h=i=(0,n._)([(0,u.$)("esri.layers.support.FeatureEffect")],h);const m=h},8203:(e,t,r)=>{r.d(t,{A:()=>m});var i,n=r(35143),o=r(35238),s=r(82111),l=r(45802),a=r(42553),u=r(53084),d=r(46053),p=(r(81806),r(76460),r(85842)),c=r(97015);const f=new l.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),y=new l.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let h=i=class extends a.oY{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{where:t,geometry:r,spatialRelationship:i,timeExtent:n,objectIds:o,units:s,distance:l}=this;return new c.A({geometry:(0,u.o8)(r),objectIds:(0,u.o8)(o),spatialRelationship:i,timeExtent:(0,u.o8)(n),where:t,units:s,distance:l,...e})}clone(){const{where:e,geometry:t,spatialRelationship:r,timeExtent:n,objectIds:o,units:s,distance:l}=this;return new i({geometry:(0,u.o8)(t),objectIds:(0,u.o8)(o),spatialRelationship:r,timeExtent:(0,u.o8)(n),where:e,units:s,distance:l})}};(0,n._)([(0,d.MZ)({type:String,json:{write:!0}})],h.prototype,"where",void 0),(0,n._)([(0,d.MZ)({types:o.yR,json:{write:!0}})],h.prototype,"geometry",void 0),(0,n._)([(0,d.MZ)({type:f.apiValues,json:{name:"spatialRel",read:{reader:f.read},write:{allowNull:!1,writer:f.write,overridePolicy(){return{enabled:null!=this.geometry}}}}})],h.prototype,"spatialRelationship",void 0),(0,n._)([(0,d.MZ)({type:Number,json:{write:{overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],h.prototype,"distance",void 0),(0,n._)([(0,d.MZ)({type:[Number],json:{write:!0}})],h.prototype,"objectIds",void 0),(0,n._)([(0,d.MZ)({type:y.apiValues,json:{read:y.read,write:{writer:y.write,overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],h.prototype,"units",void 0),(0,n._)([(0,d.MZ)({type:s.A,json:{write:!0}})],h.prototype,"timeExtent",void 0),h=i=(0,n._)([(0,p.$)("esri.layers.support.FeatureFilter")],h);const m=h},55053:(e,t,r)=>{r.d(t,{ui:()=>b,Yj:()=>m,id:()=>F,kF:()=>f,fV:()=>h,C1:()=>R,hG:()=>E,hn:()=>I,ke:()=>w,Ih:()=>x,M6:()=>c,Qo:()=>g,Fm:()=>_,PY:()=>p,OZ:()=>y});var i=r(82111),n=r(80979),o=r(76797),s=r(13312),l=r(79453),a=(r(18690),r(53084),r(18288));var u=r(731),d=r(2183);const p={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:n.K}}},c={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},f={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:n.K}}},y={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:l.w}}},h={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:n.K}}},m={value:null,type:u.A,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:n.K}}};function g(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const v={write:{enabled:!0,layerContainerTypes:n.K},read:!0},w={type:Number,json:{origins:{"web-document":v,"portal-item":{write:!0}}}},x={...w,json:{...w.json,origins:{"web-document":{...v,write:{enabled:!0,layerContainerTypes:n.K,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>{var i;return r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?null!==(i=t.layerDefinition)&&void 0!==i&&i.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?(0,d.D)(t.layerDefinition.drawingInfo.transparency):void 0:(0,d.D)(t.drawingInfo.transparency)}}}},b={type:i.A,readOnly:!0,get(){var e,t,r;const n=null!=(null===(e=this.layer)||void 0===e?void 0:e.timeInfo)?this.layer:null!=(null===(t=this.i3slayer)||void 0===t?void 0:t.timeInfo)?this.i3slayer:null;if(null==n)return null;const{datesInUnknownTimezone:o,timeOffset:s,useViewTime:l}=n,u=null===(r=this.view)||void 0===r?void 0:r.timeExtent;let d=n.timeExtent;o&&(d=function(e){if(!e)return e;const{start:t,end:r}=e;return new i.A({start:null!=t?(0,a.S1)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=r?(0,a.S1)(r,r.getTimezoneOffset(),"minutes"):r})}(d));let p=l?u&&d?u.intersection(d):u||d:d;if(!p||p.isEmpty||p.isAllTime)return p;s&&(p=p.offset(-s.value,s.unit)),o&&(p=function(e){if(!e)return e;const{start:t,end:r}=e;return new i.A({start:null!=t?(0,a.S1)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=r?(0,a.S1)(r,-r.getTimezoneOffset(),"minutes"):r})}(p));const c=this._get("timeExtent");return p.equals(c)?c:p}},_={type:o.A,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const r=o.A.fromJSON(e);return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(r.spatialReference=s.A.fromJSON(t.spatialReference)),r}}}},read:!1}},F={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},I={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:n.K}}},name:"layerDefinition.minScale",write:!0}},E={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:n.K}}},name:"layerDefinition.maxScale",write:!0}},R={json:{write:{ignoreOrigin:!0,layerContainerTypes:n.K},origins:{"web-map":{read:!1,write:!1}}}}},46530:(e,t,r)=>{function i(e){var t;const r=e.layer;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?o(e.view.floors,r.floorInfo.floorField):null}function n(e,t){var r;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField?o(e,t.floorInfo.floorField):null}function o(e,t){if(null===e||void 0===e||!e.length)return null;const r=e.filter((e=>""!==e)).map((e=>"'".concat(e,"'")));return r.push("''"),"".concat(t," IN (").concat(r.join(","),") OR ").concat(t," IS NULL")}r.d(t,{E:()=>i,f:()=>n})},77725:(e,t,r)=>{r.d(t,{A:()=>w});var i,n=r(35143),o=r(35238),s=r(39356),l=r(45802),a=r(42553),u=r(53084),d=r(46053),p=(r(81806),r(76460),r(28379)),c=r(85842),f=r(17707),y=r(13312),h=r(19902),m=r(44135);const g=new l.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let v=i=class extends a.oY{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=y.A.fromJSON(t.spatialReference),i=[];for(let o=0;o<e.length;o++){var n;const t=e[o],l=s.A.fromJSON(t),a=null===(n=t.geometry)||void 0===n?void 0:n.spatialReference;null==l.geometry||a||(l.geometry.spatialReference=r);const u=t.aggregateGeometries,d=l.aggregateGeometries;if(u&&null!=d)for(const e in d){const t=d[e],i=u[e],n=null===i||void 0===i?void 0:i.spatialReference;null==t||n||(t.spatialReference=r)}i.push(l)}return i}writeGeometryType(e,t,r,i){if(e)return void g.write(e,t,r,i);const{features:n}=this;if(n)for(const o of n)if(null!=(null===o||void 0===o?void 0:o.geometry))return void g.write(o.geometry.type,t,r,i)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,i=(0,h.rS)(e);return i&&!r&&t.spatialReference&&(i.spatialReference=y.A.fromJSON(t.spatialReference)),i}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const i of r)if(i&&null!=i.geometry&&i.geometry.spatialReference)return void(t.spatialReference=i.geometry.spatialReference.toJSON())}clone(){return new i(this.cloneProperties())}cloneProperties(){return(0,u.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const i=t.features[r];if(i.geometry){const t=null===e||void 0===e?void 0:e[r];i.geometry=(null===t||void 0===t?void 0:t.toJSON())||i.geometry}}return t}quantize(e){const{scale:[t,r],translate:[i,n]}=e,o=this.features,s=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-i)/t)),(e=>Math.round((n-e)/r)));for(let l=0,a=o.length;l<a;l++)(null===s||void 0===s?void 0:s(o[l].geometry))||(o.splice(l,1),l--,a--);return this.transform=e,this}unquantize(){var e,t;const{geometryType:r,features:i,transform:n}=this;if(!n)return this;const{translate:[o,s],scale:[l,a]}=n;let u=null,d=null;if(this.hasZ&&null!=(null===n||void 0===n||null===(e=n.scale)||void 0===e?void 0:e[2])){const{translate:[,,e],scale:[,,t]}=n;u=r=>r*t+e}if(this.hasM&&null!=(null===n||void 0===n||null===(t=n.scale)||void 0===t?void 0:t[3])){const{translate:[,,,e],scale:[,,,t]}=n;d=r=>null==r?r:r*t+e}const p=this._getHydrationFunction(r,(e=>e*l+o),(e=>s-e*a),u,d);for(const{geometry:c}of i)null!=c&&p&&p(c);return this.transform=null,this}_quantizePoints(e,t,r){let i,n;const o=[];for(let s=0,l=e.length;s<l;s++){const l=e[s];if(s>0){const e=t(l[0]),s=r(l[1]);e===i&&s===n||(o.push([e-i,s-n]),i=e,n=s)}else i=t(l[0]),n=r(l[1]),o.push([i,n])}return o.length>0?o:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const i=(0,h.Bi)(e)?e.rings:e.paths,n=[];for(let o=0,s=i.length;o<s;o++){const e=i[o],s=this._quantizePoints(e,t,r);s&&n.push(s)}return n.length>0?((0,h.Bi)(e)?e.rings=n:e.paths=n,e):null}:"multipoint"===e?e=>{const i=this._quantizePoints(e.points,t,r);return i&&i.length>0?(e.points=i,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,i,n){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),i&&(e.z=i(e.z))}:"polyline"===e||"polygon"===e?e=>{const o=(0,h.Bi)(e)?e.rings:e.paths;let s,l;for(let i=0,n=o.length;i<n;i++){const e=o[i];for(let i=0,n=e.length;i<n;i++){const n=e[i];i>0?(s+=n[0],l+=n[1]):(s=n[0],l=n[1]),n[0]=t(s),n[1]=r(l)}}if(i&&n)for(let t=0,r=o.length;t<r;t++){const e=o[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=i(r[2]),r[3]=n(r[3])}}else if(i)for(let t=0,r=o.length;t<r;t++){const e=o[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=i(r[2])}}else if(n)for(let t=0,r=o.length;t<r;t++){const e=o[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=n(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),i&&null!=e.zmax&&null!=e.zmin&&(e.zmax=i(e.zmax),e.zmin=i(e.zmin)),n&&null!=e.mmax&&null!=e.mmin&&(e.mmax=n(e.mmax),e.mmin=n(e.mmin))}:"multipoint"===e?e=>{const o=e.points;let s,l;for(let i=0,n=o.length;i<n;i++){const e=o[i];i>0?(s+=e[0],l+=e[1]):(s=e[0],l=e[1]),e[0]=t(s),e[1]=r(l)}if(i&&n)for(let t=0,r=o.length;t<r;t++){const e=o[t];e[2]=i(e[2]),e[3]=n(e[3])}else if(i)for(let t=0,r=o.length;t<r;t++){const e=o[t];e[2]=i(e[2])}else if(n)for(let t=0,r=o.length;t<r;t++){const e=o[t];e[2]=n(e[2])}}:null}};(0,n._)([(0,d.MZ)({type:String,json:{write:!0}})],v.prototype,"displayFieldName",void 0),(0,n._)([(0,d.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"exceededTransferLimit",void 0),(0,n._)([(0,d.MZ)({type:[s.A],json:{write:!0}})],v.prototype,"features",void 0),(0,n._)([(0,p.w)("features")],v.prototype,"readFeatures",null),(0,n._)([(0,d.MZ)({type:[m.A],json:{write:!0}})],v.prototype,"fields",void 0),(0,n._)([(0,d.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],v.prototype,"geometryType",void 0),(0,n._)([(0,f.K)("geometryType")],v.prototype,"writeGeometryType",null),(0,n._)([(0,d.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasM",void 0),(0,n._)([(0,d.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasZ",void 0),(0,n._)([(0,d.MZ)({types:o.yR,json:{write:!0}})],v.prototype,"queryGeometry",void 0),(0,n._)([(0,p.w)("queryGeometry")],v.prototype,"readQueryGeometry",null),(0,n._)([(0,d.MZ)({type:y.A,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,n._)([(0,f.K)("spatialReference")],v.prototype,"writeSpatialReference",null),(0,n._)([(0,d.MZ)({json:{write:!0}})],v.prototype,"transform",void 0),v=i=(0,n._)([(0,c.$)("esri.rest.support.FeatureSet")],v),v.prototype.toJSON.isDefaultToJSON=!0;const w=v},731:(e,t,r)=>{r.d(t,{A:()=>x});var i,n=r(35143),o=r(45802),s=r(42553),l=r(30726),a=r(46053),u=(r(81806),r(76460),r(47249),r(28379)),d=r(85842),p=r(17707),c=r(53430);let f=i=class extends s.oY{constructor(e){super(e)}async collectRequiredFields(e,t){return(0,c.Dx)(e,t,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};(0,n._)([(0,a.MZ)({type:String,json:{write:!0}})],f.prototype,"expression",void 0),(0,n._)([(0,a.MZ)({type:String,json:{write:!0}})],f.prototype,"title",void 0),f=i=(0,n._)([(0,d.$)("esri.layers.support.FeatureExpressionInfo")],f);const y=f;var h,m=r(59097);const g=(0,o.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),v=new o.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let w=h=class extends s.oY{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,i){t[r]=e.write({},i),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new h({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,l.CM)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,n._)([(0,a.MZ)({type:y,json:{write:!0}})],w.prototype,"featureExpressionInfo",void 0),(0,n._)([(0,u.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],w.prototype,"readFeatureExpressionInfo",null),(0,n._)([(0,p.K)("featureExpressionInfo",{featureExpressionInfo:{type:y},"featureExpression.value":{type:[0]}})],w.prototype,"writeFeatureExpressionInfo",null),(0,n._)([(0,a.MZ)({type:g.apiValues,nonNullable:!0,json:{type:g.jsonValues,read:g.read,write:{writer:g.write,isRequired:!0}}})],w.prototype,"mode",null),(0,n._)([(0,a.MZ)({type:Number,json:{write:!0}})],w.prototype,"offset",void 0),(0,n._)([(0,a.MZ)({type:m.KQ,json:{type:String,read:v.read,write:v.write}})],w.prototype,"unit",null),w=h=(0,n._)([(0,d.$)("esri.layers.support.ElevationInfo")],w);const x=w},59097:(e,t,r)=>{r.d(t,{Ao:()=>o,KQ:()=>s,Tg:()=>n});var i=r(3454);function n(e){return!!e&&null!=i.j[e]}function o(e){return 1/(i.j[e]||1)}const s=function(){const e=Object.keys(i.j);return e.sort(),e}()},51364:(e,t,r)=>{r.d(t,{A:()=>v});var i=r(35143),n=r(50076),o=r(76460),s=r(50346),l=r(68134),a=r(46053),u=(r(81806),r(47249),r(85842)),d=r(55053),p=r(10252),c=r(8203),f=r(53430),y=r(46530),h=r(97015),m=r(98976),g=r(2257);const v=e=>{let t=class extends e{constructor(){super(...arguments),this._updatingRequiredFieldsPromise=null,this.dataUpdating=!1,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.addHandles([(0,l.wB)((()=>{var e;const t=this.layer;return[t&&"elevationInfo"in t?null===(e=t.elevationInfo)||void 0===e?void 0:e.featureExpressionInfo:null,t&&"displayField"in t?t.displayField:null,t&&"timeInfo"in t&&t.timeInfo,t&&"renderer"in t&&t.renderer,t&&"labelingInfo"in t&&t.labelingInfo,t&&"floorInfo"in t&&t.floorInfo,this.filter,this.featureEffect,this.timeExtent]}),(()=>this._handleRequiredFieldsChange()),l.pc),(0,l.on)((()=>{var e;return null===(e=this.view)||void 0===e?void 0:e.floors}),"change",(()=>this._handleRequiredFieldsChange())),(0,l.on)((()=>{const e=this.layer;return e&&"sublayers"in e?e.sublayers:null}),"change",(()=>this._handleRequiredFieldsChange()))])}get availableFields(){if(!this.layer)return[];const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return"outFields"in e&&e.outFields?(0,f.DB)(t,[...(0,f.hL)(t,e.outFields),...r]):(0,f.DB)(t,r)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){this._override("featureEffect",e)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){o.A.getLogger(this).error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=null!=this.filter?this.filter.createQuery(e):new h.A(e);if("feature"===this.layer.type){const e=(0,y.E)(this);null!=e&&(t.where=t.where?"(".concat(t.where,") AND (").concat(e,")"):e)}return null!=this.timeExtent&&(t.timeExtent=null!=t.timeExtent?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}createAggregateQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new h.A(e)}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}async fetchPopupFeaturesFromGraphics(e,t){return this._validateFetchPopupFeatures(e,t),this._fetchPopupFeatures(e,t)}_loadArcadeModules(e){var t;return null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,m.lw)():Promise.resolve()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)}))}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:r,objectIdField:i}}=this,n="renderer"in t&&t.renderer,s="orderBy"in t&&t.orderBy,l="featureReduction"in t?t.featureReduction:null,a=new Set,u=await Promise.allSettled([n?n.collectRequiredFields(a,r):null,(0,f.Im)(a,t),e&&"elevationInfo"in t?(0,f.NO)(a,t):null,null!=this.filter?(0,f.o)(a,t,this.filter):null,e||null==this.featureEffect?null:(0,f.o)(a,t,this.featureEffect.filter),!e&&l?(0,f.RP)(a,t,l):null,!e&&s?(0,f.f)(a,t,s):null]);if("timeInfo"in t&&t.timeInfo&&this.timeExtent&&(0,f._w)(a,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"feature"===t.type&&(t.floorInfo&&(0,f._w)(a,t.fieldsIndex,[t.floorInfo.floorField]),e&&null!=t.infoFor3D&&(null==t.globalIdField&&o.A.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"),(0,f._w)(a,t.fieldsIndex,[t.globalIdField]))),"subtype-group"===t.type){(0,f.rq)(a,r,t.subtypeField);const e=t.sublayers.map((e=>{var t;return Promise.all([null===(t=e.renderer)||void 0===t?void 0:t.collectRequiredFields(a,r),(0,f.Im)(a,e)])}));await Promise.allSettled(e)}"catalog-footprint"===t.type&&(0,f._w)(a,r,[t.parent.itemSourceField,t.parent.itemTypeField]);for(const p of u)"rejected"===p.status&&o.A.getLogger(this).error(p.reason);(0,f.rq)(a,r,i),e&&"displayField"in t&&t.displayField&&(0,f.rq)(a,r,t.displayField);const d=Array.from(a).sort();this._set("requiredFields",d)}_validateFetchPopupFeatures(e,t){if(null!=t)for(const r of e){const e=r.origin&&"layer"in r.origin?r.origin.layer:r.layer;if("popupEnabled"in e&&!e.popupEnabled)throw new n.A("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:e});if(r.isAggregate){const t="featureReduction"in e?e.featureReduction:null;if(!(t&&"popupTemplate"in t&&t.popupEnabled&&t.popupTemplate))throw new n.A("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:e})}else if("popupTemplate"in e&&!(0,g.D8)(e,t))throw new n.A("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:e})}}_popupFeatureHasRequiredFields(e,t){return(0,f.Kl)(t,e)}async _fetchPopupFeatures(e,t){const r=new Array(e.length),i=new Map,n=await this._createPopupQuery(e.map((e=>{var t,r;return null!==(t=null===(r=e.origin)||void 0===r?void 0:r.layer)&&void 0!==t?t:e.layer})),t);for(let a=0;a<e.length;a++){var o,l;const u=e[a];if(u.isAggregate){r[a]=u;continue}const d=null!==(o=null===(l=u.origin)||void 0===l?void 0:l.layer)&&void 0!==o?o:u.layer;if(!d||!("popupEnabled"in d))continue;const p=(0,f.hL)(this.layer.fieldsIndex,n.outFields),c=(0,g.D8)(d,t);if(null==c)continue;const y=await this._loadArcadeModules(c);(0,s.Te)(t),y&&y.arcadeUtils.hasGeometryOperations(c)||!this._popupFeatureHasRequiredFields(u,p)?i.set(u.getObjectId(),{graphic:u,index:a}):r[a]=u}if("stream"===this.layer.type||0===i.size)return r.filter(Boolean);n.objectIds=Array.from(i.keys());try{const e=await this.layer.queryFeatures(n,t);for(const t of e.features){const{graphic:{geometry:e,origin:n},index:o}=i.get(t.getObjectId());t.geometry||(t.geometry=e),t.origin=n,r[o]=t}}catch{}return r.filter(Boolean)}async _createPopupQuery(e,t){const r=this.layer.createQuery(),i=new Set;let n=!1;const o=null!==e&&void 0!==e?e:[this.layer];for(const l of o){if(!("popupEnabled"in l))continue;const e=(0,g.D8)(l,t);if(null==e)continue;const r=await this._loadArcadeModules(e);(0,s.Te)(t);const o=r&&r.arcadeUtils.hasGeometryOperations(e);n=!("point"!==this.layer.geometryType&&!o);const a=await(0,g.TO)(this.layer,e);(0,s.Te)(t);for(const t of a)i.add(t)}if(r.returnGeometry=n,r.returnZ=n,r.returnM=n,r.outFields=Array.from(i),r.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type){const e=(0,y.E)(this);null!=e&&(r.where=r.where?"(".concat(r.where,") AND (").concat(e,")"):e)}return r}canResume(){return!!super.canResume()&&(null==this.timeExtent||!this.timeExtent.isEmpty)}getTest(){return{createPopupQuery:e=>this._createPopupQuery(void 0,e)}}get test(){return this.getTest()}};return(0,i._)([(0,a.MZ)()],t.prototype,"_updatingRequiredFieldsPromise",void 0),(0,i._)([(0,a.MZ)({readOnly:!0})],t.prototype,"availableFields",null),(0,i._)([(0,a.MZ)({readOnly:!0})],t.prototype,"dataUpdating",void 0),(0,i._)([(0,a.MZ)({type:p.A})],t.prototype,"featureEffect",null),(0,i._)([(0,a.MZ)({type:c.A})],t.prototype,"filter",void 0),(0,i._)([(0,a.MZ)(d.ui)],t.prototype,"timeExtent",void 0),(0,i._)([(0,a.MZ)()],t.prototype,"layer",void 0),(0,i._)([(0,a.MZ)({type:Number})],t.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,a.MZ)({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,a.MZ)({readOnly:!0})],t.prototype,"requiredFields",void 0),(0,i._)([(0,a.MZ)()],t.prototype,"suspended",void 0),(0,i._)([(0,a.MZ)()],t.prototype,"view",void 0),t=(0,i._)([(0,u.$)("esri.views.layers.FeatureLayerView")],t),t}},91196:(e,t,r)=>{r.d(t,{A:()=>y});var i=r(35143),n=r(91967),o=r(54099),s=r(5632),l=r(76460),a=r(30726),u=r(91291),d=r(46053),p=(r(81806),r(47249),r(85842)),c=r(19451);let f=class extends((0,s.sA)((0,u.g)(o.A.EventedMixin(n.A)))){constructor(e){super(e),this._updatingHandles=new c.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const r=this.layer&&this.layer.id||"no id",i=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";l.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(r,"')"),e)}}))}destroy(){this._updatingHandles=(0,a.pR)(this._updatingHandles)}get fullOpacity(){var e,t,r,i;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(r=null===(i=this.parent)||void 0===i?void 0:i.fullOpacity)&&void 0!==r?r:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,r;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(r=this.view)||void 0===r?void 0:r.ready)||!1}getSuspendInfo(){var e,t;const r=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(r.viewNotReady=!0),this.layer&&this.layer.loaded||(r.layerNotLoaded=!0),this.visible||(r.layerInvisible=!0),r}isUpdating(){return!1}};(0,i._)([(0,d.MZ)()],f.prototype,"fullOpacity",null),(0,i._)([(0,d.MZ)()],f.prototype,"layer",void 0),(0,i._)([(0,d.MZ)()],f.prototype,"parent",void 0),(0,i._)([(0,d.MZ)({readOnly:!0})],f.prototype,"suspended",null),(0,i._)([(0,d.MZ)({readOnly:!0})],f.prototype,"suspendInfo",null),(0,i._)([(0,d.MZ)({readOnly:!0})],f.prototype,"legendEnabled",null),(0,i._)([(0,d.MZ)({type:Boolean,readOnly:!0})],f.prototype,"updating",null),(0,i._)([(0,d.MZ)({readOnly:!0})],f.prototype,"updatingProgress",null),(0,i._)([(0,d.MZ)()],f.prototype,"visible",null),(0,i._)([(0,d.MZ)()],f.prototype,"view",void 0),f=(0,i._)([(0,p.$)("esri.views.layers.LayerView")],f);const y=f},771:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(35143),n=r(76460),o=r(50346),s=r(68134),l=(r(81806),r(47249),r(50076),r(85842));const a=e=>{let t=class extends e{initialize(){this.addHandles((0,s.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,o.zf)(e)||n.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,i._)([(0,l.$)("esri.layers.mixins.RefreshableLayerView")],t),t}},2257:(e,t,r)=>{r.d(t,{D8:()=>o,TO:()=>n,d0:()=>s});var i=r(53430);async function n(e){var t,r;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==n)return[];const o=await n.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:s}=n,{objectIdField:l,typeIdField:a,globalIdField:u,relationships:d}=e;if(o.includes("*"))return["*"];const p=s?(0,i.eX)(e):[],c=(0,i.DB)(e.fieldsIndex,[...o,...p]);return a&&c.push(a),c&&l&&null!==(t=e.fieldsIndex)&&void 0!==t&&t.has(l)&&!c.includes(l)&&c.push(l),c&&u&&null!==(r=e.fieldsIndex)&&void 0!==r&&r.has(u)&&!c.includes(u)&&c.push(u),d&&d.forEach((t=>{var r;const{keyField:i}=t;c&&i&&(null===(r=e.fieldsIndex)||void 0===r?void 0:r.has(i))&&!c.includes(i)&&c.push(i)})),c}function o(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function s(e,t){return null!=o(e,{defaultPopupTemplateEnabled:t})}}}]);
//# sourceMappingURL=9421.3cb60ef5.chunk.js.map