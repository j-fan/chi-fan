import{S as T,i as W,s as g,e as v,b as y,g as N,t as c,d as C,f as h,h as _,J as O,E as B,k as b,l as m,m as p,n as f,p as k,K as S,F,G as w,H as E,C as U}from"./index-d1964434.js";function q(i){let t,l,u,r;const o=i[4].default,e=B(o,i,i[3],null);return{c(){t=b("button"),e&&e.c(),this.h()},l(s){t=m(s,"BUTTON",{type:!0,style:!0,class:!0});var n=p(t);e&&e.l(n),n.forEach(_),this.h()},h(){f(t,"type","button"),k(t,"width",i[1]),f(t,"class","svelte-1fn0o39")},m(s,n){y(s,t,n),e&&e.m(t,null),l=!0,u||(r=S(t,"click",i[5]),u=!0)},p(s,n){e&&e.p&&(!l||n&8)&&F(e,o,s,s[3],l?E(o,s[3],n,null):w(s[3]),null)},i(s){l||(h(e,s),l=!0)},o(s){c(e,s),l=!1},d(s){s&&_(t),e&&e.d(s),u=!1,r()}}}function A(i){let t,l,u;const r=i[4].default,o=B(r,i,i[3],null);return{c(){t=b("a"),l=b("button"),o&&o.c(),this.h()},l(e){t=m(e,"A",{href:!0,style:!0,class:!0});var s=p(t);l=m(s,"BUTTON",{type:!0,style:!0,class:!0});var n=p(l);o&&o.l(n),n.forEach(_),s.forEach(_),this.h()},h(){f(l,"type","button"),k(l,"width",i[1]),f(l,"class","svelte-1fn0o39"),f(t,"href",i[0]),k(t,"width",i[1]),f(t,"class","svelte-1fn0o39")},m(e,s){y(e,t,s),U(t,l),o&&o.m(l,null),u=!0},p(e,s){o&&o.p&&(!u||s&8)&&F(o,r,e,e[3],u?E(r,e[3],s,null):w(e[3]),null),(!u||s&1)&&f(t,"href",e[0])},i(e){u||(h(o,e),u=!0)},o(e){c(o,e),u=!1},d(e){e&&_(t),o&&o.d(e)}}}function G(i){let t,l,u,r;const o=[A,q],e=[];function s(n,a){return n[0]?0:1}return t=s(i),l=e[t]=o[t](i),{c(){l.c(),u=v()},l(n){l.l(n),u=v()},m(n,a){e[t].m(n,a),y(n,u,a),r=!0},p(n,[a]){let d=t;t=s(n),t===d?e[t].p(n,a):(N(),c(e[d],1,1,()=>{e[d]=null}),C(),l=e[t],l?l.p(n,a):(l=e[t]=o[t](n),l.c()),h(l,1),l.m(u.parentNode,u))},i(n){r||(h(l),r=!0)},o(n){c(l),r=!1},d(n){e[t].d(n),n&&_(u)}}}function H(i,t,l){let{$$slots:u={},$$scope:r}=t,{isFullWidth:o=!1}=t,{href:e=void 0}=t;const s=o?"100%":"auto";function n(a){O.call(this,i,a)}return i.$$set=a=>{"isFullWidth"in a&&l(2,o=a.isFullWidth),"href"in a&&l(0,e=a.href),"$$scope"in a&&l(3,r=a.$$scope)},[e,s,o,r,u,n]}class K extends T{constructor(t){super(),W(this,t,H,G,g,{isFullWidth:2,href:0})}}export{K as B};