/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardAnimal_1 = __webpack_require__(/*! ./shared/CardAnimal */ \"./src/shared/CardAnimal/index.ts\");\r\nvar PageAnimals_1 = __webpack_require__(/*! ./shared/Content/PageAnimals */ \"./src/shared/Content/PageAnimals/index.ts\");\r\nvar PrivateRoute_1 = __webpack_require__(/*! ./shared/PrivateRoute */ \"./src/shared/PrivateRoute/index.ts\");\r\nvar Login_1 = __webpack_require__(/*! ./shared/Login */ \"./src/shared/Login/index.ts\");\r\nvar PageToday_1 = __webpack_require__(/*! ./shared/Content/PageToday */ \"./src/shared/Content/PageToday/index.ts\");\r\nvar Page404_1 = __webpack_require__(/*! ./shared/Content/Page404 */ \"./src/shared/Content/Page404/index.ts\");\r\nvar getUserLocalStorage_1 = __webpack_require__(/*! ./utils/react/getUserLocalStorage */ \"./src/utils/react/getUserLocalStorage.ts\");\r\nfunction AppComponent() {\r\n    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];\r\n    var _b = react_1.useState(false), isAuth = _b[0], setIsAuth = _b[1];\r\n    react_1.useEffect(function () {\r\n        setMounted(true);\r\n        if (getUserLocalStorage_1.getUserLocalStorage().auth) {\r\n            setIsAuth(true);\r\n        }\r\n    }, []);\r\n    return (\r\n    // eslint-disable-next-line react/jsx-no-useless-fragment\r\n    react_1.default.createElement(react_1.default.Fragment, null, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n        react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(react_router_dom_1.Switch, null,\r\n                !isAuth && react_1.default.createElement(react_router_dom_1.Route, { path: \"/login\", component: Login_1.Login }),\r\n                !isAuth && react_1.default.createElement(react_router_dom_1.Route, { component: Page404_1.Page404 })),\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(Content_1.Content, null,\r\n                react_1.default.createElement(react_router_dom_1.Switch, null,\r\n                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, strict: true, path: \"/\" },\r\n                        react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/today\" })),\r\n                    isAuth && (react_1.default.createElement(react_router_dom_1.Route, { exact: true, strict: true, path: \"/login\" },\r\n                        react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/today\" }))),\r\n                    react_1.default.createElement(PrivateRoute_1.PrivateRoute, { auth: isAuth, path: \"/today\", component: PageToday_1.PageToday }),\r\n                    react_1.default.createElement(PrivateRoute_1.PrivateRoute, { auth: isAuth, path: \"/animals\", component: PageAnimals_1.PageAnimals }),\r\n                    isAuth && react_1.default.createElement(react_router_dom_1.Route, { component: Page404_1.Page404 })),\r\n                react_1.default.createElement(react_router_dom_1.Route, { path: \"/today/:id\" },\r\n                    react_1.default.createElement(CardAnimal_1.CardAnimal, null)),\r\n                react_1.default.createElement(react_router_dom_1.Route, { path: \"/animals/:id\" },\r\n                    react_1.default.createElement(CardAnimal_1.CardAnimal, null))))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black: #333333;\\n  --orange: #cc6633;\\n  --green: #a4cc33;\\n  --tomato: #dc3e22;\\n  --whiteLightness: 100%;\\n  --white: hsl(0, 0%, var(--whiteLightness));\\n  --grayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --greyEC: hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --greyD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --grey99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <link\\n  rel=\\\"stylesheet\\\"\\n  href=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css\\\"\\n  integrity=\\\"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor\\\"\\n  crossorigin=\\\"anonymous\\\"\\n/>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <title>Animals</title>\\n</head>\\n<body>\\n    <div id=\\\"react_root\\\">\" + content + \"</div>\\n    <div id=\\\"modal_root\\\"></div>\\n    <div id=\\\"dropdown_root\\\"></div>\\n</body>\\n</html>\\n\"; };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\n// импорты сжатия для деплоя\r\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\n// для безопасности\r\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar PORT = process.env.PORT || 3000;\r\nvar IS_DEV = \"development\" !== 'production';\r\nvar app = express_1.default();\r\nif (!IS_DEV) {\r\n    app.use(compression_1.default());\r\n    app.use(helmet_1.default({\r\n        contentSecurityPolicy: false,\r\n    }), helmet_1.default.crossOriginEmbedderPolicy({ policy: 'credentialless' }));\r\n}\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('*', function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.listen(PORT, function () {\r\n    console.log(\"Server started in http://localhost:\" + PORT);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardAnimal/CardAnimal.tsx":
/*!**********************************************!*\
  !*** ./src/shared/CardAnimal/CardAnimal.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardAnimal = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar cardanimal_css_1 = __importDefault(__webpack_require__(/*! ./cardanimal.css */ \"./src/shared/CardAnimal/cardanimal.css\"));\r\nfunction CardAnimal() {\r\n    var ref = react_1.useRef(null);\r\n    var history = react_router_dom_1.useHistory();\r\n    react_1.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node &&\r\n                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                history.push('/today');\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, [history]);\r\n    var node = document.getElementById('modal_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: cardanimal_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", null, \"\\u0417\\u0430\\u0433\\u043E\\u043B\\u043E\\u0432\\u043E\\u043A\"),\r\n        react_1.default.createElement(\"div\", { className: cardanimal_css_1.default.content },\r\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam officia corrupti, neque, fuga ipsa vel quas explicabo quisquam ratione nihil inventore illo commodi quia deleniti qui adipisci assumenda? Distinctio, eos.\"),\r\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iure facilis pariatur, aliquid esse architecto illum, dolor temporibus facere, perferendis autem tenetur commodi odit aut quod explicabo quisquam reiciendis soluta!\"),\r\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi ipsum eos possimus ratione ipsam cupiditate, iste repellendus dicta, maiores quos aperiam hic corporis. Libero facilis suscipit optio similique? Ratione?\"))), node);\r\n}\r\nexports.CardAnimal = CardAnimal;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardAnimal/CardAnimal.tsx?");

