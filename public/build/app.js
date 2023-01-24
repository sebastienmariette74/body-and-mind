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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMkIsUUFBSixHQUFlTixNQUFmLEdBQXdCLFNBQXpCLEVBQW9DLFNBQXBDLENBQUw7QUFDSCxDQVBEOzs7Ozs7Ozs7Ozs7QUNQQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZnVuY3Rpb25zL2FzeW5jLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mdW5jdGlvbnMvb25DbGlja0ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Z1bmN0aW9ucy91cGRhdGVQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX21vZGFsX2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fbW9kYWxfc3dpdGNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL19tb2R1bGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL19uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX3BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuaW1wb3J0ICcuL3NjcmlwdHMvX25hdmJhcic7XG5pbXBvcnQgJy4vc2NyaXB0cy9fbW9kdWxlcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9fbW9kYWxfZGVsZXRlJztcbmltcG9ydCAnLi9zY3JpcHRzL19tb2RhbF9zd2l0Y2gnO1xuaW1wb3J0ICcuL3NjcmlwdHMvX2ZpbHRlcnMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvX3BhZ2luYXRpb24nO1xuXG5cbi8qIVxuICogU3RhcnQgQm9vdHN0cmFwIC0gU0IgQWRtaW4gdjcuMC41IChodHRwczovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90ZW1wbGF0ZS9zYi1hZG1pbilcbiAqIENvcHlyaWdodCAyMDEzLTIwMjIgU3RhcnQgQm9vdHN0cmFwXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9TdGFydEJvb3RzdHJhcC9zdGFydGJvb3RzdHJhcC1zYi1hZG1pbi9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG4vL1xuLy8gU2NyaXB0c1xuLy9cbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XHJcblxyXG5mdW5jdGlvbiBhc3luYyAodXJsLCBlbGVtZW50ID0gbnVsbCkgeyAgICBcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQodXJsKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgJChgLiR7ZWxlbWVudH1gKS5odG1sKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICQoYC4ke2VsZW1lbnR9YCkucGFyZW50KCkuaHRtbCA9IGBFcnJldXI6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbCB5IGEgdW5lIGVycmV1ciBkYW5zIGxhIHJlcXXDqnRlXCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IHthc3luY307IiwiaW1wb3J0IHsgdXBkYXRlUGFyYW1zLCB1cGRhdGVOZXdQYXJhbXMgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3VwZGF0ZVBhcmFtcy5qc1wiO1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXN5bmMuanNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBvbkNsaWNrRmlsdGVyKCkge1xyXG4gIGxldCBmaWx0ZXIgPSAkKFwiLnNlbGVjdC1maWx0ZXJzIG9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKSA/PyBcIlwiO1xyXG4gIGxldCBwYWdlID0gJChcIiNmaWx0ZXJzIGlucHV0OmhpZGRlblwiKS5hdHRyKFwidmFsdWVcIik7XHJcbiAgbGV0IHF1ZXJ5ID0gJChcIi5qcy1xdWVyeVwiKS52YWwoKSA/PyBcIlwiO1xyXG4gIGxldCBsaW1pdCA9ICQoXCIjbGltaXRcIikudmFsKCk7XHJcblxyXG4gIGxldCBmaWx0ZXJzID0ge1xyXG4gICAgXCJmaWx0ZXJcIjogZmlsdGVyLFxyXG4gICAgXCJwYWdlXCI6IHBhZ2UsXHJcbiAgICBcInF1ZXJ5XCI6IHF1ZXJ5LFxyXG4gICAgXCJsaW1pdFwiOiBsaW1pdFxyXG4gIH07XHJcblxyXG4gIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcblxyXG4gIHVwZGF0ZVBhcmFtcyhmaWx0ZXJzLCBwYXJhbXMpO1xyXG5cclxuICBsZXQgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgYXN5bmModXJsLnBhdGhuYW1lICsgXCI/XCIgKyBwYXJhbXMudG9TdHJpbmcoKSArIFwiJmFqYXg9MVwiLCBcImNvbnRlbnRcIik7XHJcblxyXG4gIGxldCBuZXdQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgdXBkYXRlTmV3UGFyYW1zKGZpbHRlcnMsIG5ld1BhcmFtcyk7XHJcblxyXG4gIC8vIE1pc2Ugw6Agam91ciBkZSBsJ3VybFxyXG4gIGlmIChuZXdQYXJhbXMudG9TdHJpbmcoKSA9PT0gXCJcIikge1xyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sIG51bGwsIHVybC5wYXRobmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCBudWxsLCB1cmwucGF0aG5hbWUgKyBcIj9cIiArIG5ld1BhcmFtcy50b1N0cmluZygpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IG9uQ2xpY2tGaWx0ZXIgfTtcclxuIiwiY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQYXJhbXMoZmlsdGVycywgcGFyYW1zKSB7XHJcbiAgJC5lYWNoKGZpbHRlcnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgLy8gbmUgcmllbiBmYWlyZVxyXG4gICAgfSBlbHNlIGlmIChwYXJhbXMuZ2V0KGtleSkpIHtcclxuICAgICAgcGFyYW1zLnNldChrZXksIHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZU5ld1BhcmFtcyhmaWx0ZXJzLCBwYXJhbXMpIHtcclxuICAkLmVhY2goZmlsdGVycywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCB2YWx1ZSA9PT0gMCkge1xyXG4gICAgICAvLyBuZSByaWVuIGZhaXJlXHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5nZXQoa2V5KSkge1xyXG4gICAgICBwYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgdXBkYXRlUGFyYW1zLCB1cGRhdGVOZXdQYXJhbXMgfTtcclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIikuZGVmYXVsdDtcclxuaW1wb3J0IHsgb25DbGlja0ZpbHRlciB9IGZyb20gXCIuLi9mdW5jdGlvbnMvb25DbGlja0ZpbHRlcnMuanNcIjtcclxuXHJcbi8vIC8vIF9fX19fX19fX19fX19fX19fX19fX18gRklMVFJFIERFUyBQQVJURU5BSVJFUy9TVFJVQ1RVUkVTIFBBUiBOT00sIE9VIEFDVElWRS9ERVNBQ1RJVkUgX19fX19fX19fX19fX19fX18gLy9cclxuJChcIi5qcy1xdWVyeVwiKS5vbihcImtleXVwXCIsIG9uQ2xpY2tGaWx0ZXIpO1xyXG5cclxuLy8gJChcIi5jb250ZW50XCIpLm9uKFwiY2hhbmdlXCIsIFwiLmZpbHRlcnNcIiwgb25DbGlja0ZpbHRlcik7XHJcbiQoXCIuZmlsdGVyc1wiKS5vbihcImNoYW5nZVwiLCBvbkNsaWNrRmlsdGVyKTsiLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKS5kZWZhdWx0O1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXN5bmMuanNcIjtcclxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fIE1PREFMIFNVUFBSRVNTSU9OIEQnVU4gUEFSVEVOQUlSRS9TVFJVQ1RVUkUgX19fX19fX19fX19fX19fX19fX18vL1xyXG5cclxuJChcIi5tb2RhbF90cmlnZ2VyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICQoXCIjbW9kYWwtZGVsZXRlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxufSk7XHJcblxyXG4kKFwiI2NvbnRlbnRcIikub24oXCJjbGlja1wiLCBcIi5tb2RhbC10cmlnZ2VyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgJChcIiNtb2RhbC1kZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gIGxldCBocmVmID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKSArIFwiL1wiICsgJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgJChcIi5tb2RhbC1mb290ZXItZGVsZXRlIGFcIikuYXR0cihcImhyZWZcIiwgaHJlZik7XHJcbiAgbGV0IG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICQoXCIubW9kYWwtYm9keS1kZWxldGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFwiVm91bGV6LXZvdXMgc3VwcHJpbWVyIFwiKTtcclxuICAkKFwiLm1vZGFsLWJvZHktZGVsZXRlIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxufSk7XHJcblxyXG4kKFwiI2NhcmRzXCIpLm9uKFwiY2xpY2tcIiwgXCIubW9kYWwtdHJpZ2dlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICQoXCIjbW9kYWwtZGVsZXRlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICBsZXQgaHJlZiA9ICQodGhpcykuZGF0YShcInNsdWdcIikgKyBcIi9cIiArICQodGhpcykuZGF0YShcImlkXCIpO1xyXG4gICQoXCIubW9kYWwtZm9vdGVyLWRlbGV0ZSBhXCIpLmF0dHIoXCJocmVmXCIsIGhyZWYpO1xyXG4gIGxldCBuYW1lID0gJCh0aGlzKS5kYXRhKFwibmFtZVwiKTtcclxuICAkKFwiLm1vZGFsLWJvZHktZGVsZXRlIC5xdWVzdGlvbjFcIikudGV4dChcIlZvdWxlei12b3VzIHN1cHByaW1lciBcIik7XHJcbiAgJChcIi5tb2RhbC1ib2R5LWRlbGV0ZSAucXVlc3Rpb24yXCIpLnRleHQobmFtZSk7XHJcbn0pO1xyXG5cclxuJChcIi5idG4tZGVsZXRlLWNhbmNlbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnNvbGUubG9nKFwib2tcIik7XHJcbiAgJChcIiNtb2RhbC1kZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbn0pO1xyXG5cclxuJChcIiNjYXJkc1wiKS5vbihcImNsaWNrXCIsIFwiLnNlbmRFbWFpbFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGlmICgkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIikpIHtcclxuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBwYXJhbXMuYXBwZW5kKFwic2VuZEVtYWlsXCIsIFwidHJ1ZVwiKTtcclxuICAgIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIGFzeW5jKHVybC5wYXRobmFtZSArIFwiP1wiICsgcGFyYW1zLnRvU3RyaW5nKCkpO1xyXG4gIH1cclxufSk7XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpLmRlZmF1bHQ7XHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hc3luYy5qc1wiO1xyXG5cclxuLy8gX19fX19fX19fX19fX19fX19fX18gTU9EQUwgQUNUSVZBVElPTiBEJ1VOIFBBUlRFTkFJUkUvU1RSVUNUVVJFIF9fX19fX19fX19fX19fX19fX19fLy9cclxuXHJcbmxldCBzbHVnID0gXCJcIjtcclxubGV0IG5hbWUgPSBcIlwiO1xyXG5cclxuJChcIiNjYXJkc1wiKS5vbihcImNsaWNrXCIsIFwiLm1vZGFsLXN3aXRjaC11c2VyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKFxyXG4gICAgJCh0aGlzKS5kYXRhKFwiZGlzYWJsZWRcIikgPT09IFwiZGlzYWJsZWRcIiB8fFxyXG4gICAgJCh0aGlzKS5kYXRhKFwicm9sZVwiKSAhPSBcImFkbWluXCJcclxuICApIHtcclxuICAgIGNvbnNvbGUubG9nKFwiMVwiKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICgkKHRoaXMpLmRhdGEoXCJkaXNhYmxlZFwiKSA9PT0gXCJkaXNhYmxlZFwiKSB7XHJcbiAgICAgICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb25cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgYExhIHNhbGxlIG5lIHBldXQgcGFzIMOqdHJlIGFjdGl2w6llIHF1YW5kIGxlIHBhcnRlbmFpcmUgZXN0IGTDqXNhY3RpdsOpLmBcclxuICAgICAgKTtcclxuICAgICAgJChcIiNidG4tc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAkKFwiI2J0bi1zd2l0Y2gtY2FuY2VsXCIpLnRleHQoXCJWQUxJREVSXCIpO1xyXG4gICAgICAkKFwiI2J0bi1zd2l0Y2gtY2FuY2VsXCIpLmNzcyh7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwZDZlZmRcIixcclxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coXCIyXCIpO1xyXG4gICAgbGV0IHN3aXRjaENoZWNrZWQgPSAkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIik7XHJcbiAgICBuYW1lID0gJCh0aGlzKS5kYXRhKFwibmFtZVwiKTtcclxuICAgIGlmICghc3dpdGNoQ2hlY2tlZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIjNcIik7XHJcbiAgICAgICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgZMOpc2FjdGl2ZXIgYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIjRcIik7XHJcbiAgICAgICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgYWN0aXZlciBgXHJcbiAgICAgICk7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICBzbHVnID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChcIiNjb250ZW50XCIpLm9uKFwiY2xpY2tcIiwgXCIubW9kYWwtc3dpdGNoLXVzZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBpZiAoXHJcbiAgICAkKHRoaXMpLmRhdGEoXCJkaXNhYmxlZFwiKSA9PT0gXCJkaXNhYmxlZFwiIHx8XHJcbiAgICAkKHRoaXMpLmRhdGEoXCJyb2xlXCIpICE9IFwiYWRtaW5cIlxyXG4gICkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikudGV4dChcclxuICAgICAgICBgTGEgc2FsbGUgbmUgcGV1dCBwYXMgw6p0cmUgYWN0aXbDqWUgcXVhbmQgbGUgcGFydGVuYWlyZSBlc3QgZMOpc2FjdGl2w6kuYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiI2J0bi1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikudGV4dChcIlZBTElERVJcIik7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikuY3NzKHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzBkNmVmZFwiLFxyXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgc3dpdGNoQ2hlY2tlZCA9ICQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKTtcclxuICAgIG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICAgaWYgKCFzd2l0Y2hDaGVja2VkKSB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGTDqXNhY3RpdmVyIGBcclxuICAgICAgKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24yXCIpLnRleHQobmFtZSk7XHJcbiAgICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgaWYgKGhyZWYuaW5jbHVkZXMoXCJwYXJ0ZW5haXJlc1wiKSkge1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYEVuIGTDqXNhY3RpdmFudCBjZSBwYXJ0ZW5haXJlLCB2b3VzIGTDqXNhY3RpdmVyZXogdG91dGVzIGxlcyBzdHJ1Y3R1cmVzIGF1cXVlbCBlbGxlcyBzb250IHJhdHRhY2jDqWVzLmBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCcxJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBhY3RpdmVyIGBcclxuICAgICAgKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24yXCIpLnRleHQobmFtZSk7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZygnMicpO1xyXG4gICAgfVxyXG4gICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgc2x1ZyA9ICQodGhpcykuZGF0YShcInNsdWdcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoXCIuYnRuLXN3aXRjaFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICBsZXQgcGFyYW1zVG9TdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcclxuICBsZXQgdXJsID0gXCJcIjtcclxuICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgaWYgKGhyZWYuaW5jbHVkZXMoXCJwYXJ0ZW5haXJlc1wiKSkge1xyXG4gICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vcGFydGVuYWlyZXMvJHtzbHVnfS9hY3RpdmUtdXNlci8/JHtwYXJhbXNUb1N0cmluZ31gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9zdHJ1Y3R1cmVzLyR7c2x1Z30vYWN0aXZlLXVzZXIvPyR7cGFyYW1zVG9TdHJpbmd9YDtcclxuICAgIGlmIChocmVmWzJdICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAxMDAwKTtcclxuICAgICAgJC5jb29raWUoXCJjYXJkXCIsIFwib2tcIiwge1xyXG4gICAgICAgIGV4cGlyZXM6IGRhdGUsXHJcbiAgICAgICAgcGF0aDogXCIvO1NhbWVTaXRlPU5vbmVcIixcclxuICAgICAgICBzZWN1cmU6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyh1cmwsIFwiY29udGVudFwiKTtcclxuICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxufSk7XHJcblxyXG4kKFwiLmJ0bi1zd2l0Y2gtY2FuY2VsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbn0pO1xyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKS5kZWZhdWx0O1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXN5bmMuanNcIjtcclxuXHJcbi8qIF9fX19fX19fX19fX18gQUNUSVZBVElPTi9ERVNBQ1RJVkFUSU9OIERFIE1PRFVMRSBfX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cclxuXHJcbiQoXCIuYWN0aXZhdGUtbW9kdWxlXCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XHJcblxyXG5sZXQgbmFtZSwgc2x1Zywgcm9sZSwgbW9kdWxlSWQsIHN3aXRjaENoZWNrZWQsIG1vZHVsZXBhcnRuZXI7XHJcblxyXG4kKFwiI21vZHVsZXNcIikub24oXCJjbGlja1wiLCBcIi5hY3RpdmF0ZS1tb2R1bGVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBtb2R1bGVwYXJ0bmVyID0gKCQodGhpcykuZGF0YShcIm1vZHVsZXBhcnRuZXJcIikgPT0gXCIxXCIpID8gXCJhY3RpdsOpXCIgOiBcImTDqXNhY3RpdsOpXCIgO1xyXG4gIHN3aXRjaENoZWNrZWQgPSAhJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoXHJcbiAgICAkKHRoaXMpLmRhdGEoXCJkaXNhYmxlZFwiKSA9PT0gXCJkaXNhYmxlZFwiIHx8XHJcbiAgICAkKHRoaXMpLmRhdGEoXCJyb2xlXCIpICE9IFwiYWRtaW5cIlxyXG4gICkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJChcIiNtb2RhbC1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgXHJcbiAgICBuYW1lID0gJCh0aGlzKS5kYXRhKFwibmFtZVwiKTtcclxuICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgIGlmIChocmVmLmluY2x1ZGVzKFwicGFydGVuYWlyZXNcIikpIHtcclxuICAgICAgaWYgKHN3aXRjaENoZWNrZWQpIHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGTDqXNhY3RpdmVyYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24yXCIpLnRleHQoYCR7bmFtZX1gKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYEVuIGTDqXNhY3RpdmFudCBjZSBkcm9pdCwgdm91cyBkw6lzYWN0aXZlcmV6IGNlbHVpIGRlcyBzdHJ1Y3R1cmVzIGRvbnQgZMOpcGVuZCBjZSBwYXJ0ZW5haXJlLmBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgYWN0aXZlcmBcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMlwiKS50ZXh0KGAke25hbWV9YCk7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucGFyYTFcIikudGV4dChcclxuICAgICAgICAgIGBDZXR0ZSBhY3Rpb24gbmUgY29uY2VybmUgcXVlIGNlIHBhcnRlbmFpcmUuIENlIGRyb2l0IGRldnJhIMOqdHJlIGFjdGl2w6kgYXUgY2FzIHBhciBjYXMgcG91ciBjaGFxdWUgc3RydWN0dXJlIGRvbnQgZMOpcGVuZCBsZSBwYXJ0ZW5haXJlLmBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHN3aXRjaENoZWNrZWQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb25cIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cclxuICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgZMOpc2FjdGl2ZXJgXHJcbiAgICAgICk7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMlwiKS50ZXh0KGAke25hbWV9YCk7XHJcbiAgICAgIFxyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgIGBDZXR0ZSBhY3Rpb24gbidhIGF1Y3VuZSBpbmZsdWVuY2Ugc3VyIGxlIGRyb2l0IGR1IHBhcnRlbmFpcmUgZG9udCBkw6lwZW5kIGNldHRlIHN0cnVjdHVyZS5gXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAkKFwiI2J0bi1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZS1jYW5jZWxcIikudGV4dChcIkFOTlVMRVJcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjZGMzNTQ1XCIpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgXHJcbiAgICAgIGlmIChtb2R1bGVwYXJ0bmVyID09PSBcImTDqXNhY3RpdsOpXCIpIHtcclxuXHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb25cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucGFyYTFcIikudGV4dChcclxuICAgICAgICAgIGBWb3VzIG5lIHBvdXZleiBwYXMgYWN0aXZlciBsZSBkcm9pdCBkZSBjZXR0ZSBzdHJ1Y3R1cmUgY2FyIGNlbHVpIGR1IHBhcnRlbmFpcmUgbidlc3QgcGFzIGFjdGl2w6kuYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZS1jYW5jZWxcIikudGV4dChcIlZBTElERVJcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS5jc3Moe1xyXG4gICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMGQ2ZWZkXCIsXHJcbiAgICAgICAgICBcImJvcmRlclwiOiBcIm5vbmVcIixcclxuICAgICAgICAgIFwib3V0bGluZVwiOiBcIm5vbmVcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb25cIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgYWN0aXZlcmBcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMlwiKS50ZXh0KGAke25hbWV9YCk7ICAgICAgICBcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYENldHRlIGFjdGlvbiBuJ2EgYXVjdW5lIGluZmx1ZW5jZSBzdXIgbGUgZHJvaXQgZHUgcGFydGVuYWlyZSBkb250IGTDqXBlbmQgY2V0dGUgc3RydWN0dXJlLmBcclxuICAgICAgICApOyAgICAgICAgXHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZS1jYW5jZWxcIikudGV4dChcIkFOTlVMRVJcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCIjZGMzNTQ1XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2x1ZyA9ICQodGhpcykuZGF0YShcInNsdWdcIik7XHJcbiAgICByb2xlID0gJCh0aGlzKS5kYXRhKFwicm9sZVwiKTtcclxuICAgIG1vZHVsZUlkID0gJCh0aGlzKS5kYXRhKFwiaWRtb2R1bGVcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoXCIuYnRuLW1vZHVsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCB1cmwgPSBcIlwiO1xyXG4gIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICBpZiAocm9sZSA9PT0gXCJhZG1pblwiKSB7XHJcbiAgICBpZiAoaHJlZi5pbmNsdWRlcyhcInBhcnRlbmFpcmVzXCIpKSB7XHJcbiAgICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L3BhcnRlbmFpcmVzLyR7c2x1Z30vJHttb2R1bGVJZH0vYWN0aXZlLW1vZHVsZWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9zdHJ1Y3R1cmVzLyR7c2x1Z30vJHttb2R1bGVJZH0vYWN0aXZlLW1vZHVsZWA7XHJcbiAgICB9XHJcbiAgICBhc3luYyh1cmwsIFwibW9kdWxlc1wiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuICAkKFwiI21vZGFsLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAkKFwiLmFjdGl2YXRlLW1vZHVsZVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpXHJcbn0pO1xyXG5cclxuJChcIi5idG4tbW9kdWxlLWNhbmNlbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoXCIjbW9kYWwtbW9kdWxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICQoXCIuYWN0aXZhdGUtbW9kdWxlXCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIilcclxufSk7XHJcbiIsIi8qX19fX19fX19fX19fX19fIFRPUE5BViBfX19fX19fX19fX19fX19fX19fX19fX18qL1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZXZlbnQpID0+IHtcclxuICAgIC8vIFRvZ2dsZSB0aGUgc2lkZSBuYXZpZ2F0aW9uXHJcbiAgICBjb25zdCBzaWRlYmFyVG9nZ2xlID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJUb2dnbGVcIik7XHJcbiAgICBpZiAoc2lkZWJhclRvZ2dsZSkge1xyXG4gICAgICAgIC8vIFVuY29tbWVudCBCZWxvdyB0byBwZXJzaXN0IHNpZGViYXIgdG9nZ2xlIGJldHdlZW4gcmVmcmVzaGVzXHJcbiAgICAgICAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYnxzaWRlYmFyLXRvZ2dsZScpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzYi1zaWRlbmF2LXRvZ2dsZWQnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgc2lkZWJhclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcInNiLXNpZGVuYXYtdG9nZ2xlZFwiKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgICAgICBcInNifHNpZGViYXItdG9nZ2xlXCIsXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNiLXNpZGVuYXYtdG9nZ2xlZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8qX19fX19fX19fX19fX19fIFNJREVOQVYgX19fX19fX19fX19fX19fX19fX19fX19fKi9cclxuXHJcbmxldCBuYXZMaW5rcyA9ICQoXCIubmF2LWxpbmtcIik7XHJcbmxldCBjdXJyZW50ID0gbG9jYXRpb24uaHJlZjtcclxuXHJcbmZvciAobGV0IG5hdkxpbmsgb2YgbmF2TGlua3MpIHtcclxuICAgIGlmIChcclxuICAgICAgICBuYXZMaW5rLmhyZWYgPT0gY3VycmVudCB8fFxyXG4gICAgICAgIG5hdkxpbmsuaHJlZi5zcGxpdChcIi9cIikuc2xpY2UoMCwgNClbM10gPT1cclxuICAgICAgICBjdXJyZW50LnNwbGl0KFwiL1wiKS5zbGljZSgwLCA0KVszXVxyXG4gICAgKSB7XHJcbiAgICAgICAgbmF2TGluay5jbGFzc05hbWUucmVwbGFjZShcImFjdGl2ZVwiLCBcIlwiKTtcclxuICAgICAgICBuYXZMaW5rLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxuICAgICAgICBuYXZMaW5rLnN0eWxlLmNvbG9yID0gXCIjZmZmXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChjdXJyZW50LnNwbGl0KFwiL1wiKVs0XSA9PT0gXCJwYXJ0ZW5haXJlXCIgfHwgY3VycmVudC5zcGxpdChcIi9cIilbNF0gPT09IFwic3RydWN0dXJlXCIpIHtcclxuICAgICQoJy5uYXYtZGVhZC1saW5rJykuY3NzKCdjb2xvcicsICd3aGl0ZScpXHJcbn1cclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XHJcbmltcG9ydCB7YXN5bmN9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXN5bmMuanNcIjtcclxuY29uc29sZS5sb2coJ3BhZ2luYXRpb24nKTtcclxuXHJcbmNvbnNvbGUubG9nKCQoJy5wYWdlLWl0ZW0nKSk7XHJcblxyXG4vKl9fX19fX19fX19fX19fXyBQQUdJTkFUSU9OIF9fX19fX19fX19fX19fX19fX19fX19fXyovXHJcbiQoXCIjY29udGVudFwiKS5vbihcImNsaWNrXCIsIFwiLnBhZ2UtbGlua1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWMnKTtcclxuICAgIGxldCBwYXJhbXMgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAgIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIGFzeW5jKHVybC5wYXRobmFtZSArIHBhcmFtcyArIFwiJmFqYXg9MVwiLCBcImNvbnRlbnRcIik7XHJcbn0pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImF4aW9zIiwiYXN5bmMiLCJ1cmwiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCIkIiwiaHRtbCIsImRhdGEiLCJlcnJvciIsInBhcmVudCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwidXBkYXRlUGFyYW1zIiwidXBkYXRlTmV3UGFyYW1zIiwib25DbGlja0ZpbHRlciIsImZpbHRlciIsInZhbCIsInBhZ2UiLCJhdHRyIiwicXVlcnkiLCJsaW1pdCIsImZpbHRlcnMiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJwYXRobmFtZSIsInRvU3RyaW5nIiwibmV3UGFyYW1zIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImVhY2giLCJrZXkiLCJ2YWx1ZSIsInNldCIsImFwcGVuZCIsIm9uIiwiZSIsImxvZyIsImNzcyIsIm5hbWUiLCJ0ZXh0IiwicHJldmVudERlZmF1bHQiLCJpcyIsInNsdWciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJvdXRsaW5lIiwic3dpdGNoQ2hlY2tlZCIsInNwbGl0IiwiaW5jbHVkZXMiLCJzZWFyY2giLCJwYXJhbXNUb1N0cmluZyIsInByb3RvY29sIiwiaG9zdCIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJjb29raWUiLCJleHBpcmVzIiwicGF0aCIsInNlY3VyZSIsInJvbGUiLCJtb2R1bGVJZCIsIm1vZHVsZXBhcnRuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzaWRlYmFyVG9nZ2xlIiwiZG9jdW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb250YWlucyIsIm5hdkxpbmtzIiwiY3VycmVudCIsIm5hdkxpbmsiLCJzbGljZSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJzdHlsZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==