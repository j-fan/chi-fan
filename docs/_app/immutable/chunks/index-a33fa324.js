function E(){}const it=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function Z(){return Object.create(null)}function A(t){t.forEach(st)}function F(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function Gt(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function xt(t){return Object.keys(t).length===0}function $t(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push($t(e,n))}function Kt(t,e,n,i){if(t){const s=rt(t,e,n,i);return t[0](s)}}function rt(t,e,n,i){return t[1]&&i?wt(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Ut(t,e,n,i,s,l){if(s){const r=rt(e,n,i,l);t.p(r,s)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xt(t){return t??""}const ot=typeof window<"u";let ct=ot?()=>window.performance.now():()=>Date.now(),U=ot?t=>requestAnimationFrame(t):E;const N=new Set;function lt(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&U(lt)}function ut(t){let e;return N.size===0&&U(lt),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let I=!1;function vt(){I=!0}function kt(){I=!1}function Et(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,d=(s>0&&e[n[s]].claim_order<=u?s+1:Et(1,s,h=>e[n[h]].claim_order,u))-1;i[c]=n[d]+1;const f=d+1;n[f]=c,s=Math.max(f,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const d=u<l.length?l[u]:null;t.insertBefore(r[c],d)}}function at(t,e){t.appendChild(e)}function ft(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=X("style");return St(ft(t),e),e.sheet}function St(t,e){return at(t.head||t,e),e.sheet}function Ct(t,e){if(I){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Yt(t,e,n){I&&!n?Ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createTextNode(t)}function te(){return Y(" ")}function ee(){return Y("")}function tt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ne(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,i,s=!1){jt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function zt(t,e,n,i){return dt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ie(t,e,n){return zt(t,e,n,X)}function Dt(t,e){return dt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Y(e),!0)}function se(t){return Dt(t," ")}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function oe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let R;function Tt(){if(R===void 0){R=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{R=!0}}return R}function ce(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=X("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Tt();let l;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=tt(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=tt(i.contentWindow,"resize",e)}),at(t,i),()=>{(s||l&&i.contentWindow)&&l(),V(i)}}function le(t,e,n){t.classList[n?"add":"remove"](e)}function Ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ue(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function ae(t,e){return new t(e)}const B=new Map;let H=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:At(e),rules:{}};return B.set(t,n),n}function J(t,e,n,i,s,l,r,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);u+=y*100+`%{${r(g,1-g)}}
`}const d=u+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Pt(d)}_${o}`,h=ft(t),{stylesheet:a,rules:_}=B.get(h)||Rt(h,t);_[f]||(_[f]=!0,a.insertRule(`@keyframes ${f} ${d}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,H+=1,f}function K(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),H-=s,H||qt())}function qt(){U(()=>{H||(B.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),B.clear())})}let D;function j(t){D=t}function _t(){if(!D)throw new Error("Function called outside component initialization");return D}function fe(t){_t().$$.on_mount.push(t)}function de(t){_t().$$.after_update.push(t)}function _e(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const M=[],et=[],L=[],nt=[],ht=Promise.resolve();let Q=!1;function mt(){Q||(Q=!0,ht.then(pt))}function he(){return mt(),ht}function T(t){L.push(t)}const G=new Set;let q=0;function pt(){const t=D;do{for(;q<M.length;){const e=M[q];q++,j(e),Lt(e.$$)}for(j(null),M.length=0,q=0;et.length;)et.pop()();for(let e=0;e<L.length;e+=1){const n=L[e];G.has(n)||(G.add(n),n())}L.length=0}while(M.length);for(;nt.length;)nt.pop()();Q=!1,G.clear(),j(t)}function Lt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let C;function yt(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function z(t,e,n){t.dispatchEvent(Ot(`${e?"intro":"outro"}${n}`))}const W=new Set;let k;function me(){k={r:0,c:[],p:k}}function pe(){k.r||A(k.c),k=k.p}function gt(t,e){t&&t.i&&(W.delete(t),t.i(e))}function Wt(t,e,n,i){if(t&&t.o){if(W.has(t))return;W.add(t),k.c.push(()=>{W.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const bt={duration:0};function ye(t,e,n){const i={direction:"in"};let s=e(t,n,i),l=!1,r,o,c=0;function u(){r&&K(t,r)}function d(){const{delay:h=0,duration:a=300,easing:_=it,tick:p=E,css:y}=s||bt;y&&(r=J(t,0,1,a,h,_,y,c++)),p(0,1);const g=ct()+h,v=g+a;o&&o.abort(),l=!0,T(()=>z(t,!0,"start")),o=ut(b=>{if(l){if(b>=v)return p(1,0),z(t,!0,"end"),u(),l=!1;if(b>=g){const w=_((b-g)/a);p(w,1-w)}}return l})}let f=!1;return{start(){f||(f=!0,K(t),F(s)?(s=s(i),yt().then(d)):d())},invalidate(){f=!1},end(){l&&(u(),l=!1)}}}function ge(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,u=null;function d(){u&&K(t,u)}function f(a,_){const p=a.b-r;return _*=Math.abs(p),{a:r,b:a.b,d:p,duration:_,start:a.start,end:a.start+_,group:a.group}}function h(a){const{delay:_=0,duration:p=300,easing:y=it,tick:g=E,css:v}=l||bt,b={start:ct()+_,b:a};a||(b.group=k,k.r+=1),o||c?c=b:(v&&(d(),u=J(t,r,a,p,_,y,v)),a&&g(0,1),o=f(b,p),T(()=>z(t,a,"start")),ut(w=>{if(c&&w>c.start&&(o=f(c,p),c=null,z(t,o.b,"start"),v&&(d(),u=J(t,r,o.b,o.duration,0,y,l.css))),o){if(w>=o.end)g(r=o.b,1-r),z(t,o.b,"end"),c||(o.b?d():--o.group.r||A(o.group.c)),o=null;else if(w>=o.start){const S=w-o.start;r=o.a+o.d*y(S/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(a){F(l)?yt().then(()=>{l=l(s),h(a)}):h(a)},end(){d(),o=c=null}}}function be(t,e){Wt(t,1,1,()=>{e.delete(t.key)})}function we(t,e,n,i,s,l,r,o,c,u,d,f){let h=t.length,a=l.length,_=h;const p={};for(;_--;)p[t[_].key]=_;const y=[],g=new Map,v=new Map;for(_=a;_--;){const m=f(s,l,_),x=n(m);let $=r.get(x);$?i&&$.p(m,e):($=u(x,m),$.c()),g.set(x,y[_]=$),x in p&&v.set(x,Math.abs(_-p[x]))}const b=new Set,w=new Set;function S(m){gt(m,1),m.m(o,d),r.set(m.key,m),d=m.first,a--}for(;h&&a;){const m=y[a-1],x=t[h-1],$=m.key,O=x.key;m===x?(d=m.first,h--,a--):g.has(O)?!r.has($)||b.has($)?S(m):w.has(O)?h--:v.get($)>v.get(O)?(w.add($),S(m)):(b.add(O),h--):(c(x,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,r)}for(;a;)S(y[a-1]);return y}function xe(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function $e(t){return typeof t=="object"&&t!==null?t:{}}function ve(t){t&&t.c()}function ke(t,e){t&&t.l(e)}function Bt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||T(()=>{const r=t.$$.on_mount.map(st).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...r):A(r),t.$$.on_mount=[]}),l.forEach(T)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(M.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,i,s,l,r,o=[-1]){const c=D;j(t);const u=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(f,h,...a)=>{const _=a.length?a[0]:h;return u.ctx&&s(u.ctx[f],u.ctx[f]=_)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](_),d&&Ft(t,f)),h}):[],u.update(),d=!0,A(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){vt();const f=Mt(e.target);u.fragment&&u.fragment.l(f),f.forEach(V)}else u.fragment&&u.fragment.c();e.intro&&gt(t.$$.fragment),Bt(t,e.target,e.anchor,e.customElement),kt(),pt()}j(c)}class Ne{$destroy(){Ht(this,1),this.$destroy=E}$on(e,n){if(!F(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{be as $,he as A,E as B,le as C,Ct as D,Jt as E,Kt as F,ue as G,Ut as H,Vt as I,Qt as J,Gt as K,_e as L,tt as M,T as N,ce as O,A as P,ge as Q,it as R,Ne as S,Xt as T,Zt as U,ye as V,et as W,wt as X,xe as Y,$e as Z,we as _,te as a,Yt as b,se as c,pe as d,ee as e,gt as f,me as g,V as h,Ee as i,de as j,X as k,ie as l,Mt as m,ne as n,fe as o,oe as p,Y as q,Dt as r,It as s,Wt as t,re as u,ae as v,ve as w,ke as x,Bt as y,Ht as z};