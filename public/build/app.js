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

console.log('min');

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

window.onclick = function (event) {
  if (event.target == $("#modal-delete")) {
    $("#modal-delete").css("display", "none");
  }
};

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
// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if (event.target == $("#modal-switch")) {
    $("#modal-switch").css("display", "none");
  }
};

$(".modal-switch-user").css("cursor", "pointer");
var slug = "";
var state = "";
var name = "";
$("#cards").on("click", ".modal-switch-user", function (e) {
  if ($(this).data("disabled") === "disabled" || $(this).data("role") != "admin") {
    e.preventDefault();

    if ($(this).data("disabled") === "disabled") {
      $("#modal-switch").css("display", "block");
      $(".modal-body-switch .para1").text("La salle ne peut pas \xEAtre activ\xE9e quand le partenaire est d\xE9sactiv\xE9.");
      $("#btn-switch").css("display", "none");
      $("#btn-switch-cancel").text("VALIDER");
      $("#btn-switch-cancel").css("backgroundColor", "#0d6efd");
      $("#btn-switch-cancel").css("border", "none");
      $("#btn-switch-cancel").css("outline", "none");
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
    state = $(this).data("state");
  }
});
$("#content").on("click", ".modal-switch-user", function (e) {
  if ($(this).data("disabled") === "disabled" || $(this).data("role") != "admin") {
    e.preventDefault();

    if ($(this).data("disabled") === "disabled") {
      $("#modal-switch").css("display", "block");
      $(".modal-body-switch .para1").text("La salle ne peut pas \xEAtre activ\xE9e quand le partenaire est d\xE9sactiv\xE9.");
      $("#btn-switch").css("display", "none");
      $("#btn-switch-cancel").text("VALIDER");
      $("#btn-switch-cancel").css("backgroundColor", "#0d6efd");
      $("#btn-switch-cancel").css("border", "none");
      $("#btn-switch-cancel").css("outline", "none");
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
    state = $(this).data("state");
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



window.onclick = function (event) {
  if (event.target == $("#modal-module")) {
    $("#modal-module").css("display", "none");
  }
};
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
        $("#btn-module-cancel").css("backgroundColor", "#0d6efd");
        $("#btn-module-cancel").css("border", "none");
        $("#btn-module-cancel").css("outline", "none");
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
/*
$('.card').css("cursor", "pointer");

$("#content").on("click", '.card', function (e) {
    console.log($('a', this).attr('href'));
    let href = $('a', this).attr('href');
    window.location.href = href;
})
 */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQW5CLE1BQTBCLFdBQXhFLEVBQXFGO0VBQ2pGckMsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0I2QixHQUFwQixDQUF3QixPQUF4QixFQUFpQyxPQUFqQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRCxJQUFNbkMsS0FBSyxHQUFHRiw4RUFBZDs7QUFDQTtBQUVBOztBQUNBUSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMwQixFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQTFCLEVBQXdDLFVBQVVJLENBQVYsRUFBYTtFQUNqREEsQ0FBQyxDQUFDdEIsY0FBRjtFQUNBLElBQUlNLE1BQU0sR0FBR2QsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxJQUFSLENBQWEsTUFBYixDQUFiO0VBQ0EsSUFBSWQsR0FBRyxHQUFHLElBQUlxQixHQUFKLENBQVFDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBeEIsQ0FBVjtFQUNBekIsMERBQUssQ0FBQ0MsR0FBRyxDQUFDeUIsUUFBSixHQUFlUCxNQUFmLEdBQXdCLFNBQXpCLEVBQW9DLFNBQXBDLENBQUw7QUFDSCxDQUxEO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Z1bmN0aW9ucy9hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fbW9kYWxfZGVsZXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL19tb2RhbF9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvX25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9fcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzNlOGEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbmltcG9ydCAnLi9zY3JpcHRzL19uYXZiYXInO1xuaW1wb3J0ICcuL3NjcmlwdHMvX21vZHVsZXMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvX21vZGFsX2RlbGV0ZSc7XG5pbXBvcnQgJy4vc2NyaXB0cy9fbW9kYWxfc3dpdGNoJztcbmltcG9ydCAnLi9zY3JpcHRzL19maWx0ZXJzJztcbmltcG9ydCAnLi9zY3JpcHRzL19wYWdpbmF0aW9uJztcblxuXG4vKiFcbiAqIFN0YXJ0IEJvb3RzdHJhcCAtIFNCIEFkbWluIHY3LjAuNSAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGUvc2ItYWRtaW4pXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDIyIFN0YXJ0IEJvb3RzdHJhcFxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vU3RhcnRCb290c3RyYXAvc3RhcnRib290c3RyYXAtc2ItYWRtaW4vYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuLy9cbi8vIFNjcmlwdHNcbi8vXG5cbmNvbnNvbGUubG9nKCdtaW4nKTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xyXG5cclxuZnVuY3Rpb24gYXN5bmMgKHVybCwgZWxlbWVudCA9IG51bGwpIHsgICAgXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KHVybClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICQoYC4ke2VsZW1lbnR9YCkuaHRtbChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAkKGAuJHtlbGVtZW50fWApLnBhcmVudCgpLmh0bWwgPSBgRXJyZXVyOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiSWwgeSBhIHVuZSBlcnJldXIgZGFucyBsYSByZXF1w6p0ZVwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydCB7YXN5bmN9OyIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xyXG5pbXBvcnQge2FzeW5jfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FzeW5jLmpzXCJcclxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX18gRklMVFJFIERFUyBQQVJURU5BSVJFUy9TVFJVQ1RVUkVTIFBBUiBOT00sIE9VIEFDVElWRS9ERVNBQ1RJVkUgX19fX19fX19fX19fX19fX18gLy9cclxuXHJcbmZ1bmN0aW9uIG9uQ2xpY2tGaWx0ZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZmlsdGVyID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgIGxldCBwYWdlID0gJChcIiNmaWx0ZXJzIGlucHV0OmhpZGRlblwiKS5hdHRyKFwidmFsdWVcIik7XHJcbiAgICBsZXQgcXVlcnkgPSAkKFwiLmpzLXF1ZXJ5XCIpLnZhbCgpO1xyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIHBhcmFtcy5hcHBlbmQoXCJmaWx0ZXJcIiwgZmlsdGVyKTtcclxuICAgIHBhcmFtcy5hcHBlbmQoXCJwYWdlXCIsIHBhZ2UpO1xyXG4gICAgaWYgKCQoXCIuanMtcXVlcnlcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgIHBhcmFtcy5hcHBlbmQoXCJxdWVyeVwiLCBxdWVyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgYXN5bmModXJsLnBhdGhuYW1lICsgXCI/XCIgKyBwYXJhbXMudG9TdHJpbmcoKSArIFwiJmFqYXg9MVwiLCBcImNvbnRlbnRcIik7XHJcblxyXG4gICAgLy8gT24gbWV0IMOgIGpvdXIgbCd1cmxcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCBudWxsLCB1cmwucGF0aG5hbWUgKyBcIj9cIiArIHBhcmFtcy50b1N0cmluZygpKTtcclxufVxyXG5cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5qcy1maWx0ZXJcIiwgb25DbGlja0ZpbHRlcik7IiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIikuZGVmYXVsdDtcclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FzeW5jLmpzXCI7XHJcblxyXG4vLyBfX19fX19fX19fX19fX19fX19fXyBNT0RBTCBTVVBQUkVTU0lPTiBEJ1VOIFBBUlRFTkFJUkUvU1RSVUNUVVJFIF9fX19fX19fX19fX19fX19fX19fLy9cclxuXHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgaWYgKGV2ZW50LnRhcmdldCA9PSAkKFwiI21vZGFsLWRlbGV0ZVwiKSkge1xyXG4gICAgJChcIiNtb2RhbC1kZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuJChcIi5tb2RhbF90cmlnZ2VyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICQoXCIjbW9kYWwtZGVsZXRlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxufSk7XHJcblxyXG4kKFwiI2NvbnRlbnRcIikub24oXCJjbGlja1wiLCBcIi5tb2RhbC10cmlnZ2VyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgJChcIiNtb2RhbC1kZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gIGxldCBocmVmID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKSArIFwiL1wiICsgJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgJChcIi5tb2RhbC1mb290ZXItZGVsZXRlIGFcIikuYXR0cihcImhyZWZcIiwgaHJlZik7XHJcbiAgbGV0IG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICQoXCIubW9kYWwtYm9keS1kZWxldGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFwiVm91bGV6LXZvdXMgc3VwcHJpbWVyIFwiKTtcclxuICAkKFwiLm1vZGFsLWJvZHktZGVsZXRlIC5xdWVzdGlvbjJcIikudGV4dChuYW1lKTtcclxufSk7XHJcblxyXG4kKFwiI2NhcmRzXCIpLm9uKFwiY2xpY2tcIiwgXCIubW9kYWwtdHJpZ2dlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICQoXCIjbW9kYWwtZGVsZXRlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICBsZXQgaHJlZiA9ICQodGhpcykuZGF0YShcInNsdWdcIikgKyBcIi9cIiArICQodGhpcykuZGF0YShcImlkXCIpO1xyXG4gICQoXCIubW9kYWwtZm9vdGVyLWRlbGV0ZSBhXCIpLmF0dHIoXCJocmVmXCIsIGhyZWYpO1xyXG4gIGxldCBuYW1lID0gJCh0aGlzKS5kYXRhKFwibmFtZVwiKTtcclxuICAkKFwiLm1vZGFsLWJvZHktZGVsZXRlIC5xdWVzdGlvbjFcIikudGV4dChcIlZvdWxlei12b3VzIHN1cHByaW1lciBcIik7XHJcbiAgJChcIi5tb2RhbC1ib2R5LWRlbGV0ZSAucXVlc3Rpb24yXCIpLnRleHQobmFtZSk7XHJcbn0pO1xyXG5cclxuJChcIi5idG4tZGVsZXRlLWNhbmNlbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnNvbGUubG9nKFwib2tcIik7XHJcbiAgJChcIiNtb2RhbC1kZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbn0pO1xyXG5cclxuJChcIiNjYXJkc1wiKS5vbihcImNsaWNrXCIsIFwiLnNlbmRFbWFpbFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGlmICgkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIikpIHtcclxuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBwYXJhbXMuYXBwZW5kKFwic2VuZEVtYWlsXCIsIFwidHJ1ZVwiKTtcclxuICAgIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIGFzeW5jKHVybC5wYXRobmFtZSArIFwiP1wiICsgcGFyYW1zLnRvU3RyaW5nKCkpO1xyXG4gIH1cclxufSk7XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpLmRlZmF1bHQ7XHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hc3luYy5qc1wiO1xyXG5cclxuLy8gX19fX19fX19fX19fX19fX19fX18gTU9EQUwgQUNUSVZBVElPTiBEJ1VOIFBBUlRFTkFJUkUvU1RSVUNUVVJFIF9fX19fX19fX19fX19fX19fX19fLy9cclxuXHJcbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGlmIChldmVudC50YXJnZXQgPT0gJChcIiNtb2RhbC1zd2l0Y2hcIikpIHtcclxuICAgICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbiQoXCIubW9kYWwtc3dpdGNoLXVzZXJcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuXHJcbmxldCBzbHVnID0gXCJcIjtcclxubGV0IHN0YXRlID0gXCJcIjtcclxubGV0IG5hbWUgPSBcIlwiO1xyXG5cclxuJChcIiNjYXJkc1wiKS5vbihcImNsaWNrXCIsIFwiLm1vZGFsLXN3aXRjaC11c2VyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKFxyXG4gICAgJCh0aGlzKS5kYXRhKFwiZGlzYWJsZWRcIikgPT09IFwiZGlzYWJsZWRcIiB8fFxyXG4gICAgJCh0aGlzKS5kYXRhKFwicm9sZVwiKSAhPSBcImFkbWluXCJcclxuICApIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICgkKHRoaXMpLmRhdGEoXCJkaXNhYmxlZFwiKSA9PT0gXCJkaXNhYmxlZFwiKSB7XHJcbiAgICAgICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikudGV4dChcclxuICAgICAgICBgTGEgc2FsbGUgbmUgcGV1dCBwYXMgw6p0cmUgYWN0aXbDqWUgcXVhbmQgbGUgcGFydGVuYWlyZSBlc3QgZMOpc2FjdGl2w6kuYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiI2J0bi1zd2l0Y2hcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikudGV4dChcIlZBTElERVJcIik7XHJcbiAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzBkNmVmZFwiKTtcclxuICAgICAgJChcIiNidG4tc3dpdGNoLWNhbmNlbFwiKS5jc3MoXCJib3JkZXJcIiwgXCJub25lXCIpO1xyXG4gICAgICAkKFwiI2J0bi1zd2l0Y2gtY2FuY2VsXCIpLmNzcyhcIm91dGxpbmVcIiwgXCJub25lXCIpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgc3dpdGNoQ2hlY2tlZCA9ICQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKTtcclxuICAgIG5hbWUgPSAkKHRoaXMpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICAgaWYgKCFzd2l0Y2hDaGVja2VkKSB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGTDqXNhY3RpdmVyIGBcclxuICAgICAgKTtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24yXCIpLnRleHQobmFtZSk7XHJcbiAgICAgIGxldCB1cmwgPSBcIlwiO1xyXG4gICAgICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICAgIGlmIChocmVmLmluY2x1ZGVzKFwicGFydGVuYWlyZXNcIikpIHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikudGV4dChcclxuICAgICAgICAgIGBFbiBkw6lzYWN0aXZhbnQgY2UgcGFydGVuYWlyZSwgdm91cyBkw6lzYWN0aXZlcmV6IHRvdXRlcyBsZXMgc3RydWN0dXJlcyBhdXF1ZWwgZWxsZXMgc29udCByYXR0YWNow6llcy5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgYWN0aXZlciBgXHJcbiAgICAgICk7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICBzbHVnID0gJCh0aGlzKS5kYXRhKFwic2x1Z1wiKTtcclxuICAgIHN0YXRlID0gJCh0aGlzKS5kYXRhKFwic3RhdGVcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbiQoXCIjY29udGVudFwiKS5vbihcImNsaWNrXCIsIFwiLm1vZGFsLXN3aXRjaC11c2VyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgJCh0aGlzKS5kYXRhKFwiZGlzYWJsZWRcIikgPT09IFwiZGlzYWJsZWRcIiB8fFxyXG4gICAgICAgICQodGhpcykuZGF0YShcInJvbGVcIikgIT0gXCJhZG1pblwiXHJcbiAgICApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCQodGhpcykuZGF0YShcImRpc2FibGVkXCIpID09PSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikudGV4dChcclxuICAgICAgICAgICAgYExhIHNhbGxlIG5lIHBldXQgcGFzIMOqdHJlIGFjdGl2w6llIHF1YW5kIGxlIHBhcnRlbmFpcmUgZXN0IGTDqXNhY3RpdsOpLmBcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIjYnRuLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiI2J0bi1zd2l0Y2gtY2FuY2VsXCIpLnRleHQoXCJWQUxJREVSXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLXN3aXRjaC1jYW5jZWxcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzBkNmVmZFwiKTtcclxuICAgICAgICAkKFwiI2J0bi1zd2l0Y2gtY2FuY2VsXCIpLmNzcyhcImJvcmRlclwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIiNidG4tc3dpdGNoLWNhbmNlbFwiKS5jc3MoXCJvdXRsaW5lXCIsIFwibm9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgc3dpdGNoQ2hlY2tlZCA9ICQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKTtcclxuICAgICAgICBuYW1lID0gJCh0aGlzKS5kYXRhKFwibmFtZVwiKTtcclxuICAgICAgICBpZiAoIXN3aXRjaENoZWNrZWQpIHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICAgICAgYEV0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgZMOpc2FjdGl2ZXIgYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucXVlc3Rpb24yXCIpLnRleHQobmFtZSk7XHJcbiAgICAgICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgIGlmIChocmVmLmluY2x1ZGVzKFwicGFydGVuYWlyZXNcIikpIHtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1ib2R5LXN3aXRjaCAucGFyYTFcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLWJvZHktc3dpdGNoIC5wYXJhMVwiKS50ZXh0KFxyXG4gICAgICAgICAgICBgRW4gZMOpc2FjdGl2YW50IGNlIHBhcnRlbmFpcmUsIHZvdXMgZMOpc2FjdGl2ZXJleiB0b3V0ZXMgbGVzIHN0cnVjdHVyZXMgYXVxdWVsIGVsbGVzIHNvbnQgcmF0dGFjaMOpZXMuYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBhY3RpdmVyIGBcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnF1ZXN0aW9uMlwiKS50ZXh0KG5hbWUpO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1zd2l0Y2ggLnBhcmExXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgc2x1ZyA9ICQodGhpcykuZGF0YShcInNsdWdcIik7XHJcbiAgICAgICAgc3RhdGUgPSAkKHRoaXMpLmRhdGEoXCJzdGF0ZVwiKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuJChcIi5idG4tc3dpdGNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gIGxldCBwYXJhbXNUb1N0cmluZyA9IHBhcmFtcy50b1N0cmluZygpO1xyXG4gIGxldCB1cmwgPSBcIlwiO1xyXG4gIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICBpZiAoaHJlZi5pbmNsdWRlcyhcInBhcnRlbmFpcmVzXCIpKSB7XHJcbiAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9wYXJ0ZW5haXJlcy8ke3NsdWd9L2FjdGl2ZS11c2VyLz8ke3BhcmFtc1RvU3RyaW5nfWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L3N0cnVjdHVyZXMvJHtzbHVnfS9hY3RpdmUtdXNlci8/JHtwYXJhbXNUb1N0cmluZ31gO1xyXG4gICAgaWYgKGhyZWZbMl0gIT0gXCJcIikge1xyXG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIDEwMDApO1xyXG4gICAgICAkLmNvb2tpZShcImNhcmRcIiwgXCJva1wiLCB7XHJcbiAgICAgICAgZXhwaXJlczogZGF0ZSxcclxuICAgICAgICBwYXRoOiBcIi87U2FtZVNpdGU9Tm9uZVwiLFxyXG4gICAgICAgIHNlY3VyZTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jKHVybCwgXCJjb250ZW50XCIpO1xyXG4gICQoXCIjbW9kYWwtc3dpdGNoXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG59KTtcclxuXHJcbiQoXCIuYnRuLXN3aXRjaC1jYW5jZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKFwiI21vZGFsLXN3aXRjaFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxufSk7XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpLmRlZmF1bHQ7XHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hc3luYy5qc1wiO1xyXG5cclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBpZiAoZXZlbnQudGFyZ2V0ID09ICQoXCIjbW9kYWwtbW9kdWxlXCIpKSB7XHJcbiAgICAkKFwiI21vZGFsLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICB9XHJcbn07XHJcblxyXG4vKiBfX19fX19fX19fX19fIEFDVElWQVRJT04vREVTQUNUSVZBVElPTiBERSBNT0RVTEUgX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXHJcblxyXG4kKFwiLmFjdGl2YXRlLW1vZHVsZVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xyXG5cclxubGV0IG5hbWUsIHNsdWcsIHJvbGUsIG1vZHVsZUlkLCBzd2l0Y2hDaGVja2VkLCBtb2R1bGVwYXJ0bmVyO1xyXG5cclxuJChcIiNtb2R1bGVzXCIpLm9uKFwiY2xpY2tcIiwgXCIuYWN0aXZhdGUtbW9kdWxlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgbW9kdWxlcGFydG5lciA9ICgkKHRoaXMpLmRhdGEoXCJtb2R1bGVwYXJ0bmVyXCIpID09IFwiMVwiKSA/IFwiYWN0aXbDqVwiIDogXCJkw6lzYWN0aXbDqVwiIDtcclxuICBzd2l0Y2hDaGVja2VkID0gISQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKFxyXG4gICAgJCh0aGlzKS5kYXRhKFwiZGlzYWJsZWRcIikgPT09IFwiZGlzYWJsZWRcIiB8fFxyXG4gICAgJCh0aGlzKS5kYXRhKFwicm9sZVwiKSAhPSBcImFkbWluXCJcclxuICApIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICQoXCIjbW9kYWwtbW9kdWxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIFxyXG4gICAgbmFtZSA9ICQodGhpcykuZGF0YShcIm5hbWVcIik7XHJcbiAgICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICBpZiAoaHJlZi5pbmNsdWRlcyhcInBhcnRlbmFpcmVzXCIpKSB7XHJcbiAgICAgIGlmIChzd2l0Y2hDaGVja2VkKSB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucXVlc3Rpb24xXCIpLnRleHQoXHJcbiAgICAgICAgICBgRXRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBkw6lzYWN0aXZlcmBcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMlwiKS50ZXh0KGAke25hbWV9YCk7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucGFyYTFcIikudGV4dChcclxuICAgICAgICAgIGBFbiBkw6lzYWN0aXZhbnQgY2UgZHJvaXQsIHZvdXMgZMOpc2FjdGl2ZXJleiBjZWx1aSBkZXMgc3RydWN0dXJlcyBkb250IGTDqXBlbmQgY2UgcGFydGVuYWlyZS5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGFjdGl2ZXJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjJcIikudGV4dChgJHtuYW1lfWApO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgQ2V0dGUgYWN0aW9uIG5lIGNvbmNlcm5lIHF1ZSBjZSBwYXJ0ZW5haXJlLiBDZSBkcm9pdCBkZXZyYSDDqnRyZSBhY3RpdsOpIGF1IGNhcyBwYXIgY2FzIHBvdXIgY2hhcXVlIHN0cnVjdHVyZSBkb250IGTDqXBlbmQgbGUgcGFydGVuYWlyZS5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChzd2l0Y2hDaGVja2VkKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgXHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHJcbiAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uMVwiKS50ZXh0KFxyXG4gICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGTDqXNhY3RpdmVyYFxyXG4gICAgICApO1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjJcIikudGV4dChgJHtuYW1lfWApO1xyXG4gICAgICBcclxuICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucGFyYTFcIikudGV4dChcclxuICAgICAgICBgQ2V0dGUgYWN0aW9uIG4nYSBhdWN1bmUgaW5mbHVlbmNlIHN1ciBsZSBkcm9pdCBkdSBwYXJ0ZW5haXJlIGRvbnQgZMOpcGVuZCBjZXR0ZSBzdHJ1Y3R1cmUuYFxyXG4gICAgICApO1xyXG5cclxuICAgICAgJChcIiNidG4tbW9kdWxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLnRleHQoXCJBTk5VTEVSXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZS1jYW5jZWxcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIsIFwiI2RjMzU0NVwiKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAobW9kdWxlcGFydG5lciA9PT0gXCJkw6lzYWN0aXbDqVwiKSB7XHJcblxyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnBhcmExXCIpLnRleHQoXHJcbiAgICAgICAgICBgVm91cyBuZSBwb3V2ZXogcGFzIGFjdGl2ZXIgbGUgZHJvaXQgZGUgY2V0dGUgc3RydWN0dXJlIGNhciBjZWx1aSBkdSBwYXJ0ZW5haXJlIG4nZXN0IHBhcyBhY3RpdsOpLmBcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLnRleHQoXCJWQUxJREVSXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZS1jYW5jZWxcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIsIFwiIzBkNmVmZFwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLmNzcyhcImJvcmRlclwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgJChcIiNidG4tbW9kdWxlLWNhbmNlbFwiKS5jc3MoXCJvdXRsaW5lXCIsIFwibm9uZVwiKTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICQoXCIubW9kYWwtYm9keS1tb2R1bGUgLnF1ZXN0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjFcIikudGV4dChcclxuICAgICAgICAgIGBFdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGFjdGl2ZXJgXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHktbW9kdWxlIC5xdWVzdGlvbjJcIikudGV4dChgJHtuYW1lfWApOyAgICAgICAgXHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5LW1vZHVsZSAucGFyYTFcIikudGV4dChcclxuICAgICAgICAgIGBDZXR0ZSBhY3Rpb24gbidhIGF1Y3VuZSBpbmZsdWVuY2Ugc3VyIGxlIGRyb2l0IGR1IHBhcnRlbmFpcmUgZG9udCBkw6lwZW5kIGNldHRlIHN0cnVjdHVyZS5gXHJcbiAgICAgICAgKTsgICAgICAgIFxyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiZmxleFwiKTtcclxuICAgICAgICAkKFwiI2J0bi1tb2R1bGUtY2FuY2VsXCIpLnRleHQoXCJBTk5VTEVSXCIpO1xyXG4gICAgICAgICQoXCIjYnRuLW1vZHVsZS1jYW5jZWxcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIsIFwiI2RjMzU0NVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNsdWcgPSAkKHRoaXMpLmRhdGEoXCJzbHVnXCIpO1xyXG4gICAgcm9sZSA9ICQodGhpcykuZGF0YShcInJvbGVcIik7XHJcbiAgICBtb2R1bGVJZCA9ICQodGhpcykuZGF0YShcImlkbW9kdWxlXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKFwiLmJ0bi1tb2R1bGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgdXJsID0gXCJcIjtcclxuICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgaWYgKHJvbGUgPT09IFwiYWRtaW5cIikge1xyXG4gICAgaWYgKGhyZWYuaW5jbHVkZXMoXCJwYXJ0ZW5haXJlc1wiKSkge1xyXG4gICAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9wYXJ0ZW5haXJlcy8ke3NsdWd9LyR7bW9kdWxlSWR9L2FjdGl2ZS1tb2R1bGVgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vc3RydWN0dXJlcy8ke3NsdWd9LyR7bW9kdWxlSWR9L2FjdGl2ZS1tb2R1bGVgO1xyXG4gICAgfVxyXG4gICAgYXN5bmModXJsLCBcIm1vZHVsZXNcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcbiAgJChcIiNtb2RhbC1tb2R1bGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgJChcIi5hY3RpdmF0ZS1tb2R1bGVcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKVxyXG59KTtcclxuXHJcbiQoXCIuYnRuLW1vZHVsZS1jYW5jZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKFwiI21vZGFsLW1vZHVsZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAkKFwiLmFjdGl2YXRlLW1vZHVsZVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpXHJcbn0pO1xyXG4iLCIvKl9fX19fX19fX19fX19fXyBUT1BOQVYgX19fX19fX19fX19fX19fX19fX19fX19fKi9cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBUb2dnbGUgdGhlIHNpZGUgbmF2aWdhdGlvblxyXG4gICAgY29uc3Qgc2lkZWJhclRvZ2dsZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyVG9nZ2xlXCIpO1xyXG4gICAgaWYgKHNpZGViYXJUb2dnbGUpIHtcclxuICAgICAgICAvLyBVbmNvbW1lbnQgQmVsb3cgdG8gcGVyc2lzdCBzaWRlYmFyIHRvZ2dsZSBiZXR3ZWVuIHJlZnJlc2hlc1xyXG4gICAgICAgIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2J8c2lkZWJhci10b2dnbGUnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2Itc2lkZW5hdi10b2dnbGVkJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHNpZGViYXJUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJzYi1zaWRlbmF2LXRvZ2dsZWRcIik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgICAgICAgXCJzYnxzaWRlYmFyLXRvZ2dsZVwiLFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzYi1zaWRlbmF2LXRvZ2dsZWRcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vKl9fX19fX19fX19fX19fXyBTSURFTkFWIF9fX19fX19fX19fX19fX19fX19fX19fXyovXHJcblxyXG5sZXQgbmF2TGlua3MgPSAkKFwiLm5hdi1saW5rXCIpO1xyXG5sZXQgY3VycmVudCA9IGxvY2F0aW9uLmhyZWY7XHJcblxyXG5mb3IgKGxldCBuYXZMaW5rIG9mIG5hdkxpbmtzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgbmF2TGluay5ocmVmID09IGN1cnJlbnQgfHxcclxuICAgICAgICBuYXZMaW5rLmhyZWYuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIDQpWzNdID09XHJcbiAgICAgICAgY3VycmVudC5zcGxpdChcIi9cIikuc2xpY2UoMCwgNClbM11cclxuICAgICkge1xyXG4gICAgICAgIG5hdkxpbmsuY2xhc3NOYW1lLnJlcGxhY2UoXCJhY3RpdmVcIiwgXCJcIik7XHJcbiAgICAgICAgbmF2TGluay5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgICAgICAgbmF2TGluay5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5pZiAoY3VycmVudC5zcGxpdChcIi9cIilbNF0gPT09IFwicGFydGVuYWlyZVwiIHx8IGN1cnJlbnQuc3BsaXQoXCIvXCIpWzRdID09PSBcInN0cnVjdHVyZVwiKSB7XHJcbiAgICAkKCcubmF2LWRlYWQtbGluaycpLmNzcygnY29sb3InLCAnd2hpdGUnKVxyXG59XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xyXG5pbXBvcnQge2FzeW5jfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FzeW5jLmpzXCJcclxuXHJcbi8qX19fX19fX19fX19fX19fIFBBR0lOQVRJT04gX19fX19fX19fX19fX19fX19fX19fX19fKi9cclxuJChcIiNjb250ZW50XCIpLm9uKFwiY2xpY2tcIiwgXCIucGFnZS1saW5rXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcGFyYW1zID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcclxuICAgIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIGFzeW5jKHVybC5wYXRobmFtZSArIHBhcmFtcyArIFwiJmFqYXg9MVwiLCBcImNvbnRlbnRcIik7XHJcbn0pO1xyXG5cclxuXHJcbi8qXHJcbiQoJy5jYXJkJykuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuXHJcbiQoXCIjY29udGVudFwiKS5vbihcImNsaWNrXCIsICcuY2FyZCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZygkKCdhJywgdGhpcykuYXR0cignaHJlZicpKTtcclxuICAgIGxldCBocmVmID0gJCgnYScsIHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcclxufSlcclxuICovIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiYXhpb3MiLCJhc3luYyIsInVybCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsIiQiLCJodG1sIiwiZGF0YSIsImVycm9yIiwicGFyZW50IiwibWVzc2FnZSIsIm9uQ2xpY2tGaWx0ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyIiwiYXR0ciIsInBhZ2UiLCJxdWVyeSIsInZhbCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInBhdGhuYW1lIiwidG9TdHJpbmciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZG9jdW1lbnQiLCJvbiIsIm9uY2xpY2siLCJ0YXJnZXQiLCJjc3MiLCJlIiwibmFtZSIsInRleHQiLCJpcyIsInNsdWciLCJzdGF0ZSIsInN3aXRjaENoZWNrZWQiLCJzcGxpdCIsImluY2x1ZGVzIiwic2VhcmNoIiwicGFyYW1zVG9TdHJpbmciLCJwcm90b2NvbCIsImhvc3QiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiY29va2llIiwiZXhwaXJlcyIsInBhdGgiLCJzZWN1cmUiLCJyb2xlIiwibW9kdWxlSWQiLCJtb2R1bGVwYXJ0bmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpZGViYXJUb2dnbGUiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb250YWlucyIsIm5hdkxpbmtzIiwiY3VycmVudCIsIm5hdkxpbmsiLCJzbGljZSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJzdHlsZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==