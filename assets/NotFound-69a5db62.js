import{a9 as g,aa as w,ab as C,ac as $,x as h,d as _,j as N,v as S,o as n,c as r,b as d,T as i,n as o,f as s,L as u,m as B,e as E,ad as I,t as m,S as R,u as T,a as b,w as k,g as V,a8 as D}from"./index-72d5ed07.js";import{E as M}from"./el-button-1a1bf777.js";import"./index-a2e85cee.js";const l={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},y={[l.success]:g,[l.warning]:w,[l.error]:C,[l.info]:$},P=h({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),j=_({name:"ElResult"}),x=_({...j,props:P,setup(v){const p=v,t=N("result"),c=S(()=>{const e=p.icon,a=e&&l[e]?l[e]:"icon-info",f=y[a]||y["icon-info"];return{class:a,component:f}});return(e,a)=>(n(),r("div",{class:o(s(t).b())},[d("div",{class:o(s(t).e("icon"))},[i(e.$slots,"icon",{},()=>[s(c).component?(n(),E(I(s(c).component),{key:0,class:o(s(c).class)},null,8,["class"])):u("v-if",!0)])],2),e.title||e.$slots.title?(n(),r("div",{key:0,class:o(s(t).e("title"))},[i(e.$slots,"title",{},()=>[d("p",null,m(e.title),1)])],2)):u("v-if",!0),e.subTitle||e.$slots["sub-title"]?(n(),r("div",{key:1,class:o(s(t).e("subtitle"))},[i(e.$slots,"sub-title",{},()=>[d("p",null,m(e.subTitle),1)])],2)):u("v-if",!0),e.$slots.extra?(n(),r("div",{key:2,class:o(s(t).e("extra"))},[i(e.$slots,"extra")],2)):u("v-if",!0)],2))}});var z=B(x,[["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]]);const F=R(z);const L={class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"},J=_({__name:"NotFound",setup(v){const p=D(),{t}=T();return(c,e)=>{const a=M,f=F;return n(),r("div",L,[b(f,{icon:"error",title:"404","sub-title":s(t)("not found")},{extra:k(()=>[b(a,{type:"primary",onClick:e[0]||(e[0]=q=>s(p).push("/"))},{default:k(()=>[V(m(s(t)("back home")),1)]),_:1})]),_:1},8,["sub-title"])])}}});export{J as default};