/***/ }),

/***/ "./src/shared/CardAnimal/cardanimal.css":
/*!**********************************************!*\
  !*** ./src/shared/CardAnimal/cardanimal.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"cardanimal__modal--38CXg\",\n\t\"content\": \"cardanimal__content--2jSQf\",\n\t\"close\": \"cardanimal__close--2k-DD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardAnimal/cardanimal.css?");

/***/ }),

/***/ "./src/shared/CardAnimal/index.ts":
/*!****************************************!*\
  !*** ./src/shared/CardAnimal/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardAnimal */ \"./src/shared/CardAnimal/CardAnimal.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardAnimal/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content },\r\n        react_1.default.createElement(react_bootstrap_1.Container, null, children)));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/Page404/Page404.tsx":
/*!************************************************!*\
  !*** ./src/shared/Content/Page404/Page404.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Page404 = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction Page404() {\r\n    return react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"404 \\u2014 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\");\r\n}\r\nexports.Page404 = Page404;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Page404/Page404.tsx?");

/***/ }),

/***/ "./src/shared/Content/Page404/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/Content/Page404/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Page404 */ \"./src/shared/Content/Page404/Page404.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Page404/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PageAnimals/PageAnimals.tsx":
/*!********************************************************!*\
  !*** ./src/shared/Content/PageAnimals/PageAnimals.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PageAnimals = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction PageAnimals() {\r\n    return react_1.default.createElement(\"h2\", null, \"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u0441\\u043E \\u0441\\u043F\\u0438\\u0441\\u043A\\u043E\\u043C \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445\");\r\n}\r\nexports.PageAnimals = PageAnimals;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PageAnimals/PageAnimals.tsx?");

/***/ }),

