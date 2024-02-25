"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[2825,2945],{32825:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var i,o=r(35143),s=r(50076),a=r(76460),n=r(77717),l=r(50346),p=r(68134),d=r(46053),c=(r(81806),r(47249),r(28379)),u=r(85842),y=r(37546),h=r(25515),m=r(12406),v=r(19502),f=r(31362),g=r(11270),_=r(94729),S=r(5682),M=r(90260),I=r(55053),w=r(2395),x=r(3825),b=r(19276),P=r(42553),Z=r(90534),T=r(14303);let A=i=class extends((0,P.Te)(b.A.ofType(T.A))){constructor(e){super(e),this.url=null}clone(){return new i({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const r=new i;for(const i of e)r.add(T.A.fromJSON(i,t));return r}static async fromUrl(e,t,r){const o={url:(0,Z.An)(e),origin:"service"},s=await(0,x.A)(e,{responseType:"json",signal:null===r||void 0===r?void 0:r.signal}),a=t.toJSON(),n=[];for(const i of s.data)n.push(T.A.fromJSON({...i,geometry:{...i.geometry,spatialReference:a}},o));return new i({url:e,items:n})}};(0,o._)([(0,d.MZ)({type:String})],A.prototype,"url",void 0),A=i=(0,o._)([(0,u.$)("esri.layers.support.SceneModifications")],A);const E=A;var L=r(12482),O=r(79453);let U=class extends((0,M.w6)((0,v.b)((0,g.q)((0,_.A)((0,S.j)((0,n.P)((0,f.d)((0,m.p)(h.A))))))))){constructor(){super(...arguments),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles((0,p.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),p.OH))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:(0,O.f)(e,r),context:r}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=null===e||void 0===e?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){(0,l.QP)(r)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await E.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(M.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(M.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s.A("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";(0,L.XF)(a.A.getLogger(this),(0,L.B)(t,"absolute-height",e)),(0,L.XF)(a.A.getLogger(this),(0,L.tW)(t,e))}};(0,o._)([(0,d.MZ)({type:String,readOnly:!0})],U.prototype,"geometryType",void 0),(0,o._)([(0,d.MZ)({type:["show","hide"]})],U.prototype,"listMode",void 0),(0,o._)([(0,d.MZ)({type:["IntegratedMeshLayer"]})],U.prototype,"operationalLayerType",void 0),(0,o._)([(0,d.MZ)({json:{read:!1},readOnly:!0})],U.prototype,"type",void 0),(0,o._)([(0,d.MZ)({type:w.W4,readOnly:!0})],U.prototype,"nodePages",void 0),(0,o._)([(0,d.MZ)({type:[w.uV],readOnly:!0})],U.prototype,"materialDefinitions",void 0),(0,o._)([(0,d.MZ)({type:[w.Ot],readOnly:!0})],U.prototype,"textureSetDefinitions",void 0),(0,o._)([(0,d.MZ)({type:[w.L0],readOnly:!0})],U.prototype,"geometryDefinitions",void 0),(0,o._)([(0,d.MZ)({readOnly:!0})],U.prototype,"serviceUpdateTimeStamp",void 0),(0,o._)([(0,d.MZ)({type:E}),(0,y.P)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],U.prototype,"modifications",void 0),(0,o._)([(0,c.w)(["web-scene","portal-item"],"modifications")],U.prototype,"readModifications",null),(0,o._)([(0,d.MZ)(I.Yj)],U.prototype,"elevationInfo",null),(0,o._)([(0,d.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],U.prototype,"path",void 0),U=(0,o._)([(0,u.$)("esri.layers.IntegratedMeshLayer")],U);const R=U},31362:(e,t,r)=>{r.d(t,{d:()=>a});var i=r(35143),o=r(46053),s=(r(81806),r(76460),r(47249),r(85842));const a=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,i._)([(0,o.MZ)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,i._)([(0,s.$)("esri.layers.mixins.CustomParametersMixin")],t),t}},94729:(e,t,r)=>{r.d(t,{A:()=>I});var i=r(35143),o=r(86560),s=r(55171),a=r(3825),n=r(98773),l=r(50076),p=r(76460),d=r(30726),c=r(50346),u=r(90534),y=r(46053),h=(r(81806),r(47249),r(28379)),m=r(85842),v=r(17707),f=r(31933),g=r(65308),_=r(70652),S=r(38665),M=r(72945);const I=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,d.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new _.default({id:t.itemId,portal:null===r||void 0===r?void 0:r.portal})}writePortalItem(e,t){(null===e||void 0===e?void 0:e.id)&&(t.itemId=e.id)}async loadFromPortal(e,t){var i;if(null!==(i=this.portalItem)&&void 0!==i&&i.id)try{const{load:i}=await Promise.all([r.e(2487),r.e(3814)]).then(r.bind(r,73814));return(0,c.Te)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(o){throw(0,c.zf)(o)||p.A.getLogger(this).warn("Failed to load layer (".concat(this.title,", ").concat(this.id,") portal item (").concat(this.portalItem.id,")\n  ").concat(o)),o}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,c.QP)(e),!0))))}async setUserPrivileges(e,t){if(!o.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:o}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",o)}catch(r){(0,c.QP)(r)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return(0,M.It)(r);let o,a;if(i)o=r.portal.url;else try{o=await(0,f.wI)(this.url,t)}catch(n){(0,c.QP)(n)}if(!o||!(0,u.b8)(o,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;a=await(null===s.id||void 0===s.id?void 0:s.id.getCredential("".concat(o,"/sharing"),{prompt:!1,signal:e}))}catch(n){(0,c.QP)(n)}if(!a)return{features:{edit:true,fullEdit:false},content:{updateItem:false}};try{if(i?await r.reload():(r=new _.default({id:e,portal:{url:o}}),await r.load(t)),r.portal.user)return(0,M.It)(r)}catch(n){(0,c.QP)(n)}return{features:{edit:true,fullEdit:false},content:{updateItem:false}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(r){(0,c.QP)(r)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?null===s.id||void 0===s.id?void 0:s.id.findCredential(this.url):null;if(!t)return!0;const r=w.credential===t?w.user:await this._fetchEditingUser(e);return w.credential=t,w.user=r,null==(null===r||void 0===r?void 0:r.privileges)||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){var t,r;const i=null===(t=this.portalItem)||void 0===t||null===(t=t.portal)||void 0===t?void 0:t.user;if(i)return i;const o=s.id.findServerInfo(null!==(r=this.url)&&void 0!==r?r:"");if(null===o||void 0===o||!o.owningSystemUrl)return null;const l="".concat(o.owningSystemUrl,"/sharing/rest"),p=g.A.getDefault();if(p&&p.loaded&&(0,u.S8)(p.restUrl)===(0,u.S8)(l))return p.user;const d="".concat(l,"/community/self"),c=null!=e?e.signal:null,y=await(0,n.Ke)((0,a.A)(d,{authMode:"no-prompt",query:{f:"json"},signal:c}));return y.ok?S.A.fromJSON(y.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){var r;const i=null===t||void 0===t?void 0:t.portal,o=(null===(r=this.portalItem)||void 0===r?void 0:r.id)&&(this.portalItem.portal||g.A.getDefault());return i&&o&&!(0,u.ut)(o.restUrl,i.restUrl)?(t.messages&&t.messages.push(new l.A("layer:cross-portal","The layer '".concat(this.title," (").concat(this.id,")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer"),{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,y.MZ)({type:_.default})],t.prototype,"portalItem",null),(0,i._)([(0,h.w)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,v.K)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,y.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,y.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,y.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,y.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,m.$)("esri.layers.mixins.PortalLayer")],t),t},w={credential:null,user:null}},5682:(e,t,r)=>{r.d(t,{j:()=>a});var i=r(35143),o=r(46053),s=(r(81806),r(76460),r(47249),r(85842));const a=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const r=this._get("effectiveScaleRange");return r&&r.minScale===e.minScale&&r.maxScale===e.maxScale?r:e}};return(0,i._)([(0,o.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,i._)([(0,o.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,i._)([(0,o.MZ)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,i._)([(0,s.$)("esri.layers.mixins.ScaleRangeLayer")],t),t}},2395:(e,t,r)=>{r.d(t,{L0:()=>f,Ot:()=>y,W4:()=>l,uV:()=>c});var i=r(35143),o=r(42553),s=r(46053),a=(r(81806),r(76460),r(47249),r(6409)),n=r(85842);let l=class extends o.oY{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,i._)([(0,s.MZ)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,i._)([(0,s.MZ)({type:Number})],l.prototype,"rootIndex",void 0),(0,i._)([(0,s.MZ)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,i._)([(0,n.$)("esri.layer.support.I3SNodePageDefinition")],l);let p=class extends o.oY{constructor(){super(...arguments),this.factor=1}};(0,i._)([(0,s.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],p.prototype,"id",void 0),(0,i._)([(0,s.MZ)({type:Number})],p.prototype,"factor",void 0),p=(0,i._)([(0,n.$)("esri.layer.support.I3SMaterialTexture")],p);let d=class extends o.oY{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,i._)([(0,s.MZ)({type:[Number]})],d.prototype,"baseColorFactor",void 0),(0,i._)([(0,s.MZ)({type:p})],d.prototype,"baseColorTexture",void 0),(0,i._)([(0,s.MZ)({type:p})],d.prototype,"metallicRoughnessTexture",void 0),(0,i._)([(0,s.MZ)({type:Number})],d.prototype,"metallicFactor",void 0),(0,i._)([(0,s.MZ)({type:Number})],d.prototype,"roughnessFactor",void 0),d=(0,i._)([(0,n.$)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],d);let c=class extends o.oY{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,i._)([(0,a.e)({opaque:"opaque",mask:"mask",blend:"blend"})],c.prototype,"alphaMode",void 0),(0,i._)([(0,s.MZ)({type:Number})],c.prototype,"alphaCutoff",void 0),(0,i._)([(0,s.MZ)({type:Boolean})],c.prototype,"doubleSided",void 0),(0,i._)([(0,a.e)({none:"none",back:"back",front:"front"})],c.prototype,"cullFace",void 0),(0,i._)([(0,s.MZ)({type:p})],c.prototype,"normalTexture",void 0),(0,i._)([(0,s.MZ)({type:p})],c.prototype,"occlusionTexture",void 0),(0,i._)([(0,s.MZ)({type:p})],c.prototype,"emissiveTexture",void 0),(0,i._)([(0,s.MZ)({type:[Number]})],c.prototype,"emissiveFactor",void 0),(0,i._)([(0,s.MZ)({type:d})],c.prototype,"pbrMetallicRoughness",void 0),c=(0,i._)([(0,n.$)("esri.layer.support.I3SMaterialDefinition")],c);let u=class extends o.oY{};(0,i._)([(0,s.MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:"".concat(t.index)}}})],u.prototype,"name",void 0),(0,i._)([(0,a.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],u.prototype,"format",void 0),u=(0,i._)([(0,n.$)("esri.layer.support.I3STextureFormat")],u);let y=class extends o.oY{constructor(){super(...arguments),this.atlas=!1}};(0,i._)([(0,s.MZ)({type:[u]})],y.prototype,"formats",void 0),(0,i._)([(0,s.MZ)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,i._)([(0,n.$)("esri.layer.support.I3STextureSetDefinition")],y);let h=class extends o.oY{};(0,i._)([(0,a.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),(0,i._)([(0,s.MZ)({type:Number})],h.prototype,"component",void 0),h=(0,i._)([(0,n.$)("esri.layer.support.I3SGeometryAttribute")],h);let m=class extends o.oY{};(0,i._)([(0,a.e)({draco:"draco"})],m.prototype,"encoding",void 0),(0,i._)([(0,s.MZ)({type:[String]})],m.prototype,"attributes",void 0),m=(0,i._)([(0,n.$)("esri.layer.support.I3SGeometryCompressedAttributes")],m);let v=class extends o.oY{constructor(){super(...arguments),this.offset=0}};(0,i._)([(0,s.MZ)({type:Number})],v.prototype,"offset",void 0),(0,i._)([(0,s.MZ)({type:h})],v.prototype,"position",void 0),(0,i._)([(0,s.MZ)({type:h})],v.prototype,"normal",void 0),(0,i._)([(0,s.MZ)({type:h})],v.prototype,"uv0",void 0),(0,i._)([(0,s.MZ)({type:h})],v.prototype,"color",void 0),(0,i._)([(0,s.MZ)({type:h})],v.prototype,"uvRegion",void 0),(0,i._)([(0,s.MZ)({type:h})],v.prototype,"featureId",void 0),(0,i._)([(0,s.MZ)({type:h})],v.prototype,"faceRange",void 0),(0,i._)([(0,s.MZ)({type:m})],v.prototype,"compressedAttributes",void 0),v=(0,i._)([(0,n.$)("esri.layer.support.I3SGeometryBuffer")],v);let f=class extends o.oY{};(0,i._)([(0,a.e)({triangle:"triangle"})],f.prototype,"topology",void 0),(0,i._)([(0,s.MZ)()],f.prototype,"geometryBuffers",void 0),f=(0,i._)([(0,n.$)("esri.layer.support.I3SGeometryDefinition")],f)},72945:(e,t,r)=>{r.d(t,{It:()=>u,LG:()=>a,OM:()=>p,Y:()=>n,bK:()=>l,mm:()=>c,sQ:()=>d});var i=r(9624),o=r(13312),s=r(45417);function a(e,t){if(!n(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function n(e,t){var r;return!(null===(r=e.typeKeywords)||void 0===r||!r.includes(t))}function l(e){return n(e,c.HOSTED_SERVICE)}function p(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}async function d(e){const t=e.clone().normalize();let r;if(t.length>1)for(const i of t)r?i.width>r.width&&(r=i):r=i;else r=t[0];return async function(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,s.ci)(e);const r=o.A.WGS84;return await(0,i.initializeProjection)(t,r),(0,i.project)(e,r)}(r)}const c={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function u(e){var t;const{portal:r,isOrgItem:i,itemControl:o}=e,s=null===(t=r.user)||void 0===t?void 0:t.privileges;let a=!s||s.includes("features:user:edit"),n=!!i&&!(null===s||void 0===s||!s.includes("features:user:fullEdit"));const l="update"===o||"admin"===o;return l?n=a=!0:n&&(a=!0),{features:{edit:a,fullEdit:n},content:{updateItem:l}}}}}]);
//# sourceMappingURL=2825.ebc43563.chunk.js.map