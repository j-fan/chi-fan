function E(){}const it=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function rt(t){return t()}function Z(){return Object.create(null)}function A(t){t.forEach(rt)}function Q(t){return typeof t=="function"}function Ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function Gt(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function xt(t){return Object.keys(t).length===0}function $t(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push($t(e,n))}function Kt(t,e,n,i){if(t){const s=st(t,e,n,i);return t[0](s)}}function st(t,e,n,i){return t[1]&&i?wt(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let c=0;c<r;c+=1)o[c]=e.dirty[c]|s[c];return o}return e.dirty|s}return e.dirty}function Ut(t,e,n,i,s,o){if(s){const r=st(e,n,i,o);t.p(r,s)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const ot=typeof window<"u";let lt=ot?()=>window.performance.now():()=>Date.now(),U=ot?t=>requestAnimationFrame(t):E;const k=new Set;function ct(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&U(ct)}function at(t){let e;return k.size===0&&U(ct),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let F=!1;function vt(){F=!0}function kt(){F=!1}function Et(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function At(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:Et(1,s,u=>e[n[u]].claim_order,a))-1;i[l]=n[_]+1;const f=_+1;n[f]=l,s=Math.max(f,s)}const o=[],r=[];let c=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);c>=l;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);o.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<o.length&&r[l].claim_order>=o[a].claim_order;)a++;const _=a<o.length?o[a]:null;t.insertBefore(r[l],_)}}function ut(t,e){t.appendChild(e)}function ft(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=X("style");return St(ft(t),e),e.sheet}function St(t,e){return ut(t.head||t,e),e.sheet}function Mt(t,e){if(F){for(At(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Xt(t,e,n){F&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode.removeChild(t)}function X(t){return document.createElement(t)}function Y(t){return document.createTextNode(t)}function Yt(){return Y(" ")}function Zt(){return Y("")}function tt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function te(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,i,s=!1){jt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function zt(t,e,n,i){return dt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const c=s.attributes[r];n[c.name]||o.push(c.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ee(t,e,n){return zt(t,e,n,X)}function qt(t,e){return dt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Y(e),!0)}function ne(t){return qt(t," ")}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let D;function Ot(){if(D===void 0){D=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{D=!0}}return D}function se(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=X("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Ot();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=tt(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=tt(i.contentWindow,"resize",e)}),ut(t,i),()=>{(s||o&&i.contentWindow)&&o(),V(i)}}function oe(t,e,n){t.classList[n?"add":"remove"](e)}function Pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function le(t,e=document.body){return Array.from(e.querySelectorAll(t))}const B=new Map;let W=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Lt(t,e){const n={stylesheet:Nt(e),rules:{}};return B.set(t,n),n}function G(t,e,n,i,s,o,r,c=0){const l=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*o(p);a+=p*100+`%{${r(g,1-g)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Dt(_)}_${c}`,u=ft(t),{stylesheet:h,rules:d}=B.get(u)||Lt(u,t);d[f]||(d[f]=!0,h.insertRule(`@keyframes ${f} ${_}`,h.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${s}ms 1 both`,W+=1,f}function J(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),W-=s,W||Rt())}function Rt(){U(()=>{W||(B.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),B.clear())})}let j;function M(t){j=t}function _t(){if(!j)throw new Error("Function called outside component initialization");return j}function ce(t){_t().$$.on_mount.push(t)}function ae(t){_t().$$.after_update.push(t)}function ue(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const S=[],et=[],R=[],nt=[],ht=Promise.resolve();let K=!1;function mt(){K||(K=!0,ht.then(pt))}function fe(){return mt(),ht}function z(t){R.push(t)}const H=new Set;let L=0;function pt(){const t=j;do{for(;L<S.length;){const e=S[L];L++,M(e),Tt(e.$$)}for(M(null),S.length=0,L=0;et.length;)et.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];H.has(n)||(H.add(n),n())}R.length=0}while(S.length);for(;nt.length;)nt.pop()();K=!1,H.clear(),M(t)}function Tt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let N;function yt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function C(t,e,n){t.dispatchEvent(Pt(`${e?"intro":"outro"}${n}`))}const T=new Set;let v;function de(){v={r:0,c:[],p:v}}function _e(){v.r||A(v.c),v=v.p}function gt(t,e){t&&t.i&&(T.delete(t),t.i(e))}function Bt(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),v.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const bt={duration:0};function he(t,e,n){let i=e(t,n),s=!1,o,r,c=0;function l(){o&&J(t,o)}function a(){const{delay:f=0,duration:u=300,easing:h=it,tick:d=E,css:y}=i||bt;y&&(o=G(t,0,1,u,f,h,y,c++)),d(0,1);const p=lt()+f,g=p+u;r&&r.abort(),s=!0,z(()=>C(t,!0,"start")),r=at(b=>{if(s){if(b>=g)return d(1,0),C(t,!0,"end"),l(),s=!1;if(b>=p){const w=h((b-p)/u);d(w,1-w)}}return s})}let _=!1;return{start(){_||(_=!0,J(t),Q(i)?(i=i(),yt().then(a)):a())},invalidate(){_=!1},end(){s&&(l(),s=!1)}}}function me(t,e,n,i){let s=e(t,n),o=i?0:1,r=null,c=null,l=null;function a(){l&&J(t,l)}function _(u,h){const d=u.b-o;return h*=Math.abs(d),{a:o,b:u.b,d,duration:h,start:u.start,end:u.start+h,group:u.group}}function f(u){const{delay:h=0,duration:d=300,easing:y=it,tick:p=E,css:g}=s||bt,b={start:lt()+h,b:u};u||(b.group=v,v.r+=1),r||c?c=b:(g&&(a(),l=G(t,o,u,d,h,y,g)),u&&p(0,1),r=_(b,d),z(()=>C(t,u,"start")),at(w=>{if(c&&w>c.start&&(r=_(c,d),c=null,C(t,r.b,"start"),g&&(a(),l=G(t,o,r.b,r.duration,0,y,s.css))),r){if(w>=r.end)p(o=r.b,1-o),C(t,r.b,"end"),c||(r.b?a():--r.group.r||A(r.group.c)),r=null;else if(w>=r.start){const q=w-r.start;o=r.a+r.d*y(q/r.duration),p(o,1-o)}}return!!(r||c)}))}return{run(u){Q(s)?yt().then(()=>{s=s(),f(u)}):f(u)},end(){a(),r=c=null}}}function pe(t,e){Bt(t,1,1,()=>{e.delete(t.key)})}function ye(t,e,n,i,s,o,r,c,l,a,_,f){let u=t.length,h=o.length,d=u;const y={};for(;d--;)y[t[d].key]=d;const p=[],g=new Map,b=new Map;for(d=h;d--;){const m=f(s,o,d),x=n(m);let $=r.get(x);$?i&&$.p(m,e):($=a(x,m),$.c()),g.set(x,p[d]=$),x in y&&b.set(x,Math.abs(d-y[x]))}const w=new Set,q=new Set;function I(m){gt(m,1),m.m(c,_),r.set(m.key,m),_=m.first,h--}for(;u&&h;){const m=p[h-1],x=t[u-1],$=m.key,O=x.key;m===x?(_=m.first,u--,h--):g.has(O)?!r.has($)||w.has($)?I(m):q.has(O)?u--:b.get($)>b.get(O)?(q.add($),I(m)):(w.add(O),u--):(l(x,r),u--)}for(;u--;){const m=t[u];g.has(m.key)||l(m,r)}for(;h;)I(p[h-1]);return p}function ge(t){t&&t.c()}function be(t,e){t&&t.l(e)}function Wt(t,e,n,i){const{fragment:s,on_mount:o,on_destroy:r,after_update:c}=t.$$;s&&s.m(e,n),i||z(()=>{const l=o.map(rt).filter(Q);r?r.push(...l):A(l),t.$$.on_mount=[]}),c.forEach(z)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(S.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function we(t,e,n,i,s,o,r,c=[-1]){const l=j;M(t);const a=t.$$={fragment:null,ctx:null,props:o,update:E,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Z(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...h)=>{const d=h.length?h[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=d)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](d),_&&It(t,f)),u}):[],a.update(),_=!0,A(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){vt();const f=Ct(e.target);a.fragment&&a.fragment.l(f),f.forEach(V)}else a.fragment&&a.fragment.c();e.intro&&gt(t.$$.fragment),Wt(t,e.target,e.anchor,e.customElement),kt(),pt()}M(l)}class xe{$destroy(){Ft(this,1),this.$destroy=E}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{E as A,oe as B,Mt as C,Jt as D,Kt as E,Ut as F,Vt as G,Qt as H,le as I,ue as J,tt as K,Gt as L,z as M,se as N,A as O,me as P,it as Q,he as R,xe as S,et as T,ye as U,pe as V,Yt as a,Xt as b,ne as c,_e as d,Zt as e,gt as f,de as g,V as h,we as i,ae as j,X as k,ee as l,Ct as m,te as n,ce as o,re as p,Y as q,qt as r,Ht as s,Bt as t,ie as u,ge as v,be as w,Wt as x,Ft as y,fe as z};
