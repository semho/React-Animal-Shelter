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

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction _defineProperty(obj, key, value) {\r\n    if (key in obj) {\r\n        Object.defineProperty(obj, key, {\r\n            value: value,\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true\r\n        });\r\n    }\r\n    else {\r\n        obj[key] = value;\r\n    }\r\n    return obj;\r\n}\r\nexports.default = _defineProperty;\r\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction _extends() {\r\n    exports._extends = _extends = Object.assign ? Object.assign.bind() : function (target) {\r\n        for (var i = 1; i < arguments.length; i++) {\r\n            var source = arguments[i];\r\n            for (var key in source) {\r\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\r\n                    target[key] = source[key];\r\n                }\r\n            }\r\n        }\r\n        return target;\r\n    };\r\n    return _extends.apply(this, arguments);\r\n}\r\nexports.default = _extends;\r\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar defineProperty_js_1 = __importDefault(__webpack_require__(/*! ./defineProperty.js */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\"));\r\nfunction ownKeys(object, enumerableOnly) {\r\n    var keys = Object.keys(object);\r\n    if (Object.getOwnPropertySymbols) {\r\n        var symbols = Object.getOwnPropertySymbols(object);\r\n        enumerableOnly && (symbols = symbols.filter(function (sym) {\r\n            return Object.getOwnPropertyDescriptor(object, sym).enumerable;\r\n        })), keys.push.apply(keys, symbols);\r\n    }\r\n    return keys;\r\n}\r\nfunction _objectSpread2(target) {\r\n    for (var i = 1; i < arguments.length; i++) {\r\n        var source = null != arguments[i] ? arguments[i] : {};\r\n        i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {\r\n            defineProperty_js_1.default(target, key, source[key]);\r\n        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {\r\n            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\r\n        });\r\n    }\r\n    return target;\r\n}\r\nexports.default = _objectSpread2;\r\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/objectSpread2.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction _objectWithoutPropertiesLoose(source, excluded) {\r\n    if (source == null)\r\n        return {};\r\n    var target = {};\r\n    var sourceKeys = Object.keys(source);\r\n    var key, i;\r\n    for (i = 0; i < sourceKeys.length; i++) {\r\n        key = sourceKeys[i];\r\n        if (excluded.indexOf(key) >= 0)\r\n            continue;\r\n        target[key] = source[key];\r\n    }\r\n    return target;\r\n}\r\nexports.default = _objectWithoutPropertiesLoose;\r\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ReactReduxContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.ReactReduxContext = react_1.default.createContext(null);\r\nif (true) {\r\n    exports.ReactReduxContext.displayName = 'ReactRedux';\r\n}\r\nexports.default = exports.ReactReduxContext;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/components/Context.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Context_1 = __webpack_require__(/*! ./Context */ \"./node_modules/react-redux/es/components/Context.js\");\r\nvar Subscription_1 = __webpack_require__(/*! ../utils/Subscription */ \"./node_modules/react-redux/es/utils/Subscription.js\");\r\nvar useIsomorphicLayoutEffect_1 = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ \"./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js\");\r\nfunction Provider(_a) {\r\n    var store = _a.store, context = _a.context, children = _a.children, serverState = _a.serverState;\r\n    var contextValue = react_1.useMemo(function () {\r\n        var subscription = Subscription_1.createSubscription(store);\r\n        return {\r\n            store: store,\r\n            subscription: subscription,\r\n            getServerState: serverState ? function () { return serverState; } : undefined\r\n        };\r\n    }, [store, serverState]);\r\n    var previousState = react_1.useMemo(function () { return store.getState(); }, [store]);\r\n    useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect(function () {\r\n        var subscription = contextValue.subscription;\r\n        subscription.onStateChange = subscription.notifyNestedSubs;\r\n        subscription.trySubscribe();\r\n        if (previousState !== store.getState()) {\r\n            subscription.notifyNestedSubs();\r\n        }\r\n        return function () {\r\n            subscription.tryUnsubscribe();\r\n            subscription.onStateChange = undefined;\r\n        };\r\n    }, [contextValue, previousState]);\r\n    var Context = context || Context_1.ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype\r\n    return /*#__PURE__*/ react_1.default.createElement(Context.Provider, {\r\n        value: contextValue\r\n    }, children);\r\n}\r\nexports.default = Provider;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/components/Provider.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/components/connect.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/connect.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.initializeConnect = void 0;\r\nvar extends_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\"));\r\nvar objectWithoutPropertiesLoose_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\"));\r\nvar _excluded = [\"reactReduxForwardedRef\"];\r\n/* eslint-disable valid-jsdoc, @typescript-eslint/no-unused-vars */\r\nvar hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ \"hoist-non-react-statics\"));\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_is_1 = __webpack_require__(/*! react-is */ \"react-is\");\r\nvar selectorFactory_1 = __importDefault(__webpack_require__(/*! ../connect/selectorFactory */ \"./node_modules/react-redux/es/connect/selectorFactory.js\"));\r\nvar mapDispatchToProps_1 = __webpack_require__(/*! ../connect/mapDispatchToProps */ \"./node_modules/react-redux/es/connect/mapDispatchToProps.js\");\r\nvar mapStateToProps_1 = __webpack_require__(/*! ../connect/mapStateToProps */ \"./node_modules/react-redux/es/connect/mapStateToProps.js\");\r\nvar mergeProps_1 = __webpack_require__(/*! ../connect/mergeProps */ \"./node_modules/react-redux/es/connect/mergeProps.js\");\r\nvar Subscription_1 = __webpack_require__(/*! ../utils/Subscription */ \"./node_modules/react-redux/es/utils/Subscription.js\");\r\nvar useIsomorphicLayoutEffect_1 = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ \"./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js\");\r\nvar shallowEqual_1 = __importDefault(__webpack_require__(/*! ../utils/shallowEqual */ \"./node_modules/react-redux/es/utils/shallowEqual.js\"));\r\nvar warning_1 = __importDefault(__webpack_require__(/*! ../utils/warning */ \"./node_modules/react-redux/es/utils/warning.js\"));\r\nvar Context_1 = __webpack_require__(/*! ./Context */ \"./node_modules/react-redux/es/components/Context.js\");\r\nvar useSyncExternalStore_1 = __webpack_require__(/*! ../utils/useSyncExternalStore */ \"./node_modules/react-redux/es/utils/useSyncExternalStore.js\");\r\nvar useSyncExternalStore = useSyncExternalStore_1.notInitialized;\r\nvar initializeConnect = function (fn) {\r\n    useSyncExternalStore = fn;\r\n}; // Define some constant arrays just to avoid re-creating these\r\nexports.initializeConnect = initializeConnect;\r\nvar EMPTY_ARRAY = [null, 0];\r\nvar NO_SUBSCRIPTION_ARRAY = [null, null]; // Attempts to stringify whatever not-really-a-component value we were given\r\n// for logging in an error message\r\nvar stringifyComponent = function (Comp) {\r\n    try {\r\n        return JSON.stringify(Comp);\r\n    }\r\n    catch (err) {\r\n        return String(Comp);\r\n    }\r\n};\r\n// This is \"just\" a `useLayoutEffect`, but with two modifications:\r\n// - we need to fall back to `useEffect` in SSR to avoid annoying warnings\r\n// - we extract this to a separate function to avoid closing over values\r\n//   and causing memory leaks\r\nfunction useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {\r\n    useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect(function () { return effectFunc.apply(void 0, effectArgs); }, dependencies);\r\n} // Effect callback, extracted: assign the latest props values to refs for later usage\r\nfunction captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, // actualChildProps: unknown,\r\nchildPropsFromStoreUpdate, notifyNestedSubs) {\r\n    // We want to capture the wrapper props and child props we used for later comparisons\r\n    lastWrapperProps.current = wrapperProps;\r\n    renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update\r\n    if (childPropsFromStoreUpdate.current) {\r\n        childPropsFromStoreUpdate.current = null;\r\n        notifyNestedSubs();\r\n    }\r\n} // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,\r\n// check for updates after dispatched actions, and trigger re-renders.\r\nfunction subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, // forceComponentUpdateDispatch: React.Dispatch<any>,\r\nadditionalSubscribeListener) {\r\n    // If we're not subscribed to the store, nothing to do here\r\n    if (!shouldHandleStateChanges)\r\n        return function () { }; // Capture values for checking if and when this component unmounts\r\n    var didUnsubscribe = false;\r\n    var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component\r\n    var checkForUpdates = function () {\r\n        if (didUnsubscribe || !isMounted.current) {\r\n            // Don't run stale listeners.\r\n            // Redux doesn't guarantee unsubscriptions happen until next dispatch.\r\n            return;\r\n        } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it\r\n        var latestStoreState = store.getState();\r\n        var newChildProps, error;\r\n        try {\r\n            // Actually run the selector with the most recent store state and wrapper props\r\n            // to determine what the child props should be\r\n            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);\r\n        }\r\n        catch (e) {\r\n            error = e;\r\n            lastThrownError = e;\r\n        }\r\n        if (!error) {\r\n            lastThrownError = null;\r\n        } // If the child props haven't changed, nothing to do here - cascade the subscription update\r\n        if (newChildProps === lastChildProps.current) {\r\n            if (!renderIsScheduled.current) {\r\n                notifyNestedSubs();\r\n            }\r\n        }\r\n        else {\r\n            // Save references to the new child props.  Note that we track the \"child props from store update\"\r\n            // as a ref instead of a useState/useReducer because we need a way to determine if that value has\r\n            // been processed.  If this went into useState/useReducer, we couldn't clear out the value without\r\n            // forcing another re-render, which we don't want.\r\n            lastChildProps.current = newChildProps;\r\n            childPropsFromStoreUpdate.current = newChildProps;\r\n            renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used\r\n            // Trigger the React `useSyncExternalStore` subscriber\r\n            additionalSubscribeListener();\r\n        }\r\n    }; // Actually subscribe to the nearest connected ancestor (or store)\r\n    subscription.onStateChange = checkForUpdates;\r\n    subscription.trySubscribe(); // Pull data from the store after first render in case the store has\r\n    // changed since we began.\r\n    checkForUpdates();\r\n    var unsubscribeWrapper = function () {\r\n        didUnsubscribe = true;\r\n        subscription.tryUnsubscribe();\r\n        subscription.onStateChange = null;\r\n        if (lastThrownError) {\r\n            // It's possible that we caught an error due to a bad mapState function, but the\r\n            // parent re-rendered without this component and we're about to unmount.\r\n            // This shouldn't happen as long as we do top-down subscriptions correctly, but\r\n            // if we ever do those wrong, this throw will surface the error in our tests.\r\n            // In that case, throw the error from here so it doesn't get lost.\r\n            throw lastThrownError;\r\n        }\r\n    };\r\n    return unsubscribeWrapper;\r\n} // Reducer initial state creation for our update reducer\r\nvar initStateUpdates = function () { return EMPTY_ARRAY; };\r\nfunction strictEqual(a, b) {\r\n    return a === b;\r\n}\r\n/**\r\n * Infers the type of props that a connector will inject into a component.\r\n */\r\nvar hasWarnedAboutDeprecatedPureOption = false;\r\n/**\r\n * Connects a React component to a Redux store.\r\n *\r\n * - Without arguments, just wraps the component, without changing the behavior / props\r\n *\r\n * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior\r\n * is to override ownProps (as stated in the docs), so what remains is everything that's\r\n * not a state or dispatch prop\r\n *\r\n * - When 3rd param is passed, we don't know if ownProps propagate and whether they\r\n * should be valid component props, because it depends on mergeProps implementation.\r\n * As such, it is the user's responsibility to extend ownProps interface from state or\r\n * dispatch props or both when applicable\r\n *\r\n * @param mapStateToProps A function that extracts values from state\r\n * @param mapDispatchToProps Setup for dispatching actions\r\n * @param mergeProps Optional callback to merge state and dispatch props together\r\n * @param options Options for configuring the connection\r\n *\r\n */\r\nfunction connect(mapStateToProps, mapDispatchToProps, mergeProps, _a) {\r\n    var _b = _a === void 0 ? {} : _a, \r\n    // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.\r\n    // @ts-ignore\r\n    pure = _b.pure, _c = _b.areStatesEqual, areStatesEqual = _c === void 0 ? strictEqual : _c, _d = _b.areOwnPropsEqual, areOwnPropsEqual = _d === void 0 ? shallowEqual_1.default : _d, _e = _b.areStatePropsEqual, areStatePropsEqual = _e === void 0 ? shallowEqual_1.default : _e, _f = _b.areMergedPropsEqual, areMergedPropsEqual = _f === void 0 ? shallowEqual_1.default : _f, \r\n    // use React's forwardRef to expose a ref of the wrapped component\r\n    _g = _b.forwardRef, \r\n    // use React's forwardRef to expose a ref of the wrapped component\r\n    forwardRef = _g === void 0 ? false : _g, \r\n    // the context consumer to use\r\n    _h = _b.context, \r\n    // the context consumer to use\r\n    context = _h === void 0 ? Context_1.ReactReduxContext : _h;\r\n    if (true) {\r\n        if (pure !== undefined && !hasWarnedAboutDeprecatedPureOption) {\r\n            hasWarnedAboutDeprecatedPureOption = true;\r\n            warning_1.default('The `pure` option has been removed. `connect` is now always a \"pure/memoized\" component');\r\n        }\r\n    }\r\n    var Context = context;\r\n    var initMapStateToProps = mapStateToProps_1.mapStateToPropsFactory(mapStateToProps);\r\n    var initMapDispatchToProps = mapDispatchToProps_1.mapDispatchToPropsFactory(mapDispatchToProps);\r\n    var initMergeProps = mergeProps_1.mergePropsFactory(mergeProps);\r\n    var shouldHandleStateChanges = Boolean(mapStateToProps);\r\n    var wrapWithConnect = function (WrappedComponent) {\r\n        if ( true && !react_is_1.isValidElementType(WrappedComponent)) {\r\n            throw new Error(\"You must pass a component to the function returned by connect. Instead received \" + stringifyComponent(WrappedComponent));\r\n        }\r\n        var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';\r\n        var displayName = \"Connect(\" + wrappedComponentName + \")\";\r\n        var selectorFactoryOptions = {\r\n            shouldHandleStateChanges: shouldHandleStateChanges,\r\n            displayName: displayName,\r\n            wrappedComponentName: wrappedComponentName,\r\n            WrappedComponent: WrappedComponent,\r\n            // @ts-ignore\r\n            initMapStateToProps: initMapStateToProps,\r\n            // @ts-ignore\r\n            initMapDispatchToProps: initMapDispatchToProps,\r\n            initMergeProps: initMergeProps,\r\n            areStatesEqual: areStatesEqual,\r\n            areStatePropsEqual: areStatePropsEqual,\r\n            areOwnPropsEqual: areOwnPropsEqual,\r\n            areMergedPropsEqual: areMergedPropsEqual\r\n        };\r\n        function ConnectFunction(props) {\r\n            var _a = react_1.useMemo(function () {\r\n                // Distinguish between actual \"data\" props that were passed to the wrapper component,\r\n                // and values needed to control behavior (forwarded refs, alternate context instances).\r\n                // To maintain the wrapperProps object reference, memoize this destructuring.\r\n                var reactReduxForwardedRef = props.reactReduxForwardedRef, wrapperProps = objectWithoutPropertiesLoose_1.default(props, _excluded);\r\n                return [props.context, reactReduxForwardedRef, wrapperProps];\r\n            }, [props]), propsContext = _a[0], reactReduxForwardedRef = _a[1], wrapperProps = _a[2];\r\n            var ContextToUse = react_1.useMemo(function () {\r\n                // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.\r\n                // Memoize the check that determines which context instance we should use.\r\n                return propsContext && propsContext.Consumer && // @ts-ignore\r\n                    react_is_1.isContextConsumer(/*#__PURE__*/ react_1.default.createElement(propsContext.Consumer, null)) ? propsContext : Context;\r\n            }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available\r\n            var contextValue = react_1.useContext(ContextToUse); // The store _must_ exist as either a prop or in context.\r\n            // We'll check to see if it _looks_ like a Redux store first.\r\n            // This allows us to pass through a `store` prop that is just a plain value.\r\n            var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);\r\n            var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);\r\n            if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {\r\n                throw new Error(\"Could not find \\\"store\\\" in the context of \" + (\"\\\"\" + displayName + \"\\\". Either wrap the root component in a <Provider>, \") + \"or pass a custom React context provider to <Provider> and the corresponding \" + (\"React context consumer to \" + displayName + \" in connect options.\"));\r\n            } // Based on the previous check, one of these must be true\r\n            var store = didStoreComeFromProps ? props.store : contextValue.store;\r\n            var getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;\r\n            var childPropsSelector = react_1.useMemo(function () {\r\n                // The child props selector needs the store reference as an input.\r\n                // Re-create this selector whenever the store changes.\r\n                return selectorFactory_1.default(store.dispatch, selectorFactoryOptions);\r\n            }, [store]);\r\n            var _b = react_1.useMemo(function () {\r\n                if (!shouldHandleStateChanges)\r\n                    return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component\r\n                // connected to the store via props shouldn't use subscription from context, or vice versa.\r\n                var subscription = Subscription_1.createSubscription(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in\r\n                // the middle of the notification loop, where `subscription` will then be null. This can\r\n                // probably be avoided if Subscription's listeners logic is changed to not call listeners\r\n                // that have been unsubscribed in the  middle of the notification loop.\r\n                var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);\r\n                return [subscription, notifyNestedSubs];\r\n            }, [store, didStoreComeFromProps, contextValue]), subscription = _b[0], notifyNestedSubs = _b[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,\r\n            // and memoize that value to avoid unnecessary context updates.\r\n            var overriddenContextValue = react_1.useMemo(function () {\r\n                if (didStoreComeFromProps) {\r\n                    // This component is directly subscribed to a store from props.\r\n                    // We don't want descendants reading from this store - pass down whatever\r\n                    // the existing context value is from the nearest connected ancestor.\r\n                    return contextValue;\r\n                } // Otherwise, put this component's subscription instance into context, so that\r\n                // connected descendants won't update until after this component is done\r\n                return extends_1.default({}, contextValue, {\r\n                    subscription: subscription\r\n                });\r\n            }, [didStoreComeFromProps, contextValue, subscription]); // Set up refs to coordinate values between the subscription effect and the render logic\r\n            var lastChildProps = react_1.useRef();\r\n            var lastWrapperProps = react_1.useRef(wrapperProps);\r\n            var childPropsFromStoreUpdate = react_1.useRef();\r\n            var renderIsScheduled = react_1.useRef(false);\r\n            var isProcessingDispatch = react_1.useRef(false);\r\n            var isMounted = react_1.useRef(false);\r\n            var latestSubscriptionCallbackError = react_1.useRef();\r\n            useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect(function () {\r\n                isMounted.current = true;\r\n                return function () {\r\n                    isMounted.current = false;\r\n                };\r\n            }, []);\r\n            var actualChildPropsSelector = react_1.useMemo(function () {\r\n                var selector = function () {\r\n                    // Tricky logic here:\r\n                    // - This render may have been triggered by a Redux store update that produced new child props\r\n                    // - However, we may have gotten new wrapper props after that\r\n                    // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.\r\n                    // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.\r\n                    // So, we'll use the child props from store update only if the wrapper props are the same as last time.\r\n                    if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {\r\n                        return childPropsFromStoreUpdate.current;\r\n                    } // TODO We're reading the store directly in render() here. Bad idea?\r\n                    // This will likely cause Bad Things (TM) to happen in Concurrent Mode.\r\n                    // Note that we do this because on renders _not_ caused by store updates, we need the latest store state\r\n                    // to determine what the child props should be.\r\n                    return childPropsSelector(store.getState(), wrapperProps);\r\n                };\r\n                return selector;\r\n            }, [store, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns\r\n            // about useLayoutEffect in SSR, so we try to detect environment and fall back to\r\n            // just useEffect instead to avoid the warning, since neither will run anyway.\r\n            var subscribeForReact = react_1.useMemo(function () {\r\n                var subscribe = function (reactListener) {\r\n                    if (!subscription) {\r\n                        return function () { };\r\n                    }\r\n                    return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore\r\n                    childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);\r\n                };\r\n                return subscribe;\r\n            }, [subscription]);\r\n            useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);\r\n            var actualChildProps;\r\n            try {\r\n                actualChildProps = useSyncExternalStore(// TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing\r\n                subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,\r\n                // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.\r\n                actualChildPropsSelector, getServerState ? function () { return childPropsSelector(getServerState(), wrapperProps); } : actualChildPropsSelector);\r\n            }\r\n            catch (err) {\r\n                if (latestSubscriptionCallbackError.current) {\r\n                    ;\r\n                    err.message += \"\\nThe error may be correlated with this previous error:\\n\" + latestSubscriptionCallbackError.current.stack + \"\\n\\n\";\r\n                }\r\n                throw err;\r\n            }\r\n            useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect(function () {\r\n                latestSubscriptionCallbackError.current = undefined;\r\n                childPropsFromStoreUpdate.current = undefined;\r\n                lastChildProps.current = actualChildProps;\r\n            }); // Now that all that's done, we can finally try to actually render the child component.\r\n            // We memoize the elements for the rendered child component as an optimization.\r\n            var renderedWrappedComponent = react_1.useMemo(function () {\r\n                return (\r\n                /*#__PURE__*/\r\n                // @ts-ignore\r\n                react_1.default.createElement(WrappedComponent, extends_1.default({}, actualChildProps, {\r\n                    ref: reactReduxForwardedRef\r\n                })));\r\n            }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering\r\n            // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.\r\n            var renderedChild = react_1.useMemo(function () {\r\n                if (shouldHandleStateChanges) {\r\n                    // If this component is subscribed to store updates, we need to pass its own\r\n                    // subscription instance down to our descendants. That means rendering the same\r\n                    // Context instance, and putting a different value into the context.\r\n                    return /*#__PURE__*/ react_1.default.createElement(ContextToUse.Provider, {\r\n                        value: overriddenContextValue\r\n                    }, renderedWrappedComponent);\r\n                }\r\n                return renderedWrappedComponent;\r\n            }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);\r\n            return renderedChild;\r\n        }\r\n        var _Connect = react_1.default.memo(ConnectFunction);\r\n        // Add a hacky cast to get the right output type\r\n        var Connect = _Connect;\r\n        Connect.WrappedComponent = WrappedComponent;\r\n        Connect.displayName = ConnectFunction.displayName = displayName;\r\n        if (forwardRef) {\r\n            var _forwarded = react_1.default.forwardRef(function forwardConnectRef(props, ref) {\r\n                // @ts-ignore\r\n                return /*#__PURE__*/ react_1.default.createElement(Connect, extends_1.default({}, props, {\r\n                    reactReduxForwardedRef: ref\r\n                }));\r\n            });\r\n            var forwarded = _forwarded;\r\n            forwarded.displayName = displayName;\r\n            forwarded.WrappedComponent = WrappedComponent;\r\n            return hoist_non_react_statics_1.default(forwarded, WrappedComponent);\r\n        }\r\n        return hoist_non_react_statics_1.default(Connect, WrappedComponent);\r\n    };\r\n    return wrapWithConnect;\r\n}\r\nexports.default = connect;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/components/connect.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/invalidArgFactory.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/invalidArgFactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.createInvalidArgFactory = void 0;\r\nfunction createInvalidArgFactory(arg, name) {\r\n    return function (dispatch, options) {\r\n        throw new Error(\"Invalid value of type \" + typeof arg + \" for \" + name + \" argument when connecting component \" + options.wrappedComponentName + \".\");\r\n    };\r\n}\r\nexports.createInvalidArgFactory = createInvalidArgFactory;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/invalidArgFactory.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.mapDispatchToPropsFactory = void 0;\r\nvar bindActionCreators_1 = __importDefault(__webpack_require__(/*! ../utils/bindActionCreators */ \"./node_modules/react-redux/es/utils/bindActionCreators.js\"));\r\nvar wrapMapToProps_1 = __webpack_require__(/*! ./wrapMapToProps */ \"./node_modules/react-redux/es/connect/wrapMapToProps.js\");\r\nvar invalidArgFactory_1 = __webpack_require__(/*! ./invalidArgFactory */ \"./node_modules/react-redux/es/connect/invalidArgFactory.js\");\r\nfunction mapDispatchToPropsFactory(mapDispatchToProps) {\r\n    return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToProps_1.wrapMapToPropsConstant(function (dispatch) {\r\n        return bindActionCreators_1.default(mapDispatchToProps, dispatch);\r\n    }) : !mapDispatchToProps ? wrapMapToProps_1.wrapMapToPropsConstant(function (dispatch) { return ({\r\n        dispatch: dispatch\r\n    }); }) : typeof mapDispatchToProps === 'function' ? // @ts-ignore\r\n        wrapMapToProps_1.wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : invalidArgFactory_1.createInvalidArgFactory(mapDispatchToProps, 'mapDispatchToProps');\r\n}\r\nexports.mapDispatchToPropsFactory = mapDispatchToPropsFactory;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/mapDispatchToProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.mapStateToPropsFactory = void 0;\r\nvar wrapMapToProps_1 = __webpack_require__(/*! ./wrapMapToProps */ \"./node_modules/react-redux/es/connect/wrapMapToProps.js\");\r\nvar invalidArgFactory_1 = __webpack_require__(/*! ./invalidArgFactory */ \"./node_modules/react-redux/es/connect/invalidArgFactory.js\");\r\nfunction mapStateToPropsFactory(mapStateToProps) {\r\n    return !mapStateToProps ? wrapMapToProps_1.wrapMapToPropsConstant(function () { return ({}); }) : typeof mapStateToProps === 'function' ? // @ts-ignore\r\n        wrapMapToProps_1.wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : invalidArgFactory_1.createInvalidArgFactory(mapStateToProps, 'mapStateToProps');\r\n}\r\nexports.mapStateToPropsFactory = mapStateToPropsFactory;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/mapStateToProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.mergePropsFactory = exports.wrapMergePropsFunc = exports.defaultMergeProps = void 0;\r\nvar extends_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\"));\r\nvar verifyPlainObject_1 = __importDefault(__webpack_require__(/*! ../utils/verifyPlainObject */ \"./node_modules/react-redux/es/utils/verifyPlainObject.js\"));\r\nvar invalidArgFactory_1 = __webpack_require__(/*! ./invalidArgFactory */ \"./node_modules/react-redux/es/connect/invalidArgFactory.js\");\r\nfunction defaultMergeProps(stateProps, dispatchProps, ownProps) {\r\n    // @ts-ignore\r\n    return extends_1.default({}, ownProps, stateProps, dispatchProps);\r\n}\r\nexports.defaultMergeProps = defaultMergeProps;\r\nfunction wrapMergePropsFunc(mergeProps) {\r\n    return function initMergePropsProxy(dispatch, _a) {\r\n        var displayName = _a.displayName, areMergedPropsEqual = _a.areMergedPropsEqual;\r\n        var hasRunOnce = false;\r\n        var mergedProps;\r\n        return function mergePropsProxy(stateProps, dispatchProps, ownProps) {\r\n            var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);\r\n            if (hasRunOnce) {\r\n                if (!areMergedPropsEqual(nextMergedProps, mergedProps))\r\n                    mergedProps = nextMergedProps;\r\n            }\r\n            else {\r\n                hasRunOnce = true;\r\n                mergedProps = nextMergedProps;\r\n                if (true)\r\n                    verifyPlainObject_1.default(mergedProps, displayName, 'mergeProps');\r\n            }\r\n            return mergedProps;\r\n        };\r\n    };\r\n}\r\nexports.wrapMergePropsFunc = wrapMergePropsFunc;\r\nfunction mergePropsFactory(mergeProps) {\r\n    return !mergeProps ? function () { return defaultMergeProps; } : typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : invalidArgFactory_1.createInvalidArgFactory(mergeProps, 'mergeProps');\r\n}\r\nexports.mergePropsFactory = mergePropsFactory;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/mergeProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.pureFinalPropsSelectorFactory = void 0;\r\nvar objectWithoutPropertiesLoose_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\"));\r\nvar _excluded = [\"initMapStateToProps\", \"initMapDispatchToProps\", \"initMergeProps\"];\r\nvar verifySubselectors_1 = __importDefault(__webpack_require__(/*! ./verifySubselectors */ \"./node_modules/react-redux/es/connect/verifySubselectors.js\"));\r\nfunction pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _a) {\r\n    var areStatesEqual = _a.areStatesEqual, areOwnPropsEqual = _a.areOwnPropsEqual, areStatePropsEqual = _a.areStatePropsEqual;\r\n    var hasRunAtLeastOnce = false;\r\n    var state;\r\n    var ownProps;\r\n    var stateProps;\r\n    var dispatchProps;\r\n    var mergedProps;\r\n    function handleFirstCall(firstState, firstOwnProps) {\r\n        state = firstState;\r\n        ownProps = firstOwnProps;\r\n        stateProps = mapStateToProps(state, ownProps);\r\n        dispatchProps = mapDispatchToProps(dispatch, ownProps);\r\n        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\r\n        hasRunAtLeastOnce = true;\r\n        return mergedProps;\r\n    }\r\n    function handleNewPropsAndNewState() {\r\n        stateProps = mapStateToProps(state, ownProps);\r\n        if (mapDispatchToProps.dependsOnOwnProps)\r\n            dispatchProps = mapDispatchToProps(dispatch, ownProps);\r\n        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\r\n        return mergedProps;\r\n    }\r\n    function handleNewProps() {\r\n        if (mapStateToProps.dependsOnOwnProps)\r\n            stateProps = mapStateToProps(state, ownProps);\r\n        if (mapDispatchToProps.dependsOnOwnProps)\r\n            dispatchProps = mapDispatchToProps(dispatch, ownProps);\r\n        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\r\n        return mergedProps;\r\n    }\r\n    function handleNewState() {\r\n        var nextStateProps = mapStateToProps(state, ownProps);\r\n        var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);\r\n        stateProps = nextStateProps;\r\n        if (statePropsChanged)\r\n            mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\r\n        return mergedProps;\r\n    }\r\n    function handleSubsequentCalls(nextState, nextOwnProps) {\r\n        var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);\r\n        var stateChanged = !areStatesEqual(nextState, state);\r\n        state = nextState;\r\n        ownProps = nextOwnProps;\r\n        if (propsChanged && stateChanged)\r\n            return handleNewPropsAndNewState();\r\n        if (propsChanged)\r\n            return handleNewProps();\r\n        if (stateChanged)\r\n            return handleNewState();\r\n        return mergedProps;\r\n    }\r\n    return function pureFinalPropsSelector(nextState, nextOwnProps) {\r\n        return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);\r\n    };\r\n}\r\nexports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;\r\n// TODO: Add more comments\r\n// The selector returned by selectorFactory will memoize its results,\r\n// allowing connect's shouldComponentUpdate to return false if final\r\n// props have not changed.\r\nfunction finalPropsSelectorFactory(dispatch, _ref) {\r\n    var initMapStateToProps = _ref.initMapStateToProps, initMapDispatchToProps = _ref.initMapDispatchToProps, initMergeProps = _ref.initMergeProps, options = objectWithoutPropertiesLoose_1.default(_ref, _excluded);\r\n    var mapStateToProps = initMapStateToProps(dispatch, options);\r\n    var mapDispatchToProps = initMapDispatchToProps(dispatch, options);\r\n    var mergeProps = initMergeProps(dispatch, options);\r\n    if (true) {\r\n        verifySubselectors_1.default(mapStateToProps, mapDispatchToProps, mergeProps);\r\n    }\r\n    return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);\r\n}\r\nexports.default = finalPropsSelectorFactory;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/selectorFactory.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar warning_1 = __importDefault(__webpack_require__(/*! ../utils/warning */ \"./node_modules/react-redux/es/utils/warning.js\"));\r\nfunction verify(selector, methodName) {\r\n    if (!selector) {\r\n        throw new Error(\"Unexpected value for \" + methodName + \" in connect.\");\r\n    }\r\n    else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {\r\n        if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {\r\n            warning_1.default(\"The selector for \" + methodName + \" of connect did not specify a value for dependsOnOwnProps.\");\r\n        }\r\n    }\r\n}\r\nfunction verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {\r\n    verify(mapStateToProps, 'mapStateToProps');\r\n    verify(mapDispatchToProps, 'mapDispatchToProps');\r\n    verify(mergeProps, 'mergeProps');\r\n}\r\nexports.default = verifySubselectors;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/verifySubselectors.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.wrapMapToPropsFunc = exports.getDependsOnOwnProps = exports.wrapMapToPropsConstant = void 0;\r\nvar verifyPlainObject_1 = __importDefault(__webpack_require__(/*! ../utils/verifyPlainObject */ \"./node_modules/react-redux/es/utils/verifyPlainObject.js\"));\r\nfunction wrapMapToPropsConstant(// * Note:\r\n//  It seems that the dispatch argument\r\n//  could be a dispatch function in some cases (ex: whenMapDispatchToPropsIsMissing)\r\n//  and a state object in some others (ex: whenMapStateToPropsIsMissing)\r\n// eslint-disable-next-line no-unused-vars\r\ngetConstant) {\r\n    return function initConstantSelector(dispatch) {\r\n        var constant = getConstant(dispatch);\r\n        function constantSelector() {\r\n            return constant;\r\n        }\r\n        constantSelector.dependsOnOwnProps = false;\r\n        return constantSelector;\r\n    };\r\n} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args\r\nexports.wrapMapToPropsConstant = wrapMapToPropsConstant;\r\n// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine\r\n// whether mapToProps needs to be invoked when props have changed.\r\n//\r\n// A length of one signals that mapToProps does not depend on props from the parent component.\r\n// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and\r\n// therefore not reporting its length accurately..\r\n// TODO Can this get pulled out so that we can subscribe directly to the store if we don't need ownProps?\r\nfunction getDependsOnOwnProps(mapToProps) {\r\n    return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;\r\n} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,\r\nexports.getDependsOnOwnProps = getDependsOnOwnProps;\r\n// this function wraps mapToProps in a proxy function which does several things:\r\n//\r\n//  * Detects whether the mapToProps function being called depends on props, which\r\n//    is used by selectorFactory to decide if it should reinvoke on props changes.\r\n//\r\n//  * On first call, handles mapToProps if returns another function, and treats that\r\n//    new function as the true mapToProps for subsequent calls.\r\n//\r\n//  * On first call, verifies the first result is a plain object, in order to warn\r\n//    the developer that their mapToProps function is not returning a valid result.\r\n//\r\nfunction wrapMapToPropsFunc(mapToProps, methodName) {\r\n    return function initProxySelector(dispatch, _a) {\r\n        var displayName = _a.displayName;\r\n        var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {\r\n            return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, undefined);\r\n        }; // allow detectFactoryAndVerify to get ownProps\r\n        proxy.dependsOnOwnProps = true;\r\n        proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {\r\n            proxy.mapToProps = mapToProps;\r\n            proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);\r\n            var props = proxy(stateOrDispatch, ownProps);\r\n            if (typeof props === 'function') {\r\n                proxy.mapToProps = props;\r\n                proxy.dependsOnOwnProps = getDependsOnOwnProps(props);\r\n                props = proxy(stateOrDispatch, ownProps);\r\n            }\r\n            if (true)\r\n                verifyPlainObject_1.default(props, displayName, methodName);\r\n            return props;\r\n        };\r\n        return proxy;\r\n    };\r\n}\r\nexports.wrapMapToPropsFunc = wrapMapToPropsFunc;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/wrapMapToProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/exports.js":
/*!************************************************!*\
  !*** ./node_modules/react-redux/es/exports.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.shallowEqual = exports.createStoreHook = exports.useStore = exports.createSelectorHook = exports.useSelector = exports.createDispatchHook = exports.useDispatch = exports.connect = exports.ReactReduxContext = exports.Provider = void 0;\r\nvar Provider_1 = __importDefault(__webpack_require__(/*! ./components/Provider */ \"./node_modules/react-redux/es/components/Provider.js\"));\r\nexports.Provider = Provider_1.default;\r\nvar connect_1 = __importDefault(__webpack_require__(/*! ./components/connect */ \"./node_modules/react-redux/es/components/connect.js\"));\r\nexports.connect = connect_1.default;\r\nvar Context_1 = __webpack_require__(/*! ./components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\r\nObject.defineProperty(exports, \"ReactReduxContext\", { enumerable: true, get: function () { return Context_1.ReactReduxContext; } });\r\nvar useDispatch_1 = __webpack_require__(/*! ./hooks/useDispatch */ \"./node_modules/react-redux/es/hooks/useDispatch.js\");\r\nObject.defineProperty(exports, \"useDispatch\", { enumerable: true, get: function () { return useDispatch_1.useDispatch; } });\r\nObject.defineProperty(exports, \"createDispatchHook\", { enumerable: true, get: function () { return useDispatch_1.createDispatchHook; } });\r\nvar useSelector_1 = __webpack_require__(/*! ./hooks/useSelector */ \"./node_modules/react-redux/es/hooks/useSelector.js\");\r\nObject.defineProperty(exports, \"useSelector\", { enumerable: true, get: function () { return useSelector_1.useSelector; } });\r\nObject.defineProperty(exports, \"createSelectorHook\", { enumerable: true, get: function () { return useSelector_1.createSelectorHook; } });\r\nvar useStore_1 = __webpack_require__(/*! ./hooks/useStore */ \"./node_modules/react-redux/es/hooks/useStore.js\");\r\nObject.defineProperty(exports, \"useStore\", { enumerable: true, get: function () { return useStore_1.useStore; } });\r\nObject.defineProperty(exports, \"createStoreHook\", { enumerable: true, get: function () { return useStore_1.createStoreHook; } });\r\nvar shallowEqual_1 = __importDefault(__webpack_require__(/*! ./utils/shallowEqual */ \"./node_modules/react-redux/es/utils/shallowEqual.js\"));\r\nexports.shallowEqual = shallowEqual_1.default;\r\n__exportStar(__webpack_require__(/*! ./types */ \"./node_modules/react-redux/es/types.js\"), exports);\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/exports.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useDispatch = exports.createDispatchHook = void 0;\r\nvar Context_1 = __webpack_require__(/*! ../components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\r\nvar useStore_1 = __webpack_require__(/*! ./useStore */ \"./node_modules/react-redux/es/hooks/useStore.js\");\r\n/**\r\n * Hook factory, which creates a `useDispatch` hook bound to a given context.\r\n *\r\n * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.\r\n * @returns {Function} A `useDispatch` hook bound to the specified context.\r\n */\r\nfunction createDispatchHook(context) {\r\n    if (context === void 0) { context = Context_1.ReactReduxContext; }\r\n    var useStore = // @ts-ignore\r\n     context === Context_1.ReactReduxContext ? useStore_1.useStore : useStore_1.createStoreHook(context);\r\n    return function useDispatch() {\r\n        var store = useStore(); // @ts-ignore\r\n        return store.dispatch;\r\n    };\r\n}\r\nexports.createDispatchHook = createDispatchHook;\r\n/**\r\n * A hook to access the redux `dispatch` function.\r\n *\r\n * @returns {any|function} redux store's `dispatch` function\r\n *\r\n * @example\r\n *\r\n * import React, { useCallback } from 'react'\r\n * import { useDispatch } from 'react-redux'\r\n *\r\n * export const CounterComponent = ({ value }) => {\r\n *   const dispatch = useDispatch()\r\n *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])\r\n *   return (\r\n *     <div>\r\n *       <span>{value}</span>\r\n *       <button onClick={increaseCounter}>Increase counter</button>\r\n *     </div>\r\n *   )\r\n * }\r\n */\r\nexports.useDispatch = createDispatchHook();\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/hooks/useDispatch.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useReduxContext = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar Context_1 = __webpack_require__(/*! ../components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\r\n/**\r\n * A hook to access the value of the `ReactReduxContext`. This is a low-level\r\n * hook that you should usually not need to call directly.\r\n *\r\n * @returns {any} the value of the `ReactReduxContext`\r\n *\r\n * @example\r\n *\r\n * import React from 'react'\r\n * import { useReduxContext } from 'react-redux'\r\n *\r\n * export const CounterComponent = () => {\r\n *   const { store } = useReduxContext()\r\n *   return <div>{store.getState()}</div>\r\n * }\r\n */\r\nfunction useReduxContext() {\r\n    var contextValue = react_1.useContext(Context_1.ReactReduxContext);\r\n    if ( true && !contextValue) {\r\n        throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');\r\n    }\r\n    return contextValue;\r\n}\r\nexports.useReduxContext = useReduxContext;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/hooks/useReduxContext.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useSelector = exports.createSelectorHook = exports.initializeUseSelector = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar useReduxContext_1 = __webpack_require__(/*! ./useReduxContext */ \"./node_modules/react-redux/es/hooks/useReduxContext.js\");\r\nvar Context_1 = __webpack_require__(/*! ../components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\r\nvar useSyncExternalStore_1 = __webpack_require__(/*! ../utils/useSyncExternalStore */ \"./node_modules/react-redux/es/utils/useSyncExternalStore.js\");\r\nvar useSyncExternalStoreWithSelector = useSyncExternalStore_1.notInitialized;\r\nvar initializeUseSelector = function (fn) {\r\n    useSyncExternalStoreWithSelector = fn;\r\n};\r\nexports.initializeUseSelector = initializeUseSelector;\r\nvar refEquality = function (a, b) { return a === b; };\r\n/**\r\n * Hook factory, which creates a `useSelector` hook bound to a given context.\r\n *\r\n * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.\r\n * @returns {Function} A `useSelector` hook bound to the specified context.\r\n */\r\nfunction createSelectorHook(context) {\r\n    if (context === void 0) { context = Context_1.ReactReduxContext; }\r\n    var useReduxContext = context === Context_1.ReactReduxContext ? useReduxContext_1.useReduxContext : function () { return react_1.useContext(context); };\r\n    return function useSelector(selector, equalityFn) {\r\n        if (equalityFn === void 0) { equalityFn = refEquality; }\r\n        if (true) {\r\n            if (!selector) {\r\n                throw new Error(\"You must pass a selector to useSelector\");\r\n            }\r\n            if (typeof selector !== 'function') {\r\n                throw new Error(\"You must pass a function as a selector to useSelector\");\r\n            }\r\n            if (typeof equalityFn !== 'function') {\r\n                throw new Error(\"You must pass a function as an equality function to useSelector\");\r\n            }\r\n        }\r\n        var _a = useReduxContext(), store = _a.store, subscription = _a.subscription, getServerState = _a.getServerState;\r\n        var selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, selector, equalityFn);\r\n        react_1.useDebugValue(selectedState);\r\n        return selectedState;\r\n    };\r\n}\r\nexports.createSelectorHook = createSelectorHook;\r\n/**\r\n * A hook to access the redux store's state. This hook takes a selector function\r\n * as an argument. The selector is called with the store state.\r\n *\r\n * This hook takes an optional equality comparison function as the second parameter\r\n * that allows you to customize the way the selected state is compared to determine\r\n * whether the component needs to be re-rendered.\r\n *\r\n * @param {Function} selector the selector function\r\n * @param {Function=} equalityFn the function that will be used to determine equality\r\n *\r\n * @returns {any} the selected state\r\n *\r\n * @example\r\n *\r\n * import React from 'react'\r\n * import { useSelector } from 'react-redux'\r\n *\r\n * export const CounterComponent = () => {\r\n *   const counter = useSelector(state => state.counter)\r\n *   return <div>{counter}</div>\r\n * }\r\n */\r\nexports.useSelector = createSelectorHook();\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/hooks/useSelector.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useStore = exports.createStoreHook = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar Context_1 = __webpack_require__(/*! ../components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\r\nvar useReduxContext_1 = __webpack_require__(/*! ./useReduxContext */ \"./node_modules/react-redux/es/hooks/useReduxContext.js\");\r\n/**\r\n * Hook factory, which creates a `useStore` hook bound to a given context.\r\n *\r\n * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.\r\n * @returns {Function} A `useStore` hook bound to the specified context.\r\n */\r\nfunction createStoreHook(context) {\r\n    if (context === void 0) { context = Context_1.ReactReduxContext; }\r\n    var useReduxContext = // @ts-ignore\r\n     context === Context_1.ReactReduxContext ? useReduxContext_1.useReduxContext : function () { return react_1.useContext(context); };\r\n    return function useStore() {\r\n        var store = useReduxContext().store; // @ts-ignore\r\n        return store;\r\n    };\r\n}\r\nexports.createStoreHook = createStoreHook;\r\n/**\r\n * A hook to access the redux store.\r\n *\r\n * @returns {any} the redux store\r\n *\r\n * @example\r\n *\r\n * import React from 'react'\r\n * import { useStore } from 'react-redux'\r\n *\r\n * export const ExampleComponent = () => {\r\n *   const store = useStore()\r\n *   return <div>{store.getState()}</div>\r\n * }\r\n */\r\nexports.useStore = createStoreHook();\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/hooks/useStore.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.batch = void 0;\r\n// The primary entry point assumes we're working with standard ReactDOM/RN, but\r\n// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).\r\n// Because of that, the useSyncExternalStore compat shim is needed.\r\nvar shim_1 = __webpack_require__(/*! use-sync-external-store/shim */ \"./node_modules/use-sync-external-store/shim/index.js\");\r\nvar with_selector_1 = __webpack_require__(/*! use-sync-external-store/shim/with-selector */ \"./node_modules/use-sync-external-store/shim/with-selector.js\");\r\nvar reactBatchedUpdates_1 = __webpack_require__(/*! ./utils/reactBatchedUpdates */ \"./node_modules/react-redux/es/utils/reactBatchedUpdates.js\");\r\nObject.defineProperty(exports, \"batch\", { enumerable: true, get: function () { return reactBatchedUpdates_1.unstable_batchedUpdates; } });\r\nvar batch_1 = __webpack_require__(/*! ./utils/batch */ \"./node_modules/react-redux/es/utils/batch.js\");\r\nvar useSelector_1 = __webpack_require__(/*! ./hooks/useSelector */ \"./node_modules/react-redux/es/hooks/useSelector.js\");\r\nvar connect_1 = __webpack_require__(/*! ./components/connect */ \"./node_modules/react-redux/es/components/connect.js\");\r\nuseSelector_1.initializeUseSelector(with_selector_1.useSyncExternalStoreWithSelector);\r\nconnect_1.initializeConnect(shim_1.useSyncExternalStore); // Enable batched updates in our subscriptions for use\r\n// with standard React renderers (ReactDOM, React Native)\r\nbatch_1.setBatch(reactBatchedUpdates_1.unstable_batchedUpdates);\r\n__exportStar(__webpack_require__(/*! ./exports */ \"./node_modules/react-redux/es/exports.js\"), exports);\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/index.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/types.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/types.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/types.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.createSubscription = void 0;\r\nvar batch_1 = __webpack_require__(/*! ./batch */ \"./node_modules/react-redux/es/utils/batch.js\"); // encapsulates the subscription logic for connecting a component to the redux store, as\r\n// well as nesting subscriptions of descendant components, so that we can ensure the\r\n// ancestor components re-render before descendants\r\nfunction createListenerCollection() {\r\n    var batch = batch_1.getBatch();\r\n    var first = null;\r\n    var last = null;\r\n    return {\r\n        clear: function () {\r\n            first = null;\r\n            last = null;\r\n        },\r\n        notify: function () {\r\n            batch(function () {\r\n                var listener = first;\r\n                while (listener) {\r\n                    listener.callback();\r\n                    listener = listener.next;\r\n                }\r\n            });\r\n        },\r\n        get: function () {\r\n            var listeners = [];\r\n            var listener = first;\r\n            while (listener) {\r\n                listeners.push(listener);\r\n                listener = listener.next;\r\n            }\r\n            return listeners;\r\n        },\r\n        subscribe: function (callback) {\r\n            var isSubscribed = true;\r\n            var listener = last = {\r\n                callback: callback,\r\n                next: null,\r\n                prev: last\r\n            };\r\n            if (listener.prev) {\r\n                listener.prev.next = listener;\r\n            }\r\n            else {\r\n                first = listener;\r\n            }\r\n            return function unsubscribe() {\r\n                if (!isSubscribed || first === null)\r\n                    return;\r\n                isSubscribed = false;\r\n                if (listener.next) {\r\n                    listener.next.prev = listener.prev;\r\n                }\r\n                else {\r\n                    last = listener.prev;\r\n                }\r\n                if (listener.prev) {\r\n                    listener.prev.next = listener.next;\r\n                }\r\n                else {\r\n                    first = listener.next;\r\n                }\r\n            };\r\n        }\r\n    };\r\n}\r\nvar nullListeners = {\r\n    notify: function () { },\r\n    get: function () { return []; }\r\n};\r\nfunction createSubscription(store, parentSub) {\r\n    var unsubscribe;\r\n    var listeners = nullListeners;\r\n    function addNestedSub(listener) {\r\n        trySubscribe();\r\n        return listeners.subscribe(listener);\r\n    }\r\n    function notifyNestedSubs() {\r\n        listeners.notify();\r\n    }\r\n    function handleChangeWrapper() {\r\n        if (subscription.onStateChange) {\r\n            subscription.onStateChange();\r\n        }\r\n    }\r\n    function isSubscribed() {\r\n        return Boolean(unsubscribe);\r\n    }\r\n    function trySubscribe() {\r\n        if (!unsubscribe) {\r\n            unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);\r\n            listeners = createListenerCollection();\r\n        }\r\n    }\r\n    function tryUnsubscribe() {\r\n        if (unsubscribe) {\r\n            unsubscribe();\r\n            unsubscribe = undefined;\r\n            listeners.clear();\r\n            listeners = nullListeners;\r\n        }\r\n    }\r\n    var subscription = {\r\n        addNestedSub: addNestedSub,\r\n        notifyNestedSubs: notifyNestedSubs,\r\n        handleChangeWrapper: handleChangeWrapper,\r\n        isSubscribed: isSubscribed,\r\n        trySubscribe: trySubscribe,\r\n        tryUnsubscribe: tryUnsubscribe,\r\n        getListeners: function () { return listeners; }\r\n    };\r\n    return subscription;\r\n}\r\nexports.createSubscription = createSubscription;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/Subscription.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getBatch = exports.setBatch = void 0;\r\n// Default to a dummy \"batch\" implementation that just runs the callback\r\nfunction defaultNoopBatch(callback) {\r\n    callback();\r\n}\r\nvar batch = defaultNoopBatch; // Allow injecting another batching function later\r\nvar setBatch = function (newBatch) { return batch = newBatch; }; // Supply a getter just to skip dealing with ESM bindings\r\nexports.setBatch = setBatch;\r\nvar getBatch = function () { return batch; };\r\nexports.getBatch = getBatch;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/batch.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/bindActionCreators.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/bindActionCreators.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction bindActionCreators(actionCreators, dispatch) {\r\n    var boundActionCreators = {};\r\n    var _loop_1 = function (key) {\r\n        var actionCreator = actionCreators[key];\r\n        if (typeof actionCreator === 'function') {\r\n            boundActionCreators[key] = function () {\r\n                var args = [];\r\n                for (var _i = 0; _i < arguments.length; _i++) {\r\n                    args[_i] = arguments[_i];\r\n                }\r\n                return dispatch(actionCreator.apply(void 0, args));\r\n            };\r\n        }\r\n    };\r\n    for (var key in actionCreators) {\r\n        _loop_1(key);\r\n    }\r\n    return boundActionCreators;\r\n}\r\nexports.default = bindActionCreators;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/bindActionCreators.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @param {any} obj The object to inspect.\r\n * @returns {boolean} True if the argument appears to be a plain object.\r\n */\r\nfunction isPlainObject(obj) {\r\n    if (typeof obj !== 'object' || obj === null)\r\n        return false;\r\n    var proto = Object.getPrototypeOf(obj);\r\n    if (proto === null)\r\n        return true;\r\n    var baseProto = proto;\r\n    while (Object.getPrototypeOf(baseProto) !== null) {\r\n        baseProto = Object.getPrototypeOf(baseProto);\r\n    }\r\n    return proto === baseProto;\r\n}\r\nexports.default = isPlainObject;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/isPlainObject.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.unstable_batchedUpdates = void 0;\r\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"react-dom\");\r\nObject.defineProperty(exports, \"unstable_batchedUpdates\", { enumerable: true, get: function () { return react_dom_1.unstable_batchedUpdates; } });\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/reactBatchedUpdates.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction is(x, y) {\r\n    if (x === y) {\r\n        return x !== 0 || y !== 0 || 1 / x === 1 / y;\r\n    }\r\n    else {\r\n        return x !== x && y !== y;\r\n    }\r\n}\r\nfunction shallowEqual(objA, objB) {\r\n    if (is(objA, objB))\r\n        return true;\r\n    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {\r\n        return false;\r\n    }\r\n    var keysA = Object.keys(objA);\r\n    var keysB = Object.keys(objB);\r\n    if (keysA.length !== keysB.length)\r\n        return false;\r\n    for (var i = 0; i < keysA.length; i++) {\r\n        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\nexports.default = shallowEqual;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/shallowEqual.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useIsomorphicLayoutEffect = exports.canUseDOM = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\"); // React currently throws a warning when using useLayoutEffect on the server.\r\n// To get around it, we can conditionally useEffect on the server (no-op) and\r\n// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store\r\n// subscription callback always has the selector from the latest render commit\r\n// available, otherwise a store update may happen between render and the effect,\r\n// which may cause missed updates; we also must ensure the store subscription\r\n// is created synchronously, otherwise a store update may occur before the\r\n// subscription is created and an inconsistent state may be observed\r\n// Matches logic in React's `shared/ExecutionEnvironment` file\r\nexports.canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');\r\nexports.useIsomorphicLayoutEffect = exports.canUseDOM ? react_1.useLayoutEffect : react_1.useEffect;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useSyncExternalStore.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useSyncExternalStore.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.notInitialized = void 0;\r\nvar notInitialized = function () {\r\n    throw new Error('uSES not initialized!');\r\n};\r\nexports.notInitialized = notInitialized;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/useSyncExternalStore.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar isPlainObject_1 = __importDefault(__webpack_require__(/*! ./isPlainObject */ \"./node_modules/react-redux/es/utils/isPlainObject.js\"));\r\nvar warning_1 = __importDefault(__webpack_require__(/*! ./warning */ \"./node_modules/react-redux/es/utils/warning.js\"));\r\nfunction verifyPlainObject(value, displayName, methodName) {\r\n    if (!isPlainObject_1.default(value)) {\r\n        warning_1.default(methodName + \"() in \" + displayName + \" must return a plain object. Instead received \" + value + \".\");\r\n    }\r\n}\r\nexports.default = verifyPlainObject;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/verifyPlainObject.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * Prints a warning in the console if it exists.\r\n *\r\n * @param {String} message The warning message.\r\n * @returns {void}\r\n */\r\nfunction warning(message) {\r\n    /* eslint-disable no-console */\r\n    if (typeof console !== 'undefined' && typeof console.error === 'function') {\r\n        console.error(message);\r\n    }\r\n    /* eslint-enable no-console */\r\n    try {\r\n        // This error was thrown as a convenience so that if you enable\r\n        // \"break on all exceptions\" in your console,\r\n        // it would pause the execution at this line.\r\n        throw new Error(message);\r\n        /* eslint-disable no-empty */\r\n    }\r\n    catch (e) { }\r\n    /* eslint-enable no-empty */\r\n}\r\nexports.default = warning;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/warning.js?");

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar compose = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\").compose;\r\nexports.__esModule = true;\r\nexports.composeWithDevTools =\r\n    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__\r\n        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__\r\n        : function () {\r\n            if (arguments.length === 0)\r\n                return undefined;\r\n            if (typeof arguments[0] === 'object')\r\n                return compose;\r\n            return compose.apply(null, arguments);\r\n        };\r\nexports.devToolsEnhancer =\r\n    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__\r\n        ? window.__REDUX_DEVTOOLS_EXTENSION__\r\n        : function () {\r\n            return function (noop) {\r\n                return noop;\r\n            };\r\n        };\r\n\n\n//# sourceURL=webpack:///./node_modules/redux-devtools-extension/index.js?");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.legacy_createStore = exports.createStore = exports.compose = exports.combineReducers = exports.bindActionCreators = exports.applyMiddleware = exports.__DO_NOT_USE__ActionTypes = void 0;\r\nvar objectSpread2_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\"));\r\n/**\r\n * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js\r\n *\r\n * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes\r\n * during build.\r\n * @param {number} code\r\n */\r\nfunction formatProdErrorMessage(code) {\r\n    return \"Minified Redux error #\" + code + \"; visit https://redux.js.org/Errors?code=\" + code + \" for the full message or \" + 'use the non-minified dev environment for full errors. ';\r\n}\r\n// Inlined version of the `symbol-observable` polyfill\r\nvar $$observable = (function () {\r\n    return typeof Symbol === 'function' && Symbol.observable || '@@observable';\r\n})();\r\n/**\r\n * These are private action types reserved by Redux.\r\n * For any unknown actions, you must return the current state.\r\n * If the current state is undefined, you must return the initial state.\r\n * Do not reference these action types directly in your code.\r\n */\r\nvar randomString = function randomString() {\r\n    return Math.random().toString(36).substring(7).split('').join('.');\r\n};\r\nvar ActionTypes = {\r\n    INIT: \"@@redux/INIT\" + randomString(),\r\n    REPLACE: \"@@redux/REPLACE\" + randomString(),\r\n    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {\r\n        return \"@@redux/PROBE_UNKNOWN_ACTION\" + randomString();\r\n    }\r\n};\r\nexports.__DO_NOT_USE__ActionTypes = ActionTypes;\r\n/**\r\n * @param {any} obj The object to inspect.\r\n * @returns {boolean} True if the argument appears to be a plain object.\r\n */\r\nfunction isPlainObject(obj) {\r\n    if (typeof obj !== 'object' || obj === null)\r\n        return false;\r\n    var proto = obj;\r\n    while (Object.getPrototypeOf(proto) !== null) {\r\n        proto = Object.getPrototypeOf(proto);\r\n    }\r\n    return Object.getPrototypeOf(obj) === proto;\r\n}\r\n// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of\r\nfunction miniKindOf(val) {\r\n    if (val === void 0)\r\n        return 'undefined';\r\n    if (val === null)\r\n        return 'null';\r\n    var type = typeof val;\r\n    switch (type) {\r\n        case 'boolean':\r\n        case 'string':\r\n        case 'number':\r\n        case 'symbol':\r\n        case 'function':\r\n            {\r\n                return type;\r\n            }\r\n    }\r\n    if (Array.isArray(val))\r\n        return 'array';\r\n    if (isDate(val))\r\n        return 'date';\r\n    if (isError(val))\r\n        return 'error';\r\n    var constructorName = ctorName(val);\r\n    switch (constructorName) {\r\n        case 'Symbol':\r\n        case 'Promise':\r\n        case 'WeakMap':\r\n        case 'WeakSet':\r\n        case 'Map':\r\n        case 'Set':\r\n            return constructorName;\r\n    } // other\r\n    return type.slice(8, -1).toLowerCase().replace(/\\s/g, '');\r\n}\r\nfunction ctorName(val) {\r\n    return typeof val.constructor === 'function' ? val.constructor.name : null;\r\n}\r\nfunction isError(val) {\r\n    return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';\r\n}\r\nfunction isDate(val) {\r\n    if (val instanceof Date)\r\n        return true;\r\n    return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';\r\n}\r\nfunction kindOf(val) {\r\n    var typeOfVal = typeof val;\r\n    if (true) {\r\n        typeOfVal = miniKindOf(val);\r\n    }\r\n    return typeOfVal;\r\n}\r\n/**\r\n * @deprecated\r\n *\r\n * **We recommend using the `configureStore` method\r\n * of the `@reduxjs/toolkit` package**, which replaces `createStore`.\r\n *\r\n * Redux Toolkit is our recommended approach for writing Redux logic today,\r\n * including store setup, reducers, data fetching, and more.\r\n *\r\n * **For more details, please read this Redux docs page:**\r\n * **https://redux.js.org/introduction/why-rtk-is-redux-today**\r\n *\r\n * `configureStore` from Redux Toolkit is an improved version of `createStore` that\r\n * simplifies setup and helps avoid common bugs.\r\n *\r\n * You should not be using the `redux` core package by itself today, except for learning purposes.\r\n * The `createStore` method from the core `redux` package will not be removed, but we encourage\r\n * all users to migrate to using Redux Toolkit for all Redux code.\r\n *\r\n * If you want to use `createStore` without this visual deprecation warning, use\r\n * the `legacy_createStore` import instead:\r\n *\r\n * `import { legacy_createStore as createStore} from 'redux'`\r\n *\r\n */\r\nfunction createStore(reducer, preloadedState, enhancer) {\r\n    var _ref2;\r\n    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {\r\n        throw new Error( false ? undefined : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');\r\n    }\r\n    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {\r\n        enhancer = preloadedState;\r\n        preloadedState = undefined;\r\n    }\r\n    if (typeof enhancer !== 'undefined') {\r\n        if (typeof enhancer !== 'function') {\r\n            throw new Error( false ? undefined : \"Expected the enhancer to be a function. Instead, received: '\" + kindOf(enhancer) + \"'\");\r\n        }\r\n        return enhancer(createStore)(reducer, preloadedState);\r\n    }\r\n    if (typeof reducer !== 'function') {\r\n        throw new Error( false ? undefined : \"Expected the root reducer to be a function. Instead, received: '\" + kindOf(reducer) + \"'\");\r\n    }\r\n    var currentReducer = reducer;\r\n    var currentState = preloadedState;\r\n    var currentListeners = [];\r\n    var nextListeners = currentListeners;\r\n    var isDispatching = false;\r\n    /**\r\n     * This makes a shallow copy of currentListeners so we can use\r\n     * nextListeners as a temporary list while dispatching.\r\n     *\r\n     * This prevents any bugs around consumers calling\r\n     * subscribe/unsubscribe in the middle of a dispatch.\r\n     */\r\n    function ensureCanMutateNextListeners() {\r\n        if (nextListeners === currentListeners) {\r\n            nextListeners = currentListeners.slice();\r\n        }\r\n    }\r\n    /**\r\n     * Reads the state tree managed by the store.\r\n     *\r\n     * @returns {any} The current state tree of your application.\r\n     */\r\n    function getState() {\r\n        if (isDispatching) {\r\n            throw new Error( false ? undefined : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');\r\n        }\r\n        return currentState;\r\n    }\r\n    /**\r\n     * Adds a change listener. It will be called any time an action is dispatched,\r\n     * and some part of the state tree may potentially have changed. You may then\r\n     * call `getState()` to read the current state tree inside the callback.\r\n     *\r\n     * You may call `dispatch()` from a change listener, with the following\r\n     * caveats:\r\n     *\r\n     * 1. The subscriptions are snapshotted just before every `dispatch()` call.\r\n     * If you subscribe or unsubscribe while the listeners are being invoked, this\r\n     * will not have any effect on the `dispatch()` that is currently in progress.\r\n     * However, the next `dispatch()` call, whether nested or not, will use a more\r\n     * recent snapshot of the subscription list.\r\n     *\r\n     * 2. The listener should not expect to see all state changes, as the state\r\n     * might have been updated multiple times during a nested `dispatch()` before\r\n     * the listener is called. It is, however, guaranteed that all subscribers\r\n     * registered before the `dispatch()` started will be called with the latest\r\n     * state by the time it exits.\r\n     *\r\n     * @param {Function} listener A callback to be invoked on every dispatch.\r\n     * @returns {Function} A function to remove this change listener.\r\n     */\r\n    function subscribe(listener) {\r\n        if (typeof listener !== 'function') {\r\n            throw new Error( false ? undefined : \"Expected the listener to be a function. Instead, received: '\" + kindOf(listener) + \"'\");\r\n        }\r\n        if (isDispatching) {\r\n            throw new Error( false ? undefined : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');\r\n        }\r\n        var isSubscribed = true;\r\n        ensureCanMutateNextListeners();\r\n        nextListeners.push(listener);\r\n        return function unsubscribe() {\r\n            if (!isSubscribed) {\r\n                return;\r\n            }\r\n            if (isDispatching) {\r\n                throw new Error( false ? undefined : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');\r\n            }\r\n            isSubscribed = false;\r\n            ensureCanMutateNextListeners();\r\n            var index = nextListeners.indexOf(listener);\r\n            nextListeners.splice(index, 1);\r\n            currentListeners = null;\r\n        };\r\n    }\r\n    /**\r\n     * Dispatches an action. It is the only way to trigger a state change.\r\n     *\r\n     * The `reducer` function, used to create the store, will be called with the\r\n     * current state tree and the given `action`. Its return value will\r\n     * be considered the **next** state of the tree, and the change listeners\r\n     * will be notified.\r\n     *\r\n     * The base implementation only supports plain object actions. If you want to\r\n     * dispatch a Promise, an Observable, a thunk, or something else, you need to\r\n     * wrap your store creating function into the corresponding middleware. For\r\n     * example, see the documentation for the `redux-thunk` package. Even the\r\n     * middleware will eventually dispatch plain object actions using this method.\r\n     *\r\n     * @param {Object} action A plain object representing “what changed”. It is\r\n     * a good idea to keep actions serializable so you can record and replay user\r\n     * sessions, or use the time travelling `redux-devtools`. An action must have\r\n     * a `type` property which may not be `undefined`. It is a good idea to use\r\n     * string constants for action types.\r\n     *\r\n     * @returns {Object} For convenience, the same action object you dispatched.\r\n     *\r\n     * Note that, if you use a custom middleware, it may wrap `dispatch()` to\r\n     * return something else (for example, a Promise you can await).\r\n     */\r\n    function dispatch(action) {\r\n        if (!isPlainObject(action)) {\r\n            throw new Error( false ? undefined : \"Actions must be plain objects. Instead, the actual type was: '\" + kindOf(action) + \"'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.\");\r\n        }\r\n        if (typeof action.type === 'undefined') {\r\n            throw new Error( false ? undefined : 'Actions may not have an undefined \"type\" property. You may have misspelled an action type string constant.');\r\n        }\r\n        if (isDispatching) {\r\n            throw new Error( false ? undefined : 'Reducers may not dispatch actions.');\r\n        }\r\n        try {\r\n            isDispatching = true;\r\n            currentState = currentReducer(currentState, action);\r\n        }\r\n        finally {\r\n            isDispatching = false;\r\n        }\r\n        var listeners = currentListeners = nextListeners;\r\n        for (var i = 0; i < listeners.length; i++) {\r\n            var listener = listeners[i];\r\n            listener();\r\n        }\r\n        return action;\r\n    }\r\n    /**\r\n     * Replaces the reducer currently used by the store to calculate the state.\r\n     *\r\n     * You might need this if your app implements code splitting and you want to\r\n     * load some of the reducers dynamically. You might also need this if you\r\n     * implement a hot reloading mechanism for Redux.\r\n     *\r\n     * @param {Function} nextReducer The reducer for the store to use instead.\r\n     * @returns {void}\r\n     */\r\n    function replaceReducer(nextReducer) {\r\n        if (typeof nextReducer !== 'function') {\r\n            throw new Error( false ? undefined : \"Expected the nextReducer to be a function. Instead, received: '\" + kindOf(nextReducer));\r\n        }\r\n        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.\r\n        // Any reducers that existed in both the new and old rootReducer\r\n        // will receive the previous state. This effectively populates\r\n        // the new state tree with any relevant data from the old one.\r\n        dispatch({\r\n            type: ActionTypes.REPLACE\r\n        });\r\n    }\r\n    /**\r\n     * Interoperability point for observable/reactive libraries.\r\n     * @returns {observable} A minimal observable of state changes.\r\n     * For more information, see the observable proposal:\r\n     * https://github.com/tc39/proposal-observable\r\n     */\r\n    function observable() {\r\n        var _ref;\r\n        var outerSubscribe = subscribe;\r\n        return _ref = {\r\n            /**\r\n             * The minimal observable subscription method.\r\n             * @param {Object} observer Any object that can be used as an observer.\r\n             * The observer object should have a `next` method.\r\n             * @returns {subscription} An object with an `unsubscribe` method that can\r\n             * be used to unsubscribe the observable from the store, and prevent further\r\n             * emission of values from the observable.\r\n             */\r\n            subscribe: function subscribe(observer) {\r\n                if (typeof observer !== 'object' || observer === null) {\r\n                    throw new Error( false ? undefined : \"Expected the observer to be an object. Instead, received: '\" + kindOf(observer) + \"'\");\r\n                }\r\n                function observeState() {\r\n                    if (observer.next) {\r\n                        observer.next(getState());\r\n                    }\r\n                }\r\n                observeState();\r\n                var unsubscribe = outerSubscribe(observeState);\r\n                return {\r\n                    unsubscribe: unsubscribe\r\n                };\r\n            }\r\n        }, _ref[$$observable] = function () {\r\n            return this;\r\n        }, _ref;\r\n    } // When a store is created, an \"INIT\" action is dispatched so that every\r\n    // reducer returns their initial state. This effectively populates\r\n    // the initial state tree.\r\n    dispatch({\r\n        type: ActionTypes.INIT\r\n    });\r\n    return _ref2 = {\r\n        dispatch: dispatch,\r\n        subscribe: subscribe,\r\n        getState: getState,\r\n        replaceReducer: replaceReducer\r\n    }, _ref2[$$observable] = observable, _ref2;\r\n}\r\nexports.createStore = createStore;\r\n/**\r\n * Creates a Redux store that holds the state tree.\r\n *\r\n * **We recommend using `configureStore` from the\r\n * `@reduxjs/toolkit` package**, which replaces `createStore`:\r\n * **https://redux.js.org/introduction/why-rtk-is-redux-today**\r\n *\r\n * The only way to change the data in the store is to call `dispatch()` on it.\r\n *\r\n * There should only be a single store in your app. To specify how different\r\n * parts of the state tree respond to actions, you may combine several reducers\r\n * into a single reducer function by using `combineReducers`.\r\n *\r\n * @param {Function} reducer A function that returns the next state tree, given\r\n * the current state tree and the action to handle.\r\n *\r\n * @param {any} [preloadedState] The initial state. You may optionally specify it\r\n * to hydrate the state from the server in universal apps, or to restore a\r\n * previously serialized user session.\r\n * If you use `combineReducers` to produce the root reducer function, this must be\r\n * an object with the same shape as `combineReducers` keys.\r\n *\r\n * @param {Function} [enhancer] The store enhancer. You may optionally specify it\r\n * to enhance the store with third-party capabilities such as middleware,\r\n * time travel, persistence, etc. The only store enhancer that ships with Redux\r\n * is `applyMiddleware()`.\r\n *\r\n * @returns {Store} A Redux store that lets you read the state, dispatch actions\r\n * and subscribe to changes.\r\n */\r\nvar legacy_createStore = createStore;\r\nexports.legacy_createStore = legacy_createStore;\r\n/**\r\n * Prints a warning in the console if it exists.\r\n *\r\n * @param {String} message The warning message.\r\n * @returns {void}\r\n */\r\nfunction warning(message) {\r\n    /* eslint-disable no-console */\r\n    if (typeof console !== 'undefined' && typeof console.error === 'function') {\r\n        console.error(message);\r\n    }\r\n    /* eslint-enable no-console */\r\n    try {\r\n        // This error was thrown as a convenience so that if you enable\r\n        // \"break on all exceptions\" in your console,\r\n        // it would pause the execution at this line.\r\n        throw new Error(message);\r\n    }\r\n    catch (e) { } // eslint-disable-line no-empty\r\n}\r\nfunction getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {\r\n    var reducerKeys = Object.keys(reducers);\r\n    var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';\r\n    if (reducerKeys.length === 0) {\r\n        return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';\r\n    }\r\n    if (!isPlainObject(inputState)) {\r\n        return \"The \" + argumentName + \" has unexpected type of \\\"\" + kindOf(inputState) + \"\\\". Expected argument to be an object with the following \" + (\"keys: \\\"\" + reducerKeys.join('\", \"') + \"\\\"\");\r\n    }\r\n    var unexpectedKeys = Object.keys(inputState).filter(function (key) {\r\n        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];\r\n    });\r\n    unexpectedKeys.forEach(function (key) {\r\n        unexpectedKeyCache[key] = true;\r\n    });\r\n    if (action && action.type === ActionTypes.REPLACE)\r\n        return;\r\n    if (unexpectedKeys.length > 0) {\r\n        return \"Unexpected \" + (unexpectedKeys.length > 1 ? 'keys' : 'key') + \" \" + (\"\\\"\" + unexpectedKeys.join('\", \"') + \"\\\" found in \" + argumentName + \". \") + \"Expected to find one of the known reducer keys instead: \" + (\"\\\"\" + reducerKeys.join('\", \"') + \"\\\". Unexpected keys will be ignored.\");\r\n    }\r\n}\r\nfunction assertReducerShape(reducers) {\r\n    Object.keys(reducers).forEach(function (key) {\r\n        var reducer = reducers[key];\r\n        var initialState = reducer(undefined, {\r\n            type: ActionTypes.INIT\r\n        });\r\n        if (typeof initialState === 'undefined') {\r\n            throw new Error( false ? undefined : \"The slice reducer for key \\\"\" + key + \"\\\" returned undefined during initialization. \" + \"If the state passed to the reducer is undefined, you must \" + \"explicitly return the initial state. The initial state may \" + \"not be undefined. If you don't want to set a value for this reducer, \" + \"you can use null instead of undefined.\");\r\n        }\r\n        if (typeof reducer(undefined, {\r\n            type: ActionTypes.PROBE_UNKNOWN_ACTION()\r\n        }) === 'undefined') {\r\n            throw new Error( false ? undefined : \"The slice reducer for key \\\"\" + key + \"\\\" returned undefined when probed with a random type. \" + (\"Don't try to handle '\" + ActionTypes.INIT + \"' or other actions in \\\"redux/*\\\" \") + \"namespace. They are considered private. Instead, you must return the \" + \"current state for any unknown actions, unless it is undefined, \" + \"in which case you must return the initial state, regardless of the \" + \"action type. The initial state may not be undefined, but can be null.\");\r\n        }\r\n    });\r\n}\r\n/**\r\n * Turns an object whose values are different reducer functions, into a single\r\n * reducer function. It will call every child reducer, and gather their results\r\n * into a single state object, whose keys correspond to the keys of the passed\r\n * reducer functions.\r\n *\r\n * @param {Object} reducers An object whose values correspond to different\r\n * reducer functions that need to be combined into one. One handy way to obtain\r\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\r\n * undefined for any action. Instead, they should return their initial state\r\n * if the state passed to them was undefined, and the current state for any\r\n * unrecognized action.\r\n *\r\n * @returns {Function} A reducer function that invokes every reducer inside the\r\n * passed object, and builds a state object with the same shape.\r\n */\r\nfunction combineReducers(reducers) {\r\n    var reducerKeys = Object.keys(reducers);\r\n    var finalReducers = {};\r\n    for (var i = 0; i < reducerKeys.length; i++) {\r\n        var key = reducerKeys[i];\r\n        if (true) {\r\n            if (typeof reducers[key] === 'undefined') {\r\n                warning(\"No reducer provided for key \\\"\" + key + \"\\\"\");\r\n            }\r\n        }\r\n        if (typeof reducers[key] === 'function') {\r\n            finalReducers[key] = reducers[key];\r\n        }\r\n    }\r\n    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same\r\n    // keys multiple times.\r\n    var unexpectedKeyCache;\r\n    if (true) {\r\n        unexpectedKeyCache = {};\r\n    }\r\n    var shapeAssertionError;\r\n    try {\r\n        assertReducerShape(finalReducers);\r\n    }\r\n    catch (e) {\r\n        shapeAssertionError = e;\r\n    }\r\n    return function combination(state, action) {\r\n        if (state === void 0) {\r\n            state = {};\r\n        }\r\n        if (shapeAssertionError) {\r\n            throw shapeAssertionError;\r\n        }\r\n        if (true) {\r\n            var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);\r\n            if (warningMessage) {\r\n                warning(warningMessage);\r\n            }\r\n        }\r\n        var hasChanged = false;\r\n        var nextState = {};\r\n        for (var _i = 0; _i < finalReducerKeys.length; _i++) {\r\n            var _key = finalReducerKeys[_i];\r\n            var reducer = finalReducers[_key];\r\n            var previousStateForKey = state[_key];\r\n            var nextStateForKey = reducer(previousStateForKey, action);\r\n            if (typeof nextStateForKey === 'undefined') {\r\n                var actionType = action && action.type;\r\n                throw new Error( false ? undefined : \"When called with an action of type \" + (actionType ? \"\\\"\" + String(actionType) + \"\\\"\" : '(unknown type)') + \", the slice reducer for key \\\"\" + _key + \"\\\" returned undefined. \" + \"To ignore an action, you must explicitly return the previous state. \" + \"If you want this reducer to hold no value, you can return null instead of undefined.\");\r\n            }\r\n            nextState[_key] = nextStateForKey;\r\n            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\r\n        }\r\n        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;\r\n        return hasChanged ? nextState : state;\r\n    };\r\n}\r\nexports.combineReducers = combineReducers;\r\nfunction bindActionCreator(actionCreator, dispatch) {\r\n    return function () {\r\n        return dispatch(actionCreator.apply(this, arguments));\r\n    };\r\n}\r\n/**\r\n * Turns an object whose values are action creators, into an object with the\r\n * same keys, but with every function wrapped into a `dispatch` call so they\r\n * may be invoked directly. This is just a convenience method, as you can call\r\n * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.\r\n *\r\n * For convenience, you can also pass an action creator as the first argument,\r\n * and get a dispatch wrapped function in return.\r\n *\r\n * @param {Function|Object} actionCreators An object whose values are action\r\n * creator functions. One handy way to obtain it is to use ES6 `import * as`\r\n * syntax. You may also pass a single function.\r\n *\r\n * @param {Function} dispatch The `dispatch` function available on your Redux\r\n * store.\r\n *\r\n * @returns {Function|Object} The object mimicking the original object, but with\r\n * every action creator wrapped into the `dispatch` call. If you passed a\r\n * function as `actionCreators`, the return value will also be a single\r\n * function.\r\n */\r\nfunction bindActionCreators(actionCreators, dispatch) {\r\n    if (typeof actionCreators === 'function') {\r\n        return bindActionCreator(actionCreators, dispatch);\r\n    }\r\n    if (typeof actionCreators !== 'object' || actionCreators === null) {\r\n        throw new Error( false ? undefined : \"bindActionCreators expected an object or a function, but instead received: '\" + kindOf(actionCreators) + \"'. \" + \"Did you write \\\"import ActionCreators from\\\" instead of \\\"import * as ActionCreators from\\\"?\");\r\n    }\r\n    var boundActionCreators = {};\r\n    for (var key in actionCreators) {\r\n        var actionCreator = actionCreators[key];\r\n        if (typeof actionCreator === 'function') {\r\n            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);\r\n        }\r\n    }\r\n    return boundActionCreators;\r\n}\r\nexports.bindActionCreators = bindActionCreators;\r\n/**\r\n * Composes single-argument functions from right to left. The rightmost\r\n * function can take multiple arguments as it provides the signature for\r\n * the resulting composite function.\r\n *\r\n * @param {...Function} funcs The functions to compose.\r\n * @returns {Function} A function obtained by composing the argument functions\r\n * from right to left. For example, compose(f, g, h) is identical to doing\r\n * (...args) => f(g(h(...args))).\r\n */\r\nfunction compose() {\r\n    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {\r\n        funcs[_key] = arguments[_key];\r\n    }\r\n    if (funcs.length === 0) {\r\n        return function (arg) {\r\n            return arg;\r\n        };\r\n    }\r\n    if (funcs.length === 1) {\r\n        return funcs[0];\r\n    }\r\n    return funcs.reduce(function (a, b) {\r\n        return function () {\r\n            return a(b.apply(void 0, arguments));\r\n        };\r\n    });\r\n}\r\nexports.compose = compose;\r\n/**\r\n * Creates a store enhancer that applies middleware to the dispatch method\r\n * of the Redux store. This is handy for a variety of tasks, such as expressing\r\n * asynchronous actions in a concise manner, or logging every action payload.\r\n *\r\n * See `redux-thunk` package as an example of the Redux middleware.\r\n *\r\n * Because middleware is potentially asynchronous, this should be the first\r\n * store enhancer in the composition chain.\r\n *\r\n * Note that each middleware will be given the `dispatch` and `getState` functions\r\n * as named arguments.\r\n *\r\n * @param {...Function} middlewares The middleware chain to be applied.\r\n * @returns {Function} A store enhancer applying the middleware.\r\n */\r\nfunction applyMiddleware() {\r\n    for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {\r\n        middlewares[_key] = arguments[_key];\r\n    }\r\n    return function (createStore) {\r\n        return function () {\r\n            var store = createStore.apply(void 0, arguments);\r\n            var _dispatch = function dispatch() {\r\n                throw new Error( false ? undefined : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');\r\n            };\r\n            var middlewareAPI = {\r\n                getState: store.getState,\r\n                dispatch: function dispatch() {\r\n                    return _dispatch.apply(void 0, arguments);\r\n                }\r\n            };\r\n            var chain = middlewares.map(function (middleware) {\r\n                return middleware(middlewareAPI);\r\n            });\r\n            _dispatch = compose.apply(void 0, chain)(store.dispatch);\r\n            return objectSpread2_1.default(objectSpread2_1.default({}, store), {}, {\r\n                dispatch: _dispatch\r\n            });\r\n        };\r\n    };\r\n}\r\nexports.applyMiddleware = applyMiddleware;\r\n/*\r\n * This is a dummy function to check if the function name has been altered by minification.\r\n * If the function has been minified and NODE_ENV !== 'production', warn the user.\r\n */\r\nfunction isCrushed() { }\r\nif ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {\r\n    warning('You are currently using minified code outside of NODE_ENV === \"production\". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/redux/es/redux.js?");

