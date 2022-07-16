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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
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
__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(3));
exports.ME_REQUEST = 'ME_REQUEST';
var meRequest = function () { return ({
    type: exports.ME_REQUEST,
}); };
exports.meRequest = meRequest;
exports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
var meRequestSuccess = function (data) { return ({
    type: exports.ME_REQUEST_SUCCESS,
    data: data
}); };
exports.meRequestSuccess = meRequestSuccess;
exports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
var meRequestError = function (error) { return ({
    type: exports.ME_REQUEST_ERROR,
    error: error
}); };
exports.meRequestError = meRequestError;
var meRequestAsync = function () { return function (dispatch, getState) {
    dispatch(exports.meRequest());
    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: "bearer " + getState().token },
        params: { raw_json: 1 },
    })
        .then(function (resp) {
        var userData = resp.data;
        dispatch(exports.meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));
    })
        .catch(function (error) {
        //очищаю хранилище от токена, если пригла ошибка, для того чтобы снова перелогиниться
        localStorage.clear();
        console.log(error);
        dispatch(exports.meRequestError(String(error)));
    });
}; };
exports.meRequestAsync = meRequestAsync;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.EIcons = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var EIcons;
(function (EIcons) {
    EIcons["block"] = "M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z";
    EIcons["comments"] = "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z";
    EIcons["save"] = "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z";
    EIcons["share"] = "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z";
    EIcons["warning"] = "M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z";
    EIcons["anon"] = "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z";
    EIcons["answer"] = "M12.75 0.416504H1.41667C0.6375 0.416504 0 1.054 0 1.83317V10.3332C0 11.1123 0.6375 11.7498 1.41667 11.7498H11.3333L14.1667 14.5832V1.83317C14.1667 1.054 13.5292 0.416504 12.75 0.416504ZM11.3333 8.9165H2.83333V7.49984H11.3333V8.9165ZM11.3333 6.7915H2.83333V5.37484H11.3333V6.7915ZM11.3333 4.6665H2.83333V3.24984H11.3333V4.6665Z";
})(EIcons = exports.EIcons || (exports.EIcons = {}));
function Icon(_a) {
    var name = _a.name, _b = _a.size, size = _b === void 0 ? 12 : _b, _c = _a.color, color = _c === void 0 ? '#999999' : _c;
    var viewBoxString = "0 0 " + size + " " + size;
    return (react_1.default.createElement("svg", { width: size, height: size, viewBox: viewBoxString, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: name, fill: color })));
}
exports.Icon = Icon;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSelector = exports.useAppDispatch = void 0;
var react_redux_1 = __webpack_require__(4);
exports.useAppDispatch = react_redux_1.useDispatch;
exports.useAppSelector = react_redux_1.useSelector;


