var e,t,r,n,o,i,a,s,c,u,l,p,d,f,h,v,g,m,y=globalThis;function b(e){return e&&e.__esModule?e.default:e}var _={},w={},k=function(e){return e&&e.Math===Math&&e};w=k("object"==typeof globalThis&&globalThis)||k("object"==typeof window&&window)||k("object"==typeof self&&self)||k("object"==typeof y&&y)||k("object"==typeof w&&w)||function(){return this}()||Function("return this")();var E={},S={};E=!(S=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},j={};j=!S(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var F=Function.prototype.call;$=j?F.bind(F):function(){return F.apply(F,arguments)};var O={}.propertyIsEnumerable,L=Object.getOwnPropertyDescriptor;i=L&&!O.call({1:2},1)?function(e){var t=L(this,e);return!!t&&t.enumerable}:O;var M={};M=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},x={},T={},q=Function.prototype,H=q.call,I=j&&q.bind.bind(H,H),A={},N=(T=j?I:function(e){return function(){return H.apply(e,arguments)}})({}.toString),D=T("".slice);A=function(e){return D(N(e),8,-1)};var C=Object,R=T("".split);x=S(function(){return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===A(e)?R(e,""):C(e)}:C;var z={},W={};W=function(e){return null==e};var G=TypeError;z=function(e){if(W(e))throw new G("Can't call method on "+e);return e},P=function(e){return x(z(e))};var U={},B={},J={},Y={},Q="object"==typeof document&&document.all;Y=void 0===Q&&void 0!==Q?function(e){return"function"==typeof e||e===Q}:function(e){return"function"==typeof e},J=function(e){return"object"==typeof e?null!==e:Y(e)};var V={},K={};K=function(e,t){var r;return arguments.length<2?(r=w[e],Y(r)?r:void 0):w[e]&&w[e][t]};var X={};X=T({}.isPrototypeOf);var Z={},ee={},et={},er={};er="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var en=w.process,eo=w.Deno,ei=en&&en.versions||eo&&eo.version,ea=ei&&ei.v8;ea&&(s=(a=ea.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&er&&(!(a=er.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=er.match(/Chrome\/(\d+)/))&&(s=+a[1]),et=s;var es=w.String;Z=(ee=!!Object.getOwnPropertySymbols&&!S(function(){var e=Symbol("symbol detection");return!es(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&et&&et<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ec=Object;V=Z?function(e){return"symbol"==typeof e}:function(e){var t=K("Symbol");return Y(t)&&X(t.prototype,ec(e))};var eu={},el={},ep={},ed=String;ep=function(e){try{return ed(e)}catch(e){return"Object"}};var ef=TypeError;el=function(e){if(Y(e))return e;throw new ef(ep(e)+" is not a function")},eu=function(e,t){var r=e[t];return W(r)?void 0:el(r)};var eh={},ev=TypeError;eh=function(e,t){var r,n;if("string"===t&&Y(r=e.toString)&&!J(n=$(r,e))||Y(r=e.valueOf)&&!J(n=$(r,e))||"string"!==t&&Y(r=e.toString)&&!J(n=$(r,e)))return n;throw new ev("Can't convert object to primitive value")};var eg={},em={};em=!1;var ey={},eb={},e_=Object.defineProperty;eb=function(e,t){try{e_(w,e,{value:t,configurable:!0,writable:!0})}catch(r){w[e]=t}return t};var ew="__core-js_shared__";ey=w[ew]||eb(ew,{}),(eg=function(e,t){return ey[e]||(ey[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.1",mode:em?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",source:"https://github.com/zloirock/core-js"});var ek={},eE={},eS=Object;eE=function(e){return eS(z(e))};var e$=T({}.hasOwnProperty);ek=Object.hasOwn||function(e,t){return e$(eE(e),t)};var ej={},eF=0,eO=Math.random(),eL=T(1..toString);ej=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eL(++eF+eO,36)};var eM=w.Symbol,eP=eg("wks"),ex=Z?eM.for||eM:eM&&eM.withoutSetter||ej,eT=TypeError,eq=(ek(eP,e="toPrimitive")||(eP[e]=ee&&ek(eM,e)?eM[e]:ex("Symbol."+e)),eP[e]);B=function(e,t){if(!J(e)||V(e))return e;var r,n=eu(e,eq);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!J(r)||V(r))return r;throw new eT("Can't convert object to primitive value")}return void 0===t&&(t="number"),eh(e,t)},U=function(e){var t=B(e,"string");return V(t)?t:t+""};var eH={},eI={},eA=w.document,eN=J(eA)&&J(eA.createElement);eI=function(e){return eN?eA.createElement(e):{}},eH=!E&&!S(function(){return 7!==Object.defineProperty(eI("div"),"a",{get:function(){return 7}}).a});var eD=Object.getOwnPropertyDescriptor;o=E?eD:function(e,t){if(e=P(e),t=U(t),eH)try{return eD(e,t)}catch(e){}if(ek(e,t))return M(!$(i,e,t),e[t])};var eC={},eR={};eR=E&&S(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ez={},eW=String,eG=TypeError;ez=function(e){if(J(e))return e;throw new eG(eW(e)+" is not an object")};var eU=TypeError,eB=Object.defineProperty,eJ=Object.getOwnPropertyDescriptor,eY="enumerable",eQ="configurable",eV="writable";c=E?eR?function(e,t,r){if(ez(e),t=U(t),ez(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eV in r&&!r[eV]){var n=eJ(e,t);n&&n[eV]&&(e[t]=r.value,r={configurable:eQ in r?r[eQ]:n[eQ],enumerable:eY in r?r[eY]:n[eY],writable:!1})}return eB(e,t,r)}:eB:function(e,t,r){if(ez(e),t=U(t),ez(r),eH)try{return eB(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eU("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eC=E?function(e,t,r){return c(e,t,M(1,r))}:function(e,t,r){return e[t]=r,e};var eK={},eX={},eZ=Function.prototype,e0=E&&Object.getOwnPropertyDescriptor,e1=ek(eZ,"name")&&(!E||E&&e0(eZ,"name").configurable),e2={},e4=T(Function.toString);Y(ey.inspectSource)||(ey.inspectSource=function(e){return e4(e)}),e2=ey.inspectSource;var e3={},e7={},e9=w.WeakMap;e7=Y(e9)&&/native code/.test(String(e9));var e5={},e8=eg("keys");e5=function(e){return e8[e]||(e8[e]=ej(e))};var e6={};e6={};var te="Object already initialized",tt=w.TypeError,tr=w.WeakMap;if(e7||ey.state){var tn=ey.state||(ey.state=new tr);tn.get=tn.get,tn.has=tn.has,tn.set=tn.set,u=function(e,t){if(tn.has(e))throw new tt(te);return t.facade=e,tn.set(e,t),t},l=function(e){return tn.get(e)||{}},p=function(e){return tn.has(e)}}else{var to=e5("state");e6[to]=!0,u=function(e,t){if(ek(e,to))throw new tt(te);return t.facade=e,eC(e,to,t),t},l=function(e){return ek(e,to)?e[to]:{}},p=function(e){return ek(e,to)}}var ti=(e3={set:u,get:l,has:p,enforce:function(e){return p(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=l(t)).type!==e)throw new tt("Incompatible receiver, "+e+" required");return r}}}).enforce,ta=e3.get,ts=String,tc=Object.defineProperty,tu=T("".slice),tl=T("".replace),tp=T([].join),tf=E&&!S(function(){return 8!==tc(function(){},"length",{value:8}).length}),th=String(String).split("String"),tv=eX=function(e,t,r){"Symbol("===tu(ts(t),0,7)&&(t="["+tl(ts(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ek(e,"name")||e1&&e.name!==t)&&(E?tc(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&ek(r,"arity")&&e.length!==r.arity&&tc(e,"length",{value:r.arity});try{r&&ek(r,"constructor")&&r.constructor?E&&tc(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ti(e);return ek(n,"source")||(n.source=tp(th,"string"==typeof t?t:"")),e};Function.prototype.toString=tv(function(){return Y(this)&&ta(this).source||e2(this)},"toString"),eK=function(e,t,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:t;if(Y(r)&&eX(r,i,n),n.global)o?e[t]=r:eb(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tg={},tm={},ty={},tb={},t_={},tw={},tk=Math.ceil,tE=Math.floor;tw=Math.trunc||function(e){var t=+e;return(t>0?tE:tk)(t)},t_=function(e){var t=+e;return t!=t||0===t?0:tw(t)};var tS=Math.max,t$=Math.min;tb=function(e,t){var r=t_(e);return r<0?tS(r+t,0):t$(r,t)};var tj={},tF={},tO=Math.min;tF=function(e){var t=t_(e);return t>0?tO(t,9007199254740991):0},tj=function(e){return tF(e.length)};var tL=function(e){return function(t,r,n){var o,i=P(t),a=tj(i),s=tb(n,a);if(e&&r!=r){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},tM={includes:tL(!0),indexOf:tL(!1)}.indexOf,tP=T([].push);ty=function(e,t){var r,n=P(e),o=0,i=[];for(r in n)!ek(e6,r)&&ek(n,r)&&tP(i,r);for(;t.length>o;)ek(n,r=t[o++])&&(~tM(i,r)||tP(i,r));return i};var tx=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");d=Object.getOwnPropertyNames||function(e){return ty(e,tx)},f=Object.getOwnPropertySymbols;var tT=T([].concat);tm=K("Reflect","ownKeys")||function(e){var t=d(ez(e));return f?tT(t,f(e)):t},tg=function(e,t,r){for(var n=tm(t),i=0;i<n.length;i++){var a=n[i];ek(e,a)||r&&ek(r,a)||c(e,a,o(t,a))}};var tq={},tH=/#|\.prototype\./,tI=function(e,t){var r=tN[tA(e)];return r===tC||r!==tD&&(Y(t)?S(t):!!t)},tA=tI.normalize=function(e){return String(e).replace(tH,".").toLowerCase()},tN=tI.data={},tD=tI.NATIVE="N",tC=tI.POLYFILL="P";tq=tI,_=function(e,t){var r,n,i,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?w:l?w[c]||eb(c,{}):w[c]&&w[c].prototype)for(n in t){if(a=t[n],i=e.dontCallGetSet?(s=o(r,n))&&s.value:r[n],!tq(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;tg(a,i)}(e.sham||i&&i.sham)&&eC(a,"sham",!0),eK(r,n,a,e)}};var tR={},tz={},tW=Function.prototype,tG=tW.apply,tU=tW.call;tz="object"==typeof Reflect&&Reflect.apply||(j?tU.bind(tG):function(){return tU.apply(tG,arguments)});var tB={},tJ={},tY=(tJ=function(e){if("Function"===A(e))return T(e)})(tJ.bind);tB=function(e,t){return el(e),void 0===t?e:j?tY(e,t):function(){return e.apply(t,arguments)}};var tQ={};tQ=K("document","documentElement");var tV={};tV=T([].slice);var tK={},tX=TypeError;tK=function(e,t){if(e<t)throw new tX("Not enough arguments");return e};var tZ={};tZ=/(?:ipad|iphone|ipod).*applewebkit/i.test(er);var t0={};t0="process"===A(w.process);var t1=w.setImmediate,t2=w.clearImmediate,t4=w.process,t3=w.Dispatch,t7=w.Function,t9=w.MessageChannel,t5=w.String,t8=0,t6={},re="onreadystatechange";S(function(){h=w.location});var rt=function(e){if(ek(t6,e)){var t=t6[e];delete t6[e],t()}},rr=function(e){return function(){rt(e)}},rn=function(e){rt(e.data)},ro=function(e){w.postMessage(t5(e),h.protocol+"//"+h.host)};t1&&t2||(t1=function(e){tK(arguments.length,1);var t=Y(e)?e:t7(e),r=tV(arguments,1);return t6[++t8]=function(){tz(t,void 0,r)},v(t8),t8},t2=function(e){delete t6[e]},t0?v=function(e){t4.nextTick(rr(e))}:t3&&t3.now?v=function(e){t3.now(rr(e))}:t9&&!tZ?(m=(g=new t9).port2,g.port1.onmessage=rn,v=tB(m.postMessage,m)):w.addEventListener&&Y(w.postMessage)&&!w.importScripts&&h&&"file:"!==h.protocol&&!S(ro)?(v=ro,w.addEventListener("message",rn,!1)):v=re in eI("script")?function(e){tQ.appendChild(eI("script"))[re]=function(){tQ.removeChild(this),rt(e)}}:function(e){setTimeout(rr(e),0)});var ri=(tR={set:t1,clear:t2}).clear;_({global:!0,bind:!0,enumerable:!0,forced:w.clearImmediate!==ri},{clearImmediate:ri});var ra=tR.set,rs={},rc={};rc="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ru=w.Function,rl=/MSIE .\./.test(er)||rc&&((t=w.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rs=function(e,t){var r=t?2:1;return rl?function(n,o){var i=tK(arguments.length,1)>r,a=Y(n)?n:ru(n),s=i?tV(arguments,r):[],c=i?function(){tz(a,this,s)}:a;return t?e(c,o):e(c)}:e};var rp=w.setImmediate?rs(ra,!1):ra;_({global:!0,bind:!0,enumerable:!0,forced:w.setImmediate!==rp},{setImmediate:rp});var rd=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,i){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return o(c,"_invoke",{value:(a=new F(i||[]),s=d,function(r,o){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw o;return{value:t,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=function e(r,n){var o=n.method,i=r.iterator[o];if(i===t)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),v;var a=p(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(i,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===d)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=p(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",f="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(O([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;o(this,"_invoke",{value:function(o,i){function a(){return new t(function(r,a){!function r(o,i,a,s){var c=p(e[o],e,i);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(o,i,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function O(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,o(k,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return(a.type=e,a.arg=t,i)?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rd}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rd:Function("r","regeneratorRuntime = r")(rd)}const rf="https://forkify-api.herokuapp.com/api/v2/recipes/",rh="2dab077c-98a7-41fd-bfe1-a6c3c29a1da7",rv=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),o=await n.json();if(!n.ok)throw Error(`${o.message}, (${n.status})`);return o}catch(e){throw e}},rg={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rm=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},ry=async function(e){try{let t=`${rf}${e}?key=${rh}`;console.log(t);let r=await rv(t),{recipe:n}=r.data;rg.recipe=rm(r),rg.bookmarks.some(t=>t.id===e)?rg.recipe.bookmarked=!0:rg.recipe.bookmarked=!1,console.log(rg.recipe)}catch(e){throw console.error(`\u{1F4A5} ${e} \u{1F4A5}`),e}},rb=async function(e){try{let t=await rv(`${rf}?search=${e}&key=${rh}`);console.log(t),rg.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),console.log(rg.search.results,"search test"),rg.search.page=1}catch(e){throw console.error(`\u{1F4A5} ${e} \u{1F4A5}`),e}},r_=function(e=rg.search.page){rg.search.page=e;let t=(e-1)*rg.search.resultsPerPage,r=e*rg.search.resultsPerPage;return rg.search.results.slice(t,r)},rw=function(e){rg.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rg.recipe.servings}),rg.recipe.servings=e},rk=function(){localStorage.setItem("bookmarks",JSON.stringify(rg.bookmarks))},rE=function(e){rg.bookmarks.push(e),e.id===rg.recipe.id&&(rg.recipe.bookmarked=!0),rk()},rS=function(e){let t=rg.bookmarks.findIndex(t=>t.id===e);rg.bookmarks.splice(t,1),e===rg.recipe.id&&(rg.recipe.bookmarked=!1)};!function(){let e=localStorage.getItem("bookmarks");e&&(rg.bookmarks=JSON.parse(e))}();const r$=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! please use the correct format m8 \uD83D\uDE97");let[r,n,o]=t;return{quantity:r?+r:null,unit:n,description:o}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t};console.log(r);let n=`${rf}?key=${rh}`;console.log(n);let o=await rv(n,r);rg.recipe=rm(o),rE(rg.recipe)}catch(e){throw e}};var rj={};rj=new URL("icons.c14567a0.svg",import.meta.url).toString();class rF{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <svg>
      <use href="${b(rj)}#icon-loader"></use>
      </svg>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
          <div class="error">
          <div>
          <svg>
          <use href="${b(rj)}#icon-alert-triangle"></use>
          </svg>
          </div>
          <p>${e}</p>
          </div>
            `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message,t="icon-smile"){let r=`
          <div class="error">
          <div>
          <svg>
          <use href="${b(rj)}#${t}"></use>
          </svg>
          </div>
          <p>${e}</p>
          </div>
            `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,o=num.split(" ");if(o[0]&&(r=o[0]),o[1]&&(n=o[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var i=r.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var o=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=o,this.denominator/=o,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return(n.forEach(function(e){var t=o.indexOf(e);t>=0&&(r.push(e),o.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},Fraction;class rO extends rF{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;console.log(r);let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return console.log(this._data),`
    <figure class="recipe__fig">
    <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${b(rj)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${b(rj)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
          <svg>
            <use href="${b(rj)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
          <svg>
            <use href="${b(rj)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
    

    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${b(rj)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${b(rj)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
    `}_generateMarkupIngredient(e){return`
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${b(rj)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new Fraction(e.quantity):""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
      `}}var rL=new rO;class rM{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rP=new rM;class rx extends rF{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! \uD83D\uDE2D";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`
    <li class="preview">
    <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
      <figure class="preview__fig">
        <img src="${e.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${e.title}</h4>
        <p class="preview__publisher">${e.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="${b(rj)}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>
    `}}var rT=new rx;class rq extends rF{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;console.log(n),e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(console.log(t,"Pagination"),1===e&&t>1)?`
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${b(rj)}#icon-arrow-right"></use>
            </svg>
          </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${b(rj)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${b(rj)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
          <use href="${b(rj)}#icon-arrow-right"></use>
        </svg>
      </button>
      `:""}}var rH=new rq;class rI extends rF{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet \uD83D\uDE2D";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}addHandlerRender(e){window.addEventListener("load",e)}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`
    <li class="preview">
    <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
      <figure class="preview__fig">
        <img src="${e.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${e.title}</h4>
        <p class="preview__publisher">${e.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="${b(rj)}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>
    `}}var rA=new rI;class rN extends rF{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded ✅";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rD=new rN;document.querySelector(".recipe");const rC=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rL.renderSpinner(),rT.update(r_()),rA.update(rg.bookmarks),await ry(e);let{recipe:t}=rg;rL.render(rg.recipe)}catch(e){rL.renderError(),console.error(e)}},rR=async function(){try{rT.renderSpinner(),console.log(rT);let e=rP.getQuery();if(!e)return;await rb(e),console.log(rg.search.results),rT.render(r_()),rH.render(rg.search)}catch(e){console.log(e)}},rz=async function(e){try{rD.renderSpinner(),await r$(e),console.log(rg.recipe),rL.render(rg.recipe),rD.renderMessage(),rA.render(rg.bookmarks),window.history.pushState(null,"",`#${rg.recipe.id}`),setTimeout(function(){},2500)}catch(e){console.error(`\u{1F4A5}${e}\u{1F4A5}`),rD.renderError(e.message)}};rA.addHandlerRender(function(){rA.render(rg.bookmarks)}),rL.addHandlerRender(rC),rP.addHandlerSearch(rR),rH.addHandlerClick(function(e){rT.render(r_(e)),rH.render(rg.search)}),rL.addHandlerUpdateServings(function(e){rw(e),rL.update(rg.recipe)}),rL.addHandlerAddBookmark(function(){rg.recipe.bookmarked?rS(rg.recipe.id):rE(rg.recipe),rL.update(rg.recipe),rA.render(rg.bookmarks)}),rD.addHandlerUpload(rz);
//# sourceMappingURL=index.89f95618.js.map