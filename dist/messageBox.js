!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.messageBox=t():e.messageBox=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(o[r]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var o=e[n],a=p[o.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](o.parts[r]);for(;r<o.parts.length;r++)a.parts.push(s(o.parts[r],t))}else{for(var i=[],r=0;r<o.parts.length;r++)i.push(s(o.parts[r],t));p[o.id]={id:o.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},o=0;o<e.length;o++){var a=e[o],r=a[0],i=a[1],s=a[2],l=a[3],d={css:i,media:s,sourceMap:l};n[r]?n[r].parts.push(d):t.push(n[r]={id:r,parts:[d]})}return t}function a(e,t){var n=f(),o=b[b.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function i(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function s(e,t){var n,o,a;if(t.singleton){var s=h++;n=v||(v=i(t)),o=l.bind(null,n,s,!1),a=l.bind(null,n,s,!0)}else n=i(t),o=d.bind(null,n),a=function(){r(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else a()}}function l(e,t,n,o){var a=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var r=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function d(e,t){var n=t.css,o=t.media,a=t.sourceMap;if(o&&e.setAttribute("media",o),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},c=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=u(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,h=0,b=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=c()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var a=o(e);return n(a,t),function(e){for(var r=[],i=0;i<a.length;i++){var s=a[i],l=p[s.id];l.refs--,r.push(l)}if(e){var d=o(e);n(d,t)}for(var i=0;i<r.length;i++){var l=r[i];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete p[l.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PopupMixin:n(4),ModelMixin:n(3)}},function(e,t){e.exports={data:function(){return{vModelValue:this.value}},props:["value"],watch:{value:function(e){this.vModelValue=e},vModelValue:function(e){this.$emit("input",e)}},beforeUpdate:function(){this.vModelValue=this.value}}},function(e,t){var n={popupOpenCount:0,popupCloseCount:0,modalArray:[]};e.exports={data:function(){return{popupIndex:0,modalIndex:0,global:n}},props:{open:{type:Boolean,default:!1},modal:{type:Boolean,default:!1}},mounted:function(){this.open&&(this.popupIndex=++this.global.popupOpenCount,this.modal&&this.global.modalArray.push(this.popupIndex))},watch:{open:function(e){e?(this.popupIndex=++this.global.popupOpenCount,this.modal&&this.global.modalArray.push(this.popupIndex)):(this.global.popupCloseCount++,this.modal&&this.global.modalArray.splice(this.global.modalArray.indexOf(this.popupIndex),1)),this.global.popupOpenCount===this.global.popupCloseCount&&(this.global.popupOpenCount=this.global.popupCloseCount=0)}},computed:{transparent:function(){return this.modal&&this.popupIndex!==this.global.modalArray[this.global.modalArray.length-1]?"transparent":""}}}},function(e,t,n){var o=n(6);o.install=function(e){e.component(o.name,o)},e.exports=o},function(e,t,n){var o,a;n(8),o=n(9);var r=n(7);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-fedb7f90",e.exports=o},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("i",{staticClass:"icon iconfont",class:"icon-"+e.name,style:{fontSize:e.size+"px"},on:{click:function(t){e.$emit("click")}}})},staticRenderFns:[]}},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"icon",props:{name:{type:String,required:!0},size:{type:Number,default:16}}}},function(e,t,n){var o=n(13);o.install=function(e){e.component(o.name,o)},e.exports=o},function(e,t,n){var o=n(23);o.install=function(e){e.component(o.name,o)},e.exports=o},function(e,t,n){var o=n(14);o.install=function(e){e.component(o.name,o)},e.exports=o},function(e,t,n){var o,a;n(17),o=n(21);var r=n(19);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-11140950",e.exports=o},function(e,t,n){var o,a;n(18),o=n(22);var r=n(20);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-7aabc13c",e.exports=o},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".button[data-v-11140950]{display:inline-block;box-sizing:border-box;border:1px solid;white-space:nowrap;cursor:pointer;text-align:center;vertical-align:middle;transition:all .3s ease;line-height:1}.size--default[data-v-11140950]{margin:0 5px;padding:8px 20px;border-radius:4px;font-size:14px}.size--lg[data-v-11140950]{margin:0 5px;padding:10px 30px;border-radius:6px;font-size:18px}.size--sm[data-v-11140950]{margin:0 3px;padding:4px 12px;border-radius:4px;font-size:10px}.button--default[data-v-11140950]{border-color:#e1e1e1;background:#f9f9f9 linear-gradient(180deg,#fff,#f9f9f9);color:#646464}.button--default[data-v-11140950]:hover{background:#eee linear-gradient(180deg,#f5f5f5,#eee)}.button--primary[data-v-11140950]{border-color:#5c81e3;background:#678ee7 linear-gradient(180deg,#678ee7,#5078df);color:#fff}.button--primary[data-v-11140950]:hover{background:#6c8cd4 linear-gradient(180deg,#6c8cd4,#4769c2)}.button--danger[data-v-11140950]{border-color:#d43f3a;background:#d9534f linear-gradient(180deg,#d9534f,#d03f3a);color:#fff}.button--danger[data-v-11140950]:hover{background:#c9302c linear-gradient(180deg,#c9302c,#b2302c)}.button--success[data-v-11140950]{border-color:#4cae4c;background:#5cb85c linear-gradient(180deg,#5cb85c,#408439);color:#fff}.button--success[data-v-11140950]:hover{background:#449d44 linear-gradient(180deg,#449d44,#408439)}.button.disabled[data-v-11140950]{border-color:#afafaf;background:#a9a9a9 linear-gradient(180deg,#b8b8b8,#a9a9a9);color:#fff;cursor:not-allowed}",""])},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".popup[data-v-7aabc13c]{position:fixed;top:0;left:0;margin:0;padding:0}.modal[data-v-7aabc13c]{width:100%;height:100%;background-color:rgba(0,0,0,.5)}",""])},function(e,t,n){var o=n(15);"string"==typeof o&&(o=[[e.i,o,""]]);n(1)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){var o=n(16);"string"==typeof o&&(o=[[e.i,o,""]]);n(1)(o,{});o.locals&&(e.exports=o.locals)},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("span",{staticClass:"button",class:["button--"+e.type,"size--"+e.size,e.disabled?"disabled":""],on:{click:e.handleClick}},[e.$slots.default?t("span",[e._t("default")],!0):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return e.open?t("div",{staticClass:"popup",class:{modal:e.modal,transparent:e.transparent},style:{zIndex:e.popupIndex,backgroundColor:e.transparent},on:{click:function(t){t.target===t.currentTarget&&e.close(t)}}},[e._t("default")],!0):e._e()},staticRenderFns:[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"acButton",props:{type:{type:String,default:"default"},size:{type:String,default:"default"},disabled:{type:Boolean,default:!1}},methods:{handleClick:function(e){this.disabled||this.$emit("click",e)}}}},function(e,t,n){"use strict";var o=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"popup",mixins:[o.default.PopupMixin],props:{closeOnClickModal:{type:Boolean,default:!0}},methods:{close:function(){this.closeOnClickModal&&this.$emit("close")}}}},function(e,t,n){var o,a;n(25),o=n(27);var r=n(26);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-7084ab18",e.exports=o},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".wrapper[data-v-7084ab18]{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);width:70%;max-width:700px;background-color:#fff}.wrapper .header[data-v-7084ab18]{margin:20px 0;padding:0 20px}.wrapper .header .title[data-v-7084ab18]{color:#42b983}.wrapper .header .close[data-v-7084ab18]{float:right;cursor:pointer}.wrapper .header .close[data-v-7084ab18]:hover{color:#999}.wrapper .main[data-v-7084ab18]{margin:20px 0;padding:0 20px}.wrapper .footer[data-v-7084ab18]{padding:20px;text-align:right}.popup-enter-active[data-v-7084ab18],.popup-leave-active[data-v-7084ab18]{transition:all .2s ease}.popup-enter[data-v-7084ab18],.popup-leave-active[data-v-7084ab18]{opacity:0;transform:scale(1.1)}",""])},function(e,t,n){var o=n(24);"string"==typeof o&&(o=[[e.i,o,""]]);n(1)(o,{});o.locals&&(e.exports=o.locals)},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("transition",{attrs:{name:"popup"}},[e.vModelValue?t("popup",{attrs:{open:e.vModelValue,modal:""},on:{close:e.close}},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"header"},[e._t("header",[t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),e.showCloseIcon?t("span",{staticClass:"close",on:{click:e.close}},[t("icon",{attrs:{name:"error",size:20}})]):e._e()])])],!0),e._v(" "),t("div",{staticClass:"main"},[e._t("default")],!0),e._v(" "),t("div",{staticClass:"footer"},[e._t("footer",[e.showOKButton?t("ac-button",{attrs:{type:"success"},on:{click:e.ok}},[e._v("确定")]):e._e(),e._v(" "),e.showCancelButton?t("ac-button",{on:{click:e.close}},[e._v("取消")]):e._e()])],!0)])]):e._e()])},staticRenderFns:[]}},function(e,t,n){"use strict";var o=n(12),a=n.n(o),r=n(5),i=(n.n(r),n(10)),s=n.n(i),l=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"messageBox",mixins:[l.default.ModelMixin],components:{popup:a.a,acButton:s.a},props:{title:String,showCloseIcon:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},showOKButton:{type:Boolean,default:!0}},methods:{ok:function(){this.$emit("ok"),this.vModelValue=!1},close:function(){this.vModelValue=!1,this.$emit("close")}}}}])});
//# sourceMappingURL=messageBox.js.map