/***/ }),
/* 8 */
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
/* 9 */
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
__exportStar(__webpack_require__(55), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
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
exports.rootReducer = exports.setToken = exports.updateComment = void 0;
var actions_1 = __webpack_require__(2);
var reducer_1 = __webpack_require__(92);
var initialState = {
    commentText: 'Привет, SkillBox!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {},
        fetchingState: 'none',
    },
};
var UPDATE_COMMENT = 'UPDATE_COMMENT';
var TOKEN = 'SET_TOKEN';
var updateComment = function (text) { return ({
    type: UPDATE_COMMENT,
    text: text,
}); };
exports.updateComment = updateComment;
var setToken = function (token) { return ({
    type: TOKEN,
    token: token,
}); };
exports.setToken = setToken;
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UPDATE_COMMENT:
            return __assign(__assign({}, state), { commentText: action.text });
        case TOKEN:
            return __assign(__assign({}, state), { token: action.token });
        case actions_1.ME_REQUEST:
        case actions_1.ME_REQUEST_SUCCESS:
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(13));
var server_1 = __importDefault(__webpack_require__(14));
var App_1 = __webpack_require__(15);
var indexTemplate_1 = __webpack_require__(113);
var axios_1 = __importDefault(__webpack_require__(3));
//импорты сжатия для деплоя
var compression_1 = __importDefault(__webpack_require__(114));
var helmet_1 = __importDefault(__webpack_require__(115));
var PORT = process.env.PORT || 3000;
var IS_DEV = "production" !== 'production';
var app = express_1.default();
// if (!IS_DEV) {
app.use(compression_1.default());
// app.use(helmet.dnsPrefetchControl({ allow: false }));
app.use(helmet_1.default({
    contentSecurityPolicy: false
}), helmet_1.default.crossOriginEmbedderPolicy({ policy: "credentialless" }));
// }
app.use('/static', express_1.default.static('./dist/client'));
app.get('/auth', function (req, res) {
    console.log("ID: " + '9PRgtMtHs-M5_AK4od9OKw' + (" Secret: " + process.env.SECRET) + (" code: " + req.query.code));
    axios_1.default.post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=" + req.query.code + "&redirect_uri=" + process.env.DOMAIN + "/auth", {
        auth: { username: '9PRgtMtHs-M5_AK4od9OKw', password: process.env.SECRET },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    })
        .then(function (_a) {
        var data = _a.data;
        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));
    })
        .catch(function (error) {
        res.redirect('/posts');
        console.log('Message: ' + error.message);
    });
});
app.get('*', function (req, res) {
    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));
});
app.listen(PORT, function () {
    console.log("Server started in http://localhost:" + PORT);
});


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

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
var Layout_1 = __webpack_require__(19);
var Header_1 = __webpack_require__(22);
var Content_1 = __webpack_require__(40);
var useToken_1 = __webpack_require__(43);
var PostsList_1 = __webpack_require__(44);
var redux_1 = __webpack_require__(90);
var react_redux_1 = __webpack_require__(4);
var redux_devtools_extension_1 = __webpack_require__(91);
var store_1 = __webpack_require__(11);
var redux_thunk_1 = __importDefault(__webpack_require__(93));
var hooks_1 = __webpack_require__(7);
var react_router_dom_1 = __webpack_require__(6);
var Post_1 = __webpack_require__(94);
exports.store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
function AppComponent() {
    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    var dispatch = hooks_1.useAppDispatch();
    var saveToken = function () { return function (dispatch) {
        var token = useToken_1.useToken()[0];
        dispatch(store_1.setToken(token));
    }; };
    dispatch(saveToken());
    return (react_1.default.createElement(react_1.default.Fragment, null, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Layout_1.Layout, null,
            react_1.default.createElement(Header_1.Header, null),
            react_1.default.createElement(Content_1.Content, null,
                react_1.default.createElement(react_router_dom_1.Switch, null,
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/" },
                        react_1.default.createElement(react_router_dom_1.Redirect, { to: "/posts" })),
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/auth" },
                        react_1.default.createElement(react_router_dom_1.Redirect, { to: "/posts" })),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/posts" },
                        react_1.default.createElement(PostsList_1.PostsList, null)),
                    react_1.default.createElement(react_router_dom_1.Route, null,
                        react_1.default.createElement("div", { style: { textAlign: 'center' } }, "404 \u2014 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"))),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/posts/:id" },
                    react_1.default.createElement(Post_1.Post, null))))))));
}
exports.App = root_1.hot(function () {
    return react_1.default.createElement(react_redux_1.Provider, { store: exports.store },
        react_1.default.createElement(AppComponent, null));
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
exports.push([module.i, ":root {\r\n  --black:          #333333;\r\n  --orange:         #CC6633;\r\n  --green:          #A4CC33;\r\n  --whiteLightness: 100%;\r\n  --white:          hsl(0, 0%, var(--whiteLightness));\r\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\r\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\r\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\r\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\r\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\r\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\r\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--grayF4);\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  font-family: 'Roboto', serif;\r\n}\r\n\r\n* {\r\n  color: var(--black);\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nbutton {\r\n  padding: 0;\r\n  border: 0;\r\n  background: transparent;\r\n  cursor: pointer;\r\n}\r\n", ""]);
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
__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_css_1 = __importDefault(__webpack_require__(21));
function Layout(_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: layout_css_1.default.layout }, children));
}
exports.Layout = Layout;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(23));
var SearchBlock_1 = __webpack_require__(24);
var ThreadTitle_1 = __webpack_require__(34);
var SortBlock_1 = __webpack_require__(37);
function Header() {
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG"
};


/***/ }),
/* 24 */
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
__exportStar(__webpack_require__(25), exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var useUserData_1 = __webpack_require__(26);
var searchblock_css_1 = __importDefault(__webpack_require__(27));
var UserBlock_1 = __webpack_require__(28);
function SearchBlock() {
    var _a = useUserData_1.useUserData(), data = _a.data, loading = _a.loading;
    return (react_1.default.createElement("div", { className: searchblock_css_1.default.searchBlock },
        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var actions_1 = __webpack_require__(2);
var hooks_1 = __webpack_require__(7);
function useUserData() {
    // const data = useSelector<RootState, IUserData>(state => state.me.data);
    var data = hooks_1.useAppSelector(function (state) { return state.me.data; });
    // const loading = useSelector<RootState, boolean>(state => state.me.loading);
    var loading = hooks_1.useAppSelector(function (state) { return state.me.loading; });
    // const token = useSelector<RootState, string | undefined>(state => state.token);
    var token = hooks_1.useAppSelector(function (state) { return state.token; });
    var dispatch = hooks_1.useAppDispatch();
    // const dispatch: any = useDispatch();
    react_1.useEffect(function () {
        if (!token)
            return;
        dispatch(actions_1.meRequestAsync());
    }, [token]);
    return {
        data: data,
        loading: loading
    };
}
exports.useUserData = useUserData;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBlock": "searchblock__searchBlock--3aDPv"
};


/***/ }),
/* 28 */
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
__exportStar(__webpack_require__(29), exports);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var userblock_css_1 = __importDefault(__webpack_require__(30));
var Icon_1 = __webpack_require__(5);
var Text_1 = __webpack_require__(1);
function UserBlock(_a) {
    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;
    return (react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=" + '9PRgtMtHs-M5_AK4od9OKw' + "&response_type=code&state=random_string&redirect_uri=" + process.env.DOMAIN + "/auth&duration=permanent&scope=read submit identity", className: userblock_css_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_css_1.default.avatarBox }, avatarSrc
            ? react_1.default.createElement("img", { src: avatarSrc, alt: "user avatar", className: userblock_css_1.default.avatarImage })
            : react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.anon, size: 50, color: '#D9D9D9' })),
        react_1.default.createElement("div", { className: userblock_css_1.default.username }, loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: Text_1.EColor.grey99 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Аноним')))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userBox": "userblock__userBox--24rEF",
	"avatarBox": "userblock__avatarBox--2OTfi",
	"avatarImage": "userblock__avatarImage--2ryXC",
	"username": "userblock__username--3bLc0"
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.EColor = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var text_css_1 = __importDefault(__webpack_require__(32));
var classnames_1 = __importDefault(__webpack_require__(33));
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
    return (react_1.default.createElement(As, { className: classes }, children));
}
exports.Text = Text;


