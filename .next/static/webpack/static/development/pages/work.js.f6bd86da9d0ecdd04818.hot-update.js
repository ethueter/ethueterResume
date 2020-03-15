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
      position = _ref.position;
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
      color: 'white'
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

/***/ }),

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_WorkBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WorkBanner */ "./components/WorkBanner.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "/Users/thueter/Development/personal-site/resume-site/pages/work.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Work = function Work() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Tyler's Resume Site")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_WorkBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageURL: "/cgt1.png",
    role: "Partner/General Manager",
    position: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Managed daily operations for metropolitan transportation service with 50+ drivers and 25 vehicles serving Greater Charleston. Complied with local and state regulations set by SCORS and the City of Charleston."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "primary",
    onClick: toggle,
    style: {
      marginBottom: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "View Details"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroupItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Hired and trained all drivers and dispatchers, growing from team of 8 in 2009 to 50+ within five years."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroupItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Implemented and maintained the TaxiCaller dispatch system, enabling company to utilize multiple fare types, process payments, input and dispatch reservations, and track all ride data."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroupItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Strategized use of multiple no-cost technical applications prior to the advent of dispatching software."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroupItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Supported asset purchasing and disposal, procuring 25 vehicles, 100 cell phones and equipment."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroupItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Built business still in operation today, reaching $2M in annual revenues by 2014.")))))), __jsx(_components_WorkBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageURL: "/ketner1.jpeg",
    role: "Director of Operations",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(_components_WorkBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageURL: "/orchestra1.jpg",
    role: "Box Office Manager",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ })

})
//# sourceMappingURL=work.js.f6bd86da9d0ecdd04818.hot-update.js.map