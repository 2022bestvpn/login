"use strict";(()=>{var t=Object.defineProperty,e=(e,n)=>t(e,"name",{value:n,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_details_ts-app_assets_modules_github_behaviors_include-fr-34e1f7"],{97261:(t,n,o)=>{function i(t){const e=document.querySelectorAll(t);if(e.length>0)return e[e.length-1]}function r(){const t=i("meta[name=analytics-location]");return t?t.content:window.location.pathname}function s(){let t="";i("meta[name=analytics-location-query-strip]")||(t=window.location.search);const e=i("meta[name=analytics-location-params]");e&&(t+=(t?"&":"?")+e.content);for(const e of document.querySelectorAll("meta[name=analytics-param-rename]")){const n=e.content.split(":",2);t=t.replace(new RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}function c(){return`${window.location.protocol}//${window.location.host}${r()+s()}`}o.d(n,{S:()=>c}),e(i,"queryLast"),e(r,"pagePathname"),e(s,"pageQuery"),e(c,"requestUri")},78784:(t,n,o)=>{o.d(n,{O4:()=>S,jo:()=>b,Qp:()=>v});var i=o(47458),r=o(59753);const s="ontransitionend"in window;function c(t,e){if(!s)return void e();const n=Array.from(t.querySelectorAll(".js-transitionable"));t.classList.contains("js-transitionable")&&n.push(t);for(const t of n){const e=a(t);t instanceof HTMLElement&&(t.addEventListener("transitionend",(()=>{t.style.display="",t.style.visibility="",e&&l(t,(function(){t.style.height=""}))}),{once:!0}),t.style.boxSizing="content-box",t.style.display="block",t.style.visibility="visible",e&&l(t,(function(){t.style.height=getComputedStyle(t).height})),t.offsetHeight)}e();for(const t of n)if(t instanceof HTMLElement&&a(t)){const e=getComputedStyle(t).height;t.style.boxSizing="",t.style.height="0px"===e?`${t.scrollHeight}px`:"0px"}}function a(t){return"height"===getComputedStyle(t).transitionProperty}function l(t,e){t.style.transition="none",e(),t.offsetHeight,t.style.transition=""}e(c,"performTransition"),e(a,"isTransitioningHeight"),e(l,"withoutTransition");var u=o(96776);function d(t,e){e.find((e=>{const n=t.querySelectorAll(e),o=n[n.length-1];if(o&&document.activeElement!==o)return o.focus(),!0}))}function f(t){d(t,[".js-focus-on-dismiss","input[autofocus], textarea[autofocus]"])}function m(t){!t.classList.contains("tooltipped")||(t.classList.remove("tooltipped"),t.addEventListener("mouseleave",(()=>{t.classList.add("tooltipped"),t.blur()}),{once:!0}))}function p(t){return[...document.querySelectorAll(".js-details-container")].filter((e=>e.getAttribute("data-details-container-group")===t))}function g(t){return[...t.querySelectorAll(".js-details-target")].filter((e=>e.closest(".js-details-container")===t))}function h(t,e){const n=t.getAttribute("data-details-container-group");return n?((0,u.uQ)(t,(()=>{for(const o of p(n))o!==t&&y(o,e)})),n):null}function y(t,e){t.classList.toggle("open",e),t.classList.toggle("Details--on",e);for(const n of g(t))n.setAttribute("aria-expanded",e.toString())}function v(t,e){var n,o;const i=t.getAttribute("data-details-container")||".js-details-container",r=t.closest(i),s=null!=(n=null==e?void 0:e.force)?n:!r.classList.contains("open"),a=null!=(o=null==e?void 0:e.withGroup)&&o;c(r,(()=>{y(r,s);const e=a?h(r,s):null;Promise.resolve().then((()=>{f(r),m(t),r.dispatchEvent(new CustomEvent("details:toggled",{bubbles:!0,cancelable:!1,detail:{open:s}})),e&&r.dispatchEvent(new CustomEvent("details:toggled-group",{bubbles:!0,cancelable:!1,detail:{open:s,group:e}}))}))}))}function b(t){const e=t.getAttribute("data-details-container")||".js-details-container",n=t.closest(e).classList;return n.contains("Details--on")||n.contains("open")}function w(t){const e=t.altKey;v(t.currentTarget,{withGroup:e}),t.preventDefault()}function S(t){let e=!1,n=t.parentElement;for(;n;)n.classList.contains("Details-content--shown")&&(e=!0),n.classList.contains("js-details-container")&&(n.classList.toggle("open",!e),n.classList.toggle("Details--on",!e),e=!1),n=n.parentElement}e(d,"findAndFocusByQuerySelector"),e(f,"restoreAutofocus"),e(m,"hideTooltip"),e(p,"groupMembers"),e(g,"containerTargets"),e(h,"toggleGroup"),e(y,"updateOpenState"),e(v,"toggleDetailsTarget"),e(b,"isDetailsTargetExpanded"),e(w,"handleDetailsTargetClick"),(0,r.on)("click",".js-details-target",w),(0,i.Z)((function({target:t}){t&&S(t)})),e(S,"ensureExpanded")},47458:(t,n,o)=>{o.d(n,{Z:()=>c});var i=o(75488);const r=[];let s=0;function c(t){!async function(){r.push(t),await i.x,a()}()}function a(){const t=s;s=r.length,l(r.slice(t),null,window.location.href)}function l(t,e,n){const o=window.location.hash.slice(1),i={oldURL:e,newURL:n,target:o?document.getElementById(o):null};for(const e of t)e.call(null,i)}e(c,"hashChange"),c.clear=()=>{r.length=s=0},e(a,"runRemainingHandlers"),e(l,"runHandlers");let u=window.location.href;window.addEventListener("popstate",(function(){u=window.location.href})),window.addEventListener("hashchange",(function(t){const e=window.location.href;try{l(r,t.oldURL||u,e)}finally{u=e}}));let d=null;document.addEventListener("pjax:start",(function(){d=window.location.href})),document.addEventListener("pjax:end",(function(){l(r,d,window.location.href)}))},52694:(t,n,o)=>{function i(){let t=!1;const e=document.getElementById("start-of-content");if(e){const n=e.nextElementSibling;if(n instanceof HTMLElement)return t="1"===n.getAttribute("data-skipped-to-content"),t&&n.removeAttribute("data-skipped-to-content"),t}}o.d(n,{h:()=>i}),(0,o(59753).on)("click",".js-skip-to-content",(function(t){const e=document.getElementById("start-of-content");if(e){const t=e.nextElementSibling;t instanceof HTMLElement&&(t.setAttribute("tabindex","-1"),t.setAttribute("data-skipped-to-content","1"),t.focus())}t.preventDefault()})),e(i,"hasSkippedToContent");const r="ontouchstart"in document;function s(){return window.innerWidth>1012}e(s,"compatibleDesktop");for(const t of document.querySelectorAll(".HeaderMenu-details"))t.addEventListener("toggle",a),r||(t.addEventListener("mouseover",l),t.addEventListener("mouseleave",l));let c=!1;function a(t){if(!c){c=!0;for(const e of document.querySelectorAll(".HeaderMenu-details"))e!==t.currentTarget&&e.removeAttribute("open");setTimeout((()=>c=!1))}}function l(t){const{currentTarget:e}=t;!(e instanceof HTMLElement)||!s()||("mouseover"===t.type&&t instanceof MouseEvent?t.target instanceof Node&&t.relatedTarget instanceof Node&&e.contains(t.target)&&!e.contains(t.relatedTarget)&&e.setAttribute("open",""):e.removeAttribute("open"))}e(a,"onMenuToggle"),e(l,"onMenuHover")},54294:(t,n,o)=>{o.d(n,{$:()=>d,G:()=>u});var i=o(16246),r=o(64463),s=o(59753);function c(t,e){const n=t.currentTarget;if(n instanceof Element){for(const t of n.querySelectorAll("[data-show-on-error]"))t instanceof HTMLElement&&(t.hidden=!e);for(const t of n.querySelectorAll("[data-hide-on-error]"))t instanceof HTMLElement&&(t.hidden=e)}}function a(t){c(t,!1)}function l(t){c(t,!0)}function u({currentTarget:t}){t instanceof Element&&d(t)}function d(t){const e=t.closest("details");e&&f(e)}function f(t){const e=t.getAttribute("data-deferred-details-content-url");if(e){t.removeAttribute("data-deferred-details-content-url");const n=t.querySelector("include-fragment, poll-include-fragment");n&&(n.src=e)}}(0,r.N7)("include-fragment, poll-include-fragment",{subscribe:t=>(0,i.qC)((0,i.RB)(t,"error",l),(0,i.RB)(t,"loadstart",a))}),(0,s.on)("click","include-fragment button[data-retry-button]",(({currentTarget:t})=>{const e=t.closest("include-fragment"),n=e.src;e.src="",e.src=n})),e(c,"toggleElements"),e(a,"onLoad"),e(l,"onError"),e(u,"loadDeferredContentByEvent"),e(d,"loadDeferredContent"),e(f,"setIncludeFragmentSrc")},4512:(t,n,o)=>{o.d(n,{O3:()=>u,SX:()=>c,_g:()=>a,a8:()=>s,lB:()=>l});let i=0;const r=new Set;function s(t){r.add(t)}function c(t){r.delete(t)}function a(){return i}function l(t){i=t,t?document.body.style.setProperty("--base-sticky-header-height",`${t}px`):document.body.style.removeProperty("--base-sticky-header-height");for(const e of r)e(t)}e(s,"observeStickyHeaderHeight"),e(c,"unobserveStickyHeaderHeight"),e(a,"getBaseStickyHeaderHeight"),e(l,"setBaseStickyHeaderHeight");const u="var(--base-sticky-header-height, 0px)"},8777:(t,n,o)=>{o.d(n,{H:()=>m});var i=o(52694),r=o(75488),s=o(64463),c=o(4512);let a=!1;const l=[];function u(){l.length?d():f()}function d(){a||(window.addEventListener("resize",p),document.addEventListener("scroll",p),a=!0)}function f(){window.removeEventListener("resize",p),document.removeEventListener("scroll",p),a=!1}function m(){g(!0)}function p(){g()}function g(t=!1){for(const e of l)if(e.element.offsetHeight>0){const{element:n,placeholder:o,top:i}=e,r=n.getBoundingClientRect();if(o){const s=o.getBoundingClientRect();n.classList.contains("is-stuck")?s.top>R(n,i)?v(e):b(e):r.top<=R(n,i)?y(e):t&&b(e)}else r.top-R(n,i)<.1?y(e):v(e)}}function h(t){const{position:e}=window.getComputedStyle(t);return/sticky/.test(e)}function y({element:t,placeholder:e,top:n}){if(e){const o=t.getBoundingClientRect();x(t,R(t,n)),t.style.left=`${o.left}px`,t.style.width=`${o.width}px`,t.style.marginTop="0",t.style.position="fixed",e.style.display="block"}t.classList.add("is-stuck")}function v({element:t,placeholder:e}){e&&(t.style.position="static",t.style.marginTop=e.style.marginTop,e.style.display="none"),t.classList.remove("is-stuck")}function b({element:t,placeholder:e,offsetParent:n,top:o}){if(e&&!(0,i.h)()){const i=t.getBoundingClientRect(),r=e.getBoundingClientRect();if(x(t,R(t,o)),t.style.left=`${r.left}px`,t.style.width=`${r.width}px`,n){const e=n.getBoundingClientRect();e.bottom<i.height+parseInt(String(o))&&(t.style.top=e.bottom-i.height+"px")}}}function w(t){if(h(t))return null;const e=t.previousElementSibling;if(e&&e.classList.contains("is-placeholder"))return e;const n=document.createElement("div");return n.style.visibility="hidden",n.style.display="none",n.style.height=window.getComputedStyle(t).height,n.className=t.className,n.classList.remove("js-sticky"),n.classList.add("is-placeholder"),t.parentNode.insertBefore(n,t)}function S(t){const e=w(t),n=window.getComputedStyle(t).position;t.style.position="static";const o=t.offsetParent;t.style.position="fixed";const i=C(t),r={element:t,placeholder:e,offsetParent:o,top:"auto"===i?0:parseInt(i||"0")};t.style.position=n,l.push(r)}function E(t){const e=l.map((t=>t.element)).indexOf(t);l.splice(e,1)}async function L(t){await r.C,S(t),g(),u()}async function A(t){if(null===t.offsetParent)return;await r.C;const e=Math.floor(t.getBoundingClientRect().height);e>0&&((0,c.lB)(e),T(),m())}function T(){for(const t of document.querySelectorAll(".js-position-sticky, .js-notification-shelf-offset-top"))k(t)}function k(t){if(t.classList.contains("js-notification-top-shelf"))return;x(t,(parseInt(C(t))||0)+(0,c._g)())}function C(t){const e=t.getAttribute("data-original-top");if(null!=e)return e;const n=window.getComputedStyle(t).top;return t.setAttribute("data-original-top",n),n}function R(t,e){return t.classList.contains("js-notification-top-shelf")?e:e+(0,c._g)()}function x(t,e){t.style.setProperty("top",`${e}px`,"important")}e(u,"manageObservers"),e(d,"addObservers"),e(f,"removeObservers"),e(m,"forceStickyRelayout"),e(p,"checkElementsForStickingHandler"),e(g,"checkElementsForSticking"),e(h,"browserHasSticky"),e(y,"pinSet"),e(v,"unpinSet"),e(b,"updatePinnedSet"),e(w,"findOrCreatePlaceholder"),e(S,"createSet"),e(E,"removeSet"),e(L,"initializeSet"),(0,s.N7)(".js-sticky",{constructor:HTMLElement,add(t){L(t)},remove(t){E(t),u()}}),(0,s.N7)(".js-notification-top-shelf",{constructor:HTMLElement,add(t){A(t)},remove(){for(const t of document.querySelectorAll(".js-notification-top-shelf"))t.remove();(0,c._g)()>0&&((0,c.lB)(0),T(),m())}}),(0,s.N7)(".js-notification-shelf-offset-top, .js-position-sticky",{constructor:HTMLElement,add:k}),e(A,"initializeNotificationShelf"),e(T,"updateTopOffsets"),e(k,"updateTopOffset"),e(C,"getOriginalTop"),e(R,"withShelfOffset"),e(x,"setTopImportant")},6760:(t,n,o)=>{function i(t){const e=t.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);if(e){if(1===e.length){const t=l(e[0]);return t?Object.freeze({start:t,end:t}):void 0}if(2===e.length){const t=l(e[0]),n=l(e[1]);return t&&n?m(Object.freeze({start:t,end:n})):void 0}}else;}function r(t){const{start:e,end:n}=m(t);return null!=e.column&&null!=n.column?`L${e.line}C${e.column}-L${n.line}C${n.column}`:e.line===n.line?`L${e.line}`:`L${e.line}-L${n.line}`}function s(t){const e=t.match(/(file-.+?-)L\d+?/i);return e?e[1]:""}function c(t){return{blobRange:i(t),anchorPrefix:s(t)}}function a({anchorPrefix:t,blobRange:e}){return e?`#${t}${r(e)}`:"#"}function l(t){const e=t.match(/L(\d+)/),n=t.match(/C(\d+)/);return e?Object.freeze({line:parseInt(e[1]),column:n?parseInt(n[1]):null}):null}function u(t,e){const[n,o]=d(t.start,!0,e),[i,r]=d(t.end,!1,e);if(!n||!i)return;let s=o,c=r;if(-1===s&&(s=0),-1===c&&(c=i.childNodes.length),!n.ownerDocument)throw new Error("DOMRange needs to be inside document");const a=n.ownerDocument.createRange();return a.setStart(n,s),a.setEnd(i,c),a}function d(t,e,n){const o=[null,0],i=n(t.line);if(!i)return o;if(null==t.column)return[i,-1];let r=t.column-1;const s=f(i);for(let t=0;t<s.length;t++){const n=s[t],o=r-(n.textContent||"").length;if(0===o){const o=s[t+1];return e&&o?[o,0]:[n,r]}if(o<0)return[n,r];r=o}return o}function f(t){if(t.nodeType===Node.TEXT_NODE)return[t];if(!t.childNodes||!t.childNodes.length)return[];let e=[];for(const n of t.childNodes)e=e.concat(f(n));return e}function m(t){const e=[t.start,t.end];return e.sort(p),e[0]===t.start&&e[1]===t.end?t:Object.freeze({start:e[0],end:e[1]})}function p(t,e){return t.line===e.line&&t.column===e.column?0:t.line===e.line&&"number"==typeof t.column&&"number"==typeof e.column?t.column-e.column:t.line-e.line}o.d(n,{Dw:()=>a,G5:()=>i,M9:()=>u,n6:()=>c}),e(i,"parseBlobRange"),e(r,"formatBlobRange"),e(s,"parseAnchorPrefix"),e(c,"parseFileAnchor"),e(a,"formatBlobRangeAnchor"),e(l,"parseBlobOffset"),e(u,"DOMRangeFromBlob"),e(d,"findRangeOffset"),e(f,"getAllTextNodes"),e(m,"ascendingBlobRange"),e(p,"compareBlobOffsets")},54412:(t,n,o)=>{o.d(n,{Y:()=>u,q:()=>d});var i=o(88149),r=o(86058);const s="dimension_";let c;const a=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{const t=(0,i.n)("octolytics");delete t.baseContext,c=new r.R(t)}catch{}function l(t){const e=(0,i.n)("octolytics").baseContext||{};if(e){delete e.app_id,delete e.event_url,delete e.host;for(const t in e)t.startsWith(s)&&(e[t.replace(s,"")]=e[t],delete e[t])}const n=document.querySelector("meta[name=visitor-payload]");if(n){const t=JSON.parse(atob(n.content));Object.assign(e,t)}const o=new URLSearchParams(window.location.search);for(const[t,n]of o)a.includes(t.toLowerCase())&&(e[t]=n);return Object.assign(e,t)}function u(t){null==c||c.sendPageView(l(t))}function d(t,e){var n,o;const i=null==(o=null==(n=document.head)?void 0:n.querySelector('meta[name="current-catalog-service"]'))?void 0:o.content,r=i?{service:i}:{};for(const[t,n]of Object.entries(e))null!=n&&(r[t]=`${n}`);null==c||c.sendEvent(t||"unknown",l(r))}e(l,"extendBaseContext"),e(u,"sendPageView"),e(d,"sendEvent")},91385:(t,n,o)=>{o.d(n,{$S:()=>r,Fk:()=>s,sz:()=>c});var i=o(77552);function r(t,e,n){const o={hydroEventPayload:t,hydroEventHmac:e,visitorPayload:"",visitorHmac:"",hydroClientContext:n},r=document.querySelector("meta[name=visitor-payload]");r instanceof HTMLMetaElement&&(o.visitorPayload=r.content);const s=document.querySelector("meta[name=visitor-hmac]")||"";s instanceof HTMLMetaElement&&(o.visitorHmac=s.content),(0,i.b)(o,!0)}function s(t){r(t.getAttribute("data-hydro-view")||"",t.getAttribute("data-hydro-view-hmac")||"",t.getAttribute("data-hydro-client-context")||"")}function c(t){r(t.getAttribute("data-hydro-click-payload")||"",t.getAttribute("data-hydro-click-hmac")||"",t.getAttribute("data-hydro-client-context")||"")}e(r,"sendData"),e(s,"trackView"),e(c,"sendHydroEvent")},66703:(t,n,o)=>{function i(t,e){e.appendChild(t.extractContents()),t.insertNode(e)}o.d(n,{v:()=>i}),e(i,"surroundContents")},31579:(t,n,o)=>{o.d(n,{Z:()=>r});class i{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}function r(t,n={throwQuotaErrorsOnSet:!1},o=window){let r;try{r=o[t]}catch{r=new i}const{throwQuotaErrorsOnSet:s}=n;function c(t){try{return r.getItem(t)}catch{return null}}function a(t,e){try{r.setItem(t,e)}catch(t){if(s&&t.message.toLowerCase().includes("quota"))throw t}}function l(t){try{r.removeItem(t)}catch{}}return e(c,"getItem"),e(a,"setItem"),e(l,"removeItem"),{getItem:c,setItem:a,removeItem:l}}e(i,"NoOpStorage"),e(r,"safeStorage")},30855:(t,e,n)=>{n.d(e,{LS:()=>r,cl:()=>s,rV:()=>i});var o=n(31579);const{getItem:i,setItem:r,removeItem:s}=(0,o.Z)("sessionStorage")},71692:(t,n,o)=>{o.d(n,{Ak:()=>h,F2:()=>T,F6:()=>S,FP:()=>p,LD:()=>m,OE:()=>f,Po:()=>d,QE:()=>s,Rl:()=>L,Xk:()=>b,Ys:()=>w,aN:()=>A,wP:()=>E});var i=o(30855),r=o(97261);const s=Object.freeze({INITIAL:"soft-nav:initial",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",START:"soft-nav:start",END:"soft-nav:end"}),c="soft-navigation-fail",a="soft-navigation-referrer",l="soft-navigation-marker",u="reload";function d(){return"1"===(0,i.rV)(l)}function f(){return Boolean(y())}function m(){performance.mark(l),(0,i.LS)(l,"1"),(0,i.LS)(a,(0,r.S)()||window.location.href)}function p(){(0,i.LS)(l,"0")}function g(){(0,i.LS)(l,"0"),(0,i.cl)(a),(0,i.cl)(c)}function h(t){(0,i.LS)(c,t||u)}function y(){return(0,i.rV)(c)}e(d,"inSoftNavigation"),e(f,"hasSoftNavFailure"),e(m,"startSoftNav"),e(p,"endSoftNav"),e(g,"clearSoftNav"),e(h,"setSoftNavFailReason"),e(y,"getSoftNavFailReason");let v=0;function b(){v+=1,document.dispatchEvent(new CustomEvent(s.SUCCESS,{detail:v}))}function w(){document.dispatchEvent(new CustomEvent(s.ERROR,{detail:y()||u})),v=0,g()}function S(){document.dispatchEvent(new CustomEvent(s.INITIAL)),v=0,g()}function E(){return(0,i.rV)(a)||document.referrer}function L(){return 0===performance.getEntriesByName(l).length?0:performance.measure(l,l).duration}function A(){document.dispatchEvent(new Event(s.START))}function T(){document.dispatchEvent(new Event(s.END))}e(b,"softNavSucceeded"),e(w,"softNavFailed"),e(S,"softNavInitial"),e(E,"getSoftNavReferrer"),e(L,"getDurationSinceLastSoftNav"),e(A,"beginProgressBar"),e(T,"completeProgressBar")},83151:(t,n,o)=>{o.d(n,{kc:()=>c,lA:()=>a,zT:()=>s});var i=o(51847),r=o(8777);function s(t){if(t.hasAttribute("data-ignore-sticky-scroll"))return;const e=t.ownerDocument;setTimeout((()=>{e&&e.defaultView&&(t.scrollIntoView(),e.defaultView.scrollBy(0,-a(e)))}),0)}function c(t){const e=(0,i.Kt)(t);e&&s(e)}function a(t){(0,r.H)();const e=t.querySelectorAll(".js-sticky-offset-scroll"),n=t.querySelectorAll(".js-position-sticky"),o=Math.max(0,...Array.from(e).map((t=>{const{top:e,height:n}=t.getBoundingClientRect();return 0===e?n:0})))+Math.max(0,...Array.from(n).map((t=>{const{top:e,height:n}=t.getBoundingClientRect(),o=parseInt(getComputedStyle(t).top);if(!t.parentElement)return 0;const i=t.parentElement.getBoundingClientRect().top;return e===o&&i<0?n:0}))),i=t.querySelectorAll(".js-position-sticky-stacked");return o+Array.from(i).reduce(((t,e)=>{const{height:n,top:o}=e.getBoundingClientRect(),i=o<0,r=e.classList.contains("is-stuck");return t+(!i&&r?n:0)}),0)}e(s,"scrollIntoView"),e(c,"scrollToFragmentTarget"),e(a,"computeFixedYOffset")},34692:(t,n,o)=>{o.d(n,{H5:()=>d,Of:()=>p,x0:()=>m,z8:()=>f});var i=o(10795),r=o(64463),s=o(5638),c=o(96776),a=o(98016);const l=new WeakMap,u={};function d(){for(const t of Object.keys(u))delete u[t];const t=history.state||{};t.staleRecords=u,(0,a.lO)(t,"",location.href),window.location.reload()}function f(){if(Object.keys(u).length>0){const t=history.state||{};t.staleRecords=u,(0,a.lO)(t,"",location.href)}}async function m(t){if(l.get(t))return;const e=t.hasAttribute("data-retain-focus"),n=t.getAttribute("data-url");if(!n)throw new Error("could not get url");const o=new AbortController;l.set(t,o);try{const r=await fetch(n,{signal:o.signal,headers:{Accept:"text/html","X-Requested-With":"XMLHttpRequest"}});if(!r.ok)return;const s=await r.text();return(0,i.M)(t,e)?void console.warn("Failed to update content with interactions",t):(u[n]=s,g(t,s,e))}catch{}finally{l.delete(t)}}async function p(t,e,n=!1){const o=l.get(t);null==o||o.abort();const i=t.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");return!n&&i&&i===t&&(u[i.getAttribute("data-url")||""]=e),g(t,e)}function g(t,e,n=!1){return(0,c._8)(document,(()=>{const o=(0,s.r)(document,e.trim()),i=n&&t.ownerDocument&&t===t.ownerDocument.activeElement?o.querySelector("*"):null,r=Array.from(t.querySelectorAll("details[open][id]")).map((t=>t.id));"DETAILS"===t.tagName&&t.id&&t.hasAttribute("open")&&r.push(t.id);for(const e of t.querySelectorAll(".js-updatable-content-preserve-scroll-position")){const t=e.getAttribute("data-updatable-content-scroll-position-id")||"";h.set(t,e.scrollTop)}for(const t of r){const e=o.querySelector(`#${t}`);e&&e.setAttribute("open","")}t.replaceWith(o),i instanceof HTMLElement&&i.focus()}))}e(d,"reload"),e(f,"registerStaleRecords"),e(m,"updateContent"),e(p,"replaceContent"),e(g,"replace");const h=new Map;(0,r.N7)(".js-updatable-content-preserve-scroll-position",{constructor:HTMLElement,add(t){const e=t.getAttribute("data-updatable-content-scroll-position-id");if(!e)return;const n=h.get(e);null!=n&&(t.scrollTop=n)}})},75343:(t,n,o)=>{function i(t){return t.offsetWidth<=0&&t.offsetHeight<=0}function r(t){return!i(t)}o.d(n,{Z:()=>r}),e(i,"hidden"),e(r,"visible")}}])})();