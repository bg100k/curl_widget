"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[2544],{62544:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>y});var t=r(50076),n=r(90534),l=r(13096),i=r(39323),s=r(11668),o=r(31933),u=r(62487),c=r(67061);const d={FeatureLayer:!0,SceneLayer:!0};async function y(e){var a;const u=null===(a=e.properties)||void 0===a?void 0:a.customParameters,y=await async function(e,a){let r=(0,l.qg)(e);if(null==r&&(r=await async function(e,a){var r,t;const i=await(0,c.V)(e,{customParameters:a});let s=null,o=null;const u=i.type;if("Feature Layer"===u||"Table"===u?(s="FeatureServer",o=null!==(r=i.id)&&void 0!==r?r:null):"indexedVector"===u?s="VectorTileServer":i.hasOwnProperty("mapName")?s="MapServer":i.hasOwnProperty("bandCount")&&i.hasOwnProperty("pixelSizeX")?s="ImageServer":i.hasOwnProperty("maxRecordCount")&&i.hasOwnProperty("allowGeometryUpdates")?s="FeatureServer":i.hasOwnProperty("streamUrls")?s="StreamServer":f(i)?(s="SceneServer",o=i.id):i.hasOwnProperty("layers")&&f(null===(t=i.layers)||void 0===t?void 0:t[0])&&(s="SceneServer"),!s)return null;const d=null!=o?(0,l.iz)(e):null;return{title:null!=d&&i.name||(0,n.e7)(e),serverType:s,sublayer:o,url:{path:null!=d?d.serviceUrl:(0,n.An)(e).path}}}(e,a)),null==r)throw new t.A("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:u,sublayer:y}=r;let v;const w={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},h="FeatureServer"===u,p="SceneServer"===u,b={parsedUrl:r,Constructor:null,layerId:(h||p)&&null!==y&&void 0!==y?y:void 0,layers:[],tables:[]};switch(u){case"MapServer":v=null!=y?"FeatureLayer":await async function(e,a){return(await(0,c.V)(e,{customParameters:a})).tileInfo}(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{var S;const r=await(0,c.V)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;v=t?"LERC"!==(null===t||void 0===t||null===(S=t.format)||void 0===S?void 0:S.toUpperCase())||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,c.V)(r.url.path,{customParameters:a});if(v="SceneLayer",e){const a=null===e||void 0===e?void 0:e.layers;if("Voxel"===(null===e||void 0===e?void 0:e.layerType))v="VoxelLayer";else if(null!==a&&void 0!==a&&a.length){var L;const e=null===(L=a[0])||void 0===L?void 0:L.layerType;null!=e&&null!=o.XX[e]&&(v=o.XX[e])}}break}case"3DTilesServer":throw new t.A("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(v="FeatureLayer",null!=y){const r=await(0,c.V)(e,{customParameters:a});b.sourceJSON=r,"Oriented Imagery Layer"===r.type&&(v="OrientedImageryLayer")}break;default:v=w[u]}if(d[v]&&null==y){var P;const r=await async function(e,a,r){var t,n;let l,o,u=!1;switch(a){case"FeatureServer":{const a=await(0,s.Q)(e,{customParameters:r});u=!!a.layersJSON,l=a.layersJSON||a.serviceJSON;break}case"SceneServer":{const a=await async function(e,a){var r;const t=await(0,c.V)(e,{customParameters:a}),n=null===(r=t.layers)||void 0===r?void 0:r[0];if(!n)return{serviceInfo:t};try{const{serverUrl:r}=await(0,i.L)(e),n=await(0,c.V)(r,{customParameters:a}).catch((()=>null));return n&&(t.tables=n.tables),{serviceInfo:t,tableServerUrl:r}}catch{return{serviceInfo:t}}}(e,r);l=a.serviceInfo,o=a.tableServerUrl;break}default:l=await(0,c.V)(e,{customParameters:r})}const d=null===(t=l)||void 0===t?void 0:t.layers,y=null===(n=l)||void 0===n?void 0:n.tables;return{layers:(null===d||void 0===d?void 0:d.map((e=>({id:e.id}))).reverse())||[],tables:(null===y||void 0===y?void 0:y.map((e=>({serverUrl:o,id:e.id}))).reverse())||[],layerInfos:u?d:[],tableInfos:u?y:[]}}(e,u,a);if(h&&(b.sublayerInfos=r.layerInfos,b.tableInfos=r.tableInfos),1!==r.layers.length+r.tables.length)b.layers=r.layers,b.tables=r.tables,h&&(null===(P=r.layerInfos)||void 0===P?void 0:P.length)&&(b.sublayerConstructorProvider=await async function(e){const a=[],r=[];if(e.forEach((e=>{const{type:t}=e;"Oriented Imagery Layer"===t?(a.push(t),r.push(m("OrientedImageryLayer"))):(a.push(t),r.push(m("FeatureLayer")))})),!r.length)return;const t=await Promise.all(r),n=new Map;return a.forEach(((e,a)=>{n.set(e,t[a])})),e=>n.get(e.type)}(r.layerInfos));else if(h||p){var I,g,O,T,U,V;const e=null!==(I=null===(g=r.layerInfos)||void 0===g?void 0:g[0])&&void 0!==I?I:null===(O=r.tableInfos)||void 0===O?void 0:O[0];b.layerId=null!==(T=null===(U=r.layers[0])||void 0===U?void 0:U.id)&&void 0!==T?T:null===(V=r.tables[0])||void 0===V?void 0:V.id,b.sourceJSON=e,h&&"Oriented Imagery Layer"===(null===e||void 0===e?void 0:e.type)&&(v="OrientedImageryLayer")}}return b.Constructor=await m(v),b}(e.url,u),w={...e.properties,url:e.url};if(y.layers.length+y.tables.length===0)return null!=y.layerId&&(w.layerId=y.layerId),null!=y.sourceJSON&&(w.sourceJSON=y.sourceJSON),new y.Constructor(w);const h=new(0,(await Promise.all([r.e(7847),r.e(7114),r.e(4604)]).then(r.bind(r,4604))).default)({title:y.parsedUrl.title});return await async function(e,a,r){function t(e,a,t,n){const l={...r,layerId:a,sublayerTitleMode:"service-name"};return null!=e&&(l.url=e),null!=t&&(l.sourceJSON=t),n(l)}const n=a.sublayerConstructorProvider;for(const{id:i,serverUrl:s}of a.layers){var l;const r=v(a.sublayerInfos,i),o=null!==(l=r&&(null===n||void 0===n?void 0:n(r)))&&void 0!==l?l:a.Constructor,u=t(s,i,r,(e=>new o(e)));e.add(u)}if(a.tables.length){const r=await m("FeatureLayer");a.tables.forEach((n=>{let{id:l,serverUrl:i}=n;const s=t(i,l,v(a.tableInfos,l),(e=>new r(e)));e.tables.add(s)}))}}(h,y,w),h}function v(e,a){return e?e.find((e=>e.id===a)):null}function f(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function m(e){return(0,u.S[e])()}},39323:(e,a,r)=>{r.d(a,{L:()=>c});var t=r(55171),n=r(3825),l=r(50076),i=r(50346),s=r(13096),o=r(65308),u=r(70652);async function c(e,a){var r,c;const v=(0,s.qg)(e);if(!v)throw new l.A("invalid-url","Invalid scene service url");const f={...a,sceneServerUrl:v.url.path,layerId:null!==(r=v.sublayer)&&void 0!==r?r:void 0};if(null!==(c=f.sceneLayerItem)&&void 0!==c||(f.sceneLayerItem=await async function(e){const a=(await d(e)).serviceItemId;if(!a)return null;const r=new u.default({id:a,apiKey:e.apiKey}),l=await async function(e){const a=null===t.id||void 0===t.id?void 0:t.id.findServerInfo(e.sceneServerUrl);if(null!==a&&void 0!==a&&a.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(m){(0,i.QP)(m)}return null}(e);null!=l&&(r.portal=new o.A({url:l}));try{return r.load({signal:e.signal})}catch(w){return(0,i.QP)(w),null}}(f)),null==f.sceneLayerItem)return y(f.sceneServerUrl.replace("/SceneServer","/FeatureServer"),f);const m=await async function(e){let{sceneLayerItem:a,signal:r}=e;if(!a)return null;try{const e=(await a.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:r})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const t=new u.default({portal:e.portal,id:e.id});return await t.load(),t}catch(t){return(0,i.QP)(t),null}}(f);if(null===m||void 0===m||!m.url)throw new l.A("related-service-not-found","Could not find feature service through portal item relationship");f.featureServiceItem=m;const w=await y(m.url,f);return w.portalItem=m,w}async function d(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function y(e,a){var r,t,i;const o=(0,s.qg)(e);if(!o)throw new l.A("invalid-feature-service-url","Invalid feature service url");const u=o.url.path,c=a.layerId;if(null==c)return{serverUrl:u};const y=d(a),v=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,f=null===(r=(null===v||void 0===v||null===(t=v.layers)||void 0===t?void 0:t[0])||(null===v||void 0===v||null===(i=v.tables)||void 0===i?void 0:i[0]))||void 0===r?void 0:r.customParameters,m=e=>{const r={query:{f:"json",...f},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(u,r)},w=m("anonymous").catch((()=>m("no-prompt"))),[h,p]=await Promise.all([w,y]),b=null===p||void 0===p?void 0:p.layers,S=h.data&&h.data.layers;if(!Array.isArray(S))throw new Error("expected layers array");if(Array.isArray(b)){for(let n=0;n<Math.min(b.length,S.length);n++)if(b[n].id===c)return{serverUrl:u,layerId:S[n].id}}else if(null!=c&&c<S.length)return{serverUrl:u,layerId:S[c].id};throw new Error("could not find matching associated sublayer")}},11668:(e,a,r)=>{r.d(a,{Q:()=>n});var t=r(67061);async function n(e,a){var r;const{loadContext:n,...l}=a||{},i=n?await n.fetchServiceMetadata(e,l):await(0,t.V)(e,l);c(i),s(i);const o={serviceJSON:i};if((null!==(r=i.currentVersion)&&void 0!==r?r:0)<10.5)return o;const u="".concat(e,"/layers"),d=n?await n.fetchServiceMetadata(u,l):await(0,t.V)(u,l);return c(d),s(d),o.layersJSON={layers:d.layers,tables:d.tables},o}function l(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function i(e){return"Table"===e.type}function s(e){var a,r;e.layers=null===(a=e.layers)||void 0===a?void 0:a.filter(l),e.tables=null===(r=e.tables)||void 0===r?void 0:r.filter(i)}function o(e){e.type||(e.type="Feature Layer")}function u(e){e.type||(e.type="Table")}function c(e){var a,r;null!==(a=e.layers)&&void 0!==a&&a.forEach(o),null===(r=e.tables)||void 0===r||r.forEach(u)}},62487:(e,a,r)=>{r.d(a,{S:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(3993)]).then(r.bind(r,13993))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(7851),r.e(6616),r.e(7200),r.e(1448),r.e(6399),r.e(8656),r.e(8504),r.e(8451),r.e(3819),r.e(9231),r.e(3020),r.e(4279),r.e(7591),r.e(2746)]).then(r.bind(r,30188))).default,CatalogLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(8618),r.e(7851),r.e(6616),r.e(9122),r.e(8656),r.e(9346),r.e(7872),r.e(9078),r.e(3011)]).then(r.bind(r,84397))).default,CSVLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(7851),r.e(6616),r.e(7200),r.e(1448),r.e(6399),r.e(8656),r.e(8504),r.e(8451),r.e(6762)]).then(r.bind(r,1365))).default,DimensionLayer:async()=>(await Promise.all([r.e(7114),r.e(2798)]).then(r.bind(r,72798))).default,ElevationLayer:async()=>(await Promise.all([r.e(7114),r.e(6693),r.e(3875)]).then(r.bind(r,43875))).default,FeatureLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(7851),r.e(6616),r.e(7200),r.e(1448),r.e(6399),r.e(8656),r.e(8504),r.e(8451),r.e(4058)]).then(r.bind(r,38451))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(7851),r.e(6616),r.e(7200),r.e(1448),r.e(6399),r.e(2393)]).then(r.bind(r,50709))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(2551)]).then(r.bind(r,52551))).default,GroupLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(4604)]).then(r.bind(r,4604))).default,ImageryLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(7851),r.e(9122),r.e(3092),r.e(4439),r.e(6964),r.e(4739),r.e(3464)]).then(r.bind(r,59051))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(7851),r.e(3092),r.e(9844),r.e(6693),r.e(4439),r.e(6964),r.e(3934),r.e(4739),r.e(6889)]).then(r.bind(r,86889))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(7114),r.e(3020),r.e(7280),r.e(2825)]).then(r.bind(r,32825))).default,KMLLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(7851),r.e(6616),r.e(9699),r.e(3637)]).then(r.bind(r,41324))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(7114),r.e(2897)]).then(r.bind(r,22897))).default,LinkChartLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(8618),r.e(7851),r.e(6616),r.e(3620),r.e(2918),r.e(7200),r.e(1448),r.e(7216),r.e(9346),r.e(9778),r.e(3576),r.e(1111)]).then(r.bind(r,36744))).default,MapImageLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(8618),r.e(7851),r.e(6616),r.e(6399),r.e(9122),r.e(7872),r.e(7997),r.e(8679)]).then(r.bind(r,82951))).default,MapNotesLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(7851),r.e(6616),r.e(7200),r.e(1448),r.e(6399),r.e(8656),r.e(8504),r.e(8451),r.e(9744)]).then(r.bind(r,43311))).default,MediaLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(9522)]).then(r.bind(r,39522))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(8618),r.e(7851),r.e(6616),r.e(7200),r.e(1448),r.e(6399),r.e(6799),r.e(1528)]).then(r.bind(r,1741))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(4552),r.e(803)]).then(r.bind(r,50803))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(7851),r.e(6616),r.e(7200),r.e(1448),r.e(6399),r.e(8656),r.e(8504),r.e(8451),r.e(2166)]).then(r.bind(r,52593))).default,PointCloudLayer:async()=>(await Promise.all([r.e(7114),r.e(3020),r.e(1830)]).then(r.bind(r,11830))).default,RouteLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(7851),r.e(6616),r.e(1297),r.e(451)]).then(r.bind(r,91301))).default,SceneLayer:async()=>(await Promise.all([r.e(9113),r.e(7114),r.e(7851),r.e(6616),r.e(7200),r.e(8105),r.e(3819),r.e(9231),r.e(3020),r.e(8620),r.e(4279),r.e(952),r.e(4710),r.e(7591),r.e(9035)]).then(r.bind(r,48723))).default,StreamLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(7851),r.e(6616),r.e(7200),r.e(1448),r.e(6702)]).then(r.bind(r,84369))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(7851),r.e(6616),r.e(6399),r.e(8656),r.e(8504),r.e(1690),r.e(528)]).then(r.bind(r,69005))).default,TileLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(8618),r.e(7851),r.e(6616),r.e(6399),r.e(9122),r.e(7872),r.e(6693),r.e(7997),r.e(1174)]).then(r.bind(r,71174))).default,IntegratedMesh3DTilesLayer:async()=>(await Promise.all([r.e(7114),r.e(6790)]).then(r.bind(r,76790))).default,UnknownLayer:async()=>(await r.e(8896).then(r.bind(r,8896))).default,UnsupportedLayer:async()=>(await r.e(2043).then(r.bind(r,72043))).default,VectorTileLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(5663),r.e(6693),r.e(5995),r.e(117)]).then(r.bind(r,53451))).default,VoxelLayer:async()=>(await Promise.all([r.e(7114),r.e(3020),r.e(8893)]).then(r.bind(r,8893))).default,WFSLayer:async()=>(await Promise.all([r.e(7847),r.e(9113),r.e(7114),r.e(7851),r.e(6616),r.e(7200),r.e(1448),r.e(1316),r.e(7387)]).then(r.bind(r,4583))).default,WMSLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(2015)]).then(r.bind(r,52015))).default,WMTSLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(4552),r.e(1845)]).then(r.bind(r,1845))).default,WebTileLayer:async()=>(await Promise.all([r.e(7847),r.e(7114),r.e(4552)]).then(r.bind(r,24552))).default}},67061:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(3825);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return r}}}]);
//# sourceMappingURL=2544.f80b5007.chunk.js.map