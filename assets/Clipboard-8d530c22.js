import{d as Q,r as F,c as W,a as P,w as M,o as Z,b as q,E as tt}from"./index-72d5ed07.js";import{E as et}from"./el-input-eefc2efb.js";import{E as nt}from"./el-button-1a1bf777.js";import"./index-a2e85cee.js";import"./event-9519ab40.js";var ot=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rt(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}var R={},it={get exports(){return R},set exports(_){R=_}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(_,T){(function(S,h){_.exports=h()})(ot,function(){return function(){var w={686:function(u,a,t){t.d(a,{default:function(){return K}});var f=t(279),c=t.n(f),l=t(370),m=t.n(l),y=t(817),g=t.n(y);function d(i){try{return document.execCommand(i)}catch{return!1}}var v=function(n){var e=g()(n);return d("cut"),e},p=v;function E(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(o,"px"),e.setAttribute("readonly",""),e.value=i,e}var j=function(n,e){var o=E(n);e.container.appendChild(o);var r=g()(o);return d("copy"),o.remove(),r},I=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},o="";return typeof n=="string"?o=j(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?o=j(n.value,e):(o=g()(n),d("copy")),o},k=I;function C(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(e){return typeof e}:C=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(i)}var V=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,o=e===void 0?"copy":e,r=n.container,s=n.target,b=n.text;if(o!=="copy"&&o!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(s!==void 0)if(s&&C(s)==="object"&&s.nodeType===1){if(o==="copy"&&s.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(o==="cut"&&(s.hasAttribute("readonly")||s.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(b)return k(b,{container:r});if(s)return o==="cut"?p(s):k(s,{container:r})},H=V;function x(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(e){return typeof e}:x=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(i)}function B(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function D(i,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}function U(i,n,e){return n&&D(i.prototype,n),e&&D(i,e),i}function z(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&L(i,n)}function L(i,n){return L=Object.setPrototypeOf||function(o,r){return o.__proto__=r,o},L(i,n)}function Y(i){var n=J();return function(){var o=A(i),r;if(n){var s=A(this).constructor;r=Reflect.construct(o,arguments,s)}else r=o.apply(this,arguments);return $(this,r)}}function $(i,n){return n&&(x(n)==="object"||typeof n=="function")?n:G(i)}function G(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function J(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function A(i){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(i)}function N(i,n){var e="data-clipboard-".concat(i);if(n.hasAttribute(e))return n.getAttribute(e)}var X=function(i){z(e,i);var n=Y(e);function e(o,r){var s;return B(this,e),s=n.call(this),s.resolveOptions(r),s.listenClick(o),s}return U(e,[{key:"resolveOptions",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof r.action=="function"?r.action:this.defaultAction,this.target=typeof r.target=="function"?r.target:this.defaultTarget,this.text=typeof r.text=="function"?r.text:this.defaultText,this.container=x(r.container)==="object"?r.container:document.body}},{key:"listenClick",value:function(r){var s=this;this.listener=m()(r,"click",function(b){return s.onClick(b)})}},{key:"onClick",value:function(r){var s=r.delegateTarget||r.currentTarget,b=this.action(s)||"copy",O=H({action:b,container:this.container,target:this.target(s),text:this.text(s)});this.emit(O?"success":"error",{action:b,text:O,trigger:s,clearSelection:function(){s&&s.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(r){return N("action",r)}},{key:"defaultTarget",value:function(r){var s=N("target",r);if(s)return document.querySelector(s)}},{key:"defaultText",value:function(r){return N("text",r)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return k(r,s)}},{key:"cut",value:function(r){return p(r)}},{key:"isSupported",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],s=typeof r=="string"?[r]:r,b=!!document.queryCommandSupported;return s.forEach(function(O){b=b&&!!document.queryCommandSupported(O)}),b}}]),e}(c()),K=X},828:function(u){var a=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function f(c,l){for(;c&&c.nodeType!==a;){if(typeof c.matches=="function"&&c.matches(l))return c;c=c.parentNode}}u.exports=f},438:function(u,a,t){var f=t(828);function c(y,g,d,v,p){var E=m.apply(this,arguments);return y.addEventListener(d,E,p),{destroy:function(){y.removeEventListener(d,E,p)}}}function l(y,g,d,v,p){return typeof y.addEventListener=="function"?c.apply(null,arguments):typeof d=="function"?c.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(E){return c(E,g,d,v,p)}))}function m(y,g,d,v){return function(p){p.delegateTarget=f(p.target,g),p.delegateTarget&&v.call(y,p)}}u.exports=l},879:function(u,a){a.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},a.nodeList=function(t){var f=Object.prototype.toString.call(t);return t!==void 0&&(f==="[object NodeList]"||f==="[object HTMLCollection]")&&"length"in t&&(t.length===0||a.node(t[0]))},a.string=function(t){return typeof t=="string"||t instanceof String},a.fn=function(t){var f=Object.prototype.toString.call(t);return f==="[object Function]"}},370:function(u,a,t){var f=t(879),c=t(438);function l(d,v,p){if(!d&&!v&&!p)throw new Error("Missing required arguments");if(!f.string(v))throw new TypeError("Second argument must be a String");if(!f.fn(p))throw new TypeError("Third argument must be a Function");if(f.node(d))return m(d,v,p);if(f.nodeList(d))return y(d,v,p);if(f.string(d))return g(d,v,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function m(d,v,p){return d.addEventListener(v,p),{destroy:function(){d.removeEventListener(v,p)}}}function y(d,v,p){return Array.prototype.forEach.call(d,function(E){E.addEventListener(v,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(E){E.removeEventListener(v,p)})}}}function g(d,v,p){return c(document.body,d,v,p)}u.exports=l},817:function(u){function a(t){var f;if(t.nodeName==="SELECT")t.focus(),f=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var c=t.hasAttribute("readonly");c||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),c||t.removeAttribute("readonly"),f=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),m=document.createRange();m.selectNodeContents(t),l.removeAllRanges(),l.addRange(m),f=l.toString()}return f}u.exports=a},279:function(u){function a(){}a.prototype={on:function(t,f,c){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:f,ctx:c}),this},once:function(t,f,c){var l=this;function m(){l.off(t,m),f.apply(c,arguments)}return m._=f,this.on(t,m,c)},emit:function(t){var f=[].slice.call(arguments,1),c=((this.e||(this.e={}))[t]||[]).slice(),l=0,m=c.length;for(l;l<m;l++)c[l].fn.apply(c[l].ctx,f);return this},off:function(t,f){var c=this.e||(this.e={}),l=c[t],m=[];if(l&&f)for(var y=0,g=l.length;y<g;y++)l[y].fn!==f&&l[y].fn._!==f&&m.push(l[y]);return m.length?c[t]=m:delete c[t],this}},u.exports=a,u.exports.TinyEmitter=a}},S={};function h(u){if(S[u])return S[u].exports;var a=S[u]={exports:{}};return w[u](a,a.exports,h),a.exports}return function(){h.n=function(u){var a=u&&u.__esModule?function(){return u.default}:function(){return u};return h.d(a,{a}),a}}(),function(){h.d=function(u,a){for(var t in a)h.o(a,t)&&!h.o(u,t)&&Object.defineProperty(u,t,{enumerable:!0,get:a[t]})}}(),function(){h.o=function(u,a){return Object.prototype.hasOwnProperty.call(u,a)}}(),h(686)}().default})})(it);const ut=rt(R),at={class:"w-300px"},ct=q("div",{class:"i-ph-clipboard-text"},null,-1),vt=Q({__name:"Clipboard",setup(_){const T=F("https://github.com/seanyour");let w=F(!1);function S(h){const u=new ut(h,{text:function(){return T.value}});u.on("success",function(a){a.clearSelection(),w.value=!0}),u.on("error",function(a){a.clearSelection()})}return(h,u)=>{const a=nt,t=tt,f=et;return Z(),W("div",at,[P(f,{modelValue:T.value,"onUpdate:modelValue":u[2]||(u[2]=c=>T.value=c),class:"foo"},{append:M(()=>[P(t,{class:"box-item",effect:"dark",content:"Copied",placement:"bottom",visible:w.value,ref:"tooltip"},{default:M(()=>[P(a,{onClick:u[0]||(u[0]=c=>S(".foo")),onMouseleave:u[1]||(u[1]=c=>w.value=!1)},{icon:M(()=>[ct]),_:1})]),_:1},8,["visible"])]),_:1},8,["modelValue"])])}}});export{vt as default};
