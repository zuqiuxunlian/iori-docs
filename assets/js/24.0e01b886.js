(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{278:function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"a",(function(){return s})),e.d(n,"i",(function(){return u})),e.d(n,"f",(function(){return a})),e.d(n,"g",(function(){return l})),e.d(n,"h",(function(){return c})),e.d(n,"b",(function(){return f})),e.d(n,"e",(function(){return h})),e.d(n,"k",(function(){return p})),e.d(n,"l",(function(){return d})),e.d(n,"c",(function(){return b})),e.d(n,"j",(function(){return m}));e(41),e(14),e(20),e(63),e(40);const r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,u=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function a(t){return u.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(a(t))return t;const n=t.match(r),e=n?n[0]:"",i=o(t);return s.test(i)?t:i+".html"+e}function h(t,n){const e=decodeURIComponent(t.hash),i=function(t){const n=t.match(r);if(n)return n[0]}(n);if(i&&e!==i)return!1;return o(t.path)===o(n)}function p(t,n,e){if(a(n))return{type:"external",path:n};e&&(n=function(t,n,e){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return n+t;const i=n.split("/");e&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const n=s[t];".."===n?i.pop():"."!==n&&i.push(n)}""!==i[0]&&i.unshift("");return i.join("/")}(n,e));const r=o(n);for(let n=0;n<t.length;n++)if(o(t[n].regularPath)===r)return Object.assign({},t[n],{type:"page",path:f(t[n].path)});return console.error(`[vuepress] No matching page found for sidebar item "${n}"`),{}}function d(t,n,e,r){const{pages:i,themeConfig:s}=e,u=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||u.sidebar||s.sidebar))return g(t);const o=u.sidebar||s.sidebar;if(o){const{base:e,config:r}=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(const r in n)if(0===(e=t,/(\.html|\/)$/.test(e)?e:e+"/").indexOf(encodeURI(r)))return{base:r,config:n[r]};var e;return{}}(n,o);return"auto"===r?g(t):r?r.map(t=>function t(n,e,r,i=1){if("string"==typeof n)return p(e,n,r);if(Array.isArray(n))return Object.assign(p(e,n[0],r),{title:n[1]});{const s=n.children||[];return 0===s.length&&n.path?Object.assign(p(e,n.path,r),{title:n.title}):{type:"group",path:n.path,title:n.title,sidebarDepth:n.sidebarDepth,initialOpenGroupIndex:n.initialOpenGroupIndex,children:s.map(n=>t(n,e,r,i+1)),collapsable:!1!==n.collapsable}}}(t,i,e)):[]}return[]}function g(t){const n=b(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:n.map(n=>({type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}))}]}function b(t){let n;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)}),t.filter(t=>2===t.level)}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},280:function(t,n,e){"use strict";e.r(n);e(14),e(62);var r=e(278),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(r.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},s=e(25),u=Object(s.a)(i,(function(){var t=this,n=t._self._c;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(n){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);n.default=u.exports}}]);