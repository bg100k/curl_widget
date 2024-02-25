"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[3814],{11668:(e,r,a)=>{a.d(r,{Q:()=>n});var t=a(67061);async function n(e,r){var a;const{loadContext:n,...i}=r||{},l=n?await n.fetchServiceMetadata(e,i):await(0,t.V)(e,i);c(l),o(l);const y={serviceJSON:l};if((null!==(a=l.currentVersion)&&void 0!==a?a:0)<10.5)return y;const u="".concat(e,"/layers"),s=n?await n.fetchServiceMetadata(u,i):await(0,t.V)(u,i);return c(s),o(s),y.layersJSON={layers:s.layers,tables:s.tables},y}function i(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function l(e){return"Table"===e.type}function o(e){var r,a;e.layers=null===(r=e.layers)||void 0===r?void 0:r.filter(i),e.tables=null===(a=e.tables)||void 0===a?void 0:a.filter(l)}function y(e){e.type||(e.type="Feature Layer")}function u(e){e.type||(e.type="Table")}function c(e){var r,a;null!==(r=e.layers)&&void 0!==r&&r.forEach(y),null===(a=e.tables)||void 0===a||a.forEach(u)}},60239:(e,r,a)=>{a.d(r,{N:()=>M,populateOperationalLayers:()=>c});var t=a(19276),n=(a(81806),a(77491)),i=a(62487),l=a(70652);function o(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}var y=a(2487),u=a(81589);async function c(e,r,a){if(!r)return;const t=r.map((e=>async function(e,r){return async function(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&("GroupLayer"===r.layerType?await M(t,r,a):h(r)?function(e,r,a){r.itemId&&(e.portalItem=new l.default({id:r.itemId,portal:null===a||void 0===a?void 0:a.portal}),e.when((()=>{var t,n;const i=t=>{var n;const i=t.layerId;G(t,e,r,i,a);const l=null===(n=r.featureCollection)||void 0===n||null===(n=n.layers)||void 0===n?void 0:n[i];l&&t.read(l,a)};null!==(t=e.layers)&&void 0!==t&&t.forEach(i),null===(n=e.tables)||void 0===n||n.forEach(i)})))}(t,r,a.context):T(r)&&await async function(e,r,a){var t;const n=i.S.FeatureLayer,l=await n(),o=r.featureCollection,y=null===o||void 0===o?void 0:o.showLegend,u=null===o||void 0===o||null===(t=o.layers)||void 0===t?void 0:t.map(((t,n)=>{const i=new l;i.read(t,a);const o={...a,ignoreDefaults:!0};return G(i,e,r,n,o),null!=y&&i.read({showLegend:y},o),i}));e.layers.addMany(null!==u&&void 0!==u?u:[])}(t,r,a.context)),await(0,u.L)(t,a.context),t}(await w(e,r),e,r)}(e,a))),n=await Promise.allSettled(t);for(const i of n)"rejected"===i.status||i.value&&e.add(i.value)}const s={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},p={ArcGISFeatureLayer:"FeatureLayer"},L={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},v={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"UnsupportedLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},f={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},m={...v,LinkChartLayer:"LinkChartLayer"},g={...f},I={...S};async function w(e,r){var a,t;const u=r.context,c=b(u);let s=e.layerType||e.type;!s&&(null===r||void 0===r?void 0:r.defaultLayerType)&&(s=r.defaultLayerType);const d=c[s];let p=d?i.S[d]:i.S.UnknownLayer;if(h(e)){const r=null===u||void 0===u?void 0:u.portal;if(e.itemId){const a=new l.default({id:e.itemId,portal:r});await a.load();const t=(await(0,y.n)(a,new n.v)).className||"UnknownLayer";p=i.S[t]}}else"ArcGISFeatureLayer"===s?function(e){return o(e,"notes")}(e)||function(e){return o(e,"markup")}(e)?p=i.S.MapNotesLayer:function(e){return o(e,"route")}(e)?p=i.S.RouteLayer:T(e)&&(p=i.S.GroupLayer):null!==(a=e.wmtsInfo)&&void 0!==a&&a.url&&e.wmtsInfo.layerIdentifier?p=i.S.WMTSLayer:"WFS"===s&&"2.0.0"!==(null===(t=e.wfsInfo)||void 0===t?void 0:t.version)&&(p=i.S.UnsupportedLayer);return p()}function T(e){var r,a;return"ArcGISFeatureLayer"===e.layerType&&!h(e)&&(null!==(r=null===(a=e.featureCollection)||void 0===a||null===(a=a.layers)||void 0===a?void 0:a.length)&&void 0!==r?r:0)>1}function h(e){return"Feature Collection"===e.type}function b(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=L;break;case"ground":r=d;break;case"tables":r=p;break;default:r=s}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=I;break;case"tables":r=g;break;default:r=m}break;default:switch(e.layerContainerType){case"basemap":r=S;break;case"tables":r=f;break;default:r=v}}return r}async function M(e,r,a){const n=new t.A,i=c(n,Array.isArray(r.layers)?r.layers:[],a);try{try{if(await i,"group"===e.type)return e.layers.addMany(n),e}catch(l){e.destroy();for(const e of n)e.destroy();throw l}}catch(l){throw l}}function G(e,r,a,t,n){var i,l;e.read({id:"".concat(r.id,"-sublayer-").concat(t),visibility:null===(i=null===(l=a.visibleLayers)||void 0===l?void 0:l.includes(t))||void 0===i||i},n)}},79942:(e,r,a)=>{a.d(r,{m:()=>l,v:()=>i});var t=a(90534),n=a(65308);function i(e,r){return{...o(e,r),readResourcePaths:[]}}function l(e,r,a){const n=(0,t.An)(e.itemUrl);return{...o(e,r),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:a?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function o(e,r){return{origin:r,url:(0,t.An)(e.itemUrl),portal:e.portal||n.A.getDefault(),portalItem:e}}},73814:(e,r,a)=>{a.d(r,{load:()=>v});var t=a(50076),n=a(13096),i=a(11668),l=a(77491),o=a(60239),y=a(62487),u=a(65308),c=a(79942),s=a(64130),d=a(72945),p=a(81589),L=a(67061);async function v(e,r){const a=e.instance.portalItem;if(null!==a&&void 0!==a&&a.id)return await a.load(r),function(e){const r=e.instance.portalItem;if(null===r||void 0===r||!r.type||!e.supportedTypes.includes(r.type))throw new t.A("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:null===r||void 0===r?void 0:r.type,expectedType:e.supportedTypes.join(", ")})}(e),e.validateItem&&e.validateItem(a),async function(e,r){var a;const n=e.instance,y=n.portalItem;if(!y)return;const{url:u,title:v}=y,S=(0,c.v)(y,"portal-item");if("group"===n.type)return async function(e,r,a){const n=e.portalItem;if(!e.sourceIsPortalItem)return;const{title:y,type:u}=n;if("Group Layer"===u){if(!(0,d.Y)(n,"Map"))throw new t.A("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return async function(e){var r;const a=e.portalItem,t=await a.fetchData("json");if(!t)return;const n=(0,c.v)(a,"web-map");e.read(t,n),await(0,o.N)(e,t,{context:n}),e.resourceReferences={portalItem:a,paths:null!==(r=n.readResourcePaths)&&void 0!==r?r:[]}}(e)}return e.read({title:y},r),async function(e,r){let a;const{portalItem:n}=e;if(!n)return;const o=n.type,y=r.layerModuleTypeMap;switch(o){case"Feature Service":case"Feature Collection":a=y.FeatureLayer;break;case"Stream Service":a=y.StreamLayer;break;case"Scene Service":a=y.SceneLayer;break;default:throw new t.A("portal:unsupported-item-type-as-group","The item type '".concat(o,"' is not supported as a 'IGroupLayer'"))}const u=new l.v;let[c,d]=await Promise.all([a(),m(r,u)]),p=()=>c;if("Feature Service"===o){var v;const r=null===(v=(0,s.pJ)(d))||void 0===v?void 0:v.customParameters;d=n.url?await(0,s.bO)(d,n.url,u):{};const a=(0,s.z8)(d),t=(0,s.ay)(d),l=(0,s.PC)(d),o=[];if(a.length||null!==t&&void 0!==t&&t.length){a.length&&o.push("SubtypeGroupLayer"),null!==t&&void 0!==t&&t.length&&o.push("OrientedImageryLayer"),(null===l||void 0===l?void 0:l.length)&&o.push("CatalogLayer");const e=[];for(const a of o){const r=y[a];e.push(r())}const r=await Promise.all(e),n=new Map;o.forEach(((e,a)=>{n.set(e,r[a])})),p=e=>{var r;return e.layerType&&null!==(r=n.get(e.layerType))&&void 0!==r?r:c}}const L=await async function(e,r){const{layersJSON:a}=await(0,i.Q)(e,r);if(!a)return null;const t=[...a.layers,...a.tables];return e=>t.find((r=>r.id===e.id))}(n.url,{customParameters:r,loadContext:u});return await f(e,p,d,L)}return"Scene Service"===o&&n.url&&(d=await(0,s.nu)(n,d,u)),(0,s.XH)(d)>0?await f(e,p,d):await async function(e,r){var a,t;const{portalItem:n}=e;if(null===n||void 0===n||!n.url)return;const i=await(0,L.V)(n.url);i&&f(e,r,{layers:null===(a=i.layers)||void 0===a?void 0:a.map(s._r),tables:null===(t=i.tables)||void 0===t?void 0:t.map(s._r)})}(e,p)}(e,a)}(n,S,e);u&&"media"!==n.type&&n.read({url:u},S);const g=new l.v,I=await m(e,g,r);return I&&n.read(I,S),n.resourceReferences={portalItem:y,paths:null!==(a=S.readResourcePaths)&&void 0!==a?a:[]},"subtype-group"!==n.type&&n.read({title:v},S),(0,p.L)(n,S)}(e,r)}async function f(e,r,a,t){var n;let i=a.layers||[];const l=a.tables||[];if("Feature Collection"===(null===(n=e.portalItem)||void 0===n?void 0:n.type)?(i.forEach(((e,r)=>{var a;e.id=r,"Table"===(null===e||void 0===e||null===(a=e.layerDefinition)||void 0===a?void 0:a.type)&&l.push(e)})),i=i.filter((e=>{var r;return"Table"!==(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)}))):(i.reverse(),l.reverse()),i.forEach((n=>{const i=null===t||void 0===t?void 0:t(n);if(i||!t){const t=S(e,r(n),a,n,i);e.add(t)}})),l.length){const r=await y.S.FeatureLayer();l.forEach((n=>{const i=null===t||void 0===t?void 0:t(n);if(i||!t){const t=S(e,r,a,n,i);e.tables.add(t)}}))}}function S(e,r,a,t,n){const i=e.portalItem,l={portalItem:i.clone(),layerId:t.id};null!=t.url&&(l.url=t.url);const o=new r(l);if("sourceJSON"in o&&(o.sourceJSON=n),"subtype-group"!==o.type&&"catalog"!==o.type&&(o.sublayerTitleMode="service-name"),"Feature Collection"===i.type){const e={origin:"portal-item",portal:i.portal||u.A.getDefault()};o.read(t,e);const r=a.showLegend;null!=r&&o.read({showLegend:r},e)}return o}async function m(e,r,a){if(!1===e.supportsData)return;const t=e.instance,i=t.portalItem;if(!i)return;let l=null;try{l=await i.fetchData("json",a)}catch(u){}if(function(e){return"stream"!==e.type&&"layerId"in e}(t)){var o,y;let e=null;const a=await async function(e,r,a){var t,i,l,o,y,u,c,d,p;if(null!==r&&void 0!==r&&r.layers&&null!==r&&void 0!==r&&r.tables)return(0,s.XH)(r);const L=(0,n.qg)(e.url);if(!L)return 1;const v=await a.fetchServiceMetadata(L.url.path,{customParameters:null===(t=(0,s.pJ)(r))||void 0===t?void 0:t.customParameters}).catch((()=>null));return(null!==(i=null!==(l=null===r||void 0===r||null===(o=r.layers)||void 0===o?void 0:o.length)&&void 0!==l?l:null===v||void 0===v||null===(y=v.layers)||void 0===y?void 0:y.length)&&void 0!==i?i:0)+(null!==(u=null!==(c=null===r||void 0===r||null===(d=r.tables)||void 0===d?void 0:d.length)&&void 0!==c?c:null===v||void 0===v||null===(p=v.tables)||void 0===p?void 0:p.length)&&void 0!==u?u:0)}(i,l,r);if((null!==(o=l)&&void 0!==o&&o.layers||null!==(y=l)&&void 0!==y&&y.tables)&&a>0){if(null==t.layerId){const e=(0,s.z8)(l);t.layerId="subtype-group"===t.type?null===e||void 0===e?void 0:e[0]:(0,s.WZ)(l)}e=function(e,r){var a,t;const{layerId:n}=r,i=(null===(a=e.layers)||void 0===a?void 0:a.find((e=>e.id===n)))||(null===(t=e.tables)||void 0===t?void 0:t.find((e=>e.id===n)));return i&&function(e,r){return!("feature"===r.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===r.type&&!("layerType"in e))}(i,r)?i:null}(l,t),e&&null!=l.showLegend&&(e.showLegend=l.showLegend)}return a>1&&"sublayerTitleMode"in t&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),e}return l}},81589:(e,r,a)=>{a.d(r,{L:()=>l});var t=a(98773),n=a(50346),i=a(62754);async function l(e,r,a){const l=e&&e.getAtOrigin&&e.getAtOrigin("renderer",r.origin);if(l&&"unique-value"===l.type&&l.styleOrigin){const o=await(0,t.Ke)(l.populateFromStyle());if((0,n.Te)(a),!1===o.ok){const a=o.error;null!==r&&void 0!==r&&r.messages&&r.messages.push(new i.A("renderer:style-reference","Failed to create unique value renderer from style reference: ".concat(a.message),{error:a,context:r})),e.clear("renderer",null===r||void 0===r?void 0:r.origin)}}}}}]);
//# sourceMappingURL=3814.15bed48f.chunk.js.map