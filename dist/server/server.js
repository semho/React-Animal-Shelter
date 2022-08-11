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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(40), exports);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserLocalStorage = void 0;
/**
 * Функция достает из localStorage объект пользователя по ключу
 * @returns возвращаем объект из стора либо пустой
 */
function getUserLocalStorage() {
    var obj = {};
    if (typeof window !== 'undefined' && localStorage.getItem('user') !== null) {
        obj = JSON.parse(localStorage.getItem('user') || '{}');
    }
    return obj;
}
exports.getUserLocalStorage = getUserLocalStorage;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.addAnimal = void 0;
var initialState = { animals: [] };
var ADD_ANIMAL = 'ADD_ANIMAL';
var addAnimal = function (animals) { return ({
    type: ADD_ANIMAL,
    animals: animals,
}); };
exports.addAnimal = addAnimal;
var rootReducer = function (
// eslint-disable-next-line @typescript-eslint/default-param-last
state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADD_ANIMAL:
            return __assign(__assign({}, state), { animals: action.animals });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(10));
var server_1 = __importDefault(__webpack_require__(11));
// импорты сжатия для деплоя
var compression_1 = __importDefault(__webpack_require__(12));
// для безопасности
var helmet_1 = __importDefault(__webpack_require__(13));
var indexTemplate_1 = __webpack_require__(14);
var App_1 = __webpack_require__(15);
var PORT = process.env.PORT || 3000;
var IS_DEV = "production" !== 'production';
var app = express_1.default();
if (!IS_DEV) {
    app.use(compression_1.default());
    app.use(helmet_1.default({
        contentSecurityPolicy: false,
    }), helmet_1.default.crossOriginEmbedderPolicy({ policy: 'credentialless' }));
}
app.use('/static', express_1.default.static('./dist/client'));
app.get('*', function (req, res) {
    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));
});
app.listen(PORT, function () {
    console.log("Server started in http://localhost:" + PORT);
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link\n  rel=\"stylesheet\"\n  href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css\"\n  integrity=\"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor\"\n  crossorigin=\"anonymous\"\n/>\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <title>Animals</title>\n</head>\n<body>\n    <div id=\"react_root\">" + content + "</div>\n    <div id=\"modal_root\"></div>\n    <div id=\"dropdown_root\"></div>\n</body>\n</html>\n"; };
exports.indexTemplate = indexTemplate;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.store = void 0;
var react_1 = __importStar(__webpack_require__(0));
__webpack_require__(16);
var root_1 = __webpack_require__(18);
var react_router_dom_1 = __webpack_require__(1);
var react_redux_1 = __webpack_require__(7);
var redux_1 = __webpack_require__(19);
var redux_thunk_1 = __importDefault(__webpack_require__(20));
var redux_devtools_extension_1 = __webpack_require__(21);
var Layout_1 = __webpack_require__(22);
var Header_1 = __webpack_require__(25);
var Content_1 = __webpack_require__(31);
var CardAnimal_1 = __webpack_require__(34);
var PageAnimals_1 = __webpack_require__(38);
var PrivateRoute_1 = __webpack_require__(45);
var Login_1 = __webpack_require__(47);
var PageToday_1 = __webpack_require__(52);
var Page404_1 = __webpack_require__(4);
var getUserLocalStorage_1 = __webpack_require__(6);
var store_1 = __webpack_require__(8);
exports.store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
function AppComponent() {
    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];
    var _b = react_1.useState(false), isAuth = _b[0], setIsAuth = _b[1];
    // 10 минут активности токена
    var LIMIT = 60 * 10 * 1000;
    // объект user из localStorage с токеном
    var user = getUserLocalStorage_1.getUserLocalStorage();
    react_1.useEffect(function () {
        setMounted(true);
        if (user.auth) {
            setIsAuth(true);
        }
        var timer = setTimeout(function () {
            localStorage.removeItem('user');
            setIsAuth(false);
        }, LIMIT);
        return function () { return clearInterval(timer); };
    }, [LIMIT, user.auth, user.lifetime]);
    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    react_1.default.createElement(react_1.default.Fragment, null, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Layout_1.Layout, null,
            !isAuth && (react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/login", component: Login_1.Login }),
                react_1.default.createElement(react_router_dom_1.Route, { component: Page404_1.Page404 }))),
            isAuth && react_1.default.createElement(Header_1.Header, null),
            react_1.default.createElement(Content_1.Content, null,
                react_1.default.createElement(react_router_dom_1.Switch, null,
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/" },
                        react_1.default.createElement(react_router_dom_1.Redirect, { to: "/today" })),
                    isAuth && (react_1.default.createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/login" },
                        react_1.default.createElement(react_router_dom_1.Redirect, { to: "/today" }))),
                    react_1.default.createElement(PrivateRoute_1.PrivateRoute, { auth: isAuth, path: "/today", component: PageToday_1.PageToday }),
                    react_1.default.createElement(PrivateRoute_1.PrivateRoute, { auth: isAuth, path: "/animals", component: PageAnimals_1.PageAnimals }),
                    isAuth && react_1.default.createElement(react_router_dom_1.Route, { component: Page404_1.Page404 })),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/today/:id" },
                    react_1.default.createElement(CardAnimal_1.CardAnimal, null)),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/animals/:id" },
                    react_1.default.createElement(CardAnimal_1.CardAnimal, null))))))));
}
exports.App = root_1.hot(function () { return (react_1.default.createElement(react_redux_1.Provider, { store: exports.store },
    react_1.default.createElement(AppComponent, null))); });


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
exports.push([module.i, ":root {\n  --black: #333333;\n  --orange: #cc6633;\n  --green: #a4cc33;\n  --tomato: #dc3e22;\n  --whiteLightness: 100%;\n  --white: hsl(0, 0%, var(--whiteLightness));\n  --grayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\n  --greyF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\n  --greyEC: hsl(0, 0%, calc(var(--whiteLightness) - 7%));\n  --greyD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\n  --greyC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\n  --grey99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\n  --grey66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: var(--grayF4);\n  font-size: 14px;\n  line-height: 16px;\n  font-family: 'Roboto', serif;\n}\n\n* {\n  color: var(--black);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(23), exports);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_css_1 = __importDefault(__webpack_require__(24));
function Layout(_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: layout_css_1.default.layout }, children);
}
exports.Layout = Layout;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_bootstrap_1 = __webpack_require__(2);
var react_router_dom_1 = __webpack_require__(1);
var Logo_1 = __webpack_require__(26);
var header_css_1 = __importDefault(__webpack_require__(27));
var Text_1 = __webpack_require__(3);
function Header() {
    var _a = react_1.useState(true), isToday = _a[0], setIsToday = _a[1];
    var come = function () {
        setIsToday(!isToday);
    };
    var today = function () {
        setIsToday(true);
    };
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement(react_bootstrap_1.Container, { className: "d-flex justify-content-between align-items-center" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: header_css_1.default.linkWrap, onClick: today },
                react_1.default.createElement(Logo_1.Logo, null),
                react_1.default.createElement(Text_1.Text, { size: 20 }, "Pets")),
            isToday && (react_1.default.createElement(react_router_dom_1.Link, { to: "/animals", onClick: come },
                react_1.default.createElement(react_bootstrap_1.Button, null, "\u0412\u0441\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u043F\u0440\u0438\u044E\u0442\u0430"))),
            !isToday && (react_1.default.createElement(react_router_dom_1.Link, { to: "/today", onClick: come },
                react_1.default.createElement(react_bootstrap_1.Button, null, "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F"))))));
}
exports.Header = Header;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
var React = __importStar(__webpack_require__(0));
function Logo() {
    return (React.createElement("svg", { version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: "80", height: "56", viewBox: "0 0 840.000000 572.000000", preserveAspectRatio: "xMidYMid meet" },
        React.createElement("g", { transform: "translate(0.000000,572.000000) scale(0.100000,-0.100000)", fill: "#000000", stroke: "none" },
            React.createElement("path", { d: "M4080 4314 c-157 -19 -279 -73 -419 -182 -56 -45 -106 -82 -110 -82\n          -3 1 -18 18 -33 40 -30 44 -112 111 -172 143 -81 41 -184 20 -271 -56 -50 -43\n          -213 -287 -455 -677 -100 -162 -218 -344 -261 -405 -204 -285 -237 -469 -126\n          -710 18 -38 83 -144 145 -235 155 -226 172 -256 236 -430 61 -165 97 -226 154\n          -265 74 -50 148 -27 248 76 149 156 206 284 235 519 6 52 12 96 14 98 4 4 405\n          -197 405 -203 0 -3 -20 -33 -45 -66 -58 -79 -121 -207 -141 -289 -20 -78 -22\n          -187 -5 -258 13 -50 16 -54 70 -81 72 -37 223 -85 336 -108 129 -25 514 -25\n          670 1 127 21 256 56 337 93 55 24 57 27 67 75 38 174 -18 384 -153 572 l-55\n          76 190 96 c105 52 192 94 194 92 1 -2 9 -58 18 -125 27 -205 87 -335 223 -482\n          97 -105 159 -130 237 -97 66 27 100 83 182 302 52 140 64 162 200 364 192 285\n          235 383 235 528 0 121 -60 281 -153 407 -90 123 -123 174 -299 459 -222 358\n          -388 609 -437 659 -49 51 -128 89 -190 90 -85 1 -218 -84 -284 -182 l-16 -24\n          -38 27 c-21 15 -69 52 -108 82 -89 69 -190 120 -280 139 -71 16 -280 27 -345\n          19z m403 -248 c149 -29 254 -95 354 -221 56 -71 73 -82 73 -47 0 22 54 136 80\n          170 37 46 81 72 124 72 36 0 46 -6 96 -58 92 -97 206 -269 445 -667 272 -453\n          289 -492 289 -660 -1 -133 -19 -196 -128 -438 -40 -89 -79 -180 -86 -202 -44\n          -140 -155 -248 -253 -248 -52 0 -86 27 -119 93 -47 95 -69 239 -88 585 -25\n          449 -41 631 -71 805 -37 218 -97 384 -155 429 -50 39 -57 3 -20 -105 54 -162\n          71 -324 87 -858 l12 -389 -24 -19 c-119 -96 -419 -271 -589 -342 -228 -97\n          -325 -106 -500 -47 -182 62 -490 228 -669 360 l-66 49 7 214 c24 694 35 829\n          85 996 44 148 42 182 -11 141 -99 -78 -174 -410 -206 -904 -5 -93 -17 -276\n          -25 -405 -23 -359 -53 -500 -121 -567 -95 -96 -272 17 -334 212 -7 22 -48 119\n          -91 215 -107 242 -124 300 -123 430 0 162 16 200 283 645 126 209 256 421 291\n          470 76 110 165 219 198 245 50 40 131 17 180 -50 30 -40 82 -150 82 -172 0\n          -35 17 -24 73 47 152 193 312 249 682 240 88 -2 195 -11 238 -19z m76 -2273\n          c90 -103 150 -247 151 -361 0 -37 -4 -45 -32 -62 -171 -106 -398 -160 -665\n          -161 -84 0 -192 5 -240 11 -91 11 -242 46 -256 59 -11 11 8 100 37 170 49 121\n          144 239 271 336 84 65 70 64 220 11 58 -21 119 -36 145 -36 51 0 155 27 245\n          64 33 13 63 25 67 25 3 1 29 -25 57 -56z" }),
            React.createElement("path", { d: "M3650 3471 c-160 -49 -310 -242 -310 -399 l0 -45 39 61 c22 33 67 87\n          99 119 60 58 168 131 178 120 3 -3 -3 -20 -12 -39 -27 -49 -25 -160 3 -214 28\n          -53 61 -74 117 -74 87 0 155 91 156 206 0 191 -121 310 -270 265z" }),
            React.createElement("path", { d: "M4603 3461 c-73 -34 -123 -138 -123 -255 1 -112 69 -206 151 -206 61\n          0 97 24 125 83 29 62 30 122 5 195 -10 28 -15 52 -11 52 4 0 34 -17 66 -39 76\n          -48 156 -128 207 -205 l39 -61 -5 66 c-17 230 -285 449 -454 370z" }),
            React.createElement("path", { d: "M4053 2596 c-71 -18 -142 -55 -167 -90 l-21 -28 34 -28 c18 -16 79\n          -45 135 -66 55 -20 107 -42 114 -47 17 -13 47 -73 56 -109 l6 -28 -121 0 c-67\n          0 -120 -2 -118 -5 12 -11 133 -35 229 -45 113 -11 183 -4 246 26 38 18 94 88\n          94 117 0 18 -1 18 -32 -3 -18 -11 -52 -30 -75 -40 -49 -22 -200 -56 -209 -47\n          -11 11 6 74 29 107 18 26 43 40 124 70 168 63 196 89 151 137 -55 60 -172 93\n          -323 92 -55 0 -123 -6 -152 -13z" }))));
}
exports.Logo = Logo;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG",
	"linkWrap": "header__linkWrap--36fRD"
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.EColor = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var classnames_1 = __importDefault(__webpack_require__(29));
var text_css_1 = __importDefault(__webpack_require__(30));
var EColor;
(function (EColor) {
    EColor["black"] = "black";
    EColor["orange"] = "orange";
    EColor["green"] = "green";
    EColor["white"] = "white";
    EColor["greyF4"] = "greyF4";
    EColor["greyF3"] = "greyF3";
    EColor["greyD9"] = "greyD9";
    EColor["greyC4"] = "greyC4";
    EColor["grey99"] = "grey99";
    EColor["grey66"] = "grey66";
})(EColor = exports.EColor || (exports.EColor = {}));
function Text(props) {
    var _a, _b, _c;
    var _d = props.As, As = _d === void 0 ? 'span' : _d, _e = props.color, color = _e === void 0 ? EColor.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    var classes = classnames_1.default(text_css_1.default["s" + size], (_a = {}, _a[text_css_1.default["m" + mobileSize]] = mobileSize, _a), (_b = {}, _b[text_css_1.default["t" + tabletSize]] = tabletSize, _b), (_c = {}, _c[text_css_1.default["d" + desktopSize]] = desktopSize, _c), text_css_1.default[color]);
    return react_1.default.createElement(As, { className: classes }, children);
}
exports.Text = Text;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s28": "text__s28--Puvgs",
	"s20": "text__s20--3Xq66",
	"s16": "text__s16--G_lUr",
	"s14": "text__s14--jvCoO",
	"s12": "text__s12--2S2T2",
	"s10": "text__s10--DYLfy",
	"black": "text__black--1zchg",
	"orange": "text__orange--1RyAM",
	"green": "text__green--3mYQn",
	"white": "text__white--13JGE",
	"grayF4": "text__grayF4--2X2jV",
	"greyF3": "text__greyF3--2Lfsi",
	"greyD9": "text__greyD9--7iRFr",
	"greyC4": "text__greyC4--3oiNM",
	"grey99": "text__grey99--35u3B",
	"grey66": "text__grey66--373uw",
	"upperCase": "text__upperCase--2EMyT",
	"m28": "text__m28--2u2zs",
	"m20": "text__m20--1gFlM",
	"m16": "text__m16--cSY4u",
	"m14": "text__m14--s6pnr",
	"m12": "text__m12--1W0av",
	"m10": "text__m10--UtIkW",
	"bold": "text__bold--gb02H",
	"t28": "text__t28--A4rHF",
	"t20": "text__t20--78tCz",
	"t16": "text__t16--nkVMz",
	"t14": "text__t14--1Rj72",
	"t12": "text__t12--7txjW",
	"t10": "text__t10--n2R7f",
	"d28": "text__d28--3oIok",
	"d20": "text__d20--uwHxr",
	"d16": "text__d16--1Pwd1",
	"d14": "text__d14--3Futo",
	"d12": "text__d12--5X_qc",
	"d10": "text__d10--3pWnc"
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_bootstrap_1 = __webpack_require__(2);
var content_css_1 = __importDefault(__webpack_require__(33));
function Content(_a) {
    var children = _a.children;
    return (react_1.default.createElement("main", { className: content_css_1.default.content },
        react_1.default.createElement(react_bootstrap_1.Container, null, children)));
}
exports.Content = Content;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S"
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(35), exports);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardAnimal = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(36));
var react_router_dom_1 = __webpack_require__(1);
var cardanimal_css_1 = __importDefault(__webpack_require__(37));
function CardAnimal() {
    var ref = react_1.useRef(null);
    var history = react_router_dom_1.useHistory();
    react_1.useEffect(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node &&
                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                history.push('/today');
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, [history]);
    var node = document.getElementById('modal_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { className: cardanimal_css_1.default.modal, ref: ref },
        react_1.default.createElement("h2", null, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),
        react_1.default.createElement("div", { className: cardanimal_css_1.default.content },
            react_1.default.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam officia corrupti, neque, fuga ipsa vel quas explicabo quisquam ratione nihil inventore illo commodi quia deleniti qui adipisci assumenda? Distinctio, eos."),
            react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iure facilis pariatur, aliquid esse architecto illum, dolor temporibus facere, perferendis autem tenetur commodi odit aut quod explicabo quisquam reiciendis soluta!"),
            react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi ipsum eos possimus ratione ipsam cupiditate, iste repellendus dicta, maiores quos aperiam hic corporis. Libero facilis suscipit optio similique? Ratione?"))), node);
}
exports.CardAnimal = CardAnimal;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "cardanimal__modal--38CXg",
	"content": "cardanimal__content--2jSQf",
	"close": "cardanimal__close--2k-DD"
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(39), exports);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageAnimals = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_bootstrap_1 = __webpack_require__(2);
var react_router_dom_1 = __webpack_require__(1);
var Text_1 = __webpack_require__(3);
var Page404_1 = __webpack_require__(4);
var loadAnimals_1 = __webpack_require__(42);
var store_1 = __webpack_require__(8);
var pageanimals_css_1 = __importDefault(__webpack_require__(43));
var hooks_1 = __webpack_require__(44);
function PageAnimals() {
    var LIMIT = 5; // константа по сколько животных открывать
    var _a = react_1.useState(0), offset = _a[0], setOffset = _a[1]; // с какой позиции открывать
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1]; // состояние лоадера
    var _c = react_1.useState(''), errorLoading = _c[0], setErrorLoading = _c[1]; // под ошибки
    var _d = react_1.useState([]), animals = _d[0], setAnimals = _d[1]; // под массив объектов с животными
    var _e = react_1.useState(false), loadMore = _e[0], setLoadMore = _e[1]; // состояние кнопки пагинации
    var _f = react_1.useState(true), firstLoad = _f[0], setFirstLoad = _f[1]; // первая загрузка списка
    var _g = react_1.useState(0), maxAnimals = _g[0], setMaxAnimals = _g[1]; // максимальное значение животных
    var dispatch = hooks_1.useAppDispatch();
    dispatch(store_1.addAnimal(animals));
    var handleClick = function () {
        setLoadMore(true);
        // увеличиваем позицию с которой брать следующий массив объектов
        setOffset(offset + LIMIT);
    };
    react_1.useEffect(function () {
        if (firstLoad) {
            loadAnimals_1.loadAnimals(LIMIT, offset, setLoading, setErrorLoading, setAnimals, setMaxAnimals);
            setFirstLoad(false);
        }
        if (loadMore) {
            loadAnimals_1.loadAnimals(LIMIT, offset, setLoading, setErrorLoading, setAnimals, setMaxAnimals);
            setLoadMore(false);
        }
    }, [firstLoad, loadMore]);
    return (react_1.default.createElement("div", { className: pageanimals_css_1.default.wrapper },
        react_1.default.createElement("h2", null, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u043E \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445"),
        react_1.default.createElement(react_bootstrap_1.ListGroup, { as: "ol", numbered: true, className: pageanimals_css_1.default.listGroup }, animals.map(function (item) {
            return (react_1.default.createElement(react_bootstrap_1.ListGroup.Item, { action: true, variant: "light", as: "li", className: pageanimals_css_1.default.item + " d-flex", key: item.id, id: item.id },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/animals/" + item.id, className: "d-flex justify-content-between align-items-start", style: { width: '100%' } },
                    react_1.default.createElement("div", { className: "ms-2 me-auto" },
                        react_1.default.createElement(Text_1.Text, { size: 14, As: "p" },
                            "\u041A\u043B\u0438\u0447\u043A\u0430:",
                            ' ',
                            react_1.default.createElement("span", { style: { fontWeight: 'bold' } }, item.name),
                            ". \u041F\u043E\u0440\u043E\u0434\u0430:",
                            ' ',
                            react_1.default.createElement("span", { style: { fontWeight: 'bold' } }, item.spec.name),
                            ".")))));
        })),
        !loading &&
            !errorLoading &&
            animals.length > 0 &&
            animals.length !== maxAnimals && (react_1.default.createElement("div", { style: { textAlign: 'center' } },
            react_1.default.createElement(react_bootstrap_1.Button, { onClick: handleClick }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435"))),
        loading && (react_1.default.createElement("div", { style: { textAlign: 'center', transform: 'translateY(20vh)' }, className: "mt-4" },
            react_1.default.createElement(react_bootstrap_1.Spinner, { animation: "border", role: "status", style: { width: '3rem', height: '3rem' } },
                react_1.default.createElement("span", { className: "visually-hidden" }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")))),
        errorLoading && (react_1.default.createElement("div", { role: "alert", style: { textAlign: 'center' } },
            react_1.default.createElement(Page404_1.Page404, { message: errorLoading }))),
        animals.length === 0 && !loading && !errorLoading && (react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435 \u0432 \u043F\u0440\u0438\u044E\u0442\u0435 \u043D\u0430 \u043D\u0430\u0439\u0434\u0435\u043D\u044B"))));
}
exports.PageAnimals = PageAnimals;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page404 = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var page404_css_1 = __importDefault(__webpack_require__(41));
var Text_1 = __webpack_require__(3);
function Page404(_a) {
    var _b = _a.message, message = _b === void 0 ? '404 — страница не найдена' : _b;
    return (react_1.default.createElement("div", { className: page404_css_1.default.box },
        react_1.default.createElement(Text_1.Text, { size: 28 }, message)));
}
exports.Page404 = Page404;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"box": "page404__box--3Erh1"
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAnimals = void 0;
var axios_1 = __importDefault(__webpack_require__(5));
var getUserLocalStorage_1 = __webpack_require__(6);
/**
 * Асинхронная функция загружает всех животных приюта
 * @param limit - по сколько показывать
 * @param offset - с какой позиции
 * @param setLoading - стейт для лоадера
 * @param setErrorLoading - стейт для ошибок
 * @param setAnimals - стейт под массив объектов животных
 * @param setMaxAnimals - сколько животных всего
 */
function loadAnimals(limit, offset, setLoading, setErrorLoading, setAnimals, setMaxAnimals) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var token, data_1, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    token = (_a = getUserLocalStorage_1.getUserLocalStorage().user) === null || _a === void 0 ? void 0 : _a.accessToken;
                    setLoading(true);
                    setErrorLoading('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get('https://acits-test-back.herokuapp.com/api/animals', {
                            headers: { Authorization: "Bearer " + token },
                            params: { limit: limit, offset: String(offset) },
                        })];
                case 2:
                    data_1 = (_b.sent()).data;
                    if (data_1.count > 0) {
                        // берем предыдущее состояние и добавляем к нему текущее
                        setAnimals(function (prevRes) { return prevRes.concat(data_1.results); });
                        setMaxAnimals(data_1.count);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    setErrorLoading(String(error_1));
                    return [3 /*break*/, 4];
                case 4:
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadAnimals = loadAnimals;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "pageanimals__wrapper--3gJA4",
	"listGroup": "pageanimals__listGroup--3i9uP",
	"item": "pageanimals__item--2W0Yu",
	"destination": "pageanimals__destination--1yC5X"
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSelector = exports.useAppDispatch = void 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var react_redux_1 = __webpack_require__(7);
exports.useAppDispatch = react_redux_1.useDispatch;
exports.useAppSelector = react_redux_1.useSelector;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateRoute = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_router_dom_1 = __webpack_require__(1);
function PrivateRoute(_a) {
    var Component = _a.component, auth = _a.auth, rest = __rest(_a, ["component", "auth"]);
    return (react_1.default.createElement(react_router_dom_1.Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    , __assign({}, rest, { render: function (props) {
            return auth === true ? (react_1.default.createElement(Component, null)) : (react_1.default.createElement(react_router_dom_1.Redirect, { to: { pathname: '/login', state: { from: props.location } } }));
        } })));
}
exports.PrivateRoute = PrivateRoute;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_bootstrap_1 = __webpack_require__(2);
var react_hook_form_1 = __webpack_require__(49);
var loadDataAuth_1 = __webpack_require__(50);
var login_css_1 = __importDefault(__webpack_require__(51));
function Login() {
    var _this = this;
    // стейты на логин и пароль
    var _a = react_1.useState(''), login = _a[0], setLogin = _a[1];
    var _b = react_1.useState(''), password = _b[0], setPassword = _b[1];
    // стейты на ошибку
    var _c = react_1.useState(false), isError = _c[0], setIsError = _c[1];
    var _d = react_1.useState(''), error = _d[0], setError = _d[1];
    // стейт для отправки асинхронного запроса
    var _e = react_1.useState(false), isSend = _e[0], setIsSend = _e[1];
    // стейт под лоадер
    var _f = react_1.useState(false), loading = _f[0], setLoading = _f[1];
    // react-hook-form
    var _g = react_hook_form_1.useForm(), register = _g.register, handleSubmit = _g.handleSubmit, errors = _g.formState.errors;
    // получаем данные из формы
    var onSubmit = function (formData) {
        if (formData.currentLogin !== undefined &&
            formData.currentPassword !== undefined) {
            setLogin(formData.currentLogin);
            setPassword(formData.currentPassword);
            setIsSend(true);
        }
    };
    react_1.useEffect(function () {
        // асинхронная функция авторизации
        var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // активируем лоадер
                        setLoading(true);
                        // сбрасываем ошибки
                        setIsError(false);
                        return [4 /*yield*/, loadDataAuth_1.loadDataAuth(login, password)];
                    case 1:
                        data = _a.sent();
                        // убираем лоадер
                        setLoading(false);
                        // если ошибки - показываем их
                        if (data.status === 'error' && data.result !== undefined) {
                            setIsError(true);
                            setError(String(data.result));
                            // иначе записываем данные в localStorage
                        }
                        else {
                            localStorage.setItem('user', JSON.stringify({
                                auth: true,
                                user: data.result,
                                lifetime: +new Date(),
                            }));
                            window.location.href = '/';
                        }
                        // сбразываем стейт отправки
                        setIsSend(false);
                        return [2 /*return*/];
                }
            });
        }); };
        // запрос на отправку асинхронного запроса есть?
        if (isSend) {
            // выполняем его
            fetchData();
        }
    }, [isSend, login, password]);
    return (react_1.default.createElement("div", { style: { height: '80vh' }, className: login_css_1.default.box },
        react_1.default.createElement("div", { style: { width: 300 } },
            react_1.default.createElement("h1", { style: { textAlign: 'center' } }, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"),
            loading && (react_1.default.createElement("div", { style: { textAlign: 'center' }, className: "mt-4" },
                react_1.default.createElement(react_bootstrap_1.Spinner, { animation: "border", role: "status" },
                    react_1.default.createElement("span", { className: "visually-hidden" }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")))),
            !loading && (react_1.default.createElement(react_bootstrap_1.Form, { onSubmit: handleSubmit(onSubmit) },
                react_1.default.createElement(react_bootstrap_1.Form.Group, { className: login_css_1.default.group },
                    react_1.default.createElement(react_bootstrap_1.Form.Label, null, "\u041B\u043E\u0433\u0438\u043D"),
                    react_1.default.createElement(react_bootstrap_1.Form.Control, __assign({ type: "text", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D", "aria-invalid": errors.currentLogin ? 'true' : undefined }, register('currentLogin', { required: true, minLength: 6 }))),
                    errors.currentLogin && (react_1.default.createElement("p", { className: login_css_1.default.error }, "\u041B\u043E\u0433\u0438\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 6-\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"))),
                react_1.default.createElement(react_bootstrap_1.Form.Group, { className: login_css_1.default.group },
                    react_1.default.createElement(react_bootstrap_1.Form.Label, null, "\u041F\u0430\u0440\u043E\u043B\u044C"),
                    react_1.default.createElement(react_bootstrap_1.Form.Control, __assign({ type: "password", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", "aria-invalid": errors.currentPassword ? 'true' : undefined }, register('currentPassword', {
                        required: true,
                        minLength: 6,
                    }))),
                    errors.currentPassword && (react_1.default.createElement("p", { className: login_css_1.default.error }, "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 6-\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"))),
                react_1.default.createElement(react_bootstrap_1.Button, { variant: "primary", type: "submit", className: "w-100 mt-3 mb-3" }, "\u0412\u043E\u0439\u0442\u0438"))),
            !loading && isError && react_1.default.createElement("div", { className: login_css_1.default.error }, error))));
}
exports.Login = Login;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDataAuth = void 0;
var axios_1 = __importDefault(__webpack_require__(5));
/**
 * Функция авторизации, в случае успеха вернет объект с токеном
 * @param user логин пользователя
 * @param pass пароль пользователя
 * @returns возвращаем объект с двумя свойствами(status и result)
 */
function loadDataAuth(user, pass) {
    return __awaiter(this, void 0, void 0, function () {
        var url, auth, config, res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://acits-test-back.herokuapp.com/api/login';
                    auth = {
                        login: user,
                        password: pass,
                    };
                    config = {
                        headers: {
                            'Content-type': 'application/json',
                        },
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.post(url, auth, config)];
                case 2:
                    res = _a.sent();
                    if (res.data !== undefined) {
                        return [2 /*return*/, {
                                status: 'success',
                                result: res.data,
                            }];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("Message: " + String(error_1));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, {
                        status: 'error',
                        result: 'Пользователь не найден',
                    }];
            }
        });
    });
}
exports.loadDataAuth = loadDataAuth;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"box": "login__box--ZwOrm",
	"group": "login__group--hCqdr",
	"error": "login__error--2MXK5"
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(53), exports);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageToday = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_bootstrap_1 = __webpack_require__(2);
var react_router_dom_1 = __webpack_require__(1);
var loadToday_1 = __webpack_require__(54);
var Text_1 = __webpack_require__(3);
var Page404_1 = __webpack_require__(4);
var pagetoday_css_1 = __importDefault(__webpack_require__(55));
function PageToday() {
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(''), errorLoading = _b[0], setErrorLoading = _b[1];
    var _c = react_1.useState([]), animals = _c[0], setAnimals = _c[1];
    react_1.useEffect(function () {
        loadToday_1.loadToday(setLoading, setErrorLoading, setAnimals);
    }, []);
    return (react_1.default.createElement("div", { className: pagetoday_css_1.default.wrapper },
        react_1.default.createElement("h2", { className: pagetoday_css_1.default.title }, "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F"),
        react_1.default.createElement(react_bootstrap_1.ListGroup, { as: "ol", numbered: true, className: pagetoday_css_1.default.listGroup }, animals.map(function (item) {
            return (react_1.default.createElement(react_bootstrap_1.ListGroup.Item, { action: true, as: "li", className: pagetoday_css_1.default.item + " d-flex ", key: item.id, id: item.animal.id },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/today/" + item.animal.id, className: "d-flex justify-content-between align-items-start", style: { width: '100%' } },
                    react_1.default.createElement("div", { className: "ms-2 me-auto" },
                        react_1.default.createElement("div", { className: pagetoday_css_1.default.destination }, item.type),
                        react_1.default.createElement(Text_1.Text, { size: 14, As: "p" },
                            "\u041A\u043B\u0438\u0447\u043A\u0430:",
                            ' ',
                            react_1.default.createElement("span", { style: { fontWeight: 'bold' } }, item.animal.name),
                            ". \u041F\u043E\u0440\u043E\u0434\u0430:",
                            ' ',
                            react_1.default.createElement("span", { style: { fontWeight: 'bold' } }, item.animal.spec.name),
                            ".")),
                    react_1.default.createElement(react_bootstrap_1.Badge, { bg: "primary", pill: true },
                        react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.white },
                            "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0438\u0435\u043C\u0430: ",
                            item.time.substring(0, 5))))));
        })),
        loading && (react_1.default.createElement("div", { style: { textAlign: 'center', transform: 'translateY(20vh)' }, className: "mt-4" },
            react_1.default.createElement(react_bootstrap_1.Spinner, { animation: "border", role: "status", style: { width: '3rem', height: '3rem' } },
                react_1.default.createElement("span", { className: "visually-hidden" }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")))),
        errorLoading && (react_1.default.createElement("div", { role: "alert", style: { textAlign: 'center' } },
            react_1.default.createElement(Page404_1.Page404, { message: errorLoading }))),
        animals.length === 0 && !loading && !errorLoading && (react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F"))));
}
exports.PageToday = PageToday;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadToday = void 0;
var axios_1 = __importDefault(__webpack_require__(5));
var getUserLocalStorage_1 = __webpack_require__(6);
/**
 * Асинхронная функция загружает животных на сегодня с их назначениями
 * @param setLoading - стейт для лоадера
 * @param setErrorLoading - стейт для ошибок
 * @param setAnimals - стейт под массив объектов животных
 */
function loadToday(setLoading, setErrorLoading, setAnimals) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var token, data, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    token = (_a = getUserLocalStorage_1.getUserLocalStorage().user) === null || _a === void 0 ? void 0 : _a.accessToken;
                    setLoading(true);
                    setErrorLoading('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get('https://acits-test-back.herokuapp.com/api/executions/today', {
                            headers: { Authorization: "Bearer " + token },
                        })];
                case 2:
                    data = (_b.sent()).data;
                    if (data.count > 0) {
                        setAnimals(data.results);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    setErrorLoading(String(error_1));
                    return [3 /*break*/, 4];
                case 4:
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadToday = loadToday;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "pagetoday__wrapper--NnfNL",
	"listGroup": "pagetoday__listGroup--3Gc_R",
	"title": "pagetoday__title--3RKRv",
	"item": "pagetoday__item--3CAbh",
	"destination": "pagetoday__destination--LBVas"
};


/***/ })
/******/ ]);