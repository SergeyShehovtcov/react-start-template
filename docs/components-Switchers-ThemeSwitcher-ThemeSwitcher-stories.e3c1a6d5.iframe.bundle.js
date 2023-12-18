/*! For license information please see components-Switchers-ThemeSwitcher-ThemeSwitcher-stories.e3c1a6d5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[958],{"./src/components/Switchers/ThemeSwitcher/ThemeSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>ThemeSwitcher_ThemeSwitcher_ThemeSwitcher});var react=__webpack_require__("./node_modules/react/index.js"),Theme=function(Theme){return Theme.key="Theme",Theme.dark="Dark",Theme.light="Light",Theme}({});function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ThemeProvider_slicedToArray(arr,i){return function ThemeProvider_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function ThemeProvider_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function ThemeProvider_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return ThemeProvider_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ThemeProvider_arrayLikeToArray(o,minLen)}(arr,i)||function ThemeProvider_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ThemeProvider_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ThemeContext=(0,react.createContext)([]),ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,_useLocalStorage2=ThemeProvider_slicedToArray(function useLocalStorage(key,value){var _useState2=_slicedToArray((0,react.useState)((function(){return localStorage.getItem(key)||value})),2),state=_useState2[0],setState=_useState2[1];return(0,react.useEffect)((function(){localStorage.setItem(key,state)}),[key,state]),[state,setState]}(Theme.key,Theme.light),2),theme=_useLocalStorage2[0],setTheme=_useLocalStorage2[1];return(0,react.useEffect)((function(){var docsSb=document.getElementsByClassName("innerZoomElementWrapper")[0];theme===Theme.dark?docsSb?docsSb.classList.add(Theme.dark):document.body.classList.add(Theme.dark):docsSb?docsSb.classList.remove(Theme.dark):document.body.classList.remove(Theme.dark)}),[theme]),(0,jsx_runtime.jsx)(ThemeContext.Provider,{value:[theme,setTheme],children})};ThemeProvider.displayName="ThemeProvider";try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theming/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/theming/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ThemeSwitcher=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Switchers/ThemeSwitcher/ThemeSwitcher.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ThemeSwitcher.Z,options);ThemeSwitcher.Z&&ThemeSwitcher.Z.locals&&ThemeSwitcher.Z.locals;var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function ThemeSwitcher_slicedToArray(arr,i){return function ThemeSwitcher_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function ThemeSwitcher_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function ThemeSwitcher_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return ThemeSwitcher_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ThemeSwitcher_arrayLikeToArray(o,minLen)}(arr,i)||function ThemeSwitcher_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ThemeSwitcher_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ThemeSwitcherElement=function ThemeSwitcherElement(){var _useContext2=ThemeSwitcher_slicedToArray((0,react.useContext)(ThemeContext),2),theme=_useContext2[0],setTheme=_useContext2[1];return(0,jsx_runtime.jsx)("ul",{className:"theme-switcher d-flex justify-content-center",children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{onClick:function changeThemeHandler(){setTheme("Light"===theme?"Dark":"Light")},children:(0,jsx_runtime.jsx)("i",{className:classnames_default()("fa-regular","".concat("Light"===theme?"fa-moon":"fa-sun"))})})})})};ThemeSwitcherElement.displayName="ThemeSwitcherElement";var ThemeSwitcher_ThemeSwitcher_ThemeSwitcher=function ThemeSwitcher(){return(0,jsx_runtime.jsx)(ThemeProvider,{children:(0,jsx_runtime.jsx)(ThemeSwitcherElement,{})})};ThemeSwitcher_ThemeSwitcher_ThemeSwitcher.displayName="ThemeSwitcher";try{ThemeSwitcher_ThemeSwitcher_ThemeSwitcher.displayName="ThemeSwitcher",ThemeSwitcher_ThemeSwitcher_ThemeSwitcher.__docgenInfo={description:"Компонент - переключатель цветовой темы.",displayName:"ThemeSwitcher",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switchers/ThemeSwitcher/ThemeSwitcher.tsx#ThemeSwitcher"]={docgenInfo:ThemeSwitcher_ThemeSwitcher_ThemeSwitcher.__docgenInfo,name:"ThemeSwitcher",path:"src/components/Switchers/ThemeSwitcher/ThemeSwitcher.tsx#ThemeSwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Switchers/ThemeSwitcher/ThemeSwitcher.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"ul.theme-switcher{list-style:none;margin-bottom:0;padding:0}ul.theme-switcher li{margin-right:10px}ul.theme-switcher a{background-color:var(--accent-color);color:var(--contrast-color);width:30px;height:30px;line-height:30px;border-radius:50%;float:left;text-align:center;cursor:pointer}ul.theme-switcher a:hover{background-color:var(--contrast-color);color:var(--accent-color);transition:all .3s}","",{version:3,sources:["webpack://./src/components/Switchers/ThemeSwitcher/ThemeSwitcher.scss"],names:[],mappings:"AAAA,kBACI,eAAA,CACA,eAAA,CACA,SAAA,CAEA,qBACE,iBAAA,CAGF,oBACE,oCAAA,CACA,2BAAA,CACA,UAAA,CACA,WAAA,CACA,gBAAA,CACA,iBAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CAEA,0BACE,sCAAA,CACA,yBAAA,CACA,kBAAA",sourcesContent:["ul.theme-switcher {\r\n    list-style: none;\r\n    margin-bottom: 0;\r\n    padding: 0;\r\n\r\n    li {\r\n      margin-right: 10px;\r\n    }\r\n\r\n    a {\r\n      background-color: var(--accent-color);\r\n      color: var(--contrast-color);\r\n      width: 30px;\r\n      height: 30px;\r\n      line-height: 30px;\r\n      border-radius: 50%;\r\n      float: left;\r\n      text-align: center;\r\n      cursor: pointer;\r\n\r\n      &:hover {\r\n        background-color: var(--contrast-color);\r\n        color: var(--accent-color);\r\n        transition: all 0.3s;\r\n      }\r\n    }\r\n  }"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Switchers/ThemeSwitcher/ThemeSwitcher.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,themeSwitcher:()=>themeSwitcher});const __WEBPACK_DEFAULT_EXPORT__={title:"Компоненты/Switchers/ThemeSwitcher",component:__webpack_require__("./src/components/Switchers/ThemeSwitcher/ThemeSwitcher.tsx").O,tags:["autodocs"]};var themeSwitcher={},__namedExportsOrder=["themeSwitcher"];themeSwitcher.parameters={...themeSwitcher.parameters,docs:{...themeSwitcher.parameters?.docs,source:{originalSource:"{}",...themeSwitcher.parameters?.docs?.source}}}}}]);