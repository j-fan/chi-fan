import{S as ae,i as fe,s as ce,F as ue,k as w,a as K,G as de,l as D,h as d,c as S,m as N,n as o,K as T,C as V,N as W,D as b,b as L,O as he,M as U,f as j,g as J,t as z,d as Q,H as _e,I as me,J as ge,P as pe,Q as C,w as X,x as Y,y as Z,z as y,q as x,r as ee,B as te}from"../../../chunks/index-183e008f.js";import{b as B}from"../../../chunks/paths-b4419565.js";import{B as ve}from"../../../chunks/Button-d8ad3a44.js";import{f as F}from"../../../chunks/index-eb690f35.js";const ke=r=>({}),le=r=>({});function re(r){let e,t,l;return{c(){e=w("div"),this.h()},l(s){e=D(s,"DIV",{class:!0}),N(e).forEach(d),this.h()},h(){o(e,"class","door-bg svelte-11kjvgh")},m(s,f){L(s,e,f),l=!0},i(s){l||(W(()=>{t||(t=C(e,F,{},!0)),t.run(1)}),l=!0)},o(s){t||(t=C(e,F,{},!1)),t.run(0),l=!1},d(s){s&&d(e),s&&t&&t.end()}}}function Ie(r){let e;return{c(){e=x("There's nothing inside this door")},l(t){e=ee(t,"There's nothing inside this door")},m(t,l){L(t,e,l)},d(t){t&&d(e)}}}function ie(r){let e,t,l,s;return t=new ve({props:{isFullWidth:!1,$$slots:{default:[be]},$$scope:{ctx:r}}}),t.$on("click",r[7]),{c(){e=w("div"),X(t.$$.fragment),this.h()},l(f){e=D(f,"DIV",{class:!0});var a=N(e);Y(t.$$.fragment,a),a.forEach(d),this.h()},h(){o(e,"class","hover-btn svelte-11kjvgh")},m(f,a){L(f,e,a),Z(t,e,null),s=!0},p(f,a){const u={};a&4096&&(u.$$scope={dirty:a,ctx:f}),t.$set(u)},i(f){s||(j(t.$$.fragment,f),W(()=>{l||(l=C(e,F,{},!0)),l.run(1)}),s=!0)},o(f){z(t.$$.fragment,f),l||(l=C(e,F,{},!1)),l.run(0),s=!1},d(f){f&&d(e),y(t),f&&l&&l.end()}}}function be(r){let e;return{c(){e=x("Enter this kitchen")},l(t){e=ee(t,"Enter this kitchen")},m(t,l){L(t,e,l)},d(t){t&&d(e)}}}function oe(r){let e,t,l,s,f;return{c(){e=w("div"),this.h()},l(a){e=D(a,"DIV",{class:!0}),N(e).forEach(d),this.h()},h(){o(e,"class","white-fade-out svelte-11kjvgh")},m(a,u){L(a,e,u),l=!0,s||(f=U(e,"introend",r[8]),s=!0)},p:te,i(a){l||(W(()=>{t||(t=C(e,F,{delay:1e3,duration:500},!0)),t.run(1)}),l=!0)},o(a){t||(t=C(e,F,{delay:1e3,duration:500},!1)),t.run(0),l=!1},d(a){a&&d(e),a&&t&&t.end(),s=!1,f()}}}function $e(r){let e,t,l,s,f,a,u,$,h,p,R,n,k,E,q,v,I,A,se,g=r[3]&&re();const H=r[10].doorInside,O=ue(H,r,r[12],le),M=O||Ie();let _=r[4]===!1&&ie(r),m=r[4]&&oe(r);return{c(){e=w("link"),t=w("link"),l=K(),s=w("div"),g&&g.c(),f=K(),a=w("div"),M&&M.c(),u=K(),_&&_.c(),$=K(),h=w("img"),R=K(),n=w("img"),E=K(),m&&m.c(),this.h()},l(i){const c=de("svelte-uggfpf",document.head);e=D(c,"LINK",{rel:!0,as:!0,href:!0}),t=D(c,"LINK",{rel:!0,as:!0,href:!0}),c.forEach(d),l=S(i),s=D(i,"DIV",{class:!0,style:!0});var G=N(s);g&&g.l(G),f=S(G),a=D(G,"DIV",{class:!0});var P=N(a);M&&M.l(P),u=S(P),_&&_.l(P),P.forEach(d),$=S(G),h=D(G,"IMG",{class:!0,src:!0,alt:!0}),R=S(G),n=D(G,"IMG",{class:!0,src:!0,alt:!0}),E=S(G),m&&m.l(G),G.forEach(d),this.h()},h(){o(e,"rel","preload"),o(e,"as","image"),o(e,"href",r[0]),o(t,"rel","preload"),o(t,"as","image"),o(t,"href",r[1]),o(a,"class","door-inside svelte-11kjvgh"),o(h,"class","left-door svelte-11kjvgh"),T(h.src,p=r[0])||o(h,"src",p),o(h,"alt","door-left"),V(h,"open",r[3]),V(h,"hidden",r[4]),o(n,"class","right-door svelte-11kjvgh"),T(n.src,k=r[1])||o(n,"src",k),o(n,"alt","door-right"),V(n,"open",r[3]),V(n,"hidden",r[4]),o(s,"class","door svelte-11kjvgh"),o(s,"style",q="left: "+(r[3]?`calc(50vw - ${r[5]/2}px)`:"0px")+"; --aspectRatio="+r[2]),W(()=>r[11].call(s)),V(s,"open",r[3]),V(s,"expanded",r[4])},m(i,c){b(document.head,e),b(document.head,t),L(i,l,c),L(i,s,c),g&&g.m(s,null),b(s,f),b(s,a),M&&M.m(a,null),b(a,u),_&&_.m(a,null),b(s,$),b(s,h),b(s,R),b(s,n),b(s,E),m&&m.m(s,null),v=he(s,r[11].bind(s)),I=!0,A||(se=[U(h,"click",r[6]),U(n,"click",r[6])],A=!0)},p(i,[c]){(!I||c&1)&&o(e,"href",i[0]),(!I||c&2)&&o(t,"href",i[1]),i[3]?g?c&8&&j(g,1):(g=re(),g.c(),j(g,1),g.m(s,f)):g&&(J(),z(g,1,1,()=>{g=null}),Q()),O&&O.p&&(!I||c&4096)&&_e(O,H,i,i[12],I?ge(H,i[12],c,ke):me(i[12]),le),i[4]===!1?_?(_.p(i,c),c&16&&j(_,1)):(_=ie(i),_.c(),j(_,1),_.m(a,null)):_&&(J(),z(_,1,1,()=>{_=null}),Q()),(!I||c&1&&!T(h.src,p=i[0]))&&o(h,"src",p),(!I||c&8)&&V(h,"open",i[3]),(!I||c&16)&&V(h,"hidden",i[4]),(!I||c&2&&!T(n.src,k=i[1]))&&o(n,"src",k),(!I||c&8)&&V(n,"open",i[3]),(!I||c&16)&&V(n,"hidden",i[4]),i[4]?m?(m.p(i,c),c&16&&j(m,1)):(m=oe(i),m.c(),j(m,1),m.m(s,null)):m&&(J(),z(m,1,1,()=>{m=null}),Q()),(!I||c&44&&q!==(q="left: "+(i[3]?`calc(50vw - ${i[5]/2}px)`:"0px")+"; --aspectRatio="+i[2]))&&o(s,"style",q),(!I||c&8)&&V(s,"open",i[3]),(!I||c&16)&&V(s,"expanded",i[4])},i(i){I||(j(g),j(M,i),j(_),j(m),I=!0)},o(i){z(g),z(M,i),z(_),z(m),I=!1},d(i){d(e),d(t),i&&d(l),i&&d(s),g&&g.d(),M&&M.d(i),_&&_.d(),m&&m.d(),v(),A=!1,pe(se)}}}function we(r,e,t){let{$$slots:l={},$$scope:s}=e,{doorImgLeft:f=`${B}/img/sugar-cane-water/door-left.jpg`}=e,{doorImgRight:a=`${B}/img/sugar-cane-water/door-right.jpg`}=e,{link:u=void 0}=e,{aspectRatio:$="513 / 900"}=e,h=!1,p=!1,R=0;const n=()=>{t(3,h=!h),t(4,p=!1)},k=()=>{t(4,p=!p)},E=()=>{u&&(location.href=u)};function q(){R=this.clientWidth,t(5,R)}return r.$$set=v=>{"doorImgLeft"in v&&t(0,f=v.doorImgLeft),"doorImgRight"in v&&t(1,a=v.doorImgRight),"link"in v&&t(9,u=v.link),"aspectRatio"in v&&t(2,$=v.aspectRatio),"$$scope"in v&&t(12,s=v.$$scope)},[f,a,$,h,p,R,n,k,E,u,l,q,s]}class ne extends ae{constructor(e){super(),fe(this,e,we,$e,ce,{doorImgLeft:0,doorImgRight:1,link:9,aspectRatio:2})}}function De(r){let e,t;return{c(){e=w("img"),this.h()},l(l){e=D(l,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","interior-img svelte-1lbsqxb"),o(e,"slot","doorInside"),T(e.src,t=B+"/img/sugar-cane-water/interior.jpg")||o(e,"src",t),o(e,"alt","kitchen of the sugar cane water recipe")},m(l,s){L(l,e,s)},p:te,d(l){l&&d(e)}}}function Ee(r){let e,t;return{c(){e=w("img"),this.h()},l(l){e=D(l,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","interior-img svelte-1lbsqxb"),o(e,"slot","doorInside"),T(e.src,t=B+"/img/sugar-cane-water/interior.jpg")||o(e,"src",t),o(e,"alt","kitchen of the taro fried rice recipe")},m(l,s){L(l,e,s)},p:te,d(l){l&&d(e)}}}function je(r){let e,t,l,s,f,a,u,$,h,p,R;return $=new ne({props:{link:B+"/sugar-cane-water/intro",$$slots:{doorInside:[De]},$$scope:{ctx:r}}}),p=new ne({props:{link:B+"/taro-rice/intro",doorImgLeft:B+"/img/taro-rice/door-left.jpg",doorImgRight:B+"/img/taro-rice/door-right.jpg",aspectRatio:"500 / 847",$$slots:{doorInside:[Ee]},$$scope:{ctx:r}}}),{c(){e=w("meta"),t=K(),l=w("div"),s=w("div"),f=x("← Scroll to explore the kitchens →"),a=K(),u=w("div"),X($.$$.fragment),h=K(),X(p.$$.fragment),this.h()},l(n){const k=de("svelte-1ii5p8n",document.head);e=D(k,"META",{name:!0,content:!0}),k.forEach(d),t=S(n),l=D(n,"DIV",{class:!0});var E=N(l);s=D(E,"DIV",{class:!0});var q=N(s);f=ee(q,"← Scroll to explore the kitchens →"),q.forEach(d),a=S(E),u=D(E,"DIV",{class:!0});var v=N(u);Y($.$$.fragment,v),h=S(v),Y(p.$$.fragment,v),v.forEach(d),E.forEach(d),this.h()},h(){document.title="Doors",o(e,"name","description"),o(e,"content","Doors"),o(s,"class","message svelte-1lbsqxb"),o(u,"class","door-list svelte-1lbsqxb"),o(l,"class","wrapper svelte-1lbsqxb")},m(n,k){b(document.head,e),L(n,t,k),L(n,l,k),b(l,s),b(s,f),b(l,a),b(l,u),Z($,u,null),b(u,h),Z(p,u,null),R=!0},p(n,[k]){const E={};k&1&&(E.$$scope={dirty:k,ctx:n}),$.$set(E);const q={};k&1&&(q.$$scope={dirty:k,ctx:n}),p.$set(q)},i(n){R||(j($.$$.fragment,n),j(p.$$.fragment,n),R=!0)},o(n){z($.$$.fragment,n),z(p.$$.fragment,n),R=!1},d(n){d(e),n&&d(t),n&&d(l),y($),y(p)}}}class Me extends ae{constructor(e){super(),fe(this,e,null,je,ce,{})}}export{Me as default};