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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/app.tsx":
/*!********************************!*\
  !*** ./src/components/app.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var layout_1 = __importDefault(__webpack_require__(/*! ./layout */ "./src/components/layout.tsx"));
/**
 * Application top level component. This is a good place for future
 * top level components - ErrorBoundary, Provider & Suspense, etc.
 */
function App() {
    return react_1.default.createElement(layout_1.default, null);
}
exports.default = App;


/***/ }),

/***/ "./src/components/layout.tsx":
/*!***********************************!*\
  !*** ./src/components/layout.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var navbar_1 = __importDefault(__webpack_require__(/*! ./navbar */ "./src/components/navbar.tsx"));
var viewContainer_1 = __importDefault(__webpack_require__(/*! ./viewContainer/viewContainer */ "./src/components/viewContainer/viewContainer.tsx"));
var css_1 = __webpack_require__(/*! ../css */ "./src/css.tsx");
/** React class component */
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentView: ''
        };
        _this.setView = function (view) {
            _this.setState({ currentView: view });
        };
        return _this;
    }
    Layout.prototype.render = function () {
        return (react_1.default.createElement("div", { style: __assign({}, columnFlex, css_1.fullScreen, background) },
            react_1.default.createElement(navbar_1.default, { onViewSelected: this.setView }),
            react_1.default.createElement(viewContainer_1.default, { currentView: this.state.currentView, onViewSelected: this.setView })));
    };
    return Layout;
}(react_1.Component));
exports.default = Layout;
var columnFlex = {
    display: 'flex',
    flexDirection: 'column',
};
var background = {
    background: '#1f1f1f'
};


/***/ }),

/***/ "./src/components/navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/navbar.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
/** React function component */
function Navbar(props) {
    var onClickHeader = function () {
        props.onViewSelected('');
    };
    return (react_1.default.createElement("div", { style: navbar },
        react_1.default.createElement("h1", { onClick: onClickHeader, style: navbarItem }, "React Playground")));
}
exports.default = Navbar;
var navbar = {
    height: '4em',
    background: 'black',
    color: '#E1E1E1',
    display: 'flex',
    alignItems: 'stretch',
    padding: '0 1em'
};
var navbarItem = {
    fontSize: '1.7em',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
};


/***/ }),

/***/ "./src/components/viewContainer/detailView.tsx":
/*!*****************************************************!*\
  !*** ./src/components/viewContainer/detailView.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var css_1 = __webpack_require__(/*! ../../css */ "./src/css.tsx");
function DetailView(props) {
    var imageSrc = "../assets/" + props.id + ".jpg";
    return (react_1.default.createElement("div", { style: container },
        react_1.default.createElement("img", { src: imageSrc, style: css_1.fullscreenAbsolute })));
}
exports.default = DetailView;
var container = {
    position: 'relative',
    width: '100%',
    height: '100%'
};


/***/ }),

/***/ "./src/components/viewContainer/masterView.tsx":
/*!*****************************************************!*\
  !*** ./src/components/viewContainer/masterView.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var navigationItem_1 = __importDefault(__webpack_require__(/*! ./navigationItem */ "./src/components/viewContainer/navigationItem.tsx"));
/** React function component */
function MasterView(props) {
    return (react_1.default.createElement("div", { style: container }, props.detailViews.map(function (value) { return react_1.default.createElement(navigationItem_1.default, { id: value, onClick: props.onDetaltViewSelected }); })));
}
exports.default = MasterView;
var container = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em',
    justifyItems: 'stretch',
    alignItems: 'stretch',
    gridTemplateColumns: '50% 50%',
};


/***/ }),

/***/ "./src/components/viewContainer/navigationItem.tsx":
/*!*********************************************************!*\
  !*** ./src/components/viewContainer/navigationItem.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var css_1 = __webpack_require__(/*! ../../css */ "./src/css.tsx");
/** React function component */
function NavigationItem(props) {
    var imageSrc = "../assets/" + props.id + ".jpg";
    var onClick = function () { return props.onClick(props.id); };
    return (react_1.default.createElement("div", { style: __assign({}, gridItem, css_1.centeredContent), onClick: onClick },
        react_1.default.createElement("img", { src: imageSrc, style: css_1.fullscreenAbsolute }),
        react_1.default.createElement("h1", { style: __assign({}, centeredAbsolute, appearance) }, props.id)));
}
exports.default = NavigationItem;
var gridItem = {
    position: 'relative',
    margin: '0.5em',
    background: '#808080',
    height: '100%',
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer'
};
var centeredAbsolute = {
    position: 'absolute',
    margin: 0,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
};
var appearance = {
    color: '#1E1E1E',
    textShadow: '0 0 3px white'
};


/***/ }),

/***/ "./src/components/viewContainer/viewContainer.tsx":
/*!********************************************************!*\
  !*** ./src/components/viewContainer/viewContainer.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var detailView_1 = __importDefault(__webpack_require__(/*! ./detailView */ "./src/components/viewContainer/detailView.tsx"));
var masterView_1 = __importDefault(__webpack_require__(/*! ./masterView */ "./src/components/viewContainer/masterView.tsx"));
/** React function component */
function ViewContainer(props) {
    var detailViews = ['forest', 'sky', 'desert'];
    if (props.currentView === '') {
        return react_1.default.createElement(masterView_1.default, { detailViews: detailViews, onDetaltViewSelected: props.onViewSelected });
    }
    else {
        return react_1.default.createElement(detailView_1.default, { id: props.currentView });
    }
}
exports.default = ViewContainer;


/***/ }),

/***/ "./src/css.tsx":
/*!*********************!*\
  !*** ./src/css.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.centeredContent = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
};
exports.fullScreen = {
    width: '100%',
    height: '100%'
};
exports.fullscreenAbsolute = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
};


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "react-dom"));
var app_1 = __importDefault(__webpack_require__(/*! ./components/app */ "./src/components/app.tsx"));
react_dom_1.default.render(react_1.default.createElement(app_1.default, null), document.getElementById("app-container"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map