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

/***/ "./node_modules/react-hook-form/dist/index.esm.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/react-hook-form/dist/index.esm.mjs ***!
  \*********************************************************/
/*! exports provided: Controller, FormProvider, appendErrors, get, set, useController, useFieldArray, useForm, useFormContext, useFormState, useWatch */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return Controller; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormProvider\", function() { return FormProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendErrors\", function() { return appendErrors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return set; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useController\", function() { return useController; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFieldArray\", function() { return useFieldArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useForm\", function() { return useForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFormContext\", function() { return useFormContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFormState\", function() { return useFormState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWatch\", function() { return useWatch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n\n\nvar isCheckBoxInput = (element) => element.type === 'checkbox';\n\nvar isDateObject = (value) => value instanceof Date;\n\nvar isNullOrUndefined = (value) => value == null;\n\nconst isObjectType = (value) => typeof value === 'object';\r\nvar isObject = (value) => !isNullOrUndefined(value) &&\r\n    !Array.isArray(value) &&\r\n    isObjectType(value) &&\r\n    !isDateObject(value);\n\nvar getEventValue = (event) => isObject(event) && event.target\r\n    ? isCheckBoxInput(event.target)\r\n        ? event.target.checked\r\n        : event.target.value\r\n    : event;\n\nvar getNodeParentName = (name) => name.substring(0, name.search(/\\.\\d+(\\.|$)/)) || name;\n\nvar isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));\n\nvar compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];\n\nvar isUndefined = (val) => val === undefined;\n\nvar get = (obj, path, defaultValue) => {\r\n    if (!path || !isObject(obj)) {\r\n        return defaultValue;\r\n    }\r\n    const result = compact(path.split(/[,[\\].]+?/)).reduce((result, key) => isNullOrUndefined(result) ? result : result[key], obj);\r\n    return isUndefined(result) || result === obj\r\n        ? isUndefined(obj[path])\r\n            ? defaultValue\r\n            : obj[path]\r\n        : result;\r\n};\n\nconst EVENTS = {\r\n    BLUR: 'blur',\r\n    FOCUS_OUT: 'focusout',\r\n    CHANGE: 'change',\r\n};\r\nconst VALIDATION_MODE = {\r\n    onBlur: 'onBlur',\r\n    onChange: 'onChange',\r\n    onSubmit: 'onSubmit',\r\n    onTouched: 'onTouched',\r\n    all: 'all',\r\n};\r\nconst INPUT_VALIDATION_RULES = {\r\n    max: 'max',\r\n    min: 'min',\r\n    maxLength: 'maxLength',\r\n    minLength: 'minLength',\r\n    pattern: 'pattern',\r\n    required: 'required',\r\n    validate: 'validate',\r\n};\n\nconst HookFormContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);\r\n/**\r\n * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.\r\n *\r\n * @remarks\r\n * [API](https://react-hook-form.com/api/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)\r\n *\r\n * @returns return all useForm methods\r\n *\r\n * @example\r\n * ```tsx\r\n * function App() {\r\n *   const methods = useForm();\r\n *   const onSubmit = data => console.log(data);\r\n *\r\n *   return (\r\n *     <FormProvider {...methods} >\r\n *       <form onSubmit={methods.handleSubmit(onSubmit)}>\r\n *         <NestedInput />\r\n *         <input type=\"submit\" />\r\n *       </form>\r\n *     </FormProvider>\r\n *   );\r\n * }\r\n *\r\n *  function NestedInput() {\r\n *   const { register } = useFormContext(); // retrieve all hook methods\r\n *   return <input {...register(\"test\")} />;\r\n * }\r\n * ```\r\n */\r\nconst useFormContext = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(HookFormContext);\r\n/**\r\n * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.\r\n *\r\n * @remarks\r\n * [API](https://react-hook-form.com/api/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)\r\n *\r\n * @param props - all useFrom methods\r\n *\r\n * @example\r\n * ```tsx\r\n * function App() {\r\n *   const methods = useForm();\r\n *   const onSubmit = data => console.log(data);\r\n *\r\n *   return (\r\n *     <FormProvider {...methods} >\r\n *       <form onSubmit={methods.handleSubmit(onSubmit)}>\r\n *         <NestedInput />\r\n *         <input type=\"submit\" />\r\n *       </form>\r\n *     </FormProvider>\r\n *   );\r\n * }\r\n *\r\n *  function NestedInput() {\r\n *   const { register } = useFormContext(); // retrieve all hook methods\r\n *   return <input {...register(\"test\")} />;\r\n * }\r\n * ```\r\n */\r\nconst FormProvider = (props) => {\r\n    const { children, ...data } = props;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(HookFormContext.Provider, { value: data }, children));\r\n};\n\nvar getProxyFormState = (formState, _proxyFormState, localProxyFormState, isRoot = true) => {\r\n    const result = {};\r\n    for (const key in formState) {\r\n        Object.defineProperty(result, key, {\r\n            get: () => {\r\n                const _key = key;\r\n                if (_proxyFormState[_key] !== VALIDATION_MODE.all) {\r\n                    _proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;\r\n                }\r\n                localProxyFormState && (localProxyFormState[_key] = true);\r\n                return formState[_key];\r\n            },\r\n        });\r\n    }\r\n    return result;\r\n};\n\nvar isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;\n\nvar shouldRenderFormState = (formStateData, _proxyFormState, isRoot) => {\r\n    const { name, ...formState } = formStateData;\r\n    return (isEmptyObject(formState) ||\r\n        Object.keys(formState).length >= Object.keys(_proxyFormState).length ||\r\n        Object.keys(formState).find((key) => _proxyFormState[key] ===\r\n            (!isRoot || VALIDATION_MODE.all)));\r\n};\n\nvar convertToArrayPayload = (value) => (Array.isArray(value) ? value : [value]);\n\nvar shouldSubscribeByName = (name, signalName, exact) => exact && signalName\r\n    ? name === signalName\r\n    : !name ||\r\n        !signalName ||\r\n        name === signalName ||\r\n        convertToArrayPayload(name).some((currentName) => currentName &&\r\n            (currentName.startsWith(signalName) ||\r\n                signalName.startsWith(currentName)));\n\nfunction useSubscribe(props) {\r\n    const _props = react__WEBPACK_IMPORTED_MODULE_0__.useRef(props);\r\n    _props.current = props;\r\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\r\n        const tearDown = (subscription) => {\r\n            if (subscription) {\r\n                subscription.unsubscribe();\r\n            }\r\n        };\r\n        const subscription = !props.disabled &&\r\n            _props.current.subject.subscribe({\r\n                next: _props.current.callback,\r\n            });\r\n        return () => tearDown(subscription);\r\n    }, [props.disabled]);\r\n}\n\n/**\r\n * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.\r\n *\r\n * @remarks\r\n * [API](https://react-hook-form.com/api/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)\r\n *\r\n * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}\r\n *\r\n * @example\r\n * ```tsx\r\n * function App() {\r\n *   const { register, handleSubmit, control } = useForm({\r\n *     defaultValues: {\r\n *     firstName: \"firstName\"\r\n *   }});\r\n *   const { dirtyFields } = useFormState({\r\n *     control\r\n *   });\r\n *   const onSubmit = (data) => console.log(data);\r\n *\r\n *   return (\r\n *     <form onSubmit={handleSubmit(onSubmit)}>\r\n *       <input {...register(\"firstName\")} placeholder=\"First Name\" />\r\n *       {dirtyFields.firstName && <p>Field is dirty.</p>}\r\n *       <input type=\"submit\" />\r\n *     </form>\r\n *   );\r\n * }\r\n * ```\r\n */\r\nfunction useFormState(props) {\r\n    const methods = useFormContext();\r\n    const { control = methods.control, disabled, name, exact } = props || {};\r\n    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(control._formState);\r\n    const _localProxyFormState = react__WEBPACK_IMPORTED_MODULE_0__.useRef({\r\n        isDirty: false,\r\n        dirtyFields: false,\r\n        touchedFields: false,\r\n        isValidating: false,\r\n        isValid: false,\r\n        errors: false,\r\n    });\r\n    const _name = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);\r\n    const _mounted = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);\r\n    _name.current = name;\r\n    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((value) => _mounted.current &&\r\n        shouldSubscribeByName(_name.current, value.name, exact) &&\r\n        shouldRenderFormState(value, _localProxyFormState.current) &&\r\n        updateFormState({\r\n            ...control._formState,\r\n            ...value,\r\n        }), [control, exact]);\r\n    useSubscribe({\r\n        disabled,\r\n        callback,\r\n        subject: control._subjects.state,\r\n    });\r\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\r\n        _mounted.current = true;\r\n        return () => {\r\n            _mounted.current = false;\r\n        };\r\n    }, []);\r\n    return getProxyFormState(formState, control._proxyFormState, _localProxyFormState.current, false);\r\n}\n\nvar isString = (value) => typeof value === 'string';\n\nvar generateWatchOutput = (names, _names, formValues, isGlobal) => {\r\n    const isArray = Array.isArray(names);\r\n    if (isString(names)) {\r\n        isGlobal && _names.watch.add(names);\r\n        return get(formValues, names);\r\n    }\r\n    if (isArray) {\r\n        return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName),\r\n            get(formValues, fieldName)));\r\n    }\r\n    isGlobal && (_names.watchAll = true);\r\n    return formValues;\r\n};\n\nvar isFunction = (value) => typeof value === 'function';\n\nvar objectHasFunction = (data) => {\r\n    for (const key in data) {\r\n        if (isFunction(data[key])) {\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n};\n\n/**\r\n * Custom hook to subscribe to field change and isolate re-rendering at the component level.\r\n *\r\n * @remarks\r\n *\r\n * [API](https://react-hook-form.com/api/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)\r\n *\r\n * @example\r\n * ```tsx\r\n * const { watch } = useForm();\r\n * const values = useWatch({\r\n *   name: \"fieldName\"\r\n *   control,\r\n * })\r\n * ```\r\n */\r\nfunction useWatch(props) {\r\n    const methods = useFormContext();\r\n    const { control = methods.control, name, defaultValue, disabled, exact, } = props || {};\r\n    const _name = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);\r\n    _name.current = name;\r\n    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((formState) => {\r\n        if (shouldSubscribeByName(_name.current, formState.name, exact)) {\r\n            const fieldValues = generateWatchOutput(_name.current, control._names, formState.values || control._formValues);\r\n            updateValue(isUndefined(_name.current) ||\r\n                (isObject(fieldValues) && !objectHasFunction(fieldValues))\r\n                ? { ...fieldValues }\r\n                : Array.isArray(fieldValues)\r\n                    ? [...fieldValues]\r\n                    : isUndefined(fieldValues)\r\n                        ? defaultValue\r\n                        : fieldValues);\r\n        }\r\n    }, [control, exact, defaultValue]);\r\n    useSubscribe({\r\n        disabled,\r\n        subject: control._subjects.watch,\r\n        callback,\r\n    });\r\n    const [value, updateValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(isUndefined(defaultValue)\r\n        ? control._getWatch(name)\r\n        : defaultValue);\r\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\r\n        control._removeUnmounted();\r\n    });\r\n    return value;\r\n}\n\n/**\r\n * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.\r\n *\r\n * @remarks\r\n * [API](https://react-hook-form.com/api/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)\r\n *\r\n * @param props - the path name to the form field value, and validation rules.\r\n *\r\n * @returns field properties, field and form state. {@link UseControllerReturn}\r\n *\r\n * @example\r\n * ```tsx\r\n * function Input(props) {\r\n *   const { field, fieldState, formState } = useController(props);\r\n *   return (\r\n *     <div>\r\n *       <input {...field} placeholder={props.name} />\r\n *       <p>{fieldState.isTouched && \"Touched\"}</p>\r\n *       <p>{formState.isSubmitted ? \"submitted\" : \"\"}</p>\r\n *     </div>\r\n *   );\r\n * }\r\n * ```\r\n */\r\nfunction useController(props) {\r\n    const methods = useFormContext();\r\n    const { name, control = methods.control, shouldUnregister } = props;\r\n    const isArrayField = isNameInFieldArray(control._names.array, name);\r\n    const value = useWatch({\r\n        control,\r\n        name,\r\n        defaultValue: get(control._formValues, name, get(control._defaultValues, name, props.defaultValue)),\r\n        exact: true,\r\n    });\r\n    const formState = useFormState({\r\n        control,\r\n        name,\r\n    });\r\n    const _registerProps = react__WEBPACK_IMPORTED_MODULE_0__.useRef(control.register(name, {\r\n        ...props.rules,\r\n        value,\r\n    }));\r\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\r\n        const updateMounted = (name, value) => {\r\n            const field = get(control._fields, name);\r\n            if (field) {\r\n                field._f.mount = value;\r\n            }\r\n        };\r\n        updateMounted(name, true);\r\n        return () => {\r\n            const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;\r\n            (isArrayField\r\n                ? _shouldUnregisterField && !control._stateFlags.action\r\n                : _shouldUnregisterField)\r\n                ? control.unregister(name)\r\n                : updateMounted(name, false);\r\n        };\r\n    }, [name, control, isArrayField, shouldUnregister]);\r\n    return {\r\n        field: {\r\n            name,\r\n            value,\r\n            onChange: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {\r\n                _registerProps.current.onChange({\r\n                    target: {\r\n                        value: getEventValue(event),\r\n                        name: name,\r\n                    },\r\n                    type: EVENTS.CHANGE,\r\n                });\r\n            }, [name]),\r\n            onBlur: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {\r\n                _registerProps.current.onBlur({\r\n                    target: {\r\n                        value: get(control._formValues, name),\r\n                        name: name,\r\n                    },\r\n                    type: EVENTS.BLUR,\r\n                });\r\n            }, [name, control]),\r\n            ref: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((elm) => {\r\n                const field = get(control._fields, name);\r\n                if (elm && field && elm.focus) {\r\n                    field._f.ref = {\r\n                        focus: () => elm.focus(),\r\n                        select: () => elm.select(),\r\n                        setCustomValidity: (message) => elm.setCustomValidity(message),\r\n                        reportValidity: () => elm.reportValidity(),\r\n                    };\r\n                }\r\n            }, [name, control._fields]),\r\n        },\r\n        formState,\r\n        fieldState: Object.defineProperties({}, {\r\n            invalid: {\r\n                get: () => !!get(formState.errors, name),\r\n            },\r\n            isDirty: {\r\n                get: () => !!get(formState.dirtyFields, name),\r\n            },\r\n            isTouched: {\r\n                get: () => !!get(formState.touchedFields, name),\r\n            },\r\n            error: {\r\n                get: () => get(formState.errors, name),\r\n            },\r\n        }),\r\n    };\r\n}\n\n/**\r\n * Component based on `useController` hook to work with controlled component.\r\n *\r\n * @remarks\r\n * [API](https://react-hook-form.com/api/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)\r\n *\r\n * @param props - the path name to the form field value, and validation rules.\r\n *\r\n * @returns provide field handler functions, field and form state.\r\n *\r\n * @example\r\n * ```tsx\r\n * function App() {\r\n *   const { control } = useForm<FormValues>({\r\n *     defaultValues: {\r\n *       test: \"\"\r\n *     }\r\n *   });\r\n *\r\n *   return (\r\n *     <form>\r\n *       <Controller\r\n *         control={control}\r\n *         name=\"test\"\r\n *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (\r\n *           <>\r\n *             <input\r\n *               onChange={onChange} // send value to hook form\r\n *               onBlur={onBlur} // notify when input is touched\r\n *               value={value} // return updated value\r\n *               ref={ref} // set ref for focus management\r\n *             />\r\n *             <p>{formState.isSubmitted ? \"submitted\" : \"\"}</p>\r\n *             <p>{fieldState.isTouched ? \"touched\" : \"\"}</p>\r\n *           </>\r\n *         )}\r\n *       />\r\n *     </form>\r\n *   );\r\n * }\r\n * ```\r\n */\r\nconst Controller = (props) => props.render(useController(props));\n\nvar appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria\r\n    ? {\r\n        ...errors[name],\r\n        types: {\r\n            ...(errors[name] && errors[name].types ? errors[name].types : {}),\r\n            [type]: message || true,\r\n        },\r\n    }\r\n    : {};\n\nvar isKey = (value) => /^\\w*$/.test(value);\n\nvar stringToPath = (input) => compact(input.replace(/[\"|']|\\]/g, '').split(/\\.|\\[/));\n\nfunction set(object, path, value) {\r\n    let index = -1;\r\n    const tempPath = isKey(path) ? [path] : stringToPath(path);\r\n    const length = tempPath.length;\r\n    const lastIndex = length - 1;\r\n    while (++index < length) {\r\n        const key = tempPath[index];\r\n        let newValue = value;\r\n        if (index !== lastIndex) {\r\n            const objValue = object[key];\r\n            newValue =\r\n                isObject(objValue) || Array.isArray(objValue)\r\n                    ? objValue\r\n                    : !isNaN(+tempPath[index + 1])\r\n                        ? []\r\n                        : {};\r\n        }\r\n        object[key] = newValue;\r\n        object = object[key];\r\n    }\r\n    return object;\r\n}\n\nconst focusFieldBy = (fields, callback, fieldsNames) => {\r\n    for (const key of fieldsNames || Object.keys(fields)) {\r\n        const field = get(fields, key);\r\n        if (field) {\r\n            const { _f, ...currentField } = field;\r\n            if (_f && callback(_f.name)) {\r\n                if (_f.ref.focus && isUndefined(_f.ref.focus())) {\r\n                    break;\r\n                }\r\n                else if (_f.refs) {\r\n                    _f.refs[0].focus();\r\n                    break;\r\n                }\r\n            }\r\n            else if (isObject(currentField)) {\r\n                focusFieldBy(currentField, callback);\r\n            }\r\n        }\r\n    }\r\n};\n\nvar generateId = () => {\r\n    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;\r\n    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {\r\n        const r = (Math.random() * 16 + d) % 16 | 0;\r\n        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);\r\n    });\r\n};\n\nvar getFocusFieldName = (name, index, options = {}) => options.shouldFocus || isUndefined(options.shouldFocus)\r\n    ? options.focusName ||\r\n        `${name}.${isUndefined(options.focusIndex) ? index : options.focusIndex}.`\r\n    : '';\n\nvar isWatched = (name, _names, isBlurEvent) => !isBlurEvent &&\r\n    (_names.watchAll ||\r\n        _names.watch.has(name) ||\r\n        [..._names.watch].some((watchName) => name.startsWith(watchName) &&\r\n            /^\\.\\w+/.test(name.slice(watchName.length))));\n\nfunction append(data, value) {\r\n    return [...data, ...convertToArrayPayload(value)];\r\n}\n\nvar isWeb = typeof window !== 'undefined' &&\r\n    typeof window.HTMLElement !== 'undefined' &&\r\n    typeof document !== 'undefined';\n\nfunction cloneObject(data) {\r\n    let copy;\r\n    const isArray = Array.isArray(data);\r\n    if (data instanceof Date) {\r\n        copy = new Date(data);\r\n    }\r\n    else if (data instanceof Set) {\r\n        copy = new Set(data);\r\n    }\r\n    else if (!(isWeb && (data instanceof Blob || data instanceof FileList)) &&\r\n        (isArray || isObject(data))) {\r\n        copy = isArray ? [] : {};\r\n        for (const key in data) {\r\n            if (isFunction(data[key])) {\r\n                copy = data;\r\n                break;\r\n            }\r\n            copy[key] = cloneObject(data[key]);\r\n        }\r\n    }\r\n    else {\r\n        return data;\r\n    }\r\n    return copy;\r\n}\n\nvar fillEmptyArray = (value) => Array.isArray(value) ? value.map(() => undefined) : undefined;\n\nfunction insert(data, index, value) {\r\n    return [\r\n        ...data.slice(0, index),\r\n        ...convertToArrayPayload(value),\r\n        ...data.slice(index),\r\n    ];\r\n}\n\nvar moveArrayAt = (data, from, to) => {\r\n    if (!Array.isArray(data)) {\r\n        return [];\r\n    }\r\n    if (isUndefined(data[to])) {\r\n        data[to] = undefined;\r\n    }\r\n    data.splice(to, 0, data.splice(from, 1)[0]);\r\n    return data;\r\n};\n\nfunction prepend(data, value) {\r\n    return [...convertToArrayPayload(value), ...convertToArrayPayload(data)];\r\n}\n\nfunction removeAtIndexes(data, indexes) {\r\n    let i = 0;\r\n    const temp = [...data];\r\n    for (const index of indexes) {\r\n        temp.splice(index - i, 1);\r\n        i++;\r\n    }\r\n    return compact(temp).length ? temp : [];\r\n}\r\nvar removeArrayAt = (data, index) => isUndefined(index)\r\n    ? []\r\n    : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b) => a - b));\n\nvar swapArrayAt = (data, indexA, indexB) => {\r\n    data[indexA] = [data[indexB], (data[indexB] = data[indexA])][0];\r\n};\n\nfunction baseGet(object, updatePath) {\r\n    const length = updatePath.slice(0, -1).length;\r\n    let index = 0;\r\n    while (index < length) {\r\n        object = isUndefined(object) ? index++ : object[updatePath[index++]];\r\n    }\r\n    return object;\r\n}\r\nfunction unset(object, path) {\r\n    const updatePath = isKey(path) ? [path] : stringToPath(path);\r\n    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);\r\n    const key = updatePath[updatePath.length - 1];\r\n    let previousObjRef;\r\n    if (childObject) {\r\n        delete childObject[key];\r\n    }\r\n    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {\r\n        let index = -1;\r\n        let objectRef;\r\n        const currentPaths = updatePath.slice(0, -(k + 1));\r\n        const currentPathsLength = currentPaths.length - 1;\r\n        if (k > 0) {\r\n            previousObjRef = object;\r\n        }\r\n        while (++index < currentPaths.length) {\r\n            const item = currentPaths[index];\r\n            objectRef = objectRef ? objectRef[item] : object[item];\r\n            if (currentPathsLength === index &&\r\n                ((isObject(objectRef) && isEmptyObject(objectRef)) ||\r\n                    (Array.isArray(objectRef) &&\r\n                        !objectRef.filter((data) => !isUndefined(data)).length))) {\r\n                previousObjRef ? delete previousObjRef[item] : delete object[item];\r\n            }\r\n            previousObjRef = objectRef;\r\n        }\r\n    }\r\n    return object;\r\n}\n\nvar updateAt = (fieldValues, index, value) => {\r\n    fieldValues[index] = value;\r\n    return fieldValues;\r\n};\n\n/**\r\n * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc.\r\n *\r\n * @remarks\r\n * [API](https://react-hook-form.com/api/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)\r\n *\r\n * @param props - useFieldArray props\r\n *\r\n * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}\r\n *\r\n * @example\r\n * ```tsx\r\n * function App() {\r\n *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({\r\n *     defaultValues: {\r\n *       test: []\r\n *     }\r\n *   });\r\n *   const { fields, append } = useFieldArray({\r\n *     control,\r\n *     name: \"test\"\r\n *   });\r\n *\r\n *   return (\r\n *     <form onSubmit={handleSubmit(data => console.log(data))}>\r\n *       {fields.map((item, index) => (\r\n *          <input key={item.id} {...register(`test.${index}.firstName`)}  />\r\n *       ))}\r\n *       <button type=\"button\" onClick={() => append({ firstName: \"bill\" })}>\r\n *         append\r\n *       </button>\r\n *       <input type=\"submit\" />\r\n *     </form>\r\n *   );\r\n * }\r\n * ```\r\n */\r\nfunction useFieldArray(props) {\r\n    const methods = useFormContext();\r\n    const { control = methods.control, name, keyName = 'id', shouldUnregister, } = props;\r\n    const [fields, setFields] = react__WEBPACK_IMPORTED_MODULE_0__.useState(control._getFieldArray(name));\r\n    const ids = react__WEBPACK_IMPORTED_MODULE_0__.useRef(control._getFieldArray(name).map(generateId));\r\n    const _fieldIds = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fields);\r\n    const _name = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);\r\n    const _actioned = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);\r\n    _name.current = name;\r\n    _fieldIds.current = fields;\r\n    control._names.array.add(name);\r\n    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(({ values, name: fieldArrayName, }) => {\r\n        if (fieldArrayName === _name.current || !fieldArrayName) {\r\n            const fieldValues = get(values, _name.current, []);\r\n            setFields(fieldValues);\r\n            ids.current = fieldValues.map(generateId);\r\n        }\r\n    }, []);\r\n    useSubscribe({\r\n        callback,\r\n        subject: control._subjects.array,\r\n    });\r\n    const updateValues = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((updatedFieldArrayValues) => {\r\n        _actioned.current = true;\r\n        control._updateFieldArray(name, updatedFieldArrayValues);\r\n    }, [control, name]);\r\n    const append$1 = (value, options) => {\r\n        const appendValue = convertToArrayPayload(cloneObject(value));\r\n        const updatedFieldArrayValues = append(control._getFieldArray(name), appendValue);\r\n        control._names.focus = getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);\r\n        ids.current = append(ids.current, appendValue.map(generateId));\r\n        updateValues(updatedFieldArrayValues);\r\n        setFields(updatedFieldArrayValues);\r\n        control._updateFieldArray(name, updatedFieldArrayValues, append, {\r\n            argA: fillEmptyArray(value),\r\n        });\r\n    };\r\n    const prepend$1 = (value, options) => {\r\n        const prependValue = convertToArrayPayload(cloneObject(value));\r\n        const updatedFieldArrayValues = prepend(control._getFieldArray(name), prependValue);\r\n        control._names.focus = getFocusFieldName(name, 0, options);\r\n        ids.current = prepend(ids.current, prependValue.map(generateId));\r\n        updateValues(updatedFieldArrayValues);\r\n        setFields(updatedFieldArrayValues);\r\n        control._updateFieldArray(name, updatedFieldArrayValues, prepend, {\r\n            argA: fillEmptyArray(value),\r\n        });\r\n    };\r\n    const remove = (index) => {\r\n        const updatedFieldArrayValues = removeArrayAt(control._getFieldArray(name), index);\r\n        ids.current = removeArrayAt(ids.current, index);\r\n        updateValues(updatedFieldArrayValues);\r\n        setFields(updatedFieldArrayValues);\r\n        control._updateFieldArray(name, updatedFieldArrayValues, removeArrayAt, {\r\n            argA: index,\r\n        });\r\n    };\r\n    const insert$1 = (index, value, options) => {\r\n        const insertValue = convertToArrayPayload(cloneObject(value));\r\n        const updatedFieldArrayValues = insert(control._getFieldArray(name), index, insertValue);\r\n        control._names.focus = getFocusFieldName(name, index, options);\r\n        ids.current = insert(ids.current, index, insertValue.map(generateId));\r\n        updateValues(updatedFieldArrayValues);\r\n        setFields(updatedFieldArrayValues);\r\n        control._updateFieldArray(name, updatedFieldArrayValues, insert, {\r\n            argA: index,\r\n            argB: fillEmptyArray(value),\r\n        });\r\n    };\r\n    const swap = (indexA, indexB) => {\r\n        const updatedFieldArrayValues = control._getFieldArray(name);\r\n        swapArrayAt(updatedFieldArrayValues, indexA, indexB);\r\n        swapArrayAt(ids.current, indexA, indexB);\r\n        updateValues(updatedFieldArrayValues);\r\n        setFields(updatedFieldArrayValues);\r\n        control._updateFieldArray(name, updatedFieldArrayValues, swapArrayAt, {\r\n            argA: indexA,\r\n            argB: indexB,\r\n        }, false);\r\n    };\r\n    const move = (from, to) => {\r\n        const updatedFieldArrayValues = control._getFieldArray(name);\r\n        moveArrayAt(updatedFieldArrayValues, from, to);\r\n        moveArrayAt(ids.current, from, to);\r\n        updateValues(updatedFieldArrayValues);\r\n        setFields(updatedFieldArrayValues);\r\n        control._updateFieldArray(name, updatedFieldArrayValues, moveArrayAt, {\r\n            argA: from,\r\n            argB: to,\r\n        }, false);\r\n    };\r\n    const update = (index, value) => {\r\n        const updateValue = cloneObject(value);\r\n        const updatedFieldArrayValues = updateAt(control._getFieldArray(name), index, updateValue);\r\n        ids.current = [...updatedFieldArrayValues].map((item, i) => !item || i === index ? generateId() : ids.current[i]);\r\n        updateValues(updatedFieldArrayValues);\r\n        setFields([...updatedFieldArrayValues]);\r\n        control._updateFieldArray(name, updatedFieldArrayValues, updateAt, {\r\n            argA: index,\r\n            argB: updateValue,\r\n        }, true, false);\r\n    };\r\n    const replace = (value) => {\r\n        const updatedFieldArrayValues = convertToArrayPayload(cloneObject(value));\r\n        ids.current = updatedFieldArrayValues.map(generateId);\r\n        updateValues([...updatedFieldArrayValues]);\r\n        setFields([...updatedFieldArrayValues]);\r\n        control._updateFieldArray(name, [...updatedFieldArrayValues], (data) => data, {}, true, false);\r\n    };\r\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\r\n        control._stateFlags.action = false;\r\n        isWatched(name, control._names) && control._subjects.state.next({});\r\n        if (_actioned.current) {\r\n            control._executeSchema([name]).then((result) => {\r\n                const error = get(result.errors, name);\r\n                const existingError = get(control._formState.errors, name);\r\n                if (existingError ? !error && existingError.type : error && error.type) {\r\n                    error\r\n                        ? set(control._formState.errors, name, error)\r\n                        : unset(control._formState.errors, name);\r\n                    control._subjects.state.next({\r\n                        errors: control._formState.errors,\r\n                    });\r\n                }\r\n            });\r\n        }\r\n        control._subjects.watch.next({\r\n            name,\r\n            values: control._formValues,\r\n        });\r\n        control._names.focus &&\r\n            focusFieldBy(control._fields, (key) => key.startsWith(control._names.focus));\r\n        control._names.focus = '';\r\n        control._proxyFormState.isValid && control._updateValid();\r\n    }, [fields, name, control]);\r\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\r\n        !get(control._formValues, name) && control._updateFieldArray(name);\r\n        return () => {\r\n            (control._options.shouldUnregister || shouldUnregister) &&\r\n                control.unregister(name);\r\n        };\r\n    }, [name, control, keyName, shouldUnregister]);\r\n    return {\r\n        swap: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(swap, [updateValues, name, control]),\r\n        move: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(move, [updateValues, name, control]),\r\n        prepend: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(prepend$1, [updateValues, name, control]),\r\n        append: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(append$1, [updateValues, name, control]),\r\n        remove: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(remove, [updateValues, name, control]),\r\n        insert: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(insert$1, [updateValues, name, control]),\r\n        update: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(update, [updateValues, name, control]),\r\n        replace: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(replace, [updateValues, name, control]),\r\n        fields: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => fields.map((field, index) => ({\r\n            ...field,\r\n            [keyName]: ids.current[index] || generateId(),\r\n        })), [fields, keyName]),\r\n    };\r\n}\n\nfunction createSubject() {\r\n    let _observers = [];\r\n    const next = (value) => {\r\n        for (const observer of _observers) {\r\n            observer.next(value);\r\n        }\r\n    };\r\n    const subscribe = (observer) => {\r\n        _observers.push(observer);\r\n        return {\r\n            unsubscribe: () => {\r\n                _observers = _observers.filter((o) => o !== observer);\r\n            },\r\n        };\r\n    };\r\n    const unsubscribe = () => {\r\n        _observers = [];\r\n    };\r\n    return {\r\n        get observers() {\r\n            return _observers;\r\n        },\r\n        next,\r\n        subscribe,\r\n        unsubscribe,\r\n    };\r\n}\n\nvar isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);\n\nfunction deepEqual(object1, object2) {\r\n    if (isPrimitive(object1) || isPrimitive(object2)) {\r\n        return object1 === object2;\r\n    }\r\n    if (isDateObject(object1) && isDateObject(object2)) {\r\n        return object1.getTime() === object2.getTime();\r\n    }\r\n    const keys1 = Object.keys(object1);\r\n    const keys2 = Object.keys(object2);\r\n    if (keys1.length !== keys2.length) {\r\n        return false;\r\n    }\r\n    for (const key of keys1) {\r\n        const val1 = object1[key];\r\n        if (!keys2.includes(key)) {\r\n            return false;\r\n        }\r\n        if (key !== 'ref') {\r\n            const val2 = object2[key];\r\n            if ((isDateObject(val1) && isDateObject(val2)) ||\r\n                (isObject(val1) && isObject(val2)) ||\r\n                (Array.isArray(val1) && Array.isArray(val2))\r\n                ? !deepEqual(val1, val2)\r\n                : val1 !== val2) {\r\n                return false;\r\n            }\r\n        }\r\n    }\r\n    return true;\r\n}\n\nvar getValidationModes = (mode) => ({\r\n    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,\r\n    isOnBlur: mode === VALIDATION_MODE.onBlur,\r\n    isOnChange: mode === VALIDATION_MODE.onChange,\r\n    isOnAll: mode === VALIDATION_MODE.all,\r\n    isOnTouch: mode === VALIDATION_MODE.onTouched,\r\n});\n\nvar isBoolean = (value) => typeof value === 'boolean';\n\nvar isFileInput = (element) => element.type === 'file';\n\nvar isHTMLElement = (value) => {\r\n    const owner = value ? value.ownerDocument : 0;\r\n    const ElementClass = owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement;\r\n    return value instanceof ElementClass;\r\n};\n\nvar isMultipleSelect = (element) => element.type === `select-multiple`;\n\nvar isRadioInput = (element) => element.type === 'radio';\n\nvar isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);\n\nvar live = (ref) => isHTMLElement(ref) && ref.isConnected;\n\nfunction markFieldsDirty(data, fields = {}) {\r\n    const isParentNodeArray = Array.isArray(data);\r\n    if (isObject(data) || isParentNodeArray) {\r\n        for (const key in data) {\r\n            if (Array.isArray(data[key]) ||\r\n                (isObject(data[key]) && !objectHasFunction(data[key]))) {\r\n                fields[key] = Array.isArray(data[key]) ? [] : {};\r\n                markFieldsDirty(data[key], fields[key]);\r\n            }\r\n            else if (!isNullOrUndefined(data[key])) {\r\n                fields[key] = true;\r\n            }\r\n        }\r\n    }\r\n    return fields;\r\n}\r\nfunction getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {\r\n    const isParentNodeArray = Array.isArray(data);\r\n    if (isObject(data) || isParentNodeArray) {\r\n        for (const key in data) {\r\n            if (Array.isArray(data[key]) ||\r\n                (isObject(data[key]) && !objectHasFunction(data[key]))) {\r\n                if (isUndefined(formValues) ||\r\n                    isPrimitive(dirtyFieldsFromValues[key])) {\r\n                    dirtyFieldsFromValues[key] = Array.isArray(data[key])\r\n                        ? markFieldsDirty(data[key], [])\r\n                        : { ...markFieldsDirty(data[key]) };\r\n                }\r\n                else {\r\n                    getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);\r\n                }\r\n            }\r\n            else {\r\n                dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);\r\n            }\r\n        }\r\n    }\r\n    return dirtyFieldsFromValues;\r\n}\r\nvar getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));\n\nconst defaultResult = {\r\n    value: false,\r\n    isValid: false,\r\n};\r\nconst validResult = { value: true, isValid: true };\r\nvar getCheckboxValue = (options) => {\r\n    if (Array.isArray(options)) {\r\n        if (options.length > 1) {\r\n            const values = options\r\n                .filter((option) => option && option.checked && !option.disabled)\r\n                .map((option) => option.value);\r\n            return { value: values, isValid: !!values.length };\r\n        }\r\n        return options[0].checked && !options[0].disabled\r\n            ? // @ts-expect-error expected to work in the browser\r\n                options[0].attributes && !isUndefined(options[0].attributes.value)\r\n                    ? isUndefined(options[0].value) || options[0].value === ''\r\n                        ? validResult\r\n                        : { value: options[0].value, isValid: true }\r\n                    : validResult\r\n            : defaultResult;\r\n    }\r\n    return defaultResult;\r\n};\n\nvar getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)\r\n    ? value\r\n    : valueAsNumber\r\n        ? value === '' || isNullOrUndefined(value)\r\n            ? NaN\r\n            : +value\r\n        : valueAsDate && isString(value)\r\n            ? new Date(value)\r\n            : setValueAs\r\n                ? setValueAs(value)\r\n                : value;\n\nconst defaultReturn = {\r\n    isValid: false,\r\n    value: null,\r\n};\r\nvar getRadioValue = (options) => Array.isArray(options)\r\n    ? options.reduce((previous, option) => option && option.checked && !option.disabled\r\n        ? {\r\n            isValid: true,\r\n            value: option.value,\r\n        }\r\n        : previous, defaultReturn)\r\n    : defaultReturn;\n\nfunction getFieldValue(_f) {\r\n    const ref = _f.ref;\r\n    if (_f.refs ? _f.refs.every((ref) => ref.disabled) : ref.disabled) {\r\n        return;\r\n    }\r\n    if (isFileInput(ref)) {\r\n        return ref.files;\r\n    }\r\n    if (isRadioInput(ref)) {\r\n        return getRadioValue(_f.refs).value;\r\n    }\r\n    if (isMultipleSelect(ref)) {\r\n        return [...ref.selectedOptions].map(({ value }) => value);\r\n    }\r\n    if (isCheckBoxInput(ref)) {\r\n        return getCheckboxValue(_f.refs).value;\r\n    }\r\n    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);\r\n}\n\nvar getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {\r\n    const fields = {};\r\n    for (const name of fieldsNames) {\r\n        const field = get(_fields, name);\r\n        field && set(fields, name, field._f);\r\n    }\r\n    return {\r\n        criteriaMode,\r\n        names: [...fieldsNames],\r\n        fields,\r\n        shouldUseNativeValidation,\r\n    };\r\n};\n\nvar isRegex = (value) => value instanceof RegExp;\n\nvar getRuleValue = (rule) => isUndefined(rule)\r\n    ? undefined\r\n    : isRegex(rule)\r\n        ? rule.source\r\n        : isObject(rule)\r\n            ? isRegex(rule.value)\r\n                ? rule.value.source\r\n                : rule.value\r\n            : rule;\n\nvar hasValidation = (options) => options.mount &&\r\n    (options.required ||\r\n        options.min ||\r\n        options.max ||\r\n        options.maxLength ||\r\n        options.minLength ||\r\n        options.pattern ||\r\n        options.validate);\n\nfunction schemaErrorLookup(errors, _fields, name) {\r\n    const error = get(errors, name);\r\n    if (error || isKey(name)) {\r\n        return {\r\n            error,\r\n            name,\r\n        };\r\n    }\r\n    const names = name.split('.');\r\n    while (names.length) {\r\n        const fieldName = names.join('.');\r\n        const field = get(_fields, fieldName);\r\n        const foundError = get(errors, fieldName);\r\n        if (field && !Array.isArray(field) && name !== fieldName) {\r\n            return { name };\r\n        }\r\n        if (foundError && foundError.type) {\r\n            return {\r\n                name: fieldName,\r\n                error: foundError,\r\n            };\r\n        }\r\n        names.pop();\r\n    }\r\n    return {\r\n        name,\r\n    };\r\n}\n\nvar skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {\r\n    if (mode.isOnAll) {\r\n        return false;\r\n    }\r\n    else if (!isSubmitted && mode.isOnTouch) {\r\n        return !(isTouched || isBlurEvent);\r\n    }\r\n    else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {\r\n        return !isBlurEvent;\r\n    }\r\n    else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {\r\n        return isBlurEvent;\r\n    }\r\n    return true;\r\n};\n\nvar unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);\n\nvar isMessage = (value) => isString(value) || react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(value);\n\nfunction getValidateError(result, ref, type = 'validate') {\r\n    if (isMessage(result) ||\r\n        (Array.isArray(result) && result.every(isMessage)) ||\r\n        (isBoolean(result) && !result)) {\r\n        return {\r\n            type,\r\n            message: isMessage(result) ? result : '',\r\n            ref,\r\n        };\r\n    }\r\n}\n\nvar getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)\r\n    ? validationData\r\n    : {\r\n        value: validationData,\r\n        message: '',\r\n    };\n\nvar validateField = async (field, inputValue, validateAllFieldCriteria, shouldUseNativeValidation) => {\r\n    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled, } = field._f;\r\n    if (!mount || disabled) {\r\n        return {};\r\n    }\r\n    const inputRef = refs ? refs[0] : ref;\r\n    const setCustomValidity = (message) => {\r\n        if (shouldUseNativeValidation && inputRef.reportValidity) {\r\n            inputRef.setCustomValidity(isBoolean(message) ? '' : message || ' ');\r\n            inputRef.reportValidity();\r\n        }\r\n    };\r\n    const error = {};\r\n    const isRadio = isRadioInput(ref);\r\n    const isCheckBox = isCheckBoxInput(ref);\r\n    const isRadioOrCheckbox = isRadio || isCheckBox;\r\n    const isEmpty = ((valueAsNumber || isFileInput(ref)) && !ref.value) ||\r\n        inputValue === '' ||\r\n        (Array.isArray(inputValue) && !inputValue.length);\r\n    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);\r\n    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {\r\n        const message = exceedMax ? maxLengthMessage : minLengthMessage;\r\n        error[name] = {\r\n            type: exceedMax ? maxType : minType,\r\n            message,\r\n            ref,\r\n            ...appendErrorsCurry(exceedMax ? maxType : minType, message),\r\n        };\r\n    };\r\n    if (required &&\r\n        ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||\r\n            (isBoolean(inputValue) && !inputValue) ||\r\n            (isCheckBox && !getCheckboxValue(refs).isValid) ||\r\n            (isRadio && !getRadioValue(refs).isValid))) {\r\n        const { value, message } = isMessage(required)\r\n            ? { value: !!required, message: required }\r\n            : getValueAndMessage(required);\r\n        if (value) {\r\n            error[name] = {\r\n                type: INPUT_VALIDATION_RULES.required,\r\n                message,\r\n                ref: inputRef,\r\n                ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message),\r\n            };\r\n            if (!validateAllFieldCriteria) {\r\n                setCustomValidity(message);\r\n                return error;\r\n            }\r\n        }\r\n    }\r\n    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {\r\n        let exceedMax;\r\n        let exceedMin;\r\n        const maxOutput = getValueAndMessage(max);\r\n        const minOutput = getValueAndMessage(min);\r\n        if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {\r\n            const valueNumber = ref.valueAsNumber || +inputValue;\r\n            if (!isNullOrUndefined(maxOutput.value)) {\r\n                exceedMax = valueNumber > maxOutput.value;\r\n            }\r\n            if (!isNullOrUndefined(minOutput.value)) {\r\n                exceedMin = valueNumber < minOutput.value;\r\n            }\r\n        }\r\n        else {\r\n            const valueDate = ref.valueAsDate || new Date(inputValue);\r\n            if (isString(maxOutput.value)) {\r\n                exceedMax = valueDate > new Date(maxOutput.value);\r\n            }\r\n            if (isString(minOutput.value)) {\r\n                exceedMin = valueDate < new Date(minOutput.value);\r\n            }\r\n        }\r\n        if (exceedMax || exceedMin) {\r\n            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);\r\n            if (!validateAllFieldCriteria) {\r\n                setCustomValidity(error[name].message);\r\n                return error;\r\n            }\r\n        }\r\n    }\r\n    if ((maxLength || minLength) && !isEmpty && isString(inputValue)) {\r\n        const maxLengthOutput = getValueAndMessage(maxLength);\r\n        const minLengthOutput = getValueAndMessage(minLength);\r\n        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&\r\n            inputValue.length > maxLengthOutput.value;\r\n        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&\r\n            inputValue.length < minLengthOutput.value;\r\n        if (exceedMax || exceedMin) {\r\n            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);\r\n            if (!validateAllFieldCriteria) {\r\n                setCustomValidity(error[name].message);\r\n                return error;\r\n            }\r\n        }\r\n    }\r\n    if (pattern && !isEmpty && isString(inputValue)) {\r\n        const { value: patternValue, message } = getValueAndMessage(pattern);\r\n        if (isRegex(patternValue) && !inputValue.match(patternValue)) {\r\n            error[name] = {\r\n                type: INPUT_VALIDATION_RULES.pattern,\r\n                message,\r\n                ref,\r\n                ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message),\r\n            };\r\n            if (!validateAllFieldCriteria) {\r\n                setCustomValidity(message);\r\n                return error;\r\n            }\r\n        }\r\n    }\r\n    if (validate) {\r\n        if (isFunction(validate)) {\r\n            const result = await validate(inputValue);\r\n            const validateError = getValidateError(result, inputRef);\r\n            if (validateError) {\r\n                error[name] = {\r\n                    ...validateError,\r\n                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message),\r\n                };\r\n                if (!validateAllFieldCriteria) {\r\n                    setCustomValidity(validateError.message);\r\n                    return error;\r\n                }\r\n            }\r\n        }\r\n        else if (isObject(validate)) {\r\n            let validationResult = {};\r\n            for (const key in validate) {\r\n                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {\r\n                    break;\r\n                }\r\n                const validateError = getValidateError(await validate[key](inputValue), inputRef, key);\r\n                if (validateError) {\r\n                    validationResult = {\r\n                        ...validateError,\r\n                        ...appendErrorsCurry(key, validateError.message),\r\n                    };\r\n                    setCustomValidity(validateError.message);\r\n                    if (validateAllFieldCriteria) {\r\n                        error[name] = validationResult;\r\n                    }\r\n                }\r\n            }\r\n            if (!isEmptyObject(validationResult)) {\r\n                error[name] = {\r\n                    ref: inputRef,\r\n                    ...validationResult,\r\n                };\r\n                if (!validateAllFieldCriteria) {\r\n                    return error;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    setCustomValidity(true);\r\n    return error;\r\n};\n\nconst defaultOptions = {\r\n    mode: VALIDATION_MODE.onSubmit,\r\n    reValidateMode: VALIDATION_MODE.onChange,\r\n    shouldFocusError: true,\r\n};\r\nfunction createFormControl(props = {}) {\r\n    let _options = {\r\n        ...defaultOptions,\r\n        ...props,\r\n    };\r\n    let _formState = {\r\n        isDirty: false,\r\n        isValidating: false,\r\n        dirtyFields: {},\r\n        isSubmitted: false,\r\n        submitCount: 0,\r\n        touchedFields: {},\r\n        isSubmitting: false,\r\n        isSubmitSuccessful: false,\r\n        isValid: false,\r\n        errors: {},\r\n    };\r\n    let _fields = {};\r\n    let _defaultValues = cloneObject(_options.defaultValues) || {};\r\n    let _formValues = _options.shouldUnregister\r\n        ? {}\r\n        : cloneObject(_defaultValues);\r\n    let _stateFlags = {\r\n        action: false,\r\n        mount: false,\r\n        watch: false,\r\n    };\r\n    let _names = {\r\n        mount: new Set(),\r\n        unMount: new Set(),\r\n        array: new Set(),\r\n        watch: new Set(),\r\n    };\r\n    let delayErrorCallback;\r\n    let timer = 0;\r\n    let validateFields = {};\r\n    const _proxyFormState = {\r\n        isDirty: false,\r\n        dirtyFields: false,\r\n        touchedFields: false,\r\n        isValidating: false,\r\n        isValid: false,\r\n        errors: false,\r\n    };\r\n    const _subjects = {\r\n        watch: createSubject(),\r\n        array: createSubject(),\r\n        state: createSubject(),\r\n    };\r\n    const validationModeBeforeSubmit = getValidationModes(_options.mode);\r\n    const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);\r\n    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;\r\n    const debounce = (callback) => (wait) => {\r\n        clearTimeout(timer);\r\n        timer = window.setTimeout(callback, wait);\r\n    };\r\n    const _updateValid = async (shouldSkipRender) => {\r\n        let isValid = false;\r\n        if (_proxyFormState.isValid) {\r\n            isValid = _options.resolver\r\n                ? isEmptyObject((await _executeSchema()).errors)\r\n                : await executeBuildInValidation(_fields, true);\r\n            if (!shouldSkipRender && isValid !== _formState.isValid) {\r\n                _formState.isValid = isValid;\r\n                _subjects.state.next({\r\n                    isValid,\r\n                });\r\n            }\r\n        }\r\n        return isValid;\r\n    };\r\n    const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {\r\n        if (args && method) {\r\n            _stateFlags.action = true;\r\n            if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {\r\n                const fieldValues = method(get(_fields, name), args.argA, args.argB);\r\n                shouldSetValues && set(_fields, name, fieldValues);\r\n            }\r\n            if (_proxyFormState.errors &&\r\n                shouldUpdateFieldsAndState &&\r\n                Array.isArray(get(_formState.errors, name))) {\r\n                const errors = method(get(_formState.errors, name), args.argA, args.argB);\r\n                shouldSetValues && set(_formState.errors, name, errors);\r\n                unsetEmptyArray(_formState.errors, name);\r\n            }\r\n            if (_proxyFormState.touchedFields &&\r\n                shouldUpdateFieldsAndState &&\r\n                Array.isArray(get(_formState.touchedFields, name))) {\r\n                const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);\r\n                shouldSetValues && set(_formState.touchedFields, name, touchedFields);\r\n            }\r\n            if (_proxyFormState.dirtyFields) {\r\n                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);\r\n            }\r\n            _subjects.state.next({\r\n                isDirty: _getDirty(name, values),\r\n                dirtyFields: _formState.dirtyFields,\r\n                errors: _formState.errors,\r\n                isValid: _formState.isValid,\r\n            });\r\n        }\r\n        else {\r\n            set(_formValues, name, values);\r\n        }\r\n    };\r\n    const updateErrors = (name, error) => {\r\n        set(_formState.errors, name, error);\r\n        _subjects.state.next({\r\n            errors: _formState.errors,\r\n        });\r\n    };\r\n    const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {\r\n        const field = get(_fields, name);\r\n        if (field) {\r\n            const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);\r\n            isUndefined(defaultValue) ||\r\n                (ref && ref.defaultChecked) ||\r\n                shouldSkipSetValueAs\r\n                ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f))\r\n                : setFieldValue(name, defaultValue);\r\n            _stateFlags.mount && _updateValid();\r\n        }\r\n    };\r\n    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {\r\n        let isFieldDirty = false;\r\n        const output = {\r\n            name,\r\n        };\r\n        const isPreviousFieldTouched = get(_formState.touchedFields, name);\r\n        if (_proxyFormState.isDirty) {\r\n            const isPreviousFormDirty = _formState.isDirty;\r\n            _formState.isDirty = output.isDirty = _getDirty();\r\n            isFieldDirty = isPreviousFormDirty !== output.isDirty;\r\n        }\r\n        if (_proxyFormState.dirtyFields && (!isBlurEvent || shouldDirty)) {\r\n            const isPreviousFieldDirty = get(_formState.dirtyFields, name);\r\n            const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);\r\n            isCurrentFieldPristine\r\n                ? unset(_formState.dirtyFields, name)\r\n                : set(_formState.dirtyFields, name, true);\r\n            output.dirtyFields = _formState.dirtyFields;\r\n            isFieldDirty =\r\n                isFieldDirty ||\r\n                    isPreviousFieldDirty !== get(_formState.dirtyFields, name);\r\n        }\r\n        if (isBlurEvent && !isPreviousFieldTouched) {\r\n            set(_formState.touchedFields, name, isBlurEvent);\r\n            output.touchedFields = _formState.touchedFields;\r\n            isFieldDirty =\r\n                isFieldDirty ||\r\n                    (_proxyFormState.touchedFields &&\r\n                        isPreviousFieldTouched !== isBlurEvent);\r\n        }\r\n        isFieldDirty && shouldRender && _subjects.state.next(output);\r\n        return isFieldDirty ? output : {};\r\n    };\r\n    const shouldRenderByError = async (name, isValid, error, fieldState) => {\r\n        const previousFieldError = get(_formState.errors, name);\r\n        const shouldUpdateValid = _proxyFormState.isValid && _formState.isValid !== isValid;\r\n        if (props.delayError && error) {\r\n            delayErrorCallback = debounce(() => updateErrors(name, error));\r\n            delayErrorCallback(props.delayError);\r\n        }\r\n        else {\r\n            clearTimeout(timer);\r\n            delayErrorCallback = null;\r\n            error\r\n                ? set(_formState.errors, name, error)\r\n                : unset(_formState.errors, name);\r\n        }\r\n        if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) ||\r\n            !isEmptyObject(fieldState) ||\r\n            shouldUpdateValid) {\r\n            const updatedFormState = {\r\n                ...fieldState,\r\n                ...(shouldUpdateValid ? { isValid } : {}),\r\n                errors: _formState.errors,\r\n                name,\r\n            };\r\n            _formState = {\r\n                ..._formState,\r\n                ...updatedFormState,\r\n            };\r\n            _subjects.state.next(updatedFormState);\r\n        }\r\n        validateFields[name]--;\r\n        if (_proxyFormState.isValidating &&\r\n            !Object.values(validateFields).some((v) => v)) {\r\n            _subjects.state.next({\r\n                isValidating: false,\r\n            });\r\n            validateFields = {};\r\n        }\r\n    };\r\n    const _executeSchema = async (name) => _options.resolver\r\n        ? await _options.resolver({ ..._formValues }, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation))\r\n        : {};\r\n    const executeSchemaAndUpdateState = async (names) => {\r\n        const { errors } = await _executeSchema();\r\n        if (names) {\r\n            for (const name of names) {\r\n                const error = get(errors, name);\r\n                error\r\n                    ? set(_formState.errors, name, error)\r\n                    : unset(_formState.errors, name);\r\n            }\r\n        }\r\n        else {\r\n            _formState.errors = errors;\r\n        }\r\n        return errors;\r\n    };\r\n    const executeBuildInValidation = async (fields, shouldOnlyCheckValid, context = {\r\n        valid: true,\r\n    }) => {\r\n        for (const name in fields) {\r\n            const field = fields[name];\r\n            if (field) {\r\n                const { _f: fieldReference, ...fieldValue } = field;\r\n                if (fieldReference) {\r\n                    const fieldError = await validateField(field, get(_formValues, fieldReference.name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation);\r\n                    if (fieldError[fieldReference.name]) {\r\n                        context.valid = false;\r\n                        if (shouldOnlyCheckValid) {\r\n                            break;\r\n                        }\r\n                    }\r\n                    if (!shouldOnlyCheckValid) {\r\n                        fieldError[fieldReference.name]\r\n                            ? set(_formState.errors, fieldReference.name, fieldError[fieldReference.name])\r\n                            : unset(_formState.errors, fieldReference.name);\r\n                    }\r\n                }\r\n                fieldValue &&\r\n                    (await executeBuildInValidation(fieldValue, shouldOnlyCheckValid, context));\r\n            }\r\n        }\r\n        return context.valid;\r\n    };\r\n    const _removeUnmounted = () => {\r\n        for (const name of _names.unMount) {\r\n            const field = get(_fields, name);\r\n            field &&\r\n                (field._f.refs\r\n                    ? field._f.refs.every((ref) => !live(ref))\r\n                    : !live(field._f.ref)) &&\r\n                unregister(name);\r\n        }\r\n        _names.unMount = new Set();\r\n    };\r\n    const _getDirty = (name, data) => (name && data && set(_formValues, name, data),\r\n        !deepEqual(getValues(), _defaultValues));\r\n    const _getWatch = (names, defaultValue, isGlobal) => {\r\n        const fieldValues = {\r\n            ...(_stateFlags.mount\r\n                ? _formValues\r\n                : isUndefined(defaultValue)\r\n                    ? _defaultValues\r\n                    : isString(names)\r\n                        ? { [names]: defaultValue }\r\n                        : defaultValue),\r\n        };\r\n        return generateWatchOutput(names, _names, fieldValues, isGlobal);\r\n    };\r\n    const _getFieldArray = (name) => compact(get(_stateFlags.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));\r\n    const setFieldValue = (name, value, options = {}) => {\r\n        const field = get(_fields, name);\r\n        let fieldValue = value;\r\n        if (field) {\r\n            const fieldReference = field._f;\r\n            if (fieldReference) {\r\n                !fieldReference.disabled &&\r\n                    set(_formValues, name, getFieldValueAs(value, fieldReference));\r\n                fieldValue =\r\n                    isWeb && isHTMLElement(fieldReference.ref) && isNullOrUndefined(value)\r\n                        ? ''\r\n                        : value;\r\n                if (isMultipleSelect(fieldReference.ref)) {\r\n                    [...fieldReference.ref.options].forEach((selectRef) => (selectRef.selected = fieldValue.includes(selectRef.value)));\r\n                }\r\n                else if (fieldReference.refs) {\r\n                    if (isCheckBoxInput(fieldReference.ref)) {\r\n                        fieldReference.refs.length > 1\r\n                            ? fieldReference.refs.forEach((checkboxRef) => !checkboxRef.disabled &&\r\n                                (checkboxRef.checked = Array.isArray(fieldValue)\r\n                                    ? !!fieldValue.find((data) => data === checkboxRef.value)\r\n                                    : fieldValue === checkboxRef.value))\r\n                            : fieldReference.refs[0] &&\r\n                                (fieldReference.refs[0].checked = !!fieldValue);\r\n                    }\r\n                    else {\r\n                        fieldReference.refs.forEach((radioRef) => (radioRef.checked = radioRef.value === fieldValue));\r\n                    }\r\n                }\r\n                else if (isFileInput(fieldReference.ref)) {\r\n                    fieldReference.ref.value = '';\r\n                }\r\n                else {\r\n                    fieldReference.ref.value = fieldValue;\r\n                    if (!fieldReference.ref.type) {\r\n                        _subjects.watch.next({\r\n                            name,\r\n                        });\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        (options.shouldDirty || options.shouldTouch) &&\r\n            updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);\r\n        options.shouldValidate && trigger(name);\r\n    };\r\n    const setValues = (name, value, options) => {\r\n        for (const fieldKey in value) {\r\n            const fieldValue = value[fieldKey];\r\n            const fieldName = `${name}.${fieldKey}`;\r\n            const field = get(_fields, fieldName);\r\n            (_names.array.has(name) ||\r\n                !isPrimitive(fieldValue) ||\r\n                (field && !field._f)) &&\r\n                !isDateObject(fieldValue)\r\n                ? setValues(fieldName, fieldValue, options)\r\n                : setFieldValue(fieldName, fieldValue, options);\r\n        }\r\n    };\r\n    const setValue = (name, value, options = {}) => {\r\n        const field = get(_fields, name);\r\n        const isFieldArray = _names.array.has(name);\r\n        const cloneValue = cloneObject(value);\r\n        set(_formValues, name, cloneValue);\r\n        if (isFieldArray) {\r\n            _subjects.array.next({\r\n                name,\r\n                values: _formValues,\r\n            });\r\n            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) &&\r\n                options.shouldDirty) {\r\n                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);\r\n                _subjects.state.next({\r\n                    name,\r\n                    dirtyFields: _formState.dirtyFields,\r\n                    isDirty: _getDirty(name, cloneValue),\r\n                });\r\n            }\r\n        }\r\n        else {\r\n            field && !field._f && !isNullOrUndefined(cloneValue)\r\n                ? setValues(name, cloneValue, options)\r\n                : setFieldValue(name, cloneValue, options);\r\n        }\r\n        isWatched(name, _names) && _subjects.state.next({});\r\n        _subjects.watch.next({\r\n            name,\r\n        });\r\n    };\r\n    const onChange = async (event) => {\r\n        const target = event.target;\r\n        let name = target.name;\r\n        const field = get(_fields, name);\r\n        if (field) {\r\n            let error;\r\n            let isValid;\r\n            const fieldValue = target.type\r\n                ? getFieldValue(field._f)\r\n                : getEventValue(event);\r\n            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;\r\n            const shouldSkipValidation = (!hasValidation(field._f) &&\r\n                !_options.resolver &&\r\n                !get(_formState.errors, name) &&\r\n                !field._f.deps) ||\r\n                skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);\r\n            const watched = isWatched(name, _names, isBlurEvent);\r\n            set(_formValues, name, fieldValue);\r\n            if (isBlurEvent) {\r\n                field._f.onBlur && field._f.onBlur(event);\r\n                delayErrorCallback && delayErrorCallback(0);\r\n            }\r\n            else if (field._f.onChange) {\r\n                field._f.onChange(event);\r\n            }\r\n            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);\r\n            const shouldRender = !isEmptyObject(fieldState) || watched;\r\n            !isBlurEvent &&\r\n                _subjects.watch.next({\r\n                    name,\r\n                    type: event.type,\r\n                });\r\n            if (shouldSkipValidation) {\r\n                return (shouldRender &&\r\n                    _subjects.state.next({ name, ...(watched ? {} : fieldState) }));\r\n            }\r\n            !isBlurEvent && watched && _subjects.state.next({});\r\n            validateFields[name] = validateFields[name] ? +1 : 1;\r\n            _subjects.state.next({\r\n                isValidating: true,\r\n            });\r\n            if (_options.resolver) {\r\n                const { errors } = await _executeSchema([name]);\r\n                const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);\r\n                const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);\r\n                error = errorLookupResult.error;\r\n                name = errorLookupResult.name;\r\n                isValid = isEmptyObject(errors);\r\n            }\r\n            else {\r\n                error = (await validateField(field, get(_formValues, name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];\r\n                isValid = await _updateValid(true);\r\n            }\r\n            field._f.deps &&\r\n                trigger(field._f.deps);\r\n            shouldRenderByError(name, isValid, error, fieldState);\r\n        }\r\n    };\r\n    const trigger = async (name, options = {}) => {\r\n        let isValid;\r\n        let validationResult;\r\n        const fieldNames = convertToArrayPayload(name);\r\n        _subjects.state.next({\r\n            isValidating: true,\r\n        });\r\n        if (_options.resolver) {\r\n            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);\r\n            isValid = isEmptyObject(errors);\r\n            validationResult = name\r\n                ? !fieldNames.some((name) => get(errors, name))\r\n                : isValid;\r\n        }\r\n        else if (name) {\r\n            validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {\r\n                const field = get(_fields, fieldName);\r\n                return await executeBuildInValidation(field && field._f ? { [fieldName]: field } : field);\r\n            }))).every(Boolean);\r\n            !(!validationResult && !_formState.isValid) && _updateValid();\r\n        }\r\n        else {\r\n            validationResult = isValid = await executeBuildInValidation(_fields);\r\n        }\r\n        _subjects.state.next({\r\n            ...(!isString(name) ||\r\n                (_proxyFormState.isValid && isValid !== _formState.isValid)\r\n                ? {}\r\n                : { name }),\r\n            ...(_options.resolver ? { isValid } : {}),\r\n            errors: _formState.errors,\r\n            isValidating: false,\r\n        });\r\n        options.shouldFocus &&\r\n            !validationResult &&\r\n            focusFieldBy(_fields, (key) => get(_formState.errors, key), name ? fieldNames : _names.mount);\r\n        return validationResult;\r\n    };\r\n    const getValues = (fieldNames) => {\r\n        const values = {\r\n            ..._defaultValues,\r\n            ...(_stateFlags.mount ? _formValues : {}),\r\n        };\r\n        return isUndefined(fieldNames)\r\n            ? values\r\n            : isString(fieldNames)\r\n                ? get(values, fieldNames)\r\n                : fieldNames.map((name) => get(values, name));\r\n    };\r\n    const getFieldState = (name, formState) => ({\r\n        invalid: !!get((formState || _formState).errors, name),\r\n        isDirty: !!get((formState || _formState).dirtyFields, name),\r\n        isTouched: !!get((formState || _formState).touchedFields, name),\r\n        error: get((formState || _formState).errors, name),\r\n    });\r\n    const clearErrors = (name) => {\r\n        name\r\n            ? convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName))\r\n            : (_formState.errors = {});\r\n        _subjects.state.next({\r\n            errors: _formState.errors,\r\n        });\r\n    };\r\n    const setError = (name, error, options) => {\r\n        const ref = (get(_fields, name, { _f: {} })._f || {}).ref;\r\n        set(_formState.errors, name, {\r\n            ...error,\r\n            ref,\r\n        });\r\n        _subjects.state.next({\r\n            name,\r\n            errors: _formState.errors,\r\n            isValid: false,\r\n        });\r\n        options && options.shouldFocus && ref && ref.focus && ref.focus();\r\n    };\r\n    const watch = (name, defaultValue) => isFunction(name)\r\n        ? _subjects.watch.subscribe({\r\n            next: (info) => name(_getWatch(undefined, defaultValue), info),\r\n        })\r\n        : _getWatch(name, defaultValue, true);\r\n    const unregister = (name, options = {}) => {\r\n        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {\r\n            _names.mount.delete(fieldName);\r\n            _names.array.delete(fieldName);\r\n            if (get(_fields, fieldName)) {\r\n                if (!options.keepValue) {\r\n                    unset(_fields, fieldName);\r\n                    unset(_formValues, fieldName);\r\n                }\r\n                !options.keepError && unset(_formState.errors, fieldName);\r\n                !options.keepDirty && unset(_formState.dirtyFields, fieldName);\r\n                !options.keepTouched && unset(_formState.touchedFields, fieldName);\r\n                !_options.shouldUnregister &&\r\n                    !options.keepDefaultValue &&\r\n                    unset(_defaultValues, fieldName);\r\n            }\r\n        }\r\n        _subjects.watch.next({});\r\n        _subjects.state.next({\r\n            ..._formState,\r\n            ...(!options.keepDirty ? {} : { isDirty: _getDirty() }),\r\n        });\r\n        !options.keepIsValid && _updateValid();\r\n    };\r\n    const register = (name, options = {}) => {\r\n        let field = get(_fields, name);\r\n        const disabledIsDefined = isBoolean(options.disabled);\r\n        set(_fields, name, {\r\n            _f: {\r\n                ...(field && field._f ? field._f : { ref: { name } }),\r\n                name,\r\n                mount: true,\r\n                ...options,\r\n            },\r\n        });\r\n        _names.mount.add(name);\r\n        field\r\n            ? disabledIsDefined &&\r\n                set(_formValues, name, options.disabled\r\n                    ? undefined\r\n                    : get(_formValues, name, getFieldValue(field._f)))\r\n            : updateValidAndValue(name, true, options.value);\r\n        return {\r\n            ...(disabledIsDefined ? { disabled: options.disabled } : {}),\r\n            ...(_options.shouldUseNativeValidation\r\n                ? {\r\n                    required: !!options.required,\r\n                    min: getRuleValue(options.min),\r\n                    max: getRuleValue(options.max),\r\n                    minLength: getRuleValue(options.minLength),\r\n                    maxLength: getRuleValue(options.maxLength),\r\n                    pattern: getRuleValue(options.pattern),\r\n                }\r\n                : {}),\r\n            name,\r\n            onChange,\r\n            onBlur: onChange,\r\n            ref: (ref) => {\r\n                if (ref) {\r\n                    register(name, options);\r\n                    field = get(_fields, name);\r\n                    const fieldRef = isUndefined(ref.value)\r\n                        ? ref.querySelectorAll\r\n                            ? ref.querySelectorAll('input,select,textarea')[0] || ref\r\n                            : ref\r\n                        : ref;\r\n                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);\r\n                    const refs = field._f.refs || [];\r\n                    if (radioOrCheckbox\r\n                        ? refs.find((option) => option === fieldRef)\r\n                        : fieldRef === field._f.ref) {\r\n                        return;\r\n                    }\r\n                    set(_fields, name, {\r\n                        _f: {\r\n                            ...field._f,\r\n                            ...(radioOrCheckbox\r\n                                ? {\r\n                                    refs: [\r\n                                        ...refs.filter(live),\r\n                                        fieldRef,\r\n                                        ...(!!Array.isArray(get(_defaultValues, name))\r\n                                            ? [{}]\r\n                                            : []),\r\n                                    ],\r\n                                    ref: { type: fieldRef.type, name },\r\n                                }\r\n                                : { ref: fieldRef }),\r\n                        },\r\n                    });\r\n                    updateValidAndValue(name, false, undefined, fieldRef);\r\n                }\r\n                else {\r\n                    field = get(_fields, name, {});\r\n                    if (field._f) {\r\n                        field._f.mount = false;\r\n                    }\r\n                    (_options.shouldUnregister || options.shouldUnregister) &&\r\n                        !(isNameInFieldArray(_names.array, name) && _stateFlags.action) &&\r\n                        _names.unMount.add(name);\r\n                }\r\n            },\r\n        };\r\n    };\r\n    const handleSubmit = (onValid, onInvalid) => async (e) => {\r\n        if (e) {\r\n            e.preventDefault && e.preventDefault();\r\n            e.persist && e.persist();\r\n        }\r\n        let hasNoPromiseError = true;\r\n        let fieldValues = cloneObject(_formValues);\r\n        _subjects.state.next({\r\n            isSubmitting: true,\r\n        });\r\n        try {\r\n            if (_options.resolver) {\r\n                const { errors, values } = await _executeSchema();\r\n                _formState.errors = errors;\r\n                fieldValues = values;\r\n            }\r\n            else {\r\n                await executeBuildInValidation(_fields);\r\n            }\r\n            if (isEmptyObject(_formState.errors)) {\r\n                _subjects.state.next({\r\n                    errors: {},\r\n                    isSubmitting: true,\r\n                });\r\n                await onValid(fieldValues, e);\r\n            }\r\n            else {\r\n                if (onInvalid) {\r\n                    await onInvalid({ ..._formState.errors }, e);\r\n                }\r\n                _options.shouldFocusError &&\r\n                    focusFieldBy(_fields, (key) => get(_formState.errors, key), _names.mount);\r\n            }\r\n        }\r\n        catch (err) {\r\n            hasNoPromiseError = false;\r\n            throw err;\r\n        }\r\n        finally {\r\n            _formState.isSubmitted = true;\r\n            _subjects.state.next({\r\n                isSubmitted: true,\r\n                isSubmitting: false,\r\n                isSubmitSuccessful: isEmptyObject(_formState.errors) && hasNoPromiseError,\r\n                submitCount: _formState.submitCount + 1,\r\n                errors: _formState.errors,\r\n            });\r\n        }\r\n    };\r\n    const resetField = (name, options = {}) => {\r\n        if (get(_fields, name)) {\r\n            if (isUndefined(options.defaultValue)) {\r\n                setValue(name, get(_defaultValues, name));\r\n            }\r\n            else {\r\n                setValue(name, options.defaultValue);\r\n                set(_defaultValues, name, options.defaultValue);\r\n            }\r\n            if (!options.keepTouched) {\r\n                unset(_formState.touchedFields, name);\r\n            }\r\n            if (!options.keepDirty) {\r\n                unset(_formState.dirtyFields, name);\r\n                _formState.isDirty = options.defaultValue\r\n                    ? _getDirty(name, get(_defaultValues, name))\r\n                    : _getDirty();\r\n            }\r\n            if (!options.keepError) {\r\n                unset(_formState.errors, name);\r\n                _proxyFormState.isValid && _updateValid();\r\n            }\r\n            _subjects.state.next({ ..._formState });\r\n        }\r\n    };\r\n    const reset = (formValues, keepStateOptions = {}) => {\r\n        const updatedValues = formValues || _defaultValues;\r\n        const cloneUpdatedValues = cloneObject(updatedValues);\r\n        const values = formValues && !isEmptyObject(formValues)\r\n            ? cloneUpdatedValues\r\n            : _defaultValues;\r\n        if (!keepStateOptions.keepDefaultValues) {\r\n            _defaultValues = updatedValues;\r\n        }\r\n        if (!keepStateOptions.keepValues) {\r\n            if (keepStateOptions.keepDirtyValues) {\r\n                for (const fieldName of _names.mount) {\r\n                    get(_formState.dirtyFields, fieldName)\r\n                        ? set(values, fieldName, get(_formValues, fieldName))\r\n                        : setValue(fieldName, get(values, fieldName));\r\n                }\r\n            }\r\n            else {\r\n                if (isWeb && isUndefined(formValues)) {\r\n                    for (const name of _names.mount) {\r\n                        const field = get(_fields, name);\r\n                        if (field && field._f) {\r\n                            const fieldReference = Array.isArray(field._f.refs)\r\n                                ? field._f.refs[0]\r\n                                : field._f.ref;\r\n                            try {\r\n                                isHTMLElement(fieldReference) &&\r\n                                    fieldReference.closest('form').reset();\r\n                                break;\r\n                            }\r\n                            catch (_a) { }\r\n                        }\r\n                    }\r\n                }\r\n                _fields = {};\r\n            }\r\n            _formValues = props.shouldUnregister\r\n                ? keepStateOptions.keepDefaultValues\r\n                    ? cloneObject(_defaultValues)\r\n                    : {}\r\n                : cloneUpdatedValues;\r\n            _subjects.array.next({\r\n                values,\r\n            });\r\n            _subjects.watch.next({\r\n                values,\r\n            });\r\n        }\r\n        _names = {\r\n            mount: new Set(),\r\n            unMount: new Set(),\r\n            array: new Set(),\r\n            watch: new Set(),\r\n            watchAll: false,\r\n            focus: '',\r\n        };\r\n        _stateFlags.mount =\r\n            !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;\r\n        _stateFlags.watch = !!props.shouldUnregister;\r\n        _subjects.state.next({\r\n            submitCount: keepStateOptions.keepSubmitCount\r\n                ? _formState.submitCount\r\n                : 0,\r\n            isDirty: keepStateOptions.keepDirty || keepStateOptions.keepDirtyValues\r\n                ? _formState.isDirty\r\n                : !!(keepStateOptions.keepDefaultValues &&\r\n                    !deepEqual(formValues, _defaultValues)),\r\n            isSubmitted: keepStateOptions.keepIsSubmitted\r\n                ? _formState.isSubmitted\r\n                : false,\r\n            dirtyFields: keepStateOptions.keepDirty || keepStateOptions.keepDirtyValues\r\n                ? _formState.dirtyFields\r\n                : keepStateOptions.keepDefaultValues && formValues\r\n                    ? getDirtyFields(_defaultValues, formValues)\r\n                    : {},\r\n            touchedFields: keepStateOptions.keepTouched\r\n                ? _formState.touchedFields\r\n                : {},\r\n            errors: keepStateOptions.keepErrors\r\n                ? _formState.errors\r\n                : {},\r\n            isSubmitting: false,\r\n            isSubmitSuccessful: false,\r\n        });\r\n    };\r\n    const setFocus = (name, options = {}) => {\r\n        const field = get(_fields, name)._f;\r\n        const fieldRef = field.refs ? field.refs[0] : field.ref;\r\n        fieldRef.focus();\r\n        options.shouldSelect && fieldRef.select();\r\n    };\r\n    return {\r\n        control: {\r\n            register,\r\n            unregister,\r\n            getFieldState,\r\n            _executeSchema,\r\n            _getWatch,\r\n            _getDirty,\r\n            _updateValid,\r\n            _removeUnmounted,\r\n            _updateFieldArray,\r\n            _getFieldArray,\r\n            _subjects,\r\n            _proxyFormState,\r\n            get _fields() {\r\n                return _fields;\r\n            },\r\n            get _formValues() {\r\n                return _formValues;\r\n            },\r\n            get _stateFlags() {\r\n                return _stateFlags;\r\n            },\r\n            set _stateFlags(value) {\r\n                _stateFlags = value;\r\n            },\r\n            get _defaultValues() {\r\n                return _defaultValues;\r\n            },\r\n            get _names() {\r\n                return _names;\r\n            },\r\n            set _names(value) {\r\n                _names = value;\r\n            },\r\n            get _formState() {\r\n                return _formState;\r\n            },\r\n            set _formState(value) {\r\n                _formState = value;\r\n            },\r\n            get _options() {\r\n                return _options;\r\n            },\r\n            set _options(value) {\r\n                _options = {\r\n                    ..._options,\r\n                    ...value,\r\n                };\r\n            },\r\n        },\r\n        trigger,\r\n        register,\r\n        handleSubmit,\r\n        watch,\r\n        setValue,\r\n        getValues,\r\n        reset,\r\n        resetField,\r\n        clearErrors,\r\n        unregister,\r\n        setError,\r\n        setFocus,\r\n        getFieldState,\r\n    };\r\n}\n\n/**\r\n * Custom hook to mange the entire form.\r\n *\r\n * @remarks\r\n * [API](https://react-hook-form.com/api/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)\r\n *\r\n * @param props - form configuration and validation parameters.\r\n *\r\n * @returns methods - individual functions to manage the form state. {@link UseFormReturn}\r\n *\r\n * @example\r\n * ```tsx\r\n * function App() {\r\n *   const { register, handleSubmit, watch, formState: { errors } } = useForm();\r\n *   const onSubmit = data => console.log(data);\r\n *\r\n *   console.log(watch(\"example\"));\r\n *\r\n *   return (\r\n *     <form onSubmit={handleSubmit(onSubmit)}>\r\n *       <input defaultValue=\"test\" {...register(\"example\")} />\r\n *       <input {...register(\"exampleRequired\", { required: true })} />\r\n *       {errors.exampleRequired && <span>This field is required</span>}\r\n *       <input type=\"submit\" />\r\n *     </form>\r\n *   );\r\n * }\r\n * ```\r\n */\r\nfunction useForm(props = {}) {\r\n    const _formControl = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\r\n    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({\r\n        isDirty: false,\r\n        isValidating: false,\r\n        dirtyFields: {},\r\n        isSubmitted: false,\r\n        submitCount: 0,\r\n        touchedFields: {},\r\n        isSubmitting: false,\r\n        isSubmitSuccessful: false,\r\n        isValid: false,\r\n        errors: {},\r\n    });\r\n    if (_formControl.current) {\r\n        _formControl.current.control._options = props;\r\n    }\r\n    else {\r\n        _formControl.current = {\r\n            ...createFormControl(props),\r\n            formState,\r\n        };\r\n    }\r\n    const control = _formControl.current.control;\r\n    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((value) => {\r\n        if (shouldRenderFormState(value, control._proxyFormState, true)) {\r\n            control._formState = {\r\n                ...control._formState,\r\n                ...value,\r\n            };\r\n            updateFormState({ ...control._formState });\r\n        }\r\n    }, [control]);\r\n    useSubscribe({\r\n        subject: control._subjects.state,\r\n        callback,\r\n    });\r\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\r\n        if (!control._stateFlags.mount) {\r\n            control._proxyFormState.isValid && control._updateValid();\r\n            control._stateFlags.mount = true;\r\n        }\r\n        if (control._stateFlags.watch) {\r\n            control._stateFlags.watch = false;\r\n            control._subjects.state.next({});\r\n        }\r\n        control._removeUnmounted();\r\n    });\r\n    _formControl.current.formState = getProxyFormState(formState, control._proxyFormState);\r\n    return _formControl.current;\r\n}\n\n\n//# sourceMappingURL=index.esm.mjs.map\n\n\n//# sourceURL=webpack:///./node_modules/react-hook-form/dist/index.esm.mjs?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = exports.store = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar PostsList_1 = __webpack_require__(/*! ./shared/Content/PostsList */ \"./src/shared/Content/PostsList/index.ts\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar store_1 = __webpack_require__(/*! ./shared/store/store */ \"./src/shared/store/store.ts\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar hooks_1 = __webpack_require__(/*! ./hooks/hooks */ \"./src/hooks/hooks.ts\");\r\nexports.store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    var dispatch = hooks_1.useAppDispatch();\r\n    var saveToken = function () { return function (dispatch) {\r\n        var token = useToken_1.useToken()[0];\r\n        dispatch(store_1.setToken(token));\r\n    }; };\r\n    dispatch(saveToken());\r\n    return (react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n        react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(Content_1.Content, null,\r\n                react_1.default.createElement(PostsList_1.PostsList, null)))));\r\n}\r\nexports.App = root_1.hot(function () {\r\n    return react_1.default.createElement(react_redux_1.Provider, { store: exports.store },\r\n        react_1.default.createElement(AppComponent, null));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/hooks.ts":
/*!****************************!*\
  !*** ./src/hooks/hooks.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useAppSelector = exports.useAppDispatch = void 0;\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nexports.useAppDispatch = react_redux_1.useDispatch;\r\nexports.useAppSelector = react_redux_1.useSelector;\r\n\n\n//# sourceURL=webpack:///./src/hooks/hooks.ts?");

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction useToken() {\r\n    var token = '';\r\n    if (typeof window !== 'undefined') {\r\n        // localStorage.clear();\r\n        if (localStorage.getItem('token') !== 'undefined') {\r\n            token = localStorage.getItem('token') || window.__token__;\r\n        }\r\n        else {\r\n            token = window.__token__;\r\n        }\r\n        react_1.useEffect(function () {\r\n            if (token && token.length > 0 && token !== 'undefined') {\r\n                localStorage.setItem('token', token);\r\n            }\r\n        }, [token]);\r\n    }\r\n    // const [token, setToken] = useState('');\r\n    // useEffect(() => {\r\n    //   if (window.__token__) {\r\n    //       setToken(window.__token__);\r\n    //   }\r\n    // }, []);\r\n    return [token];\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar actions_1 = __webpack_require__(/*! ../shared/store/me/actions */ \"./src/shared/store/me/actions.ts\");\r\nvar hooks_1 = __webpack_require__(/*! ./hooks */ \"./src/hooks/hooks.ts\");\r\nfunction useUserData() {\r\n    // const data = useSelector<RootState, IUserData>(state => state.me.data);\r\n    var data = hooks_1.useAppSelector(function (state) { return state.me.data; });\r\n    // const loading = useSelector<RootState, boolean>(state => state.me.loading);\r\n    var loading = hooks_1.useAppSelector(function (state) { return state.me.loading; });\r\n    // const token = useSelector<RootState, string | undefined>(state => state.token);\r\n    var token = hooks_1.useAppSelector(function (state) { return state.token; });\r\n    var dispatch = hooks_1.useAppDispatch();\r\n    // const dispatch: any = useDispatch();\r\n    react_1.useEffect(function () {\r\n        if (!token)\r\n            return;\r\n        dispatch(actions_1.meRequestAsync());\r\n    }, [token]);\r\n    return {\r\n        data: data,\r\n        loading: loading\r\n    };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <script >\\n      const token = '\" + token + \"';\\n      window.__token__ = token;\\n      if (token && token.length > 0 && token !== 'undefined') {\\n        localStorage.setItem('token', token);\\n      }\\n    </script>\\n    <title>Reddit</title>\\n</head>\\n<body>\\n    <div id=\\\"react_root\\\">\" + content + \"</div>\\n    <div id=\\\"modal_root\\\"></div>\\n    <div id=\\\"dropdown_root\\\"></div>\\n</body>\\n</html>\\n\"; };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.get('/auth', function (req, res) {\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + req.query.code + \"&redirect_uri=http://localhost:3000/auth\", {\r\n        auth: { username: '2alpekdjsqhwgCDAvSa4uQ', password: 'xDWtvCgLgDlZ1EuSuJ27lmHqf5WkEQ' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n    });\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started in http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\r\n// type Props = {\r\n//   value: string | undefined;\r\n//   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;\r\n//   onSubmit: (event: FormEvent) => void;\r\n// }\r\n// export function CommentForm({ value, onChange, onSubmit }: Props) {\r\n//   return (\r\n//     <form className={styles.form} onSubmit={onSubmit}>\r\n//       <textarea className={styles.input} value={value} onChange={onChange} />\r\n//       <button type='submit' className={styles.button}>Комментировать</button>\r\n//     </form>\r\n//   );\r\n// }\r\nfunction CommentForm() {\r\n    // const [value, setValue] = useState('');\r\n    // const [touched, setTouched] = useState(false);\r\n    // const [valueError, setValueError] = useState('');\r\n    // function handleSubmit(event: FormEvent) {\r\n    //   event.preventDefault();\r\n    //   setTouched(true);\r\n    //   setValueError(validateValue());\r\n    //   const isFormValid = !validateValue();\r\n    //   if (!isFormValid) return;\r\n    //   alert('Форма отправлена');\r\n    // }\r\n    // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {\r\n    //   setValue(event.target.value);\r\n    // }\r\n    // function validateValue() {\r\n    //   if (value.length <=3) return 'Введите больше 3-х символов';\r\n    //   return '';\r\n    // }\r\n    // return (\r\n    //   <form className={styles.form} onSubmit={handleSubmit}>\r\n    //     <textarea\r\n    //       className={styles.input}\r\n    //       value={value}\r\n    //       onChange={handleChange}\r\n    //       aria-invalid={valueError ? 'true' : undefined}\r\n    //     />\r\n    //     {\r\n    //       touched &&\r\n    //       valueError &&\r\n    //       (\r\n    //         <div>{valueError}</div>\r\n    //       )\r\n    //     }\r\n    //     <button type='submit' className={styles.button} >Комментировать</button>\r\n    //   </form>\r\n    // );\r\n    // const [valueError, setValueError] = useState(false);\r\n    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit, errors = _a.formState.errors;\r\n    var onSubmit = function (data) {\r\n        console.log(data);\r\n    };\r\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: handleSubmit(onSubmit) },\r\n        react_1.default.createElement(\"textarea\", __assign({ className: commentform_css_1.default.input, \"aria-invalid\": errors.newComment ? 'true' : undefined }, register('newComment', { required: true, minLength: 4 }))),\r\n        errors.newComment && react_1.default.createElement(\"p\", null, \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0431\\u043E\\u043B\\u044C\\u0448\\u0435 3-\\u0445 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432\"),\r\n        react_1.default.createElement(\"button\", { type: 'submit', className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentform.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentform__form--Cs1Oi\",\n\t\"input\": \"commentform__input--2fC-z\",\n\t\"button\": \"commentform__button--35eLT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store_1 = __webpack_require__(/*! ../store/store */ \"./src/shared/store/store.ts\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\");\r\nfunction CommentFormContainer() {\r\n    var value = react_redux_1.useSelector(function (state) { return state.commentText; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleChange(event) {\r\n        dispatch(store_1.updateComment(event.target.value));\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        console.log(value);\r\n    }\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm\r\n    // value={value}\r\n    // onChange={handleChange}\r\n    // onSubmit={handleSubmit}\r\n    , null));\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CommentFormContainer/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/CommentFormContainer/CommentFormContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/index.ts?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BodyDropdown = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar bodydropdown_css_1 = __importDefault(__webpack_require__(/*! ./bodydropdown.css */ \"./src/shared/Dropdown/BodyDropdown/bodydropdown.css\"));\r\nvar MenuItemsList_1 = __webpack_require__(/*! ../../Content/PostsList/Menu/MenuItemsList */ \"./src/shared/Content/PostsList/Menu/MenuItemsList/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\r\nvar Text_2 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\r\nfunction BodyDropdown(_a) {\r\n    var onClose = _a.onClose;\r\n    var ref = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                onClose === null || onClose === void 0 ? void 0 : onClose();\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    return (react_1.default.createElement(\"div\", { className: bodydropdown_css_1.default.dropdown, ref: ref },\r\n        react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: 'test' }),\r\n        react_1.default.createElement(\"button\", { className: bodydropdown_css_1.default.closeButton },\r\n            react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: Text_2.EColor.grey66 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))));\r\n}\r\nexports.BodyDropdown = BodyDropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/BodyDropdown/BodyDropdown.tsx?");

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
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar BodyDropdown_1 = __webpack_require__(/*! ./BodyDropdown */ \"./src/shared/Dropdown/BodyDropdown/index.ts\");\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar react_popper_1 = __webpack_require__(/*! react-popper */ \"react-popper\");\r\nfunction Dropdown(_a) {\r\n    var button = _a.button;\r\n    var _b = react_1.default.useState(false), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];\r\n    var _c = react_1.useState(null), idElement = _c[0], setIdElement = _c[1];\r\n    var node = document.getElementById('dropdown_root');\r\n    if (!node)\r\n        return null;\r\n    var _d = react_1.useState(null), referenceElement = _d[0], setReferenceElement = _d[1];\r\n    var _e = react_1.useState(null), popperElement = _e[0], setPopperElement = _e[1];\r\n    var _f = react_popper_1.usePopper(referenceElement, popperElement, {\r\n        placement: \"bottom\",\r\n        modifiers: [\r\n            {\r\n                name: \"offset\",\r\n                enabled: true,\r\n                options: {\r\n                    offset: [0, 10]\r\n                }\r\n            }\r\n        ]\r\n    }), styles = _f.styles, attributes = _f.attributes;\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"div\", { ref: setReferenceElement, onClick: function (event) {\r\n                setIsDropdownOpen(!isDropdownOpen);\r\n                // //получаем текущую кнопку меню по которой нажали\r\n                // const buttonMenu = (event.target as HTMLElement).closest('button');\r\n                // if (!buttonMenu) return;\r\n                // //получаем пост к которой принадлежит кнопка\r\n                // const currentPost = buttonMenu.parentElement?.parentElement?.parentElement?.parentElement;\r\n                // const idPost = currentPost?.id;\r\n                // setIdElement(idPost);\r\n            } }, button),\r\n        isDropdownOpen && (react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"div\", { onClick: function () { return setIsDropdownOpen(false); } }, react_dom_1.default.createPortal(react_1.default.createElement(\"div\", __assign({ ref: setPopperElement, style: styles.popper }, attributes.popper),\r\n                react_1.default.createElement(BodyDropdown_1.BodyDropdown, { onClose: function () { setIsDropdownOpen(false); } })), node))))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nfunction SearchBlock() {\r\n    var _a = useUserData_1.useUserData(), data = _a.data, loading = _a.loading;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ./../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar Text_1 = __webpack_require__(/*! ./../../../Text */ \"./src/shared/Text/index.ts\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=2alpekdjsqhwgCDAvSa4uQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.anon, size: 50, color: '#D9D9D9' })),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username }, loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: Text_1.EColor.grey99 }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Аноним')))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar Comments_1 = __webpack_require__(/*! ./Comments */ \"./src/shared/Post/Comments/index.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\r\nfunction Post(props) {\r\n    var ref = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a, _b;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.getElementById('modal_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", null, \"\\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u0435\\u043B\\u044C \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438 \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u0442\"),\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\r\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam officia corrupti, neque, fuga ipsa vel quas explicabo quisquam ratione nihil inventore illo commodi quia deleniti qui adipisci assumenda? Distinctio, eos.\"),\r\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iure facilis pariatur, aliquid esse architecto illum, dolor temporibus facere, perferendis autem tenetur commodi odit aut quod explicabo quisquam reiciendis soluta!\"),\r\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi ipsum eos possimus ratione ipsam cupiditate, iste repellendus dicta, maiores quos aperiam hic corporis. Libero facilis suscipit optio similique? Ratione?\")),\r\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null),\r\n        react_1.default.createElement(Comments_1.Comments, null))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

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

/***/ "./src/shared/store/me/actions.ts":
/*!****************************************!*\
  !*** ./src/shared/store/me/actions.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST,\r\n}); };\r\nexports.meRequest = meRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error\r\n}); };\r\nexports.meRequestError = meRequestError;\r\nvar meRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch(exports.meRequest());\r\n    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n        headers: { Authorization: \"bearer \" + getState().token },\r\n        params: { raw_json: 1 },\r\n    })\r\n        .then(function (resp) {\r\n        var userData = resp.data;\r\n        dispatch(exports.meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));\r\n    })\r\n        .catch(function (error) {\r\n        //очищаю хранилище от токена, если пригла ошибка, для того чтобы снова перелогиниться\r\n        localStorage.clear();\r\n        console.log(error);\r\n        dispatch(exports.meRequestError(String(error)));\r\n    });\r\n}; };\r\nexports.meRequestAsync = meRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/shared/store/me/actions.ts?");

/***/ }),

