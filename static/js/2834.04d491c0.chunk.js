"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[2834],{43047:(e,t,n)=>{n.d(t,{a:()=>v,b:()=>r,c:()=>s,d:()=>c,e:()=>I,f:()=>f,g:()=>a,h:()=>_,i:()=>p,j:()=>m,l:()=>y,n:()=>g,s:()=>o,t:()=>x});var i=n(53494);function s(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function r(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function o(e,t,n,i,s){return e[0]=t,e[1]=n,e[2]=i,e[3]=s,e}function a(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function l(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function u(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e}function d(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e}function c(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function h(e,t){const n=t[0]-e[0],i=t[1]-e[1],s=t[2]-e[2],r=t[3]-e[3];return Math.sqrt(n*n+i*i+s*s+r*r)}function f(e,t){const n=t[0]-e[0],i=t[1]-e[1],s=t[2]-e[2],r=t[3]-e[3];return n*n+i*i+s*s+r*r}function p(e){const t=e[0],n=e[1],i=e[2],s=e[3];return Math.sqrt(t*t+n*n+i*i+s*s)}function m(e){const t=e[0],n=e[1],i=e[2],s=e[3];return t*t+n*n+i*i+s*s}function g(e,t){const n=t[0],i=t[1],s=t[2],r=t[3];let o=n*n+i*i+s*s+r*r;return o>0&&(o=1/Math.sqrt(o),e[0]=n*o,e[1]=i*o,e[2]=s*o,e[3]=r*o),e}function _(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function y(e,t,n,i){const s=t[0],r=t[1],o=t[2],a=t[3];return e[0]=s+i*(n[0]-s),e[1]=r+i*(n[1]-r),e[2]=o+i*(n[2]-o),e[3]=a+i*(n[3]-a),e}function x(e,t,n){const i=t[0],s=t[1],r=t[2],o=t[3];return e[0]=n[0]*i+n[4]*s+n[8]*r+n[12]*o,e[1]=n[1]*i+n[5]*s+n[9]*r+n[13]*o,e[2]=n[2]*i+n[6]*s+n[10]*r+n[14]*o,e[3]=n[3]*i+n[7]*s+n[11]*r+n[15]*o,e}function v(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function I(e,t){const n=e[0],s=e[1],r=e[2],o=e[3],a=t[0],l=t[1],u=t[2],d=t[3],c=(0,i.FD)();return Math.abs(n-a)<=c*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(s-l)<=c*Math.max(1,Math.abs(s),Math.abs(l))&&Math.abs(r-u)<=c*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(o-d)<=c*Math.max(1,Math.abs(o),Math.abs(d))}const b=l,S=u,M=d,w=h,B=f,F=p,N=m;Object.freeze(Object.defineProperty({__proto__:null,add:a,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},copy:s,copyVec3:r,dist:w,distance:h,div:M,divide:d,dot:_,equals:I,exactEquals:v,floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},len:F,length:p,lerp:y,max:function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e},min:function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e},mul:S,multiply:u,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},normalize:g,random:function(e,t){const n=i.Ov;let s,r,o,a,l,u;t=t||1;do{s=2*n()-1,r=2*n()-1,l=s*s+r*r}while(l>=1);do{o=2*n()-1,a=2*n()-1,u=o*o+a*a}while(u>=1);const d=Math.sqrt((1-l)/u);return e[0]=t*s,e[1]=t*r,e[2]=t*o*d,e[3]=t*a*d,e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:c,scaleAndAdd:function(e,t,n,i){return e[0]=t[0]+n[0]*i,e[1]=t[1]+n[1]*i,e[2]=t[2]+n[2]*i,e[3]=t[3]+n[3]*i,e},set:o,sqrDist:B,sqrLen:N,squaredDistance:f,squaredLength:m,str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},sub:b,subtract:l,transformMat4:x,transformQuat:function(e,t,n){const i=t[0],s=t[1],r=t[2],o=n[0],a=n[1],l=n[2],u=n[3],d=u*i+a*r-l*s,c=u*s+l*i-o*r,h=u*r+o*s-a*i,f=-o*i-a*s-l*r;return e[0]=d*u+f*-o+c*-l-h*-a,e[1]=c*u+f*-a+h*-o-d*-l,e[2]=h*u+f*-l+d*-a-c*-o,e[3]=t[3],e}},Symbol.toStringTag,{value:"Module"}))},51344:(e,t,n)=>{function i(e){return null!=a(e)||null!=o(e)}function s(e){return l.test(e)}function r(e){var t;return null!==(t=a(e))&&void 0!==t?t:o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(d&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!u.test(e[i]),i++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){var t,n,i,s;const r=l.exec(e);if(null===r||void 0===r||!r.groups)return null;const o=r.groups,a=+o.year,u=+o.month-1,d=+o.day,c=+(null!==(t=o.hours)&&void 0!==t?t:"0"),h=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),f=+(null!==(i=o.seconds)&&void 0!==i?i:"0");if(c>23)return null;if(h>59)return null;if(f>59)return null;const p=null!==(s=o.ms)&&void 0!==s?s:"0",m=p?+p.padEnd(3,"0").substring(0,3):0;let g;if(o.isUTC||!o.offsetSign)g=Date.UTC(a,u,d,c,h,f,m);else{const e=+o.offsetHours,t=+o.offsetMinutes;g=6e4*("+"===o.offsetSign?-1:1)*(60*e+t)+Date.UTC(a,u,d,c,h,f,m)}return Number.isNaN(g)?null:g}n.d(t,{Br:()=>s,Cq:()=>i,_U:()=>r});const l=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,d=!Number.isNaN(new Date("technology 10").getTime())},55855:(e,t,n)=>{function i(){return[0,0,0,0]}function s(e){return[e[0],e[1],e[2],e[3]]}function r(e,t,n,i){return[e,t,n,i]}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0,0];const n=Math.min(4,e.length);for(let i=0;i<n;++i)t[i]=e[i];return t}function a(){return[0,0,0,0]}function l(){return r(1,1,1,1)}function u(){return r(1,0,0,0)}function d(){return r(0,1,0,0)}function c(){return r(0,0,1,0)}function h(){return r(0,0,0,1)}n.d(t,{Un:()=>p,ci:()=>o,fA:()=>r,o8:()=>s,uY:()=>f,vt:()=>i});const f=[0,0,0,0],p=l(),m=u(),g=d(),_=c(),y=h();Object.freeze(Object.defineProperty({__proto__:null,ONES:p,UNIT_W:y,UNIT_X:m,UNIT_Y:g,UNIT_Z:_,ZEROS:f,clone:s,create:i,createView:function(e,t){return new Float64Array(e,t,4)},fromArray:o,fromValues:r,ones:l,unitW:h,unitX:u,unitY:d,unitZ:c,zeros:a},Symbol.toStringTag,{value:"Module"}))},70373:(e,t,n)=>{n.d(t,{w:()=>o});var i=n(18690),s=n(30015),r=n(61196);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=arguments.length>1?arguments[1]:void 0;this._compareMinX=d,this._compareMinY=c,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),x.prune(),v.prune(),I.prune(),b.prune()}all(e){this._all(this._data,e)}search(e,t){let n=this._data;const i=this._toBBox;if(_(e,n))for(x.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;_(e,o)&&(n.leaf?t(r):g(e,o)?this._all(r,t):x.push(r))}n=x.pop()}}collides(e){let t=this._data;const n=this._toBBox;if(!_(e,t))return!1;for(x.clear();t;){for(let i=0,s=t.children.length;i<s;i++){const s=t.children[i],r=t.leaf?n(s):s;if(_(e,r)){if(t.leaf||g(e,r))return!0;x.push(s)}}t=x.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new w([]),this}remove(e){if(!e)return this;let t,n=this._data,s=null,r=0,o=!1;const a=this._toBBox(e);for(I.clear(),b.clear();n||I.length>0;){var l;if(n||(n=I.pop(),s=I.data[I.length-1],r=null!==(l=b.pop())&&void 0!==l?l:0,o=!0),n.leaf&&(t=(0,i.qh)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),I.push(n),this._condense(I),this;o||n.leaf||!g(n,a)?s?(r++,n=s.children[r],o=!1):n=null:(I.push(n),b.push(r),r=0,s=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,t){let n=e;for(v.clear();n;){var i;if(!0===n.leaf)for(const e of n.children)t(e);else v.pushArray(n.children);n=null!==(i=v.pop())&&void 0!==i?i:null}}_build(e,t,n,i){const s=n-t+1;let r=this._maxEntries;if(s<=r){const i=new w(e.slice(t,n+1));return a(i,this._toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new B([]);o.height=i;const l=Math.ceil(s/r),u=l*Math.ceil(Math.sqrt(r));y(e,t,n,u,this._compareMinX);for(let a=t;a<=n;a+=u){const t=Math.min(a+u-1,n);y(e,a,t,l,this._compareMinY);for(let n=a;n<=t;n+=l){const s=Math.min(n+l-1,t);o.children.push(this._build(e,n,s,i-1))}}return a(o,this._toBBox),o}_chooseSubtree(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=h(o),l=p(e,o)-a;l<s?(s=l,i=a<i?a:i,n=o):l===s&&a<i&&(i=a,n=o)}t=n||t.children[0]}return t}_insert(e,t,n){const i=this._toBBox,s=n?e:i(e);I.clear();const r=this._chooseSubtree(s,this._data,t,I);for(r.children.push(e),u(r,s);t>=0&&I.data[t].children.length>this._maxEntries;)this._split(I,t),t--;this._adjustParentBBoxes(s,I,t)}_split(e,t){const n=e.data[t],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),l=n.leaf?new w(o):new B(o);l.height=n.height,a(n,this._toBBox),a(l,this._toBBox),t?e.data[t-1].children.push(l):this._splitRoot(n,l)}_splitRoot(e,t){this._data=new B([e,t]),this._data.height=e.height+1,a(this._data,this._toBBox)}_chooseSplitIndex(e,t,n){let i,s,r;i=s=1/0;for(let o=t;o<=n-t;o++){const t=l(e,0,o,this._toBBox),a=l(e,o,n,this._toBBox),u=m(t,a),d=h(t)+h(a);u<i?(i=u,r=o,s=d<s?d:s):u===i&&d<s&&(s=d,r=o)}return r}_chooseSplitAxis(e,t,n){const i=e.leaf?this._compareMinX:d,s=e.leaf?this._compareMinY:c;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,s)&&e.children.sort(i)}_allDistMargin(e,t,n,i){e.children.sort(i);const s=this._toBBox,r=l(e,0,t,s),o=l(e,n-t,n,s);let a=f(r)+f(o);for(let l=t;l<n-t;l++){const t=e.children[l];u(r,e.leaf?s(t):t),a+=f(r)}for(let l=n-t-1;l>=t;l--){const t=e.children[l];u(o,e.leaf?s(t):t),a+=f(o)}return a}_adjustParentBBoxes(e,t,n){for(let i=n;i>=0;i--)u(t.data[i],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const s=e.data[t-1],r=s.children;r.splice((0,i.qh)(r,n,r.length,s.indexHint),1)}else this.clear();else a(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function a(e,t){l(e,0,e.children.length,t,e)}function l(e,t,n,i,s){s||(s=new w([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],u(s,e.leaf?i(r):r);return s}function u(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function d(e,t){return e.minX-t.minX}function c(e,t){return e.minY-t.minY}function h(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function f(e){return e.maxX-e.minX+(e.maxY-e.minY)}function p(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function m(e,t){const n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function g(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function _(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function y(e,t,n,i,s){const o=[t,n];for(;o.length;){const t=o.pop(),n=o.pop();if(t-n<=i)continue;const a=n+Math.ceil((t-n)/i/2)*i;(0,r.q)(e,a,n,t,s),o.push(n,a,a,t)}}const x=new s.A,v=new s.A,I=new s.A,b=new s.A({deallocator:void 0});class S{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class M extends S{constructor(){super(...arguments),this.height=1,this.indexHint=new i.vW}}class w extends M{constructor(e){super(),this.children=e,this.leaf=!0}}class B extends M{constructor(e){super(),this.children=e,this.leaf=!1}}},20481:(e,t,n)=>{n.d(t,{B:()=>u,GP:()=>a,qg:()=>d});var i=n(88685),s=n(38042);const r={ar:[".",","],bg:[",","\xa0"],bs:[",","."],ca:[",","."],cs:[",","\xa0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\xa0"],fi:[",","\xa0"],fr:[",","\u202f"],"fr-ch":[",","\u202f"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\xa0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\xa0"],lv:[",","\xa0"],mk:[",","."],nb:[",","\xa0"],nl:[",","."],pl:[",","\xa0"],pt:[",","."],"pt-pt":[",","\xa0"],ro:[",","."],ru:[",","\xa0"],sk:[",","\xa0"],sl:[",","."],sr:[",","."],sv:[",","\xa0"],th:[".",","],tr:[",","."],uk:[",","\xa0"],vi:[",","."],zh:[".",","]};function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,s.JK)(),t=(e=e.toLowerCase())in r;if(!t){const n=e.split("-");n.length>1&&n[0]in r&&(e=n[0],t=!0),t||(e="en")}const[n,i,o="#,##0.###"]=r[e];return{decimal:n,group:i,pattern:o}}function a(e,t){const n=o((t={...t}).locale);t.customs=n;const i=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,t,n){const i=(n=n||{}).customs.group,s=n.customs.decimal,r=t.split(";"),o=r[0];if((t=r[e<0?1:0]||"-"+o).includes("%"))e*=100;else if(t.includes("\u2030"))e*=1e3;else{if(t.includes("\xa4"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const a=l,u=o.match(a);if(!u)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(a,function(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const i=t.split("."),s="string"==typeof n.places&&n.places.indexOf(",");let r=n.places;s?r=n.places.substring(s+1):+r>=0||(r=(i[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(r))));const o=String(Math.abs(e)).split("."),a=o[1]||"";if(i[1]||n.places){s&&(n.places=n.places.substring(0,s));const e=void 0!==n.places?n.places:i[1]&&i[1].lastIndexOf("0")+1;+e>a.length&&(o[1]=a.padEnd(Number(e),"0")),+r<a.length&&(o[1]=a.substr(0,Number(r)))}else o[1]&&o.pop();const l=i[0].replace(",","");let u=l.indexOf("0");-1!==u&&(u=l.length-u,u>o[0].length&&(o[0]=o[0].padStart(u,"0")),l.includes("#")||(o[0]=o[0].substr(o[0].length-u)));let d,c,h=i[0].lastIndexOf(",");if(-1!==h){d=i[0].length-h-1;const e=i[0].substr(0,h);h=e.lastIndexOf(","),-1!==h&&(c=e.length-h-1)}const f=[];for(let p=o[0];p;){const e=p.length-d;f.push(e>0?p.substr(e):p),p=e>0?p.slice(0,e):"",c&&(d=c,c=void 0)}return o[0]=f.reverse().join(n.group||","),o.join(n.decimal||".")}(e,u[0],{decimal:s,group:i,places:n.places,round:n.round}))}(e,i,t)}const l=/[#0,]*[#0](?:\.0*#*)?/;function u(e){const t=o((e=e||{}).locale),n=e.pattern||t.pattern,s=t.group,r=t.decimal;let a=1;if(n.includes("%"))a/=100;else if(n.includes("\u2030"))a/=1e3;else if(n.includes("\xa4"))throw new Error("currency notation not supported");const u=n.split(";");1===u.length&&u.push("-"+u[0]);const d=h(u,(t=>(t="(?:"+(0,i.Cj)(t,".")+")").replace(l,(t=>{const n={signed:!1,separator:e.strict?s:[s,""],fractional:e.fractional,decimal:r,exponent:!1},i=t.split(".");let o=e.places;1===i.length&&1!==a&&(i[1]="###"),1===i.length||0===o?n.fractional=!1:(void 0===o&&(o=e.pattern?i[1].lastIndexOf("0")+1:1/0),o&&null==e.fractional&&(n.fractional=!0),!e.places&&+o<i[1].length&&(o+=","+i[1].length),n.places=o);const l=i[0].split(",");return l.length>1&&(n.groupSize=l.pop().length,l.length>1&&(n.groupSize2=l.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=c(e),n=h(e.fractional,(t=>{let n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0);let i=t+n;return n&&(i="(?:(?:"+i+")|(?:"+n+"))"),i+h(e.exponent,(t=>t?"([eE]"+c({signed:e.eSigned})+")":""))}(n)+")"}))),!0);return{regexp:d.replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:s,decimal:r,factor:a}}function d(e,t){const n=u(t),i=new RegExp("^"+n.regexp+"$").exec(e);if(!i)return NaN;let s=i[1];if(!i[1]){if(!i[2])return NaN;s=i[2],n.factor*=-1}return s=s.replaceAll(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(s)*n.factor}function c(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",h(e.signed,(e=>e?"[-+]":""),!0)+h(e.separator,(t=>{if(!t)return"(?:\\d+)";" "===(t=(0,i.Cj)(t))?t="\\s":"\xa0"===t&&(t="\\s\\xa0");const n=e.groupSize,s=e.groupSize2;if(s){const e="(?:0|[1-9]\\d{0,"+(s-1)+"}(?:["+t+"]\\d{"+s+"})*["+t+"]\\d{"+n+"})";return n-s>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"}),!0)}const h=(e,t,n)=>{if(!(e instanceof Array))return t(e);const i=[];for(let s=0;s<e.length;s++)i.push(t(e[s]));return f(i.join("|"),Boolean(n))},f=(e,t)=>"("+(t?"?:":"")+e+")"},33328:(e,t,n)=>{n.d(t,{F:()=>l});var i=n(81806),s=n(70373),r=n(2413);const o={minX:0,minY:0,maxX:0,maxY:0};function a(e,t,n){(function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]})(t),e.search(o,n)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.w(9,(0,i.A)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,i)=>{e[t++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.Ie)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),a(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},72547:(e,t,n)=>{n.d(t,{A:()=>p});var i=n(18690),s=n(50076),r=n(54099),o=n(76460),a=n(42294),l=n(2413),u=n(98618),d=n(33328),c=n(55167),h=n(26724);const f=(0,a.vt)();class p{constructor(e){this.geometryInfo=e,this._boundsStore=new d.F,this._featuresById=new Map,this._markedIds=new Set,this.events=new r.A,this.featureAdapter=h.T}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;const[t,n,i,s]=this.fullBounds;return{xmin:t,ymin:n,xmax:i,ymax:s,spatialReference:(0,c.ag)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}upsertMany(e){const t=e.map((e=>this._upsert(e)));return this._emitChanged(),t.filter(i.Ru)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t((0,a.Jt)(f,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){var t;if(!e)return;const n=e.objectId;if(null==n)return void o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.A("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(n);let r;if(this._markedIds.add(n),i?(e.displayId=i.displayId,r=this._boundsStore.get(n),this._boundsStore.delete(n)):null!=this.onFeatureAdd&&this.onFeatureAdd(e),null===(t=e.geometry)||void 0===t||null===(t=t.coords)||void 0===t||!t.length)return this._boundsStore.set(n,null),void this._featuresById.set(n,e);r=(0,u.jQ)(null!=r?r:(0,l.vt)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=r&&this._boundsStore.set(n,r),this._featuresById.set(n,e)}_upsert(e){var t;const n=null===e||void 0===e?void 0:e.objectId;if(null==n)return o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.A("featurestore:invalid-feature","feature id is missing",{feature:e})),null;const i=this._featuresById.get(n);if(!i)return this._add(e),e;this._markedIds.add(n);const{geometry:r,attributes:a}=e;for(const s in a)i.attributes[s]=a[s];return r&&(i.geometry=r,this._boundsStore.set(n,null!==(t=(0,u.jQ)((0,l.vt)(),r,this.geometryInfo.hasZ,this.geometryInfo.hasM))&&void 0!==t?t:null)),i}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}},12914:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});n(35238);var i=n(3825),s=n(98773),r=n(51344),o=n(50076),a=n(76460),l=n(50346),u=n(90534),d=n(9624),c=n(28778),h=n(80963),f=n(45417),p=n(20176),m=n(1484),g=n(72547),_=n(24586),y=n(26151),x=n(20481),v=n(53430);const I=/^\s*"([\S\s]*)"\s*$/,b=/""/g,S="\n",M=[","," ",";","|","\t"];function*w(e,t,n){let i=0;for(;i<=e.length;){const s=e.indexOf(t,i),r=e.substring(i,s>-1?s:void 0);i+=r.length+t.length,n&&!r.trim()||(yield r)}}function B(e){const t=e.includes("\r\n")?"\r\n":S;return w(e,t,!0)}function F(e,t){return w(e,t,!1)}function N(e,t,n){var i;e=e.trim(),t=null===(i=t)||void 0===i?void 0:i.trim();const s=[],r=Array.from(new Set([null===n||void 0===n?void 0:n.delimiter,...M])).filter((e=>null!=e));for(const l of r){var o;const n=A(e,l).length,i=null!==(o=A(t,l).length)&&void 0!==o?o:n;n>1&&s.push({weight:Math.min(n,i),delimiter:l})}const a=s.sort(((e,t)=>{let{weight:n}=e,{weight:i}=t;return i-n})).map((e=>{let{delimiter:t}=e;return t}));for(const l of a){const t=Y(E(e,l).names,null===n||void 0===n?void 0:n.longitudeField,null===n||void 0===n?void 0:n.latitudeField);if(t.longitudeFieldName&&t.latitudeFieldName)return{delimiter:l,locationInfo:t}}return{delimiter:a[0],locationInfo:null}}function T(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>Object.create(null);return function*(){const s=B(e);s.next();let r="",o="",a=0,l=i(),u=0;e:for(const e of s){const s=F(e,n);for(const e of s)if(r+=o+e,o="",a+=C(e),a%2==0){if(a>0){const e=I.exec(r);if(!e){l=i(),u=0,r="",a=0;continue e}l[t[u]]=e[1].replaceAll(b,'"'),u++}else l[t[u]]=r,u++;r="",a=0}else o=n;0===a?(yield l,l=i(),u=0):o=S}}()}function E(e,t){const n=A(e,t).filter((e=>null!=e)),i=n.map((e=>(0,v.rS)(e)));for(let s=i.length-1;s>=0;s--)i[s]||(i.splice(s,1),n.splice(s,1));return{names:i,aliases:n}}function A(e,t){if(null===e||void 0===e||!e.length)return[];const n=[];let i="",s="",r=0;const o=F(e,t);for(const a of o)if(i+=s+a,s="",r+=C(a),r%2==0){if(r>0){const e=I.exec(i);e&&n.push(e[1].replaceAll(b,'"'))}else n.push(i);i="",r=0}else s=t;return n}function C(e){let t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}function Y(e,t,n){var i,s;t=null===(i=(0,v.rS)(t))||void 0===i?void 0:i.toLowerCase(),n=null===(s=(0,v.rS)(n))||void 0===s?void 0:s.toLowerCase();const r=e.map((e=>e.toLowerCase())),o=t?e[r.indexOf(t)]:null,a=n?e[r.indexOf(n)]:null;return{longitudeFieldName:o||e[r.indexOf(j.find((e=>r.includes(e))))],latitudeFieldName:a||e[r.indexOf(q.find((e=>r.includes(e))))]}}function O(e){if(!e.length)return"string";const t=/[^+\-.,0-9]/;return e.map((e=>{if(""!==e){if(!t.test(e)){let t=X(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")){if(t=Number(e),!Number.isNaN(t))return"double";if(e.includes(",")&&(e=e.replace(",","."),t=Number(e),!Number.isNaN(t)))return"double"}}return(0,r.Cq)(e)?"date":"string"}})).reduce(((e,t)=>void 0===e?t:void 0===t?e:e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}const X=function(){const e=(0,x.B)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),i=e.factor;return s=>{const r=t.exec(s);if(e.factor=i,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],e.factor*=-1}return o=o.replace(n,"").replace(e.decimal,"."),+o*e.factor}}(),q=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],j=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"];var k=n(40296),D=n(1900),L=n(67478),R=n(13312);const z=(0,k.F0)("esriGeometryPoint"),P=["csv"],U=[0,0];class V{constructor(e,t){this.x=e,this.y=t}}class Z{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=null}async load(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._loadOptions=e;const[i]=await Promise.all([this._fetch(n.signal),this._checkProjection(null===e||void 0===e||null===(t=e.parsingOptions)||void 0===t?void 0:t.spatialReference)]),s=function(e,t){var n,i,s;const r=t.parsingOptions||{},a={delimiter:r.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:r.latitudeField,longitudeFieldName:r.longitudeField}},l=a.layerDefinition={name:(0,u.e7)(t.url,P)||"csv",dateFieldsTimeReference:{timeZoneIANA:L.n$},drawingInfo:z,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:r.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:r.spatialReference||{wkid:4326}}},d=B(e),c=null===(n=d.next().value)||void 0===n?void 0:n.trim(),h=null===(i=d.next().value)||void 0===i?void 0:i.trim();if(!c)throw new o.A("csv-layer:empty-csv","CSV is empty",{csv:e});const{delimiter:f,locationInfo:p}=N(c,h,r);if(!f)throw new o.A("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:c,secondLine:h,parsingOptions:r});if(!p)throw new o.A("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:c,secondLine:h,parsingOptions:r});a.locationInfo=p,a.delimiter=f;const{names:m,aliases:g}=E(c,f),_=function(e,t,n,i,s){const r=[],o=T(e,n,t),a=[];for(const l of o){if(10===a.length)break;a.push(l)}for(let l=0;l<n.length;l++){const e=n[l],t=i[l];if(e===s.longitudeFieldName||e===s.latitudeFieldName)r.push({name:e,type:"esriFieldTypeDouble",alias:t});else{let n;switch(O(a.map((t=>t[e])))){case"integer":n="esriFieldTypeInteger";break;case"double":n="esriFieldTypeDouble";break;case"date":n="esriFieldTypeDate";break;default:n="esriFieldTypeString"}r.push({name:e,type:n,alias:t,length:(0,v._b)(n)})}}return r}(e,a.delimiter,m,g,a.locationInfo);if(null!==(s=r.fields)&&void 0!==s&&s.length){const e=new D.A(r.fields);for(const t of _){const n=e.get(t.name);n&&Object.assign(t,n)}}if(!_.some((e=>"esriFieldTypeOID"===e.type&&(l.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};l.objectIdField=e.name,_.unshift(e)}l.fields=_;const y=new D.A(l.fields);if(a.locationInfo&&(a.locationInfo.latitudeFieldName=y.get(a.locationInfo.latitudeFieldName).name,a.locationInfo.longitudeFieldName=y.get(a.locationInfo.longitudeFieldName).name),l.timeInfo){const e=l.timeInfo;if(e.startTimeField){const t=y.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=y.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=y.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(l.timeInfo=null)}return a}(i,e);this._locationInfo=s.locationInfo,this._delimiter=s.delimiter,this._queryEngine=this._createQueryEngine(s);const r=await this._createFeatures(i);this._queryEngine.featureStore.addMany(r);const{fullExtent:a,timeExtent:l}=await this._queryEngine.fetchRecomputedExtents();if(s.layerDefinition.extent=a,l){const{start:e,end:t}=l;s.layerDefinition.timeInfo.timeExtent=[e,t]}return s}async applyEdits(){throw new o.A("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;this._loadOptions.customParameters=e,null!==(t=this._snapshotTask)&&void 0!==t&&t.abort(),this._snapshotTask=(0,s.UT)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,l.zf)(e)||a.A.getLogger("esri.layers.CSVLayer").error(new o.A("csv-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:n,timeExtent:i}=await this._queryEngine.fetchRecomputedExtents();return{extent:n,timeExtent:i}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions;if(!t)throw new o.A("csv-layer:invalid-source","url not defined");const s=(0,u.An)(t);return(await(0,i.A)(s.path,{query:{...s.query,...n},responseType:"text",signal:e})).data}_createQueryEngine(e){const{objectIdField:t,fields:n,extent:i,timeInfo:s}=e.layerDefinition,r=new g.A({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new y.d({fieldsIndex:D.A.fromLayerJSON({fields:n,dateFieldsTimeReference:{timeZoneIANA:L.n$}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:t,spatialReference:i.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:r})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:n}=this._locationInfo,{objectIdField:i,fieldsIndex:s,spatialReference:o}=this._queryEngine;let a=[];const l=[],u=s.fields.filter((e=>e.name!==i)).map((e=>e.name));let g=0;const _={};for(const r of s.fields)if("esriFieldTypeOID"!==r.type&&"esriFieldTypeGlobalID"!==r.type){const e=(0,v.lD)(r);void 0!==e&&(_[r.name]=e)}const y=T(e,u,this._delimiter,(0,k.Vx)(_,i));for(const d of y){const e=this._parseCoordinateValue(d[t]),o=this._parseCoordinateValue(d[n]);if(null!=o&&null!=e&&!isNaN(e)&&!isNaN(o)){d[t]=e,d[n]=o;for(const e in d)if(e!==t&&e!==n)if(s.isDateField(e))d[e]=(0,r._U)(d[e]);else if(s.isNumericField(e)){const t=X(d[e]);isNaN(t)?d[e]=null:d[e]=t}d[i]=g,g++,a.push(new V(o,e)),l.push(d)}}if(!(0,h.aI)({wkid:4326},o))if((0,h.K8)(o))for(const r of a)[r.x,r.y]=(0,f.je)(r.x,r.y,U);else a=(0,d.projectMany)(c.g,a,R.A.WGS84,o,null,null);const x=[];for(let r=0;r<a.length;r++){const{x:e,y:t}=a[r],n=l[r];n[i]=r+1,x.push(new p.Om(new m.A([],[e,t]),n,null,n[i]))}return x}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=X(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await(0,_.Nk)(h.KK,e)}catch{throw new o.A("csv-layer:projection-not-supported","Projection not supported")}}}},40296:(e,t,n)=>{n.d(t,{F0:()=>a,Vx:()=>d,e2:()=>c,f:()=>h});var i=n(81806),s=n(53084),r=n(8298),o=n(44460);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.Cb:"esriGeometryPolyline"===e?o.yM:o.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function d(e,t){if((0,i.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n="this.".concat(t," = null;");for(const t in e)n+="this".concat(l.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const i=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new i}catch(n){return()=>({[t]:null,...e})}}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.o8)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},44460:(e,t,n)=>{n.d(t,{Cb:()=>r,HW:()=>d,JR:()=>s,JZ:()=>l,WR:()=>a,b6:()=>c,fT:()=>i,nC:()=>u,yM:()=>o});const i=[252,146,31,255],s=[153,153,153,255],r={type:"esriSMS",style:"esriSMSCircle",size:6,color:i,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:i},a={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},u={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},d={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},c={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);
//# sourceMappingURL=2834.04d491c0.chunk.js.map