import{S as w,i as k,s as $,k as f,l as y,m as b,h as c,n as u,p as h,E as l,b as x,G as I,C as d,a as D,c as P,F as v,I as ae,K as re,L as ne,M as se,f as T,t as C,w as G,x as N,y as B,z as E,N as W,P as S,U as oe,Z as ie,a4 as Y,R as ce,J as le}from"../../../../chunks/paths-a5fbac2f.js";import{r as ee,a as te,S as ue}from"../../../../chunks/Slides-aea7c26b.js";import{D as L,C as F}from"../../../../chunks/DragDropItem-5048ea81.js";function de(n){let e,t;return{c(){e=f("div"),t=f("div"),this.h()},l(a){e=y(a,"DIV",{class:!0});var r=b(e);t=y(r,"DIV",{class:!0,style:!0}),b(t).forEach(c),r.forEach(c),this.h()},h(){u(t,"class","image svelte-1tt1a32"),h(t,"background-image",`url(${l}/img/sugar-cane-water/cutting-cane-${n[0]}.png)`),u(e,"class","wrapper svelte-1tt1a32")},m(a,r){x(a,e,r),I(e,t)},p(a,[r]){r&1&&h(t,"background-image",`url(${l}/img/sugar-cane-water/cutting-cane-${a[0]}.png)`)},i:d,o:d,d(a){a&&c(e)}}}function ge(n,e,t){let a,{progress:r=0}=e;return n.$$set=s=>{"progress"in s&&t(1,r=s.progress)},n.$$.update=()=>{n.$$.dirty&2&&t(0,a=Math.floor(r/.33)+1)},[a,r]}class O extends w{constructor(e){super(),k(this,e,ge,de,$,{progress:1})}}function pe(n){let e,t,a,r;return{c(){e=f("div"),t=f("div"),a=D(),r=f("div"),this.h()},l(s){e=y(s,"DIV",{class:!0});var o=b(e);t=y(o,"DIV",{class:!0,style:!0}),b(t).forEach(c),a=P(o),r=y(o,"DIV",{class:!0,style:!0}),b(r).forEach(c),o.forEach(c),this.h()},h(){u(t,"class","image svelte-1mjlyky"),h(t,"background-image","url("+n[1]+")"),u(r,"class","image svelte-1mjlyky"),h(r,"opacity",n[0]),h(r,"background-image","url("+n[2]+")"),u(e,"class","wrapper svelte-1mjlyky")},m(s,o){x(s,e,o),I(e,t),I(e,a),I(e,r)},p(s,[o]){o&1&&h(r,"opacity",s[0])},i:d,o:d,d(s){s&&c(e)}}}function me(n,e,t){let{progress:a=0}=e;const r=`${l}/img/sugar-cane-water/cut-cane-knobbly.png`,s=`${l}/img/sugar-cane-water/cut-cane-peeled.png`;return n.$$set=o=>{"progress"in o&&t(0,a=o.progress)},[a,r,s]}class j extends w{constructor(e){super(),k(this,e,me,pe,$,{progress:0})}}function he(n){let e;return{c(){e=f("div"),this.h()},l(t){e=y(t,"DIV",{class:!0,style:!0}),b(e).forEach(c),this.h()},h(){u(e,"class","wrapper svelte-1e33zak"),h(e,"background-image","url("+n[1]+")"),v(e,"isIntersecting",n[0])},m(t,a){x(t,e,a)},p(t,[a]){a&1&&v(e,"isIntersecting",t[0])},i:d,o:d,d(t){t&&c(e)}}}function fe(n,e,t){let{isIntersecting:a=!1}=e;const r=`${l}/img/sugar-cane-water/scrub.png`;return n.$$set=s=>{"isIntersecting"in s&&t(0,a=s.isIntersecting)},[a,r]}class K extends w{constructor(e){super(),k(this,e,fe,he,$,{isIntersecting:0})}}function ye(n){let e;return{c(){e=f("div"),this.h()},l(t){e=y(t,"DIV",{class:!0,style:!0}),b(e).forEach(c),this.h()},h(){u(e,"class","wrapper svelte-1ha84nh"),h(e,"--open-shears","url("+n[1]+")"),h(e,"--closed-shears","url("+n[2]+")"),v(e,"isIntersecting",n[0])},m(t,a){x(t,e,a)},p(t,[a]){a&1&&v(e,"isIntersecting",t[0])},i:d,o:d,d(t){t&&c(e)}}}function be(n,e,t){let{isIntersecting:a=!1}=e;const r=`${l}/img/sugar-cane-water/clippers.png`,s=`${l}/img/sugar-cane-water/clippers-closed.png`;return n.$$set=o=>{"isIntersecting"in o&&t(0,a=o.isIntersecting)},[a,r,s]}class q extends w{constructor(e){super(),k(this,e,be,ye,$,{isIntersecting:0})}}function _e(n){let e;return{c(){e=f("div"),this.h()},l(t){e=y(t,"DIV",{class:!0,style:!0}),b(e).forEach(c),this.h()},h(){u(e,"class","wrapper svelte-5gdabs"),h(e,"background-image","url("+n[2]+")"),h(e,"transform","scale("+n[1]+") scaleX("+n[3]+")"),v(e,"picked",n[0])},m(t,a){x(t,e,a)},p(t,[a]){a&2&&h(e,"transform","scale("+t[1]+") scaleX("+t[3]+")"),a&1&&v(e,"picked",t[0])},i:d,o:d,d(t){t&&c(e)}}}function xe(n,e,t){let a;const r=`${l}/img/sugar-cane-water/cane.png`;let{picked:s=!1}=e;const o=ee(1,1.4),p=te()?1:-1;return n.$$set=i=>{"picked"in i&&t(0,s=i.picked)},n.$$.update=()=>{n.$$.dirty&1&&t(1,a=s?o*1.2:o)},[s,a,r,p]}class z extends w{constructor(e){super(),k(this,e,xe,_e,$,{picked:0})}}function we(n){let e,t,a,r;return{c(){e=f("div"),t=f("div"),a=D(),r=f("div"),this.h()},l(s){e=y(s,"DIV",{class:!0});var o=b(e);t=y(o,"DIV",{class:!0,style:!0}),b(t).forEach(c),a=P(o),r=y(o,"DIV",{class:!0,style:!0}),b(r).forEach(c),o.forEach(c),this.h()},h(){u(t,"class","image svelte-1fsmfxs"),h(t,"background-image","url("+n[1]+")"),u(r,"class","image svelte-1fsmfxs"),h(r,"opacity",n[0]),h(r,"background-image","url("+n[2]+")"),u(e,"class","wrapper svelte-1fsmfxs")},m(s,o){x(s,e,o),I(e,t),I(e,a),I(e,r)},p(s,[o]){o&1&&h(r,"opacity",s[0])},i:d,o:d,d(s){s&&c(e)}}}function ke(n,e,t){let{progress:a=0}=e;const r=`${l}/img/sugar-cane-water/washing-cane-clean.png`,s=`${l}/img/sugar-cane-water/washing-cane-dirty.png`;return n.$$set=o=>{"progress"in o&&t(0,a=o.progress)},[a,r,s]}class U extends w{constructor(e){super(),k(this,e,ke,we,$,{progress:0})}}function $e(n){let e;return{c(){e=f("div"),this.h()},l(t){e=y(t,"DIV",{class:!0,style:!0}),b(e).forEach(c),this.h()},h(){u(e,"class","wrapper svelte-oaa9ff"),h(e,"background-image","url("+n[1]+")"),v(e,"isIntersecting",n[0])},m(t,a){x(t,e,a)},p(t,[a]){a&1&&v(e,"isIntersecting",t[0])},i:d,o:d,d(t){t&&c(e)}}}function ve(n,e,t){let{isIntersecting:a=!1}=e;const r=`${l}/img/sugar-cane-water/cleaver2.png`;return n.$$set=s=>{"isIntersecting"in s&&t(0,a=s.isIntersecting)},[a,r]}class R extends w{constructor(e){super(),k(this,e,ve,$e,$,{isIntersecting:0})}}function Ie(n){let e;return{c(){e=f("div"),this.h()},l(t){e=y(t,"DIV",{class:!0,style:!0}),b(e).forEach(c),this.h()},h(){u(e,"class","wrapper svelte-d9ym79"),h(e,"background-image","url("+(n[0]?n[2]:n[1])+")"),h(e,"transform","rotate("+n[3]+"deg) scaleX("+n[4]+")"),v(e,"picked",n[0])},m(t,a){x(t,e,a)},p(t,[a]){a&1&&h(e,"background-image","url("+(t[0]?t[2]:t[1])+")"),a&1&&v(e,"picked",t[0])},i:d,o:d,d(t){t&&c(e)}}}function Se(n,e,t){const a=`${l}/img/sugar-cane-water/cane-split-1.png`,r=`${l}/img/sugar-cane-water/cane-split-2.png`;let{picked:s=!1}=e;const o=ee(-40,40),p=te()?1:-1;return n.$$set=i=>{"picked"in i&&t(0,s=i.picked)},[s,a,r,o,p]}class M extends w{constructor(e){super(),k(this,e,Se,Ie,$,{picked:0})}}function Te(n){let e,t;const a=n[1].default,r=ae(a,n,n[0],null);return{c(){e=f("div"),r&&r.c(),this.h()},l(s){e=y(s,"DIV",{class:!0,style:!0});var o=b(e);r&&r.l(o),o.forEach(c),this.h()},h(){u(e,"class","wrapper svelte-1o2ib17"),h(e,"background-image","url("+l+"/img/sugar-cane-water/pot.jpg)")},m(s,o){x(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&re(r,a,s,s[0],t?se(a,s[0],o,null):ne(s[0]),null)},i(s){t||(T(r,s),t=!0)},o(s){C(r,s),t=!1},d(s){s&&c(e),r&&r.d(s)}}}function Ce(n,e,t){let{$$slots:a={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,a]}class V extends w{constructor(e){super(),k(this,e,Ce,Te,$,{})}}function Ge(n){let e,t;return e=new L({props:{imageSrc:l+"/img/sugar-cane-water/carrot-chopped.png",label:"Carrots"}}),{c(){G(e.$$.fragment)},l(a){N(e.$$.fragment,a)},m(a,r){B(e,a,r),t=!0},p:d,i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){E(e,a)}}}class Z extends w{constructor(e){super(),k(this,e,null,Ge,$,{})}}function Ne(n){let e,t;return e=new L({props:{imageSrc:l+"/img/sugar-cane-water/cane-piece.png",label:"Cane pieces"}}),{c(){G(e.$$.fragment)},l(a){N(e.$$.fragment,a)},m(a,r){B(e,a,r),t=!0},p:d,i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){E(e,a)}}}class H extends w{constructor(e){super(),k(this,e,null,Ne,$,{})}}function Be(n){let e,t;return e=new L({props:{imageSrc:l+"/img/sugar-cane-water/almond-flake.png",label:"Almonds"}}),{c(){G(e.$$.fragment)},l(a){N(e.$$.fragment,a)},m(a,r){B(e,a,r),t=!0},p:d,i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){E(e,a)}}}class X extends w{constructor(e){super(),k(this,e,null,Be,$,{})}}function Ee(n){let e,t;return e=new L({props:{imageSrc:l+"/img/sugar-cane-water/figs.png",label:"Figs"}}),{c(){G(e.$$.fragment)},l(a){N(e.$$.fragment,a)},m(a,r){B(e,a,r),t=!0},p:d,i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){E(e,a)}}}class J extends w{constructor(e){super(),k(this,e,null,Ee,$,{})}}function De(n){let e,t;return e=new L({props:{imageSrc:l+"/img/sugar-cane-water/rock-sugar.png",label:"Rock sugar"}}),{c(){G(e.$$.fragment)},l(a){N(e.$$.fragment,a)},m(a,r){B(e,a,r),t=!0},p:d,i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){E(e,a)}}}class Q extends w{constructor(e){super(),k(this,e,null,De,$,{})}}function Pe(n){let e,t,a,r,s;return{c(){e=f("button"),t=f("img"),this.h()},l(o){e=y(o,"BUTTON",{class:!0});var p=b(e);t=y(p,"IMG",{src:!0,alt:!0,class:!0}),p.forEach(c),this.h()},h(){W(t.src,a=l+"/img/speaker-on.png")||u(t,"src",a),u(t,"alt","sound on"),u(t,"class","svelte-kmqs2e"),u(e,"class","svelte-kmqs2e")},m(o,p){x(o,e,p),I(e,t),r||(s=S(e,"click",Y(n[3])),r=!0)},p:d,d(o){o&&c(e),r=!1,s()}}}function Le(n){let e,t,a,r,s;return{c(){e=f("button"),t=f("img"),this.h()},l(o){e=y(o,"BUTTON",{class:!0});var p=b(e);t=y(p,"IMG",{src:!0,alt:!0,class:!0}),p.forEach(c),this.h()},h(){W(t.src,a=l+"/img/speaker-off.png")||u(t,"src",a),u(t,"alt","sound off"),u(t,"class","svelte-kmqs2e"),u(e,"class","svelte-kmqs2e")},m(o,p){x(o,e,p),I(e,t),r||(s=S(e,"click",Y(n[2])),r=!0)},p:d,d(o){o&&c(e),r=!1,s()}}}function Ve(n){let e,t,a,r,s,o;function p(g,_){var A;return(A=g[1])!=null&&A.paused?Le:Pe}let i=p(n),m=i(n);return{c(){e=f("audio"),a=D(),r=f("div"),m.c(),this.h()},l(g){e=y(g,"AUDIO",{src:!0}),b(e).forEach(c),a=P(g),r=y(g,"DIV",{class:!0});var _=b(r);m.l(_),_.forEach(c),this.h()},h(){e.loop=!0,W(e.src,t=n[0])||u(e,"src",t),u(r,"class","sound-controls svelte-kmqs2e")},m(g,_){x(g,e,_),n[7](e),x(g,a,_),x(g,r,_),m.m(r,null),s||(o=[S(window,"click",n[5]),S(window,"touchstart",n[5]),S(e,"pause",n[4]),S(e,"play",n[4]),S(e,"ended",n[4])],s=!0)},p(g,[_]){_&1&&!W(e.src,t=g[0])&&u(e,"src",t),i===(i=p(g))&&m?m.p(g,_):(m.d(1),m=i(g),m&&(m.c(),m.m(r,null)))},i:d,o:d,d(g){g&&c(e),n[7](null),g&&c(a),g&&c(r),m.d(),s=!1,oe(o)}}}function We(n,e,t){let{src:a=""}=e,r=null,s=!1;const o=()=>{r&&r.play()},p=()=>{r&&r.pause()},i=()=>{t(1,r)},m=()=>{t(6,s=!0)};function g(_){ie[_?"unshift":"push"](()=>{r=_,t(1,r)})}return n.$$set=_=>{"src"in _&&t(0,a=_.src)},n.$$.update=()=>{n.$$.dirty&64&&s&&(o(),i())},[a,r,o,p,i,m,s,g]}class Ae extends w{constructor(e){super(),k(this,e,We,Ve,$,{src:0})}}function Fe(n){let e,t,a,r,s,o,p;return ce(n[2]),t=new Ae({props:{src:l+"/sound/sugar-cane.mp3"}}),r=new ue({props:{skipButtonUrl:"/sugar-cane-water",slides:[{type:"pick-items",dialogs:[{characterName:"Grandpa",bodyText:"First you need to pick some sugar cane",nextButton:{text:"How many do I pick?"}},{characterName:"Grandpa",bodyText:"Let's choose about 3 canes",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Grandpa",bodyText:"Keep going, we just need a few more!"},successStep:{characterName:"Grandpa",bodyText:"These look good. Let's wash and peel them now.",nextButton:{text:"Sounds good"}},targetCount:3,totalItems:n[1]?3:8,itemComponent:z,bgImage:`${l}/img/sugar-cane-water/canes-background.png`,bottomPosition:5,allowToggle:!0},{type:"click-times",dialogs:[{characterName:"Grandpa",bodyText:"Use a cleaver to shave the stalk to eliminate bumps.",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"Ensure you are seated on a low stool and the stalk is firmly implanted into the ground.",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Grandpa",bodyText:"Keep going, it is almost ready"},successStep:{characterName:"Grandpa",bodyText:"The look great now, now we need to scrub it further to clean it.",nextButton:{text:"Let's do it"}},targetComponent:j,toolComponent:R,targetClicks:3,bgImage:`${l}/img/sugar-cane-water/canes-background.png`,confettiProps:{colorArray:["#B6C48F","#627620"],size:15,amount:25,duration:800,x:[-1,1],y:[-1,1]}},{type:"click-times",dialogs:[{characterName:"Grandpa",bodyText:"Let's place the stalks in a bucket of water",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"Scratch off any dirt with the steel wool",nextButton:{text:"I will do it!"}}],errorStep:{characterName:"Grandpa",bodyText:"It's almost clean, please continue scrubbing!"},successStep:{characterName:"Grandpa",bodyText:"That looks nice and clean now",nextButton:{text:"What's next"}},targetComponent:U,toolComponent:K,targetClicks:5,bgImage:`${l}/img/sugar-cane-water/canes-background.png`,confettiProps:{colorArray:["#B6C48F","#6A4E48"],rounded:!0,size:15,amount:25,duration:800,x:[-.25,.25],y:[-.75,0]}},{type:"click-times",dialogs:[{characterName:"Grandpa",bodyText:"Use the hedge shears to trim the sugar cane into 15cm lengths",nextButton:{text:"Got it"}}],errorStep:{characterName:"Grandpa",bodyText:"The pieces need to be a little smaller"},successStep:{characterName:"Grandpa",bodyText:"Good job, those pieces look small enough",nextButton:{text:"Is it ready to cook it yet?"}},targetComponent:O,toolComponent:q,targetClicks:3,bgImage:`${l}/img/board-bg.jpg`,confettiProps:{colorArray:["#B6C48F","#627620"],size:20,amount:10,duration:800,x:[-1,1],y:[-1,1]}},{type:"pick-items",dialogs:[{characterName:"Grandpa",bodyText:"It's not quite ready to cook yet. We need to split it to release more flavour",nextButton:{text:"How do I do that?"}},{characterName:"Grandpa",bodyText:"Slam the sugarcane onto a well-supported chopping board to split the sugarcane into halves. Repeat to split into quarters.",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Grandpa",bodyText:"Keep going, we need the sugar cane nicely split open."},successStep:{characterName:"Grandpa",bodyText:"Thank you, now we can assemble the final ingredients for boiling",nextButton:{text:"Sounds good"}},targetCount:4,totalItems:4,itemComponent:M,bgImage:`${l}/img/board-bg.jpg`,toolComponent:F,bottomPosition:50},{type:"drag-drop",dialogs:[{characterName:"Grandpa",bodyText:"Now we need to boil a pot of water and add the ingredients.",nextButton:{text:"What ingredients?"}},{characterName:"Grandpa",bodyText:"We need the sugar cane pieces, 4 carrots chopped into chunks...",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"...a handful of chinese almonds, and 10 Chinese figs for added sweetness...",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"Finally we will have a taste and add yellow rock sugar as needed",nextButton:{text:"Ok, I will add them"}}],errorStep:{characterName:"Grandpa",bodyText:"Let's add all the ingredients"},successStep:{characterName:"Grandpa",bodyText:"Looks good. Let it boil for 40 minutes and it will be ready to serve.",nextButton:{text:"Keen to try it!"}},dropZone:V,dragItems:[Z,H,X,J,Q],dropZoneOverlay:V,confettiProps:{rounded:!0,amount:10,cone:!0,delay:[500,500],duration:800,colorArray:["#cbc7b7","#dadec2"]}},{type:"finished",heroImage:`${l}/img/sugar-cane-water/completed.png`,title:"☆ Sugar cane water ☆",successStep:{characterName:"Grandpa",bodyText:"Well done, you've made sugar cane water!",nextButton:{text:"Done!",href:"/sugar-cane-water"}}}]}}),{c(){e=D(),G(t.$$.fragment),a=D(),G(r.$$.fragment),this.h()},l(i){le("svelte-1wc5pkp",document.head).forEach(c),e=P(i),N(t.$$.fragment,i),a=P(i),N(r.$$.fragment,i),this.h()},h(){document.title="Sugar cane water"},m(i,m){x(i,e,m),B(t,i,m),x(i,a,m),B(r,i,m),s=!0,o||(p=S(window,"resize",n[2]),o=!0)},p(i,[m]){const g={};m&2&&(g.slides=[{type:"pick-items",dialogs:[{characterName:"Grandpa",bodyText:"First you need to pick some sugar cane",nextButton:{text:"How many do I pick?"}},{characterName:"Grandpa",bodyText:"Let's choose about 3 canes",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Grandpa",bodyText:"Keep going, we just need a few more!"},successStep:{characterName:"Grandpa",bodyText:"These look good. Let's wash and peel them now.",nextButton:{text:"Sounds good"}},targetCount:3,totalItems:i[1]?3:8,itemComponent:z,bgImage:`${l}/img/sugar-cane-water/canes-background.png`,bottomPosition:5,allowToggle:!0},{type:"click-times",dialogs:[{characterName:"Grandpa",bodyText:"Use a cleaver to shave the stalk to eliminate bumps.",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"Ensure you are seated on a low stool and the stalk is firmly implanted into the ground.",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Grandpa",bodyText:"Keep going, it is almost ready"},successStep:{characterName:"Grandpa",bodyText:"The look great now, now we need to scrub it further to clean it.",nextButton:{text:"Let's do it"}},targetComponent:j,toolComponent:R,targetClicks:3,bgImage:`${l}/img/sugar-cane-water/canes-background.png`,confettiProps:{colorArray:["#B6C48F","#627620"],size:15,amount:25,duration:800,x:[-1,1],y:[-1,1]}},{type:"click-times",dialogs:[{characterName:"Grandpa",bodyText:"Let's place the stalks in a bucket of water",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"Scratch off any dirt with the steel wool",nextButton:{text:"I will do it!"}}],errorStep:{characterName:"Grandpa",bodyText:"It's almost clean, please continue scrubbing!"},successStep:{characterName:"Grandpa",bodyText:"That looks nice and clean now",nextButton:{text:"What's next"}},targetComponent:U,toolComponent:K,targetClicks:5,bgImage:`${l}/img/sugar-cane-water/canes-background.png`,confettiProps:{colorArray:["#B6C48F","#6A4E48"],rounded:!0,size:15,amount:25,duration:800,x:[-.25,.25],y:[-.75,0]}},{type:"click-times",dialogs:[{characterName:"Grandpa",bodyText:"Use the hedge shears to trim the sugar cane into 15cm lengths",nextButton:{text:"Got it"}}],errorStep:{characterName:"Grandpa",bodyText:"The pieces need to be a little smaller"},successStep:{characterName:"Grandpa",bodyText:"Good job, those pieces look small enough",nextButton:{text:"Is it ready to cook it yet?"}},targetComponent:O,toolComponent:q,targetClicks:3,bgImage:`${l}/img/board-bg.jpg`,confettiProps:{colorArray:["#B6C48F","#627620"],size:20,amount:10,duration:800,x:[-1,1],y:[-1,1]}},{type:"pick-items",dialogs:[{characterName:"Grandpa",bodyText:"It's not quite ready to cook yet. We need to split it to release more flavour",nextButton:{text:"How do I do that?"}},{characterName:"Grandpa",bodyText:"Slam the sugarcane onto a well-supported chopping board to split the sugarcane into halves. Repeat to split into quarters.",nextButton:{text:"Ok I got it!"}}],errorStep:{characterName:"Grandpa",bodyText:"Keep going, we need the sugar cane nicely split open."},successStep:{characterName:"Grandpa",bodyText:"Thank you, now we can assemble the final ingredients for boiling",nextButton:{text:"Sounds good"}},targetCount:4,totalItems:4,itemComponent:M,bgImage:`${l}/img/board-bg.jpg`,toolComponent:F,bottomPosition:50},{type:"drag-drop",dialogs:[{characterName:"Grandpa",bodyText:"Now we need to boil a pot of water and add the ingredients.",nextButton:{text:"What ingredients?"}},{characterName:"Grandpa",bodyText:"We need the sugar cane pieces, 4 carrots chopped into chunks...",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"...a handful of chinese almonds, and 10 Chinese figs for added sweetness...",nextButton:{text:"Continue"}},{characterName:"Grandpa",bodyText:"Finally we will have a taste and add yellow rock sugar as needed",nextButton:{text:"Ok, I will add them"}}],errorStep:{characterName:"Grandpa",bodyText:"Let's add all the ingredients"},successStep:{characterName:"Grandpa",bodyText:"Looks good. Let it boil for 40 minutes and it will be ready to serve.",nextButton:{text:"Keen to try it!"}},dropZone:V,dragItems:[Z,H,X,J,Q],dropZoneOverlay:V,confettiProps:{rounded:!0,amount:10,cone:!0,delay:[500,500],duration:800,colorArray:["#cbc7b7","#dadec2"]}},{type:"finished",heroImage:`${l}/img/sugar-cane-water/completed.png`,title:"☆ Sugar cane water ☆",successStep:{characterName:"Grandpa",bodyText:"Well done, you've made sugar cane water!",nextButton:{text:"Done!",href:"/sugar-cane-water"}}}]),r.$set(g)},i(i){s||(T(t.$$.fragment,i),T(r.$$.fragment,i),s=!0)},o(i){C(t.$$.fragment,i),C(r.$$.fragment,i),s=!1},d(i){i&&c(e),E(t,i),i&&c(a),E(r,i),o=!1,p()}}}function Oe(n,e,t){let a,r=9999;function s(){t(0,r=window.innerWidth)}return n.$$.update=()=>{n.$$.dirty&1&&t(1,a=r<500)},[r,a,s]}class ze extends w{constructor(e){super(),k(this,e,Oe,Fe,$,{})}}export{ze as default};
