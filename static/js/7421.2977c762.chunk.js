"use strict";(self.webpackChunkreact_map_widgets=self.webpackChunkreact_map_widgets||[]).push([[7421],{17421:(e,n,t)=>{t.r(n),t.d(n,{registerFunctions:()=>p});var r=t(9861),s=t(80324),a=t(43036),i=t(76834),u=t(47164),c=t(89189),l=t(56203);function o(e){return e instanceof c.A}function f(e,n,t,f){return f(e,n,(async(f,p,d)=>{if(d.length<2)throw new r.D$(e,r.TX.WrongNumberOfParameters,n);if(null===(d=(0,a.I)(d))[0]&&null===d[1])return!1;if((0,a.u)(d[0])){if(d[1]instanceof c.A)return new i.A({parentfeatureset:d[0],relation:t,relationGeom:d[1]});if(null===d[1])return new u.A({parentfeatureset:d[0]});throw new r.D$(e,r.TX.InvalidParameter,n)}if(o(d[0])){if(o(d[1])){switch(t){case"esriSpatialRelEnvelopeIntersects":return(0,l.intersects)((0,s.Yc)(d[0]),(0,s.Yc)(d[1]));case"esriSpatialRelIntersects":return(0,l.intersects)(d[0],d[1]);case"esriSpatialRelContains":return(0,l.contains)(d[0],d[1]);case"esriSpatialRelOverlaps":return(0,l.overlaps)(d[0],d[1]);case"esriSpatialRelWithin":return(0,l.within)(d[0],d[1]);case"esriSpatialRelTouches":return(0,l.touches)(d[0],d[1]);case"esriSpatialRelCrosses":return(0,l.crosses)(d[0],d[1])}throw new r.D$(e,r.TX.InvalidParameter,n)}if((0,a.u)(d[1]))return new i.A({parentfeatureset:d[1],relation:t,relationGeom:d[0]});if(null===d[1])return!1;throw new r.D$(e,r.TX.InvalidParameter,n)}if(null!==d[0])throw new r.D$(e,r.TX.InvalidParameter,n);return(0,a.u)(d[1])?new u.A({parentfeatureset:d[1]}):!(d[1]instanceof c.A||null===d[1])&&void 0}))}function p(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return f(n,t,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return f(n,t,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:2,max:2}),e.functions.contains=function(n,t){return f(n,t,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return f(n,t,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(n,t){return f(n,t,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(n,t){return f(n,t,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(n,t){return f(n,t,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(n,t){return e.standardFunctionAsync(n,t,((e,s,i)=>{if(i=(0,a.I)(i),(0,a.H)(i,3,3,n,t),o(i[0])&&o(i[1]))return(0,l.relate)(i[0],i[1],(0,a.j)(i[2]));if(i[0]instanceof c.A&&null===i[1])return!1;if(i[1]instanceof c.A&&null===i[0])return!1;if((0,a.u)(i[0])&&null===i[1])return new u.A({parentfeatureset:i[0]});if((0,a.u)(i[1])&&null===i[0])return new u.A({parentfeatureset:i[1]});if((0,a.u)(i[0])&&i[1]instanceof c.A)return i[0].relate(i[1],(0,a.j)(i[2]));if((0,a.u)(i[1])&&i[0]instanceof c.A)return i[1].relate(i[0],(0,a.j)(i[2]));if(null===i[0]&&null===i[1])return!1;throw new r.D$(n,r.TX.InvalidParameter,t)}))})}}}]);
//# sourceMappingURL=7421.2977c762.chunk.js.map