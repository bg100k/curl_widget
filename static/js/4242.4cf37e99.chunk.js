"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[4242],{20176:(e,t,s)=>{s.d(t,{N3:()=>h,Om:()=>i});class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;this.geometry=e,this.attributes=t,this.centroid=s,this.objectId=i,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new i(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}clone(){var e,t;const s=null===(e=this.geometry)||void 0===e?void 0:e.clone(),h=new i(s,{...this.attributes},null===(t=this.centroid)||void 0===t?void 0:t.clone(),this.objectId);return h.displayId=this.displayId,h.geohashX=this.geohashX,h.geohashY=this.geohashY,h}}function h(e){var t;return!(null===(t=e.geometry)||void 0===t||null===(t=t.coords)||void 0===t||!t.length)}},75146:(e,t,s)=>{s.d(t,{A:()=>i});class i{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new i;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},1484:(e,t,s)=>{s.d(t,{A:()=>i});class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.lengths=null!==e&&void 0!==e?e:[],this.coords=null!==t&&void 0!==t?t:[],this.hasIndeterminateRingOrder=s}static fromRect(e){const[t,s,h,r]=e,o=h-t,l=r-s;return new i([5],[t,s,o,0,0,l,-o,0,0,-l])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const i=this.lengths[s];for(let s=0;s<i;s++)e(this.coords[2*(s+t)],this.coords[2*(s+t)+1]);t+=i}}deltaDecode(){const e=this.clone(),{coords:t,lengths:s}=e;let i=0;for(const h of s){for(let e=1;e<h;e++)t[2*(i+e)]+=t[2*(i+e)-2],t[2*(i+e)+1]+=t[2*(i+e)-1];i+=h}return e}clone(e){if(0===this.lengths.length)return new i([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),s=this.coords.slice(0,t);return e?(e.set(s),new i(this.lengths,e,this.hasIndeterminateRingOrder)):new i(Array.from(this.lengths),Array.from(s),this.hasIndeterminateRingOrder)}}}}]);
//# sourceMappingURL=4242.4cf37e99.chunk.js.map