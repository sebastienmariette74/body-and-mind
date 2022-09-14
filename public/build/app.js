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

/***/ "./assets/scripts/_filters.js":
/*!************************************!*\
  !*** ./assets/scripts/_filters.js ***!
  \************************************/
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

 // ______________________ FILTRE DES PARTENAIRES/STRUCTURES PAR NOM, OU ACTIVE/DESACTIVE _________________ //

function onClickFilter(event) {
  event.preventDefault();
  var filter = $(this).attr("name");
  var page = $("#filters input:hidden").attr("value");
  var query = $(".js-query").val();
  var params = new URLSearchParams();
  params.append("filter", filter);
  params.append("page", page);

  if ($(".js-query").val() != "") {
    params.append("query", query);
  }

  var url = new URL(window.location.href);
  (0,_functions_async_js__WEBPACK_IMPORTED_MODULE_8__.async)(url.pathname + "?" + params.toString() + "&ajax=1", "content"); // On met à jour l'url

  history.pushState({}, null, url.pathname + "?" + params.toString());
}

$(document).on("click", ".js-filter", onClickFilter);

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

$(".modal-switch-user").css("cursor", "pointer");
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
        "backgroundColor": "#0d6efd",
        "border": "none",
        "outline": "none"
      });
    }
  } else {
    e.preventDefault();
    var switchChecked = $(this).is(":checked");
    name = $(this).data("name");

    if (!switchChecked) {
      $(".modal-body-switch .question1").text("Etes-vous s\xFBr de vouloir d\xE9sactiver ");
      $(".modal-body-switch .question2").text(name);
      var url = "";
      var href = window.location.pathname.split("/");

      if (href.includes("partenaires")) {
        $(".modal-body-switch .para1").css("display", "block");
        $(".modal-body-switch .para1").text("En d\xE9sactivant ce partenaire, vous d\xE9sactiverez toutes les structures auquel elles sont rattach\xE9es.");
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
        "backgroundColor": "#0d6efd",
        "border": "none",
        "outline": "none"
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-300d0c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9COEIsR0FBcEIsQ0FBd0IsT0FBeEIsRUFBaUMsT0FBakM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0QsSUFBTXBDLEtBQUssR0FBR0YsOEVBQWQ7O0FBQ0E7QUFFQTs7QUFDQVEsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjMkIsRUFBZCxDQUFpQixPQUFqQixFQUEwQixZQUExQixFQUF3QyxVQUFVQyxDQUFWLEVBQWE7RUFDakRBLENBQUMsQ0FBQ25CLGNBQUY7RUFDQSxJQUFJTSxNQUFNLEdBQUdmLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVcsSUFBUixDQUFhLE1BQWIsQ0FBYjtFQUNBLElBQUlmLEdBQUcsR0FBRyxJQUFJc0IsR0FBSixDQUFRQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQXhCLENBQVY7RUFDQTFCLDBEQUFLLENBQUNDLEdBQUcsQ0FBQzBCLFFBQUosR0FBZVAsTUFBZixHQUF3QixTQUF6QixFQUFvQyxTQUFwQyxDQUFMO0FBQ0gsQ0FMRDs7Ozs7Ozs7Ozs7O0FDSkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Z1bmN0aW9ucy9hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fbW9kYWxfZGVsZXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL19tb2RhbF9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5pbXBvcnQgJy4vc2NyaXB0cy9fbmF2YmFyJztcbmltcG9ydCAnLi9zY3JpcHRzL19tb2R1bGVzJztcbmltcG9ydCAnLi9zY3JpcHRzL19tb2RhbF9kZWxldGUnO1xuaW1wb3J0ICcuL3NjcmlwdHMvX21vZGFsX3N3aXRjaCc7XG5pbXBvcnQgJy4vc2NyaXB0cy9fZmlsdGVycyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9fcGFnaW5hdGlvbic7XG5cblxuLyohXG4gKiBTdGFydCBCb290c3RyYXAgLSBTQiBBZG1pbiB2Ny4wLjUgKGh0dHBzOi8vc3RhcnRib290c3RyYXAuY29tL3RlbXBsYXRlL3NiLWFkbWluKVxuICogQ29weXJpZ2h0IDIwMTMtMjAyMiBTdGFydCBCb290c3RyYXBcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL1N0YXJ0Qm9vdHN0cmFwL3N0YXJ0Ym9vdHN0cmFwLXNiLWFkbWluL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cbi8vXG4vLyBTY3JpcHRzXG4vL1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdDtcclxuXHJcbmZ1bmN0aW9uIGFzeW5jICh1cmwsIGVsZW1lbnQgPSBudWxsKSB7ICAgIFxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldCh1cmwpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAkKGAuJHtlbGVtZW50fWApLmh0bWwocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgJChgLiR7ZWxlbWVudH1gKS5wYXJlbnQoKS5odG1sID0gYEVycmV1cjogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIklsIHkgYSB1bmUgZXJyZXVyIGRhbnMgbGEgcmVxdcOqdGVcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBleHBvcnQge2FzeW5jfTsiLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdDtcclxuaW1wb3J0IHthc3luY30gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hc3luYy5qc1wiXHJcblxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19fIEZJTFRSRSBERVMgUEFSVEVOQUlSRVMvU1RSVUNUVVJFUyBQQVIgTk9NLCBPVSBBQ1RJVkUvREVTQUNUSVZFIF9fX19fX19fX19fX19fX19fIC8vXHJcblxyXG5mdW5jdGlvbiBvbkNsaWNrRmlsdGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZpbHRlciA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICBsZXQgcGFnZSA9ICQoXCIjZmlsdGVycyBpbnB1dDpoaWRkZW5cIikuYXR0cihcInZhbHVlXCIpO1xyXG4gICAgbGV0IHF1ZXJ5ID0gJChcIi5qcy1xdWVyeVwiKS52YWwoKTtcclxuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBwYXJhbXMuYXBwZW5kKFwiZmlsdGVyXCIsIGZpbHRlcik7XHJcbiAgICBwYXJhbXMuYXBwZW5kKFwicGFnZVwiLCBwYWdlKTtcclxuICAgIGlmICgkKFwiLmpzLXF1ZXJ5XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICBwYXJhbXMuYXBwZW5kKFwicXVlcnlcIiwgcXVlcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIGFzeW5jKHVybC5wYXRobmFtZSArIFwiP1wiICsgcGFyYW1zLnRvU3RyaW5nKCkgKyBcIiZhamF4PTFcIiwgXCJjb250ZW50XCIpO1xyXG5cclxuICAgIC8vIE9uIG1ldCDDoCBqb3VyIGwndXJsXHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgbnVsbCwgdXJsLnBhdGhuYW1lICsgXCI/XCIgKyBwYXJhbXMudG9TdHJpbmcoKSk7XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuanMtZmlsdGVyXCIsIG9uQ2xpY2tGaWx0ZXIpOyIsImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpLmRlZmF1bHQ7XHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hc3luYy5qc1wiO1xyXG5cclxuLy8gX19fX19fX19fX19fX19fX19fX18gTU9EQUwgU1VQUFJFU1NJT04gRCdVTiBQQVJURU5BSVJFL1NUUlVDVFVSRSBfX19fX19fX19fX19fX19fX19fXy8vXHJcblxyXG4kKFwiLm1vZGFsX3RyaWdnZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGNvbnNvbGUubG9nKFwib2tcIik7XHJcbiAgJChcIiNtb2RhbC1kZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG59KTtcclxuXHJcbiQoXCIjY29udGVudFwiKS5vbihcImNsaWNrXCIsIFwiLm1vZGFsLXRyaWdnZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAkKFwiI21vZGFsLWRlbGV0ZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgbGV0IGhyZWYgPSAkKHRoaXMpLmRhdGEoXCJzbHVnXCIpICsgXCIvXCIgKyAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcclxuICAkKFwiLm1vZGFsLWZvb3Rlci1kZWxldGUgYVwiKS5hdHRyKFwiaHJlZlwiLCBocmVmKTtcclxuICBsZXQgbmFtZSA9ICQodGhpcykuZGF0YShcIm5hbWVcIik7XHJcbiAgJChcIi5tb2RhbC1ib2R5LWRlbGV0ZSAucXVlc3Rpb24xXCIpLnRleHQoXCJWb3VsZXotdm91cyBzdXBwcmltZXIgXCIpO1xyXG4gICQoXCIubW9kYWwtYm9keS1kZWxldGUgLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG59KTtcclxuXHJcbiQoXCIjY2FyZHNcIikub24oXCJjbGlja1wiLCBcIi5tb2RhbC10cmlnZ2VyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgJChcIiNtb2RhbC1kZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gIGxldCBocmVmID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKSArIFwiL1wiICsgJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgJChcIi5tb2RhbC1mb290ZXItZGVsZXRlIGFcIikuYXR0cihcImhyZWZcIiwgaHJlZik7XHJcbiAgbGV0IG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICQoXCIubW9kYWwtYm9keS1kZWxldGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFwiVm91bGV6LXZvdXMgc3VwcHJpbWVyIFwiKTtcclxuICAkKFwiLm1vZGFsLWJvZHktZGVsZXRlIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxufSk7XHJcblxyXG4kKFwiLmJ0bi1kZWxldGUtY2FuY2VsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc29sZS5sb2coXCJva1wiKTtcclxuICAkKFwiI21vZGFsLWRlbGV0ZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxufSk7XHJcblxyXG4kKFwiI2NhcmRzXCIpLm9uKFwiY2xpY2tcIiwgXCIuc2VuZEVtYWlsXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSkge1xyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIHBhcmFtcy5hcHBlbmQoXCJzZW5kRW1haWxcIiwgXCJ0cnVlXCIpO1xyXG4gICAgbGV0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgYXN5bmModXJsLnBhdGhuYW1lICsgXCI/XCIgKyBwYXJhbXMudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIikuZGVmYXVsdDtcclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FzeW5jLmpzXCI7XHJcblxyXG4vLyBfX19fX19fX19fX19fX19fX19fXyBNT0RBTCBBQ1RJVkFUSU9OIEQnVU4gUEFSVEVOQUlSRS9TVFJVQ1RVUkUgX19fX19fX19fX19fX19fX19fX18vL1xyXG5cclxuJChcIi5tb2RhbC1zd2l0Y2gtdXNlclwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xyXG5cclxubGV0IHNsdWcgPSBcIlwiO1xyXG5sZXQgbmFtZSA9IFwiXCI7XHJcblxyXG4kKFwiI2NhcmRzXCIpLm9uKFwiY2xpY2tcIiwgXCIubW9kYWwtc3dpdGNoLXVzZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBpZiAoXHJcbiAgICAkKHRoaXMpLmRhdGEoXCJkaXNhYmxlZFwiKSA9PT0gXCJkaXNhYmxlZFwiIHx8XHJcbiAgICAkKHRoaXMpLmRhdGEoXCJyb2xlXCIpICE9IFwiYWRtaW5cIlxyXG4gICkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikudGV4dChcclxuICAgICAgICBgTGEgc2FsbGUgbmUgcGV1dCBwYXMgw6p0cmUgYWN0aXbDqWUgcXVhbmQgbGUgcGFydGVuYWlyZSBlc3QgZMOpc2FjdGl2w6kuYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiI2J0bi1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikudGV4dChcIlZBTElERVJcIik7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikuY3NzKHtcclxuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwZDZlZmRcIixcclxuICAgICAgICBcImJvcmRlclwiOiBcIm5vbmVcIixcclxuICAgICAgICBcIm91dGxpbmVcIjogXCJub25lXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBzd2l0Y2hDaGVja2VkID0gJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpO1xyXG4gICAgbmFtZSA9ICQodGhpcykuZGF0YShcIm5hbWVcIik7XHJcbiAgICBpZiAoIXN3aXRjaENoZWNrZWQpIHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgZMOpc2FjdGl2ZXIgYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxuICAgICAgbGV0IHVybCA9IFwiXCI7XHJcbiAgICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgaWYgKGhyZWYuaW5jbHVkZXMoXCJwYXJ0ZW5haXJlc1wiKSkge1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgICAgYEVuIGTDqXNhY3RpdmFudCBjZSBwYXJ0ZW5haXJlLCB2b3VzIGTDqXNhY3RpdmVyZXogdG91dGVzIGxlcyBzdHJ1Y3R1cmVzIGF1cXVlbCBlbGxlcyBzb250IHJhdHRhY2jDqWVzLmBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBhY3RpdmVyIGBcclxuICAgICAgKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24yXCIpLnRleHQobmFtZSk7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIHNsdWcgPSAkKHRoaXMpLmRhdGEoXCJzbHVnXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKFwiI2NvbnRlbnRcIikub24oXCJjbGlja1wiLCBcIi5tb2RhbC1zd2l0Y2gtdXNlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICAgICQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIgfHxcclxuICAgICAgICAkKHRoaXMpLmRhdGEoXCJyb2xlXCIpICE9IFwiYWRtaW5cIlxyXG4gICAgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmRhdGEoXCJkaXNhYmxlZFwiKSA9PT0gXCJkaXNhYmxlZFwiKSB7XHJcbiAgICAgICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICAgIGBMYSBzYWxsZSBuZSBwZXV0IHBhcyDDqnRyZSBhY3RpdsOpZSBxdWFuZCBsZSBwYXJ0ZW5haXJlIGVzdCBkw6lzYWN0aXbDqS5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiI2J0bi1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIiNidG4tc3dpdGNoLWNhbmNlbFwiKS50ZXh0KFwiVkFMSURFUlwiKTtcclxuICAgICAgICAkKFwiI2J0bi1zd2l0Y2gtY2FuY2VsXCIpLmNzcyh7XHJcbiAgICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwZDZlZmRcIixcclxuICAgICAgICAgIFwiYm9yZGVyXCI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgXCJvdXRsaW5lXCI6IFwibm9uZVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHN3aXRjaENoZWNrZWQgPSAkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIik7XHJcbiAgICAgICAgbmFtZSA9ICQodGhpcykuZGF0YShcIm5hbWVcIik7XHJcbiAgICAgICAgaWYgKCFzd2l0Y2hDaGVja2VkKSB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGTDqXNhY3RpdmVyIGBcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG4gICAgICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBpZiAoaHJlZi5pbmNsdWRlcyhcInBhcnRlbmFpcmVzXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikudGV4dChcclxuICAgICAgICAgICAgYEVuIGTDqXNhY3RpdmFudCBjZSBwYXJ0ZW5haXJlLCB2b3VzIGTDqXNhY3RpdmVyZXogdG91dGVzIGxlcyBzdHJ1Y3R1cmVzIGF1cXVlbCBlbGxlcyBzb250IHJhdHRhY2jDqWVzLmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgYWN0aXZlciBgXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgIHNsdWcgPSAkKHRoaXMpLmRhdGEoXCJzbHVnXCIpO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG4kKFwiLmJ0bi1zd2l0Y2hcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgbGV0IHBhcmFtc1RvU3RyaW5nID0gcGFyYW1zLnRvU3RyaW5nKCk7XHJcbiAgbGV0IHVybCA9IFwiXCI7XHJcbiAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gIGlmIChocmVmLmluY2x1ZGVzKFwicGFydGVuYWlyZXNcIikpIHtcclxuICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L3BhcnRlbmFpcmVzLyR7c2x1Z30vYWN0aXZlLXVzZXIvPyR7cGFyYW1zVG9TdHJpbmd9YDtcclxuICB9IGVsc2Uge1xyXG4gICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vc3RydWN0dXJlcy8ke3NsdWd9L2FjdGl2ZS11c2VyLz8ke3BhcmFtc1RvU3RyaW5nfWA7XHJcbiAgICBpZiAoaHJlZlsyXSAhPSBcIlwiKSB7XHJcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgMTAwMCk7XHJcbiAgICAgICQuY29va2llKFwiY2FyZFwiLCBcIm9rXCIsIHtcclxuICAgICAgICBleHBpcmVzOiBkYXRlLFxyXG4gICAgICAgIHBhdGg6IFwiLztTYW1lU2l0ZT1Ob25lXCIsXHJcbiAgICAgICAgc2VjdXJlOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmModXJsLCBcImNvbnRlbnRcIik7XHJcbiAgJChcIiNtb2RhbC1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbn0pO1xyXG5cclxuJChcIi5idG4tc3dpdGNoLWNhbmNlbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG59KTtcclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIikuZGVmYXVsdDtcclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FzeW5jLmpzXCI7XHJcblxyXG4vKiBfX19fX19fX19fX19fIEFDVElWQVRJT04vREVTQUNUSVZBVElPTiBERSBNT0RVTEUgX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXHJcblxyXG4kKFwiLmFjdGl2YXRlLW1vZHVsZVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xyXG5cclxubGV0IG5hbWUsIHNsdWcsIHJvbGUsIG1vZHVsZUlkLCBzd2l0Y2hDaGVja2VkLCBtb2R1bGVwYXJ0bmVyO1xyXG5cclxuJChcIiNtb2R1bGVzXCIpLm9uKFwiY2xpY2tcIiwgXCIuYWN0aXZhdGUtbW9kdWxlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgbW9kdWxlcGFydG5lciA9ICgkKHRoaXMpLmRhdGEoXCJtb2R1bGVwYXJ0bmVyXCIpID09IFwiMVwiKSA/IFwiYWN0aXbDqVwiIDogXCJkw6lzYWN0aXbDqVwiIDtcclxuICBzd2l0Y2hDaGVja2VkID0gISQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKFxyXG4gICAgJCh0aGlzKS5kYXRhKFwiZGlzYWJsZWRcIikgPT09IFwiZGlzYWJsZWRcIiB8fFxyXG4gICAgJCh0aGlzKS5kYXRhKFwicm9sZVwiKSAhPSBcImFkbWluXCJcclxuICApIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICQoXCIjbW9kYWwtbW9kdWxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIFxyXG4gICAgbmFtZSA9ICQodGhpcykuZGF0YShcIm5hbWVcIik7XHJcbiAgICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICBpZiAoaHJlZi5pbmNsdWRlcyhcInBhcnRlbmFpcmVzXCIpKSB7XHJcbiAgICAgIGlmIChzd2l0Y2hDaGVja2VkKSB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBkw6lzYWN0aXZlcmBcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMlwiKS50ZXh0KGAke25hbWV9YCk7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucGFyYTFcIikudGV4dChcclxuICAgICAgICAgIGBFbiBkw6lzYWN0aXZhbnQgY2UgZHJvaXQsIHZvdXMgZMOpc2FjdGl2ZXJleiBjZWx1aSBkZXMgc3RydWN0dXJlcyBkb250IGTDqXBlbmQgY2UgcGFydGVuYWlyZS5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGFjdGl2ZXJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjJcIikudGV4dChgJHtuYW1lfWApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgQ2V0dGUgYWN0aW9uIG5lIGNvbmNlcm5lIHF1ZSBjZSBwYXJ0ZW5haXJlLiBDZSBkcm9pdCBkZXZyYSDDqnRyZSBhY3RpdsOpIGF1IGNhcyBwYXIgY2FzIHBvdXIgY2hhcXVlIHN0cnVjdHVyZSBkb250IGTDqXBlbmQgbGUgcGFydGVuYWlyZS5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChzd2l0Y2hDaGVja2VkKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgXHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGTDqXNhY3RpdmVyYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjJcIikudGV4dChgJHtuYW1lfWApO1xyXG4gICAgICBcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucGFyYTFcIikudGV4dChcclxuICAgICAgICBgQ2V0dGUgYWN0aW9uIG4nYSBhdWN1bmUgaW5mbHVlbmNlIHN1ciBsZSBkcm9pdCBkdSBwYXJ0ZW5haXJlIGRvbnQgZMOpcGVuZCBjZXR0ZSBzdHJ1Y3R1cmUuYFxyXG4gICAgICApO1xyXG5cclxuICAgICAgJChcIiNidG4tbW9kdWxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLnRleHQoXCJBTk5VTEVSXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZS1jYW5jZWxcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIsIFwiI2RjMzU0NVwiKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAobW9kdWxlcGFydG5lciA9PT0gXCJkw6lzYWN0aXbDqVwiKSB7XHJcblxyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgVm91cyBuZSBwb3V2ZXogcGFzIGFjdGl2ZXIgbGUgZHJvaXQgZGUgY2V0dGUgc3RydWN0dXJlIGNhciBjZWx1aSBkdSBwYXJ0ZW5haXJlIG4nZXN0IHBhcyBhY3RpdsOpLmBcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLnRleHQoXCJWQUxJREVSXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZS1jYW5jZWxcIikuY3NzKHtcclxuICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzBkNmVmZFwiLFxyXG4gICAgICAgICAgXCJib3JkZXJcIjogXCJub25lXCIsXHJcbiAgICAgICAgICBcIm91dGxpbmVcIjogXCJub25lXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGFjdGl2ZXJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjJcIikudGV4dChgJHtuYW1lfWApOyAgICAgICAgXHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucGFyYTFcIikudGV4dChcclxuICAgICAgICAgIGBDZXR0ZSBhY3Rpb24gbidhIGF1Y3VuZSBpbmZsdWVuY2Ugc3VyIGxlIGRyb2l0IGR1IHBhcnRlbmFpcmUgZG9udCBkw6lwZW5kIGNldHRlIHN0cnVjdHVyZS5gXHJcbiAgICAgICAgKTsgICAgICAgIFxyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiZmxleFwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLnRleHQoXCJBTk5VTEVSXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZS1jYW5jZWxcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIsIFwiI2RjMzU0NVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNsdWcgPSAkKHRoaXMpLmRhdGEoXCJzbHVnXCIpO1xyXG4gICAgcm9sZSA9ICQodGhpcykuZGF0YShcInJvbGVcIik7XHJcbiAgICBtb2R1bGVJZCA9ICQodGhpcykuZGF0YShcImlkbW9kdWxlXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKFwiLmJ0bi1tb2R1bGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgdXJsID0gXCJcIjtcclxuICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgaWYgKHJvbGUgPT09IFwiYWRtaW5cIikge1xyXG4gICAgaWYgKGhyZWYuaW5jbHVkZXMoXCJwYXJ0ZW5haXJlc1wiKSkge1xyXG4gICAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9wYXJ0ZW5haXJlcy8ke3NsdWd9LyR7bW9kdWxlSWR9L2FjdGl2ZS1tb2R1bGVgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vc3RydWN0dXJlcy8ke3NsdWd9LyR7bW9kdWxlSWR9L2FjdGl2ZS1tb2R1bGVgO1xyXG4gICAgfVxyXG4gICAgYXN5bmModXJsLCBcIm1vZHVsZXNcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcbiAgJChcIiNtb2RhbC1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgJChcIi5hY3RpdmF0ZS1tb2R1bGVcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKVxyXG59KTtcclxuXHJcbiQoXCIuYnRuLW1vZHVsZS1jYW5jZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKFwiI21vZGFsLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAkKFwiLmFjdGl2YXRlLW1vZHVsZVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpXHJcbn0pO1xyXG4iLCIvKl9fX19fX19fX19fX19fXyBUT1BOQVYgX19fX19fX19fX19fX19fX19fX19fX19fKi9cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBUb2dnbGUgdGhlIHNpZGUgbmF2aWdhdGlvblxyXG4gICAgY29uc3Qgc2lkZWJhclRvZ2dsZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyVG9nZ2xlXCIpO1xyXG4gICAgaWYgKHNpZGViYXJUb2dnbGUpIHtcclxuICAgICAgICAvLyBVbmNvbW1lbnQgQmVsb3cgdG8gcGVyc2lzdCBzaWRlYmFyIHRvZ2dsZSBiZXR3ZWVuIHJlZnJlc2hlc1xyXG4gICAgICAgIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2J8c2lkZWJhci10b2dnbGUnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2Itc2lkZW5hdi10b2dnbGVkJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHNpZGViYXJUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJzYi1zaWRlbmF2LXRvZ2dsZWRcIik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgICAgICAgXCJzYnxzaWRlYmFyLXRvZ2dsZVwiLFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzYi1zaWRlbmF2LXRvZ2dsZWRcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vKl9fX19fX19fX19fX19fXyBTSURFTkFWIF9fX19fX19fX19fX19fX19fX19fX19fXyovXHJcblxyXG5sZXQgbmF2TGlua3MgPSAkKFwiLm5hdi1saW5rXCIpO1xyXG5sZXQgY3VycmVudCA9IGxvY2F0aW9uLmhyZWY7XHJcblxyXG5mb3IgKGxldCBuYXZMaW5rIG9mIG5hdkxpbmtzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgbmF2TGluay5ocmVmID09IGN1cnJlbnQgfHxcclxuICAgICAgICBuYXZMaW5rLmhyZWYuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIDQpWzNdID09XHJcbiAgICAgICAgY3VycmVudC5zcGxpdChcIi9cIikuc2xpY2UoMCwgNClbM11cclxuICAgICkge1xyXG4gICAgICAgIG5hdkxpbmsuY2xhc3NOYW1lLnJlcGxhY2UoXCJhY3RpdmVcIiwgXCJcIik7XHJcbiAgICAgICAgbmF2TGluay5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgICAgICAgbmF2TGluay5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5pZiAoY3VycmVudC5zcGxpdChcIi9cIilbNF0gPT09IFwicGFydGVuYWlyZVwiIHx8IGN1cnJlbnQuc3BsaXQoXCIvXCIpWzRdID09PSBcInN0cnVjdHVyZVwiKSB7XHJcbiAgICAkKCcubmF2LWRlYWQtbGluaycpLmNzcygnY29sb3InLCAnd2hpdGUnKVxyXG59XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xyXG5pbXBvcnQge2FzeW5jfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FzeW5jLmpzXCJcclxuXHJcbi8qX19fX19fX19fX19fX19fIFBBR0lOQVRJT04gX19fX19fX19fX19fX19fX19fX19fX19fKi9cclxuJChcIiNjb250ZW50XCIpLm9uKFwiY2xpY2tcIiwgXCIucGFnZS1saW5rXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcGFyYW1zID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcclxuICAgIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIGFzeW5jKHVybC5wYXRobmFtZSArIHBhcmFtcyArIFwiJmFqYXg9MVwiLCBcImNvbnRlbnRcIik7XHJcbn0pO1xyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJheGlvcyIsImFzeW5jIiwidXJsIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiJCIsImh0bWwiLCJkYXRhIiwiZXJyb3IiLCJwYXJlbnQiLCJtZXNzYWdlIiwiY29uc29sZSIsIm9uQ2xpY2tGaWx0ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyIiwiYXR0ciIsInBhZ2UiLCJxdWVyeSIsInZhbCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInBhdGhuYW1lIiwidG9TdHJpbmciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJsb2ciLCJjc3MiLCJuYW1lIiwidGV4dCIsImlzIiwic2x1ZyIsInN3aXRjaENoZWNrZWQiLCJzcGxpdCIsImluY2x1ZGVzIiwic2VhcmNoIiwicGFyYW1zVG9TdHJpbmciLCJwcm90b2NvbCIsImhvc3QiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiY29va2llIiwiZXhwaXJlcyIsInBhdGgiLCJzZWN1cmUiLCJyb2xlIiwibW9kdWxlSWQiLCJtb2R1bGVwYXJ0bmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpZGViYXJUb2dnbGUiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb250YWlucyIsIm5hdkxpbmtzIiwiY3VycmVudCIsIm5hdkxpbmsiLCJzbGljZSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJzdHlsZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==