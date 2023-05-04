import{S as rt,i as at,s as ot,a as it,e as B,c as st,b as z,g as de,t as F,d as pe,f as G,h as J,j as lt,o as Oe,k as ct,l as ft,m as ut,n as ve,p as C,q as dt,r as pt,u as ht,v as W,w as Y,x as Ne,y as X,z as Z,A as ce,B as mt}from"./chunks/paths-1ce9315e.js";import{S as tt,I as q,g as ze,f as He,a as Ee,b as fe,s as M,i as We,c as ue,P as Ye,d as _t,e as gt}from"./chunks/singletons-0e90907b.js";function yt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function wt(r){return r.split("%25").map(decodeURI).join("%25")}function bt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(r,e){const n=new URL(r);for(const s of vt){let i=n[s];Object.defineProperty(n,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return kt(n),n}function kt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function St(r){return r.replace(/\/$/,"")+Rt}function Lt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(Te(r)),he(r,e));const te=new Map;function Ot(r,e){const n=Te(r,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:i,...u}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&te.set(n,{body:i,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,u))}return he(r,e)}function It(r,e,n){if(te.size>0){const s=Te(r,n),i=te.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);te.delete(s)}}return he(e,n)}function Te(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Lt(e.body)}"]`),s}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Tt(r).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,d)=>{if(d%2){if(_.startsWith("x+"))return ke(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ke(String.fromCharCode(..._.slice(2).split("-").map(P=>parseInt(P,16))));const g=At.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,R,$,D]=g;return e.push({name:$,matcher:D,optional:!!w,rest:!!R,chained:R?d===1&&t[0]==="":!1}),R?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return ke(_)}).join("")}).join("")}/?$`),params:e}}function Nt(r){return!/^\([^)]+\)$/.test(r)}function Tt(r){return r.slice(1).split("/").filter(Nt)}function Ut(r,e,n){const s={},i=r.slice(1);let u="";for(let t=0;t<e.length;t+=1){const f=e[t];let _=i[t];if(f.chained&&f.rest&&u&&(_=_?u+"/"+_:u),u="",_===void 0)f.rest&&(s[f.name]="");else{if(f.matcher&&!n[f.matcher](_)){if(f.optional&&f.chained){let d=i.indexOf(void 0,t);if(d===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)u=_;else return}for(;d>=t;)i[d]=i[d-1],d-=1;continue}return}s[f.name]=_}}if(!u)return s}function ke(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function $t(r,e,n,s){const i=new Set(e);return Object.entries(n).map(([f,[_,d,g]])=>{const{pattern:w,params:R}=Pt(f),$={id:f,exec:D=>{const P=w.exec(D);if(P)return Ut(P,R,s)},errors:[1,...g||[]].map(D=>r[D]),layouts:[0,...d||[]].map(t),leaf:u(_)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function u(f){const _=f<0;return _&&(f=~f),[_,r[f]]}function t(f){return f===void 0?f:[i.has(f),r[f]]}}function jt(r){let e,n,s;var i=r[0][0];function u(t){return{props:{data:t[2],form:t[1]}}}return i&&(e=W(i,u(r))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ne(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),z(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),i!==(i=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}i?(e=W(i,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Z(e,t)}}}function Dt(r){let e,n,s;var i=r[0][0];function u(t){return{props:{data:t[2],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return i&&(e=W(i,u(r))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ne(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),z(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),i!==(i=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}i?(e=W(i,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Z(e,t)}}}function Vt(r){let e,n,s;var i=r[0][1];function u(t){return{props:{data:t[3],form:t[1]}}}return i&&(e=W(i,u(r))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ne(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),z(t,n,f),s=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),i!==(i=t[0][1])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}i?(e=W(i,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&Z(e,t)}}}function Xe(r){let e,n=r[5]&&Ze(r);return{c(){e=ct("div"),n&&n.c(),this.h()},l(s){e=ft(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=ut(e);n&&n.l(i),i.forEach(J),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,i){z(s,e,i),n&&n.m(e,null)},p(s,i){s[5]?n?n.p(s,i):(n=Ze(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&J(e),n&&n.d()}}}function Ze(r){let e;return{c(){e=dt(r[6])},l(n){e=pt(n,r[6])},m(n,s){z(n,e,s)},p(n,s){s&64&&ht(e,n[6])},d(n){n&&J(e)}}}function Ct(r){let e,n,s,i,u;const t=[Dt,jt],f=[];function _(g,w){return g[0][1]?0:1}e=_(r),n=f[e]=t[e](r);let d=r[4]&&Xe(r);return{c(){n.c(),s=it(),d&&d.c(),i=B()},l(g){n.l(g),s=st(g),d&&d.l(g),i=B()},m(g,w){f[e].m(g,w),z(g,s,w),d&&d.m(g,w),z(g,i,w),u=!0},p(g,[w]){let R=e;e=_(g),e===R?f[e].p(g,w):(de(),F(f[R],1,1,()=>{f[R]=null}),pe(),n=f[e],n?n.p(g,w):(n=f[e]=t[e](g),n.c()),G(n,1),n.m(s.parentNode,s)),g[4]?d?d.p(g,w):(d=Xe(g),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null)},i(g){u||(G(n),u=!0)},o(g){F(n),u=!1},d(g){f[e].d(g),g&&J(s),d&&d.d(g),g&&J(i)}}}function qt(r,e,n){let{stores:s}=e,{page:i}=e,{components:u}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;lt(s.page.notify);let d=!1,g=!1,w=null;return Oe(()=>{const R=s.page.subscribe(()=>{d&&(n(5,g=!0),n(6,w=document.title||"untitled page"))});return n(4,d=!0),R}),r.$$set=R=>{"stores"in R&&n(7,s=R.stores),"page"in R&&n(8,i=R.page),"components"in R&&n(0,u=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,f=R.data_0),"data_1"in R&&n(3,_=R.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(i)},[u,t,f,_,d,g,w,s,i]}class Bt extends rt{constructor(e){super(),at(this,e,qt,Ct,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Gt=function(r,e){return new URL(r,e).href},Qe={},j=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=Gt(u,s),u in Qe)return;Qe[u]=!0;const t=u.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!s)for(let g=i.length-1;g>=0;g--){const w=i[g];if(w.href===u&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=t?"stylesheet":Ft,t||(d.as="script",d.crossOrigin=""),d.href=u,document.head.appendChild(d),t)return new Promise((g,w)=>{d.addEventListener("load",g),d.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},Jt={},me=[()=>j(()=>import("./chunks/0-1fe66ab5.js"),["./chunks/0-1fe66ab5.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-282682af.js","./chunks/paths-1ce9315e.js","./chunks/stores-406f851e.js","./chunks/singletons-0e90907b.js","./chunks/index-7bab4e22.js","./chunks/SoundStore-d5ebd6ad.js","./assets/_layout-a87d8fa4.css"],import.meta.url),()=>j(()=>import("./chunks/1-07e6bd06.js"),["./chunks/1-07e6bd06.js","./components/error.svelte-02de6dc4.js","./chunks/paths-1ce9315e.js","./chunks/stores-406f851e.js","./chunks/singletons-0e90907b.js","./chunks/index-7bab4e22.js"],import.meta.url),()=>j(()=>import("./chunks/2-fc61c1d8.js"),["./chunks/2-fc61c1d8.js","./components/pages/_page.svelte-1ca0da9e.js","./chunks/paths-1ce9315e.js","./chunks/Button-53e3e0fb.js","./assets/Button-8ca56c60.css","./assets/_page-ac211827.css"],import.meta.url),()=>j(()=>import("./chunks/3-2e2f4650.js"),["./chunks/3-2e2f4650.js","./chunks/_page-3afc52e2.js","./components/pages/about/_page.svelte-82a7c725.js","./chunks/paths-1ce9315e.js","./chunks/RedTitle-8906eef6.js","./assets/RedTitle-1e1adc16.css","./assets/_page-1c8430b3.css"],import.meta.url),()=>j(()=>import("./chunks/4-2bbfdf50.js"),["./chunks/4-2bbfdf50.js","./components/pages/doors/_page.svelte-de8ac92c.js","./chunks/paths-1ce9315e.js","./chunks/singletons-0e90907b.js","./chunks/index-7bab4e22.js","./chunks/Button-53e3e0fb.js","./assets/Button-8ca56c60.css","./chunks/index-349468e6.js","./assets/_page-539ad827.css"],import.meta.url),()=>j(()=>import("./chunks/5-4c172317.js"),["./chunks/5-4c172317.js","./components/pages/live-lobster/_page.svelte-858dd2fc.js","./chunks/paths-1ce9315e.js","./chunks/RedTitle-8906eef6.js","./assets/RedTitle-1e1adc16.css","./chunks/SectionFullImage-07c4ac27.js","./assets/SectionFullImage-6498e276.css"],import.meta.url),()=>j(()=>import("./chunks/6-29404912.js"),["./chunks/6-29404912.js","./components/pages/live-lobster/intro/_page.svelte-ac82c815.js","./chunks/paths-1ce9315e.js","./chunks/ChoppingKnife-b4160e97.js","./chunks/Button-53e3e0fb.js","./assets/Button-8ca56c60.css","./chunks/index-349468e6.js","./assets/ChoppingKnife-ff289f49.css","./chunks/SingleChopItem-18c8bb54.js","./assets/SingleChopItem-f779eaea.css","./chunks/SoundStore-d5ebd6ad.js","./chunks/index-7bab4e22.js"],import.meta.url),()=>j(()=>import("./chunks/7-016a8728.js"),["./chunks/7-016a8728.js","./components/pages/sugar-cane-water/_page.svelte-9bd1d83d.js","./chunks/paths-1ce9315e.js","./chunks/RedTitle-8906eef6.js","./assets/RedTitle-1e1adc16.css","./chunks/SectionFullImage-07c4ac27.js","./assets/SectionFullImage-6498e276.css"],import.meta.url),()=>j(()=>import("./chunks/8-aa6fdec4.js"),["./chunks/8-aa6fdec4.js","./components/pages/sugar-cane-water/intro/_page.svelte-ce44e588.js","./chunks/paths-1ce9315e.js","./chunks/ChoppingKnife-b4160e97.js","./chunks/Button-53e3e0fb.js","./assets/Button-8ca56c60.css","./chunks/index-349468e6.js","./assets/ChoppingKnife-ff289f49.css","./chunks/SoundStore-d5ebd6ad.js","./chunks/index-7bab4e22.js","./assets/_page-7121ee61.css"],import.meta.url),()=>j(()=>import("./chunks/9-14b2487e.js"),["./chunks/9-14b2487e.js","./components/pages/taro-rice/_page.svelte-e88f3f24.js","./chunks/paths-1ce9315e.js","./chunks/RedTitle-8906eef6.js","./assets/RedTitle-1e1adc16.css","./chunks/SectionFullImage-07c4ac27.js","./assets/SectionFullImage-6498e276.css"],import.meta.url),()=>j(()=>import("./chunks/10-9b5df8de.js"),["./chunks/10-9b5df8de.js","./components/pages/taro-rice/intro/_page.svelte-4f020fb8.js","./chunks/paths-1ce9315e.js","./chunks/ChoppingKnife-b4160e97.js","./chunks/Button-53e3e0fb.js","./assets/Button-8ca56c60.css","./chunks/index-349468e6.js","./assets/ChoppingKnife-ff289f49.css","./chunks/SoundStore-d5ebd6ad.js","./chunks/index-7bab4e22.js","./chunks/SingleChopItem-18c8bb54.js","./assets/SingleChopItem-f779eaea.css","./assets/_page-151f1849.css"],import.meta.url)],Kt=[],Mt={"/":[2],"/about":[3],"/doors":[4],"/live-lobster":[5],"/live-lobster/intro":[6],"/sugar-cane-water":[7],"/sugar-cane-water/intro":[8],"/taro-rice":[9],"/taro-rice/intro":[10]},zt={handleError:({error:r})=>{console.error(r)}};class Ie{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,n){this.status=e,this.location=n}}async function Ht(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,i])=>[s,await i])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(i,u=!1){if(i===Wt)return;if(i===Xt)return NaN;if(i===Zt)return 1/0;if(i===Qt)return-1/0;if(i===xt)return-0;if(u)throw new Error("Invalid input");if(i in n)return n[i];const t=e[i];if(!t||typeof t!="object")n[i]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[i]=new Date(t[1]);break;case"Set":const _=new Set;n[i]=_;for(let w=1;w<t.length;w+=1)_.add(s(t[w]));break;case"Map":const d=new Map;n[i]=d;for(let w=1;w<t.length;w+=2)d.set(s(t[w]),s(t[w+1]));break;case"RegExp":n[i]=new RegExp(t[1],t[2]);break;case"Object":n[i]=Object(t[1]);break;case"BigInt":n[i]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[i]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=s(t[w+1]);break}else{const f=new Array(t.length);n[i]=f;for(let _=0;_<t.length;_+=1){const d=t[_];d!==Yt&&(f[_]=s(d))}}else{const f={};n[i]=f;for(const _ in t){const d=t[_];f[_]=s(d)}}return n[i]}return s(0)}const Re=$t(me,Kt,Mt,Jt),Ae=me[0],Pe=me[1];Ae();Pe();let ne={};try{ne=JSON.parse(sessionStorage[tt])}catch{}function Se(r){ne[r]=ue()}function tn({target:r,base:e}){var Je;const n=document.documentElement,s=[];let i=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,d=!0,g=!1,w=!1,R=!1,$=!1,D,P=(Je=history.state)==null?void 0:Je[q];P||(P=Date.now(),history.replaceState({...history.state,[q]:P},"",location.href));const _e=ne[P];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let K,Ue,re;async function $e(){re=re||Promise.resolve(),await re,re=null;const a=new URL(location.href),o=ie(a,!0);i=null,await De(o,a,[])}async function ge(a,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:h=!1},m,v){return typeof a=="string"&&(a=new URL(a,ze(document))),se({url:a,scroll:o?ue():null,keepfocus:l,redirect_chain:m,details:{state:p,replaceState:c},nav_token:v,accepted:()=>{h&&($=!0)},blocked:()=>{},type:"goto"})}async function je(a){const o=ie(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return i={id:o.id,promise:qe(o).then(c=>(c.type==="loaded"&&c.state.error&&(i=null),c))},i.promise}async function ae(...a){const c=Re.filter(l=>a.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function De(a,o,c,l,p={},h){var v,b;Ue=p;let m=a&&await qe(a);if(m||(m=await Ge(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,Ue!==p)return!1;if(m.type==="redirect")if(c.length>10||c.includes(o.pathname))m=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(m.location,o).href,{},[...c,o.pathname],p),!1;else((b=(v=m.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await M.updated.check()&&await le(o);if(s.length=0,$=!1,g=!0,l&&l.details){const{details:y}=l,S=y.replaceState?0:1;y.state[q]=P+=S,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(i=null,_?(t=m.state,m.props.page&&(m.props.page.url=o),D.$set(m.props)):Ve(m),l){const{scroll:y,keepfocus:S}=l;if(S||Le(),await ce(),d){const L=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):L?L.scrollIntoView():scrollTo(0,0)}}else await ce();d=!0,m.props.page&&(K=m.props.page),h&&h(),g=!1}function Ve(a){var l;t=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),K=a.props.page,D=new Bt({target:r,props:{...a.props,stores:M},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(p=>p(c)),_=!0}async function Q({url:a,params:o,branch:c,status:l,error:p,route:h,form:m}){const v=c.filter(Boolean);let b="never";for(const O of c)(O==null?void 0:O.slash)!==void 0&&(b=O.slash);a.pathname=yt(a.pathname,b),a.search=a.search;const y={type:"loaded",state:{url:a,params:o,branch:c,error:p,route:h},props:{components:v.map(O=>O.node.component)}};m!==void 0&&(y.props.form=m);let S={},L=!K;for(let O=0;O<v.length;O+=1){const E=v[O];S={...S,...E.data},(L||!t.branch.some(T=>T===E))&&(y.props[`data_${O}`]=S,L=L||Object.keys(E.data??{}).length>0)}return L||(L=Object.keys(K.data).length!==Object.keys(S).length),(!t.url||a.href!==t.url.href||t.error!==p||m!==void 0||L)&&(y.props.page={error:p,params:o,route:h,status:l,url:new URL(a),form:m??null,data:L?S:K.data}),y}async function ye({loader:a,parent:o,url:c,params:l,route:p,server_data_node:h}){var y,S,L;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await a();if((y=b.universal)!=null&&y.load){let V=function(...E){for(const T of E){const{href:U}=new URL(T,c);v.dependencies.add(U)}};const O={route:{get id(){return v.route=!0,p.id}},params:new Proxy(l,{get:(E,T)=>(v.params.add(T),E[T])}),data:(h==null?void 0:h.data)??null,url:Et(c,()=>{v.url=!0}),async fetch(E,T){let U;E instanceof Request?(U=E.url,T={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...T}):U=E;const k=new URL(U,c).href;return V(k),_?It(U,k,T):Ot(U,T)},setHeaders:()=>{},depends:V,parent(){return v.parent=!0,o()}};m=await b.universal.load.call(null,O)??null,m=m?await Ht(m):null}return{node:b,loader:a,server:h,universal:(S=b.universal)!=null&&S.load?{type:"data",data:m,uses:v}:null,data:m??(h==null?void 0:h.data)??null,slash:((L=b.universal)==null?void 0:L.trailingSlash)??(h==null?void 0:h.slash)}}function Ce(a,o,c,l,p){if($)return!0;if(!l)return!1;if(l.parent&&a||l.route&&o||l.url&&c)return!0;for(const h of l.params)if(p[h]!==t.params[h])return!0;for(const h of l.dependencies)if(s.some(m=>m(new URL(h))))return!0;return!1}function we(a,o){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?o??null:null}async function qe({id:a,invalidating:o,url:c,params:l,route:p}){if((i==null?void 0:i.id)===a)return i.promise;const{errors:h,layouts:m,leaf:v}=p,b=[...m,v];h.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const S=t.url?a!==t.url.pathname+t.url.search:!1,L=t.route?a!==t.route.id:!1,V=b.reduce((k,A,N)=>{var x;const I=t.branch[N],H=!!(A!=null&&A[0])&&((I==null?void 0:I.loader)!==A[1]||Ce(k.some(Boolean),L,S,(x=I.server)==null?void 0:x.uses,l));return k.push(H),k},[]);if(V.some(Boolean)){try{y=await et(c,V)}catch(k){return oe({status:500,error:await ee(k,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(y.type==="redirect")return y}const O=y==null?void 0:y.nodes;let E=!1;const T=b.map(async(k,A)=>{var x;if(!k)return;const N=t.branch[A],I=O==null?void 0:O[A];if((!I||I.type==="skip")&&k[1]===(N==null?void 0:N.loader)&&!Ce(E,L,S,(x=N.universal)==null?void 0:x.uses,l))return N;if(E=!0,(I==null?void 0:I.type)==="error")throw I;return ye({loader:k[1],url:c,params:l,route:p,parent:async()=>{var Me;const Ke={};for(let be=0;be<A;be+=1)Object.assign(Ke,(Me=await T[be])==null?void 0:Me.data);return Ke},server_data_node:we(I===void 0&&k[0]?{type:"skip"}:I??null,N==null?void 0:N.server)})});for(const k of T)k.catch(()=>{});const U=[];for(let k=0;k<b.length;k+=1)if(b[k])try{U.push(await T[k])}catch(A){if(A instanceof xe)return{type:"redirect",location:A.location};let N=500,I;O!=null&&O.includes(A)?(N=A.status??N,I=A.error):A instanceof Ie?(N=A.status,I=A.body):I=await ee(A,{params:l,url:c,route:{id:p.id}});const H=await Be(k,U,h);return H?await Q({url:c,params:l,branch:U.slice(0,H.idx).concat(H.node),status:N,error:I,route:p}):await Ge(c,{id:p.id},I,N)}else U.push(void 0);return await Q({url:c,params:l,branch:U,status:200,error:null,route:p,form:o?void 0:null})}async function Be(a,o,c){for(;a--;)if(c[a]){let l=a;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:a,error:o,url:c,route:l}){const p={},h=await Ae();let m=null;if(h.server)try{const y=await et(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;m=y.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await le(c)}const v=await ye({loader:Ae,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:we(m)}),b={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Q({url:c,params:p,branch:[v,b],status:a,error:o,route:null})}function ie(a,o){if(We(a,e))return;const c=wt(a.pathname.slice(e.length)||"/");for(const l of Re){const p=l.exec(c);if(p)return{id:a.pathname+a.search,invalidating:o,route:l,params:bt(p),url:a}}}function Fe({url:a,type:o,intent:c,delta:l}){var v,b;let p=!1;const h={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:a},willUnload:!c,type:o};l!==void 0&&(h.delta=l);const m={...h,cancel:()=>{p=!0}};return w||u.before_navigate.forEach(y=>y(m)),p?null:h}async function se({url:a,scroll:o,keepfocus:c,redirect_chain:l,details:p,type:h,delta:m,nav_token:v,accepted:b,blocked:y}){const S=ie(a,!1),L=Fe({url:a,type:h,delta:m,intent:S});if(!L){y();return}Se(P),b(),w=!0,_&&M.navigating.set(L),await De(S,a,l,{scroll:o,keepfocus:c,details:p},v,()=>{w=!1,u.after_navigate.forEach(V=>V(L)),M.navigating.set(null)})}async function Ge(a,o,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await oe({status:l,error:c,url:a,route:o}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function nt(){let a;n.addEventListener("mousemove",h=>{const m=h.target;clearTimeout(a),a=setTimeout(()=>{l(m,2)},20)});function o(h){l(h.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(h=>{for(const m of h)m.isIntersecting&&(ae(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(h,m){const v=He(h,n);if(!v)return;const{url:b,external:y}=Ee(v,e);if(y)return;const S=fe(v);S.reload||(m<=S.preload_data?je(b):m<=S.preload_code&&ae(b.pathname))}function p(){c.disconnect();for(const h of n.querySelectorAll("a")){const{url:m,external:v}=Ee(h,e);if(v)continue;const b=fe(h);b.reload||(b.preload_code===Ye.viewport&&c.observe(h),b.preload_code===Ye.eager&&ae(m.pathname))}}u.after_navigate.push(p),p()}return{after_navigate:a=>{Oe(()=>(u.after_navigate.push(a),()=>{const o=u.after_navigate.indexOf(a);u.after_navigate.splice(o,1)}))},before_navigate:a=>{Oe(()=>(u.before_navigate.push(a),()=>{const o=u.before_navigate.indexOf(a);u.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!_)&&(d=!1)},goto:(a,o={})=>ge(a,o,[]),invalidate:a=>{if(typeof a=="function")s.push(a);else{const{href:o}=new URL(a,location.href);s.push(c=>c.href===o)}return $e()},invalidateAll:()=>($=!0,$e()),preload_data:async a=>{const o=new URL(a,ze(document));await je(o)},preload_code:ae,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Be(t.branch.length,c,l.errors);if(p){const h=await Q({url:o,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:a.status??500,error:a.error,route:l});t=h.state,D.$set(h.props),ce().then(Le)}}else if(a.type==="redirect")ge(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...K,form:a.data,status:a.status}};D.$set(o),a.type==="success"&&ce().then(Le)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!w){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(h=>h(p))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(P);try{sessionStorage[tt]=JSON.stringify(ne)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||nt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=He(o.composedPath()[0],n);if(!c)return;const{url:l,external:p,has:h}=Ee(c,e),m=fe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||h.download)return;if(p||m.reload){Fe({url:l,type:"link"})||o.preventDefault(),w=!0;return}const[b,y]=l.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){R=!0,Se(P),t.url=l,M.page.set({...K,url:l}),M.page.notify();return}se({url:l,scroll:m.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var b;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const h=new URL(((b=o.submitter)==null?void 0:b.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(h,e))return;const{noscroll:m,reload:v}=fe(o.target);v||(o.preventDefault(),o.stopPropagation(),h.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:h,scroll:m?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[q]){if(o.state[q]===P)return;const l=o.state[q]-P;se({url:new URL(location.href),scroll:ne[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=o.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[q]:++P},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&M.navigating.set(null)})},_hydrate:async({status:a=200,error:o,node_ids:c,params:l,route:p,data:h,form:m})=>{f=!0;const v=new URL(location.href);({params:l={},route:p={id:null}}=ie(v,!1)||{});let b;try{const y=c.map(async(S,L)=>{const V=h[L];return ye({loader:me[S],url:v,params:l,route:p,parent:async()=>{const O={};for(let E=0;E<L;E+=1)Object.assign(O,(await y[E]).data);return O},server_data_node:we(V)})});b=await Q({url:v,params:l,branch:await Promise.all(y),status:a,error:o,form:m,route:Re.find(({id:S})=>S===p.id)??null})}catch(y){if(y instanceof xe){await le(new URL(y.location,location.href));return}b=await oe({status:y instanceof Ie?y.status:500,error:await ee(y,{url:v,params:l,route:p}),url:v,route:p})}Ve(b)}}}async function et(r,e){var u;const n=new URL(r);n.pathname=St(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await he(n.href),i=await s.json();if(!s.ok)throw new Error(i);return(u=i.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function ee(r,e){return r instanceof Ie?r.body:zt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function an({env:r,hydrate:e,paths:n,target:s,version:i}){mt(n),gt(i);const u=tn({target:s,base:n.base});_t({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{an as start};