"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[259],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3902:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={id:"update",title:"Auto Update",sidebar_label:"Auto Update"},c=void 0,p={unversionedId:"update",id:"update",isDocsHomePage:!1,title:"Auto Update",description:"You can now setup auto updates for the skill and its easy to do so. Open a terminal on your device and type the following command.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/update.md",sourceDirName:".",slug:"/update",permalink:"/es/docs/update",editUrl:"https://translate.andrewstech.me/project/alpha-video/es",version:"current",frontMatter:{id:"update",title:"Auto Update",sidebar_label:"Auto Update"},sidebar:"someSidebar",previous:{title:"Pyinit_main error",permalink:"/es/docs/doc6"},next:{title:"Build",permalink:"/es/docs/build"}},l=[],s={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can now setup auto updates for the skill and its easy to do so. Open a terminal on your device and type the following command.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker run -d --name dockupdater --restart unless-stopped -v /var/run/docker.sock:/var/run/docker.sock dockupdater/dockupdater"),"."))}d.isMDXComponent=!0}}]);