/***/ "./src/shared/Content/PageAnimals/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/Content/PageAnimals/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PageAnimals */ \"./src/shared/Content/PageAnimals/PageAnimals.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PageAnimals/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PageToday/PageToday.tsx":
/*!****************************************************!*\
  !*** ./src/shared/Content/PageToday/PageToday.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PageToday = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction PageToday() {\r\n    return react_1.default.createElement(\"h2\", null, \"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u0441 \\u043D\\u0430\\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u044F\\u043C\\u0438 \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445\");\r\n}\r\nexports.PageToday = PageToday;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PageToday/PageToday.tsx?");

/***/ }),

/***/ "./src/shared/Content/PageToday/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/Content/PageToday/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PageToday */ \"./src/shared/Content/PageToday/PageToday.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PageToday/index.ts?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar Logo_1 = __webpack_require__(/*! ../Icons/Logo */ \"./src/shared/Icons/Logo.tsx\");\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\r\nfunction Header() {\r\n    var _a = react_1.useState(true), isToday = _a[0], setIsToday = _a[1];\r\n    var come = function () {\r\n        setIsToday(!isToday);\r\n    };\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(react_bootstrap_1.Container, { className: \"d-flex justify-content-between align-items-center\" },\r\n            react_1.default.createElement(react_router_dom_1.Link, { to: \"/\", className: header_css_1.default.linkWrap },\r\n                react_1.default.createElement(Logo_1.Logo, null),\r\n                react_1.default.createElement(Text_1.Text, { size: 20 }, \"Pets\")),\r\n            isToday && (react_1.default.createElement(react_router_dom_1.Link, { to: \"/animals\", onClick: come },\r\n                react_1.default.createElement(react_bootstrap_1.Button, null, \"\\u0412\\u0441\\u0435 \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0435 \\u043F\\u0440\\u0438\\u044E\\u0442\\u0430\"))),\r\n            !isToday && (react_1.default.createElement(react_router_dom_1.Link, { to: \"/today\", onClick: come },\r\n                react_1.default.createElement(react_bootstrap_1.Button, null, \"\\u041D\\u0430\\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u044F \\u043D\\u0430 \\u0441\\u0435\\u0433\\u043E\\u0434\\u043D\\u044F\"))))));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\",\n\t\"linkWrap\": \"header__linkWrap--36fRD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Icons/Logo.tsx":
/*!***********************************!*\
  !*** ./src/shared/Icons/Logo.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Logo = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction Logo() {\r\n    return (React.createElement(\"svg\", { version: \"1.0\", xmlns: \"http://www.w3.org/2000/svg\", width: \"80\", height: \"56\", viewBox: \"0 0 840.000000 572.000000\", preserveAspectRatio: \"xMidYMid meet\" },\r\n        React.createElement(\"g\", { transform: \"translate(0.000000,572.000000) scale(0.100000,-0.100000)\", fill: \"#000000\", stroke: \"none\" },\r\n            React.createElement(\"path\", { d: \"M4080 4314 c-157 -19 -279 -73 -419 -182 -56 -45 -106 -82 -110 -82\\n          -3 1 -18 18 -33 40 -30 44 -112 111 -172 143 -81 41 -184 20 -271 -56 -50 -43\\n          -213 -287 -455 -677 -100 -162 -218 -344 -261 -405 -204 -285 -237 -469 -126\\n          -710 18 -38 83 -144 145 -235 155 -226 172 -256 236 -430 61 -165 97 -226 154\\n          -265 74 -50 148 -27 248 76 149 156 206 284 235 519 6 52 12 96 14 98 4 4 405\\n          -197 405 -203 0 -3 -20 -33 -45 -66 -58 -79 -121 -207 -141 -289 -20 -78 -22\\n          -187 -5 -258 13 -50 16 -54 70 -81 72 -37 223 -85 336 -108 129 -25 514 -25\\n          670 1 127 21 256 56 337 93 55 24 57 27 67 75 38 174 -18 384 -153 572 l-55\\n          76 190 96 c105 52 192 94 194 92 1 -2 9 -58 18 -125 27 -205 87 -335 223 -482\\n          97 -105 159 -130 237 -97 66 27 100 83 182 302 52 140 64 162 200 364 192 285\\n          235 383 235 528 0 121 -60 281 -153 407 -90 123 -123 174 -299 459 -222 358\\n          -388 609 -437 659 -49 51 -128 89 -190 90 -85 1 -218 -84 -284 -182 l-16 -24\\n          -38 27 c-21 15 -69 52 -108 82 -89 69 -190 120 -280 139 -71 16 -280 27 -345\\n          19z m403 -248 c149 -29 254 -95 354 -221 56 -71 73 -82 73 -47 0 22 54 136 80\\n          170 37 46 81 72 124 72 36 0 46 -6 96 -58 92 -97 206 -269 445 -667 272 -453\\n          289 -492 289 -660 -1 -133 -19 -196 -128 -438 -40 -89 -79 -180 -86 -202 -44\\n          -140 -155 -248 -253 -248 -52 0 -86 27 -119 93 -47 95 -69 239 -88 585 -25\\n          449 -41 631 -71 805 -37 218 -97 384 -155 429 -50 39 -57 3 -20 -105 54 -162\\n          71 -324 87 -858 l12 -389 -24 -19 c-119 -96 -419 -271 -589 -342 -228 -97\\n          -325 -106 -500 -47 -182 62 -490 228 -669 360 l-66 49 7 214 c24 694 35 829\\n          85 996 44 148 42 182 -11 141 -99 -78 -174 -410 -206 -904 -5 -93 -17 -276\\n          -25 -405 -23 -359 -53 -500 -121 -567 -95 -96 -272 17 -334 212 -7 22 -48 119\\n          -91 215 -107 242 -124 300 -123 430 0 162 16 200 283 645 126 209 256 421 291\\n          470 76 110 165 219 198 245 50 40 131 17 180 -50 30 -40 82 -150 82 -172 0\\n          -35 17 -24 73 47 152 193 312 249 682 240 88 -2 195 -11 238 -19z m76 -2273\\n          c90 -103 150 -247 151 -361 0 -37 -4 -45 -32 -62 -171 -106 -398 -160 -665\\n          -161 -84 0 -192 5 -240 11 -91 11 -242 46 -256 59 -11 11 8 100 37 170 49 121\\n          144 239 271 336 84 65 70 64 220 11 58 -21 119 -36 145 -36 51 0 155 27 245\\n          64 33 13 63 25 67 25 3 1 29 -25 57 -56z\" }),\r\n            React.createElement(\"path\", { d: \"M3650 3471 c-160 -49 -310 -242 -310 -399 l0 -45 39 61 c22 33 67 87\\n          99 119 60 58 168 131 178 120 3 -3 -3 -20 -12 -39 -27 -49 -25 -160 3 -214 28\\n          -53 61 -74 117 -74 87 0 155 91 156 206 0 191 -121 310 -270 265z\" }),\r\n            React.createElement(\"path\", { d: \"M4603 3461 c-73 -34 -123 -138 -123 -255 1 -112 69 -206 151 -206 61\\n          0 97 24 125 83 29 62 30 122 5 195 -10 28 -15 52 -11 52 4 0 34 -17 66 -39 76\\n          -48 156 -128 207 -205 l39 -61 -5 66 c-17 230 -285 449 -454 370z\" }),\r\n            React.createElement(\"path\", { d: \"M4053 2596 c-71 -18 -142 -55 -167 -90 l-21 -28 34 -28 c18 -16 79\\n          -45 135 -66 55 -20 107 -42 114 -47 17 -13 47 -73 56 -109 l6 -28 -121 0 c-67\\n          0 -120 -2 -118 -5 12 -11 133 -35 229 -45 113 -11 183 -4 246 26 38 18 94 88\\n          94 117 0 18 -1 18 -32 -3 -18 -11 -52 -30 -75 -40 -49 -22 -200 -56 -209 -47\\n          -11 11 6 74 29 107 18 26 43 40 124 70 168 63 196 89 151 137 -55 60 -172 93\\n          -323 92 -55 0 -123 -6 -152 -13z\" }))));\r\n}\r\nexports.Logo = Logo;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Logo.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children);\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Login/Login.tsx":
/*!************************************!*\
  !*** ./src/shared/Login/Login.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Login = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\r\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\r\nvar loadDataAuth_1 = __webpack_require__(/*! ../../utils/react/loadDataAuth */ \"./src/utils/react/loadDataAuth.ts\");\r\nvar login_css_1 = __importDefault(__webpack_require__(/*! ./login.css */ \"./src/shared/Login/login.css\"));\r\nfunction Login() {\r\n    var _this = this;\r\n    // стейты на логин и пароль\r\n    var _a = react_1.useState(''), login = _a[0], setLogin = _a[1];\r\n    var _b = react_1.useState(''), password = _b[0], setPassword = _b[1];\r\n    // стейты на ошибку\r\n    var _c = react_1.useState(false), isError = _c[0], setIsError = _c[1];\r\n    var _d = react_1.useState(''), error = _d[0], setError = _d[1];\r\n    // стейт для отправки асинхронного запроса\r\n    var _e = react_1.useState(false), isSend = _e[0], setIsSend = _e[1];\r\n    // стейт под лоадер\r\n    var _f = react_1.useState(false), loading = _f[0], setLoading = _f[1];\r\n    // react-hook-form\r\n    var _g = react_hook_form_1.useForm(), register = _g.register, handleSubmit = _g.handleSubmit, errors = _g.formState.errors;\r\n    // получаем данные из формы\r\n    var onSubmit = function (formData) {\r\n        if (formData.currentLogin !== undefined &&\r\n            formData.currentPassword !== undefined) {\r\n            setLogin(formData.currentLogin);\r\n            setPassword(formData.currentPassword);\r\n            setIsSend(true);\r\n        }\r\n    };\r\n    react_1.useEffect(function () {\r\n        // асинхронная функция авторизации\r\n        var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {\r\n            var data;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        // активируем лоадер\r\n                        setLoading(true);\r\n                        // сбрасываем ошибки\r\n                        setIsError(false);\r\n                        return [4 /*yield*/, loadDataAuth_1.loadDataAuth(login, password)];\r\n                    case 1:\r\n                        data = _a.sent();\r\n                        // убираем лоадер\r\n                        setLoading(false);\r\n                        // если ошибки - показываем их\r\n                        if (data.status === 'error' && data.result !== undefined) {\r\n                            setIsError(true);\r\n                            setError(String(data.result));\r\n                            // иначе записываем данные в localStorage\r\n                        }\r\n                        else {\r\n                            localStorage.setItem('user', JSON.stringify({ auth: true, user: data.result }));\r\n                            window.location.href = '/';\r\n                        }\r\n                        // сбразываем стейт отправки\r\n                        setIsSend(false);\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        }); };\r\n        // запрос на отправку асинхронного запроса есть?\r\n        if (isSend) {\r\n            // выполняем его\r\n            fetchData();\r\n        }\r\n    }, [isSend, login, password]);\r\n    return (react_1.default.createElement(\"div\", { style: { height: '80vh' }, className: login_css_1.default.box },\r\n        react_1.default.createElement(\"div\", { style: { width: 300 } },\r\n            react_1.default.createElement(\"h1\", { style: { textAlign: 'center' } }, \"\\u0410\\u0432\\u0442\\u043E\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u044F\"),\r\n            loading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' }, className: \"mt-4\" },\r\n                react_1.default.createElement(react_bootstrap_1.Spinner, { animation: \"border\", role: \"status\" },\r\n                    react_1.default.createElement(\"span\", { className: \"visually-hidden\" }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")))),\r\n            !loading && (react_1.default.createElement(react_bootstrap_1.Form, { onSubmit: handleSubmit(onSubmit) },\r\n                react_1.default.createElement(react_bootstrap_1.Form.Group, { className: login_css_1.default.group },\r\n                    react_1.default.createElement(react_bootstrap_1.Form.Label, null, \"\\u041B\\u043E\\u0433\\u0438\\u043D\"),\r\n                    react_1.default.createElement(react_bootstrap_1.Form.Control, __assign({ type: \"text\", placeholder: \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u043B\\u043E\\u0433\\u0438\\u043D\", \"aria-invalid\": errors.currentLogin ? 'true' : undefined }, register('currentLogin', { required: true, minLength: 6 }))),\r\n                    errors.currentLogin && (react_1.default.createElement(\"p\", { className: login_css_1.default.error }, \"\\u041B\\u043E\\u0433\\u0438\\u043D \\u0434\\u043E\\u043B\\u0436\\u0435\\u043D \\u0431\\u044B\\u0442\\u044C \\u043D\\u0435 \\u043C\\u0435\\u043D\\u0435\\u0435 6-\\u0445 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432\"))),\r\n                react_1.default.createElement(react_bootstrap_1.Form.Group, { className: login_css_1.default.group },\r\n                    react_1.default.createElement(react_bootstrap_1.Form.Label, null, \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C\"),\r\n                    react_1.default.createElement(react_bootstrap_1.Form.Control, __assign({ type: \"password\", placeholder: \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C\", \"aria-invalid\": errors.currentPassword ? 'true' : undefined }, register('currentPassword', {\r\n                        required: true,\r\n                        minLength: 6,\r\n                    }))),\r\n                    errors.currentPassword && (react_1.default.createElement(\"p\", { className: login_css_1.default.error }, \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C \\u0434\\u043E\\u043B\\u0436\\u0435\\u043D \\u0431\\u044B\\u0442\\u044C \\u043D\\u0435 \\u043C\\u0435\\u043D\\u0435\\u0435 6-\\u0445 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432\"))),\r\n                react_1.default.createElement(react_bootstrap_1.Button, { variant: \"primary\", type: \"submit\", className: \"w-100 mt-3 mb-3\" }, \"\\u0412\\u043E\\u0439\\u0442\\u0438\"))),\r\n            !loading && isError && react_1.default.createElement(\"div\", { className: login_css_1.default.error }, error))));\r\n}\r\nexports.Login = Login;\r\n\n\n//# sourceURL=webpack:///./src/shared/Login/Login.tsx?");

/***/ }),

/***/ "./src/shared/Login/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Login/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Login */ \"./src/shared/Login/Login.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Login/index.ts?");

