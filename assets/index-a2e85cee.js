import{v as t,q as I,b1 as b,r,aw as y,C as i,b2 as c,b3 as f,f as m,l as w,k as S,Z as h,aX as F,aQ as P}from"./index-72d5ed07.js";const _=["","default","small","large"],z=o=>{const s=I();return t(()=>{var u,e;return(e=((u=s.proxy)==null?void 0:u.$props)[o])!=null?e:void 0})},q=b({type:String,values:_,required:!1}),K=(o,s={})=>{const u=r(void 0),e=s.prop?u:z("size"),l=s.global?u:y("size"),a=s.form?{size:void 0}:i(c,void 0),v=s.formItem?{size:void 0}:i(f,void 0);return t(()=>e.value||m(o)||(v==null?void 0:v.size)||(a==null?void 0:a.size)||l.value||"")},R=o=>{const s=z("disabled"),u=i(c,void 0);return t(()=>s.value||m(o)||(u==null?void 0:u.disabled)||!1)},U=()=>{const o=i(c,void 0),s=i(f,void 0);return{form:o,formItem:s}},j=(o,{formItemContext:s,disableIdGeneration:u,disableIdManagement:e})=>{u||(u=r(!1)),e||(e=r(!1));const l=r();let a;const v=t(()=>{var n;return!!(!o.label&&s&&s.inputIds&&((n=s.inputIds)==null?void 0:n.length)<=1)});return w(()=>{a=S([F(o,"id"),u],([n,p])=>{const d=n??(p?void 0:h().value);d!==l.value&&(s!=null&&s.removeInputId&&(l.value&&s.removeInputId(l.value),!(e!=null&&e.value)&&!p&&d&&s.addInputId(d)),l.value=d)},{immediate:!0})}),P(()=>{a&&a(),s!=null&&s.removeInputId&&l.value&&s.removeInputId(l.value)}),{isLabeledByFormItem:v,inputId:l}};export{U as a,K as b,R as c,j as d,q as u};
