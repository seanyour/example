import{i as Le,e as We,d as O,f as U,s as pe,r as C,g as N,h as Z,j,o as E,k as L,l as M,n as b,m as W,p as ce,q as B,v as Oe,x as ne,y as ae,z as De,A as ve,B as Re,C as ze,F as Xe,D as xe,E as Ke,G,H as Ue,c as X,w as D,I as ge,a as u,J as I,K as J,L as be,b as ke,t as $e,M as Ce,N as je,O as Ye,P as qe,Q as Ge,R as _e,S as Je}from"./index-6f6b93fa.js";import{i as Qe,a as se,r as Ze,u as et,E as tt}from"./el-input-1e7d4fe6.js";import{E as ye}from"./index-283e626e.js";import{u as nt,a as at,b as ot,c as rt,d as lt}from"./index-ee5fc37d.js";import{U as ie,C as st}from"./event-9519ab40.js";var it=/\s/;function ct(e){for(var n=e.length;n--&&it.test(e.charAt(n)););return n}var ut=/^\s+/;function dt(e){return e&&e.slice(0,ct(e)+1).replace(ut,"")}var Me=0/0,ft=/^[-+]0x[0-9a-f]+$/i,ht=/^0b[01]+$/i,mt=/^0o[0-7]+$/i,pt=parseInt;function we(e){if(typeof e=="number")return e;if(Qe(e))return Me;if(se(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=se(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=dt(e);var a=ht.test(e);return a||mt.test(e)?pt(e.slice(2),a?2:8):ft.test(e)?Me:+e}var vt=function(){return Ze.Date.now()};const oe=vt;var gt="Expected a function",bt=Math.max,kt=Math.min;function $t(e,n,a){var t,r,o,l,s,c,d=0,_=!1,g=!1,$=!0;if(typeof e!="function")throw new TypeError(gt);n=we(n)||0,se(a)&&(_=!!a.leading,g="maxWait"in a,o=g?bt(we(a.maxWait)||0,n):o,$="trailing"in a?!!a.trailing:$);function h(k){var T=t,F=r;return t=r=void 0,d=k,l=e.apply(F,T),l}function i(k){return d=k,s=setTimeout(w,n),_?h(k):l}function f(k){var T=k-c,F=k-d,Y=n-T;return g?kt(Y,o-F):Y}function p(k){var T=k-c,F=k-d;return c===void 0||T>=n||T<0||g&&F>=o}function w(){var k=oe();if(p(k))return y(k);s=setTimeout(w,f(k))}function y(k){return s=void 0,$&&t?h(k):(t=r=void 0,l)}function m(){s!==void 0&&clearTimeout(s),d=0,t=c=r=s=void 0}function ee(){return s===void 0?l:y(oe())}function P(){var k=oe(),T=p(k);if(t=arguments,r=this,c=k,T){if(s===void 0)return i(c);if(g)return clearTimeout(s),s=setTimeout(w,n),h(c)}return s===void 0&&(s=setTimeout(w,n)),l}return P.cancel=m,P.flush=ee,P}const ue=e=>{let n,a;return e.type==="touchend"?(a=e.changedTouches[0].clientY,n=e.changedTouches[0].clientX):e.type.startsWith("touch")?(a=e.touches[0].clientY,n=e.touches[0].clientX):(a=e.clientY,n=e.clientX),{clientX:n,clientY:a}},A=new Map;let Ee;Le&&(document.addEventListener("mousedown",e=>Ee=e),document.addEventListener("mouseup",e=>{for(const n of A.values())for(const{documentHandler:a}of n)a(e,Ee)}));function Te(e,n){let a=[];return Array.isArray(n.arg)?a=n.arg:We(n.arg)&&a.push(n.arg),function(t,r){const o=n.instance.popperRef,l=t.target,s=r==null?void 0:r.target,c=!n||!n.instance,d=!l||!s,_=e.contains(l)||e.contains(s),g=e===l,$=a.length&&a.some(i=>i==null?void 0:i.contains(l))||a.length&&a.includes(s),h=o&&(o.contains(l)||o.contains(s));c||d||_||g||$||h||n.value(t,r)}}const Ct={beforeMount(e,n){A.has(e)||A.set(e,[]),A.get(e).push({documentHandler:Te(e,n),bindingFn:n.value})},updated(e,n){A.has(e)||A.set(e,[]);const a=A.get(e),t=a.findIndex(o=>o.bindingFn===n.oldValue),r={documentHandler:Te(e,n),bindingFn:n.value};t>=0?a.splice(t,1,r):a.push(r)},unmounted(e){A.delete(e)}};let re=!1;function K(e,n){if(!Le)return;const a=function(o){var l;(l=n.drag)==null||l.call(n,o)},t=function(o){var l;document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",t),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",t),document.onselectstart=null,document.ondragstart=null,re=!1,(l=n.end)==null||l.call(n,o)},r=function(o){var l;re||(o.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",a),document.addEventListener("mouseup",t),document.addEventListener("touchmove",a),document.addEventListener("touchend",t),re=!0,(l=n.start)==null||l.call(n,o))};e.addEventListener("mousedown",r),e.addEventListener("touchstart",r)}const _t=O({name:"ElColorAlphaSlider",props:{color:{type:Object,required:!0},vertical:{type:Boolean,default:!1}},setup(e){const n=U("color-alpha-slider"),a=ce(),t=pe(),r=pe(),o=C(0),l=C(0),s=C();N(()=>e.color.get("alpha"),()=>{h()}),N(()=>e.color.value,()=>{h()});function c(){if(!t.value||e.vertical)return 0;const i=a.vnode.el,f=e.color.get("alpha");return i?Math.round(f*(i.offsetWidth-t.value.offsetWidth/2)/100):0}function d(){if(!t.value)return 0;const i=a.vnode.el;if(!e.vertical)return 0;const f=e.color.get("alpha");return i?Math.round(f*(i.offsetHeight-t.value.offsetHeight/2)/100):0}function _(){if(e.color&&e.color.value){const{r:i,g:f,b:p}=e.color.toRgb();return`linear-gradient(to right, rgba(${i}, ${f}, ${p}, 0) 0%, rgba(${i}, ${f}, ${p}, 1) 100%)`}return""}function g(i){i.target!==t.value&&$(i)}function $(i){if(!r.value||!t.value)return;const p=a.vnode.el.getBoundingClientRect(),{clientX:w,clientY:y}=ue(i);if(e.vertical){let m=y-p.top;m=Math.max(t.value.offsetHeight/2,m),m=Math.min(m,p.height-t.value.offsetHeight/2),e.color.set("alpha",Math.round((m-t.value.offsetHeight/2)/(p.height-t.value.offsetHeight)*100))}else{let m=w-p.left;m=Math.max(t.value.offsetWidth/2,m),m=Math.min(m,p.width-t.value.offsetWidth/2),e.color.set("alpha",Math.round((m-t.value.offsetWidth/2)/(p.width-t.value.offsetWidth)*100))}}function h(){o.value=c(),l.value=d(),s.value=_()}return Z(()=>{if(!r.value||!t.value)return;const i={drag:f=>{$(f)},end:f=>{$(f)}};K(r.value,i),K(t.value,i),h()}),{thumb:t,bar:r,thumbLeft:o,thumbTop:l,background:s,handleClick:g,update:h,ns:n}}});function yt(e,n,a,t,r,o){return E(),L("div",{class:b([e.ns.b(),e.ns.is("vertical",e.vertical)])},[M("div",{ref:"bar",class:b(e.ns.e("bar")),style:W({background:e.background}),onClick:n[0]||(n[0]=(...l)=>e.handleClick&&e.handleClick(...l))},null,6),M("div",{ref:"thumb",class:b(e.ns.e("thumb")),style:W({left:e.thumbLeft+"px",top:e.thumbTop+"px"})},null,6)],2)}var Mt=j(_t,[["render",yt],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]]);const wt=O({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(e){const n=U("color-hue-slider"),a=ce(),t=C(),r=C(),o=C(0),l=C(0),s=B(()=>e.color.get("hue"));N(()=>s.value,()=>{$()});function c(h){h.target!==t.value&&d(h)}function d(h){if(!r.value||!t.value)return;const f=a.vnode.el.getBoundingClientRect(),{clientX:p,clientY:w}=ue(h);let y;if(e.vertical){let m=w-f.top;m=Math.min(m,f.height-t.value.offsetHeight/2),m=Math.max(t.value.offsetHeight/2,m),y=Math.round((m-t.value.offsetHeight/2)/(f.height-t.value.offsetHeight)*360)}else{let m=p-f.left;m=Math.min(m,f.width-t.value.offsetWidth/2),m=Math.max(t.value.offsetWidth/2,m),y=Math.round((m-t.value.offsetWidth/2)/(f.width-t.value.offsetWidth)*360)}e.color.set("hue",y)}function _(){if(!t.value)return 0;const h=a.vnode.el;if(e.vertical)return 0;const i=e.color.get("hue");return h?Math.round(i*(h.offsetWidth-t.value.offsetWidth/2)/360):0}function g(){if(!t.value)return 0;const h=a.vnode.el;if(!e.vertical)return 0;const i=e.color.get("hue");return h?Math.round(i*(h.offsetHeight-t.value.offsetHeight/2)/360):0}function $(){o.value=_(),l.value=g()}return Z(()=>{if(!r.value||!t.value)return;const h={drag:i=>{d(i)},end:i=>{d(i)}};K(r.value,h),K(t.value,h),$()}),{bar:r,thumb:t,thumbLeft:o,thumbTop:l,hueValue:s,handleClick:c,update:$,ns:n}}});function Et(e,n,a,t,r,o){return E(),L("div",{class:b([e.ns.b(),e.ns.is("vertical",e.vertical)])},[M("div",{ref:"bar",class:b(e.ns.e("bar")),onClick:n[0]||(n[0]=(...l)=>e.handleClick&&e.handleClick(...l))},null,2),M("div",{ref:"thumb",class:b(e.ns.e("thumb")),style:W({left:e.thumbLeft+"px",top:e.thumbTop+"px"})},null,6)],2)}var Tt=j(wt,[["render",Et],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]]);const St=Oe({modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:nt,popperClass:{type:String,default:""},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},predefine:{type:De(Array)},validateEvent:{type:Boolean,default:!0}}),Nt={[ie]:e=>ne(e)||ae(e),[st]:e=>ne(e)||ae(e),activeChange:e=>ne(e)||ae(e)},Pe=Symbol("colorPickerContextKey"),Se=function(e,n,a){return[e,n*a/((e=(2-n)*a)<1?e:2-e)||0,e/2]},It=function(e){return typeof e=="string"&&e.includes(".")&&Number.parseFloat(e)===1},At=function(e){return typeof e=="string"&&e.includes("%")},R=function(e,n){It(e)&&(e="100%");const a=At(e);return e=Math.min(n,Math.max(0,Number.parseFloat(`${e}`))),a&&(e=Number.parseInt(`${e*n}`,10)/100),Math.abs(e-n)<1e-6?1:e%n/Number.parseFloat(n)},Ne={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},Q=e=>{e=Math.min(Math.round(e),255);const n=Math.floor(e/16),a=e%16;return`${Ne[n]||n}${Ne[a]||a}`},Ie=function({r:e,g:n,b:a}){return Number.isNaN(+e)||Number.isNaN(+n)||Number.isNaN(+a)?"":`#${Q(e)}${Q(n)}${Q(a)}`},le={A:10,B:11,C:12,D:13,E:14,F:15},V=function(e){return e.length===2?(le[e[0].toUpperCase()]||+e[0])*16+(le[e[1].toUpperCase()]||+e[1]):le[e[1].toUpperCase()]||+e[1]},Lt=function(e,n,a){n=n/100,a=a/100;let t=n;const r=Math.max(a,.01);a*=2,n*=a<=1?a:2-a,t*=r<=1?r:2-r;const o=(a+n)/2,l=a===0?2*t/(r+t):2*n/(a+n);return{h:e,s:l*100,v:o*100}},Ae=(e,n,a)=>{e=R(e,255),n=R(n,255),a=R(a,255);const t=Math.max(e,n,a),r=Math.min(e,n,a);let o;const l=t,s=t-r,c=t===0?0:s/t;if(t===r)o=0;else{switch(t){case e:{o=(n-a)/s+(n<a?6:0);break}case n:{o=(a-e)/s+2;break}case a:{o=(e-n)/s+4;break}}o/=6}return{h:o*360,s:c*100,v:l*100}},z=function(e,n,a){e=R(e,360)*6,n=R(n,100),a=R(a,100);const t=Math.floor(e),r=e-t,o=a*(1-n),l=a*(1-r*n),s=a*(1-(1-r)*n),c=t%6,d=[a,l,o,o,s,a][c],_=[s,a,a,l,o,o][c],g=[o,o,s,a,a,l][c];return{r:Math.round(d*255),g:Math.round(_*255),b:Math.round(g*255)}};class x{constructor(n={}){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="";for(const a in n)ve(n,a)&&(this[a]=n[a]);n.value?this.fromString(n.value):this.doOnChange()}set(n,a){if(arguments.length===1&&typeof n=="object"){for(const t in n)ve(n,t)&&this.set(t,n[t]);return}this[`_${n}`]=a,this.doOnChange()}get(n){return n==="alpha"?Math.floor(this[`_${n}`]):this[`_${n}`]}toRgb(){return z(this._hue,this._saturation,this._value)}fromString(n){if(!n){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}const a=(t,r,o)=>{this._hue=Math.max(0,Math.min(360,t)),this._saturation=Math.max(0,Math.min(100,r)),this._value=Math.max(0,Math.min(100,o)),this.doOnChange()};if(n.includes("hsl")){const t=n.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(r=>r!=="").map((r,o)=>o>2?Number.parseFloat(r):Number.parseInt(r,10));if(t.length===4?this._alpha=Number.parseFloat(t[3])*100:t.length===3&&(this._alpha=100),t.length>=3){const{h:r,s:o,v:l}=Lt(t[0],t[1],t[2]);a(r,o,l)}}else if(n.includes("hsv")){const t=n.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(r=>r!=="").map((r,o)=>o>2?Number.parseFloat(r):Number.parseInt(r,10));t.length===4?this._alpha=Number.parseFloat(t[3])*100:t.length===3&&(this._alpha=100),t.length>=3&&a(t[0],t[1],t[2])}else if(n.includes("rgb")){const t=n.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(r=>r!=="").map((r,o)=>o>2?Number.parseFloat(r):Number.parseInt(r,10));if(t.length===4?this._alpha=Number.parseFloat(t[3])*100:t.length===3&&(this._alpha=100),t.length>=3){const{h:r,s:o,v:l}=Ae(t[0],t[1],t[2]);a(r,o,l)}}else if(n.includes("#")){const t=n.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(t))return;let r,o,l;t.length===3?(r=V(t[0]+t[0]),o=V(t[1]+t[1]),l=V(t[2]+t[2])):(t.length===6||t.length===8)&&(r=V(t.slice(0,2)),o=V(t.slice(2,4)),l=V(t.slice(4,6))),t.length===8?this._alpha=V(t.slice(6))/255*100:(t.length===3||t.length===6)&&(this._alpha=100);const{h:s,s:c,v:d}=Ae(r,o,l);a(s,c,d)}}compare(n){return Math.abs(n._hue-this._hue)<2&&Math.abs(n._saturation-this._saturation)<1&&Math.abs(n._value-this._value)<1&&Math.abs(n._alpha-this._alpha)<1}doOnChange(){const{_hue:n,_saturation:a,_value:t,_alpha:r,format:o}=this;if(this.enableAlpha)switch(o){case"hsl":{const l=Se(n,a/100,t/100);this.value=`hsla(${n}, ${Math.round(l[1]*100)}%, ${Math.round(l[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${n}, ${Math.round(a)}%, ${Math.round(t)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${Ie(z(n,a,t))}${Q(r*255/100)}`;break}default:{const{r:l,g:s,b:c}=z(n,a,t);this.value=`rgba(${l}, ${s}, ${c}, ${this.get("alpha")/100})`}}else switch(o){case"hsl":{const l=Se(n,a/100,t/100);this.value=`hsl(${n}, ${Math.round(l[1]*100)}%, ${Math.round(l[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${n}, ${Math.round(a)}%, ${Math.round(t)}%)`;break}case"rgb":{const{r:l,g:s,b:c}=z(n,a,t);this.value=`rgb(${l}, ${s}, ${c})`;break}default:this.value=Ie(z(n,a,t))}}}const Pt=O({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0}},setup(e){const n=U("color-predefine"),{currentColor:a}=Re(Pe),t=C(o(e.colors,e.color));N(()=>a.value,l=>{const s=new x;s.fromString(l),t.value.forEach(c=>{c.selected=s.compare(c)})}),ze(()=>{t.value=o(e.colors,e.color)});function r(l){e.color.fromString(e.colors[l])}function o(l,s){return l.map(c=>{const d=new x;return d.enableAlpha=!0,d.format="rgba",d.fromString(c),d.selected=d.value===s.value,d})}return{rgbaColors:t,handleSelect:r,ns:n}}}),Ft=["onClick"];function Ht(e,n,a,t,r,o){return E(),L("div",{class:b(e.ns.b())},[M("div",{class:b(e.ns.e("colors"))},[(E(!0),L(Xe,null,xe(e.rgbaColors,(l,s)=>(E(),L("div",{key:e.colors[s],class:b([e.ns.e("color-selector"),e.ns.is("alpha",l._alpha<100),{selected:l.selected}]),onClick:c=>e.handleSelect(s)},[M("div",{style:W({backgroundColor:l.value})},null,4)],10,Ft))),128))],2)],2)}var Vt=j(Pt,[["render",Ht],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]]);const Bt=O({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(e){const n=U("color-svpanel"),a=ce(),t=C(0),r=C(0),o=C("hsl(0, 100%, 50%)"),l=B(()=>{const d=e.color.get("hue"),_=e.color.get("value");return{hue:d,value:_}});function s(){const d=e.color.get("saturation"),_=e.color.get("value"),g=a.vnode.el,{clientWidth:$,clientHeight:h}=g;r.value=d*$/100,t.value=(100-_)*h/100,o.value=`hsl(${e.color.get("hue")}, 100%, 50%)`}function c(d){const g=a.vnode.el.getBoundingClientRect(),{clientX:$,clientY:h}=ue(d);let i=$-g.left,f=h-g.top;i=Math.max(0,i),i=Math.min(i,g.width),f=Math.max(0,f),f=Math.min(f,g.height),r.value=i,t.value=f,e.color.set({saturation:i/g.width*100,value:100-f/g.height*100})}return N(()=>l.value,()=>{s()}),Z(()=>{K(a.vnode.el,{drag:d=>{c(d)},end:d=>{c(d)}}),s()}),{cursorTop:t,cursorLeft:r,background:o,colorValue:l,handleDrag:c,update:s,ns:n}}}),Wt=M("div",null,null,-1),Ot=[Wt];function Dt(e,n,a,t,r,o){return E(),L("div",{class:b(e.ns.b()),style:W({backgroundColor:e.background})},[M("div",{class:b(e.ns.e("white"))},null,2),M("div",{class:b(e.ns.e("black"))},null,2),M("div",{class:b(e.ns.e("cursor")),style:W({top:e.cursorTop+"px",left:e.cursorLeft+"px"})},Ot,6)],6)}var Rt=j(Bt,[["render",Dt],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]]);const zt=["id","aria-label","aria-labelledby","aria-description","tabindex","onKeydown"],Xt=O({name:"ElColorPicker"}),xt=O({...Xt,props:St,emits:Nt,setup(e,{expose:n,emit:a}){const t=e,{t:r}=et(),o=U("color"),{formItem:l}=at(),s=ot(),c=rt(),{inputId:d,isLabeledByFormItem:_}=lt(t,{formItemContext:l}),g=C(),$=C(),h=C(),i=C();let f=!0;const p=Ke(new x({enableAlpha:t.showAlpha,format:t.colorFormat||"",value:t.modelValue})),w=C(!1),y=C(!1),m=C(""),ee=B(()=>!t.modelValue&&!y.value?"transparent":Y(p,t.showAlpha)),P=B(()=>!t.modelValue&&!y.value?"":p.value),k=B(()=>_.value?void 0:t.label||r("el.colorpicker.defaultLabel")),T=B(()=>_.value?l==null?void 0:l.labelId:void 0),F=B(()=>[o.b("picker"),o.is("disabled",c.value),o.bm("picker",s.value)]);function Y(v,S){if(!(v instanceof x))throw new TypeError("color should be instance of _color Class");const{r:H,g:he,b:me}=v.toRgb();return S?`rgba(${H}, ${he}, ${me}, ${v.get("alpha")/100})`:`rgb(${H}, ${he}, ${me})`}function Fe(v){w.value=v}const q=$t(Fe,100);function He(){q(!1),te()}function te(){G(()=>{t.modelValue?p.fromString(t.modelValue):(p.value="",G(()=>{y.value=!1}))})}function de(){c.value||q(!w.value)}function fe(){p.fromString(m.value)}function Ve(){const v=p.value;a(ie,v),a("change",v),t.validateEvent&&(l==null||l.validate("change").catch(S=>_e())),q(!1),G(()=>{const S=new x({enableAlpha:t.showAlpha,format:t.colorFormat||"",value:t.modelValue});p.compare(S)||te()})}function Be(){q(!1),a(ie,null),a("change",null),t.modelValue!==null&&t.validateEvent&&(l==null||l.validate("change").catch(v=>_e())),te()}return Z(()=>{t.modelValue&&(m.value=P.value)}),N(()=>t.modelValue,v=>{v?v&&v!==p.value&&(f=!1,p.fromString(v)):y.value=!1}),N(()=>P.value,v=>{m.value=v,f&&a("activeChange",v),f=!0}),N(()=>p.value,()=>{!t.modelValue&&!y.value&&(y.value=!0)}),N(()=>w.value,()=>{G(()=>{var v,S,H;(v=g.value)==null||v.update(),(S=$.value)==null||S.update(),(H=h.value)==null||H.update()})}),Ue(Pe,{currentColor:P}),n({color:p}),(v,S)=>(E(),X(u(Ge),{ref_key:"popper",ref:i,visible:w.value,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[u(o).be("picker","panel"),u(o).b("dropdown"),v.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",transition:`${u(o).namespace.value}-zoom-in-top`,persistent:""},{content:D(()=>[ge((E(),L("div",null,[M("div",{class:b(u(o).be("dropdown","main-wrapper"))},[I(Tt,{ref_key:"hue",ref:g,class:"hue-slider",color:u(p),vertical:""},null,8,["color"]),I(Rt,{ref:"svPanel",color:u(p)},null,8,["color"])],2),v.showAlpha?(E(),X(Mt,{key:0,ref_key:"alpha",ref:h,color:u(p)},null,8,["color"])):J("v-if",!0),v.predefine?(E(),X(Vt,{key:1,ref:"predefine",color:u(p),colors:v.predefine},null,8,["color","colors"])):J("v-if",!0),M("div",{class:b(u(o).be("dropdown","btns"))},[M("span",{class:b(u(o).be("dropdown","value"))},[I(u(tt),{modelValue:m.value,"onUpdate:modelValue":S[0]||(S[0]=H=>m.value=H),"validate-event":!1,size:"small",onKeyup:be(fe,["enter"]),onBlur:fe},null,8,["modelValue","onKeyup"])],2),I(u(ye),{class:b(u(o).be("dropdown","link-btn")),text:"",size:"small",onClick:Be},{default:D(()=>[ke($e(u(r)("el.colorpicker.clear")),1)]),_:1},8,["class"]),I(u(ye),{plain:"",size:"small",class:b(u(o).be("dropdown","btn")),onClick:Ve},{default:D(()=>[ke($e(u(r)("el.colorpicker.confirm")),1)]),_:1},8,["class"])],2)])),[[u(Ct),He]])]),default:D(()=>[M("div",{id:u(d),class:b(u(F)),role:"button","aria-label":u(k),"aria-labelledby":u(T),"aria-description":u(r)("el.colorpicker.description",{color:v.modelValue||""}),tabindex:v.tabindex,onKeydown:be(de,["enter"])},[u(c)?(E(),L("div",{key:0,class:b(u(o).be("picker","mask"))},null,2)):J("v-if",!0),M("div",{class:b(u(o).be("picker","trigger")),onClick:de},[M("span",{class:b([u(o).be("picker","color"),u(o).is("alpha",v.showAlpha)])},[M("span",{class:b(u(o).be("picker","color-inner")),style:W({backgroundColor:u(ee)})},[ge(I(u(Ce),{class:b([u(o).be("picker","icon"),u(o).is("icon-arrow-down")])},{default:D(()=>[I(u(je))]),_:1},8,["class"]),[[Ye,v.modelValue||y.value]]),!v.modelValue&&!y.value?(E(),X(u(Ce),{key:0,class:b([u(o).be("picker","empty"),u(o).is("icon-close")])},{default:D(()=>[I(u(qe))]),_:1},8,["class"])):J("v-if",!0)],6)],2)],2)],42,zt)]),_:1},8,["visible","popper-class","transition"]))}});var Kt=j(xt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/color-picker.vue"]]);const Ut=Je(Kt);const Qt=O({__name:"Theme",setup(e){const n=C("");function a(){const t=document.documentElement;getComputedStyle(t).getPropertyValue("--el-color-primary"),t.style.setProperty("--el-color-primary",n.value)}return(t,r)=>{const o=Ut;return E(),X(o,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=l=>n.value=l),onChange:a},null,8,["modelValue"])}}});export{Qt as default};
