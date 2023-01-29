(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _scripts_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/_navbar */ "./assets/scripts/_navbar.js");
/* harmony import */ var _scripts_navbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_navbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/_modules */ "./assets/scripts/_modules.js");
/* harmony import */ var _scripts_modal_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/_modal_delete */ "./assets/scripts/_modal_delete.js");
/* harmony import */ var _scripts_modal_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/_modal_switch */ "./assets/scripts/_modal_switch.js");
/* harmony import */ var _scripts_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/_filters */ "./assets/scripts/_filters.js");
/* harmony import */ var _scripts_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/_pagination */ "./assets/scripts/_pagination.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application








/*!
 * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
//
// Scripts
//

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/functions/async.js":
/*!***********************************!*\
  !*** ./assets/functions/async.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": () => (/* binding */ async)
/* harmony export */ });
var axios = (__webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]);

function async(url) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  axios.get(url).then(function (response) {
    if (element != null) {
      $(".".concat(element)).html(response.data);
    }
  })["catch"](function (error) {
    $(".".concat(element)).parent().html = "Erreur: ".concat(error.message);
    console.error("Il y a une erreur dans la requête", error);
  });
}

;


/***/ }),

/***/ "./assets/functions/onClickFilters.js":
/*!********************************************!*\
  !*** ./assets/functions/onClickFilters.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onClickFilter": () => (/* binding */ onClickFilter)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _functions_updateParams_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../functions/updateParams.js */ "./assets/functions/updateParams.js");
/* harmony import */ var _functions_async_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../functions/async.js */ "./assets/functions/async.js");











function onClickFilter() {
  var _$$val, _$$val2;

  var filter = (_$$val = $(".select-filters option:selected").val()) !== null && _$$val !== void 0 ? _$$val : "";
  var page = $("#filters input:hidden").attr("value");
  var query = (_$$val2 = $(".js-query").val()) !== null && _$$val2 !== void 0 ? _$$val2 : "";
  var limit = $("#limit").val();
  var filters = {
    "filter": filter,
    "page": page,
    "query": query,
    "limit": limit
  };
  var params = new URLSearchParams();
  (0,_functions_updateParams_js__WEBPACK_IMPORTED_MODULE_8__.updateParams)(filters, params);
  var url = new URL(window.location.href);
  (0,_functions_async_js__WEBPACK_IMPORTED_MODULE_9__.async)(url.pathname + "?" + params.toString() + "&ajax=1", "content");
  var newParams = new URLSearchParams();
  (0,_functions_updateParams_js__WEBPACK_IMPORTED_MODULE_8__.updateNewParams)(filters, newParams);

  if (newParams.toString() === "") {
    history.pushState({}, null, url.pathname);
  } else {
    history.pushState({}, null, url.pathname + "?" + newParams.toString());
  }
}



/***/ }),

/***/ "./assets/functions/updateParams.js":
/*!******************************************!*\
  !*** ./assets/functions/updateParams.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateNewParams": () => (/* binding */ updateNewParams),
/* harmony export */   "updateParams": () => (/* binding */ updateParams)
/* harmony export */ });
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

function updateParams(filters, params) {
  $.each(filters, function (key, value) {
    if (value === "") {// ne rien faire
    } else if (params.get(key)) {
      params.set(key, value);
    } else {
      params.append(key, value);
    }
  });
}

function updateNewParams(filters, params) {
  $.each(filters, function (key, value) {
    if (value === "" || value === 0) {// ne rien faire
    } else if (params.get(key)) {
      params.set(key, value);
    } else {
      params.append(key, value);
    }
  });
}



/***/ }),

/***/ "./assets/scripts/_filters.js":
/*!************************************!*\
  !*** ./assets/scripts/_filters.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_onClickFilters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/onClickFilters.js */ "./assets/functions/onClickFilters.js");
var axios = (__webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]);

 // // ______________________ FILTRE DES PARTENAIRES/STRUCTURES PAR NOM, OU ACTIVE/DESACTIVE _________________ //

$(".js-query").on("keyup", _functions_onClickFilters_js__WEBPACK_IMPORTED_MODULE_0__.onClickFilter);
$(".filters").on("change", _functions_onClickFilters_js__WEBPACK_IMPORTED_MODULE_0__.onClickFilter);

/***/ }),

/***/ "./assets/scripts/_modal_delete.js":
/*!*****************************************!*\
  !*** ./assets/scripts/_modal_delete.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _functions_async_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../functions/async.js */ "./assets/functions/async.js");









var axios = (__webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]);

 // ____________________ MODAL SUPPRESSION D'UN PARTENAIRE/STRUCTURE ____________________//

$(".modal_trigger").on("click", function (e) {
  $("#modal-delete").css("display", "block");
});
$("#content").on("click", ".modal-trigger", function (e) {
  $("#modal-delete").css("display", "block");
  var href = $(this).data("slug") + "/" + $(this).data("id");
  $(".modal-footer-delete a").attr("href", href);
  var name = $(this).data("name");
  $(".modal-body-delete .question1").text("Voulez-vous supprimer ");
  $(".modal-body-delete .question2").text(name);
});
$("#cards").on("click", ".modal-trigger", function (e) {
  $("#modal-delete").css("display", "block");
  var href = $(this).data("slug") + "/" + $(this).data("id");
  $(".modal-footer-delete a").attr("href", href);
  var name = $(this).data("name");
  $(".modal-body-delete .question1").text("Voulez-vous supprimer ");
  $(".modal-body-delete .question2").text(name);
});
$(".btn-delete-cancel").on("click", function (e) {
  e.preventDefault();
  $("#modal-delete").css("display", "none");
});
$("#cards").on("click", ".sendEmail", function (e) {
  if ($(this).is(":checked")) {
    var params = new URLSearchParams();
    params.append("sendEmail", "true");
    var url = new URL(window.location.href);
    (0,_functions_async_js__WEBPACK_IMPORTED_MODULE_8__.async)(url.pathname + "?" + params.toString());
  }
});