/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\r\n * @license React\r\n * use-sync-external-store-shim.development.js\r\n *\r\n * Copyright (c) Facebook, Inc. and its affiliates.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE file in the root directory of this source tree.\r\n */\r\n\r\nif (true) {\r\n    (function () {\r\n        'use strict';\r\n        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\r\n        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&\r\n            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===\r\n                'function') {\r\n            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());\r\n        }\r\n        var React = __webpack_require__(/*! react */ \"react\");\r\n        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;\r\n        function error(format) {\r\n            {\r\n                {\r\n                    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\r\n                        args[_key2 - 1] = arguments[_key2];\r\n                    }\r\n                    printWarning('error', format, args);\r\n                }\r\n            }\r\n        }\r\n        function printWarning(level, format, args) {\r\n            // When changing this logic, you might want to also\r\n            // update consoleWithStackDev.www.js as well.\r\n            {\r\n                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;\r\n                var stack = ReactDebugCurrentFrame.getStackAddendum();\r\n                if (stack !== '') {\r\n                    format += '%s';\r\n                    args = args.concat([stack]);\r\n                } // eslint-disable-next-line react-internal/safe-string-coercion\r\n                var argsWithFormat = args.map(function (item) {\r\n                    return String(item);\r\n                }); // Careful: RN currently depends on this prefix\r\n                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it\r\n                // breaks IE9: https://github.com/facebook/react/issues/13610\r\n                // eslint-disable-next-line react-internal/no-production-logging\r\n                Function.prototype.apply.call(console[level], console, argsWithFormat);\r\n            }\r\n        }\r\n        /**\r\n         * inlined Object.is polyfill to avoid requiring consumers ship their own\r\n         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\r\n         */\r\n        function is(x, y) {\r\n            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare\r\n            ;\r\n        }\r\n        var objectIs = typeof Object.is === 'function' ? Object.is : is;\r\n        // dispatch for CommonJS interop named imports.\r\n        var useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;\r\n        var didWarnOld18Alpha = false;\r\n        var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works\r\n        // because of a very particular set of implementation details and assumptions\r\n        // -- change any one of them and it will break. The most important assumption\r\n        // is that updates are always synchronous, because concurrent rendering is\r\n        // only available in versions of React that also have a built-in\r\n        // useSyncExternalStore API. And we only use this shim when the built-in API\r\n        // does not exist.\r\n        //\r\n        // Do not assume that the clever hacks used by this hook also work in general.\r\n        // The point of this shim is to replace the need for hacks by other libraries.\r\n        function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of\r\n        // React do not expose a way to check if we're hydrating. So users of the shim\r\n        // will need to track that themselves and return the correct value\r\n        // from `getSnapshot`.\r\n        getServerSnapshot) {\r\n            {\r\n                if (!didWarnOld18Alpha) {\r\n                    if (React.startTransition !== undefined) {\r\n                        didWarnOld18Alpha = true;\r\n                        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');\r\n                    }\r\n                }\r\n            } // Read the current snapshot from the store on every render. Again, this\r\n            // breaks the rules of React, and only works here because of specific\r\n            // implementation details, most importantly that updates are\r\n            // always synchronous.\r\n            var value = getSnapshot();\r\n            {\r\n                if (!didWarnUncachedGetSnapshot) {\r\n                    var cachedValue = getSnapshot();\r\n                    if (!objectIs(value, cachedValue)) {\r\n                        error('The result of getSnapshot should be cached to avoid an infinite loop');\r\n                        didWarnUncachedGetSnapshot = true;\r\n                    }\r\n                }\r\n            } // Because updates are synchronous, we don't queue them. Instead we force a\r\n            // re-render whenever the subscribed state changes by updating an some\r\n            // arbitrary useState hook. Then, during render, we call getSnapshot to read\r\n            // the current value.\r\n            //\r\n            // Because we don't actually use the state returned by the useState hook, we\r\n            // can save a bit of memory by storing other stuff in that slot.\r\n            //\r\n            // To implement the early bailout, we need to track some things on a mutable\r\n            // object. Usually, we would put that in a useRef hook, but we can stash it in\r\n            // our useState hook instead.\r\n            //\r\n            // To force a re-render, we call forceUpdate({inst}). That works because the\r\n            // new object always fails an equality check.\r\n            var _useState = useState({\r\n                inst: {\r\n                    value: value,\r\n                    getSnapshot: getSnapshot\r\n                }\r\n            }), inst = _useState[0].inst, forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated\r\n            // in the layout phase so we can access it during the tearing check that\r\n            // happens on subscribe.\r\n            useLayoutEffect(function () {\r\n                inst.value = value;\r\n                inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the\r\n                // commit phase if there was an interleaved mutation. In concurrent mode\r\n                // this can happen all the time, but even in synchronous mode, an earlier\r\n                // effect may have mutated the store.\r\n                if (checkIfSnapshotChanged(inst)) {\r\n                    // Force a re-render.\r\n                    forceUpdate({\r\n                        inst: inst\r\n                    });\r\n                }\r\n            }, [subscribe, value, getSnapshot]);\r\n            useEffect(function () {\r\n                // Check for changes right before subscribing. Subsequent changes will be\r\n                // detected in the subscription handler.\r\n                if (checkIfSnapshotChanged(inst)) {\r\n                    // Force a re-render.\r\n                    forceUpdate({\r\n                        inst: inst\r\n                    });\r\n                }\r\n                var handleStoreChange = function () {\r\n                    // TODO: Because there is no cross-renderer API for batching updates, it's\r\n                    // up to the consumer of this library to wrap their subscription event\r\n                    // with unstable_batchedUpdates. Should we try to detect when this isn't\r\n                    // the case and print a warning in development?\r\n                    // The store changed. Check if the snapshot changed since the last time we\r\n                    // read from the store.\r\n                    if (checkIfSnapshotChanged(inst)) {\r\n                        // Force a re-render.\r\n                        forceUpdate({\r\n                            inst: inst\r\n                        });\r\n                    }\r\n                }; // Subscribe to the store and return a clean-up function.\r\n                return subscribe(handleStoreChange);\r\n            }, [subscribe]);\r\n            useDebugValue(value);\r\n            return value;\r\n        }\r\n        function checkIfSnapshotChanged(inst) {\r\n            var latestGetSnapshot = inst.getSnapshot;\r\n            var prevValue = inst.value;\r\n            try {\r\n                var nextValue = latestGetSnapshot();\r\n                return !objectIs(prevValue, nextValue);\r\n            }\r\n            catch (error) {\r\n                return true;\r\n            }\r\n        }\r\n        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {\r\n            // Note: The shim does not use getServerSnapshot, because pre-18 versions of\r\n            // React do not expose a way to check if we're hydrating. So users of the shim\r\n            // will need to track that themselves and return the correct value\r\n            // from `getSnapshot`.\r\n            return getSnapshot();\r\n        }\r\n        var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');\r\n        var isServerEnvironment = !canUseDOM;\r\n        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;\r\n        var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;\r\n        exports.useSyncExternalStore = useSyncExternalStore$2;\r\n        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\r\n        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&\r\n            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===\r\n                'function') {\r\n            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());\r\n        }\r\n    })();\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js?");

/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\r\n * @license React\r\n * use-sync-external-store-shim/with-selector.development.js\r\n *\r\n * Copyright (c) Facebook, Inc. and its affiliates.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE file in the root directory of this source tree.\r\n */\r\n\r\nif (true) {\r\n    (function () {\r\n        'use strict';\r\n        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\r\n        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&\r\n            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===\r\n                'function') {\r\n            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());\r\n        }\r\n        var React = __webpack_require__(/*! react */ \"react\");\r\n        var shim = __webpack_require__(/*! use-sync-external-store/shim */ \"./node_modules/use-sync-external-store/shim/index.js\");\r\n        /**\r\n         * inlined Object.is polyfill to avoid requiring consumers ship their own\r\n         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\r\n         */\r\n        function is(x, y) {\r\n            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare\r\n            ;\r\n        }\r\n        var objectIs = typeof Object.is === 'function' ? Object.is : is;\r\n        var useSyncExternalStore = shim.useSyncExternalStore;\r\n        // for CommonJS interop.\r\n        var useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.\r\n        function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {\r\n            // Use this to track the rendered snapshot.\r\n            var instRef = useRef(null);\r\n            var inst;\r\n            if (instRef.current === null) {\r\n                inst = {\r\n                    hasValue: false,\r\n                    value: null\r\n                };\r\n                instRef.current = inst;\r\n            }\r\n            else {\r\n                inst = instRef.current;\r\n            }\r\n            var _useMemo = useMemo(function () {\r\n                // Track the memoized state using closure variables that are local to this\r\n                // memoized instance of a getSnapshot function. Intentionally not using a\r\n                // useRef hook, because that state would be shared across all concurrent\r\n                // copies of the hook/component.\r\n                var hasMemo = false;\r\n                var memoizedSnapshot;\r\n                var memoizedSelection;\r\n                var memoizedSelector = function (nextSnapshot) {\r\n                    if (!hasMemo) {\r\n                        // The first time the hook is called, there is no memoized result.\r\n                        hasMemo = true;\r\n                        memoizedSnapshot = nextSnapshot;\r\n                        var _nextSelection = selector(nextSnapshot);\r\n                        if (isEqual !== undefined) {\r\n                            // Even if the selector has changed, the currently rendered selection\r\n                            // may be equal to the new selection. We should attempt to reuse the\r\n                            // current value if possible, to preserve downstream memoizations.\r\n                            if (inst.hasValue) {\r\n                                var currentSelection = inst.value;\r\n                                if (isEqual(currentSelection, _nextSelection)) {\r\n                                    memoizedSelection = currentSelection;\r\n                                    return currentSelection;\r\n                                }\r\n                            }\r\n                        }\r\n                        memoizedSelection = _nextSelection;\r\n                        return _nextSelection;\r\n                    } // We may be able to reuse the previous invocation's result.\r\n                    // We may be able to reuse the previous invocation's result.\r\n                    var prevSnapshot = memoizedSnapshot;\r\n                    var prevSelection = memoizedSelection;\r\n                    if (objectIs(prevSnapshot, nextSnapshot)) {\r\n                        // The snapshot is the same as last time. Reuse the previous selection.\r\n                        return prevSelection;\r\n                    } // The snapshot has changed, so we need to compute a new selection.\r\n                    // The snapshot has changed, so we need to compute a new selection.\r\n                    var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data\r\n                    // has changed. If it hasn't, return the previous selection. That signals\r\n                    // to React that the selections are conceptually equal, and we can bail\r\n                    // out of rendering.\r\n                    // If a custom isEqual function is provided, use that to check if the data\r\n                    // has changed. If it hasn't, return the previous selection. That signals\r\n                    // to React that the selections are conceptually equal, and we can bail\r\n                    // out of rendering.\r\n                    if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {\r\n                        return prevSelection;\r\n                    }\r\n                    memoizedSnapshot = nextSnapshot;\r\n                    memoizedSelection = nextSelection;\r\n                    return nextSelection;\r\n                }; // Assigning this to a constant so that Flow knows it can't change.\r\n                // Assigning this to a constant so that Flow knows it can't change.\r\n                var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;\r\n                var getSnapshotWithSelector = function () {\r\n                    return memoizedSelector(getSnapshot());\r\n                };\r\n                var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {\r\n                    return memoizedSelector(maybeGetServerSnapshot());\r\n                };\r\n                return [getSnapshotWithSelector, getServerSnapshotWithSelector];\r\n            }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];\r\n            var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);\r\n            useEffect(function () {\r\n                inst.hasValue = true;\r\n                inst.value = value;\r\n            }, [value]);\r\n            useDebugValue(value);\r\n            return value;\r\n        }\r\n        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;\r\n        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\r\n        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&\r\n            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===\r\n                'function') {\r\n            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());\r\n        }\r\n    })();\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js?");

/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nif (false) {}\r\nelse {\r\n    module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.development.js */ \"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/use-sync-external-store/shim/index.js?");

/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/with-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/with-selector.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nif (false) {}\r\nelse {\r\n    module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim/with-selector.development.js */ \"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/use-sync-external-store/shim/with-selector.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar tokenContext_1 = __webpack_require__(/*! ./shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar PostsList_1 = __webpack_require__(/*! ./shared/Content/PostsList */ \"./src/shared/Content/PostsList/index.ts\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store.ts\");\r\nvar store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools());\r\nfunction AppComponent() {\r\n    var token = useToken_1.useToken()[0];\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token },\r\n            react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n                react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                    react_1.default.createElement(Layout_1.Layout, null,\r\n                        react_1.default.createElement(Header_1.Header, null),\r\n                        react_1.default.createElement(Content_1.Content, null,\r\n                            react_1.default.createElement(CardsList_1.CardsList, null),\r\n                            react_1.default.createElement(PostsList_1.PostsList, null))))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nfunction usePostsData() {\r\n    var _a = react_1.useState([]), postsData = _a[0], setPostsData = _a[1];\r\n    react_1.useEffect(function () {\r\n        axios_1.default.get('https://api.reddit.com/best?sr_detail=true', {})\r\n            .then(function (resp) {\r\n            var postsData = resp.data.data.children;\r\n            var newArrObj = postsData.map(function (item) {\r\n                var container = {};\r\n                container.id = item.data.id;\r\n                container.author = item.data.author;\r\n                container.title = item.data.title;\r\n                container.banner = item.data.sr_detail.banner_img;\r\n                container.icon_img = item.data.sr_detail.icon_img;\r\n                container.created = item.data.created_utc;\r\n                return container;\r\n            });\r\n            setPostsData(newArrObj);\r\n        })\r\n            .catch(console.log);\r\n    }, []);\r\n    return postsData;\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction useToken() {\r\n    var _a = react_1.useState(''), token = _a[0], setToken = _a[1];\r\n    react_1.useEffect(function () {\r\n        if (window.__token__) {\r\n            setToken(window.__token__);\r\n        }\r\n    }, []);\r\n    return [token];\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nfunction useUserData() {\r\n    var _a = react_1.useState({}), data = _a[0], setData = _a[1];\r\n    var token = react_1.useContext(tokenContext_1.tokenContext);\r\n    react_1.useEffect(function () {\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: \"bearer \" + token },\r\n            params: { raw_json: 1 },\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            setData({ name: userData.name, iconImg: userData.icon_img });\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\r\\n  --black:          #333333;\\r\\n  --orange:         #CC6633;\\r\\n  --green:          #A4CC33;\\r\\n  --whiteLightness: 100%;\\r\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\r\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\r\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\r\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\r\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\r\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\r\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\r\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: var(--grayF4);\\r\\n  font-size: 14px;\\r\\n  line-height: 16px;\\r\\n  font-family: 'Roboto', serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n  color: var(--black);\\r\\n  box-sizing: border-box;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  background: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <script >\\n        window.__token__ = '\" + token + \"'\\n    </script>\\n    <title>Reddit</title>\\n</head>\\n<body>\\n    <div id=\\\"react_root\\\">\" + content + \"</div>\\n    <div id=\\\"modal_root\\\"></div>\\n</body>\\n</html>\\n\"; };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.get('/auth', function (req, res) {\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + req.query.code + \"&redirect_uri=http://localhost:3000/auth\", {\r\n        auth: { username: '2alpekdjsqhwgCDAvSa4uQ', password: 'xDWtvCgLgDlZ1EuSuJ27lmHqf5WkEQ' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started in http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nfunction CardsList() {\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardList }));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nfunction CommentForm() {\r\n    var value = react_redux_1.useSelector(function (state) { return state.commentText; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleChange(event) {\r\n        dispatch(store_1.updateComment(event.target.value));\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        console.log(value);\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: handleSubmit },\r\n        react_1.default.createElement(\"textarea\", { className: commentform_css_1.default.input, value: value, onChange: handleChange }),\r\n        react_1.default.createElement(\"button\", { type: 'submit', className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentform.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentform__form--Cs1Oi\",\n\t\"input\": \"commentform__input--2fC-z\",\n\t\"button\": \"commentform__button--35eLT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/Actions/Actions.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/Actions/Actions.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Actions = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar actions_css_1 = __importDefault(__webpack_require__(/*! ./actions.css */ \"./src/shared/Content/PostsList/Controls/Actions/actions.css\"));\r\nvar ShareButton_1 = __webpack_require__(/*! ./ShareButton */ \"./src/shared/Content/PostsList/Controls/Actions/ShareButton/index.ts\");\r\nvar SaveButton_1 = __webpack_require__(/*! ./SaveButton */ \"./src/shared/Content/PostsList/Controls/Actions/SaveButton/index.ts\");\r\nfunction Actions() {\r\n    return (react_1.default.createElement(\"div\", { className: actions_css_1.default.actions },\r\n        react_1.default.createElement(ShareButton_1.ShareButton, null),\r\n        react_1.default.createElement(SaveButton_1.SaveButton, null)));\r\n}\r\nexports.Actions = Actions;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/Actions/Actions.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/Actions/SaveButton/SaveButton.tsx":
/*!*********************************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/Actions/SaveButton/SaveButton.tsx ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar savebutton_css_1 = __importDefault(__webpack_require__(/*! ./savebutton.css */ \"./src/shared/Content/PostsList/Controls/Actions/SaveButton/savebutton.css\"));\r\nfunction SaveButton() {\r\n    return (react_1.default.createElement(\"button\", { className: savebutton_css_1.default.saveButton },\r\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n            react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))));\r\n}\r\nexports.SaveButton = SaveButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/Actions/SaveButton/SaveButton.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/Actions/SaveButton/index.ts":
/*!***************************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/Actions/SaveButton/index.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SaveButton */ \"./src/shared/Content/PostsList/Controls/Actions/SaveButton/SaveButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/Actions/SaveButton/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/Actions/SaveButton/savebutton.css":
/*!*********************************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/Actions/SaveButton/savebutton.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"saveButton\": \"savebutton__saveButton--2ywK8\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/Actions/SaveButton/savebutton.css?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/Actions/ShareButton/ShareButton.tsx":
/*!***********************************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/Actions/ShareButton/ShareButton.tsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sharebutton_css_1 = __importDefault(__webpack_require__(/*! ./sharebutton.css */ \"./src/shared/Content/PostsList/Controls/Actions/ShareButton/sharebutton.css\"));\r\nfunction ShareButton() {\r\n    return (react_1.default.createElement(\"button\", { className: sharebutton_css_1.default.shareButton },\r\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n            react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))));\r\n}\r\nexports.ShareButton = ShareButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/Actions/ShareButton/ShareButton.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/Actions/ShareButton/index.ts":
/*!****************************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/Actions/ShareButton/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ShareButton */ \"./src/shared/Content/PostsList/Controls/Actions/ShareButton/ShareButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/Actions/ShareButton/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/Actions/ShareButton/sharebutton.css":
/*!***********************************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/Actions/ShareButton/sharebutton.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"shareButton\": \"sharebutton__shareButton--3XatJ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/Actions/ShareButton/sharebutton.css?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/Actions/actions.css":
/*!*******************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/Actions/actions.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"actions\": \"actions__actions--1ZfuA\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/Actions/actions.css?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/Actions/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/Actions/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Actions */ \"./src/shared/Content/PostsList/Controls/Actions/Actions.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/Actions/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/CommentsButton/CommentsButton.tsx":
/*!*********************************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/CommentsButton/CommentsButton.tsx ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/Content/PostsList/Controls/CommentsButton/commentsbutton.css\"));\r\nfunction CommentsButton() {\r\n    return (react_1.default.createElement(\"button\", { className: commentsbutton_css_1.default.commentsButton },\r\n        react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n        react_1.default.createElement(\"span\", { className: commentsbutton_css_1.default.commentsNumber }, \"13\")));\r\n}\r\nexports.CommentsButton = CommentsButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/CommentsButton/commentsbutton.css":
/*!*********************************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/CommentsButton/commentsbutton.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsbutton__commentsButton--2fxmY\",\n\t\"commentsNumber\": \"commentsbutton__commentsNumber--2Yr3T\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/CommentsButton/commentsbutton.css?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/CommentsButton/index.ts":
/*!***********************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/CommentsButton/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/Content/PostsList/Controls/CommentsButton/CommentsButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/Controls.tsx":
/*!************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/Controls.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/Content/PostsList/Controls/controls.css\"));\r\nvar KarmaCounter_1 = __webpack_require__(/*! ./KarmaCounter/KarmaCounter */ \"./src/shared/Content/PostsList/Controls/KarmaCounter/KarmaCounter.tsx\");\r\nvar CommentsButton_1 = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/Content/PostsList/Controls/CommentsButton/index.ts\");\r\nvar Actions_1 = __webpack_require__(/*! ./Actions */ \"./src/shared/Content/PostsList/Controls/Actions/index.ts\");\r\nfunction Controls() {\r\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        react_1.default.createElement(KarmaCounter_1.KarmaCounter, null),\r\n        react_1.default.createElement(CommentsButton_1.CommentsButton, null),\r\n        react_1.default.createElement(Actions_1.Actions, null)));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/KarmaCounter/KarmaCounter.tsx":
/*!*****************************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/KarmaCounter/KarmaCounter.tsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.KarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar karmacounter_css_1 = __importDefault(__webpack_require__(/*! ./karmacounter.css */ \"./src/shared/Content/PostsList/Controls/KarmaCounter/karmacounter.css\"));\r\nfunction KarmaCounter() {\r\n    return (react_1.default.createElement(\"div\", { className: karmacounter_css_1.default.karmaCounter },\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.up },\r\n            react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\r\n        react_1.default.createElement(\"span\", { className: karmacounter_css_1.default.karmaValue }, \"234\"),\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.down },\r\n            react_1.default.createElement(\"svg\", { className: karmacounter_css_1.default.down, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" })))));\r\n}\r\nexports.KarmaCounter = KarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/KarmaCounter/karmacounter.css":
/*!*****************************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/KarmaCounter/karmacounter.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karmacounter__karmaCounter--34Pmn\",\n\t\"karmaValue\": \"karmacounter__karmaValue--16VP2\",\n\t\"down\": \"karmacounter__down--2Fl-f\",\n\t\"up\": \"karmacounter__up--1GTdr\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/KarmaCounter/karmacounter.css?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/controls.css":
/*!************************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/controls.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--5QhAn\",\n\t\"actions\": \"controls__actions--3Wa_S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Controls/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/Content/PostsList/Controls/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/Content/PostsList/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Menu/Menu.tsx":
/*!****************************************************!*\
  !*** ./src/shared/Content/PostsList/Menu/Menu.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar MenuIcon_1 = __webpack_require__(/*! ../../../Icons/MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\");\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/Content/PostsList/Menu/menu.css\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nfunction Menu() {\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\r\n                react_1.default.createElement(MenuIcon_1.MenuIcon, null)) })));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Menu/MenuItemsList/MenuItemsList.tsx":
/*!***************************************************************************!*\
  !*** ./src/shared/Content/PostsList/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItemsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menuitemslist_css_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.css */ \"./src/shared/Content/PostsList/Menu/MenuItemsList/menuitemslist.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\r\nfunction MenuItemsList(_a) {\r\n    var postId = _a.postId;\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_css_1.default.menuItemsList },\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.comments, size: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, onClick: function () { return console.log(postId); } },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.block }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.save }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.warning }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))));\r\n}\r\nexports.MenuItemsList = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Menu/MenuItemsList/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/Content/PostsList/Menu/MenuItemsList/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/Content/PostsList/Menu/MenuItemsList/MenuItemsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Menu/MenuItemsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Menu/MenuItemsList/menuitemslist.css":