/***/ }),
/* 32 */
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
/* 33 */
/***/ (function(module, exports) {

module.exports = require("classnames");

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

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var threadtitle_css_1 = __importDefault(__webpack_require__(36));
function ThreadTitle() {
    return (react_1.default.createElement("h1", { className: threadtitle_css_1.default.threadTitle }, "Header"));
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--oxugx"
};


/***/ }),
/* 37 */
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
__exportStar(__webpack_require__(38), exports);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sortblock_css_1 = __importDefault(__webpack_require__(39));
function SortBlock() {
    return (react_1.default.createElement("div", { className: sortblock_css_1.default.sortBlock }, "sorting dropdown"));
}
exports.SortBlock = SortBlock;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortBlock": "sortblock__sortBlock--141aZ"
};


/***/ }),
/* 40 */
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
__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_css_1 = __importDefault(__webpack_require__(42));
function Content(_a) {
    var children = _a.children;
    return (react_1.default.createElement("main", { className: content_css_1.default.content }, children));
}
exports.Content = Content;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S"
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useToken = void 0;
var react_1 = __webpack_require__(0);
function useToken() {
    var token = '';
    if (typeof window !== 'undefined') {
        // localStorage.clear();
        if (localStorage.getItem('token') !== 'undefined') {
            token = localStorage.getItem('token') || window.__token__;
        }
        else {
            token = window.__token__;
        }
        react_1.useEffect(function () {
            if (token && token.length > 0 && token !== 'undefined') {
                localStorage.setItem('token', token);
            }
        }, [token]);
    }
    // const [token, setToken] = useState('');
    // useEffect(() => {
    //   if (window.__token__) {
    //       setToken(window.__token__);
    //   }
    // }, []);
    return [token];
}
exports.useToken = useToken;


