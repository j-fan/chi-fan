import{S as gt,i as wt,s as _t,k as O,q as jt,a as it,l as M,m as W,r as Et,h as _,c as st,n as m,E as ft,F as ct,b as R,G as x,D as rt,H as ht,I as Ot,J as Dt,K as Pt,L as Lt,M as dt,N as ot,O as $t,P as Ct,Q as qt,R as Ht,w as Mt,T as It,x as At,y as xt,U as Ft,V as Wt,W as Ut,f as mt,t as bt,z as Tt,o as Vt}from"../../chunks/paths-991fe185.js";import{p as Bt}from"../../chunks/stores-06a8da20.js";import{s as Gt}from"../../chunks/SoundStore-b7e76b40.js";import{w as Yt}from"../../chunks/index-063f407b.js";function Kt(i){let u,o,n,e,t,r,f,b,a,l;return{c(){u=O("header"),o=O("nav"),n=O("ul"),e=O("li"),t=O("a"),r=jt("Home"),f=it(),b=O("li"),a=O("a"),l=jt("About"),this.h()},l(s){u=M(s,"HEADER",{class:!0});var p=W(u);o=M(p,"NAV",{class:!0});var v=W(o);n=M(v,"UL",{class:!0});var g=W(n);e=M(g,"LI",{class:!0});var k=W(e);t=M(k,"A",{href:!0,class:!0});var A=W(t);r=Et(A,"Home"),A.forEach(_),k.forEach(_),f=st(g),b=M(g,"LI",{class:!0});var N=W(b);a=M(N,"A",{href:!0,class:!0});var D=W(a);l=Et(D,"About"),D.forEach(_),N.forEach(_),g.forEach(_),v.forEach(_),p.forEach(_),this.h()},h(){m(t,"href",ft+"/"),m(t,"class","svelte-6ca7wz"),m(e,"class","svelte-6ca7wz"),ct(e,"active",i[0].url.pathname==="/"),m(a,"href",ft+"/about"),m(a,"class","svelte-6ca7wz"),m(b,"class","svelte-6ca7wz"),ct(b,"active",i[0].url.pathname==="/about"),m(n,"class","svelte-6ca7wz"),m(o,"class","svelte-6ca7wz"),m(u,"class","svelte-6ca7wz")},m(s,p){R(s,u,p),x(u,o),x(o,n),x(n,e),x(e,t),x(t,r),x(n,f),x(n,b),x(b,a),x(a,l)},p(s,[p]){p&1&&ct(e,"active",s[0].url.pathname==="/"),p&1&&ct(b,"active",s[0].url.pathname==="/about")},i:rt,o:rt,d(s){s&&_(u)}}}function Rt(i,u,o){let n;return ht(i,Bt,e=>o(0,n=e)),[n]}class Jt extends gt{constructor(u){super(),wt(this,u,Rt,Kt,_t,{})}}var Qt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xt(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var vt={},Zt={get exports(){return vt},set exports(i){vt=i}};(function(i,u){(function(o,n){i.exports=n()})(Qt,function(){return function(o){function n(t){if(e[t])return e[t].exports;var r=e[t]={exports:{},id:t,loaded:!1};return o[t].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=o,n.c=e,n.p="dist/",n(0)}([function(o,n,e){function t(y){return y&&y.__esModule?y:{default:y}}var r=Object.assign||function(y){for(var P=1;P<arguments.length;P++){var V=arguments[P];for(var Q in V)Object.prototype.hasOwnProperty.call(V,Q)&&(y[Q]=V[Q])}return y},f=e(1),b=(t(f),e(6)),a=t(b),l=e(7),s=t(l),p=e(8),v=t(p),g=e(9),k=t(g),A=e(10),N=t(A),D=e(11),B=t(D),C=e(14),H=t(C),L=[],S=!1,d={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},w=function(){var y=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(y&&(S=!0),S)return L=(0,B.default)(L,d),(0,N.default)(L,d.once),L},U=function(){L=(0,H.default)(),w()},h=function(){L.forEach(function(y,P){y.node.removeAttribute("data-aos"),y.node.removeAttribute("data-aos-easing"),y.node.removeAttribute("data-aos-duration"),y.node.removeAttribute("data-aos-delay")})},c=function(y){return y===!0||y==="mobile"&&k.default.mobile()||y==="phone"&&k.default.phone()||y==="tablet"&&k.default.tablet()||typeof y=="function"&&y()===!0},j=function(y){d=r(d,y),L=(0,H.default)();var P=document.all&&!window.atob;return c(d.disable)||P?h():(d.disableMutationObserver||v.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),d.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",d.easing),document.querySelector("body").setAttribute("data-aos-duration",d.duration),document.querySelector("body").setAttribute("data-aos-delay",d.delay),d.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?w(!0):d.startEvent==="load"?window.addEventListener(d.startEvent,function(){w(!0)}):document.addEventListener(d.startEvent,function(){w(!0)}),window.addEventListener("resize",(0,s.default)(w,d.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(w,d.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,N.default)(L,d.once)},d.throttleDelay)),d.disableMutationObserver||v.default.ready("[data-aos]",U),L)};o.exports={init:j,refresh:w,refreshHard:U}},function(o,n){},,,,,function(o,n){(function(e){function t(c,j,y){function P(E){var $=F,tt=Y;return F=Y=void 0,X=E,q=c.apply(tt,$)}function V(E){return X=E,z=setTimeout(nt,j),Z?P(E):q}function Q(E){var $=E-I,tt=E-X,kt=j-$;return J?U(kt,K-tt):kt}function et(E){var $=E-I,tt=E-X;return I===void 0||$>=j||$<0||J&&tt>=K}function nt(){var E=h();return et(E)?ut(E):void(z=setTimeout(nt,Q(E)))}function ut(E){return z=void 0,T&&F?P(E):(F=Y=void 0,q)}function pt(){z!==void 0&&clearTimeout(z),X=0,F=I=Y=z=void 0}function at(){return z===void 0?q:ut(h())}function G(){var E=h(),$=et(E);if(F=arguments,Y=this,I=E,$){if(z===void 0)return V(I);if(J)return z=setTimeout(nt,j),P(I)}return z===void 0&&(z=setTimeout(nt,j)),q}var F,Y,K,q,z,I,X=0,Z=!1,J=!1,T=!0;if(typeof c!="function")throw new TypeError(p);return j=l(j)||0,f(y)&&(Z=!!y.leading,J="maxWait"in y,K=J?w(l(y.maxWait)||0,j):K,T="trailing"in y?!!y.trailing:T),G.cancel=pt,G.flush=at,G}function r(c,j,y){var P=!0,V=!0;if(typeof c!="function")throw new TypeError(p);return f(y)&&(P="leading"in y?!!y.leading:P,V="trailing"in y?!!y.trailing:V),t(c,j,{leading:P,maxWait:j,trailing:V})}function f(c){var j=typeof c>"u"?"undefined":s(c);return!!c&&(j=="object"||j=="function")}function b(c){return!!c&&(typeof c>"u"?"undefined":s(c))=="object"}function a(c){return(typeof c>"u"?"undefined":s(c))=="symbol"||b(c)&&d.call(c)==g}function l(c){if(typeof c=="number")return c;if(a(c))return v;if(f(c)){var j=typeof c.valueOf=="function"?c.valueOf():c;c=f(j)?j+"":j}if(typeof c!="string")return c===0?c:+c;c=c.replace(k,"");var y=N.test(c);return y||D.test(c)?B(c.slice(2),y?2:8):A.test(c)?v:+c}var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},p="Expected a function",v=NaN,g="[object Symbol]",k=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,D=/^0o[0-7]+$/i,B=parseInt,C=(typeof e>"u"?"undefined":s(e))=="object"&&e&&e.Object===Object&&e,H=(typeof self>"u"?"undefined":s(self))=="object"&&self&&self.Object===Object&&self,L=C||H||Function("return this")(),S=Object.prototype,d=S.toString,w=Math.max,U=Math.min,h=function(){return L.Date.now()};o.exports=r}).call(n,function(){return this}())},function(o,n){(function(e){function t(h,c,j){function y(T){var E=G,$=F;return G=F=void 0,I=T,K=h.apply($,E)}function P(T){return I=T,q=setTimeout(et,c),X?y(T):K}function V(T){var E=T-z,$=T-I,tt=c-E;return Z?w(tt,Y-$):tt}function Q(T){var E=T-z,$=T-I;return z===void 0||E>=c||E<0||Z&&$>=Y}function et(){var T=U();return Q(T)?nt(T):void(q=setTimeout(et,V(T)))}function nt(T){return q=void 0,J&&G?y(T):(G=F=void 0,K)}function ut(){q!==void 0&&clearTimeout(q),I=0,G=z=F=q=void 0}function pt(){return q===void 0?K:nt(U())}function at(){var T=U(),E=Q(T);if(G=arguments,F=this,z=T,E){if(q===void 0)return P(z);if(Z)return q=setTimeout(et,c),y(z)}return q===void 0&&(q=setTimeout(et,c)),K}var G,F,Y,K,q,z,I=0,X=!1,Z=!1,J=!0;if(typeof h!="function")throw new TypeError(s);return c=a(c)||0,r(j)&&(X=!!j.leading,Z="maxWait"in j,Y=Z?d(a(j.maxWait)||0,c):Y,J="trailing"in j?!!j.trailing:J),at.cancel=ut,at.flush=pt,at}function r(h){var c=typeof h>"u"?"undefined":l(h);return!!h&&(c=="object"||c=="function")}function f(h){return!!h&&(typeof h>"u"?"undefined":l(h))=="object"}function b(h){return(typeof h>"u"?"undefined":l(h))=="symbol"||f(h)&&S.call(h)==v}function a(h){if(typeof h=="number")return h;if(b(h))return p;if(r(h)){var c=typeof h.valueOf=="function"?h.valueOf():h;h=r(c)?c+"":c}if(typeof h!="string")return h===0?h:+h;h=h.replace(g,"");var j=A.test(h);return j||N.test(h)?D(h.slice(2),j?2:8):k.test(h)?p:+h}var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},s="Expected a function",p=NaN,v="[object Symbol]",g=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,A=/^0b[01]+$/i,N=/^0o[0-7]+$/i,D=parseInt,B=(typeof e>"u"?"undefined":l(e))=="object"&&e&&e.Object===Object&&e,C=(typeof self>"u"?"undefined":l(self))=="object"&&self&&self.Object===Object&&self,H=B||C||Function("return this")(),L=Object.prototype,S=L.toString,d=Math.max,w=Math.min,U=function(){return H.Date.now()};o.exports=t}).call(n,function(){return this}())},function(o,n){function e(l){var s=void 0,p=void 0;for(s=0;s<l.length;s+=1)if(p=l[s],p.dataset&&p.dataset.aos||p.children&&e(p.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(){return!!t()}function f(l,s){var p=window.document,v=t(),g=new v(b);a=s,g.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function b(l){l&&l.forEach(function(s){var p=Array.prototype.slice.call(s.addedNodes),v=Array.prototype.slice.call(s.removedNodes),g=p.concat(v);if(e(g))return a()})}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){};n.default={isSupported:r,ready:f}},function(o,n){function e(p,v){if(!(p instanceof v))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function p(v,g){for(var k=0;k<g.length;k++){var A=g[k];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(v,A.key,A)}}return function(v,g,k){return g&&p(v.prototype,g),k&&p(v,k),v}}(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,b=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function p(){e(this,p)}return r(p,[{key:"phone",value:function(){var v=t();return!(!f.test(v)&&!b.test(v.substr(0,4)))}},{key:"mobile",value:function(){var v=t();return!(!a.test(v)&&!l.test(v.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p}();n.default=new s},function(o,n){Object.defineProperty(n,"__esModule",{value:!0});var e=function(r,f,b){var a=r.node.getAttribute("data-aos-once");f>r.position?r.node.classList.add("aos-animate"):typeof a<"u"&&(a==="false"||!b&&a!=="true")&&r.node.classList.remove("aos-animate")},t=function(r,f){var b=window.pageYOffset,a=window.innerHeight;r.forEach(function(l,s){e(l,a+b,f)})};n.default=t},function(o,n,e){function t(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(n,"__esModule",{value:!0});var r=e(12),f=t(r),b=function(a,l){return a.forEach(function(s,p){s.node.classList.add("aos-init"),s.position=(0,f.default)(s.node,l.offset)}),a};n.default=b},function(o,n,e){function t(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(n,"__esModule",{value:!0});var r=e(13),f=t(r),b=function(a,l){var s=0,p=0,v=window.innerHeight,g={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(p=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(a=document.querySelectorAll(g.anchor)[0]),s=(0,f.default)(a).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":s+=a.offsetHeight/2;break;case"bottom-bottom":s+=a.offsetHeight;break;case"top-center":s+=v/2;break;case"bottom-center":s+=v/2+a.offsetHeight;break;case"center-center":s+=v/2+a.offsetHeight/2;break;case"top-top":s+=v;break;case"bottom-top":s+=a.offsetHeight+v;break;case"center-top":s+=a.offsetHeight/2+v}return g.anchorPlacement||g.offset||isNaN(l)||(p=l),s+p};n.default=b},function(o,n){Object.defineProperty(n,"__esModule",{value:!0});var e=function(t){for(var r=0,f=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)r+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),f+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:f,left:r}};n.default=e},function(o,n){Object.defineProperty(n,"__esModule",{value:!0});var e=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(r){return{node:r}})};n.default=e}])})})(Zt);const te=Xt(vt);function St(i){return Object.prototype.toString.call(i)==="[object Date]"}function yt(i,u){if(i===u||i!==i)return()=>i;const o=typeof i;if(o!==typeof u||Array.isArray(i)!==Array.isArray(u))throw new Error("Cannot interpolate values of different type");if(Array.isArray(i)){const n=u.map((e,t)=>yt(i[t],e));return e=>n.map(t=>t(e))}if(o==="object"){if(!i||!u)throw new Error("Object cannot be null");if(St(i)&&St(u)){i=i.getTime(),u=u.getTime();const t=u-i;return r=>new Date(i+r*t)}const n=Object.keys(u),e={};return n.forEach(t=>{e[t]=yt(i[t],u[t])}),t=>{const r={};return n.forEach(f=>{r[f]=e[f](t)}),r}}if(o==="number"){const n=u-i;return e=>i+e*n}throw new Error(`Cannot interpolate ${o} values`)}function ee(i,u={}){const o=Yt(i);let n,e=i;function t(r,f){if(i==null)return o.set(i=r),Promise.resolve();e=r;let b=n,a=!1,{delay:l=0,duration:s=400,easing:p=Lt,interpolate:v=yt}=Ot(Ot({},u),f);if(s===0)return b&&(b.abort(),b=null),o.set(i=e),Promise.resolve();const g=Dt()+l;let k;return n=Pt(A=>{if(A<g)return!0;a||(k=v(i,r),typeof s=="function"&&(s=s(i,r)),a=!0),b&&(b.abort(),b=null);const N=A-g;return N>s?(o.set(i=r),!1):(o.set(i=k(p(N/s))),!0)}),n.promise}return{set:t,update:(r,f)=>t(r(e,i),f),subscribe:o.subscribe}}function ne(i){let u,o,n,e,t;return{c(){u=O("button"),o=O("img"),this.h()},l(r){u=M(r,"BUTTON",{class:!0});var f=W(u);o=M(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(_),this.h()},h(){dt(o.src,n=ft+"/img/speaker-on.png")||m(o,"src",n),m(o,"alt","sound on"),m(o,"class","svelte-lj3oj2"),m(u,"class","svelte-lj3oj2")},m(r,f){R(r,u,f),x(u,o),e||(t=ot(u,"click",qt(i[5])),e=!0)},p:rt,d(r){r&&_(u),e=!1,t()}}}function oe(i){let u,o,n,e,t;return{c(){u=O("button"),o=O("img"),this.h()},l(r){u=M(r,"BUTTON",{class:!0});var f=W(u);o=M(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(_),this.h()},h(){dt(o.src,n=ft+"/img/speaker-off.png")||m(o,"src",n),m(o,"alt","sound off"),m(o,"class","svelte-lj3oj2"),m(u,"class","svelte-lj3oj2")},m(r,f){R(r,u,f),x(u,o),e||(t=ot(u,"click",qt(i[4])),e=!0)},p:rt,d(r){r&&_(u),e=!1,t()}}}function re(i){let u,o,n,e,t,r;function f(l,s){var p;return(p=l[0])!=null&&p.paused||l[1]?oe:ne}let b=f(i),a=b(i);return{c(){u=O("audio"),n=it(),e=O("div"),a.c(),this.h()},l(l){u=M(l,"AUDIO",{src:!0}),W(u).forEach(_),n=st(l),e=M(l,"DIV",{class:!0});var s=W(e);a.l(s),s.forEach(_),this.h()},h(){u.loop=!0,dt(u.src,o=i[2])||m(u,"src",o),m(e,"class","sound-controls svelte-lj3oj2")},m(l,s){R(l,u,s),i[11](u),R(l,n,s),R(l,e,s),a.m(e,null),t||(r=[ot(window,"click",i[7]),ot(window,"touchstart",i[7]),ot(u,"pause",i[6]),ot(u,"play",i[6]),ot(u,"ended",i[6])],t=!0)},p(l,[s]){s&4&&!dt(u.src,o=l[2])&&m(u,"src",o),b===(b=f(l))&&a?a.p(l,s):(a.d(1),a=b(l),a&&(a.c(),a.m(e,null)))},i:rt,o:rt,d(l){l&&_(u),i[11](null),l&&_(n),l&&_(e),a.d(),t=!1,$t(r)}}}const zt=1e3;function ae(i,u,o){let n,e;ht(i,Gt,k=>o(10,e=k));let t=null,r=!1,f=!0,b=e;const a=ee(0,{duration:zt,easing:Lt});ht(i,a,k=>o(9,n=k));const l=()=>{t&&(t.play(),a.set(1),o(1,f=!1))},s=()=>{t&&(a.set(0),o(1,f=!0))},p=()=>{o(0,t),o(9,n)},v=()=>{o(8,r=!0)};function g(k){Ct[k?"unshift":"push"](()=>{t=k,o(0,t),o(9,n)})}return i.$$.update=()=>{i.$$.dirty&1024&&e&&(s(),setTimeout(()=>{o(2,b=e),o(8,r=!1)},zt)),i.$$.dirty&256&&r&&(p(),l()),i.$$.dirty&513&&t&&o(0,t.volume=n,t)},[t,f,b,a,l,s,p,v,r,n,e,g]}class ie extends gt{constructor(u){super(),wt(this,u,ae,re,_t,{})}}function se(i){let u,o,n,e,t,r,f,b,a,l,s,p,v,g,k,A,N,D,B,C,H;A=new Jt({}),D=new ie({});const L=i[1].default,S=Ht(L,i,i[0],null);return{c(){u=O("meta"),o=O("meta"),n=O("meta"),e=O("meta"),t=O("meta"),r=O("meta"),f=O("meta"),b=O("meta"),a=O("meta"),l=O("meta"),s=O("meta"),p=O("meta"),v=O("meta"),g=O("link"),k=it(),Mt(A.$$.fragment),N=it(),Mt(D.$$.fragment),B=it(),C=O("main"),S&&S.c(),this.h()},l(d){const w=It("svelte-1bbvynx",document.head);u=M(w,"META",{name:!0,content:!0}),o=M(w,"META",{name:!0,content:!0}),n=M(w,"META",{name:!0,content:!0}),e=M(w,"META",{property:!0,content:!0}),t=M(w,"META",{property:!0,content:!0}),r=M(w,"META",{property:!0,content:!0}),f=M(w,"META",{property:!0,content:!0}),b=M(w,"META",{property:!0,content:!0}),a=M(w,"META",{property:!0,content:!0}),l=M(w,"META",{property:!0,content:!0}),s=M(w,"META",{property:!0,content:!0}),p=M(w,"META",{property:!0,content:!0}),v=M(w,"META",{property:!0,content:!0}),g=M(w,"LINK",{rel:!0,href:!0}),w.forEach(_),k=st(d),At(A.$$.fragment,d),N=st(d),At(D.$$.fragment,d),B=st(d),C=M(d,"MAIN",{class:!0});var U=W(C);S&&S.l(U),U.forEach(_),this.h()},h(){document.title="Chi Fan",m(u,"name","description"),m(u,"content",lt),document.title="Chi Fan",m(o,"name","title"),m(o,"content","Chi Fan"),m(n,"name","description"),m(n,"content",lt),m(e,"property","og:type"),m(e,"content","website"),m(t,"property","og:url"),m(t,"content","https://j-fan.github.io/chi-fan"),m(r,"property","og:title"),m(r,"content","Chi Fan"),m(f,"property","og:description"),m(f,"content",lt),m(b,"property","og:image"),m(b,"content",Nt),m(a,"property","twitter:card"),m(a,"content","summary_large_image"),m(l,"property","twitter:url"),m(l,"content","https://j-fan.github.io/chi-fan"),m(s,"property","twitter:title"),m(s,"content","Chi Fan"),m(p,"property","twitter:description"),m(p,"content",lt),m(v,"property","twitter:image"),m(v,"content",Nt),m(g,"rel","stylesheet"),m(g,"href","https://unpkg.com/aos@next/dist/aos.css"),m(C,"class","svelte-ipu353")},m(d,w){x(document.head,u),x(document.head,o),x(document.head,n),x(document.head,e),x(document.head,t),x(document.head,r),x(document.head,f),x(document.head,b),x(document.head,a),x(document.head,l),x(document.head,s),x(document.head,p),x(document.head,v),x(document.head,g),R(d,k,w),xt(A,d,w),R(d,N,w),xt(D,d,w),R(d,B,w),R(d,C,w),S&&S.m(C,null),H=!0},p(d,[w]){S&&S.p&&(!H||w&1)&&Ft(S,L,d,d[0],H?Ut(L,d[0],w,null):Wt(d[0]),null)},i(d){H||(mt(A.$$.fragment,d),mt(D.$$.fragment,d),mt(S,d),H=!0)},o(d){bt(A.$$.fragment,d),bt(D.$$.fragment,d),bt(S,d),H=!1},d(d){_(u),_(o),_(n),_(e),_(t),_(r),_(f),_(b),_(a),_(l),_(s),_(p),_(v),_(g),d&&_(k),Tt(A,d),d&&_(N),Tt(D,d),d&&_(B),d&&_(C),S&&S.d(d)}}}const lt="吃饭 (Chi-Fan) is a visual arts / heritage studies project tracing the intimate stories and migration of family recipes across the contested “Chinese diaspora”.",Nt="https://j-fan.github.io/chi-fan/img/home-banner.jpg";function ue(i,u,o){let{$$slots:n={},$$scope:e}=u;return Vt(()=>{te.init({offset:100,once:!0})}),i.$$set=t=>{"$$scope"in t&&o(0,e=t.$$scope)},[e,n]}class pe extends gt{constructor(u){super(),wt(this,u,ue,se,_t,{})}}export{pe as default};