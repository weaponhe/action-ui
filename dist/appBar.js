!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.appBar=t():e.appBar=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=40)}({0:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},1:function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=u[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(s(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(s(r.parts[o],t));u[r.id]={id:r.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],s=i[2],f=i[3],p={css:a,media:s,sourceMap:f};n[o]?n[o].parts.push(p):t.push(n[o]={id:o,parts:[p]})}return t}function i(e,t){var n=l(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e,t){var n,r,i;if(t.singleton){var s=v++;n=h||(h=a(t)),r=f.bind(null,n,s,!1),i=f.bind(null,n,s,!0)}else n=a(t),r=p.bind(null,n),i=function(){o(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function f(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u={},c=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},d=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),l=c(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,g=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=d()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=r(e);return n(i,t),function(e){for(var o=[],a=0;a<i.length;a++){var s=i[a],f=u[s.id];f.refs--,o.push(f)}if(e){var p=r(e);n(p,t)}for(var a=0;a<o.length;a++){var f=o[a];if(0===f.refs){for(var c=0;c<f.parts.length;c++)f.parts[c]();delete u[f.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},33:function(e,t,n){var r,i;n(52),r=n(77);var o=n(60);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-00c21b58",e.exports=r},40:function(e,t,n){var r=n(33);r.install=function(e){e.component(r.name,r)},e.exports=r},45:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".ac-appbar[data-v-00c21b58]{display:flex;align-items:center;height:56px;padding:0 8px;background-color:#1f2f3d;color:#c0ccda}.ac-appbar .left[data-v-00c21b58],.ac-appbar .right[data-v-00c21b58]{display:flex;height:100%;flex-shrink:1;align-items:center;padding:10px;cursor:pointer}.ac-appbar .middle[data-v-00c21b58]{display:flex;padding-left:8px;padding-right:8px;flex-grow:1;height:100%;align-items:center}.fixed[data-v-00c21b58]{position:fixed;top:0;left:0;right:0}",""])},52:function(e,t,n){var r=n(45);"string"==typeof r&&(r=[[e.i,r,""]]);n(1)(r,{});r.locals&&(e.exports=r.locals)},60:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ac-appbar",class:{fixed:e.fixed}},[n("div",{staticClass:"left"},[e._t("left")],2),e._v(" "),n("div",{staticClass:"middle"},[e._t("default",[n("span",[e._v(e._s(e.title))])])],2),e._v(" "),n("div",{staticClass:"right"},[e._t("right")],2)])},staticRenderFns:[]}},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"appBar",props:{title:{type:String,default:""},fixed:{type:Boolean,default:!1}}}}})});
//# sourceMappingURL=appBar.js.map