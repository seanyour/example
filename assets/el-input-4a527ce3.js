import{i as Ee,v as c,aS as Le,q as De,r as V,U as ge,x as Oe,y as G,as as xe,aF as Ke,z as Q,d as ke,aT as He,az as je,j as we,s as ee,aU as Ue,aV as We,aW as Ye,A as Xe,aJ as Ze,k as te,I as M,R as Se,l as qe,aX as Je,K as Ge,P as Qe,o as p,c as g,L as v,F as ae,n as y,f as t,T as H,b as P,e as w,w as _,ad as j,N as B,aC as oe,a as et,aY as tt,Y as at,an as ot,t as U,p as nt,m as st,aZ as Ce,S as lt}from"./index-8e5f22ce.js";import{u as rt,a as it,d as ut,b as ct,c as dt}from"./index-4bef480d.js";import{U as ne}from"./event-9519ab40.js";const pt=()=>Ee&&/firefox/i.test(window.navigator.userAgent),ft=o=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o),vt=["class","style"],mt=/^on[A-Z]/,yt=(o={})=>{const{excludeListeners:m=!1,excludeKeys:s}=o,a=c(()=>((s==null?void 0:s.value)||[]).concat(vt)),l=De();return l?c(()=>{var r;return Le(Object.entries((r=l.proxy)==null?void 0:r.$attrs).filter(([u])=>!a.value.includes(u)&&!(m&&mt.test(u))))}):c(()=>({}))};function ht(o){const m=V();function s(){if(o.value==null)return;const{selectionStart:l,selectionEnd:r,value:u}=o.value;if(l==null||r==null)return;const x=u.slice(0,Math.max(0,l)),d=u.slice(Math.max(0,r));m.value={selectionStart:l,selectionEnd:r,value:u,beforeTxt:x,afterTxt:d}}function a(){if(o.value==null||m.value==null)return;const{value:l}=o.value,{beforeTxt:r,afterTxt:u,selectionStart:x}=m.value;if(r==null||u==null||x==null)return;let d=l.length;if(l.endsWith(u))d=l.length-u.length;else if(l.startsWith(r))d=r.length;else{const h=r[x-1],S=l.indexOf(h,x-1);S!==-1&&(d=S+1)}o.value.setSelectionRange(d,d)}return[s,a]}let b;const bt=`
  height:0 !important;
  visibility:hidden !important;
  ${pt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,gt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function xt(o){const m=window.getComputedStyle(o),s=m.getPropertyValue("box-sizing"),a=Number.parseFloat(m.getPropertyValue("padding-bottom"))+Number.parseFloat(m.getPropertyValue("padding-top")),l=Number.parseFloat(m.getPropertyValue("border-bottom-width"))+Number.parseFloat(m.getPropertyValue("border-top-width"));return{contextStyle:gt.map(u=>`${u}:${m.getPropertyValue(u)}`).join(";"),paddingSize:a,borderSize:l,boxSizing:s}}function Ie(o,m=1,s){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:l,borderSize:r,boxSizing:u,contextStyle:x}=xt(o);b.setAttribute("style",`${x};${bt}`),b.value=o.value||o.placeholder||"";let d=b.scrollHeight;const h={};u==="border-box"?d=d+r:u==="content-box"&&(d=d-l),b.value="";const S=b.scrollHeight-l;if(ge(m)){let f=S*m;u==="border-box"&&(f=f+l+r),d=Math.max(f,d),h.minHeight=`${f}px`}if(ge(s)){let f=S*s;u==="border-box"&&(f=f+l+r),d=Math.min(f,d)}return h.height=`${d}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,h}const wt=Oe({id:{type:String,default:void 0},size:rt,disabled:Boolean,modelValue:{type:G([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:G([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:xe},prefixIcon:{type:xe},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:G([Object,Array,String]),default:()=>Ke({})}}),St={[ne]:o=>Q(o),input:o=>Q(o),change:o=>Q(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Ct=["role"],It=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],Et=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],kt=ke({name:"ElInput",inheritAttrs:!1}),zt=ke({...kt,props:wt,emits:St,setup(o,{expose:m,emit:s}){const a=o,l=He(),r=je(),u=c(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=l["aria-haspopup"],e["aria-owns"]=l["aria-owns"],e["aria-expanded"]=l["aria-expanded"]),e}),x=c(()=>[a.type==="textarea"?le.b():n.b(),n.m(ze.value),n.is("disabled",k.value),n.is("exceed",Ne.value),{[n.b("group")]:r.prepend||r.append,[n.bm("group","append")]:r.append,[n.bm("group","prepend")]:r.prepend,[n.m("prefix")]:r.prefix||a.prefixIcon,[n.m("suffix")]:r.suffix||a.suffixIcon||a.clearable||a.showPassword,[n.bm("suffix","password-clear")]:D.value&&X.value},l.class]),d=c(()=>[n.e("wrapper"),n.is("focus",N.value)]),h=yt({excludeKeys:c(()=>Object.keys(u.value))}),{form:S,formItem:f}=it(),{inputId:se}=ut(a,{formItemContext:f}),ze=ct(),k=dt(),n=we("input"),le=we("textarea"),R=ee(),I=ee(),N=V(!1),W=V(!1),F=V(!1),L=V(!1),re=V(),Y=ee(a.inputStyle),T=c(()=>R.value||I.value),ie=c(()=>{var e;return(e=S==null?void 0:S.statusIcon)!=null?e:!1}),$=c(()=>(f==null?void 0:f.validateState)||""),ue=c(()=>$.value&&Ue[$.value]),Pe=c(()=>L.value?We:Ye),Ve=c(()=>[l.style,a.inputStyle]),ce=c(()=>[a.inputStyle,Y.value,{resize:a.resize}]),C=c(()=>Xe(a.modelValue)?"":String(a.modelValue)),D=c(()=>a.clearable&&!k.value&&!a.readonly&&!!C.value&&(N.value||W.value)),X=c(()=>a.showPassword&&!k.value&&!a.readonly&&!!C.value&&(!!C.value||N.value)),z=c(()=>a.showWordLimit&&!!h.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!k.value&&!a.readonly&&!a.showPassword),Z=c(()=>Array.from(C.value).length),Ne=c(()=>!!z.value&&Z.value>Number(h.value.maxlength)),Fe=c(()=>!!r.suffix||!!a.suffixIcon||D.value||a.showPassword||z.value||!!$.value&&ie.value),[Te,$e]=ht(R);Ze(I,e=>{if(!z.value||a.resize!=="both")return;const i=e[0],{width:E}=i.contentRect;re.value={right:`calc(100% - ${E+15+6}px)`}});const O=()=>{const{type:e,autosize:i}=a;if(!(!Ee||e!=="textarea"||!I.value))if(i){const E=Ce(i)?i.minRows:void 0,J=Ce(i)?i.maxRows:void 0;Y.value={...Ie(I.value,E,J)}}else Y.value={minHeight:Ie(I.value).minHeight}},A=()=>{const e=T.value;!e||e.value===C.value||(e.value=C.value)},q=async e=>{Te();let{value:i}=e.target;if(a.formatter&&(i=a.parser?a.parser(i):i,i=a.formatter(i)),!F.value){if(i===C.value){A();return}s(ne,i),s("input",i),await M(),A(),$e()}},de=e=>{s("change",e.target.value)},pe=e=>{s("compositionstart",e),F.value=!0},fe=e=>{var i;s("compositionupdate",e);const E=(i=e.target)==null?void 0:i.value,J=E[E.length-1]||"";F.value=!ft(J)},ve=e=>{s("compositionend",e),F.value&&(F.value=!1,q(e))},Ae=()=>{L.value=!L.value,K()},K=async()=>{var e;await M(),(e=T.value)==null||e.focus()},Me=()=>{var e;return(e=T.value)==null?void 0:e.blur()},me=e=>{N.value=!0,s("focus",e)},ye=e=>{var i;N.value=!1,s("blur",e),a.validateEvent&&((i=f==null?void 0:f.validate)==null||i.call(f,"blur").catch(E=>Se()))},_e=e=>{W.value=!1,s("mouseleave",e)},Be=e=>{W.value=!0,s("mouseenter",e)},he=e=>{s("keydown",e)},Re=()=>{var e;(e=T.value)==null||e.select()},be=()=>{s(ne,""),s("change",""),s("clear"),s("input","")};return te(()=>a.modelValue,()=>{var e;M(()=>O()),a.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"change").catch(i=>Se()))}),te(C,()=>A()),te(()=>a.type,async()=>{await M(),A(),O()}),qe(()=>{!a.formatter&&a.parser,A(),M(O)}),m({input:R,textarea:I,ref:T,textareaStyle:ce,autosize:Je(a,"autosize"),focus:K,blur:Me,select:Re,clear:be,resizeTextarea:O}),(e,i)=>Ge((p(),g("div",oe(t(u),{class:t(x),style:t(Ve),role:e.containerRole,onMouseenter:Be,onMouseleave:_e}),[v(" input "),e.type!=="textarea"?(p(),g(ae,{key:0},[v(" prepend slot "),e.$slots.prepend?(p(),g("div",{key:0,class:y(t(n).be("group","prepend"))},[H(e.$slots,"prepend")],2)):v("v-if",!0),P("div",{class:y(t(d))},[v(" prefix slot "),e.$slots.prefix||e.prefixIcon?(p(),g("span",{key:0,class:y(t(n).e("prefix"))},[P("span",{class:y(t(n).e("prefix-inner")),onClick:K},[H(e.$slots,"prefix"),e.prefixIcon?(p(),w(t(B),{key:0,class:y(t(n).e("icon"))},{default:_(()=>[(p(),w(j(e.prefixIcon)))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0),P("input",oe({id:t(se),ref_key:"input",ref:R,class:t(n).e("inner")},t(h),{type:e.showPassword?L.value?"text":"password":e.type,disabled:t(k),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:q,onFocus:me,onBlur:ye,onChange:de,onKeydown:he}),null,16,It),v(" suffix slot "),t(Fe)?(p(),g("span",{key:1,class:y(t(n).e("suffix"))},[P("span",{class:y(t(n).e("suffix-inner")),onClick:K},[!t(D)||!t(X)||!t(z)?(p(),g(ae,{key:0},[H(e.$slots,"suffix"),e.suffixIcon?(p(),w(t(B),{key:0,class:y(t(n).e("icon"))},{default:_(()=>[(p(),w(j(e.suffixIcon)))]),_:1},8,["class"])):v("v-if",!0)],64)):v("v-if",!0),t(D)?(p(),w(t(B),{key:1,class:y([t(n).e("icon"),t(n).e("clear")]),onMousedown:at(t(ot),["prevent"]),onClick:be},{default:_(()=>[et(t(tt))]),_:1},8,["class","onMousedown"])):v("v-if",!0),t(X)?(p(),w(t(B),{key:2,class:y([t(n).e("icon"),t(n).e("password")]),onClick:Ae},{default:_(()=>[(p(),w(j(t(Pe))))]),_:1},8,["class"])):v("v-if",!0),t(z)?(p(),g("span",{key:3,class:y(t(n).e("count"))},[P("span",{class:y(t(n).e("count-inner"))},U(t(Z))+" / "+U(t(h).maxlength),3)],2)):v("v-if",!0),t($)&&t(ue)&&t(ie)?(p(),w(t(B),{key:4,class:y([t(n).e("icon"),t(n).e("validateIcon"),t(n).is("loading",t($)==="validating")])},{default:_(()=>[(p(),w(j(t(ue))))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0)],2),v(" append slot "),e.$slots.append?(p(),g("div",{key:1,class:y(t(n).be("group","append"))},[H(e.$slots,"append")],2)):v("v-if",!0)],64)):(p(),g(ae,{key:1},[v(" textarea "),P("textarea",oe({id:t(se),ref_key:"textarea",ref:I,class:t(le).e("inner")},t(h),{tabindex:e.tabindex,disabled:t(k),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ce),"aria-label":e.label,placeholder:e.placeholder,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:q,onFocus:me,onBlur:ye,onChange:de,onKeydown:he}),null,16,Et),t(z)?(p(),g("span",{key:0,style:nt(re.value),class:y(t(n).e("count"))},U(t(Z))+" / "+U(t(h).maxlength),7)):v("v-if",!0)],64))],16,Ct)),[[Qe,e.type!=="hidden"]])}});var Pt=st(zt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Tt=lt(Pt);export{Tt as E};