var t,e,r,n,o,i,a,u,c,f,l,s,p,h,v,y,d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},g={},m={},b=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
m=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
b("object"==typeof self&&self)||b("object"==typeof d&&d)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||m||Function("return this")();var w={},S={};// Detect IE8's incomplete defineProperty implementation
w=!(S=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var O={},j={};j=!S(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var E=Function.prototype.call;O=j?E.bind(E):function(){return E.apply(E,arguments)};var L={}.propertyIsEnumerable,_=Object.getOwnPropertyDescriptor;n=_&&!L.call({1:2},1)?function(t){var e=_(this,t);return!!e&&e.enumerable}:L;var x={};x=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var P={},T={},I={},k=Function.prototype,F=k.call,M=j&&k.bind.bind(F,F),D={},N=(I=j?M:function(t){return function(){return F.apply(t,arguments)}})({}.toString),C=I("".slice);D=function(t){return C(N(t),8,-1)};var G=Object,A=I("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
T=S(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!G("z").propertyIsEnumerable(0)})?function(t){return"String"===D(t)?A(t,""):G(t)}:G;var q={},z={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
z=function(t){return null==t};var B=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
q=function(t){if(z(t))throw B("Can't call method on "+t);return t},P=function(t){return T(q(t))};var R={},H={},W={},Y={},$={},K="object"==typeof document&&document.all,V=($={all:K,IS_HTMLDDA:void 0===K&&void 0!==K}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
Y=$.IS_HTMLDDA?function(t){return"function"==typeof t||t===V}:function(t){return"function"==typeof t};var J=$.all;W=$.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:Y(t)||t===J}:function(t){return"object"==typeof t?null!==t:Y(t)};var Q={},U={};U=function(t,e){var r;return arguments.length<2?(r=m[t],Y(r)?r:void 0):m[t]&&m[t][e]};var X={};X=I({}.isPrototypeOf);var Z={},tt={},te={},tr={};tr="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tn=m.process,to=m.Deno,ti=tn&&tn.versions||to&&to.version,ta=ti&&ti.v8;ta&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(i=(o=ta.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!i&&tr&&(!(o=tr.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=tr.match(/Chrome\/(\d+)/))&&(i=+o[1]),te=i;var tu=m.String;Z=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(tt=!!Object.getOwnPropertySymbols&&!S(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tu(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&te&&te<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tc=Object;Q=Z?function(t){return"symbol"==typeof t}:function(t){var e=U("Symbol");return Y(e)&&X(e.prototype,tc(t))};var tf={},tl={},ts={},tp=String;ts=function(t){try{return tp(t)}catch(t){return"Object"}};var th=TypeError;// `Assert: IsCallable(argument) is true`
tl=function(t){if(Y(t))return t;throw th(ts(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
tf=function(t,e){var r=t[e];return z(r)?void 0:tl(r)};var tv={},ty=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
tv=function(t,e){var r,n;if("string"===e&&Y(r=t.toString)&&!W(n=O(r,t))||Y(r=t.valueOf)&&!W(n=O(r,t))||"string"!==e&&Y(r=t.toString)&&!W(n=O(r,t)))return n;throw ty("Can't convert object to primitive value")};var td={},tg={};tg=!1;var tm={},tb={},tw=Object.defineProperty;tb=function(t,e){try{tw(m,t,{value:e,configurable:!0,writable:!0})}catch(r){m[t]=e}return e};var tS="__core-js_shared__";tm=m[tS]||tb(tS,{}),(td=function(t,e){return tm[t]||(tm[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.2",mode:tg?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var tO={},tj={},tE=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
tj=function(t){return tE(q(t))};var tL=I({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
tO=Object.hasOwn||function(t,e){return tL(tj(t),e)};var t_={},tx=0,tP=Math.random(),tT=I(1..toString);t_=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tT(++tx+tP,36)};var tI=m.Symbol,tk=td("wks"),tF=Z?tI.for||tI:tI&&tI.withoutSetter||t_,tM=TypeError,tD=(tO(tk,t="toPrimitive")||(tk[t]=tt&&tO(tI,t)?tI[t]:tF("Symbol."+t)),tk[t]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
H=function(t,e){if(!W(t)||Q(t))return t;var r,n=tf(t,tD);if(n){if(void 0===e&&(e="default"),r=O(n,t,e),!W(r)||Q(r))return r;throw tM("Can't convert object to primitive value")}return void 0===e&&(e="number"),tv(t,e)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
R=function(t){var e=H(t,"string");return Q(e)?e:e+""};var tN={},tC={},tG=m.document,tA=W(tG)&&W(tG.createElement);tC=function(t){return tA?tG.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
tN=!w&&!S(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(tC("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var tq=Object.getOwnPropertyDescriptor;r=w?tq:function(t,e){if(t=P(t),e=R(e),tN)try{return tq(t,e)}catch(t){}if(tO(t,e))return x(!O(n,t,e),t[e])};var tz={},tB={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
tB=w&&S(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tR={},tH=String,tW=TypeError;// `Assert: Type(argument) is Object`
tR=function(t){if(W(t))return t;throw tW(tH(t)+" is not an object")};var tY=TypeError,t$=Object.defineProperty,tK=Object.getOwnPropertyDescriptor,tV="enumerable",tJ="configurable",tQ="writable";a=w?tB?function(t,e,r){if(tR(t),e=R(e),tR(r),"function"==typeof t&&"prototype"===e&&"value"in r&&tQ in r&&!r[tQ]){var n=tK(t,e);n&&n[tQ]&&(t[e]=r.value,r={configurable:tJ in r?r[tJ]:n[tJ],enumerable:tV in r?r[tV]:n[tV],writable:!1})}return t$(t,e,r)}:t$:function(t,e,r){if(tR(t),e=R(e),tR(r),tN)try{return t$(t,e,r)}catch(t){}if("get"in r||"set"in r)throw tY("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tz=w?function(t,e,r){return a(t,e,x(1,r))}:function(t,e,r){return t[e]=r,t};var tU={},tX={},tZ=Function.prototype,t0=w&&Object.getOwnPropertyDescriptor,t1=tO(tZ,"name")&&(!w||w&&t0(tZ,"name").configurable),t2={},t3=I(Function.toString);Y(tm.inspectSource)||(tm.inspectSource=function(t){return t3(t)}),t2=tm.inspectSource;var t4={},t7={},t9=m.WeakMap;t7=Y(t9)&&/native code/.test(String(t9));var t8={},t5=td("keys");t8=function(t){return t5[t]||(t5[t]=t_(t))};var t6={};t6={};var et="Object already initialized",ee=m.TypeError,er=m.WeakMap;if(t7||tm.state){var en=tm.state||(tm.state=new er);/* eslint-disable no-self-assign -- prototype methods protection */en.get=en.get,en.has=en.has,en.set=en.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(t,e){if(en.has(t))throw ee(et);return e.facade=t,en.set(t,e),e},c=function(t){return en.get(t)||{}},f=function(t){return en.has(t)}}else{var eo=t8("state");t6[eo]=!0,u=function(t,e){if(tO(t,eo))throw ee(et);return e.facade=t,tz(t,eo,e),e},c=function(t){return tO(t,eo)?t[eo]:{}},f=function(t){return tO(t,eo)}}var ei=(t4={set:u,get:c,has:f,enforce:function(t){return f(t)?c(t):u(t,{})},getterFor:function(t){return function(e){var r;if(!W(e)||(r=c(e)).type!==t)throw ee("Incompatible receiver, "+t+" required");return r}}}).enforce,ea=t4.get,eu=String,ec=Object.defineProperty,ef=I("".slice),el=I("".replace),es=I([].join),ep=w&&!S(function(){return 8!==ec(function(){},"length",{value:8}).length}),eh=String(String).split("String"),ev=tX=function(t,e,r){"Symbol("===ef(eu(e),0,7)&&(e="["+el(eu(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tO(t,"name")||t1&&t.name!==e)&&(w?ec(t,"name",{value:e,configurable:!0}):t.name=e),ep&&r&&tO(r,"arity")&&t.length!==r.arity&&ec(t,"length",{value:r.arity});try{r&&tO(r,"constructor")&&r.constructor?w&&ec(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=ei(t);return tO(n,"source")||(n.source=es(eh,"string"==typeof e?e:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=ev(function(){return Y(this)&&ea(this).source||t2(this)},"toString"),tU=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(Y(r)&&tX(r,i,n),n.global)o?t[e]=r:tb(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:a(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var ey={},ed={},eg={},em={},eb={},ew={},eS=Math.ceil,eO=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
ew=Math.trunc||function(t){var e=+t;return(e>0?eO:eS)(e)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
eb=function(t){var e=+t;// eslint-disable-next-line no-self-compare -- NaN check
return e!=e||0===e?0:ew(e)};var ej=Math.max,eE=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
em=function(t,e){var r=eb(t);return r<0?ej(r+e,0):eE(r,e)};var eL={},e_={},ex=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
e_=function(t){return t>0?ex(eb(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
eL=function(t){return e_(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var eP=function(t){return function(e,r,n){var o,i=P(e),a=eL(i),u=em(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&r!=r){for(;a>u;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[u++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>u;u++)if((t||u in i)&&i[u]===r)return t||u||0;return!t&&-1}},eT={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:eP(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:eP(!1)}.indexOf,eI=I([].push);eg=function(t,e){var r,n=P(t),o=0,i=[];for(r in n)!tO(t6,r)&&tO(n,r)&&eI(i,r);// Don't enum bug & hidden keys
for(;e.length>o;)tO(n,r=e[o++])&&(~eT(i,r)||eI(i,r));return i};var ek=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(t){return eg(t,ek)},s=Object.getOwnPropertySymbols;var eF=I([].concat);// all object keys, includes non-enumerable and symbols
ed=U("Reflect","ownKeys")||function(t){var e=l(tR(t));return s?eF(e,s(t)):e},ey=function(t,e,n){for(var o=ed(e),i=0;i<o.length;i++){var u=o[i];tO(t,u)||n&&tO(n,u)||a(t,u,r(e,u))}};var eM={},eD=/#|\.prototype\./,eN=function(t,e){var r=eG[eC(t)];return r===eq||r!==eA&&(Y(e)?S(e):!!e)},eC=eN.normalize=function(t){return String(t).replace(eD,".").toLowerCase()},eG=eN.data={},eA=eN.NATIVE="N",eq=eN.POLYFILL="P";eM=eN,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/g=function(t,e){var n,o,i,a,u,c=t.target,f=t.global,l=t.stat;if(n=f?m:l?m[c]||tb(c,{}):(m[c]||{}).prototype)for(o in e){// contained in target
if(a=e[o],i=t.dontCallGetSet?(u=r(n,o))&&u.value:n[o],!eM(f?o:c+(l?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;ey(a,i)}(t.sham||i&&i.sham)&&tz(a,"sham",!0),tU(n,o,a,t)}};var ez={},eB={},eR=Function.prototype,eH=eR.apply,eW=eR.call;// eslint-disable-next-line es/no-reflect -- safe
eB="object"==typeof Reflect&&Reflect.apply||(j?eW.bind(eH):function(){return eW.apply(eH,arguments)});var eY={},e$={},eK=(e$=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===D(t))return I(t)})(e$.bind);// optional / simple context binding
eY=function(t,e){return tl(t),void 0===e?t:j?eK(t,e):function(){return t.apply(e,arguments)}};var eV={};eV=U("document","documentElement");var eJ={};eJ=I([].slice);var eQ={},eU=TypeError;eQ=function(t,e){if(t<e)throw eU("Not enough arguments");return t};var eX={};// eslint-disable-next-line redos/no-vulnerable -- safe
eX=/(?:ipad|iphone|ipod).*applewebkit/i.test(tr);var eZ={};eZ="process"===D(m.process);var e0=m.setImmediate,e1=m.clearImmediate,e2=m.process,e3=m.Dispatch,e4=m.Function,e7=m.MessageChannel,e9=m.String,e8=0,e5={},e6="onreadystatechange";S(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
p=m.location});var rt=function(t){if(tO(e5,t)){var e=e5[t];delete e5[t],e()}},re=function(t){return function(){rt(t)}},rr=function(t){rt(t.data)},rn=function(t){// old engines have not location.origin
m.postMessage(e9(t),p.protocol+"//"+p.host)};e0&&e1||(e0=function(t){eQ(arguments.length,1);var e=Y(t)?t:e4(t),r=eJ(arguments,1);return e5[++e8]=function(){eB(e,void 0,r)},h(e8),e8},e1=function(t){delete e5[t]},eZ?h=function(t){e2.nextTick(re(t))}:e3&&e3.now?h=function(t){e3.now(re(t))}:e7&&!eX?(y=(v=new e7).port2,v.port1.onmessage=rr,h=eY(y.postMessage,y)):m.addEventListener&&Y(m.postMessage)&&!m.importScripts&&p&&"file:"!==p.protocol&&!S(rn)?(h=rn,m.addEventListener("message",rr,!1)):h=e6 in tC("script")?function(t){eV.appendChild(tC("script"))[e6]=function(){eV.removeChild(this),rt(t)}}:function(t){setTimeout(re(t),0)});var ro=(ez={set:e0,clear:e1}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
g({global:!0,bind:!0,enumerable:!0,forced:m.clearImmediate!==ro},{clearImmediate:ro});var ri=ez.set,ra={},ru={};/* global Bun -- Deno case */ru="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rc=m.Function,rf=/MSIE .\./.test(tr)||ru&&((e=m.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
ra=function(t,e){var r=e?2:1;return rf?function(n,o/* , ...arguments */){var i=eQ(arguments.length,1)>r,a=Y(n)?n:rc(n),u=i?eJ(arguments,r):[],c=i?function(){eB(a,this,u)}:a;return e?t(c,o):t(c)}:t};// https://github.com/oven-sh/bun/issues/1633
var rl=m.setImmediate?ra(ri,!1):ri;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
g({global:!0,bind:!0,enumerable:!0,forced:m.setImmediate!==rl},{setImmediate:rl});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rs=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function l(t,r,n,i){var a,u,c=Object.create((r&&r.prototype instanceof d?r:d).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(c,"_invoke",{value:(a=new x(i||[]),u=p,function(r,o){if(u===h)throw Error("Generator is already running");if(u===v){if("throw"===r)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:e,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(r,n){var o=n.method,i=r.iterator[o];if(i===e)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),y);var a=s(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var u=a.arg;return u?u.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=u.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,y):u:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,y)}(i,a);if(c){if(c===y)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===p)throw u=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=h;var f=s(t,n,a);if("normal"===f.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
u=a.done?v:"suspendedYield",f.arg===y)continue;return{value:f.arg,done:a.done}}"throw"===f.type&&(u=v,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=f.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="executing",v="completed",y={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function d(){}function g(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};f(b,a,function(){return this});var w=Object.getPrototypeOf,S=w&&w(w(P([])));S&&S!==r&&n.call(S,a)&&// of the polyfill.
(b=S);var O=m.prototype=d.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function j(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new e(function(r,a){!function r(o,i,a,u){var c=s(t[o],t,i);if("throw"===c.type)u(c.arg);else{var f=c.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,u)},function(t){r("throw",t,a,u)}):e.resolve(l).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
f.value=t,a(f)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",t,a,u)})}}(o,i,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return g.prototype=m,o(O,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=f(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},j(E.prototype),f(E.prototype,u,function(){return this}),t.AsyncIterator=E,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
j(O),f(O,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
f(O,a,function(){return this}),f(O,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=P,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(f){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=e),y}},t}({});try{regeneratorRuntime=rs}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rs:Function("r","regeneratorRuntime = r")(rs)}const rp=document.querySelector(".sign-up"),rh=document.querySelector(".success"),rv=document.querySelector(".form"),ry=document.getElementById("email"),rd=document.querySelector(".success__email"),rg=document.querySelector(".success__btn"),rm=function(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)},rb=function(t){rd.textContent=t,rp.classList.toggle("hidden"),rh.classList.toggle("hidden")},rw=function(t,e){let r=document.getElementById(t).closest(".form__group");"add"===e&&r.classList.add("form__group--error"),"remove"===e&&r.classList.remove("form__group--error")};ry.addEventListener("change",function(t){let e=t.target.id,r=t.target.value;rm(r)?rw(e,"remove"):rw(e,"add")}),rv.addEventListener("submit",function(t){t.preventDefault();// Get form data
let[e,r]=[...new FormData(this)][0];// Check if user email is valid
if(!rm(r)){rw(e,"add");return}rb(r)}),rg.addEventListener("click",function(){rp.classList.toggle("hidden"),rh.classList.toggle("hidden"),ry.value=""});//# sourceMappingURL=index.49be9503.js.map

//# sourceMappingURL=index.49be9503.js.map