/***/ }),

/***/ "./src/shared/Login/login.css":
/*!************************************!*\
  !*** ./src/shared/Login/login.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"box\": \"login__box--ZwOrm\",\n\t\"group\": \"login__group--hCqdr\",\n\t\"error\": \"login__error--2MXK5\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Login/login.css?");

/***/ }),

/***/ "./src/shared/PrivateRoute/PrivateRoute.tsx":
/*!**************************************************!*\
  !*** ./src/shared/PrivateRoute/PrivateRoute.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PrivateRoute = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction PrivateRoute(_a) {\r\n    var Component = _a.component, auth = _a.auth, rest = __rest(_a, [\"component\", \"auth\"]);\r\n    return (react_1.default.createElement(react_router_dom_1.Route\r\n    // eslint-disable-next-line react/jsx-props-no-spreading\r\n    , __assign({}, rest, { render: function (props) {\r\n            return auth === true ? (react_1.default.createElement(Component, null)) : (react_1.default.createElement(react_router_dom_1.Redirect, { to: { pathname: '/login', state: { from: props.location } } }));\r\n        } })));\r\n}\r\nexports.PrivateRoute = PrivateRoute;\r\n\n\n//# sourceURL=webpack:///./src/shared/PrivateRoute/PrivateRoute.tsx?");

/***/ }),

