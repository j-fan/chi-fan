import{S as fe,i as ce,s as de,R as he,k as w,a as K,T as ue,l as j,h,c as S,m as N,n as r,M as W,F as q,Z as Q,G as $,b as L,_ as _e,N as x,f as E,g as le,t as F,d as ie,U as ge,V as me,W as pe,O as ve,$ as J,w as P,x as U,y as Z,z as H,q as ee,r as te,D as B,a0 as Ie,E as V}from"../../../chunks/paths-991fe185.js";import{h as T}from"../../../chunks/singletons-d8a5f2c8.js";import{B as ke}from"../../../chunks/Button-b275a711.js";import{f as C}from"../../../chunks/index-c1b68916.js";T.disable_scroll_handling;const be=T.goto;T.invalidate;T.invalidateAll;T.preload_data;T.preload_code;T.before_navigate;T.after_navigate;const $e=i=>({}),oe=i=>({});function re(i){let e,t,l;return{c(){e=w("div"),this.h()},l(s){e=j(s,"DIV",{class:!0}),N(e).forEach(h),this.h()},h(){r(e,"class","door-bg svelte-11kjvgh")},m(s,a){L(s,e,a),l=!0},i(s){l||(Q(()=>{t||(t=J(e,C,{},!0)),t.run(1)}),l=!0)},o(s){t||(t=J(e,C,{},!1)),t.run(0),l=!1},d(s){s&&h(e),s&&t&&t.end()}}}function we(i){let e;return{c(){e=ee("There's nothing inside this door")},l(t){e=te(t,"There's nothing inside this door")},m(t,l){L(t,e,l)},d(t){t&&h(e)}}}function ae(i){let e,t,l,s;return t=new ke({props:{isFullWidth:!1,$$slots:{default:[je]},$$scope:{ctx:i}}}),t.$on("click",i[7]),{c(){e=w("div"),P(t.$$.fragment),this.h()},l(a){e=j(a,"DIV",{class:!0});var n=N(e);U(t.$$.fragment,n),n.forEach(h),this.h()},h(){r(e,"class","hover-btn svelte-11kjvgh")},m(a,n){L(a,e,n),Z(t,e,null),s=!0},p(a,n){const g={};n&4096&&(g.$$scope={dirty:n,ctx:a}),t.$set(g)},i(a){s||(E(t.$$.fragment,a),Q(()=>{l||(l=J(e,C,{},!0)),l.run(1)}),s=!0)},o(a){F(t.$$.fragment,a),l||(l=J(e,C,{},!1)),l.run(0),s=!1},d(a){a&&h(e),H(t),a&&l&&l.end()}}}function je(i){let e;return{c(){e=ee("Enter this kitchen")},l(t){e=te(t,"Enter this kitchen")},m(t,l){L(t,e,l)},d(t){t&&h(e)}}}function ne(i){let e,t,l,s;return{c(){e=w("div"),this.h()},l(a){e=j(a,"DIV",{class:!0}),N(e).forEach(h),this.h()},h(){r(e,"class","white-fade-out svelte-11kjvgh")},m(a,n){L(a,e,n),l||(s=x(e,"introend",i[8]),l=!0)},p:B,i(a){t||Q(()=>{t=Ie(e,C,{delay:1e3,duration:500}),t.start()})},o:B,d(a){a&&h(e),l=!1,s()}}}function Re(i){let e,t,l,s,a,n,g,G,f,D,k,_,c,b,R,p,d,X,se,v=i[3]&&re();const Y=i[10].doorInside,O=he(Y,i,i[12],oe),M=O||we();let m=i[4]===!1&&ae(i),I=i[4]&&ne(i);return{c(){e=w("link"),t=w("link"),l=K(),s=w("div"),v&&v.c(),a=K(),n=w("div"),M&&M.c(),g=K(),m&&m.c(),G=K(),f=w("img"),k=K(),_=w("img"),b=K(),I&&I.c(),this.h()},l(o){const u=ue("svelte-uggfpf",document.head);e=j(u,"LINK",{rel:!0,as:!0,href:!0}),t=j(u,"LINK",{rel:!0,as:!0,href:!0}),u.forEach(h),l=S(o),s=j(o,"DIV",{class:!0,style:!0});var z=N(s);v&&v.l(z),a=S(z),n=j(z,"DIV",{class:!0});var A=N(n);M&&M.l(A),g=S(A),m&&m.l(A),A.forEach(h),G=S(z),f=j(z,"IMG",{class:!0,src:!0,alt:!0}),k=S(z),_=j(z,"IMG",{class:!0,src:!0,alt:!0}),b=S(z),I&&I.l(z),z.forEach(h),this.h()},h(){r(e,"rel","preload"),r(e,"as","image"),r(e,"href",i[0]),r(t,"rel","preload"),r(t,"as","image"),r(t,"href",i[1]),r(n,"class","door-inside svelte-11kjvgh"),r(f,"class","left-door svelte-11kjvgh"),W(f.src,D=i[0])||r(f,"src",D),r(f,"alt","door-left"),q(f,"open",i[3]),q(f,"hidden",i[4]),r(_,"class","right-door svelte-11kjvgh"),W(_.src,c=i[1])||r(_,"src",c),r(_,"alt","door-right"),q(_,"open",i[3]),q(_,"hidden",i[4]),r(s,"class","door svelte-11kjvgh"),r(s,"style",R="left: "+(i[3]?`calc(50vw - ${i[5]/2}px)`:"0px")+"; --aspectRatio="+i[2]),Q(()=>i[11].call(s)),q(s,"open",i[3]),q(s,"expanded",i[4])},m(o,u){$(document.head,e),$(document.head,t),L(o,l,u),L(o,s,u),v&&v.m(s,null),$(s,a),$(s,n),M&&M.m(n,null),$(n,g),m&&m.m(n,null),$(s,G),$(s,f),$(s,k),$(s,_),$(s,b),I&&I.m(s,null),p=_e(s,i[11].bind(s)),d=!0,X||(se=[x(f,"click",i[6]),x(_,"click",i[6])],X=!0)},p(o,[u]){(!d||u&1)&&r(e,"href",o[0]),(!d||u&2)&&r(t,"href",o[1]),o[3]?v?u&8&&E(v,1):(v=re(),v.c(),E(v,1),v.m(s,a)):v&&(le(),F(v,1,1,()=>{v=null}),ie()),O&&O.p&&(!d||u&4096)&&ge(O,Y,o,o[12],d?pe(Y,o[12],u,$e):me(o[12]),oe),o[4]===!1?m?(m.p(o,u),u&16&&E(m,1)):(m=ae(o),m.c(),E(m,1),m.m(n,null)):m&&(le(),F(m,1,1,()=>{m=null}),ie()),(!d||u&1&&!W(f.src,D=o[0]))&&r(f,"src",D),(!d||u&8)&&q(f,"open",o[3]),(!d||u&16)&&q(f,"hidden",o[4]),(!d||u&2&&!W(_.src,c=o[1]))&&r(_,"src",c),(!d||u&8)&&q(_,"open",o[3]),(!d||u&16)&&q(_,"hidden",o[4]),o[4]?I?(I.p(o,u),u&16&&E(I,1)):(I=ne(o),I.c(),E(I,1),I.m(s,null)):I&&(I.d(1),I=null),(!d||u&44&&R!==(R="left: "+(o[3]?`calc(50vw - ${o[5]/2}px)`:"0px")+"; --aspectRatio="+o[2]))&&r(s,"style",R),(!d||u&8)&&q(s,"open",o[3]),(!d||u&16)&&q(s,"expanded",o[4])},i(o){d||(E(v),E(M,o),E(m),E(I),d=!0)},o(o){F(v),F(M,o),F(m),d=!1},d(o){h(e),h(t),o&&h(l),o&&h(s),v&&v.d(),M&&M.d(o),m&&m.d(),I&&I.d(),p(),X=!1,ve(se)}}}function Ee(i,e,t){let{$$slots:l={},$$scope:s}=e,{doorImgLeft:a=`${V}/img/sugar-cane-water/door-left.jpg`}=e,{doorImgRight:n=`${V}/img/sugar-cane-water/door-right.jpg`}=e,{link:g=void 0}=e,{aspectRatio:G="513 / 900"}=e,f=!1,D=!1,k=0;const _=()=>{t(3,f=!f),t(4,D=!1)},c=()=>{t(4,D=!D)},b=()=>{g&&be(g)};function R(){k=this.clientWidth,t(5,k)}return i.$$set=p=>{"doorImgLeft"in p&&t(0,a=p.doorImgLeft),"doorImgRight"in p&&t(1,n=p.doorImgRight),"link"in p&&t(9,g=p.link),"aspectRatio"in p&&t(2,G=p.aspectRatio),"$$scope"in p&&t(12,s=p.$$scope)},[a,n,G,f,D,k,_,c,b,g,l,R,s]}class y extends fe{constructor(e){super(),ce(this,e,Ee,Re,de,{doorImgLeft:0,doorImgRight:1,link:9,aspectRatio:2})}}function De(i){let e,t;return{c(){e=w("img"),this.h()},l(l){e=j(l,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){r(e,"class","interior-img svelte-1lbsqxb"),r(e,"slot","doorInside"),W(e.src,t=V+"/img/sugar-cane-water/interior.jpg")||r(e,"src",t),r(e,"alt","kitchen of the sugar cane water recipe")},m(l,s){L(l,e,s)},p:B,d(l){l&&h(e)}}}function qe(i){let e,t;return{c(){e=w("img"),this.h()},l(l){e=j(l,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){r(e,"class","interior-img svelte-1lbsqxb"),r(e,"slot","doorInside"),W(e.src,t=V+"/img/sugar-cane-water/interior.jpg")||r(e,"src",t),r(e,"alt","kitchen of the taro fried rice recipe")},m(l,s){L(l,e,s)},p:B,d(l){l&&h(e)}}}function Ve(i){let e,t;return{c(){e=w("img"),this.h()},l(l){e=j(l,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){r(e,"class","interior-img svelte-1lbsqxb"),r(e,"slot","doorInside"),W(e.src,t=V+"/img/sugar-cane-water/interior.jpg")||r(e,"src",t),r(e,"alt","kitchen of the live lobster stir fry recipe")},m(l,s){L(l,e,s)},p:B,d(l){l&&h(e)}}}function Le(i){let e,t,l,s,a,n,g,G,f,D,k,_;return g=new y({props:{link:V+"/sugar-cane-water/intro",$$slots:{doorInside:[De]},$$scope:{ctx:i}}}),f=new y({props:{link:V+"/taro-rice/intro",doorImgLeft:V+"/img/taro-rice/door-left.jpg",doorImgRight:V+"/img/taro-rice/door-right.jpg",aspectRatio:"500 / 847",$$slots:{doorInside:[qe]},$$scope:{ctx:i}}}),k=new y({props:{link:V+"/live-lobster/intro",aspectRatio:"500 / 847",doorImgLeft:V+"/img/live-lobster/door-left.jpg",doorImgRight:V+"/img/live-lobster/door-right.jpg",$$slots:{doorInside:[Ve]},$$scope:{ctx:i}}}),{c(){e=K(),t=w("div"),l=w("div"),s=ee("← Scroll to explore the kitchens →"),a=K(),n=w("div"),P(g.$$.fragment),G=K(),P(f.$$.fragment),D=K(),P(k.$$.fragment),this.h()},l(c){ue("svelte-1aq8p7u",document.head).forEach(h),e=S(c),t=j(c,"DIV",{class:!0});var R=N(t);l=j(R,"DIV",{class:!0});var p=N(l);s=te(p,"← Scroll to explore the kitchens →"),p.forEach(h),a=S(R),n=j(R,"DIV",{class:!0});var d=N(n);U(g.$$.fragment,d),G=S(d),U(f.$$.fragment,d),D=S(d),U(k.$$.fragment,d),d.forEach(h),R.forEach(h),this.h()},h(){document.title="Chi Fan - Kitchens",r(l,"class","message svelte-1lbsqxb"),r(n,"class","door-list svelte-1lbsqxb"),r(t,"class","wrapper svelte-1lbsqxb")},m(c,b){L(c,e,b),L(c,t,b),$(t,l),$(l,s),$(t,a),$(t,n),Z(g,n,null),$(n,G),Z(f,n,null),$(n,D),Z(k,n,null),_=!0},p(c,[b]){const R={};b&1&&(R.$$scope={dirty:b,ctx:c}),g.$set(R);const p={};b&1&&(p.$$scope={dirty:b,ctx:c}),f.$set(p);const d={};b&1&&(d.$$scope={dirty:b,ctx:c}),k.$set(d)},i(c){_||(E(g.$$.fragment,c),E(f.$$.fragment,c),E(k.$$.fragment,c),_=!0)},o(c){F(g.$$.fragment,c),F(f.$$.fragment,c),F(k.$$.fragment,c),_=!1},d(c){c&&h(e),c&&h(t),H(g),H(f),H(k)}}}class Se extends fe{constructor(e){super(),ce(this,e,null,Le,de,{})}}export{Se as default};