/*!***************************************************************************!*\
  !*** ./src/shared/Content/PostsList/Menu/MenuItemsList/menuitemslist.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsList\": \"menuitemslist__menuItemsList--15bZg\",\n\t\"menuItem\": \"menuitemslist__menuItem--1kMK2\",\n\t\"divider\": \"menuitemslist__divider--2gftz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Menu/MenuItemsList/menuitemslist.css?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Menu/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/Content/PostsList/Menu/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/Content/PostsList/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Menu/menu.css":
/*!****************************************************!*\
  !*** ./src/shared/Content/PostsList/Menu/menu.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--1Zo-6\",\n\t\"menuButton\": \"menu__menuButton--1Z1zw\",\n\t\"dropdown\": \"menu__dropdown--qe-Qo\",\n\t\"closeButton\": \"menu__closeButton--18ZZT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/Content/PostsList/PostsList.tsx":
/*!****************************************************!*\
  !*** ./src/shared/Content/PostsList/PostsList.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar postslist_css_1 = __importDefault(__webpack_require__(/*! ./postslist.css */ \"./src/shared/Content/PostsList/postslist.css\"));\r\nvar postsContext_1 = __webpack_require__(/*! ../../context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/Content/PostsList/TextContent/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/Content/PostsList/Preview/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/Content/PostsList/Menu/index.ts\");\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/Content/PostsList/Controls/index.ts\");\r\nfunction PostsList() {\r\n    return (react_1.default.createElement(\"ul\", { className: postslist_css_1.default.postsList }, getPosts()));\r\n}\r\nexports.PostsList = PostsList;\r\nfunction getPosts() {\r\n    var posts = react_1.useContext(postsContext_1.postsContext);\r\n    var li = posts.map(function (item) {\r\n        return (react_1.default.createElement(\"li\", { className: postslist_css_1.default.post, key: item.id, id: item.id },\r\n            react_1.default.createElement(TextContent_1.TextContent, { title: item.title, author: item.author, icon: item.icon_img, date: item.created }),\r\n            react_1.default.createElement(Preview_1.Preview, { srcImg: item.banner }),\r\n            react_1.default.createElement(Menu_1.Menu, null),\r\n            react_1.default.createElement(Controls_1.Controls, null)));\r\n    });\r\n    return li;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/PostsList.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Preview/Preview.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/Content/PostsList/Preview/Preview.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/Content/PostsList/Preview/preview.css\"));\r\nfunction Preview(_a) {\r\n    var srcImg = _a.srcImg;\r\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview }, srcImg\r\n        ? react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: srcImg, alt: \"preview\" })\r\n        : react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: \"https://cdn.dribbble.com/users/1803663/screenshots/16534587/media/c335a915773ce3ba65d18d137101f017.png\", alt: \"preview\" })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Preview/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Content/PostsList/Preview/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/Content/PostsList/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PostsList/Preview/preview.css":
