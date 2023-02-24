import{aA as A,v as g,C as j,aw as K,r as U,az as H,a_ as J,x as L,as as z,a$ as M,j as N,b0 as R,d as _,o as f,c as S,F as X,T as h,e as B,w as V,ad as w,n as C,f as e,N as I,L as T,p as q,m as G,J as O,H as Q,aX as E,S as W,a0 as Y}from"./index-72d5ed07.js";import{a as Z,b as oo,c as x,u as eo}from"./index-a2e85cee.js";const P=Symbol("buttonGroupContextKey"),to=(t,r)=>{A({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},g(()=>t.type==="text"));const n=j(P,void 0),a=K("button"),{form:l}=Z(),o=oo(g(()=>n==null?void 0:n.size)),c=x(),m=U(),d=H(),u=g(()=>t.type||(n==null?void 0:n.type)||""),k=g(()=>{var i,b,v;return(v=(b=t.autoInsertSpace)!=null?b:(i=a.value)==null?void 0:i.autoInsertSpace)!=null?v:!1}),y=g(()=>{var i;const b=(i=d.default)==null?void 0:i.call(d);if(k.value&&(b==null?void 0:b.length)===1){const v=b[0];if((v==null?void 0:v.type)===J){const F=v.children;return/^\p{Unified_Ideograph}{2}$/u.test(F.trim())}}return!1});return{_disabled:c,_size:o,_type:u,_ref:m,shouldAddSpace:y,handleClick:i=>{t.nativeType==="reset"&&(l==null||l.resetFields()),r("click",i)}}},so=["default","primary","success","warning","info","danger","text",""],no=["button","submit","reset"],$=L({size:eo,disabled:Boolean,type:{type:String,values:so,default:""},icon:{type:z},nativeType:{type:String,values:no,default:"button"},loading:Boolean,loadingIcon:{type:z,default:()=>M},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),ao={click:t=>t instanceof MouseEvent};function p(t,r=20){return t.mix("#141414",r).toString()}function lo(t){const r=x(),n=N("button");return g(()=>{let a={};const l=t.color;if(l){const o=new R(l),c=t.dark?o.tint(20).toString():p(o,20);if(t.plain)a=n.cssVarBlock({"bg-color":t.dark?p(o,90):o.tint(90).toString(),"text-color":l,"border-color":t.dark?p(o,50):o.tint(50).toString(),"hover-text-color":`var(${n.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":c,"active-text-color":`var(${n.cssVarName("color-white")})`,"active-border-color":c}),r.value&&(a[n.cssVarBlockName("disabled-bg-color")]=t.dark?p(o,90):o.tint(90).toString(),a[n.cssVarBlockName("disabled-text-color")]=t.dark?p(o,50):o.tint(50).toString(),a[n.cssVarBlockName("disabled-border-color")]=t.dark?p(o,80):o.tint(80).toString());else{const m=t.dark?p(o,30):o.tint(30).toString(),d=o.isDark()?`var(${n.cssVarName("color-white")})`:`var(${n.cssVarName("color-black")})`;if(a=n.cssVarBlock({"bg-color":l,"text-color":d,"border-color":l,"hover-bg-color":m,"hover-text-color":d,"hover-border-color":m,"active-bg-color":c,"active-border-color":c}),r.value){const u=t.dark?p(o,50):o.tint(50).toString();a[n.cssVarBlockName("disabled-bg-color")]=u,a[n.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${n.cssVarName("color-white")})`,a[n.cssVarBlockName("disabled-border-color")]=u}}}return a})}const ro=["aria-disabled","disabled","autofocus","type"],io=_({name:"ElButton"}),co=_({...io,props:$,emits:ao,setup(t,{expose:r,emit:n}){const a=t,l=lo(a),o=N("button"),{_ref:c,_size:m,_type:d,_disabled:u,shouldAddSpace:k,handleClick:y}=to(a,n);return r({ref:c,size:m,type:d,disabled:u,shouldAddSpace:k}),(s,i)=>(f(),S("button",{ref_key:"_ref",ref:c,class:C([e(o).b(),e(o).m(e(d)),e(o).m(e(m)),e(o).is("disabled",e(u)),e(o).is("loading",s.loading),e(o).is("plain",s.plain),e(o).is("round",s.round),e(o).is("circle",s.circle),e(o).is("text",s.text),e(o).is("link",s.link),e(o).is("has-bg",s.bg)]),"aria-disabled":e(u)||s.loading,disabled:e(u)||s.loading,autofocus:s.autofocus,type:s.nativeType,style:q(e(l)),onClick:i[0]||(i[0]=(...b)=>e(y)&&e(y)(...b))},[s.loading?(f(),S(X,{key:0},[s.$slots.loading?h(s.$slots,"loading",{key:0}):(f(),B(e(I),{key:1,class:C(e(o).is("loading"))},{default:V(()=>[(f(),B(w(s.loadingIcon)))]),_:1},8,["class"]))],64)):s.icon||s.$slots.icon?(f(),B(e(I),{key:1},{default:V(()=>[s.icon?(f(),B(w(s.icon),{key:0})):h(s.$slots,"icon",{key:1})]),_:3})):T("v-if",!0),s.$slots.default?(f(),S("span",{key:2,class:C({[e(o).em("text","expand")]:e(k)})},[h(s.$slots,"default")],2)):T("v-if",!0)],14,ro))}});var uo=G(co,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const bo={size:$.size,type:$.type},po=_({name:"ElButtonGroup"}),fo=_({...po,props:bo,setup(t){const r=t;O(P,Q({size:E(r,"size"),type:E(r,"type")}));const n=N("button");return(a,l)=>(f(),S("div",{class:C(`${e(n).b("group")}`)},[h(a.$slots,"default")],2))}});var D=G(fo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const go=W(uo,{ButtonGroup:D});Y(D);export{go as E};
