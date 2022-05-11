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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\nvar _s = $RefreshSig$();\nfunction ContactForm() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        first_name: \"\",\n        last_name: \"\",\n        title: \"\",\n        email: \"\",\n        message: \"\"\n    }), formValues = ref[0], setFormValues = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), formErrors = ref1[0], setFormErrors = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isSubmit = ref2[0], setIsSubmit = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), formData = ref3[0], setFormData = ref3[1];\n    var handleChange = function(event) {\n        var _target = event.target, value = _target.value, name = _target.name;\n        setFormValues(_objectSpread({}, formValues, _defineProperty({}, name, value)));\n    };\n    var handleSubmit = function(event) {\n        var _target = event.target, name = _target.name, value = _target.value;\n        console.log(event);\n        event.preventDefault();\n        setFormErrors(validate(formValues));\n        setIsSubmit(true);\n    // setFormData(formValues);\n    // console.log('new values to submit', formData)\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(formErrors);\n        if (Object.keys(formErrors).length === 0 && isSubmit) {\n            console.log(formValues);\n        }\n    }, [\n        formErrors\n    ]);\n    var validate = function(values) {\n        var errors = {};\n        var regex = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/i;\n        if (!values.first_name) {\n            errors.first_name = \"First name required\";\n        }\n        if (!values.last_name) {\n            errors.last_name = \"Last name required\";\n        }\n        if (!values.title) {\n            errors.title = \"Title required\";\n        }\n        if (!values.email) {\n            errors.email = \"Email required\";\n        } else if (!regex.test(values.email)) {\n            errors.email = \"This is not a valid email format\";\n        }\n        return errors;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"contactHeaderMargin\",\n            children: [\n                Object.keys(formErrors).length === 0 && isSubmit ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n                    style: {\n                        float: \"right\"\n                    },\n                    className: \"formSuccess\",\n                    variant: \"success\",\n                    children: \"Thank you :)\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                    lineNumber: 69,\n                    columnNumber: 22\n                }, this) : null,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"formTitle formTitleSmall\",\n                    children: \"Heading Two\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: formErrors.first_name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"first_name\",\n                            placeholder: \"First Name\",\n                            value: formValues.first_name,\n                            onChange: handleChange,\n                            className: \"formControl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: formErrors.last_name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"last_name\",\n                            placeholder: \"Last Name\",\n                            value: formValues.last_name,\n                            onChange: handleChange,\n                            className: \"formControl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: formErrors.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"title\",\n                            placeholder: \"Title\",\n                            value: formValues.title,\n                            onChange: handleChange,\n                            className: \"formControl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: formErrors.email\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"email\",\n                            placeholder: \"Email\",\n                            value: formValues.email,\n                            onChange: handleChange,\n                            className: \"formControl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            type: \"text\",\n                            as: \"textarea\",\n                            name: \"message\",\n                            placeholder: \"Message\",\n                            value: formValues.message,\n                            onChange: handleChange,\n                            className: \"formControlMessageBox\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"contact-btn\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\jmoka\\\\Desktop\\\\codingprojects\\\\midwestern-interactive-challenge\\\\components\\\\ContactForm.js\",\n            lineNumber: 67,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(ContactForm, \"mCPUNSWRWeQ+iBPg9SA03GtlMzI=\");\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2dDQUFTOzs7Ozs7d0JBQzFEOzs7Ozs7Z0JBQ0o7cUJBSVIsQ0FDTjtDQUNKO0dBekZRaEMsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBMkZwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanM/YzA0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QWxlcnR9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcblxyXG4gICAgY29uc3QgW2Zvcm1WYWx1ZXMsIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICAgICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtmb3JtRXJyb3JzLCBzZXRGb3JtRXJyb3JzXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtpc1N1Ym1pdCwgc2V0SXNTdWJtaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB7dmFsdWUsIG5hbWV9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIHNldEZvcm1WYWx1ZXMoey4uLmZvcm1WYWx1ZXMsIFtuYW1lXTogdmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZXZlbnQudGFyZ2V0XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRGb3JtRXJyb3JzKHZhbGlkYXRlKGZvcm1WYWx1ZXMpKVxyXG4gICAgICAgIHNldElzU3VibWl0KHRydWUpXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBzZXRGb3JtRGF0YShmb3JtVmFsdWVzKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ25ldyB2YWx1ZXMgdG8gc3VibWl0JywgZm9ybURhdGEpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1FcnJvcnMpO1xyXG4gICAgICAgIGlmKE9iamVjdC5rZXlzKGZvcm1FcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBpc1N1Ym1pdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtVmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZm9ybUVycm9yc10pXHJcbiAgICBjb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcclxuICAgICAgICBjb25zdCByZWdleCA9IC9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC9pO1xyXG4gICAgICAgIGlmICghdmFsdWVzLmZpcnN0X25hbWUpIHtcclxuICAgICAgICAgICAgZXJyb3JzLmZpcnN0X25hbWUgPSAnRmlyc3QgbmFtZSByZXF1aXJlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdmFsdWVzLmxhc3RfbmFtZSkge1xyXG4gICAgICAgICAgICBlcnJvcnMubGFzdF9uYW1lID0gJ0xhc3QgbmFtZSByZXF1aXJlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdmFsdWVzLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy50aXRsZSA9ICdUaXRsZSByZXF1aXJlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdmFsdWVzLmVtYWlsKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdFbWFpbCByZXF1aXJlZCc7XHJcbiAgICAgICAgfSBlbHNlIGlmICghcmVnZXgudGVzdCh2YWx1ZXMuZW1haWwpKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdUaGlzIGlzIG5vdCBhIHZhbGlkIGVtYWlsIGZvcm1hdCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgXHJcbiAgICAgICAgIHsvKiA8Um93IGNsYXNzTmFtZT0nY29udGFjdEhlYWRlck1hcmdpbicgID5cclxuICAgICAgICAgICAgPENvbCBhbGlnbj0nY2VudGVyJyA+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdEhlYWRlck1hcmdpbic+XHJcbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhmb3JtRXJyb3JzKS5sZW5ndGggPT09IDAgJiYgaXNTdWJtaXQgP1xyXG4gICAgICAgICAgICAgICAgICAgICg8QWxlcnQgc3R5bGU9e3tmbG9hdDogJ3JpZ2h0J319IGNsYXNzTmFtZT0nZm9ybVN1Y2Nlc3MnIHZhcmlhbnQ9J3N1Y2Nlc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGFuayB5b3UgOilcclxuICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PikgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb3JtVGl0bGUgZm9ybVRpdGxlU21hbGwnID5IZWFkaW5nIFR3bzwvaDE+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiA+e2Zvcm1FcnJvcnMuZmlyc3RfbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2ZpcnN0X25hbWUnIHBsYWNlaG9sZGVyPSdGaXJzdCBOYW1lJyB2YWx1ZT17Zm9ybVZhbHVlcy5maXJzdF9uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9J2Zvcm1Db250cm9sJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntmb3JtRXJyb3JzLmxhc3RfbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2xhc3RfbmFtZScgcGxhY2Vob2xkZXI9J0xhc3QgTmFtZScgdmFsdWU9e2Zvcm1WYWx1ZXMubGFzdF9uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9J2Zvcm1Db250cm9sJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntmb3JtRXJyb3JzLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ndGl0bGUnIHBsYWNlaG9sZGVyPSdUaXRsZScgdmFsdWU9e2Zvcm1WYWx1ZXMudGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT0nZm9ybUNvbnRyb2wnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1FcnJvcnMuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdlbWFpbCcgcGxhY2Vob2xkZXI9J0VtYWlsJyB2YWx1ZT17Zm9ybVZhbHVlcy5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPSdmb3JtQ29udHJvbCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT0ndGV4dCcgYXM9J3RleHRhcmVhJyBuYW1lPSdtZXNzYWdlJyBwbGFjZWhvbGRlcj0nTWVzc2FnZScgdmFsdWU9e2Zvcm1WYWx1ZXMubWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPSdmb3JtQ29udHJvbE1lc3NhZ2VCb3gnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nY29udGFjdC1idG4nPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgey8qIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PiAgKi99XHJcbiAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBbGVydCIsIkNvbnRhY3RGb3JtIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInRpdGxlIiwiZW1haWwiLCJtZXNzYWdlIiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJmb3JtRXJyb3JzIiwic2V0Rm9ybUVycm9ycyIsImlzU3VibWl0Iiwic2V0SXNTdWJtaXQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJyZWdleCIsInRlc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImZsb2F0IiwidmFyaWFudCIsImgxIiwiZm9ybSIsIm9uU3VibWl0Iiwic3BhbiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0ZXh0YXJlYSIsImFzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContactForm.js\n");

/***/ })

});