/***/ }),
/* 44 */
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
__exportStar(__webpack_require__(45), exports);


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
exports.PostsList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var postslist_css_1 = __importDefault(__webpack_require__(46));
var TextContent_1 = __webpack_require__(47);
var Preview_1 = __webpack_require__(57);
var Menu_1 = __webpack_require__(60);
var Controls_1 = __webpack_require__(73);
var axios_1 = __importDefault(__webpack_require__(3));
function PostsList() {
    var _a = react_1.useState([]), posts = _a[0], setPosts = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(''), errorLoading = _c[0], setErrorLoading = _c[1];
    var _d = react_1.useState(''), nextAfter = _d[0], setNextAfter = _d[1];
    var _e = react_1.useState(false), loadMore = _e[0], setLoadMore = _e[1];
    var _f = react_1.useState(0), numberLoad = _f[0], setNumberLoad = _f[1];
    var _g = react_1.useState(true), firstLoad = _g[0], setFirstLoad = _g[1];
    var bottomOfList = react_1.useRef(null);
    var LIMIT = 10;
    var COUNT_PRELOADING = 3;
    function handleClick() {
        setLoadMore(true);
    }
    function load() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, after, children, newArrObj_1, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        setLoading(true);
                        setErrorLoading('');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.get('https://api.reddit.com/best?sr_detail=true', {
                                params: {
                                    limit: LIMIT,
                                    after: nextAfter,
                                }
                            })];
                    case 2:
                        _a = (_b.sent()).data.data, after = _a.after, children = _a.children;
                        newArrObj_1 = children.map(function (item) {
                            var container = {};
                            container.id = item.data.id;
                            container.author = item.data.author;
                            container.title = item.data.title;
                            container.banner = item.data.sr_detail.banner_img;
                            container.icon_img = item.data.sr_detail.icon_img;
                            container.created = item.data.created_utc;
                            return container;
                        });
                        setNextAfter(after);
                        setPosts(function (prevNewArrObj) { return prevNewArrObj.concat(newArrObj_1); });
                        setNumberLoad(numberLoad + 1);
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
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting && loadMore) {
                load();
            }
            if (firstLoad) {
                load();
                setFirstLoad(false);
            }
            else if (!firstLoad && posts.length < (COUNT_PRELOADING * LIMIT) && entries[0].isIntersecting) {
                if (numberLoad == 1) {
                    load();
                }
                else if (numberLoad == 2) {
                    load();
                }
            }
            if (numberLoad == 3) {
                setLoadMore(false);
                setNumberLoad(0);
            }
        }, {
            rootMargin: '10px',
        });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return function () {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [bottomOfList.current, nextAfter, loadMore, numberLoad, firstLoad]);
    return (react_1.default.createElement("ul", { className: postslist_css_1.default.postsList },
        posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430")),
        posts.map(function (item) {
            return (react_1.default.createElement("li", { className: postslist_css_1.default.post, key: item.id, id: item.id },
                react_1.default.createElement(TextContent_1.TextContent, { title: item.title, author: item.author, icon: item.icon_img, date: item.created }),
                react_1.default.createElement(Preview_1.Preview, { srcImg: item.banner }),
                react_1.default.createElement(Menu_1.Menu, null),
                react_1.default.createElement(Controls_1.Controls, null)));
        }),
        react_1.default.createElement("div", { ref: bottomOfList }),
        !loading && !errorLoading && posts.length > 0 && (react_1.default.createElement("div", { style: { textAlign: 'center' } },
            react_1.default.createElement("button", { type: 'button', className: postslist_css_1.default.btnMore, onClick: handleClick }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435"))),
        loading && (react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")),
        errorLoading && (react_1.default.createElement("div", { role: "alert", style: { textAlign: 'center' } }, errorLoading))));
}
exports.PostsList = PostsList;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"divider": "postslist__divider--1Gzw9",
	"postsList": "postslist__postsList--2OyjV",
	"post": "postslist__post--1zBbU",
	"textContent": "postslist__textContent--6RcyT",
	"btnMore": "postslist__btnMore--2BLcs"
};


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

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var textcontent_css_1 = __importDefault(__webpack_require__(49));
var Title_1 = __webpack_require__(50);
var UserLink_1 = __webpack_require__(8);
var DateFromNow_1 = __webpack_require__(9);
function TextContent(_a) {
    var title = _a.title, author = _a.author, icon = _a.icon, date = _a.date;
    return (react_1.default.createElement("div", { className: textcontent_css_1.default.textContent },
        react_1.default.createElement("div", { className: textcontent_css_1.default.metaData },
            react_1.default.createElement(UserLink_1.UserLink, { author: author, icon: icon }),
            react_1.default.createElement("span", { className: textcontent_css_1.default.createdAt },
                react_1.default.createElement("span", { className: textcontent_css_1.default.publishedLabel }, "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E"),
                react_1.default.createElement(DateFromNow_1.DateFromNow, { date: date }))),
        react_1.default.createElement(Title_1.Title, { title: title })));
}
exports.TextContent = TextContent;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcontent__textContent--3QylL",
	"metaData": "textcontent__metaData--3QKFf",
	"publishedLabel": "textcontent__publishedLabel--3Yf7I",
	"createdAt": "textcontent__createdAt--xJavO"
};


/***/ }),
/* 50 */
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
__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var title_css_1 = __importDefault(__webpack_require__(52));
var react_router_dom_1 = __webpack_require__(6);
function Title(_a) {
    var title = _a.title;
    return (react_1.default.createElement("h2", { className: title_css_1.default.title },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/posts/1", className: title_css_1.default.postLink }, title)));
}
exports.Title = Title;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "title__title--2xPLg",
	"postLink": "title__postLink--_Osg7",
	"textContent": "title__textContent--jAzXP"
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLink = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var userlink_css_1 = __importDefault(__webpack_require__(54));
function UserLink(_a) {
    var author = _a.author, icon = _a.icon;
    return (react_1.default.createElement("div", { className: userlink_css_1.default.userLink },
        icon
            ? react_1.default.createElement("img", { className: userlink_css_1.default.avatar, src: icon, alt: "avatar" })
            : react_1.default.createElement("img", { className: userlink_css_1.default.avatar, src: "https://cdn.dribbble.com/users/594316/screenshots/16557702/media/d77aa195b67473edb6c386b355126078.jpg", alt: "avatar" }),
        react_1.default.createElement("a", { href: "#user-url", className: userlink_css_1.default.username }, author)));
}
exports.UserLink = UserLink;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userLink": "userlink__userLink--3pt88",
	"avatar": "userlink__avatar--2CoOs",
	"username": "userlink__username--jbHci"
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFromNow = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var moment_1 = __importDefault(__webpack_require__(56));
function DateFromNow(_a) {
    var date = _a.date;
    var dateCreated = null;
    {
        date
            ? dateCreated = moment_1.default(new Date(date * 1000)).fromNow()
            : dateCreated = new Date();
    }
    return (react_1.default.createElement("span", null, "" + dateCreated));
}
exports.DateFromNow = DateFromNow;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 57 */
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
__exportStar(__webpack_require__(58), exports);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var preview_css_1 = __importDefault(__webpack_require__(59));
function Preview(_a) {
    var srcImg = _a.srcImg;
    return (react_1.default.createElement("div", { className: preview_css_1.default.preview }, srcImg
        ? react_1.default.createElement("img", { className: preview_css_1.default.previewImg, src: srcImg, alt: "preview" })
        : react_1.default.createElement("img", { className: preview_css_1.default.previewImg, src: "https://cdn.dribbble.com/users/1803663/screenshots/16534587/media/c335a915773ce3ba65d18d137101f017.png", alt: "preview" })));
}
exports.Preview = Preview;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--2eSDi",
	"previewImg": "preview__previewImg--3fB8Z"
};


/***/ }),
/* 60 */
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
__exportStar(__webpack_require__(61), exports);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var MenuIcon_1 = __webpack_require__(62);
var menu_css_1 = __importDefault(__webpack_require__(63));
var Dropdown_1 = __webpack_require__(64);
function Menu() {
    return (react_1.default.createElement("div", { className: menu_css_1.default.menu },
        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement("button", { className: menu_css_1.default.menuButton },
                react_1.default.createElement(MenuIcon_1.MenuIcon, null)) })));
}
exports.Menu = Menu;