/*!**********************************************************!*\
  !*** ./src/shared/Content/PostsList/Preview/preview.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--2eSDi\",\n\t\"previewImg\": \"preview__previewImg--3fB8Z\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/Content/PostsList/TextContent/DateFromNow/DateFromNow.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/Content/PostsList/TextContent/DateFromNow/DateFromNow.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DateFromNow = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar moment_1 = __importDefault(__webpack_require__(/*! moment */ \"moment\"));\r\nfunction DateFromNow(_a) {\r\n    var date = _a.date;\r\n    var dateCreated = null;\r\n    {\r\n        date\r\n            ? dateCreated = moment_1.default(new Date(date * 1000)).fromNow()\r\n            : dateCreated = new Date();\r\n    }\r\n    return (react_1.default.createElement(\"span\", null, \"\" + dateCreated));\r\n}\r\nexports.DateFromNow = DateFromNow;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/TextContent/DateFromNow/DateFromNow.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/TextContent/DateFromNow/index.ts":
/*!***********************************************************************!*\
  !*** ./src/shared/Content/PostsList/TextContent/DateFromNow/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./DateFromNow */ \"./src/shared/Content/PostsList/TextContent/DateFromNow/DateFromNow.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/TextContent/DateFromNow/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PostsList/TextContent/TextContent.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/Content/PostsList/TextContent/TextContent.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/Content/PostsList/TextContent/textcontent.css\"));\r\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/Content/PostsList/TextContent/Title/index.ts\");\r\nvar UserLink_1 = __webpack_require__(/*! ./UserLink */ \"./src/shared/Content/PostsList/TextContent/UserLink/index.ts\");\r\nvar DateFromNow_1 = __webpack_require__(/*! ./DateFromNow */ \"./src/shared/Content/PostsList/TextContent/DateFromNow/index.ts\");\r\nfunction TextContent(_a) {\r\n    var title = _a.title, author = _a.author, icon = _a.icon, date = _a.date;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\r\n            react_1.default.createElement(UserLink_1.UserLink, { author: author, icon: icon }),\r\n            react_1.default.createElement(\"span\", { className: textcontent_css_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: textcontent_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\"),\r\n                react_1.default.createElement(DateFromNow_1.DateFromNow, { date: date }))),\r\n        react_1.default.createElement(Title_1.Title, { title: title })));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/TextContent/Title/Title.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/Content/PostsList/TextContent/Title/Title.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Title = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/Content/PostsList/TextContent/Title/title.css\"));\r\nvar Post_1 = __webpack_require__(/*! ../../../../Post */ \"./src/shared/Post/index.ts\");\r\nfunction Title(_a) {\r\n    var title = _a.title;\r\n    var _b = react_1.useState(false), isModalOpened = _b[0], setIsModalOpened = _b[1];\r\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\r\n        react_1.default.createElement(\"a\", { href: \"#post-url\", className: title_css_1.default.postLink, onClick: function () { setIsModalOpened(true); } }, title),\r\n        isModalOpened && (react_1.default.createElement(Post_1.Post, { onClose: function () { setIsModalOpened(false); } }))));\r\n}\r\nexports.Title = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/TextContent/Title/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/Content/PostsList/TextContent/Title/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/Content/PostsList/TextContent/Title/Title.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/TextContent/Title/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PostsList/TextContent/Title/title.css":
