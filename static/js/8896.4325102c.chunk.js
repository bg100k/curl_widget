"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[8896,2945],{77717:(e,t,r)=>{r.d(t,{P:()=>m,L:()=>I});var i=r(35143),s=r(91967),o=r(60351),n=r(53084),l=r(49140);class a{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(l.AU),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new a,r=this._originStores[l.Gr.DEFAULTS];r&&r.forEach(((e,r)=>{t.set(r,(0,n.o8)(e),l.Gr.DEFAULTS)}));for(let i=l.Gr.SERVICE;i<l.AU;i++){const r=this._originStores[i];r&&r.forEach(((r,s)=>{e&&e.has(s)||t.set(s,(0,n.o8)(r),i)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.Gr.USER,i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||this._propertyOriginMap.get(e)<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.Gr.USER;const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=null===r||void 0===r?void 0:r.get(e),s=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),s!==i}originOf(e){return this._propertyOriginMap.get(e)||l.Gr.DEFAULTS}forEach(e){this._values.forEach(e)}}var u=r(6527),d=r(39314),c=r(85842);const p=e=>{let t=class extends e{constructor(){super(...arguments);const e=(0,d.oY)(this),t=e.store,r=new a;e.store=r,(0,o.k)(e,t,r)}read(e,t){(0,u.L)(this,e,t)}getAtOrigin(e,t){const r=h(this),i=(0,l.aB)(t);if("string"==typeof e)return r.get(e,i);const s={};return e.forEach((e=>{s[e]=r.get(e,i)})),s}originOf(e){return(0,l.OL)(this.originIdOf(e))}originIdOf(e){return h(this).originOf(e)}revert(e,t){const r=h(this),i=(0,l.aB)(t),s=(0,d.oY)(this);let o;o="string"==typeof e?"*"===e?r.keys(i):[e]:e,o.forEach((e=>{s.invalidate(e),r.revert(e,i),s.commit(e)}))}};return t=(0,i._)([(0,c.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function h(e){return(0,d.oY)(e).store}let g=class extends(p(s.A)){};g=(0,i._)([(0,c.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],g);var f=r(17879),v=r(29584);const y=e=>{let t=class extends e{constructor(){super(...arguments)}clear(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user";return _(this).delete(e,(0,l.aB)(t))}write(e,t){return(0,v.M)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,d.oY)(this).setAtOrigin(e,t,(0,l.aB)(r))}removeOrigin(e){const t=_(this),r=(0,l.aB)(e),i=t.keys(r);for(const s of i)t.originOf(s)===r&&t.set(s,t.get(s,r),l.Gr.USER)}updateOrigin(e,t){const r=_(this),i=(0,l.aB)(t),s=(0,f.Jt)(this,e);for(let o=i+1;o<l.AU;++o)r.delete(e,o);r.set(e,s,i)}toJSON(e){return this.write({},e)}};return t=(0,i._)([(0,c.$)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function _(e){return(0,d.oY)(e).store}const m=e=>{let t=class extends(y(p(e))){constructor(){super(...arguments)}};return t=(0,i._)([(0,c.$)("esri.core.MultiOriginJSONSupport")],t),t};let I=class extends(m(s.A)){};I=(0,i._)([(0,c.$)("esri.core.MultiOriginJSONSupport")],I)},8896:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var i=r(35143),s=r(50076),o=r(77717),n=r(52394),l=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),u=r(25515),d=r(94729);let c=class extends((0,d.A)((0,o.P)(u.A))){constructor(e){super(e),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((e,t)=>{(0,n._)((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unknown layer type";e&&(r+=" "+e),t(new s.A("layer:unknown-layer-type",r,{layerType:e}))}))})))}read(e,t){super.read({resourceInfo:e},t)}write(e,t){return null}};(0,i._)([(0,l.MZ)({readOnly:!0})],c.prototype,"resourceInfo",void 0),(0,i._)([(0,l.MZ)({type:["show","hide"]})],c.prototype,"listMode",void 0),(0,i._)([(0,l.MZ)({json:{read:!1},readOnly:!0,value:"unknown"})],c.prototype,"type",void 0),c=(0,i._)([(0,a.$)("esri.layers.UnknownLayer")],c);const p=c},94729:(e,t,r)=>{r.d(t,{A:()=>E});var i=r(35143),s=r(86560),o=r(55171),n=r(3825),l=r(98773),a=r(50076),u=r(76460),d=r(30726),c=r(50346),p=r(90534),h=r(46053),g=(r(81806),r(47249),r(28379)),f=r(85842),v=r(17707),y=r(31933),_=r(65308),m=r(70652),I=r(38665),w=r(72945);const E=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,d.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new m.default({id:t.itemId,portal:null===r||void 0===r?void 0:r.portal})}writePortalItem(e,t){(null===e||void 0===e?void 0:e.id)&&(t.itemId=e.id)}async loadFromPortal(e,t){var i;if(null!==(i=this.portalItem)&&void 0!==i&&i.id)try{const{load:i}=await Promise.all([r.e(2487),r.e(3814)]).then(r.bind(r,73814));return(0,c.Te)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(s){throw(0,c.zf)(s)||u.A.getLogger(this).warn("Failed to load layer (".concat(this.title,", ").concat(this.id,") portal item (").concat(this.portalItem.id,")\n  ").concat(s)),s}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,c.QP)(e),!0))))}async setUserPrivileges(e,t){if(!s.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(r){(0,c.QP)(r)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return(0,w.It)(r);let s,n;if(i)s=r.portal.url;else try{s=await(0,y.wI)(this.url,t)}catch(l){(0,c.QP)(l)}if(!s||!(0,p.b8)(s,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;n=await(null===o.id||void 0===o.id?void 0:o.id.getCredential("".concat(s,"/sharing"),{prompt:!1,signal:e}))}catch(l){(0,c.QP)(l)}if(!n)return{features:{edit:true,fullEdit:false},content:{updateItem:false}};try{if(i?await r.reload():(r=new m.default({id:e,portal:{url:s}}),await r.load(t)),r.portal.user)return(0,w.It)(r)}catch(l){(0,c.QP)(l)}return{features:{edit:true,fullEdit:false},content:{updateItem:false}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(r){(0,c.QP)(r)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?null===o.id||void 0===o.id?void 0:o.id.findCredential(this.url):null;if(!t)return!0;const r=S.credential===t?S.user:await this._fetchEditingUser(e);return S.credential=t,S.user=r,null==(null===r||void 0===r?void 0:r.privileges)||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){var t,r;const i=null===(t=this.portalItem)||void 0===t||null===(t=t.portal)||void 0===t?void 0:t.user;if(i)return i;const s=o.id.findServerInfo(null!==(r=this.url)&&void 0!==r?r:"");if(null===s||void 0===s||!s.owningSystemUrl)return null;const a="".concat(s.owningSystemUrl,"/sharing/rest"),u=_.A.getDefault();if(u&&u.loaded&&(0,p.S8)(u.restUrl)===(0,p.S8)(a))return u.user;const d="".concat(a,"/community/self"),c=null!=e?e.signal:null,h=await(0,l.Ke)((0,n.A)(d,{authMode:"no-prompt",query:{f:"json"},signal:c}));return h.ok?I.A.fromJSON(h.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){var r;const i=null===t||void 0===t?void 0:t.portal,s=(null===(r=this.portalItem)||void 0===r?void 0:r.id)&&(this.portalItem.portal||_.A.getDefault());return i&&s&&!(0,p.ut)(s.restUrl,i.restUrl)?(t.messages&&t.messages.push(new a.A("layer:cross-portal","The layer '".concat(this.title," (").concat(this.id,")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer"),{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,h.MZ)({type:m.default})],t.prototype,"portalItem",null),(0,i._)([(0,g.w)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,v.K)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,h.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,f.$)("esri.layers.mixins.PortalLayer")],t),t},S={credential:null,user:null}},72945:(e,t,r)=>{r.d(t,{It:()=>p,LG:()=>n,OM:()=>u,Y:()=>l,bK:()=>a,mm:()=>c,sQ:()=>d});var i=r(9624),s=r(13312),o=r(45417);function n(e,t){if(!l(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function l(e,t){var r;return!(null===(r=e.typeKeywords)||void 0===r||!r.includes(t))}function a(e){return l(e,c.HOSTED_SERVICE)}function u(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}async function d(e){const t=e.clone().normalize();let r;if(t.length>1)for(const i of t)r?i.width>r.width&&(r=i):r=i;else r=t[0];return async function(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,o.ci)(e);const r=s.A.WGS84;return await(0,i.initializeProjection)(t,r),(0,i.project)(e,r)}(r)}const c={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function p(e){var t;const{portal:r,isOrgItem:i,itemControl:s}=e,o=null===(t=r.user)||void 0===t?void 0:t.privileges;let n=!o||o.includes("features:user:edit"),l=!!i&&!(null===o||void 0===o||!o.includes("features:user:fullEdit"));const a="update"===s||"admin"===s;return a?l=n=!0:l&&(n=!0),{features:{edit:n,fullEdit:l},content:{updateItem:a}}}}}]);
//# sourceMappingURL=8896.4325102c.chunk.js.map