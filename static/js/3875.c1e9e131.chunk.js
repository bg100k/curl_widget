"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[3875,2945],{12016:(e,t,i)=>{i.d(t,{B:()=>n});var r=i(18690),l=i(54901),s=i(76460),a=i(50346),o=i(16783);class n{constructor(e,t,i,r){let l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=(0,o.ho)(e,{...l,schedule:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,l.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>s.A.getLogger("esri.core.workers.WorkerHandle").error("Failed to initialize ".concat(e," worker: ").concat(t))))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,l.hA)((()=>{i.removed=!0,(0,r.TF)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const r=this._transferLists[e],l=r?r(t):[];return this._thread.invoke(e,t,{transferList:l,signal:i})}return this._promise?this._promise.then((()=>((0,a.Te)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},43875:(e,t,i)=>{i.r(t),i.d(t,{default:()=>L});var r=i(35143),l=i(3825),s=i(50076),a=i(30726),o=i(77717),n=i(50346),d=i(90534),c=i(46053),u=(i(81806),i(76460),i(47249),i(28379)),h=i(85842),p=i(91605),v=i(25515),y=i(76328),m=i(19502),f=i(11270),g=i(94729),_=i(55053);class w{constructor(e,t,i,r){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=i,this.noDataValue=r)}get hasNoDataValues(){if(null==this._hasNoDataValues){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(null!=this._minValue)return;const{noDataValue:e,values:t}=this;let i=1/0,r=-1/0,l=!0;for(const s of t)s===e?this._hasNoDataValues=!0:(i=s<i?s:i,r=s>r?s:r,l=!1);l?(this._minValue=0,this._maxValue=0):(this._minValue=i,this._maxValue=r>-3e38?r:0)}}var I=i(12016);class b extends I.B{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}release(){--this.ref<=0&&(M.forEach(((e,t)=>{e===this&&M.delete(t)})),this.destroy())}}const M=new Map;let S=class extends((0,y.f)((0,m.b)((0,f.q)((0,g.A)((0,o.P)(v.A)))))){constructor(){super(...arguments),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=M.get(e);return t||(null!=e?(t=new b((t=>e.immediate.schedule(t))),M.set(e,t)):(t=new b,M.set(null,t))),++t.ref,t}()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._lercDecoder=(0,a.Gz)(this._lercDecoder)}readCapabilities(e,t){const i=t.capabilities&&t.capabilities.split(",").map((e=>e.toLowerCase().trim()));return i?{operations:{supportsTileMap:i.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(e,t){let i=t.currentVersion;return i||(i=9.3),i}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{if(e.typeKeywords)for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new s.A("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(n.QP).then((()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,i,r){const s=null!=(r=r||{signal:null}).signal?r.signal:r.signal=(new AbortController).signal,a={responseType:"array-buffer",signal:s},o={noDataValue:r.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,i,r))).then((()=>(0,l.A)(this.getTileUrl(e,t,i),a))).then((e=>this._lercDecoder.decode(e.data,o,s))).then((e=>new w(e)))}getTileUrl(e,t,i){const r=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,l=(0,d.x0)({...this.parsedUrl.query,blankTile:!r&&null});return"".concat(this.parsedUrl.path,"/tile/").concat(e,"/").concat(t,"/").concat(i).concat(l?"?"+l:"")}async queryElevation(e,t){const{ElevationQuery:r}=await i.e(3489).then(i.bind(i,53489));return(0,n.Te)(t),(new r).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:r}=await i.e(3489).then(i.bind(i,53489));return(0,n.Te)(t),(new r).createSampler(this,e,t)}_fetchTileAvailability(e,t,i,r){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,i,r):Promise.resolve("unknown")}async _fetchImageService(e){var t;if(this.sourceJSON)return this.sourceJSON;const i={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},r=await(0,l.A)(this.parsedUrl.path,i);r.ssl&&(this.url=null===(t=this.url)||void 0===t?void 0:t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[A]}};(0,r._)([(0,c.MZ)({readOnly:!0})],S.prototype,"capabilities",void 0),(0,r._)([(0,u.w)("service","capabilities",["capabilities"])],S.prototype,"readCapabilities",null),(0,r._)([(0,c.MZ)({json:{read:{source:"copyrightText"}}})],S.prototype,"copyright",void 0),(0,r._)([(0,c.MZ)({readOnly:!0,type:p.A})],S.prototype,"heightModelInfo",void 0),(0,r._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],S.prototype,"path",void 0),(0,r._)([(0,c.MZ)({type:["show","hide"]})],S.prototype,"listMode",void 0),(0,r._)([(0,c.MZ)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],S.prototype,"minScale",void 0),(0,r._)([(0,c.MZ)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],S.prototype,"maxScale",void 0),(0,r._)([(0,c.MZ)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],S.prototype,"opacity",void 0),(0,r._)([(0,c.MZ)({type:["ArcGISTiledElevationServiceLayer"]})],S.prototype,"operationalLayerType",void 0),(0,r._)([(0,c.MZ)()],S.prototype,"sourceJSON",void 0),(0,r._)([(0,c.MZ)({json:{read:!1},value:"elevation",readOnly:!0})],S.prototype,"type",void 0),(0,r._)([(0,c.MZ)(_.OZ)],S.prototype,"url",void 0),(0,r._)([(0,c.MZ)()],S.prototype,"version",void 0),(0,r._)([(0,u.w)("version",["currentVersion"])],S.prototype,"readVersion",null),S=(0,r._)([(0,h.$)("esri.layers.ElevationLayer")],S);const A=Symbol("default-fetch-tile");S.prototype.fetchTile[A]=!0;const L=S},76328:(e,t,i)=>{i.d(t,{f:()=>u});var r=i(35143),l=(i(35238),i(46053)),s=(i(81806),i(76460),i(47249),i(28379)),a=i(85842),o=i(88235),n=i(44067),d=i(82356),c=i(13312);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){var e,t;null===(e=this.tilemapCache)||void 0===e||null===(t=e.destroy)||void 0===t||t.call(e)}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t,i){var r;const l=null===(r=t.capabilities)||void 0===r?void 0:r.includes("Tilemap");let{minLOD:s,maxLOD:a,minScale:c,maxScale:u}=t;if(null==s&&null==a&&0!==c&&0!==u){const e=e=>Math.round(1e4*e)/1e4;c=e(c||t.tileInfo.lods[0].scale),u=e(u||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const i of t.tileInfo.lods){const t=e(i.scale);s=t>=c?i.level:s,a=t>=u?i.level:a}}if(l)return new d.d({layer:this,minLOD:s,maxLOD:a});if(t.tileInfo){const e=new o.A;return e.read(t.tileInfo,i),new n.A(e,s,a)}return null}};return(0,r._)([(0,l.MZ)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"minScale",void 0),(0,r._)([(0,s.w)("service","minScale")],t.prototype,"readMinScale",null),(0,r._)([(0,l.MZ)()],t.prototype,"maxScale",void 0),(0,r._)([(0,s.w)("service","maxScale")],t.prototype,"readMaxScale",null),(0,r._)([(0,l.MZ)({type:c.A})],t.prototype,"spatialReference",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,r._)([(0,l.MZ)({type:o.A})],t.prototype,"tileInfo",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"tilemapCache",void 0),(0,r._)([(0,s.w)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,r._)([(0,l.MZ)()],t.prototype,"version",void 0),t=(0,r._)([(0,a.$)("esri.layers.mixins.ArcGISCachedService")],t),t}},94729:(e,t,i)=>{i.d(t,{A:()=>b});var r=i(35143),l=i(86560),s=i(55171),a=i(3825),o=i(98773),n=i(50076),d=i(76460),c=i(30726),u=i(50346),h=i(90534),p=i(46053),v=(i(81806),i(47249),i(28379)),y=i(85842),m=i(17707),f=i(31933),g=i(65308),_=i(70652),w=i(38665),I=i(72945);const b=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,c.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,i){if(t.itemId)return new _.default({id:t.itemId,portal:null===i||void 0===i?void 0:i.portal})}writePortalItem(e,t){(null===e||void 0===e?void 0:e.id)&&(t.itemId=e.id)}async loadFromPortal(e,t){var r;if(null!==(r=this.portalItem)&&void 0!==r&&r.id)try{const{load:r}=await Promise.all([i.e(2487),i.e(3814)]).then(i.bind(i,73814));return(0,u.Te)(t),await r({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(l){throw(0,u.zf)(l)||d.A.getLogger(this).warn("Failed to load layer (".concat(this.title,", ").concat(this.id,") portal item (").concat(this.portalItem.id,")\n  ").concat(l)),l}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,u.QP)(e),!0))))}async setUserPrivileges(e,t){if(!l.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:i,fullEdit:r},content:{updateItem:l}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",i),this._set("userHasFullEditingPrivileges",r),this._set("userHasUpdateItemPrivileges",l)}catch(i){(0,u.QP)(i)}}async _fetchUserPrivileges(e,t){let i=this.portalItem;if(!e||!i||!i.loaded||i.sourceUrl)return this._fetchFallbackUserPrivileges(t);const r=e===i.id;if(r&&i.portal.user)return(0,I.It)(i);let l,a;if(r)l=i.portal.url;else try{l=await(0,f.wI)(this.url,t)}catch(o){(0,u.QP)(o)}if(!l||!(0,h.b8)(l,i.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;a=await(null===s.id||void 0===s.id?void 0:s.id.getCredential("".concat(l,"/sharing"),{prompt:!1,signal:e}))}catch(o){(0,u.QP)(o)}if(!a)return{features:{edit:true,fullEdit:false},content:{updateItem:false}};try{if(r?await i.reload():(i=new _.default({id:e,portal:{url:l}}),await i.load(t)),i.portal.user)return(0,I.It)(i)}catch(o){(0,u.QP)(o)}return{features:{edit:true,fullEdit:false},content:{updateItem:false}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(i){(0,u.QP)(i)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?null===s.id||void 0===s.id?void 0:s.id.findCredential(this.url):null;if(!t)return!0;const i=M.credential===t?M.user:await this._fetchEditingUser(e);return M.credential=t,M.user=i,null==(null===i||void 0===i?void 0:i.privileges)||i.privileges.includes("features:user:edit")}async _fetchEditingUser(e){var t,i;const r=null===(t=this.portalItem)||void 0===t||null===(t=t.portal)||void 0===t?void 0:t.user;if(r)return r;const l=s.id.findServerInfo(null!==(i=this.url)&&void 0!==i?i:"");if(null===l||void 0===l||!l.owningSystemUrl)return null;const n="".concat(l.owningSystemUrl,"/sharing/rest"),d=g.A.getDefault();if(d&&d.loaded&&(0,h.S8)(d.restUrl)===(0,h.S8)(n))return d.user;const c="".concat(n,"/community/self"),u=null!=e?e.signal:null,p=await(0,o.Ke)((0,a.A)(c,{authMode:"no-prompt",query:{f:"json"},signal:u}));return p.ok?w.A.fromJSON(p.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){var i;const r=null===t||void 0===t?void 0:t.portal,l=(null===(i=this.portalItem)||void 0===i?void 0:i.id)&&(this.portalItem.portal||g.A.getDefault());return r&&l&&!(0,h.ut)(l.restUrl,r.restUrl)?(t.messages&&t.messages.push(new n.A("layer:cross-portal","The layer '".concat(this.title," (").concat(this.id,")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer"),{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,r._)([(0,p.MZ)({type:_.default})],t.prototype,"portalItem",null),(0,r._)([(0,v.w)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,r._)([(0,m.K)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,r._)([(0,p.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,r._)([(0,p.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,r._)([(0,p.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,r._)([(0,p.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,r._)([(0,y.$)("esri.layers.mixins.PortalLayer")],t),t},M={credential:null,user:null}},44067:(e,t,i)=>{i.d(t,{A:()=>s});var r=i(50076),l=i(50346);class s{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.lods[e.lods.length-1].level;this.tileInfo=e,this.minLOD=t,this.maxLOD=i,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(i)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.tileInfo.lods[0].level}get effectiveMaxLOD(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){var r;const l=null===(r=this.tileInfo)||void 0===r?void 0:r.lodAt(e);return!l||e<this.minLOD||e>this.maxLOD?"unavailable":l.cols&&l.rows?i>=l.cols[0]&&i<=l.cols[1]&&t>=l.rows[0]&&t<=l.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,s){await(0,l.NO)(s);const a=this.getAvailability(e,t,i);if("unavailable"===a)throw new r.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return a}async fetchAvailabilityUpsample(e,t,i,r,s){await(0,l.NO)(s),r.level=e,r.row=t,r.col=i;const a=this.tileInfo;return a.updateTileInfo(r),this.fetchAvailability(e,t,i,s).catch((e=>{if((0,l.zf)(e))throw e;if(a.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r,s);throw e}))}}},72945:(e,t,i)=>{i.d(t,{It:()=>h,LG:()=>a,OM:()=>d,Y:()=>o,bK:()=>n,mm:()=>u,sQ:()=>c});var r=i(9624),l=i(13312),s=i(45417);function a(e,t){if(!o(e,t)){const i=e.typeKeywords;i?i.push(t):e.typeKeywords=[t]}}function o(e,t){var i;return!(null===(i=e.typeKeywords)||void 0===i||!i.includes(t))}function n(e){return o(e,u.HOSTED_SERVICE)}function d(e,t){const i=e.typeKeywords;if(i){const e=i.indexOf(t);e>-1&&i.splice(e,1)}}async function c(e){const t=e.clone().normalize();let i;if(t.length>1)for(const r of t)i?r.width>i.width&&(i=r):i=r;else i=t[0];return async function(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,s.ci)(e);const i=l.A.WGS84;return await(0,r.initializeProjection)(t,i),(0,r.project)(e,i)}(i)}const u={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function h(e){var t;const{portal:i,isOrgItem:r,itemControl:l}=e,s=null===(t=i.user)||void 0===t?void 0:t.privileges;let a=!s||s.includes("features:user:edit"),o=!!r&&!(null===s||void 0===s||!s.includes("features:user:fullEdit"));const n="update"===l||"admin"===l;return n?o=a=!0:o&&(a=!0),{features:{edit:a,fullEdit:o},content:{updateItem:n}}}}}]);
//# sourceMappingURL=3875.c1e9e131.chunk.js.map