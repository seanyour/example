import{at as j,q as g,B as K,a9 as A,r as M,ad as U,au as q,v as H,aa as V,av as R,f as N,aw as J,d as _,o as f,k as S,F as L,T as h,c as B,w,aj as z,n as C,a as e,M as I,K as E,m as O,j as G,H as Q,E as W,ai as T,S as X,a0 as Y}from"./index-6f6b93fa.js";import{a as Z,b as oo,c as P,u as eo}from"./index-ee5fc37d.js";const x=Symbol("buttonGroupContextKey"),to=(t,r)=>{j({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},g(()=>t.type==="text"));const a=K(x,void 0),n=A("button"),{form:l}=Z(),o=oo(g(()=>a==null?void 0:a.size)),c=P(),m=M(),d=U(),u=g(()=>t.type||(a==null?void 0:a.type)||""),k=g(()=>{var i,b,v;return(v=(b=t.autoInsertSpace)!=null?b:(i=n.value)==null?void 0:i.autoInsertSpace)!=null?v:!1}),y=g(()=>{var i;const b=(i=d.default)==null?void 0:i.call(d);if(k.value&&(b==null?void 0:b.length)===1){const v=b[0];if((v==null?void 0:v.type)===q){const F=v.children;return/^\p{Unified_Ideograph}{2}$/u.test(F.trim())}}return!1});return{_disabled:c,_size:o,_type:u,_ref:m,shouldAddSpace:y,handleClick:i=>{t.nativeType==="reset"&&(l==null||l.resetFields()),r("click",i)}}},so=["default","primary","success","warning","info","danger","text",""],ao=["button","submit","reset"],$=H({size:eo,disabled:Boolean,type:{type:String,values:so,default:""},icon:{type:V},nativeType:{type:String,values:ao,default:"button"},loading:Boolean,loadingIcon:{type:V,default:()=>R},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),no={click:t=>t instanceof MouseEvent};function p(t,r=20){return t.mix("#141414",r).toString()}function lo(t){const r=P(),a=N("button");return g(()=>{let n={};const l=t.color;if(l){const o=new J(l),c=t.dark?o.tint(20).toString():p(o,20);if(t.plain)n=a.cssVarBlock({"bg-color":t.dark?p(o,90):o.tint(90).toString(),"text-color":l,"border-color":t.dark?p(o,50):o.tint(50).toString(),"hover-text-color":`var(${a.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":c,"active-text-color":`var(${a.cssVarName("color-white")})`,"active-border-color":c}),r.value&&(n[a.cssVarBlockName("disabled-bg-color")]=t.dark?p(o,90):o.tint(90).toString(),n[a.cssVarBlockName("disabled-text-color")]=t.dark?p(o,50):o.tint(50).toString(),n[a.cssVarBlockName("disabled-border-color")]=t.dark?p(o,80):o.tint(80).toString());else{const m=t.dark?p(o,30):o.tint(30).toString(),d=o.isDark()?`var(${a.cssVarName("color-white")})`:`var(${a.cssVarName("color-black")})`;if(n=a.cssVarBlock({"bg-color":l,"text-color":d,"border-color":l,"hover-bg-color":m,"hover-text-color":d,"hover-border-color":m,"active-bg-color":c,"active-border-color":c}),r.value){const u=t.dark?p(o,50):o.tint(50).toString();n[a.cssVarBlockName("disabled-bg-color")]=u,n[a.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${a.cssVarName("color-white")})`,n[a.cssVarBlockName("disabled-border-color")]=u}}}return n})}const ro=["aria-disabled","disabled","autofocus","type"],io=_({name:"ElButton"}),co=_({...io,props:$,emits:no,setup(t,{expose:r,emit:a}){const n=t,l=lo(n),o=N("button"),{_ref:c,_size:m,_type:d,_disabled:u,shouldAddSpace:k,handleClick:y}=to(n,a);return r({ref:c,size:m,type:d,disabled:u,shouldAddSpace:k}),(s,i)=>(f(),S("button",{ref_key:"_ref",ref:c,class:C([e(o).b(),e(o).m(e(d)),e(o).m(e(m)),e(o).is("disabled",e(u)),e(o).is("loading",s.loading),e(o).is("plain",s.plain),e(o).is("round",s.round),e(o).is("circle",s.circle),e(o).is("text",s.text),e(o).is("link",s.link),e(o).is("has-bg",s.bg)]),"aria-disabled":e(u)||s.loading,disabled:e(u)||s.loading,autofocus:s.autofocus,type:s.nativeType,style:O(e(l)),onClick:i[0]||(i[0]=(...b)=>e(y)&&e(y)(...b))},[s.loading?(f(),S(L,{key:0},[s.$slots.loading?h(s.$slots,"loading",{key:0}):(f(),B(e(I),{key:1,class:C(e(o).is("loading"))},{default:w(()=>[(f(),B(z(s.loadingIcon)))]),_:1},8,["class"]))],64)):s.icon||s.$slots.icon?(f(),B(e(I),{key:1},{default:w(()=>[s.icon?(f(),B(z(s.icon),{key:0})):h(s.$slots,"icon",{key:1})]),_:3})):E("v-if",!0),s.$slots.default?(f(),S("span",{key:2,class:C({[e(o).em("text","expand")]:e(k)})},[h(s.$slots,"default")],2)):E("v-if",!0)],14,ro))}});var uo=G(co,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const bo={size:$.size,type:$.type},po=_({name:"ElButtonGroup"}),fo=_({...po,props:bo,setup(t){const r=t;Q(x,W({size:T(r,"size"),type:T(r,"type")}));const a=N("button");return(n,l)=>(f(),S("div",{class:C(`${e(a).b("group")}`)},[h(n.$slots,"default")],2))}});var D=G(fo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const go=X(uo,{ButtonGroup:D});Y(D);export{go as E};
