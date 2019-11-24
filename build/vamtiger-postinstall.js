#!/usr/bin/env node
"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var __extends,__assign,__rest,__decorate,__param,__metadata,__awaiter,__generator,__exportStar,__values,__read,__spread,__spreadArrays,__await,__asyncGenerator,__asyncDelegator,__asyncValues,__makeTemplateObject,__importStar,__importDefault,StringConstant,FolderName,InstallScript,CommandlineArgument,DistTag,PackagePath,getPackageData=_interopDefault(require("vamtiger-require")),bash=_interopDefault(require("vamtiger-bash")),path=require("path"),getFolderContent=_interopDefault(require("vamtiger-get-directory-content")),copy=_interopDefault(require("vamtiger-copy-file")),getPathData=_interopDefault(require("vamtiger-get-path-data")),Args=_interopDefault(require("vamtiger-argv/build/main"));!function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(e,n){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,r){return e[t]=n?n(t,r):r}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(r){e(n(t,n(r)))}):"object"==typeof module&&"object"==typeof module.exports?e(n(t,n(module.exports))):e(n(t))}(function(e){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};__extends=function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)},__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},__decorate=function(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},__param=function(e,t){return function(n,r){t(n,r,e)}},__metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__awaiter=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})},__generator=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},__exportStar=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},__values=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},__read=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},__spread=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e},__spreadArrays=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,c=o.length;i<c;i++,a++)r[a]=o[i];return r},__await=function(e){return this instanceof __await?(this.v=e,this):new __await(e)},__asyncGenerator=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,a=n.apply(e,t||[]),o=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){a[e]&&(r[e]=function(t){return new Promise(function(n,r){o.push([e,t,n,r])>1||c(e,t)})})}function c(e,t){try{(n=a[e](t)).value instanceof __await?Promise.resolve(n.value.v).then(s,l):u(o[0][2],n)}catch(e){u(o[0][3],e)}var n}function s(e){c("next",e)}function l(e){c("throw",e)}function u(e,t){e(t),o.shift(),o.length&&c(o[0][0],o[0][1])}},__asyncDelegator=function(e){var t,n;return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,a){t[r]=e[r]?function(t){return(n=!n)?{value:__await(e[r](t)),done:"return"===r}:a?a(t):t}:a}},__asyncValues=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,a){(function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)})(r,a,(t=e[n](t)).done,t.value)})}}},__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},e("__extends",__extends),e("__assign",__assign),e("__rest",__rest),e("__decorate",__decorate),e("__param",__param),e("__metadata",__metadata),e("__awaiter",__awaiter),e("__generator",__generator),e("__exportStar",__exportStar),e("__values",__values),e("__read",__read),e("__spread",__spread),e("__spreadArrays",__spreadArrays),e("__await",__await),e("__asyncGenerator",__asyncGenerator),e("__asyncDelegator",__asyncDelegator),e("__asyncValues",__asyncValues),e("__makeTemplateObject",__makeTemplateObject),e("__importStar",__importStar),e("__importDefault",__importDefault)}),function(e){e.space=" "}(StringConstant||(StringConstant={})),function(e){e.node_modules="node_modules"}(FolderName||(FolderName={})),function(e){e.install="npm install --no-audit"}(InstallScript||(InstallScript={})),function(e){e.distTag="distTag",e.copy="copy",e.sourceFolder="sourceFolder",e.pattern="pattern"}(CommandlineArgument||(CommandlineArgument={})),function(e){e.source="source"}(DistTag||(DistTag={})),function(e){e.distTag="_requested.fetchSpec",e.dependencies="dependencies",e.devDependencies="devDependencies"}(PackagePath||(PackagePath={}));const ShortCommandlineArgument={[CommandlineArgument.distTag]:"d",[CommandlineArgument.copy]:"c",[CommandlineArgument.sourceFolder]:"s",[CommandlineArgument.pattern]:"p"};async function getPackageData$1({path:e}){return getPackageData({path:e})}const{dependencies:dependenciesPath}=PackagePath,{space:space}=StringConstant;function getDependencies({path:e}){const t=getPackageData({path:`${e}.${dependenciesPath}`});return Object.keys(t).map(e=>e).join(space)}const{devDependencies:dependenciesPath$1}=PackagePath,{space:space$1}=StringConstant;function getDevDependencies({path:e}){const t=getPackageData({path:`${e}.${dependenciesPath$1}`});return Object.keys(t).map(e=>e).join(space$1)}const{install:install}=InstallScript;async function install$1({workingDirectory:e,dependencies:t}){const n={cwd:e},r=`${install} --prefix ${e} ${t}`;console.log(r),await bash(r,n)}const{distTag:distTagPath}=PackagePath;async function postinstallDistTags({distTag:e,workingDirectory:t}){const n=path.resolve(t,"package"),r=`${n}.${distTagPath}`,a=e===await getPackageData$1({path:r}).catch(()=>"")&&getDependencies({path:n})||"",o=a&&getDevDependencies({path:n})||"";a&&await(await install$1({workingDirectory:t,dependencies:[a,o].join(" ")}))}async function postinstallCopy({workingDirectory:e,sourceFolder:t,pattern:n}){const r=new RegExp(n,"i"),a=require.resolve(e),o=(await getPathData(a)).isDirectory()&&a||path.dirname(a),i=await getFolderContent(t).then(e=>e.map(e=>path.resolve(t,e))),c=(await Promise.all(i.map(async e=>({sourceFolderEntryPath:e,pathData:await getPathData(e)})))).map(({sourceFolderEntryPath:e,pathData:t})=>t.isFile()&&path.basename(e)||"").filter(e=>e&&e.match(r)).map(e=>({source:path.resolve(t,e),destination:path.resolve(o,e)}));return await Promise.all(c.map(copy)),!0}const{cwd:cwd}=process,workingDirectory=cwd(),args=new Args,distTag=args.get(CommandlineArgument.distTag)||args.get(CommandlineArgument.distTag),copy$1=args.has(CommandlineArgument.copy)||args.has(CommandlineArgument.copy),sourceFolder=args.get(CommandlineArgument.sourceFolder)||args.get(CommandlineArgument.sourceFolder),pattern=args.get(CommandlineArgument.pattern)||args.get(CommandlineArgument.pattern),copyParams=copy$1&&sourceFolder&&pattern&&sourceFolder!==workingDirectory&&{workingDirectory:workingDirectory,sourceFolder:sourceFolder,pattern:pattern};distTag?postinstallDistTags({workingDirectory:workingDirectory,distTag:distTag}).catch(console.warn):copyParams&&postinstallCopy(copyParams).catch(console.warn);
//# sourceMappingURL=vamtiger-postinstall.js.map
