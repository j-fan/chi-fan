import{S as v,i as w,s as C,F as B,k as h,l as d,m as b,h as c,n as u,p as f,b as m,H as D,I as G,J as K,f as g,t as p,a as k,w as y,G as M,c as E,x as I,D as $,y as F,z as q,K as N,q as T,r as j}from"../../chunks/index-16264e69.js";import{b as S}from"../../chunks/paths-b4419565.js";import{B as z}from"../../chunks/Button-73296b33.js";function A(i){let e,n;const o=i[4].default,a=B(o,i,i[3],null);return{c(){e=h("div"),a&&a.c(),this.h()},l(s){e=d(s,"DIV",{class:!0,style:!0});var t=b(e);a&&a.l(t),t.forEach(c),this.h()},h(){u(e,"class","card-wrapper svelte-1k0dkyu"),f(e,"width",i[0]),f(e,"height",i[1]),f(e,"align-items",i[2]?"center":"left")},m(s,t){m(s,e,t),a&&a.m(e,null),n=!0},p(s,[t]){a&&a.p&&(!n||t&8)&&D(a,o,s,s[3],n?K(o,s[3],t,null):G(s[3]),null),(!n||t&1)&&f(e,"width",s[0]),(!n||t&2)&&f(e,"height",s[1]),(!n||t&4)&&f(e,"align-items",s[2]?"center":"left")},i(s){n||(g(a,s),n=!0)},o(s){p(a,s),n=!1},d(s){s&&c(e),a&&a.d(s)}}}function H(i,e,n){let{$$slots:o={},$$scope:a}=e,{width:s="auto"}=e,{height:t="auto"}=e,{isCentered:l=!1}=e;return i.$$set=r=>{"width"in r&&n(0,s=r.width),"height"in r&&n(1,t=r.height),"isCentered"in r&&n(2,l=r.isCentered),"$$scope"in r&&n(3,a=r.$$scope)},[s,t,l,a,o]}class J extends v{constructor(e){super(),w(this,e,H,A,C,{width:0,height:1,isCentered:2})}}function L(i){let e;return{c(){e=T("Enter")},l(n){e=j(n,"Enter")},m(n,o){m(n,e,o)},d(n){n&&c(e)}}}function O(i){let e,n,o,a,s;return a=new z({props:{href:"/doors",$$slots:{default:[L]},$$scope:{ctx:i}}}),{c(){e=h("img"),o=k(),y(a.$$.fragment),this.h()},l(t){e=d(t,"IMG",{src:!0,alt:!0,class:!0}),o=E(t),I(a.$$.fragment,t),this.h()},h(){N(e.src,n=S+"/img/home-banner.png")||u(e,"src",n),u(e,"alt","Welcome to Chi Fan"),u(e,"class","svelte-1bwplss")},m(t,l){m(t,e,l),m(t,o,l),F(a,t,l),s=!0},p(t,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:t}),a.$set(r)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){p(a.$$.fragment,t),s=!1},d(t){t&&c(e),t&&c(o),q(a,t)}}}function P(i){let e,n,o,a,s,t;return s=new J({props:{width:"800px",isCentered:!0,$$slots:{default:[O]},$$scope:{ctx:i}}}),{c(){e=h("meta"),n=h("link"),o=k(),a=h("section"),y(s.$$.fragment),this.h()},l(l){const r=M("svelte-172v0av",document.head);e=d(r,"META",{name:!0,content:!0}),n=d(r,"LINK",{rel:!0,as:!0,href:!0}),r.forEach(c),o=E(l),a=d(l,"SECTION",{style:!0,class:!0});var _=b(a);I(s.$$.fragment,_),_.forEach(c),this.h()},h(){document.title="Chi Fan",u(e,"name","description"),u(e,"content","Chi Fan interactive artwork"),u(n,"rel","preload"),u(n,"as","image"),u(n,"href",i[0]),f(a,"background-image","url("+i[0]+")"),u(a,"class","svelte-1bwplss")},m(l,r){$(document.head,e),$(document.head,n),m(l,o,r),m(l,a,r),F(s,a,null),t=!0},p(l,[r]){const _={};r&2&&(_.$$scope={dirty:r,ctx:l}),s.$set(_)},i(l){t||(g(s.$$.fragment,l),t=!0)},o(l){p(s.$$.fragment,l),t=!1},d(l){c(e),c(n),l&&c(o),l&&c(a),q(s)}}}function V(i){return[`${S}/img/home-bg.jpg`]}class U extends v{constructor(e){super(),w(this,e,V,P,C,{})}}export{U as default};
