"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./components/ContactForm.js":
/*!***********************************!*\
  !*** ./components/ContactForm.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\nvar _s = $RefreshSig$();\nfunction ContactForm() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        first_name: \"\",\n        last_name: \"\",\n        title: \"\",\n        email: \"\",\n        message: \"\"\n    }), formValues = ref[0], setFormValues = ref[1];\n    var handleChange = function(event) {\n        var value = event.value, name = event.name, target = event.target;\n        setFormValues(_objectSpread({}, formValues, _defineProperty({}, name, value)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"contactHeaderMargin\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"formTitle formTitleSmall\",\n                    children: \"Heading Two\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"first_name\",\n                            placeholder: \"First Name\",\n                            value: formValues.first_name,\n                            onChange: handleChange,\n                            className: \"formControl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"last_name\",\n                            placeholder: \"Last Name\",\n                            value: formValues.last_name,\n                            onChange: handleChange,\n                            className: \"formControl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"title\",\n                            placeholder: \"Title\",\n                            value: formValues.title,\n                            onChange: handleChange,\n                            className: \"formControl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"email\",\n                            placeholder: \"Email\",\n                            value: formValues.email,\n                            onChange: handleChange,\n                            className: \"formControl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            type: \"text\",\n                            as: \"textarea\",\n                            name: \"message\",\n                            placeholder: \"Message\",\n                            value: formValues.message,\n                            onChange: handleChange,\n                            className: \"formControlMessageBox\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"contact-btn\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(ContactForm, \"L5Ez7kRczuz7Qrbw+TuBDxSujPE=\");\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RS8uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanM/YzA0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcblxyXG4gICAgY29uc3QgW2Zvcm1WYWx1ZXMsIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICAgICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3ZhbHVlLCBuYW1lLCB0YXJnZXR9ID0gZXZlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0Rm9ybVZhbHVlcyh7Li4uZm9ybVZhbHVlcywgW25hbWVdOiB2YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIFxyXG4gICAgICAgICB7LyogPFJvdyBjbGFzc05hbWU9J2NvbnRhY3RIZWFkZXJNYXJnaW4nICA+XHJcbiAgICAgICAgICAgIDxDb2wgYWxpZ249J2NlbnRlcicgPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3RIZWFkZXJNYXJnaW4nPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9ybVRpdGxlIGZvcm1UaXRsZVNtYWxsJyA+SGVhZGluZyBUd288L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZmlyc3RfbmFtZScgcGxhY2Vob2xkZXI9J0ZpcnN0IE5hbWUnIHZhbHVlPXtmb3JtVmFsdWVzLmZpcnN0X25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT0nZm9ybUNvbnRyb2wnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2xhc3RfbmFtZScgcGxhY2Vob2xkZXI9J0xhc3QgTmFtZScgdmFsdWU9e2Zvcm1WYWx1ZXMubGFzdF9uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9J2Zvcm1Db250cm9sJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSd0aXRsZScgcGxhY2Vob2xkZXI9J1RpdGxlJyB2YWx1ZT17Zm9ybVZhbHVlcy50aXRsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPSdmb3JtQ29udHJvbCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZW1haWwnIHBsYWNlaG9sZGVyPSdFbWFpbCcgdmFsdWU9e2Zvcm1WYWx1ZXMuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT0nZm9ybUNvbnRyb2wnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9J3RleHQnIGFzPSd0ZXh0YXJlYScgbmFtZT0nbWVzc2FnZScgcGxhY2Vob2xkZXI9J01lc3NhZ2UnIHZhbHVlPXtmb3JtVmFsdWVzLm1lc3NhZ2V9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT0nZm9ybUNvbnRyb2xNZXNzYWdlQm94JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2NvbnRhY3QtYnRuJz5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgIHsvKiA8L0NvbD5cclxuICAgICAgICA8L1Jvdz4gICovfVxyXG4gICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udGFjdEZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwidGl0bGUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJuYW1lIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwiYXMiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContactForm.js\n");

/***/ })

});