/*!******************************************************************!*\
  !*** ./src/shared/Content/PostsList/TextContent/Title/title.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--2xPLg\",\n\t\"postLink\": \"title__postLink--_Osg7\",\n\t\"textContent\": \"title__textContent--jAzXP\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/TextContent/Title/title.css?");

/***/ }),

/***/ "./src/shared/Content/PostsList/TextContent/UserLink/UserLink.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/Content/PostsList/TextContent/UserLink/UserLink.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserLink = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userlink_css_1 = __importDefault(__webpack_require__(/*! ./userlink.css */ \"./src/shared/Content/PostsList/TextContent/UserLink/userlink.css\"));\r\nfunction UserLink(_a) {\r\n    var author = _a.author, icon = _a.icon;\r\n    return (react_1.default.createElement(\"div\", { className: userlink_css_1.default.userLink },\r\n        icon\r\n            ? react_1.default.createElement(\"img\", { className: userlink_css_1.default.avatar, src: icon, alt: \"avatar\" })\r\n            : react_1.default.createElement(\"img\", { className: userlink_css_1.default.avatar, src: \"https://cdn.dribbble.com/users/594316/screenshots/16557702/media/d77aa195b67473edb6c386b355126078.jpg\", alt: \"avatar\" }),\r\n        react_1.default.createElement(\"a\", { href: \"#user-url\", className: userlink_css_1.default.username }, author)));\r\n}\r\nexports.UserLink = UserLink;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/TextContent/UserLink/UserLink.tsx?");

