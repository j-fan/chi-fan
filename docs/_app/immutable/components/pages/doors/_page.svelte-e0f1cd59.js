import{S as ee,i as te,s as se,F as de,k as I,a as G,G as le,l as k,h as u,c as K,m as R,n as a,K as C,C as b,p as X,N as S,D,b as M,O as ue,M as Q,f as E,g as H,t as z,d as J,H as he,I as _e,J as me,P as ge,Q as q,w as ie,x as oe,y as ne,z as re,q as ae,r as fe,B as ce}from"../../../chunks/index-ab16b1b5.js";import{b as P}from"../../../chunks/paths-b4419565.js";import{B as pe}from"../../../chunks/Button-56f11305.js";import{f as B}from"../../../chunks/index-0d1e6808.js";const ve=i=>({}),Y=i=>({});function Z(i){let e,t,l;return{c(){e=I("div"),this.h()},l(s){e=k(s,"DIV",{class:!0}),R(e).forEach(u),this.h()},h(){a(e,"class","door-bg svelte-1n2d9ch")},m(s,n){M(s,e,n),l=!0},i(s){l||(S(()=>{t||(t=q(e,B,{},!0)),t.run(1)}),l=!0)},o(s){t||(t=q(e,B,{},!1)),t.run(0),l=!1},d(s){s&&u(e),s&&t&&t.end()}}}function Ie(i){let e;return{c(){e=ae("There's nothing inside this door")},l(t){e=fe(t,"There's nothing inside this door")},m(t,l){M(t,e,l)},d(t){t&&u(e)}}}function y(i){let e,t,l,s;return t=new pe({props:{isFullWidth:!1,$$slots:{default:[ke]},$$scope:{ctx:i}}}),t.$on("click",i[6]),{c(){e=I("div"),ie(t.$$.fragment),this.h()},l(n){e=k(n,"DIV",{class:!0});var r=R(e);oe(t.$$.fragment,r),r.forEach(u),this.h()},h(){a(e,"class","hover-btn svelte-1n2d9ch")},m(n,r){M(n,e,r),ne(t,e,null),s=!0},p(n,r){const f={};r&2048&&(f.$$scope={dirty:r,ctx:n}),t.$set(f)},i(n){s||(E(t.$$.fragment,n),S(()=>{l||(l=q(e,B,{},!0)),l.run(1)}),s=!0)},o(n){z(t.$$.fragment,n),l||(l=q(e,B,{},!1)),l.run(0),s=!1},d(n){n&&u(e),re(t),n&&l&&l.end()}}}function ke(i){let e;return{c(){e=ae("Enter this kitchen")},l(t){e=fe(t,"Enter this kitchen")},m(t,l){M(t,e,l)},d(t){t&&u(e)}}}function x(i){let e,t,l,s,n;return{c(){e=I("div"),this.h()},l(r){e=k(r,"DIV",{class:!0}),R(e).forEach(u),this.h()},h(){a(e,"class","white-fade-out svelte-1n2d9ch")},m(r,f){M(r,e,f),l=!0,s||(n=Q(e,"introend",i[7]),s=!0)},p:ce,i(r){l||(S(()=>{t||(t=q(e,B,{delay:1e3,duration:500},!0)),t.run(1)}),l=!0)},o(r){t||(t=q(e,B,{delay:1e3,duration:500},!1)),t.run(0),l=!1},d(r){r&&u(e),r&&t&&t.end(),s=!1,n()}}}function be(i){let e,t,l,s,n,r,f,p,c,$,N,v,j,T,w,g,W,U,m=i[2]&&Z();const A=i[9].doorInside,F=de(A,i,i[11],Y),V=F||Ie();let h=i[3]===!1&&y(i),_=i[3]&&x(i);return{c(){e=I("link"),t=I("link"),l=G(),s=I("div"),m&&m.c(),n=G(),r=I("div"),V&&V.c(),f=G(),h&&h.c(),p=G(),c=I("img"),N=G(),v=I("img"),T=G(),_&&_.c(),this.h()},l(o){const d=le("svelte-uggfpf",document.head);e=k(d,"LINK",{rel:!0,as:!0,href:!0}),t=k(d,"LINK",{rel:!0,as:!0,href:!0}),d.forEach(u),l=K(o),s=k(o,"DIV",{class:!0,style:!0});var L=R(s);m&&m.l(L),n=K(L),r=k(L,"DIV",{class:!0});var O=R(r);V&&V.l(O),f=K(O),h&&h.l(O),O.forEach(u),p=K(L),c=k(L,"IMG",{class:!0,src:!0,alt:!0}),N=K(L),v=k(L,"IMG",{class:!0,src:!0,alt:!0}),T=K(L),_&&_.l(L),L.forEach(u),this.h()},h(){a(e,"rel","preload"),a(e,"as","image"),a(e,"href",i[0]),a(t,"rel","preload"),a(t,"as","image"),a(t,"href",i[1]),a(r,"class","door-inside svelte-1n2d9ch"),a(c,"class","left-door svelte-1n2d9ch"),C(c.src,$=i[0])||a(c,"src",$),a(c,"alt","door-left"),b(c,"open",i[2]),b(c,"hidden",i[3]),a(v,"class","right-door svelte-1n2d9ch"),C(v.src,j=i[1])||a(v,"src",j),a(v,"alt","door-right"),b(v,"open",i[2]),b(v,"hidden",i[3]),a(s,"class","door svelte-1n2d9ch"),X(s,"left",i[2]?`calc(50vw - ${i[4]/2}px)`:"0px"),S(()=>i[10].call(s)),b(s,"open",i[2]),b(s,"expanded",i[3])},m(o,d){D(document.head,e),D(document.head,t),M(o,l,d),M(o,s,d),m&&m.m(s,null),D(s,n),D(s,r),V&&V.m(r,null),D(r,f),h&&h.m(r,null),D(s,p),D(s,c),D(s,N),D(s,v),D(s,T),_&&_.m(s,null),w=ue(s,i[10].bind(s)),g=!0,W||(U=[Q(c,"click",i[5]),Q(v,"click",i[5])],W=!0)},p(o,[d]){(!g||d&1)&&a(e,"href",o[0]),(!g||d&2)&&a(t,"href",o[1]),o[2]?m?d&4&&E(m,1):(m=Z(),m.c(),E(m,1),m.m(s,n)):m&&(H(),z(m,1,1,()=>{m=null}),J()),F&&F.p&&(!g||d&2048)&&he(F,A,o,o[11],g?me(A,o[11],d,ve):_e(o[11]),Y),o[3]===!1?h?(h.p(o,d),d&8&&E(h,1)):(h=y(o),h.c(),E(h,1),h.m(r,null)):h&&(H(),z(h,1,1,()=>{h=null}),J()),(!g||d&1&&!C(c.src,$=o[0]))&&a(c,"src",$),(!g||d&4)&&b(c,"open",o[2]),(!g||d&8)&&b(c,"hidden",o[3]),(!g||d&2&&!C(v.src,j=o[1]))&&a(v,"src",j),(!g||d&4)&&b(v,"open",o[2]),(!g||d&8)&&b(v,"hidden",o[3]),o[3]?_?(_.p(o,d),d&8&&E(_,1)):(_=x(o),_.c(),E(_,1),_.m(s,null)):_&&(H(),z(_,1,1,()=>{_=null}),J()),(!g||d&20)&&X(s,"left",o[2]?`calc(50vw - ${o[4]/2}px)`:"0px"),(!g||d&4)&&b(s,"open",o[2]),(!g||d&8)&&b(s,"expanded",o[3])},i(o){g||(E(m),E(V,o),E(h),E(_),g=!0)},o(o){z(m),z(V,o),z(h),z(_),g=!1},d(o){u(e),u(t),o&&u(l),o&&u(s),m&&m.d(),V&&V.d(o),h&&h.d(),_&&_.d(),w(),W=!1,ge(U)}}}function De(i,e,t){let{$$slots:l={},$$scope:s}=e,{doorImgLeft:n=`${P}/img/door-left.jpg`}=e,{doorImgRight:r=`${P}/img/door-right.jpg`}=e,{link:f=void 0}=e,p=!1,c=!1,$=0;const N=()=>{t(2,p=!p),t(3,c=!1)},v=()=>{t(3,c=!c)},j=()=>{f&&(location.href=f)};function T(){$=this.clientWidth,t(4,$)}return i.$$set=w=>{"doorImgLeft"in w&&t(0,n=w.doorImgLeft),"doorImgRight"in w&&t(1,r=w.doorImgRight),"link"in w&&t(8,f=w.link),"$$scope"in w&&t(11,s=w.$$scope)},[n,r,p,c,$,N,v,j,f,l,T,s]}class Ee extends ee{constructor(e){super(),te(this,e,De,be,se,{doorImgLeft:0,doorImgRight:1,link:8})}}function $e(i){let e,t;return{c(){e=I("img"),this.h()},l(l){e=k(l,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){a(e,"class","interior-img svelte-1uscbhl"),a(e,"slot","doorInside"),C(e.src,t=P+"/img/sugar-cane-water/interior.jpg")||a(e,"src",t),a(e,"alt","the kitchen inside the door")},m(l,s){M(l,e,s)},p:ce,d(l){l&&u(e)}}}function we(i){let e,t,l,s,n,r;return n=new Ee({props:{link:P+"/sugar-cane-water/intro",$$slots:{doorInside:[$e]},$$scope:{ctx:i}}}),{c(){e=I("meta"),t=G(),l=I("div"),s=I("div"),ie(n.$$.fragment),this.h()},l(f){const p=le("svelte-1ii5p8n",document.head);e=k(p,"META",{name:!0,content:!0}),p.forEach(u),t=K(f),l=k(f,"DIV",{class:!0});var c=R(l);s=k(c,"DIV",{class:!0});var $=R(s);oe(n.$$.fragment,$),$.forEach(u),c.forEach(u),this.h()},h(){document.title="Doors",a(e,"name","description"),a(e,"content","Doors"),a(s,"class","door-list svelte-1uscbhl"),a(l,"class","wrapper svelte-1uscbhl")},m(f,p){D(document.head,e),M(f,t,p),M(f,l,p),D(l,s),ne(n,s,null),r=!0},p(f,[p]){const c={};p&1&&(c.$$scope={dirty:p,ctx:f}),n.$set(c)},i(f){r||(E(n.$$.fragment,f),r=!0)},o(f){z(n.$$.fragment,f),r=!1},d(f){u(e),f&&u(t),f&&u(l),re(n)}}}class Ge extends ee{constructor(e){super(),te(this,e,null,we,se,{})}}export{Ge as default};