/***/ }),
/* 62 */
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
exports.MenuIcon = void 0;
var React = __importStar(__webpack_require__(0));
function MenuIcon() {
    return (React.createElement("svg", { width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
        React.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
        React.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--1Zo-6",
	"menuButton": "menu__menuButton--1Z1zw",
	"dropdown": "menu__dropdown--qe-Qo",
	"closeButton": "menu__closeButton--18ZZT"
};


/***/ }),
/* 64 */
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
__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 65 */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importStar(__webpack_require__(0));
var BodyDropdown_1 = __webpack_require__(66);
var react_dom_1 = __importDefault(__webpack_require__(10));
var react_popper_1 = __webpack_require__(72);
function Dropdown(_a) {
    var button = _a.button;
    var _b = react_1.default.useState(false), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];
    var _c = react_1.useState(null), idElement = _c[0], setIdElement = _c[1];
    var node = document.getElementById('dropdown_root');
    if (!node)
        return null;
    var _d = react_1.useState(null), referenceElement = _d[0], setReferenceElement = _d[1];
    var _e = react_1.useState(null), popperElement = _e[0], setPopperElement = _e[1];
    var _f = react_popper_1.usePopper(referenceElement, popperElement, {
        placement: "bottom",
        modifiers: [
            {
                name: "offset",
                enabled: true,
                options: {
                    offset: [0, 10]
                }
            }
        ]
    }), styles = _f.styles, attributes = _f.attributes;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { ref: setReferenceElement, onClick: function (event) {
                setIsDropdownOpen(!isDropdownOpen);
                // //получаем текущую кнопку меню по которой нажали
                // const buttonMenu = (event.target as HTMLElement).closest('button');
                // if (!buttonMenu) return;
                // //получаем пост к которой принадлежит кнопка
                // const currentPost = buttonMenu.parentElement?.parentElement?.parentElement?.parentElement;
                // const idPost = currentPost?.id;
                // setIdElement(idPost);
            } }, button),
        isDropdownOpen && (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { onClick: function () { return setIsDropdownOpen(false); } }, react_dom_1.default.createPortal(react_1.default.createElement("div", __assign({ ref: setPopperElement, style: styles.popper }, attributes.popper),
                react_1.default.createElement(BodyDropdown_1.BodyDropdown, { onClose: function () { setIsDropdownOpen(false); } })), node))))));
}
exports.Dropdown = Dropdown;


/***/ }),
/* 66 */
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
__exportStar(__webpack_require__(67), exports);


/***/ }),
/* 67 */
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
exports.BodyDropdown = void 0;
var react_1 = __importStar(__webpack_require__(0));
var bodydropdown_css_1 = __importDefault(__webpack_require__(68));
var MenuItemsList_1 = __webpack_require__(69);
var Text_1 = __webpack_require__(1);
var Text_2 = __webpack_require__(1);
function BodyDropdown(_a) {
    var onClose = _a.onClose;
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return (react_1.default.createElement("div", { className: bodydropdown_css_1.default.dropdown, ref: ref },
        react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: 'test' }),
        react_1.default.createElement("button", { className: bodydropdown_css_1.default.closeButton },
            react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: Text_2.EColor.grey66 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))));
}
exports.BodyDropdown = BodyDropdown;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dropdown": "bodydropdown__dropdown--IRnid",
	"closeButton": "bodydropdown__closeButton--3uUmJ"
};


/***/ }),
/* 69 */
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
__exportStar(__webpack_require__(70), exports);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var menuitemslist_css_1 = __importDefault(__webpack_require__(71));
var Icon_1 = __webpack_require__(5);
var Text_1 = __webpack_require__(1);
function MenuItemsList(_a) {
    var postId = _a.postId;
    return (react_1.default.createElement("ul", { className: menuitemslist_css_1.default.menuItemsList },
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem },
            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.comments, size: 12 }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem },
            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem, onClick: function () { return console.log(postId); } },
            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.block }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, "\u0421\u043A\u0440\u044B\u0442\u044C")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem },
            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.save }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem },
            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.warning }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))));
}
exports.MenuItemsList = MenuItemsList;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuItemsList": "menuitemslist__menuItemsList--15bZg",
	"menuItem": "menuitemslist__menuItem--1kMK2",
	"divider": "menuitemslist__divider--2gftz"
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-popper");