/***/ }),

/***/ "./assets/scripts/_modal_switch.js":
/*!*****************************************!*\
  !*** ./assets/scripts/_modal_switch.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _functions_async_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../functions/async.js */ "./assets/functions/async.js");














var axios = (__webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]);

 // ____________________ MODAL ACTIVATION D'UN PARTENAIRE/STRUCTURE ____________________//

var slug = "";
var name = "";
$("#cards").on("click", ".modal-switch-user", function (e) {
  if ($(this).data("disabled") === "disabled" || $(this).data("role") != "admin") {
    e.preventDefault();

    if ($(this).data("disabled") === "disabled") {
      $("#modal-switch").css("display", "block");
      $(".modal-body-switch .question").css("display", "none");
      $(".modal-body-switch .para1").text("La salle ne peut pas \xEAtre activ\xE9e quand le partenaire est d\xE9sactiv\xE9.");
      $("#btn-switch").css("display", "none");
      $("#btn-switch-cancel").text("VALIDER");
      $("#btn-switch-cancel").css({
        backgroundColor: "#0d6efd",
        border: "none",
        outline: "none"
      });
    }
  } else {
    e.preventDefault();
    var switchChecked = $(this).is(":checked");
    name = $(this).data("name");

    if (!switchChecked) {
      $("#modal-switch").css("display", "block");
      $(".modal-body-switch .question1").text("Etes-vous s\xFBr de vouloir d\xE9sactiver ");
      $(".modal-body-switch .question2").text(name);
      $(".modal-body-switch .para1").css("display", "none");
    } else {
      $("#modal-switch").css("display", "block");
      $(".modal-body-switch .question1").text("Etes-vous s\xFBr de vouloir activer ");
      $(".modal-body-switch .question2").text(name);
      $(".modal-body-switch .para1").css("display", "none");
    }

    $("#modal-switch").css("display", "block");
    slug = $(this).data("slug");
  }
});
$("#content").on("click", ".modal-switch-user", function (e) {
  if ($(this).data("disabled") === "disabled" || $(this).data("role") != "admin") {
    e.preventDefault();

    if ($(this).data("disabled") === "disabled") {
      $("#modal-switch").css("display", "block");
      $(".modal-body-switch .question").css("display", "none");
      $(".modal-body-switch .para1").text("La salle ne peut pas \xEAtre activ\xE9e quand le partenaire est d\xE9sactiv\xE9.");
      $("#btn-switch").css("display", "none");
      $("#btn-switch-cancel").text("VALIDER");
      $("#btn-switch-cancel").css({
        backgroundColor: "#0d6efd",
        border: "none",
        outline: "none"
      });
    }
  } else {
    e.preventDefault();
    var switchChecked = $(this).is(":checked");
    name = $(this).data("name");

    if (!switchChecked) {
      $(".modal-body-switch .question1").text("Etes-vous s\xFBr de vouloir d\xE9sactiver ");
      $(".modal-body-switch .question2").text(name);
      var href = window.location.pathname.split("/");

      if (href.includes("partenaires")) {
        $(".modal-body-switch .para1").css("display", "block");
        $(".modal-body-switch .para1").text("En d\xE9sactivant ce partenaire, vous d\xE9sactiverez toutes les structures auquel elles sont rattach\xE9es.");
      } else {
        $(".modal-body-switch .para1").css("display", "none");
      }
    } else {
      $(".modal-body-switch .question1").text("Etes-vous s\xFBr de vouloir activer ");
      $(".modal-body-switch .question2").text(name);
      $(".modal-body-switch .para1").css("display", "none");
    }

    $("#modal-switch").css("display", "block");
    slug = $(this).data("slug");
  }
});
$(".btn-switch").on("click", function (e) {
  e.preventDefault();
  var params = new URLSearchParams(window.location.search);
  var paramsToString = params.toString();
  var url = "";
  var href = window.location.pathname.split("/");

  if (href.includes("partenaires")) {
    url = "".concat(window.location.protocol, "//").concat(window.location.host, "/partenaires/").concat(slug, "/active-user/?").concat(paramsToString);
  } else {
    url = "".concat(window.location.protocol, "//").concat(window.location.host, "/structures/").concat(slug, "/active-user/?").concat(paramsToString);

    if (href[2] != "") {
      var date = new Date();
      date.setTime(date.getTime() + 1000);
      $.cookie("card", "ok", {
        expires: date,
        path: "/;SameSite=None",
        secure: true
      });
    }
  }

  (0,_functions_async_js__WEBPACK_IMPORTED_MODULE_13__.async)(url, "content");
  $("#modal-switch").css("display", "none");
});
$(".btn-switch-cancel").on("click", function (e) {
  e.preventDefault();
  $("#modal-switch").css("display", "none");
});

/***/ }),

/***/ "./assets/scripts/_modules.js":
/*!************************************!*\
  !*** ./assets/scripts/_modules.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions_async_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/async.js */ "./assets/functions/async.js");






var axios = (__webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]);


/* _____________ ACTIVATION/DESACTIVATION DE MODULE ____________________________*/

