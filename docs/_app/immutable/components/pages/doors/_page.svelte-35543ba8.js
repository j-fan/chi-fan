import{S as ce,i as fe,s as de,R as he,k as w,a as S,T as ue,l as E,h as u,c as T,m as W,n as o,M as B,F as q,Z as X,G as $,b as V,_ as _e,N as x,f as D,g as le,t as N,d as ie,U as ge,V as me,W as pe,O as ve,$ as Q,w as U,x as Z,y as H,z as J,q as ee,r as te,D as F,a0 as Ie,E as K}from"../../../chunks/paths-991fe185.js";import{h as A}from"../../../chunks/singletons-d8a5f2c8.js";import{B as ke}from"../../../chunks/Button-b275a711.js";import{f as O}from"../../../chunks/index-c1b68916.js";A.disable_scroll_handling;const be=A.goto;A.invalidate;A.invalidateAll;A.preload_data;A.preload_code;A.before_navigate;A.after_navigate;const $e=i=>({}),oe=i=>({});function re(i){let e,t,l;return{c(){e=w("div"),this.h()},l(s){e=E(s,"DIV",{class:!0}),W(e).forEach(u),this.h()},h(){o(e,"class","door-bg svelte-11kjvgh")},m(s,n){V(s,e,n),l=!0},i(s){l||(X(()=>{t||(t=Q(e,O,{},!0)),t.run(1)}),l=!0)},o(s){t||(t=Q(e,O,{},!1)),t.run(0),l=!1},d(s){s&&u(e),s&&t&&t.end()}}}function we(i){let e;return{c(){e=ee("There's nothing inside this door")},l(t){e=te(t,"There's nothing inside this door")},m(t,l){V(t,e,l)},d(t){t&&u(e)}}}function ne(i){let e,t,l,s;return t=new ke({props:{isFullWidth:!1,$$slots:{default:[Ee]},$$scope:{ctx:i}}}),t.$on("click",i[7]),{c(){e=w("div"),U(t.$$.fragment),this.h()},l(n){e=E(n,"DIV",{class:!0});var a=W(e);Z(t.$$.fragment,a),a.forEach(u),this.h()},h(){o(e,"class","hover-btn svelte-11kjvgh")},m(n,a){V(n,e,a),H(t,e,null),s=!0},p(n,a){const _={};a&4096&&(_.$$scope={dirty:a,ctx:n}),t.$set(_)},i(n){s||(D(t.$$.fragment,n),X(()=>{l||(l=Q(e,O,{},!0)),l.run(1)}),s=!0)},o(n){N(t.$$.fragment,n),l||(l=Q(e,O,{},!1)),l.run(0),s=!1},d(n){n&&u(e),J(t),n&&l&&l.end()}}}function Ee(i){let e;return{c(){e=ee("Enter this kitchen")},l(t){e=te(t,"Enter this kitchen")},m(t,l){V(t,e,l)},d(t){t&&u(e)}}}function ae(i){let e,t,l,s;return{c(){e=w("div"),this.h()},l(n){e=E(n,"DIV",{class:!0}),W(e).forEach(u),this.h()},h(){o(e,"class","white-fade-out svelte-11kjvgh")},m(n,a){V(n,e,a),l||(s=x(e,"introend",i[8]),l=!0)},p:F,i(n){t||X(()=>{t=Ie(e,O,{delay:1e3,duration:500}),t.start()})},o:F,d(n){n&&u(e),l=!1,s()}}}function je(i){let e,t,l,s,n,a,_,j,g,b,L,f,M,c,v,m,h,R,se,I=i[3]&&re();const Y=i[10].doorInside,C=he(Y,i,i[12],oe),G=C||we();let p=i[4]===!1&&ne(i),k=i[4]&&ae(i);return{c(){e=w("link"),t=w("link"),l=S(),s=w("div"),I&&I.c(),n=S(),a=w("div"),G&&G.c(),_=S(),p&&p.c(),j=S(),g=w("img"),L=S(),f=w("img"),c=S(),k&&k.c(),this.h()},l(r){const d=ue("svelte-uggfpf",document.head);e=E(d,"LINK",{rel:!0,as:!0,href:!0}),t=E(d,"LINK",{rel:!0,as:!0,href:!0}),d.forEach(u),l=T(r),s=E(r,"DIV",{class:!0,style:!0});var z=W(s);I&&I.l(z),n=T(z),a=E(z,"DIV",{class:!0});var P=W(a);G&&G.l(P),_=T(P),p&&p.l(P),P.forEach(u),j=T(z),g=E(z,"IMG",{class:!0,src:!0,alt:!0}),L=T(z),f=E(z,"IMG",{class:!0,src:!0,alt:!0}),c=T(z),k&&k.l(z),z.forEach(u),this.h()},h(){o(e,"rel","preload"),o(e,"as","image"),o(e,"href",i[0]),o(t,"rel","preload"),o(t,"as","image"),o(t,"href",i[1]),o(a,"class","door-inside svelte-11kjvgh"),o(g,"class","left-door svelte-11kjvgh"),B(g.src,b=i[0])||o(g,"src",b),o(g,"alt","door-left"),q(g,"open",i[3]),q(g,"hidden",i[4]),o(f,"class","right-door svelte-11kjvgh"),B(f.src,M=i[1])||o(f,"src",M),o(f,"alt","door-right"),q(f,"open",i[3]),q(f,"hidden",i[4]),o(s,"class","door svelte-11kjvgh"),o(s,"style",v="left: "+(i[3]?`calc(50vw - ${i[5]/2}px)`:"0px")+"; --aspectRatio="+i[2]),X(()=>i[11].call(s)),q(s,"open",i[3]),q(s,"expanded",i[4])},m(r,d){$(document.head,e),$(document.head,t),V(r,l,d),V(r,s,d),I&&I.m(s,null),$(s,n),$(s,a),G&&G.m(a,null),$(a,_),p&&p.m(a,null),$(s,j),$(s,g),$(s,L),$(s,f),$(s,c),k&&k.m(s,null),m=_e(s,i[11].bind(s)),h=!0,R||(se=[x(g,"click",i[6]),x(f,"click",i[6])],R=!0)},p(r,[d]){(!h||d&1)&&o(e,"href",r[0]),(!h||d&2)&&o(t,"href",r[1]),r[3]?I?d&8&&D(I,1):(I=re(),I.c(),D(I,1),I.m(s,n)):I&&(le(),N(I,1,1,()=>{I=null}),ie()),C&&C.p&&(!h||d&4096)&&ge(C,Y,r,r[12],h?pe(Y,r[12],d,$e):me(r[12]),oe),r[4]===!1?p?(p.p(r,d),d&16&&D(p,1)):(p=ne(r),p.c(),D(p,1),p.m(a,null)):p&&(le(),N(p,1,1,()=>{p=null}),ie()),(!h||d&1&&!B(g.src,b=r[0]))&&o(g,"src",b),(!h||d&8)&&q(g,"open",r[3]),(!h||d&16)&&q(g,"hidden",r[4]),(!h||d&2&&!B(f.src,M=r[1]))&&o(f,"src",M),(!h||d&8)&&q(f,"open",r[3]),(!h||d&16)&&q(f,"hidden",r[4]),r[4]?k?(k.p(r,d),d&16&&D(k,1)):(k=ae(r),k.c(),D(k,1),k.m(s,null)):k&&(k.d(1),k=null),(!h||d&44&&v!==(v="left: "+(r[3]?`calc(50vw - ${r[5]/2}px)`:"0px")+"; --aspectRatio="+r[2]))&&o(s,"style",v),(!h||d&8)&&q(s,"open",r[3]),(!h||d&16)&&q(s,"expanded",r[4])},i(r){h||(D(I),D(G,r),D(p),D(k),h=!0)},o(r){N(I),N(G,r),N(p),h=!1},d(r){u(e),u(t),r&&u(l),r&&u(s),I&&I.d(),G&&G.d(r),p&&p.d(),k&&k.d(),m(),R=!1,ve(se)}}}function De(i,e,t){let{$$slots:l={},$$scope:s}=e,{doorImgLeft:n=`${K}/img/sugar-cane-water/door-left.jpg`}=e,{doorImgRight:a=`${K}/img/sugar-cane-water/door-right.jpg`}=e,{link:_=void 0}=e,{aspectRatio:j="513 / 900"}=e,g=!1,b=!1,L=0;const f=()=>{t(3,g=!g),t(4,b=!1)},M=()=>{t(4,b=!b)},c=()=>{_&&be(_)};function v(){L=this.clientWidth,t(5,L)}return i.$$set=m=>{"doorImgLeft"in m&&t(0,n=m.doorImgLeft),"doorImgRight"in m&&t(1,a=m.doorImgRight),"link"in m&&t(9,_=m.link),"aspectRatio"in m&&t(2,j=m.aspectRatio),"$$scope"in m&&t(12,s=m.$$scope)},[n,a,j,g,b,L,f,M,c,_,l,v,s]}class y extends ce{constructor(e){super(),fe(this,e,De,je,de,{doorImgLeft:0,doorImgRight:1,link:9,aspectRatio:2})}}function Re(i){let e,t;return{c(){e=w("img"),this.h()},l(l){e=E(l,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","interior-img svelte-1lbsqxb"),o(e,"slot","doorInside"),B(e.src,t=K+"/img/sugar-cane-water/interior.jpg")||o(e,"src",t),o(e,"alt","kitchen of the sugar cane water recipe")},m(l,s){V(l,e,s)},p:F,d(l){l&&u(e)}}}function qe(i){let e,t;return{c(){e=w("img"),this.h()},l(l){e=E(l,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","interior-img svelte-1lbsqxb"),o(e,"slot","doorInside"),B(e.src,t=K+"/img/sugar-cane-water/interior.jpg")||o(e,"src",t),o(e,"alt","kitchen of the taro fried rice recipe")},m(l,s){V(l,e,s)},p:F,d(l){l&&u(e)}}}function Ve(i){let e,t;return{c(){e=w("img"),this.h()},l(l){e=E(l,"IMG",{class:!0,slot:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","interior-img svelte-1lbsqxb"),o(e,"slot","doorInside"),B(e.src,t=K+"/img/sugar-cane-water/interior.jpg")||o(e,"src",t),o(e,"alt","kitchen of the live lobster stir fry recipe")},m(l,s){V(l,e,s)},p:F,d(l){l&&u(e)}}}function Le(i){let e,t,l,s,n,a,_,j,g,b,L,f,M;return j=new y({props:{link:K+"/sugar-cane-water/intro",$$slots:{doorInside:[Re]},$$scope:{ctx:i}}}),b=new y({props:{link:K+"/taro-rice/intro",doorImgLeft:K+"/img/taro-rice/door-left.jpg",doorImgRight:K+"/img/taro-rice/door-right.jpg",aspectRatio:"500 / 847",$$slots:{doorInside:[qe]},$$scope:{ctx:i}}}),f=new y({props:{link:K+"/live-lobster/intro",aspectRatio:"500 / 847",$$slots:{doorInside:[Ve]},$$scope:{ctx:i}}}),{c(){e=w("meta"),t=S(),l=w("div"),s=w("div"),n=ee("← Scroll to explore the kitchens →"),a=S(),_=w("div"),U(j.$$.fragment),g=S(),U(b.$$.fragment),L=S(),U(f.$$.fragment),this.h()},l(c){const v=ue("svelte-1ii5p8n",document.head);e=E(v,"META",{name:!0,content:!0}),v.forEach(u),t=T(c),l=E(c,"DIV",{class:!0});var m=W(l);s=E(m,"DIV",{class:!0});var h=W(s);n=te(h,"← Scroll to explore the kitchens →"),h.forEach(u),a=T(m),_=E(m,"DIV",{class:!0});var R=W(_);Z(j.$$.fragment,R),g=T(R),Z(b.$$.fragment,R),L=T(R),Z(f.$$.fragment,R),R.forEach(u),m.forEach(u),this.h()},h(){document.title="Doors",o(e,"name","description"),o(e,"content","Doors"),o(s,"class","message svelte-1lbsqxb"),o(_,"class","door-list svelte-1lbsqxb"),o(l,"class","wrapper svelte-1lbsqxb")},m(c,v){$(document.head,e),V(c,t,v),V(c,l,v),$(l,s),$(s,n),$(l,a),$(l,_),H(j,_,null),$(_,g),H(b,_,null),$(_,L),H(f,_,null),M=!0},p(c,[v]){const m={};v&1&&(m.$$scope={dirty:v,ctx:c}),j.$set(m);const h={};v&1&&(h.$$scope={dirty:v,ctx:c}),b.$set(h);const R={};v&1&&(R.$$scope={dirty:v,ctx:c}),f.$set(R)},i(c){M||(D(j.$$.fragment,c),D(b.$$.fragment,c),D(f.$$.fragment,c),M=!0)},o(c){N(j.$$.fragment,c),N(b.$$.fragment,c),N(f.$$.fragment,c),M=!1},d(c){u(e),c&&u(t),c&&u(l),J(j),J(b),J(f)}}}class Te extends ce{constructor(e){super(),fe(this,e,null,Le,de,{})}}export{Te as default};