/***/ }),
/* 73 */
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
__exportStar(__webpack_require__(74), exports);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var controls_css_1 = __importDefault(__webpack_require__(75));
var KarmaCounter_1 = __webpack_require__(76);
var CommentsButton_1 = __webpack_require__(78);
var Actions_1 = __webpack_require__(81);
function Controls() {
    return (react_1.default.createElement("div", { className: controls_css_1.default.controls },
        react_1.default.createElement(KarmaCounter_1.KarmaCounter, null),
        react_1.default.createElement(CommentsButton_1.CommentsButton, null),
        react_1.default.createElement(Actions_1.Actions, null)));
}
exports.Controls = Controls;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--5QhAn",
	"actions": "controls__actions--3Wa_S"
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KarmaCounter = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var karmacounter_css_1 = __importDefault(__webpack_require__(77));
function KarmaCounter() {
    return (react_1.default.createElement("div", { className: karmacounter_css_1.default.karmaCounter },
        react_1.default.createElement("button", { className: karmacounter_css_1.default.up },
            react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" }))),
        react_1.default.createElement("span", { className: karmacounter_css_1.default.karmaValue }, "234"),
        react_1.default.createElement("button", { className: karmacounter_css_1.default.down },
            react_1.default.createElement("svg", { className: karmacounter_css_1.default.down, width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" })))));
}
exports.KarmaCounter = KarmaCounter;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"karmaCounter": "karmacounter__karmaCounter--34Pmn",
	"karmaValue": "karmacounter__karmaValue--16VP2",
	"down": "karmacounter__down--2Fl-f",
	"up": "karmacounter__up--1GTdr"
};


/***/ }),
/* 78 */
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
__exportStar(__webpack_require__(79), exports);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentsbutton_css_1 = __importDefault(__webpack_require__(80));
function CommentsButton() {
    return (react_1.default.createElement("button", { className: commentsbutton_css_1.default.commentsButton },
        react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" })),
        react_1.default.createElement("span", { className: commentsbutton_css_1.default.commentsNumber }, "13")));
}
exports.CommentsButton = CommentsButton;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentsButton": "commentsbutton__commentsButton--2fxmY",
	"commentsNumber": "commentsbutton__commentsNumber--2Yr3T"
};


/***/ }),
/* 81 */
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
__exportStar(__webpack_require__(82), exports);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var actions_css_1 = __importDefault(__webpack_require__(83));
var ShareButton_1 = __webpack_require__(84);
var SaveButton_1 = __webpack_require__(87);
function Actions() {
    return (react_1.default.createElement("div", { className: actions_css_1.default.actions },
        react_1.default.createElement(ShareButton_1.ShareButton, null),
        react_1.default.createElement(SaveButton_1.SaveButton, null)));
}
exports.Actions = Actions;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"actions": "actions__actions--1ZfuA"
};


/***/ }),
/* 84 */
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
__exportStar(__webpack_require__(85), exports);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sharebutton_css_1 = __importDefault(__webpack_require__(86));
function ShareButton() {
    return (react_1.default.createElement("button", { className: sharebutton_css_1.default.shareButton },
        react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
            react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))));
}
exports.ShareButton = ShareButton;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"shareButton": "sharebutton__shareButton--3XatJ"
};


/***/ }),
/* 87 */
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
__exportStar(__webpack_require__(88), exports);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var savebutton_css_1 = __importDefault(__webpack_require__(89));
function SaveButton() {
    return (react_1.default.createElement("button", { className: savebutton_css_1.default.saveButton },
        react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
            react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" }))));
}
exports.SaveButton = SaveButton;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"saveButton": "savebutton__saveButton--2ywK8"
};


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 92 */
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
exports.meReducer = void 0;
var actions_1 = __webpack_require__(2);
var meReducer = function (state, action) {
    switch (action.type) {
        case actions_1.ME_REQUEST:
            return __assign(__assign({}, state), { loading: true, fetchingState: 'requesting' });
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false, fetchingState: 'error' });
        case actions_1.ME_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { data: action.data, loading: false, fetchingState: 'success' });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 94 */
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
__exportStar(__webpack_require__(95), exports);


/***/ }),
/* 95 */
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
exports.Post = void 0;
var react_1 = __importStar(__webpack_require__(0));
var post_css_1 = __importDefault(__webpack_require__(96));
var react_dom_1 = __importDefault(__webpack_require__(10));
var Comments_1 = __webpack_require__(97);
var CommentFormContainer_1 = __webpack_require__(108);
var react_router_dom_1 = __webpack_require__(6);
function Post() {
    var ref = react_1.useRef(null);
    var history = react_router_dom_1.useHistory();
    react_1.useEffect(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                history.push('/posts');
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    var node = document.getElementById('modal_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: post_css_1.default.modal, ref: ref },
        react_1.default.createElement("h2", null, "\u0421\u043B\u0435\u0434\u0443\u0435\u0442 \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C, \u0447\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u0442"),
        react_1.default.createElement("div", { className: post_css_1.default.content },
            react_1.default.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam officia corrupti, neque, fuga ipsa vel quas explicabo quisquam ratione nihil inventore illo commodi quia deleniti qui adipisci assumenda? Distinctio, eos."),
            react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iure facilis pariatur, aliquid esse architecto illum, dolor temporibus facere, perferendis autem tenetur commodi odit aut quod explicabo quisquam reiciendis soluta!"),
            react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi ipsum eos possimus ratione ipsam cupiditate, iste repellendus dicta, maiores quos aperiam hic corporis. Libero facilis suscipit optio similique? Ratione?")),
        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null),
        react_1.default.createElement(Comments_1.Comments, null))), node);
}
exports.Post = Post;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "post__modal--yRo-c",
	"content": "post__content--2gFMc",
	"close": "post__close--1HSqz"
};


