"use strict";(()=>{var t=Object.defineProperty,e=(e,n)=>t(e,"name",{value:n,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["github-elements"],{15825:(t,n,i)=>{i(71544),i(38257),i(14840),i(57260),i(13002),i(73921);var s=i(27034);i(51941),i(88309),i(40987),i(57852),i(88823);window.IncludeFragmentElement.prototype.fetch=t=>(t.headers.append("X-Requested-With","XMLHttpRequest"),window.fetch(t));i(70462);var r=i(90420),a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=e(((t,e,n,i)=>{for(var s,r=i>1?void 0:i?o(e,n):e,l=t.length-1;l>=0;l--)(s=t[l])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&a(e,n,r),r}),"__decorateClass");let u=e(class extends HTMLElement{updateURL(t){const e=t.currentTarget,n=e.getAttribute("data-url")||"";if(this.helpField.value=n,e.matches(".js-git-protocol-clone-url"))for(const t of this.helpTexts)t.textContent=n;for(const t of this.cloneURLButtons)t.classList.remove("selected");e.classList.add("selected")}},"GitCloneHelpElement");l([r.fA],u.prototype,"helpField",2),l([r.GO],u.prototype,"helpTexts",2),l([r.GO],u.prototype,"cloneURLButtons",2),u=l([r.Ih],u);var c,d,h,m,p=e(((t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)}),"__accessCheck"),f=e(((t,e,n)=>(p(t,e,"read from private field"),n?n.call(t):e.get(t))),"__privateGet"),g=e(((t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)}),"__privateAdd"),v=e(((t,e,n,i)=>(p(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n)),"__privateSet");function b(t,e){const n=[];let i=0;for(let s=0;s<t.length;s++){const r=t[s],a=e.indexOf(r,i);if(-1===a)return n;i=a+1,n.push(a)}return n}e(b,"defaultPositions");class w extends HTMLElement{constructor(){super(...arguments),g(this,c,""),g(this,d,""),g(this,h,void 0),g(this,m,void 0)}get query(){return this.ownerInput?this.ownerInput.value:this.getAttribute("query")||""}set query(t){this.setAttribute("query",t)}get ownerInput(){const t=this.ownerDocument.getElementById(this.getAttribute("data-owner-input")||"");return t instanceof HTMLInputElement?t:null}connectedCallback(){var t;this.handleEvent(),null==(t=this.ownerInput)||t.addEventListener("input",this),v(this,h,new MutationObserver((()=>this.handleEvent())))}handleEvent(){f(this,m)&&cancelAnimationFrame(f(this,m)),v(this,m,requestAnimationFrame((()=>this.mark())))}disconnectedCallback(){var t;null==(t=this.ownerInput)||t.removeEventListener("input",this),f(this,h).disconnect()}mark(){const t=this.textContent||"",e=this.query;if(t===f(this,c)&&e===f(this,d))return;v(this,c,t),v(this,d,e),f(this,h).disconnect();let n=0;const i=document.createDocumentFragment();for(const s of(this.positions||b)(e,t)){if(Number(s)!==s||s<n||s>t.length)continue;""!==t.slice(n,s)&&i.appendChild(document.createTextNode(t.slice(n,s))),n=s+1;const e=document.createElement("mark");e.textContent=t[s],i.appendChild(e)}i.appendChild(document.createTextNode(t.slice(n))),this.replaceChildren(i),f(this,h).observe(this,{attributes:!0,childList:!0,subtree:!0})}}e(w,"MarkedTextElement"),c=new WeakMap,d=new WeakMap,h=new WeakMap,m=new WeakMap,w.observedAttributes=["query","data-owner-input"];window.customElements.get("marked-text")||(window.MarkedTextElement=w,window.customElements.define("marked-text",w));var E=i(40669);class y extends HTMLElement{connectedCallback(){this.addEventListener("input",x)}disconnectedCallback(){this.removeEventListener("input",x)}}function x(t){const e=t.currentTarget;if(!(e instanceof y))return;const n=t.target;if(!(n instanceof HTMLInputElement))return;const i=n.form;if(!(i instanceof HTMLFormElement))return;const s=L(n.value,{minimumCharacterCount:Number(e.getAttribute("minimum-character-count")),passphraseLength:Number(e.getAttribute("passphrase-length"))});if(s.valid){n.setCustomValidity("");const t=e.querySelector("dl.form-group");t&&(t.classList.remove("errored"),t.classList.add("successed"))}else n.setCustomValidity(e.getAttribute("invalid-message")||"Invalid");C(e,s),(0,E.G)(i)}function L(t,e){const n={valid:!1,hasMinimumCharacterCount:t.length>=e.minimumCharacterCount,hasMinimumPassphraseLength:0!==e.passphraseLength&&t.length>=e.passphraseLength,hasLowerCase:/[a-z]/.test(t),hasNumber:/\d/.test(t)};return n.valid=n.hasMinimumPassphraseLength||n.hasMinimumCharacterCount&&n.hasLowerCase&&n.hasNumber,n}function C(t,e){var n,i;const s=t.querySelector("[data-more-than-n-chars]"),r=t.querySelector("[data-min-chars]"),a=t.querySelector("[data-number-requirement]"),o=t.querySelector("[data-letter-requirement]"),l=(null==(n=t.getAttribute("error-class"))?void 0:n.split(" ").filter((t=>t.length>0)))||[],u=(null==(i=t.getAttribute("pass-class"))?void 0:i.split(" ").filter((t=>t.length>0)))||[];for(const t of[s,r,a,o])null==t||t.classList.remove(...l,...u);if(e.hasMinimumPassphraseLength&&s)s.classList.add(...u);else if(e.valid)r.classList.add(...u),a.classList.add(...u),o.classList.add(...u);else{const t=e.hasMinimumCharacterCount?u:l,n=e.hasNumber?u:l,i=e.hasLowerCase?u:l;null==s||s.classList.add(...l),r.classList.add(...t),a.classList.add(...n),o.classList.add(...i)}}e(y,"PasswordStrengthElement"),window.customElements.get("password-strength")||(window.PasswordStrengthElement=y,window.customElements.define("password-strength",y)),e(x,"onInput"),e(L,"validatePassword"),e(C,"highlightPasswordStrengthExplainer");i(97957);class k extends s.Z{async fetch(t,e=1e3){const n=await super.fetch(t);return 202===n.status?(await new Promise((t=>setTimeout(t,e))),this.fetch(t,1.5*e)):n}}e(k,"PollIncludeFragmentElement"),window.customElements.get("poll-include-fragment")||(window.PollIncludeFragmentElement=k,window.customElements.define("poll-include-fragment",k));var M=i(75329);class T extends M.nJ{connectedCallback(){_.push(this),A||(S(),A=window.setInterval(S,1e3))}disconnectedCallback(){const t=_.indexOf(this);-1!==t&&_.splice(t,1),_.length||(window.clearInterval(A),A=void 0)}getFormattedDate(){const t=this.date;if(!t)return;const e=(new Date).getTime()-t.getTime(),n=Math.floor(e/1e3),i=Math.floor(n/60),s=Math.floor(i/60),r=Math.floor(s/24),a=n-60*i,o=i-60*s,l=s-24*r;return i<1?this.applyPrecision([`${n}s`]):s<1?this.applyPrecision([`${i}m`,`${a}s`]):r<1?this.applyPrecision([`${s}h`,`${o}m`,`${a}s`]):this.applyPrecision([`${r}d`,`${l}h`,`${o}m`,`${a}s`])}applyPrecision(t){const e=Number(this.getAttribute("data-precision")||t.length);return t.slice(0,e).join(" ")}}e(T,"PreciseTimeAgoElement");const _=[];let A;function S(){for(const t of _)t.textContent=t.getFormattedDate()||""}e(S,"updateNowElements"),window.customElements.get("precise-time-ago")||(window.PreciseTimeAgoElement=T,window.customElements.define("precise-time-ago",T));var q=i(5638),P=i(57654),H=Object.defineProperty,I=Object.getOwnPropertyDescriptor,F=e(((t,e,n,i)=>{for(var s,r=i>1?void 0:i?I(e,n):e,a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&H(e,n,r),r}),"remote_pagination_element_decorateClass");let N=e(class extends HTMLElement{constructor(){super(...arguments),this.loaderWasFocused=!1}connectedCallback(){this.setPaginationUrl(this.list)}get hasNextPage(){return!this.form.hidden}loadNextPage(){!this.hasNextPage||(0,P.Bt)(this.form)}get disabled(){return this.submitButton.hasAttribute("aria-disabled")}set disabled(t){t?this.submitButton.setAttribute("aria-disabled","true"):this.submitButton.removeAttribute("aria-disabled"),this.submitButton.classList.toggle("disabled",t)}loadstart(t){t.target.addEventListener("focus",(()=>{this.loaderWasFocused=!0}),{once:!0}),t.target.addEventListener("include-fragment-replaced",(()=>{var t;this.setPaginationUrl(this.list),this.loaderWasFocused&&(null==(t=this.focusMarkers.pop())||t.focus()),this.loaderWasFocused=!1}),{once:!0})}async submit(t){var e;if(t.preventDefault(),this.disabled)return;let n;this.disabled=!0;try{const t=await fetch(this.form.action);if(!t.ok)return;n=await t.text()}catch{return}const i=(0,q.r)(document,n);this.setPaginationUrl(i),this.list.append(i),null==(e=this.focusMarkers.pop())||e.focus(),this.disabled=!1,this.dispatchEvent(new CustomEvent("remote-pagination-load"))}setPaginationUrl(t){const e=t.querySelector("[data-pagination-src]");if(!e)return;const n=e.getAttribute("data-pagination-src");n?(this.form.action=n,this.form.hidden=!1):this.form.hidden=!0}},"RemotePaginationElement");F([r.fA],N.prototype,"form",2),F([r.fA],N.prototype,"list",2),F([r.GO],N.prototype,"focusMarkers",2),F([r.fA],N.prototype,"submitButton",2),N=F([r.Ih],N);var j=i(10160);const B=/\s|\(|\[/;function W(t,e,n){const i=t.lastIndexOf(e,n-1);if(-1===i||t.lastIndexOf(" ",n-1)>i)return;const s=t[i-1];return s&&!B.test(s)?void 0:{word:t.substring(i+e.length,n),position:i+e.length,beginningOfLine:z(s)}}e(W,"keyword");const z=e((t=>void 0===t||/\n/.test(t)),"isBeginningOfLine"),V=["position:absolute;","overflow:auto;","word-wrap:break-word;","top:0px;","left:-9999px;"],O=["box-sizing","font-family","font-size","font-style","font-variant","font-weight","height","letter-spacing","line-height","max-height","min-height","padding-bottom","padding-left","padding-right","padding-top","border-bottom","border-left","border-right","border-top","text-decoration","text-indent","text-transform","width","word-spacing"],D=new WeakMap;function $(t,e){const n=t.nodeName.toLowerCase();if("textarea"!==n&&"input"!==n)throw new Error("expected textField to a textarea or input");let i=D.get(t);if(i&&i.parentElement===t.parentElement)i.innerHTML="";else{i=document.createElement("div"),D.set(t,i);const e=window.getComputedStyle(t),s=V.slice(0);"textarea"===n?s.push("white-space:pre-wrap;"):s.push("white-space:nowrap;");for(let t=0,n=O.length;t<n;t++){const n=O[t];s.push(`${n}:${e.getPropertyValue(n)};`)}i.style.cssText=s.join(" ")}const s=document.createElement("span");let r,a;if(s.style.cssText="position: absolute;",s.innerHTML="&nbsp;","number"==typeof e){let n=t.value.substring(0,e);n&&(r=document.createTextNode(n)),n=t.value.substring(e),n&&(a=document.createTextNode(n))}else{const e=t.value;e&&(r=document.createTextNode(e))}if(r&&i.appendChild(r),i.appendChild(s),a&&i.appendChild(a),!i.parentElement){if(!t.parentElement)throw new Error("textField must have a parentElement to mirror");t.parentElement.insertBefore(i,t)}return i.scrollTop=t.scrollTop,i.scrollLeft=t.scrollLeft,{mirror:i,marker:s}}function R(t,e=t.selectionEnd){const{mirror:n,marker:i}=$(t,e),s=n.getBoundingClientRect(),r=i.getBoundingClientRect();return setTimeout((()=>{n.remove()}),5e3),{top:r.top-s.top,left:r.left-s.left}}e($,"textFieldMirror"),e(R,"textFieldSelectionPosition");const G=new WeakMap;class U{constructor(t,e){this.expander=t,this.input=e,this.combobox=null,this.menu=null,this.match=null,this.justPasted=!1,this.oninput=this.onInput.bind(this),this.onpaste=this.onPaste.bind(this),this.onkeydown=this.onKeydown.bind(this),this.oncommit=this.onCommit.bind(this),this.onmousedown=this.onMousedown.bind(this),this.onblur=this.onBlur.bind(this),this.interactingWithMenu=!1,e.addEventListener("paste",this.onpaste),e.addEventListener("input",this.oninput),e.addEventListener("keydown",this.onkeydown),e.addEventListener("blur",this.onblur)}destroy(){this.input.removeEventListener("paste",this.onpaste),this.input.removeEventListener("input",this.oninput),this.input.removeEventListener("keydown",this.onkeydown),this.input.removeEventListener("blur",this.onblur)}activate(t,e){this.input===document.activeElement&&this.setMenu(t,e)}deactivate(){const t=this.menu,e=this.combobox;return!(!t||!e)&&(this.menu=null,this.combobox=null,t.removeEventListener("combobox-commit",this.oncommit),t.removeEventListener("mousedown",this.onmousedown),e.destroy(),t.remove(),!0)}setMenu(t,e){this.deactivate(),this.menu=e,e.id||(e.id=`text-expander-${Math.floor(1e5*Math.random()).toString()}`),this.expander.append(e);const n=e.querySelector(".js-slash-command-menu-items");this.combobox=n?new j.Z(this.input,n):new j.Z(this.input,e);const{top:i,left:s}=R(this.input,t.position),r=parseInt(window.getComputedStyle(this.input).fontSize);e.style.top=`${i+r}px`,e.style.left=`${s}px`,this.combobox.start(),e.addEventListener("combobox-commit",this.oncommit),e.addEventListener("mousedown",this.onmousedown),this.combobox.navigate(1)}setValue(t){if(null==t)return;const e=this.match;if(!e)return;const n=this.input.value.substring(0,e.position-e.key.length),i=this.input.value.substring(e.position+e.text.length);let{cursor:s,value:r}=this.replaceCursorMark(t);r=0===(null==r?void 0:r.length)?r:`${r} `,this.input.value=n+r+i,this.deactivate(),this.input.focus(),s=n.length+(s||r.length),this.input.selectionStart=s,this.input.selectionEnd=s}replaceCursorMark(t){const e=/%cursor%/gm,n=e.exec(t);return n?{cursor:n.index,value:t.replace(e,"")}:{cursor:null,value:t}}async onCommit({target:t}){const e=t;if(!(e instanceof HTMLElement&&this.combobox))return;const n=this.match;if(!n)return;const s={item:e,key:n.key,value:null},r=new CustomEvent("text-expander-value",{cancelable:!0,detail:s}),a=!this.expander.dispatchEvent(r),{onValue:o}=await i.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(i.bind(i,23800));await o(this.expander,n.key,e),!a&&s.value&&this.setValue(s.value)}onBlur(){this.interactingWithMenu?this.interactingWithMenu=!1:this.deactivate()}onPaste(){this.justPasted=!0}async delay(t){return new Promise((e=>setTimeout(e,t)))}async onInput(){if(this.justPasted)return void(this.justPasted=!1);const t=this.findMatch();if(t){if(this.match=t,await this.delay(this.appropriateDelay(this.match)),this.match!==t)return;const e=await this.notifyProviders(t);if(!this.match)return;e?this.activate(t,e):this.deactivate()}else this.match=null,this.deactivate()}appropriateDelay(t){return t.beginningOfLine||""!==t.text?0:250}findMatch(){const t=this.input.selectionEnd,e=this.input.value;for(const n of this.expander.keys){const i=W(e,n,t);if(i)return{text:i.word,key:n,position:i.position,beginningOfLine:i.beginningOfLine}}}async notifyProviders(t){const n=[],s=e((t=>n.push(t)),"provide"),r=new CustomEvent("text-expander-change",{cancelable:!0,detail:{provide:s,text:t.text,key:t.key}});if(!this.expander.dispatchEvent(r))return;const{onChange:a}=await i.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(i.bind(i,23800));return a(this.expander,t.key,s,t.text),(await Promise.all(n)).filter((t=>t.matched)).map((t=>t.fragment))[0]}onMousedown(){this.interactingWithMenu=!0}onKeydown(t){"Escape"===t.key&&this.deactivate()&&(t.stopImmediatePropagation(),t.preventDefault())}}e(U,"SlashCommandExpander");class Z extends HTMLElement{get keys(){const t=this.getAttribute("keys");return t?t.split(" "):[]}connectedCallback(){const t=this.querySelector('input[type="text"], textarea');if(!(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement))return;const e=new U(this,t);G.set(this,e)}disconnectedCallback(){const t=G.get(this);!t||(t.destroy(),G.delete(this))}setValue(t){const e=G.get(this);!e||e.setValue(t)}setMenu(t,e=!1){const n=G.get(this);!n||!n.match||(e&&(n.interactingWithMenu=!0),n.setMenu(n.match,t))}closeMenu(){const t=G.get(this);!t||t.setValue("")}isLoading(){const t=this.getElementsByClassName("js-slash-command-expander-loading")[0];if(t){const e=t.cloneNode(!0);e.classList.remove("d-none"),this.setMenu(e)}}showError(){const t=this.getElementsByClassName("js-slash-command-expander-error")[0];if(t){const e=t.cloneNode(!0);e.classList.remove("d-none"),this.setMenu(e)}}}e(Z,"SlashCommandExpanderElement"),window.customElements.get("slash-command-expander")||(window.SlashCommandExpanderElement=Z,window.customElements.define("slash-command-expander",Z));var X=Object.defineProperty,K=Object.getOwnPropertyDescriptor,J=e(((t,e,n,i)=>{for(var s,r=i>1?void 0:i?K(e,n):e,a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&X(e,n,r),r}),"text_suggester_element_decorateClass");let Q=e(class extends HTMLElement{acceptSuggestion(){var t;(null==(t=this.suggestion)?void 0:t.textContent)&&(this.input.value=this.suggestion.textContent,this.input.dispatchEvent(new Event("input")),this.suggestionContainer&&(this.suggestionContainer.hidden=!0),this.input.focus())}},"TextSuggesterElement");J([r.fA],Q.prototype,"input",2),J([r.fA],Q.prototype,"suggestionContainer",2),J([r.fA],Q.prototype,"suggestion",2),Q=J([r.Ih],Q);var Y,tt,et,nt,it,st,rt=e(((t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)}),"virtual_filter_input_element_accessCheck"),at=e(((t,e,n)=>(rt(t,e,"read from private field"),n?n.call(t):e.get(t))),"virtual_filter_input_element_privateGet"),ot=e(((t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)}),"virtual_filter_input_element_privateAdd"),lt=e(((t,e,n,i)=>(rt(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n)),"virtual_filter_input_element_privateSet");function ut(t){return Boolean(t instanceof Set||t&&"object"==typeof t&&"size"in t&&"add"in t&&"delete"in t&&"clear"in t)}e(ut,"isSetAlike");class ct extends HTMLElement{constructor(){super(...arguments),ot(this,Y,void 0),ot(this,tt,0),ot(this,et,null),ot(this,nt,void 0),ot(this,it,new Set),ot(this,st,null),this.filter=(t,e)=>String(t).includes(e)}static get observedAttributes(){return["src","loading","data-property","aria-owns"]}get filtered(){if(at(this,st))return at(this,st);if(this.hasAttribute("aria-owns")){const t=this.ownerDocument.getElementById(this.getAttribute("aria-owns")||"");t&&ut(t)&&lt(this,st,t)}return at(this,st)||lt(this,st,new Set)}set filtered(t){lt(this,st,t)}get input(){return this.querySelector("input, textarea")}get src(){return this.getAttribute("src")||""}set src(t){this.setAttribute("src",t)}get loading(){return"lazy"===this.getAttribute("loading")?"lazy":"eager"}set loading(t){this.setAttribute("loading",t)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",t)}get property(){return this.getAttribute("data-property")||""}set property(t){this.setAttribute("data-property",t)}reset(){this.filtered.clear(),lt(this,it,new Set)}clear(){!this.input||(this.input.value="",this.input.dispatchEvent(new Event("input")))}attributeChangedCallback(t,e,n){const i=this.isConnected&&this.src,s="eager"===this.loading,r="src"===t||"loading"===t||"accept"===t||"data-property"===t,a=e!==n;("src"===t||"data-property"===t)&&a&&(lt(this,et,null),at(this,nt)&&clearTimeout(at(this,nt))),i&&s&&r&&a?(cancelAnimationFrame(at(this,tt)),lt(this,tt,requestAnimationFrame((()=>this.load())))):"aria-owns"===t&&lt(this,st,null)}connectedCallback(){this.src&&"eager"===this.loading&&(cancelAnimationFrame(at(this,tt)),lt(this,tt,requestAnimationFrame((()=>this.load()))));const t=this.input;if(!t)return;const e=this.getAttribute("aria-owns");null!==e&&this.attributeChangedCallback("aria-owns","",e),t.setAttribute("autocomplete","off"),t.setAttribute("spellcheck","false"),this.src&&"lazy"===this.loading&&(document.activeElement===t?this.load():t.addEventListener("focus",(()=>{this.load()}),{once:!0})),t.addEventListener("input",this)}disconnectedCallback(){var t;null==(t=this.input)||t.removeEventListener("input",this)}handleEvent(t){var e,n;"input"===t.type&&(at(this,nt)&&clearTimeout(at(this,nt)),lt(this,nt,window.setTimeout((()=>this.filterItems()),(null==(n=null==(e=this.input)?void 0:e.value)||n.length,300))))}async load(){var t;null==(t=at(this,Y))||t.abort(),lt(this,Y,new AbortController);const{signal:e}=at(this,Y);if(!this.src)throw new Error("missing src");if(await new Promise((t=>setTimeout(t,0))),!e.aborted){this.dispatchEvent(new Event("loadstart"));try{const t=await this.fetch(this.request(),{signal:e});if(location.origin+this.src!==t.url)return;if(!t.ok)throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);lt(this,it,new Set((await t.json())[this.property])),lt(this,et,null),this.dispatchEvent(new Event("loadend"))}catch(t){if(e.aborted)return void this.dispatchEvent(new Event("loadend"));throw(async()=>{this.dispatchEvent(new Event("error")),this.dispatchEvent(new Event("loadend"))})(),t}this.filtered.clear(),this.filterItems()}}request(){return new Request(this.src,{method:"GET",credentials:"same-origin",headers:{Accept:this.accept||"application/json"}})}fetch(t,e){return fetch(t,e)}filterItems(){var t,e;const n=null!=(e=null==(t=this.input)?void 0:t.value.trim())?e:"",i=at(this,et);if(lt(this,et,n),n===i)return;let s;this.dispatchEvent(new CustomEvent("virtual-filter-input-filter")),i&&n.includes(i)?s=this.filtered:(s=at(this,it),this.filtered.clear());for(const t of s)this.filter(t,n)?this.filtered.add(t):this.filtered.delete(t);this.dispatchEvent(new CustomEvent("virtual-filter-input-filtered"))}}e(ct,"VirtualFilterInputElement"),Y=new WeakMap,tt=new WeakMap,et=new WeakMap,nt=new WeakMap,it=new WeakMap,st=new WeakMap;window.customElements.get("virtual-filter-input")||(window.VirtualFilterInputElement=ct,window.customElements.define("virtual-filter-input",ct));var dt,ht,mt,pt,ft,gt,vt,bt=e(((t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)}),"virtual_list_element_accessCheck"),wt=e(((t,e,n)=>(bt(t,e,"read from private field"),n?n.call(t):e.get(t))),"virtual_list_element_privateGet"),Et=e(((t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)}),"virtual_list_element_privateAdd"),yt=e(((t,e,n,i)=>(bt(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n)),"virtual_list_element_privateSet");class xt extends HTMLElement{constructor(){super(...arguments),Et(this,dt,!1),Et(this,ht,new Set),Et(this,mt,new Map),Et(this,pt,1/0),Et(this,ft,new Map),Et(this,gt,new Map),Et(this,vt,0)}static get observedAttributes(){return["data-updating"]}get updating(){return"lazy"===this.getAttribute("data-updating")?"lazy":"eager"}set updating(t){this.setAttribute("data-updating",t)}get size(){return wt(this,ht).size}get range(){const t=this.getBoundingClientRect().height,{scrollTop:e}=this,n=`${e}-${t}`;if(wt(this,ft).has(n))return wt(this,ft).get(n);let i=0,s=0,r=0,a=0;const o=wt(this,mt);for(const n of wt(this,ht)){const l=o.get(n)||wt(this,pt);if(r+l<e)r+=l,i+=1,s+=1;else if(a-l<t)a+=l,s+=1;else if(a>=t)break}return[i,s]}attributeChangedCallback(t,e,n){if(e===n||!this.isConnected)return;const i="data-updating"===t&&"eager"===n,s="data-sorted"===t&&this.hasAttribute("data-sorted");(i||s)&&this.update()}connectedCallback(){this.addEventListener("scroll",(()=>this.update())),this.updateSync=this.updateSync.bind(this)}update(){wt(this,vt)&&cancelAnimationFrame(wt(this,vt)),!wt(this,dt)&&this.hasAttribute("data-sorted")?yt(this,vt,requestAnimationFrame((()=>{this.dispatchEvent(new CustomEvent("virtual-list-sort",{cancelable:!0}))&&this.sort()}))):yt(this,vt,requestAnimationFrame(this.updateSync))}renderItem(t){const e={item:t,fragment:document.createDocumentFragment()};return this.dispatchEvent(new CustomEvent("virtual-list-render-item",{detail:e})),e.fragment.children[0]}recalculateHeights(t){const e=this.querySelector("ul, ol, tbody");e&&(e.append(this.renderItem(t)),yt(this,pt,e.children[0].getBoundingClientRect().height),wt(this,mt).set(t,wt(this,pt)),e.replaceChildren())}updateSync(){const t=this.querySelector("ul, ol");if(!t)return;const[e,n]=this.range;if(n<e||!this.dispatchEvent(new CustomEvent("virtual-list-update",{cancelable:!0})))return;const i=new Map,s=wt(this,gt);let r=-1,a=!0,o=0;for(const t of wt(this,ht)){if(-1===r&&(!Number.isFinite(wt(this,pt))||0===wt(this,pt))&&this.recalculateHeights(t),r+=1,r<e){o+=wt(this,mt).get(t)||wt(this,pt);continue}if(r>n){a=!1;break}let l=null;if(s.has(t))l=s.get(t);else{if(l=this.renderItem(t),!l)continue;s.set(t,l)}i.set(t,l)}t.replaceChildren(...i.values()),t.style.paddingTop=`${o}px`;const l=this.size*wt(this,pt);t.style.height=`${l||0}px`;let u=!1;const c=this.getBoundingClientRect().bottom;for(const[t,e]of i){const{height:n,bottom:i}=e.getBoundingClientRect();u=u||i>=c,wt(this,mt).set(t,n)}if(!a&&this.size>i.size&&!u)return wt(this,ft).delete(`${this.scrollTop}-${this.getBoundingClientRect().height}`),this.update();this.dispatchEvent(new CustomEvent("virtual-list-updated"))}has(t){return wt(this,ht).has(t)}add(t){return wt(this,ht).add(t),yt(this,dt,!1),Number.isFinite(wt(this,pt))||this.recalculateHeights(t),"eager"===this.updating&&this.update(),this}delete(t){const e=wt(this,ht).delete(t);return yt(this,dt,!1),wt(this,mt).delete(t),"eager"===this.updating&&this.update(),e}clear(){wt(this,ht).clear(),wt(this,mt).clear(),yt(this,pt,1/0),yt(this,dt,!0),"eager"===this.updating&&this.update()}forEach(t,e){for(const n of this)t.call(e,n,n,this)}entries(){return wt(this,ht).entries()}values(){return wt(this,ht).values()}keys(){return wt(this,ht).keys()}[Symbol.iterator](){return wt(this,ht)[Symbol.iterator]()}sort(t){return yt(this,ht,new Set(Array.from(this).sort(t))),yt(this,dt,!0),"eager"===this.updating&&this.update(),this}}e(xt,"VirtualListElement"),dt=new WeakMap,ht=new WeakMap,mt=new WeakMap,pt=new WeakMap,ft=new WeakMap,gt=new WeakMap,vt=new WeakMap;window.customElements.get("virtual-list")||(window.VirtualListElement=xt,window.customElements.define("virtual-list",xt));var Lt=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,kt=e(((t,e,n,i)=>{for(var s,r=i>1?void 0:i?Ct(e,n):e,a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i?s(e,n,r):s(r))||r);return i&&r&&Lt(e,n,r),r}),"visible_password_element_decorateClass");let Mt=e(class extends HTMLElement{show(){this.input.type="text",this.input.focus(),this.showButton.hidden=!0,this.hideButton.hidden=!1}hide(){this.input.type="password",this.input.focus(),this.hideButton.hidden=!0,this.showButton.hidden=!1}},"VisiblePasswordElement");kt([r.fA],Mt.prototype,"input",2),kt([r.fA],Mt.prototype,"showButton",2),kt([r.fA],Mt.prototype,"hideButton",2),Mt=kt([r.Ih],Mt)},63621:(t,n,i)=>{i.d(n,{H:()=>a,v:()=>r});var s=i(59753);function r(){const t=document.getElementById("ajax-error-message");t&&(t.hidden=!1)}function a(){const t=document.getElementById("ajax-error-message");t&&(t.hidden=!0)}e(r,"showGlobalError"),e(a,"hideGlobalError"),(0,s.on)("deprecatedAjaxError","[data-remote]",(function(t){const e=t.detail,{error:n,text:i}=e;t.currentTarget===t.target&&("abort"===n||"canceled"===n||(/<html/.test(i)?(r(),t.stopImmediatePropagation()):setTimeout((function(){t.defaultPrevented||r()}),0)))})),(0,s.on)("deprecatedAjaxSend","[data-remote]",(function(){a()})),(0,s.on)("click",".js-ajax-error-dismiss",(function(){a()}))},40669:(t,n,i)=>{i.d(n,{G:()=>d});var s=i(43721),r=i(64463),a=i(59753);const o=["input[pattern]","input[required]","textarea[required]","input[data-required-change]","textarea[data-required-change]","input[data-required-value]","textarea[data-required-value]"].join(",");function l(t){const e=t.getAttribute("data-required-value"),n=t.getAttribute("data-required-value-prefix");if(t.value===e)t.setCustomValidity("");else{let i=e;n&&(i=n+i),t.setCustomValidity(i)}}e(l,"checkValidityForRequiredValueField"),(0,s.q6)("[data-required-value]",(function(t){l(t.currentTarget)})),(0,a.on)("change","[data-required-value]",(function(t){const e=t.currentTarget;l(e),d(e.form)})),(0,s.q6)("[data-required-trimmed]",(function(t){const e=t.currentTarget;""===e.value.trim()?e.setCustomValidity(e.getAttribute("data-required-trimmed")):e.setCustomValidity("")})),(0,a.on)("change","[data-required-trimmed]",(function(t){const e=t.currentTarget;""===e.value.trim()?e.setCustomValidity(e.getAttribute("data-required-trimmed")):e.setCustomValidity(""),d(e.form)})),(0,s.ZG)(o,(t=>{let n=t.checkValidity();function i(){const e=t.checkValidity();e!==n&&t.form&&d(t.form),n=e}e(i,"inputHandler"),t.addEventListener("input",i),t.addEventListener("blur",e((function e(){t.removeEventListener("input",i),t.removeEventListener("blur",e)}),"blurHandler"))}));const u=new WeakMap;function c(t){u.get(t)||(t.addEventListener("change",(()=>d(t))),u.set(t,!0))}function d(t){const e=t.checkValidity();for(const n of t.querySelectorAll("button[data-disable-invalid]"))n.disabled=!e}e(c,"installHandlers"),e(d,"validate"),(0,r.N7)("button[data-disable-invalid]",{constructor:HTMLButtonElement,initialize(t){const e=t.form;e&&(c(e),t.disabled=!e.checkValidity())}}),(0,r.N7)("input[data-required-change], textarea[data-required-change]",(function(t){const n=t,i="radio"===n.type&&n.form?n.form.elements.namedItem(n.name).value:null;function s(t){const e=n.form;if(t&&"radio"===n.type&&e&&i)for(const t of e.elements.namedItem(n.name))t instanceof HTMLInputElement&&t.setCustomValidity(n.value===i?"unchanged":"");else n.setCustomValidity(n.value===(i||n.defaultValue)?"unchanged":"")}e(s,"customValidity"),n.addEventListener("input",s),n.addEventListener("change",s),s(),n.form&&d(n.form)})),document.addEventListener("reset",(function(t){if(t.target instanceof HTMLFormElement){const e=t.target;setTimeout((()=>d(e)))}}))},57654:(t,n,i)=>{i.d(n,{Bt:()=>l,DN:()=>d,KL:()=>p,Se:()=>c,qC:()=>f,sw:()=>h});var s=i(59753),r=i(2077),a=i(63621);function o(t,e,n){return t.dispatchEvent(new CustomEvent(e,{bubbles:!0,cancelable:n}))}function l(t,e){e&&(u(t,e),(0,r.j)(e)),o(t,"submit",!0)&&t.submit()}function u(t,e){if(!(t instanceof HTMLFormElement))throw new TypeError("The specified element is not of type HTMLFormElement.");if(!(e instanceof HTMLElement))throw new TypeError("The specified element is not of type HTMLElement.");if("submit"!==e.type)throw new TypeError("The specified element is not a submit button.");if(!t||t!==e.form)throw new Error("The specified element is not owned by the form element.")}function c(t,e){if("boolean"==typeof e){if(!(t instanceof HTMLInputElement))throw new TypeError("only checkboxes can be set to boolean value");t.checked=e}else{if("checkbox"===t.type)throw new TypeError("checkbox can't be set to string value");t.value=e}o(t,"change",!1)}function d(t,e){for(const n in e){const i=e[n],s=t.elements.namedItem(n);(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.value=i)}}function h(t){if(!(t instanceof HTMLElement))return!1;const e=t.nodeName.toLowerCase(),n=(t.getAttribute("type")||"").toLowerCase();return"select"===e||"textarea"===e||"input"===e&&"submit"!==n&&"reset"!==n||t.isContentEditable}function m(t){return new URLSearchParams(t)}function p(t,e){const n=new URLSearchParams(t.search),i=m(e);for(const[t,e]of i)n.append(t,e);return n.toString()}function f(t){return m(new FormData(t)).toString()}(0,s.on)("click",".js-remote-submit-button",(async function(t){const e=t.currentTarget.form;let n;t.preventDefault();try{n=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}n&&!n.ok&&(0,a.v)()})),e(o,"fire"),e(l,"requestSubmit"),e(u,"checkButtonValidity"),e(c,"changeValue"),e(d,"fillFormValues"),e(h,"isFormField"),e(m,"searchParamsFromFormData"),e(p,"combineGetFormSearchParams"),e(f,"serialize")},70462:(t,n,i)=>{i.d(n,{Z:()=>h});var s=i(47142);const r=e(((t,e,n)=>{if(!(0,s.CD)(t,e))return-1/0;const i=(0,s.Gs)(t,e);return i<n?-1/0:i}),"getScore"),a=e(((t,e,n)=>{t.innerHTML="";let i=0;for(const r of(0,s.m7)(e,n)){""!==n.slice(i,r)&&t.appendChild(document.createTextNode(n.slice(i,r))),i=r+1;const e=document.createElement("mark");e.textContent=n[r],t.appendChild(e)}t.appendChild(document.createTextNode(n.slice(i)))}),"highlightElement"),o=new WeakMap,l=new WeakMap,u=new WeakMap,c=e((t=>{if(!u.has(t)&&t instanceof HTMLElement){const e=(t.getAttribute("data-value")||t.textContent||"").trim();return u.set(t,e),e}return u.get(t)||""}),"getTextCache");class d extends HTMLElement{connectedCallback(){const t=this.querySelector("ul");if(!t)return;const e=new Set(t.querySelectorAll("li")),n=this.querySelector("input");n instanceof HTMLInputElement&&n.addEventListener("input",(()=>{this.value=n.value}));const i=new MutationObserver((t=>{let n=!1;for(const i of t)if("childList"===i.type&&i.addedNodes.length)for(const t of i.addedNodes)if(t instanceof HTMLLIElement&&!e.has(t)){const i=c(t);n=n||(0,s.CD)(this.value,i),e.add(t)}n&&this.sort()}));i.observe(t,{childList:!0});const r={handler:i,items:e,lazyItems:new Map,timer:null};l.set(this,r)}disconnectedCallback(){const t=l.get(this);t&&(t.handler.disconnect(),l.delete(this))}addLazyItems(t,e){const n=l.get(this);if(!n)return;const{lazyItems:i}=n,{value:r}=this;let a=!1;for(const n of t)i.set(n,e),a=a||Boolean(r)&&(0,s.CD)(r,n);a&&this.sort()}sort(){const t=o.get(this);t&&(t.aborted=!0);const n={aborted:!1};o.set(this,n);const{minScore:i,markSelector:s,maxMatches:d,value:h}=this,m=l.get(this);if(!m||!this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort",{cancelable:!0,detail:h})))return;const{items:p,lazyItems:f}=m,g=this.hasAttribute("mark-selector"),v=this.querySelector("ul");if(!v)return;const b=[];if(h){for(const t of p){const e=c(t),n=r(h,e,i);n!==-1/0&&b.push({item:t,score:n})}for(const[t,e]of f){const n=r(h,t,i);n!==-1/0&&b.push({text:t,render:e,score:n})}b.sort(((t,e)=>e.score-t.score)).splice(d)}else{let t=b.length;for(const e of p){if(t>=d)break;b.push({item:e,score:1}),t+=1}for(const[e,n]of f){if(t>=d)break;b.push({text:e,render:n,score:1}),t+=1}}requestAnimationFrame((()=>{if(n.aborted)return;const t=v.querySelector('input[type="radio"]:checked');v.innerHTML="";let i=0;const r=e((()=>{if(n.aborted)return;const e=Math.min(b.length,i+100),o=document.createDocumentFragment();for(let t=i;t<e;t+=1){const e=b[t];let n=null;if("render"in e&&"text"in e){const{render:t,text:i}=e;n=t(i),p.add(n),u.set(n,i),f.delete(i)}else"item"in e&&(n=e.item);n instanceof HTMLElement&&(g&&a(s&&n.querySelector(s)||n,g?h:"",c(n)),o.appendChild(n))}i=e;let l=!1;if(t instanceof HTMLInputElement)for(const e of o.querySelectorAll('input[type="radio"]:checked'))e instanceof HTMLInputElement&&e.value!==t.value&&(e.checked=!1,l=!0);if(v.appendChild(o),t&&l&&t.dispatchEvent(new Event("change",{bubbles:!0})),e<b.length)requestAnimationFrame(r);else{v.hidden=0===b.length;const t=this.querySelector("[data-fuzzy-list-show-on-empty]");t&&(t.hidden=b.length>0),this.dispatchEvent(new CustomEvent("fuzzy-list-sorted",{detail:b.length}))}}),"nextBatch");r()}))}get value(){return this.getAttribute("value")||""}set value(t){this.setAttribute("value",t)}get markSelector(){return this.getAttribute("mark-selector")||""}set markSelector(t){t?this.setAttribute("mark-selector",t):this.removeAttribute("mark-selector")}get minScore(){return Number(this.getAttribute("min-score")||0)}set minScore(t){Number.isNaN(t)||this.setAttribute("min-score",String(t))}get maxMatches(){return Number(this.getAttribute("max-matches")||1/0)}set maxMatches(t){Number.isNaN(t)||this.setAttribute("max-matches",String(t))}static get observedAttributes(){return["value","mark-selector","min-score","max-matches"]}attributeChangedCallback(t,e,n){if(e===n)return;const i=l.get(this);!i||(i.timer&&window.clearTimeout(i.timer),i.timer=window.setTimeout((()=>this.sort()),100))}}e(d,"FuzzyListElement");const h=d;window.customElements.get("fuzzy-list")||(window.FuzzyListElement=d,window.customElements.define("fuzzy-list",d))},43721:(t,n,i)=>{i.d(n,{ZG:()=>l,q6:()=>c,w4:()=>u});var s=i(8439);let r=!1;const a=new s.Z;function o(t){const e=t.target;if(e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE)for(const t of a.matches(e))t.data.call(null,e)}function l(t,e){r||(r=!0,document.addEventListener("focus",o,!0)),a.add(t,e),document.activeElement instanceof HTMLElement&&document.activeElement.matches(t)&&e(document.activeElement)}function u(t,n,i){function s(e){const n=e.currentTarget;!n||(n.removeEventListener(t,i),n.removeEventListener("blur",s))}e(s,"blurHandler"),l(n,(function(e){e.addEventListener(t,i),e.addEventListener("blur",s)}))}function c(t,n){function i(t){const{currentTarget:e}=t;!e||(e.removeEventListener("input",n),e.removeEventListener("blur",i))}e(i,"blurHandler"),l(t,(function(t){t.addEventListener("input",n),t.addEventListener("blur",i)}))}e(o,"handleFocus"),e(l,"onFocus"),e(u,"onKey"),e(c,"onInput")},5638:(t,n,i)=>{function s(t,e){const n=t.createElement("template");return n.innerHTML=e,t.importNode(n.content,!0)}i.d(n,{r:()=>s}),e(s,"parseHTML")},97957:(t,n,i)=>{i.d(n,{X:()=>r});var s=i(64463);function r(){return/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null}function a(t){const e=(t.getAttribute("data-platforms")||"").split(","),n=r();return Boolean(n&&e.includes(n))}e(r,"getPlatform"),e(a,"runningOnPlatform"),(0,s.N7)(".js-remove-unless-platform",(function(t){a(t)||t.remove()}))},2077:(t,n,i)=>{function s(t){const e=t.closest("form");if(!(e instanceof HTMLFormElement))return;let n=r(e);if(t.name){const i=t.matches("input[type=submit]")?"Submit":"",s=t.value||i;n||(n=document.createElement("input"),n.type="hidden",n.classList.add("is-submit-button-value"),e.prepend(n)),n.name=t.name,n.value=s}else n&&n.remove()}function r(t){const e=t.querySelector("input.is-submit-button-value");return e instanceof HTMLInputElement?e:null}i.d(n,{j:()=>s,u:()=>r}),e(s,"persistSubmitButtonValue"),e(r,"findPersistedSubmitButtonValue")}},t=>{var n=e((e=>t(t.s=e)),"__webpack_exec__");t.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js","vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe","vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-c7e9ed","vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_time-elements_dist_index_js","vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-52e104"],(()=>n(15825)));t.O()}])})();