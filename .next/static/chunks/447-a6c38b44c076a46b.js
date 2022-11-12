(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[447],{5553:function(e,t,n){"use strict";n.d(t,{dF:function(){return E}});var r=n(6441),o=n(1581),u=n(8794),a=n(2593);let s=new o.Yd(u.i),c={},f=a.O$.from(0),l=a.O$.from(-1);function h(e,t,n,r){let u={fault:t,operation:n};return void 0!==r&&(u.value=r),s.throwError(e,o.Yd.errors.NUMERIC_FAULT,u)}let d="0";for(;d.length<256;)d+=d;function m(e){if("number"!=typeof e)try{e=a.O$.from(e).toNumber()}catch(t){}return"number"==typeof e&&e>=0&&e<=256&&!(e%1)?"1"+d.substring(0,e):s.throwArgumentError("invalid decimal size","decimals",e)}function v(e,t){null==t&&(t=0);let n=m(t);e=a.O$.from(e);let r=e.lt(f);r&&(e=e.mul(l));let o=e.mod(n).toString();for(;o.length<n.length-1;)o="0"+o;o=o.match(/^([0-9]*[1-9]|0)(0*)/)[1];let u=e.div(n).toString();return e=1===n.length?u:u+"."+o,r&&(e="-"+e),e}function p(e,t){null==t&&(t=0);let n=m(t);"string"==typeof e&&e.match(/^-?[0-9.]+$/)||s.throwArgumentError("invalid decimal value","value",e);let r="-"===e.substring(0,1);r&&(e=e.substring(1)),"."===e&&s.throwArgumentError("missing value","value",e);let o=e.split(".");o.length>2&&s.throwArgumentError("too many decimal points","value",e);let u=o[0],c=o[1];for(u||(u="0"),c||(c="0");"0"===c[c.length-1];)c=c.substring(0,c.length-1);for(c.length>n.length-1&&h("fractional component exceeds decimals","underflow","parseFixed"),""===c&&(c="0");c.length<n.length-1;)c+="0";let f=a.O$.from(u),d=a.O$.from(c),v=f.mul(n).add(d);return r&&(v=v.mul(l)),v}class w{constructor(e,t,n,r){e!==c&&s.throwError("cannot use FixedFormat constructor; use FixedFormat.from",o.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=n,this.decimals=r,this.name=(t?"":"u")+"fixed"+String(n)+"x"+String(r),this._multiplier=m(r),Object.freeze(this)}static from(e){if(e instanceof w)return e;"number"==typeof e&&(e=`fixed128x${e}`);let t=!0,n=128,r=18;if("string"==typeof e){if("fixed"===e);else if("ufixed"===e)t=!1;else{let o=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);o||s.throwArgumentError("invalid fixed format","format",e),t="u"!==o[1],n=parseInt(o[2]),r=parseInt(o[3])}}else if(e){let u=(t,n,r)=>null==e[t]?r:(typeof e[t]!==n&&s.throwArgumentError("invalid fixed format ("+t+" not "+n+")","format."+t,e[t]),e[t]);t=u("signed","boolean",t),n=u("width","number",n),r=u("decimals","number",r)}return n%8&&s.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",n),r>80&&s.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",r),new w(c,t,n,r)}}class g{constructor(e,t,n,r){e!==c&&s.throwError("cannot use FixedNumber constructor; use FixedNumber.from",o.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=r,this._hex=t,this._value=n,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&s.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);let t=p(this._value,this.format.decimals),n=p(e._value,e.format.decimals);return g.fromValue(t.add(n),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);let t=p(this._value,this.format.decimals),n=p(e._value,e.format.decimals);return g.fromValue(t.sub(n),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);let t=p(this._value,this.format.decimals),n=p(e._value,e.format.decimals);return g.fromValue(t.mul(n).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);let t=p(this._value,this.format.decimals),n=p(e._value,e.format.decimals);return g.fromValue(t.mul(this.format._multiplier).div(n),this.format.decimals,this.format)}floor(){let e=this.toString().split(".");1===e.length&&e.push("0");let t=g.from(e[0],this.format),n=!e[1].match(/^(0*)$/);return this.isNegative()&&n&&(t=t.subUnsafe(y.toFormat(t.format))),t}ceiling(){let e=this.toString().split(".");1===e.length&&e.push("0");let t=g.from(e[0],this.format),n=!e[1].match(/^(0*)$/);return!this.isNegative()&&n&&(t=t.addUnsafe(y.toFormat(t.format))),t}round(e){null==e&&(e=0);let t=this.toString().split(".");if(1===t.length&&t.push("0"),(e<0||e>80||e%1)&&s.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;let n=g.from("1"+d.substring(0,e),this.format),r=b.toFormat(this.format);return this.mulUnsafe(n).addUnsafe(r).floor().divUnsafe(n)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(e){if(null==e)return this._hex;e%8&&s.throwArgumentError("invalid byte width","width",e);let t=a.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();return(0,r.$m)(t,e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return g.fromString(this._value,e)}static fromValue(e,t,n){return null!=n||null==t||(0,a.Zm)(t)||(n=t,t=null),null==t&&(t=0),null==n&&(n="fixed"),g.fromString(v(e,t),w.from(n))}static fromString(e,t){null==t&&(t="fixed");let n=w.from(t),o=p(e,n.decimals);!n.signed&&o.lt(f)&&h("unsigned value cannot be negative","overflow","value",e);let u=null;n.signed?u=o.toTwos(n.width).toHexString():(u=o.toHexString(),u=(0,r.$m)(u,n.width/8));let a=v(o,n.decimals);return new g(c,u,a,n)}static fromBytes(e,t){null==t&&(t="fixed");let n=w.from(t);if((0,r.lE)(e).length>n.width/8)throw Error("overflow");let o=a.O$.from(e);n.signed&&(o=o.fromTwos(n.width));let u=o.toTwos((n.signed?0:1)+n.width).toHexString(),s=v(o,n.decimals);return new g(c,u,s,n)}static from(e,t){if("string"==typeof e)return g.fromString(e,t);if((0,r._t)(e))return g.fromBytes(e,t);try{return g.fromValue(e,0,t)}catch(n){if(n.code!==o.Yd.errors.INVALID_ARGUMENT)throw n}return s.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!!(e&&e._isFixedNumber)}}let y=g.from(1),b=g.from("0.5");new o.Yd("units/5.7.0");let _=["wei","kwei","mwei","gwei","szabo","finney","ether"];function E(e){return function(e,t){if("string"==typeof t){let n=_.indexOf(t);-1!==n&&(t=3*n)}return v(e,null!=t?t:18)}(e,18)}},9857:function(e,t,n){"use strict";n.d(t,{_k:function(){return g},ab:function(){return w}});var r=n(7187),o=n(3653),u=function(e){function t(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}(n=t).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var n,r=t.prototype;return r.emitUpdate=function(e){this.emit(o._.Update,e)},r.emitError=function(e){this.emit(o._.Error,e)},r.emitDeactivate=function(){this.emit(o._.Deactivate)},t}(r.EventEmitter);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return(l=!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o}:Reflect.construct).apply(null,arguments)}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return l(e,arguments,c(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),f(n,e)})(e)}function d(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){try{var n=e()}catch(r){return t(r)}return n&&n.then?n.then(void 0,t):n}function v(e){return e.hasOwnProperty("result")?e.result:e}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var p=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="No Ethereum provider was found on window.ethereum.",t}return s(t,e),t}(h(Error)),w=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="The user rejected the request.",t}return s(t,e),t}(h(Error)),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleNetworkChanged=n.handleNetworkChanged.bind(d(n)),n.handleChainChanged=n.handleChainChanged.bind(d(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(d(n)),n.handleClose=n.handleClose.bind(d(n)),n}s(t,e);var n=t.prototype;return n.handleChainChanged=function(e){this.emitUpdate({chainId:e,provider:window.ethereum})},n.handleAccountsChanged=function(e){0===e.length?this.emitDeactivate():this.emitUpdate({account:e[0]})},n.handleClose=function(e,t){this.emitDeactivate()},n.handleNetworkChanged=function(e){this.emitUpdate({chainId:e,provider:window.ethereum})},n.activate=function(){try{var e,t=function(t){if(n)return t;function r(){return a({provider:window.ethereum},e?{account:e}:{})}var o=function(){if(!e)return Promise.resolve(window.ethereum.enable().then(function(e){return e&&v(e)[0]})).then(function(t){e=t})}();return o&&o.then?o.then(r):r(o)},n=!1;if(!window.ethereum)throw new p;window.ethereum.on&&(window.ethereum.on("chainChanged",this.handleChainChanged),window.ethereum.on("accountsChanged",this.handleAccountsChanged),window.ethereum.on("close",this.handleClose),window.ethereum.on("networkChanged",this.handleNetworkChanged)),window.ethereum.isMetaMask&&(window.ethereum.autoRefreshOnNetworkChange=!1);var r=m(function(){return Promise.resolve(window.ethereum.send("eth_requestAccounts").then(function(e){return v(e)[0]})).then(function(t){e=t})},function(e){if(4001===e.code)throw new w});return Promise.resolve(r&&r.then?r.then(t):t(r))}catch(o){return Promise.reject(o)}},n.getProvider=function(){try{return Promise.resolve(window.ethereum)}catch(e){return Promise.reject(e)}},n.getChainId=function(){try{var e,t=function(){function t(){if(!e)try{e=v(window.ethereum.send({method:"net_version"}))}catch(t){}return e||(e=window.ethereum.isDapper?v(window.ethereum.cachedResults.net_version):window.ethereum.chainId||window.ethereum.netVersion||window.ethereum.networkVersion||window.ethereum._chainId),e}var n=function(){if(!e){var t=m(function(){return Promise.resolve(window.ethereum.send("net_version").then(v)).then(function(t){e=t})},function(){});if(t&&t.then)return t.then(function(){})}}();return n&&n.then?n.then(t):t(n)};if(!window.ethereum)throw new p;var n=m(function(){return Promise.resolve(window.ethereum.send("eth_chainId").then(v)).then(function(t){e=t})},function(){});return Promise.resolve(n&&n.then?n.then(t):t(n))}catch(r){return Promise.reject(r)}},n.getAccount=function(){try{var e,t=function(){function t(){return e||(e=v(window.ethereum.send({method:"eth_accounts"}))[0]),e}var n=function(){if(!e){var t=m(function(){return Promise.resolve(window.ethereum.enable().then(function(e){return v(e)[0]})).then(function(t){e=t})},function(){});if(t&&t.then)return t.then(function(){})}}();return n&&n.then?n.then(t):t(n)};if(!window.ethereum)throw new p;var n=m(function(){return Promise.resolve(window.ethereum.send("eth_accounts").then(function(e){return v(e)[0]})).then(function(t){e=t})},function(){});return Promise.resolve(n&&n.then?n.then(t):t(n))}catch(r){return Promise.reject(r)}},n.deactivate=function(){window.ethereum&&window.ethereum.removeListener&&(window.ethereum.removeListener("chainChanged",this.handleChainChanged),window.ethereum.removeListener("accountsChanged",this.handleAccountsChanged),window.ethereum.removeListener("close",this.handleClose),window.ethereum.removeListener("networkChanged",this.handleNetworkChanged))},n.isAuthorized=function(){try{if(!window.ethereum)return Promise.resolve(!1);return Promise.resolve(m(function(){return Promise.resolve(window.ethereum.send("eth_accounts").then(function(e){return v(e).length>0}))},function(){return!1}))}catch(e){return Promise.reject(e)}},t}(u)},7187:function(e){"use strict";var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function u(){u.init.call(this)}e.exports=u,e.exports.once=function(e,t){return new Promise(function(n,r){function o(n){e.removeListener(t,u),r(n)}function u(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}p(e,t,u,{once:!0}),"error"!==t&&"function"==typeof e.on&&p(e,"error",o,{once:!0})})},u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var a=10;function s(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?u.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){if(s(n),void 0===(u=e._events)?(u=e._events=Object.create(null),e._eventsCount=0):(void 0!==u.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),u=e._events),a=u[t]),void 0===a)a=u[t]=n,++e._eventsCount;else if("function"==typeof a?a=u[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(o=c(e))>0&&a.length>o&&!a.warned){a.warned=!0;var o,u,a,f=Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=e,f.type=t,f.count=a.length,console&&console.warn&&console.warn(f)}return e}function l(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=l.bind(r);return o.listener=n,r.wrapFn=o,o}function d(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):v(o,o.length)}function m(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=Array(t),r=0;r<t;++r)n[r]=e[r];return n}function p(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else if("function"==typeof e.addEventListener)e.addEventListener(t,function o(u){r.once&&e.removeEventListener(t,o),n(u)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||o(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),u.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},u.prototype.getMaxListeners=function(){return c(this)},u.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,u=this._events;if(void 0!==u)o=o&&void 0===u.error;else if(!o)return!1;if(o){if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var a,s=Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var c=u[e];if(void 0===c)return!1;if("function"==typeof c)r(c,this,t);else for(var f=c.length,l=v(c,f),n=0;n<f;++n)r(l[n],this,t);return!0},u.prototype.addListener=function(e,t){return f(this,e,t,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(e,t){return f(this,e,t,!0)},u.prototype.once=function(e,t){return s(t),this.on(e,h(this,e,t)),this},u.prototype.prependOnceListener=function(e,t){return s(t),this.prependListener(e,h(this,e,t)),this},u.prototype.removeListener=function(e,t){var n,r,o,u,a;if(s(t),void 0===(r=this._events)||void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,u=n.length-1;u>=0;u--)if(n[u]===t||n[u].listener===t){a=n[u].listener,o=u;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0==arguments.length){var o,u=Object.keys(n);for(r=0;r<u.length;++r)"removeListener"!==(o=u[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},u.prototype.listeners=function(e){return d(this,e,!0)},u.prototype.rawListeners=function(e){return d(this,e,!1)},u.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)},u.prototype.listenerCount=m,u.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},9008:function(e,t,n){e.exports=n(3121)},9637:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9474),o=n(3375),u=n(3128),a=n(1566);function s(e){return(0,r.Z)(e)||(0,o.Z)(e)||(0,a.Z)(e,i)||(0,u.Z)()}},6305:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(943),o=n(3375),u=n(1566);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,o.Z)(e)||(0,u.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},8100:function(e,t,n){"use strict";n.d(t,{ZP:function(){return K}});var r=n(7294);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function o(e,t,n,r){return new(n||(n=Promise))(function(o,u){function a(e){try{c(r.next(e))}catch(t){u(t)}}function s(e){try{c(r.throw(e))}catch(t){u(t)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})}function u(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function s(u){return function(s){return function(u){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(s){u=[6,s],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}}var a=function(){},s=a(),c=Object,f=function(e){return e===s},l=function(e){return"function"==typeof e},h=function(e,t){return c.assign({},e,t)},d="undefined",m=function(){return typeof window!=d},v=new WeakMap,p=0,w=function(e){var t,n,r=typeof e,o=e&&e.constructor,u=o==Date;if(c(e)!==e||u||o==RegExp)t=u?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=v.get(e))return t;if(t=++p+"~",v.set(e,t),o==Array){for(n=0,t="@";n<e.length;n++)t+=w(e[n])+",";v.set(e,t)}if(o==c){t="#";for(var a=c.keys(e).sort();!f(n=a.pop());)f(e[n])||(t+=n+":"+w(e[n])+",");v.set(e,t)}}return t},g=!0,y=function(){return g},b=m(),_=typeof document!=d,E=b&&window.addEventListener?window.addEventListener.bind(window):a,O=_?document.addEventListener.bind(document):a,x=b&&window.removeEventListener?window.removeEventListener.bind(window):a,C=_?document.removeEventListener.bind(document):a,L=function(){var e=_&&document.visibilityState;return f(e)||"hidden"!==e},S={initFocus:function(e){return O("visibilitychange",e),E("focus",e),function(){C("visibilitychange",e),x("focus",e)}},initReconnect:function(e){var t=function(){g=!0,e()},n=function(){g=!1};return E("online",t),E("offline",n),function(){x("online",t),x("offline",n)}}},P=!m()||"Deno"in window,R=P?r.useEffect:r.useLayoutEffect,F="undefined"!=typeof navigator&&navigator.connection,k=!P&&F&&(["slow-2g","2g"].includes(F.effectiveType)||F.saveData),A=function(e){if(l(e))try{e=e()}catch(t){e=""}var n=[].concat(e),r=(e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?w(e):"")?"$swr$"+e:"";return[e,n,r]},N=new WeakMap,T=function(e,t,n,r,o,u,a){void 0===a&&(a=!0);var s=N.get(e),c=s[0],f=s[1],l=s[3],h=c[t],d=f[t];if(a&&d)for(var m=0;m<d.length;++m)d[m](n,r,o);return u&&(delete l[t],h&&h[0])?h[0](2).then(function(){return e.get(t)}):e.get(t)},j=0,I=function(){return++j},U=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o(void 0,void 0,void 0,function(){var t,n,r,o,a,c,d,m,v,p,w,g,y,b,_,E,O,x,C,L;return u(this,function(u){switch(u.label){case 0:if(t=e[0],n=e[1],r=e[2],c=!!f((a="boolean"==typeof(o=e[3])?{revalidate:o}:o||{}).populateCache)||a.populateCache,d=!1!==a.revalidate,m=!1!==a.rollbackOnError,v=a.optimisticData,w=(p=A(n))[0],g=p[2],!w)return[2];if(y=N.get(t)[2],e.length<3)return[2,T(t,w,t.get(w),s,s,d,!0)];if(b=r,E=I(),y[w]=[E,0],O=!f(v),x=t.get(w),O&&(C=l(v)?v(x):v,t.set(w,C),T(t,w,C)),l(b))try{b=b(t.get(w))}catch(S){_=S}if(!(b&&l(b.then)))return[3,2];return[4,b.catch(function(e){_=e})];case 1:if(b=u.sent(),E!==y[w][0]){if(_)throw _;return[2,b]}_&&O&&m&&(c=!0,b=x,t.set(w,x)),u.label=2;case 2:return c&&(_||(l(c)&&(b=c(b,x)),t.set(w,b)),t.set(g,h(t.get(g),{error:_}))),y[w][1]=I(),[4,T(t,w,b,_,s,d,!!c)];case 3:if(L=u.sent(),_)throw _;return[2,c?L:b]}})})},V=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},D=function(e,t){if(!N.has(e)){var n=h(S,t),r={},o=U.bind(s,e),u=a;if(N.set(e,[r,{},{},{},o]),!P){var c=n.initFocus(setTimeout.bind(s,V.bind(s,r,0))),f=n.initReconnect(setTimeout.bind(s,V.bind(s,r,1)));u=function(){c&&c(),f&&f(),N.delete(e)}}return[e,o,u]}return[e,N.get(e)[4]]},M=function(e,t,n,r,o){var u=n.errorRetryCount,a=o.retryCount,s=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;(f(u)||!(a>u))&&setTimeout(r,s,o)},$=D(new Map),Z=$[0],H=h({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:M,onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:k?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:k?5e3:3e3,compare:function(e,t){return w(e)==w(t)},isPaused:function(){return!1},cache:Z,mutate:$[1],fallback:{}},{isOnline:y,isVisible:L}),Y=function(e,t){var n=h(e,t);if(t){var r=e.use,o=e.fallback,u=t.use,a=t.fallback;r&&u&&(n.use=r.concat(u)),o&&a&&(n.fallback=h(o,a))}return n},z=(0,r.createContext)({}),W=function(e){var t=e.value,n=Y((0,r.useContext)(z),t),o=t&&t.provider,u=(0,r.useState)(function(){return o?D(o(n.cache||Z),t):s})[0];return u&&(n.cache=u[0],n.mutate=u[1]),R(function(){return u?u[2]:s},[]),(0,r.createElement)(z.Provider,h(e,{value:n}))},q=function(e,t){var n=(0,r.useState)({})[1],o=(0,r.useRef)(e),u=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,r.useCallback)(function(e){var r=!1,a=o.current;for(var s in e){var c=s;a[c]!==e[c]&&(a[c]=e[c],u.current[c]&&(r=!0))}r&&!t.current&&n({})},[]);return R(function(){o.current=e}),[o,u.current,a]},B=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},G={dedupe:!0},J=function(e,t,n){var a=n.cache,c=n.compare,v=n.fallbackData,p=n.suspense,w=n.revalidateOnMount,g=n.refreshInterval,y=n.refreshWhenHidden,b=n.refreshWhenOffline,_=N.get(a),E=_[0],O=_[1],x=_[2],C=_[3],L=A(e),S=L[0],F=L[1],k=L[2],j=(0,r.useRef)(!1),V=(0,r.useRef)(!1),D=(0,r.useRef)(S),M=(0,r.useRef)(t),$=(0,r.useRef)(n),Z=function(){return $.current},H=function(){return Z().isVisible()&&Z().isOnline()},Y=function(e){return a.set(k,h(a.get(k),e))},z=a.get(S),W=f(v)?n.fallback[S]:v,J=f(z)?W:z,K=a.get(k)||{},Q=K.error,X=!j.current,ee=function(){return X&&!f(w)?w:!Z().isPaused()&&(p?!f(J)&&n.revalidateIfStale:f(J)||n.revalidateIfStale)},et=!!S&&!!t&&(!!K.isValidating||X&&ee()),en=q({data:J,error:Q,isValidating:et},V),er=en[0],ei=en[1],eo=en[2],eu=(0,r.useCallback)(function(e){return o(void 0,void 0,void 0,function(){var t,r,o,h,d,m,v,p,w,g,y,b,_;return u(this,function(u){switch(u.label){case 0:if(t=M.current,!S||!t||V.current||Z().isPaused())return[2,!1];h=!0,d=e||{},m=!C[S]||!d.dedupe,v=function(){return!V.current&&S===D.current&&j.current},p=function(){var e=C[S];e&&e[1]===o&&delete C[S]},w={isValidating:!1},g=function(){Y({isValidating:!1}),v()&&eo(w)},Y({isValidating:!0}),eo({isValidating:!0}),u.label=1;case 1:return u.trys.push([1,3,,4]),m&&(T(a,S,er.current.data,er.current.error,!0),n.loadingTimeout&&!a.get(S)&&setTimeout(function(){h&&v()&&Z().onLoadingSlow(S,n)},n.loadingTimeout),C[S]=[t.apply(void 0,F),I()]),r=(_=C[S])[0],o=_[1],[4,r];case 2:if(r=u.sent(),m&&setTimeout(p,n.dedupingInterval),!C[S]||C[S][1]!==o)return m&&v()&&Z().onDiscarded(S),[2,!1];if(Y({error:s}),w.error=s,!f(y=x[S])&&(o<=y[0]||o<=y[1]||0===y[1]))return g(),m&&v()&&Z().onDiscarded(S),[2,!1];return c(er.current.data,r)?w.data=er.current.data:w.data=r,c(a.get(S),r)||a.set(S,r),m&&v()&&Z().onSuccess(r,S,n),[3,4];case 3:return b=u.sent(),p(),!Z().isPaused()&&(Y({error:b}),w.error=b,m&&v()&&(Z().onError(b,S,n),("boolean"==typeof n.shouldRetryOnError&&n.shouldRetryOnError||l(n.shouldRetryOnError)&&n.shouldRetryOnError(b))&&H()&&Z().onErrorRetry(b,S,n,eu,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return h=!1,g(),v()&&m&&T(a,S,w.data,w.error,!1),[2,!0]}})})},[S]),ea=(0,r.useCallback)(U.bind(s,a,function(){return D.current}),[]);if(R(function(){M.current=t,$.current=n}),R(function(){if(S){var e=S!==D.current,t=eu.bind(s,G),n=0,r=function(e){if(0==e){var r=Date.now();Z().revalidateOnFocus&&r>n&&H()&&(n=r+Z().focusThrottleInterval,t())}else if(1==e)Z().revalidateOnReconnect&&H()&&t();else if(2==e)return eu()},o=B(S,O,function(e,t,n){eo(h({error:t,isValidating:n},c(er.current.data,e)?s:{data:e}))}),u=B(S,E,r);return V.current=!1,D.current=S,j.current=!0,e&&eo({data:J,error:Q,isValidating:et}),ee()&&(f(J)||P?t():m()&&typeof window.requestAnimationFrame!=d?window.requestAnimationFrame(t):setTimeout(t,1)),function(){V.current=!0,o(),u()}}},[S,eu]),R(function(){var e;function t(){var t=l(g)?g(J):g;t&&-1!==e&&(e=setTimeout(n,t))}function n(){!er.current.error&&(y||Z().isVisible())&&(b||Z().isOnline())?eu(G).then(t):t()}return t(),function(){e&&(clearTimeout(e),e=-1)}},[g,y,b,eu]),(0,r.useDebugValue)(J),p&&f(J)&&S)throw M.current=t,$.current=n,V.current=!1,f(Q)?eu(G):Q;return{mutate:ea,get data(){return ei.data=!0,J},get error(){return ei.error=!0,Q},get isValidating(){return ei.isValidating=!0,et}}};c.defineProperty(W,"default",{value:H});var K=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=h(H,(0,r.useContext)(z)),o=l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],u=o[0],a=o[1],s=Y(n,o[2]),c=J,f=s.use;if(f)for(var d=f.length;d-- >0;)c=f[d](c);return c(u,a||s.fetcher,s)}}}]);