/***/ }),
/* 97 */
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
__exportStar(__webpack_require__(98), exports);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var comments_css_1 = __importDefault(__webpack_require__(99));
var Comment_1 = __webpack_require__(100);
function Comments() {
    return (react_1.default.createElement("div", { className: comments_css_1.default.container },
        react_1.default.createElement("div", { className: comments_css_1.default.sort },
            react_1.default.createElement("span", null, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E: "),
            react_1.default.createElement("select", null,
                react_1.default.createElement("option", { value: "" }, "\u041B\u0443\u0447\u0448\u0438\u0435"),
                react_1.default.createElement("option", { value: "" }, "\u0414\u0430\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F"))),
        react_1.default.createElement("div", { className: comments_css_1.default.divider }),
        react_1.default.createElement(Comment_1.Comment, null),
        react_1.default.createElement(Comment_1.Comment, null)));
}
exports.Comments = Comments;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "comments__container--3AUdb",
	"sort": "comments__sort--UZuUy",
	"divider": "comments__divider--10XbX"
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var comment_css_1 = __importDefault(__webpack_require__(101));
var UserLink_1 = __webpack_require__(8);
var DateFromNow_1 = __webpack_require__(9);
var ControlsComment_1 = __webpack_require__(102);
function Comment() {
    var tempCurrentDate = new Date();
    tempCurrentDate = (tempCurrentDate.getTime() - 10800000) / 1000;
    var author = 'Михаил Рогов';
    return (react_1.default.createElement("div", { className: comment_css_1.default.comment },
        react_1.default.createElement("div", { className: comment_css_1.default.clipper },
            react_1.default.createElement("svg", { width: "19", height: "30", viewBox: "0 0 19 30", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 30L19 20L8.74228e-07 20L9.5 30Z", fill: "#D9D9D9" }),
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" })),
            react_1.default.createElement("div", { className: comment_css_1.default.clipperDivider })),
        react_1.default.createElement("div", { className: comment_css_1.default.userComment },
            react_1.default.createElement("div", { className: comment_css_1.default.userCommentTitle },
                react_1.default.createElement(UserLink_1.UserLink, { author: author }),
                react_1.default.createElement(DateFromNow_1.DateFromNow, { date: tempCurrentDate }),
                react_1.default.createElement("span", { className: comment_css_1.default.group }, "\u041B\u0438\u0433\u0430 \u044E\u0440\u0438\u0441\u0442\u043E\u0432")),
            react_1.default.createElement("p", null, "\u0421\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043A\u0438 \u0442\u043E\u0442\u0430\u043B\u0438\u0442\u0430\u0440\u0438\u0437\u043C\u0430 \u0432 \u043D\u0430\u0443\u043A\u0435 \u0431\u0443\u0434\u0443\u0442 \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u044B \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C\u0438 \u0438\u043D\u0441\u0442\u0430\u043D\u0446\u0438\u044F\u043C\u0438. \u041B\u0438\u0448\u044C \u0440\u0435\u043F\u043B\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441 \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0431\u0443\u0434\u0443\u0442 \u043E\u043F\u0438\u0441\u0430\u043D\u044B \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E."),
            react_1.default.createElement(ControlsComment_1.ControlsComment, { author: author }))));
}
exports.Comment = Comment;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"comment": "comment__comment--1hyXR",
	"clipper": "comment__clipper--Jmd_P",
	"clipperDivider": "comment__clipperDivider--3xJfY",
	"userComment": "comment__userComment--19hTS",
	"userCommentTitle": "comment__userCommentTitle--66Mya",
	"group": "comment__group--3KoDu"
};


/***/ }),
/* 102 */
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
__exportStar(__webpack_require__(103), exports);


/***/ }),
/* 103 */
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
exports.ControlsComment = void 0;
var react_1 = __importStar(__webpack_require__(0));
var controlscomment_css_1 = __importDefault(__webpack_require__(104));
var Icon_1 = __webpack_require__(5);
var Text_1 = __webpack_require__(1);
var AnswerComment_1 = __webpack_require__(105);
function ControlsComment(_a) {
    var author = _a.author;
    var _b = react_1.useState(false), isAnswerOpened = _b[0], setIsAnswerOpened = _b[1];
    return (react_1.default.createElement("div", { className: controlscomment_css_1.default.userCommentBottom },
        react_1.default.createElement("div", { className: controlscomment_css_1.default.userCommentControls },
            react_1.default.createElement("button", { onClick: function () { setIsAnswerOpened(true); } },
                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.answer, size: 15 }),
                react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")),
            react_1.default.createElement("button", null,
                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share, size: 15 }),
                react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
            react_1.default.createElement("button", null,
                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.warning, size: 15 }),
                react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))),
        react_1.default.createElement("div", { className: controlscomment_css_1.default.formAnswer }, isAnswerOpened && (react_1.default.createElement(AnswerComment_1.AnswerComment, { to: author })))));
}
exports.ControlsComment = ControlsComment;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userCommentBottom": "controlscomment__userCommentBottom--dW05T",
	"userCommentControls": "controlscomment__userCommentControls--z0d0_"
};


