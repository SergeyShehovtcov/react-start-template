/*! For license information please see components-Logo-Logo-stories.e60fdfc6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[981],{"./src/components/Logo/Logo.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,Журнал:()=>Журнал,Магазин:()=>Магазин});var _Магазин$parameters,_Магазин$parameters2,_Магазин$parameters2$,_Журнал$parameters,_Журнал$parameters2,_Журнал$parameters2$d,_Logo__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Logo/Logo.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Компоненты/Logo",component:_Logo__WEBPACK_IMPORTED_MODULE_0__.T,tags:["autodocs"],argTypes:{title:{type:"string",description:"Заголовок логотипа",defaultValue:"E-Shop",options:["E-Shop","Журнал операций"],control:{type:"radio"}}}};var Template=function Template(arg){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Logo__WEBPACK_IMPORTED_MODULE_0__.T,_objectSpread({},arg))};Template.displayName="Template";var Магазин=Template.bind({}),Журнал=Template.bind({});Магазин.args={title:"E-Shop"},Журнал.args={title:"Журнал операций"},Магазин.parameters=_objectSpread(_objectSpread({},Магазин.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Магазин$parameters=Магазин.parameters)||void 0===_Магазин$parameters?void 0:_Магазин$parameters.docs),{},{source:_objectSpread({originalSource:"arg => <Logo {...arg} />"},null===(_Магазин$parameters2=Магазин.parameters)||void 0===_Магазин$parameters2||null===(_Магазин$parameters2$=_Магазин$parameters2.docs)||void 0===_Магазин$parameters2$?void 0:_Магазин$parameters2$.source)})}),Журнал.parameters=_objectSpread(_objectSpread({},Журнал.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Журнал$parameters=Журнал.parameters)||void 0===_Журнал$parameters?void 0:_Журнал$parameters.docs),{},{source:_objectSpread({originalSource:"arg => <Logo {...arg} />"},null===(_Журнал$parameters2=Журнал.parameters)||void 0===_Журнал$parameters2||null===(_Журнал$parameters2$d=_Журнал$parameters2.docs)||void 0===_Журнал$parameters2$d?void 0:_Журнал$parameters2$d.source)})});var __namedExportsOrder=["Магазин","Журнал"]},"./src/components/Logo/Logo.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Logo_Logo_Logo});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Logo=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Logo/Logo.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Logo.Z,options);Logo.Z&&Logo.Z.locals&&Logo.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Logo_Logo_Logo=function Logo(_ref){var title=_ref.title;return(0,jsx_runtime.jsx)("a",{href:"index.html",className:"header-logo h1",children:title})};Logo_Logo_Logo.displayName="Logo",Logo_Logo_Logo.__docgenInfo={description:"",methods:[],displayName:"Logo"}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Logo/Logo.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".header-logo{text-decoration:none;text-transform:uppercase;color:var(--accent-color);transition:all .3s}.header-logo:hover{color:var(--contrast-color)}","",{version:3,sources:["webpack://./src/components/Logo/Logo.sass"],names:[],mappings:"AAAA,aACI,oBAAA,CACA,wBAAA,CACA,yBAAA,CACA,kBAAA,CAEA,mBACI,2BAAA",sourcesContent:[".header-logo\r\n    text-decoration: none\r\n    text-transform: uppercase\r\n    color: var(--accent-color)\r\n    transition: all .3s\r\n\r\n    &:hover\r\n        color: var(--contrast-color)"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);