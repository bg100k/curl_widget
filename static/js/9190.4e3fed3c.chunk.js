/*! For license information please see 9190.4e3fed3c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[9190],{80416:(t,e,n)=>{function i(t){return"l"===t?"m":"s"}async function s(t){await(function(t){return"function"===typeof t.componentOnReady}(t)?t.componentOnReady():new Promise((t=>requestAnimationFrame((()=>t())))))}n.d(e,{c:()=>s,g:()=>i})},67294:(t,e,n)=>{n.d(e,{I:()=>h,d:()=>g});var i=n(82108),s=n(39879),a=n(6676);const c="flip-rtl",r={},o={},l={s:16,m:24,l:32};async function u(t){let{icon:e,scale:n}=t;const s=l[n],a=function(t){const e=!isNaN(Number(t.charAt(0))),n=t.split("-");if(n.length>0){const e=/[a-z]/i;t=n.map(((t,n)=>t.replace(e,(function(t,e){return 0===n&&0===e?t:t.toUpperCase()})))).join("")}return e?"i".concat(t):t}(e),c="F"===a.charAt(a.length-1),u=c?a.substring(0,a.length-1):a,h="".concat(u).concat(s).concat(c?"F":"");if(r[h])return r[h];o[h]||(o[h]=fetch((0,i.OX)("./assets/icon/".concat(h,".json"))).then((t=>t.json())).catch((()=>(console.error('"'.concat(h,'" is not a valid calcite-ui-icon name')),""))));const g=await o[h];return r[h]=g,g}const h=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:e,pathData:n,scale:a,textLabel:r}=this,o=(0,s.a)(t),u=l[a],h=!!r,g=[].concat(n||"");return(0,i.h)(i.xr,{"aria-hidden":(0,s.t)(!h),"aria-label":h?r:null,role:h?"img":null},(0,i.h)("svg",{"aria-hidden":"true",class:{[c]:"rtl"===o&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(u," ").concat(u),width:"100%",xmlns:"http://www.w3.org/2000/svg"},g.map((t=>"string"===typeof t?(0,i.h)("path",{d:t}):(0,i.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:e,visible:n}=this;if(!i.L2.isBrowser||!t||!n)return;const s=await u({icon:t,scale:e});t===this.icon&&(this.pathData=s)}waitUntilVisible(t){this.intersectionObserver=(0,a.c)("intersection",(e=>{e.forEach((e=>{e.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function g(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((t=>{if("calcite-icon"===t)customElements.get(t)||customElements.define(t,h)}))}g()},15520:(t,e,n)=>{function i(t){return"Enter"===t||" "===t}n.d(e,{i:()=>i,n:()=>s});const s=["0","1","2","3","4","5","6","7","8","9"]},76527:(t,e,n)=>{n.d(e,{a:()=>r,c:()=>o,s:()=>c});var i=n(82108);const s=new WeakMap,a=new WeakMap;function c(t){a.set(t,new Promise((e=>s.set(t,e))))}function r(t){s.get(t)()}async function o(t){if(await function(t){return a.get(t)}(t),i.L2.isBrowser)return(0,i.$x)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},62785:(t,e,n)=>{n.d(e,{B:()=>o,a:()=>v,c:()=>F,d:()=>k,g:()=>x,i:()=>l,n:()=>C,p:()=>u,s:()=>f});var i=n(39879),s=n(15520),a=n(6676);const c=new RegExp("\\".concat(".","(0+)?$")),r=new RegExp("0+$");class o{constructor(t){if(t instanceof o)return t;const[e,n]=function(t){const e=t.split(/[eE]/);if(1===e.length)return t;const n=+t;if(Number.isSafeInteger(n))return"".concat(n);const i="-"===t.charAt(0),s=+e[1],a=e[0].split("."),r=(i?a[0].substring(1):a[0])||"",o=a[1]||"",l=(t,e)=>{const n=Math.abs(e)-t.length,i=n>0?"".concat("0".repeat(n)).concat(t):t;return"".concat(i.slice(0,e),".").concat(i.slice(e))},u=(t,e)=>{const n=e>t.length?"".concat(t).concat("0".repeat(e-t.length)):t;return"".concat(n.slice(0,e),".").concat(n.slice(e))},g=s>0?"".concat(r).concat(u(o,s)):"".concat(l(r,s)).concat(o);return"".concat(i?"-":"").concat("."===g.charAt(0)?"0":"").concat(g.replace(c,"").replace(h,""))}(t).split(".").concat("");this.value=BigInt(e+n.padEnd(o.DECIMALS,"0").slice(0,o.DECIMALS))+BigInt(o.ROUNDED&&n[o.DECIMALS]>="5"),this.isNegative="-"===t.charAt(0)}getIntegersAndDecimals(){const t=this.value.toString().replace("-","").padStart(o.DECIMALS+1,"0");return{integers:t.slice(0,-o.DECIMALS),decimals:t.slice(-o.DECIMALS).replace(r,"")}}toString(){const{integers:t,decimals:e}=this.getIntegersAndDecimals();return"".concat(this.isNegative?"-":"").concat(t).concat(e.length?"."+e:"")}formatToParts(t){const{integers:e,decimals:n}=this.getIntegersAndDecimals(),i=t.numberFormatter.formatToParts(BigInt(e));return this.isNegative&&i.unshift({type:"minusSign",value:t.minusSign}),n.length&&(i.push({type:"decimal",value:t.decimal}),n.split("").forEach((t=>i.push({type:"fraction",value:t})))),i}format(t){const{integers:e,decimals:n}=this.getIntegersAndDecimals(),i="".concat(this.isNegative?t.minusSign:"").concat(t.numberFormatter.format(BigInt(e))),s=n.length?"".concat(t.decimal).concat(n.split("").map((e=>t.numberFormatter.format(Number(e)))).join("")):"";return"".concat(i).concat(s)}add(t){return o.fromBigInt(this.value+new o(t).value)}subtract(t){return o.fromBigInt(this.value-new o(t).value)}multiply(t){return o._divRound(this.value*new o(t).value,o.SHIFT)}divide(t){return o._divRound(this.value*o.SHIFT,new o(t).value)}}function l(t){return!(!t||isNaN(Number(t)))}function u(t){return t&&(e=t,s.n.some((t=>e.includes(t))))?b(t,(t=>{let e=!1;const n=t.split("").filter(((t,n)=>t.match(/\./g)&&!e?(e=!0,!0):!(!t.match(/\-/g)||0!==n)||s.n.includes(t))).join("");return l(n)?new o(n).toString():""})):"";var e}o.DECIMALS=100,o.ROUNDED=!0,o.SHIFT=BigInt("1"+"0".repeat(o.DECIMALS)),o._divRound=(t,e)=>o.fromBigInt(t/e+(o.ROUNDED?t*BigInt(2)/e%BigInt(2):BigInt(0))),o.fromBigInt=t=>Object.assign(Object.create(o.prototype),{value:t,isNegative:t<BigInt(0)});const h=/^([-0])0+(?=\d)/,g=/(?!^\.)\.$/,m=/(?!^-)-/g,d=/^-\b0\b\.?0*$/,p=/0*$/,f=t=>b(t,(t=>{const e=t.replace(m,"").replace(g,"").replace(h,"$1");return l(e)?d.test(e)?e:function(t){const e=t.split(".")[1],n=new o(t).toString(),[i,s]=n.split(".");return e&&s!==e?"".concat(i,".").concat(e):n}(e):t}));function b(t,e){if(!t)return t;const n=t.toLowerCase().indexOf("e")+1;return n?t.replace(/[eE]*$/g,"").substring(0,n).concat(t.slice(n).replace(/[eE]/g,"")).split(/[eE]/).map(((t,n)=>e(1===n?t.replace(/\./g,""):t))).join("e").replace(/^e/,"1e"):e(t)}function v(t,e,n){const i=e.split(".")[1];if(i){const s=i.match(p)[0];if(s&&n.delocalize(t).length!==e.length&&-1===i.indexOf("e")){const e=n.decimal;return(t=t.includes(e)?t:"".concat(t).concat(e)).padEnd(t.length+s.length,n.localize("0"))}}return t}const w="en",_=["ar","bg","bs","ca","cs","da","de","el",w,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],y=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",w,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],I=["arab","arabext","latn"],E=t=>I.includes(t),O=(new Intl.NumberFormat).resolvedOptions().numberingSystem,S="arab"!==O&&E(O)?O:"latn";function x(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cldr";const n="cldr"===e?y:_;return t?n.includes(t)?t:"nb"===(t=t.toLowerCase())?"no":"t9n"===e&&"pt"===t?"pt-BR":(t.includes("-")&&(t=t.replace(/(\w+)-(\w+)/,((t,e,n)=>"".concat(e,"-").concat(n.toUpperCase()))),n.includes(t)||(t=t.split("-")[0])),"zh"===t?"zh-CN":n.includes(t)?t:(console.warn('Translations for the "'.concat(t,'" locale are not available and will fall back to the default, English (en).')),w)):w}const D=new Set;function F(t){!function(t){t.effectiveLocale=function(t){var e;return t.el.lang||(null===(e=(0,i.c)(t.el,"[lang]"))||void 0===e?void 0:e.lang)||document.documentElement.lang||w}(t)}(t),0===D.size&&(null===z||void 0===z||z.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0})),D.add(t)}function k(t){D.delete(t),0===D.size&&z.disconnect()}const z=(0,a.c)("mutation",(t=>{t.forEach((t=>{const e=t.target;D.forEach((t=>{if(!(0,i.b)(e,t.el))return;const n=(0,i.c)(t.el,"[lang]");if(!n)return void(t.effectiveLocale=w);const s=n.lang;t.effectiveLocale=n.hasAttribute("lang")&&""===s?w:s}))}))}));const C=new class{constructor(){this.delocalize=t=>this._numberFormatOptions?b(t,(t=>t.replace(new RegExp("[".concat(this._minusSign,"]"),"g"),"-").replace(new RegExp("[".concat(this._group,"]"),"g"),"").replace(new RegExp("[".concat(this._decimal,"]"),"g"),".").replace(new RegExp("[".concat(this._digits.join(""),"]"),"g"),this._getDigitIndex))):t,this.localize=t=>this._numberFormatOptions?b(t,(t=>l(t.trim())?new o(t.trim()).format(this).replace(new RegExp("[".concat(this._actualGroup,"]"),"g"),this._group):t)):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){var e;if(t.locale=x(null===t||void 0===t?void 0:t.locale),t.numberingSystem=(e=null===t||void 0===t?void 0:t.numberingSystem,E(e)?e:S),!this._numberFormatOptions&&t.locale===w&&t.numberingSystem===S&&2===Object.keys(t).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const n=new Map(this._digits.map(((t,e)=>[t,e]))),i=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-12345678.9);this._actualGroup=i.find((t=>"group"===t.type)).value,this._group=0===this._actualGroup.trim().length||" "==this._actualGroup?"\xa0":this._actualGroup,this._decimal=i.find((t=>"decimal"===t.type)).value,this._minusSign=i.find((t=>"minusSign"===t.type)).value,this._getDigitIndex=t=>n.get(t)}}},6676:(t,e,n)=>{n.d(e,{c:()=>s});var i=n(82108);function s(t,e,n){if(!i.L2.isBrowser)return;const s=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new s(e,n)}},76988:(t,e,n)=>{n.d(e,{c:()=>h,d:()=>g,s:()=>o,u:()=>u});var i=n(82108),s=n(62785);const a={};function c(){throw new Error("could not fetch component message bundle")}function r(t){t.messages={...t.defaultMessages,...t.messageOverrides}}async function o(t){t.defaultMessages=await l(t,t.effectiveLocale),r(t)}async function l(t,e){if(!i.L2.isBrowser)return{};const{el:n}=t,r=n.tagName.toLowerCase().replace("calcite-","");return async function(t,e){const n="".concat(e,"_").concat(t);return a[n]||(a[n]=fetch((0,i.OX)("./assets/".concat(e,"/t9n/messages_").concat(t,".json"))).then((t=>(t.ok||c(),t.json()))).catch((()=>c()))),a[n]}((0,s.g)(e,"t9n"),r)}async function u(t,e){t.defaultMessages=await l(t,e),r(t)}function h(t){t.onMessagesChange=m}function g(t){t.onMessagesChange=void 0}function m(){r(this)}}}]);
//# sourceMappingURL=9190.4e3fed3c.chunk.js.map