/***/ "./src/shared/store/me/reducer.ts":
/*!****************************************!*\
  !*** ./src/shared/store/me/reducer.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/shared/store/me/actions.ts\");\r\nvar meReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case actions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true, fetchingState: 'requesting' });\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false, fetchingState: 'error' });\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false, fetchingState: 'success' });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/shared/store/me/reducer.ts?");

/***/ }),

/***/ "./src/shared/store/store.ts":
/*!***********************************!*\
  !*** ./src/shared/store/store.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.setToken = exports.updateComment = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/shared/store/me/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/shared/store/me/reducer.ts\");\r\nvar initialState = {\r\n    commentText: 'Привет, SkillBox!',\r\n    token: '',\r\n    me: {\r\n        loading: false,\r\n        error: '',\r\n        data: {},\r\n        fetchingState: 'none',\r\n    },\r\n};\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar TOKEN = 'SET_TOKEN';\r\nvar updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text,\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar setToken = function (token) { return ({\r\n    type: TOKEN,\r\n    token: token,\r\n}); };\r\nexports.setToken = setToken;\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case TOKEN:\r\n            return __assign(__assign({}, state), { token: action.token });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/shared/store/store.ts?");

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

/***/ "react-popper":
/*!*******************************!*\
  !*** external "react-popper" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-popper\");\n\n//# sourceURL=webpack:///external_%22react-popper%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });