/*! For license information please see 4961.d8d3d9ab.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[4961],{14961:(t,e,i)=>{i.r(e),i.d(e,{CalciteFlow:()=>h,defineCustomElement:()=>u});var s=i(82108),o=i(6676),n=i(76527);const r="frame",a="frame--advancing",c="frame--retreating",l=(0,s.w$)(class extends s.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.itemMutationObserver=(0,o.c)("mutation",(()=>this.updateFlowProps())),this.getFlowDirection=(t,e)=>t&&e>1||t>1?e<t?"retreating":"advancing":null,this.updateFlowProps=()=>{const{customItemSelectors:t,el:e,items:i}=this,s=Array.from(e.querySelectorAll("calcite-flow-item".concat(t?",".concat(t):""))).filter((t=>t.closest("calcite-flow")===e)),o=i.length,n=s.length,r=s[n-1],a=s[n-2];if(n&&r&&s.forEach((t=>{t.showBackButton=t===r&&n>1,t.hidden=t!==r})),a&&(a.menuOpen=!1),this.items=s,o!==n){const t=this.getFlowDirection(o,n);this.itemCount=n,this.flowDirection=t}},this.customItemSelectors=void 0,this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:t}=this,e=t[t.length-1];if(!e)return;const i=e.beforeBack?e.beforeBack:()=>Promise.resolve();try{await i.call(e)}catch(s){return}return e.remove(),e}async setFocus(){await(0,n.c)(this);const{items:t}=this,e=t[t.length-1];return null===e||void 0===e?void 0:e.setFocus()}connectedCallback(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}async componentWillLoad(){(0,n.s)(this)}componentDidLoad(){(0,n.a)(this)}disconnectedCallback(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.disconnect()}async handleItemBackClick(t){if(!t.defaultPrevented)return await this.back(),this.setFocus()}render(){const{flowDirection:t}=this,e={[r]:!0,[a]:"advancing"===t,[c]:"retreating"===t};return(0,s.h)("div",{class:e},(0,s.h)("slot",null))}get el(){return this}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-flow",{customItemSelectors:[1,"custom-item-selectors"],flowDirection:[32],itemCount:[32],items:[32],back:[64],setFocus:[64]},[[0,"calciteFlowItemBack","handleItemBackClick"]]]);function d(){if("undefined"===typeof customElements)return;["calcite-flow"].forEach((t=>{if("calcite-flow"===t)customElements.get(t)||customElements.define(t,l)}))}d();const h=l,u=d},76527:(t,e,i)=>{i.d(e,{a:()=>a,c:()=>c,s:()=>r});var s=i(82108);const o=new WeakMap,n=new WeakMap;function r(t){n.set(t,new Promise((e=>o.set(t,e))))}function a(t){o.get(t)()}async function c(t){if(await function(t){return n.get(t)}(t),s.L2.isBrowser)return(0,s.$x)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},6676:(t,e,i)=>{i.d(e,{c:()=>o});var s=i(82108);function o(t,e,i){if(!s.L2.isBrowser)return;const o=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new o(e,i)}}}]);
//# sourceMappingURL=4961.d8d3d9ab.chunk.js.map