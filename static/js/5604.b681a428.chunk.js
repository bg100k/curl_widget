"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[5604],{80979:(e,t,r)=>{r.d(t,{K:()=>i});const i=["operational-layers","basemap","ground"]},56287:(e,t,r)=>{r.d(t,{r:()=>l});var i=r(35143),s=r(91967),n=r(46053),o=(r(81806),r(76460),r(47249),r(85842));const a={visible:"visibleSublayers"};let l=class extends s.A{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(a[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((e=>{let{name:t}=e;return t})).map((e=>{let{name:t}=e;return t})).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=null===e||void 0===e?void 0:e.sublayers,i=[],s=e=>{const{minScale:r,maxScale:n,sublayers:o,visible:a}=e;a&&(0===t||(0===r||t<=r)&&(0===n||t>=n))&&(o?o.forEach(s):i.push(e))};return null!==r&&void 0!==r&&r.forEach(s),i}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:i,version:s}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:i?"TRUE":"FALSE",version:s,layers:t}}};(0,i._)([(0,n.MZ)()],l.prototype,"layer",null),(0,i._)([(0,n.MZ)({readOnly:!0})],l.prototype,"layers",null),(0,i._)([(0,n.MZ)({type:Number})],l.prototype,"scale",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],l.prototype,"version",null),(0,i._)([(0,n.MZ)({readOnly:!0})],l.prototype,"visibleSublayers",null),l=(0,i._)([(0,o.$)("esri.layers.support.ExportWMSImageParameters")],l)},55053:(e,t,r)=>{r.d(t,{ui:()=>b,Yj:()=>f,id:()=>M,kF:()=>c,fV:()=>y,C1:()=>I,hG:()=>E,hn:()=>S,ke:()=>v,Ih:()=>x,M6:()=>h,Qo:()=>g,Fm:()=>_,PY:()=>d,OZ:()=>m});var i=r(82111),s=r(80979),n=r(76797),o=r(13312),a=r(79453),l=(r(18690),r(53084),r(18288));var p=r(731),u=r(2183);const d={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:s.K}}},h={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},c={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:s.K}}},m={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:a.w}}},y={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:s.K}}},f={value:null,type:p.A,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:s.K}}};function g(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const w={write:{enabled:!0,layerContainerTypes:s.K},read:!0},v={type:Number,json:{origins:{"web-document":w,"portal-item":{write:!0}}}},x={...v,json:{...v.json,origins:{"web-document":{...w,write:{enabled:!0,layerContainerTypes:s.K,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>{var i;return r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?null!==(i=t.layerDefinition)&&void 0!==i&&i.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?(0,u.D)(t.layerDefinition.drawingInfo.transparency):void 0:(0,u.D)(t.drawingInfo.transparency)}}}},b={type:i.A,readOnly:!0,get(){var e,t,r;const s=null!=(null===(e=this.layer)||void 0===e?void 0:e.timeInfo)?this.layer:null!=(null===(t=this.i3slayer)||void 0===t?void 0:t.timeInfo)?this.i3slayer:null;if(null==s)return null;const{datesInUnknownTimezone:n,timeOffset:o,useViewTime:a}=s,p=null===(r=this.view)||void 0===r?void 0:r.timeExtent;let u=s.timeExtent;n&&(u=function(e){if(!e)return e;const{start:t,end:r}=e;return new i.A({start:null!=t?(0,l.S1)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=r?(0,l.S1)(r,r.getTimezoneOffset(),"minutes"):r})}(u));let d=a?p&&u?p.intersection(u):p||u:u;if(!d||d.isEmpty||d.isAllTime)return d;o&&(d=d.offset(-o.value,o.unit)),n&&(d=function(e){if(!e)return e;const{start:t,end:r}=e;return new i.A({start:null!=t?(0,l.S1)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=r?(0,l.S1)(r,-r.getTimezoneOffset(),"minutes"):r})}(d));const h=this._get("timeExtent");return d.equals(h)?h:d}},_={type:n.A,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const r=n.A.fromJSON(e);return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(r.spatialReference=o.A.fromJSON(t.spatialReference)),r}}}},read:!1}},M={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},S={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:s.K}}},name:"layerDefinition.minScale",write:!0}},E={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:s.K}}},name:"layerDefinition.maxScale",write:!0}},I={json:{write:{ignoreOrigin:!0,layerContainerTypes:s.K},origins:{"web-map":{read:!1,write:!1}}}}},3454:(e,t,r)=>{r.d(t,{j:()=>n});var i=r(31633),s=r(14556);const n={unknown:1,inches:(0,i.oU)(1,"meters","inches"),feet:(0,i.oU)(1,"meters","feet"),"us-feet":(0,i.oU)(1,"meters","us-feet"),yards:(0,i.oU)(1,"meters","yards"),miles:(0,i.oU)(1,"meters","miles"),"nautical-miles":(0,i.oU)(1,"meters","nautical-miles"),millimeters:(0,i.oU)(1,"meters","millimeters"),centimeters:(0,i.oU)(1,"meters","centimeters"),decimeters:(0,i.oU)(1,"meters","decimeters"),meters:(0,i.oU)(1,"meters","meters"),kilometers:(0,i.oU)(1,"meters","kilometers"),"decimal-degrees":1/(0,i.vl)(1,"meters",s.$O.radius)}},731:(e,t,r)=>{r.d(t,{A:()=>x});var i,s=r(35143),n=r(45802),o=r(42553),a=r(30726),l=r(46053),p=(r(81806),r(76460),r(47249),r(28379)),u=r(85842),d=r(17707),h=r(53430);let c=i=class extends o.oY{constructor(e){super(e)}async collectRequiredFields(e,t){return(0,h.Dx)(e,t,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],c.prototype,"expression",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],c.prototype,"title",void 0),c=i=(0,s._)([(0,u.$)("esri.layers.support.FeatureExpressionInfo")],c);const m=c;var y,f=r(59097);const g=(0,n.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),w=new n.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let v=y=class extends o.oY{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,i){t[r]=e.write({},i),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new y({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,a.CM)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,s._)([(0,l.MZ)({type:m,json:{write:!0}})],v.prototype,"featureExpressionInfo",void 0),(0,s._)([(0,p.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],v.prototype,"readFeatureExpressionInfo",null),(0,s._)([(0,d.K)("featureExpressionInfo",{featureExpressionInfo:{type:m},"featureExpression.value":{type:[0]}})],v.prototype,"writeFeatureExpressionInfo",null),(0,s._)([(0,l.MZ)({type:g.apiValues,nonNullable:!0,json:{type:g.jsonValues,read:g.read,write:{writer:g.write,isRequired:!0}}})],v.prototype,"mode",null),(0,s._)([(0,l.MZ)({type:Number,json:{write:!0}})],v.prototype,"offset",void 0),(0,s._)([(0,l.MZ)({type:f.KQ,json:{type:String,read:w.read,write:w.write}})],v.prototype,"unit",null),v=y=(0,s._)([(0,u.$)("esri.layers.support.ElevationInfo")],v);const x=v},59097:(e,t,r)=>{r.d(t,{Ao:()=>n,KQ:()=>o,Tg:()=>s});var i=r(3454);function s(e){return!!e&&null!=i.j[e]}function n(e){return 1/(i.j[e]||1)}const o=function(){const e=Object.keys(i.j);return e.sort(),e}()},14509:(e,t,r)=>{r.d(t,{l:()=>o});var i=r(69139),s=r(61551),n=r(36201);class o extends n.A{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[i.d.bitmap],target:()=>this.children,drawPhase:s.S5.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},55604:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var i=r(35143),s=r(76460),n=r(30726),o=r(50346),a=r(68134),l=r(46053),p=(r(81806),r(47249),r(85842)),u=r(76797),d=r(14509),h=r(90104),c=r(4176),m=r(91196),y=r(771),f=r(50076),g=r(55053),w=r(56287);const v=e=>{let t=class extends e{initialize(){this.exportImageParameters=new w.r({layer:this.layer})}destroy(){this.exportImageParameters=(0,n.pR)(this.exportImageParameters)}get exportImageVersion(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeaturesAtLocation(e,t){const{layer:r}=this;if(!e)throw new f.A("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:i}=r;if(!i)throw new f.A("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:i});const s=this.createFetchPopupFeaturesQuery(e);if(!s)return[];const{extent:n,width:a,height:l,x:p,y:u}=s;if(!(n&&a&&l))throw new f.A("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:n,width:a,height:l});const d=await r.fetchFeatureInfo(n,a,l,p,u);return(0,o.Te)(t),d}};return(0,i._)([(0,l.MZ)()],t.prototype,"exportImageParameters",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,i._)([(0,l.MZ)()],t.prototype,"layer",void 0),(0,i._)([(0,l.MZ)(g.ui)],t.prototype,"timeExtent",void 0),t=(0,i._)([(0,p.$)("esri.layers.mixins.WMSLayerView")],t),t};let x=class extends(v((0,y.A)((0,h.e)(m.A)))){constructor(){super(...arguments),this.bitmapContainer=new d.l}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{(0,o.zf)(e)||s.A.getLogger(this).error(e)}))}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new d.l,this.container.addChild(this.bitmapContainer),this.strategy=new c.A({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles((0,a.wB)((()=>this.exportImageVersion),(()=>this.requestUpdate())))}detach(){this.strategy=(0,n.pR)(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:i,y:s}=e,{spatialReference:n}=t;let o,a=0,l=0;if(r.children.some((e=>{const{width:t,height:r,resolution:p,x:d,y:h}=e,c=d+p*t,m=h-p*r;return i>=d&&i<=c&&s<=h&&s>=m&&(o=new u.A({xmin:d,ymin:m,xmax:c,ymax:h,spatialReference:n}),a=t,l=r,!0)})),!o)return null;const p=o.width/a,d=Math.round((i-o.xmin)/p),h=Math.round((o.ymax-s)/p);return{extent:o,width:a,height:l,x:d,y:h}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...i})}};(0,i._)([(0,l.MZ)()],x.prototype,"strategy",void 0),(0,i._)([(0,l.MZ)()],x.prototype,"updating",void 0),x=(0,i._)([(0,p.$)("esri.views.2d.layers.WMSLayerView2D")],x);const b=x},4176:(e,t,r)=>{r.d(t,{A:()=>I});var i=r(35143),s=r(91967),n=(r(81806),r(50346)),o=r(46053),a=(r(76460),r(47249),r(85842)),l=r(2413),p=r(80963),u=r(88235);const d=Math.PI/180;function h(e){return e*d}function c(e,t){const r=h(t.rotation),i=Math.abs(Math.cos(r)),s=Math.abs(Math.sin(r)),[n,o]=t.size;return e[0]=Math.round(o*s+n*i),e[1]=Math.round(o*i+n*s),e}var m=r(16060),y=r(40181),f=r(93453);const g=(0,l.vt)(),w=[0,0],v=new f.A(0,0,0,0),x=2048,b=2048,_=!1,M=!1,S=!1;let E=class extends s.A{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=S,this.imageMaxWidth=x,this.imageMaxHeight=b,this.imageRotationSupported=_,this.imageNormalizationSupported=M,this.update=(0,n.sg)((async(e,t)=>{var r,i;if((0,n.Te)(t),!e.stationary||this.destroyed)return;const s=e.state,o=(0,p.Vp)(s.spatialReference),a=this.hidpi?e.pixelRatio:1,l=this.imageNormalizationSupported&&s.worldScreenWidth&&s.worldScreenWidth<s.size[0],u=null!==(r=this.imageMaxWidth)&&void 0!==r?r:0,d=null!==(i=this.imageMaxHeight)&&void 0!==i?i:0;l?(w[0]=s.worldScreenWidth,w[1]=s.size[1]):this.imageRotationSupported?(w[0]=s.size[0],w[1]=s.size[1]):c(w,s);const h=Math.floor(w[0]*a)>u||Math.floor(w[1]*a)>d,m=o&&(s.extent.xmin<o.valid[0]||s.extent.xmax>o.valid[1]),y=!this.imageNormalizationSupported&&m,f=!h&&!y,g=this.imageRotationSupported?s.rotation:0,x=this.container.children.slice();if(f){const e=l?s.paddedViewState.center:s.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(s,w,e,s.resolution,g,a,t)}else{let e=Math.min(u,d);y&&(e=Math.min(s.worldScreenWidth,e)),this._imagePromise=this._tiledExport(s,e,a,t)}try{var b;const e=null!==(b=await this._imagePromise)&&void 0!==b?b:[];(0,n.Te)(t);const r=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of x)e.includes(t)||r.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)r.push(t.fadeIn());await Promise.all(r)}catch(v){this._imagePromise=null,(0,n.QP)(v)}}),5e3),this.updateExports=(0,n.sg)((async e=>{const t=[];for(const r of this.container.children){if(!r.visible||!r.stage)return;t.push(e(r).then((()=>{r.invalidateTexture(),r.requestRender()})))}this._imagePromise=(0,n.Lx)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,r,i,s,o){const a=await this.fetchSource(e,Math.floor(t*s),Math.floor(r*s),{rotation:i,pixelRatio:s,signal:o});(0,n.Te)(o);const l=new m.mb(null,!0);return l.x=e.xmin,l.y=e.ymax,l.resolution=e.width/t,l.rotation=i,l.pixelRatio=s,l.opacity=0,this.container.addChild(l),await l.setSourceAsync(a,o),(0,n.Te)(o),l}async _singleExport(e,t,r,i,s,n,o){!function(e,t,r,i){const[s,n]=t,[o,a]=i,l=.5*r;e[0]=s-l*o,e[1]=n-l*a,e[2]=s+l*o,e[3]=n+l*a}(g,r,i,t);const a=(0,l.w1)(g,e.spatialReference);return[await this._export(a,t[0],t[1],s,n,o)]}_tiledExport(e,t,r,i){const s=u.A.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),n=new y.A(s),o=n.getTileCoverage(e);if(!o)return null;const a=[];return o.forEach(((s,o,p,u)=>{v.set(s,o,p,0),n.getTileBounds(g,v);const d=(0,l.w1)(g,e.spatialReference);a.push(this._export(d,t,t,0,r,i).then((e=>(0!==u&&(v.set(s,o,p,u),n.getTileBounds(g,v),e.x=g[0],e.y=g[3]),e))))})),Promise.all(a)}};(0,i._)([(0,o.MZ)()],E.prototype,"_imagePromise",void 0),(0,i._)([(0,o.MZ)()],E.prototype,"bitmaps",void 0),(0,i._)([(0,o.MZ)()],E.prototype,"container",void 0),(0,i._)([(0,o.MZ)()],E.prototype,"fetchSource",void 0),(0,i._)([(0,o.MZ)()],E.prototype,"hidpi",void 0),(0,i._)([(0,o.MZ)()],E.prototype,"imageMaxWidth",void 0),(0,i._)([(0,o.MZ)()],E.prototype,"imageMaxHeight",void 0),(0,i._)([(0,o.MZ)()],E.prototype,"imageRotationSupported",void 0),(0,i._)([(0,o.MZ)()],E.prototype,"imageNormalizationSupported",void 0),(0,i._)([(0,o.MZ)()],E.prototype,"requestUpdate",void 0),(0,i._)([(0,o.MZ)()],E.prototype,"updating",null),E=(0,i._)([(0,a.$)("esri.views.2d.layers.support.ExportStrategy")],E);const I=E},771:(e,t,r)=>{r.d(t,{A:()=>l});var i=r(35143),s=r(76460),n=r(50346),o=r(68134),a=(r(81806),r(47249),r(50076),r(85842));const l=e=>{let t=class extends e{initialize(){this.addHandles((0,o.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.zf)(e)||s.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,i._)([(0,a.$)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=5604.b681a428.chunk.js.map