/***/ }),

/***/ "./src/shared/Content/PostsList/TextContent/UserLink/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/Content/PostsList/TextContent/UserLink/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserLink */ \"./src/shared/Content/PostsList/TextContent/UserLink/UserLink.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/TextContent/UserLink/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PostsList/TextContent/UserLink/userlink.css":
/*!************************************************************************!*\
  !*** ./src/shared/Content/PostsList/TextContent/UserLink/userlink.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userLink\": \"userlink__userLink--3pt88\",\n\t\"avatar\": \"userlink__avatar--2CoOs\",\n\t\"username\": \"userlink__username--jbHci\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/TextContent/UserLink/userlink.css?");

/***/ }),

/***/ "./src/shared/Content/PostsList/TextContent/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/Content/PostsList/TextContent/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/Content/PostsList/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PostsList/TextContent/textcontent.css":
/*!******************************************************************!*\
  !*** ./src/shared/Content/PostsList/TextContent/textcontent.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--3QylL\",\n\t\"metaData\": \"textcontent__metaData--3QKFf\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--3Yf7I\",\n\t\"createdAt\": \"textcontent__createdAt--xJavO\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/Content/PostsList/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/Content/PostsList/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PostsList */ \"./src/shared/Content/PostsList/PostsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/PostsList/postslist.css":
