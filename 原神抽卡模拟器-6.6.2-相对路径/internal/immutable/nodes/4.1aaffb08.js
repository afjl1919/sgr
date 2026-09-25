import{S as se,i as le,s as ae,a as N,k as i,q as O,X as oe,h as l,c as S,l as r,m as d,r as W,n as o,D as P,a7 as J,b as Q,E as e,M as C,Y as Z,N as $,V as ne,O as x,o as ce}from"../chunks/index.0cfe4561.js";import{b as ie}from"../chunks/runtime.27ec675d.js";import{A as ee}from"../chunks/env.7b3600c7.js";import{i as re}from"../chunks/app-stores.ce9dd1f3.js";const de=`<h1>Android 打包说明</h1>
<p>这份项目已经改成更适合静态构建与 APK 封装的本地版源码。</p>
<ol>
<li><code>npm install</code></li>
<li><code>npm run build</code></li>
<li>按根目录 <code>APK_BUILD.md</code> 的说明接入 Capacitor</li>
<li><code>npx cap sync android</code></li>
<li><code>npx cap open android</code></li>
</ol>
`,ue=`<h1>Desktop / 本地运行说明</h1>
<ol>
<li>安装 Node.js 与 npm</li>
<li>在项目根目录运行 <code>npm install</code></li>
<li>开发模式运行 <code>npm run dev</code></li>
<li>生产构建运行 <code>npm run build</code></li>
</ol>
`;function fe(s){let b,u,t,v,_,n,I,g,f,c,A,p,y,h,L,B,H,k,D,R,T,E,U,V,j;return document.title=b=`
		Install Instruction | `+s[2]("title",{default:ee})+`
	`,{c(){u=N(),t=i("section"),v=i("header"),_=i("div"),n=i("a"),I=O("Local Wish Simulator"),g=N(),f=i("div"),c=i("button"),A=i("i"),p=O(" Android"),y=N(),h=i("button"),L=i("i"),B=O(" Windows"),H=N(),k=i("article"),R=N(),T=i("footer"),E=i("a"),U=O("Start Wishing Now !"),this.h()},l(a){oe("svelte-12rceiw",document.head).forEach(l),u=S(a),t=r(a,"SECTION",{class:!0});var w=d(t);v=r(w,"HEADER",{class:!0});var F=d(v);_=r(F,"DIV",{class:!0});var X=d(_);n=r(X,"A",{href:!0});var Y=d(n);I=W(Y,"Local Wish Simulator"),Y.forEach(l),X.forEach(l),F.forEach(l),g=S(w),f=r(w,"DIV",{class:!0});var M=d(f);c=r(M,"BUTTON",{class:!0});var q=d(c);A=r(q,"I",{class:!0}),d(A).forEach(l),p=W(q," Android"),q.forEach(l),y=S(M),h=r(M,"BUTTON",{class:!0});var K=d(h);L=r(K,"I",{class:!0}),d(L).forEach(l),B=W(K," Windows"),K.forEach(l),M.forEach(l),H=S(w),k=r(w,"ARTICLE",{class:!0});var te=d(k);te.forEach(l),R=S(w),T=r(w,"FOOTER",{class:!0});var z=d(T);E=r(z,"A",{href:!0,class:!0});var G=d(E);U=W(G,"Start Wishing Now !"),G.forEach(l),z.forEach(l),w.forEach(l),this.h()},h(){o(n,"href",new URL("../../../",import.meta.url).href),o(_,"class","brand"),o(v,"class","svelte-1evdkfc"),o(A,"class","gi-android svelte-1evdkfc"),o(c,"class","svelte-1evdkfc"),P(c,"active",s[0]==="android"),o(L,"class","gi-windows svelte-1evdkfc"),o(h,"class","svelte-1evdkfc"),P(h,"active",s[0]==="windows"),o(f,"class","select-device svelte-1evdkfc"),o(k,"class",D=J(s[0])+" svelte-1evdkfc"),o(E,"href",new URL("../../../",import.meta.url).href),o(E,"class","svelte-1evdkfc"),o(T,"class","svelte-1evdkfc"),o(t,"class","svelte-1evdkfc")},m(a,m){Q(a,u,m),Q(a,t,m),e(t,v),e(v,_),e(_,n),e(n,I),e(t,g),e(t,f),e(f,c),e(c,A),e(c,p),e(f,y),e(f,h),e(h,L),e(h,B),e(t,H),e(t,k),k.innerHTML=s[1],e(t,R),e(t,T),e(T,E),e(E,U),V||(j=[C(n,"click",Z(s[4])),C(c,"click",s[5]),C(h,"click",s[6]),C(E,"click",Z(s[7]))],V=!0)},p(a,[m]){m&4&&b!==(b=`
		Install Instruction | `+a[2]("title",{default:ee})+`
	`)&&(document.title=b),m&1&&P(c,"active",a[0]==="android"),m&1&&P(h,"active",a[0]==="windows"),m&2&&(k.innerHTML=a[1]),m&1&&D!==(D=J(a[0])+" svelte-1evdkfc")&&o(k,"class",D)},i:$,o:$,d(a){a&&l(u),a&&l(t),V=!1,ne(j)}}}function he(s,b,u){let t,v,_;x(s,re,p=>u(8,v=p)),x(s,ie,p=>u(2,_=p));let n="windows";const I=p=>{u(0,n=p)};ce(()=>{if(v)return u(0,n="android")});const g=()=>window.location.replace(new URL("../../../",import.meta.url).href),f=()=>I("android"),c=()=>I("windows"),A=()=>window.location.replace(new URL("../../../",import.meta.url).href);return s.$$.update=()=>{s.$$.dirty&1&&u(1,t=n==="android"?de:ue)},[n,t,_,I,g,f,c,A]}class ke extends se{constructor(b){super(),le(this,b,he,fe,ae,{})}}export{ke as component};