$(".activate-module").css("cursor", "pointer");
var name, slug, role, moduleId, switchChecked, modulepartner;
$("#modules").on("click", ".activate-module", function (e) {
  modulepartner = $(this).data("modulepartner") == "1" ? "activé" : "désactivé";
  switchChecked = !$(this).is(":checked");
  e.preventDefault();

  if ($(this).data("disabled") === "disabled" || $(this).data("role") != "admin") {
    e.preventDefault();
  } else {
    e.preventDefault();
    $("#modal-module").css("display", "block");
    name = $(this).data("name");
    var href = window.location.pathname.split("/");

    if (href.includes("partenaires")) {
      if (switchChecked) {
        $(".modal-body-module .question1").text("Etes-vous s\xFBr de vouloir d\xE9sactiver");
        $(".modal-body-module .question2").text("".concat(name));
        $(".modal-body-module .para1").text("En d\xE9sactivant ce droit, vous d\xE9sactiverez celui des structures dont d\xE9pend ce partenaire.");
      } else {
        $(".modal-body-module .question1").text("Etes-vous s\xFBr de vouloir activer");
        $(".modal-body-module .question2").text("".concat(name));
        $(".modal-body-module .para1").text("Cette action ne concerne que ce partenaire. Ce droit devra \xEAtre activ\xE9 au cas par cas pour chaque structure dont d\xE9pend le partenaire.");
      }
    } else if (switchChecked) {
      e.preventDefault();
      $(".modal-body-module .question").css("display", "block");
      $(".modal-body-module .question1").text("Etes-vous s\xFBr de vouloir d\xE9sactiver");
      $(".modal-body-module .question2").text("".concat(name));
      $(".modal-body-module .para1").text("Cette action n'a aucune influence sur le droit du partenaire dont d\xE9pend cette structure.");
      $("#btn-module").css("display", "block");
      $("#btn-module-cancel").text("ANNULER");
      $("#btn-module-cancel").css("backgroundColor", "#dc3545");
    } else {
      e.preventDefault();

      if (modulepartner === "désactivé") {
        $(".modal-body-module .question").css("display", "none");
        $(".modal-body-module .para1").text("Vous ne pouvez pas activer le droit de cette structure car celui du partenaire n'est pas activ\xE9.");
        $("#btn-module").css("display", "none");
        $("#btn-module-cancel").text("VALIDER");
        $("#btn-module-cancel").css({
          "backgroundColor": "#0d6efd",
          "border": "none",
          "outline": "none"
        });
      } else {
        $(".modal-body-module .question").css("display", "block");
        $(".modal-body-module .question1").text("Etes-vous s\xFBr de vouloir activer");
        $(".modal-body-module .question2").text("".concat(name));
        $(".modal-body-module .para1").text("Cette action n'a aucune influence sur le droit du partenaire dont d\xE9pend cette structure.");
        $("#btn-module").css("display", "flex");
        $("#btn-module-cancel").text("ANNULER");
        $("#btn-module-cancel").css("backgroundColor", "#dc3545");
      }
    }

    slug = $(this).data("slug");
    role = $(this).data("role");
    moduleId = $(this).data("idmodule");
  }
});
$(".btn-module").on("click", function (e) {
  e.preventDefault();
  var url = "";
  var href = window.location.pathname.split("/");

  if (role === "admin") {
    if (href.includes("partenaires")) {
      url = "".concat(window.location.protocol, "//").concat(window.location.host, "/partenaires/").concat(slug, "/").concat(moduleId, "/active-module");
    } else {
      url = "".concat(window.location.protocol, "//").concat(window.location.host, "/structures/").concat(slug, "/").concat(moduleId, "/active-module");
    }

    (0,_functions_async_js__WEBPACK_IMPORTED_MODULE_5__.async)(url, "modules");
  } else {
    e.preventDefault();
  }

  $("#modal-module").css("display", "none");
  $(".activate-module").css("cursor", "pointer");
});
$(".btn-module-cancel").on("click", function (e) {
  e.preventDefault();
  $("#modal-module").css("display", "none");
  $(".activate-module").css("cursor", "pointer");
});

/***/ }),

/***/ "./assets/scripts/_navbar.js":
/*!***********************************!*\
  !*** ./assets/scripts/_navbar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*_______________ TOPNAV ________________________*/
window.addEventListener("DOMContentLoaded", function (event) {
  // Toggle the side navigation
  var sidebarToggle = document.body.querySelector("#sidebarToggle");

  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener("click", function (event) {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"));
    });
  }
});
/*_______________ SIDENAV ________________________*/

var navLinks = $(".nav-link");
var current = location.href;

var _iterator = _createForOfIteratorHelper(navLinks),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var navLink = _step.value;

    if (navLink.href == current || navLink.href.split("/").slice(0, 4)[3] == current.split("/").slice(0, 4)[3]) {
      navLink.className.replace("active", "");
      navLink.className += " active";
      navLink.style.color = "#fff";
    }
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

if (current.split("/")[4] === "partenaire" || current.split("/")[4] === "structure") {
  $('.nav-dead-link').css('color', 'white');
}

/***/ }),

/***/ "./assets/scripts/_pagination.js":
/*!***************************************!*\
  !*** ./assets/scripts/_pagination.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/async.js */ "./assets/functions/async.js");







var axios = (__webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]);


/*_______________ PAGINATION ________________________*/