/***/ "./src/shared/PrivateRoute/index.ts":
/*!******************************************!*\
  !*** ./src/shared/PrivateRoute/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PrivateRoute */ \"./src/shared/PrivateRoute/PrivateRoute.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/PrivateRoute/index.ts?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColor = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"greyF4\"] = \"greyF4\";\r\n    EColor[\"greyF3\"] = \"greyF3\";\r\n    EColor[\"greyD9\"] = \"greyD9\";\r\n    EColor[\"greyC4\"] = \"greyC4\";\r\n    EColor[\"grey99\"] = \"grey99\";\r\n    EColor[\"grey66\"] = \"grey66\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\nfunction Text(props) {\r\n    var _a, _b, _c;\r\n    var _d = props.As, As = _d === void 0 ? 'span' : _d, _e = props.color, color = _e === void 0 ? EColor.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    var classes = classnames_1.default(text_css_1.default[\"s\" + size], (_a = {}, _a[text_css_1.default[\"m\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"t\" + tabletSize]] = tabletSize, _b), (_c = {}, _c[text_css_1.default[\"d\" + desktopSize]] = desktopSize, _c), text_css_1.default[color]);\r\n    return react_1.default.createElement(As, { className: classes }, children);\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"white\": \"text__white--13JGE\",\n\t\"grayF4\": \"text__grayF4--2X2jV\",\n\t\"greyF3\": \"text__greyF3--2Lfsi\",\n\t\"greyD9\": \"text__greyD9--7iRFr\",\n\t\"greyC4\": \"text__greyC4--3oiNM\",\n\t\"grey99\": \"text__grey99--35u3B\",\n\t\"grey66\": \"text__grey66--373uw\",\n\t\"upperCase\": \"text__upperCase--2EMyT\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"bold\": \"text__bold--gb02H\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/utils/react/getUserLocalStorage.ts":
