import{S as fe,i as ce,s as de,R as he,k as w,a as z,T as ue,l as j,h,c as K,m as N,n as o,M as W,F as q,Z as Q,G as $,b as V,_ as _e,N as x,f as R,g as le,t as F,d as ie,U as ge,V as me,W as pe,O as ve,$ as J,w as P,x as U,y as Z,z as H,q as ee,r as te,D as B,a0 as Ie,E as S}from"../../../chunks/paths-991fe185.js";import{h as T}from"../../../chunks/singletons-d8a5f2c8.js";import{B as ke}from"../../../chunks/Button-b275a711.js";import{f as C}from"../../../chunks/index-c1b68916.js";T.disable_scroll_handling;const be=T.goto;T.invalidate;T.invalidateAll;T.preload_data;T.preload_code;T.before_navigate;T.after_navigate;const $e=i=>({}),re=i=>({});function oe(i){let e,t,l;return{c(){e=w("div"),this.h()},l(s){e=j(s,"DIV",{class:!0}),N(e).forEach(h),this.h()},h(){o(e,"class","door-bg svelte-11kjvgh")},m(s,a){V(s,e,a),l=!0},i(s){l||(Q(()=>{t||(t=J(e,C,{},!0)),t.run(1)}),l=!0)},o(s){t||(t=J(e,C,{},!1)),t.run(0),l=!1},d(s){s&&h(e),s&&t&&t.end()}}}function we(i){let e;return{c(){e=ee("There's nothing inside this door")},l(t){e=te(t,"There's nothing inside this door")},m(t,l){V(t,e,l)},d(t){t&&h(e)}}}function ae(i){let e,t,l,s;return t=new ke({props:{isFullWidth:!1,$$slots:{default:[je]},$$scope:{ctx:i}}}),t.$on("click",i[7]),{c(){e=w("div"),P(t.$$.fragment),this.h()},l(a){e=j(a,"DIV",{class:!0});var n=N(e);U(t.$$.fragment,n),n.forEach(h),this.h()},h(){o(e,"class","hover-btn svelte-11kjvgh")},m(a,n){V(a,e,n),Z(t,e,null),s=!0},p(a,n){const g={};n&4096&&(g.$$scope={dirty:n,ctx:a}),t.$set(g)},i(a){s||(R(t.$$.fragment,a),Q(()=>{l||(l=J(e,C,{},!0)),l.run(1)}),s=!0)},o(a){F(t.$$.fragment,a),l||(l=J(e,C,{},!1)),l.run(0),s=!1},d(a){a&&h(e),H(t),a&&l&&l.end()}}}function je(i){let e;return{c(){e=ee("Enter this kitchen")},l(t){e=te(t,"Enter this kitchen")},m(t,l){V(t,e,l)},d(t){t&&h(e)}}}function ne(i){let e,t,l,s;return{c(){e=w("div"),this.h()},l(a){e=j(a,"DIV",{class:!0}),N(e).forEach(h),this.h()},h(){o(e,"class","white-fade-out svelte-11kjvgh")},m(a,n){V(a,e,n),l||(s=x(e,"introend",i[8]),l=!0)},p:B,i(a){t||Q(()=>{t=Ie(e,C,{delay:1e3,duration:500}),t.start()})},o:B,d(a){a&&h(e),l=!1,s()}}}function Ee(i){let e,t,l,s,a,n,g,L,f,D,k,_,c,b,E,p,d,X,se,v=i[3]&&oe();const Y=i[10].doorInside,O=he(Y,i,i[12],re),G=O||we();let m=i[4]===!1&&ae(i),I=i[4]&&ne(i);return{c(){e=w("link"),t=w("link"),l=z(),s=w("div"),v&&v.c(),a=z(),n=w("div"),G&&G.c(),g=z(),m&&m.c(),L=z(),f=w("img"),k=z(),_=w("img"),b=z(),I&&I.c(),this.h()},l(r){const u=ue("svelte-uggfpf",document.head);e=j(u,"LINK",{rel:!0,as:!0,href:!0}),t=j(u,"LINK",{rel:!0,as:!0,href:!0}),u.forEach(h),l=K(r),s=j(r,"DIV",{class:!0,style:!0});var M=N(s);v&&v.l(M),a=K(M),n=j(M,"DIV",{class:!0});var A=N(n);G&&G.l(A),g=K(A),m&&m.l(A),A.forEach(h),L=K(M),f=j(M,"IMG",{class:!0,src:!0,alt:!0}),k=K(M),_=j(M,"IMG",{class:!0,src:!0,alt:!0}),b=K(M),I&&I.l(M),M.forEach(h),this.h()},h(){o(e,"rel","preload"),o(e,"as","image"),o(e,"href",i[0]),o(t,"rel","preload"),o(t,"as","image"),o(t,"href",i[1]),o(n,"class","door-inside svelte-11kjvgh"),o(f,"class","left-door svelte-11kjvgh"),W(f.src,D=i[0])||o(f,"src",D),o(f,"alt","door-left"),q(f,"open",i[3]),q(f,"hidden",i[4]),o(_,"class","right-door svelte-11kjvgh"),W(_.src,c=i[1])||o(_,"src",c),o(_,"alt","door-right"),q(_,"open",i[3]),q(_,"hidden",i[4]),o(s,"class","door svelte-11kjvgh"),o(s,"style",E="left: "+(i[3]?`calc(50vw - ${i[5]/2}px)`:"0px")+"; --aspectRatio="+i[2]),Q(()=>i[11].call(s)),q(s,"open",i[3]),q(s,"expanded",i[4])},m(r,u){$(document.head,e),$(document.head,t),V(r,l,u),V(r,s,u),v&&v.m(s,null),$(s,a),$(s,n),G&&G.m(n,null),$(n,g),m&&m.m(n,null),$(s,L),$(s,f),$(s,k),$(s,_),$(s,b),I&&I.m(s,null),p=_e(s,i[11].bind(s)),d=!0,X||(se=[x(f,"click",i[6]),x(_,"click",i[6])],X=!0)},p(r,[u]){(!d||u&1)&&o(e,"href",r[0]),(!d||u&2)&&o(t,"href",r[1]),r[3]?v?u&8&&R(v,1):(v=oe(),v.c(),R(v,1),v.m(s,a)):v&&(le(),F(v,1,1,()=>{v=null}),ie()),O&&O.p&&(!d||u&4096)&&ge(O,Y,r,r[12],d?pe(Y,r[12],u,$e):me(r[12]),re),r[4]===!1?m?(m.p(r,u),u&16&&R(m,1)):(m=ae(r),m.c(),R(m,1),m.m(n,null)):m&&(le(),F(m,1,1,()=>{m=null}),ie()),(!d||u&1&&!W(f.src,D=r[0]))&&o(f,"src",D),(!d||u&8)&&q(f,"open",r[3]),(!d||u&16)&&q(f,"hidden",r[4]),(!d||u&2&&!W(_.src,c=r[1]))&&o(_,"src",c),(!d||u&8)&&q(_,"open",r[3]),(!d||u&16)&&q(_,"hidden",r[4]),r[4]?I?(I.p(r,u),u&16&&R(I,1)):(I=ne(r),I.c(),R(I,1),I.m(s,null)):I&&(I.d(1),I=null),(!d||u&44&&E!==(E="left: "+(r[3]?`calc(50vw - ${r[5]/2}px)`:"0px")+"; --aspectRatio="+r[2]))&&o(s,"style",E),(!d||u&8)&&q(s,"open",r[3]),(!d||u&16)&&q(s,"expanded",r[4])},i(r){d||(R(v),R(G,r),R(m),R(I),d=!0)},o(r){F(v),F(G,r),F(m),d=!1},d(r){h(e),h(t),r&&h(l),r&&h(s),v&&v.d(),G&&G.d(r),m&&m.d(),I&&I.d(),p(),X=!1,ve(se)}}}function Re(i,e,t){let{$$slots:l={},$$scope:s}=e,{doorImgLeft:a=`${S}/img/sugar-cane-water/door-left.jpg`}=e,{doorImgRight:n=`${S}/img/sugar-cane-water/door-right.jpg`}=e,{link:g=void 0}=e,{aspectRatio:L="513 / 900"}=e,f=!1,D=!1,k=0;const _=()=>{t(3,f=!f),t(4,D=!1)},c=()=>{t(4,D=!D)},b=()=>{g&&be(g)};function E(){k=this.clientWidth,t(5,k)}return i.$$set=p=>{"doorImgLeft"in p&&t(0,a=p.doorImgLeft),"doorImgRight"in p&&t(1,n=p.doorImgRight),"link"in p&&t(9,g=p.link),"aspectRatio"in p&&t(2,L=p.aspectRatio),"$$scope"in p&&t(12,s=p.$$scope)},[a,n,L,f,D,k,_,c,b,g,l,E,s]}class y extends fe{constructor(e){super(),ce(this,e,Re,Ee,de,{doorImgLeft:0,doorImgRight:1,link:9,aspectRatio:2})}}function De(i){let e,t;return{c(){e=w("img"),this.h()},l(l){e=j(l,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","interior-img svelte-1lbsqxb"),o(e,"slot","doorInside"),W(e.src,t=S+"/img/sugar-cane-water/interior.jpg")||o(e,"src",t),o(e,"alt","kitchen of the sugar cane water recipe")},m(l,s){V(l,e,s)},p:B,d(l){l&&h(e)}}}function qe(i){let e,t;return{c(){e=w("img"),this.h()},l(l){e=j(l,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","interior-img svelte-1lbsqxb"),o(e,"slot","doorInside"),W(e.src,t=S+"/img/sugar-cane-water/interior.jpg")||o(e,"src",t),o(e,"alt","kitchen of the taro fried rice recipe")},m(l,s){V(l,e,s)},p:B,d(l){l&&h(e)}}}function Ve(i){let e,t;return{c(){e=w("img"),this.h()},l(l){e=j(l,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","interior-img svelte-1lbsqxb"),o(e,"slot","doorInside"),W(e.src,t=S+"/img/sugar-cane-water/interior.jpg")||o(e,"src",t),o(e,"alt","kitchen of the live lobster stir fry recipe")},m(l,s){V(l,e,s)},p:B,d(l){l&&h(e)}}}function Le(i){let e,t,l,s,a,n,g,L,f,D,k,_;return g=new y({props:{link:S+"/sugar-cane-water/intro",$$slots:{doorInside:[De]},$$scope:{ctx:i}}}),f=new y({props:{link:S+"/taro-rice/intro",doorImgLeft:S+"/img/taro-rice/door-left.jpg",doorImgRight:S+"/img/taro-rice/door-right.jpg",aspectRatio:"500 / 847",$$slots:{doorInside:[qe]},$$scope:{ctx:i}}}),k=new y({props:{link:S+"/live-lobster/intro",aspectRatio:"500 / 847",$$slots:{doorInside:[Ve]},$$scope:{ctx:i}}}),{c(){e=z(),t=w("div"),l=w("div"),s=ee("← Scroll to explore the kitchens →"),a=z(),n=w("div"),P(g.$$.fragment),L=z(),P(f.$$.fragment),D=z(),P(k.$$.fragment),this.h()},l(c){ue("svelte-1aq8p7u",document.head).forEach(h),e=K(c),t=j(c,"DIV",{class:!0});var E=N(t);l=j(E,"DIV",{class:!0});var p=N(l);s=te(p,"← Scroll to explore the kitchens →"),p.forEach(h),a=K(E),n=j(E,"DIV",{class:!0});var d=N(n);U(g.$$.fragment,d),L=K(d),U(f.$$.fragment,d),D=K(d),U(k.$$.fragment,d),d.forEach(h),E.forEach(h),this.h()},h(){document.title="Chi Fan - Kitchens",o(l,"class","message svelte-1lbsqxb"),o(n,"class","door-list svelte-1lbsqxb"),o(t,"class","wrapper svelte-1lbsqxb")},m(c,b){V(c,e,b),V(c,t,b),$(t,l),$(l,s),$(t,a),$(t,n),Z(g,n,null),$(n,L),Z(f,n,null),$(n,D),Z(k,n,null),_=!0},p(c,[b]){const E={};b&1&&(E.$$scope={dirty:b,ctx:c}),g.$set(E);const p={};b&1&&(p.$$scope={dirty:b,ctx:c}),f.$set(p);const d={};b&1&&(d.$$scope={dirty:b,ctx:c}),k.$set(d)},i(c){_||(R(g.$$.fragment,c),R(f.$$.fragment,c),R(k.$$.fragment,c),_=!0)},o(c){F(g.$$.fragment,c),F(f.$$.fragment,c),F(k.$$.fragment,c),_=!1},d(c){c&&h(e),c&&h(t),H(g),H(f),H(k)}}}class Se extends fe{constructor(e){super(),ce(this,e,null,Le,de,{})}}export{Se as default};