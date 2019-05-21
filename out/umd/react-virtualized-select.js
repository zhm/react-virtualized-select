!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory(require("react"), require("react-dom")) : "function" == typeof define && define.amd ? define([ "react", "react-dom" ], factory) : "object" == typeof exports ? exports.VirtualizedSelect = factory(require("react"), require("react-dom")) : root.VirtualizedSelect = factory(root.React, root.ReactDOM);
}(this, function(__WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_16__) {
    /******/
    return function(modules) {
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId]) /******/
            return installedModules[moduleId].exports;
            /******/
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                exports: {},
                /******/
                id: moduleId,
                /******/
                loaded: !1
            };
            /******/
            /******/
            // Return the exports of the module
            /******/
            /******/
            /******/
            // Execute the module function
            /******/
            /******/
            /******/
            // Flag the module as loaded
            /******/
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.loaded = !0, module.exports;
        }
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // Load entry module and return exports
        /******/
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        /******/
        /******/
        // expose the module cache
        /******/
        /******/
        /******/
        // __webpack_public_path__
        /******/
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.p = "", __webpack_require__(0);
    }([ /* 0 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var _VirtualizedSelect = __webpack_require__(1), _VirtualizedSelect2 = _interopRequireDefault(_VirtualizedSelect);
        exports.default = _VirtualizedSelect2.default;
    }, /* 1 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var _VirtualizedSelect = __webpack_require__(2), _VirtualizedSelect2 = _interopRequireDefault(_VirtualizedSelect);
        exports.default = _VirtualizedSelect2.default;
    }, /* 2 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _jsx = function() {
            var REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
            return function(type, props, key, children) {
                var defaultProps = type && type.defaultProps, childrenLength = arguments.length - 3;
                if (props || 0 === childrenLength || (props = {}), props && defaultProps) for (var propName in defaultProps) void 0 === props[propName] && (props[propName] = defaultProps[propName]); else props || (props = defaultProps || {});
                if (1 === childrenLength) props.children = children; else if (childrenLength > 1) {
                    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 3];
                    props.children = childArray;
                }
                return {
                    $$typeof: REACT_ELEMENT_TYPE,
                    type: type,
                    key: void 0 === key ? null : "" + key,
                    ref: null,
                    props: props,
                    _owner: null
                };
            };
        }(), _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _propTypes = __webpack_require__(3), _propTypes2 = _interopRequireDefault(_propTypes), _react = __webpack_require__(13), _react2 = _interopRequireDefault(_react), _reactSelect = __webpack_require__(14), _reactSelect2 = _interopRequireDefault(_reactSelect), _AutoSizer = __webpack_require__(29), _AutoSizer2 = _interopRequireDefault(_AutoSizer), _List = __webpack_require__(40), _List2 = _interopRequireDefault(_List), VirtualizedSelect = function(_Component) {
            function VirtualizedSelect(props, context) {
                _classCallCheck(this, VirtualizedSelect);
                var _this = _possibleConstructorReturn(this, (VirtualizedSelect.__proto__ || Object.getPrototypeOf(VirtualizedSelect)).call(this, props, context));
                return _this._renderMenu = _this._renderMenu.bind(_this), _this._optionRenderer = _this._optionRenderer.bind(_this), 
                _this._setListRef = _this._setListRef.bind(_this), _this._setSelectRef = _this._setSelectRef.bind(_this), 
                _this;
            }
            return _inherits(VirtualizedSelect, _Component), _createClass(VirtualizedSelect, [ {
                key: "recomputeOptionHeights",
                value: function() {
                    var index = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this._listRef && this._listRef.recomputeRowHeights(index);
                }
            }, {
                key: "focus",
                value: function() {
                    if (this._selectRef) return this._selectRef.focus();
                }
            }, {
                key: "render",
                value: function() {
                    var SelectComponent = this._getSelectComponent();
                    return _react2.default.createElement(SelectComponent, _extends({}, this.props, {
                        ref: this._setSelectRef,
                        menuRenderer: this._renderMenu,
                        menuStyle: {
                            overflow: "hidden"
                        }
                    }));
                }
            }, {
                key: "_renderMenu",
                value: function(_ref) {
                    function wrappedRowRenderer(_ref2) {
                        var index = _ref2.index, key = _ref2.key, style = _ref2.style, option = options[index];
                        return innerRowRenderer({
                            focusedOption: focusedOption,
                            focusedOptionIndex: focusedOptionIndex,
                            focusOption: focusOption,
                            key: key,
                            labelKey: labelKey,
                            onSelect: onSelect,
                            option: option,
                            optionIndex: index,
                            options: options,
                            selectValue: onSelect,
                            style: style,
                            valueArray: valueArray,
                            valueKey: valueKey
                        });
                    }
                    var _this2 = this, focusedOption = _ref.focusedOption, focusOption = _ref.focusOption, labelKey = _ref.labelKey, onSelect = _ref.onSelect, options = _ref.options, valueArray = (_ref.selectValue, 
                    _ref.valueArray), valueKey = _ref.valueKey, _props = this.props, listProps = _props.listProps, optionRenderer = _props.optionRenderer, focusedOptionIndex = options.indexOf(focusedOption), height = this._calculateListHeight({
                        options: options
                    }), innerRowRenderer = optionRenderer || this._optionRenderer;
                    return _jsx(_AutoSizer2.default, {
                        disableHeight: !0
                    }, void 0, function(_ref3) {
                        var width = _ref3.width;
                        return _react2.default.createElement(_List2.default, _extends({
                            className: "VirtualSelectGrid",
                            height: height,
                            ref: _this2._setListRef,
                            rowCount: options.length,
                            rowHeight: function(_ref4) {
                                var index = _ref4.index;
                                return _this2._getOptionHeight({
                                    option: options[index]
                                });
                            },
                            rowRenderer: wrappedRowRenderer,
                            scrollToIndex: focusedOptionIndex,
                            width: width
                        }, listProps));
                    });
                }
            }, {
                key: "_calculateListHeight",
                value: function(_ref5) {
                    for (var options = _ref5.options, maxHeight = this.props.maxHeight, height = 0, optionIndex = 0; optionIndex < options.length; optionIndex++) {
                        var option = options[optionIndex];
                        if (height += this._getOptionHeight({
                            option: option
                        }), height > maxHeight) return maxHeight;
                    }
                    return height;
                }
            }, {
                key: "_getOptionHeight",
                value: function(_ref6) {
                    var option = _ref6.option, optionHeight = this.props.optionHeight;
                    return optionHeight instanceof Function ? optionHeight({
                        option: option
                    }) : optionHeight;
                }
            }, {
                key: "_getSelectComponent",
                value: function() {
                    var _props2 = this.props, async = _props2.async, selectComponent = _props2.selectComponent;
                    return selectComponent ? selectComponent : async ? _reactSelect2.default.Async : _reactSelect2.default;
                }
            }, {
                key: "_optionRenderer",
                value: function(_ref7) {
                    var focusedOption = _ref7.focusedOption, focusOption = _ref7.focusOption, key = _ref7.key, labelKey = _ref7.labelKey, option = _ref7.option, selectValue = _ref7.selectValue, style = _ref7.style, valueArray = _ref7.valueArray, className = [ "VirtualizedSelectOption" ];
                    option === focusedOption && className.push("VirtualizedSelectFocusedOption"), option.disabled && className.push("VirtualizedSelectDisabledOption"), 
                    valueArray && valueArray.indexOf(option) >= 0 && className.push("VirtualizedSelectSelectedOption"), 
                    option.className && className.push(option.className);
                    var events = option.disabled ? {} : {
                        onClick: function() {
                            return selectValue(option);
                        },
                        onMouseEnter: function() {
                            return focusOption(option);
                        }
                    };
                    return _react2.default.createElement("div", _extends({
                        className: className.join(" "),
                        key: key,
                        style: style,
                        title: option.title
                    }, events), option[labelKey]);
                }
            }, {
                key: "_setListRef",
                value: function(ref) {
                    this._listRef = ref;
                }
            }, {
                key: "_setSelectRef",
                value: function(ref) {
                    this._selectRef = ref;
                }
            } ]), VirtualizedSelect;
        }(_react.Component);
        VirtualizedSelect.propTypes = {
            async: _propTypes2.default.bool,
            listProps: _propTypes2.default.object,
            maxHeight: _propTypes2.default.number,
            optionHeight: _propTypes2.default.oneOfType([ _propTypes2.default.number, _propTypes2.default.func ]),
            optionRenderer: _propTypes2.default.func,
            selectComponent: _propTypes2.default.func
        }, VirtualizedSelect.defaultProps = {
            async: !1,
            maxHeight: 200,
            optionHeight: 35
        }, exports.default = VirtualizedSelect;
    }, /* 3 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
            if ("production" !== process.env.NODE_ENV) {
                var REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, isValidElement = function(object) {
                    return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
                }, throwOnDirectAccess = !0;
                module.exports = __webpack_require__(5)(isValidElement, throwOnDirectAccess);
            } else // By explicitly using `prop-types` you are opting into new production behavior.
            // http://fb.me/prop-types-in-prod
            module.exports = __webpack_require__(12)();
        }).call(exports, __webpack_require__(4));
    }, /* 4 */
    /***/
    function(module, exports) {
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
        }
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
            return setTimeout(fun, 0);
            // if setTimeout wasn't available but was latter defined
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, 
            setTimeout(fun, 0);
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
            return clearTimeout(marker);
            // if clearTimeout wasn't available but was latter defined
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, 
            clearTimeout(marker);
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                    // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                    return cachedClearTimeout.call(this, marker);
                }
            }
        }
        function cleanUpNextTick() {
            draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, 
            queue.length && drainQueue());
        }
        function drainQueue() {
            if (!draining) {
                var timeout = runTimeout(cleanUpNextTick);
                draining = !0;
                for (var len = queue.length; len; ) {
                    for (currentQueue = queue, queue = []; ++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1, len = queue.length;
                }
                currentQueue = null, draining = !1, runClearTimeout(timeout);
            }
        }
        // v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun, this.array = array;
        }
        function noop() {}
        // shim for using process in browser
        var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
        !function() {
            try {
                cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }();
        var currentQueue, queue = [], draining = !1, queueIndex = -1;
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
            queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
        }, Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], 
        process.version = "", // empty string to avoid regexp issues
        process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, 
        process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, 
        process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, 
        process.listeners = function(name) {
            return [];
        }, process.binding = function(name) {
            throw new Error("process.binding is not supported");
        }, process.cwd = function() {
            return "/";
        }, process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        }, process.umask = function() {
            return 0;
        };
    }, /* 5 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
            "use strict";
            var emptyFunction = __webpack_require__(6), invariant = __webpack_require__(7), warning = __webpack_require__(8), assign = __webpack_require__(9), ReactPropTypesSecret = __webpack_require__(10), checkPropTypes = __webpack_require__(11);
            module.exports = function(isValidElement, throwOnDirectAccess) {
                // Before Symbol spec.
                /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
                function getIteratorFn(maybeIterable) {
                    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                    if ("function" == typeof iteratorFn) return iteratorFn;
                }
                /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
                /*eslint-disable no-self-compare*/
                function is(x, y) {
                    // SameValue algorithm
                    // SameValue algorithm
                    return x === y ? 0 !== x || 1 / x === 1 / y : x !== x && y !== y;
                }
                /*eslint-enable no-self-compare*/
                /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
                function PropTypeError(message) {
                    this.message = message, this.stack = "";
                }
                function createChainableTypeChecker(validate) {
                    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                        if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, 
                        secret !== ReactPropTypesSecret) if (throwOnDirectAccess) // New behavior only for users of `prop-types` package
                        invariant(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"); else if ("production" !== process.env.NODE_ENV && "undefined" != typeof console) {
                            // Old behavior for people using React.PropTypes
                            var cacheKey = componentName + ":" + propName;
                            !manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                            manualPropTypeWarningCount < 3 && (warning(!1, "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.", propFullName, componentName), 
                            manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
                        }
                        return null == props[propName] ? isRequired ? new PropTypeError(null === props[propName] ? "The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`.") : "The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`.")) : null : validate(props, propName, componentName, location, propFullName);
                    }
                    if ("production" !== process.env.NODE_ENV) var manualPropTypeCallCache = {}, manualPropTypeWarningCount = 0;
                    var chainedCheckType = checkType.bind(null, !1);
                    return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
                }
                function createPrimitiveTypeChecker(expectedType) {
                    function validate(props, propName, componentName, location, propFullName, secret) {
                        var propValue = props[propName], propType = getPropType(propValue);
                        if (propType !== expectedType) {
                            // `propValue` being instance of, say, date/regexp, pass the 'object'
                            // check, but we can offer a more precise error message here rather than
                            // 'of type `object`'.
                            var preciseType = getPreciseType(propValue);
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createAnyTypeChecker() {
                    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
                }
                function createArrayOfTypeChecker(typeChecker) {
                    function validate(props, propName, componentName, location, propFullName) {
                        if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                        var propValue = props[propName];
                        if (!Array.isArray(propValue)) {
                            var propType = getPropType(propValue);
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
                        }
                        for (var i = 0; i < propValue.length; i++) {
                            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                            if (error instanceof Error) return error;
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createElementTypeChecker() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!isValidElement(propValue)) {
                            var propType = getPropType(propValue);
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createInstanceTypeChecker(expectedClass) {
                    function validate(props, propName, componentName, location, propFullName) {
                        if (!(props[propName] instanceof expectedClass)) {
                            var expectedClassName = expectedClass.name || ANONYMOUS, actualClassName = getClassName(props[propName]);
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createEnumTypeChecker(expectedValues) {
                    function validate(props, propName, componentName, location, propFullName) {
                        for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
                        var valuesString = JSON.stringify(expectedValues);
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + propValue + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
                    }
                    return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : ("production" !== process.env.NODE_ENV ? warning(!1, "Invalid argument supplied to oneOf, expected an instance of array.") : void 0, 
                    emptyFunction.thatReturnsNull);
                }
                function createObjectOfTypeChecker(typeChecker) {
                    function validate(props, propName, componentName, location, propFullName) {
                        if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                        var propValue = props[propName], propType = getPropType(propValue);
                        if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
                        for (var key in propValue) if (propValue.hasOwnProperty(key)) {
                            var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                            if (error instanceof Error) return error;
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createUnionTypeChecker(arrayOfTypeCheckers) {
                    function validate(props, propName, componentName, location, propFullName) {
                        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                            var checker = arrayOfTypeCheckers[i];
                            if (null == checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
                        }
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
                    }
                    if (!Array.isArray(arrayOfTypeCheckers)) return "production" !== process.env.NODE_ENV ? warning(!1, "Invalid argument supplied to oneOfType, expected an instance of array.") : void 0, 
                    emptyFunction.thatReturnsNull;
                    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                        var checker = arrayOfTypeCheckers[i];
                        if ("function" != typeof checker) return warning(!1, "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.", getPostfixForTypeWarning(checker), i), 
                        emptyFunction.thatReturnsNull;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createNodeChecker() {
                    function validate(props, propName, componentName, location, propFullName) {
                        return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
                    }
                    return createChainableTypeChecker(validate);
                }
                function createShapeTypeChecker(shapeTypes) {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName], propType = getPropType(propValue);
                        if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                        for (var key in shapeTypes) {
                            var checker = shapeTypes[key];
                            if (checker) {
                                var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                                if (error) return error;
                            }
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createStrictShapeTypeChecker(shapeTypes) {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName], propType = getPropType(propValue);
                        if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                        // We need to check all keys in case some are required but missing from
                        // props.
                        var allKeys = assign({}, props[propName], shapeTypes);
                        for (var key in allKeys) {
                            var checker = shapeTypes[key];
                            if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
                            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                            if (error) return error;
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function isNode(propValue) {
                    switch (typeof propValue) {
                      case "number":
                      case "string":
                      case "undefined":
                        return !0;

                      case "boolean":
                        return !propValue;

                      case "object":
                        if (Array.isArray(propValue)) return propValue.every(isNode);
                        if (null === propValue || isValidElement(propValue)) return !0;
                        var iteratorFn = getIteratorFn(propValue);
                        if (!iteratorFn) return !1;
                        var step, iterator = iteratorFn.call(propValue);
                        if (iteratorFn !== propValue.entries) {
                            for (;!(step = iterator.next()).done; ) if (!isNode(step.value)) return !1;
                        } else // Iterator will provide entry [k,v] tuples rather than values.
                        for (;!(step = iterator.next()).done; ) {
                            var entry = step.value;
                            if (entry && !isNode(entry[1])) return !1;
                        }
                        return !0;

                      default:
                        return !1;
                    }
                }
                function isSymbol(propType, propValue) {
                    // Native Symbol.
                    // Native Symbol.
                    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
                    return "symbol" === propType || ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
                }
                // Equivalent of `typeof` but with special handling for array and regexp.
                function getPropType(propValue) {
                    var propType = typeof propValue;
                    return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
                }
                // This handles more types than `getPropType`. Only used for error messages.
                // See `createPrimitiveTypeChecker`.
                function getPreciseType(propValue) {
                    if ("undefined" == typeof propValue || null === propValue) return "" + propValue;
                    var propType = getPropType(propValue);
                    if ("object" === propType) {
                        if (propValue instanceof Date) return "date";
                        if (propValue instanceof RegExp) return "regexp";
                    }
                    return propType;
                }
                // Returns a string that is postfixed to a warning about an invalid type.
                // For example, "undefined" or "of type array"
                function getPostfixForTypeWarning(value) {
                    var type = getPreciseType(value);
                    switch (type) {
                      case "array":
                      case "object":
                        return "an " + type;

                      case "boolean":
                      case "date":
                      case "regexp":
                        return "a " + type;

                      default:
                        return type;
                    }
                }
                // Returns class name of the object, if any.
                function getClassName(propValue) {
                    return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
                }
                /* global Symbol */
                var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator", ANONYMOUS = "<<anonymous>>", ReactPropTypes = {
                    array: createPrimitiveTypeChecker("array"),
                    bool: createPrimitiveTypeChecker("boolean"),
                    func: createPrimitiveTypeChecker("function"),
                    number: createPrimitiveTypeChecker("number"),
                    object: createPrimitiveTypeChecker("object"),
                    string: createPrimitiveTypeChecker("string"),
                    symbol: createPrimitiveTypeChecker("symbol"),
                    any: createAnyTypeChecker(),
                    arrayOf: createArrayOfTypeChecker,
                    element: createElementTypeChecker(),
                    instanceOf: createInstanceTypeChecker,
                    node: createNodeChecker(),
                    objectOf: createObjectOfTypeChecker,
                    oneOf: createEnumTypeChecker,
                    oneOfType: createUnionTypeChecker,
                    shape: createShapeTypeChecker,
                    exact: createStrictShapeTypeChecker
                };
                // Make `instanceof Error` still work for returned errors.
                return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes, 
                ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
            };
        }).call(exports, __webpack_require__(4));
    }, /* 6 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
        function makeEmptyFunction(arg) {
            return function() {
                return arg;
            };
        }
        /**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
        var emptyFunction = function() {};
        emptyFunction.thatReturns = makeEmptyFunction, emptyFunction.thatReturnsFalse = makeEmptyFunction(!1), 
        emptyFunction.thatReturnsTrue = makeEmptyFunction(!0), emptyFunction.thatReturnsNull = makeEmptyFunction(null), 
        emptyFunction.thatReturnsThis = function() {
            return this;
        }, emptyFunction.thatReturnsArgument = function(arg) {
            return arg;
        }, module.exports = emptyFunction;
    }, /* 7 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
            "use strict";
            function invariant(condition, format, a, b, c, d, e, f) {
                if (validateFormat(format), !condition) {
                    var error;
                    if (void 0 === format) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                        var args = [ a, b, c, d, e, f ], argIndex = 0;
                        error = new Error(format.replace(/%s/g, function() {
                            return args[argIndex++];
                        })), error.name = "Invariant Violation";
                    }
                    // we don't care about invariant's own frame
                    throw error.framesToPop = 1, error;
                }
            }
            /**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
            var validateFormat = function(format) {};
            "production" !== process.env.NODE_ENV && (validateFormat = function(format) {
                if (void 0 === format) throw new Error("invariant requires an error message argument");
            }), module.exports = invariant;
        }).call(exports, __webpack_require__(4));
    }, /* 8 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            /**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
            "use strict";
            var emptyFunction = __webpack_require__(6), warning = emptyFunction;
            if ("production" !== process.env.NODE_ENV) {
                var printWarning = function(format) {
                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
                    var argIndex = 0, message = "Warning: " + format.replace(/%s/g, function() {
                        return args[argIndex++];
                    });
                    "undefined" != typeof console && console.error(message);
                    try {
                        // --- Welcome to debugging React ---
                        // This error was thrown as a convenience so that you can use this stack
                        // to find the callsite that caused this warning to fire.
                        throw new Error(message);
                    } catch (x) {}
                };
                warning = function(condition, format) {
                    if (void 0 === format) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
                    if (0 !== format.indexOf("Failed Composite propType: ") && !condition) {
                        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) args[_key2 - 2] = arguments[_key2];
                        printWarning.apply(void 0, [ format ].concat(args));
                    }
                };
            }
            module.exports = warning;
        }).call(exports, __webpack_require__(4));
    }, /* 9 */
    /***/
    function(module, exports) {
        /*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
        "use strict";
        function toObject(val) {
            if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(val);
        }
        function shouldUseNative() {
            try {
                if (!Object.assign) return !1;
                // Detect buggy property enumeration order in older V8 versions.
                // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                var test1 = new String("abc");
                if (// eslint-disable-line no-new-wrappers
                test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;
                for (var test2 = {}, i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
                var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                    return test2[n];
                });
                if ("0123456789" !== order2.join("")) return !1;
                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test3 = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                    test3[letter] = letter;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
            } catch (err) {
                // We don't expect any of the above to throw, but better to be safe.
                return !1;
            }
        }
        /* eslint-disable no-unused-vars */
        var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
        module.exports = shouldUseNative() ? Object.assign : function(target, source) {
            for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);
                for (var key in from) hasOwnProperty.call(from, key) && (to[key] = from[key]);
                if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
                }
            }
            return to;
        };
    }, /* 10 */
    /***/
    function(module, exports) {
        /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
        "use strict";
        var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        module.exports = ReactPropTypesSecret;
    }, /* 11 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
            "use strict";
            /**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
            function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
                if ("production" !== process.env.NODE_ENV) for (var typeSpecName in typeSpecs) if (typeSpecs.hasOwnProperty(typeSpecName)) {
                    var error;
                    // Prop type validation may throw. In case they do, we don't want to
                    // fail the render phase where it didn't fail before. So we log it.
                    // After these have been cleaned up, we'll let them throw.
                    try {
                        // This is intentionally an invariant that gets caught. It's the same
                        // behavior as without this statement except with a better message.
                        invariant("function" == typeof typeSpecs[typeSpecName], "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.", componentName || "React class", location, typeSpecName, typeof typeSpecs[typeSpecName]), 
                        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                    } catch (ex) {
                        error = ex;
                    }
                    if (warning(!error || error instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error), 
                    error instanceof Error && !(error.message in loggedTypeFailures)) {
                        // Only monitor this failure once because there tends to be a lot of the
                        // same error.
                        loggedTypeFailures[error.message] = !0;
                        var stack = getStack ? getStack() : "";
                        warning(!1, "Failed %s type: %s%s", location, error.message, null != stack ? stack : "");
                    }
                }
            }
            if ("production" !== process.env.NODE_ENV) var invariant = __webpack_require__(7), warning = __webpack_require__(8), ReactPropTypesSecret = __webpack_require__(10), loggedTypeFailures = {};
            module.exports = checkPropTypes;
        }).call(exports, __webpack_require__(4));
    }, /* 12 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
        "use strict";
        var emptyFunction = __webpack_require__(6), invariant = __webpack_require__(7), ReactPropTypesSecret = __webpack_require__(10);
        module.exports = function() {
            function shim(props, propName, componentName, location, propFullName, secret) {
                secret !== ReactPropTypesSecret && invariant(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            }
            function getShim() {
                return shim;
            }
            shim.isRequired = shim;
            // Important!
            // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
            var ReactPropTypes = {
                array: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,
                any: shim,
                arrayOf: getShim,
                element: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim,
                exact: getShim
            };
            return ReactPropTypes.checkPropTypes = emptyFunction, ReactPropTypes.PropTypes = ReactPropTypes, 
            ReactPropTypes;
        };
    }, /* 13 */
    /***/
    function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_13__;
    }, /* 14 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Value = exports.Creatable = exports.AsyncCreatable = exports.Async = void 0;
        var _Select = __webpack_require__(15), _Select2 = _interopRequireDefault(_Select), _Async = __webpack_require__(26), _Async2 = _interopRequireDefault(_Async), _AsyncCreatable = __webpack_require__(27), _AsyncCreatable2 = _interopRequireDefault(_AsyncCreatable), _Creatable = __webpack_require__(28), _Creatable2 = _interopRequireDefault(_Creatable), _Value = __webpack_require__(25), _Value2 = _interopRequireDefault(_Value);
        _Select2.default.Async = _Async2.default, _Select2.default.AsyncCreatable = _AsyncCreatable2.default, 
        _Select2.default.Creatable = _Creatable2.default, _Select2.default.Value = _Value2.default, 
        exports.default = _Select2.default, exports.Async = _Async2.default, exports.AsyncCreatable = _AsyncCreatable2.default, 
        exports.Creatable = _Creatable2.default, exports.Value = _Value2.default;
    }, /* 15 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
            return target;
        }
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(13), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(3), _propTypes2 = _interopRequireDefault(_propTypes), _reactDom = __webpack_require__(16), _reactDom2 = _interopRequireDefault(_reactDom), _reactInputAutosize = __webpack_require__(17), _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize), _classnames = __webpack_require__(18), _classnames2 = _interopRequireDefault(_classnames), _defaultArrowRenderer = __webpack_require__(19), _defaultArrowRenderer2 = _interopRequireDefault(_defaultArrowRenderer), _defaultFilterOptions = __webpack_require__(20), _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions), _defaultMenuRenderer = __webpack_require__(22), _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer), _defaultClearRenderer = __webpack_require__(23), _defaultClearRenderer2 = _interopRequireDefault(_defaultClearRenderer), _Option = __webpack_require__(24), _Option2 = _interopRequireDefault(_Option), _Value = __webpack_require__(25), _Value2 = _interopRequireDefault(_Value), stringifyValue = function(value) {
            return "string" == typeof value ? value : null !== value && JSON.stringify(value) || "";
        }, stringOrNode = _propTypes2.default.oneOfType([ _propTypes2.default.string, _propTypes2.default.node ]), instanceId = 1, Select = function(_React$Component) {
            function Select(props) {
                _classCallCheck(this, Select);
                var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));
                return [ "clearValue", "focusOption", "handleInputBlur", "handleInputChange", "handleInputFocus", "handleInputValueChange", "handleKeyDown", "handleMenuScroll", "handleMouseDown", "handleMouseDownOnArrow", "handleMouseDownOnMenu", "handleRequired", "handleTouchOutside", "handleTouchMove", "handleTouchStart", "handleTouchEnd", "handleTouchEndClearValue", "handleValueClick", "getOptionLabel", "onOptionRef", "removeValue", "selectValue" ].forEach(function(fn) {
                    return _this[fn] = _this[fn].bind(_this);
                }), _this.state = {
                    inputValue: "",
                    isFocused: !1,
                    isOpen: !1,
                    isPseudoFocused: !1,
                    required: !1
                }, _this;
            }
            return _inherits(Select, _React$Component), _createClass(Select, [ {
                key: "componentWillMount",
                value: function() {
                    this._instancePrefix = "react-select-" + (this.props.instanceId || ++instanceId) + "-";
                    var valueArray = this.getValueArray(this.props.value);
                    this.props.required && this.setState({
                        required: this.handleRequired(valueArray[0], this.props.multi)
                    });
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.props.autofocus && this.focus();
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(nextProps) {
                    var valueArray = this.getValueArray(nextProps.value, nextProps);
                    nextProps.required ? this.setState({
                        required: this.handleRequired(valueArray[0], nextProps.multi)
                    }) : this.props.required && // Used to be required but it's not any more
                    this.setState({
                        required: !1
                    });
                }
            }, {
                key: "componentWillUpdate",
                value: function(nextProps, nextState) {
                    if (nextState.isOpen !== this.state.isOpen) {
                        this.toggleTouchOutsideEvent(nextState.isOpen);
                        var handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
                        handler && handler();
                    }
                }
            }, {
                key: "componentDidUpdate",
                value: function(prevProps, prevState) {
                    // focus to the selected option
                    if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
                        var focusedOptionNode = _reactDom2.default.findDOMNode(this.focused), menuNode = _reactDom2.default.findDOMNode(this.menu);
                        menuNode.scrollTop = focusedOptionNode.offsetTop, this.hasScrolledToOption = !0;
                    } else this.state.isOpen || (this.hasScrolledToOption = !1);
                    if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
                        this._scrollToFocusedOptionOnUpdate = !1;
                        var focusedDOM = _reactDom2.default.findDOMNode(this.focused), menuDOM = _reactDom2.default.findDOMNode(this.menu), focusedRect = focusedDOM.getBoundingClientRect(), menuRect = menuDOM.getBoundingClientRect();
                        focusedRect.bottom > menuRect.bottom ? menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight : focusedRect.top < menuRect.top && (menuDOM.scrollTop = focusedDOM.offsetTop);
                    }
                    if (this.props.scrollMenuIntoView && this.menuContainer) {
                        var menuContainerRect = this.menuContainer.getBoundingClientRect();
                        window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer && window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
                    }
                    prevProps.disabled !== this.props.disabled && (this.setState({
                        isFocused: !1
                    }), // eslint-disable-line react/no-did-update-set-state
                    this.closeMenu());
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    !document.removeEventListener && document.detachEvent ? document.detachEvent("ontouchstart", this.handleTouchOutside) : document.removeEventListener("touchstart", this.handleTouchOutside);
                }
            }, {
                key: "toggleTouchOutsideEvent",
                value: function(enabled) {
                    enabled ? !document.addEventListener && document.attachEvent ? document.attachEvent("ontouchstart", this.handleTouchOutside) : document.addEventListener("touchstart", this.handleTouchOutside) : !document.removeEventListener && document.detachEvent ? document.detachEvent("ontouchstart", this.handleTouchOutside) : document.removeEventListener("touchstart", this.handleTouchOutside);
                }
            }, {
                key: "handleTouchOutside",
                value: function(event) {
                    // handle touch outside on ios to dismiss menu
                    this.wrapper && !this.wrapper.contains(event.target) && this.closeMenu();
                }
            }, {
                key: "focus",
                value: function() {
                    this.input && this.input.focus();
                }
            }, {
                key: "blurInput",
                value: function() {
                    this.input && this.input.blur();
                }
            }, {
                key: "handleTouchMove",
                value: function(event) {
                    // Set a flag that the view is being dragged
                    this.dragging = !0;
                }
            }, {
                key: "handleTouchStart",
                value: function(event) {
                    // Set a flag that the view is not being dragged
                    this.dragging = !1;
                }
            }, {
                key: "handleTouchEnd",
                value: function(event) {
                    // Check if the view is being dragged, In this case
                    // we don't want to fire the click event (because the user only wants to scroll)
                    this.dragging || // Fire the mouse events
                    this.handleMouseDown(event);
                }
            }, {
                key: "handleTouchEndClearValue",
                value: function(event) {
                    // Check if the view is being dragged, In this case
                    // we don't want to fire the click event (because the user only wants to scroll)
                    this.dragging || // Clear the value
                    this.clearValue(event);
                }
            }, {
                key: "handleMouseDown",
                value: function(event) {
                    // if the event was triggered by a mousedown and not the primary
                    // button, or if the component is disabled, ignore it.
                    if (!(this.props.disabled || "mousedown" === event.type && 0 !== event.button) && "INPUT" !== event.target.tagName) {
                        // for the non-searchable select, toggle the menu
                        if (// prevent default event handlers
                        event.stopPropagation(), event.preventDefault(), !this.props.searchable) // TODO: This code means that if a select is searchable, onClick the options menu will not appear, only on subsequent click will it open.
                        return this.focus(), this.setState({
                            isOpen: !this.state.isOpen
                        });
                        if (this.state.isFocused) {
                            // On iOS, we can get into a state where we think the input is focused but it isn't really,
                            // since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
                            // Call focus() again here to be safe.
                            this.focus();
                            var input = this.input;
                            "function" == typeof input.getInput && (// Get the actual DOM input if the ref is an <AutosizeInput /> component
                            input = input.getInput()), // clears the value so that the cursor will be at the end of input when the component re-renders
                            input.value = "", // if the input is focused, ensure the menu is open
                            this.setState({
                                isOpen: !0,
                                isPseudoFocused: !1
                            });
                        } else // otherwise, focus the input and open the menu
                        this._openAfterFocus = this.props.openOnClick, this.focus();
                    }
                }
            }, {
                key: "handleMouseDownOnArrow",
                value: function(event) {
                    // if the event was triggered by a mousedown and not the primary
                    // button, or if the component is disabled, ignore it.
                    this.props.disabled || "mousedown" === event.type && 0 !== event.button || // If the menu isn't open, let the event bubble to the main handleMouseDown
                    this.state.isOpen && (// prevent default event handlers
                    event.stopPropagation(), event.preventDefault(), // close the menu
                    this.closeMenu());
                }
            }, {
                key: "handleMouseDownOnMenu",
                value: function(event) {
                    // if the event was triggered by a mousedown and not the primary
                    // button, or if the component is disabled, ignore it.
                    this.props.disabled || "mousedown" === event.type && 0 !== event.button || (event.stopPropagation(), 
                    event.preventDefault(), this._openAfterFocus = !0, this.focus());
                }
            }, {
                key: "closeMenu",
                value: function() {
                    this.props.onCloseResetsInput ? this.setState({
                        isOpen: !1,
                        isPseudoFocused: this.state.isFocused && !this.props.multi,
                        inputValue: this.handleInputValueChange("")
                    }) : this.setState({
                        isOpen: !1,
                        isPseudoFocused: this.state.isFocused && !this.props.multi
                    }), this.hasScrolledToOption = !1;
                }
            }, {
                key: "handleInputFocus",
                value: function(event) {
                    if (!this.props.disabled) {
                        var isOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
                        this.props.onFocus && this.props.onFocus(event), this.setState({
                            isFocused: !0,
                            isOpen: isOpen
                        }), this._openAfterFocus = !1;
                    }
                }
            }, {
                key: "handleInputBlur",
                value: function(event) {
                    // The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
                    if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) return void this.focus();
                    this.props.onBlur && this.props.onBlur(event);
                    var onBlurredState = {
                        isFocused: !1,
                        isOpen: !1,
                        isPseudoFocused: !1
                    };
                    this.props.onBlurResetsInput && (onBlurredState.inputValue = this.handleInputValueChange("")), 
                    this.setState(onBlurredState);
                }
            }, {
                key: "handleInputChange",
                value: function(event) {
                    var newInputValue = event.target.value;
                    this.state.inputValue !== event.target.value && (newInputValue = this.handleInputValueChange(newInputValue)), 
                    this.setState({
                        isOpen: !0,
                        isPseudoFocused: !1,
                        inputValue: newInputValue
                    });
                }
            }, {
                key: "handleInputValueChange",
                value: function(newValue) {
                    if (this.props.onInputChange) {
                        var nextState = this.props.onInputChange(newValue);
                        // Note: != used deliberately here to catch undefined and null
                        null != nextState && "object" !== ("undefined" == typeof nextState ? "undefined" : _typeof(nextState)) && (newValue = "" + nextState);
                    }
                    return newValue;
                }
            }, {
                key: "handleKeyDown",
                value: function(event) {
                    if (!(this.props.disabled || "function" == typeof this.props.onInputKeyDown && (this.props.onInputKeyDown(event), 
                    event.defaultPrevented))) {
                        switch (event.keyCode) {
                          case 8:
                            // backspace
                            return void (!this.state.inputValue && this.props.backspaceRemoves && (event.preventDefault(), 
                            this.popValue()));

                          case 9:
                            // tab
                            if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) return;
                            return void this.selectFocusedOption();

                          case 13:
                            // enter
                            if (!this.state.isOpen) return;
                            event.stopPropagation(), this.selectFocusedOption();
                            break;

                          case 27:
                            // escape
                            this.state.isOpen ? (this.closeMenu(), event.stopPropagation()) : this.props.clearable && this.props.escapeClearsValue && (this.clearValue(event), 
                            event.stopPropagation());
                            break;

                          case 38:
                            // up
                            this.focusPreviousOption();
                            break;

                          case 40:
                            // down
                            this.focusNextOption();
                            break;

                          case 33:
                            // page up
                            this.focusPageUpOption();
                            break;

                          case 34:
                            // page down
                            this.focusPageDownOption();
                            break;

                          case 35:
                            // end key
                            if (event.shiftKey) return;
                            this.focusEndOption();
                            break;

                          case 36:
                            // home key
                            if (event.shiftKey) return;
                            this.focusStartOption();
                            break;

                          case 46:
                            // backspace
                            return void (!this.state.inputValue && this.props.deleteRemoves && (event.preventDefault(), 
                            this.popValue()));

                          default:
                            return;
                        }
                        event.preventDefault();
                    }
                }
            }, {
                key: "handleValueClick",
                value: function(option, event) {
                    this.props.onValueClick && this.props.onValueClick(option, event);
                }
            }, {
                key: "handleMenuScroll",
                value: function(event) {
                    if (this.props.onMenuScrollToBottom) {
                        var target = event.target;
                        target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 0 && this.props.onMenuScrollToBottom();
                    }
                }
            }, {
                key: "handleRequired",
                value: function(value, multi) {
                    return !value || (multi ? 0 === value.length : 0 === Object.keys(value).length);
                }
            }, {
                key: "getOptionLabel",
                value: function(op) {
                    return op[this.props.labelKey];
                }
            }, {
                key: "getValueArray",
                value: function(value, nextProps) {
                    var _this2 = this, props = "object" === ("undefined" == typeof nextProps ? "undefined" : _typeof(nextProps)) ? nextProps : this.props;
                    if (props.multi) {
                        if ("string" == typeof value && (value = value.split(props.delimiter)), !Array.isArray(value)) {
                            if (null === value || void 0 === value) return [];
                            value = [ value ];
                        }
                        return value.map(function(value) {
                            return _this2.expandValue(value, props);
                        }).filter(function(i) {
                            return i;
                        });
                    }
                    var expandedValue = this.expandValue(value, props);
                    return expandedValue ? [ expandedValue ] : [];
                }
            }, {
                key: "expandValue",
                value: function(value, props) {
                    var valueType = "undefined" == typeof value ? "undefined" : _typeof(value);
                    if ("string" !== valueType && "number" !== valueType && "boolean" !== valueType) return value;
                    var options = props.options, valueKey = props.valueKey;
                    if (options) for (var i = 0; i < options.length; i++) if (options[i][valueKey] === value) return options[i];
                }
            }, {
                key: "setValue",
                value: function(value) {
                    var _this3 = this;
                    if (this.props.autoBlur && this.blurInput(), this.props.required) {
                        var required = this.handleRequired(value, this.props.multi);
                        this.setState({
                            required: required
                        });
                    }
                    this.props.onChange && (this.props.simpleValue && value && (value = this.props.multi ? value.map(function(i) {
                        return i[_this3.props.valueKey];
                    }).join(this.props.delimiter) : value[this.props.valueKey]), this.props.onChange(value));
                }
            }, {
                key: "selectValue",
                value: function(value) {
                    var _this4 = this;
                    if (// NOTE: we actually add/set the value in a callback to make sure the
                    // input value is empty to avoid styling issues in Chrome
                    this.props.closeOnSelect && (this.hasScrolledToOption = !1), this.props.multi) {
                        var updatedValue = this.props.onSelectResetsInput ? "" : this.state.inputValue;
                        this.setState({
                            focusedIndex: null,
                            inputValue: this.handleInputValueChange(updatedValue),
                            isOpen: !this.props.closeOnSelect
                        }, function() {
                            _this4.addValue(value);
                        });
                    } else this.setState({
                        inputValue: this.handleInputValueChange(""),
                        isOpen: !this.props.closeOnSelect,
                        isPseudoFocused: this.state.isFocused
                    }, function() {
                        _this4.setValue(value);
                    });
                }
            }, {
                key: "addValue",
                value: function(value) {
                    var valueArray = this.getValueArray(this.props.value), visibleOptions = this._visibleOptions.filter(function(val) {
                        return !val.disabled;
                    }), lastValueIndex = visibleOptions.indexOf(value);
                    this.setValue(valueArray.concat(value)), visibleOptions.length - 1 === lastValueIndex ? // the last option was selected; focus the second-last one
                    this.focusOption(visibleOptions[lastValueIndex - 1]) : visibleOptions.length > lastValueIndex && // focus the option below the selected one
                    this.focusOption(visibleOptions[lastValueIndex + 1]);
                }
            }, {
                key: "popValue",
                value: function() {
                    var valueArray = this.getValueArray(this.props.value);
                    valueArray.length && valueArray[valueArray.length - 1].clearableValue !== !1 && this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
                }
            }, {
                key: "removeValue",
                value: function(value) {
                    var valueArray = this.getValueArray(this.props.value);
                    this.setValue(valueArray.filter(function(i) {
                        return i !== value;
                    })), this.focus();
                }
            }, {
                key: "clearValue",
                value: function(event) {
                    // if the event was triggered by a mousedown and not the primary
                    // button, ignore it.
                    event && "mousedown" === event.type && 0 !== event.button || (event.stopPropagation(), 
                    event.preventDefault(), this.setValue(this.getResetValue()), this.setState({
                        isOpen: !1,
                        inputValue: this.handleInputValueChange("")
                    }, this.focus));
                }
            }, {
                key: "getResetValue",
                value: function() {
                    return void 0 !== this.props.resetValue ? this.props.resetValue : this.props.multi ? [] : null;
                }
            }, {
                key: "focusOption",
                value: function(option) {
                    this.setState({
                        focusedOption: option
                    });
                }
            }, {
                key: "focusNextOption",
                value: function() {
                    this.focusAdjacentOption("next");
                }
            }, {
                key: "focusPreviousOption",
                value: function() {
                    this.focusAdjacentOption("previous");
                }
            }, {
                key: "focusPageUpOption",
                value: function() {
                    this.focusAdjacentOption("page_up");
                }
            }, {
                key: "focusPageDownOption",
                value: function() {
                    this.focusAdjacentOption("page_down");
                }
            }, {
                key: "focusStartOption",
                value: function() {
                    this.focusAdjacentOption("start");
                }
            }, {
                key: "focusEndOption",
                value: function() {
                    this.focusAdjacentOption("end");
                }
            }, {
                key: "focusAdjacentOption",
                value: function(dir) {
                    var options = this._visibleOptions.map(function(option, index) {
                        return {
                            option: option,
                            index: index
                        };
                    }).filter(function(option) {
                        return !option.option.disabled;
                    });
                    if (this._scrollToFocusedOptionOnUpdate = !0, !this.state.isOpen) return void this.setState({
                        isOpen: !0,
                        inputValue: "",
                        focusedOption: this._focusedOption || (options.length ? options["next" === dir ? 0 : options.length - 1].option : null)
                    });
                    if (options.length) {
                        for (var focusedIndex = -1, i = 0; i < options.length; i++) if (this._focusedOption === options[i].option) {
                            focusedIndex = i;
                            break;
                        }
                        if ("next" === dir && focusedIndex !== -1) focusedIndex = (focusedIndex + 1) % options.length; else if ("previous" === dir) focusedIndex > 0 ? focusedIndex -= 1 : focusedIndex = options.length - 1; else if ("start" === dir) focusedIndex = 0; else if ("end" === dir) focusedIndex = options.length - 1; else if ("page_up" === dir) {
                            var potentialIndex = focusedIndex - this.props.pageSize;
                            focusedIndex = potentialIndex < 0 ? 0 : potentialIndex;
                        } else if ("page_down" === dir) {
                            var potentialIndex = focusedIndex + this.props.pageSize;
                            focusedIndex = potentialIndex > options.length - 1 ? options.length - 1 : potentialIndex;
                        }
                        focusedIndex === -1 && (focusedIndex = 0), this.setState({
                            focusedIndex: options[focusedIndex].index,
                            focusedOption: options[focusedIndex].option
                        });
                    }
                }
            }, {
                key: "getFocusedOption",
                value: function() {
                    return this._focusedOption;
                }
            }, {
                key: "getInputValue",
                value: function() {
                    return this.state.inputValue;
                }
            }, {
                key: "selectFocusedOption",
                value: function() {
                    if (this._focusedOption) return this.selectValue(this._focusedOption);
                }
            }, {
                key: "renderLoading",
                value: function() {
                    if (this.props.isLoading) return _react2.default.createElement("span", {
                        className: "Select-loading-zone",
                        "aria-hidden": "true"
                    }, _react2.default.createElement("span", {
                        className: "Select-loading"
                    }));
                }
            }, {
                key: "renderValue",
                value: function(valueArray, isOpen) {
                    var _this5 = this, renderLabel = this.props.valueRenderer || this.getOptionLabel, ValueComponent = this.props.valueComponent;
                    if (!valueArray.length) return this.state.inputValue ? null : _react2.default.createElement("div", {
                        className: "Select-placeholder"
                    }, this.props.placeholder);
                    var onClick = this.props.onValueClick ? this.handleValueClick : null;
                    return this.props.multi ? valueArray.map(function(value, i) {
                        return _react2.default.createElement(ValueComponent, {
                            id: _this5._instancePrefix + "-value-" + i,
                            instancePrefix: _this5._instancePrefix,
                            disabled: _this5.props.disabled || value.clearableValue === !1,
                            key: "value-" + i + "-" + value[_this5.props.valueKey],
                            onClick: onClick,
                            onRemove: _this5.removeValue,
                            value: value
                        }, renderLabel(value, i), _react2.default.createElement("span", {
                            className: "Select-aria-only"
                        }, " "));
                    }) : this.state.inputValue ? void 0 : (isOpen && (onClick = null), _react2.default.createElement(ValueComponent, {
                        id: this._instancePrefix + "-value-item",
                        disabled: this.props.disabled,
                        instancePrefix: this._instancePrefix,
                        onClick: onClick,
                        value: valueArray[0]
                    }, renderLabel(valueArray[0])));
                }
            }, {
                key: "renderInput",
                value: function(valueArray, focusedOptionIndex) {
                    var _classNames, _this6 = this, className = (0, _classnames2.default)("Select-input", this.props.inputProps.className), isOpen = !!this.state.isOpen, ariaOwns = (0, 
                    _classnames2.default)((_classNames = {}, _defineProperty(_classNames, this._instancePrefix + "-list", isOpen), 
                    _defineProperty(_classNames, this._instancePrefix + "-backspace-remove-message", this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), 
                    _classNames)), inputProps = _extends({}, this.props.inputProps, {
                        role: "combobox",
                        "aria-expanded": "" + isOpen,
                        "aria-owns": ariaOwns,
                        "aria-haspopup": "" + isOpen,
                        "aria-activedescendant": isOpen ? this._instancePrefix + "-option-" + focusedOptionIndex : this._instancePrefix + "-value",
                        "aria-describedby": this.props["aria-describedby"],
                        "aria-labelledby": this.props["aria-labelledby"],
                        "aria-label": this.props["aria-label"],
                        className: className,
                        tabIndex: this.props.tabIndex,
                        onBlur: this.handleInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.handleInputFocus,
                        ref: function(_ref) {
                            return _this6.input = _ref;
                        },
                        required: this.state.required,
                        value: this.state.inputValue
                    });
                    if (this.props.inputRenderer) return this.props.inputRenderer(inputProps);
                    if (this.props.disabled || !this.props.searchable) {
                        var _props$inputProps = this.props.inputProps, divProps = (_props$inputProps.inputClassName, 
                        _objectWithoutProperties(_props$inputProps, [ "inputClassName" ])), _ariaOwns = (0, 
                        _classnames2.default)(_defineProperty({}, this._instancePrefix + "-list", isOpen));
                        return _react2.default.createElement("div", _extends({}, divProps, {
                            role: "combobox",
                            "aria-expanded": isOpen,
                            "aria-owns": _ariaOwns,
                            "aria-activedescendant": isOpen ? this._instancePrefix + "-option-" + focusedOptionIndex : this._instancePrefix + "-value",
                            className: className,
                            tabIndex: this.props.tabIndex || 0,
                            onBlur: this.handleInputBlur,
                            onFocus: this.handleInputFocus,
                            ref: function(_ref2) {
                                return _this6.input = _ref2;
                            },
                            "aria-readonly": "" + !!this.props.disabled,
                            style: {
                                border: 0,
                                width: 1,
                                display: "inline-block"
                            }
                        }));
                    }
                    return this.props.autosize ? _react2.default.createElement(_reactInputAutosize2.default, _extends({}, inputProps, {
                        minWidth: "5"
                    })) : _react2.default.createElement("div", {
                        className: className
                    }, _react2.default.createElement("input", inputProps));
                }
            }, {
                key: "renderClear",
                value: function() {
                    if (!(!this.props.clearable || void 0 === this.props.value || null === this.props.value || this.props.multi && !this.props.value.length || this.props.disabled || this.props.isLoading)) {
                        var clear = this.props.clearRenderer();
                        return _react2.default.createElement("span", {
                            className: "Select-clear-zone",
                            title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
                            "aria-label": this.props.multi ? this.props.clearAllText : this.props.clearValueText,
                            onMouseDown: this.clearValue,
                            onTouchStart: this.handleTouchStart,
                            onTouchMove: this.handleTouchMove,
                            onTouchEnd: this.handleTouchEndClearValue
                        }, clear);
                    }
                }
            }, {
                key: "renderArrow",
                value: function() {
                    var onMouseDown = this.handleMouseDownOnArrow, isOpen = this.state.isOpen, arrow = this.props.arrowRenderer({
                        onMouseDown: onMouseDown,
                        isOpen: isOpen
                    });
                    return _react2.default.createElement("span", {
                        className: "Select-arrow-zone",
                        onMouseDown: onMouseDown
                    }, arrow);
                }
            }, {
                key: "filterOptions",
                value: function filterOptions(excludeOptions) {
                    var filterValue = this.state.inputValue, options = this.props.options || [];
                    if (this.props.filterOptions) {
                        // Maintain backwards compatibility with boolean attribute
                        var filterOptions = "function" == typeof this.props.filterOptions ? this.props.filterOptions : _defaultFilterOptions2.default;
                        return filterOptions(options, filterValue, excludeOptions, {
                            filterOption: this.props.filterOption,
                            ignoreAccents: this.props.ignoreAccents,
                            ignoreCase: this.props.ignoreCase,
                            labelKey: this.props.labelKey,
                            matchPos: this.props.matchPos,
                            matchProp: this.props.matchProp,
                            valueKey: this.props.valueKey
                        });
                    }
                    return options;
                }
            }, {
                key: "onOptionRef",
                value: function(ref, isFocused) {
                    isFocused && (this.focused = ref);
                }
            }, {
                key: "renderMenu",
                value: function(options, valueArray, focusedOption) {
                    return options && options.length ? this.props.menuRenderer({
                        focusedOption: focusedOption,
                        focusOption: this.focusOption,
                        instancePrefix: this._instancePrefix,
                        labelKey: this.props.labelKey,
                        onFocus: this.focusOption,
                        onSelect: this.selectValue,
                        optionClassName: this.props.optionClassName,
                        optionComponent: this.props.optionComponent,
                        optionRenderer: this.props.optionRenderer || this.getOptionLabel,
                        options: options,
                        selectValue: this.selectValue,
                        valueArray: valueArray,
                        valueKey: this.props.valueKey,
                        onOptionRef: this.onOptionRef
                    }) : this.props.noResultsText ? _react2.default.createElement("div", {
                        className: "Select-noresults"
                    }, this.props.noResultsText) : null;
                }
            }, {
                key: "renderHiddenField",
                value: function(valueArray) {
                    var _this7 = this;
                    if (this.props.name) {
                        if (this.props.joinValues) {
                            var value = valueArray.map(function(i) {
                                return stringifyValue(i[_this7.props.valueKey]);
                            }).join(this.props.delimiter);
                            return _react2.default.createElement("input", {
                                type: "hidden",
                                ref: function(_ref3) {
                                    return _this7.value = _ref3;
                                },
                                name: this.props.name,
                                value: value,
                                disabled: this.props.disabled
                            });
                        }
                        return valueArray.map(function(item, index) {
                            return _react2.default.createElement("input", {
                                key: "hidden." + index,
                                type: "hidden",
                                ref: "value" + index,
                                name: _this7.props.name,
                                value: stringifyValue(item[_this7.props.valueKey]),
                                disabled: _this7.props.disabled
                            });
                        });
                    }
                }
            }, {
                key: "getFocusableOptionIndex",
                value: function(selectedOption) {
                    var options = this._visibleOptions;
                    if (!options.length) return null;
                    var valueKey = this.props.valueKey, focusedOption = this.state.focusedOption || selectedOption;
                    if (focusedOption && !focusedOption.disabled) {
                        var focusedOptionIndex = -1;
                        if (options.some(function(option, index) {
                            var isOptionEqual = option[valueKey] === focusedOption[valueKey];
                            return isOptionEqual && (focusedOptionIndex = index), isOptionEqual;
                        }), focusedOptionIndex !== -1) return focusedOptionIndex;
                    }
                    for (var i = 0; i < options.length; i++) if (!options[i].disabled) return i;
                    return null;
                }
            }, {
                key: "renderOuter",
                value: function(options, valueArray, focusedOption) {
                    var _this8 = this, menu = this.renderMenu(options, valueArray, focusedOption);
                    return menu ? _react2.default.createElement("div", {
                        ref: function(_ref5) {
                            return _this8.menuContainer = _ref5;
                        },
                        className: "Select-menu-outer",
                        style: this.props.menuContainerStyle
                    }, _react2.default.createElement("div", {
                        ref: function(_ref4) {
                            return _this8.menu = _ref4;
                        },
                        role: "listbox",
                        tabIndex: -1,
                        className: "Select-menu",
                        id: this._instancePrefix + "-list",
                        style: this.props.menuStyle,
                        onScroll: this.handleMenuScroll,
                        onMouseDown: this.handleMouseDownOnMenu
                    }, menu)) : null;
                }
            }, {
                key: "render",
                value: function() {
                    var _this9 = this, valueArray = this.getValueArray(this.props.value), options = this._visibleOptions = this.filterOptions(this.props.multi ? this.getValueArray(this.props.value) : null), isOpen = this.state.isOpen;
                    this.props.multi && !options.length && valueArray.length && !this.state.inputValue && (isOpen = !1);
                    var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]), focusedOption = null;
                    focusedOption = null !== focusedOptionIndex ? this._focusedOption = options[focusedOptionIndex] : this._focusedOption = null;
                    var className = (0, _classnames2.default)("Select", this.props.className, {
                        "Select--multi": this.props.multi,
                        "Select--single": !this.props.multi,
                        "is-clearable": this.props.clearable,
                        "is-disabled": this.props.disabled,
                        "is-focused": this.state.isFocused,
                        "is-loading": this.props.isLoading,
                        "is-open": isOpen,
                        "is-pseudo-focused": this.state.isPseudoFocused,
                        "is-searchable": this.props.searchable,
                        "has-value": valueArray.length
                    }), removeMessage = null;
                    return this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves && (removeMessage = _react2.default.createElement("span", {
                        id: this._instancePrefix + "-backspace-remove-message",
                        className: "Select-aria-only",
                        "aria-live": "assertive"
                    }, this.props.backspaceToRemoveMessage.replace("{label}", valueArray[valueArray.length - 1][this.props.labelKey]))), 
                    _react2.default.createElement("div", {
                        ref: function(_ref7) {
                            return _this9.wrapper = _ref7;
                        },
                        className: className,
                        style: this.props.wrapperStyle
                    }, this.renderHiddenField(valueArray), _react2.default.createElement("div", {
                        ref: function(_ref6) {
                            return _this9.control = _ref6;
                        },
                        className: "Select-control",
                        style: this.props.style,
                        onKeyDown: this.handleKeyDown,
                        onMouseDown: this.handleMouseDown,
                        onTouchEnd: this.handleTouchEnd,
                        onTouchStart: this.handleTouchStart,
                        onTouchMove: this.handleTouchMove
                    }, _react2.default.createElement("span", {
                        className: "Select-multi-value-wrapper",
                        id: this._instancePrefix + "-value"
                    }, this.renderValue(valueArray, isOpen), this.renderInput(valueArray, focusedOptionIndex)), removeMessage, this.renderLoading(), this.renderClear(), this.renderArrow()), isOpen ? this.renderOuter(options, this.props.multi ? null : valueArray, focusedOption) : null);
                }
            } ]), Select;
        }(_react2.default.Component);
        Select.propTypes = {
            "aria-describedby": _propTypes2.default.string,
            // HTML ID(s) of element(s) that should be used to describe this input (for assistive tech)
            "aria-label": _propTypes2.default.string,
            // Aria label (for assistive tech)
            "aria-labelledby": _propTypes2.default.string,
            // HTML ID of an element that should be used as the label (for assistive tech)
            addLabelText: _propTypes2.default.string,
            // placeholder displayed when you want to add a label on a multi-value input
            arrowRenderer: _propTypes2.default.func,
            // Create drop-down caret element
            autoBlur: _propTypes2.default.bool,
            // automatically blur the component when an option is selected
            autofocus: _propTypes2.default.bool,
            // autofocus the component on mount
            autosize: _propTypes2.default.bool,
            // whether to enable autosizing or not
            backspaceRemoves: _propTypes2.default.bool,
            // whether backspace removes an item if there is no text input
            backspaceToRemoveMessage: _propTypes2.default.string,
            // Message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
            className: _propTypes2.default.string,
            // className for the outer element
            clearAllText: stringOrNode,
            // title for the "clear" control when multi: true
            clearRenderer: _propTypes2.default.func,
            // create clearable x element
            clearValueText: stringOrNode,
            // title for the "clear" control
            clearable: _propTypes2.default.bool,
            // should it be possible to reset value
            closeOnSelect: _propTypes2.default.bool,
            // whether to close the menu when a value is selected
            deleteRemoves: _propTypes2.default.bool,
            // whether backspace removes an item if there is no text input
            delimiter: _propTypes2.default.string,
            // delimiter to use to join multiple values for the hidden field value
            disabled: _propTypes2.default.bool,
            // whether the Select is disabled or not
            escapeClearsValue: _propTypes2.default.bool,
            // whether escape clears the value when the menu is closed
            filterOption: _propTypes2.default.func,
            // method to filter a single option (option, filterString)
            filterOptions: _propTypes2.default.any,
            // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
            ignoreAccents: _propTypes2.default.bool,
            // whether to strip diacritics when filtering
            ignoreCase: _propTypes2.default.bool,
            // whether to perform case-insensitive filtering
            inputProps: _propTypes2.default.object,
            // custom attributes for the Input
            inputRenderer: _propTypes2.default.func,
            // returns a custom input component
            instanceId: _propTypes2.default.string,
            // set the components instanceId
            isLoading: _propTypes2.default.bool,
            // whether the Select is loading externally or not (such as options being loaded)
            joinValues: _propTypes2.default.bool,
            // joins multiple values into a single form field with the delimiter (legacy mode)
            labelKey: _propTypes2.default.string,
            // path of the label value in option objects
            matchPos: _propTypes2.default.string,
            // (any|start) match the start or entire string when filtering
            matchProp: _propTypes2.default.string,
            // (any|label|value) which option property to filter on
            menuBuffer: _propTypes2.default.number,
            // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
            menuContainerStyle: _propTypes2.default.object,
            // optional style to apply to the menu container
            menuRenderer: _propTypes2.default.func,
            // renders a custom menu with options
            menuStyle: _propTypes2.default.object,
            // optional style to apply to the menu
            multi: _propTypes2.default.bool,
            // multi-value input
            name: _propTypes2.default.string,
            // generates a hidden <input /> tag with this field name for html forms
            noResultsText: stringOrNode,
            // placeholder displayed when there are no matching search results
            onBlur: _propTypes2.default.func,
            // onBlur handler: function (event) {}
            onBlurResetsInput: _propTypes2.default.bool,
            // whether input is cleared on blur
            onChange: _propTypes2.default.func,
            // onChange handler: function (newValue) {}
            onClose: _propTypes2.default.func,
            // fires when the menu is closed
            onCloseResetsInput: _propTypes2.default.bool,
            // whether input is cleared when menu is closed through the arrow
            onFocus: _propTypes2.default.func,
            // onFocus handler: function (event) {}
            onInputChange: _propTypes2.default.func,
            // onInputChange handler: function (inputValue) {}
            onInputKeyDown: _propTypes2.default.func,
            // input keyDown handler: function (event) {}
            onMenuScrollToBottom: _propTypes2.default.func,
            // fires when the menu is scrolled to the bottom; can be used to paginate options
            onOpen: _propTypes2.default.func,
            // fires when the menu is opened
            onSelectResetsInput: _propTypes2.default.bool,
            // whether input is cleared on select (works only for multiselect)
            onValueClick: _propTypes2.default.func,
            // onClick handler for value labels: function (value, event) {}
            openOnClick: _propTypes2.default.bool,
            // boolean to control opening the menu when the control is clicked
            openOnFocus: _propTypes2.default.bool,
            // always open options menu on focus
            optionClassName: _propTypes2.default.string,
            // additional class(es) to apply to the <Option /> elements
            optionComponent: _propTypes2.default.func,
            // option component to render in dropdown
            optionRenderer: _propTypes2.default.func,
            // optionRenderer: function (option) {}
            options: _propTypes2.default.array,
            // array of options
            pageSize: _propTypes2.default.number,
            // number of entries to page when using page up/down keys
            placeholder: stringOrNode,
            // field placeholder, displayed when there's no value
            required: _propTypes2.default.bool,
            // applies HTML5 required attribute when needed
            resetValue: _propTypes2.default.any,
            // value to use when you clear the control
            scrollMenuIntoView: _propTypes2.default.bool,
            // boolean to enable the viewport to shift so that the full menu fully visible when engaged
            searchable: _propTypes2.default.bool,
            // whether to enable searching feature or not
            simpleValue: _propTypes2.default.bool,
            // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
            style: _propTypes2.default.object,
            // optional style to apply to the control
            tabIndex: _propTypes2.default.string,
            // optional tab index of the control
            tabSelectsValue: _propTypes2.default.bool,
            // whether to treat tabbing out while focused to be value selection
            value: _propTypes2.default.any,
            // initial field value
            valueComponent: _propTypes2.default.func,
            // value component to render
            valueKey: _propTypes2.default.string,
            // path of the label value in option objects
            valueRenderer: _propTypes2.default.func,
            // valueRenderer: function (option) {}
            wrapperStyle: _propTypes2.default.object
        }, Select.defaultProps = {
            addLabelText: 'Add "{label}"?',
            arrowRenderer: _defaultArrowRenderer2.default,
            autosize: !0,
            backspaceRemoves: !0,
            backspaceToRemoveMessage: "Press backspace to remove {label}",
            clearable: !0,
            clearAllText: "Clear all",
            clearRenderer: _defaultClearRenderer2.default,
            clearValueText: "Clear value",
            closeOnSelect: !0,
            deleteRemoves: !0,
            delimiter: ",",
            disabled: !1,
            escapeClearsValue: !0,
            filterOptions: _defaultFilterOptions2.default,
            ignoreAccents: !0,
            ignoreCase: !0,
            inputProps: {},
            isLoading: !1,
            joinValues: !1,
            labelKey: "label",
            matchPos: "any",
            matchProp: "any",
            menuBuffer: 0,
            menuRenderer: _defaultMenuRenderer2.default,
            multi: !1,
            noResultsText: "No results found",
            onBlurResetsInput: !0,
            onSelectResetsInput: !0,
            onCloseResetsInput: !0,
            openOnClick: !0,
            optionComponent: _Option2.default,
            pageSize: 5,
            placeholder: "Select...",
            required: !1,
            scrollMenuIntoView: !0,
            searchable: !0,
            simpleValue: !1,
            tabSelectsValue: !0,
            valueComponent: _Value2.default,
            valueKey: "value"
        }, exports.default = Select;
    }, /* 16 */
    /***/
    function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_16__;
    }, /* 17 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
            return target;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(13), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(3), _propTypes2 = _interopRequireDefault(_propTypes), sizerStyle = {
            position: "absolute",
            top: 0,
            left: 0,
            visibility: "hidden",
            height: 0,
            overflow: "scroll",
            whiteSpace: "pre"
        }, AutosizeInput = function(_Component) {
            function AutosizeInput(props) {
                _classCallCheck(this, AutosizeInput);
                var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));
                return _this.inputRef = function(el) {
                    _this.input = el, "function" == typeof _this.props.inputRef && _this.props.inputRef(el);
                }, _this.placeHolderSizerRef = function(el) {
                    _this.placeHolderSizer = el;
                }, _this.sizerRef = function(el) {
                    _this.sizer = el;
                }, _this.state = {
                    inputWidth: props.minWidth,
                    inputId: "_" + Math.random().toString(36).substr(2, 12)
                }, _this;
            }
            return _inherits(AutosizeInput, _Component), _createClass(AutosizeInput, [ {
                key: "componentDidMount",
                value: function() {
                    this.mounted = !0, this.copyInputStyles(), this.updateInputWidth();
                }
            }, {
                key: "componentDidUpdate",
                value: function(prevProps, prevState) {
                    prevState.inputWidth !== this.state.inputWidth && "function" == typeof this.props.onAutosize && this.props.onAutosize(this.state.inputWidth), 
                    this.updateInputWidth();
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.mounted = !1;
                }
            }, {
                key: "copyInputStyles",
                value: function() {
                    if (this.mounted && window.getComputedStyle) {
                        var inputStyle = this.input && window.getComputedStyle(this.input);
                        if (inputStyle) {
                            var widthNode = this.sizer;
                            if (widthNode.style.fontSize = inputStyle.fontSize, widthNode.style.fontFamily = inputStyle.fontFamily, 
                            widthNode.style.fontWeight = inputStyle.fontWeight, widthNode.style.fontStyle = inputStyle.fontStyle, 
                            widthNode.style.letterSpacing = inputStyle.letterSpacing, widthNode.style.textTransform = inputStyle.textTransform, 
                            this.props.placeholder) {
                                var placeholderNode = this.placeHolderSizer;
                                placeholderNode.style.fontSize = inputStyle.fontSize, placeholderNode.style.fontFamily = inputStyle.fontFamily, 
                                placeholderNode.style.fontWeight = inputStyle.fontWeight, placeholderNode.style.fontStyle = inputStyle.fontStyle, 
                                placeholderNode.style.letterSpacing = inputStyle.letterSpacing, placeholderNode.style.textTransform = inputStyle.textTransform;
                            }
                        }
                    }
                }
            }, {
                key: "updateInputWidth",
                value: function() {
                    if (this.mounted && this.sizer && "undefined" != typeof this.sizer.scrollWidth) {
                        var newInputWidth = void 0;
                        newInputWidth = this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth) ? Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2 : this.sizer.scrollWidth + 2, 
                        newInputWidth < this.props.minWidth && (newInputWidth = this.props.minWidth), newInputWidth !== this.state.inputWidth && this.setState({
                            inputWidth: newInputWidth
                        });
                    }
                }
            }, {
                key: "getInput",
                value: function() {
                    return this.input;
                }
            }, {
                key: "focus",
                value: function() {
                    this.input.focus();
                }
            }, {
                key: "blur",
                value: function() {
                    this.input.blur();
                }
            }, {
                key: "select",
                value: function() {
                    this.input.select();
                }
            }, {
                key: "render",
                value: function() {
                    var sizerValue = [ this.props.defaultValue, this.props.value, "" ].reduce(function(previousValue, currentValue) {
                        return null !== previousValue && void 0 !== previousValue ? previousValue : currentValue;
                    }), wrapperStyle = _extends({}, this.props.style);
                    wrapperStyle.display || (wrapperStyle.display = "inline-block");
                    var inputStyle = _extends({}, this.props.inputStyle);
                    inputStyle.width = this.state.inputWidth + "px", inputStyle.boxSizing = "content-box";
                    var inputProps = _objectWithoutProperties(this.props, []);
                    // ensure props meant for `AutosizeInput` don't end up on the `input`
                    return inputProps.className = this.props.inputClassName, inputProps.style = inputStyle, 
                    delete inputProps.inputClassName, delete inputProps.inputStyle, delete inputProps.minWidth, 
                    delete inputProps.onAutosize, delete inputProps.placeholderIsMinWidth, delete inputProps.inputRef, 
                    _react2.default.createElement("div", {
                        className: this.props.className,
                        style: wrapperStyle
                    }, _react2.default.createElement("style", {
                        dangerouslySetInnerHTML: {
                            __html: [ "input#" + this.state.id + "::-ms-clear {display: none;}" ].join("\n")
                        }
                    }), _react2.default.createElement("input", _extends({
                        id: this.state.id
                    }, inputProps, {
                        ref: this.inputRef
                    })), _react2.default.createElement("div", {
                        ref: this.sizerRef,
                        style: sizerStyle
                    }, sizerValue), this.props.placeholder ? _react2.default.createElement("div", {
                        ref: this.placeHolderSizerRef,
                        style: sizerStyle
                    }, this.props.placeholder) : null);
                }
            } ]), AutosizeInput;
        }(_react.Component);
        AutosizeInput.propTypes = {
            className: _propTypes2.default.string,
            // className for the outer element
            defaultValue: _propTypes2.default.any,
            // default field value
            inputClassName: _propTypes2.default.string,
            // className for the input element
            inputRef: _propTypes2.default.func,
            // ref callback for the input element
            inputStyle: _propTypes2.default.object,
            // css styles for the input element
            minWidth: _propTypes2.default.oneOfType([ // minimum width for input element
            _propTypes2.default.number, _propTypes2.default.string ]),
            onAutosize: _propTypes2.default.func,
            // onAutosize handler: function(newWidth) {}
            onChange: _propTypes2.default.func,
            // onChange handler: function(newValue) {}
            placeholder: _propTypes2.default.string,
            // placeholder text
            placeholderIsMinWidth: _propTypes2.default.bool,
            // don't collapse size to less than the placeholder
            style: _propTypes2.default.object,
            // css styles for the outer element
            value: _propTypes2.default.any
        }, AutosizeInput.defaultProps = {
            minWidth: 1
        }, exports.default = AutosizeInput;
    }, /* 18 */
    /***/
    function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
        /* global define */
        !function() {
            "use strict";
            function classNames() {
                for (var classes = [], i = 0; i < arguments.length; i++) {
                    var arg = arguments[i];
                    if (arg) {
                        var argType = typeof arg;
                        if ("string" === argType || "number" === argType) classes.push(arg); else if (Array.isArray(arg)) classes.push(classNames.apply(null, arg)); else if ("object" === argType) for (var key in arg) hasOwn.call(arg, key) && arg[key] && classes.push(key);
                    }
                }
                return classes.join(" ");
            }
            var hasOwn = {}.hasOwnProperty;
            "undefined" != typeof module && module.exports ? module.exports = classNames : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], 
            __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return classNames;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), // register as 'classnames', consistent with npm package name
            !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
        }();
    }, /* 19 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function arrowRenderer(_ref) {
            var onMouseDown = _ref.onMouseDown;
            return _react2.default.createElement("span", {
                className: "Select-arrow",
                onMouseDown: onMouseDown
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = arrowRenderer;
        var _react = __webpack_require__(13), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(3), _propTypes2 = _interopRequireDefault(_propTypes);
        arrowRenderer.propTypes = {
            onMouseDown: _propTypes2.default.func
        };
    }, /* 20 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function filterOptions(options, filterValue, excludeOptions, props) {
            var _this = this;
            return props.ignoreAccents && (filterValue = (0, _stripDiacritics2.default)(filterValue)), 
            props.ignoreCase && (filterValue = filterValue.toLowerCase()), excludeOptions && (excludeOptions = excludeOptions.map(function(i) {
                return i[props.valueKey];
            })), options.filter(function(option) {
                if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return !1;
                if (props.filterOption) return props.filterOption.call(_this, option, filterValue);
                if (!filterValue) return !0;
                var valueTest = String(option[props.valueKey]), labelTest = String(option[props.labelKey]);
                return props.ignoreAccents && ("label" !== props.matchProp && (valueTest = (0, _stripDiacritics2.default)(valueTest)), 
                "value" !== props.matchProp && (labelTest = (0, _stripDiacritics2.default)(labelTest))), 
                props.ignoreCase && ("label" !== props.matchProp && (valueTest = valueTest.toLowerCase()), 
                "value" !== props.matchProp && (labelTest = labelTest.toLowerCase())), "start" === props.matchPos ? "label" !== props.matchProp && valueTest.substr(0, filterValue.length) === filterValue || "value" !== props.matchProp && labelTest.substr(0, filterValue.length) === filterValue : "label" !== props.matchProp && valueTest.indexOf(filterValue) >= 0 || "value" !== props.matchProp && labelTest.indexOf(filterValue) >= 0;
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _stripDiacritics = __webpack_require__(21), _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);
        exports.default = filterOptions;
    }, /* 21 */
    /***/
    function(module, exports) {
        "use strict";
        function stripDiacritics(str) {
            for (var i = 0; i < map.length; i++) str = str.replace(map[i].letters, map[i].base);
            return str;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = stripDiacritics;
        var map = [ {
            base: "A",
            letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
        }, {
            base: "AA",
            letters: /[\uA732]/g
        }, {
            base: "AE",
            letters: /[\u00C6\u01FC\u01E2]/g
        }, {
            base: "AO",
            letters: /[\uA734]/g
        }, {
            base: "AU",
            letters: /[\uA736]/g
        }, {
            base: "AV",
            letters: /[\uA738\uA73A]/g
        }, {
            base: "AY",
            letters: /[\uA73C]/g
        }, {
            base: "B",
            letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
        }, {
            base: "C",
            letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
        }, {
            base: "D",
            letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
        }, {
            base: "DZ",
            letters: /[\u01F1\u01C4]/g
        }, {
            base: "Dz",
            letters: /[\u01F2\u01C5]/g
        }, {
            base: "E",
            letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
        }, {
            base: "F",
            letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
        }, {
            base: "G",
            letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
        }, {
            base: "H",
            letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
        }, {
            base: "I",
            letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
        }, {
            base: "J",
            letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
        }, {
            base: "K",
            letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
        }, {
            base: "L",
            letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
        }, {
            base: "LJ",
            letters: /[\u01C7]/g
        }, {
            base: "Lj",
            letters: /[\u01C8]/g
        }, {
            base: "M",
            letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
        }, {
            base: "N",
            letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
        }, {
            base: "NJ",
            letters: /[\u01CA]/g
        }, {
            base: "Nj",
            letters: /[\u01CB]/g
        }, {
            base: "O",
            letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
        }, {
            base: "OI",
            letters: /[\u01A2]/g
        }, {
            base: "OO",
            letters: /[\uA74E]/g
        }, {
            base: "OU",
            letters: /[\u0222]/g
        }, {
            base: "P",
            letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
        }, {
            base: "Q",
            letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
        }, {
            base: "R",
            letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
        }, {
            base: "S",
            letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
        }, {
            base: "T",
            letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
        }, {
            base: "TZ",
            letters: /[\uA728]/g
        }, {
            base: "U",
            letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
        }, {
            base: "V",
            letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
        }, {
            base: "VY",
            letters: /[\uA760]/g
        }, {
            base: "W",
            letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
        }, {
            base: "X",
            letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
        }, {
            base: "Y",
            letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
        }, {
            base: "Z",
            letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
        }, {
            base: "a",
            letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
        }, {
            base: "aa",
            letters: /[\uA733]/g
        }, {
            base: "ae",
            letters: /[\u00E6\u01FD\u01E3]/g
        }, {
            base: "ao",
            letters: /[\uA735]/g
        }, {
            base: "au",
            letters: /[\uA737]/g
        }, {
            base: "av",
            letters: /[\uA739\uA73B]/g
        }, {
            base: "ay",
            letters: /[\uA73D]/g
        }, {
            base: "b",
            letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
        }, {
            base: "c",
            letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
        }, {
            base: "d",
            letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
        }, {
            base: "dz",
            letters: /[\u01F3\u01C6]/g
        }, {
            base: "e",
            letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
        }, {
            base: "f",
            letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
        }, {
            base: "g",
            letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
        }, {
            base: "h",
            letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
        }, {
            base: "hv",
            letters: /[\u0195]/g
        }, {
            base: "i",
            letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
        }, {
            base: "j",
            letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
        }, {
            base: "k",
            letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
        }, {
            base: "l",
            letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
        }, {
            base: "lj",
            letters: /[\u01C9]/g
        }, {
            base: "m",
            letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
        }, {
            base: "n",
            letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
        }, {
            base: "nj",
            letters: /[\u01CC]/g
        }, {
            base: "o",
            letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
        }, {
            base: "oi",
            letters: /[\u01A3]/g
        }, {
            base: "ou",
            letters: /[\u0223]/g
        }, {
            base: "oo",
            letters: /[\uA74F]/g
        }, {
            base: "p",
            letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
        }, {
            base: "q",
            letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
        }, {
            base: "r",
            letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
        }, {
            base: "s",
            letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
        }, {
            base: "t",
            letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
        }, {
            base: "tz",
            letters: /[\uA729]/g
        }, {
            base: "u",
            letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
        }, {
            base: "v",
            letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
        }, {
            base: "vy",
            letters: /[\uA761]/g
        }, {
            base: "w",
            letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
        }, {
            base: "x",
            letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
        }, {
            base: "y",
            letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
        }, {
            base: "z",
            letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
        } ];
    }, /* 22 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function menuRenderer(_ref) {
            var focusedOption = _ref.focusedOption, instancePrefix = _ref.instancePrefix, onFocus = (_ref.labelKey, 
            _ref.onFocus), onSelect = _ref.onSelect, optionClassName = _ref.optionClassName, optionComponent = _ref.optionComponent, optionRenderer = _ref.optionRenderer, options = _ref.options, valueArray = _ref.valueArray, valueKey = _ref.valueKey, onOptionRef = _ref.onOptionRef, Option = optionComponent;
            return options.map(function(option, i) {
                var isSelected = valueArray && valueArray.indexOf(option) > -1, isFocused = option === focusedOption, optionClass = (0, 
                _classnames2.default)(optionClassName, {
                    "Select-option": !0,
                    "is-selected": isSelected,
                    "is-focused": isFocused,
                    "is-disabled": option.disabled
                });
                return _react2.default.createElement(Option, {
                    className: optionClass,
                    instancePrefix: instancePrefix,
                    isDisabled: option.disabled,
                    isFocused: isFocused,
                    isSelected: isSelected,
                    key: "option-" + i + "-" + option[valueKey],
                    onFocus: onFocus,
                    onSelect: onSelect,
                    option: option,
                    optionIndex: i,
                    ref: function(_ref2) {
                        onOptionRef(_ref2, isFocused);
                    }
                }, optionRenderer(option, i));
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _classnames = __webpack_require__(18), _classnames2 = _interopRequireDefault(_classnames), _react = __webpack_require__(13), _react2 = _interopRequireDefault(_react);
        exports.default = menuRenderer;
    }, /* 23 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function clearRenderer() {
            return _react2.default.createElement("span", {
                className: "Select-clear",
                dangerouslySetInnerHTML: {
                    __html: "&times;"
                }
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = clearRenderer;
        var _react = __webpack_require__(13), _react2 = _interopRequireDefault(_react);
    }, /* 24 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(13), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(3), _propTypes2 = _interopRequireDefault(_propTypes), _classnames = __webpack_require__(18), _classnames2 = _interopRequireDefault(_classnames), Option = function(_React$Component) {
            function Option(props) {
                _classCallCheck(this, Option);
                var _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));
                return _this.handleMouseDown = _this.handleMouseDown.bind(_this), _this.handleMouseEnter = _this.handleMouseEnter.bind(_this), 
                _this.handleMouseMove = _this.handleMouseMove.bind(_this), _this.handleTouchStart = _this.handleTouchStart.bind(_this), 
                _this.handleTouchEnd = _this.handleTouchEnd.bind(_this), _this.handleTouchMove = _this.handleTouchMove.bind(_this), 
                _this.onFocus = _this.onFocus.bind(_this), _this;
            }
            return _inherits(Option, _React$Component), _createClass(Option, [ {
                key: "blockEvent",
                value: function(event) {
                    event.preventDefault(), event.stopPropagation(), "A" === event.target.tagName && "href" in event.target && (event.target.target ? window.open(event.target.href, event.target.target) : window.location.href = event.target.href);
                }
            }, {
                key: "handleMouseDown",
                value: function(event) {
                    event.preventDefault(), event.stopPropagation(), this.props.onSelect(this.props.option, event);
                }
            }, {
                key: "handleMouseEnter",
                value: function(event) {
                    this.onFocus(event);
                }
            }, {
                key: "handleMouseMove",
                value: function(event) {
                    this.onFocus(event);
                }
            }, {
                key: "handleTouchEnd",
                value: function(event) {
                    // Check if the view is being dragged, In this case
                    // we don't want to fire the click event (because the user only wants to scroll)
                    this.dragging || this.handleMouseDown(event);
                }
            }, {
                key: "handleTouchMove",
                value: function(event) {
                    // Set a flag that the view is being dragged
                    this.dragging = !0;
                }
            }, {
                key: "handleTouchStart",
                value: function(event) {
                    // Set a flag that the view is not being dragged
                    this.dragging = !1;
                }
            }, {
                key: "onFocus",
                value: function(event) {
                    this.props.isFocused || this.props.onFocus(this.props.option, event);
                }
            }, {
                key: "render",
                value: function() {
                    var _props = this.props, option = _props.option, instancePrefix = _props.instancePrefix, optionIndex = _props.optionIndex, className = (0, 
                    _classnames2.default)(this.props.className, option.className);
                    return option.disabled ? _react2.default.createElement("div", {
                        className: className,
                        onMouseDown: this.blockEvent,
                        onClick: this.blockEvent
                    }, this.props.children) : _react2.default.createElement("div", {
                        className: className,
                        style: option.style,
                        role: "option",
                        onMouseDown: this.handleMouseDown,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseMove: this.handleMouseMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchMove: this.handleTouchMove,
                        onTouchEnd: this.handleTouchEnd,
                        id: instancePrefix + "-option-" + optionIndex,
                        title: option.title
                    }, this.props.children);
                }
            } ]), Option;
        }(_react2.default.Component);
        Option.propTypes = {
            children: _propTypes2.default.node,
            className: _propTypes2.default.string,
            // className (based on mouse position)
            instancePrefix: _propTypes2.default.string.isRequired,
            // unique prefix for the ids (used for aria)
            isDisabled: _propTypes2.default.bool,
            // the option is disabled
            isFocused: _propTypes2.default.bool,
            // the option is focused
            isSelected: _propTypes2.default.bool,
            // the option is selected
            onFocus: _propTypes2.default.func,
            // method to handle mouseEnter on option element
            onSelect: _propTypes2.default.func,
            // method to handle click on option element
            onUnfocus: _propTypes2.default.func,
            // method to handle mouseLeave on option element
            option: _propTypes2.default.object.isRequired,
            // object that is base for that option
            optionIndex: _propTypes2.default.number
        }, exports.default = Option;
    }, /* 25 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(13), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(3), _propTypes2 = _interopRequireDefault(_propTypes), _classnames = __webpack_require__(18), _classnames2 = _interopRequireDefault(_classnames), Value = function(_React$Component) {
            function Value(props) {
                _classCallCheck(this, Value);
                var _this = _possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));
                return _this.handleMouseDown = _this.handleMouseDown.bind(_this), _this.onRemove = _this.onRemove.bind(_this), 
                _this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_this), _this.handleTouchMove = _this.handleTouchMove.bind(_this), 
                _this.handleTouchStart = _this.handleTouchStart.bind(_this), _this;
            }
            return _inherits(Value, _React$Component), _createClass(Value, [ {
                key: "handleMouseDown",
                value: function(event) {
                    if ("mousedown" !== event.type || 0 === event.button) return this.props.onClick ? (event.stopPropagation(), 
                    void this.props.onClick(this.props.value, event)) : void (this.props.value.href && event.stopPropagation());
                }
            }, {
                key: "onRemove",
                value: function(event) {
                    event.preventDefault(), event.stopPropagation(), this.props.onRemove(this.props.value);
                }
            }, {
                key: "handleTouchEndRemove",
                value: function(event) {
                    // Check if the view is being dragged, In this case
                    // we don't want to fire the click event (because the user only wants to scroll)
                    this.dragging || // Fire the mouse events
                    this.onRemove(event);
                }
            }, {
                key: "handleTouchMove",
                value: function(event) {
                    // Set a flag that the view is being dragged
                    this.dragging = !0;
                }
            }, {
                key: "handleTouchStart",
                value: function(event) {
                    // Set a flag that the view is not being dragged
                    this.dragging = !1;
                }
            }, {
                key: "renderRemoveIcon",
                value: function() {
                    if (!this.props.disabled && this.props.onRemove) return _react2.default.createElement("span", {
                        className: "Select-value-icon",
                        "aria-hidden": "true",
                        onMouseDown: this.onRemove,
                        onTouchEnd: this.handleTouchEndRemove,
                        onTouchStart: this.handleTouchStart,
                        onTouchMove: this.handleTouchMove
                    }, "×");
                }
            }, {
                key: "renderLabel",
                value: function() {
                    var className = "Select-value-label";
                    return this.props.onClick || this.props.value.href ? _react2.default.createElement("a", {
                        className: className,
                        href: this.props.value.href,
                        target: this.props.value.target,
                        onMouseDown: this.handleMouseDown,
                        onTouchEnd: this.handleMouseDown
                    }, this.props.children) : _react2.default.createElement("span", {
                        className: className,
                        role: "option",
                        "aria-selected": "true",
                        id: this.props.id
                    }, this.props.children);
                }
            }, {
                key: "render",
                value: function() {
                    return _react2.default.createElement("div", {
                        className: (0, _classnames2.default)("Select-value", this.props.value.className),
                        style: this.props.value.style,
                        title: this.props.value.title
                    }, this.renderRemoveIcon(), this.renderLabel());
                }
            } ]), Value;
        }(_react2.default.Component);
        Value.propTypes = {
            children: _propTypes2.default.node,
            disabled: _propTypes2.default.bool,
            // disabled prop passed to ReactSelect
            id: _propTypes2.default.string,
            // Unique id for the value - used for aria
            onClick: _propTypes2.default.func,
            // method to handle click on value label
            onRemove: _propTypes2.default.func,
            // method to handle removal of the value
            value: _propTypes2.default.object.isRequired
        }, exports.default = Value;
    }, /* 26 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function defaultChildren(props) {
            return _react2.default.createElement(_Select2.default, props);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(13), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(3), _propTypes2 = _interopRequireDefault(_propTypes), _Select = __webpack_require__(15), _Select2 = _interopRequireDefault(_Select), _stripDiacritics = __webpack_require__(21), _stripDiacritics2 = _interopRequireDefault(_stripDiacritics), propTypes = {
            autoload: _propTypes2.default.bool.isRequired,
            // automatically call the `loadOptions` prop on-mount; defaults to true
            cache: _propTypes2.default.any,
            // object to use to cache results; set to null/false to disable caching
            children: _propTypes2.default.func.isRequired,
            // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
            ignoreAccents: _propTypes2.default.bool,
            // strip diacritics when filtering; defaults to true
            ignoreCase: _propTypes2.default.bool,
            // perform case-insensitive filtering; defaults to true
            loadOptions: _propTypes2.default.func.isRequired,
            // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
            loadingPlaceholder: _propTypes2.default.oneOfType([ // replaces the placeholder while options are loading
            _propTypes2.default.string, _propTypes2.default.node ]),
            multi: _propTypes2.default.bool,
            // multi-value input
            noResultsText: _propTypes2.default.oneOfType([ // field noResultsText, displayed when no options come back from the server
            _propTypes2.default.string, _propTypes2.default.node ]),
            onChange: _propTypes2.default.func,
            // onChange handler: function (newValue) {}
            onInputChange: _propTypes2.default.func,
            // optional for keeping track of what is being typed
            options: _propTypes2.default.array.isRequired,
            // array of options
            placeholder: _propTypes2.default.oneOfType([ // field placeholder, displayed when there's no value (shared with Select)
            _propTypes2.default.string, _propTypes2.default.node ]),
            searchPromptText: _propTypes2.default.oneOfType([ // label to prompt for search input
            _propTypes2.default.string, _propTypes2.default.node ]),
            value: _propTypes2.default.any
        }, defaultCache = {}, defaultProps = {
            autoload: !0,
            cache: defaultCache,
            children: defaultChildren,
            ignoreAccents: !0,
            ignoreCase: !0,
            loadingPlaceholder: "Loading...",
            options: [],
            searchPromptText: "Type to search"
        }, Async = function(_Component) {
            function Async(props, context) {
                _classCallCheck(this, Async);
                var _this = _possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this, props, context));
                return _this._cache = props.cache === defaultCache ? {} : props.cache, _this.state = {
                    inputValue: "",
                    isLoading: !1,
                    options: props.options
                }, _this.onInputChange = _this.onInputChange.bind(_this), _this;
            }
            return _inherits(Async, _Component), _createClass(Async, [ {
                key: "componentDidMount",
                value: function() {
                    var autoload = this.props.autoload;
                    autoload && this.loadOptions("");
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(nextProps) {
                    nextProps.options !== this.props.options && this.setState({
                        options: nextProps.options
                    });
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._callback = null;
                }
            }, {
                key: "loadOptions",
                value: function loadOptions(inputValue) {
                    var _this2 = this, loadOptions = this.props.loadOptions, cache = this._cache;
                    if (cache && Object.prototype.hasOwnProperty.call(cache, inputValue)) return void this.setState({
                        options: cache[inputValue]
                    });
                    var callback = function callback(error, data) {
                        if (callback === _this2._callback) {
                            _this2._callback = null;
                            var options = data && data.options || [];
                            cache && (cache[inputValue] = options), _this2.setState({
                                isLoading: !1,
                                options: options
                            });
                        }
                    };
                    // Ignore all but the most recent request
                    this._callback = callback;
                    var promise = loadOptions(inputValue, callback);
                    promise && promise.then(function(data) {
                        return callback(null, data);
                    }, function(error) {
                        return callback(error);
                    }), this._callback && !this.state.isLoading && this.setState({
                        isLoading: !0
                    });
                }
            }, {
                key: "onInputChange",
                value: function onInputChange(inputValue) {
                    var _props = this.props, ignoreAccents = _props.ignoreAccents, ignoreCase = _props.ignoreCase, onInputChange = _props.onInputChange, transformedInputValue = inputValue;
                    // Return the original input value to avoid modifying the user's view of the input while typing.
                    return ignoreAccents && (transformedInputValue = (0, _stripDiacritics2.default)(transformedInputValue)), 
                    ignoreCase && (transformedInputValue = transformedInputValue.toLowerCase()), onInputChange && onInputChange(transformedInputValue), 
                    this.setState({
                        inputValue: inputValue
                    }), this.loadOptions(transformedInputValue), inputValue;
                }
            }, {
                key: "noResultsText",
                value: function noResultsText() {
                    var _props2 = this.props, loadingPlaceholder = _props2.loadingPlaceholder, noResultsText = _props2.noResultsText, searchPromptText = _props2.searchPromptText, _state = this.state, inputValue = _state.inputValue, isLoading = _state.isLoading;
                    return isLoading ? loadingPlaceholder : inputValue && noResultsText ? noResultsText : searchPromptText;
                }
            }, {
                key: "focus",
                value: function() {
                    this.select.focus();
                }
            }, {
                key: "render",
                value: function() {
                    var _this3 = this, _props3 = this.props, children = _props3.children, loadingPlaceholder = _props3.loadingPlaceholder, placeholder = (_props3.multi, 
                    _props3.onChange, _props3.placeholder), _state2 = (_props3.value, this.state), isLoading = _state2.isLoading, options = _state2.options, props = {
                        noResultsText: this.noResultsText(),
                        placeholder: isLoading ? loadingPlaceholder : placeholder,
                        options: isLoading && loadingPlaceholder ? [] : options,
                        ref: function(_ref) {
                            return _this3.select = _ref;
                        }
                    };
                    return children(_extends({}, this.props, props, {
                        isLoading: isLoading,
                        onInputChange: this.onInputChange
                    }));
                }
            } ]), Async;
        }(_react.Component);
        exports.default = Async, Async.propTypes = propTypes, Async.defaultProps = defaultProps;
    }, /* 27 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function reduce(obj) {
            var props = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object.keys(obj).reduce(function(props, key) {
                var value = obj[key];
                return void 0 !== value && (props[key] = value), props;
            }, props);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(13), _react2 = _interopRequireDefault(_react), _Select = __webpack_require__(15), _Select2 = _interopRequireDefault(_Select), _Async = __webpack_require__(26), _Async2 = _interopRequireDefault(_Async), _Creatable = __webpack_require__(28), _Creatable2 = _interopRequireDefault(_Creatable), AsyncCreatableSelect = function(_React$Component) {
            function AsyncCreatableSelect() {
                return _classCallCheck(this, AsyncCreatableSelect), _possibleConstructorReturn(this, (AsyncCreatableSelect.__proto__ || Object.getPrototypeOf(AsyncCreatableSelect)).apply(this, arguments));
            }
            return _inherits(AsyncCreatableSelect, _React$Component), _createClass(AsyncCreatableSelect, [ {
                key: "focus",
                value: function() {
                    this.select.focus();
                }
            }, {
                key: "render",
                value: function() {
                    var _this2 = this;
                    return _react2.default.createElement(_Async2.default, this.props, function(asyncProps) {
                        return _react2.default.createElement(_Creatable2.default, _this2.props, function(creatableProps) {
                            return _react2.default.createElement(_Select2.default, _extends({}, reduce(asyncProps, reduce(creatableProps, {})), {
                                onInputChange: function(input) {
                                    return creatableProps.onInputChange(input), asyncProps.onInputChange(input);
                                },
                                ref: function(_ref) {
                                    _this2.select = _ref, creatableProps.ref(_ref), asyncProps.ref(_ref);
                                }
                            }));
                        });
                    });
                }
            } ]), AsyncCreatableSelect;
        }(_react2.default.Component);
        exports.default = AsyncCreatableSelect;
    }, /* 28 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
            return target;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function defaultChildren(props) {
            return _react2.default.createElement(_Select2.default, props);
        }
        function isOptionUnique(_ref3) {
            var option = _ref3.option, options = _ref3.options, labelKey = _ref3.labelKey, valueKey = _ref3.valueKey;
            return 0 === options.filter(function(existingOption) {
                return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
            }).length;
        }
        function isValidNewOption(_ref4) {
            var label = _ref4.label;
            return !!label;
        }
        function newOptionCreator(_ref5) {
            var label = _ref5.label, labelKey = _ref5.labelKey, valueKey = _ref5.valueKey, option = {};
            return option[valueKey] = label, option[labelKey] = label, option.className = "Select-create-option-placeholder", 
            option;
        }
        function promptTextCreator(label) {
            return 'Create option "' + label + '"';
        }
        function shouldKeyDownEventCreateNewOption(_ref6) {
            var keyCode = _ref6.keyCode;
            switch (keyCode) {
              case 9:
              // TAB
                case 13:
              // ENTER
                case 188:
                // COMMA
                return !0;
            }
            return !1;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(13), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(3), _propTypes2 = _interopRequireDefault(_propTypes), _Select = __webpack_require__(15), _Select2 = _interopRequireDefault(_Select), _defaultFilterOptions = __webpack_require__(20), _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions), _defaultMenuRenderer = __webpack_require__(22), _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer), CreatableSelect = function(_React$Component) {
            function CreatableSelect(props, context) {
                _classCallCheck(this, CreatableSelect);
                var _this = _possibleConstructorReturn(this, (CreatableSelect.__proto__ || Object.getPrototypeOf(CreatableSelect)).call(this, props, context));
                return _this.filterOptions = _this.filterOptions.bind(_this), _this.menuRenderer = _this.menuRenderer.bind(_this), 
                _this.onInputKeyDown = _this.onInputKeyDown.bind(_this), _this.onInputChange = _this.onInputChange.bind(_this), 
                _this.onOptionSelect = _this.onOptionSelect.bind(_this), _this;
            }
            return _inherits(CreatableSelect, _React$Component), _createClass(CreatableSelect, [ {
                key: "createNewOption",
                value: function() {
                    var _props = this.props, isValidNewOption = _props.isValidNewOption, newOptionCreator = _props.newOptionCreator, onNewOptionClick = _props.onNewOptionClick, _props$options = _props.options, options = void 0 === _props$options ? [] : _props$options;
                    _props.shouldKeyDownEventCreateNewOption;
                    if (isValidNewOption({
                        label: this.inputValue
                    })) {
                        var option = newOptionCreator({
                            label: this.inputValue,
                            labelKey: this.labelKey,
                            valueKey: this.valueKey
                        }), _isOptionUnique = this.isOptionUnique({
                            option: option
                        });
                        // Don't add the same option twice.
                        _isOptionUnique && (onNewOptionClick ? onNewOptionClick(option) : (options.unshift(option), 
                        this.select.selectValue(option)));
                    }
                }
            }, {
                key: "filterOptions",
                value: function filterOptions() {
                    var _props2 = this.props, filterOptions = _props2.filterOptions, isValidNewOption = _props2.isValidNewOption, promptTextCreator = (_props2.options, 
                    _props2.promptTextCreator), excludeOptions = (arguments.length <= 2 ? void 0 : arguments[2]) || [], filteredOptions = filterOptions.apply(void 0, arguments) || [];
                    if (isValidNewOption({
                        label: this.inputValue
                    })) {
                        var _newOptionCreator = this.props.newOptionCreator, option = _newOptionCreator({
                            label: this.inputValue,
                            labelKey: this.labelKey,
                            valueKey: this.valueKey
                        }), _isOptionUnique2 = this.isOptionUnique({
                            option: option,
                            options: excludeOptions.concat(filteredOptions)
                        });
                        if (_isOptionUnique2) {
                            var prompt = promptTextCreator(this.inputValue);
                            this._createPlaceholderOption = _newOptionCreator({
                                label: prompt,
                                labelKey: this.labelKey,
                                valueKey: this.valueKey
                            }), filteredOptions.unshift(this._createPlaceholderOption);
                        }
                    }
                    return filteredOptions;
                }
            }, {
                key: "isOptionUnique",
                value: function isOptionUnique(_ref) {
                    var option = _ref.option, options = _ref.options, isOptionUnique = this.props.isOptionUnique;
                    return options = options || this.select.filterOptions(), isOptionUnique({
                        labelKey: this.labelKey,
                        option: option,
                        options: options,
                        valueKey: this.valueKey
                    });
                }
            }, {
                key: "menuRenderer",
                value: function menuRenderer(params) {
                    var menuRenderer = this.props.menuRenderer;
                    return menuRenderer(_extends({}, params, {
                        onSelect: this.onOptionSelect,
                        selectValue: this.onOptionSelect
                    }));
                }
            }, {
                key: "onInputChange",
                value: function onInputChange(input) {
                    var onInputChange = this.props.onInputChange;
                    onInputChange && onInputChange(input), // This value may be needed in between Select mounts (when this.select is null)
                    this.inputValue = input;
                }
            }, {
                key: "onInputKeyDown",
                value: function onInputKeyDown(event) {
                    var _props3 = this.props, shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption, onInputKeyDown = _props3.onInputKeyDown, focusedOption = this.select.getFocusedOption();
                    focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption({
                        keyCode: event.keyCode
                    }) ? (this.createNewOption(), // Prevent decorated Select from doing anything additional with this keyDown event
                    event.preventDefault()) : onInputKeyDown && onInputKeyDown(event);
                }
            }, {
                key: "onOptionSelect",
                value: function(option, event) {
                    option === this._createPlaceholderOption ? this.createNewOption() : this.select.selectValue(option);
                }
            }, {
                key: "focus",
                value: function() {
                    this.select.focus();
                }
            }, {
                key: "render",
                value: function() {
                    var _this2 = this, _props4 = this.props, restProps = (_props4.newOptionCreator, 
                    _props4.shouldKeyDownEventCreateNewOption, _objectWithoutProperties(_props4, [ "newOptionCreator", "shouldKeyDownEventCreateNewOption" ])), children = this.props.children;
                    // We can't use destructuring default values to set the children,
                    // because it won't apply work if `children` is null. A falsy check is
                    // more reliable in real world use-cases.
                    children || (children = defaultChildren);
                    var props = _extends({}, restProps, {
                        allowCreate: !0,
                        filterOptions: this.filterOptions,
                        menuRenderer: this.menuRenderer,
                        onInputChange: this.onInputChange,
                        onInputKeyDown: this.onInputKeyDown,
                        ref: function(_ref2) {
                            _this2.select = _ref2, // These values may be needed in between Select mounts (when this.select is null)
                            _ref2 && (_this2.labelKey = _ref2.props.labelKey, _this2.valueKey = _ref2.props.valueKey);
                        }
                    });
                    return children(props);
                }
            } ]), CreatableSelect;
        }(_react2.default.Component);
        // Default prop methods
        CreatableSelect.isOptionUnique = isOptionUnique, CreatableSelect.isValidNewOption = isValidNewOption, 
        CreatableSelect.newOptionCreator = newOptionCreator, CreatableSelect.promptTextCreator = promptTextCreator, 
        CreatableSelect.shouldKeyDownEventCreateNewOption = shouldKeyDownEventCreateNewOption, 
        CreatableSelect.defaultProps = {
            filterOptions: _defaultFilterOptions2.default,
            isOptionUnique: isOptionUnique,
            isValidNewOption: isValidNewOption,
            menuRenderer: _defaultMenuRenderer2.default,
            newOptionCreator: newOptionCreator,
            promptTextCreator: promptTextCreator,
            shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
        }, CreatableSelect.propTypes = {
            // Child function responsible for creating the inner Select component
            // This component can be used to compose HOCs (eg Creatable and Async)
            // (props: Object): PropTypes.element
            children: _propTypes2.default.func,
            // See Select.propTypes.filterOptions
            filterOptions: _propTypes2.default.any,
            // Searches for any matching option within the set of options.
            // This function prevents duplicate options from being created.
            // ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
            isOptionUnique: _propTypes2.default.func,
            // Determines if the current input text represents a valid option.
            // ({ label: string }): boolean
            isValidNewOption: _propTypes2.default.func,
            // See Select.propTypes.menuRenderer
            menuRenderer: _propTypes2.default.any,
            // Factory to create new option.
            // ({ label: string, labelKey: string, valueKey: string }): Object
            newOptionCreator: _propTypes2.default.func,
            // input change handler: function (inputValue) {}
            onInputChange: _propTypes2.default.func,
            // input keyDown handler: function (event) {}
            onInputKeyDown: _propTypes2.default.func,
            // new option click handler: function (option) {}
            onNewOptionClick: _propTypes2.default.func,
            // See Select.propTypes.options
            options: _propTypes2.default.array,
            // Creates prompt/placeholder option text.
            // (filterText: string): string
            promptTextCreator: _propTypes2.default.func,
            // Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
            shouldKeyDownEventCreateNewOption: _propTypes2.default.func
        }, exports.default = CreatableSelect;
    }, /* 29 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _AutoSizer = __webpack_require__(30);
        Object.defineProperty(exports, "default", {
            enumerable: !0,
            get: function() {
                return _interopRequireDefault(_AutoSizer).default;
            }
        }), Object.defineProperty(exports, "AutoSizer", {
            enumerable: !0,
            get: function() {
                return _interopRequireDefault(_AutoSizer).default;
            }
        });
    }, /* 30 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj;
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _react = __webpack_require__(13), React = _interopRequireWildcard(_react), _detectElementResize = __webpack_require__(31), _detectElementResize2 = _interopRequireDefault(_detectElementResize), _propTypes = __webpack_require__(32), _propTypes2 = _interopRequireDefault(_propTypes), AutoSizer = function(_React$PureComponent) {
                function AutoSizer() {
                    var _ref, _temp, _this, _ret;
                    _classCallCheck(this, AutoSizer);
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    return _temp = _this = _possibleConstructorReturn(this, (_ref = AutoSizer.__proto__ || Object.getPrototypeOf(AutoSizer)).call.apply(_ref, [ this ].concat(args))), 
                    _this.state = {
                        height: _this.props.defaultHeight || 0,
                        width: _this.props.defaultWidth || 0
                    }, _this._onResize = function() {
                        var _this$props = _this.props, disableHeight = _this$props.disableHeight, disableWidth = _this$props.disableWidth, onResize = _this$props.onResize;
                        if (_this._parentNode) {
                            // Guard against AutoSizer component being removed from the DOM immediately after being added.
                            // This can result in invalid style values which can result in NaN values if we don't handle them.
                            // See issue #150 for more context.
                            var _height = _this._parentNode.offsetHeight || 0, _width = _this._parentNode.offsetWidth || 0, _style = window.getComputedStyle(_this._parentNode) || {}, paddingLeft = parseInt(_style.paddingLeft, 10) || 0, paddingRight = parseInt(_style.paddingRight, 10) || 0, paddingTop = parseInt(_style.paddingTop, 10) || 0, paddingBottom = parseInt(_style.paddingBottom, 10) || 0, newHeight = _height - paddingTop - paddingBottom, newWidth = _width - paddingLeft - paddingRight;
                            (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) && (_this.setState({
                                height: _height - paddingTop - paddingBottom,
                                width: _width - paddingLeft - paddingRight
                            }), onResize({
                                height: _height,
                                width: _width
                            }));
                        }
                    }, _this._setRef = function(autoSizer) {
                        _this._autoSizer = autoSizer;
                    }, _ret = _temp, _possibleConstructorReturn(_this, _ret);
                }
                return _inherits(AutoSizer, _React$PureComponent), _createClass(AutoSizer, [ {
                    key: "componentDidMount",
                    value: function() {
                        var nonce = this.props.nonce;
                        this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement && (// Delay access of parentNode until mount.
                        // This handles edge-cases where the component has already been unmounted before its ref has been set,
                        // As well as libraries like react-lite which have a slightly different lifecycle.
                        this._parentNode = this._autoSizer.parentNode, // Defer requiring resize handler in order to support server-side rendering.
                        // See issue #41
                        this._detectElementResize = (0, _detectElementResize2.default)(nonce), this._detectElementResize.addResizeListener(this._parentNode, this._onResize), 
                        this._onResize());
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._detectElementResize && this._parentNode && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
                    }
                }, {
                    key: "render",
                    value: function() {
                        var _props = this.props, children = _props.children, className = _props.className, disableHeight = _props.disableHeight, disableWidth = _props.disableWidth, style = _props.style, _state = this.state, height = _state.height, width = _state.width, outerStyle = {
                            overflow: "visible"
                        }, childParams = {};
                        /**
	       * TODO: Avoid rendering children before the initial measurements have been collected.
	       * At best this would just be wasting cycles.
	       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
	       * Note that if default width/height props were provided this would still work with SSR.
	      if (
	        height !== 0 &&
	        width !== 0
	      ) {
	        child = children({ height, width })
	      }
	      */
                        return disableHeight || (outerStyle.height = 0, childParams.height = height), disableWidth || (outerStyle.width = 0, 
                        childParams.width = width), React.createElement("div", {
                            className: className,
                            ref: this._setRef,
                            style: _extends({}, outerStyle, style)
                        }, children(childParams));
                    }
                } ]), AutoSizer;
            }(React.PureComponent);
            AutoSizer.defaultProps = {
                onResize: function() {},
                disableHeight: !1,
                disableWidth: !1,
                style: {}
            }, AutoSizer.propTypes = "production" === process.env.NODE_ENV ? null : {
                /** Function responsible for rendering children.*/
                children: _propTypes2.default.func.isRequired,
                /** Optional custom CSS class name to attach to root AutoSizer element.  */
                className: _propTypes2.default.string,
                /** Default height to use for initial render; useful for SSR */
                defaultHeight: _propTypes2.default.number,
                /** Default width to use for initial render; useful for SSR */
                defaultWidth: _propTypes2.default.number,
                /** Disable dynamic :height property */
                disableHeight: _propTypes2.default.bool.isRequired,
                /** Disable dynamic :width property */
                disableWidth: _propTypes2.default.bool.isRequired,
                /** Nonce of the inlined stylesheet for Content Security Policy */
                nonce: _propTypes2.default.string,
                /** Callback to be invoked on-resize */
                onResize: _propTypes2.default.func.isRequired,
                /** Optional inline style */
                style: _propTypes2.default.object
            }, exports.default = AutoSizer;
        }).call(exports, __webpack_require__(4));
    }, /* 31 */
    /***/
    function(module, exports) {
        /* WEBPACK VAR INJECTION */
        (function(global) {
            "use strict";
            /**
	 * Detect Element Resize.
	 * https://github.com/sdecima/javascript-detect-element-resize
	 * Sebastian Decima
	 *
	 * Forked from version 0.5.3; includes the following modifications:
	 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
	 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
	 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
	 * 4) Add nonce for style element.
	 **/
            function createDetectElementResize(nonce) {
                // Check `document` and `window` in case of server-side rendering
                var _window;
                _window = "undefined" != typeof window ? window : "undefined" != typeof self ? self : global;
                var attachEvent = "undefined" != typeof document && document.attachEvent;
                if (!attachEvent) {
                    var requestFrame = function() {
                        var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function(fn) {
                            return _window.setTimeout(fn, 20);
                        };
                        return function(fn) {
                            return raf(fn);
                        };
                    }(), cancelFrame = function() {
                        var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
                        return function(id) {
                            return cancel(id);
                        };
                    }(), resetTriggers = function(element) {
                        var triggers = element.__resizeTriggers__, expand = triggers.firstElementChild, contract = triggers.lastElementChild, expandChild = expand.firstElementChild;
                        contract.scrollLeft = contract.scrollWidth, contract.scrollTop = contract.scrollHeight, 
                        expandChild.style.width = expand.offsetWidth + 1 + "px", expandChild.style.height = expand.offsetHeight + 1 + "px", 
                        expand.scrollLeft = expand.scrollWidth, expand.scrollTop = expand.scrollHeight;
                    }, checkTriggers = function(element) {
                        return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
                    }, scrollListener = function(e) {
                        // Don't measure (which forces) reflow for scrolls that happen inside of children!
                        if (!(e.target.className && "function" == typeof e.target.className.indexOf && e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0)) {
                            var element = this;
                            resetTriggers(this), this.__resizeRAF__ && cancelFrame(this.__resizeRAF__), this.__resizeRAF__ = requestFrame(function() {
                                checkTriggers(element) && (element.__resizeLast__.width = element.offsetWidth, element.__resizeLast__.height = element.offsetHeight, 
                                element.__resizeListeners__.forEach(function(fn) {
                                    fn.call(element, e);
                                }));
                            });
                        }
                    }, animation = !1, keyframeprefix = "", animationstartevent = "animationstart", domPrefixes = "Webkit Moz O ms".split(" "), startEvents = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "), pfx = "", elm = document.createElement("fakeelement");
                    if (void 0 !== elm.style.animationName && (animation = !0), animation === !1) for (var i = 0; i < domPrefixes.length; i++) if (void 0 !== elm.style[domPrefixes[i] + "AnimationName"]) {
                        pfx = domPrefixes[i], keyframeprefix = "-" + pfx.toLowerCase() + "-", animationstartevent = startEvents[i], 
                        animation = !0;
                        break;
                    }
                    var animationName = "resizeanim", animationKeyframes = "@" + keyframeprefix + "keyframes " + animationName + " { from { opacity: 0; } to { opacity: 0; } } ", animationStyle = keyframeprefix + "animation: 1ms " + animationName + "; ";
                }
                var createStyles = function(doc) {
                    if (!doc.getElementById("detectElementResize")) {
                        //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
                        var css = (animationKeyframes ? animationKeyframes : "") + ".resize-triggers { " + (animationStyle ? animationStyle : "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', head = doc.head || doc.getElementsByTagName("head")[0], style = doc.createElement("style");
                        style.id = "detectElementResize", style.type = "text/css", null != nonce && style.setAttribute("nonce", nonce), 
                        style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(doc.createTextNode(css)), 
                        head.appendChild(style);
                    }
                }, addResizeListener = function(element, fn) {
                    if (attachEvent) element.attachEvent("onresize", fn); else {
                        if (!element.__resizeTriggers__) {
                            var doc = element.ownerDocument, elementStyle = _window.getComputedStyle(element);
                            elementStyle && "static" == elementStyle.position && (element.style.position = "relative"), 
                            createStyles(doc), element.__resizeLast__ = {}, element.__resizeListeners__ = [], 
                            (element.__resizeTriggers__ = doc.createElement("div")).className = "resize-triggers", 
                            element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', 
                            element.appendChild(element.__resizeTriggers__), resetTriggers(element), element.addEventListener("scroll", scrollListener, !0), 
                            /* Listen for a css animation to detect element display/re-attach */
                            animationstartevent && (element.__resizeTriggers__.__animationListener__ = function(e) {
                                e.animationName == animationName && resetTriggers(element);
                            }, element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__));
                        }
                        element.__resizeListeners__.push(fn);
                    }
                }, removeResizeListener = function(element, fn) {
                    if (attachEvent) element.detachEvent("onresize", fn); else if (element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1), 
                    !element.__resizeListeners__.length) {
                        element.removeEventListener("scroll", scrollListener, !0), element.__resizeTriggers__.__animationListener__ && (element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__), 
                        element.__resizeTriggers__.__animationListener__ = null);
                        try {
                            element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
                        } catch (e) {}
                    }
                };
                return {
                    addResizeListener: addResizeListener,
                    removeResizeListener: removeResizeListener
                };
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.default = createDetectElementResize;
        }).call(exports, function() {
            return this;
        }());
    }, /* 32 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
            if ("production" !== process.env.NODE_ENV) {
                var ReactIs = __webpack_require__(33), throwOnDirectAccess = !0;
                module.exports = __webpack_require__(36)(ReactIs.isElement, throwOnDirectAccess);
            } else // By explicitly using `prop-types` you are opting into new production behavior.
            // http://fb.me/prop-types-in-prod
            module.exports = __webpack_require__(39)();
        }).call(exports, __webpack_require__(4));
    }, /* 33 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            "production" === process.env.NODE_ENV ? module.exports = __webpack_require__(34) : module.exports = __webpack_require__(35);
        }).call(exports, __webpack_require__(4));
    }, /* 34 */
    /***/
    function(module, exports) {
        /** @license React v16.8.6
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
        "use strict";
        function t(a) {
            if ("object" == typeof a && null !== a) {
                var u = a.$$typeof;
                switch (u) {
                  case c:
                    switch (a = a.type) {
                      case l:
                      case m:
                      case e:
                      case g:
                      case f:
                      case p:
                        return a;

                      default:
                        switch (a = a && a.$$typeof) {
                          case k:
                          case n:
                          case h:
                            return a;

                          default:
                            return u;
                        }
                    }

                  case r:
                  case q:
                  case d:
                    return u;
                }
            }
        }
        function v(a) {
            return t(a) === m;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var b = "function" == typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.memo") : 60115, r = b ? Symbol.for("react.lazy") : 60116;
        exports.typeOf = t, exports.AsyncMode = l, exports.ConcurrentMode = m, exports.ContextConsumer = k, 
        exports.ContextProvider = h, exports.Element = c, exports.ForwardRef = n, exports.Fragment = e, 
        exports.Lazy = r, exports.Memo = q, exports.Portal = d, exports.Profiler = g, exports.StrictMode = f, 
        exports.Suspense = p, exports.isValidElementType = function(a) {
            return "string" == typeof a || "function" == typeof a || a === e || a === m || a === g || a === f || a === p || "object" == typeof a && null !== a && (a.$$typeof === r || a.$$typeof === q || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n);
        }, exports.isAsyncMode = function(a) {
            return v(a) || t(a) === l;
        }, exports.isConcurrentMode = v, exports.isContextConsumer = function(a) {
            return t(a) === k;
        }, exports.isContextProvider = function(a) {
            return t(a) === h;
        }, exports.isElement = function(a) {
            return "object" == typeof a && null !== a && a.$$typeof === c;
        }, exports.isForwardRef = function(a) {
            return t(a) === n;
        }, exports.isFragment = function(a) {
            return t(a) === e;
        }, exports.isLazy = function(a) {
            return t(a) === r;
        }, exports.isMemo = function(a) {
            return t(a) === q;
        }, exports.isPortal = function(a) {
            return t(a) === d;
        }, exports.isProfiler = function(a) {
            return t(a) === g;
        }, exports.isStrictMode = function(a) {
            return t(a) === f;
        }, exports.isSuspense = function(a) {
            return t(a) === p;
        };
    }, /* 35 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            /** @license React v16.8.6
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
            "use strict";
            "production" !== process.env.NODE_ENV && !function() {
                function isValidElementType(type) {
                    // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                    return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || "object" == typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
                }
                function typeOf(object) {
                    if ("object" == typeof object && null !== object) {
                        var $$typeof = object.$$typeof;
                        switch ($$typeof) {
                          case REACT_ELEMENT_TYPE:
                            var type = object.type;
                            switch (type) {
                              case REACT_ASYNC_MODE_TYPE:
                              case REACT_CONCURRENT_MODE_TYPE:
                              case REACT_FRAGMENT_TYPE:
                              case REACT_PROFILER_TYPE:
                              case REACT_STRICT_MODE_TYPE:
                              case REACT_SUSPENSE_TYPE:
                                return type;

                              default:
                                var $$typeofType = type && type.$$typeof;
                                switch ($$typeofType) {
                                  case REACT_CONTEXT_TYPE:
                                  case REACT_FORWARD_REF_TYPE:
                                  case REACT_PROVIDER_TYPE:
                                    return $$typeofType;

                                  default:
                                    return $$typeof;
                                }
                            }

                          case REACT_LAZY_TYPE:
                          case REACT_MEMO_TYPE:
                          case REACT_PORTAL_TYPE:
                            return $$typeof;
                        }
                    }
                }
                // AsyncMode should be deprecated
                function isAsyncMode(object) {
                    return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, 
                    lowPriorityWarning$1(!1, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), 
                    isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
                }
                function isConcurrentMode(object) {
                    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
                }
                function isContextConsumer(object) {
                    return typeOf(object) === REACT_CONTEXT_TYPE;
                }
                function isContextProvider(object) {
                    return typeOf(object) === REACT_PROVIDER_TYPE;
                }
                function isElement(object) {
                    return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
                }
                function isForwardRef(object) {
                    return typeOf(object) === REACT_FORWARD_REF_TYPE;
                }
                function isFragment(object) {
                    return typeOf(object) === REACT_FRAGMENT_TYPE;
                }
                function isLazy(object) {
                    return typeOf(object) === REACT_LAZY_TYPE;
                }
                function isMemo(object) {
                    return typeOf(object) === REACT_MEMO_TYPE;
                }
                function isPortal(object) {
                    return typeOf(object) === REACT_PORTAL_TYPE;
                }
                function isProfiler(object) {
                    return typeOf(object) === REACT_PROFILER_TYPE;
                }
                function isStrictMode(object) {
                    return typeOf(object) === REACT_STRICT_MODE_TYPE;
                }
                function isSuspense(object) {
                    return typeOf(object) === REACT_SUSPENSE_TYPE;
                }
                Object.defineProperty(exports, "__esModule", {
                    value: !0
                });
                // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
                // nor polyfill, then a plain number is used for performance.
                var hasSymbol = "function" == typeof Symbol && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113, REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116, lowPriorityWarning = function() {}, printWarning = function(format) {
                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
                    var argIndex = 0, message = "Warning: " + format.replace(/%s/g, function() {
                        return args[argIndex++];
                    });
                    "undefined" != typeof console && console.warn(message);
                    try {
                        // --- Welcome to debugging React ---
                        // This error was thrown as a convenience so that you can use this stack
                        // to find the callsite that caused this warning to fire.
                        throw new Error(message);
                    } catch (x) {}
                };
                lowPriorityWarning = function(condition, format) {
                    if (void 0 === format) throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");
                    if (!condition) {
                        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) args[_key2 - 2] = arguments[_key2];
                        printWarning.apply(void 0, [ format ].concat(args));
                    }
                };
                var lowPriorityWarning$1 = lowPriorityWarning, AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element = REACT_ELEMENT_TYPE, ForwardRef = REACT_FORWARD_REF_TYPE, Fragment = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1;
                exports.typeOf = typeOf, exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, 
                exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, 
                exports.Element = Element, exports.ForwardRef = ForwardRef, exports.Fragment = Fragment, 
                exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, exports.Profiler = Profiler, 
                exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.isValidElementType = isValidElementType, 
                exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, 
                exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, 
                exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, 
                exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, 
                exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense;
            }();
        }).call(exports, __webpack_require__(4));
    }, /* 36 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
            "use strict";
            function emptyFunctionThatReturnsNull() {
                return null;
            }
            var ReactIs = __webpack_require__(33), assign = __webpack_require__(9), ReactPropTypesSecret = __webpack_require__(37), checkPropTypes = __webpack_require__(38), has = Function.call.bind(Object.prototype.hasOwnProperty), printWarning = function() {};
            "production" !== process.env.NODE_ENV && (printWarning = function(text) {
                var message = "Warning: " + text;
                "undefined" != typeof console && console.error(message);
                try {
                    // --- Welcome to debugging React ---
                    // This error was thrown as a convenience so that you can use this stack
                    // to find the callsite that caused this warning to fire.
                    throw new Error(message);
                } catch (x) {}
            }), module.exports = function(isValidElement, throwOnDirectAccess) {
                // Before Symbol spec.
                /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
                function getIteratorFn(maybeIterable) {
                    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                    if ("function" == typeof iteratorFn) return iteratorFn;
                }
                /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
                /*eslint-disable no-self-compare*/
                function is(x, y) {
                    // SameValue algorithm
                    // SameValue algorithm
                    return x === y ? 0 !== x || 1 / x === 1 / y : x !== x && y !== y;
                }
                /*eslint-enable no-self-compare*/
                /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
                function PropTypeError(message) {
                    this.message = message, this.stack = "";
                }
                function createChainableTypeChecker(validate) {
                    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                        if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, 
                        secret !== ReactPropTypesSecret) {
                            if (throwOnDirectAccess) {
                                // New behavior only for users of `prop-types` package
                                var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                                throw err.name = "Invariant Violation", err;
                            }
                            if ("production" !== process.env.NODE_ENV && "undefined" != typeof console) {
                                // Old behavior for people using React.PropTypes
                                var cacheKey = componentName + ":" + propName;
                                !manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                                manualPropTypeWarningCount < 3 && (printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), 
                                manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
                            }
                        }
                        return null == props[propName] ? isRequired ? new PropTypeError(null === props[propName] ? "The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`.") : "The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`.")) : null : validate(props, propName, componentName, location, propFullName);
                    }
                    if ("production" !== process.env.NODE_ENV) var manualPropTypeCallCache = {}, manualPropTypeWarningCount = 0;
                    var chainedCheckType = checkType.bind(null, !1);
                    return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
                }
                function createPrimitiveTypeChecker(expectedType) {
                    function validate(props, propName, componentName, location, propFullName, secret) {
                        var propValue = props[propName], propType = getPropType(propValue);
                        if (propType !== expectedType) {
                            // `propValue` being instance of, say, date/regexp, pass the 'object'
                            // check, but we can offer a more precise error message here rather than
                            // 'of type `object`'.
                            var preciseType = getPreciseType(propValue);
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createAnyTypeChecker() {
                    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
                }
                function createArrayOfTypeChecker(typeChecker) {
                    function validate(props, propName, componentName, location, propFullName) {
                        if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                        var propValue = props[propName];
                        if (!Array.isArray(propValue)) {
                            var propType = getPropType(propValue);
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
                        }
                        for (var i = 0; i < propValue.length; i++) {
                            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                            if (error instanceof Error) return error;
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createElementTypeChecker() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!isValidElement(propValue)) {
                            var propType = getPropType(propValue);
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createElementTypeTypeChecker() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!ReactIs.isValidElementType(propValue)) {
                            var propType = getPropType(propValue);
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createInstanceTypeChecker(expectedClass) {
                    function validate(props, propName, componentName, location, propFullName) {
                        if (!(props[propName] instanceof expectedClass)) {
                            var expectedClassName = expectedClass.name || ANONYMOUS, actualClassName = getClassName(props[propName]);
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createEnumTypeChecker(expectedValues) {
                    function validate(props, propName, componentName, location, propFullName) {
                        for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
                        var valuesString = JSON.stringify(expectedValues, function(key, value) {
                            var type = getPreciseType(value);
                            return "symbol" === type ? String(value) : value;
                        });
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
                    }
                    return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : ("production" !== process.env.NODE_ENV && printWarning(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), 
                    emptyFunctionThatReturnsNull);
                }
                function createObjectOfTypeChecker(typeChecker) {
                    function validate(props, propName, componentName, location, propFullName) {
                        if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                        var propValue = props[propName], propType = getPropType(propValue);
                        if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
                        for (var key in propValue) if (has(propValue, key)) {
                            var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                            if (error instanceof Error) return error;
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createUnionTypeChecker(arrayOfTypeCheckers) {
                    function validate(props, propName, componentName, location, propFullName) {
                        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                            var checker = arrayOfTypeCheckers[i];
                            if (null == checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
                        }
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
                    }
                    if (!Array.isArray(arrayOfTypeCheckers)) return "production" !== process.env.NODE_ENV ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0, 
                    emptyFunctionThatReturnsNull;
                    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                        var checker = arrayOfTypeCheckers[i];
                        if ("function" != typeof checker) return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."), 
                        emptyFunctionThatReturnsNull;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createNodeChecker() {
                    function validate(props, propName, componentName, location, propFullName) {
                        return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
                    }
                    return createChainableTypeChecker(validate);
                }
                function createShapeTypeChecker(shapeTypes) {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName], propType = getPropType(propValue);
                        if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                        for (var key in shapeTypes) {
                            var checker = shapeTypes[key];
                            if (checker) {
                                var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                                if (error) return error;
                            }
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createStrictShapeTypeChecker(shapeTypes) {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName], propType = getPropType(propValue);
                        if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                        // We need to check all keys in case some are required but missing from
                        // props.
                        var allKeys = assign({}, props[propName], shapeTypes);
                        for (var key in allKeys) {
                            var checker = shapeTypes[key];
                            if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
                            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                            if (error) return error;
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function isNode(propValue) {
                    switch (typeof propValue) {
                      case "number":
                      case "string":
                      case "undefined":
                        return !0;

                      case "boolean":
                        return !propValue;

                      case "object":
                        if (Array.isArray(propValue)) return propValue.every(isNode);
                        if (null === propValue || isValidElement(propValue)) return !0;
                        var iteratorFn = getIteratorFn(propValue);
                        if (!iteratorFn) return !1;
                        var step, iterator = iteratorFn.call(propValue);
                        if (iteratorFn !== propValue.entries) {
                            for (;!(step = iterator.next()).done; ) if (!isNode(step.value)) return !1;
                        } else // Iterator will provide entry [k,v] tuples rather than values.
                        for (;!(step = iterator.next()).done; ) {
                            var entry = step.value;
                            if (entry && !isNode(entry[1])) return !1;
                        }
                        return !0;

                      default:
                        return !1;
                    }
                }
                function isSymbol(propType, propValue) {
                    // Native Symbol.
                    // Native Symbol.
                    // falsy value can't be a Symbol
                    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
                    return "symbol" === propType || !!propValue && ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
                }
                // Equivalent of `typeof` but with special handling for array and regexp.
                function getPropType(propValue) {
                    var propType = typeof propValue;
                    return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
                }
                // This handles more types than `getPropType`. Only used for error messages.
                // See `createPrimitiveTypeChecker`.
                function getPreciseType(propValue) {
                    if ("undefined" == typeof propValue || null === propValue) return "" + propValue;
                    var propType = getPropType(propValue);
                    if ("object" === propType) {
                        if (propValue instanceof Date) return "date";
                        if (propValue instanceof RegExp) return "regexp";
                    }
                    return propType;
                }
                // Returns a string that is postfixed to a warning about an invalid type.
                // For example, "undefined" or "of type array"
                function getPostfixForTypeWarning(value) {
                    var type = getPreciseType(value);
                    switch (type) {
                      case "array":
                      case "object":
                        return "an " + type;

                      case "boolean":
                      case "date":
                      case "regexp":
                        return "a " + type;

                      default:
                        return type;
                    }
                }
                // Returns class name of the object, if any.
                function getClassName(propValue) {
                    return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
                }
                /* global Symbol */
                var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator", ANONYMOUS = "<<anonymous>>", ReactPropTypes = {
                    array: createPrimitiveTypeChecker("array"),
                    bool: createPrimitiveTypeChecker("boolean"),
                    func: createPrimitiveTypeChecker("function"),
                    number: createPrimitiveTypeChecker("number"),
                    object: createPrimitiveTypeChecker("object"),
                    string: createPrimitiveTypeChecker("string"),
                    symbol: createPrimitiveTypeChecker("symbol"),
                    any: createAnyTypeChecker(),
                    arrayOf: createArrayOfTypeChecker,
                    element: createElementTypeChecker(),
                    elementType: createElementTypeTypeChecker(),
                    instanceOf: createInstanceTypeChecker,
                    node: createNodeChecker(),
                    objectOf: createObjectOfTypeChecker,
                    oneOf: createEnumTypeChecker,
                    oneOfType: createUnionTypeChecker,
                    shape: createShapeTypeChecker,
                    exact: createStrictShapeTypeChecker
                };
                // Make `instanceof Error` still work for returned errors.
                return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes, 
                ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, 
                ReactPropTypes;
            };
        }).call(exports, __webpack_require__(4));
    }, /* 37 */
    /***/
    function(module, exports) {
        /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
        "use strict";
        var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        module.exports = ReactPropTypesSecret;
    }, /* 38 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
            "use strict";
            /**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
            function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
                if ("production" !== process.env.NODE_ENV) for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
                    var error;
                    // Prop type validation may throw. In case they do, we don't want to
                    // fail the render phase where it didn't fail before. So we log it.
                    // After these have been cleaned up, we'll let them throw.
                    try {
                        // This is intentionally an invariant that gets caught. It's the same
                        // behavior as without this statement except with a better message.
                        if ("function" != typeof typeSpecs[typeSpecName]) {
                            var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                            throw err.name = "Invariant Violation", err;
                        }
                        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                    } catch (ex) {
                        error = ex;
                    }
                    if (!error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), 
                    error instanceof Error && !(error.message in loggedTypeFailures)) {
                        // Only monitor this failure once because there tends to be a lot of the
                        // same error.
                        loggedTypeFailures[error.message] = !0;
                        var stack = getStack ? getStack() : "";
                        printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
                    }
                }
            }
            var printWarning = function() {};
            if ("production" !== process.env.NODE_ENV) {
                var ReactPropTypesSecret = __webpack_require__(37), loggedTypeFailures = {}, has = Function.call.bind(Object.prototype.hasOwnProperty);
                printWarning = function(text) {
                    var message = "Warning: " + text;
                    "undefined" != typeof console && console.error(message);
                    try {
                        // --- Welcome to debugging React ---
                        // This error was thrown as a convenience so that you can use this stack
                        // to find the callsite that caused this warning to fire.
                        throw new Error(message);
                    } catch (x) {}
                };
            }
            /**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
            checkPropTypes.resetWarningCache = function() {
                "production" !== process.env.NODE_ENV && (loggedTypeFailures = {});
            }, module.exports = checkPropTypes;
        }).call(exports, __webpack_require__(4));
    }, /* 39 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
        "use strict";
        function emptyFunction() {}
        function emptyFunctionWithReset() {}
        var ReactPropTypesSecret = __webpack_require__(37);
        emptyFunctionWithReset.resetWarningCache = emptyFunction, module.exports = function() {
            function shim(props, propName, componentName, location, propFullName, secret) {
                if (secret !== ReactPropTypesSecret) {
                    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw err.name = "Invariant Violation", err;
                }
            }
            function getShim() {
                return shim;
            }
            shim.isRequired = shim;
            // Important!
            // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
            var ReactPropTypes = {
                array: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,
                any: shim,
                arrayOf: getShim,
                element: shim,
                elementType: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim,
                exact: getShim,
                checkPropTypes: emptyFunctionWithReset,
                resetWarningCache: emptyFunction
            };
            return ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
        };
    }, /* 40 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.bpfrpt_proptype_RowRendererParams = exports.List = exports.default = void 0;
        var _List = __webpack_require__(41);
        Object.defineProperty(exports, "default", {
            enumerable: !0,
            get: function() {
                return _interopRequireDefault(_List).default;
            }
        }), Object.defineProperty(exports, "List", {
            enumerable: !0,
            get: function() {
                return _interopRequireDefault(_List).default;
            }
        });
        var _types = __webpack_require__(62);
        exports.bpfrpt_proptype_RowRendererParams = _types.bpfrpt_proptype_RowRendererParams;
    }, /* 41 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj;
            }
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _Grid = __webpack_require__(42), _Grid2 = _interopRequireDefault(_Grid), _react = __webpack_require__(13), React = _interopRequireWildcard(_react), _clsx = __webpack_require__(44), _clsx2 = _interopRequireDefault(_clsx), _types = __webpack_require__(62), _propTypes = __webpack_require__(32), _propTypes2 = _interopRequireDefault(_propTypes), List = function(_React$PureComponent) {
                function List() {
                    var _ref, _temp, _this, _ret;
                    _classCallCheck(this, List);
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    return _temp = _this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [ this ].concat(args))), 
                    _this._cellRenderer = function(_ref2) {
                        var parent = _ref2.parent, rowIndex = _ref2.rowIndex, style = _ref2.style, isScrolling = _ref2.isScrolling, isVisible = _ref2.isVisible, key = _ref2.key, rowRenderer = _this.props.rowRenderer, _Object$getOwnPropert = Object.getOwnPropertyDescriptor(style, "width"), writable = _Object$getOwnPropert.writable;
                        // By default, List cells should be 100% width.
                        // This prevents them from flowing under a scrollbar (if present).
                        return writable && (style.width = "100%"), rowRenderer({
                            index: rowIndex,
                            style: style,
                            isScrolling: isScrolling,
                            isVisible: isVisible,
                            key: key,
                            parent: parent
                        });
                    }, _this._setRef = function(ref) {
                        _this.Grid = ref;
                    }, _this._onScroll = function(_ref3) {
                        var clientHeight = _ref3.clientHeight, scrollHeight = _ref3.scrollHeight, scrollTop = _ref3.scrollTop, onScroll = _this.props.onScroll;
                        onScroll({
                            clientHeight: clientHeight,
                            scrollHeight: scrollHeight,
                            scrollTop: scrollTop
                        });
                    }, _this._onSectionRendered = function(_ref4) {
                        var rowOverscanStartIndex = _ref4.rowOverscanStartIndex, rowOverscanStopIndex = _ref4.rowOverscanStopIndex, rowStartIndex = _ref4.rowStartIndex, rowStopIndex = _ref4.rowStopIndex, onRowsRendered = _this.props.onRowsRendered;
                        onRowsRendered({
                            overscanStartIndex: rowOverscanStartIndex,
                            overscanStopIndex: rowOverscanStopIndex,
                            startIndex: rowStartIndex,
                            stopIndex: rowStopIndex
                        });
                    }, _ret = _temp, _possibleConstructorReturn(_this, _ret);
                }
                return _inherits(List, _React$PureComponent), _createClass(List, [ {
                    key: "forceUpdateGrid",
                    value: function() {
                        this.Grid && this.Grid.forceUpdate();
                    }
                }, {
                    key: "getOffsetForRow",
                    value: function(_ref5) {
                        var alignment = _ref5.alignment, index = _ref5.index;
                        if (this.Grid) {
                            var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
                                alignment: alignment,
                                rowIndex: index,
                                columnIndex: 0
                            }), _scrollTop = _Grid$getOffsetForCel.scrollTop;
                            return _scrollTop;
                        }
                        return 0;
                    }
                }, {
                    key: "invalidateCellSizeAfterRender",
                    value: function(_ref6) {
                        var columnIndex = _ref6.columnIndex, rowIndex = _ref6.rowIndex;
                        this.Grid && this.Grid.invalidateCellSizeAfterRender({
                            rowIndex: rowIndex,
                            columnIndex: columnIndex
                        });
                    }
                }, {
                    key: "measureAllRows",
                    value: function() {
                        this.Grid && this.Grid.measureAllCells();
                    }
                }, {
                    key: "recomputeGridSize",
                    value: function() {
                        var _ref7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, _ref7$columnIndex = _ref7.columnIndex, columnIndex = void 0 === _ref7$columnIndex ? 0 : _ref7$columnIndex, _ref7$rowIndex = _ref7.rowIndex, rowIndex = void 0 === _ref7$rowIndex ? 0 : _ref7$rowIndex;
                        this.Grid && this.Grid.recomputeGridSize({
                            rowIndex: rowIndex,
                            columnIndex: columnIndex
                        });
                    }
                }, {
                    key: "recomputeRowHeights",
                    value: function() {
                        var index = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.Grid && this.Grid.recomputeGridSize({
                            rowIndex: index,
                            columnIndex: 0
                        });
                    }
                }, {
                    key: "scrollToPosition",
                    value: function() {
                        var scrollTop = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.Grid && this.Grid.scrollToPosition({
                            scrollTop: scrollTop
                        });
                    }
                }, {
                    key: "scrollToRow",
                    value: function() {
                        var index = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.Grid && this.Grid.scrollToCell({
                            columnIndex: 0,
                            rowIndex: index
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var _props = this.props, className = _props.className, noRowsRenderer = _props.noRowsRenderer, scrollToIndex = _props.scrollToIndex, width = _props.width, classNames = (0, 
                        _clsx2.default)("ReactVirtualized__List", className);
                        return React.createElement(_Grid2.default, _extends({}, this.props, {
                            autoContainerWidth: !0,
                            cellRenderer: this._cellRenderer,
                            className: classNames,
                            columnWidth: width,
                            columnCount: 1,
                            noContentRenderer: noRowsRenderer,
                            onScroll: this._onScroll,
                            onSectionRendered: this._onSectionRendered,
                            ref: this._setRef,
                            scrollToRow: scrollToIndex
                        }));
                    }
                } ]), List;
            }(React.PureComponent);
            List.defaultProps = {
                autoHeight: !1,
                estimatedRowSize: 30,
                onScroll: function() {},
                noRowsRenderer: function() {
                    return null;
                },
                onRowsRendered: function() {},
                overscanIndicesGetter: _Grid.accessibilityOverscanIndicesGetter,
                overscanRowCount: 10,
                scrollToAlignment: "auto",
                scrollToIndex: -1,
                style: {}
            }, List.propTypes = "production" === process.env.NODE_ENV ? null : {
                "aria-label": _propTypes2.default.string,
                /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
                autoHeight: _propTypes2.default.bool.isRequired,
                /** Optional CSS class name */
                className: _propTypes2.default.string,
                /**
	   * Used to estimate the total height of a List before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
                estimatedRowSize: _propTypes2.default.number.isRequired,
                /** Height constraint for list (determines how many actual rows are rendered) */
                height: _propTypes2.default.number.isRequired,
                /** Optional renderer to be used in place of rows when rowCount is 0 */
                noRowsRenderer: function() {
                    return ("function" == typeof _Grid.bpfrpt_proptype_NoContentRenderer ? _Grid.bpfrpt_proptype_NoContentRenderer.isRequired ? _Grid.bpfrpt_proptype_NoContentRenderer.isRequired : _Grid.bpfrpt_proptype_NoContentRenderer : _propTypes2.default.shape(_Grid.bpfrpt_proptype_NoContentRenderer).isRequired).apply(this, arguments);
                },
                /** Callback invoked with information about the slice of rows that were just rendered.  */
                onRowsRendered: _propTypes2.default.func.isRequired,
                /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   */
                onScroll: _propTypes2.default.func.isRequired,
                /** See Grid#overscanIndicesGetter */
                overscanIndicesGetter: function() {
                    return ("function" == typeof _Grid.bpfrpt_proptype_OverscanIndicesGetter ? _Grid.bpfrpt_proptype_OverscanIndicesGetter.isRequired ? _Grid.bpfrpt_proptype_OverscanIndicesGetter.isRequired : _Grid.bpfrpt_proptype_OverscanIndicesGetter : _propTypes2.default.shape(_Grid.bpfrpt_proptype_OverscanIndicesGetter).isRequired).apply(this, arguments);
                },
                /**
	   * Number of rows to render above/below the visible bounds of the list.
	   * These rows can help for smoother scrolling on touch devices.
	   */
                overscanRowCount: _propTypes2.default.number.isRequired,
                /** Either a fixed row height (number) or a function that returns the height of a row given its index.  */
                rowHeight: function() {
                    return ("function" == typeof _Grid.bpfrpt_proptype_CellSize ? _Grid.bpfrpt_proptype_CellSize.isRequired ? _Grid.bpfrpt_proptype_CellSize.isRequired : _Grid.bpfrpt_proptype_CellSize : _propTypes2.default.shape(_Grid.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
                },
                /** Responsible for rendering a row given an index; ({ index: number }): node */
                rowRenderer: function() {
                    return ("function" == typeof _types.bpfrpt_proptype_RowRenderer ? _types.bpfrpt_proptype_RowRenderer.isRequired ? _types.bpfrpt_proptype_RowRenderer.isRequired : _types.bpfrpt_proptype_RowRenderer : _propTypes2.default.shape(_types.bpfrpt_proptype_RowRenderer).isRequired).apply(this, arguments);
                },
                /** Number of rows in list. */
                rowCount: _propTypes2.default.number.isRequired,
                /** See Grid#scrollToAlignment */
                scrollToAlignment: function() {
                    return ("function" == typeof _Grid.bpfrpt_proptype_Alignment ? _Grid.bpfrpt_proptype_Alignment.isRequired ? _Grid.bpfrpt_proptype_Alignment.isRequired : _Grid.bpfrpt_proptype_Alignment : _propTypes2.default.shape(_Grid.bpfrpt_proptype_Alignment).isRequired).apply(this, arguments);
                },
                /** Row index to ensure visible (by forcefully scrolling if necessary) */
                scrollToIndex: _propTypes2.default.number.isRequired,
                /** Vertical offset. */
                scrollTop: _propTypes2.default.number,
                /** Optional inline style */
                style: _propTypes2.default.object.isRequired,
                /** Tab index for focus */
                tabIndex: _propTypes2.default.number,
                /** Width of list */
                width: _propTypes2.default.number.isRequired
            }, exports.default = List;
        }).call(exports, __webpack_require__(4));
    }, /* 42 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.bpfrpt_proptype_Scroll = exports.bpfrpt_proptype_CellRendererParams = exports.bpfrpt_proptype_RenderedSection = exports.bpfrpt_proptype_OverscanIndicesGetter = exports.bpfrpt_proptype_CellSize = exports.bpfrpt_proptype_CellPosition = exports.bpfrpt_proptype_Alignment = exports.bpfrpt_proptype_NoContentRenderer = exports.defaultOverscanIndicesGetter = exports.defaultCellRangeRenderer = exports.accessibilityOverscanIndicesGetter = exports.Grid = exports.default = void 0;
        var _Grid = __webpack_require__(43);
        Object.defineProperty(exports, "default", {
            enumerable: !0,
            get: function() {
                return _interopRequireDefault(_Grid).default;
            }
        }), Object.defineProperty(exports, "Grid", {
            enumerable: !0,
            get: function() {
                return _interopRequireDefault(_Grid).default;
            }
        });
        var _accessibilityOverscanIndicesGetter = __webpack_require__(61);
        Object.defineProperty(exports, "accessibilityOverscanIndicesGetter", {
            enumerable: !0,
            get: function() {
                return _interopRequireDefault(_accessibilityOverscanIndicesGetter).default;
            }
        });
        var _defaultCellRangeRenderer = __webpack_require__(54);
        Object.defineProperty(exports, "defaultCellRangeRenderer", {
            enumerable: !0,
            get: function() {
                return _interopRequireDefault(_defaultCellRangeRenderer).default;
            }
        });
        var _defaultOverscanIndicesGetter = __webpack_require__(52);
        Object.defineProperty(exports, "defaultOverscanIndicesGetter", {
            enumerable: !0,
            get: function() {
                return _interopRequireDefault(_defaultOverscanIndicesGetter).default;
            }
        });
        var _types = __webpack_require__(49);
        exports.bpfrpt_proptype_NoContentRenderer = _types.bpfrpt_proptype_NoContentRenderer, 
        exports.bpfrpt_proptype_Alignment = _types.bpfrpt_proptype_Alignment, exports.bpfrpt_proptype_CellPosition = _types.bpfrpt_proptype_CellPosition, 
        exports.bpfrpt_proptype_CellSize = _types.bpfrpt_proptype_CellSize, exports.bpfrpt_proptype_OverscanIndicesGetter = _types.bpfrpt_proptype_OverscanIndicesGetter, 
        exports.bpfrpt_proptype_RenderedSection = _types.bpfrpt_proptype_RenderedSection, 
        exports.bpfrpt_proptype_CellRendererParams = _types.bpfrpt_proptype_CellRendererParams, 
        exports.bpfrpt_proptype_Scroll = _types.bpfrpt_proptype_Scroll;
    }, /* 43 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj;
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = void 0;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _react = __webpack_require__(13), React = _interopRequireWildcard(_react), _clsx = __webpack_require__(44), _clsx2 = _interopRequireDefault(_clsx), _calculateSizeAndPositionDataAndUpdateScrollOffset = __webpack_require__(45), _calculateSizeAndPositionDataAndUpdateScrollOffset2 = _interopRequireDefault(_calculateSizeAndPositionDataAndUpdateScrollOffset), _ScalingCellSizeAndPositionManager = __webpack_require__(46), _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager), _createCallbackMemoizer = __webpack_require__(51), _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer), _defaultOverscanIndicesGetter = __webpack_require__(52), _defaultOverscanIndicesGetter2 = _interopRequireDefault(_defaultOverscanIndicesGetter), _updateScrollIndexHelper = __webpack_require__(53), _updateScrollIndexHelper2 = _interopRequireDefault(_updateScrollIndexHelper), _defaultCellRangeRenderer = __webpack_require__(54), _defaultCellRangeRenderer2 = _interopRequireDefault(_defaultCellRangeRenderer), _scrollbarSize = __webpack_require__(55), _scrollbarSize2 = _interopRequireDefault(_scrollbarSize), _reactLifecyclesCompat = __webpack_require__(58), _requestAnimationTimeout = __webpack_require__(59), _types = __webpack_require__(49), _propTypes = __webpack_require__(32), _propTypes2 = _interopRequireDefault(_propTypes), DEFAULT_SCROLLING_RESET_TIME_INTERVAL = exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150, SCROLL_POSITION_CHANGE_REASONS = {
                OBSERVED: "observed",
                REQUESTED: "requested"
            }, renderNull = function() {
                return null;
            }, Grid = function(_React$PureComponent) {
                // Invokes onSectionRendered callback only when start/stop row or column indices change
                function Grid(props) {
                    _classCallCheck(this, Grid);
                    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));
                    _this._onGridRenderedMemoizer = (0, _createCallbackMemoizer2.default)(), _this._onScrollMemoizer = (0, 
                    _createCallbackMemoizer2.default)(!1), _this._deferredInvalidateColumnIndex = null, 
                    _this._deferredInvalidateRowIndex = null, _this._recomputeScrollLeftFlag = !1, _this._recomputeScrollTopFlag = !1, 
                    _this._horizontalScrollBarSize = 0, _this._verticalScrollBarSize = 0, _this._scrollbarPresenceChanged = !1, 
                    _this._renderedColumnStartIndex = 0, _this._renderedColumnStopIndex = 0, _this._renderedRowStartIndex = 0, 
                    _this._renderedRowStopIndex = 0, _this._styleCache = {}, _this._cellCache = {}, 
                    _this._debounceScrollEndedCallback = function() {
                        _this._disablePointerEventsTimeoutId = null, // isScrolling is used to determine if we reset styleCache
                        _this.setState({
                            isScrolling: !1,
                            needToResetStyleCache: !1
                        });
                    }, _this._invokeOnGridRenderedHelper = function() {
                        var onSectionRendered = _this.props.onSectionRendered;
                        _this._onGridRenderedMemoizer({
                            callback: onSectionRendered,
                            indices: {
                                columnOverscanStartIndex: _this._columnStartIndex,
                                columnOverscanStopIndex: _this._columnStopIndex,
                                columnStartIndex: _this._renderedColumnStartIndex,
                                columnStopIndex: _this._renderedColumnStopIndex,
                                rowOverscanStartIndex: _this._rowStartIndex,
                                rowOverscanStopIndex: _this._rowStopIndex,
                                rowStartIndex: _this._renderedRowStartIndex,
                                rowStopIndex: _this._renderedRowStopIndex
                            }
                        });
                    }, _this._setScrollingContainerRef = function(ref) {
                        _this._scrollingContainer = ref;
                    }, _this._onScroll = function(event) {
                        // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
                        // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
                        // See issue #404 for more information.
                        event.target === _this._scrollingContainer && _this.handleScrollEvent(event.target);
                    };
                    var columnSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
                        cellCount: props.columnCount,
                        cellSizeGetter: function(params) {
                            return Grid._wrapSizeGetter(props.columnWidth)(params);
                        },
                        estimatedCellSize: Grid._getEstimatedColumnSize(props)
                    }), rowSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
                        cellCount: props.rowCount,
                        cellSizeGetter: function(params) {
                            return Grid._wrapSizeGetter(props.rowHeight)(params);
                        },
                        estimatedCellSize: Grid._getEstimatedRowSize(props)
                    });
                    return _this.state = {
                        instanceProps: {
                            columnSizeAndPositionManager: columnSizeAndPositionManager,
                            rowSizeAndPositionManager: rowSizeAndPositionManager,
                            prevColumnWidth: props.columnWidth,
                            prevRowHeight: props.rowHeight,
                            prevColumnCount: props.columnCount,
                            prevRowCount: props.rowCount,
                            prevIsScrolling: props.isScrolling === !0,
                            prevScrollToColumn: props.scrollToColumn,
                            prevScrollToRow: props.scrollToRow,
                            prevScrollLeft: props.scrollLeft,
                            prevScrollTop: props.scrollTop,
                            scrollbarSize: 0,
                            scrollbarSizeMeasured: !1
                        },
                        isScrolling: !1,
                        scrollDirectionHorizontal: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
                        scrollDirectionVertical: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
                        scrollLeft: props.scrollLeft || 0,
                        scrollTop: props.scrollTop || 0,
                        scrollPositionChangeReason: null,
                        needToResetStyleCache: !1
                    }, props.scrollToRow > 0 && (_this._initialScrollTop = _this._getCalculatedScrollTop(props, _this.state)), 
                    props.scrollToColumn > 0 && (_this._initialScrollLeft = _this._getCalculatedScrollLeft(props, _this.state)), 
                    _this;
                }
                /**
	   * Gets offsets for a given cell and alignment.
	   */
                return _inherits(Grid, _React$PureComponent), _createClass(Grid, [ {
                    key: "getOffsetForCell",
                    value: function() {
                        var _ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, _ref$alignment = _ref.alignment, alignment = void 0 === _ref$alignment ? this.props.scrollToAlignment : _ref$alignment, _ref$columnIndex = _ref.columnIndex, columnIndex = void 0 === _ref$columnIndex ? this.props.scrollToColumn : _ref$columnIndex, _ref$rowIndex = _ref.rowIndex, rowIndex = void 0 === _ref$rowIndex ? this.props.scrollToRow : _ref$rowIndex, offsetProps = _extends({}, this.props, {
                            scrollToAlignment: alignment,
                            scrollToColumn: columnIndex,
                            scrollToRow: rowIndex
                        });
                        return {
                            scrollLeft: this._getCalculatedScrollLeft(offsetProps),
                            scrollTop: this._getCalculatedScrollTop(offsetProps)
                        };
                    }
                }, {
                    key: "getTotalRowsHeight",
                    value: function() {
                        return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
                    }
                }, {
                    key: "getTotalColumnsWidth",
                    value: function() {
                        return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
                    }
                }, {
                    key: "handleScrollEvent",
                    value: function(_ref2) {
                        var _ref2$scrollLeft = _ref2.scrollLeft, scrollLeftParam = void 0 === _ref2$scrollLeft ? 0 : _ref2$scrollLeft, _ref2$scrollTop = _ref2.scrollTop, scrollTopParam = void 0 === _ref2$scrollTop ? 0 : _ref2$scrollTop;
                        // On iOS, we can arrive at negative offsets by swiping past the start.
                        // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
                        if (!(scrollTopParam < 0)) {
                            // Prevent pointer events from interrupting a smooth scroll
                            this._debounceScrollEnded();
                            var _props = this.props, autoHeight = _props.autoHeight, autoWidth = _props.autoWidth, height = _props.height, width = _props.width, instanceProps = this.state.instanceProps, scrollbarSize = instanceProps.scrollbarSize, totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize(), totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize(), scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam), scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam);
                            // Certain devices (like Apple touchpad) rapid-fire duplicate events.
                            // Don't force a re-render if this is the case.
                            // The mouse may move faster then the animation frame does.
                            // Use requestAnimationFrame to avoid over-updating.
                            if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
                                // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
                                // Don't change direction for an axis unless scroll offset has changed.
                                var _scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionHorizontal, _scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionVertical, newState = {
                                    isScrolling: !0,
                                    scrollDirectionHorizontal: _scrollDirectionHorizontal,
                                    scrollDirectionVertical: _scrollDirectionVertical,
                                    scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
                                };
                                autoHeight || (newState.scrollTop = scrollTop), autoWidth || (newState.scrollLeft = scrollLeft), 
                                newState.needToResetStyleCache = !1, this.setState(newState);
                            }
                            this._invokeOnScrollMemoizer({
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop,
                                totalColumnsWidth: totalColumnsWidth,
                                totalRowsHeight: totalRowsHeight
                            });
                        }
                    }
                }, {
                    key: "invalidateCellSizeAfterRender",
                    value: function(_ref3) {
                        var columnIndex = _ref3.columnIndex, rowIndex = _ref3.rowIndex;
                        this._deferredInvalidateColumnIndex = "number" == typeof this._deferredInvalidateColumnIndex ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex, 
                        this._deferredInvalidateRowIndex = "number" == typeof this._deferredInvalidateRowIndex ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
                    }
                }, {
                    key: "measureAllCells",
                    value: function() {
                        var _props2 = this.props, columnCount = _props2.columnCount, rowCount = _props2.rowCount, instanceProps = this.state.instanceProps;
                        instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1), 
                        instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
                    }
                }, {
                    key: "recomputeGridSize",
                    value: function() {
                        var _ref4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, _ref4$columnIndex = _ref4.columnIndex, columnIndex = void 0 === _ref4$columnIndex ? 0 : _ref4$columnIndex, _ref4$rowIndex = _ref4.rowIndex, rowIndex = void 0 === _ref4$rowIndex ? 0 : _ref4$rowIndex, _props3 = this.props, scrollToColumn = _props3.scrollToColumn, scrollToRow = _props3.scrollToRow, instanceProps = this.state.instanceProps;
                        instanceProps.columnSizeAndPositionManager.resetCell(columnIndex), instanceProps.rowSizeAndPositionManager.resetCell(rowIndex), 
                        // Cell sizes may be determined by a function property.
                        // In this case the cDU handler can't know if they changed.
                        // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.
                        this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn), 
                        this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD ? rowIndex <= scrollToRow : rowIndex >= scrollToRow), 
                        // Clear cell cache in case we are scrolling;
                        // Invalid row heights likely mean invalid cached content as well.
                        this._styleCache = {}, this._cellCache = {}, this.forceUpdate();
                    }
                }, {
                    key: "scrollToCell",
                    value: function(_ref5) {
                        var columnIndex = _ref5.columnIndex, rowIndex = _ref5.rowIndex, columnCount = this.props.columnCount, props = this.props;
                        // Don't adjust scroll offset for single-column grids (eg List, Table).
                        // This can cause a funky scroll offset because of the vertical scrollbar width.
                        columnCount > 1 && void 0 !== columnIndex && this._updateScrollLeftForScrollToColumn(_extends({}, props, {
                            scrollToColumn: columnIndex
                        })), void 0 !== rowIndex && this._updateScrollTopForScrollToRow(_extends({}, props, {
                            scrollToRow: rowIndex
                        }));
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var _props4 = this.props, getScrollbarSize = _props4.getScrollbarSize, height = _props4.height, scrollLeft = _props4.scrollLeft, scrollToColumn = _props4.scrollToColumn, scrollTop = _props4.scrollTop, scrollToRow = _props4.scrollToRow, width = _props4.width, instanceProps = this.state.instanceProps;
                        if (// Reset initial offsets to be ignored in browser
                        this._initialScrollTop = 0, this._initialScrollLeft = 0, // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
                        // We must do this at the start of the method as we may calculate and update scroll position below.
                        this._handleInvalidatedGridSize(), // If this component was first rendered server-side, scrollbar size will be undefined.
                        // In that event we need to remeasure.
                        instanceProps.scrollbarSizeMeasured || this.setState(function(prevState) {
                            var stateUpdate = _extends({}, prevState, {
                                needToResetStyleCache: !1
                            });
                            return stateUpdate.instanceProps.scrollbarSize = getScrollbarSize(), stateUpdate.instanceProps.scrollbarSizeMeasured = !0, 
                            stateUpdate;
                        }), "number" == typeof scrollLeft && scrollLeft >= 0 || "number" == typeof scrollTop && scrollTop >= 0) {
                            var stateUpdate = Grid._getScrollToPositionStateUpdate({
                                prevState: this.state,
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop
                            });
                            stateUpdate && (stateUpdate.needToResetStyleCache = !1, this.setState(stateUpdate));
                        }
                        // refs don't work in `react-test-renderer`
                        this._scrollingContainer && (// setting the ref's scrollLeft and scrollTop.
                        // Somehow in MultiGrid the main grid doesn't trigger a update on mount.
                        this._scrollingContainer.scrollLeft !== this.state.scrollLeft && (this._scrollingContainer.scrollLeft = this.state.scrollLeft), 
                        this._scrollingContainer.scrollTop !== this.state.scrollTop && (this._scrollingContainer.scrollTop = this.state.scrollTop));
                        // Don't update scroll offset if the size is 0; we don't render any cells in this case.
                        // Setting a state may cause us to later thing we've updated the offce when we haven't.
                        var sizeIsBiggerThanZero = height > 0 && width > 0;
                        scrollToColumn >= 0 && sizeIsBiggerThanZero && this._updateScrollLeftForScrollToColumn(), 
                        scrollToRow >= 0 && sizeIsBiggerThanZero && this._updateScrollTopForScrollToRow(), 
                        // Update onRowsRendered callback
                        this._invokeOnGridRenderedHelper(), // Initialize onScroll callback
                        this._invokeOnScrollMemoizer({
                            scrollLeft: scrollLeft || 0,
                            scrollTop: scrollTop || 0,
                            totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
                            totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
                        }), this._maybeCallOnScrollbarPresenceChange();
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(prevProps, prevState) {
                        var _this2 = this, _props5 = this.props, autoHeight = _props5.autoHeight, autoWidth = _props5.autoWidth, columnCount = _props5.columnCount, height = _props5.height, rowCount = _props5.rowCount, scrollToAlignment = _props5.scrollToAlignment, scrollToColumn = _props5.scrollToColumn, scrollToRow = _props5.scrollToRow, width = _props5.width, _state = this.state, scrollLeft = _state.scrollLeft, scrollPositionChangeReason = _state.scrollPositionChangeReason, scrollTop = _state.scrollTop, instanceProps = _state.instanceProps;
                        // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
                        // We must do this at the start of the method as we may calculate and update scroll position below.
                        this._handleInvalidatedGridSize();
                        // Handle edge case where column or row count has only just increased over 0.
                        // In this case we may have to restore a previously-specified scroll offset.
                        // For more info see bvaughn/react-virtualized/issues/218
                        var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && 0 === prevProps.columnCount || rowCount > 0 && 0 === prevProps.rowCount;
                        // Make sure requested changes to :scrollLeft or :scrollTop get applied.
                        // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
                        // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
                        // So we only set these when we require an adjustment of the scroll position.
                        // See issue #2 for more information.
                        scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED && (// @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
                        // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
                        !autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero) && (this._scrollingContainer.scrollLeft = scrollLeft), 
                        !autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero) && (this._scrollingContainer.scrollTop = scrollTop));
                        // Special case where the previous size was 0:
                        // In this case we don't show any windowed cells at all.
                        // So we should always recalculate offset afterwards.
                        var sizeJustIncreasedFromZero = (0 === prevProps.width || 0 === prevProps.height) && height > 0 && width > 0;
                        // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
                        if (// Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
                        // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
                        this._recomputeScrollLeftFlag ? (this._recomputeScrollLeftFlag = !1, this._updateScrollLeftForScrollToColumn(this.props)) : (0, 
                        _updateScrollIndexHelper2.default)({
                            cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
                            previousCellsCount: prevProps.columnCount,
                            previousCellSize: prevProps.columnWidth,
                            previousScrollToAlignment: prevProps.scrollToAlignment,
                            previousScrollToIndex: prevProps.scrollToColumn,
                            previousSize: prevProps.width,
                            scrollOffset: scrollLeft,
                            scrollToAlignment: scrollToAlignment,
                            scrollToIndex: scrollToColumn,
                            size: width,
                            sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
                            updateScrollIndexCallback: function() {
                                return _this2._updateScrollLeftForScrollToColumn(_this2.props);
                            }
                        }), this._recomputeScrollTopFlag ? (this._recomputeScrollTopFlag = !1, this._updateScrollTopForScrollToRow(this.props)) : (0, 
                        _updateScrollIndexHelper2.default)({
                            cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
                            previousCellsCount: prevProps.rowCount,
                            previousCellSize: prevProps.rowHeight,
                            previousScrollToAlignment: prevProps.scrollToAlignment,
                            previousScrollToIndex: prevProps.scrollToRow,
                            previousSize: prevProps.height,
                            scrollOffset: scrollTop,
                            scrollToAlignment: scrollToAlignment,
                            scrollToIndex: scrollToRow,
                            size: height,
                            sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
                            updateScrollIndexCallback: function() {
                                return _this2._updateScrollTopForScrollToRow(_this2.props);
                            }
                        }), // Update onRowsRendered callback if start/stop indices have changed
                        this._invokeOnGridRenderedHelper(), scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
                            var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize(), totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
                            this._invokeOnScrollMemoizer({
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop,
                                totalColumnsWidth: totalColumnsWidth,
                                totalRowsHeight: totalRowsHeight
                            });
                        }
                        this._maybeCallOnScrollbarPresenceChange();
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._disablePointerEventsTimeoutId && (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
                    }
                }, {
                    key: "render",
                    value: function() {
                        var _props6 = this.props, autoContainerWidth = _props6.autoContainerWidth, autoHeight = _props6.autoHeight, autoWidth = _props6.autoWidth, className = _props6.className, containerProps = _props6.containerProps, containerRole = _props6.containerRole, containerStyle = _props6.containerStyle, height = _props6.height, id = _props6.id, noContentRenderer = _props6.noContentRenderer, role = _props6.role, style = _props6.style, tabIndex = _props6.tabIndex, width = _props6.width, _state2 = this.state, instanceProps = _state2.instanceProps, needToResetStyleCache = _state2.needToResetStyleCache, isScrolling = this._isScrolling(), gridStyle = {
                            boxSizing: "border-box",
                            direction: "ltr",
                            height: autoHeight ? "auto" : height,
                            position: "relative",
                            width: autoWidth ? "auto" : width,
                            WebkitOverflowScrolling: "touch",
                            willChange: "transform"
                        };
                        needToResetStyleCache && (this._styleCache = {}), // calculate _styleCache here
                        // if state.isScrolling (not from _isScrolling) then reset
                        this.state.isScrolling || this._resetStyleCache(), // calculate children to render here
                        this._calculateChildrenToRender(this.props, this.state);
                        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize(), totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize(), verticalScrollBarSize = totalRowsHeight > height ? instanceProps.scrollbarSize : 0, horizontalScrollBarSize = totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
                        horizontalScrollBarSize === this._horizontalScrollBarSize && verticalScrollBarSize === this._verticalScrollBarSize || (this._horizontalScrollBarSize = horizontalScrollBarSize, 
                        this._verticalScrollBarSize = verticalScrollBarSize, this._scrollbarPresenceChanged = !0), 
                        // Also explicitly init styles to 'auto' if scrollbars are required.
                        // This works around an obscure edge case where external CSS styles have not yet been loaded,
                        // But an initial scroll index of offset is set as an external prop.
                        // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
                        // This was originally reported via clauderic/react-infinite-calendar/issues/23
                        gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? "hidden" : "auto", 
                        gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? "hidden" : "auto";
                        var childrenToDisplay = this._childrenToDisplay, showNoContentRenderer = 0 === childrenToDisplay.length && height > 0 && width > 0;
                        return React.createElement("div", _extends({
                            ref: this._setScrollingContainerRef
                        }, containerProps, {
                            "aria-label": this.props["aria-label"],
                            "aria-readonly": this.props["aria-readonly"],
                            className: (0, _clsx2.default)("ReactVirtualized__Grid", className),
                            id: id,
                            onScroll: this._onScroll,
                            role: role,
                            style: _extends({}, gridStyle, style),
                            tabIndex: tabIndex
                        }), childrenToDisplay.length > 0 && React.createElement("div", {
                            className: "ReactVirtualized__Grid__innerScrollContainer",
                            role: containerRole,
                            style: _extends({
                                width: autoContainerWidth ? "auto" : totalColumnsWidth,
                                height: totalRowsHeight,
                                maxWidth: totalColumnsWidth,
                                maxHeight: totalRowsHeight,
                                overflow: "hidden",
                                pointerEvents: isScrolling ? "none" : "",
                                position: "relative"
                            }, containerStyle)
                        }, childrenToDisplay), showNoContentRenderer && noContentRenderer());
                    }
                }, {
                    key: "_calculateChildrenToRender",
                    value: function() {
                        var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props, state = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state, cellRenderer = props.cellRenderer, cellRangeRenderer = props.cellRangeRenderer, columnCount = props.columnCount, deferredMeasurementCache = props.deferredMeasurementCache, height = props.height, overscanColumnCount = props.overscanColumnCount, overscanIndicesGetter = props.overscanIndicesGetter, overscanRowCount = props.overscanRowCount, rowCount = props.rowCount, width = props.width, isScrollingOptOut = props.isScrollingOptOut, scrollDirectionHorizontal = state.scrollDirectionHorizontal, scrollDirectionVertical = state.scrollDirectionVertical, instanceProps = state.instanceProps, scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop, scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft, isScrolling = this._isScrolling(props, state);
                        // Render only enough columns and rows to cover the visible area of the grid.
                        if (this._childrenToDisplay = [], height > 0 && width > 0) {
                            var visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
                                containerSize: width,
                                offset: scrollLeft
                            }), visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
                                containerSize: height,
                                offset: scrollTop
                            }), horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
                                containerSize: width,
                                offset: scrollLeft
                            }), verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
                                containerSize: height,
                                offset: scrollTop
                            });
                            // Store for _invokeOnGridRenderedHelper()
                            this._renderedColumnStartIndex = visibleColumnIndices.start, this._renderedColumnStopIndex = visibleColumnIndices.stop, 
                            this._renderedRowStartIndex = visibleRowIndices.start, this._renderedRowStopIndex = visibleRowIndices.stop;
                            var overscanColumnIndices = overscanIndicesGetter({
                                direction: "horizontal",
                                cellCount: columnCount,
                                overscanCellsCount: overscanColumnCount,
                                scrollDirection: scrollDirectionHorizontal,
                                startIndex: "number" == typeof visibleColumnIndices.start ? visibleColumnIndices.start : 0,
                                stopIndex: "number" == typeof visibleColumnIndices.stop ? visibleColumnIndices.stop : -1
                            }), overscanRowIndices = overscanIndicesGetter({
                                direction: "vertical",
                                cellCount: rowCount,
                                overscanCellsCount: overscanRowCount,
                                scrollDirection: scrollDirectionVertical,
                                startIndex: "number" == typeof visibleRowIndices.start ? visibleRowIndices.start : 0,
                                stopIndex: "number" == typeof visibleRowIndices.stop ? visibleRowIndices.stop : -1
                            }), columnStartIndex = overscanColumnIndices.overscanStartIndex, columnStopIndex = overscanColumnIndices.overscanStopIndex, rowStartIndex = overscanRowIndices.overscanStartIndex, rowStopIndex = overscanRowIndices.overscanStopIndex;
                            // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.
                            if (deferredMeasurementCache) {
                                // If rows have a dynamic height, scan the rows we are about to render.
                                // If any have not yet been measured, then we need to render all columns initially,
                                // Because the height of the row is equal to the tallest cell within that row,
                                // (And so we can't know the height without measuring all column-cells first).
                                if (!deferredMeasurementCache.hasFixedHeight()) for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) if (!deferredMeasurementCache.has(rowIndex, 0)) {
                                    columnStartIndex = 0, columnStopIndex = columnCount - 1;
                                    break;
                                }
                                // If columns have a dynamic width, scan the columns we are about to render.
                                // If any have not yet been measured, then we need to render all rows initially,
                                // Because the width of the column is equal to the widest cell within that column,
                                // (And so we can't know the width without measuring all row-cells first).
                                if (!deferredMeasurementCache.hasFixedWidth()) for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) if (!deferredMeasurementCache.has(0, columnIndex)) {
                                    rowStartIndex = 0, rowStopIndex = rowCount - 1;
                                    break;
                                }
                            }
                            this._childrenToDisplay = cellRangeRenderer({
                                cellCache: this._cellCache,
                                cellRenderer: cellRenderer,
                                columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
                                columnStartIndex: columnStartIndex,
                                columnStopIndex: columnStopIndex,
                                deferredMeasurementCache: deferredMeasurementCache,
                                horizontalOffsetAdjustment: horizontalOffsetAdjustment,
                                isScrolling: isScrolling,
                                isScrollingOptOut: isScrollingOptOut,
                                parent: this,
                                rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
                                rowStartIndex: rowStartIndex,
                                rowStopIndex: rowStopIndex,
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop,
                                styleCache: this._styleCache,
                                verticalOffsetAdjustment: verticalOffsetAdjustment,
                                visibleColumnIndices: visibleColumnIndices,
                                visibleRowIndices: visibleRowIndices
                            }), // update the indices
                            this._columnStartIndex = columnStartIndex, this._columnStopIndex = columnStopIndex, 
                            this._rowStartIndex = rowStartIndex, this._rowStopIndex = rowStopIndex;
                        }
                    }
                }, {
                    key: "_debounceScrollEnded",
                    value: function() {
                        var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
                        this._disablePointerEventsTimeoutId && (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId), 
                        this._disablePointerEventsTimeoutId = (0, _requestAnimationTimeout.requestAnimationTimeout)(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
                    }
                }, {
                    key: "_handleInvalidatedGridSize",
                    /**
	     * Check for batched CellMeasurer size invalidations.
	     * This will occur the first time one or more previously unmeasured cells are rendered.
	     */
                    value: function() {
                        if ("number" == typeof this._deferredInvalidateColumnIndex && "number" == typeof this._deferredInvalidateRowIndex) {
                            var columnIndex = this._deferredInvalidateColumnIndex, rowIndex = this._deferredInvalidateRowIndex;
                            this._deferredInvalidateColumnIndex = null, this._deferredInvalidateRowIndex = null, 
                            this.recomputeGridSize({
                                columnIndex: columnIndex,
                                rowIndex: rowIndex
                            });
                        }
                    }
                }, {
                    key: "_invokeOnScrollMemoizer",
                    value: function(_ref6) {
                        var _this3 = this, scrollLeft = _ref6.scrollLeft, scrollTop = _ref6.scrollTop, totalColumnsWidth = _ref6.totalColumnsWidth, totalRowsHeight = _ref6.totalRowsHeight;
                        this._onScrollMemoizer({
                            callback: function(_ref7) {
                                var scrollLeft = _ref7.scrollLeft, scrollTop = _ref7.scrollTop, _props7 = _this3.props, height = _props7.height, onScroll = _props7.onScroll, width = _props7.width;
                                onScroll({
                                    clientHeight: height,
                                    clientWidth: width,
                                    scrollHeight: totalRowsHeight,
                                    scrollLeft: scrollLeft,
                                    scrollTop: scrollTop,
                                    scrollWidth: totalColumnsWidth
                                });
                            },
                            indices: {
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop
                            }
                        });
                    }
                }, {
                    key: "_isScrolling",
                    value: function() {
                        var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props, state = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
                        // If isScrolling is defined in props, use it to override the value in state
                        // This is a performance optimization for WindowScroller + Grid
                        return Object.hasOwnProperty.call(props, "isScrolling") ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
                    }
                }, {
                    key: "_maybeCallOnScrollbarPresenceChange",
                    value: function() {
                        if (this._scrollbarPresenceChanged) {
                            var _onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;
                            this._scrollbarPresenceChanged = !1, _onScrollbarPresenceChange({
                                horizontal: this._horizontalScrollBarSize > 0,
                                size: this.state.instanceProps.scrollbarSize,
                                vertical: this._verticalScrollBarSize > 0
                            });
                        }
                    }
                }, {
                    key: "scrollToPosition",
                    /**
	     * Scroll to the specified offset(s).
	     * Useful for animating position changes.
	     */
                    value: function(_ref8) {
                        var scrollLeft = _ref8.scrollLeft, scrollTop = _ref8.scrollTop, stateUpdate = Grid._getScrollToPositionStateUpdate({
                            prevState: this.state,
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop
                        });
                        stateUpdate && (stateUpdate.needToResetStyleCache = !1, this.setState(stateUpdate));
                    }
                }, {
                    key: "_getCalculatedScrollLeft",
                    value: function() {
                        var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props, state = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
                        return Grid._getCalculatedScrollLeft(props, state);
                    }
                }, {
                    key: "_updateScrollLeftForScrollToColumn",
                    value: function() {
                        var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props, state = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state, stateUpdate = Grid._getScrollLeftForScrollToColumnStateUpdate(props, state);
                        stateUpdate && (stateUpdate.needToResetStyleCache = !1, this.setState(stateUpdate));
                    }
                }, {
                    key: "_getCalculatedScrollTop",
                    value: function() {
                        var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props, state = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
                        return Grid._getCalculatedScrollTop(props, state);
                    }
                }, {
                    key: "_resetStyleCache",
                    value: function() {
                        var styleCache = this._styleCache, cellCache = this._cellCache, isScrollingOptOut = this.props.isScrollingOptOut;
                        // Reset cell and style caches once scrolling stops.
                        // This makes Grid simpler to use (since cells commonly change).
                        // And it keeps the caches from growing too large.
                        // Performance is most sensitive when a user is scrolling.
                        // Don't clear visible cells from cellCache if isScrollingOptOut is specified.
                        // This keeps the cellCache to a resonable size.
                        this._cellCache = {}, this._styleCache = {};
                        // Copy over the visible cell styles so avoid unnecessary re-render.
                        for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
                            var key = rowIndex + "-" + columnIndex;
                            this._styleCache[key] = styleCache[key], isScrollingOptOut && (this._cellCache[key] = cellCache[key]);
                        }
                    }
                }, {
                    key: "_updateScrollTopForScrollToRow",
                    value: function() {
                        var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props, state = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state, stateUpdate = Grid._getScrollTopForScrollToRowStateUpdate(props, state);
                        stateUpdate && (stateUpdate.needToResetStyleCache = !1, this.setState(stateUpdate));
                    }
                } ], [ {
                    key: "getDerivedStateFromProps",
                    value: function(nextProps, prevState) {
                        var newState = {}, instanceProps = prevState.instanceProps;
                        0 === nextProps.columnCount && 0 !== prevState.scrollLeft || 0 === nextProps.rowCount && 0 !== prevState.scrollTop ? (newState.scrollLeft = 0, 
                        newState.scrollTop = 0) : (nextProps.scrollLeft !== instanceProps.prevScrollLeft && nextProps.scrollToColumn < 0 || nextProps.scrollTop !== instanceProps.prevScrollTop && nextProps.scrollToRow < 0) && Object.assign(newState, Grid._getScrollToPositionStateUpdate({
                            prevState: prevState,
                            scrollLeft: nextProps.scrollLeft,
                            scrollTop: nextProps.scrollTop
                        })), // Initially we should not clearStyleCache
                        newState.needToResetStyleCache = !1, nextProps.columnWidth === instanceProps.prevColumnWidth && nextProps.rowHeight === instanceProps.prevRowHeight || (// Reset cache. set it to {} in render
                        newState.needToResetStyleCache = !0), instanceProps.columnSizeAndPositionManager.configure({
                            cellCount: nextProps.columnCount,
                            estimatedCellSize: Grid._getEstimatedColumnSize(nextProps),
                            cellSizeGetter: Grid._wrapSizeGetter(nextProps.columnWidth)
                        }), instanceProps.rowSizeAndPositionManager.configure({
                            cellCount: nextProps.rowCount,
                            estimatedCellSize: Grid._getEstimatedRowSize(nextProps),
                            cellSizeGetter: Grid._wrapSizeGetter(nextProps.rowHeight)
                        }), 0 !== instanceProps.prevColumnCount && 0 !== instanceProps.prevRowCount || (instanceProps.prevColumnCount = 0, 
                        instanceProps.prevRowCount = 0), // If scrolling is controlled outside this component, clear cache when scrolling stops
                        nextProps.autoHeight && nextProps.isScrolling === !1 && instanceProps.prevIsScrolling === !0 && Object.assign(newState, {
                            isScrolling: !1
                        });
                        var maybeStateA = void 0, maybeStateB = void 0;
                        // getting scrollBarSize (moved from componentWillMount)
                        return (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
                            cellCount: instanceProps.prevColumnCount,
                            cellSize: "number" == typeof instanceProps.prevColumnWidth ? instanceProps.prevColumnWidth : null,
                            computeMetadataCallback: function() {
                                return instanceProps.columnSizeAndPositionManager.resetCell(0);
                            },
                            computeMetadataCallbackProps: nextProps,
                            nextCellsCount: nextProps.columnCount,
                            nextCellSize: "number" == typeof nextProps.columnWidth ? nextProps.columnWidth : null,
                            nextScrollToIndex: nextProps.scrollToColumn,
                            scrollToIndex: instanceProps.prevScrollToColumn,
                            updateScrollOffsetForScrollToIndex: function() {
                                maybeStateA = Grid._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
                            }
                        }), (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
                            cellCount: instanceProps.prevRowCount,
                            cellSize: "number" == typeof instanceProps.prevRowHeight ? instanceProps.prevRowHeight : null,
                            computeMetadataCallback: function() {
                                return instanceProps.rowSizeAndPositionManager.resetCell(0);
                            },
                            computeMetadataCallbackProps: nextProps,
                            nextCellsCount: nextProps.rowCount,
                            nextCellSize: "number" == typeof nextProps.rowHeight ? nextProps.rowHeight : null,
                            nextScrollToIndex: nextProps.scrollToRow,
                            scrollToIndex: instanceProps.prevScrollToRow,
                            updateScrollOffsetForScrollToIndex: function() {
                                maybeStateB = Grid._getScrollTopForScrollToRowStateUpdate(nextProps, prevState);
                            }
                        }), instanceProps.prevColumnCount = nextProps.columnCount, instanceProps.prevColumnWidth = nextProps.columnWidth, 
                        instanceProps.prevIsScrolling = nextProps.isScrolling === !0, instanceProps.prevRowCount = nextProps.rowCount, 
                        instanceProps.prevRowHeight = nextProps.rowHeight, instanceProps.prevScrollToColumn = nextProps.scrollToColumn, 
                        instanceProps.prevScrollToRow = nextProps.scrollToRow, instanceProps.prevScrollLeft = nextProps.scrollLeft, 
                        instanceProps.prevScrollTop = nextProps.scrollTop, instanceProps.scrollbarSize = nextProps.getScrollbarSize(), 
                        void 0 === instanceProps.scrollbarSize ? (instanceProps.scrollbarSizeMeasured = !1, 
                        instanceProps.scrollbarSize = 0) : instanceProps.scrollbarSizeMeasured = !0, newState.instanceProps = instanceProps, 
                        _extends({}, newState, maybeStateA, maybeStateB);
                    }
                }, {
                    key: "_getEstimatedColumnSize",
                    value: function(props) {
                        return "number" == typeof props.columnWidth ? props.columnWidth : props.estimatedColumnSize;
                    }
                }, {
                    key: "_getEstimatedRowSize",
                    value: function(props) {
                        return "number" == typeof props.rowHeight ? props.rowHeight : props.estimatedRowSize;
                    }
                }, {
                    key: "_getScrollToPositionStateUpdate",
                    /**
	     * Get the updated state after scrolling to
	     * scrollLeft and scrollTop
	     */
                    value: function(_ref9) {
                        var prevState = _ref9.prevState, scrollLeft = _ref9.scrollLeft, scrollTop = _ref9.scrollTop, newState = {
                            scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
                        };
                        return "number" == typeof scrollLeft && scrollLeft >= 0 && (newState.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD, 
                        newState.scrollLeft = scrollLeft), "number" == typeof scrollTop && scrollTop >= 0 && (newState.scrollDirectionVertical = scrollTop > prevState.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD, 
                        newState.scrollTop = scrollTop), "number" == typeof scrollLeft && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || "number" == typeof scrollTop && scrollTop >= 0 && scrollTop !== prevState.scrollTop ? newState : null;
                    }
                }, {
                    key: "_wrapSizeGetter",
                    value: function(value) {
                        return "function" == typeof value ? value : function() {
                            return value;
                        };
                    }
                }, {
                    key: "_getCalculatedScrollLeft",
                    value: function(nextProps, prevState) {
                        var columnCount = nextProps.columnCount, height = nextProps.height, scrollToAlignment = nextProps.scrollToAlignment, scrollToColumn = nextProps.scrollToColumn, width = nextProps.width, scrollLeft = prevState.scrollLeft, instanceProps = prevState.instanceProps;
                        if (columnCount > 0) {
                            var finalColumn = columnCount - 1, targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn), totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize(), scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
                            return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
                                align: scrollToAlignment,
                                containerSize: width - scrollBarSize,
                                currentOffset: scrollLeft,
                                targetIndex: targetIndex
                            });
                        }
                        return 0;
                    }
                }, {
                    key: "_getScrollLeftForScrollToColumnStateUpdate",
                    value: function(nextProps, prevState) {
                        var scrollLeft = prevState.scrollLeft, calculatedScrollLeft = Grid._getCalculatedScrollLeft(nextProps, prevState);
                        return "number" == typeof calculatedScrollLeft && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft ? Grid._getScrollToPositionStateUpdate({
                            prevState: prevState,
                            scrollLeft: calculatedScrollLeft,
                            scrollTop: -1
                        }) : null;
                    }
                }, {
                    key: "_getCalculatedScrollTop",
                    value: function(nextProps, prevState) {
                        var height = nextProps.height, rowCount = nextProps.rowCount, scrollToAlignment = nextProps.scrollToAlignment, scrollToRow = nextProps.scrollToRow, width = nextProps.width, scrollTop = prevState.scrollTop, instanceProps = prevState.instanceProps;
                        if (rowCount > 0) {
                            var finalRow = rowCount - 1, targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow), totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize(), scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
                            return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
                                align: scrollToAlignment,
                                containerSize: height - scrollBarSize,
                                currentOffset: scrollTop,
                                targetIndex: targetIndex
                            });
                        }
                        return 0;
                    }
                }, {
                    key: "_getScrollTopForScrollToRowStateUpdate",
                    value: function(nextProps, prevState) {
                        var scrollTop = prevState.scrollTop, calculatedScrollTop = Grid._getCalculatedScrollTop(nextProps, prevState);
                        return "number" == typeof calculatedScrollTop && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop ? Grid._getScrollToPositionStateUpdate({
                            prevState: prevState,
                            scrollLeft: -1,
                            scrollTop: calculatedScrollTop
                        }) : null;
                    }
                } ]), Grid;
            }(React.PureComponent);
            Grid.defaultProps = {
                "aria-label": "grid",
                "aria-readonly": !0,
                autoContainerWidth: !1,
                autoHeight: !1,
                autoWidth: !1,
                cellRangeRenderer: _defaultCellRangeRenderer2.default,
                containerRole: "rowgroup",
                containerStyle: {},
                estimatedColumnSize: 100,
                estimatedRowSize: 30,
                getScrollbarSize: _scrollbarSize2.default,
                noContentRenderer: renderNull,
                onScroll: function() {},
                onScrollbarPresenceChange: function() {},
                onSectionRendered: function() {},
                overscanColumnCount: 0,
                overscanIndicesGetter: _defaultOverscanIndicesGetter2.default,
                overscanRowCount: 10,
                role: "grid",
                scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
                scrollToAlignment: "auto",
                scrollToColumn: -1,
                scrollToRow: -1,
                style: {},
                tabIndex: 0,
                isScrollingOptOut: !1
            }, Grid.propTypes = "production" === process.env.NODE_ENV ? null : {
                "aria-label": _propTypes2.default.string.isRequired,
                "aria-readonly": _propTypes2.default.bool,
                /**
	   * Set the width of the inner scrollable container to 'auto'.
	   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
	   */
                autoContainerWidth: _propTypes2.default.bool.isRequired,
                /**
	   * Removes fixed height from the scrollingContainer so that the total height of rows can stretch the window.
	   * Intended for use with WindowScroller
	   */
                autoHeight: _propTypes2.default.bool.isRequired,
                /**
	   * Removes fixed width from the scrollingContainer so that the total width of rows can stretch the window.
	   * Intended for use with WindowScroller
	   */
                autoWidth: _propTypes2.default.bool.isRequired,
                /** Responsible for rendering a cell given an row and column index.  */
                cellRenderer: function() {
                    return ("function" == typeof _types.bpfrpt_proptype_CellRenderer ? _types.bpfrpt_proptype_CellRenderer.isRequired ? _types.bpfrpt_proptype_CellRenderer.isRequired : _types.bpfrpt_proptype_CellRenderer : _propTypes2.default.shape(_types.bpfrpt_proptype_CellRenderer).isRequired).apply(this, arguments);
                },
                /** Responsible for rendering a group of cells given their index ranges.  */
                cellRangeRenderer: function() {
                    return ("function" == typeof _types.bpfrpt_proptype_CellRangeRenderer ? _types.bpfrpt_proptype_CellRangeRenderer.isRequired ? _types.bpfrpt_proptype_CellRangeRenderer.isRequired : _types.bpfrpt_proptype_CellRangeRenderer : _propTypes2.default.shape(_types.bpfrpt_proptype_CellRangeRenderer).isRequired).apply(this, arguments);
                },
                /** Optional custom CSS class name to attach to root Grid element.  */
                className: _propTypes2.default.string,
                /** Number of columns in grid.  */
                columnCount: _propTypes2.default.number.isRequired,
                /** Either a fixed column width (number) or a function that returns the width of a column given its index.  */
                columnWidth: function() {
                    return ("function" == typeof _types.bpfrpt_proptype_CellSize ? _types.bpfrpt_proptype_CellSize.isRequired ? _types.bpfrpt_proptype_CellSize.isRequired : _types.bpfrpt_proptype_CellSize : _propTypes2.default.shape(_types.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
                },
                /** Unfiltered props for the Grid container. */
                containerProps: _propTypes2.default.object,
                /** ARIA role for the cell-container.  */
                containerRole: _propTypes2.default.string.isRequired,
                /** Optional inline style applied to inner cell-container */
                containerStyle: _propTypes2.default.object.isRequired,
                /**
	   * If CellMeasurer is used to measure this Grid's children, this should be a pointer to its CellMeasurerCache.
	   * A shared CellMeasurerCache reference enables Grid and CellMeasurer to share measurement data.
	   */
                deferredMeasurementCache: _propTypes2.default.object,
                /**
	   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
	   * The estimated total width is adjusted as columns are rendered.
	   */
                estimatedColumnSize: _propTypes2.default.number.isRequired,
                /**
	   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
                estimatedRowSize: _propTypes2.default.number.isRequired,
                /** Exposed for testing purposes only.  */
                getScrollbarSize: _propTypes2.default.func.isRequired,
                /** Height of Grid; this property determines the number of visible (vs virtualized) rows.  */
                height: _propTypes2.default.number.isRequired,
                /** Optional custom id to attach to root Grid element.  */
                id: _propTypes2.default.string,
                /**
	   * Override internal is-scrolling state tracking.
	   * This property is primarily intended for use with the WindowScroller component.
	   */
                isScrolling: _propTypes2.default.bool,
                /**
	   * Opt-out of isScrolling param passed to cellRangeRenderer.
	   * To avoid the extra render when scroll stops.
	   */
                isScrollingOptOut: _propTypes2.default.bool.isRequired,
                /** Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.  */
                noContentRenderer: function() {
                    return ("function" == typeof _types.bpfrpt_proptype_NoContentRenderer ? _types.bpfrpt_proptype_NoContentRenderer.isRequired ? _types.bpfrpt_proptype_NoContentRenderer.isRequired : _types.bpfrpt_proptype_NoContentRenderer : _propTypes2.default.shape(_types.bpfrpt_proptype_NoContentRenderer).isRequired).apply(this, arguments);
                },
                /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   */
                onScroll: _propTypes2.default.func.isRequired,
                /**
	   * Called whenever a horizontal or vertical scrollbar is added or removed.
	   * This prop is not intended for end-user use;
	   * It is used by MultiGrid to support fixed-row/fixed-column scroll syncing.
	   */
                onScrollbarPresenceChange: _propTypes2.default.func.isRequired,
                /** Callback invoked with information about the section of the Grid that was just rendered.  */
                onSectionRendered: _propTypes2.default.func.isRequired,
                /**
	   * Number of columns to render before/after the visible section of the grid.
	   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
	   */
                overscanColumnCount: _propTypes2.default.number.isRequired,
                /**
	   * Calculates the number of cells to overscan before and after a specified range.
	   * This function ensures that overscanning doesn't exceed the available cells.
	   */
                overscanIndicesGetter: function() {
                    return ("function" == typeof _types.bpfrpt_proptype_OverscanIndicesGetter ? _types.bpfrpt_proptype_OverscanIndicesGetter.isRequired ? _types.bpfrpt_proptype_OverscanIndicesGetter.isRequired : _types.bpfrpt_proptype_OverscanIndicesGetter : _propTypes2.default.shape(_types.bpfrpt_proptype_OverscanIndicesGetter).isRequired).apply(this, arguments);
                },
                /**
	   * Number of rows to render above/below the visible section of the grid.
	   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
	   */
                overscanRowCount: _propTypes2.default.number.isRequired,
                /** ARIA role for the grid element.  */
                role: _propTypes2.default.string.isRequired,
                /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * Should implement the following interface: ({ index: number }): number
	   */
                rowHeight: function() {
                    return ("function" == typeof _types.bpfrpt_proptype_CellSize ? _types.bpfrpt_proptype_CellSize.isRequired ? _types.bpfrpt_proptype_CellSize.isRequired : _types.bpfrpt_proptype_CellSize : _propTypes2.default.shape(_types.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
                },
                /** Number of rows in grid.  */
                rowCount: _propTypes2.default.number.isRequired,
                /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */
                scrollingResetTimeInterval: _propTypes2.default.number.isRequired,
                /** Horizontal offset. */
                scrollLeft: _propTypes2.default.number,
                /**
	   * Controls scroll-to-cell behavior of the Grid.
	   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
	   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
	   */
                scrollToAlignment: function() {
                    return ("function" == typeof _types.bpfrpt_proptype_Alignment ? _types.bpfrpt_proptype_Alignment.isRequired ? _types.bpfrpt_proptype_Alignment.isRequired : _types.bpfrpt_proptype_Alignment : _propTypes2.default.shape(_types.bpfrpt_proptype_Alignment).isRequired).apply(this, arguments);
                },
                /** Column index to ensure visible (by forcefully scrolling if necessary) */
                scrollToColumn: _propTypes2.default.number.isRequired,
                /** Vertical offset. */
                scrollTop: _propTypes2.default.number,
                /** Row index to ensure visible (by forcefully scrolling if necessary) */
                scrollToRow: _propTypes2.default.number.isRequired,
                /** Optional inline style */
                style: _propTypes2.default.object.isRequired,
                /** Tab index for focus */
                tabIndex: _propTypes2.default.number,
                /** Width of Grid; this property determines the number of visible (vs virtualized) columns.  */
                width: _propTypes2.default.number.isRequired
            }, (0, _reactLifecyclesCompat.polyfill)(Grid), exports.default = Grid;
        }).call(exports, __webpack_require__(4));
    }, /* 44 */
    /***/
    function(module, exports) {
        function toVal(mix) {
            var k, y, str = "";
            if (mix) if ("object" == typeof mix) if (mix.push) for (k = 0; k < mix.length; k++) mix[k] && (y = toVal(mix[k])) && (str && (str += " "), 
            str += y); else for (k in mix) mix[k] && (y = toVal(k)) && (str && (str += " "), 
            str += y); else "boolean" == typeof mix || mix.call || (str && (str += " "), str += mix);
            return str;
        }
        module.exports = function() {
            for (var x, i = 0, str = ""; i < arguments.length; ) (x = toVal(arguments[i++])) && (str && (str += " "), 
            str += x);
            return str;
        };
    }, /* 45 */
    /***/
    function(module, exports) {
        "use strict";
        function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
            var cellCount = _ref.cellCount, cellSize = _ref.cellSize, computeMetadataCallback = _ref.computeMetadataCallback, computeMetadataCallbackProps = _ref.computeMetadataCallbackProps, nextCellsCount = _ref.nextCellsCount, nextCellSize = _ref.nextCellSize, nextScrollToIndex = _ref.nextScrollToIndex, scrollToIndex = _ref.scrollToIndex, updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;
            // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
            // In that event users should use the manual recompute methods to inform of changes.
            cellCount === nextCellsCount && ("number" != typeof cellSize && "number" != typeof nextCellSize || cellSize === nextCellSize) || (computeMetadataCallback(computeMetadataCallbackProps), 
            // Updated cell metadata may have hidden the previous scrolled-to item.
            // In this case we should also update the scrollTop to ensure it stays visible.
            scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex && updateScrollOffsetForScrollToIndex());
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = calculateSizeAndPositionDataAndUpdateScrollOffset;
    }, /* 46 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
            return target;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _CellSizeAndPositionManager = __webpack_require__(47), _CellSizeAndPositionManager2 = _interopRequireDefault(_CellSizeAndPositionManager), _maxElementSize = __webpack_require__(50), ScalingCellSizeAndPositionManager = (__webpack_require__(49), 
        function() {
            function ScalingCellSizeAndPositionManager(_ref) {
                var _ref$maxScrollSize = _ref.maxScrollSize, maxScrollSize = void 0 === _ref$maxScrollSize ? (0, 
                _maxElementSize.getMaxElementSize)() : _ref$maxScrollSize, params = _objectWithoutProperties(_ref, [ "maxScrollSize" ]);
                _classCallCheck(this, ScalingCellSizeAndPositionManager), // Favor composition over inheritance to simplify IE10 support
                this._cellSizeAndPositionManager = new _CellSizeAndPositionManager2.default(params), 
                this._maxScrollSize = maxScrollSize;
            }
            return _createClass(ScalingCellSizeAndPositionManager, [ {
                key: "areOffsetsAdjusted",
                value: function() {
                    return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
                }
            }, {
                key: "configure",
                value: function(params) {
                    this._cellSizeAndPositionManager.configure(params);
                }
            }, {
                key: "getCellCount",
                value: function() {
                    return this._cellSizeAndPositionManager.getCellCount();
                }
            }, {
                key: "getEstimatedCellSize",
                value: function() {
                    return this._cellSizeAndPositionManager.getEstimatedCellSize();
                }
            }, {
                key: "getLastMeasuredIndex",
                value: function() {
                    return this._cellSizeAndPositionManager.getLastMeasuredIndex();
                }
            }, {
                key: "getOffsetAdjustment",
                value: function(_ref2) {
                    var containerSize = _ref2.containerSize, offset = _ref2.offset, totalSize = this._cellSizeAndPositionManager.getTotalSize(), safeTotalSize = this.getTotalSize(), offsetPercentage = this._getOffsetPercentage({
                        containerSize: containerSize,
                        offset: offset,
                        totalSize: safeTotalSize
                    });
                    return Math.round(offsetPercentage * (safeTotalSize - totalSize));
                }
            }, {
                key: "getSizeAndPositionOfCell",
                value: function(index) {
                    return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
                }
            }, {
                key: "getSizeAndPositionOfLastMeasuredCell",
                value: function() {
                    return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
                }
            }, {
                key: "getTotalSize",
                value: function() {
                    return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
                }
            }, {
                key: "getUpdatedOffsetForIndex",
                value: function(_ref3) {
                    var _ref3$align = _ref3.align, align = void 0 === _ref3$align ? "auto" : _ref3$align, containerSize = _ref3.containerSize, currentOffset = _ref3.currentOffset, targetIndex = _ref3.targetIndex;
                    currentOffset = this._safeOffsetToOffset({
                        containerSize: containerSize,
                        offset: currentOffset
                    });
                    var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
                        align: align,
                        containerSize: containerSize,
                        currentOffset: currentOffset,
                        targetIndex: targetIndex
                    });
                    return this._offsetToSafeOffset({
                        containerSize: containerSize,
                        offset: offset
                    });
                }
            }, {
                key: "getVisibleCellRange",
                value: function(_ref4) {
                    var containerSize = _ref4.containerSize, offset = _ref4.offset;
                    return offset = this._safeOffsetToOffset({
                        containerSize: containerSize,
                        offset: offset
                    }), this._cellSizeAndPositionManager.getVisibleCellRange({
                        containerSize: containerSize,
                        offset: offset
                    });
                }
            }, {
                key: "resetCell",
                value: function(index) {
                    this._cellSizeAndPositionManager.resetCell(index);
                }
            }, {
                key: "_getOffsetPercentage",
                value: function(_ref5) {
                    var containerSize = _ref5.containerSize, offset = _ref5.offset, totalSize = _ref5.totalSize;
                    return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
                }
            }, {
                key: "_offsetToSafeOffset",
                value: function(_ref6) {
                    var containerSize = _ref6.containerSize, offset = _ref6.offset, totalSize = this._cellSizeAndPositionManager.getTotalSize(), safeTotalSize = this.getTotalSize();
                    if (totalSize === safeTotalSize) return offset;
                    var offsetPercentage = this._getOffsetPercentage({
                        containerSize: containerSize,
                        offset: offset,
                        totalSize: totalSize
                    });
                    return Math.round(offsetPercentage * (safeTotalSize - containerSize));
                }
            }, {
                key: "_safeOffsetToOffset",
                value: function(_ref7) {
                    var containerSize = _ref7.containerSize, offset = _ref7.offset, totalSize = this._cellSizeAndPositionManager.getTotalSize(), safeTotalSize = this.getTotalSize();
                    if (totalSize === safeTotalSize) return offset;
                    var offsetPercentage = this._getOffsetPercentage({
                        containerSize: containerSize,
                        offset: offset,
                        totalSize: safeTotalSize
                    });
                    return Math.round(offsetPercentage * (totalSize - containerSize));
                }
            } ]), ScalingCellSizeAndPositionManager;
        }());
        exports.default = ScalingCellSizeAndPositionManager;
    }, /* 47 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _linearLayoutVector = __webpack_require__(48), _linearLayoutVector2 = _interopRequireDefault(_linearLayoutVector), CellSizeAndPositionManager = (__webpack_require__(49), 
        function() {
            // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
            function CellSizeAndPositionManager(_ref) {
                var cellCount = _ref.cellCount, cellSizeGetter = _ref.cellSizeGetter, estimatedCellSize = _ref.estimatedCellSize;
                _classCallCheck(this, CellSizeAndPositionManager), this._lastMeasuredIndex = -1, 
                this._cellSizeGetter = cellSizeGetter, this._cellCount = cellCount, this._estimatedCellSize = estimatedCellSize, 
                this._layoutVector = new _linearLayoutVector2.default(), this._layoutVector.setLength(cellCount), 
                this._layoutVector.setDefaultSize(estimatedCellSize);
            }
            // Cache of size and position data for cells, mapped by cell index.
            // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
            return _createClass(CellSizeAndPositionManager, [ {
                key: "areOffsetsAdjusted",
                value: function() {
                    return !1;
                }
            }, {
                key: "configure",
                value: function(_ref2) {
                    var cellCount = _ref2.cellCount, estimatedCellSize = _ref2.estimatedCellSize, cellSizeGetter = _ref2.cellSizeGetter;
                    this._cellCount = cellCount, this._estimatedCellSize = estimatedCellSize, this._cellSizeGetter = cellSizeGetter, 
                    this._layoutVector.setLength(cellCount), this._layoutVector.setDefaultSize(estimatedCellSize);
                }
            }, {
                key: "getCellCount",
                value: function() {
                    return this._cellCount;
                }
            }, {
                key: "getEstimatedCellSize",
                value: function() {
                    return this._estimatedCellSize;
                }
            }, {
                key: "getLastMeasuredIndex",
                value: function() {
                    return this._lastMeasuredIndex;
                }
            }, {
                key: "getOffsetAdjustment",
                value: function() {
                    return 0;
                }
            }, {
                key: "getSizeAndPositionOfCell",
                value: function(index) {
                    if (index < 0 || index >= this._cellCount) throw Error("Requested index " + index + " is outside of range 0.." + this._cellCount);
                    var vector = this._layoutVector;
                    if (index > this._lastMeasuredIndex) {
                        for (var token = {
                            index: this._lastMeasuredIndex + 1
                        }, i = token.index; i <= index; token.index = ++i) {
                            var _size = this._cellSizeGetter(token);
                            // undefined or NaN probably means a logic error in the size getter.
                            // null means we're using CellMeasurer and haven't yet measured a given index.
                            if (void 0 === _size || _size !== _size) throw Error("Invalid size returned for cell " + i + " of value " + _size);
                            null !== _size && vector.setItemSize(i, _size);
                        }
                        this._lastMeasuredIndex = Math.min(index, this._cellCount - 1);
                    }
                    return {
                        offset: vector.start(index),
                        size: vector.getItemSize(index)
                    };
                }
            }, {
                key: "getSizeAndPositionOfLastMeasuredCell",
                value: function() {
                    var index = this._lastMeasuredIndex;
                    if (index <= 0) return {
                        offset: 0,
                        size: 0
                    };
                    var vector = this._layoutVector;
                    return {
                        offset: vector.start(index),
                        size: vector.getItemSize(index)
                    };
                }
            }, {
                key: "getTotalSize",
                value: function() {
                    var lastIndex = this._cellCount - 1;
                    return lastIndex >= 0 ? this._layoutVector.end(lastIndex) : 0;
                }
            }, {
                key: "getUpdatedOffsetForIndex",
                value: function(_ref3) {
                    var _ref3$align = _ref3.align, align = void 0 === _ref3$align ? "auto" : _ref3$align, containerSize = _ref3.containerSize, currentOffset = _ref3.currentOffset, targetIndex = _ref3.targetIndex;
                    if (containerSize <= 0) return 0;
                    var datum = this.getSizeAndPositionOfCell(targetIndex), maxOffset = datum.offset, minOffset = maxOffset - containerSize + datum.size, idealOffset = void 0;
                    switch (align) {
                      case "start":
                        idealOffset = maxOffset;
                        break;

                      case "end":
                        idealOffset = minOffset;
                        break;

                      case "center":
                        idealOffset = maxOffset - (containerSize - datum.size) / 2;
                        break;

                      default:
                        idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
                    }
                    var totalSize = this.getTotalSize();
                    return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
                }
            }, {
                key: "getVisibleCellRange",
                value: function(params) {
                    if (0 === this.getTotalSize()) return {};
                    var containerSize = params.containerSize, offset = params.offset, maxOffset = offset + containerSize - 1;
                    return {
                        start: this._findNearestCell(offset),
                        stop: this._findNearestCell(maxOffset)
                    };
                }
            }, {
                key: "resetCell",
                value: function(index) {
                    this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
                }
            }, {
                key: "_findNearestCell",
                value: function(offset) {
                    if (isNaN(offset)) throw Error("Invalid offset " + offset + " specified");
                    // If we haven't yet measured this high, compute sizes for each cell up to the desired offset.
                    for (var vector = this._layoutVector, lastIndex = this._cellCount - 1, targetOffset = Math.max(0, Math.min(offset, vector.start(lastIndex))), nearestCellIndex = vector.indexOf(targetOffset); nearestCellIndex > this._lastMeasuredIndex; ) {
                        // No need to search and compare again if we're at the end.
                        if (// Measure all the cells up to the one we want to find presently.
                        // Do this before the last-index check to ensure the sparse array
                        // is fully populated.
                        this.getSizeAndPositionOfCell(nearestCellIndex), nearestCellIndex === lastIndex) return nearestCellIndex;
                        nearestCellIndex = vector.indexOf(targetOffset), // Guard in case `getSizeAndPositionOfCell` didn't fully measure to
                        // the nearestCellIndex. This might happen scrolling quickly down
                        // and back up on large lists -- possible race with React or DOM?
                        nearestCellIndex === -1 && (nearestCellIndex = this._lastMeasuredIndex, this._lastMeasuredIndex = nearestCellIndex - 1, 
                        targetOffset = Math.max(0, Math.min(offset, vector.start(lastIndex))));
                    }
                    return nearestCellIndex;
                }
            } ]), CellSizeAndPositionManager;
        }());
        exports.default = CellSizeAndPositionManager;
    }, /* 48 */
    /***/
    function(module, exports) {
        /**
	 * A sparse array of sizes that represent items in a dimension.
	 *
	 * Provides efficient support for finding the cumulative distance to
	 * the start/end of an item along the axis, and similarly for finding the
	 * index of the item at a particular distance.
	 *
	 * Default size is used for items whose size hasn't been specified.
	 */
        function LinearLayoutVector(block_size) {
            void 0 === block_size && (block_size = 128);
            // Assumption: vector elements (sizes) will typically be set in
            // small ranges that reflect localized scrolling.  Allocate vector
            // elements in blocks of block_size, which must be a power of 2.
            // block_shift is the power of 2 and block_mask masks off as many
            // low order bits.  The block_table contains all of the allocated
            // blocks and has length/block_size elements which are allocated lazily.
            var pow = Math.log(block_size) / Math.log(2) | 0, size = Math.pow(2, pow), mask = size - 1;
            this.block_size = size, this.block_shift = pow, this.block_mask = mask, this.block_table = [], 
            this._defaultSize = 0, this._axisOffset = 0, this._gap = 0, // Sorted Vector of intervals for the pending removes, in descending order,
            // for example [7, 5, 3, 1] for the removes at 7, 6, 5, 3, 2, 1
            this.removes = null, // Sorted Vector of intervals for the pending inserts, in ascending order,
            // for example [1, 3, 5, 7] for the inserts at 1, 2, 3, 5, 6, 7
            this.inserts = null, this._length = 0, // What the length will be after any pending changes are flushed.
            this._pendingLength = -1;
        }
        /**
	 * The number of item size valued elements.
	 *
	 * @default 0
	 */
        function getLength() {
            return this._pendingLength === -1 ? this._length : this._pendingLength;
        }
        /**
	 * @private
	 * Grows or truncates the vector to be the specified newLength.
	 * When truncating, releases empty blocks and sets to NaN any values
	 * in the last block beyond the newLength.
	 */
        function setLength(newLength) {
            if (flushPendingChanges.call(this), newLength < this._length) {
                // Clear any remaining non-NaN values in the last block
                var blockIndex = newLength >> this.block_shift, endIndex = Math.min(blockIndex * this.block_size + this.block_size, this._length) - 1;
                clearInterval.call(this, newLength, endIndex);
            }
            this._length = newLength;
            // update the table
            var partialBlock = 0 === (this._length & this.block_mask) ? 0 : 1;
            this.block_table.length = (this._length >> this.block_shift) + partialBlock;
        }
        //----------------------------------
        //  defaultSize
        //----------------------------------
        /**
	 * The size of items whose size was not specified with setItemSize.
	 *
	 * @default 0
	 */
        function getDefaultSize() {
            return this._defaultSize;
        }
        /**
	 * @private
	 */
        function setDefaultSize(value) {
            this._defaultSize = value;
        }
        //----------------------------------
        //  axisOffset
        //----------------------------------
        /**
	 * The offset of the first item from the origin in the majorAxis
	 * direction. This is useful when implementing padding,
	 * in addition to gaps, for virtual layouts.
	 *
	 * @see #gap
	 */
        function getAxisOffset() {
            return this._axisOffset;
        }
        /**
	 * @private
	 */
        function setAxisOffset(value) {
            this._axisOffset = value;
        }
        //----------------------------------
        //  gap
        //----------------------------------
        /**
	 * The distance between items.
	 *
	 * @default 0
	 */
        function getGap() {
            return this._gap;
        }
        /**
	 * @private
	 */
        function setGap(value) {
            this._gap = value;
        }
        //--------------------------------------------------------------------------
        //
        //  Methods
        //
        //--------------------------------------------------------------------------
        /**
	 * Return the size of the item at index.  If no size was ever
	 * specified then then the defaultSize is returned.
	 *
	 * @param index The item's index.
	 * @see defaultSize
	 */
        function getItemSize(index) {
            flushPendingChanges.call(this);
            var block = this.block_table[index >> this.block_shift];
            if (block) {
                var value = block.sizes[index & this.block_mask];
                return value !== value ? this._defaultSize : value;
            }
            return this._defaultSize;
        }
        /**
	 * Set the size of the item at index. If an index is
	 * set to <code>NaN</code> then subsequent calls to get
	 * will return the defaultSize.
	 *
	 * @param index The item's index.
	 * @param value The item's size.
	 * @see defaultSize
	 */
        function setItemSize(index, value) {
            if (flushPendingChanges.call(this), index >= this.getLength()) throw new Error("Invalid index and all that.");
            var blockIndex = index >> this.block_shift, block = this.block_table[blockIndex];
            block || (block = this.block_table[blockIndex] = new Block(this.block_size));
            var sizesIndex = index & this.block_mask, sizes = block.sizes, oldValue = sizes[sizesIndex];
            oldValue !== value && (oldValue !== oldValue ? (block.defaultCount -= 1, block.sizesSum += value) : value !== value ? (block.defaultCount += 1, 
            block.sizesSum -= oldValue) : block.sizesSum += value - oldValue, sizes[sizesIndex] = value);
        }
        /**
	 * Make room for a new item at index by shifting all of the sizes
	 * one position to the right, beginning with startIndex.
	 *
	 * The value at index will be NaN.
	 *
	 * This is similar to array.splice(index, 0, NaN).
	 *
	 * @param index The position of the new NaN size item.
	 */
        function insert(index) {
            if (// We don't support interleaved pending inserts and removes
            this.removes && flushPendingChanges.call(this), this.inserts) {
                // Update the last interval or add a new one?
                var lastIndex = this.inserts.length - 1, intervalEnd = this.inserts[lastIndex];
                index === intervalEnd + 1 ? // Extend the end of the interval
                this.inserts[lastIndex] = index : index > intervalEnd ? (// New interval
                this.inserts.push(index), this.inserts.push(index)) : // We can't support pending inserts that are not ascending
                flushPendingChanges.call(this);
            }
            this._pendingLength = Math.max(this._length, index + 1), this.inserts || (this.inserts = [], 
            this.inserts.push(index), this.inserts.push(index));
        }
        /**
	 * Remove index by shifting all of the sizes one position to the left,
	 * begining with index+1.
	 *
	 * This is similar to array.splice(index, 1).
	 *
	 * @param index The position to be removed.
	 */
        function remove(index) {
            // length getter takes into account pending inserts/removes but doesn't flush
            if (// We don't support interleaved pending inserts and removes
            this.inserts && flushPendingChanges.call(this), index >= this.getLength()) throw new Error("Invalid index and all that.");
            if (this.removes) {
                // Update the last interval or add a new one?
                var lastIndex = this.removes.length - 1, intervalStart = this.removes[lastIndex];
                index === intervalStart - 1 ? // Extend the start of the interval
                this.removes[lastIndex] = index : index < intervalStart ? (// New interval
                this.removes.push(index), this.removes.push(index)) : // We can't support pending removes that are not descending
                flushPendingChanges.call(this);
            }
            this._pendingLength = this._pendingLength === -1 ? length - 1 : this._pendingLength - 1, 
            this.removes || (this.removes = [], this.removes.push(index), this.removes.push(index));
        }
        /**
	 * @private
	 * Returns true when all sizes in the specified interval for the block are NaN
	 */
        function isIntervalClear(block, index, count) {
            var size, sizes = block.sizes;
            for (count += index; index < count; ++index) if ((size = sizes[index]) === size) return !1;
            return !0;
        }
        /**
	 * @private
	 * Copies elements between blocks. Indices relative to the blocks.
	 * If srcBlock is null, then it fills the destination with NaNs.
	 * The case of srcBlock === dstBlock is also supported.
	 * The caller must ensure that count is within range.
	 */
        function inBlockCopy(dstBlock, dstIndexStart, srcBlock, srcIndexStart, count) {
            // How much the destination defaultCount will change
            for (var ascending = dstIndexStart < srcIndexStart, srcIndex = ascending ? srcIndexStart : srcIndexStart + count - 1, dstIndex = ascending ? dstIndexStart : dstIndexStart + count - 1, increment = ascending ? 1 : -1, dstSizes = dstBlock.sizes, srcSizes = srcBlock ? srcBlock.sizes : null, dstValue = NaN, srcValue = NaN, sizesSumDelta = 0, defaultCountDelta = 0; count > 0; ) srcSizes && (srcValue = srcSizes[srcIndex]), 
            dstValue = dstSizes[dstIndex], // Are the values different?
            srcValue !== dstValue && (// Triple '=' to handle NaN comparison
            // Are we removing a default size or a chached size?
            dstValue !== dstValue ? defaultCountDelta-- : sizesSumDelta -= dstValue, // Are we adding a default size or a cached size?
            srcValue !== srcValue ? defaultCountDelta++ : sizesSumDelta += srcValue, dstSizes[dstIndex] = srcValue), 
            srcIndex += increment, dstIndex += increment, count--;
            dstBlock.sizesSum += sizesSumDelta, dstBlock.defaultCount += defaultCountDelta;
        }
        /**
	 * @private
	 * Copies 'count' elements from dstIndex to srcIndex.
	 * Safe for overlapping source and destination intervals.
	 * If any blocks are left full of NaNs, they will be deallcated.
	 */
        function copyInterval(dstIndex, srcIndex, count) {
            var ascending = dstIndex < srcIndex;
            for (ascending || (dstIndex += count - 1, srcIndex += count - 1); count > 0; ) {
                // Figure out destination block
                var dstBlockIndex = dstIndex >> this.block_shift, dstSizesIndex = dstIndex & this.block_mask, dstBlock = this.block_table[dstBlockIndex], srcBlockIndex = srcIndex >> this.block_shift, srcSizesIndex = srcIndex & this.block_mask, srcBlock = this.block_table[srcBlockIndex], copyCount = ascending ? Math.min(this.block_size - dstSizesIndex, this.block_size - srcSizesIndex) : 1 + Math.min(dstSizesIndex, srcSizesIndex);
                copyCount = Math.min(copyCount, count);
                // Figure out the start index for each block
                var dstStartIndex = ascending ? dstSizesIndex : dstSizesIndex - copyCount + 1, srcStartIndex = ascending ? srcSizesIndex : srcSizesIndex - copyCount + 1;
                // Copy to non-null dstBlock, srcBlock can be null
                if (// Check whether a destination block needs to be allocated.
                // Allocate only if there are non-default values to be copied from the source.
                srcBlock && !dstBlock && isIntervalClear(srcBlock, srcStartIndex, copyCount) && (dstBlock = new Block(this.block_size), 
                this.block_table[dstBlockIndex] = dstBlock), dstBlock && (inBlockCopy(dstBlock, dstStartIndex, srcBlock, srcStartIndex, copyCount), 
                dstBlock.defaultCount === this.block_size)) {
                    var blockEndReached = ascending ? dstStartIndex + copyCount === this.block_size : 0 === dstStartIndex;
                    (blockEndReached || count === copyCount) && (this.block_table[dstBlockIndex] = null);
                }
                dstIndex += ascending ? copyCount : -copyCount, srcIndex += ascending ? copyCount : -copyCount, 
                count -= copyCount;
            }
        }
        /**
	 * @private
	 * Sets all elements within the specified interval to NaN (both ends inclusive).
	 * Releases empty blocks.
	 */
        function clearInterval(start, end) {
            for (;start <= end; ) {
                // Figure our destination block
                var blockIndex = start >> this.block_shift, sizesIndex = start & this.block_mask, block = this.block_table[blockIndex], clearCount = this.block_size - sizesIndex;
                clearCount = Math.min(clearCount, end - start + 1), block && (clearCount === this.block_size ? this.block_table[blockIndex] = null : (// Copying from null source block is equivalent of clearing the destination block
                inBlockCopy(block, sizesIndex, null, 0, clearCount), // If the blockDst contains only default sizes, then remove the block
                block.defaultCount === this.block_size && (this.block_table[blockIndex] = null))), 
                start += clearCount;
            }
        }
        /**
	 * @private
	 * Removes the elements designated by the intervals and truncates
	 * the LinearLayoutVector to the new length.
	 * 'intervals' is a Vector of descending intervals [7, 5, 3, 1]
	 */
        function removeIntervals(intervals) {
            var intervalsCount = intervals.length;
            if (0 !== intervalsCount) {
                // Adding final nextIntervalStart value (see below).
                intervals.reverse(), // turn into ascending, for example [7, 5, 3, 1] --> [1, 3, 5, 7]
                intervals.push(this.getLength());
                // Move the elements
                var srcStart, count, dstStart = intervals[0], i = 0;
                do {
                    var intervalEnd = intervals[i + 1], nextIntervalStart = intervals[i + 2];
                    i += 2, // Start copy from after the end of current interval
                    srcStart = intervalEnd + 1, // copy all elements up to the start of the next interval.
                    count = nextIntervalStart - srcStart, copyInterval.call(this, dstStart, srcStart, count), 
                    dstStart += count;
                } while (i < intervalsCount);
                // Truncate the excess elements.
                this.setLength(dstStart);
            }
        }
        /**
	 * @private
	 * Increases the length and inserts NaN values for the elements designated by the intervals.
	 * 'intervals' is a Vector of ascending intervals [1, 3, 5, 7]
	 */
        function insertIntervals(intervals, newLength) {
            var intervalsCount = intervals.length;
            if (0 !== intervalsCount) {
                // Allocate enough space for the insertions, all the elements
                // allocated are NaN by default.
                var oldLength = this.getLength();
                this.setLength(newLength);
                for (var srcEnd = oldLength - 1, dstEnd = newLength - 1, i = intervalsCount - 2; i >= 0; ) {
                    // Find current interval
                    var intervalStart = intervals[i], intervalEnd = intervals[i + 1];
                    i -= 2;
                    // Start after the current interval
                    var dstStart = intervalEnd + 1, copyCount = dstEnd - dstStart + 1, srcStart = srcEnd - copyCount + 1;
                    copyInterval.call(this, dstStart, srcStart, copyCount), dstStart -= copyCount, dstEnd = intervalStart - 1, 
                    // Fill in with default NaN values after the copy
                    clearInterval.call(this, intervalStart, intervalEnd);
                }
            }
        }
        /**
	 * @private
	 * Processes any pending removes or pending inserts.
	 */
        function flushPendingChanges() {
            var intervals;
            if (this.removes) intervals = this.removes, this.removes = null, this._pendingLength = -1, 
            removeIntervals.call(this, intervals); else if (this.inserts) {
                intervals = this.inserts;
                var newLength = this._pendingLength;
                this.inserts = null, this._pendingLength = -1, insertIntervals.call(this, intervals, newLength);
            }
        }
        /**
	 * The cumulative distance to the start of the item at index, including
	 * the gaps between items and the axisOffset.
	 *
	 * The value of start(0) is axisOffset.
	 *
	 * Equivalent to:
	 * <pre>
	 * var distance = this.getAxisOffset();
	 * for (var i = 0; i &lt; index; i++)
	 *     distance += get(i);
	 * return distance + (gap * index);
	 * </pre>
	 *
	 * The actual implementation is relatively efficient.
	 *
	 * @param index The item's index.
	 * @see #end
	 */
        function start(index) {
            if (flushPendingChanges.call(this), 0 === this._length || 0 === index) return this.getAxisOffset();
            if (index >= this._length) throw new Error("Invalid index and all that.");
            for (var distance = this.getAxisOffset(), blockIndex = index >> this.block_shift, i = 0; i < blockIndex; i++) {
                var block = this.block_table[i];
                distance += block ? block.sizesSum + block.defaultCount * this._defaultSize : this.block_size * this._defaultSize;
            }
            var lastBlock = this.block_table[blockIndex], lastBlockOffset = index & ~this.block_mask, lastBlockLength = index - lastBlockOffset;
            if (lastBlock) {
                var sizes = lastBlock.sizes;
                for (i = 0; i < lastBlockLength; i++) {
                    var size = sizes[i];
                    distance += size !== size ? this._defaultSize : size;
                }
            } else distance += this._defaultSize * lastBlockLength;
            return distance += index * this.getGap();
        }
        /**
	 * The cumulative distance to the end of the item at index, including
	 * the gaps between items.
	 *
	 * If <code>index &lt;(length-1)</code> then the value of this
	 * function is defined as:
	 * <code>start(index) + get(index)</code>.
	 *
	 * @param index The item's index.
	 * @see #start
	 */
        function end(index) {
            return flushPendingChanges.call(this), this.start(index) + this.getItemSize(index);
        }
        /**
	 * Returns the index of the item that overlaps the specified distance.
	 *
	 * The item at index <code>i</code> overlaps a distance value
	 * if <code>start(i) &lt;= distance &lt; end(i)</code>.
	 *
	 * If no such item exists, -1 is returned.
	 */
        function indexOf(distance) {
            flushPendingChanges.call(this);
            var index = indexOfInternal.call(this, distance);
            return index >= this._length ? -1 : index;
        }
        function indexOfInternal(distance) {
            if (0 === this._length || distance < 0) return -1;
            // The area of the first item includes the axisOffset
            var curDistance = this.getAxisOffset();
            if (distance < curDistance) return 0;
            for (var index = -1, block = null, blockSize = this.block_size, defaultSize = this._defaultSize, gap = this.getGap(), blockGap = gap * blockSize, blockIndex = -1, blockTable = this.block_table, blockTableLength = blockTable.length; ++blockIndex < blockTableLength; ) {
                block = blockTable[blockIndex];
                var blockDistance = blockGap + (block ? block.sizesSum + block.defaultCount * defaultSize : blockSize * defaultSize);
                if (distance === curDistance || distance >= curDistance && distance < curDistance + blockDistance) {
                    index = blockIndex << this.block_shift;
                    break;
                }
                curDistance += blockDistance;
            }
            if (index === -1 || distance === curDistance) return index;
            // At this point index corresponds to the first item in this block
            if (block) {
                for (var sizes = block.sizes, n = this.block_size - 1, i = 0; i < n; i++) {
                    var size = sizes[i];
                    if (curDistance += gap + (size !== size ? this._defaultSize : size), curDistance > distance) return index + i;
                }
                // TBD special-case for the very last index
                return index + this.block_size - 1;
            }
            return index + Math.floor(Number(distance - curDistance) / Number(this._defaultSize + gap));
        }
        /**
	 * Clear all cached state, reset length to zero.
	 */
        function clear() {
            // Discard any pending changes, before setting the length
            // otherwise the length setter will commit the changes.
            this.removes = null, this.inserts = null, this._pendingLength = -1, this.setLength(0);
        }
        function toString() {
            return "LinearLayoutVector { length: " + this._length + ", size: " + this.end(this.getLength() - 1) + ", [blocks: " + this.block_table.length + "], gap: " + this._gap + ", defaultSize: " + this._defaultSize + ", pendingRemoves: " + (this.removes ? this.removes.length : 0) + ", pendingInserts: " + (this.inserts ? this.inserts.length : 0) + " }";
        }
        /**
	 * @private
	 * A LinearLayoutVector block of layout element heights or widths.
	 *
	 * Total "distance" for a Block is: sizesSum + (defaultCount * distanceVector.default).
	 */
        function Block(block_size) {
            this.sizes = new Array(block_size), this.sizesSum = 0, this.defaultCount = block_size;
            for (var i = -1; ++i < block_size; ) this.sizes[i] = NaN;
        }
        module.exports = LinearLayoutVector, LinearLayoutVector.prototype.getLength = getLength, 
        LinearLayoutVector.prototype.setLength = setLength, LinearLayoutVector.prototype.getDefaultSize = getDefaultSize, 
        LinearLayoutVector.prototype.setDefaultSize = setDefaultSize, LinearLayoutVector.prototype.getAxisOffset = getAxisOffset, 
        LinearLayoutVector.prototype.setAxisOffset = setAxisOffset, LinearLayoutVector.prototype.getGap = getGap, 
        LinearLayoutVector.prototype.setGap = setGap, LinearLayoutVector.prototype.getItemSize = getItemSize, 
        LinearLayoutVector.prototype.setItemSize = setItemSize, LinearLayoutVector.prototype.insert = insert, 
        LinearLayoutVector.prototype.remove = remove, LinearLayoutVector.prototype.start = start, 
        LinearLayoutVector.prototype.end = end, LinearLayoutVector.prototype.indexOf = indexOf, 
        LinearLayoutVector.prototype.clear = clear, LinearLayoutVector.prototype.toString = toString;
    }, /* 49 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj;
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.bpfrpt_proptype_VisibleCellRange = exports.bpfrpt_proptype_Alignment = exports.bpfrpt_proptype_OverscanIndicesGetter = exports.bpfrpt_proptype_OverscanIndices = exports.bpfrpt_proptype_OverscanIndicesGetterParams = exports.bpfrpt_proptype_RenderedSection = exports.bpfrpt_proptype_ScrollbarPresenceChange = exports.bpfrpt_proptype_Scroll = exports.bpfrpt_proptype_NoContentRenderer = exports.bpfrpt_proptype_CellSize = exports.bpfrpt_proptype_CellSizeGetter = exports.bpfrpt_proptype_CellRangeRenderer = exports.bpfrpt_proptype_CellRangeRendererParams = exports.bpfrpt_proptype_StyleCache = exports.bpfrpt_proptype_CellCache = exports.bpfrpt_proptype_CellRenderer = exports.bpfrpt_proptype_CellRendererParams = exports.bpfrpt_proptype_CellPosition = void 0;
            var _react = __webpack_require__(13), _ScalingCellSizeAndPositionManager = (_interopRequireWildcard(_react), 
            __webpack_require__(46)), _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager), _propTypes = __webpack_require__(32), _propTypes2 = _interopRequireDefault(_propTypes), bpfrpt_proptype_CellPosition = "production" === process.env.NODE_ENV ? null : {
                columnIndex: _propTypes2.default.number.isRequired,
                rowIndex: _propTypes2.default.number.isRequired
            }, bpfrpt_proptype_CellRendererParams = "production" === process.env.NODE_ENV ? null : {
                columnIndex: _propTypes2.default.number.isRequired,
                isScrolling: _propTypes2.default.bool.isRequired,
                isVisible: _propTypes2.default.bool.isRequired,
                key: _propTypes2.default.string.isRequired,
                parent: _propTypes2.default.object.isRequired,
                rowIndex: _propTypes2.default.number.isRequired,
                style: _propTypes2.default.object.isRequired
            }, bpfrpt_proptype_CellRenderer = "production" === process.env.NODE_ENV ? null : _propTypes2.default.func, bpfrpt_proptype_CellCache = "production" === process.env.NODE_ENV ? null : _propTypes2.default.objectOf(_propTypes2.default.node.isRequired), bpfrpt_proptype_StyleCache = "production" === process.env.NODE_ENV ? null : _propTypes2.default.objectOf(_propTypes2.default.object.isRequired), bpfrpt_proptype_CellRangeRendererParams = "production" === process.env.NODE_ENV ? null : {
                cellCache: _propTypes2.default.objectOf(_propTypes2.default.node.isRequired).isRequired,
                cellRenderer: _propTypes2.default.func.isRequired,
                columnSizeAndPositionManager: function() {
                    return ("function" == typeof _ScalingCellSizeAndPositionManager2.default ? _propTypes2.default.instanceOf(_ScalingCellSizeAndPositionManager2.default).isRequired : _propTypes2.default.any.isRequired).apply(this, arguments);
                },
                columnStartIndex: _propTypes2.default.number.isRequired,
                columnStopIndex: _propTypes2.default.number.isRequired,
                deferredMeasurementCache: _propTypes2.default.object,
                horizontalOffsetAdjustment: _propTypes2.default.number.isRequired,
                isScrolling: _propTypes2.default.bool.isRequired,
                isScrollingOptOut: _propTypes2.default.bool.isRequired,
                parent: _propTypes2.default.object.isRequired,
                rowSizeAndPositionManager: function() {
                    return ("function" == typeof _ScalingCellSizeAndPositionManager2.default ? _propTypes2.default.instanceOf(_ScalingCellSizeAndPositionManager2.default).isRequired : _propTypes2.default.any.isRequired).apply(this, arguments);
                },
                rowStartIndex: _propTypes2.default.number.isRequired,
                rowStopIndex: _propTypes2.default.number.isRequired,
                scrollLeft: _propTypes2.default.number.isRequired,
                scrollTop: _propTypes2.default.number.isRequired,
                styleCache: _propTypes2.default.objectOf(_propTypes2.default.object.isRequired).isRequired,
                verticalOffsetAdjustment: _propTypes2.default.number.isRequired,
                visibleColumnIndices: _propTypes2.default.object.isRequired,
                visibleRowIndices: _propTypes2.default.object.isRequired
            }, bpfrpt_proptype_CellRangeRenderer = "production" === process.env.NODE_ENV ? null : _propTypes2.default.func, bpfrpt_proptype_CellSizeGetter = "production" === process.env.NODE_ENV ? null : _propTypes2.default.func, bpfrpt_proptype_CellSize = "production" === process.env.NODE_ENV ? null : _propTypes2.default.oneOfType([ _propTypes2.default.func, _propTypes2.default.number ]), bpfrpt_proptype_NoContentRenderer = "production" === process.env.NODE_ENV ? null : _propTypes2.default.func, bpfrpt_proptype_Scroll = "production" === process.env.NODE_ENV ? null : {
                clientHeight: _propTypes2.default.number.isRequired,
                clientWidth: _propTypes2.default.number.isRequired,
                scrollHeight: _propTypes2.default.number.isRequired,
                scrollLeft: _propTypes2.default.number.isRequired,
                scrollTop: _propTypes2.default.number.isRequired,
                scrollWidth: _propTypes2.default.number.isRequired
            }, bpfrpt_proptype_ScrollbarPresenceChange = "production" === process.env.NODE_ENV ? null : {
                horizontal: _propTypes2.default.bool.isRequired,
                vertical: _propTypes2.default.bool.isRequired,
                size: _propTypes2.default.number.isRequired
            }, bpfrpt_proptype_RenderedSection = "production" === process.env.NODE_ENV ? null : {
                columnOverscanStartIndex: _propTypes2.default.number.isRequired,
                columnOverscanStopIndex: _propTypes2.default.number.isRequired,
                columnStartIndex: _propTypes2.default.number.isRequired,
                columnStopIndex: _propTypes2.default.number.isRequired,
                rowOverscanStartIndex: _propTypes2.default.number.isRequired,
                rowOverscanStopIndex: _propTypes2.default.number.isRequired,
                rowStartIndex: _propTypes2.default.number.isRequired,
                rowStopIndex: _propTypes2.default.number.isRequired
            }, bpfrpt_proptype_OverscanIndicesGetterParams = "production" === process.env.NODE_ENV ? null : {
                // One of SCROLL_DIRECTION_HORIZONTAL or SCROLL_DIRECTION_VERTICAL
                direction: _propTypes2.default.oneOf([ "horizontal", "vertical" ]).isRequired,
                // One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
                scrollDirection: _propTypes2.default.oneOf([ -1, 1 ]).isRequired,
                // Number of rows or columns in the current axis
                cellCount: _propTypes2.default.number.isRequired,
                // Maximum number of cells to over-render in either direction
                overscanCellsCount: _propTypes2.default.number.isRequired,
                // Begin of range of visible cells
                startIndex: _propTypes2.default.number.isRequired,
                // End of range of visible cells
                stopIndex: _propTypes2.default.number.isRequired
            }, bpfrpt_proptype_OverscanIndices = "production" === process.env.NODE_ENV ? null : {
                overscanStartIndex: _propTypes2.default.number.isRequired,
                overscanStopIndex: _propTypes2.default.number.isRequired
            }, bpfrpt_proptype_OverscanIndicesGetter = "production" === process.env.NODE_ENV ? null : _propTypes2.default.func, bpfrpt_proptype_Alignment = "production" === process.env.NODE_ENV ? null : _propTypes2.default.oneOf([ "auto", "end", "start", "center" ]), bpfrpt_proptype_VisibleCellRange = "production" === process.env.NODE_ENV ? null : {
                start: _propTypes2.default.number,
                stop: _propTypes2.default.number
            };
            exports.bpfrpt_proptype_CellPosition = bpfrpt_proptype_CellPosition, exports.bpfrpt_proptype_CellRendererParams = bpfrpt_proptype_CellRendererParams, 
            exports.bpfrpt_proptype_CellRenderer = bpfrpt_proptype_CellRenderer, exports.bpfrpt_proptype_CellCache = bpfrpt_proptype_CellCache, 
            exports.bpfrpt_proptype_StyleCache = bpfrpt_proptype_StyleCache, exports.bpfrpt_proptype_CellRangeRendererParams = bpfrpt_proptype_CellRangeRendererParams, 
            exports.bpfrpt_proptype_CellRangeRenderer = bpfrpt_proptype_CellRangeRenderer, exports.bpfrpt_proptype_CellSizeGetter = bpfrpt_proptype_CellSizeGetter, 
            exports.bpfrpt_proptype_CellSize = bpfrpt_proptype_CellSize, exports.bpfrpt_proptype_NoContentRenderer = bpfrpt_proptype_NoContentRenderer, 
            exports.bpfrpt_proptype_Scroll = bpfrpt_proptype_Scroll, exports.bpfrpt_proptype_ScrollbarPresenceChange = bpfrpt_proptype_ScrollbarPresenceChange, 
            exports.bpfrpt_proptype_RenderedSection = bpfrpt_proptype_RenderedSection, exports.bpfrpt_proptype_OverscanIndicesGetterParams = bpfrpt_proptype_OverscanIndicesGetterParams, 
            exports.bpfrpt_proptype_OverscanIndices = bpfrpt_proptype_OverscanIndices, exports.bpfrpt_proptype_OverscanIndicesGetter = bpfrpt_proptype_OverscanIndicesGetter, 
            exports.bpfrpt_proptype_Alignment = bpfrpt_proptype_Alignment, exports.bpfrpt_proptype_VisibleCellRange = bpfrpt_proptype_VisibleCellRange;
        }).call(exports, __webpack_require__(4));
    }, /* 50 */
    /***/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var DEFAULT_MAX_ELEMENT_SIZE = 15e5, CHROME_MAX_ELEMENT_SIZE = 16777100, isBrowser = function() {
            return "undefined" != typeof window;
        }, isChrome = function() {
            return !!window.chrome && !!window.chrome.webstore;
        };
        exports.getMaxElementSize = function() {
            return isBrowser() && isChrome() ? CHROME_MAX_ELEMENT_SIZE : DEFAULT_MAX_ELEMENT_SIZE;
        };
    }, /* 51 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
	 */
        function createCallbackMemoizer() {
            var requireAllKeys = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], cachedIndices = {};
            return function(_ref) {
                var callback = _ref.callback, indices = _ref.indices, keys = Object.keys(indices), allInitialized = !requireAllKeys || keys.every(function(key) {
                    var value = indices[key];
                    return Array.isArray(value) ? value.length > 0 : value >= 0;
                }), indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function(key) {
                    var cachedValue = cachedIndices[key], value = indices[key];
                    return Array.isArray(value) ? cachedValue.join(",") !== value.join(",") : cachedValue !== value;
                });
                cachedIndices = indices, allInitialized && indexChanged && callback(indices);
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = createCallbackMemoizer;
    }, /* 52 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /**
	 * Calculates the number of cells to overscan before and after a specified range.
	 * This function ensures that overscanning doesn't exceed the available cells.
	 */
        function defaultOverscanIndicesGetter(_ref) {
            var cellCount = _ref.cellCount, overscanCellsCount = _ref.overscanCellsCount, scrollDirection = _ref.scrollDirection, startIndex = _ref.startIndex, stopIndex = _ref.stopIndex;
            return scrollDirection === SCROLL_DIRECTION_FORWARD ? {
                overscanStartIndex: Math.max(0, startIndex),
                overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
            } : {
                overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
                overscanStopIndex: Math.min(cellCount - 1, stopIndex)
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_BACKWARD = void 0, 
        exports.default = defaultOverscanIndicesGetter;
        var SCROLL_DIRECTION_FORWARD = (__webpack_require__(49), exports.SCROLL_DIRECTION_BACKWARD = -1, 
        exports.SCROLL_DIRECTION_FORWARD = 1);
        exports.SCROLL_DIRECTION_HORIZONTAL = "horizontal", exports.SCROLL_DIRECTION_VERTICAL = "vertical";
    }, /* 53 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        /**
	 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
	 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
	 */
        function updateScrollIndexHelper(_ref) {
            var cellSize = _ref.cellSize, cellSizeAndPositionManager = _ref.cellSizeAndPositionManager, previousCellsCount = _ref.previousCellsCount, previousCellSize = _ref.previousCellSize, previousScrollToAlignment = _ref.previousScrollToAlignment, previousScrollToIndex = _ref.previousScrollToIndex, previousSize = _ref.previousSize, scrollOffset = _ref.scrollOffset, scrollToAlignment = _ref.scrollToAlignment, scrollToIndex = _ref.scrollToIndex, size = _ref.size, sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero, updateScrollIndexCallback = _ref.updateScrollIndexCallback, cellCount = cellSizeAndPositionManager.getCellCount(), hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount, sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || "number" == typeof cellSize && cellSize !== previousCellSize;
            // If we have a new scroll target OR if height/row-height has changed,
            // We should ensure that the scroll target is visible.
            hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex) ? updateScrollIndexCallback(scrollToIndex) : !hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount) && scrollOffset > cellSizeAndPositionManager.getTotalSize() - size && updateScrollIndexCallback(cellCount - 1);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = updateScrollIndexHelper;
        var _ScalingCellSizeAndPositionManager = __webpack_require__(46);
        _interopRequireDefault(_ScalingCellSizeAndPositionManager), __webpack_require__(49);
    }, /* 54 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            /**
	 * Default implementation of cellRangeRenderer used by Grid.
	 * This renderer supports cell-caching while the user is scrolling.
	 */
            function defaultCellRangeRenderer(_ref) {
                for (var cellCache = _ref.cellCache, cellRenderer = _ref.cellRenderer, columnSizeAndPositionManager = _ref.columnSizeAndPositionManager, columnStartIndex = _ref.columnStartIndex, columnStopIndex = _ref.columnStopIndex, deferredMeasurementCache = _ref.deferredMeasurementCache, horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment, isScrolling = _ref.isScrolling, isScrollingOptOut = _ref.isScrollingOptOut, parent = _ref.parent, rowSizeAndPositionManager = _ref.rowSizeAndPositionManager, rowStartIndex = _ref.rowStartIndex, rowStopIndex = _ref.rowStopIndex, styleCache = _ref.styleCache, verticalOffsetAdjustment = _ref.verticalOffsetAdjustment, visibleColumnIndices = _ref.visibleColumnIndices, visibleRowIndices = _ref.visibleRowIndices, renderedCells = [], areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted(), canCacheStyle = !isScrolling && !areOffsetsAdjusted, rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) for (var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex), columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
                    var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex), isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop, key = rowIndex + "-" + columnIndex, style = void 0;
                    // Cache style objects so shallow-compare doesn't re-render unnecessarily.
                    canCacheStyle && styleCache[key] ? style = styleCache[key] : // In deferred mode, cells will be initially rendered before we know their size.
                    // Don't interfere with CellMeasurer's measurements by setting an invalid size.
                    deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex) ? // Position not-yet-measured cells at top/left 0,0,
                    // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
                    // Positioning them further to the right/bottom influences their measured size.
                    style = {
                        height: "auto",
                        left: 0,
                        position: "absolute",
                        top: 0,
                        width: "auto"
                    } : (style = {
                        height: rowDatum.size,
                        left: columnDatum.offset + horizontalOffsetAdjustment,
                        position: "absolute",
                        top: rowDatum.offset + verticalOffsetAdjustment,
                        width: columnDatum.size
                    }, styleCache[key] = style);
                    var cellRendererParams = {
                        columnIndex: columnIndex,
                        isScrolling: isScrolling,
                        isVisible: isVisible,
                        key: key,
                        parent: parent,
                        rowIndex: rowIndex,
                        style: style
                    }, renderedCell = void 0;
                    // Avoid re-creating cells while scrolling.
                    // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
                    // If a scroll is in progress- cache and reuse cells.
                    // This cache will be thrown away once scrolling completes.
                    // However if we are scaling scroll positions and sizes, we should also avoid caching.
                    // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
                    // For more info refer to issue #395
                    //
                    // If isScrollingOptOut is specified, we always cache cells.
                    // For more info refer to issue #1028
                    !isScrollingOptOut && !isScrolling || horizontalOffsetAdjustment || verticalOffsetAdjustment ? renderedCell = cellRenderer(cellRendererParams) : (cellCache[key] || (cellCache[key] = cellRenderer(cellRendererParams)), 
                    renderedCell = cellCache[key]), null != renderedCell && renderedCell !== !1 && ("production" !== process.env.NODE_ENV && warnAboutMissingStyle(parent, renderedCell), 
                    renderedCells.push(renderedCell));
                }
                return renderedCells;
            }
            function warnAboutMissingStyle(parent, renderedCell) {
                "production" !== process.env.NODE_ENV && renderedCell && (// If the direct child is a CellMeasurer, then we should check its child
                // See issue #611
                renderedCell.type && renderedCell.type.__internalCellMeasurerFlag && (renderedCell = renderedCell.props.children), 
                renderedCell && renderedCell.props && void 0 === renderedCell.props.style && parent.__warnedAboutMissingStyle !== !0 && (parent.__warnedAboutMissingStyle = !0, 
                console.warn("Rendered cell should include style property for positioning.")));
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.default = defaultCellRangeRenderer;
            __webpack_require__(49);
        }).call(exports, __webpack_require__(4));
    }, /* 55 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function scrollbarSize(recalc) {
            if ((!size && 0 !== size || recalc) && _inDOM.default) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.position = "absolute", scrollDiv.style.top = "-9999px", scrollDiv.style.width = "50px", 
                scrollDiv.style.height = "50px", scrollDiv.style.overflow = "scroll", document.body.appendChild(scrollDiv), 
                size = scrollDiv.offsetWidth - scrollDiv.clientWidth, document.body.removeChild(scrollDiv);
            }
            return size;
        }
        var _interopRequireDefault = __webpack_require__(56);
        exports.__esModule = !0, exports.default = scrollbarSize;
        var size, _inDOM = _interopRequireDefault(__webpack_require__(57));
        module.exports = exports.default;
    }, /* 56 */
    /***/
    function(module, exports) {
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        module.exports = _interopRequireDefault;
    }, /* 57 */
    /***/
    function(module, exports) {
        "use strict";
        exports.__esModule = !0, exports.default = void 0;
        var _default = !("undefined" == typeof window || !window.document || !window.document.createElement);
        exports.default = _default, module.exports = exports.default;
    }, /* 58 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
        function componentWillMount() {
            // Call this.constructor.gDSFP to support sub-classes.
            var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
            null !== state && void 0 !== state && this.setState(state);
        }
        function componentWillReceiveProps(nextProps) {
            // Call this.constructor.gDSFP to support sub-classes.
            // Use the setState() updater to ensure state isn't stale in certain edge cases.
            function updater(prevState) {
                var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
                return null !== state && void 0 !== state ? state : null;
            }
            // Binding "this" is important for shallow renderer support.
            this.setState(updater.bind(this));
        }
        function componentWillUpdate(nextProps, nextState) {
            try {
                var prevProps = this.props, prevState = this.state;
                this.props = nextProps, this.state = nextState, this.__reactInternalSnapshotFlag = !0, 
                this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
            } finally {
                this.props = prevProps, this.state = prevState;
            }
        }
        function polyfill(Component) {
            var prototype = Component.prototype;
            if (!prototype || !prototype.isReactComponent) throw new Error("Can only polyfill class components");
            if ("function" != typeof Component.getDerivedStateFromProps && "function" != typeof prototype.getSnapshotBeforeUpdate) return Component;
            // If new component APIs are defined, "unsafe" lifecycles won't be called.
            // Error if any of these lifecycles are present,
            // Because they would work differently between older and newer (16.3+) versions of React.
            var foundWillMountName = null, foundWillReceivePropsName = null, foundWillUpdateName = null;
            if ("function" == typeof prototype.componentWillMount ? foundWillMountName = "componentWillMount" : "function" == typeof prototype.UNSAFE_componentWillMount && (foundWillMountName = "UNSAFE_componentWillMount"), 
            "function" == typeof prototype.componentWillReceiveProps ? foundWillReceivePropsName = "componentWillReceiveProps" : "function" == typeof prototype.UNSAFE_componentWillReceiveProps && (foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps"), 
            "function" == typeof prototype.componentWillUpdate ? foundWillUpdateName = "componentWillUpdate" : "function" == typeof prototype.UNSAFE_componentWillUpdate && (foundWillUpdateName = "UNSAFE_componentWillUpdate"), 
            null !== foundWillMountName || null !== foundWillReceivePropsName || null !== foundWillUpdateName) {
                var componentName = Component.displayName || Component.name, newApiName = "function" == typeof Component.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (null !== foundWillMountName ? "\n  " + foundWillMountName : "") + (null !== foundWillReceivePropsName ? "\n  " + foundWillReceivePropsName : "") + (null !== foundWillUpdateName ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
            }
            // React <= 16.2 does not support getSnapshotBeforeUpdate.
            // As a workaround, use cWU to invoke the new lifecycle.
            // Newer versions of React will ignore that lifecycle if gSBU exists.
            if (// React <= 16.2 does not support static getDerivedStateFromProps.
            // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
            // Newer versions of React will ignore these lifecycles if gDSFP exists.
            "function" == typeof Component.getDerivedStateFromProps && (prototype.componentWillMount = componentWillMount, 
            prototype.componentWillReceiveProps = componentWillReceiveProps), "function" == typeof prototype.getSnapshotBeforeUpdate) {
                if ("function" != typeof prototype.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
                prototype.componentWillUpdate = componentWillUpdate;
                var componentDidUpdate = prototype.componentDidUpdate;
                prototype.componentDidUpdate = function(prevProps, prevState, maybeSnapshot) {
                    // 16.3+ will not execute our will-update method;
                    // It will pass a snapshot value to did-update though.
                    // Older versions will require our polyfilled will-update value.
                    // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
                    // Because for <= 15.x versions this might be a "prevContext" object.
                    // We also can't just check "__reactInternalSnapshot",
                    // Because get-snapshot might return a falsy value.
                    // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
                    var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
                    componentDidUpdate.call(this, prevProps, prevState, snapshot);
                };
            }
            return Component;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), // React may warn about cWM/cWRP/cWU methods being deprecated.
        // Add a flag to suppress these warnings for this special case.
        componentWillMount.__suppressDeprecationWarning = !0, componentWillReceiveProps.__suppressDeprecationWarning = !0, 
        componentWillUpdate.__suppressDeprecationWarning = !0, exports.polyfill = polyfill;
    }, /* 59 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.bpfrpt_proptype_AnimationTimeoutId = exports.requestAnimationTimeout = exports.cancelAnimationTimeout = void 0;
            var _animationFrame = __webpack_require__(60), _propTypes = __webpack_require__(32), _propTypes2 = _interopRequireDefault(_propTypes), bpfrpt_proptype_AnimationTimeoutId = "production" === process.env.NODE_ENV ? null : {
                id: _propTypes2.default.number.isRequired
            };
            exports.cancelAnimationTimeout = function(frame) {
                return (0, _animationFrame.caf)(frame.id);
            }, exports.requestAnimationTimeout = function(callback, delay) {
                var start = void 0;
                // wait for end of processing current event handler, because event handler may be long
                Promise.resolve().then(function() {
                    start = Date.now();
                });
                var timeout = function timeout() {
                    Date.now() - start >= delay ? callback.call() : frame.id = (0, _animationFrame.raf)(timeout);
                }, frame = {
                    id: (0, _animationFrame.raf)(timeout)
                };
                return frame;
            };
            exports.bpfrpt_proptype_AnimationTimeoutId = bpfrpt_proptype_AnimationTimeoutId;
        }).call(exports, __webpack_require__(4));
    }, /* 60 */
    /***/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        // Properly handle server-side rendering.
        var win = void 0;
        win = "undefined" != typeof window ? window : "undefined" != typeof self ? self : {};
        // requestAnimationFrame() shim by Paul Irish
        // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
        var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function(callback) {
            return win.setTimeout(callback, 1e3 / 60);
        }, cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function(id) {
            win.clearTimeout(id);
        };
        exports.raf = request, exports.caf = cancel;
    }, /* 61 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /**
	 * Calculates the number of cells to overscan before and after a specified range.
	 * This function ensures that overscanning doesn't exceed the available cells.
	 */
        function defaultOverscanIndicesGetter(_ref) {
            var cellCount = _ref.cellCount, overscanCellsCount = _ref.overscanCellsCount, scrollDirection = _ref.scrollDirection, startIndex = _ref.startIndex, stopIndex = _ref.stopIndex;
            // Make sure we render at least 1 cell extra before and after (except near boundaries)
            // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
            // For more info see issues #625
            return overscanCellsCount = Math.max(1, overscanCellsCount), scrollDirection === SCROLL_DIRECTION_FORWARD ? {
                overscanStartIndex: Math.max(0, startIndex - 1),
                overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
            } : {
                overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
                overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_BACKWARD = void 0, 
        exports.default = defaultOverscanIndicesGetter;
        var SCROLL_DIRECTION_FORWARD = (__webpack_require__(49), exports.SCROLL_DIRECTION_BACKWARD = -1, 
        exports.SCROLL_DIRECTION_FORWARD = 1);
        exports.SCROLL_DIRECTION_HORIZONTAL = "horizontal", exports.SCROLL_DIRECTION_VERTICAL = "vertical";
    }, /* 62 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj;
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.bpfrpt_proptype_Scroll = exports.bpfrpt_proptype_RenderedRows = exports.bpfrpt_proptype_RowRenderer = exports.bpfrpt_proptype_RowRendererParams = void 0;
            var _react = __webpack_require__(13), _propTypes = (_interopRequireWildcard(_react), 
            __webpack_require__(32)), _propTypes2 = _interopRequireDefault(_propTypes), bpfrpt_proptype_RowRendererParams = "production" === process.env.NODE_ENV ? null : {
                index: _propTypes2.default.number.isRequired,
                isScrolling: _propTypes2.default.bool.isRequired,
                isVisible: _propTypes2.default.bool.isRequired,
                key: _propTypes2.default.string.isRequired,
                parent: _propTypes2.default.object.isRequired,
                style: _propTypes2.default.object.isRequired
            }, bpfrpt_proptype_RowRenderer = "production" === process.env.NODE_ENV ? null : _propTypes2.default.func, bpfrpt_proptype_RenderedRows = "production" === process.env.NODE_ENV ? null : {
                overscanStartIndex: _propTypes2.default.number.isRequired,
                overscanStopIndex: _propTypes2.default.number.isRequired,
                startIndex: _propTypes2.default.number.isRequired,
                stopIndex: _propTypes2.default.number.isRequired
            }, bpfrpt_proptype_Scroll = "production" === process.env.NODE_ENV ? null : {
                clientHeight: _propTypes2.default.number.isRequired,
                scrollHeight: _propTypes2.default.number.isRequired,
                scrollTop: _propTypes2.default.number.isRequired
            };
            exports.bpfrpt_proptype_RowRendererParams = bpfrpt_proptype_RowRendererParams, exports.bpfrpt_proptype_RowRenderer = bpfrpt_proptype_RowRenderer, 
            exports.bpfrpt_proptype_RenderedRows = bpfrpt_proptype_RenderedRows, exports.bpfrpt_proptype_Scroll = bpfrpt_proptype_Scroll;
        }).call(exports, __webpack_require__(4));
    } ]);
});
//# sourceMappingURL=react-virtualized-select.js.map