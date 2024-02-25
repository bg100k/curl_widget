"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[7767],{45136:(t,n,e)=>{e.d(n,{a:()=>i,b:()=>s,c:()=>a,d:()=>o,e:()=>h,f:()=>c,n:()=>f,s:()=>l,t:()=>u});e(81806);var r=e(80066);function o(t,n,e){i(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function i(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(n.length/o))return t;const i=t.length/r,a=e[0],s=e[1],c=e[2],l=e[4],u=e[5],h=e[6],f=e[8],d=e[9],m=e[10],p=e[12],M=e[13],_=e[14];let g=0,x=0;for(let y=0;y<i;y++){const e=n[g],i=n[g+1],y=n[g+2];t[x]=a*e+l*i+f*y+p,t[x+1]=s*e+u*i+d*y+M,t[x+2]=c*e+h*i+m*y+_,g+=o,x+=r}return t}function a(t,n,e){s(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function s(t,n,e){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o;if(t.length/o!==Math.ceil(n.length/i))return void(0,r.j)().error("source and destination buffers need to have the same number of elements");const a=t.length/o,s=e[0],c=e[1],l=e[2],u=e[3],h=e[4],f=e[5],d=e[6],m=e[7],p=e[8];let M=0,_=0;for(let r=0;r<a;r++){const e=n[M],r=n[M+1],a=n[M+2];t[_]=s*e+u*r+d*a,t[_+1]=c*e+h*r+m*a,t[_+2]=l*e+f*r+p*a,M+=i,_+=o}}function c(t,n,e){l(t.typedBuffer,n,e,t.typedBufferStride)}function l(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;const o=Math.min(t.length/r,n.count),i=n.typedBuffer,a=n.typedBufferStride;let s=0,c=0;for(let l=0;l<o;l++)t[c]=e*i[s],t[c+1]=e*i[s+1],t[c+2]=e*i[s+2],s+=a,c+=r}function u(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;const i=t.length/r;if(i!==Math.ceil(n.length/o))return t;let a=0,s=0;for(let c=0;c<i;c++)t[s]=n[a]+e[0],t[s+1]=n[a+1]+e[1],t[s+2]=n[a+2]+e[2],a+=o,s+=r;return t}function h(t,n){f(t.typedBuffer,n.typedBuffer,t.typedBufferStride,n.typedBufferStride)}function f(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e;const o=Math.min(t.length/e,n.length/r);let i=0,a=0;for(let s=0;s<o;s++){const o=n[i],s=n[i+1],c=n[i+2],l=o*o+s*s+c*c;if(l>0){const n=1/Math.sqrt(l);t[a]=n*o,t[a+1]=n*s,t[a+2]=n*c}i+=r,a+=e}}Object.freeze(Object.defineProperty({__proto__:null,normalize:f,normalizeView:h,scale:l,scaleView:c,shiftRight:function(t,n,e){const r=Math.min(t.count,n.count),o=t.typedBuffer,i=t.typedBufferStride,a=n.typedBuffer,s=n.typedBufferStride;let c=0,l=0;for(let u=0;u<r;u++)o[l]=a[c]>>e,o[l+1]=a[c+1]>>e,o[l+2]=a[c+2]>>e,c+=s,l+=i},transformMat3:s,transformMat3View:a,transformMat4:i,transformMat4View:o,translate:u},Symbol.toStringTag,{value:"Module"}))},43047:(t,n,e)=>{e.d(n,{a:()=>y,b:()=>i,c:()=>o,d:()=>h,e:()=>v,f:()=>d,g:()=>s,h:()=>_,i:()=>m,j:()=>p,l:()=>g,n:()=>M,s:()=>a,t:()=>x});var r=e(53494);function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function i(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function a(t,n,e,r,o){return t[0]=n,t[1]=e,t[2]=r,t[3]=o,t}function s(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t[3]=n[3]+e[3],t}function c(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t[3]=n[3]-e[3],t}function l(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t[3]=n[3]*e[3],t}function u(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t[3]=n[3]/e[3],t}function h(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t}function f(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2],i=n[3]-t[3];return Math.sqrt(e*e+r*r+o*o+i*i)}function d(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2],i=n[3]-t[3];return e*e+r*r+o*o+i*i}function m(t){const n=t[0],e=t[1],r=t[2],o=t[3];return Math.sqrt(n*n+e*e+r*r+o*o)}function p(t){const n=t[0],e=t[1],r=t[2],o=t[3];return n*n+e*e+r*r+o*o}function M(t,n){const e=n[0],r=n[1],o=n[2],i=n[3];let a=e*e+r*r+o*o+i*i;return a>0&&(a=1/Math.sqrt(a),t[0]=e*a,t[1]=r*a,t[2]=o*a,t[3]=i*a),t}function _(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function g(t,n,e,r){const o=n[0],i=n[1],a=n[2],s=n[3];return t[0]=o+r*(e[0]-o),t[1]=i+r*(e[1]-i),t[2]=a+r*(e[2]-a),t[3]=s+r*(e[3]-s),t}function x(t,n,e){const r=n[0],o=n[1],i=n[2],a=n[3];return t[0]=e[0]*r+e[4]*o+e[8]*i+e[12]*a,t[1]=e[1]*r+e[5]*o+e[9]*i+e[13]*a,t[2]=e[2]*r+e[6]*o+e[10]*i+e[14]*a,t[3]=e[3]*r+e[7]*o+e[11]*i+e[15]*a,t}function y(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function v(t,n){const e=t[0],o=t[1],i=t[2],a=t[3],s=n[0],c=n[1],l=n[2],u=n[3],h=(0,r.FD)();return Math.abs(e-s)<=h*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(o-c)<=h*Math.max(1,Math.abs(o),Math.abs(c))&&Math.abs(i-l)<=h*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(a-u)<=h*Math.max(1,Math.abs(a),Math.abs(u))}const A=c,w=l,b=u,B=f,Y=d,S=m,X=p;Object.freeze(Object.defineProperty({__proto__:null,add:s,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},copy:o,copyVec3:i,dist:B,distance:f,div:b,divide:u,dot:_,equals:v,exactEquals:y,floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},len:S,length:m,lerp:g,max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t[3]=Math.max(n[3],e[3]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t[3]=Math.min(n[3],e[3]),t},mul:w,multiply:l,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},normalize:M,random:function(t,n){const e=r.Ov;let o,i,a,s,c,l;n=n||1;do{o=2*e()-1,i=2*e()-1,c=o*o+i*i}while(c>=1);do{a=2*e()-1,s=2*e()-1,l=a*a+s*s}while(l>=1);const u=Math.sqrt((1-c)/l);return t[0]=n*o,t[1]=n*i,t[2]=n*a*u,t[3]=n*s*u,t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},scale:h,scaleAndAdd:function(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t[3]=n[3]+e[3]*r,t},set:a,sqrDist:Y,sqrLen:X,squaredDistance:d,squaredLength:p,str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},sub:A,subtract:c,transformMat4:x,transformQuat:function(t,n,e){const r=n[0],o=n[1],i=n[2],a=e[0],s=e[1],c=e[2],l=e[3],u=l*r+s*i-c*o,h=l*o+c*r-a*i,f=l*i+a*o-s*r,d=-a*r-s*o-c*i;return t[0]=u*l+d*-a+h*-c-f*-s,t[1]=h*l+d*-s+f*-a-u*-c,t[2]=f*l+d*-c+u*-s-h*-a,t[3]=n[3],t}},Symbol.toStringTag,{value:"Module"}))},44680:(t,n,e)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function o(t,n,e,r,o,i,a,s,c){return[t,n,e,r,o,i,a,s,c]}e.d(n,{fA:()=>o,vt:()=>r,zK:()=>i});const i=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:r,createView:function(t,n){return new Float64Array(t,n,9)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},13191:(t,n,e)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}e.d(n,{o8:()=>o,vt:()=>r,zK:()=>i});const i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:o,create:r,createView:function(t,n){return new Float64Array(t,n,16)},fromValues:function(t,n,e,r,o,i,a,s,c,l,u,h,f,d,m,p){return[t,n,e,r,o,i,a,s,c,l,u,h,f,d,m,p]}},Symbol.toStringTag,{value:"Module"}))},4336:(t,n,e)=>{function r(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}e.d(n,{o8:()=>o,vt:()=>r,zK:()=>i});const i=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:o,create:r,createView:function(t,n){return new Float64Array(t,n,4)},fromValues:function(t,n,e,r){return[t,n,e,r]}},Symbol.toStringTag,{value:"Module"}))},55855:(t,n,e)=>{function r(){return[0,0,0,0]}function o(t){return[t[0],t[1],t[2],t[3]]}function i(t,n,e,r){return[t,n,e,r]}function a(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0,0];const e=Math.min(4,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n}function s(){return[0,0,0,0]}function c(){return i(1,1,1,1)}function l(){return i(1,0,0,0)}function u(){return i(0,1,0,0)}function h(){return i(0,0,1,0)}function f(){return i(0,0,0,1)}e.d(n,{Un:()=>m,ci:()=>a,fA:()=>i,o8:()=>o,uY:()=>d,vt:()=>r});const d=[0,0,0,0],m=c(),p=l(),M=u(),_=h(),g=f();Object.freeze(Object.defineProperty({__proto__:null,ONES:m,UNIT_W:g,UNIT_X:p,UNIT_Y:M,UNIT_Z:_,ZEROS:d,clone:o,create:r,createView:function(t,n){return new Float64Array(t,n,4)},fromArray:a,fromValues:i,ones:c,unitW:f,unitX:l,unitY:u,unitZ:h,zeros:s},Symbol.toStringTag,{value:"Module"}))},60008:(t,n,e)=>{e.d(n,{A6:()=>p,Xd:()=>u,Xr:()=>d,hZ:()=>_,lw:()=>h,t2:()=>X,x8:()=>l});var r=e(44680),o=e(4336),i=e(9392),a=e(53494),s=e(20664),c=e(43047);function l(t,n,e){e*=.5;const r=Math.sin(e);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(e),t}function u(t,n){const e=2*Math.acos(n[3]),r=Math.sin(e/2);return r>(0,a.FD)()?(t[0]=n[0]/r,t[1]=n[1]/r,t[2]=n[2]/r):(t[0]=1,t[1]=0,t[2]=0),e}function h(t,n,e){const r=n[0],o=n[1],i=n[2],a=n[3],s=e[0],c=e[1],l=e[2],u=e[3];return t[0]=r*u+a*s+o*l-i*c,t[1]=o*u+a*c+i*s-r*l,t[2]=i*u+a*l+r*c-o*s,t[3]=a*u-r*s-o*c-i*l,t}function f(t,n,e,r){const o=n[0],i=n[1],s=n[2],c=n[3];let l,u,h,f,d,m=e[0],p=e[1],M=e[2],_=e[3];return u=o*m+i*p+s*M+c*_,u<0&&(u=-u,m=-m,p=-p,M=-M,_=-_),1-u>(0,a.FD)()?(l=Math.acos(u),h=Math.sin(l),f=Math.sin((1-r)*l)/h,d=Math.sin(r*l)/h):(f=1-r,d=r),t[0]=f*o+d*m,t[1]=f*i+d*p,t[2]=f*s+d*M,t[3]=f*c+d*_,t}function d(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function m(t,n){const e=n[0]+n[4]+n[8];let r;if(e>0)r=Math.sqrt(e+1),t[3]=.5*r,r=.5/r,t[0]=(n[5]-n[7])*r,t[1]=(n[6]-n[2])*r,t[2]=(n[1]-n[3])*r;else{let e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);const o=(e+1)%3,i=(e+2)%3;r=Math.sqrt(n[3*e+e]-n[3*o+o]-n[3*i+i]+1),t[e]=.5*r,r=.5/r,t[3]=(n[3*o+i]-n[3*i+o])*r,t[o]=(n[3*o+e]+n[3*e+o])*r,t[i]=(n[3*i+e]+n[3*e+i])*r}return t}function p(t,n,e,r){const o=.5*Math.PI/180;n*=o,e*=o,r*=o;const i=Math.sin(n),a=Math.cos(n),s=Math.sin(e),c=Math.cos(e),l=Math.sin(r),u=Math.cos(r);return t[0]=i*c*u-a*s*l,t[1]=a*s*u+i*c*l,t[2]=a*c*l-i*s*u,t[3]=a*c*u+i*s*l,t}const M=c.c,_=c.s,g=c.g,x=h,y=c.d,v=c.h,A=c.l,w=c.i,b=w,B=c.j,Y=B,S=c.n,X=c.a,E=c.e;const O=(0,i.vt)(),z=(0,i.fA)(1,0,0),T=(0,i.fA)(0,1,0);const I=(0,o.vt)(),P=(0,o.vt)();const j=(0,r.vt)();Object.freeze(Object.defineProperty({__proto__:null,add:g,calculateW:function(t,n){const e=n[0],r=n[1],o=n[2];return t[0]=e,t[1]=r,t[2]=o,t[3]=Math.sqrt(Math.abs(1-e*e-r*r-o*o)),t},conjugate:d,copy:M,dot:v,equals:E,exactEquals:X,fromEuler:p,fromMat3:m,getAxisAngle:u,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:function(t,n){const e=n[0],r=n[1],o=n[2],i=n[3],a=e*e+r*r+o*o+i*i,s=a?1/a:0;return t[0]=-e*s,t[1]=-r*s,t[2]=-o*s,t[3]=i*s,t},len:b,length:w,lerp:A,mul:x,multiply:h,normalize:S,random:function(t){const n=a.Ov,e=n(),r=n(),o=n(),i=Math.sqrt(1-e),s=Math.sqrt(e);return t[0]=i*Math.sin(2*Math.PI*r),t[1]=i*Math.cos(2*Math.PI*r),t[2]=s*Math.sin(2*Math.PI*o),t[3]=s*Math.cos(2*Math.PI*o),t},rotateX:function(t,n,e){e*=.5;const r=n[0],o=n[1],i=n[2],a=n[3],s=Math.sin(e),c=Math.cos(e);return t[0]=r*c+a*s,t[1]=o*c+i*s,t[2]=i*c-o*s,t[3]=a*c-r*s,t},rotateY:function(t,n,e){e*=.5;const r=n[0],o=n[1],i=n[2],a=n[3],s=Math.sin(e),c=Math.cos(e);return t[0]=r*c-i*s,t[1]=o*c+a*s,t[2]=i*c+r*s,t[3]=a*c-o*s,t},rotateZ:function(t,n,e){e*=.5;const r=n[0],o=n[1],i=n[2],a=n[3],s=Math.sin(e),c=Math.cos(e);return t[0]=r*c+o*s,t[1]=o*c-r*s,t[2]=i*c+a*s,t[3]=a*c-i*s,t},rotationTo:function(t,n,e){const r=(0,s.j)(n,e);return r<-.999999?((0,s.b)(O,z,n),(0,s.C)(O)<1e-6&&(0,s.b)(O,T,n),(0,s.n)(O,O),l(t,O,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,s.b)(O,n,e),t[0]=O[0],t[1]=O[1],t[2]=O[2],t[3]=1+r,S(t,t))},scale:y,set:_,setAxes:function(t,n,e,r){const o=j;return o[0]=e[0],o[3]=e[1],o[6]=e[2],o[1]=r[0],o[4]=r[1],o[7]=r[2],o[2]=-n[0],o[5]=-n[1],o[8]=-n[2],S(t,m(t,o))},setAxisAngle:l,slerp:f,sqlerp:function(t,n,e,r,o,i){return f(I,n,o,i),f(P,e,r,i),f(t,I,P,2*i*(1-i)),t},sqrLen:Y,squaredLength:B,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))},70373:(t,n,e)=>{e.d(n,{w:()=>a});var r=e(18690),o=e(30015),i=e(61196);class a{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,n=arguments.length>1?arguments[1]:void 0;this._compareMinX=u,this._compareMinY=h,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this._toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),x.prune(),y.prune(),v.prune(),A.prune()}all(t){this._all(this._data,t)}search(t,n){let e=this._data;const r=this._toBBox;if(_(t,e))for(x.clear();e;){for(let o=0,i=e.children.length;o<i;o++){const i=e.children[o],a=e.leaf?r(i):i;_(t,a)&&(e.leaf?n(i):M(t,a)?this._all(i,n):x.push(i))}e=x.pop()}}collides(t){let n=this._data;const e=this._toBBox;if(!_(t,n))return!1;for(x.clear();n;){for(let r=0,o=n.children.length;r<o;r++){const o=n.children[r],i=n.leaf?e(o):o;if(_(t,i)){if(n.leaf||M(t,i))return!0;x.push(o)}}n=x.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,e=t.length;n<e;n++)this.insert(t[n]);return this}let n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===n.height)this._splitRoot(this._data,n);else{if(this._data.height<n.height){const t=this._data;this._data=n,n=t}this._insert(n,this._data.height-n.height-1,!0)}else this._data=n;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new B([]),this}remove(t){if(!t)return this;let n,e=this._data,o=null,i=0,a=!1;const s=this._toBBox(t);for(v.clear(),A.clear();e||v.length>0;){var c;if(e||(e=v.pop(),o=v.data[v.length-1],i=null!==(c=A.pop())&&void 0!==c?c:0,a=!0),e.leaf&&(n=(0,r.qh)(e.children,t,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),v.push(e),this._condense(v),this;a||e.leaf||!M(e,s)?o?(i++,e=o.children[i],a=!1):e=null:(v.push(e),A.push(i),i=0,o=e,e=e.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,n){let e=t;for(y.clear();e;){var r;if(!0===e.leaf)for(const t of e.children)n(t);else y.pushArray(e.children);e=null!==(r=y.pop())&&void 0!==r?r:null}}_build(t,n,e,r){const o=e-n+1;let i=this._maxEntries;if(o<=i){const r=new B(t.slice(n,e+1));return s(r,this._toBBox),r}r||(r=Math.ceil(Math.log(o)/Math.log(i)),i=Math.ceil(o/i**(r-1)));const a=new Y([]);a.height=r;const c=Math.ceil(o/i),l=c*Math.ceil(Math.sqrt(i));g(t,n,e,l,this._compareMinX);for(let s=n;s<=e;s+=l){const n=Math.min(s+l-1,e);g(t,s,n,c,this._compareMinY);for(let e=s;e<=n;e+=c){const o=Math.min(e+c-1,n);a.children.push(this._build(t,e,o,r-1))}}return s(a,this._toBBox),a}_chooseSubtree(t,n,e,r){for(;r.push(n),!0!==n.leaf&&r.length-1!==e;){let e,r=1/0,o=1/0;for(let i=0,a=n.children.length;i<a;i++){const a=n.children[i],s=f(a),c=m(t,a)-s;c<o?(o=c,r=s<r?s:r,e=a):c===o&&s<r&&(r=s,e=a)}n=e||n.children[0]}return n}_insert(t,n,e){const r=this._toBBox,o=e?t:r(t);v.clear();const i=this._chooseSubtree(o,this._data,n,v);for(i.children.push(t),l(i,o);n>=0&&v.data[n].children.length>this._maxEntries;)this._split(v,n),n--;this._adjustParentBBoxes(o,v,n)}_split(t,n){const e=t.data[n],r=e.children.length,o=this._minEntries;this._chooseSplitAxis(e,o,r);const i=this._chooseSplitIndex(e,o,r);if(!i)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=e.children.splice(i,e.children.length-i),c=e.leaf?new B(a):new Y(a);c.height=e.height,s(e,this._toBBox),s(c,this._toBBox),n?t.data[n-1].children.push(c):this._splitRoot(e,c)}_splitRoot(t,n){this._data=new Y([t,n]),this._data.height=t.height+1,s(this._data,this._toBBox)}_chooseSplitIndex(t,n,e){let r,o,i;r=o=1/0;for(let a=n;a<=e-n;a++){const n=c(t,0,a,this._toBBox),s=c(t,a,e,this._toBBox),l=p(n,s),u=f(n)+f(s);l<r?(r=l,i=a,o=u<o?u:o):l===r&&u<o&&(o=u,i=a)}return i}_chooseSplitAxis(t,n,e){const r=t.leaf?this._compareMinX:u,o=t.leaf?this._compareMinY:h;this._allDistMargin(t,n,e,r)<this._allDistMargin(t,n,e,o)&&t.children.sort(r)}_allDistMargin(t,n,e,r){t.children.sort(r);const o=this._toBBox,i=c(t,0,n,o),a=c(t,e-n,e,o);let s=d(i)+d(a);for(let c=n;c<e-n;c++){const n=t.children[c];l(i,t.leaf?o(n):n),s+=d(i)}for(let c=e-n-1;c>=n;c--){const n=t.children[c];l(a,t.leaf?o(n):n),s+=d(a)}return s}_adjustParentBBoxes(t,n,e){for(let r=e;r>=0;r--)l(n.data[r],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const o=t.data[n-1],i=o.children;i.splice((0,r.qh)(i,e,i.length,o.indexHint),1)}else this.clear();else s(e,this._toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this._compareMinX=new Function("a","b",n.join(t[0])),this._compareMinY=new Function("a","b",n.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function s(t,n){c(t,0,t.children.length,n,t)}function c(t,n,e,r,o){o||(o=new B([])),o.minX=1/0,o.minY=1/0,o.maxX=-1/0,o.maxY=-1/0;for(let i,a=n;a<e;a++)i=t.children[a],l(o,t.leaf?r(i):i);return o}function l(t,n){t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY)}function u(t,n){return t.minX-n.minX}function h(t,n){return t.minY-n.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function d(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,n){return(Math.max(n.maxX,t.maxX)-Math.min(n.minX,t.minX))*(Math.max(n.maxY,t.maxY)-Math.min(n.minY,t.minY))}function p(t,n){const e=Math.max(t.minX,n.minX),r=Math.max(t.minY,n.minY),o=Math.min(t.maxX,n.maxX),i=Math.min(t.maxY,n.maxY);return Math.max(0,o-e)*Math.max(0,i-r)}function M(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function _(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function g(t,n,e,r,o){const a=[n,e];for(;a.length;){const n=a.pop(),e=a.pop();if(n-e<=r)continue;const s=e+Math.ceil((n-e)/r/2)*r;(0,i.q)(t,s,e,n,o),a.push(e,s,s,n)}}const x=new o.A,y=new o.A,v=new o.A,A=new o.A({deallocator:void 0});class w{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class b extends w{constructor(){super(...arguments),this.height=1,this.indexHint=new r.vW}}class B extends b{constructor(t){super(),this.children=t,this.leaf=!0}}class Y extends b{constructor(t){super(),this.children=t,this.leaf=!1}}},90707:(t,n,e)=>{e.d(n,{l:()=>l});var r=e(15941),o=e(34761),i=e(9392);function a(t,n,e){const r=Math.sin(t),o=Math.cos(t),i=Math.sin(n),a=Math.cos(n),s=e;return s[0]=-r,s[4]=-i*o,s[8]=a*o,s[12]=0,s[1]=o,s[5]=-i*r,s[9]=a*r,s[13]=0,s[2]=0,s[6]=a,s[10]=i,s[14]=0,s[3]=0,s[7]=0,s[11]=0,s[15]=1,s}var s=e(43955),c=e(80963);function l(t,n,e,r){if(null==t||null==r)return!1;const i=(0,s.Qk)(t,s.Wv),l=(0,s.Qk)(r,s.zp);if(i===l&&!u(l)&&(i!==s.rz.UNKNOWN||(0,c.aI)(t,r)))return(0,o.kN)(e,n),!0;if(u(l)){const t=s.w5[i][s.rz.LON_LAT],r=s.w5[s.rz.LON_LAT][l];return null!=t&&null!=r&&(t(n,0,f,0),r(f,0,d,0),a(h*f[0],h*f[1],e),e[12]=d[0],e[13]=d[1],e[14]=d[2],!0)}if((l===s.rz.WEB_MERCATOR||l===s.rz.PLATE_CARREE||l===s.rz.WGS84)&&(i===s.rz.WGS84||i===s.rz.CGCS2000&&l===s.rz.PLATE_CARREE||i===s.rz.SPHERICAL_ECEF||i===s.rz.WEB_MERCATOR)){const t=s.w5[i][s.rz.LON_LAT],r=s.w5[s.rz.LON_LAT][l];return null!=t&&null!=r&&(t(n,0,f,0),r(f,0,d,0),i===s.rz.SPHERICAL_ECEF?function(t,n,e){a(t,n,e),(0,o.mg)(e,e)}(h*f[0],h*f[1],e):(0,o.D_)(e),e[12]=d[0],e[13]=d[1],e[14]=d[2],!0)}return!1}function u(t){return t===s.rz.SPHERICAL_ECEF||t===s.rz.SPHERICAL_MARS_PCPF||t===s.rz.SPHERICAL_MOON_PCPF}const h=(0,r.kU)(1),f=(0,i.vt)(),d=(0,i.vt)()},98510:(t,n,e)=>{e.d(n,{lO:()=>l});var r=e(34111),o=e(13312),i=e(80963);const a=new o.A(r.fv),s=new o.A(r.FY),c=new o.A(r.LJ);new o.A(r.Ro);function l(t){const n=u.get(t);if(n)return n;let e=a;if(t)if(t===s)e=s;else if(t===c)e=c;else{const n=t.wkid,o=t.latestWkid;if(null!=n||null!=o)(0,i.tl)(n)||(0,i.tl)(o)?e=s:((0,i.ZL)(n)||(0,i.ZL)(o))&&(e=c);else{var r;const n=null!==(r=t.wkt2)&&void 0!==r?r:t.wkt;if(n){const t=n.toUpperCase();t===h?e=s:t===f&&(e=c)}}}return u.set(t,e),e}const u=new Map,h=s.wkt.toUpperCase(),f=c.wkt.toUpperCase()},44815:(t,n,e)=>{e.d(n,{Ns:()=>c,jh:()=>o,l5:()=>a,s:()=>s,xm:()=>i});var r=e(78393);function o(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t<=r.y9?n?new Array(t).fill(0):new Array(t):new Float64Array(t)}function i(t){return((0,r.cy)(t)?t.length:t.byteLength/8)<=r.y9?Array.from(t):new Float64Array(t)}function a(t,n,e){return Array.isArray(t)?t.slice(n,n+e):t.subarray(n,n+e)}function s(t,n){for(let e=0;e<n.length;++e)t[e]=n[e];return t}function c(t){return Array.isArray(t)?new Float64Array(t):t}},14894:(t,n,e)=>{e.d(n,{A:()=>u});var r=e(35143),o=e(69098),i=e(42553),a=e(46053),s=(e(81806),e(76460),e(47249),e(6409)),c=e(85842);let l=class extends((0,o.O)(i.oY)){constructor(t){super(t),this.type="georeferenced",this.origin=null}};(0,r._)([(0,s.e)({georeferenced:"georeferenced"},{readOnly:!0})],l.prototype,"type",void 0),(0,r._)([(0,a.MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],l.prototype,"origin",void 0),l=(0,r._)([(0,c.$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],l);const u=l},5845:(t,n,e)=>{e.d(n,{A:()=>h});var r=e(35143),o=e(69098),i=e(42553),a=e(46053),s=(e(81806),e(76460),e(47249),e(6409)),c=e(85842),l=e(9392);let u=class extends((0,o.O)(i.oY)){constructor(t){super(t),this.type="local",this.origin=(0,l.vt)()}};(0,r._)([(0,s.e)({local:"local"},{readOnly:!0})],u.prototype,"type",void 0),(0,r._)([(0,a.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"origin",void 0),u=(0,r._)([(0,c.$)("esri.geometry.support.MeshLocalVertexSpace")],u);const h=u},80066:(t,n,e)=>{e.d(n,{j:()=>o});var r=e(76460);const o=()=>r.A.getLogger("esri.views.3d.support.buffer.math")},98357:(t,n,e)=>{e.r(n),e.d(n,{default:()=>s});var r=e(81806),o=e(70373),i=e(99773),a=e(48620);class s{async createIndex(t,n){var e;const r=new Array;if(null===(e=t.vertexAttributes)||void 0===e||!e.position)return new o.w;const i=this._createMeshData(t),a=null!=n?await n.invoke("createIndexThread",i,{transferList:r}):this.createIndexThread(i).result;return this._createPooledRBush().fromJSON(a)}createIndexThread(t){const n=new Float64Array(t.position),e=this._createPooledRBush();return t.components?this._createIndexComponentsThread(e,n,t.components.map((t=>new Uint32Array(t)))):this._createIndexAllThread(e,n)}_createIndexAllThread(t,n){const e=new Array(n.length/9);let r=0;for(let o=0;o<n.length;o+=9)e[r++]=c(n,o,o+3,o+6);return t.load(e),{result:t.toJSON()}}_createIndexComponentsThread(t,n,e){let r=0;for(const a of e)r+=a.length/3;const o=new Array(r);let i=0;for(const a of e)for(let t=0;t<a.length;t+=3)o[i++]=c(n,3*a[t],3*a[t+1],3*a[t+2]);return t.load(o),{result:t.toJSON()}}_createMeshData(t){const n=((0,i.Hq)(t.vertexSpace)?(0,a.bA)({position:t.vertexAttributes.position,normal:null,tangent:null},t.vertexSpace,t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some((t=>!t.faces))?{position:n}:{position:n,components:t.components.map((t=>t.faces))}}_createPooledRBush(){return new o.w(9,(0,r.A)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function c(t,n,e,r){return{minX:Math.min(t[n],t[e],t[r]),maxX:Math.max(t[n],t[e],t[r]),minY:Math.min(t[n+1],t[e+1],t[r+1]),maxY:Math.max(t[n+1],t[e+1],t[r+1]),p0:[t[n],t[n+1],t[n+2]],p1:[t[e],t[e+1],t[e+2]],p2:[t[r],t[r+1],t[r+2]]}}}}]);
//# sourceMappingURL=7767.0b47709c.chunk.js.map