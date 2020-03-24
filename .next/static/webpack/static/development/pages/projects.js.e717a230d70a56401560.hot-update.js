webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _jsxFileName = "/Users/thueter/Development/personal-site/resume-site/pages/projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var API_URL = 'https://api.github.com';

function fetcher(path) {
  var res, json;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(unfetch__WEBPACK_IMPORTED_MODULE_4___default()(API_URL + path));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          json = _context.sent;
          return _context.abrupt("return", json);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

;

var Projects = function Projects() {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])('/users/ethueter/repos', fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Failed to load.");
  if (!data) return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Spinner"], {
    color: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  });
  console.log(data);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Tyler's Resume Site")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Featured Projects"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardDeck"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    className: "project-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
    top: true,
    width: "100%",
    src: "/react-redux.png",
    alt: "react js logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
    className: "card-head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "The Analyst"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardSubtitle"], {
    className: "card-subhead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Client Side"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "How do we rate bias in our news when we don't know where it is coming from? The sourse of a news article is only reveled after a user applies their own bias rating. Does your favorite"), __jsx("a", {
    href: "http://the-analyst.herokuapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    outline: true,
    color: "primary",
    style: {
      marginRight: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Site")), __jsx("a", {
    href: "https://github.com/ethueter/the-analyst-client",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    outline: true,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Repo")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
    top: true,
    width: "100%",
    src: "/rubyonrails.png",
    alt: "ruby and rails logos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "The Analyst"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardSubtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Server Side"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Description of the backend of The Analyst."), __jsx("a", {
    href: "https://github.com/ethueter/the-analyst",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    outline: true,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Repo")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
    top: true,
    width: "100%",
    src: "/react1.png",
    alt: "React Native logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Task List"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardSubtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Mobile ToDo List"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Description of the React Native app."), __jsx("a", {
    href: "https://github.com/ethueter/blog-task-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    outline: true,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Repo")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
    top: true,
    width: "50%",
    src: "/mysite.png",
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "This Site")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardSubtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Client Side"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Game logic and graphic design."), __jsx("a", {
    href: "https://github.com/ethueter/ethueterResume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    outline: true,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Repo"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.e717a230d70a56401560.hot-update.js.map