!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.reactValidationCode=t():e.reactValidationCode=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";e.exports=n(1)},function(e,t,n){"use strict";
/** @license React v16.13.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,M=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,N=o?Symbol.for("react.memo"):60115,p=o?Symbol.for("react.lazy"):60116,D="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function I(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||d}function z(){}function T(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||d}I.prototype.isReactComponent={},I.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},I.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},z.prototype=I.prototype;var x=T.prototype=new z;x.constructor=T,r(x,I.prototype),x.isPureReactComponent=!0;var A={current:null},w=Object.prototype.hasOwnProperty,m={key:!0,ref:!0,__self:!0,__source:!0};function v(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!m.hasOwnProperty(r)&&(o[r]=t[r]);var M=arguments.length-2;if(1===M)o.children=n;else if(1<M){for(var a=Array(M),l=0;l<M;l++)a[l]=arguments[l+2];o.children=a}if(e&&e.defaultProps)for(r in M=e.defaultProps)void 0===o[r]&&(o[r]=M[r]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:A.current}}function h(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var O=/\/+/g,L=[];function E(e,t,n,r){if(L.length){var o=L.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function b(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>L.length&&L.push(e)}function C(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var M=!1;if(null===t)M=!0;else switch(c){case"string":case"number":M=!0;break;case"object":switch(t.$$typeof){case u:case i:M=!0}}if(M)return r(o,t,""===n?"."+S(t,0):n),1;if(M=0,n=""===n?".":n+":",Array.isArray(t))for(var a=0;a<t.length;a++){var l=n+S(c=t[a],a);M+=e(c,l,r,o)}else if(null===t||"object"!=typeof t?l=null:l="function"==typeof(l=D&&t[D]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),a=0;!(c=t.next()).done;)M+=e(c=c.value,l=n+S(c,a++),r,o);else if("object"===c)throw r=""+t,Error(j(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return M}(e,"",t,n)}function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function k(e,t){e.func.call(e.context,t,e.count++)}function Q(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(h(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(O,"$&/")+"/"),C(e,Q,t=E(t,u,r,o)),b(t)}var Y={current:null};function R(){var e=Y.current;if(null===e)throw Error(j(321));return e}var P={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:A,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;C(e,k,t=E(null,null,t,n)),b(t)},count:function(e){return C(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!h(e))throw Error(j(143));return e}},t.Component=I,t.Fragment=c,t.Profiler=a,t.PureComponent=T,t.StrictMode=M,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,n){if(null==e)throw Error(j(267,e));var o=r({},e.props),i=e.key,c=e.ref,M=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,M=A.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)w.call(t,l)&&!m.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==a?a[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){a=Array(l);for(var f=0;f<l;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:u,type:e.type,key:i,ref:c,props:o,_owner:M}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=v,t.createFactory=function(e){var t=v.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=h,t.lazy=function(e){return{$$typeof:p,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:N,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="16.13.0"},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,c,M=i(e),a=1;a<arguments.length;a++){for(var l in n=Object(arguments[a]))o.call(n,l)&&(M[l]=n[l]);if(r){c=r(n);for(var f=0;f<c.length;f++)u.call(n,c[f])&&(M[c[f]]=n[c[f]])}}return M}},function(e,t,n){var r=n(4),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var u={insert:"head",singleton:!1},i=(r(o,u),o.locals?o.locals:{});e.exports=i},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},u=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function M(e,t){for(var n={},r=[],o=0;o<e.length;o++){var u=e[o],M=t.base?u[0]+t.base:u[0],a=n[M]||0,l="".concat(M," ").concat(a);n[M]=a+1;var f=c(l),s={css:u[1],media:u[2],sourceMap:u[3]};-1!==f?(i[f].references++,i[f].updater(s)):i.push({identifier:l,updater:D(s,t),references:1}),r.push(l)}return r}function a(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=u(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function s(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var u=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(u,i[t]):e.appendChild(u)}}function y(e,t,n){var r=n.css,o=n.media,u=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),u&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var N=null,p=0;function D(e,t){var n,r,o;if(t.singleton){var u=p++;n=N||(N=a(t)),r=s.bind(null,n,u,!1),o=s.bind(null,n,u,!0)}else n=a(t),r=y.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=M(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var u=M(e,t),a=0;a<n.length;a++){var l=c(n[a]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=u}}}},function(e,t,n){(t=n(6)(!1)).push([e.i,".v-code {\n  display: flex;\n  align-items: center;\n  font-weight: wrap;\n}\n.v-code .v-input {\n  display: flex;\n  align-items: center;\n}\n.v-code .v-input input {\n  height: 32px;\n  padding: 0 10px;\n  box-sizing: border-box;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 32px;\n  outline: none;\n  transition: all 0.3s;\n}\n.v-code .v-input input::placeholder {\n  font-weight: normal;\n}\n.v-code .v-input input:hover {\n  border-color: #1890ff;\n}\n.v-code .v-input .result-icon {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n}\n.v-code .show {\n  width: 100px;\n  height: 32px;\n  margin: 0 20px;\n  box-sizing: border-box;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 32px;\n  text-align: center;\n  letter-spacing: 5px;\n  cursor: pointer;\n  user-select: none;\n}\n.v-code .tips {\n  font-size: 12px;\n  color: #1890ff;\n  cursor: pointer;\n  user-select: none;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),M="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(M," */")),u=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(u).concat([o]).join("\n")}var i,c,M;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var u=0;u<this.length;u++){var i=this[u][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var M=[].concat(e[c]);r&&o[M[0]]||(n&&(M[2]?M[2]="".concat(n," and ").concat(M[2]):M[2]=n),t.push(M))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var r=n(0),o=n.n(r);n(3);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=["#00FF00","#0000FF","#660000","#9900FF","#99FFFF","#CC0000","#CC66FF","#FF0000","#FFFF00","#FF00FF","#C0C0C0","#000000"];function s(){return"ABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(Math.floor(25*Math.random()),1)}function y(){var e=f.length-1;return f[Math.floor(Math.random()*e)]}var N=function(e){function t(){var e,n;i(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(n=M(this,(e=a(t)).call.apply(e,[this].concat(o)))).state={originStr:"",inputStr:"",colorArr:[]},n.handleInputChange=function(e){var t=n.props.getResult;n.setState({inputStr:e.target.value},(function(){t&&t(n.getCompareResult())}))},n.handleChangeVcode=function(){var e=n.props.getResult;n.setState({originStr:s()+s()+s()+s(),colorArr:[y(),y(),y(),y()]},(function(){e&&e(n.getCompareResult())}))},n.getCompareResult=function(){var e=n.state;return e.originStr===e.inputStr.toUpperCase()},n}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.setState({originStr:s()+s()+s()+s(),colorArr:[y(),y(),y(),y()]})}},{key:"componentWillUnmount",value:function(){this.setState({originStr:"",inputStr:""})}},{key:"render",value:function(){var e=this.state,t=e.originStr,n=e.inputStr,r=e.colorArr,u=t===n.toUpperCase(),i=this.props,c=i.tips,M=i.tipsWord,a=i.className;return o.a.createElement("div",{className:a?"v-code ".concat(a):"v-code"},o.a.createElement("div",{className:"v-input"},o.a.createElement("input",{type:"text",style:{width:"140px"},value:n,onChange:this.handleInputChange,placeholder:"请输入验证码"}),n?u?o.a.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTgzNzI2MzE4ODgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk5OSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMjAxLjE3MTg3NSIgaGVpZ2h0PSIxMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MTEuOTQ1NSA5NTguNzEyODA5Yy0yNDcuMDY1NzI0IDAtNDQ4LjA1NDMxMy0yMDAuOTg3NTg5LTQ0OC4wNTQzMTMtNDQ4LjA2MDMxMyAwLTI0Ny4wNjU3MjQgMjAwLjk4NzU4OS00NDguMDU0MzEzIDQ0OC4wNTQzMTMtNDQ4LjA1NDMxMyAyNDcuMDcyNzI0IDAgNDQ4LjA2MDMxMyAyMDAuOTg3NTg5IDQ0OC4wNjAzMTMgNDQ4LjA1NDMxM0M5NjAuMDA1ODEzIDc1Ny43MjQyMiA3NTkuMDE3MjI0IDk1OC43MTI4MDkgNTExLjk0NTUgOTU4LjcxMjgwOUw1MTEuOTQ1NSA5NTguNzEyODA5ek01MTEuOTQ1NSAxMjYuODkzMzcyYy0yMTEuNjA3NjIgMC0zODMuNzU4MTI0IDE3Mi4xNTA1MDQtMzgzLjc1ODEyNCAzODMuNzU4MTI0IDAgMjExLjU4MDYyIDE3Mi4xNTA1MDQgMzgzLjc2NTEyNCAzODMuNzU4MTI0IDM4My43NjUxMjQgMjExLjU4MDYyIDAgMzgzLjc2NTEyNC0xNzIuMTg0NTA0IDM4My43NjUxMjQtMzgzLjc2NTEyNEM4OTUuNzA5NjI0IDI5OS4wNDM4NzYgNzIzLjUyNTEyIDEyNi44OTMzNzIgNTExLjk0NTUgMTI2Ljg5MzM3Mkw1MTEuOTQ1NSAxMjYuODkzMzcyek01MTEuOTQ1NSAxMjYuODkzMzcyIiBwLWlkPSIxMDAwIiBmaWxsPSIjMWFmYTI5Ij48L3BhdGg+PHBhdGggZD0iTTcyNi45NDgxMyAzOTEuODI1MTQ4Yy0xMi41NDUwMzctMTIuNDQ4MDM2LTMyLjgzNzA5Ni0xMi4zMjIwMzYtNDUuMjQ5MTMzIDAuMjU0MDAxTDQ0OC4zODgzMTQgNjI3Ljk0Nzg0bC0xMDMuMjgwMzAzLTEwNi4xMjIzMTFjLTEyLjM1MDAzNi0xMi43MDcwMzctMzIuNjEyMDk2LTEyLjkzMjAzOC00NS4yNDkxMzMtMC42NDAwMDItMTIuNjc4MDM3IDEyLjMyMjAzNi0xMi45NjUwMzggMzIuNjEyMDk2LTAuNjQwMDAyIDQ1LjI1MTEzM2wxMjYuMDMyMzY5IDEyOS41MjIzNzljMC4wNjQgMC4wOTMgMC4xOTAwMDEgMC4wOTMgMC4yNTQwMDEgMC4xOTAwMDEgMC4wNjQgMC4wNjQgMC4wOTcgMC4xOTEwMDEgMC4xNjEgMC4yNTQwMDEgMi4wMTcwMDYgMS45ODgwMDYgNC41MTIwMTMgMy4yMDQwMDkgNi44ODEwMiA0LjU0NzAxMyAxLjI1MDAwNCAwLjY3NDAwMiAyLjI0MTAwNyAxLjc5MzAwNSAzLjUyMDAxIDIuMzA1MDA3IDMuODczMDExIDEuNjAxMDA1IDguMDAwMDIzIDIuMzk4MDA3IDEyLjA5NjAzNSAyLjM5ODAwNyA0LjA2MzAxMiAwIDguMTMxMDI0LTAuNzk2MDAyIDExLjk2OTAzNS0yLjMzNDAwNyAxLjI1MDAwNC0wLjUxMzAwMiAyLjIwODAwNi0xLjUzOTAwNSAzLjM5NDAxLTIuMTc4MDA2IDIuMzk4MDA3LTEuMzQ0MDA0IDQuODk4MDE0LTIuNTI1MDA3IDYuOTQ1MDItNC41NDIwMTMgMC4wNjMtMC4wNjQgMC4wOTgtMC4xOTYwMDEgMC4xOTAwMDEtMC4yNTkwMDEgMC4wNjQtMC4wOTQgMC4xNjEtMC4xMjggMC4yNTkwMDEtMC4xOTEwMDFsMjU2LjI1Mzc1MS0yNTkuMDQxNzU5QzczOS42MjYxNjcgNDI0LjQ5OTI0NCA3MzkuNDk0MTY2IDQwNC4yNDIxODQgNzI2Ljk0ODEzIDM5MS44MjUxNDhMNzI2Ljk0ODEzIDM5MS44MjUxNDh6TTcyNi45NDgxMyAzOTEuODI1MTQ4IiBwLWlkPSIxMDAxIiBmaWxsPSIjMWFmYTI5Ij48L3BhdGg+PC9zdmc+",alt:"Done",className:"result-icon"}):o.a.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTgzNzI2NDQ3ODk2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MjIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIwMS4xNzE4NzUiIGhlaWdodD0iMTIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTExLjc2NDQ5OSA5NTkuODA3ODEyYy0yNDYuOTY2NzI0IDAtNDQ3Ljg3MzMxMi0yMDAuOTA2NTg5LTQ0Ny44NzMzMTItNDQ3Ljg3OTMxMiAwLTI0Ni45NjY3MjQgMjAwLjkwNjU4OS00NDcuODczMzEyIDQ0Ny44NzMzMTItNDQ3Ljg3MzMxMiAyNDYuOTcyNzI0IDAgNDQ3Ljg3OTMxMiAyMDAuOTA2NTg5IDQ0Ny44NzkzMTIgNDQ3Ljg3MzMxMkM5NTkuNjQzODExIDc1OC45MDEyMjMgNzU4LjczNzIyMyA5NTkuODA3ODEyIDUxMS43NjQ0OTkgOTU5LjgwNzgxMkw1MTEuNzY0NDk5IDk1OS44MDc4MTJ6TTUxMS43NjQ0OTkgMTI4LjMyNTM3NmMtMjExLjUyMjYyIDAtMzgzLjYwMzEyNCAxNzIuMDgwNTA0LTM4My42MDMxMjQgMzgzLjYwMzEyNCAwIDIxMS40OTQ2MiAxNzIuMDgxNTA0IDM4My42MTAxMjQgMzgzLjYwMzEyNCAzODMuNjEwMTI0IDIxMS40OTQ2MiAwIDM4My42MTAxMjQtMTcyLjExNDUwNCAzODMuNjEwMTI0LTM4My42MTAxMjRDODk1LjM3MzYyMyAzMDAuNDA1ODggNzIzLjI1OTExOSAxMjguMzI1Mzc2IDUxMS43NjQ0OTkgMTI4LjMyNTM3Nkw1MTEuNzY0NDk5IDEyOC4zMjUzNzZ6TTUxMS43NjQ0OTkgMTI4LjMyNTM3NiIgcC1pZD0iMTUyMyIgZmlsbD0iI2Q4MWUwNiI+PC9wYXRoPjxwYXRoIGQ9Ik01NTYuODEwNjMxIDUxMy4zMDU1MDRsMTM4LjMzMTQwNS0xMzYuODI3NDAxYzEyLjU2OTAzNy0xMi40MDkwMzYgMTIuNjY2MDM3LTMyLjY2MjA5NiAwLjI1NDAwMS00NS4yMzExMzMtMTIuNDE0MDM2LTEyLjU3NTAzNy0zMi42OTYwOTYtMTIuNjczMDM3LTQ1LjIzNjEzMy0wLjI2MDAwMUw1MTEuNjM3NDk5IDQ2Ny45NzczNzEgMzc1LjIzMTA5OSAzMzEuMTQ4OTdjLTEyLjUxMjAzNy0xMi41MDUwMzctMzIuNzMxMDk2LTEyLjU3NDAzNy00NS4yMzcxMzMtMC4wNjItMTIuNTEwMDM3IDEyLjQ3NzAzNy0xMi41NDAwMzcgMzIuNzI1MDk2LTAuMDYyIDQ1LjIzNjEzM2wxMzYuMjE3Mzk5IDEzNi42MzI0LTEzNy4zNDA0MDIgMTM1Ljg2NDM5OGMtMTIuNTY5MDM3IDEyLjQ0ODAzNi0xMi42NjgwMzcgMzIuNjYyMDk2LTAuMjU0MDAxIDQ1LjIzNzEzMyA2LjI2ODAxOCA2LjMzNjAxOSAxNC40OTMwNDIgOS40OTkwMjggMjIuNzQ3MDY3IDkuNDk5MDI4IDguMTIzMDI0IDAgMTYuMjUwMDQ4LTMuMDk5MDA5IDIyLjQ4OTA2Ni05LjI0NTAyN2wxMzcuNTMwNDAzLTEzNi4wMjIzOTkgMTM4LjY0NzQwNiAxMzkuMDk3NDA4YzYuMjM4MDE4IDYuMjY3MDE4IDE0LjQzMDA0MiA5LjQwMTAyOCAyMi42NTAwNjYgOS40MDEwMjggOC4xOTEwMjQgMCAxNi4zNDgwNDgtMy4xMzQwMDkgMjIuNTg2MDY2LTkuMzM5MDI3IDEyLjUwNjAzNy0xMi40NzcwMzcgMTIuNTQyMDM3LTMyLjY5NjA5NiAwLjA2NC00NS4yMzYxMzNMNTU2LjgxMDYzMSA1MTMuMzA1NTA0IDU1Ni44MTA2MzEgNTEzLjMwNTUwNHpNNTU2LjgxMDYzMSA1MTMuMzA1NTA0IiBwLWlkPSIxNTI0IiBmaWxsPSIjZDgxZTA2Ij48L3BhdGg+PC9zdmc+",alt:"Error",className:"result-icon"}):null),t&&o.a.createElement("div",{className:"show",onClick:this.handleChangeVcode},r.map((function(e,n){return o.a.createElement("span",{key:n,style:{color:e}},t.substr(n,1))}))),c&&o.a.createElement("span",{className:"tips",onClick:this.handleChangeVcode},M||"看不清，换一张"))}}])&&c(n.prototype,r),u&&c(n,u),t}(r.Component)}])}));