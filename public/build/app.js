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
  (0,_functions_updateParams_js__WEBPACK_IMPORTED_MODULE_8__.updateNewParams)(filters, newParams); // Mise à jour de l'url

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

$(".js-query").on("keyup", _functions_onClickFilters_js__WEBPACK_IMPORTED_MODULE_0__.onClickFilter); // $(".content").on("change", ".filters", onClickFilter);

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
  console.log("ok");
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
  console.log("ok");
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
    console.log("1");
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
    console.log("2");
    var switchChecked = $(this).is(":checked");
    name = $(this).data("name");

    if (!switchChecked) {
      console.log("3");
      $("#modal-switch").css("display", "block");
      $(".modal-body-switch .question1").text("Etes-vous s\xFBr de vouloir d\xE9sactiver ");
      $(".modal-body-switch .question2").text(name);
      $(".modal-body-switch .para1").css("display", "none");
    } else {
      console.log("4");
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

      console.log('1');
    } else {
      $(".modal-body-switch .question1").text("Etes-vous s\xFBr de vouloir activer ");
      $(".modal-body-switch .question2").text(name);
      $(".modal-body-switch .para1").css("display", "none");
      console.log('2');
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


console.log('pagination');
console.log($('.page-item'));
/*_______________ PAGINATION ________________________*/

$("#content").on("click", ".page-link", function (e) {
  e.preventDefault();
  console.log('clic');
  var params = $(this).attr("href");
  console.log(params);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMkIsUUFBSixHQUFlTixNQUFmLEdBQXdCLFNBQXpCLEVBQW9DLFNBQXBDLENBQUw7QUFDSCxDQVBEOzs7Ozs7Ozs7Ozs7QUNQQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZnVuY3Rpb25zL2FzeW5jLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mdW5jdGlvbnMvb25DbGlja0ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Z1bmN0aW9ucy91cGRhdGVQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX21vZGFsX2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fbW9kYWxfc3dpdGNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL19tb2R1bGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL19uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX3BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz8zZThhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5pbXBvcnQgJy4vc2NyaXB0cy9fbmF2YmFyJztcbmltcG9ydCAnLi9zY3JpcHRzL19tb2R1bGVzJztcbmltcG9ydCAnLi9zY3JpcHRzL19tb2RhbF9kZWxldGUnO1xuaW1wb3J0ICcuL3NjcmlwdHMvX21vZGFsX3N3aXRjaCc7XG5pbXBvcnQgJy4vc2NyaXB0cy9fZmlsdGVycyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9fcGFnaW5hdGlvbic7XG5cblxuLyohXG4gKiBTdGFydCBCb290c3RyYXAgLSBTQiBBZG1pbiB2Ny4wLjUgKGh0dHBzOi8vc3RhcnRib290c3RyYXAuY29tL3RlbXBsYXRlL3NiLWFkbWluKVxuICogQ29weXJpZ2h0IDIwMTMtMjAyMiBTdGFydCBCb290c3RyYXBcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL1N0YXJ0Qm9vdHN0cmFwL3N0YXJ0Ym9vdHN0cmFwLXNiLWFkbWluL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cbi8vXG4vLyBTY3JpcHRzXG4vL1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdDtcclxuXHJcbmZ1bmN0aW9uIGFzeW5jICh1cmwsIGVsZW1lbnQgPSBudWxsKSB7ICAgIFxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldCh1cmwpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAkKGAuJHtlbGVtZW50fWApLmh0bWwocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgJChgLiR7ZWxlbWVudH1gKS5wYXJlbnQoKS5odG1sID0gYEVycmV1cjogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIklsIHkgYSB1bmUgZXJyZXVyIGRhbnMgbGEgcmVxdcOqdGVcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBleHBvcnQge2FzeW5jfTsiLCJpbXBvcnQgeyB1cGRhdGVQYXJhbXMsIHVwZGF0ZU5ld1BhcmFtcyB9IGZyb20gXCIuLi9mdW5jdGlvbnMvdXBkYXRlUGFyYW1zLmpzXCI7XHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hc3luYy5qc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIG9uQ2xpY2tGaWx0ZXIoKSB7XHJcbiAgbGV0IGZpbHRlciA9ICQoXCIuc2VsZWN0LWZpbHRlcnMgb3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpID8/IFwiXCI7XHJcbiAgbGV0IHBhZ2UgPSAkKFwiI2ZpbHRlcnMgaW5wdXQ6aGlkZGVuXCIpLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICBsZXQgcXVlcnkgPSAkKFwiLmpzLXF1ZXJ5XCIpLnZhbCgpID8/IFwiXCI7XHJcbiAgbGV0IGxpbWl0ID0gJChcIiNsaW1pdFwiKS52YWwoKTtcclxuXHJcbiAgbGV0IGZpbHRlcnMgPSB7XHJcbiAgICBcImZpbHRlclwiOiBmaWx0ZXIsXHJcbiAgICBcInBhZ2VcIjogcGFnZSxcclxuICAgIFwicXVlcnlcIjogcXVlcnksXHJcbiAgICBcImxpbWl0XCI6IGxpbWl0XHJcbiAgfTtcclxuXHJcbiAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuXHJcbiAgdXBkYXRlUGFyYW1zKGZpbHRlcnMsIHBhcmFtcyk7XHJcblxyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICBhc3luYyh1cmwucGF0aG5hbWUgKyBcIj9cIiArIHBhcmFtcy50b1N0cmluZygpICsgXCImYWpheD0xXCIsIFwiY29udGVudFwiKTtcclxuXHJcbiAgbGV0IG5ld1BhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICB1cGRhdGVOZXdQYXJhbXMoZmlsdGVycywgbmV3UGFyYW1zKTtcclxuXHJcbiAgLy8gTWlzZSDDoCBqb3VyIGRlIGwndXJsXHJcbiAgaWYgKG5ld1BhcmFtcy50b1N0cmluZygpID09PSBcIlwiKSB7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgbnVsbCwgdXJsLnBhdGhuYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sIG51bGwsIHVybC5wYXRobmFtZSArIFwiP1wiICsgbmV3UGFyYW1zLnRvU3RyaW5nKCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgb25DbGlja0ZpbHRlciB9O1xyXG4iLCJjb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBhcmFtcyhmaWx0ZXJzLCBwYXJhbXMpIHtcclxuICAkLmVhY2goZmlsdGVycywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAvLyBuZSByaWVuIGZhaXJlXHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5nZXQoa2V5KSkge1xyXG4gICAgICBwYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTmV3UGFyYW1zKGZpbHRlcnMsIHBhcmFtcykge1xyXG4gICQuZWFjaChmaWx0ZXJzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IHZhbHVlID09PSAwKSB7XHJcbiAgICAgIC8vIG5lIHJpZW4gZmFpcmVcclxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmdldChrZXkpKSB7XHJcbiAgICAgIHBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyB1cGRhdGVQYXJhbXMsIHVwZGF0ZU5ld1BhcmFtcyB9O1xyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKS5kZWZhdWx0O1xyXG5pbXBvcnQgeyBvbkNsaWNrRmlsdGVyIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9vbkNsaWNrRmlsdGVycy5qc1wiO1xyXG5cclxuLy8gLy8gX19fX19fX19fX19fX19fX19fX19fXyBGSUxUUkUgREVTIFBBUlRFTkFJUkVTL1NUUlVDVFVSRVMgUEFSIE5PTSwgT1UgQUNUSVZFL0RFU0FDVElWRSBfX19fX19fX19fX19fX19fXyAvL1xyXG4kKFwiLmpzLXF1ZXJ5XCIpLm9uKFwia2V5dXBcIiwgb25DbGlja0ZpbHRlcik7XHJcblxyXG4vLyAkKFwiLmNvbnRlbnRcIikub24oXCJjaGFuZ2VcIiwgXCIuZmlsdGVyc1wiLCBvbkNsaWNrRmlsdGVyKTtcclxuJChcIi5maWx0ZXJzXCIpLm9uKFwiY2hhbmdlXCIsIG9uQ2xpY2tGaWx0ZXIpOyIsImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpLmRlZmF1bHQ7XHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hc3luYy5qc1wiO1xyXG5cclxuLy8gX19fX19fX19fX19fX19fX19fX18gTU9EQUwgU1VQUFJFU1NJT04gRCdVTiBQQVJURU5BSVJFL1NUUlVDVFVSRSBfX19fX19fX19fX19fX19fX19fXy8vXHJcblxyXG4kKFwiLm1vZGFsX3RyaWdnZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGNvbnNvbGUubG9nKFwib2tcIik7XHJcbiAgJChcIiNtb2RhbC1kZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG59KTtcclxuXHJcbiQoXCIjY29udGVudFwiKS5vbihcImNsaWNrXCIsIFwiLm1vZGFsLXRyaWdnZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAkKFwiI21vZGFsLWRlbGV0ZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgbGV0IGhyZWYgPSAkKHRoaXMpLmRhdGEoXCJzbHVnXCIpICsgXCIvXCIgKyAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcclxuICAkKFwiLm1vZGFsLWZvb3Rlci1kZWxldGUgYVwiKS5hdHRyKFwiaHJlZlwiLCBocmVmKTtcclxuICBsZXQgbmFtZSA9ICQodGhpcykuZGF0YShcIm5hbWVcIik7XHJcbiAgJChcIi5tb2RhbC1ib2R5LWRlbGV0ZSAucXVlc3Rpb24xXCIpLnRleHQoXCJWb3VsZXotdm91cyBzdXBwcmltZXIgXCIpO1xyXG4gICQoXCIubW9kYWwtYm9keS1kZWxldGUgLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG59KTtcclxuXHJcbiQoXCIjY2FyZHNcIikub24oXCJjbGlja1wiLCBcIi5tb2RhbC10cmlnZ2VyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgJChcIiNtb2RhbC1kZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gIGxldCBocmVmID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKSArIFwiL1wiICsgJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgJChcIi5tb2RhbC1mb290ZXItZGVsZXRlIGFcIikuYXR0cihcImhyZWZcIiwgaHJlZik7XHJcbiAgbGV0IG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICQoXCIubW9kYWwtYm9keS1kZWxldGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFwiVm91bGV6LXZvdXMgc3VwcHJpbWVyIFwiKTtcclxuICAkKFwiLm1vZGFsLWJvZHktZGVsZXRlIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxufSk7XHJcblxyXG4kKFwiLmJ0bi1kZWxldGUtY2FuY2VsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc29sZS5sb2coXCJva1wiKTtcclxuICAkKFwiI21vZGFsLWRlbGV0ZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxufSk7XHJcblxyXG4kKFwiI2NhcmRzXCIpLm9uKFwiY2xpY2tcIiwgXCIuc2VuZEVtYWlsXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSkge1xyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIHBhcmFtcy5hcHBlbmQoXCJzZW5kRW1haWxcIiwgXCJ0cnVlXCIpO1xyXG4gICAgbGV0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgYXN5bmModXJsLnBhdGhuYW1lICsgXCI/XCIgKyBwYXJhbXMudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIikuZGVmYXVsdDtcclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FzeW5jLmpzXCI7XHJcblxyXG4vLyBfX19fX19fX19fX19fX19fX19fXyBNT0RBTCBBQ1RJVkFUSU9OIEQnVU4gUEFSVEVOQUlSRS9TVFJVQ1RVUkUgX19fX19fX19fX19fX19fX19fX18vL1xyXG5cclxubGV0IHNsdWcgPSBcIlwiO1xyXG5sZXQgbmFtZSA9IFwiXCI7XHJcblxyXG4kKFwiI2NhcmRzXCIpLm9uKFwiY2xpY2tcIiwgXCIubW9kYWwtc3dpdGNoLXVzZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBpZiAoXHJcbiAgICAkKHRoaXMpLmRhdGEoXCJkaXNhYmxlZFwiKSA9PT0gXCJkaXNhYmxlZFwiIHx8XHJcbiAgICAkKHRoaXMpLmRhdGEoXCJyb2xlXCIpICE9IFwiYWRtaW5cIlxyXG4gICkge1xyXG4gICAgY29uc29sZS5sb2coXCIxXCIpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikudGV4dChcclxuICAgICAgICBgTGEgc2FsbGUgbmUgcGV1dCBwYXMgw6p0cmUgYWN0aXbDqWUgcXVhbmQgbGUgcGFydGVuYWlyZSBlc3QgZMOpc2FjdGl2w6kuYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiI2J0bi1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikudGV4dChcIlZBTElERVJcIik7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikuY3NzKHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzBkNmVmZFwiLFxyXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIjJcIik7XHJcbiAgICBsZXQgc3dpdGNoQ2hlY2tlZCA9ICQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKTtcclxuICAgIG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICAgaWYgKCFzd2l0Y2hDaGVja2VkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiM1wiKTtcclxuICAgICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBkw6lzYWN0aXZlciBgXHJcbiAgICAgICk7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiNFwiKTtcclxuICAgICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBhY3RpdmVyIGBcclxuICAgICAgKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24yXCIpLnRleHQobmFtZSk7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIHNsdWcgPSAkKHRoaXMpLmRhdGEoXCJzbHVnXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKFwiI2NvbnRlbnRcIikub24oXCJjbGlja1wiLCBcIi5tb2RhbC1zd2l0Y2gtdXNlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGlmIChcclxuICAgICQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIgfHxcclxuICAgICQodGhpcykuZGF0YShcInJvbGVcIikgIT0gXCJhZG1pblwiXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoJCh0aGlzKS5kYXRhKFwiZGlzYWJsZWRcIikgPT09IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgIGBMYSBzYWxsZSBuZSBwZXV0IHBhcyDDqnRyZSBhY3RpdsOpZSBxdWFuZCBsZSBwYXJ0ZW5haXJlIGVzdCBkw6lzYWN0aXbDqS5gXHJcbiAgICAgICk7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgJChcIiNidG4tc3dpdGNoLWNhbmNlbFwiKS50ZXh0KFwiVkFMSURFUlwiKTtcclxuICAgICAgJChcIiNidG4tc3dpdGNoLWNhbmNlbFwiKS5jc3Moe1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMGQ2ZWZkXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBzd2l0Y2hDaGVja2VkID0gJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpO1xyXG4gICAgbmFtZSA9ICQodGhpcykuZGF0YShcIm5hbWVcIik7XHJcbiAgICBpZiAoIXN3aXRjaENoZWNrZWQpIHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgZMOpc2FjdGl2ZXIgYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxuICAgICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gICAgICBpZiAoaHJlZi5pbmNsdWRlcyhcInBhcnRlbmFpcmVzXCIpKSB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgRW4gZMOpc2FjdGl2YW50IGNlIHBhcnRlbmFpcmUsIHZvdXMgZMOpc2FjdGl2ZXJleiB0b3V0ZXMgbGVzIHN0cnVjdHVyZXMgYXVxdWVsIGVsbGVzIHNvbnQgcmF0dGFjaMOpZXMuYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJzEnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGFjdGl2ZXIgYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKCcyJyk7XHJcbiAgICB9XHJcbiAgICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICBzbHVnID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChcIi5idG4tc3dpdGNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gIGxldCBwYXJhbXNUb1N0cmluZyA9IHBhcmFtcy50b1N0cmluZygpO1xyXG4gIGxldCB1cmwgPSBcIlwiO1xyXG4gIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICBpZiAoaHJlZi5pbmNsdWRlcyhcInBhcnRlbmFpcmVzXCIpKSB7XHJcbiAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9wYXJ0ZW5haXJlcy8ke3NsdWd9L2FjdGl2ZS11c2VyLz8ke3BhcmFtc1RvU3RyaW5nfWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L3N0cnVjdHVyZXMvJHtzbHVnfS9hY3RpdmUtdXNlci8/JHtwYXJhbXNUb1N0cmluZ31gO1xyXG4gICAgaWYgKGhyZWZbMl0gIT0gXCJcIikge1xyXG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIDEwMDApO1xyXG4gICAgICAkLmNvb2tpZShcImNhcmRcIiwgXCJva1wiLCB7XHJcbiAgICAgICAgZXhwaXJlczogZGF0ZSxcclxuICAgICAgICBwYXRoOiBcIi87U2FtZVNpdGU9Tm9uZVwiLFxyXG4gICAgICAgIHNlY3VyZTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jKHVybCwgXCJjb250ZW50XCIpO1xyXG4gICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG59KTtcclxuXHJcbiQoXCIuYnRuLXN3aXRjaC1jYW5jZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxufSk7XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpLmRlZmF1bHQ7XHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hc3luYy5qc1wiO1xyXG5cclxuLyogX19fX19fX19fX19fXyBBQ1RJVkFUSU9OL0RFU0FDVElWQVRJT04gREUgTU9EVUxFIF9fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xyXG5cclxuJChcIi5hY3RpdmF0ZS1tb2R1bGVcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuXHJcbmxldCBuYW1lLCBzbHVnLCByb2xlLCBtb2R1bGVJZCwgc3dpdGNoQ2hlY2tlZCwgbW9kdWxlcGFydG5lcjtcclxuXHJcbiQoXCIjbW9kdWxlc1wiKS5vbihcImNsaWNrXCIsIFwiLmFjdGl2YXRlLW1vZHVsZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIG1vZHVsZXBhcnRuZXIgPSAoJCh0aGlzKS5kYXRhKFwibW9kdWxlcGFydG5lclwiKSA9PSBcIjFcIikgPyBcImFjdGl2w6lcIiA6IFwiZMOpc2FjdGl2w6lcIiA7XHJcbiAgc3dpdGNoQ2hlY2tlZCA9ICEkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIik7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlmIChcclxuICAgICQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIgfHxcclxuICAgICQodGhpcykuZGF0YShcInJvbGVcIikgIT0gXCJhZG1pblwiXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAkKFwiI21vZGFsLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICBcclxuICAgIG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gICAgaWYgKGhyZWYuaW5jbHVkZXMoXCJwYXJ0ZW5haXJlc1wiKSkge1xyXG4gICAgICBpZiAoc3dpdGNoQ2hlY2tlZCkge1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgZMOpc2FjdGl2ZXJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjJcIikudGV4dChgJHtuYW1lfWApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgRW4gZMOpc2FjdGl2YW50IGNlIGRyb2l0LCB2b3VzIGTDqXNhY3RpdmVyZXogY2VsdWkgZGVzIHN0cnVjdHVyZXMgZG9udCBkw6lwZW5kIGNlIHBhcnRlbmFpcmUuYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBhY3RpdmVyYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24yXCIpLnRleHQoYCR7bmFtZX1gKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYENldHRlIGFjdGlvbiBuZSBjb25jZXJuZSBxdWUgY2UgcGFydGVuYWlyZS4gQ2UgZHJvaXQgZGV2cmEgw6p0cmUgYWN0aXbDqSBhdSBjYXMgcGFyIGNhcyBwb3VyIGNoYXF1ZSBzdHJ1Y3R1cmUgZG9udCBkw6lwZW5kIGxlIHBhcnRlbmFpcmUuYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoc3dpdGNoQ2hlY2tlZCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIFxyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblxyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBkw6lzYWN0aXZlcmBcclxuICAgICAgKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24yXCIpLnRleHQoYCR7bmFtZX1gKTtcclxuICAgICAgXHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgYENldHRlIGFjdGlvbiBuJ2EgYXVjdW5lIGluZmx1ZW5jZSBzdXIgbGUgZHJvaXQgZHUgcGFydGVuYWlyZSBkb250IGTDqXBlbmQgY2V0dGUgc3RydWN0dXJlLmBcclxuICAgICAgKTtcclxuXHJcbiAgICAgICQoXCIjYnRuLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS50ZXh0KFwiQU5OVUxFUlwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiLCBcIiNkYzM1NDVcIik7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBcclxuICAgICAgaWYgKG1vZHVsZXBhcnRuZXIgPT09IFwiZMOpc2FjdGl2w6lcIikge1xyXG5cclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYFZvdXMgbmUgcG91dmV6IHBhcyBhY3RpdmVyIGxlIGRyb2l0IGRlIGNldHRlIHN0cnVjdHVyZSBjYXIgY2VsdWkgZHUgcGFydGVuYWlyZSBuJ2VzdCBwYXMgYWN0aXbDqS5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS50ZXh0KFwiVkFMSURFUlwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLmNzcyh7XHJcbiAgICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwZDZlZmRcIixcclxuICAgICAgICAgIFwiYm9yZGVyXCI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgXCJvdXRsaW5lXCI6IFwibm9uZVwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBhY3RpdmVyYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24yXCIpLnRleHQoYCR7bmFtZX1gKTsgICAgICAgIFxyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgQ2V0dGUgYWN0aW9uIG4nYSBhdWN1bmUgaW5mbHVlbmNlIHN1ciBsZSBkcm9pdCBkdSBwYXJ0ZW5haXJlIGRvbnQgZMOpcGVuZCBjZXR0ZSBzdHJ1Y3R1cmUuYFxyXG4gICAgICAgICk7ICAgICAgICBcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS50ZXh0KFwiQU5OVUxFUlwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiLCBcIiNkYzM1NDVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzbHVnID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKTtcclxuICAgIHJvbGUgPSAkKHRoaXMpLmRhdGEoXCJyb2xlXCIpO1xyXG4gICAgbW9kdWxlSWQgPSAkKHRoaXMpLmRhdGEoXCJpZG1vZHVsZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChcIi5idG4tbW9kdWxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IHVybCA9IFwiXCI7XHJcbiAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gIGlmIChyb2xlID09PSBcImFkbWluXCIpIHtcclxuICAgIGlmIChocmVmLmluY2x1ZGVzKFwicGFydGVuYWlyZXNcIikpIHtcclxuICAgICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vcGFydGVuYWlyZXMvJHtzbHVnfS8ke21vZHVsZUlkfS9hY3RpdmUtbW9kdWxlYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L3N0cnVjdHVyZXMvJHtzbHVnfS8ke21vZHVsZUlkfS9hY3RpdmUtbW9kdWxlYDtcclxuICAgIH1cclxuICAgIGFzeW5jKHVybCwgXCJtb2R1bGVzXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG4gICQoXCIjbW9kYWwtbW9kdWxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICQoXCIuYWN0aXZhdGUtbW9kdWxlXCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIilcclxufSk7XHJcblxyXG4kKFwiLmJ0bi1tb2R1bGUtY2FuY2VsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJChcIiNtb2RhbC1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgJChcIi5hY3RpdmF0ZS1tb2R1bGVcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKVxyXG59KTtcclxuIiwiLypfX19fX19fX19fX19fX18gVE9QTkFWIF9fX19fX19fX19fX19fX19fX19fX19fXyovXHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldmVudCkgPT4ge1xyXG4gICAgLy8gVG9nZ2xlIHRoZSBzaWRlIG5hdmlnYXRpb25cclxuICAgIGNvbnN0IHNpZGViYXJUb2dnbGUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclRvZ2dsZVwiKTtcclxuICAgIGlmIChzaWRlYmFyVG9nZ2xlKSB7XHJcbiAgICAgICAgLy8gVW5jb21tZW50IEJlbG93IHRvIHBlcnNpc3Qgc2lkZWJhciB0b2dnbGUgYmV0d2VlbiByZWZyZXNoZXNcclxuICAgICAgICAvLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NifHNpZGViYXItdG9nZ2xlJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NiLXNpZGVuYXYtdG9nZ2xlZCcpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBzaWRlYmFyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwic2Itc2lkZW5hdi10b2dnbGVkXCIpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgICAgIFwic2J8c2lkZWJhci10b2dnbGVcIixcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2Itc2lkZW5hdi10b2dnbGVkXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLypfX19fX19fX19fX19fX18gU0lERU5BViBfX19fX19fX19fX19fX19fX19fX19fX18qL1xyXG5cclxubGV0IG5hdkxpbmtzID0gJChcIi5uYXYtbGlua1wiKTtcclxubGV0IGN1cnJlbnQgPSBsb2NhdGlvbi5ocmVmO1xyXG5cclxuZm9yIChsZXQgbmF2TGluayBvZiBuYXZMaW5rcykge1xyXG4gICAgaWYgKFxyXG4gICAgICAgIG5hdkxpbmsuaHJlZiA9PSBjdXJyZW50IHx8XHJcbiAgICAgICAgbmF2TGluay5ocmVmLnNwbGl0KFwiL1wiKS5zbGljZSgwLCA0KVszXSA9PVxyXG4gICAgICAgIGN1cnJlbnQuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIDQpWzNdXHJcbiAgICApIHtcclxuICAgICAgICBuYXZMaW5rLmNsYXNzTmFtZS5yZXBsYWNlKFwiYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgICAgIG5hdkxpbmsuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG4gICAgICAgIG5hdkxpbmsuc3R5bGUuY29sb3IgPSBcIiNmZmZcIjtcclxuICAgIH1cclxufVxyXG5cclxuaWYgKGN1cnJlbnQuc3BsaXQoXCIvXCIpWzRdID09PSBcInBhcnRlbmFpcmVcIiB8fCBjdXJyZW50LnNwbGl0KFwiL1wiKVs0XSA9PT0gXCJzdHJ1Y3R1cmVcIikge1xyXG4gICAgJCgnLm5hdi1kZWFkLWxpbmsnKS5jc3MoJ2NvbG9yJywgJ3doaXRlJylcclxufVxyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdDtcclxuaW1wb3J0IHthc3luY30gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hc3luYy5qc1wiO1xyXG5jb25zb2xlLmxvZygncGFnaW5hdGlvbicpO1xyXG5cclxuY29uc29sZS5sb2coJCgnLnBhZ2UtaXRlbScpKTtcclxuXHJcbi8qX19fX19fX19fX19fX19fIFBBR0lOQVRJT04gX19fX19fX19fX19fX19fX19fX19fX19fKi9cclxuJChcIiNjb250ZW50XCIpLm9uKFwiY2xpY2tcIiwgXCIucGFnZS1saW5rXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpYycpO1xyXG4gICAgbGV0IHBhcmFtcyA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gICAgbGV0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgYXN5bmModXJsLnBhdGhuYW1lICsgcGFyYW1zICsgXCImYWpheD0xXCIsIFwiY29udGVudFwiKTtcclxufSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiYXhpb3MiLCJhc3luYyIsInVybCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsIiQiLCJodG1sIiwiZGF0YSIsImVycm9yIiwicGFyZW50IiwibWVzc2FnZSIsImNvbnNvbGUiLCJ1cGRhdGVQYXJhbXMiLCJ1cGRhdGVOZXdQYXJhbXMiLCJvbkNsaWNrRmlsdGVyIiwiZmlsdGVyIiwidmFsIiwicGFnZSIsImF0dHIiLCJxdWVyeSIsImxpbWl0IiwiZmlsdGVycyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInBhdGhuYW1lIiwidG9TdHJpbmciLCJuZXdQYXJhbXMiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZWFjaCIsImtleSIsInZhbHVlIiwic2V0IiwiYXBwZW5kIiwib24iLCJlIiwibG9nIiwiY3NzIiwibmFtZSIsInRleHQiLCJwcmV2ZW50RGVmYXVsdCIsImlzIiwic2x1ZyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsIm91dGxpbmUiLCJzd2l0Y2hDaGVja2VkIiwic3BsaXQiLCJpbmNsdWRlcyIsInNlYXJjaCIsInBhcmFtc1RvU3RyaW5nIiwicHJvdG9jb2wiLCJob3N0IiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImNvb2tpZSIsImV4cGlyZXMiLCJwYXRoIiwic2VjdXJlIiwicm9sZSIsIm1vZHVsZUlkIiwibW9kdWxlcGFydG5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNpZGViYXJUb2dnbGUiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNvbnRhaW5zIiwibmF2TGlua3MiLCJjdXJyZW50IiwibmF2TGluayIsInNsaWNlIiwiY2xhc3NOYW1lIiwicmVwbGFjZSIsInN0eWxlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9