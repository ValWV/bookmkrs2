"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function t(e){if(e&&e.__esModule)return e;var t={};return e&&Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t.default=e,t}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("react"),n=e(r),o=e(require("prop-types")),i=e(require("uniqid")),l=require("react-dom"),s=require("browser-or-node");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?h(e):t}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return S(this,r)}}function w(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=r.createContext(),_=function(e){return"react_lightgallery_".concat(e)},$=function(e){g(o,r.Component);var t=j(o);function o(){var e;c(this,o);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return p(h(e=t.call.apply(t,[this].concat(n))),"state",{id:i()}),p(h(e),"register",(function(){var t=e.props,r=t.src,n=t.thumb,o=void 0===n?r:n,i=t.subHtml,l=void 0===i?"":i,s=t.downloadUrl,u=void 0===s?"":s;e.context.registerPhoto(e.state.id,e.props.group,{src:r,thumb:o,subHtml:l,downloadUrl:u})})),p(h(e),"unregister",(function(){e.context.unregisterPhoto(e.state.id,e.props.group)})),p(h(e),"open",(function(){e.context.openGallery(e.state.id,e.props.group)})),e}return f(o,[{key:"componentDidMount",value:function(){this.register()}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"render",value:function(){var e=this.props,t=e.itemClassName,r=void 0===t?_("item"):t,o=e.children;return n.createElement("div",{className:r,onClick:this.open},o)}}]),o}();p($,"propTypes",{children:o.any,group:o.string.isRequired,src:o.string.isRequired,thumb:o.string,subHtml:o.oneOfType([o.string,o.object]),downloadUrl:o.string,itemClassName:o.string}),p($,"contextType",P);var x=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function C(e,t){return e(t={exports:{}},t.exports),t.exports}var E="object"==typeof L&&L&&L.Object===Object&&L,M="object"==typeof self&&self&&self.Object===Object&&self,T=E||M||Function("return this")(),U=function(){return T.Date.now()},G=T.Symbol,D=Object.prototype,N=D.hasOwnProperty,A=D.toString,B=G?G.toStringTag:void 0;var I=function(e){var t=N.call(e,B),r=e[B];try{e[B]=void 0;var n=!0}catch(e){}var o=A.call(e);return n&&(t?e[B]=r:delete e[B]),o},R=Object.prototype.toString;var q=function(e){return R.call(e)},F=G?G.toStringTag:void 0;var k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":F&&F in Object(e)?I(e):q(e)};var z=function(e){return null!=e&&"object"==typeof e};var V=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==k(e)},W=/^\s+|\s+$/g,H=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,K=parseInt;var Q=function(e){if("number"==typeof e)return e;if(V(e))return NaN;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(W,"");var r=J.test(e);return r||Y.test(e)?K(e.slice(2),r?2:8):H.test(e)?NaN:+e},X=Math.max,Z=Math.min;var ee=function(e,t,r){var n,o,i,l,s,u,c=0,a=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var r=n,i=o;return n=o=void 0,c=t,l=e.apply(i,r)}function d(e){return c=e,s=setTimeout(g,t),a?y(e):l}function m(e){var r=e-u;return void 0===u||r>=t||r<0||f&&e-c>=i}function g(){var e=U();if(m(e))return b(e);s=setTimeout(g,function(e){var r=t-(e-u);return f?Z(r,i-(e-c)):r}(e))}function b(e){return s=void 0,p&&n?y(e):(n=o=void 0,l)}function v(){var e=U(),r=m(e);if(n=arguments,o=this,u=e,r){if(void 0===s)return d(u);if(f)return clearTimeout(s),s=setTimeout(g,t),y(u)}return void 0===s&&(s=setTimeout(g,t)),l}return t=Q(t)||0,x(r)&&(a=!!r.leading,i=(f="maxWait"in r)?X(Q(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=u=o=s=void 0},v.flush=function(){return void 0===s?l:b(U())},v},te=function(e){g(i,r.Component);var o=j(i);function i(){var e;c(this,i);for(var n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];return p(h(e=o.call.apply(o,[this].concat(l))),"gallery_element",r.createRef()),p(h(e),"_groups",{}),p(h(e),"_listeners",{}),p(h(e),"_will_unmount",!1),p(h(e),"_forceUpdate",ee(e.forceUpdate,50)),p(h(e),"loadLightgalleryJS",(function(){var r=e.props,n=r.plugins,o=r.onLightgalleryImport;s.isBrowser&&!window.lgData&&Promise.resolve().then((function(){return t(require("lightgallery.js"))})).then((function(){n.includes("lg-autoplay.js")&&Promise.resolve().then((function(){return t(require("lg-autoplay.js"))})).then(),n.includes("lg-fullscreen.js")&&Promise.resolve().then((function(){return t(require("lg-fullscreen.js"))})).then(),n.includes("lg-hash.js")&&Promise.resolve().then((function(){return t(require("lg-hash.js"))})).then(),n.includes("lg-pager.js")&&Promise.resolve().then((function(){return t(require("lg-pager.js"))})).then(),n.includes("lg-thumbnail.js")&&Promise.resolve().then((function(){return t(require("lg-thumbnail.js"))})).then(),n.includes("lg-video.js")&&Promise.resolve().then((function(){return t(require("lg-video.js"))})).then(),n.includes("lg-zoom.js")&&Promise.resolve().then((function(){return t(require("lg-zoom.js"))})).then(),n.includes("lg-share.js")&&Promise.resolve().then((function(){return t(require("lg-share.js"))})).then(),o&&o()}))})),p(h(e),"destroy",(function(){e._will_unmount=!0,e._forceUpdate.cancel(),e.destroyExistGallery()})),p(h(e),"getLgUid",(function(){if(e.gallery_element.current)return e.gallery_element.current.getAttribute("lg-uid")})),p(h(e),"hasGroup",(function(t){return e._groups.hasOwnProperty(t)})),p(h(e),"registerPhoto",(function(t,r,n){e._groups=m(m({},e._groups),{},p({},r,[].concat(w(e._groups[r]||[]),[m(m({},n),{},{uid:t})]))),e._forceUpdate()})),p(h(e),"unregisterPhoto",(function(t,r){e._will_unmount||(e._groups=m(m({},e._groups),{},p({},r,e._groups[r].filter((function(e){return e.uid!==t})))),e._forceUpdate())})),p(h(e),"getLightgalleryObject",(function(){return window.lgData[e.getLgUid()]})),p(h(e),"destroyExistGallery",(function(){"object"===("undefined"==typeof window?"undefined":u(window))&&window.lgData&&window.lgData[e.getLgUid()]&&(e.removeListeners(),e.getLightgalleryObject().destroy(!0))})),p(h(e),"setUpListener",(function(t,r){var n=function(n){e.props[t]&&e.props[t](n,e.getLightgalleryObject()),r&&r()};e.gallery_element.current.addEventListener(t,n),e._listeners[t]&&console.error("Event ".concat(t," already exist in _listeners")),e._listeners[t]=n})),p(h(e),"removeListener",(function(t){var r=e.gallery_element.current;e._listeners[t]&&(r.removeEventListener(t,e._listeners[t]),delete e._listeners[t])})),p(h(e),"removeListeners",(function(){for(var t in e._listeners)e.removeListener(t)})),p(h(e),"setupListeners",(function(){e.setUpListener("onBeforeOpen"),e.setUpListener("onAfterOpen"),e.setUpListener("onSlideItemLoad"),e.setUpListener("onBeforeSlide"),e.setUpListener("onAfterSlide"),e.setUpListener("onBeforePrevSlide"),e.setUpListener("onBeforeNextSlide"),e.setUpListener("onDragstart"),e.setUpListener("onDragmove"),e.setUpListener("onDragend"),e.setUpListener("onSlideClick"),e.setUpListener("onBeforeClose"),e.setUpListener("onCloseAfter",(function(){setTimeout((function(){e.destroyExistGallery()}),0)}))})),p(h(e),"getGroupByName",(function(t){if(e.hasGroup(t))return e._groups[t];console.error("Trying to open undefined group with name '".concat(t,"'"))})),p(h(e),"openGallery",(function(t,r){var n=e.getGroupByName(r),o=Math.max(n.findIndex((function(e){return e.uid===t})),0);e.openGalleryByIndex(o,r)})),p(h(e),"openGalleryByIndex",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1?arguments[1]:void 0;if(e.gallery_element.current){e.destroyExistGallery();var n=e.getGroupByName(r);lightGallery(e.gallery_element.current,m(m({},e.props.lightgallerySettings||{}),{},{dynamic:!0,dynamicEl:n,index:t})),e.setupListeners()}else console.error("Error on trying to open gallery; ref 'gallery_element' is not defined")})),e}return f(i,[{key:"componentDidMount",value:function(){this.loadLightgalleryJS()}},{key:"componentWillUnmount",value:function(){this.destroy()}},{key:"render",value:function(){var e=this.props,t=e.galleryClassName,r=void 0===t?_("gallery"):t,o=e.portalElementSelector,i=null;if(s.isBrowser&&(i=document.body,o)){var u=document.querySelector(o);u||console.error("There is cannot to find element by selector: `${portalElementSelector}` lightgallery element will be added to document.body"),i=u}return n.createElement(P.Provider,{value:{registerPhoto:this.registerPhoto,unregisterPhoto:this.unregisterPhoto,openGallery:this.openGallery,openGalleryByIndex:this.openGalleryByIndex,hasGroup:this.hasGroup}},this.props.children,i&&l.createPortal(n.createElement("div",{className:r,ref:this.gallery_element}),i))}}]),i}();p(te,"defaultProps",{plugins:["lg-fullscreen.js","lg-thumbnail.js","lg-video.js","lg-zoom.js"]}),p(te,"propTypes",{children:o.any,plugins:o.arrayOf(o.oneOf(["lg-autoplay.js","lg-fullscreen.js","lg-hash.js","lg-pager.js","lg-thumbnail.js","lg-video.js","lg-zoom.js","lg-share.js"])),lightgallerySettings:o.object,galleryClassName:o.string,portalElementSelector:o.string,onBeforeOpen:o.func,onAfterOpen:o.func,onSlideItemLoad:o.func,onBeforeSlide:o.func,onAfterSlide:o.func,onBeforePrevSlide:o.func,onBeforeNextSlide:o.func,onDragstart:o.func,onDragmove:o.func,onDragend:o.func,onSlideClick:o.func,onBeforeClose:o.func,onCloseAfter:o.func,onLightgalleryImport:o.func});var re=function(){var e=r.useContext(P),t=e.hasGroup,n=e.openGalleryByIndex;return{openGallery:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e)throw new Error("You must to provide 'group_name' on call function 'openGallery'");if(!t(e))throw new Error("Group '".concat(e,"' is not exists"));n(r,e)}}},ne="function"==typeof Symbol&&Symbol.for,oe=ne?Symbol.for("react.element"):60103,ie=ne?Symbol.for("react.portal"):60106,le=ne?Symbol.for("react.fragment"):60107,se=ne?Symbol.for("react.strict_mode"):60108,ue=ne?Symbol.for("react.profiler"):60114,ce=ne?Symbol.for("react.provider"):60109,ae=ne?Symbol.for("react.context"):60110,fe=ne?Symbol.for("react.async_mode"):60111,pe=ne?Symbol.for("react.concurrent_mode"):60111,ye=ne?Symbol.for("react.forward_ref"):60112,de=ne?Symbol.for("react.suspense"):60113,me=ne?Symbol.for("react.suspense_list"):60120,ge=ne?Symbol.for("react.memo"):60115,be=ne?Symbol.for("react.lazy"):60116,ve=ne?Symbol.for("react.block"):60121,he=ne?Symbol.for("react.fundamental"):60117,Se=ne?Symbol.for("react.responder"):60118,je=ne?Symbol.for("react.scope"):60119;
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function we(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case oe:switch(e=e.type){case fe:case pe:case le:case ue:case se:case de:return e;default:switch(e=e&&e.$$typeof){case ae:case ye:case be:case ge:case ce:return e;default:return t}}case ie:return t}}}function Oe(e){return we(e)===pe}var Pe={AsyncMode:fe,ConcurrentMode:pe,ContextConsumer:ae,ContextProvider:ce,Element:oe,ForwardRef:ye,Fragment:le,Lazy:be,Memo:ge,Portal:ie,Profiler:ue,StrictMode:se,Suspense:de,isAsyncMode:function(e){return Oe(e)||we(e)===fe},isConcurrentMode:Oe,isContextConsumer:function(e){return we(e)===ae},isContextProvider:function(e){return we(e)===ce},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===oe},isForwardRef:function(e){return we(e)===ye},isFragment:function(e){return we(e)===le},isLazy:function(e){return we(e)===be},isMemo:function(e){return we(e)===ge},isPortal:function(e){return we(e)===ie},isProfiler:function(e){return we(e)===ue},isStrictMode:function(e){return we(e)===se},isSuspense:function(e){return we(e)===de},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===le||e===pe||e===ue||e===se||e===de||e===me||"object"==typeof e&&null!==e&&(e.$$typeof===be||e.$$typeof===ge||e.$$typeof===ce||e.$$typeof===ae||e.$$typeof===ye||e.$$typeof===he||e.$$typeof===Se||e.$$typeof===je||e.$$typeof===ve)},typeOf:we},_e=C((function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,a=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var y=e.type;switch(y){case c:case a:case o:case l:case i:case p:return y;default:var g=y&&y.$$typeof;switch(g){case u:case f:case m:case d:case s:return g;default:return t}}case n:return t}}}var j=c,w=a,O=u,P=s,_=r,$=f,x=o,L=m,C=d,E=n,M=l,T=i,U=p,G=!1;function D(e){return S(e)===a}t.AsyncMode=j,t.ConcurrentMode=w,t.ContextConsumer=O,t.ContextProvider=P,t.Element=_,t.ForwardRef=$,t.Fragment=x,t.Lazy=L,t.Memo=C,t.Portal=E,t.Profiler=M,t.StrictMode=T,t.Suspense=U,t.isAsyncMode=function(e){return G||(G=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),D(e)||S(e)===c},t.isConcurrentMode=D,t.isContextConsumer=function(e){return S(e)===u},t.isContextProvider=function(e){return S(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return S(e)===f},t.isFragment=function(e){return S(e)===o},t.isLazy=function(e){return S(e)===m},t.isMemo=function(e){return S(e)===d},t.isPortal=function(e){return S(e)===n},t.isProfiler=function(e){return S(e)===l},t.isStrictMode=function(e){return S(e)===i},t.isSuspense=function(e){return S(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===a||e===l||e===i||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f||e.$$typeof===b||e.$$typeof===v||e.$$typeof===h||e.$$typeof===g)},t.typeOf=S}()})),$e=(_e.AsyncMode,_e.ConcurrentMode,_e.ContextConsumer,_e.ContextProvider,_e.Element,_e.ForwardRef,_e.Fragment,_e.Lazy,_e.Memo,_e.Portal,_e.Profiler,_e.StrictMode,_e.Suspense,_e.isAsyncMode,_e.isConcurrentMode,_e.isContextConsumer,_e.isContextProvider,_e.isElement,_e.isForwardRef,_e.isFragment,_e.isLazy,_e.isMemo,_e.isPortal,_e.isProfiler,_e.isStrictMode,_e.isSuspense,_e.isValidElementType,_e.typeOf,C((function(e){"production"===process.env.NODE_ENV?e.exports=Pe:e.exports=_e}))),xe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Le={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ce={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ee={};function Me(e){return $e.isMemo(e)?Ce:Ee[e.$$typeof]||xe}Ee[$e.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ee[$e.Memo]=Ce;var Te=Object.defineProperty,Ue=Object.getOwnPropertyNames,Ge=Object.getOwnPropertySymbols,De=Object.getOwnPropertyDescriptor,Ne=Object.getPrototypeOf,Ae=Object.prototype;var Be=function e(t,r,n){if("string"!=typeof r){if(Ae){var o=Ne(r);o&&o!==Ae&&e(t,o,n)}var i=Ue(r);Ge&&(i=i.concat(Ge(r)));for(var l=Me(t),s=Me(r),u=0;u<i.length;++u){var c=i[u];if(!(Le[c]||n&&n[c]||s&&s[c]||l&&l[c])){var a=De(r,c);try{Te(t,c,a)}catch(e){}}}}return t};exports.LightgalleryItem=$,exports.LightgalleryProvider=te,exports.useLightgallery=re,exports.withLightgallery=function(e){var t=function(t){var r=re().openGallery;return n.createElement(e,y({},t,{openGallery:r}))};return Be(t,e),t.displayName="withLightgallary(".concat(e.displayName,")"),t};