/*!****************************************************!*\
  !*** ./src/shared/Content/PostsList/postslist.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"divider\": \"postslist__divider--1Gzw9\",\n\t\"postsList\": \"postslist__postsList--2OyjV\",\n\t\"post\": \"postslist__post--1zBbU\",\n\t\"textContent\": \"postslist__textContent--6RcyT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/PostsList/postslist.css?");

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

/***/ "./src/shared/Dropdown/BodyDropdown/BodyDropdown.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Dropdown/BodyDropdown/BodyDropdown.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BodyDropdown = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar bodydropdown_css_1 = __importDefault(__webpack_require__(/*! ./bodydropdown.css */ \"./src/shared/Dropdown/BodyDropdown/bodydropdown.css\"));\r\nvar MenuItemsList_1 = __webpack_require__(/*! ../../Content/PostsList/Menu/MenuItemsList */ \"./src/shared/Content/PostsList/Menu/MenuItemsList/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\r\nvar Text_2 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nfunction BodyDropdown(_a) {\r\n    var idPost = _a.idPost, onClose = _a.onClose;\r\n    var ref = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                onClose === null || onClose === void 0 ? void 0 : onClose();\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.getElementById(idPost);\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: bodydropdown_css_1.default.dropdown, ref: ref },\r\n        react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: 'test' }),\r\n        react_1.default.createElement(\"button\", { className: bodydropdown_css_1.default.closeButton },\r\n            react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: Text_2.EColor.grey66 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))), node);\r\n}\r\nexports.BodyDropdown = BodyDropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/BodyDropdown/BodyDropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/BodyDropdown/bodydropdown.css":
/*!***********************************************************!*\
  !*** ./src/shared/Dropdown/BodyDropdown/bodydropdown.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"dropdown\": \"bodydropdown__dropdown--IRnid\",\n\t\"closeButton\": \"bodydropdown__closeButton--3uUmJ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/BodyDropdown/bodydropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/BodyDropdown/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/Dropdown/BodyDropdown/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./BodyDropdown */ \"./src/shared/Dropdown/BodyDropdown/BodyDropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/BodyDropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nvar BodyDropdown_1 = __webpack_require__(/*! ./BodyDropdown */ \"./src/shared/Dropdown/BodyDropdown/index.ts\");\r\nfunction Dropdown(_a) {\r\n    var button = _a.button;\r\n    var _b = react_1.default.useState(false), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];\r\n    var _c = react_1.useState(null), idElement = _c[0], setIdElement = _c[1];\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: function (event) {\r\n                var _a, _b, _c;\r\n                setIsDropdownOpen(!isDropdownOpen);\r\n                //получаем текущую кнопку меню по которой нажали\r\n                var buttonMenu = event.target.closest('button');\r\n                if (!buttonMenu)\r\n                    return;\r\n                //получаем пост к которой принадлежит кнопка\r\n                var currentPost = (_c = (_b = (_a = buttonMenu.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement;\r\n                var idPost = currentPost === null || currentPost === void 0 ? void 0 : currentPost.id;\r\n                setIdElement(idPost);\r\n            } }, button),\r\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\r\n            react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } },\r\n                react_1.default.createElement(BodyDropdown_1.BodyDropdown, { idPost: idElement, onClose: function () { setIsDropdownOpen(false); } }))))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar userContext_1 = __webpack_require__(/*! ../../context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nfunction SearchBlock() {\r\n    var _a = react_1.useContext(userContext_1.userContext), iconImg = _a.iconImg, name = _a.name;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: iconImg, username: name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ./../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar Text_1 = __webpack_require__(/*! ./../../../Text */ \"./src/shared/Text/index.ts\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=2alpekdjsqhwgCDAvSa4uQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.anon, size: 50, color: '#D9D9D9' })),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\r\n            react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Аноним'))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sorting dropdown\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Icons/Icon.tsx":
