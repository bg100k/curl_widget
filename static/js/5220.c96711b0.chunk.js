"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[5220],{43047:(e,t,o)=>{o.d(t,{a:()=>v,b:()=>i,c:()=>n,d:()=>f,e:()=>A,f:()=>p,g:()=>l,h:()=>m,i:()=>y,j:()=>h,l:()=>g,n:()=>b,s:()=>s,t:()=>w});var r=o(53494);function n(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function i(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function s(e,t,o,r,n){return e[0]=t,e[1]=o,e[2]=r,e[3]=n,e}function l(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e[3]=t[3]+o[3],e}function a(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e[3]=t[3]-o[3],e}function u(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e[3]=t[3]*o[3],e}function c(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e[3]=t[3]/o[3],e}function f(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o,e}function d(e,t){const o=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2],i=t[3]-e[3];return Math.sqrt(o*o+r*r+n*n+i*i)}function p(e,t){const o=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2],i=t[3]-e[3];return o*o+r*r+n*n+i*i}function y(e){const t=e[0],o=e[1],r=e[2],n=e[3];return Math.sqrt(t*t+o*o+r*r+n*n)}function h(e){const t=e[0],o=e[1],r=e[2],n=e[3];return t*t+o*o+r*r+n*n}function b(e,t){const o=t[0],r=t[1],n=t[2],i=t[3];let s=o*o+r*r+n*n+i*i;return s>0&&(s=1/Math.sqrt(s),e[0]=o*s,e[1]=r*s,e[2]=n*s,e[3]=i*s),e}function m(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function g(e,t,o,r){const n=t[0],i=t[1],s=t[2],l=t[3];return e[0]=n+r*(o[0]-n),e[1]=i+r*(o[1]-i),e[2]=s+r*(o[2]-s),e[3]=l+r*(o[3]-l),e}function w(e,t,o){const r=t[0],n=t[1],i=t[2],s=t[3];return e[0]=o[0]*r+o[4]*n+o[8]*i+o[12]*s,e[1]=o[1]*r+o[5]*n+o[9]*i+o[13]*s,e[2]=o[2]*r+o[6]*n+o[10]*i+o[14]*s,e[3]=o[3]*r+o[7]*n+o[11]*i+o[15]*s,e}function v(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function A(e,t){const o=e[0],n=e[1],i=e[2],s=e[3],l=t[0],a=t[1],u=t[2],c=t[3],f=(0,r.FD)();return Math.abs(o-l)<=f*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(n-a)<=f*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(i-u)<=f*Math.max(1,Math.abs(i),Math.abs(u))&&Math.abs(s-c)<=f*Math.max(1,Math.abs(s),Math.abs(c))}const M=a,C=u,T=c,_=d,U=p,I=y,x=h;Object.freeze(Object.defineProperty({__proto__:null,add:l,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},copy:n,copyVec3:i,dist:_,distance:d,div:T,divide:c,dot:m,equals:A,exactEquals:v,floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},len:I,length:y,lerp:g,max:function(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e[3]=Math.max(t[3],o[3]),e},min:function(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e[3]=Math.min(t[3],o[3]),e},mul:C,multiply:u,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},normalize:b,random:function(e,t){const o=r.Ov;let n,i,s,l,a,u;t=t||1;do{n=2*o()-1,i=2*o()-1,a=n*n+i*i}while(a>=1);do{s=2*o()-1,l=2*o()-1,u=s*s+l*l}while(u>=1);const c=Math.sqrt((1-a)/u);return e[0]=t*n,e[1]=t*i,e[2]=t*s*c,e[3]=t*l*c,e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:f,scaleAndAdd:function(e,t,o,r){return e[0]=t[0]+o[0]*r,e[1]=t[1]+o[1]*r,e[2]=t[2]+o[2]*r,e[3]=t[3]+o[3]*r,e},set:s,sqrDist:U,sqrLen:x,squaredDistance:p,squaredLength:h,str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},sub:M,subtract:a,transformMat4:w,transformQuat:function(e,t,o){const r=t[0],n=t[1],i=t[2],s=o[0],l=o[1],a=o[2],u=o[3],c=u*r+l*i-a*n,f=u*n+a*r-s*i,d=u*i+s*n-l*r,p=-s*r-l*n-a*i;return e[0]=c*u+p*-s+f*-a-d*-l,e[1]=f*u+p*-l+d*-s-c*-a,e[2]=d*u+p*-a+c*-l-f*-s,e[3]=t[3],e}},Symbol.toStringTag,{value:"Module"}))},83755:(e,t,o)=>{function r(){return new Float32Array(3)}function n(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function i(e,t,o){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=o,r}function s(){return r()}function l(){return i(1,1,1)}function a(){return i(1,0,0)}function u(){return i(0,1,0)}function c(){return i(0,0,1)}o.d(t,{fA:()=>i,o8:()=>n,vt:()=>r});const f=s(),d=l(),p=a(),y=u(),h=c();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_X:p,UNIT_Y:y,UNIT_Z:h,ZEROS:f,clone:n,create:r,createView:function(e,t){return new Float32Array(e,t,3)},fromValues:i,ones:l,unitX:a,unitY:u,unitZ:c,zeros:s},Symbol.toStringTag,{value:"Module"}))},55855:(e,t,o)=>{function r(){return[0,0,0,0]}function n(e){return[e[0],e[1],e[2],e[3]]}function i(e,t,o,r){return[e,t,o,r]}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0,0];const o=Math.min(4,e.length);for(let r=0;r<o;++r)t[r]=e[r];return t}function l(){return[0,0,0,0]}function a(){return i(1,1,1,1)}function u(){return i(1,0,0,0)}function c(){return i(0,1,0,0)}function f(){return i(0,0,1,0)}function d(){return i(0,0,0,1)}o.d(t,{Un:()=>y,ci:()=>s,fA:()=>i,o8:()=>n,uY:()=>p,vt:()=>r});const p=[0,0,0,0],y=a(),h=u(),b=c(),m=f(),g=d();Object.freeze(Object.defineProperty({__proto__:null,ONES:y,UNIT_W:g,UNIT_X:h,UNIT_Y:b,UNIT_Z:m,ZEROS:p,clone:n,create:r,createView:function(e,t){return new Float64Array(e,t,4)},fromArray:s,fromValues:i,ones:a,unitW:d,unitX:u,unitY:c,unitZ:f,zeros:l},Symbol.toStringTag,{value:"Module"}))},90975:(e,t,o)=>{o.d(t,{A:()=>g});var r,n=o(35143),i=o(53084),s=o(46053),l=(o(81806),o(76460),o(6409)),a=o(85842),u=o(120),c=o(71006),f=o(69539),d=o(42553),p=o(40565);let y=r=class extends d.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,i.o8)(this.color)})}};(0,n._)([(0,s.MZ)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,n._)([(0,s.MZ)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,n._)([(0,s.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],y.prototype,"minValue",void 0),(0,n._)([(0,s.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],y.prototype,"maxValue",void 0),(0,n._)([(0,s.MZ)({type:f.A,json:{type:[p.jz],write:!0}})],y.prototype,"color",void 0),y=r=(0,n._)([(0,a.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],y);const h=y;var b;let m=b=class extends u.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new b({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,i.o8)(this.colorClassBreakInfos),legendOptions:(0,i.o8)(this.legendOptions)})}};(0,n._)([(0,l.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],m.prototype,"type",void 0),(0,n._)([(0,s.MZ)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,n._)([(0,s.MZ)({type:c.q,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,n._)([(0,s.MZ)({type:u.A.fieldTransformTypeKebabDict.apiValues,json:{type:u.A.fieldTransformTypeKebabDict.jsonValues,read:u.A.fieldTransformTypeKebabDict.read,write:u.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.MZ)({type:[h],json:{write:!0}})],m.prototype,"colorClassBreakInfos",void 0),m=b=(0,n._)([(0,a.$)("esri.renderers.PointCloudClassBreaksRenderer")],m);const g=m},120:(e,t,o)=>{o.d(t,{A:()=>T});var r,n=o(35143),i=o(45802),s=o(42553),l=o(53084),a=o(46053),u=(o(81806),o(76460),o(85842));o(47249);let c=r=class extends s.oY{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,n._)([(0,a.MZ)({type:String,json:{write:!0}})],c.prototype,"field",void 0),(0,n._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"minValue",void 0),(0,n._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"maxValue",void 0),c=r=(0,n._)([(0,u.$)("esri.renderers.support.pointCloud.ColorModulation")],c);const f=c,d=new i.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let p=class extends s.oY{};(0,n._)([(0,a.MZ)({type:d.apiValues,readOnly:!0,nonNullable:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],p.prototype,"type",void 0),p=(0,n._)([(0,u.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],p);const y=p;var h,b=o(6409);let m=h=class extends y{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new h({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,n._)([(0,b.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),(0,n._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"size",void 0),(0,n._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0),m=h=(0,n._)([(0,u.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m);const g=m;var w;let v=w=class extends y{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new w({scaleFactor:this.scaleFactor})}};(0,n._)([(0,b.e)({pointCloudSplatAlgorithm:"splat"})],v.prototype,"type",void 0),(0,n._)([(0,a.MZ)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],v.prototype,"scaleFactor",void 0),v=w=(0,n._)([(0,u.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],v);const A={key:"type",base:y,typeMap:{"fixed-size":g,splat:v}},M=(0,i.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let C=class extends s.oY{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.o8)(this.pointSizeAlgorithm),colorModulation:(0,l.o8)(this.colorModulation),pointsPerInch:(0,l.o8)(this.pointsPerInch)}}};(0,n._)([(0,a.MZ)({type:M.apiValues,readOnly:!0,nonNullable:!0,json:{type:M.jsonValues,read:!1,write:M.write}})],C.prototype,"type",void 0),(0,n._)([(0,a.MZ)({types:A,json:{write:!0}})],C.prototype,"pointSizeAlgorithm",void 0),(0,n._)([(0,a.MZ)({type:f,json:{write:!0}})],C.prototype,"colorModulation",void 0),(0,n._)([(0,a.MZ)({json:{write:!0},nonNullable:!0,type:Number})],C.prototype,"pointsPerInch",void 0),C=(0,n._)([(0,u.$)("esri.renderers.PointCloudRenderer")],C),(C||(C={})).fieldTransformTypeKebabDict=new i.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const T=C},42600:(e,t,o)=>{o.d(t,{A:()=>p});var r,n=o(35143),i=o(53084),s=o(46053),l=(o(81806),o(76460),o(6409)),a=o(85842),u=o(120),c=o(71006),f=o(77718);let d=r=class extends u.A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,i.o8)(this.field),fieldTransformType:(0,i.o8)(this.fieldTransformType),stops:(0,i.o8)(this.stops),legendOptions:(0,i.o8)(this.legendOptions)})}};(0,n._)([(0,l.e)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),(0,n._)([(0,s.MZ)({json:{write:!0},type:String})],d.prototype,"field",void 0),(0,n._)([(0,s.MZ)({type:c.q,json:{write:!0}})],d.prototype,"legendOptions",void 0),(0,n._)([(0,s.MZ)({type:u.A.fieldTransformTypeKebabDict.apiValues,json:{type:u.A.fieldTransformTypeKebabDict.jsonValues,read:u.A.fieldTransformTypeKebabDict.read,write:u.A.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.MZ)({type:[f.A],json:{write:!0}})],d.prototype,"stops",void 0),d=r=(0,n._)([(0,a.$)("esri.renderers.PointCloudStretchRenderer")],d);const p=d},64724:(e,t,o)=>{o.d(t,{A:()=>g});var r,n=o(35143),i=o(53084),s=o(46053),l=(o(81806),o(76460),o(6409)),a=o(85842),u=o(120),c=o(71006),f=o(69539),d=o(42553),p=o(40565);let y=r=class extends d.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,i.o8)(this.values),color:(0,i.o8)(this.color)})}};(0,n._)([(0,s.MZ)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,n._)([(0,s.MZ)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,n._)([(0,s.MZ)({type:[String],json:{write:!0}})],y.prototype,"values",void 0),(0,n._)([(0,s.MZ)({type:f.A,json:{type:[p.jz],write:!0}})],y.prototype,"color",void 0),y=r=(0,n._)([(0,a.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);const h=y;var b;let m=b=class extends u.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new b({...this.cloneProperties(),field:(0,i.o8)(this.field),fieldTransformType:(0,i.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,i.o8)(this.colorUniqueValueInfos),legendOptions:(0,i.o8)(this.legendOptions)})}};(0,n._)([(0,l.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],m.prototype,"type",void 0),(0,n._)([(0,s.MZ)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,n._)([(0,s.MZ)({type:u.A.fieldTransformTypeKebabDict.apiValues,json:{type:u.A.fieldTransformTypeKebabDict.jsonValues,read:u.A.fieldTransformTypeKebabDict.read,write:u.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.MZ)({type:[h],json:{write:!0}})],m.prototype,"colorUniqueValueInfos",void 0),(0,n._)([(0,s.MZ)({type:c.q,json:{write:!0}})],m.prototype,"legendOptions",void 0),m=b=(0,n._)([(0,a.$)("esri.renderers.PointCloudUniqueValueRenderer")],m);const g=m},71006:(e,t,o)=>{o.d(t,{q:()=>a});var r,n=o(35143),i=o(42553),s=o(46053),l=(o(81806),o(76460),o(47249),o(85842));let a=r=class extends i.oY{constructor(){super(...arguments),this.title=null}clone(){return new r({title:this.title})}};(0,n._)([(0,s.MZ)({type:String,json:{write:!0}})],a.prototype,"title",void 0),a=r=(0,n._)([(0,l.$)("esri.renderers.support.LegendOptions")],a)},77718:(e,t,o)=>{o.d(t,{A:()=>d});var r,n=o(35143),i=o(69539),s=o(42553),l=o(46053),a=o(40565),u=(o(47249),o(81806),o(85842)),c=o(17707);let f=r=class extends s.oY{constructor(e){super(e),this.color=null,this.label=null,this.value=null}writeValue(e,t,o){t[o]=null!==e&&void 0!==e?e:0}clone(){return new r({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};(0,n._)([(0,l.MZ)({type:i.A,json:{type:[a.jz],write:!0}})],f.prototype,"color",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],f.prototype,"label",void 0),(0,n._)([(0,l.MZ)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],f.prototype,"value",void 0),(0,n._)([(0,c.K)("value")],f.prototype,"writeValue",null),f=r=(0,n._)([(0,u.$)("esri.renderers.visualVariables.support.ColorStop")],f);const d=f},94116:(e,t,o)=>{o.r(t),o.d(t,{default:()=>M});var r=o(18690),n=o(78393),i=o(60008),s=o(4336),l=o(20664),a=o(83755),u=o(13312),c=o(45308),f=(o(81806),o(90975)),d=o(42600),p=o(64724),y=o(62562),h=o(87041);function b(e,t,o){return null!==e&&void 0!==e&&e.attributeInfo.useElevation?t?function(e,t){const o=new Float64Array(t);for(let r=0;r<t;r++)o[r]=e[3*r+2];return o}(t,o):null:null!==e&&void 0!==e&&e.attributeInfo.storageInfo?(0,y.m0)(e.attributeInfo.storageInfo,e.buffer,o):null}function m(e){switch(e){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function g(e){let t=0;for(const o of e||[])t|=1<<o;return t}var w=o(59231);class v{transform(e){const t=this._transform(e),o=[t.points.buffer,t.rgb.buffer];null!=t.pointIdFilterMap&&o.push(t.pointIdFilterMap.buffer);for(const r of t.attributes)"buffer"in r.values&&(0,n.mw)(r.values.buffer)&&r.values.buffer!==t.rgb.buffer&&o.push(r.values.buffer);return Promise.resolve({result:t,transferList:o})}_transform(e){const t=function(e,t){if(null==e.encoding||""===e.encoding){const o=(0,y.wH)(t,e);if(null==o.vertexAttributes.position)return;const r=(0,y.MA)(t,o.vertexAttributes.position),n=o.header.fields,i=[n.offsetX,n.offsetY,n.offsetZ],s=[n.scaleX,n.scaleY,n.scaleZ],l=r.length/3,a=new Float64Array(3*l);for(let e=0;e<l;e++)a[3*e]=r[3*e]*s[0]+i[0],a[3*e+1]=r[3*e+1]*s[1]+i[1],a[3*e+2]=r[3*e+2]*s[2]+i[2];return a}if("lepcc-xyz"===e.encoding)return(0,h.Me)(t).result}(e.schema,e.geometryBuffer);let o=t.length/3,n=null;const i=new Array,s=b(e.primaryAttributeData,t,o);null!=e.primaryAttributeData&&s&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:s});const l=b(e.modulationAttributeData,t,o);null!=e.modulationAttributeData&&l&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:l});let a=function(e,t,o,r){var n;const{rendererJSON:i,isRGBRenderer:s}=e;let l=null,a=null;if(t&&s)l=t;else if(t&&"pointCloudUniqueValueRenderer"===(null===i||void 0===i?void 0:i.type)){a=p.A.fromJSON(i);const e=a.colorUniqueValueInfos;l=new Uint8Array(3*r);const o=m(a.fieldTransformType);for(let n=0;n<r;n++){const r=(o?o(t[n]):t[n])+"";for(let t=0;t<e.length;t++)if(e[t].values.includes(r)){l[3*n]=e[t].color.r,l[3*n+1]=e[t].color.g,l[3*n+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===(null===i||void 0===i?void 0:i.type)){a=d.A.fromJSON(i);const e=a.stops;l=new Uint8Array(3*r);const o=m(a.fieldTransformType);for(let n=0;n<r;n++){const r=o?o(t[n]):t[n],i=e.length-1;if(r<e[0].value)l[3*n]=e[0].color.r,l[3*n+1]=e[0].color.g,l[3*n+2]=e[0].color.b;else if(r>=e[i].value)l[3*n]=e[i].color.r,l[3*n+1]=e[i].color.g,l[3*n+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(r<e[t].value){const o=(r-e[t-1].value)/(e[t].value-e[t-1].value);l[3*n]=e[t].color.r*o+e[t-1].color.r*(1-o),l[3*n+1]=e[t].color.g*o+e[t-1].color.g*(1-o),l[3*n+2]=e[t].color.b*o+e[t-1].color.b*(1-o);break}}}else if(t&&"pointCloudClassBreaksRenderer"===(null===i||void 0===i?void 0:i.type)){a=f.A.fromJSON(i);const e=a.colorClassBreakInfos;l=new Uint8Array(3*r);const o=m(a.fieldTransformType);for(let n=0;n<r;n++){const r=o?o(t[n]):t[n];for(let t=0;t<e.length;t++)if(r>=e[t].minValue&&r<=e[t].maxValue){l[3*n]=e[t].color.r,l[3*n+1]=e[t].color.g,l[3*n+2]=e[t].color.b;break}}}else l=new Uint8Array(3*r).fill(255);if(o&&null!==(n=a)&&void 0!==n&&n.colorModulation){const e=a.colorModulation.minValue,t=a.colorModulation.maxValue,n=.3;for(let i=0;i<r;i++){const r=o[i],s=r>=t?1:r<=e?n:n+(1-n)*(r-e)/(t-e);l[3*i]=s*l[3*i],l[3*i+1]=s*l[3*i+1],l[3*i+2]=s*l[3*i+2]}}return l}(e.rendererInfo,s,l,o);if(e.filterInfo&&e.filterInfo.length>0&&null!=e.filterAttributesData){const s=e.filterAttributesData.filter(r.Ru).map((e=>{const r=b(e,t,o),n={attributeInfo:e.attributeInfo,values:r};return i.push(n),n}));n=new Uint32Array(o),o=function(e,t,o,r,n){const i=e.length/3;let s=0;for(let l=0;l<i;l++){let i=!0;for(let e=0;e<r.length&&i;e++){const{filterJSON:t}=r[e],o=n[e].values[l];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;t.values.includes(o)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=g(t.requiredSetBits),r=g(t.requiredClearBits);(o&e)===e&&0==(o&r)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&o,r=o>>>4&15,n=r>1,s=1===e,l=e===r;let a=!1;for(const o of t.includedReturns)if("last"===o&&l||"firstOfMany"===o&&s&&n||"lastOfMany"===o&&l&&n||"single"===o&&!n){a=!0;break}a||(i=!1);break}}}i&&(o[s]=l,e[3*s]=e[3*l],e[3*s+1]=e[3*l+1],e[3*s+2]=e[3*l+2],t[3*s]=t[3*l],t[3*s+1]=t[3*l+1],t[3*s+2]=t[3*l+2],s++)}return s}(t,a,n,e.filterInfo,s)}for(const r of e.userAttributesData){const e=b(r,t,o);i.push({attributeInfo:r.attributeInfo,values:e})}3*o<a.length&&(a=new Uint8Array(a.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(t,o,e.elevationOffset);const c=this._transformCoordinates(t,o,w.ab.fromData(e.obbData),u.A.fromJSON(e.inSR),u.A.fromJSON(e.outSR));return{obbData:e.obbData,points:c,rgb:a,attributes:i,pointIdFilterMap:n}}_transformCoordinates(e,t,o,r,n){if(!(0,c.projectBuffer)(e,r,0,e,n,0,t))throw new Error("Can't reproject");const s=(0,a.o8)(o.center),u=(0,a.vt)(),f=(0,a.vt)(),d=(0,a.o8)(o.halfSize);(0,i.Xr)(A,o.quaternion);const p=new Float32Array(3*t);for(let i=0;i<t;i++){let t=3*i;u[0]=e[t]-s[0],u[1]=e[t+1]-s[1],u[2]=e[t+2]-s[2],(0,l.r)(f,u,A),d[0]=Math.max(d[0],Math.abs(f[0])),d[1]=Math.max(d[1],Math.abs(f[1])),d[2]=Math.max(d[2],Math.abs(f[2])),p[t++]=u[0],p[t++]=u[1],p[t]=u[2]}return o.halfSize=d,p}_applyElevationOffsetInPlace(e,t,o){if(0!==o)for(let r=0;r<t;r++)e[3*r+2]+=o}}const A=(0,s.vt)();function M(){return new v}},62562:(e,t,o)=>{o.d(t,{MA:()=>d,m0:()=>g,qs:()=>b,wH:()=>h});var r=o(50076),n=o(53084),i=o(76460),s=o(87041),l=o(66470);const a=()=>i.A.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function u(e,t,o){let n="",i=0;for(;i<o;){const s=e[t+i];if(s<128)n+=String.fromCharCode(s),i++;else if(s>=192&&s<224){if(i+1>=o)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const l=(31&s)<<6|63&e[t+i+1];n+=String.fromCharCode(l),i+=2}else if(s>=224&&s<240){if(i+2>=o)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const l=(15&s)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];n+=String.fromCharCode(l),i+=3}else{if(!(s>=240&&s<248))throw new r.A("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=o)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const l=(7&s)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(l>=65536){const e=55296+(l-65536>>10),t=56320+(1023&l);n+=String.fromCharCode(e,t)}else n+=String.fromCharCode(l);i+=4}}}return n}function c(e,t){const o={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let n=0;n<t.length;n++){const i=t[n],s=i.valueType||i.type,l=v[s];o.fields[i.property]=l(e,r),r+=w[s].BYTES_PER_ELEMENT}return o.byteCount=r,o}function f(e,t,o){const n=[];let i,s,l=0;for(s=0;s<e;s+=1){if(i=t[s],i>0){if(n.push(u(o,l,i-1)),0!==o[l+i-1])throw new r.A("string-array-error","Invalid string array: missing null termination.")}else n.push(null);l+=i}return n}function d(e,t){return new(0,w[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function p(e,t,o){const i=null!=t.header?c(e,t.header):{byteOffset:0,byteCount:0,fields:{count:o}},s={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let l=i.byteCount;for(let c=0;c<t.ordering.length;c++){var a,u;const e=t.ordering[c],o=(0,n.o8)(t[e]);if(o.count=null!==(a=i.fields.count)&&void 0!==a?a:0,"String"===o.valueType){if(o.byteOffset=l,o.byteCount=i.fields[e+"ByteCount"],"UTF-8"!==o.encoding)throw new r.A("unsupported-encoding","Unsupported String encoding.",{encoding:o.encoding});if(o.timeEncoding&&"ECMA_ISO8601"!==o.timeEncoding)throw new r.A("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:o.timeEncoding})}else{if(!A(o.valueType))throw new r.A("unsupported-value-type","Unsupported binary valueType",{valueType:o.valueType});{const e=M(o.valueType);l+=l%e!=0?e-l%e:0,o.byteOffset=l,o.byteCount=e*o.valuesPerElement*o.count}}l+=null!==(u=o.byteCount)&&void 0!==u?u:0,s.entries[e]=o}return s.byteCount=l-s.byteOffset,s}function y(e,t,o){if(t!==e&&a().error("Invalid ".concat(o," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new r.A("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function h(e,t){const o=c(e,t&&t.header);let r=o.byteCount;const n={isDraco:!1,header:o,byteOffset:o.byteCount,byteCount:0,vertexAttributes:{}},i=o.fields,s=null!=i.vertexCount?i.vertexCount:i.count;for(const u of t.ordering){if(!t.vertexAttributes[u])continue;const e={...t.vertexAttributes[u],byteOffset:r,count:s},o=m[u]||"_"+u;n.vertexAttributes[o]=e,r+=M(e.valueType)*e.valuesPerElement*s}const l=i.faceCount;if(t.faces&&l){n.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const o={...t.faces[e],byteOffset:r,count:l};n.faces[e]=o,r+=M(o.valueType)*o.valuesPerElement*l}}const a=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&a){n.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const o={...t.featureAttributes[e],byteOffset:r,count:a};n.featureAttributes[e]=o,r+=("UInt64"===o.valueType?8:M(o.valueType))*o.valuesPerElement*a}}return y(r,e.byteLength,"geometry"),n.byteCount=r-n.byteOffset,n}function b(e,t){return e&&e.compressedAttributes&&"draco"===e.compressedAttributes.encoding?function(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const o of e)switch(o){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}(e.compressedAttributes.attributes):e?function(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}(e):function(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const o of e.ordering)if(e.vertexAttributes[o])switch(o){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}(t)}const m={position:l.r.POSITION,normal:l.r.NORMAL,color:l.r.COLOR,uv0:l.r.UV0,region:l.r.UVREGION};function g(e,t,o){if("lepcc-rgb"===e.encoding)return(0,s.mb)(t);if("lepcc-intensity"===e.encoding)return(0,s.Ax)(t);if(null!=e.encoding&&""!==e.encoding)throw new r.A("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(a().warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(a().warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const n=p(t,e,o);y(n.byteOffset+n.byteCount,t.byteLength,"attribute");const i=n.entries.attributeValues||n.entries.objectIds;if(i){if("String"===i.valueType){const e=n.entries.attributeByteCounts,o=d(t,e),r=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,i);return i.timeEncoding?function(e,t,o){return f(e,t,o).map((e=>{const t=e?Date.parse(e):null;return t&&!Number.isNaN(t)?t:null}))}(e.count,o,r):f(e.count,o,r)}return d(t,i)}throw new r.A("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const w={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},v={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function A(e){return w.hasOwnProperty(e)}function M(e){return A(e)?w[e].BYTES_PER_ELEMENT:0}},87041:(e,t,o)=>{o.d(t,{Ax:()=>m,Me:()=>u,mb:()=>y});var r=o(50076);const n=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function s(e,t,o){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,o+i.identifierOffset,i.identifierLength)),version:t.getUint16(o+i.versionOffset,n),checksum:t.getUint32(o+i.checksumOffset,n)}}const l={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function a(e,t){return{sizeLo:e.getUint32(t+l.sizeLo,n),sizeHi:e.getUint32(t+l.sizeHi,n),minX:e.getFloat64(t+l.minX,n),minY:e.getFloat64(t+l.minY,n),minZ:e.getFloat64(t+l.minZ,n),maxX:e.getFloat64(t+l.maxX,n),maxY:e.getFloat64(t+l.maxY,n),maxZ:e.getFloat64(t+l.maxZ,n),errorX:e.getFloat64(t+l.errorX,n),errorY:e.getFloat64(t+l.errorY,n),errorZ:e.getFloat64(t+l.errorZ,n),count:e.getUint32(t+l.count,n),reserved:e.getUint32(t+l.reserved,n)}}function u(e){const t=new DataView(e,0);let o=0;const{identifier:n,version:u}=s(e,t,o);if(o+=i.byteCount,"LEPCC     "!==n)throw new r.A("lepcc-decode-error","Bad identifier");if(u>1)throw new r.A("lepcc-decode-error","Unknown version");const f=a(t,o);if(o+=l.byteCount,f.sizeHi*2**32+f.sizeLo!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const d=new Float64Array(3*f.count),p=[],y=[],h=[],b=[];if(o=c(e,o,p),o=c(e,o,y),o=c(e,o,h),o=c(e,o,b),o!==e.byteLength)throw new r.A("lepcc-decode-error","Bad length");let m=0,g=0;for(let r=0;r<p.length;r++){g+=p[r];let e=0;for(let t=0;t<y[r];t++){e+=h[m];const t=b[m];d[3*m]=Math.min(f.maxX,f.minX+2*f.errorX*e),d[3*m+1]=Math.min(f.maxY,f.minY+2*f.errorY*g),d[3*m+2]=Math.min(f.maxZ,f.minZ+2*f.errorZ*t),m++}}return{errorX:f.errorX,errorY:f.errorY,errorZ:f.errorZ,result:d}}function c(e,t,o){const r=[];t=f(e,t,r);const n=[];for(let i=0;i<r.length;i++){n.length=0,t=f(e,t,n);for(let e=0;e<n.length;e++)o.push(n[e]+r[i])}return t}function f(e,t,o){const i=new DataView(e,t),s=i.getUint8(0),l=31&s,a=!!(32&s),u=(192&s)>>6;let c=0;if(0===u)c=i.getUint32(1,n),t+=5;else if(1===u)c=i.getUint16(1,n),t+=3;else{if(2!==u)throw new r.A("lepcc-decode-error","Bad count type");c=i.getUint8(1),t+=2}if(a)throw new r.A("lepcc-decode-error","LUT not implemented");const f=Math.ceil(c*l/8),d=new Uint8Array(e,t,f);let p=0,y=0,h=0;const b=-1>>>32-l;for(let r=0;r<c;r++){for(;y<l;)p|=d[h]<<y,y+=8,h+=1;o[r]=p&b,p>>>=l,y-=l,y+l>32&&(p|=d[h-1]>>8-y)}return t+h}const d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function p(e,t){return{sizeLo:e.getUint32(t+d.sizeLo,n),sizeHi:e.getUint32(t+d.sizeHi,n),count:e.getUint32(t+d.count,n),colorMapCount:e.getUint16(t+d.colorMapCount,n),lookupMethod:e.getUint8(t+d.lookupMethod),compressionMethod:e.getUint8(t+d.compressionMethod)}}function y(e){const t=new DataView(e,0);let o=0;const{identifier:n,version:l}=s(e,t,o);if(o+=i.byteCount,"ClusterRGB"!==n)throw new r.A("lepcc-decode-error","Bad identifier");if(l>1)throw new r.A("lepcc-decode-error","Unknown version");const a=p(t,o);if(o+=d.byteCount,a.sizeHi*2**32+a.sizeLo!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");if((2===a.lookupMethod||1===a.lookupMethod)&&0===a.compressionMethod){if(3*a.colorMapCount+a.count+o!==e.byteLength||a.colorMapCount>256)throw new r.A("lepcc-decode-error","Bad count");const t=new Uint8Array(e,o,3*a.colorMapCount),n=new Uint8Array(e,o+3*a.colorMapCount,a.count),i=new Uint8Array(3*a.count);for(let e=0;e<a.count;e++){const o=n[e];i[3*e]=t[3*o],i[3*e+1]=t[3*o+1],i[3*e+2]=t[3*o+2]}return i}if(0===a.lookupMethod&&0===a.compressionMethod){if(3*a.count+o!==e.byteLength||0!==a.colorMapCount)throw new r.A("lepcc-decode-error","Bad count");return new Uint8Array(e,o).slice()}if(a.lookupMethod<=2&&1===a.compressionMethod){if(o+3!==e.byteLength||1!==a.colorMapCount)throw new r.A("lepcc-decode-error","Bad count");const n=t.getUint8(o),i=t.getUint8(o+1),s=t.getUint8(o+2),l=new Uint8Array(3*a.count);for(let e=0;e<a.count;e++)l[3*e]=n,l[3*e+1]=i,l[3*e+2]=s;return l}throw new r.A("lepcc-decode-error","Bad method "+a.lookupMethod+","+a.compressionMethod)}const h={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function b(e,t){return{sizeLo:e.getUint32(t+h.sizeLo,n),sizeHi:e.getUint32(t+h.sizeHi,n),count:e.getUint32(t+h.count,n),scaleFactor:e.getUint16(t+h.scaleFactor,n),bitsPerPoint:e.getUint8(t+h.bitsPerPoint),reserved:e.getUint8(t+h.reserved)}}function m(e){const t=new DataView(e,0);let o=0;const{identifier:n,version:l}=s(e,t,o);if(o+=i.byteCount,"Intensity "!==n)throw new r.A("lepcc-decode-error","Bad identifier");if(l>1)throw new r.A("lepcc-decode-error","Unknown version");const a=b(t,o);if(o+=h.byteCount,a.sizeHi*2**32+a.sizeLo!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const u=new Uint16Array(a.count);if(8===a.bitsPerPoint){if(a.count+o!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const t=new Uint8Array(e,o,a.count);for(let e=0;e<a.count;e++)u[e]=t[e]*a.scaleFactor}else if(16===a.bitsPerPoint){if(2*a.count+o!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const t=new Uint16Array(e,o,a.count);for(let e=0;e<a.count;e++)u[e]=t[e]*a.scaleFactor}else{const t=[];if(f(e,o,t)!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");for(let e=0;e<a.count;e++)u[e]=t[e]*a.scaleFactor}return u}}}]);
//# sourceMappingURL=5220.c96711b0.chunk.js.map