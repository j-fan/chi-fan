import{L as re,S as se,i as le,s as ie,E as ae,k as b,a as j,l as k,m as S,c as z,h as g,n as u,M as C,B as E,p as Z,N as J,b as M,C as I,O as ce,K as Y,f as $,g as U,t as D,d as X,F as fe,G as ue,H as de,P as _e,Q as F,v as O,w as P,x as W,y as H,q as oe,r as ne,A as R,I as he}from"../../../chunks/index-d1964434.js";import{b as B}from"../../../chunks/paths-caa1bdc6.js";import{B as me}from"../../../chunks/Button-7a00ea74.js";function K(l,{delay:e=0,duration:t=400,easing:s=re}={}){const i=+getComputedStyle(l).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*i}`}}const pe=l=>({}),y=l=>({});function x(l){let e,t,s;return{c(){e=b("div"),this.h()},l(i){e=k(i,"DIV",{class:!0}),S(e).forEach(g),this.h()},h(){u(e,"class","door-bg svelte-6w6748")},m(i,r){M(i,e,r),s=!0},i(i){s||(J(()=>{t||(t=F(e,K,{},!0)),t.run(1)}),s=!0)},o(i){t||(t=F(e,K,{},!1)),t.run(0),s=!1},d(i){i&&g(e),i&&t&&t.end()}}}function ge(l){let e;return{c(){e=oe("There's nothing inside this door")},l(t){e=ne(t,"There's nothing inside this door")},m(t,s){M(t,e,s)},d(t){t&&g(e)}}}function ee(l){let e,t,s,i;return t=new me({props:{isFullWidth:!1,$$slots:{default:[$e]},$$scope:{ctx:l}}}),t.$on("click",l[5]),{c(){e=b("div"),O(t.$$.fragment),this.h()},l(r){e=k(r,"DIV",{class:!0});var o=S(e);P(t.$$.fragment,o),o.forEach(g),this.h()},h(){u(e,"class","hover-btn svelte-6w6748")},m(r,o){M(r,e,o),W(t,e,null),i=!0},p(r,o){const h={};o&1024&&(h.$$scope={dirty:o,ctx:r}),t.$set(h)},i(r){i||($(t.$$.fragment,r),J(()=>{s||(s=F(e,K,{},!0)),s.run(1)}),i=!0)},o(r){D(t.$$.fragment,r),s||(s=F(e,K,{},!1)),s.run(0),i=!1},d(r){r&&g(e),H(t),r&&s&&s.end()}}}function $e(l){let e;return{c(){e=oe("Enter this kitchen")},l(t){e=ne(t,"Enter this kitchen")},m(t,s){M(t,e,s)},d(t){t&&g(e)}}}function te(l){let e,t,s,i,r;return{c(){e=b("div"),this.h()},l(o){e=k(o,"DIV",{class:!0}),S(e).forEach(g),this.h()},h(){u(e,"class","white-fade-out svelte-6w6748")},m(o,h){M(o,e,h),s=!0,i||(r=Y(e,"introend",l[6]),i=!0)},p:R,i(o){s||(J(()=>{t||(t=F(e,K,{delay:1e3,duration:500},!0)),t.run(1)}),s=!0)},o(o){t||(t=F(e,K,{delay:1e3,duration:500},!1)),t.run(0),s=!1},d(o){o&&g(e),o&&t&&t.end(),i=!1,r()}}}function ve(l){let e,t,s,i,r,o,h,w,d,V,v,q,n,_,A,c=l[1]&&x();const T=l[8].doorInside,L=ae(T,l,l[10],y),G=L||ge();let m=l[2]===!1&&ee(l),p=l[2]&&te(l);return{c(){e=b("div"),c&&c.c(),t=j(),s=b("div"),G&&G.c(),i=j(),m&&m.c(),r=j(),o=b("img"),w=j(),d=b("img"),v=j(),p&&p.c(),this.h()},l(a){e=k(a,"DIV",{class:!0,style:!0});var f=S(e);c&&c.l(f),t=z(f),s=k(f,"DIV",{class:!0});var N=S(s);G&&G.l(N),i=z(N),m&&m.l(N),N.forEach(g),r=z(f),o=k(f,"IMG",{class:!0,src:!0,alt:!0}),w=z(f),d=k(f,"IMG",{class:!0,src:!0,alt:!0}),v=z(f),p&&p.l(f),f.forEach(g),this.h()},h(){u(s,"class","door-inside svelte-6w6748"),u(o,"class","left-door svelte-6w6748"),C(o.src,h=l[0])||u(o,"src",h),u(o,"alt","door-left"),E(o,"open",l[1]),E(o,"hidden",l[2]),u(d,"class","right-door svelte-6w6748"),C(d.src,V=l[0])||u(d,"src",V),u(d,"alt","door-right"),E(d,"open",l[1]),E(d,"hidden",l[2]),u(e,"class","door svelte-6w6748"),Z(e,"left",l[1]?`calc(50vw - ${l[3]/2}px)`:"0px"),J(()=>l[9].call(e)),E(e,"open",l[1]),E(e,"expanded",l[2])},m(a,f){M(a,e,f),c&&c.m(e,null),I(e,t),I(e,s),G&&G.m(s,null),I(s,i),m&&m.m(s,null),I(e,r),I(e,o),I(e,w),I(e,d),I(e,v),p&&p.m(e,null),q=ce(e,l[9].bind(e)),n=!0,_||(A=[Y(o,"click",l[4]),Y(d,"click",l[4])],_=!0)},p(a,[f]){a[1]?c?f&2&&$(c,1):(c=x(),c.c(),$(c,1),c.m(e,t)):c&&(U(),D(c,1,1,()=>{c=null}),X()),L&&L.p&&(!n||f&1024)&&fe(L,T,a,a[10],n?de(T,a[10],f,pe):ue(a[10]),y),a[2]===!1?m?(m.p(a,f),f&4&&$(m,1)):(m=ee(a),m.c(),$(m,1),m.m(s,null)):m&&(U(),D(m,1,1,()=>{m=null}),X()),(!n||f&1&&!C(o.src,h=a[0]))&&u(o,"src",h),(!n||f&2)&&E(o,"open",a[1]),(!n||f&4)&&E(o,"hidden",a[2]),(!n||f&1&&!C(d.src,V=a[0]))&&u(d,"src",V),(!n||f&2)&&E(d,"open",a[1]),(!n||f&4)&&E(d,"hidden",a[2]),a[2]?p?(p.p(a,f),f&4&&$(p,1)):(p=te(a),p.c(),$(p,1),p.m(e,null)):p&&(U(),D(p,1,1,()=>{p=null}),X()),(!n||f&10)&&Z(e,"left",a[1]?`calc(50vw - ${a[3]/2}px)`:"0px"),(!n||f&2)&&E(e,"open",a[1]),(!n||f&4)&&E(e,"expanded",a[2])},i(a){n||($(c),$(G,a),$(m),$(p),n=!0)},o(a){D(c),D(G,a),D(m),D(p),n=!1},d(a){a&&g(e),c&&c.d(),G&&G.d(a),m&&m.d(),p&&p.d(),q(),_=!1,_e(A)}}}function Ie(l,e,t){let{$$slots:s={},$$scope:i}=e,{doorImg:r=`${B}/img/door-left.jpg`}=e,{link:o=void 0}=e,h=!1,w=!1,d=0;const V=()=>{t(1,h=!h),t(2,w=!1)},v=()=>{t(2,w=!w)},q=()=>{o&&(location.href=o)};function n(){d=this.clientWidth,t(3,d)}return l.$$set=_=>{"doorImg"in _&&t(0,r=_.doorImg),"link"in _&&t(7,o=_.link),"$$scope"in _&&t(10,i=_.$$scope)},[r,h,w,d,V,v,q,o,s,n,i]}class Q extends se{constructor(e){super(),le(this,e,Ie,ve,ie,{doorImg:0,link:7})}}function be(l){let e,t;return{c(){e=b("img"),this.h()},l(s){e=k(s,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){u(e,"class","interior-img svelte-1uscbhl"),u(e,"slot","doorInside"),C(e.src,t=B+"/img/recipe1/interior.jpg")||u(e,"src",t),u(e,"alt","the kitchen inside the door")},m(s,i){M(s,e,i)},p:R,d(s){s&&g(e)}}}function ke(l){let e,t;return{c(){e=b("img"),this.h()},l(s){e=k(s,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){u(e,"class","interior-img svelte-1uscbhl"),u(e,"slot","doorInside"),C(e.src,t=B+"/img/recipe2/interior.jpg")||u(e,"src",t),u(e,"alt","the kitchen inside the door")},m(s,i){M(s,e,i)},p:R,d(s){s&&g(e)}}}function we(l){let e,t;return{c(){e=b("img"),this.h()},l(s){e=k(s,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){u(e,"class","interior-img svelte-1uscbhl"),u(e,"slot","doorInside"),C(e.src,t=B+"/img/recipe3/interior.jpg")||u(e,"src",t),u(e,"alt","the kitchen inside the door")},m(s,i){M(s,e,i)},p:R,d(s){s&&g(e)}}}function Ee(l){let e,t,s,i,r,o,h,w,d,V,v,q;return r=new Q({props:{link:B+"/about",$$slots:{doorInside:[be]},$$scope:{ctx:l}}}),h=new Q({props:{link:B+"/about",$$slots:{doorInside:[ke]},$$scope:{ctx:l}}}),d=new Q({props:{link:B+"/about",$$slots:{doorInside:[we]},$$scope:{ctx:l}}}),v=new Q({props:{link:B+"/about"}}),{c(){e=b("meta"),t=j(),s=b("div"),i=b("div"),O(r.$$.fragment),o=j(),O(h.$$.fragment),w=j(),O(d.$$.fragment),V=j(),O(v.$$.fragment),this.h()},l(n){const _=he('[data-svelte="svelte-1ubviiq"]',document.head);e=k(_,"META",{name:!0,content:!0}),_.forEach(g),t=z(n),s=k(n,"DIV",{class:!0});var A=S(s);i=k(A,"DIV",{class:!0});var c=S(i);P(r.$$.fragment,c),o=z(c),P(h.$$.fragment,c),w=z(c),P(d.$$.fragment,c),V=z(c),P(v.$$.fragment,c),c.forEach(g),A.forEach(g),this.h()},h(){document.title="Doors",u(e,"name","description"),u(e,"content","About this app"),u(i,"class","door-list svelte-1uscbhl"),u(s,"class","wrapper svelte-1uscbhl")},m(n,_){I(document.head,e),M(n,t,_),M(n,s,_),I(s,i),W(r,i,null),I(i,o),W(h,i,null),I(i,w),W(d,i,null),I(i,V),W(v,i,null),q=!0},p(n,[_]){const A={};_&1&&(A.$$scope={dirty:_,ctx:n}),r.$set(A);const c={};_&1&&(c.$$scope={dirty:_,ctx:n}),h.$set(c);const T={};_&1&&(T.$$scope={dirty:_,ctx:n}),d.$set(T)},i(n){q||($(r.$$.fragment,n),$(h.$$.fragment,n),$(d.$$.fragment,n),$(v.$$.fragment,n),q=!0)},o(n){D(r.$$.fragment,n),D(h.$$.fragment,n),D(d.$$.fragment,n),D(v.$$.fragment,n),q=!1},d(n){g(e),n&&g(t),n&&g(s),H(r),H(h),H(d),H(v)}}}class Ge extends se{constructor(e){super(),le(this,e,null,Ee,ie,{})}}export{Ge as default};
