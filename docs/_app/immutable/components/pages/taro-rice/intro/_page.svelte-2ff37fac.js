import{S as m,i as p,s as l,I as te,k as I,l as v,m as ee,h as w,n as _,p as S,E as i,b as M,K as oe,L as re,M as ne,f as u,t as g,N as P,F as N,C as b,w as h,x as d,y as f,z as $,R as ae,a as L,J as ie,c as W,P as se}from"../../../../chunks/paths-a5fbac2f.js";import{r as ce,a as me,S as pe}from"../../../../chunks/Slides-1a6bbed5.js";import{D as y,S as le,C as k}from"../../../../chunks/SoundControls-df12ac4e.js";function ue(n){let e,o;const t=n[1].default,r=te(t,n,n[0],null);return{c(){e=I("div"),r&&r.c(),this.h()},l(a){e=v(a,"DIV",{class:!0,style:!0});var s=ee(e);r&&r.l(s),s.forEach(w),this.h()},h(){_(e,"class","wrapper svelte-1q4q8ax"),S(e,"background-image","url("+i+"/img/wok.png)")},m(a,s){M(a,e,s),r&&r.m(e,null),o=!0},p(a,[s]){r&&r.p&&(!o||s&1)&&oe(r,t,a,a[0],o?ne(t,a[0],s,null):re(a[0]),null)},i(a){o||(u(r,a),o=!0)},o(a){g(r,a),o=!1},d(a){a&&w(e),r&&r.d(a)}}}function ge(n,e,o){let{$$slots:t={},$$scope:r}=e;return n.$$set=a=>{"$$scope"in a&&o(0,r=a.$$scope)},[r,t]}class j extends m{constructor(e){super(),p(this,e,ge,ue,l,{})}}function he(n){let e,o;return{c(){e=I("img"),this.h()},l(t){e=v(t,"IMG",{class:!0,src:!0,alt:!0,style:!0}),this.h()},h(){_(e,"class","wrapper svelte-1jo6gc5"),P(e.src,o=n[3]?n[1]:n[0])||_(e,"src",o),_(e,"alt","chopped item"),S(e,"--item-width",n[2]),N(e,"picked",n[3])},m(t,r){M(t,e,r)},p(t,[r]){r&11&&!P(e.src,o=t[3]?t[1]:t[0])&&_(e,"src",o),r&4&&S(e,"--item-width",t[2]),r&8&&N(e,"picked",t[3])},i:b,o:b,d(t){t&&w(e)}}}function de(n,e,o){let{beforeChop:t=""}=e,{afterChop:r=""}=e,{itemWidth:a}=e,{picked:s=!1}=e;return n.$$set=x=>{"beforeChop"in x&&o(0,t=x.beforeChop),"afterChop"in x&&o(1,r=x.afterChop),"itemWidth"in x&&o(2,a=x.itemWidth),"picked"in x&&o(3,s=x.picked)},[t,r,a,s]}class T extends m{constructor(e){super(),p(this,e,de,he,l,{beforeChop:0,afterChop:1,itemWidth:2,picked:3})}}function fe(n){let e,o;return e=new T({props:{beforeChop:n[1],afterChop:n[2],picked:n[0],itemWidth:"270px"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p(t,[r]){const a={};r&1&&(a.picked=t[0]),e.$set(a)},i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}function $e(n,e,o){const t=`${i}/img/taro-rice/bologna.png`,r=`${i}/img/taro-rice/bologna-slices.png`;let{picked:a=!1}=e;return n.$$set=s=>{"picked"in s&&o(0,a=s.picked)},[a,t,r]}class D extends m{constructor(e){super(),p(this,e,$e,fe,l,{picked:0})}}function be(n){let e,o;return e=new T({props:{beforeChop:n[1],afterChop:n[2],picked:n[0],itemWidth:"270px"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p(t,[r]){const a={};r&1&&(a.picked=t[0]),e.$set(a)},i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}function xe(n,e,o){const t=`${i}/img/taro-rice/ham.png`,r=`${i}/img/taro-rice/ham-slices.png`;let{picked:a=!1}=e;return n.$$set=s=>{"picked"in s&&o(0,a=s.picked)},[a,t,r]}class O extends m{constructor(e){super(),p(this,e,xe,be,l,{picked:0})}}function ke(n){let e;return{c(){e=I("div"),this.h()},l(o){e=v(o,"DIV",{class:!0,style:!0}),ee(e).forEach(w),this.h()},h(){_(e,"class","wrapper svelte-5zqko9"),S(e,"background-image","url("+(n[0]?n[2]:n[1])+")"),S(e,"transform","rotate("+n[3]+"deg) scaleX("+n[4]+")"),N(e,"picked",n[0])},m(o,t){M(o,e,t)},p(o,[t]){t&1&&S(e,"background-image","url("+(o[0]?o[2]:o[1])+")"),t&1&&N(e,"picked",o[0])},i:b,o:b,d(o){o&&w(e)}}}function ye(n,e,o){const t=`${i}/img/taro-rice/single-mushroom.png`,r=`${i}/img/taro-rice/sliced-mushroom.png`;let{picked:a=!1}=e;const s=ce(-40,40),x=me()?1:-1;return n.$$set=c=>{"picked"in c&&o(0,a=c.picked)},[a,t,r,s,x]}class q extends m{constructor(e){super(),p(this,e,ye,ke,l,{picked:0})}}function we(n){let e,o;return e=new T({props:{beforeChop:n[1],afterChop:n[2],picked:n[0],itemWidth:"500px"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p(t,[r]){const a={};r&1&&(a.picked=t[0]),e.$set(a)},i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}function Ce(n,e,o){const t=`${i}/img/taro-rice/spring-onion-3.png`,r=`${i}/img/taro-rice/chopped-spring-onion-zoomed.png`;let{picked:a=!1}=e;return n.$$set=s=>{"picked"in s&&o(0,a=s.picked)},[a,t,r]}class A extends m{constructor(e){super(),p(this,e,Ce,we,l,{picked:0})}}function _e(n){let e,o;return e=new T({props:{beforeChop:n[1],afterChop:n[2],picked:n[0],itemWidth:"350px"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p(t,[r]){const a={};r&1&&(a.picked=t[0]),e.$set(a)},i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}function Se(n,e,o){const t=`${i}/img/taro-rice/taro-1.png`,r=`${i}/img/taro-rice/sliced-taro.png`;let{picked:a=!1}=e;return n.$$set=s=>{"picked"in s&&o(0,a=s.picked)},[a,t,r]}class H extends m{constructor(e){super(),p(this,e,Se,_e,l,{picked:0})}}function Me(n){let e,o;return e=new y({props:{imageSrc:i+"/img/taro-rice/bologna-slices.png",label:"Bologna"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p:b,i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}class K extends m{constructor(e){super(),p(this,e,null,Me,l,{})}}function Te(n){let e,o;return e=new y({props:{imageSrc:i+"/img/taro-rice/wok-bologna.png"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p:b,i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}class z extends m{constructor(e){super(),p(this,e,null,Te,l,{})}}function Ne(n){let e,o;return e=new y({props:{imageSrc:i+"/img/taro-rice/ham-slices.png",label:"Ham"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p:b,i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}class G extends m{constructor(e){super(),p(this,e,null,Ne,l,{})}}function Ie(n){let e,o;return e=new y({props:{imageSrc:i+"/img/taro-rice/wok-ham.png"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p:b,i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}class E extends m{constructor(e){super(),p(this,e,null,Ie,l,{})}}function ve(n){let e,o;return e=new y({props:{imageSrc:i+"/img/taro-rice/chopped-mint-leaves.png",label:"Mint"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p:b,i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}class R extends m{constructor(e){super(),p(this,e,null,ve,l,{})}}function Be(n){let e,o;return e=new y({props:{imageSrc:i+"/img/taro-rice/wok-mint.png"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p:b,i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}class F extends m{constructor(e){super(),p(this,e,null,Be,l,{})}}function Pe(n){let e,o;return e=new y({props:{imageSrc:i+"/img/taro-rice/sliced-mushroom.png",label:"Mushroom"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p:b,i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}class V extends m{constructor(e){super(),p(this,e,null,Pe,l,{})}}function Le(n){let e,o;return e=new y({props:{imageSrc:i+"/img/taro-rice/wok-mushroom.png"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p:b,i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}class Z extends m{constructor(e){super(),p(this,e,null,Le,l,{})}}function We(n){let e,o;return e=new y({props:{imageSrc:i+"/img/taro-rice/shrimp.png",label:"Shrimp"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p:b,i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}class J extends m{constructor(e){super(),p(this,e,null,We,l,{})}}function je(n){let e,o;return e=new y({props:{imageSrc:i+"/img/taro-rice/wok-shrimp.png"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p:b,i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}class U extends m{constructor(e){super(),p(this,e,null,je,l,{})}}function De(n){let e,o;return e=new y({props:{imageSrc:i+"/img/taro-rice/chopped-spring-onion.png",label:"Spring onion"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p:b,i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}class X extends m{constructor(e){super(),p(this,e,null,De,l,{})}}function Oe(n){let e,o;return e=new y({props:{imageSrc:i+"/img/taro-rice/wok-spring-onion.png"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p:b,i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}class Q extends m{constructor(e){super(),p(this,e,null,Oe,l,{})}}function qe(n){let e,o;return e=new T({props:{beforeChop:n[1],afterChop:n[2],picked:n[0],itemWidth:"350px"}}),{c(){h(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){f(e,t,r),o=!0},p(t,[r]){const a={};r&1&&(a.picked=t[0]),e.$set(a)},i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){$(e,t)}}}function Ae(n,e,o){const t=`${i}/img/taro-rice/mint.png`,r=`${i}/img/taro-rice/chopped-mint-leaves.png`;let{picked:a=!1}=e;return n.$$set=s=>{"picked"in s&&o(0,a=s.picked)},[a,t,r]}class Y extends m{constructor(e){super(),p(this,e,Ae,qe,l,{picked:0})}}function He(n){let e,o,t,r,a,s,x;return ae(n[2]),o=new le({props:{src:i+"/sound/taro-rice.mp3"}}),r=new pe({props:{skipButtonUrl:"/taro-rice",slides:[{type:"static",heroImage:`${i}/img/taro-rice/wash-rice.png`,alt:"washing rice",successStep:{characterName:"Mum",bodyText:"Firstly we need to wash and cook the rice. To do this, place your palm flat on the rice and make sure the water reaches your the beginning of your knuckles. That is the perfect amount of water).",nextButton:{text:"Continue"}},heightPercent:55},{type:"pick-items",dialogs:[{characterName:"Mum",bodyText:"After we peel the skin of the taro we can cut it into small wedges.",nextButton:{text:"What else?"}},{characterName:"Mum",bodyText:"Remember to wear gloves because the skin will make your hands itchy.",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Mum",bodyText:"Keep going, we need taro chopped into wedges."},successStep:{characterName:"Mum",bodyText:"Looking good. Let's cook the rice and taro next.",nextButton:{text:"Let's continue"}},targetCount:1,totalItems:1,itemComponent:H,bgImage:`${i}/img/board-bg.jpg`,toolComponent:k,bottomPosition:50},{type:"static",heroImage:`${i}/img/taro-rice/rice-cooker.png`,alt:"washing rice",successStep:{characterName:"Mum",bodyText:"Salt the rice with a teaspoon of salt then add your taro wedges into the rice. Add some water to wet the taro a little bit. Set it in the rice cooker and cook it.",nextButton:{text:"Continue"}},heightPercent:55},{type:"pick-items",dialogs:[{characterName:"Mum",bodyText:"Now it is time to prepare fresh herbs. Chop the spring onions into small pieces.",nextButton:{text:"Let's do it."}}],errorStep:{characterName:"Mum",bodyText:"Come on, let's slice the spring onion."},successStep:{characterName:"Mum",bodyText:"Let's prepare the next herb, mint.",nextButton:{text:"Let's continue"}},targetCount:1,totalItems:1,itemComponent:A,bgImage:`${i}/img/board-bg.jpg`,toolComponent:k,bottomPosition:50},{type:"pick-items",dialogs:[{characterName:"Mum",bodyText:"Pull the mint off their stems and chop it into small pieces.",nextButton:{text:"Alright"}}],errorStep:{characterName:"Mum",bodyText:"Let's pick the mint leaves"},successStep:{characterName:"Mum",bodyText:"The next step involves your choice of mushrooms.",nextButton:{text:"Let's continue"}},targetCount:1,totalItems:1,itemComponent:Y,bgImage:`${i}/img/board-bg.jpg`,toolComponent:k,bottomPosition:50},{type:"pick-items",dialogs:[{characterName:"Mum",bodyText:"Here we have some king oyster mushrooms. Slice them into small pieces.",nextButton:{text:"I can do that."}}],errorStep:{characterName:"Mum",bodyText:"Not all the mushrooms have been chopped yet."},successStep:{characterName:"Mum",bodyText:"Let's move onto the meats.",nextButton:{text:"Ok!"}},targetCount:n[1]?1:3,totalItems:n[1]?1:3,itemComponent:q,bgImage:`${i}/img/board-bg.jpg`,toolComponent:k,bottomPosition:40},{type:"pick-items",dialogs:[{characterName:"Mum",bodyText:"Cut the meats of choice, we will have multiple today. Let's chop up the vietnamese bologna (Chả lụa) first.",nextButton:{text:"Got it!"}}],errorStep:{characterName:"Mum",bodyText:"Please chop the vietnamese bologna (Chả lụa) into small pieces."},successStep:{characterName:"Mum",bodyText:"Next is the ham.",nextButton:{text:"Continue"}},targetCount:1,totalItems:1,itemComponent:D,bgImage:`${i}/img/board-bg.jpg`,toolComponent:k,bottomPosition:50},{type:"pick-items",dialogs:[{characterName:"Mum",bodyText:"Cut the ham in small slices, same as the bologna.",nextButton:{text:"Got it!"}}],errorStep:{characterName:"Mum",bodyText:"Please chop the ham into small pieces."},successStep:{characterName:"Mum",bodyText:"Wait for the rice and taro to be cooked, then we are ready to stir fry.",nextButton:{text:"I can't wait!"}},targetCount:1,totalItems:1,itemComponent:O,bgImage:`${i}/img/board-bg.jpg`,toolComponent:k,bottomPosition:50},{type:"drag-drop",showMovedItemsInStack:!0,dialogs:[{characterName:"Mum",bodyText:"Now prepare a wok or a pan with some oil. When it’s hot, throw in all of the chosen meats and vegetables.",nextButton:{text:"Continue"}}],errorStep:{characterName:"Mum",bodyText:"Not all the ingredients have been added."},successStep:{characterName:"Mum",bodyText:"Looks good. Time to add the seasonings.",nextButton:{text:"Keen to try it!"}},dropZone:j,dragItems:[G,K,V,J,R,X],droppedItems:[E,z,Z,U,F,Q]},{type:"finished",heroImage:`${i}/img/taro-rice/completed.png`,title:"☆ Taro fried rice ☆",successStep:{characterName:"Mum",bodyText:"Well done, you've made taro fried rice!",nextButton:{text:"Done!",href:"/taro-rice"}}}]}}),{c(){e=L(),h(o.$$.fragment),t=L(),h(r.$$.fragment),this.h()},l(c){ie("svelte-x2ljbq",document.head).forEach(w),e=W(c),d(o.$$.fragment,c),t=W(c),d(r.$$.fragment,c),this.h()},h(){document.title="Taro fried rice"},m(c,C){M(c,e,C),f(o,c,C),M(c,t,C),f(r,c,C),a=!0,s||(x=se(window,"resize",n[2]),s=!0)},p(c,[C]){const B={};C&2&&(B.slides=[{type:"static",heroImage:`${i}/img/taro-rice/wash-rice.png`,alt:"washing rice",successStep:{characterName:"Mum",bodyText:"Firstly we need to wash and cook the rice. To do this, place your palm flat on the rice and make sure the water reaches your the beginning of your knuckles. That is the perfect amount of water).",nextButton:{text:"Continue"}},heightPercent:55},{type:"pick-items",dialogs:[{characterName:"Mum",bodyText:"After we peel the skin of the taro we can cut it into small wedges.",nextButton:{text:"What else?"}},{characterName:"Mum",bodyText:"Remember to wear gloves because the skin will make your hands itchy.",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Mum",bodyText:"Keep going, we need taro chopped into wedges."},successStep:{characterName:"Mum",bodyText:"Looking good. Let's cook the rice and taro next.",nextButton:{text:"Let's continue"}},targetCount:1,totalItems:1,itemComponent:H,bgImage:`${i}/img/board-bg.jpg`,toolComponent:k,bottomPosition:50},{type:"static",heroImage:`${i}/img/taro-rice/rice-cooker.png`,alt:"washing rice",successStep:{characterName:"Mum",bodyText:"Salt the rice with a teaspoon of salt then add your taro wedges into the rice. Add some water to wet the taro a little bit. Set it in the rice cooker and cook it.",nextButton:{text:"Continue"}},heightPercent:55},{type:"pick-items",dialogs:[{characterName:"Mum",bodyText:"Now it is time to prepare fresh herbs. Chop the spring onions into small pieces.",nextButton:{text:"Let's do it."}}],errorStep:{characterName:"Mum",bodyText:"Come on, let's slice the spring onion."},successStep:{characterName:"Mum",bodyText:"Let's prepare the next herb, mint.",nextButton:{text:"Let's continue"}},targetCount:1,totalItems:1,itemComponent:A,bgImage:`${i}/img/board-bg.jpg`,toolComponent:k,bottomPosition:50},{type:"pick-items",dialogs:[{characterName:"Mum",bodyText:"Pull the mint off their stems and chop it into small pieces.",nextButton:{text:"Alright"}}],errorStep:{characterName:"Mum",bodyText:"Let's pick the mint leaves"},successStep:{characterName:"Mum",bodyText:"The next step involves your choice of mushrooms.",nextButton:{text:"Let's continue"}},targetCount:1,totalItems:1,itemComponent:Y,bgImage:`${i}/img/board-bg.jpg`,toolComponent:k,bottomPosition:50},{type:"pick-items",dialogs:[{characterName:"Mum",bodyText:"Here we have some king oyster mushrooms. Slice them into small pieces.",nextButton:{text:"I can do that."}}],errorStep:{characterName:"Mum",bodyText:"Not all the mushrooms have been chopped yet."},successStep:{characterName:"Mum",bodyText:"Let's move onto the meats.",nextButton:{text:"Ok!"}},targetCount:c[1]?1:3,totalItems:c[1]?1:3,itemComponent:q,bgImage:`${i}/img/board-bg.jpg`,toolComponent:k,bottomPosition:40},{type:"pick-items",dialogs:[{characterName:"Mum",bodyText:"Cut the meats of choice, we will have multiple today. Let's chop up the vietnamese bologna (Chả lụa) first.",nextButton:{text:"Got it!"}}],errorStep:{characterName:"Mum",bodyText:"Please chop the vietnamese bologna (Chả lụa) into small pieces."},successStep:{characterName:"Mum",bodyText:"Next is the ham.",nextButton:{text:"Continue"}},targetCount:1,totalItems:1,itemComponent:D,bgImage:`${i}/img/board-bg.jpg`,toolComponent:k,bottomPosition:50},{type:"pick-items",dialogs:[{characterName:"Mum",bodyText:"Cut the ham in small slices, same as the bologna.",nextButton:{text:"Got it!"}}],errorStep:{characterName:"Mum",bodyText:"Please chop the ham into small pieces."},successStep:{characterName:"Mum",bodyText:"Wait for the rice and taro to be cooked, then we are ready to stir fry.",nextButton:{text:"I can't wait!"}},targetCount:1,totalItems:1,itemComponent:O,bgImage:`${i}/img/board-bg.jpg`,toolComponent:k,bottomPosition:50},{type:"drag-drop",showMovedItemsInStack:!0,dialogs:[{characterName:"Mum",bodyText:"Now prepare a wok or a pan with some oil. When it’s hot, throw in all of the chosen meats and vegetables.",nextButton:{text:"Continue"}}],errorStep:{characterName:"Mum",bodyText:"Not all the ingredients have been added."},successStep:{characterName:"Mum",bodyText:"Looks good. Time to add the seasonings.",nextButton:{text:"Keen to try it!"}},dropZone:j,dragItems:[G,K,V,J,R,X],droppedItems:[E,z,Z,U,F,Q]},{type:"finished",heroImage:`${i}/img/taro-rice/completed.png`,title:"☆ Taro fried rice ☆",successStep:{characterName:"Mum",bodyText:"Well done, you've made taro fried rice!",nextButton:{text:"Done!",href:"/taro-rice"}}}]),r.$set(B)},i(c){a||(u(o.$$.fragment,c),u(r.$$.fragment,c),a=!0)},o(c){g(o.$$.fragment,c),g(r.$$.fragment,c),a=!1},d(c){c&&w(e),$(o,c),c&&w(t),$(r,c),s=!1,x()}}}function Ke(n,e,o){let t,r=9999;function a(){o(0,r=window.innerWidth)}return n.$$.update=()=>{n.$$.dirty&1&&o(1,t=r<500)},[r,t,a]}class Re extends m{constructor(e){super(),p(this,e,Ke,He,l,{})}}export{Re as default};
