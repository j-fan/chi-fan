import{S as W,i as g,s as N,e as v,b as y,g as C,t as c,d as O,f as h,h as _,J as S,E as w,k as b,l as m,m as p,n as f,p as k,K as U,G as E,H as F,I as T,C as q}from"./index-077db8d7.js";import{b as B}from"./paths-d2a11cad.js";function A(o){let e,n,i,u;const r=o[4].default,t=w(r,o,o[3],null);return{c(){e=b("button"),t&&t.c(),this.h()},l(l){e=m(l,"BUTTON",{type:!0,style:!0,class:!0});var s=p(e);t&&t.l(s),s.forEach(_),this.h()},h(){f(e,"type","button"),k(e,"width",o[1]),f(e,"class","svelte-1fn0o39")},m(l,s){y(l,e,s),t&&t.m(e,null),n=!0,i||(u=U(e,"click",o[5]),i=!0)},p(l,s){t&&t.p&&(!n||s&8)&&E(t,r,l,l[3],n?T(r,l[3],s,null):F(l[3]),null)},i(l){n||(h(t,l),n=!0)},o(l){c(t,l),n=!1},d(l){l&&_(e),t&&t.d(l),i=!1,u()}}}function G(o){let e,n,i,u;const r=o[4].default,t=w(r,o,o[3],null);return{c(){e=b("a"),n=b("button"),t&&t.c(),this.h()},l(l){e=m(l,"A",{href:!0,style:!0,class:!0});var s=p(e);n=m(s,"BUTTON",{type:!0,style:!0,class:!0});var a=p(n);t&&t.l(a),a.forEach(_),s.forEach(_),this.h()},h(){f(n,"type","button"),k(n,"width",o[1]),f(n,"class","svelte-1fn0o39"),f(e,"href",i=""+(B+o[0])),k(e,"width",o[1]),f(e,"class","svelte-1fn0o39")},m(l,s){y(l,e,s),q(e,n),t&&t.m(n,null),u=!0},p(l,s){t&&t.p&&(!u||s&8)&&E(t,r,l,l[3],u?T(r,l[3],s,null):F(l[3]),null),(!u||s&1&&i!==(i=""+(B+l[0])))&&f(e,"href",i)},i(l){u||(h(t,l),u=!0)},o(l){c(t,l),u=!1},d(l){l&&_(e),t&&t.d(l)}}}function H(o){let e,n,i,u;const r=[G,A],t=[];function l(s,a){return s[0]?0:1}return e=l(o),n=t[e]=r[e](o),{c(){n.c(),i=v()},l(s){n.l(s),i=v()},m(s,a){t[e].m(s,a),y(s,i,a),u=!0},p(s,[a]){let d=e;e=l(s),e===d?t[e].p(s,a):(C(),c(t[d],1,1,()=>{t[d]=null}),O(),n=t[e],n?n.p(s,a):(n=t[e]=r[e](s),n.c()),h(n,1),n.m(i.parentNode,i))},i(s){u||(h(n),u=!0)},o(s){c(n),u=!1},d(s){t[e].d(s),s&&_(i)}}}function I(o,e,n){let{$$slots:i={},$$scope:u}=e,{isFullWidth:r=!1}=e,{href:t=void 0}=e;const l=r?"100%":"auto";function s(a){S.call(this,o,a)}return o.$$set=a=>{"isFullWidth"in a&&n(2,r=a.isFullWidth),"href"in a&&n(0,t=a.href),"$$scope"in a&&n(3,u=a.$$scope)},[t,l,r,u,i,s]}class j extends W{constructor(e){super(),g(this,e,I,H,N,{isFullWidth:2,href:0})}}export{j as B};