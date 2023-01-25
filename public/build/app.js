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
  console.log('clic');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW5CLE1BQTBCLFlBQTFCLElBQTBDOEIsT0FBTyxDQUFDOUIsS0FBUixDQUFjLEdBQWQsRUFBbUIsQ0FBbkIsTUFBMEIsV0FBeEUsRUFBcUY7RUFDakY3QyxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQm1DLEdBQXBCLENBQXdCLE9BQXhCLEVBQWlDLE9BQWpDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNELElBQU16QyxLQUFLLEdBQUdGLDhFQUFkOztBQUNBO0FBRUE7O0FBQ0FRLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2lDLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsWUFBMUIsRUFBd0MsVUFBVUMsQ0FBVixFQUFhO0VBQ2pEQSxDQUFDLENBQUNJLGNBQUY7RUFDQSxJQUFJckIsTUFBTSxHQUFHakIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxJQUFSLENBQWEsTUFBYixDQUFiO0VBQ0EsSUFBSWpCLEdBQUcsR0FBRyxJQUFJdUIsR0FBSixDQUFRQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQXhCLENBQVY7RUFDQTNCLDBEQUFLLENBQUNDLEdBQUcsQ0FBQzJCLFFBQUosR0FBZU4sTUFBZixHQUF3QixTQUF6QixFQUFvQyxTQUFwQyxDQUFMO0FBQ0gsQ0FMRDs7Ozs7Ozs7Ozs7O0FDSkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Z1bmN0aW9ucy9hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZnVuY3Rpb25zL29uQ2xpY2tGaWx0ZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mdW5jdGlvbnMvdXBkYXRlUGFyYW1zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL19maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL19tb2RhbF9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX21vZGFsX3N3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fbW9kdWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL19wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/M2U4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuaW1wb3J0ICcuL3NjcmlwdHMvX25hdmJhcic7XG5pbXBvcnQgJy4vc2NyaXB0cy9fbW9kdWxlcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9fbW9kYWxfZGVsZXRlJztcbmltcG9ydCAnLi9zY3JpcHRzL19tb2RhbF9zd2l0Y2gnO1xuaW1wb3J0ICcuL3NjcmlwdHMvX2ZpbHRlcnMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvX3BhZ2luYXRpb24nO1xuXG5cbi8qIVxuICogU3RhcnQgQm9vdHN0cmFwIC0gU0IgQWRtaW4gdjcuMC41IChodHRwczovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90ZW1wbGF0ZS9zYi1hZG1pbilcbiAqIENvcHlyaWdodCAyMDEzLTIwMjIgU3RhcnQgQm9vdHN0cmFwXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9TdGFydEJvb3RzdHJhcC9zdGFydGJvb3RzdHJhcC1zYi1hZG1pbi9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG4vL1xuLy8gU2NyaXB0c1xuLy9cbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XHJcblxyXG5mdW5jdGlvbiBhc3luYyAodXJsLCBlbGVtZW50ID0gbnVsbCkgeyAgICBcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQodXJsKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgJChgLiR7ZWxlbWVudH1gKS5odG1sKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICQoYC4ke2VsZW1lbnR9YCkucGFyZW50KCkuaHRtbCA9IGBFcnJldXI6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbCB5IGEgdW5lIGVycmV1ciBkYW5zIGxhIHJlcXXDqnRlXCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IHthc3luY307IiwiaW1wb3J0IHsgdXBkYXRlUGFyYW1zLCB1cGRhdGVOZXdQYXJhbXMgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3VwZGF0ZVBhcmFtcy5qc1wiO1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXN5bmMuanNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBvbkNsaWNrRmlsdGVyKCkge1xyXG4gIGxldCBmaWx0ZXIgPSAkKFwiLnNlbGVjdC1maWx0ZXJzIG9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKSA/PyBcIlwiO1xyXG4gIGxldCBwYWdlID0gJChcIiNmaWx0ZXJzIGlucHV0OmhpZGRlblwiKS5hdHRyKFwidmFsdWVcIik7XHJcbiAgbGV0IHF1ZXJ5ID0gJChcIi5qcy1xdWVyeVwiKS52YWwoKSA/PyBcIlwiO1xyXG4gIGxldCBsaW1pdCA9ICQoXCIjbGltaXRcIikudmFsKCk7XHJcblxyXG4gIGxldCBmaWx0ZXJzID0ge1xyXG4gICAgXCJmaWx0ZXJcIjogZmlsdGVyLFxyXG4gICAgXCJwYWdlXCI6IHBhZ2UsXHJcbiAgICBcInF1ZXJ5XCI6IHF1ZXJ5LFxyXG4gICAgXCJsaW1pdFwiOiBsaW1pdFxyXG4gIH07XHJcblxyXG4gIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcblxyXG4gIHVwZGF0ZVBhcmFtcyhmaWx0ZXJzLCBwYXJhbXMpO1xyXG5cclxuICBsZXQgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgYXN5bmModXJsLnBhdGhuYW1lICsgXCI/XCIgKyBwYXJhbXMudG9TdHJpbmcoKSArIFwiJmFqYXg9MVwiLCBcImNvbnRlbnRcIik7XHJcblxyXG4gIGxldCBuZXdQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgdXBkYXRlTmV3UGFyYW1zKGZpbHRlcnMsIG5ld1BhcmFtcyk7XHJcblxyXG4gIC8vIE1pc2Ugw6Agam91ciBkZSBsJ3VybFxyXG4gIGlmIChuZXdQYXJhbXMudG9TdHJpbmcoKSA9PT0gXCJcIikge1xyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sIG51bGwsIHVybC5wYXRobmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCBudWxsLCB1cmwucGF0aG5hbWUgKyBcIj9cIiArIG5ld1BhcmFtcy50b1N0cmluZygpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IG9uQ2xpY2tGaWx0ZXIgfTtcclxuIiwiY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQYXJhbXMoZmlsdGVycywgcGFyYW1zKSB7XHJcbiAgJC5lYWNoKGZpbHRlcnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgLy8gbmUgcmllbiBmYWlyZVxyXG4gICAgfSBlbHNlIGlmIChwYXJhbXMuZ2V0KGtleSkpIHtcclxuICAgICAgcGFyYW1zLnNldChrZXksIHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZU5ld1BhcmFtcyhmaWx0ZXJzLCBwYXJhbXMpIHtcclxuICAkLmVhY2goZmlsdGVycywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCB2YWx1ZSA9PT0gMCkge1xyXG4gICAgICAvLyBuZSByaWVuIGZhaXJlXHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5nZXQoa2V5KSkge1xyXG4gICAgICBwYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgdXBkYXRlUGFyYW1zLCB1cGRhdGVOZXdQYXJhbXMgfTtcclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIikuZGVmYXVsdDtcclxuaW1wb3J0IHsgb25DbGlja0ZpbHRlciB9IGZyb20gXCIuLi9mdW5jdGlvbnMvb25DbGlja0ZpbHRlcnMuanNcIjtcclxuXHJcbi8vIC8vIF9fX19fX19fX19fX19fX19fX19fX18gRklMVFJFIERFUyBQQVJURU5BSVJFUy9TVFJVQ1RVUkVTIFBBUiBOT00sIE9VIEFDVElWRS9ERVNBQ1RJVkUgX19fX19fX19fX19fX19fX18gLy9cclxuJChcIi5qcy1xdWVyeVwiKS5vbihcImtleXVwXCIsIG9uQ2xpY2tGaWx0ZXIpO1xyXG5cclxuJChcIi5maWx0ZXJzXCIpLm9uKFwiY2hhbmdlXCIsIG9uQ2xpY2tGaWx0ZXIpOyIsImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpLmRlZmF1bHQ7XHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hc3luYy5qc1wiO1xyXG5cclxuLy8gX19fX19fX19fX19fX19fX19fX18gTU9EQUwgU1VQUFJFU1NJT04gRCdVTiBQQVJURU5BSVJFL1NUUlVDVFVSRSBfX19fX19fX19fX19fX19fX19fXy8vXHJcblxyXG4kKFwiLm1vZGFsX3RyaWdnZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICQoXCIjbW9kYWwtZGVsZXRlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxufSk7XHJcblxyXG4kKFwiI2NvbnRlbnRcIikub24oXCJjbGlja1wiLCBcIi5tb2RhbC10cmlnZ2VyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgJChcIiNtb2RhbC1kZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gIGxldCBocmVmID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKSArIFwiL1wiICsgJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgJChcIi5tb2RhbC1mb290ZXItZGVsZXRlIGFcIikuYXR0cihcImhyZWZcIiwgaHJlZik7XHJcbiAgbGV0IG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICQoXCIubW9kYWwtYm9keS1kZWxldGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFwiVm91bGV6LXZvdXMgc3VwcHJpbWVyIFwiKTtcclxuICAkKFwiLm1vZGFsLWJvZHktZGVsZXRlIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxufSk7XHJcblxyXG4kKFwiI2NhcmRzXCIpLm9uKFwiY2xpY2tcIiwgXCIubW9kYWwtdHJpZ2dlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICQoXCIjbW9kYWwtZGVsZXRlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICBsZXQgaHJlZiA9ICQodGhpcykuZGF0YShcInNsdWdcIikgKyBcIi9cIiArICQodGhpcykuZGF0YShcImlkXCIpO1xyXG4gICQoXCIubW9kYWwtZm9vdGVyLWRlbGV0ZSBhXCIpLmF0dHIoXCJocmVmXCIsIGhyZWYpO1xyXG4gIGxldCBuYW1lID0gJCh0aGlzKS5kYXRhKFwibmFtZVwiKTtcclxuICAkKFwiLm1vZGFsLWJvZHktZGVsZXRlIC5xdWVzdGlvbjFcIikudGV4dChcIlZvdWxlei12b3VzIHN1cHByaW1lciBcIik7XHJcbiAgJChcIi5tb2RhbC1ib2R5LWRlbGV0ZSAucXVlc3Rpb24yXCIpLnRleHQobmFtZSk7XHJcbn0pO1xyXG5cclxuJChcIi5idG4tZGVsZXRlLWNhbmNlbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoXCIjbW9kYWwtZGVsZXRlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG59KTtcclxuXHJcbiQoXCIjY2FyZHNcIikub24oXCJjbGlja1wiLCBcIi5zZW5kRW1haWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBpZiAoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKSB7XHJcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgcGFyYW1zLmFwcGVuZChcInNlbmRFbWFpbFwiLCBcInRydWVcIik7XHJcbiAgICBsZXQgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICBhc3luYyh1cmwucGF0aG5hbWUgKyBcIj9cIiArIHBhcmFtcy50b1N0cmluZygpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKS5kZWZhdWx0O1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXN5bmMuanNcIjtcclxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fIE1PREFMIEFDVElWQVRJT04gRCdVTiBQQVJURU5BSVJFL1NUUlVDVFVSRSBfX19fX19fX19fX19fX19fX19fXy8vXHJcblxyXG5sZXQgc2x1ZyA9IFwiXCI7XHJcbmxldCBuYW1lID0gXCJcIjtcclxuXHJcbiQoXCIjY2FyZHNcIikub24oXCJjbGlja1wiLCBcIi5tb2RhbC1zd2l0Y2gtdXNlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGlmIChcclxuICAgICQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIgfHxcclxuICAgICQodGhpcykuZGF0YShcInJvbGVcIikgIT0gXCJhZG1pblwiXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoJCh0aGlzKS5kYXRhKFwiZGlzYWJsZWRcIikgPT09IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgIGBMYSBzYWxsZSBuZSBwZXV0IHBhcyDDqnRyZSBhY3RpdsOpZSBxdWFuZCBsZSBwYXJ0ZW5haXJlIGVzdCBkw6lzYWN0aXbDqS5gXHJcbiAgICAgICk7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgJChcIiNidG4tc3dpdGNoLWNhbmNlbFwiKS50ZXh0KFwiVkFMSURFUlwiKTtcclxuICAgICAgJChcIiNidG4tc3dpdGNoLWNhbmNlbFwiKS5jc3Moe1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMGQ2ZWZkXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBzd2l0Y2hDaGVja2VkID0gJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpO1xyXG4gICAgbmFtZSA9ICQodGhpcykuZGF0YShcIm5hbWVcIik7XHJcbiAgICBpZiAoIXN3aXRjaENoZWNrZWQpIHtcclxuICAgICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBkw6lzYWN0aXZlciBgXHJcbiAgICAgICk7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgYWN0aXZlciBgXHJcbiAgICAgICk7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICBzbHVnID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChcIiNjb250ZW50XCIpLm9uKFwiY2xpY2tcIiwgXCIubW9kYWwtc3dpdGNoLXVzZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBpZiAoXHJcbiAgICAkKHRoaXMpLmRhdGEoXCJkaXNhYmxlZFwiKSA9PT0gXCJkaXNhYmxlZFwiIHx8XHJcbiAgICAkKHRoaXMpLmRhdGEoXCJyb2xlXCIpICE9IFwiYWRtaW5cIlxyXG4gICkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikudGV4dChcclxuICAgICAgICBgTGEgc2FsbGUgbmUgcGV1dCBwYXMgw6p0cmUgYWN0aXbDqWUgcXVhbmQgbGUgcGFydGVuYWlyZSBlc3QgZMOpc2FjdGl2w6kuYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiI2J0bi1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikudGV4dChcIlZBTElERVJcIik7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikuY3NzKHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzBkNmVmZFwiLFxyXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgc3dpdGNoQ2hlY2tlZCA9ICQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKTtcclxuICAgIG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICAgaWYgKCFzd2l0Y2hDaGVja2VkKSB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGTDqXNhY3RpdmVyIGBcclxuICAgICAgKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24yXCIpLnRleHQobmFtZSk7XHJcbiAgICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgaWYgKGhyZWYuaW5jbHVkZXMoXCJwYXJ0ZW5haXJlc1wiKSkge1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYEVuIGTDqXNhY3RpdmFudCBjZSBwYXJ0ZW5haXJlLCB2b3VzIGTDqXNhY3RpdmVyZXogdG91dGVzIGxlcyBzdHJ1Y3R1cmVzIGF1cXVlbCBlbGxlcyBzb250IHJhdHRhY2jDqWVzLmBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBhY3RpdmVyIGBcclxuICAgICAgKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24yXCIpLnRleHQobmFtZSk7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfVxyXG4gICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgc2x1ZyA9ICQodGhpcykuZGF0YShcInNsdWdcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoXCIuYnRuLXN3aXRjaFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICBsZXQgcGFyYW1zVG9TdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcclxuICBsZXQgdXJsID0gXCJcIjtcclxuICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgaWYgKGhyZWYuaW5jbHVkZXMoXCJwYXJ0ZW5haXJlc1wiKSkge1xyXG4gICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vcGFydGVuYWlyZXMvJHtzbHVnfS9hY3RpdmUtdXNlci8/JHtwYXJhbXNUb1N0cmluZ31gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9zdHJ1Y3R1cmVzLyR7c2x1Z30vYWN0aXZlLXVzZXIvPyR7cGFyYW1zVG9TdHJpbmd9YDtcclxuICAgIGlmIChocmVmWzJdICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAxMDAwKTtcclxuICAgICAgJC5jb29raWUoXCJjYXJkXCIsIFwib2tcIiwge1xyXG4gICAgICAgIGV4cGlyZXM6IGRhdGUsXHJcbiAgICAgICAgcGF0aDogXCIvO1NhbWVTaXRlPU5vbmVcIixcclxuICAgICAgICBzZWN1cmU6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyh1cmwsIFwiY29udGVudFwiKTtcclxuICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxufSk7XHJcblxyXG4kKFwiLmJ0bi1zd2l0Y2gtY2FuY2VsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbn0pO1xyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKS5kZWZhdWx0O1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXN5bmMuanNcIjtcclxuXHJcbi8qIF9fX19fX19fX19fX18gQUNUSVZBVElPTi9ERVNBQ1RJVkFUSU9OIERFIE1PRFVMRSBfX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cclxuXHJcbiQoXCIuYWN0aXZhdGUtbW9kdWxlXCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XHJcblxyXG5sZXQgbmFtZSwgc2x1Zywgcm9sZSwgbW9kdWxlSWQsIHN3aXRjaENoZWNrZWQsIG1vZHVsZXBhcnRuZXI7XHJcblxyXG4kKFwiI21vZHVsZXNcIikub24oXCJjbGlja1wiLCBcIi5hY3RpdmF0ZS1tb2R1bGVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBjb25zb2xlLmxvZygnY2xpYycpO1xyXG4gIG1vZHVsZXBhcnRuZXIgPSAoJCh0aGlzKS5kYXRhKFwibW9kdWxlcGFydG5lclwiKSA9PSBcIjFcIikgPyBcImFjdGl2w6lcIiA6IFwiZMOpc2FjdGl2w6lcIiA7XHJcbiAgc3dpdGNoQ2hlY2tlZCA9ICEkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIik7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlmIChcclxuICAgICQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIgfHxcclxuICAgICQodGhpcykuZGF0YShcInJvbGVcIikgIT0gXCJhZG1pblwiXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAkKFwiI21vZGFsLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICBcclxuICAgIG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gICAgaWYgKGhyZWYuaW5jbHVkZXMoXCJwYXJ0ZW5haXJlc1wiKSkge1xyXG4gICAgICBpZiAoc3dpdGNoQ2hlY2tlZCkge1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgZMOpc2FjdGl2ZXJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjJcIikudGV4dChgJHtuYW1lfWApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgRW4gZMOpc2FjdGl2YW50IGNlIGRyb2l0LCB2b3VzIGTDqXNhY3RpdmVyZXogY2VsdWkgZGVzIHN0cnVjdHVyZXMgZG9udCBkw6lwZW5kIGNlIHBhcnRlbmFpcmUuYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBhY3RpdmVyYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24yXCIpLnRleHQoYCR7bmFtZX1gKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYENldHRlIGFjdGlvbiBuZSBjb25jZXJuZSBxdWUgY2UgcGFydGVuYWlyZS4gQ2UgZHJvaXQgZGV2cmEgw6p0cmUgYWN0aXbDqSBhdSBjYXMgcGFyIGNhcyBwb3VyIGNoYXF1ZSBzdHJ1Y3R1cmUgZG9udCBkw6lwZW5kIGxlIHBhcnRlbmFpcmUuYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoc3dpdGNoQ2hlY2tlZCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIFxyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblxyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBkw6lzYWN0aXZlcmBcclxuICAgICAgKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24yXCIpLnRleHQoYCR7bmFtZX1gKTtcclxuICAgICAgXHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgYENldHRlIGFjdGlvbiBuJ2EgYXVjdW5lIGluZmx1ZW5jZSBzdXIgbGUgZHJvaXQgZHUgcGFydGVuYWlyZSBkb250IGTDqXBlbmQgY2V0dGUgc3RydWN0dXJlLmBcclxuICAgICAgKTtcclxuXHJcbiAgICAgICQoXCIjYnRuLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS50ZXh0KFwiQU5OVUxFUlwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiLCBcIiNkYzM1NDVcIik7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBcclxuICAgICAgaWYgKG1vZHVsZXBhcnRuZXIgPT09IFwiZMOpc2FjdGl2w6lcIikge1xyXG5cclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYFZvdXMgbmUgcG91dmV6IHBhcyBhY3RpdmVyIGxlIGRyb2l0IGRlIGNldHRlIHN0cnVjdHVyZSBjYXIgY2VsdWkgZHUgcGFydGVuYWlyZSBuJ2VzdCBwYXMgYWN0aXbDqS5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS50ZXh0KFwiVkFMSURFUlwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLmNzcyh7XHJcbiAgICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwZDZlZmRcIixcclxuICAgICAgICAgIFwiYm9yZGVyXCI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgXCJvdXRsaW5lXCI6IFwibm9uZVwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBhY3RpdmVyYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24yXCIpLnRleHQoYCR7bmFtZX1gKTsgICAgICAgIFxyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgQ2V0dGUgYWN0aW9uIG4nYSBhdWN1bmUgaW5mbHVlbmNlIHN1ciBsZSBkcm9pdCBkdSBwYXJ0ZW5haXJlIGRvbnQgZMOpcGVuZCBjZXR0ZSBzdHJ1Y3R1cmUuYFxyXG4gICAgICAgICk7ICAgICAgICBcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS50ZXh0KFwiQU5OVUxFUlwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiLCBcIiNkYzM1NDVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzbHVnID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKTtcclxuICAgIHJvbGUgPSAkKHRoaXMpLmRhdGEoXCJyb2xlXCIpO1xyXG4gICAgbW9kdWxlSWQgPSAkKHRoaXMpLmRhdGEoXCJpZG1vZHVsZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuJChcIi5idG4tbW9kdWxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IHVybCA9IFwiXCI7XHJcbiAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gIGlmIChyb2xlID09PSBcImFkbWluXCIpIHtcclxuICAgIGlmIChocmVmLmluY2x1ZGVzKFwicGFydGVuYWlyZXNcIikpIHtcclxuICAgICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vcGFydGVuYWlyZXMvJHtzbHVnfS8ke21vZHVsZUlkfS9hY3RpdmUtbW9kdWxlYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L3N0cnVjdHVyZXMvJHtzbHVnfS8ke21vZHVsZUlkfS9hY3RpdmUtbW9kdWxlYDtcclxuICAgIH1cclxuICAgIGFzeW5jKHVybCwgXCJtb2R1bGVzXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG4gICQoXCIjbW9kYWwtbW9kdWxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICQoXCIuYWN0aXZhdGUtbW9kdWxlXCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIilcclxufSk7XHJcblxyXG4kKFwiLmJ0bi1tb2R1bGUtY2FuY2VsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgJChcIiNtb2RhbC1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgJChcIi5hY3RpdmF0ZS1tb2R1bGVcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKVxyXG59KTtcclxuIiwiLypfX19fX19fX19fX19fX18gVE9QTkFWIF9fX19fX19fX19fX19fX19fX19fX19fXyovXHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldmVudCkgPT4ge1xyXG4gICAgLy8gVG9nZ2xlIHRoZSBzaWRlIG5hdmlnYXRpb25cclxuICAgIGNvbnN0IHNpZGViYXJUb2dnbGUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclRvZ2dsZVwiKTtcclxuICAgIGlmIChzaWRlYmFyVG9nZ2xlKSB7XHJcbiAgICAgICAgLy8gVW5jb21tZW50IEJlbG93IHRvIHBlcnNpc3Qgc2lkZWJhciB0b2dnbGUgYmV0d2VlbiByZWZyZXNoZXNcclxuICAgICAgICAvLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NifHNpZGViYXItdG9nZ2xlJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NiLXNpZGVuYXYtdG9nZ2xlZCcpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBzaWRlYmFyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwic2Itc2lkZW5hdi10b2dnbGVkXCIpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgICAgIFwic2J8c2lkZWJhci10b2dnbGVcIixcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2Itc2lkZW5hdi10b2dnbGVkXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLypfX19fX19fX19fX19fX18gU0lERU5BViBfX19fX19fX19fX19fX19fX19fX19fX18qL1xyXG5cclxubGV0IG5hdkxpbmtzID0gJChcIi5uYXYtbGlua1wiKTtcclxubGV0IGN1cnJlbnQgPSBsb2NhdGlvbi5ocmVmO1xyXG5cclxuZm9yIChsZXQgbmF2TGluayBvZiBuYXZMaW5rcykge1xyXG4gICAgaWYgKFxyXG4gICAgICAgIG5hdkxpbmsuaHJlZiA9PSBjdXJyZW50IHx8XHJcbiAgICAgICAgbmF2TGluay5ocmVmLnNwbGl0KFwiL1wiKS5zbGljZSgwLCA0KVszXSA9PVxyXG4gICAgICAgIGN1cnJlbnQuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIDQpWzNdXHJcbiAgICApIHtcclxuICAgICAgICBuYXZMaW5rLmNsYXNzTmFtZS5yZXBsYWNlKFwiYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgICAgIG5hdkxpbmsuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG4gICAgICAgIG5hdkxpbmsuc3R5bGUuY29sb3IgPSBcIiNmZmZcIjtcclxuICAgIH1cclxufVxyXG5cclxuaWYgKGN1cnJlbnQuc3BsaXQoXCIvXCIpWzRdID09PSBcInBhcnRlbmFpcmVcIiB8fCBjdXJyZW50LnNwbGl0KFwiL1wiKVs0XSA9PT0gXCJzdHJ1Y3R1cmVcIikge1xyXG4gICAgJCgnLm5hdi1kZWFkLWxpbmsnKS5jc3MoJ2NvbG9yJywgJ3doaXRlJylcclxufVxyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdDtcclxuaW1wb3J0IHthc3luY30gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hc3luYy5qc1wiO1xyXG5cclxuLypfX19fX19fX19fX19fX18gUEFHSU5BVElPTiBfX19fX19fX19fX19fX19fX19fX19fX18qL1xyXG4kKFwiI2NvbnRlbnRcIikub24oXCJjbGlja1wiLCBcIi5wYWdlLWxpbmtcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBwYXJhbXMgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgbGV0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgYXN5bmModXJsLnBhdGhuYW1lICsgcGFyYW1zICsgXCImYWpheD0xXCIsIFwiY29udGVudFwiKTtcclxufSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiYXhpb3MiLCJhc3luYyIsInVybCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsIiQiLCJodG1sIiwiZGF0YSIsImVycm9yIiwicGFyZW50IiwibWVzc2FnZSIsImNvbnNvbGUiLCJ1cGRhdGVQYXJhbXMiLCJ1cGRhdGVOZXdQYXJhbXMiLCJvbkNsaWNrRmlsdGVyIiwiZmlsdGVyIiwidmFsIiwicGFnZSIsImF0dHIiLCJxdWVyeSIsImxpbWl0IiwiZmlsdGVycyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInBhdGhuYW1lIiwidG9TdHJpbmciLCJuZXdQYXJhbXMiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZWFjaCIsImtleSIsInZhbHVlIiwic2V0IiwiYXBwZW5kIiwib24iLCJlIiwiY3NzIiwibmFtZSIsInRleHQiLCJwcmV2ZW50RGVmYXVsdCIsImlzIiwic2x1ZyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsIm91dGxpbmUiLCJzd2l0Y2hDaGVja2VkIiwic3BsaXQiLCJpbmNsdWRlcyIsInNlYXJjaCIsInBhcmFtc1RvU3RyaW5nIiwicHJvdG9jb2wiLCJob3N0IiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImNvb2tpZSIsImV4cGlyZXMiLCJwYXRoIiwic2VjdXJlIiwicm9sZSIsIm1vZHVsZUlkIiwibW9kdWxlcGFydG5lciIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNpZGViYXJUb2dnbGUiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNvbnRhaW5zIiwibmF2TGlua3MiLCJjdXJyZW50IiwibmF2TGluayIsInNsaWNlIiwiY2xhc3NOYW1lIiwicmVwbGFjZSIsInN0eWxlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9