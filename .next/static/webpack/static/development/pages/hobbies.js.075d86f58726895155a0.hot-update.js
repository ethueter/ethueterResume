webpackHotUpdate("static/development/pages/hobbies.js",{

/***/ "./pages/hobbies.js":
/*!**************************!*\
  !*** ./pages/hobbies.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "/Users/thueter/Development/personal-site/resume-site/pages/hobbies.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var items = [{
  src: "follykayak.jpg",
  altText: "Kayaking",
  caption: "Kayaking",
  desc: "Exploring the Lowcountry waterways."
}, {
  src: "Canva - Red Tomatoes and Garlics in Cooking Pot.jpg",
  altText: "Cooking",
  caption: "Cooking",
  desc: "Mostly vegetarian...mostly"
}, {
  src: "chiefshelmet.jpeg",
  altText: "Chiefs Football",
  caption: "Chiefs Football",
  desc: "Champs!!!"
}];

var Hobbies = function Hobbies(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      animating = _useState2[0],
      setAnimating = _useState2[1];

  var next = function next() {
    if (animating) return;
    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  var previous = function previous() {
    if (animating) return;
    var nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  var goToIndex = function goToIndex(newIndex) {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  var slides = items.map(function (item) {
    var itemStyle = {};
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselItem"], {
      className: "testing",
      onExiting: function onExiting() {
        return setAnimating(true);
      },
      onExited: function onExited() {
        return setAnimating(false);
      },
      key: item.src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("img", {
      src: item.src,
      alt: item.altText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselCaption"], {
      captionText: item.desc,
      captionHeader: item.caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Tyler's Resume Site")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, ".testing {\n              max-width: 100%;\n              height: 500px;\n              background: black;\n              color: white;\n            }"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: previous,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselIndicators"], {
    items: items,
    activeIndex: activeIndex,
    onClickHandler: goToIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), slides, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselControl"], {
    direction: "prev",
    directionText: "Previous",
    onClickHandler: previous,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselControl"], {
    direction: "next",
    directionText: "Next",
    onClickHandler: next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hobbies);

/***/ })

})
//# sourceMappingURL=hobbies.js.075d86f58726895155a0.hot-update.js.map