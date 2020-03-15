webpackHotUpdate("static/development/pages/work.js",{

/***/ "./components/WorkBanner.js":
/*!**********************************!*\
  !*** ./components/WorkBanner.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "/Users/thueter/Development/personal-site/resume-site/components/WorkBanner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // const jumboStyle = {
//     backgroundImage: "url('/battery.png')",
//     backgroundSize: 'cover',
//     height: 500,
//     textAlign: 'right',
//     color: 'white'
// };

var WorkBanner = function WorkBanner(_ref) {
  var imageURL = _ref.imageURL,
      role = _ref.role,
      position = _ref.position,
      color = _ref.color;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Jumbotron"], {
    fluid: true,
    style: {
      backgroundImage: "url(".concat(imageURL, ")"),
      backgroundSize: 'cover',
      height: 300,
      textAlign: "".concat(position),
      color: "".concat(color)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, role))));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkBanner);

/***/ })

})
//# sourceMappingURL=work.js.6b82f9e3ab891e395279.hot-update.js.map