/*!************************************************!*\
  !*** ./src/utils/react/getUserLocalStorage.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getUserLocalStorage = void 0;\r\n/**\r\n * Функция достает из localStorage объект пользователя по ключу\r\n * @returns возвращаем объект из стора либо пустой\r\n */\r\nfunction getUserLocalStorage() {\r\n    var obj = {};\r\n    if (typeof window !== 'undefined' && localStorage.getItem('user') !== null) {\r\n        obj = JSON.parse(localStorage.getItem('user') || '{}');\r\n    }\r\n    return obj;\r\n}\r\nexports.getUserLocalStorage = getUserLocalStorage;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/getUserLocalStorage.ts?");

/***/ }),

/***/ "./src/utils/react/loadDataAuth.ts":
/*!*****************************************!*\
  !*** ./src/utils/react/loadDataAuth.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.loadDataAuth = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\n/**\r\n * Функция авторизации, в случае успеха вернет объект с токеном\r\n * @param user логин пользователя\r\n * @param pass пароль пользователя\r\n * @returns возвращаем объект с двумя свойствами(status и result)\r\n */\r\nfunction loadDataAuth(user, pass) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var url, auth, config, res, error_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    url = 'https://acits-test-back.herokuapp.com/api/login';\r\n                    auth = {\r\n                        login: user,\r\n                        password: pass,\r\n                    };\r\n                    config = {\r\n                        headers: {\r\n                            'Content-type': 'application/json',\r\n                        },\r\n                    };\r\n                    _a.label = 1;\r\n                case 1:\r\n                    _a.trys.push([1, 3, , 4]);\r\n                    return [4 /*yield*/, axios_1.default.post(url, auth, config)];\r\n                case 2:\r\n                    res = _a.sent();\r\n                    if (res.data !== undefined) {\r\n                        return [2 /*return*/, {\r\n                                status: 'success',\r\n                                result: res.data,\r\n                            }];\r\n                    }\r\n                    return [3 /*break*/, 4];\r\n                case 3:\r\n                    error_1 = _a.sent();\r\n                    console.log(\"Message: \" + String(error_1));\r\n                    return [3 /*break*/, 4];\r\n                case 4: return [2 /*return*/, {\r\n                        status: 'error',\r\n                        result: 'Пользователь не найден',\r\n                    }];\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.loadDataAuth = loadDataAuth;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/loadDataAuth.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");\n\n//# sourceURL=webpack:///external_%22react-bootstrap%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");\n\n//# sourceURL=webpack:///external_%22react-hook-form%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });