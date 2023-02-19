import{a1 as Me,v as Re,U as S,y as j,d as ve,f as Le,r as fe,E as De,q as Y,a2 as J,g as Oe,h as Be,a3 as ze,o as x,k as re,I as Ne,a as d,n as de,L as Q,J as R,w as he,c as ee,N as Ue,a4 as We,M as Ie,K as _e,a5 as Ye,a6 as Ke,Y as me,j as je,x as qe,R as Ee,S as $e,l as q,a7 as Ze,b as Xe}from"./index-6f6b93fa.js";import{u as He,E as Ge}from"./el-input-1e7d4fe6.js";import{_ as Je}from"./BackHome.vue_vue_type_script_setup_true_lang-0a2d3b2f.js";import{u as Qe,a as en,b as nn,c as rn}from"./index-ee5fc37d.js";import{C as Ve,I as te,U as K}from"./event-9519ab40.js";import{E as tn}from"./index-283e626e.js";const an=100,on=600,Ce={beforeMount(m,g){const h=g.value,{interval:i=an,delay:C=on}=Me(h)?{}:h;let w,M;const s=()=>Me(h)?h():h.handler(),f=()=>{M&&(clearTimeout(M),M=void 0),w&&(clearInterval(w),w=void 0)};m.addEventListener("mousedown",I=>{I.button===0&&(f(),s(),document.addEventListener("mouseup",()=>f(),{once:!0}),M=setTimeout(()=>{w=setInterval(()=>{s()},i)},C))})}},ln=Re({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:Qe,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:m=>m===null||S(m)||["min","max"].includes(m),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:m=>m>=0&&m===Number.parseInt(`${m}`,10)},validateEvent:{type:Boolean,default:!0}}),sn={[Ve]:(m,g)=>g!==m,blur:m=>m instanceof FocusEvent,focus:m=>m instanceof FocusEvent,[te]:m=>S(m)||j(m),[K]:m=>S(m)||j(m)},un=["aria-label","onKeydown"],cn=["aria-label","onKeydown"],dn=ve({name:"ElInputNumber"}),mn=ve({...dn,props:ln,emits:sn,setup(m,{expose:g,emit:h}){const i=m,{t:C}=He(),w=Le("input-number"),M=fe(),s=De({currentValue:i.modelValue,userInput:null}),{formItem:f}=en(),I=Y(()=>S(i.modelValue)&&i.modelValue<=i.min),_=Y(()=>S(i.modelValue)&&i.modelValue>=i.max),T=Y(()=>{const r=$(i.step);return J(i.precision)?Math.max($(i.modelValue),r):(r>i.precision,i.precision)}),N=Y(()=>i.controls&&i.controlsPosition==="right"),v=nn(),F=rn(),O=Y(()=>{if(s.userInput!==null)return s.userInput;let r=s.currentValue;if(j(r))return"";if(S(r)){if(Number.isNaN(r))return"";J(i.precision)||(r=r.toFixed(i.precision))}return r}),P=(r,e)=>{if(J(e)&&(e=T.value),e===0)return Math.round(r);let n=String(r);const a=n.indexOf(".");if(a===-1||!n.replace(".","").split("")[a+e])return r;const c=n.length;return n.charAt(c-1)==="5"&&(n=`${n.slice(0,Math.max(0,c-1))}6`),Number.parseFloat(Number(n).toFixed(e))},$=r=>{if(j(r))return 0;const e=r.toString(),n=e.indexOf(".");let a=0;return n!==-1&&(a=e.length-n-1),a},Z=(r,e=1)=>S(r)?P(r+i.step*e):s.currentValue,B=()=>{if(i.readonly||F.value||_.value)return;const r=Number(O.value)||0,e=Z(r);L(e),h(te,s.currentValue)},z=()=>{if(i.readonly||F.value||I.value)return;const r=Number(O.value)||0,e=Z(r,-1);L(e),h(te,s.currentValue)},U=(r,e)=>{const{max:n,min:a,step:t,precision:u,stepStrictly:c,valueOnClear:l}=i;let o=Number(r);if(j(r)||Number.isNaN(o))return null;if(r===""){if(l===null)return null;o=qe(l)?{min:a,max:n}[l]:l}return c&&(o=P(Math.round(o/t)*t,u)),J(u)||(o=P(o,u)),(o>n||o<a)&&(o=o>n?n:a,e&&h(K,o)),o},L=(r,e=!0)=>{var n;const a=s.currentValue,t=U(r);if(a!==t){if(!e){h(K,t);return}s.userInput=null,h(K,t),h(Ve,t,a),i.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"change").catch(u=>Ee())),s.currentValue=t}},ae=r=>{s.userInput=r;const e=r===""?null:Number(r);h(te,e),L(e,!1)},oe=r=>{const e=r!==""?Number(r):"";(S(e)&&!Number.isNaN(e)||r==="")&&L(e),s.userInput=null},ie=()=>{var r,e;(e=(r=M.value)==null?void 0:r.focus)==null||e.call(r)},le=()=>{var r,e;(e=(r=M.value)==null?void 0:r.blur)==null||e.call(r)},X=r=>{h("focus",r)},W=r=>{var e;h("blur",r),i.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"blur").catch(n=>Ee()))};return Oe(()=>i.modelValue,r=>{const e=U(s.userInput),n=U(r,!0);!S(e)&&(!e||e!==n)&&(s.currentValue=n,s.userInput=null)},{immediate:!0}),Be(()=>{var r;const{min:e,max:n,modelValue:a}=i,t=(r=M.value)==null?void 0:r.input;if(t.setAttribute("role","spinbutton"),Number.isFinite(n)?t.setAttribute("aria-valuemax",String(n)):t.removeAttribute("aria-valuemax"),Number.isFinite(e)?t.setAttribute("aria-valuemin",String(e)):t.removeAttribute("aria-valuemin"),t.setAttribute("aria-valuenow",String(s.currentValue)),t.setAttribute("aria-disabled",String(F.value)),!S(a)&&a!=null){let u=Number(a);Number.isNaN(u)&&(u=null),h(K,u)}}),ze(()=>{var r;const e=(r=M.value)==null?void 0:r.input;e==null||e.setAttribute("aria-valuenow",`${s.currentValue}`)}),g({focus:ie,blur:le}),(r,e)=>(x(),re("div",{class:de([d(w).b(),d(w).m(d(v)),d(w).is("disabled",d(F)),d(w).is("without-controls",!r.controls),d(w).is("controls-right",d(N))]),onDragstart:e[0]||(e[0]=me(()=>{},["prevent"]))},[r.controls?Ne((x(),re("span",{key:0,role:"button","aria-label":d(C)("el.inputNumber.decrease"),class:de([d(w).e("decrease"),d(w).is("disabled",d(I))]),onKeydown:Q(z,["enter"])},[R(d(Ie),null,{default:he(()=>[d(N)?(x(),ee(d(Ue),{key:0})):(x(),ee(d(We),{key:1}))]),_:1})],42,un)),[[d(Ce),z]]):_e("v-if",!0),r.controls?Ne((x(),re("span",{key:1,role:"button","aria-label":d(C)("el.inputNumber.increase"),class:de([d(w).e("increase"),d(w).is("disabled",d(_))]),onKeydown:Q(B,["enter"])},[R(d(Ie),null,{default:he(()=>[d(N)?(x(),ee(d(Ye),{key:0})):(x(),ee(d(Ke),{key:1}))]),_:1})],42,cn)),[[d(Ce),B]]):_e("v-if",!0),R(d(Ge),{id:r.id,ref_key:"input",ref:M,type:"number",step:r.step,"model-value":d(O),placeholder:r.placeholder,readonly:r.readonly,disabled:d(F),size:d(v),max:r.max,min:r.min,name:r.name,label:r.label,"validate-event":!1,onKeydown:[Q(me(B,["prevent"]),["up"]),Q(me(z,["prevent"]),["down"])],onBlur:W,onFocus:X,onInput:ae,onChange:oe},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var fn=je(mn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const hn=$e(fn);var pe={};(function m(g,h,i,C){var w=!!(g.Worker&&g.Blob&&g.Promise&&g.OffscreenCanvas&&g.OffscreenCanvasRenderingContext2D&&g.HTMLCanvasElement&&g.HTMLCanvasElement.prototype.transferControlToOffscreen&&g.URL&&g.URL.createObjectURL);function M(){}function s(e){var n=h.exports.Promise,a=n!==void 0?n:g.Promise;return typeof a=="function"?new a(e):(e(M,M),null)}var f=function(){var e=Math.floor(16.666666666666668),n,a,t={},u=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(n=function(c){var l=Math.random();return t[l]=requestAnimationFrame(function o(y){u===y||u+e-1<y?(u=y,delete t[l],c()):t[l]=requestAnimationFrame(o)}),l},a=function(c){t[c]&&cancelAnimationFrame(t[c])}):(n=function(c){return setTimeout(c,e)},a=function(c){return clearTimeout(c)}),{frame:n,cancel:a}}(),I=function(){var e,n,a={};function t(u){function c(l,o){u.postMessage({options:l||{},callback:o})}u.init=function(o){var y=o.transferControlToOffscreen();u.postMessage({canvas:y},[y])},u.fire=function(o,y,k){if(n)return c(o,null),n;var p=Math.random().toString(36).slice(2);return n=s(function(V){function E(b){b.data.callback===p&&(delete a[p],u.removeEventListener("message",E),n=null,k(),V())}u.addEventListener("message",E),c(o,p),a[p]=E.bind(null,{data:{callback:p}})}),n},u.reset=function(){u.postMessage({reset:!0});for(var o in a)a[o](),delete a[o]}}return function(){if(e)return e;if(!i&&w){var u=["var CONFETTI, SIZE = {}, module = {};","("+m.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{e=new Worker(URL.createObjectURL(new Blob([u])))}catch(c){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",c),null}t(e)}return e}}(),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(e,n){return n?n(e):e}function N(e){return e!=null}function v(e,n,a){return T(e&&N(e[n])?e[n]:_[n],a)}function F(e){return e<0?0:Math.floor(e)}function O(e,n){return Math.floor(Math.random()*(n-e))+e}function P(e){return parseInt(e,16)}function $(e){return e.map(Z)}function Z(e){var n=String(e).replace(/[^0-9a-f]/gi,"");return n.length<6&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]),{r:P(n.substring(0,2)),g:P(n.substring(2,4)),b:P(n.substring(4,6))}}function B(e){var n=v(e,"origin",Object);return n.x=v(n,"x",Number),n.y=v(n,"y",Number),n}function z(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function U(e){var n=e.getBoundingClientRect();e.width=n.width,e.height=n.height}function L(e){var n=document.createElement("canvas");return n.style.position="fixed",n.style.top="0px",n.style.left="0px",n.style.pointerEvents="none",n.style.zIndex=e,n}function ae(e,n,a,t,u,c,l,o,y){e.save(),e.translate(n,a),e.rotate(c),e.scale(t,u),e.arc(0,0,1,l,o,y),e.restore()}function oe(e){var n=e.angle*(Math.PI/180),a=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-n+(.5*a-Math.random()*a),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar}}function ie(e,n){n.x+=Math.cos(n.angle2D)*n.velocity+n.drift,n.y+=Math.sin(n.angle2D)*n.velocity+n.gravity,n.wobble+=n.wobbleSpeed,n.velocity*=n.decay,n.tiltAngle+=.1,n.tiltSin=Math.sin(n.tiltAngle),n.tiltCos=Math.cos(n.tiltAngle),n.random=Math.random()+2,n.wobbleX=n.x+10*n.scalar*Math.cos(n.wobble),n.wobbleY=n.y+10*n.scalar*Math.sin(n.wobble);var a=n.tick++/n.totalTicks,t=n.x+n.random*n.tiltCos,u=n.y+n.random*n.tiltSin,c=n.wobbleX+n.random*n.tiltCos,l=n.wobbleY+n.random*n.tiltSin;if(e.fillStyle="rgba("+n.color.r+", "+n.color.g+", "+n.color.b+", "+(1-a)+")",e.beginPath(),n.shape==="circle")e.ellipse?e.ellipse(n.x,n.y,Math.abs(c-t)*n.ovalScalar,Math.abs(l-u)*n.ovalScalar,Math.PI/10*n.wobble,0,2*Math.PI):ae(e,n.x,n.y,Math.abs(c-t)*n.ovalScalar,Math.abs(l-u)*n.ovalScalar,Math.PI/10*n.wobble,0,2*Math.PI);else if(n.shape==="star")for(var o=Math.PI/2*3,y=4*n.scalar,k=8*n.scalar,p=n.x,V=n.y,E=5,b=Math.PI/E;E--;)p=n.x+Math.cos(o)*k,V=n.y+Math.sin(o)*k,e.lineTo(p,V),o+=b,p=n.x+Math.cos(o)*y,V=n.y+Math.sin(o)*y,e.lineTo(p,V),o+=b;else e.moveTo(Math.floor(n.x),Math.floor(n.y)),e.lineTo(Math.floor(n.wobbleX),Math.floor(u)),e.lineTo(Math.floor(c),Math.floor(l)),e.lineTo(Math.floor(t),Math.floor(n.wobbleY));return e.closePath(),e.fill(),n.tick<n.totalTicks}function le(e,n,a,t,u){var c=n.slice(),l=e.getContext("2d"),o,y,k=s(function(p){function V(){o=y=null,l.clearRect(0,0,t.width,t.height),u(),p()}function E(){i&&!(t.width===C.width&&t.height===C.height)&&(t.width=e.width=C.width,t.height=e.height=C.height),!t.width&&!t.height&&(a(e),t.width=e.width,t.height=e.height),l.clearRect(0,0,t.width,t.height),c=c.filter(function(b){return ie(l,b)}),c.length?o=f.frame(E):V()}o=f.frame(E),y=V});return{addFettis:function(p){return c=c.concat(p),k},canvas:e,promise:k,reset:function(){o&&f.cancel(o),y&&y()}}}function X(e,n){var a=!e,t=!!v(n||{},"resize"),u=v(n,"disableForReducedMotion",Boolean),c=w&&!!v(n||{},"useWorker"),l=c?I():null,o=a?z:U,y=e&&l?!!e.__confetti_initialized:!1,k=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,p;function V(b,se,ue){for(var D=v(b,"particleCount",F),H=v(b,"angle",Number),G=v(b,"spread",Number),A=v(b,"startVelocity",Number),Te=v(b,"decay",Number),Se=v(b,"gravity",Number),ke=v(b,"drift",Number),be=v(b,"colors",$),xe=v(b,"ticks",Number),ge=v(b,"shapes"),Fe=v(b,"scalar"),ye=B(b),we=D,ce=[],Pe=e.width*ye.x,Ae=e.height*ye.y;we--;)ce.push(oe({x:Pe,y:Ae,angle:H,spread:G,startVelocity:A,color:be[we%be.length],shape:ge[O(0,ge.length)],ticks:xe,decay:Te,gravity:Se,drift:ke,scalar:Fe}));return p?p.addFettis(ce):(p=le(e,ce,o,se,ue),p.promise)}function E(b){var se=u||v(b,"disableForReducedMotion",Boolean),ue=v(b,"zIndex",Number);if(se&&k)return s(function(A){A()});a&&p?e=p.canvas:a&&!e&&(e=L(ue),document.body.appendChild(e)),t&&!y&&o(e);var D={width:e.width,height:e.height};l&&!y&&l.init(e),y=!0,l&&(e.__confetti_initialized=!0);function H(){if(l){var A={getBoundingClientRect:function(){if(!a)return e.getBoundingClientRect()}};o(A),l.postMessage({resize:{width:A.width,height:A.height}});return}D.width=D.height=null}function G(){p=null,t&&g.removeEventListener("resize",H),a&&e&&(document.body.removeChild(e),e=null,y=!1)}return t&&g.addEventListener("resize",H,!1),l?l.fire(b,D,G):V(b,D,G)}return E.reset=function(){l&&l.reset(),p&&p.reset()},E}var W;function r(){return W||(W=X(null,{useWorker:!0,resize:!0})),W}h.exports=function(){return r().apply(this,arguments)},h.exports.reset=function(){r().reset()},h.exports.create=X})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),pe,!1);const ne=pe.exports;pe.exports.create;const vn={flex:"~",justify:"center"},pn=q("span",null,"FireWork：",-1),bn={m:"l-20px"},gn=q("span",null,"Snow：",-1),En=ve({__name:"CanvasConfetti",setup(m){const g=fe(1),h=fe(1);function i(s,f){return Math.random()*(f-s)+s}function C(){let s=g.value*1e3,f=Date.now()+s,I={startVelocity:30,spread:360,ticks:60,zIndex:0},_=setInterval(function(){let T=f-Date.now();if(T<=0)return clearInterval(_);let N=50*(T/s);ne(Object.assign({},I,{particleCount:N,origin:{x:i(.1,.3),y:Math.random()-.2}})),ne(Object.assign({},I,{particleCount:N,origin:{x:i(.7,.9),y:Math.random()-.2}}))},250)}function w(){const s=document.querySelector("body");s==null||s.classList.add("bg-gray-200");let f=15*1e3,I=Date.now()+f,_=1;(function T(){let N=I-Date.now(),v=Math.max(200,500*(N/f));_=Math.max(.8,_-.001),ne({particleCount:1,startVelocity:0,ticks:v,origin:{x:Math.random(),y:Math.random()*_-.2},colors:["#ffffff"],shapes:["circle"],gravity:i(.4,.6),scalar:i(.4,1),drift:i(-.4,.4)}),N>0&&requestAnimationFrame(T)})()}function M(){ne({angle:i(55,125),spread:i(50,70),particleCount:i(50,100),origin:{y:.6}})}return(s,f)=>{const I=Ze("a-input-number"),_=hn,T=tn;return x(),re("div",null,[R(Je,{m:"t-10px l-10px"}),q("div",vn,[q("div",null,[pn,R(I,{value:g.value,"onUpdate:value":f[0]||(f[0]=N=>g.value=N),placeholder:"Time",min:1,onChange:C},null,8,["value"])]),q("div",bn,[gn,R(_,{value:h.value,"onUpdate:value":f[1]||(f[1]=N=>h.value=N),placeholder:"Time",min:1,onChange:w},null,8,["value"])]),R(T,{type:"text",onClick:M},{default:he(()=>[Xe("Salute")]),_:1})])])}}});export{En as default};
