import{S as m,i as d,s as p,R as v,k as g,l as k,m as b,h as f,n as o,p as c,E as W,b as C,U as q,V as y,W as w,f as S,t as I,M as u,F as _,D as h}from"./paths-991fe185.js";function D(a){let e,l;const i=a[1].default,t=v(i,a,a[0],null);return{c(){e=g("div"),t&&t.c(),this.h()},l(s){e=k(s,"DIV",{class:!0,style:!0});var n=b(e);t&&t.l(n),n.forEach(f),this.h()},h(){o(e,"class","wrapper svelte-1q4q8ax"),c(e,"background-image","url("+W+"/img/wok.png)")},m(s,n){C(s,e,n),t&&t.m(e,null),l=!0},p(s,[n]){t&&t.p&&(!l||n&1)&&q(t,i,s,s[0],l?w(i,s[0],n,null):y(s[0]),null)},i(s){l||(S(t,s),l=!0)},o(s){I(t,s),l=!1},d(s){s&&f(e),t&&t.d(s)}}}function E(a,e,l){let{$$slots:i={},$$scope:t}=e;return a.$$set=s=>{"$$scope"in s&&l(0,t=s.$$scope)},[t,i]}class G extends m{constructor(e){super(),d(this,e,E,D,p,{})}}function M(a){let e,l;return{c(){e=g("img"),this.h()},l(i){e=k(i,"IMG",{class:!0,src:!0,alt:!0,style:!0}),this.h()},h(){o(e,"class","wrapper svelte-qa3q3c"),u(e.src,l=a[3]?a[1]:a[0])||o(e,"src",l),o(e,"alt","chopped item"),c(e,"--item-width",a[2]),_(e,"picked",a[3])},m(i,t){C(i,e,t)},p(i,[t]){t&11&&!u(e.src,l=i[3]?i[1]:i[0])&&o(e,"src",l),t&4&&c(e,"--item-width",i[2]),t&8&&_(e,"picked",i[3])},i:h,o:h,d(i){i&&f(e)}}}function V(a,e,l){let{beforeChop:i=""}=e,{afterChop:t=""}=e,{itemWidth:s}=e,{picked:n=!1}=e;return a.$$set=r=>{"beforeChop"in r&&l(0,i=r.beforeChop),"afterChop"in r&&l(1,t=r.afterChop),"itemWidth"in r&&l(2,s=r.itemWidth),"picked"in r&&l(3,n=r.picked)},[i,t,s,n]}class R extends m{constructor(e){super(),d(this,e,V,M,p,{beforeChop:0,afterChop:1,itemWidth:2,picked:3})}}export{R as S,G as W};
