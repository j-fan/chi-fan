import{S as f,i as y,s as b,k as g,l as p,m,h as c,n as h,p as u,b as _,D as v,B as d,a as N,c as B,C as w,F as J,H as Q,I as Y,J as ee,f as k,t as $,q as te,r as ae,u as re,w as S,x as C,y as T,z as G,N as ne,G as se,M as oe}from"../../../../chunks/index-39773980.js";import{b as i}from"../../../../chunks/paths-b4419565.js";import{r as M,a as X,S as ie,b as ce}from"../../../../chunks/SoundControls-4bdc6887.js";function le(r){let e,t;return{c(){e=g("div"),t=g("div"),this.h()},l(a){e=p(a,"DIV",{class:!0});var n=m(e);t=p(n,"DIV",{class:!0,style:!0}),m(t).forEach(c),n.forEach(c),this.h()},h(){h(t,"class","image svelte-1tt1a32"),u(t,"background-image",`url(${i}/img/sugar-cane-water/cutting-cane-${r[0]}.png)`),h(e,"class","wrapper svelte-1tt1a32")},m(a,n){_(a,e,n),v(e,t)},p(a,[n]){n&1&&u(t,"background-image",`url(${i}/img/sugar-cane-water/cutting-cane-${a[0]}.png)`)},i:d,o:d,d(a){a&&c(e)}}}function de(r,e,t){let a,{progress:n=0}=e;return r.$$set=s=>{"progress"in s&&t(1,n=s.progress)},r.$$.update=()=>{r.$$.dirty&2&&t(0,a=Math.floor(n/.33)+1)},[a,n]}class A extends f{constructor(e){super(),y(this,e,de,le,b,{progress:1})}}function ue(r){let e,t,a,n;return{c(){e=g("div"),t=g("div"),a=N(),n=g("div"),this.h()},l(s){e=p(s,"DIV",{class:!0});var o=m(e);t=p(o,"DIV",{class:!0,style:!0}),m(t).forEach(c),a=B(o),n=p(o,"DIV",{class:!0,style:!0}),m(n).forEach(c),o.forEach(c),this.h()},h(){h(t,"class","image svelte-1mjlyky"),u(t,"background-image","url("+r[1]+")"),h(n,"class","image svelte-1mjlyky"),u(n,"opacity",r[0]),u(n,"background-image","url("+r[2]+")"),h(e,"class","wrapper svelte-1mjlyky")},m(s,o){_(s,e,o),v(e,t),v(e,a),v(e,n)},p(s,[o]){o&1&&u(n,"opacity",s[0])},i:d,o:d,d(s){s&&c(e)}}}function ge(r,e,t){let{progress:a=0}=e;const n=`${i}/img/sugar-cane-water/cut-cane-knobbly.png`,s=`${i}/img/sugar-cane-water/cut-cane-peeled.png`;return r.$$set=o=>{"progress"in o&&t(0,a=o.progress)},[a,n,s]}class V extends f{constructor(e){super(),y(this,e,ge,ue,b,{progress:0})}}function pe(r){let e;return{c(){e=g("div"),this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0}),m(e).forEach(c),this.h()},h(){h(e,"class","wrapper svelte-1e33zak"),u(e,"background-image","url("+r[1]+")"),w(e,"isIntersecting",r[0])},m(t,a){_(t,e,a)},p(t,[a]){a&1&&w(e,"isIntersecting",t[0])},i:d,o:d,d(t){t&&c(e)}}}function me(r,e,t){let{isIntersecting:a=!1}=e;const n=`${i}/img/sugar-cane-water/scrub.png`;return r.$$set=s=>{"isIntersecting"in s&&t(0,a=s.isIntersecting)},[a,n]}class L extends f{constructor(e){super(),y(this,e,me,pe,b,{isIntersecting:0})}}function he(r){let e;return{c(){e=g("div"),this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0}),m(e).forEach(c),this.h()},h(){h(e,"class","wrapper svelte-1ha84nh"),u(e,"--open-shears","url("+r[1]+")"),u(e,"--closed-shears","url("+r[2]+")"),w(e,"isIntersecting",r[0])},m(t,a){_(t,e,a)},p(t,[a]){a&1&&w(e,"isIntersecting",t[0])},i:d,o:d,d(t){t&&c(e)}}}function fe(r,e,t){let{isIntersecting:a=!1}=e;const n=`${i}/img/sugar-cane-water/clippers.png`,s=`${i}/img/sugar-cane-water/clippers-closed.png`;return r.$$set=o=>{"isIntersecting"in o&&t(0,a=o.isIntersecting)},[a,n,s]}class W extends f{constructor(e){super(),y(this,e,fe,he,b,{isIntersecting:0})}}function ye(r){let e;return{c(){e=g("div"),this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0}),m(e).forEach(c),this.h()},h(){h(e,"class","wrapper svelte-5gdabs"),u(e,"background-image","url("+r[2]+")"),u(e,"transform","scale("+r[1]+") scaleX("+r[3]+")"),w(e,"picked",r[0])},m(t,a){_(t,e,a)},p(t,[a]){a&2&&u(e,"transform","scale("+t[1]+") scaleX("+t[3]+")"),a&1&&w(e,"picked",t[0])},i:d,o:d,d(t){t&&c(e)}}}function be(r,e,t){let a;const n=`${i}/img/sugar-cane-water/cane.png`;let{picked:s=!1}=e;const o=M(1,1.4),x=X()?1:-1;return r.$$set=l=>{"picked"in l&&t(0,s=l.picked)},r.$$.update=()=>{r.$$.dirty&1&&t(1,a=s?o*1.2:o)},[s,a,n,x]}class j extends f{constructor(e){super(),y(this,e,be,ye,b,{picked:0})}}function xe(r){let e,t,a,n;return{c(){e=g("div"),t=g("div"),a=N(),n=g("div"),this.h()},l(s){e=p(s,"DIV",{class:!0});var o=m(e);t=p(o,"DIV",{class:!0,style:!0}),m(t).forEach(c),a=B(o),n=p(o,"DIV",{class:!0,style:!0}),m(n).forEach(c),o.forEach(c),this.h()},h(){h(t,"class","image svelte-1fsmfxs"),u(t,"background-image","url("+r[1]+")"),h(n,"class","image svelte-1fsmfxs"),u(n,"opacity",r[0]),u(n,"background-image","url("+r[2]+")"),h(e,"class","wrapper svelte-1fsmfxs")},m(s,o){_(s,e,o),v(e,t),v(e,a),v(e,n)},p(s,[o]){o&1&&u(n,"opacity",s[0])},i:d,o:d,d(s){s&&c(e)}}}function we(r,e,t){let{progress:a=0}=e;const n=`${i}/img/sugar-cane-water/washing-cane-clean.png`,s=`${i}/img/sugar-cane-water/washing-cane-dirty.png`;return r.$$set=o=>{"progress"in o&&t(0,a=o.progress)},[a,n,s]}class F extends f{constructor(e){super(),y(this,e,we,xe,b,{progress:0})}}function _e(r){let e;return{c(){e=g("div"),this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0}),m(e).forEach(c),this.h()},h(){h(e,"class","wrapper svelte-4xjvvi"),u(e,"background-image","url("+r[2]+")"),w(e,"isIntersecting",r[0]),w(e,"isActive",r[1])},m(t,a){_(t,e,a)},p(t,[a]){a&1&&w(e,"isIntersecting",t[0]),a&2&&w(e,"isActive",t[1])},i:d,o:d,d(t){t&&c(e)}}}function ve(r,e,t){let{isIntersecting:a=!1}=e,{isActive:n=!1}=e;const s=`${i}/img/sugar-cane-water/cleaver2.png`;return r.$$set=o=>{"isIntersecting"in o&&t(0,a=o.isIntersecting),"isActive"in o&&t(1,n=o.isActive)},[a,n,s]}class K extends f{constructor(e){super(),y(this,e,ve,_e,b,{isIntersecting:0,isActive:1})}}function ke(r){let e;return{c(){e=g("div"),this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0}),m(e).forEach(c),this.h()},h(){h(e,"class","wrapper svelte-oaa9ff"),u(e,"background-image","url("+r[1]+")"),w(e,"isIntersecting",r[0])},m(t,a){_(t,e,a)},p(t,[a]){a&1&&w(e,"isIntersecting",t[0])},i:d,o:d,d(t){t&&c(e)}}}function $e(r,e,t){let{isIntersecting:a=!1}=e;const n=`${i}/img/sugar-cane-water/cleaver2.png`;return r.$$set=s=>{"isIntersecting"in s&&t(0,a=s.isIntersecting)},[a,n]}class z extends f{constructor(e){super(),y(this,e,$e,ke,b,{isIntersecting:0})}}function Ie(r){let e;return{c(){e=g("div"),this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0}),m(e).forEach(c),this.h()},h(){h(e,"class","wrapper svelte-d9ym79"),u(e,"background-image","url("+(r[0]?r[2]:r[1])+")"),u(e,"transform","rotate("+r[3]+"deg) scaleX("+r[4]+")"),w(e,"picked",r[0])},m(t,a){_(t,e,a)},p(t,[a]){a&1&&u(e,"background-image","url("+(t[0]?t[2]:t[1])+")"),a&1&&w(e,"picked",t[0])},i:d,o:d,d(t){t&&c(e)}}}function Se(r,e,t){const a=`${i}/img/sugar-cane-water/cane-split-1.png`,n=`${i}/img/sugar-cane-water/cane-split-2.png`;let{picked:s=!1}=e;const o=M(-40,40),x=X()?1:-1;return r.$$set=l=>{"picked"in l&&t(0,s=l.picked)},[s,a,n,o,x]}class O extends f{constructor(e){super(),y(this,e,Se,Ie,b,{picked:0})}}function Ce(r){let e,t;const a=r[1].default,n=J(a,r,r[0],null);return{c(){e=g("div"),n&&n.c(),this.h()},l(s){e=p(s,"DIV",{class:!0,style:!0});var o=m(e);n&&n.l(o),o.forEach(c),this.h()},h(){h(e,"class","wrapper svelte-91kxww"),u(e,"background-image","url("+i+"/img/sugar-cane-water/pot.jpg)")},m(s,o){_(s,e,o),n&&n.m(e,null),t=!0},p(s,[o]){n&&n.p&&(!t||o&1)&&Q(n,a,s,s[0],t?ee(a,s[0],o,null):Y(s[0]),null)},i(s){t||(k(n,s),t=!0)},o(s){$(n,s),t=!1},d(s){s&&c(e),n&&n.d(s)}}}function Te(r,e,t){let{$$slots:a={},$$scope:n}=e;return r.$$set=s=>{"$$scope"in s&&t(0,n=s.$$scope)},[n,a]}class E extends f{constructor(e){super(),y(this,e,Te,Ce,b,{})}}function Ge(r){let e,t,a,n,s;return{c(){e=g("div"),t=g("div"),a=N(),n=g("div"),s=te(r[1]),this.h()},l(o){e=p(o,"DIV",{class:!0});var x=m(e);t=p(x,"DIV",{class:!0,style:!0}),m(t).forEach(c),a=B(x),n=p(x,"DIV",{class:!0});var l=m(n);s=ae(l,r[1]),l.forEach(c),x.forEach(c),this.h()},h(){h(t,"class","cell svelte-h80udx"),u(t,"background-image","url("+r[0]+")"),h(n,"class","label svelte-h80udx"),h(e,"class","wrapper svelte-h80udx")},m(o,x){_(o,e,x),v(e,t),v(e,a),v(e,n),v(n,s)},p(o,[x]){x&1&&u(t,"background-image","url("+o[0]+")"),x&2&&re(s,o[1])},i:d,o:d,d(o){o&&c(e)}}}function Ne(r,e,t){let{imageSrc:a}=e,{label:n="label"}=e;return r.$$set=s=>{"imageSrc"in s&&t(0,a=s.imageSrc),"label"in s&&t(1,n=s.label)},[a,n]}class D extends f{constructor(e){super(),y(this,e,Ne,Ge,b,{imageSrc:0,label:1})}}function Be(r){let e,t;return e=new D({props:{imageSrc:i+"/img/sugar-cane-water/carrot-chopped.png",label:"Carrots"}}),{c(){S(e.$$.fragment)},l(a){C(e.$$.fragment,a)},m(a,n){T(e,a,n),t=!0},p:d,i(a){t||(k(e.$$.fragment,a),t=!0)},o(a){$(e.$$.fragment,a),t=!1},d(a){G(e,a)}}}class q extends f{constructor(e){super(),y(this,e,null,Be,b,{})}}function De(r){let e,t;return e=new D({props:{imageSrc:i+"/img/sugar-cane-water/cane-piece.png",label:"Cane pieces"}}),{c(){S(e.$$.fragment)},l(a){C(e.$$.fragment,a)},m(a,n){T(e,a,n),t=!0},p:d,i(a){t||(k(e.$$.fragment,a),t=!0)},o(a){$(e.$$.fragment,a),t=!1},d(a){G(e,a)}}}class H extends f{constructor(e){super(),y(this,e,null,De,b,{})}}function Ee(r){let e,t;return e=new D({props:{imageSrc:i+"/img/sugar-cane-water/almond-flake.png",label:"Almonds"}}),{c(){S(e.$$.fragment)},l(a){C(e.$$.fragment,a)},m(a,n){T(e,a,n),t=!0},p:d,i(a){t||(k(e.$$.fragment,a),t=!0)},o(a){$(e.$$.fragment,a),t=!1},d(a){G(e,a)}}}class R extends f{constructor(e){super(),y(this,e,null,Ee,b,{})}}function Pe(r){let e,t;return e=new D({props:{imageSrc:i+"/img/sugar-cane-water/figs.png",label:"Figs"}}),{c(){S(e.$$.fragment)},l(a){C(e.$$.fragment,a)},m(a,n){T(e,a,n),t=!0},p:d,i(a){t||(k(e.$$.fragment,a),t=!0)},o(a){$(e.$$.fragment,a),t=!1},d(a){G(e,a)}}}class U extends f{constructor(e){super(),y(this,e,null,Pe,b,{})}}function Ae(r){let e,t;return e=new D({props:{imageSrc:i+"/img/sugar-cane-water/rock-sugar.png",label:"Rock sugar"}}),{c(){S(e.$$.fragment)},l(a){C(e.$$.fragment,a)},m(a,n){T(e,a,n),t=!0},p:d,i(a){t||(k(e.$$.fragment,a),t=!0)},o(a){$(e.$$.fragment,a),t=!1},d(a){G(e,a)}}}class Z extends f{constructor(e){super(),y(this,e,null,Ae,b,{})}}function Ve(r){let e,t,a,n,s,o,x;return ne(r[2]),t=new ie({props:{src:i+"/sound/sugar-cane.mp3"}}),n=new ce({props:{skipButtonUrl:"/sugar-cane-water",slides:[{type:"pick-items",dialogs:[{characterName:"Grandpa",bodyText:"First you need to pick some sugar cane",nextButton:{text:"How many do I pick?"}},{characterName:"Grandpa",bodyText:"Let's choose about 3 canes",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Grandpa",bodyText:"Keep going, we just need a few more!"},successStep:{characterName:"Grandpa",bodyText:"These look good. Let's wash and peel them now.",nextButton:{text:"Sounds good"}},targetCount:3,totalItems:r[1]?3:8,itemComponent:j,bgImage:`${i}/img/sugar-cane-water/canes-background.png`,bottomPosition:5,allowToggle:!0},{type:"click-times",dialogs:[{characterName:"Grandpa",bodyText:"Use a cleaver to shave the stalk to eliminate bumps.",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"Ensure you are seated on a low stool and the stalk is firmly implanted into the ground.",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Grandpa",bodyText:"Keep going, it is almost ready"},successStep:{characterName:"Grandpa",bodyText:"The look great now, now we need to scrub it further to clean it.",nextButton:{text:"Let's do it"}},targetComponent:V,toolComponent:z,targetClicks:3,bgImage:`${i}/img/sugar-cane-water/canes-background.png`,confettiProps:{colorArray:["#B6C48F","#627620"],size:15,amount:25,duration:800,x:[-1,1],y:[-1,1]}},{type:"click-times",dialogs:[{characterName:"Grandpa",bodyText:"Let's place the stalks in a bucket of water",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"Scratch off any dirt with the steel wool",nextButton:{text:"I will do it!"}}],errorStep:{characterName:"Grandpa",bodyText:"It's almost clean, please continue scrubbing!"},successStep:{characterName:"Grandpa",bodyText:"That looks nice and clean now",nextButton:{text:"What's next"}},targetComponent:F,toolComponent:L,targetClicks:5,bgImage:`${i}/img/sugar-cane-water/canes-background.png`,confettiProps:{colorArray:["#B6C48F","#6A4E48"],rounded:!0,size:15,amount:25,duration:800,x:[-.25,.25],y:[-.75,0]}},{type:"click-times",dialogs:[{characterName:"Grandpa",bodyText:"Use the hedge shears to trim the sugar cane into 15cm lengths",nextButton:{text:"Got it"}}],errorStep:{characterName:"Grandpa",bodyText:"The pieces need to be a little smaller"},successStep:{characterName:"Grandpa",bodyText:"Good job, those pieces look small enough",nextButton:{text:"Is it ready to cook it yet?"}},targetComponent:A,toolComponent:W,targetClicks:3,bgImage:`${i}/img/sugar-cane-water/board-bg.jpg`,confettiProps:{colorArray:["#B6C48F","#627620"],size:20,amount:10,duration:800,x:[-1,1],y:[-1,1]}},{type:"pick-items",dialogs:[{characterName:"Grandpa",bodyText:"It's not quite ready to cook yet. We need to split it to release more flavour",nextButton:{text:"How do I do that?"}},{characterName:"Grandpa",bodyText:"Slam the sugarcane onto a well-supported chopping board to split the sugarcane into halves. Repeat to split into quarters.",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Grandpa",bodyText:"Keep going, we need the sugar cane nicely split open."},successStep:{characterName:"Grandpa",bodyText:"Thank you, now we can assemble the final ingredients for boiling",nextButton:{text:"Sounds good"}},targetCount:4,totalItems:4,itemComponent:O,bgImage:`${i}/img/sugar-cane-water/board-bg.jpg`,toolComponent:K,bottomPosition:50},{type:"drag-drop",dialogs:[{characterName:"Grandpa",bodyText:"Now we need to boil a pot of water and add the ingredients.",nextButton:{text:"What ingredients?"}},{characterName:"Grandpa",bodyText:"We need the sugar cane pieces, 4 carrots chopped into chunks...",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"...a handful of chinese almonds, and 10 Chinese figs for added sweetness...",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"Finally we will have a taste and add yellow rock sugar as needed",nextButton:{text:"Ok, I will add them"}}],errorStep:{characterName:"Grandpa",bodyText:"Let's add all the ingredients"},successStep:{characterName:"Grandpa",bodyText:"Looks good. Let it boil for 40 minutes and it will be ready to serve.",nextButton:{text:"Keen to try it!"}},dropZone:E,dragItems:[q,H,R,U,Z],dropZoneOverlay:E,confettiProps:{rounded:!0,amount:10,cone:!0,delay:[500,500],duration:800,colorArray:["#cbc7b7","#dadec2"]}},{type:"finished",heroImage:`${i}/img/sugar-cane-water/completed.png`,title:"✨ Sugar cane water ✨",successStep:{characterName:"Grandpa",bodyText:"Well done, you've made sugar cane water!",nextButton:{text:"Done!",href:"/sugar-cane-water"}}}]}}),{c(){e=N(),S(t.$$.fragment),a=N(),S(n.$$.fragment),this.h()},l(l){se("svelte-1wc5pkp",document.head).forEach(c),e=B(l),C(t.$$.fragment,l),a=B(l),C(n.$$.fragment,l),this.h()},h(){document.title="Sugar cane water"},m(l,I){_(l,e,I),T(t,l,I),_(l,a,I),T(n,l,I),s=!0,o||(x=oe(window,"resize",r[2]),o=!0)},p(l,[I]){const P={};I&2&&(P.slides=[{type:"pick-items",dialogs:[{characterName:"Grandpa",bodyText:"First you need to pick some sugar cane",nextButton:{text:"How many do I pick?"}},{characterName:"Grandpa",bodyText:"Let's choose about 3 canes",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Grandpa",bodyText:"Keep going, we just need a few more!"},successStep:{characterName:"Grandpa",bodyText:"These look good. Let's wash and peel them now.",nextButton:{text:"Sounds good"}},targetCount:3,totalItems:l[1]?3:8,itemComponent:j,bgImage:`${i}/img/sugar-cane-water/canes-background.png`,bottomPosition:5,allowToggle:!0},{type:"click-times",dialogs:[{characterName:"Grandpa",bodyText:"Use a cleaver to shave the stalk to eliminate bumps.",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"Ensure you are seated on a low stool and the stalk is firmly implanted into the ground.",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Grandpa",bodyText:"Keep going, it is almost ready"},successStep:{characterName:"Grandpa",bodyText:"The look great now, now we need to scrub it further to clean it.",nextButton:{text:"Let's do it"}},targetComponent:V,toolComponent:z,targetClicks:3,bgImage:`${i}/img/sugar-cane-water/canes-background.png`,confettiProps:{colorArray:["#B6C48F","#627620"],size:15,amount:25,duration:800,x:[-1,1],y:[-1,1]}},{type:"click-times",dialogs:[{characterName:"Grandpa",bodyText:"Let's place the stalks in a bucket of water",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"Scratch off any dirt with the steel wool",nextButton:{text:"I will do it!"}}],errorStep:{characterName:"Grandpa",bodyText:"It's almost clean, please continue scrubbing!"},successStep:{characterName:"Grandpa",bodyText:"That looks nice and clean now",nextButton:{text:"What's next"}},targetComponent:F,toolComponent:L,targetClicks:5,bgImage:`${i}/img/sugar-cane-water/canes-background.png`,confettiProps:{colorArray:["#B6C48F","#6A4E48"],rounded:!0,size:15,amount:25,duration:800,x:[-.25,.25],y:[-.75,0]}},{type:"click-times",dialogs:[{characterName:"Grandpa",bodyText:"Use the hedge shears to trim the sugar cane into 15cm lengths",nextButton:{text:"Got it"}}],errorStep:{characterName:"Grandpa",bodyText:"The pieces need to be a little smaller"},successStep:{characterName:"Grandpa",bodyText:"Good job, those pieces look small enough",nextButton:{text:"Is it ready to cook it yet?"}},targetComponent:A,toolComponent:W,targetClicks:3,bgImage:`${i}/img/sugar-cane-water/board-bg.jpg`,confettiProps:{colorArray:["#B6C48F","#627620"],size:20,amount:10,duration:800,x:[-1,1],y:[-1,1]}},{type:"pick-items",dialogs:[{characterName:"Grandpa",bodyText:"It's not quite ready to cook yet. We need to split it to release more flavour",nextButton:{text:"How do I do that?"}},{characterName:"Grandpa",bodyText:"Slam the sugarcane onto a well-supported chopping board to split the sugarcane into halves. Repeat to split into quarters.",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Grandpa",bodyText:"Keep going, we need the sugar cane nicely split open."},successStep:{characterName:"Grandpa",bodyText:"Thank you, now we can assemble the final ingredients for boiling",nextButton:{text:"Sounds good"}},targetCount:4,totalItems:4,itemComponent:O,bgImage:`${i}/img/sugar-cane-water/board-bg.jpg`,toolComponent:K,bottomPosition:50},{type:"drag-drop",dialogs:[{characterName:"Grandpa",bodyText:"Now we need to boil a pot of water and add the ingredients.",nextButton:{text:"What ingredients?"}},{characterName:"Grandpa",bodyText:"We need the sugar cane pieces, 4 carrots chopped into chunks...",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"...a handful of chinese almonds, and 10 Chinese figs for added sweetness...",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"Finally we will have a taste and add yellow rock sugar as needed",nextButton:{text:"Ok, I will add them"}}],errorStep:{characterName:"Grandpa",bodyText:"Let's add all the ingredients"},successStep:{characterName:"Grandpa",bodyText:"Looks good. Let it boil for 40 minutes and it will be ready to serve.",nextButton:{text:"Keen to try it!"}},dropZone:E,dragItems:[q,H,R,U,Z],dropZoneOverlay:E,confettiProps:{rounded:!0,amount:10,cone:!0,delay:[500,500],duration:800,colorArray:["#cbc7b7","#dadec2"]}},{type:"finished",heroImage:`${i}/img/sugar-cane-water/completed.png`,title:"✨ Sugar cane water ✨",successStep:{characterName:"Grandpa",bodyText:"Well done, you've made sugar cane water!",nextButton:{text:"Done!",href:"/sugar-cane-water"}}}]),n.$set(P)},i(l){s||(k(t.$$.fragment,l),k(n.$$.fragment,l),s=!0)},o(l){$(t.$$.fragment,l),$(n.$$.fragment,l),s=!1},d(l){l&&c(e),G(t,l),l&&c(a),G(n,l),o=!1,x()}}}function Le(r,e,t){let a,n=9999;function s(){t(0,n=window.innerWidth)}return r.$$.update=()=>{r.$$.dirty&1&&t(1,a=n<500)},[n,a,s]}class Ke extends f{constructor(e){super(),y(this,e,Le,Ve,b,{})}}export{Ke as default};
