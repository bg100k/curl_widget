"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[1853],{59784:(e,t,i)=>{i.d(t,{$:()=>g,IB:()=>a,N2:()=>v,RH:()=>w,Ws:()=>_,ZD:()=>x});var r=i(69539);i(43047),i(55855);function a(e){return"r"in e&&"g"in e&&"b"in e}function s(e){return"h"in e&&"s"in e&&"v"in e}function n(e){return"l"in e&&"a"in e&&"b"in e}function o(e){return"l"in e&&"c"in e&&"h"in e}const l=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],c=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function h(e,t){const i=[];let r,a;if(e[0].length!==t.length)throw new Error("dimensions do not match");const s=e.length,n=e[0].length;let o=0;for(r=0;r<s;r++){for(o=0,a=0;a<n;a++)o+=e[r][a]*t[a];i.push(o)}return i}function d(e){const t=[e.r/255,e.g/255,e.b/255].map((e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4)),i=h(l,t);return{x:100*i[0],y:100*i[1],z:100*i[2]}}function p(e){const t=h(c,[e.x/100,e.y/100,e.z/100]).map((e=>{const t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function u(e){const t=[e.x/95.047,e.y/100,e.z/108.883].map((e=>e>(6/29)**3?e**(1/3):1/3*(29/6)**2*e+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function m(e){const t=e.l,i=[(t+16)/116+e.a/500,(t+16)/116,(t+16)/116-e.b/200].map((e=>e>6/29?e**3:3*(6/29)**2*(e-4/29)));return{x:95.047*i[0],y:100*i[1],z:108.883*i[2]}}function y(e){return function(e){const t=e.l,i=e.a,r=e.b,a=Math.sqrt(i*i+r*r);let s=Math.atan2(r,i);return s=s>0?s:s+2*Math.PI,{l:t,c:a,h:s}}(u(d(e)))}function f(e){return p(m(function(e){const t=e.l,i=e.c,r=e.h;return{l:t,a:i*Math.cos(r),b:i*Math.sin(r)}}(e)))}function g(e){return a(e)?e:o(e)?f(e):n(e)?function(e){return p(m(e))}(e):function(e){return"x"in e&&"y"in e&&"z"in e}(e)?p(e):s(e)?function(e){const t=(e.h+360)%360/60,i=e.s/100,r=e.v/100*255,a=r*i,s=a*(1-Math.abs(t%2-1));let n;switch(Math.floor(t)){case 0:n={r:a,g:s,b:0};break;case 1:n={r:s,g:a,b:0};break;case 2:n={r:0,g:a,b:s};break;case 3:n={r:0,g:s,b:a};break;case 4:n={r:s,g:0,b:a};break;case 5:case 6:n={r:a,g:0,b:s};break;default:n={r:0,g:0,b:0}}return n.r=Math.round(n.r+r-a),n.g=Math.round(n.g+r-a),n.b=Math.round(n.b+r-a),n}(e):e}function v(e){return s(e)?e:function(e){const t=e.r,i=e.g,r=e.b,a=Math.max(t,i,r),s=a-Math.min(t,i,r);let n=a,o=0===s?0:a===t?(i-r)/s%6:a===i?(r-t)/s+2:(t-i)/s+4,l=0===s?0:s/n;return o<0&&(o+=6),o*=60,l*=100,n*=100/255,{h:o,s:l,v:n}}(g(e))}function x(e){return n(e)?e:function(e){return u(d(e))}(g(e))}function w(e){return o(e)?e:y(g(e))}function b(e){let{r:t,g:i,b:a,a:s}=e;return s<1&&(t=Math.round(s*t+255*(1-s)),i=Math.round(s*i+255*(1-s)),a=Math.round(s*a+255*(1-s))),new r.A({r:t,g:i,b:a})}function _(e,t){const{r:i,g:r,b:a}=null!==t&&void 0!==t&&t.ignoreAlpha?e:b(e);return.2126*i+.7152*r+.0722*a}var M;!function(e){e[e.Low=160]="Low",e[e.High=225]="High"}(M||(M={}))},48988:(e,t,i)=>{i.d(t,{$:()=>h});var r=i(69539),a=i(59784),s=i(53084),n=i(98976),o=i(97763),l=i(52629);const c=e=>{if(!e)return[0,0,0,0];const{r:t,g:i,b:r,a:a}=e;return[t,i,r,255*a]};class h{static findApplicableOverrides(e,t,i){if(e&&t){if(e.primitiveName){let r=!1;for(const t of i)if(t.primitiveName===e.primitiveName){r=!0;break}if(!r)for(const a of t)a.primitiveName===e.primitiveName&&i.push(a)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const r of e.effects)h.findApplicableOverrides(r,t,i);if(e.symbolLayers)for(const r of e.symbolLayers)h.findApplicableOverrides(r,t,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const r of e.effects)h.findApplicableOverrides(r,t,i);if(e.markerPlacement&&h.findApplicableOverrides(e.markerPlacement,t,i),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const r of e.markerGraphics)h.findApplicableOverrides(r,t,i),h.findApplicableOverrides(r.symbol,t,i)}else"CIMCharacterMarker"===e.type?h.findApplicableOverrides(e.symbol,t,i):"CIMHatchFill"===e.type?h.findApplicableOverrides(e.lineSymbol,t,i):"CIMPictureMarker"===e.type&&h.findApplicableOverrides(e.animatedSymbolProperties,t,i)}}}static findEffectOverrides(e,t){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,o.K3)(e),!t||!e.primitiveName)return{type:"cim-effect-info",effect:e,overrides:[]};const i=e.primitiveName,r=[];for(const a of t)a.primitiveName===i&&r.push({...a,propertyName:(0,o.YF)(a.propertyName)});return{type:"cim-effect-info",effect:e,overrides:r}}static async resolveSymbolOverrides(e,t,i,r,a,n,l){if(null===e||void 0===e||!e.symbol)return null;let{symbol:c,primitiveOverrides:d}=e;const p=!!d;if(!p&&!r)return c;c=(0,s.o8)(c),d=(0,s.o8)(d);let u=!0;if(t||(t={attributes:{}},u=!1),p){if(u||(d=d.filter((e=>{var t;return!(null!==(t=e.valueExpressionInfo)&&void 0!==t&&t.expression.includes("$feature"))}))),l||(d=d.filter((e=>{var t;return!(null!==(t=e.valueExpressionInfo)&&void 0!==t&&t.expression.includes("$view"))}))),d.length>0){const e={spatialReference:i,fields:(0,o.O2)(t.attributes),geometryType:a};await h.createRenderExpressions(d,e),h.evaluateOverrides(d,t,null!==a&&void 0!==a?a:"esriGeometryPoint",n,l)}h.applyOverrides(c,d)}return r&&h.applyDictionaryTextOverrides(c,t,r,null),c}static async createRenderExpressions(e,t){const i=[];for(const r of e){const e=r.valueExpressionInfo;if(!e||h._expressionToRenderExpression.has(e.expression))continue;const a=(0,n.Ad)(e.expression,t.spatialReference,t.fields);i.push(a),a.then((t=>h._expressionToRenderExpression.set(e.expression,t)))}i.length>0&&await Promise.all(i)}static evaluateOverrides(e,t,i,r,s){const n={$view:{scale:null===s||void 0===s?void 0:s.scale}};for(const o of e){o.value&&"object"==typeof o.value&&(0,a.IB)(o.value)&&("Color"===o.propertyName||"StrokeColor"===o.propertyName)&&(o.value=c(o.value));const e=o.valueExpressionInfo;if(!e)continue;const s=h._expressionToRenderExpression.get(e.expression);s&&(o.value=(0,l.A)(s,t,n,i,r))}}static applyDictionaryTextOverrides(e,t,i,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Normal";if(null!==e&&void 0!==e&&e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const s=e.symbolLayers;if(!s)return;for(const n of s)n&&"CIMVectorMarker"===n.type&&h.applyDictionaryTextOverrides(n,t,i,r,"CIMTextSymbol"===e.type?e.textCase:a)}break;case"CIMVectorMarker":{const a=e.markerGraphics;if(!a)return;for(const e of a)e&&h.applyDictionaryTextOverrides(e,t,i,r)}break;case"CIMMarkerGraphic":{const s=e.textString;if(s&&s.includes("[")){const n=(0,o.gQ)(s,i);e.textString=(0,o.FM)(t,n,r,a)}}}}static applyOverrides(e,t,i,r){if(e.primitiveName)for(const a of t)if(a.primitiveName===e.primitiveName){const t=(0,o.YF)(a.propertyName);if(r&&r.push({cim:e,nocapPropertyName:t,value:e[t]}),i){let t=!1;for(const r of i)r.primitiveName===e.primitiveName&&(t=!0);t||i.push(a)}null!=a.value&&(e[t]=a.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const a of e.effects)h.applyOverrides(a,t,i,r);if(e.symbolLayers)for(const a of e.symbolLayers)h.applyOverrides(a,t,i,r);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const a of e.effects)h.applyOverrides(a,t,i,r);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const a of e.markerGraphics)h.applyOverrides(a,t,i,r),h.applyOverrides(a.symbol,t,i,r)}}static restoreOverrides(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t="";for(const i of e)void 0!==i.value&&(t+="".concat(i.primitiveName).concat(i.propertyName).concat(JSON.stringify(i.value)));return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map((e=>Number(e)));if("Color"===e){const e=new r.A(t).toRgba();return e[3]*=255,e}return t}}h._expressionToRenderExpression=new Map},52629:(e,t,i)=>{i.d(t,{A:()=>n});var r=i(50076),a=i(76460),s=i(76279);function n(e,t,i,r,s){if(null==e)return null;const n=e.referencesGeometry()&&s?l(t,r,s):t,o=e.repurposeFeature(n);try{return e.evaluate({...i,$feature:o},e.services)}catch(c){return a.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const o=new Map;function l(e,t,i){const{transform:n,hasZ:l,hasM:c}=i;o.has(t)||o.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,i,r,a)=>(0,s.Tr)(i,t,e,r,a);case"esriGeometryPolygon":return(e,i,r,a)=>(0,s.$X)(i,t,e,r,a);case"esriGeometryPolyline":return(e,i,r,a)=>(0,s.P5)(i,t,e,r,a);case"esriGeometryMultipoint":return(e,i,r,a)=>(0,s.SW)(i,t,e,r,a);default:return a.A.getLogger("esri.views.2d.support.arcadeOnDemand").error(new r.A("mapview-arcade","Unable to handle geometryType: ".concat(e))),e=>e}}(t));const h=o.get(t)(e.geometry,n,l,c);return{...e,geometry:h}}},14509:(e,t,i)=>{i.d(t,{l:()=>n});var r=i(69139),a=i(61551),s=i(36201);class n extends s.A{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[r.d.bitmap],target:()=>this.children,drawPhase:a.S5.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},9092:(e,t,i)=>{i.r(t),i.d(t,{default:()=>J});var r=i(35143),a=i(39356),s=i(19276),n=i(54901),o=i(81806),l=i(68134),c=i(46053),h=i(76460),d=(i(47249),i(85842)),p=i(64519),u=i(64022),m=i(90104),y=i(45992),f=i(70822),g=i(91967),v=i(50346),x=i(52494),w=i(14509),b=i(21904),_=i(96145),M=i(4176);let P=class extends g.A{constructor(){super(...arguments),this.attached=!1,this.container=new b.m,this.updateRequested=!1,this.type="imagery",this._bitmapView=new w.l}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{(0,v.zf)(e)||h.A.getLogger(this).error(e)}))}hitTest(e){return new a.A({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new M.A({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports((async e=>{var t;const{source:i}=e;if(!i||i instanceof ImageBitmap)return;const r=await this.layer.applyRenderer({extent:i.extent,pixelBlock:null!==(t=i.originalPixelBlock)&&void 0!==t?t:i.pixelBlock});i.filter=e=>this.layer.pixelFilter?this.layer.applyFilter(e):{...r,extent:i.extent}})).catch((e=>{(0,v.zf)(e)||h.A.getLogger(this).error(e)}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),r=(0,x.LY)(i,t);return null!=r?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(e,t,i,r){var a;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const s=await this.layer.fetchImage(e,t,i,r);if(s.imageBitmap)return s.imageBitmap;const n=await this.layer.applyRenderer(s.pixelData,{signal:r.signal}),o=new _.A(n.pixelBlock,null===(a=n.extent)||void 0===a?void 0:a.clone(),s.pixelData.pixelBlock);return o.filter=e=>this.layer.applyFilter(e),o}};(0,r._)([(0,c.MZ)()],P.prototype,"attached",void 0),(0,r._)([(0,c.MZ)()],P.prototype,"container",void 0),(0,r._)([(0,c.MZ)()],P.prototype,"layer",void 0),(0,r._)([(0,c.MZ)()],P.prototype,"strategy",void 0),(0,r._)([(0,c.MZ)()],P.prototype,"timeExtent",void 0),(0,r._)([(0,c.MZ)()],P.prototype,"view",void 0),(0,r._)([(0,c.MZ)()],P.prototype,"updateRequested",void 0),(0,r._)([(0,c.MZ)()],P.prototype,"updating",null),(0,r._)([(0,c.MZ)()],P.prototype,"type",void 0),P=(0,r._)([(0,d.$)("esri.views.2d.layers.imagery.ImageryView2D")],P);const A=P;var S=i(3825),R=i(76797),C=i(80963),I=i(59844),k=i(99846),E=i(17331),T=i(61551),V=i(36201);class O extends V.A{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (vf)",brushes:[E.A],target:()=>this.children,drawPhase:T.S5.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===T.S5.MAP&&this.symbolTypes.forEach((t=>{e.renderPass=t,super.doRender(e)}))}}var D=i(86386);let F=class extends g.A{constructor(e){super(e),this._loading=null,this.update=(0,v.sg)(((e,t)=>this._update(e,t).catch((e=>{(0,v.zf)(e)||h.A.getLogger(this).error(e)}))))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:a}=e.state,s=new R.A({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:a}),[n,o]=e.state.size;this._loading=this.fetchPixels(s,n,o,i);const l=await this._loading;this._addToDisplay(l,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(null==e.pixelBlock)return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:r,pixelBlock:a}=e,s=new D.X(a);s.offset=[0,0],s.symbolizerParameters=t,s.rawPixelData=e,s.invalidateVAO(),s.x=r.xmin,s.y=r.ymax,s.pixelRatio=i.pixelRatio,s.rotation=i.rotation,s.resolution=i.resolution,s.width=a.width*t.symbolTileSize,s.height=a.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(s)}};(0,r._)([(0,c.MZ)()],F.prototype,"fetchPixels",void 0),(0,r._)([(0,c.MZ)()],F.prototype,"container",void 0),(0,r._)([(0,c.MZ)()],F.prototype,"_loading",void 0),(0,r._)([(0,c.MZ)()],F.prototype,"updating",null),F=(0,r._)([(0,d.$)("esri.views.2d.layers.imagery.ImageryVFStrategy")],F);const Z=F;let z=class extends g.A{constructor(){super(...arguments),this.attached=!1,this.container=new O,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:s}=this.layer.renderer,{extent:n,width:o,height:l}=(0,k.$Q)(e,t,i,s,a);if(null!=a&&!a.intersects(e))return{extent:n,pixelBlock:null};const c={bbox:"".concat(n.xmin,", ").concat(n.ymin,", ").concat(n.xmax,", ").concat(n.ymax),exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:s,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(c)){const e=this.getPixelData();if(null!=e&&"".concat(e.extent.xmin,", ").concat(e.extent.ymin,", ").concat(e.extent.xmax,", ").concat(e.extent.ymax)===c.bbox)return e}const{pixelData:h}=await this.layer.fetchImage(n,o,l,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=c;const d=null===h||void 0===h?void 0:h.pixelBlock;return null==d?{extent:n,pixelBlock:null}:{extent:n,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?(0,k.FI)(d,"vector-uv"):d}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new Z({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles((0,l.wB)((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),l.pc),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var e;const t=null===(e=this.container.children[0])||void 0===e?void 0:e.rawPixelData;if(this.updating||!t)return null;const{extent:i,pixelBlock:r}=t;return{extent:i,pixelBlock:r}}hitTest(e){return new a.A({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch((e=>{(0,v.zf)(e)||h.A.getLogger(this).error(e)}))}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,a=this._dataParameters.bbox===e.bbox;return t&&i&&r&&a}async _getProjectedFullExtent(e){try{return(0,I._l)(this.layer.fullExtent,e)}catch(t){try{const t=(await(0,S.A)(this.layer.url,{query:{option:"footprints",outSR:(0,C.YX)(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?R.A.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};(0,r._)([(0,c.MZ)()],z.prototype,"attached",void 0),(0,r._)([(0,c.MZ)()],z.prototype,"container",void 0),(0,r._)([(0,c.MZ)()],z.prototype,"layer",void 0),(0,r._)([(0,c.MZ)()],z.prototype,"timeExtent",void 0),(0,r._)([(0,c.MZ)()],z.prototype,"type",void 0),(0,r._)([(0,c.MZ)()],z.prototype,"view",void 0),(0,r._)([(0,c.MZ)()],z.prototype,"updating",null),z=(0,r._)([(0,d.$)("esri.views.2d.layers.imagery.VectorFieldView2D")],z);const N=z;var B=i(50076),q=i(13904),L=i(55053),G=i(97015),H=i(2257);const U=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeaturesAtLocation(e,t){const{layer:i}=this;if(!e)throw new B.A("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:r}=i,a=(0,H.D8)(i,t);if(!r||null==a)throw new B.A("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:r,popupTemplate:a});const s=await a.getRequiredFields();(0,v.Te)(t);const n=new G.A;n.timeExtent=this.timeExtent,n.geometry=e,n.outFields=s,n.outSpatialReference=e.spatialReference;const{resolution:o,spatialReference:l}=this.view,c="2d"===this.view.type?new q.A(o,o,l):new q.A(.5*o,.5*o,l),{returnTopmostRaster:h,showNoDataRecords:d}=a.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},p={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:c,showNoDataRecords:d,signal:null===t||void 0===t?void 0:t.signal};return i.queryVisibleRasters(n,p).then((e=>e))}canResume(){var e;return!!super.canResume()&&!(null!==(e=this.timeExtent)&&void 0!==e&&e.isEmpty)}};return(0,r._)([(0,c.MZ)()],t.prototype,"layer",void 0),(0,r._)([(0,c.MZ)()],t.prototype,"suspended",void 0),(0,r._)([(0,c.MZ)(L.ui)],t.prototype,"timeExtent",void 0),(0,r._)([(0,c.MZ)()],t.prototype,"view",void 0),t=(0,r._)([(0,d.$)("esri.views.layers.ImageryLayerView")],t),t};var $=i(91196),W=i(771);let j=class extends(U((0,W.A)((0,m.e)($.A)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new p.Y,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){var t;null===(t=this.subview)||void 0===t||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new y.A({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new f.A(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([(0,l.wB)((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),l.OH),(0,l.wB)((()=>this.timeExtent),(e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())}),l.OH),this.layer.on("redraw",(()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())})),(0,l.wB)((()=>this.layer.renderer),(()=>this._setSubView()))])}detach(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),null!==(e=this.subview)&&void 0!==e&&e.destroy(),this.subview=null,null!==(t=this._highlightView)&&void 0!==t&&t.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:s.A.isCollection(e)?e.at(0):e)instanceof a.A))return(0,n.hA)();let i=[];return Array.isArray(e)||s.A.isCollection(e)?i=e.map((e=>e.clone())):e instanceof a.A&&(i=[e.clone()]),this._highlightGraphics.addMany(i),(0,n.hA)((()=>this._highlightGraphics.removeMany(i)))}async doRefresh(){this.requestUpdate()}isUpdating(){var e,t;const i=!this.subview||this.subview.updating||!(null===(e=this._highlightView)||void 0===e||!e.updating);return(0,o.A)("esri-2d-log-updating")&&console.log("Updating ImageryLayerView2D (".concat(this.layer.id,"): ").concat(i,"\n-> subview ").concat(!this.subview||this.subview.updating,"\n-> higlightView ").concat(null===(t=this._highlightView)||void 0===t?void 0:t.updating,"\n")),i}_setSubView(){var e;if(!this.view)return;const t=null===(e=this.layer.renderer)||void 0===e?void 0:e.type;let i="imagery";if("vector-field"===t?i="imageryVF":"flow"===t&&(i="flow"),this.subview){var r;const{type:e}=this.subview;if(e===i)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),null===(r=this.subview)||void 0===r||r.destroy()}this.subview="imagery"===i?new A({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===i?new N({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new u.A({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){(null===e||void 0===e?void 0:e.attached)&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};(0,r._)([(0,c.MZ)()],j.prototype,"pixelData",null),(0,r._)([(0,c.MZ)()],j.prototype,"subview",void 0),j=(0,r._)([(0,d.$)("esri.views.2d.layers.ImageryLayerView2D")],j);const J=j},70822:(e,t,i)=>{i.d(t,{A:()=>c});var r=i(35143),a=(i(76460),i(81806),i(47249),i(50076),i(85842)),s=i(61551),n=i(8995),o=i(13692);let l=class extends n.f{get hasHighlight(){return this.children.some((e=>e.hasData))}renderChildren(e){this.attributeView.update(),e.drawPhase===s.S5.HIGHLIGHT&&this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),(0,o.lB)(e,!0,(e=>{this._renderChildren(e,s.RI.All)})))}};l=(0,r._)([(0,a.$)("esri.views.2d.layers.support.HighlightGraphicContainer")],l);const c=l},4176:(e,t,i)=>{i.d(t,{A:()=>S});var r=i(35143),a=i(91967),s=(i(81806),i(50346)),n=i(46053),o=(i(76460),i(47249),i(85842)),l=i(2413),c=i(80963),h=i(88235);const d=Math.PI/180;function p(e){return e*d}function u(e,t){const i=p(t.rotation),r=Math.abs(Math.cos(i)),a=Math.abs(Math.sin(i)),[s,n]=t.size;return e[0]=Math.round(n*a+s*r),e[1]=Math.round(n*r+s*a),e}var m=i(16060),y=i(40181),f=i(93453);const g=(0,l.vt)(),v=[0,0],x=new f.A(0,0,0,0),w=2048,b=2048,_=!1,M=!1,P=!1;let A=class extends a.A{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=P,this.imageMaxWidth=w,this.imageMaxHeight=b,this.imageRotationSupported=_,this.imageNormalizationSupported=M,this.update=(0,s.sg)((async(e,t)=>{var i,r;if((0,s.Te)(t),!e.stationary||this.destroyed)return;const a=e.state,n=(0,c.Vp)(a.spatialReference),o=this.hidpi?e.pixelRatio:1,l=this.imageNormalizationSupported&&a.worldScreenWidth&&a.worldScreenWidth<a.size[0],h=null!==(i=this.imageMaxWidth)&&void 0!==i?i:0,d=null!==(r=this.imageMaxHeight)&&void 0!==r?r:0;l?(v[0]=a.worldScreenWidth,v[1]=a.size[1]):this.imageRotationSupported?(v[0]=a.size[0],v[1]=a.size[1]):u(v,a);const p=Math.floor(v[0]*o)>h||Math.floor(v[1]*o)>d,m=n&&(a.extent.xmin<n.valid[0]||a.extent.xmax>n.valid[1]),y=!this.imageNormalizationSupported&&m,f=!p&&!y,g=this.imageRotationSupported?a.rotation:0,w=this.container.children.slice();if(f){const e=l?a.paddedViewState.center:a.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(a,v,e,a.resolution,g,o,t)}else{let e=Math.min(h,d);y&&(e=Math.min(a.worldScreenWidth,e)),this._imagePromise=this._tiledExport(a,e,o,t)}try{var b;const e=null!==(b=await this._imagePromise)&&void 0!==b?b:[];(0,s.Te)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of w)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(x){this._imagePromise=null,(0,s.QP)(x)}}),5e3),this.updateExports=(0,s.sg)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,s.Lx)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,r,a,n){const o=await this.fetchSource(e,Math.floor(t*a),Math.floor(i*a),{rotation:r,pixelRatio:a,signal:n});(0,s.Te)(n);const l=new m.mb(null,!0);return l.x=e.xmin,l.y=e.ymax,l.resolution=e.width/t,l.rotation=r,l.pixelRatio=a,l.opacity=0,this.container.addChild(l),await l.setSourceAsync(o,n),(0,s.Te)(n),l}async _singleExport(e,t,i,r,a,s,n){!function(e,t,i,r){const[a,s]=t,[n,o]=r,l=.5*i;e[0]=a-l*n,e[1]=s-l*o,e[2]=a+l*n,e[3]=s+l*o}(g,i,r,t);const o=(0,l.w1)(g,e.spatialReference);return[await this._export(o,t[0],t[1],a,s,n)]}_tiledExport(e,t,i,r){const a=h.A.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),s=new y.A(a),n=s.getTileCoverage(e);if(!n)return null;const o=[];return n.forEach(((a,n,c,h)=>{x.set(a,n,c,0),s.getTileBounds(g,x);const d=(0,l.w1)(g,e.spatialReference);o.push(this._export(d,t,t,0,i,r).then((e=>(0!==h&&(x.set(a,n,c,h),s.getTileBounds(g,x),e.x=g[0],e.y=g[3]),e))))})),Promise.all(o)}};(0,r._)([(0,n.MZ)()],A.prototype,"_imagePromise",void 0),(0,r._)([(0,n.MZ)()],A.prototype,"bitmaps",void 0),(0,r._)([(0,n.MZ)()],A.prototype,"container",void 0),(0,r._)([(0,n.MZ)()],A.prototype,"fetchSource",void 0),(0,r._)([(0,n.MZ)()],A.prototype,"hidpi",void 0),(0,r._)([(0,n.MZ)()],A.prototype,"imageMaxWidth",void 0),(0,r._)([(0,n.MZ)()],A.prototype,"imageMaxHeight",void 0),(0,r._)([(0,n.MZ)()],A.prototype,"imageRotationSupported",void 0),(0,r._)([(0,n.MZ)()],A.prototype,"imageNormalizationSupported",void 0),(0,r._)([(0,n.MZ)()],A.prototype,"requestUpdate",void 0),(0,r._)([(0,n.MZ)()],A.prototype,"updating",null),A=(0,r._)([(0,o.$)("esri.views.2d.layers.support.ExportStrategy")],A);const S=A}}]);
//# sourceMappingURL=1853.7bfd6cf7.chunk.js.map