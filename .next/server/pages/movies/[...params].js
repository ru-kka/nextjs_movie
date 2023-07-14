"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movies/[...params]";
exports.ids = ["pages/movies/[...params]"];
exports.modules = {

/***/ "./components/Seo.js":
/*!***************************!*\
  !*** ./components/Seo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Seo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Seo({ title  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n            children: [\n                title,\n                \" | Next Movies\"\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\dev\\\\nextjs-begin\\\\components\\\\Seo.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\dev\\\\nextjs-begin\\\\components\\\\Seo.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFFZCxTQUFTQyxJQUFJLEVBQUVDLE1BQUssRUFBRSxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDRixrREFBSUE7a0JBQ0gsNEVBQUNFOztnQkFBT0E7Z0JBQU07Ozs7Ozs7Ozs7OztBQUdwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWJlZ2luLy4vY29tcG9uZW50cy9TZW8uanM/NDI5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZW8oeyB0aXRsZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlfSB8IE5leHQgTW92aWVzPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiU2VvIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Seo.js\n");

/***/ }),

/***/ "./pages/movies/[...params].js":
/*!*************************************!*\
  !*** ./pages/movies/[...params].js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Detail),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Seo */ \"./components/Seo.js\");\n\n\n\nfunction Detail({ params  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [title, id] = params || [];\n    console.log(params);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: title\n            }, void 0, false, {\n                fileName: \"D:\\\\dev\\\\nextjs-begin\\\\pages\\\\movies\\\\[...params].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\dev\\\\nextjs-begin\\\\pages\\\\movies\\\\[...params].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: id\n            }, void 0, false, {\n                fileName: \"D:\\\\dev\\\\nextjs-begin\\\\pages\\\\movies\\\\[...params].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\dev\\\\nextjs-begin\\\\pages\\\\movies\\\\[...params].js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\nfunction getServerSideProps({ params: { params  }  }) {\n    return {\n        props: {\n            params\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvWy4uLnBhcmFtc10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRDtBQUV4QixTQUFTRSxPQUFPLEVBQUVDLE9BQU0sRUFBRSxFQUFFO0lBQ3pDLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLENBQUNLLE9BQU9DLEdBQUcsR0FBR0gsVUFBVSxFQUFFO0lBQ2hDSSxRQUFRQyxHQUFHLENBQUNMO0lBQ1oscUJBQ0UsOERBQUNNOzswQkFDQyw4REFBQ1IsdURBQUdBO2dCQUFDSSxPQUFPQTs7Ozs7OzBCQUNaLDhEQUFDSzswQkFBSUw7Ozs7OzswQkFDTCw4REFBQ0s7MEJBQUlKOzs7Ozs7Ozs7Ozs7QUFHWCxDQUFDO0FBRU0sU0FBU0ssbUJBQW1CLEVBQUNSLFFBQVEsRUFBRUEsT0FBTSxFQUFFLEdBQUUsRUFBRTtJQUN4RCxPQUFPO1FBQ0xTLE9BQU87WUFBRVQ7UUFBTztJQUNsQjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmVnaW4vLi9wYWdlcy9tb3ZpZXMvWy4uLnBhcmFtc10uanM/MmVlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbCh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3RpdGxlLCBpZF0gPSBwYXJhbXMgfHwgW107XHJcbiAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNlbyB0aXRsZT17dGl0bGV9Lz5cclxuICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG4gICAgICA8aDQ+e2lkfTwvaDQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXM6IHsgcGFyYW1zIH0gfSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwYXJhbXMgfSxcclxuICB9O1xyXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlNlbyIsIkRldGFpbCIsInBhcmFtcyIsInJvdXRlciIsInRpdGxlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies/[...params].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies/[...params].js"));
module.exports = __webpack_exports__;

})();