$("#content").on("click", ".page-link", function (e) {
  e.preventDefault();
  var params = $(this).attr("href");
  var url = new URL(window.location.href);
  (0,_functions_async_js__WEBPACK_IMPORTED_MODULE_6__.async)(url.pathname + params + "&ajax=1", "content");
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-e5e1f3"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFkLEVBQW1CLENBQW5CLE1BQTBCLFdBQXhFLEVBQXFGO0VBQ2pGN0MsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JtQyxHQUFwQixDQUF3QixPQUF4QixFQUFpQyxPQUFqQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRCxJQUFNekMsS0FBSyxHQUFHRiw4RUFBZDs7QUFDQTtBQUVBOztBQUNBUSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNpQyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQTFCLEVBQXdDLFVBQVVDLENBQVYsRUFBYTtFQUNqREEsQ0FBQyxDQUFDSSxjQUFGO0VBQ0EsSUFBSXJCLE1BQU0sR0FBR2pCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWEsSUFBUixDQUFhLE1BQWIsQ0FBYjtFQUNBLElBQUlqQixHQUFHLEdBQUcsSUFBSXVCLEdBQUosQ0FBUUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUF4QixDQUFWO0VBQ0EzQiwwREFBSyxDQUFDQyxHQUFHLENBQUMyQixRQUFKLEdBQWVOLE1BQWYsR0FBd0IsU0FBekIsRUFBb0MsU0FBcEMsQ0FBTDtBQUNILENBTEQ7Ozs7Ozs7Ozs7OztBQ0pBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mdW5jdGlvbnMvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Z1bmN0aW9ucy9vbkNsaWNrRmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZnVuY3Rpb25zL3VwZGF0ZVBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fbW9kYWxfZGVsZXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL19tb2RhbF9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzNlOGEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbmltcG9ydCAnLi9zY3JpcHRzL19uYXZiYXInO1xuaW1wb3J0ICcuL3NjcmlwdHMvX21vZHVsZXMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvX21vZGFsX2RlbGV0ZSc7XG5pbXBvcnQgJy4vc2NyaXB0cy9fbW9kYWxfc3dpdGNoJztcbmltcG9ydCAnLi9zY3JpcHRzL19maWx0ZXJzJztcbmltcG9ydCAnLi9zY3JpcHRzL19wYWdpbmF0aW9uJztcblxuXG4vKiFcbiAqIFN0YXJ0IEJvb3RzdHJhcCAtIFNCIEFkbWluIHY3LjAuNSAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGUvc2ItYWRtaW4pXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDIyIFN0YXJ0IEJvb3RzdHJhcFxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vU3RhcnRCb290c3RyYXAvc3RhcnRib290c3RyYXAtc2ItYWRtaW4vYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuLy9cbi8vIFNjcmlwdHNcbi8vXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xyXG5cclxuZnVuY3Rpb24gYXN5bmMgKHVybCwgZWxlbWVudCA9IG51bGwpIHsgICAgXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KHVybClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICQoYC4ke2VsZW1lbnR9YCkuaHRtbChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAkKGAuJHtlbGVtZW50fWApLnBhcmVudCgpLmh0bWwgPSBgRXJyZXVyOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiSWwgeSBhIHVuZSBlcnJldXIgZGFucyBsYSByZXF1w6p0ZVwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydCB7YXN5bmN9OyIsImltcG9ydCB7IHVwZGF0ZVBhcmFtcywgdXBkYXRlTmV3UGFyYW1zIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy91cGRhdGVQYXJhbXMuanNcIjtcclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FzeW5jLmpzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gb25DbGlja0ZpbHRlcigpIHtcclxuICBsZXQgZmlsdGVyID0gJChcIi5zZWxlY3QtZmlsdGVycyBvcHRpb246c2VsZWN0ZWRcIikudmFsKCkgPz8gXCJcIjtcclxuICBsZXQgcGFnZSA9ICQoXCIjZmlsdGVycyBpbnB1dDpoaWRkZW5cIikuYXR0cihcInZhbHVlXCIpO1xyXG4gIGxldCBxdWVyeSA9ICQoXCIuanMtcXVlcnlcIikudmFsKCkgPz8gXCJcIjtcclxuICBsZXQgbGltaXQgPSAkKFwiI2xpbWl0XCIpLnZhbCgpO1xyXG5cclxuICBsZXQgZmlsdGVycyA9IHtcclxuICAgIFwiZmlsdGVyXCI6IGZpbHRlcixcclxuICAgIFwicGFnZVwiOiBwYWdlLFxyXG4gICAgXCJxdWVyeVwiOiBxdWVyeSxcclxuICAgIFwibGltaXRcIjogbGltaXRcclxuICB9O1xyXG5cclxuICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gIHVwZGF0ZVBhcmFtcyhmaWx0ZXJzLCBwYXJhbXMpO1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICBhc3luYyh1cmwucGF0aG5hbWUgKyBcIj9cIiArIHBhcmFtcy50b1N0cmluZygpICsgXCImYWpheD0xXCIsIFwiY29udGVudFwiKTtcclxuXHJcbiAgbGV0IG5ld1BhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICB1cGRhdGVOZXdQYXJhbXMoZmlsdGVycywgbmV3UGFyYW1zKTtcclxuICBcclxuICBpZiAobmV3UGFyYW1zLnRvU3RyaW5nKCkgPT09IFwiXCIpIHtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCBudWxsLCB1cmwucGF0aG5hbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgbnVsbCwgdXJsLnBhdGhuYW1lICsgXCI/XCIgKyBuZXdQYXJhbXMudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBvbkNsaWNrRmlsdGVyIH07XHJcbiIsImNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlUGFyYW1zKGZpbHRlcnMsIHBhcmFtcykge1xyXG4gICQuZWFjaChmaWx0ZXJzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgIC8vIG5lIHJpZW4gZmFpcmVcclxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmdldChrZXkpKSB7XHJcbiAgICAgIHBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVOZXdQYXJhbXMoZmlsdGVycywgcGFyYW1zKSB7XHJcbiAgJC5lYWNoKGZpbHRlcnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgdmFsdWUgPT09IDApIHtcclxuICAgICAgLy8gbmUgcmllbiBmYWlyZVxyXG4gICAgfSBlbHNlIGlmIChwYXJhbXMuZ2V0KGtleSkpIHtcclxuICAgICAgcGFyYW1zLnNldChrZXksIHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHVwZGF0ZVBhcmFtcywgdXBkYXRlTmV3UGFyYW1zIH07XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpLmRlZmF1bHQ7XHJcbmltcG9ydCB7IG9uQ2xpY2tGaWx0ZXIgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL29uQ2xpY2tGaWx0ZXJzLmpzXCI7XHJcblxyXG4vLyAvLyBfX19fX19fX19fX19fX19fX19fX19fIEZJTFRSRSBERVMgUEFSVEVOQUlSRVMvU1RSVUNUVVJFUyBQQVIgTk9NLCBPVSBBQ1RJVkUvREVTQUNUSVZFIF9fX19fX19fX19fX19fX19fIC8vXHJcbiQoXCIuanMtcXVlcnlcIikub24oXCJrZXl1cFwiLCBvbkNsaWNrRmlsdGVyKTtcclxuXHJcbiQoXCIuZmlsdGVyc1wiKS5vbihcImNoYW5nZVwiLCBvbkNsaWNrRmlsdGVyKTsiLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKS5kZWZhdWx0O1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXN5bmMuanNcIjtcclxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fIE1PREFMIFNVUFBSRVNTSU9OIEQnVU4gUEFSVEVOQUlSRS9TVFJVQ1RVUkUgX19fX19fX19fX19fX19fX19fX18vL1xyXG5cclxuJChcIi5tb2RhbF90cmlnZ2VyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAkKFwiI21vZGFsLWRlbGV0ZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbn0pO1xyXG5cclxuJChcIiNjb250ZW50XCIpLm9uKFwiY2xpY2tcIiwgXCIubW9kYWwtdHJpZ2dlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICQoXCIjbW9kYWwtZGVsZXRlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICBsZXQgaHJlZiA9ICQodGhpcykuZGF0YShcInNsdWdcIikgKyBcIi9cIiArICQodGhpcykuZGF0YShcImlkXCIpO1xyXG4gICQoXCIubW9kYWwtZm9vdGVyLWRlbGV0ZSBhXCIpLmF0dHIoXCJocmVmXCIsIGhyZWYpO1xyXG4gIGxldCBuYW1lID0gJCh0aGlzKS5kYXRhKFwibmFtZVwiKTtcclxuICAkKFwiLm1vZGFsLWJvZHktZGVsZXRlIC5xdWVzdGlvbjFcIikudGV4dChcIlZvdWxlei12b3VzIHN1cHByaW1lciBcIik7XHJcbiAgJChcIi5tb2RhbC1ib2R5LWRlbGV0ZSAucXVlc3Rpb24yXCIpLnRleHQobmFtZSk7XHJcbn0pO1xyXG5cclxuJChcIiNjYXJkc1wiKS5vbihcImNsaWNrXCIsIFwiLm1vZGFsLXRyaWdnZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAkKFwiI21vZGFsLWRlbGV0ZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgbGV0IGhyZWYgPSAkKHRoaXMpLmRhdGEoXCJzbHVnXCIpICsgXCIvXCIgKyAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcclxuICAkKFwiLm1vZGFsLWZvb3Rlci1kZWxldGUgYVwiKS5hdHRyKFwiaHJlZlwiLCBocmVmKTtcclxuICBsZXQgbmFtZSA9ICQodGhpcykuZGF0YShcIm5hbWVcIik7XHJcbiAgJChcIi5tb2RhbC1ib2R5LWRlbGV0ZSAucXVlc3Rpb24xXCIpLnRleHQoXCJWb3VsZXotdm91cyBzdXBwcmltZXIgXCIpO1xyXG4gICQoXCIubW9kYWwtYm9keS1kZWxldGUgLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG59KTtcclxuXHJcbiQoXCIuYnRuLWRlbGV0ZS1jYW5jZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKFwiI21vZGFsLWRlbGV0ZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxufSk7XHJcblxyXG4kKFwiI2NhcmRzXCIpLm9uKFwiY2xpY2tcIiwgXCIuc2VuZEVtYWlsXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSkge1xyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIHBhcmFtcy5hcHBlbmQoXCJzZW5kRW1haWxcIiwgXCJ0cnVlXCIpO1xyXG4gICAgbGV0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgYXN5bmModXJsLnBhdGhuYW1lICsgXCI/XCIgKyBwYXJhbXMudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIikuZGVmYXVsdDtcclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FzeW5jLmpzXCI7XHJcblxyXG4vLyBfX19fX19fX19fX19fX19fX19fXyBNT0RBTCBBQ1RJVkFUSU9OIEQnVU4gUEFSVEVOQUlSRS9TVFJVQ1RVUkUgX19fX19fX19fX19fX19fX19fX18vL1xyXG5cclxubGV0IHNsdWcgPSBcIlwiO1xyXG5sZXQgbmFtZSA9IFwiXCI7XHJcblxyXG4kKFwiI2NhcmRzXCIpLm9uKFwiY2xpY2tcIiwgXCIubW9kYWwtc3dpdGNoLXVzZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBpZiAoXHJcbiAgICAkKHRoaXMpLmRhdGEoXCJkaXNhYmxlZFwiKSA9PT0gXCJkaXNhYmxlZFwiIHx8XHJcbiAgICAkKHRoaXMpLmRhdGEoXCJyb2xlXCIpICE9IFwiYWRtaW5cIlxyXG4gICkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikudGV4dChcclxuICAgICAgICBgTGEgc2FsbGUgbmUgcGV1dCBwYXMgw6p0cmUgYWN0aXbDqWUgcXVhbmQgbGUgcGFydGVuYWlyZSBlc3QgZMOpc2FjdGl2w6kuYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiI2J0bi1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikudGV4dChcIlZBTElERVJcIik7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikuY3NzKHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzBkNmVmZFwiLFxyXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgc3dpdGNoQ2hlY2tlZCA9ICQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKTtcclxuICAgIG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICAgaWYgKCFzd2l0Y2hDaGVja2VkKSB7XHJcbiAgICAgICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgZMOpc2FjdGl2ZXIgYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGFjdGl2ZXIgYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgc2x1ZyA9ICQodGhpcykuZGF0YShcInNsdWdcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoXCIjY29udGVudFwiKS5vbihcImNsaWNrXCIsIFwiLm1vZGFsLXN3aXRjaC11c2VyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKFxyXG4gICAgJCh0aGlzKS5kYXRhKFwiZGlzYWJsZWRcIikgPT09IFwiZGlzYWJsZWRcIiB8fFxyXG4gICAgJCh0aGlzKS5kYXRhKFwicm9sZVwiKSAhPSBcImFkbWluXCJcclxuICApIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICgkKHRoaXMpLmRhdGEoXCJkaXNhYmxlZFwiKSA9PT0gXCJkaXNhYmxlZFwiKSB7XHJcbiAgICAgICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb25cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgYExhIHNhbGxlIG5lIHBldXQgcGFzIMOqdHJlIGFjdGl2w6llIHF1YW5kIGxlIHBhcnRlbmFpcmUgZXN0IGTDqXNhY3RpdsOpLmBcclxuICAgICAgKTtcclxuICAgICAgJChcIiNidG4tc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAkKFwiI2J0bi1zd2l0Y2gtY2FuY2VsXCIpLnRleHQoXCJWQUxJREVSXCIpO1xyXG4gICAgICAkKFwiI2J0bi1zd2l0Y2gtY2FuY2VsXCIpLmNzcyh7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwZDZlZmRcIixcclxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHN3aXRjaENoZWNrZWQgPSAkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIik7XHJcbiAgICBuYW1lID0gJCh0aGlzKS5kYXRhKFwibmFtZVwiKTtcclxuICAgIGlmICghc3dpdGNoQ2hlY2tlZCkge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBkw6lzYWN0aXZlciBgXHJcbiAgICAgICk7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG4gICAgICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICAgIGlmIChocmVmLmluY2x1ZGVzKFwicGFydGVuYWlyZXNcIikpIHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikudGV4dChcclxuICAgICAgICAgIGBFbiBkw6lzYWN0aXZhbnQgY2UgcGFydGVuYWlyZSwgdm91cyBkw6lzYWN0aXZlcmV6IHRvdXRlcyBsZXMgc3RydWN0dXJlcyBhdXF1ZWwgZWxsZXMgc29udCByYXR0YWNow6llcy5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgYWN0aXZlciBgXHJcbiAgICAgICk7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIH1cclxuICAgICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIHNsdWcgPSAkKHRoaXMpLmRhdGEoXCJzbHVnXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKFwiLmJ0bi1zd2l0Y2hcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgbGV0IHBhcmFtc1RvU3RyaW5nID0gcGFyYW1zLnRvU3RyaW5nKCk7XHJcbiAgbGV0IHVybCA9IFwiXCI7XHJcbiAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gIGlmIChocmVmLmluY2x1ZGVzKFwicGFydGVuYWlyZXNcIikpIHtcclxuICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L3BhcnRlbmFpcmVzLyR7c2x1Z30vYWN0aXZlLXVzZXIvPyR7cGFyYW1zVG9TdHJpbmd9YDtcclxuICB9IGVsc2Uge1xyXG4gICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vc3RydWN0dXJlcy8ke3NsdWd9L2FjdGl2ZS11c2VyLz8ke3BhcmFtc1RvU3RyaW5nfWA7XHJcbiAgICBpZiAoaHJlZlsyXSAhPSBcIlwiKSB7XHJcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgMTAwMCk7XHJcbiAgICAgICQuY29va2llKFwiY2FyZFwiLCBcIm9rXCIsIHtcclxuICAgICAgICBleHBpcmVzOiBkYXRlLFxyXG4gICAgICAgIHBhdGg6IFwiLztTYW1lU2l0ZT1Ob25lXCIsXHJcbiAgICAgICAgc2VjdXJlOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmModXJsLCBcImNvbnRlbnRcIik7XHJcbiAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbn0pO1xyXG5cclxuJChcIi5idG4tc3dpdGNoLWNhbmNlbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG59KTtcclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIikuZGVmYXVsdDtcclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FzeW5jLmpzXCI7XHJcblxyXG4vKiBfX19fX19fX19fX19fIEFDVElWQVRJT04vREVTQUNUSVZBVElPTiBERSBNT0RVTEUgX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXHJcblxyXG4kKFwiLmFjdGl2YXRlLW1vZHVsZVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xyXG5cclxubGV0IG5hbWUsIHNsdWcsIHJvbGUsIG1vZHVsZUlkLCBzd2l0Y2hDaGVja2VkLCBtb2R1bGVwYXJ0bmVyO1xyXG5cclxuJChcIiNtb2R1bGVzXCIpLm9uKFwiY2xpY2tcIiwgXCIuYWN0aXZhdGUtbW9kdWxlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgbW9kdWxlcGFydG5lciA9ICgkKHRoaXMpLmRhdGEoXCJtb2R1bGVwYXJ0bmVyXCIpID09IFwiMVwiKSA/IFwiYWN0aXbDqVwiIDogXCJkw6lzYWN0aXbDqVwiIDtcclxuICBzd2l0Y2hDaGVja2VkID0gISQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKFxyXG4gICAgJCh0aGlzKS5kYXRhKFwiZGlzYWJsZWRcIikgPT09IFwiZGlzYWJsZWRcIiB8fFxyXG4gICAgJCh0aGlzKS5kYXRhKFwicm9sZVwiKSAhPSBcImFkbWluXCJcclxuICApIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICQoXCIjbW9kYWwtbW9kdWxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIFxyXG4gICAgbmFtZSA9ICQodGhpcykuZGF0YShcIm5hbWVcIik7XHJcbiAgICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICBpZiAoaHJlZi5pbmNsdWRlcyhcInBhcnRlbmFpcmVzXCIpKSB7XHJcbiAgICAgIGlmIChzd2l0Y2hDaGVja2VkKSB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBkw6lzYWN0aXZlcmBcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMlwiKS50ZXh0KGAke25hbWV9YCk7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucGFyYTFcIikudGV4dChcclxuICAgICAgICAgIGBFbiBkw6lzYWN0aXZhbnQgY2UgZHJvaXQsIHZvdXMgZMOpc2FjdGl2ZXJleiBjZWx1aSBkZXMgc3RydWN0dXJlcyBkb250IGTDqXBlbmQgY2UgcGFydGVuYWlyZS5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGFjdGl2ZXJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjJcIikudGV4dChgJHtuYW1lfWApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgQ2V0dGUgYWN0aW9uIG5lIGNvbmNlcm5lIHF1ZSBjZSBwYXJ0ZW5haXJlLiBDZSBkcm9pdCBkZXZyYSDDqnRyZSBhY3RpdsOpIGF1IGNhcyBwYXIgY2FzIHBvdXIgY2hhcXVlIHN0cnVjdHVyZSBkb250IGTDqXBlbmQgbGUgcGFydGVuYWlyZS5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChzd2l0Y2hDaGVja2VkKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgXHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGTDqXNhY3RpdmVyYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjJcIikudGV4dChgJHtuYW1lfWApO1xyXG4gICAgICBcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucGFyYTFcIikudGV4dChcclxuICAgICAgICBgQ2V0dGUgYWN0aW9uIG4nYSBhdWN1bmUgaW5mbHVlbmNlIHN1ciBsZSBkcm9pdCBkdSBwYXJ0ZW5haXJlIGRvbnQgZMOpcGVuZCBjZXR0ZSBzdHJ1Y3R1cmUuYFxyXG4gICAgICApO1xyXG5cclxuICAgICAgJChcIiNidG4tbW9kdWxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLnRleHQoXCJBTk5VTEVSXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZS1jYW5jZWxcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIsIFwiI2RjMzU0NVwiKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAobW9kdWxlcGFydG5lciA9PT0gXCJkw6lzYWN0aXbDqVwiKSB7XHJcblxyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgVm91cyBuZSBwb3V2ZXogcGFzIGFjdGl2ZXIgbGUgZHJvaXQgZGUgY2V0dGUgc3RydWN0dXJlIGNhciBjZWx1aSBkdSBwYXJ0ZW5haXJlIG4nZXN0IHBhcyBhY3RpdsOpLmBcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLnRleHQoXCJWQUxJREVSXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZS1jYW5jZWxcIikuY3NzKHtcclxuICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzBkNmVmZFwiLFxyXG4gICAgICAgICAgXCJib3JkZXJcIjogXCJub25lXCIsXHJcbiAgICAgICAgICBcIm91dGxpbmVcIjogXCJub25lXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGFjdGl2ZXJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjJcIikudGV4dChgJHtuYW1lfWApOyAgICAgICAgXHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucGFyYTFcIikudGV4dChcclxuICAgICAgICAgIGBDZXR0ZSBhY3Rpb24gbidhIGF1Y3VuZSBpbmZsdWVuY2Ugc3VyIGxlIGRyb2l0IGR1IHBhcnRlbmFpcmUgZG9udCBkw6lwZW5kIGNldHRlIHN0cnVjdHVyZS5gXHJcbiAgICAgICAgKTsgICAgICAgIFxyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiZmxleFwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLnRleHQoXCJBTk5VTEVSXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZS1jYW5jZWxcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIsIFwiI2RjMzU0NVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNsdWcgPSAkKHRoaXMpLmRhdGEoXCJzbHVnXCIpO1xyXG4gICAgcm9sZSA9ICQodGhpcykuZGF0YShcInJvbGVcIik7XHJcbiAgICBtb2R1bGVJZCA9ICQodGhpcykuZGF0YShcImlkbW9kdWxlXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKFwiLmJ0bi1tb2R1bGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgdXJsID0gXCJcIjtcclxuICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgaWYgKHJvbGUgPT09IFwiYWRtaW5cIikge1xyXG4gICAgaWYgKGhyZWYuaW5jbHVkZXMoXCJwYXJ0ZW5haXJlc1wiKSkge1xyXG4gICAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9wYXJ0ZW5haXJlcy8ke3NsdWd9LyR7bW9kdWxlSWR9L2FjdGl2ZS1tb2R1bGVgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vc3RydWN0dXJlcy8ke3NsdWd9LyR7bW9kdWxlSWR9L2FjdGl2ZS1tb2R1bGVgO1xyXG4gICAgfVxyXG4gICAgYXN5bmModXJsLCBcIm1vZHVsZXNcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcbiAgJChcIiNtb2RhbC1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgJChcIi5hY3RpdmF0ZS1tb2R1bGVcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKVxyXG59KTtcclxuXHJcbiQoXCIuYnRuLW1vZHVsZS1jYW5jZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKFwiI21vZGFsLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAkKFwiLmFjdGl2YXRlLW1vZHVsZVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpXHJcbn0pO1xyXG4iLCIvKl9fX19fX19fX19fX19fXyBUT1BOQVYgX19fX19fX19fX19fX19fX19fX19fX19fKi9cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBUb2dnbGUgdGhlIHNpZGUgbmF2aWdhdGlvblxyXG4gICAgY29uc3Qgc2lkZWJhclRvZ2dsZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyVG9nZ2xlXCIpO1xyXG4gICAgaWYgKHNpZGViYXJUb2dnbGUpIHtcclxuICAgICAgICAvLyBVbmNvbW1lbnQgQmVsb3cgdG8gcGVyc2lzdCBzaWRlYmFyIHRvZ2dsZSBiZXR3ZWVuIHJlZnJlc2hlc1xyXG4gICAgICAgIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2J8c2lkZWJhci10b2dnbGUnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2Itc2lkZW5hdi10b2dnbGVkJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHNpZGViYXJUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJzYi1zaWRlbmF2LXRvZ2dsZWRcIik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgICAgICAgXCJzYnxzaWRlYmFyLXRvZ2dsZVwiLFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzYi1zaWRlbmF2LXRvZ2dsZWRcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vKl9fX19fX19fX19fX19fXyBTSURFTkFWIF9fX19fX19fX19fX19fX19fX19fX19fXyovXHJcblxyXG5sZXQgbmF2TGlua3MgPSAkKFwiLm5hdi1saW5rXCIpO1xyXG5sZXQgY3VycmVudCA9IGxvY2F0aW9uLmhyZWY7XHJcblxyXG5mb3IgKGxldCBuYXZMaW5rIG9mIG5hdkxpbmtzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgbmF2TGluay5ocmVmID09IGN1cnJlbnQgfHxcclxuICAgICAgICBuYXZMaW5rLmhyZWYuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIDQpWzNdID09XHJcbiAgICAgICAgY3VycmVudC5zcGxpdChcIi9cIikuc2xpY2UoMCwgNClbM11cclxuICAgICkge1xyXG4gICAgICAgIG5hdkxpbmsuY2xhc3NOYW1lLnJlcGxhY2UoXCJhY3RpdmVcIiwgXCJcIik7XHJcbiAgICAgICAgbmF2TGluay5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgICAgICAgbmF2TGluay5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5pZiAoY3VycmVudC5zcGxpdChcIi9cIilbNF0gPT09IFwicGFydGVuYWlyZVwiIHx8IGN1cnJlbnQuc3BsaXQoXCIvXCIpWzRdID09PSBcInN0cnVjdHVyZVwiKSB7XHJcbiAgICAkKCcubmF2LWRlYWQtbGluaycpLmNzcygnY29sb3InLCAnd2hpdGUnKVxyXG59XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xyXG5pbXBvcnQge2FzeW5jfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FzeW5jLmpzXCI7XHJcblxyXG4vKl9fX19fX19fX19fX19fXyBQQUdJTkFUSU9OIF9fX19fX19fX19fX19fX19fX19fX19fXyovXHJcbiQoXCIjY29udGVudFwiKS5vbihcImNsaWNrXCIsIFwiLnBhZ2UtbGlua1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHBhcmFtcyA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcbiAgICBsZXQgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICBhc3luYyh1cmwucGF0aG5hbWUgKyBwYXJhbXMgKyBcIiZhamF4PTFcIiwgXCJjb250ZW50XCIpO1xyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJheGlvcyIsImFzeW5jIiwidXJsIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiJCIsImh0bWwiLCJkYXRhIiwiZXJyb3IiLCJwYXJlbnQiLCJtZXNzYWdlIiwiY29uc29sZSIsInVwZGF0ZVBhcmFtcyIsInVwZGF0ZU5ld1BhcmFtcyIsIm9uQ2xpY2tGaWx0ZXIiLCJmaWx0ZXIiLCJ2YWwiLCJwYWdlIiwiYXR0ciIsInF1ZXJ5IiwibGltaXQiLCJmaWx0ZXJzIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicGF0aG5hbWUiLCJ0b1N0cmluZyIsIm5ld1BhcmFtcyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJlYWNoIiwia2V5IiwidmFsdWUiLCJzZXQiLCJhcHBlbmQiLCJvbiIsImUiLCJjc3MiLCJuYW1lIiwidGV4dCIsInByZXZlbnREZWZhdWx0IiwiaXMiLCJzbHVnIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwib3V0bGluZSIsInN3aXRjaENoZWNrZWQiLCJzcGxpdCIsImluY2x1ZGVzIiwic2VhcmNoIiwicGFyYW1zVG9TdHJpbmciLCJwcm90b2NvbCIsImhvc3QiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiY29va2llIiwiZXhwaXJlcyIsInBhdGgiLCJzZWN1cmUiLCJyb2xlIiwibW9kdWxlSWQiLCJtb2R1bGVwYXJ0bmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2lkZWJhclRvZ2dsZSIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY29udGFpbnMiLCJuYXZMaW5rcyIsImN1cnJlbnQiLCJuYXZMaW5rIiwic2xpY2UiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwic3R5bGUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=