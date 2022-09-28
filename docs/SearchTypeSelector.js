!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.geonorge=t():(e.geonorge=e.geonorge||{},e.geonorge.SearchTypeSelector=t())}(self,(()=>(()=>{"use strict";var e={372:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var o=n(4663),r=n.n(o),a=n(7638),s=n.n(a)()(r());s.push([e.id,'div.search-type-selector{width:180px}div.search-type-selector label{font-size:14px;display:block;cursor:pointer}div.search-type-selector label .search-type-counter{font-size:.9em}div.search-type-selector label .search-type-counter::before{content:"("}div.search-type-selector label .search-type-counter::after{content:")"}div.search-type-selector input[type=radio]{-webkit-appearance:none;appearance:none;margin:0;font:inherit;color:currentColor;width:1.2em;height:1.1em;border:.15em solid #7d746d;border-radius:50%;transform:translateY(-0.075em);display:inline-grid;place-content:center}div.search-type-selector input[type=radio]::before{content:"";width:.6em;height:.6em;border-radius:50%;transform:scale(0);transition:120ms transform ease-in-out}div.search-type-selector input[type=radio]:checked{border-color:#3767c7}div.search-type-selector input[type=radio]:checked::before{transform:scale(1);background-color:#3767c7}div.search-type-selector input[type=radio]:focus-visible{outline:max(2px,.1em) solid #3767c7;outline-offset:max(2px,.1em)}',"",{version:3,sources:["webpack://./custom-elements/main-navigation/search-type-selector/search-type-selector.scss","webpack://./style/variables/_colors.scss"],names:[],mappings:"AAEA,yBACI,WAAA,CACA,+BACI,cAAA,CACA,aAAA,CACA,cAAA,CAEA,oDACI,cAAA,CACA,4DACI,WAAA,CAEJ,2DACI,WAAA,CAIZ,2CACI,uBAAA,CACA,eAAA,CACA,QAAA,CACA,YAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CACA,0BAAA,CACA,iBAAA,CACA,8BAAA,CACA,mBAAA,CACA,oBAAA,CAGJ,mDACI,UAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,kBAAA,CACA,sCAAA,CAGJ,mDACI,oBC9BO,CD+BP,2DACI,kBAAA,CACA,wBCjCG,CDqCX,yDACI,mCAAA,CACA,4BAAA",sourcesContent:['@import "../../../style/all";\n\ndiv.search-type-selector {\n    width: 180px;\n    label {\n        font-size: 14px;\n        display: block;\n        cursor: pointer;\n\n        .search-type-counter {\n            font-size: 0.9em;\n            &::before {\n                content: "(";\n            }\n            &::after {\n                content: ")";\n            }\n        }\n    }\n    input[type="radio"] {\n        -webkit-appearance: none;\n        appearance: none;\n        margin: 0;\n        font: inherit;\n        color: currentColor;\n        width: 1.2em;\n        height: 1.1em;\n        border: 0.15em solid rgb(125, 116, 109);\n        border-radius: 50%;\n        transform: translateY(-0.075em);\n        display: inline-grid;\n        place-content: center;\n    }\n\n    input[type="radio"]::before {\n        content: "";\n        width: 0.6em;\n        height: 0.6em;\n        border-radius: 50%;\n        transform: scale(0);\n        transition: 120ms transform ease-in-out;\n    }\n\n    input[type="radio"]:checked {\n        border-color: $primary-text;\n        &::before {\n            transform: scale(1);\n            background-color: $primary-text;\n        }\n    }\n\n    input[type="radio"]:focus-visible {\n        outline: max(2px, 0.1em) solid $primary-text;\n        outline-offset: max(2px, 0.1em);\n    }\n}\n',"$body-background: #ffffff;\n$navigation-bar-background:  #f7f7f7;\n$hover-background: rgba(0,0,0,.05);\n$default-border: #d8d8d8;\n\n$default-background: #eee;\n$default-background-hover: #ddd;\n$default-text:#2F3940;\n\n$primary-brand: #FE5000;\n$secondary-brand: #4C7AA9;\n\n$primary-background: #4C7AA9;\n$primary-background-hover: #FE5000;\n$primary-text: #3767C7;\n$primary-text-hover:#0056b3;\n\n\n$success-background: #06A755;\n$success-background-hover: #009745;\n$success-text: #06A755;\n\n\n$warning-background: #C38621;\n$warning-background-hover: #B37611;\n$warning-text: #C38621;\n\n$danger-background: #E00d0D;\n$danger-background-hover: #D00000;\n$danger-text: #E00d0D;\n\n$disabled-background: #ffffff;\n$disabled-text: #d8d8d8;\n"],sourceRoot:""}]);const c=s},3650:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o='<template>\n    <div id="search-type-selector" class="search-type-selector">\n        <label for="search-type-metadata">\n            <input name="search-type" type="radio" id="search-type-metadata" value="metadata" />\n            <span id="search-type-metadata-name">Kartkatalogen</span>\n            <span id="search-type-metadata-counter" class="search-type-counter"></span>\n        </label>\n        <label for="search-type-article">\n            <input name="search-type" type="radio" id="search-type-article" value="articles" />\n            <span id="search-type-article-name">Artikler</span>\n            <span id="search-type-article-counter" class="search-type-counter"></span>\n        </label>\n    </div>\n</template>'},7638:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&s[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},4663:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */"),s=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(s).concat([a]).join("\n")}return[t].join("\n")}},1397:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{i(o.next(e))}catch(e){a(e)}}function c(e){try{i(o.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}i((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;const r=n(5969),a=n(5773),s=n(3804);t.Component=e=>t=>{var n;const c=e.tag||s.toKebabCase(t.prototype.constructor.name),i=((n=class extends t{constructor(){super(),this.props={},this.showShadowRoot=null==e.shadow||e.shadow,!this.shadowRoot&&this.showShadowRoot&&this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(this.propsInit||{}).map((e=>s.toKebabCase(e)))}attributeChangedCallback(e,t,n){this.onAttributeChange(e,t,n)}onAttributeChange(e,t,n,o=!0){if(t!=n){o&&(this[s.toCamelCase(e)]=n);const r=this.constructor.watchAttributes;if(r&&r[e]){const o=r[e];this.__connected&&"function"==typeof this[o]&&this[o]({old:t,new:n})}}}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){yield this.render(),e.connectedCallback&&e.connectedCallback.call(this),this.__connected=!0,r.addEventListeners(this),a.initializeProps(this)}))}render(){return o(this,void 0,void 0,(function*(){if(this.__connected)return;const t=document.createElement("template");t.innerHTML=yield this.getStyle(),e.template instanceof Promise?t.content.appendChild(yield this.getExternalTemplate()):"string"==typeof e.template&&(t.innerHTML+=e.template),(this.showShadowRoot?this.shadowRoot:this).appendChild(t.content.cloneNode(!0))}))}getExternalTemplate(){return o(this,void 0,void 0,(function*(){const t=(yield e.template).default.toString(),n=document.createRange().createContextualFragment(t);return 1===n.children.length&&"TEMPLATE"===n.children[0].nodeName?n.firstChild.content:n}))}getStyle(){return o(this,void 0,void 0,(function*(){let t;return e.style instanceof Promise?t=(yield e.style).default.toString():"string"==typeof e.style&&(t=e.style),t?`<style>${t}</style>`:""}))}}).__connected=!1,n.ready=new Promise(((e,t)=>e(!0))),n);return customElements.get(c)||customElements.define(c,i),i}},985:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CustomElement=void 0;class n extends HTMLElement{constructor(){super()}connect(e){this.isConnected||document.querySelector(e).appendChild(this)}}t.CustomElement=n},265:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getShadowRootElement=t.getElement=void 0,t.getElement=e=>document.querySelector(e),t.getShadowRootElement=(e,t)=>e.shadowRoot.querySelector(t)},406:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(1397),t),r(n(985),t),r(n(265),t),r(n(5969),t),r(n(5773),t),r(n(4271),t),r(n(9766),t),r(n(4938),t)},5969:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Dispatch=t.addEventListeners=t.Listen=void 0;const o=n(3804);t.Listen=(e,t)=>(n,o)=>{n.constructor.listeners||(n.constructor.listeners=[]),n.constructor.listeners.push({selector:t,eventName:e,handler:n[o]})},t.addEventListeners=e=>{if(e.constructor.listeners){const t=e.shadowRoot||e;for(const n of e.constructor.listeners){const o=n.selector?t.querySelector(n.selector)?t.querySelector(n.selector):null:e;o&&o.addEventListener(n.eventName,(t=>{n.handler.call(e,t)}))}}},t.Dispatch=e=>(t,n)=>{Object.defineProperty(t,n,{get:function(){const t=this;return{emit(r){const a=e||o.toDotCase(n);t.dispatchEvent(new CustomEvent(a,r))}}}})}},5773:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initializeProps=t.Prop=void 0;const o=n(3804);t.Prop=()=>(e,t)=>{const n=o.toKebabCase(t);e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null,Object.defineProperty(e,t,{get:function(){return this.props[t]?this.props[t]:this.getAttribute(n)},set:function(e){if(this.__connected){const r=this.props[t];this.props[t]=o.tryParseInt(e),"object"!=typeof e?this.setAttribute(n,e):this.onAttributeChange(n,r,e,!1)}else this.hasAttribute(o.toKebabCase(t))||(this.constructor.propsInit[t]=e)}})},t.initializeProps=e=>{const t=e.constructor.watchAttributes;for(let n of(e=>{const t=e.constructor.watchAttributes,n=Object.assign({},t);Object.keys(n).forEach((e=>n[e]=""));const o=Object.assign(Object.assign({},n),e.constructor.propsInit);return Object.keys(o)})(e)){if(t)if(null==t[o.toKebabCase(n)])t[o.toKebabCase(n)]="";else{const r=e.props[n]||e.getAttribute(o.toKebabCase(n));"function"==typeof e[t[n]]&&e[t[n]]({new:r})}e.constructor.propsInit[n]&&(e.hasAttribute(o.toKebabCase(n))||(e[n]=e.constructor.propsInit[n]))}}},4271:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Toggle=void 0;const o=n(3804);t.Toggle=()=>(e,t)=>{e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null,Object.defineProperty(e,t,{get:function(){return(e=>{if(this.hasAttribute(e)){const t=this.getAttribute(e);return!!/^(true|false|^$)$/.test(t)&&("true"==t||""==t)}return!1})(t)},set:function(e){const n=e;if(null!=e)switch(typeof e){case"boolean":break;case"string":/^(true|false|^$)$/.test(e)?e="true"==n||""==n:(console.warn(`TypeError: Cannot set boolean toggle property '${t}' to '${e}'`),e=!1);break;default:throw`TypeError: Cannot set boolean toggle property '${t}' to '${e}'`}this.__connected?(this.props[t]=e||!1,""!==n&&null!==n?this.setAttribute(t,e):e?this.setAttribute(t,""):this.removeAttribute(t)):this.hasAttribute(o.toKebabCase(t))||(this.constructor.propsInit[t]=e)}})}},9766:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3804:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tryParseInt=t.toDotCase=t.toCamelCase=t.toKebabCase=void 0,t.toKebabCase=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),t.toCamelCase=e=>e.toLowerCase().replace(/(\-\w)/g,(e=>e[1].toUpperCase())),t.toDotCase=e=>e.replace(/(?!^)([A-Z])/g," $1").replace(/[_\s]+(?=[a-zA-Z])/g,".").toLowerCase(),t.tryParseInt=e=>parseInt(e)==e&&NaN!==parseFloat(e)?parseInt(e):e},4938:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;const o=n(3804);t.Watch=e=>(t,n)=>{t.constructor.watchAttributes||(t.constructor.watchAttributes={}),t.constructor.watchAttributes[o.toKebabCase(e)]=n,t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null}},8310:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.SearchTypeSelector=void 0;const c=n(406);let i=class extends c.CustomElement{constructor(){super(),this.handleSearchTypeOnChange=this.handleSearchTypeOnChange.bind(this)}setup(e){this.connect(e.container),e.id&&(this.id=e.id)}connectedCallback(){this.searchTypeSelector=(0,c.getShadowRootElement)(this,"#search-type-selector"),this.metadataNameElement=(0,c.getShadowRootElement)(this,"#search-type-metadata-name"),this.metadataCounterElement=(0,c.getShadowRootElement)(this,"#search-type-metadata-counter"),this.articleNameElement=(0,c.getShadowRootElement)(this,"#search-type-article-name"),this.articleCounterElement=(0,c.getShadowRootElement)(this,"#search-type-article-counter"),this.searchTypeSelector.querySelectorAll("input[name=search-type]").forEach((e=>{e.onchange=this.handleSearchTypeOnChange})),this.searchTypeSelector.querySelector(`input[value=${this.searchtype}]`)}disconnectedCallback(){}updateNameElements(e){this.metadataNameElement.innerHTML="en"===e?"Map catalog":"Kartkatalogen",this.articleNameElement.innerHTML="en"===e?"Articles":"Artikler"}handleSearchTypeOnChange(e){if(this.onSearchTypeChange){const t=e.composedPath()[0];this.onSearchTypeChange.emit({detail:{value:t.value}})}}languageChanged(){this.updateNameElements(this.language)}metadataResultsFoundChanged(){this.metadataCounterElement.innerHTML=this.metadataresultsfound}articlesResultsFoundChanged(){this.articleCounterElement.innerHTML=this.articlesresultsfound}searchTypeChanged(){const e=this.searchTypeSelector.querySelector(`input[value=${this.searchtype}]`);e&&(e.checked=!0)}static setup(e,t){(0,c.getElement)(e)}};i.elementSelector="search-type-selector",a([(0,c.Prop)()],i.prototype,"id",void 0),a([(0,c.Prop)()],i.prototype,"metadataresultsfound",void 0),a([(0,c.Prop)()],i.prototype,"articlesresultsfound",void 0),a([(0,c.Prop)()],i.prototype,"language",void 0),a([(0,c.Prop)()],i.prototype,"searchtype",void 0),a([(0,c.Dispatch)("onSearchTypeChange")],i.prototype,"onSearchTypeChange",void 0),a([(0,c.Watch)("language")],i.prototype,"languageChanged",null),a([(0,c.Watch)("metadataresultsfound")],i.prototype,"metadataResultsFoundChanged",null),a([(0,c.Watch)("articlesresultsfound")],i.prototype,"articlesResultsFoundChanged",null),a([(0,c.Watch)("searchtype")],i.prototype,"searchTypeChanged",null),i=a([(0,c.Component)({tag:"search-type-selector",template:Promise.resolve().then((()=>s(n(3650)))),style:Promise.resolve().then((()=>s(n(372))))})],i),t.SearchTypeSelector=i}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(8310)})()));
//# sourceMappingURL=SearchTypeSelector.js.map