/***/ }),
/* 105 */
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
__exportStar(__webpack_require__(106), exports);


/***/ }),
/* 106 */
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
exports.AnswerComment = void 0;
var react_1 = __importStar(__webpack_require__(0));
var answercomment_css_1 = __importDefault(__webpack_require__(107));
function AnswerComment(_a) {
    var to = _a.to;
    var _b = react_1.useState(to + ", "), textAreaVal = _b[0], setTextAreaVal = _b[1];
    function handleSubmit(event) {
        event.preventDefault();
        console.log('click');
    }
    function handleTexArea(event) {
        setTextAreaVal(event.target.value);
    }
    var refTextArea = react_1.useRef(null);
    react_1.useEffect(function () {
        var _a;
        //устанавливаем фокус
        refTextArea.current && refTextArea.current.focus();
        //в конец значения по умолчанию
        (_a = refTextArea.current) === null || _a === void 0 ? void 0 : _a.setSelectionRange(textAreaVal.length, textAreaVal.length);
    });
    return (
    //неконтролируемая компонента
    // <form className={styles.form} onSubmit={handleSubmit}>
    //   <textarea className={styles.input} defaultValue={`${to}, `} autoFocus/>
    //   <button type='submit' className={styles.button}>Ответить</button>
    // </form>
    //контролируемая компонента
    react_1.default.createElement("form", { className: answercomment_css_1.default.form, onSubmit: handleSubmit },
        react_1.default.createElement("textarea", { className: answercomment_css_1.default.input, value: textAreaVal, ref: refTextArea, onChange: handleTexArea }),
        react_1.default.createElement("button", { type: 'submit', className: answercomment_css_1.default.button }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")));
}
exports.AnswerComment = AnswerComment;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "answercomment__form--3RUI4",
	"input": "answercomment__input--3L3M8",
	"button": "answercomment__button--zRlhx"
};


/***/ }),
/* 108 */
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
__exportStar(__webpack_require__(109), exports);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentFormContainer = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(4);
var store_1 = __webpack_require__(11);
var CommentForm_1 = __webpack_require__(110);
function CommentFormContainer() {
    var value = react_redux_1.useSelector(function (state) { return state.commentText; });
    var dispatch = react_redux_1.useDispatch();
    function handleChange(event) {
        dispatch(store_1.updateComment(event.target.value));
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(value);
    }
    return (react_1.default.createElement(CommentForm_1.CommentForm
    // value={value}
    // onChange={handleChange}
    // onSubmit={handleSubmit}
    , null));
}
exports.CommentFormContainer = CommentFormContainer;


/***/ }),
/* 110 */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentForm = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentform_css_1 = __importDefault(__webpack_require__(111));
var react_hook_form_1 = __webpack_require__(112);
// type Props = {
//   value: string | undefined;
//   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
//   onSubmit: (event: FormEvent) => void;
// }
// export function CommentForm({ value, onChange, onSubmit }: Props) {
//   return (
//     <form className={styles.form} onSubmit={onSubmit}>
//       <textarea className={styles.input} value={value} onChange={onChange} />
//       <button type='submit' className={styles.button}>Комментировать</button>
//     </form>
//   );
// }
function CommentForm() {
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit, errors = _a.formState.errors;
    var onSubmit = function (data) {
        console.log(data);
    };
    return (react_1.default.createElement("form", { className: commentform_css_1.default.form, onSubmit: handleSubmit(onSubmit) },
        react_1.default.createElement("textarea", __assign({ className: commentform_css_1.default.input, "aria-invalid": errors.newComment ? 'true' : undefined }, register('newComment', { required: true, minLength: 4 }))),
        errors.newComment && react_1.default.createElement("p", null, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 3-\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),
        react_1.default.createElement("button", { type: 'submit', className: commentform_css_1.default.button }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
}
exports.CommentForm = CommentForm;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "commentform__form--Cs1Oi",
	"input": "commentform__input--2fC-z",
	"button": "commentform__button--35eLT"
};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <script >\n      const token = '" + token + "';\n      window.__token__ = token;\n      if (token && token.length > 0 && token !== 'undefined') {\n        localStorage.setItem('token', token);\n      }\n    </script>\n    <title>Reddit</title>\n</head>\n<body>\n    <div id=\"react_root\">" + content + "</div>\n    <div id=\"modal_root\"></div>\n    <div id=\"dropdown_root\"></div>\n</body>\n</html>\n"; };
exports.indexTemplate = indexTemplate;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ })
/******/ ]);