/*!***********************************!*\
  !*** ./src/shared/Icons/Icon.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[\"block\"] = \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\";\r\n    EIcons[\"comments\"] = \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\";\r\n    EIcons[\"save\"] = \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\";\r\n    EIcons[\"share\"] = \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\";\r\n    EIcons[\"warning\"] = \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\";\r\n    EIcons[\"anon\"] = \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\";\r\n    EIcons[\"answer\"] = \"M12.75 0.416504H1.41667C0.6375 0.416504 0 1.054 0 1.83317V10.3332C0 11.1123 0.6375 11.7498 1.41667 11.7498H11.3333L14.1667 14.5832V1.83317C14.1667 1.054 13.5292 0.416504 12.75 0.416504ZM11.3333 8.9165H2.83333V7.49984H11.3333V8.9165ZM11.3333 6.7915H2.83333V5.37484H11.3333V6.7915ZM11.3333 4.6665H2.83333V3.24984H11.3333V4.6665Z\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\nfunction Icon(_a) {\r\n    var name = _a.name, _b = _a.size, size = _b === void 0 ? 12 : _b, _c = _a.color, color = _c === void 0 ? '#999999' : _c;\r\n    var viewBoxString = \"0 0 \" + size + \" \" + size;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: viewBoxString, fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: name, fill: color })));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon() {\r\n    return (React.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

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

/***/ "./src/shared/Post/Comments/Comment/Comment.tsx":
/*!******************************************************!*\
  !*** ./src/shared/Post/Comments/Comment/Comment.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar comment_css_1 = __importDefault(__webpack_require__(/*! ./comment.css */ \"./src/shared/Post/Comments/Comment/comment.css\"));\r\nvar UserLink_1 = __webpack_require__(/*! ../../../Content/PostsList/TextContent/UserLink */ \"./src/shared/Content/PostsList/TextContent/UserLink/index.ts\");\r\nvar DateFromNow_1 = __webpack_require__(/*! ../../../Content/PostsList/TextContent/DateFromNow */ \"./src/shared/Content/PostsList/TextContent/DateFromNow/index.ts\");\r\nvar ControlsComment_1 = __webpack_require__(/*! ./ControlsComment */ \"./src/shared/Post/Comments/Comment/ControlsComment/index.ts\");\r\nfunction Comment() {\r\n    var tempCurrentDate = new Date();\r\n    tempCurrentDate = (tempCurrentDate.getTime() - 10800000) / 1000;\r\n    var author = 'Михаил Рогов';\r\n    return (react_1.default.createElement(\"div\", { className: comment_css_1.default.comment },\r\n        react_1.default.createElement(\"div\", { className: comment_css_1.default.clipper },\r\n            react_1.default.createElement(\"svg\", { width: \"19\", height: \"30\", viewBox: \"0 0 19 30\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 30L19 20L8.74228e-07 20L9.5 30Z\", fill: \"#D9D9D9\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" })),\r\n            react_1.default.createElement(\"div\", { className: comment_css_1.default.clipperDivider })),\r\n        react_1.default.createElement(\"div\", { className: comment_css_1.default.userComment },\r\n            react_1.default.createElement(\"div\", { className: comment_css_1.default.userCommentTitle },\r\n                react_1.default.createElement(UserLink_1.UserLink, { author: author }),\r\n                react_1.default.createElement(DateFromNow_1.DateFromNow, { date: tempCurrentDate }),\r\n                react_1.default.createElement(\"span\", { className: comment_css_1.default.group }, \"\\u041B\\u0438\\u0433\\u0430 \\u044E\\u0440\\u0438\\u0441\\u0442\\u043E\\u0432\")),\r\n            react_1.default.createElement(\"p\", null, \"\\u0421\\u0442\\u043E\\u0440\\u043E\\u043D\\u043D\\u0438\\u043A\\u0438 \\u0442\\u043E\\u0442\\u0430\\u043B\\u0438\\u0442\\u0430\\u0440\\u0438\\u0437\\u043C\\u0430 \\u0432 \\u043D\\u0430\\u0443\\u043A\\u0435 \\u0431\\u0443\\u0434\\u0443\\u0442 \\u043E\\u0431\\u044A\\u0435\\u043A\\u0442\\u0438\\u0432\\u043D\\u043E \\u0440\\u0430\\u0441\\u0441\\u043C\\u043E\\u0442\\u0440\\u0435\\u043D\\u044B \\u0441\\u043E\\u043E\\u0442\\u0432\\u0435\\u0442\\u0441\\u0442\\u0432\\u0443\\u044E\\u0449\\u0438\\u043C\\u0438 \\u0438\\u043D\\u0441\\u0442\\u0430\\u043D\\u0446\\u0438\\u044F\\u043C\\u0438. \\u041B\\u0438\\u0448\\u044C \\u0440\\u0435\\u043F\\u043B\\u0438\\u0446\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u043D\\u044B\\u0435 \\u0441 \\u0437\\u0430\\u0440\\u0443\\u0431\\u0435\\u0436\\u043D\\u044B\\u0445 \\u0438\\u0441\\u0442\\u043E\\u0447\\u043D\\u0438\\u043A\\u043E\\u0432, \\u0441\\u043E\\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u043D\\u044B\\u0435 \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u0431\\u0443\\u0434\\u0443\\u0442 \\u043E\\u043F\\u0438\\u0441\\u0430\\u043D\\u044B \\u043C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u043E \\u043F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u043E.\"),\r\n            react_1.default.createElement(ControlsComment_1.ControlsComment, { author: author }))));\r\n}\r\nexports.Comment = Comment;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/Post/Comments/Comment/ControlsComment/AnswerComment/AnswerComment.tsx":
/*!******************************************************************************************!*\
  !*** ./src/shared/Post/Comments/Comment/ControlsComment/AnswerComment/AnswerComment.tsx ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AnswerComment = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar answercomment_css_1 = __importDefault(__webpack_require__(/*! ./answercomment.css */ \"./src/shared/Post/Comments/Comment/ControlsComment/AnswerComment/answercomment.css\"));\r\nfunction AnswerComment(_a) {\r\n    var to = _a.to;\r\n    var _b = react_1.useState(to + \", \"), textAreaVal = _b[0], setTextAreaVal = _b[1];\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        console.log('click');\r\n    }\r\n    function handleTexArea(event) {\r\n        setTextAreaVal(event.target.value);\r\n    }\r\n    var refTextArea = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        var _a;\r\n        //устанавливаем фокус\r\n        refTextArea.current && refTextArea.current.focus();\r\n        //в конец значения по умолчанию\r\n        (_a = refTextArea.current) === null || _a === void 0 ? void 0 : _a.setSelectionRange(textAreaVal.length, textAreaVal.length);\r\n    });\r\n    return (\r\n    //неконтролируемая компонента\r\n    // <form className={styles.form} onSubmit={handleSubmit}>\r\n    //   <textarea className={styles.input} defaultValue={`${to}, `} autoFocus/>\r\n    //   <button type='submit' className={styles.button}>Ответить</button>\r\n    // </form>\r\n    //контролируемая компонента\r\n    react_1.default.createElement(\"form\", { className: answercomment_css_1.default.form, onSubmit: handleSubmit },\r\n        react_1.default.createElement(\"textarea\", { className: answercomment_css_1.default.input, value: textAreaVal, ref: refTextArea, onChange: handleTexArea }),\r\n        react_1.default.createElement(\"button\", { type: 'submit', className: answercomment_css_1.default.button }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")));\r\n}\r\nexports.AnswerComment = AnswerComment;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/Comment/ControlsComment/AnswerComment/AnswerComment.tsx?");

/***/ }),

/***/ "./src/shared/Post/Comments/Comment/ControlsComment/AnswerComment/answercomment.css":
/*!******************************************************************************************!*\
  !*** ./src/shared/Post/Comments/Comment/ControlsComment/AnswerComment/answercomment.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"answercomment__form--3RUI4\",\n\t\"input\": \"answercomment__input--3L3M8\",\n\t\"button\": \"answercomment__button--zRlhx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/Comment/ControlsComment/AnswerComment/answercomment.css?");

/***/ }),

/***/ "./src/shared/Post/Comments/Comment/ControlsComment/AnswerComment/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/shared/Post/Comments/Comment/ControlsComment/AnswerComment/index.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AnswerComment */ \"./src/shared/Post/Comments/Comment/ControlsComment/AnswerComment/AnswerComment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/Comment/ControlsComment/AnswerComment/index.ts?");

/***/ }),

/***/ "./src/shared/Post/Comments/Comment/ControlsComment/ControlsComment.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/Post/Comments/Comment/ControlsComment/ControlsComment.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ControlsComment = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar controlscomment_css_1 = __importDefault(__webpack_require__(/*! ./controlscomment.css */ \"./src/shared/Post/Comments/Comment/ControlsComment/controlscomment.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar AnswerComment_1 = __webpack_require__(/*! ./AnswerComment */ \"./src/shared/Post/Comments/Comment/ControlsComment/AnswerComment/index.ts\");\r\nfunction ControlsComment(_a) {\r\n    var author = _a.author;\r\n    var _b = react_1.useState(false), isAnswerOpened = _b[0], setIsAnswerOpened = _b[1];\r\n    return (react_1.default.createElement(\"div\", { className: controlscomment_css_1.default.userCommentBottom },\r\n        react_1.default.createElement(\"div\", { className: controlscomment_css_1.default.userCommentControls },\r\n            react_1.default.createElement(\"button\", { onClick: function () { setIsAnswerOpened(true); } },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.answer, size: 15 }),\r\n                react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share, size: 15 }),\r\n                react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.warning, size: 15 }),\r\n                react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))),\r\n        react_1.default.createElement(\"div\", { className: controlscomment_css_1.default.formAnswer }, isAnswerOpened && (react_1.default.createElement(AnswerComment_1.AnswerComment, { to: author })))));\r\n}\r\nexports.ControlsComment = ControlsComment;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/Comment/ControlsComment/ControlsComment.tsx?");

/***/ }),

/***/ "./src/shared/Post/Comments/Comment/ControlsComment/controlscomment.css":
/*!******************************************************************************!*\
  !*** ./src/shared/Post/Comments/Comment/ControlsComment/controlscomment.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userCommentBottom\": \"controlscomment__userCommentBottom--dW05T\",\n\t\"userCommentControls\": \"controlscomment__userCommentControls--z0d0_\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/Comment/ControlsComment/controlscomment.css?");

/***/ }),

/***/ "./src/shared/Post/Comments/Comment/ControlsComment/index.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/Post/Comments/Comment/ControlsComment/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ControlsComment */ \"./src/shared/Post/Comments/Comment/ControlsComment/ControlsComment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/Comment/ControlsComment/index.ts?");

/***/ }),

/***/ "./src/shared/Post/Comments/Comment/comment.css":
/*!******************************************************!*\
  !*** ./src/shared/Post/Comments/Comment/comment.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"comment\": \"comment__comment--1hyXR\",\n\t\"clipper\": \"comment__clipper--Jmd_P\",\n\t\"clipperDivider\": \"comment__clipperDivider--3xJfY\",\n\t\"userComment\": \"comment__userComment--19hTS\",\n\t\"userCommentTitle\": \"comment__userCommentTitle--66Mya\",\n\t\"group\": \"comment__group--3KoDu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/Comment/comment.css?");

/***/ }),

/***/ "./src/shared/Post/Comments/Comments.tsx":
/*!***********************************************!*\
  !*** ./src/shared/Post/Comments/Comments.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar comments_css_1 = __importDefault(__webpack_require__(/*! ./comments.css */ \"./src/shared/Post/Comments/comments.css\"));\r\nvar Comment_1 = __webpack_require__(/*! ./Comment/Comment */ \"./src/shared/Post/Comments/Comment/Comment.tsx\");\r\nfunction Comments() {\r\n    return (react_1.default.createElement(\"div\", { className: comments_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { className: comments_css_1.default.sort },\r\n            react_1.default.createElement(\"span\", null, \"\\u0421\\u043E\\u0440\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C \\u043F\\u043E: \"),\r\n            react_1.default.createElement(\"select\", null,\r\n                react_1.default.createElement(\"option\", { value: \"\" }, \"\\u041B\\u0443\\u0447\\u0448\\u0438\\u0435\"),\r\n                react_1.default.createElement(\"option\", { value: \"\" }, \"\\u0414\\u0430\\u0442\\u0435 \\u0441\\u043E\\u0437\\u0434\\u0430\\u043D\\u0438\\u044F\"))),\r\n        react_1.default.createElement(\"div\", { className: comments_css_1.default.divider }),\r\n        react_1.default.createElement(Comment_1.Comment, null),\r\n        react_1.default.createElement(Comment_1.Comment, null)));\r\n}\r\nexports.Comments = Comments;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/Comments.tsx?");

/***/ }),

/***/ "./src/shared/Post/Comments/comments.css":
/*!***********************************************!*\
  !*** ./src/shared/Post/Comments/comments.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"comments__container--3AUdb\",\n\t\"sort\": \"comments__sort--UZuUy\",\n\t\"divider\": \"comments__divider--10XbX\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/comments.css?");

/***/ }),

/***/ "./src/shared/Post/Comments/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/Post/Comments/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comments */ \"./src/shared/Post/Comments/Comments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/index.ts?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\");\r\nvar Comments_1 = __webpack_require__(/*! ./Comments */ \"./src/shared/Post/Comments/index.ts\");\r\nfunction Post(props) {\r\n    var ref = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a, _b;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.getElementById('modal_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", null, \"\\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u0435\\u043B\\u044C \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438 \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u0442\"),\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\r\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam officia corrupti, neque, fuga ipsa vel quas explicabo quisquam ratione nihil inventore illo commodi quia deleniti qui adipisci assumenda? Distinctio, eos.\"),\r\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iure facilis pariatur, aliquid esse architecto illum, dolor temporibus facere, perferendis autem tenetur commodi odit aut quod explicabo quisquam reiciendis soluta!\"),\r\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi ipsum eos possimus ratione ipsam cupiditate, iste repellendus dicta, maiores quos aperiam hic corporis. Libero facilis suscipit optio similique? Ratione?\")),\r\n        react_1.default.createElement(CommentForm_1.CommentForm, null),\r\n        react_1.default.createElement(Comments_1.Comments, null))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--yRo-c\",\n\t\"content\": \"post__content--2gFMc\",\n\t\"close\": \"post__close--1HSqz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColor = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"greyF4\"] = \"greyF4\";\r\n    EColor[\"greyF3\"] = \"greyF3\";\r\n    EColor[\"greyD9\"] = \"greyD9\";\r\n    EColor[\"greyC4\"] = \"greyC4\";\r\n    EColor[\"grey99\"] = \"grey99\";\r\n    EColor[\"grey66\"] = \"grey66\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\nfunction Text(props) {\r\n    var _a, _b, _c;\r\n    var _d = props.As, As = _d === void 0 ? 'span' : _d, _e = props.color, color = _e === void 0 ? EColor.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    var classes = classnames_1.default(text_css_1.default[\"s\" + size], (_a = {}, _a[text_css_1.default[\"m\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"t\" + tabletSize]] = tabletSize, _b), (_c = {}, _c[text_css_1.default[\"d\" + desktopSize]] = desktopSize, _c), text_css_1.default[color]);\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

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

/***/ "./src/shared/context/postsContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/context/postsContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContextProvider = exports.postsContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nexports.postsContext = react_1.default.createContext([]);\r\nfunction PostsContextProvider(_a) {\r\n    var children = _a.children;\r\n    var posts = usePostsData_1.usePostsData();\r\n    return (react_1.default.createElement(exports.postsContext.Provider, { value: posts }, children));\r\n}\r\nexports.PostsContextProvider = PostsContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/postsContext.tsx?");

/***/ }),

/***/ "./src/shared/context/tokenContext.ts":
/*!********************************************!*\
  !*** ./src/shared/context/tokenContext.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.tokenContext = react_1.default.createContext('');\r\n\n\n//# sourceURL=webpack:///./src/shared/context/tokenContext.ts?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nexports.userContext = react_1.default.createContext({});\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = useUserData_1.useUserData()[0];\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.updateComment = void 0;\r\nvar initialState = {\r\n    commentText: 'Привет, SkillBox!',\r\n};\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text,\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store.ts?");

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

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hoist-non-react-statics\");\n\n//# sourceURL=webpack:///external_%22hoist-non-react-statics%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

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

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-is\");\n\n//# sourceURL=webpack:///external_%22react-is%22?");

/***/ })

/******/ });