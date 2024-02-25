"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[952],{45136:(t,e,n)=>{n.d(e,{a:()=>s,b:()=>a,c:()=>o,d:()=>r,e:()=>l,f:()=>u,n:()=>f,s:()=>c,t:()=>h});n(81806);var i=n(80066);function r(t,e,n){s(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function s(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i;if(t.length/i!==Math.ceil(e.length/r))return t;const s=t.length/i,o=n[0],a=n[1],u=n[2],c=n[4],h=n[5],l=n[6],f=n[8],d=n[9],g=n[10],v=n[12],m=n[13],y=n[14];let p=0,A=0;for(let b=0;b<s;b++){const n=e[p],s=e[p+1],b=e[p+2];t[A]=o*n+c*s+f*b+v,t[A+1]=a*n+h*s+d*b+m,t[A+2]=u*n+l*s+g*b+y,p+=r,A+=i}return t}function o(t,e,n){a(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function a(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(e.length/s))return void(0,i.j)().error("source and destination buffers need to have the same number of elements");const o=t.length/r,a=n[0],u=n[1],c=n[2],h=n[3],l=n[4],f=n[5],d=n[6],g=n[7],v=n[8];let m=0,y=0;for(let i=0;i<o;i++){const n=e[m],i=e[m+1],o=e[m+2];t[y]=a*n+h*i+d*o,t[y+1]=u*n+l*i+g*o,t[y+2]=c*n+f*i+v*o,m+=s,y+=r}}function u(t,e,n){c(t.typedBuffer,e,n,t.typedBufferStride)}function c(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;const r=Math.min(t.length/i,e.count),s=e.typedBuffer,o=e.typedBufferStride;let a=0,u=0;for(let c=0;c<r;c++)t[u]=n*s[a],t[u+1]=n*s[a+1],t[u+2]=n*s[a+2],a+=o,u+=i}function h(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i;const s=t.length/i;if(s!==Math.ceil(e.length/r))return t;let o=0,a=0;for(let u=0;u<s;u++)t[a]=e[o]+n[0],t[a+1]=e[o+1]+n[1],t[a+2]=e[o+2]+n[2],o+=r,a+=i;return t}function l(t,e){f(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function f(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;const r=Math.min(t.length/n,e.length/i);let s=0,o=0;for(let a=0;a<r;a++){const r=e[s],a=e[s+1],u=e[s+2],c=r*r+a*a+u*u;if(c>0){const e=1/Math.sqrt(c);t[o]=e*r,t[o+1]=e*a,t[o+2]=e*u}s+=i,o+=n}}Object.freeze(Object.defineProperty({__proto__:null,normalize:f,normalizeView:l,scale:c,scaleView:u,shiftRight:function(t,e,n){const i=Math.min(t.count,e.count),r=t.typedBuffer,s=t.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride;let u=0,c=0;for(let h=0;h<i;h++)r[c]=o[u]>>n,r[c+1]=o[u+1]>>n,r[c+2]=o[u+2]>>n,u+=a,c+=s},transformMat3:a,transformMat3View:o,transformMat4:s,transformMat4View:r,translate:h},Symbol.toStringTag,{value:"Module"}))},38496:(t,e,n)=>{n.d(e,{Dg:()=>r,EH:()=>f,JH:()=>o,my:()=>s,tM:()=>h});var i=n(78393);function r(t){if((0,i.cy)(t)){if(t.length<i.y9)return t}else if(t.length<i.y9)return Array.from(t);let e=!0,n=!0;return t.some(((t,i)=>(e=e&&0===t,n=n&&t===i,!e&&!n))),e?f(t.length):n?h(t.length):(0,i.cy)(t)||t.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(t){let e=!0;for(const n of t){if(n>=65536)return(0,i.cy)(t)?new Uint32Array(t):t;n>=256&&(e=!1)}return e?new Uint8Array(t):new Uint16Array(t)}(t):t}function s(t){return t<=i.y9?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}function o(t){return t<=i.y9?new Array(t):new Uint32Array(t)}let a=(()=>{const t=new Uint32Array(131072);for(let e=0;e<t.length;++e)t[e]=e;return t})();const u=[0],c=(()=>{const t=new Uint16Array(65536);for(let e=0;e<t.length;++e)t[e]=e;return t})();function h(t){if(1===t)return u;if(t<i.y9)return Array.from(new Uint16Array(c.buffer,0,t));if(t<c.length)return new Uint16Array(c.buffer,0,t);if(t>a.length){const e=Math.max(2*a.length,t);a=new Uint32Array(e);for(let t=0;t<a.length;t++)a[t]=t}return new Uint32Array(a.buffer,0,t)}let l=new Uint8Array(65536);function f(t){if(1===t)return u;if(t<i.y9)return new Array(t).fill(0);if(t>l.length){const e=Math.max(2*l.length,t);l=new Uint8Array(e)}return new Uint8Array(l.buffer,0,t)}},80066:(t,e,n)=>{n.d(e,{j:()=>r});var i=n(76460);const r=()=>i.A.getLogger("esri.views.3d.support.buffer.math")},44230:(t,e,n)=>{n.d(e,{Cr:()=>c,H6:()=>f,_I:()=>l,kb:()=>h,ld:()=>d,vt:()=>u});var i=n(15941),r=n(97467),s=n(20664),o=n(9392),a=n(75762);function u(t){return t?{origin:(0,o.o8)(t.origin),vector:(0,o.o8)(t.vector)}:{origin:(0,o.vt)(),vector:(0,o.vt)()}}function c(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return(0,s.c)(n.origin,t),(0,s.f)(n.vector,e,t),n}function h(t,e){const n=(0,s.f)(a.rq.get(),e,t.origin),r=(0,s.j)(t.vector,n),o=(0,s.j)(t.vector,t.vector),u=(0,i.qE)(r/o,0,1),c=(0,s.f)(a.rq.get(),(0,s.h)(a.rq.get(),t.vector,u),n);return(0,s.j)(c,c)}function l(t,e,n){return f(t,e,0,1,n)}function f(t,e,n,r,o){const{vector:u,origin:c}=t,h=(0,s.f)(a.rq.get(),e,c),l=(0,s.j)(u,h)/(0,s.o)(u);return(0,s.h)(o,u,(0,i.qE)(l,n,r)),(0,s.g)(o,o,t.origin)}function d(t,e,n){return!!g(t,e,!0,v)&&((0,s.c)(n,v.pA),!0)}function g(t,e,n,r){const o=1e-6,u=t.origin,c=(0,s.g)(a.rq.get(),u,t.vector),h=e.origin,l=(0,s.g)(a.rq.get(),h,e.vector),f=a.rq.get(),d=a.rq.get();if(f[0]=u[0]-h[0],f[1]=u[1]-h[1],f[2]=u[2]-h[2],d[0]=l[0]-h[0],d[1]=l[1]-h[1],d[2]=l[2]-h[2],Math.abs(d[0])<o&&Math.abs(d[1])<o&&Math.abs(d[2])<o)return!1;const g=a.rq.get();if(g[0]=c[0]-u[0],g[1]=c[1]-u[1],g[2]=c[2]-u[2],Math.abs(g[0])<o&&Math.abs(g[1])<o&&Math.abs(g[2])<o)return!1;const v=f[0]*d[0]+f[1]*d[1]+f[2]*d[2],m=d[0]*g[0]+d[1]*g[1]+d[2]*g[2],y=f[0]*g[0]+f[1]*g[1]+f[2]*g[2],p=d[0]*d[0]+d[1]*d[1]+d[2]*d[2],A=(g[0]*g[0]+g[1]*g[1]+g[2]*g[2])*p-m*m;if(Math.abs(A)<o)return!1;let b=(v*m-y*p)/A,M=(v+m*b)/p;n&&(b=(0,i.qE)(b,0,1),M=(0,i.qE)(M,0,1));const _=a.rq.get(),I=a.rq.get();return _[0]=u[0]+b*g[0],_[1]=u[1]+b*g[1],_[2]=u[2]+b*g[2],I[0]=h[0]+M*d[0],I[1]=h[1]+M*d[1],I[2]=h[2]+M*d[2],r.tA=b,r.tB=M,r.pA=_,r.pB=I,r.distance2=(0,s.a)(_,I),!0}const v={tA:0,tB:0,pA:(0,o.vt)(),pB:(0,o.vt)(),distance2:0};new r.I((()=>u()))},73146:(t,e,n)=>{n.d(e,{J:()=>r});var i=n(90632);class r{constructor(){this.id=(0,i.c)()}}},87634:(t,e,n)=>{var i;n.d(e,{X:()=>i}),function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"}(i||(i={}))},37761:(t,e,n)=>{n.d(e,{V:()=>x});var i=n(13191),r=n(20664),s=n(38496),o=n(78393);function a(t){if(t.length<o.y9)return Array.from(t);if((0,o.cy)(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return(0,o.jq)(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}var u=n(83490),c=n(30015),h=n(9392),l=n(86994);class f{constructor(t,e,n){this.primitiveIndices=t,this._numIndexPerPrimitive=e,this.position=n,this._children=void 0,(0,l.vA)(t.length>=1),(0,l.vA)(3===n.size||4===n.size);const{data:i,size:s,indices:o}=n;(0,l.vA)(o.length%this._numIndexPerPrimitive==0),(0,l.vA)(o.length>=t.length*this._numIndexPerPrimitive);const a=t.length;let u=s*o[this._numIndexPerPrimitive*t[0]];d.clear(),d.push(u);const c=(0,h.fA)(i[u],i[u+1],i[u+2]),f=(0,h.o8)(c);for(let r=0;r<a;++r){const e=this._numIndexPerPrimitive*t[r];for(let t=0;t<this._numIndexPerPrimitive;++t){u=s*o[e+t],d.push(u);let n=i[u];c[0]=Math.min(n,c[0]),f[0]=Math.max(n,f[0]),n=i[u+1],c[1]=Math.min(n,c[1]),f[1]=Math.max(n,f[1]),n=i[u+2],c[2]=Math.min(n,c[2]),f[2]=Math.max(n,f[2])}}this.bbMin=c,this.bbMax=f;const g=(0,r.k)((0,h.vt)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(f[0]-c[0],f[1]-c[1]),f[2]-c[2]);let v=this.radius*this.radius;for(let r=0;r<d.length;++r){u=d.at(r);const t=i[u]-g[0],e=i[u+1]-g[1],n=i[u+2]-g[2],s=t*t+e*e+n*n;if(s<=v)continue;const o=Math.sqrt(s),a=.5*(o-this.radius);this.radius=this.radius+a,v=this.radius*this.radius;const c=a/o;g[0]+=t*c,g[1]+=e*c,g[2]+=n*c}this.center=g,d.clear()}getChildren(){if(this._children||(0,r.a)(this.bbMin,this.bbMax)<=1)return this._children;const t=(0,r.k)((0,h.vt)(),this.bbMin,this.bbMax,.5),e=this.primitiveIndices.length,n=new Uint8Array(e),i=new Array(8);for(let r=0;r<8;++r)i[r]=0;const{data:s,size:o,indices:a}=this.position;for(let r=0;r<e;++r){let e=0;const u=this._numIndexPerPrimitive*this.primitiveIndices[r];let c=o*a[u],h=s[c],l=s[c+1],f=s[c+2];for(let t=1;t<this._numIndexPerPrimitive;++t){c=o*a[u+t];const e=s[c],n=s[c+1],i=s[c+2];e<h&&(h=e),n<l&&(l=n),i<f&&(f=i)}h<t[0]&&(e|=1),l<t[1]&&(e|=2),f<t[2]&&(e|=4),n[r]=e,++i[e]}let u=0;for(let r=0;r<8;++r)i[r]>0&&++u;if(u<2)return;const c=new Array(8);for(let r=0;r<8;++r)c[r]=i[r]>0?new Uint32Array(i[r]):void 0;for(let r=0;r<8;++r)i[r]=0;for(let r=0;r<e;++r){const t=n[r];c[t][i[t]++]=this.primitiveIndices[r]}this._children=new Array;for(let r=0;r<8;++r)void 0!==c[r]&&this._children.push(new f(c[r],this._numIndexPerPrimitive,this.position));return this._children}static prune(){d.prune()}}const d=new c.A({deallocator:null});var g=n(73146),v=n(87634),m=n(97467),y=n(44230);n(75762);function p(t){return t?{p0:(0,h.o8)(t.p0),p1:(0,h.o8)(t.p1),p2:(0,h.o8)(t.p2)}:{p0:(0,h.vt)(),p1:(0,h.vt)(),p2:(0,h.vt)()}}function A(t,e,n){return(0,r.f)(b,e,t),(0,r.f)(M,n,t),.5*(0,r.l)((0,r.b)(b,b,M))}new m.I(y.vt),new m.I((()=>p()));const b=(0,h.vt)(),M=(0,h.vt)();const _=(0,h.vt)(),I=(0,h.vt)(),O=(0,h.vt)(),w=(0,h.vt)();var E=n(35416),B=n(66470),P=n(68967);class x extends g.J{constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:v.X.Mesh,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:-1;super(),this.material=t,this.mapPositions=n,this.type=i,this.objectAndLayerIdColor=r,this.edgeIndicesLength=o,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[a,u]of e)this._attributes.set(a,{...u,indices:(0,s.Dg)(u.indices)}),a===B.r.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(a).indices.length:this.edgeIndicesLength)}instantiate(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=new x(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((t,n)=>{t.exclusive=!1,e._attributes.set(n,t)})),e._boundingInfo=this._boundingInfo,e.transformation=t.transformation||this.transformation,e}get attributes(){return this._attributes}getMutableAttribute(t){let e=this._attributes.get(t);return e&&!e.exclusive&&(e={...e,exclusive:!0,data:a(e.data)},this._attributes.set(t,e)),e}setAttributeData(t,e){const n=this._attributes.get(t);n&&this._attributes.set(t,{...n,exclusive:!0,data:e})}get indexCount(){var t;const e=this._attributes.values().next().value.indices;return null!==(t=null===e||void 0===e?void 0:e.length)&&void 0!==t?t:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===v.X.Mesh?this._computeAttachmentOriginTriangles(t):this.type===v.X.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(null!=this._transformation&&(0,r.e)(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){return function(t,e){if(!t)return!1;const{size:n,data:i,indices:s}=t;(0,r.s)(e,0,0,0),(0,r.s)(w,0,0,0);let o=0,a=0;for(let u=0;u<s.length-2;u+=3){const t=s[u]*n,c=s[u+1]*n,h=s[u+2]*n;(0,r.s)(_,i[t],i[t+1],i[t+2]),(0,r.s)(I,i[c],i[c+1],i[c+2]),(0,r.s)(O,i[h],i[h+1],i[h+2]);const l=A(_,I,O);l?((0,r.g)(_,_,I),(0,r.g)(_,_,O),(0,r.h)(_,_,1/3*l),(0,r.g)(e,e,_),o+=l):((0,r.g)(w,w,_),(0,r.g)(w,w,I),(0,r.g)(w,w,O),a+=3)}return(0!==a||0!==o)&&(0!==o?((0,r.h)(e,e,1/o),!0):0!==a&&((0,r.h)(e,w,1/a),!0))}(this.attributes.get(B.r.POSITION),t)}_computeAttachmentOriginLines(t){const e=this.attributes.get(B.r.POSITION);return function(t,e,n){if(!t)return!1;(0,r.s)(n,0,0,0),(0,r.s)(w,0,0,0);let i=0,s=0;const{size:o,data:a,indices:u}=t,c=u.length-1,h=c+(e?2:0);for(let l=0;l<h;l+=2){const t=l<c?l+1:0,e=u[l<c?l:c]*o,h=u[t]*o;_[0]=a[e],_[1]=a[e+1],_[2]=a[e+2],I[0]=a[h],I[1]=a[h+1],I[2]=a[h+2],(0,r.h)(_,(0,r.g)(_,_,I),.5);const f=(0,r.m)(_,I);f>0?((0,r.g)(n,n,(0,r.h)(_,_,f)),i+=f):0===i&&((0,r.g)(w,w,_),s++)}return 0!==i?((0,r.h)(n,n,1/i),!0):0!==s&&((0,r.h)(n,w,1/s),!0)}(e,function(t,e){return!(!("isClosed"in t)||!t.isClosed)&&e.indices.length>2}(this.material.parameters,e),t)}_computeAttachmentOriginPoints(t){return function(t,e){if(!t)return!1;const{size:n,data:i,indices:s}=t;(0,r.s)(e,0,0,0);let o=-1,a=0;for(let r=0;r<s.length;r++){const t=s[r]*n;o!==t&&(e[0]+=i[t],e[1]+=i[t+1],e[2]+=i[t+2],a++),o=t}return a>1&&(0,r.h)(e,e,1/a),a>0}(this.attributes.get(B.r.POSITION),t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.attributes.get(B.r.POSITION);if(!t||0===t.indices.length)return null;const e=this.type===v.X.Mesh?3:1;(0,l.vA)(t.indices.length%e==0,"Indexing error: "+t.indices.length+" not divisible by "+e);const n=(0,s.tM)(t.indices.length/e);return new f(n,e,t)}get transformation(){var t;return null!==(t=this._transformation)&&void 0!==t?t:i.zK}set transformation(t){this._transformation=t&&t!==i.zK?(0,i.o8)(t):null}addHighlight(){const t=new E.X(u.Mg.Highlight);return this.highlights=(0,P.Ci)(this.highlights,t),t}removeHighlight(t){this.highlights=(0,P.PC)(this.highlights,t)}}},35416:(t,e,n)=>{n.d(e,{X:()=>r});var i=n(90632);class r{constructor(t){this.channel=t,this.id=(0,i.c)()}}},86994:(t,e,n)=>{n.d(e,{L:()=>u,MX:()=>o,M_:()=>h,O_:()=>a,kL:()=>c,vA:()=>s,zH:()=>l});var i=n(72745);n(43047);(0,n(55855).vt)();class r{constructor(t){this.message=t}toString(){return"AssertException: ".concat(this.message)}}function s(t,e){if(!t){e=e||"Assertion";const t=new Error(e).stack;throw new r("".concat(e," at ").concat(t))}}function o(t,e){t||(e=e||"",console.warn("Verify failed: "+e+"\n"+new Error("verify").stack))}function a(t,e,n,i){let r,s=(n[0]-t[0])/e[0],o=(i[0]-t[0])/e[0];s>o&&(r=s,s=o,o=r);let a=(n[1]-t[1])/e[1],u=(i[1]-t[1])/e[1];if(a>u&&(r=a,a=u,u=r),s>u||a>o)return!1;a>s&&(s=a),u<o&&(o=u);let c=(n[2]-t[2])/e[2],h=(i[2]-t[2])/e[2];return c>h&&(r=c,c=h,h=r),!(s>h||c>o)&&(h<o&&(o=h),!(o<0))}function u(t,e,n,r,s){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:(0,i.vt)();const a=(r[s]-n[s])*(e[0]-t[0])-(r[0]-n[0])*(e[s]-t[s]),u=(r[0]-n[0])*(t[s]-n[s])-(r[s]-n[s])*(t[0]-n[0]);if(0===a)return!1;const c=u/a;return o[0]=t[0]+c*(e[0]-t[0]),o[1]=t[s]+c*(e[s]-t[s]),!0}function c(t,e){return Math.log(t)/Math.log(e)}function h(t,e,n,i){t[12]=e,t[13]=n,t[14]=i}function l(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}},83490:(t,e,n)=>{var i,r,s,o,a,u,c,h,l;n.d(e,{Am:()=>o,ID:()=>h,JS:()=>l,Mg:()=>u,dd:()=>a,it:()=>r,s2:()=>i,sf:()=>c}),function(t){t[t.None=0]="None",t[t.Front=1]="Front",t[t.Back=2]="Back",t[t.COUNT=3]="COUNT"}(i||(i={})),function(t){t[t.Less=0]="Less",t[t.Lequal=1]="Lequal",t[t.COUNT=2]="COUNT"}(r||(r={})),function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.UPDATE=1]="UPDATE"}(s||(s={})),function(t){t[t.NOT_LOADED=0]="NOT_LOADED",t[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED"}(o||(o={})),function(t){t[t.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",t[t.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(a||(a={})),function(t){t[t.Highlight=0]="Highlight",t[t.MaskOccludee=1]="MaskOccludee",t[t.COUNT=2]="COUNT"}(u||(u={})),function(t){t[t.Blend=0]="Blend",t[t.Opaque=1]="Opaque",t[t.Mask=2]="Mask",t[t.MaskBlend=3]="MaskBlend",t[t.COUNT=4]="COUNT"}(c||(c={})),function(t){t[t.OFF=0]="OFF",t[t.ON=1]="ON"}(h||(h={})),function(t){t.DDS_ENCODING="image/vnd-ms.dds",t.KTX2_ENCODING="image/ktx2",t.BASIS_ENCODING="image/x.basis"}(l||(l={}))},68967:(t,e,n)=>{n.d(e,{Ci:()=>s,PC:()=>o,Vk:()=>a});var i=n(9392),r=n(99643);function s(t,e){return null==t&&(t=[]),t.push(e),t}function o(t,e){if(null==t)return null;const n=t.filter((t=>t!==e));return 0===n.length?null:n}function a(t,e,n,i,s){u[0]=t.get(e,0),u[1]=t.get(e,1),u[2]=t.get(e,2),(0,r.jS)(u,c,3),n.set(s,0,c[0]),i.set(s,0,c[1]),n.set(s,1,c[2]),i.set(s,1,c[3]),n.set(s,2,c[4]),i.set(s,2,c[5])}const u=(0,i.vt)(),c=new Float32Array(6)},99643:(t,e,n)=>{function i(t,e,n){for(let i=0;i<n;++i)e[2*i]=t[i],e[2*i+1]=t[i]-e[2*i]}function r(t,e){const n=t.length;for(let i=0;i<n;++i)o[0]=t[i],e[i]=o[0];return e}function s(t,e){const n=t.length;for(let i=0;i<n;++i)o[0]=t[i],o[1]=t[i]-o[0],e[i]=o[1];return e}n.d(e,{Zo:()=>r,jA:()=>s,jS:()=>i});const o=new Float32Array(2)}}]);
//# sourceMappingURL=952.763b2dd1.chunk.js.map