/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // Vous pouvez également laisser ici le reste de votre code JavaScript\n  var link = document.createElement(\"link\");\n  link.rel = \"stylesheet\";\n  link.type = \"text/css\";\n  link.href = \"./style.css\"; // Assurez-vous que le chemin pointe correctement vers votre fichier style.css\n\n  // Ajoutez la balise <link> au <head> du document\n  document.head.appendChild(link);\n  // Importez toutes les images du dossier \"Images\"\n  function importAllImages() {\n    var images = {};\n    var req = __webpack_require__(\"./src/images sync \\\\.(jpg%7Cjpeg%7Cpng%7Cgif%7Csvg)$\");\n    req.keys().forEach(function (key) {\n      var imageName = key.replace(\"./\", \"\");\n      images[imageName] = req(key);\n    });\n    return images;\n  }\n\n  // Utilisation de la fonction pour importer les images\n  var importedImages = importAllImages();\n  function createCityCard(city) {\n    var card = document.createElement(\"div\");\n    card.classList.add(\"city-card\");\n    var image = document.createElement(\"img\");\n    image.src = city.image; // Utilisez le nom de l'image pour récupérer l'URL\n    image.alt = \"\".concat(city.name, \", \").concat(city.country);\n    var cityName = document.createElement(\"h2\");\n    cityName.textContent = city.name;\n    var country = document.createElement(\"p\");\n    country.textContent = \"Country: \".concat(city.country);\n    var description = document.createElement(\"p\");\n    description.textContent = city.description;\n    card.appendChild(image);\n    card.appendChild(cityName);\n    card.appendChild(country);\n    card.appendChild(description);\n    return card;\n  }\n  var cities = [{\n    name: \"Paris\",\n    country: \"France\",\n    description: \"La ville de l'amour, avec la Tour Eiffel et le Louvre.\",\n    image: \"./images/Paris.jpg\"\n  }, {\n    name: \"Barcelona\",\n    country: \"Spain\",\n    description: \"Une ville animée sur la côte méditerranéenne.\",\n    image: \"./images/Barcelone.jpg\"\n  }, {\n    name: \"Rome\",\n    country: \"Italy\",\n    description: \"La ville éternelle, avec le Colisée et le Vatican.\",\n    image: \"./images/Rome.jpg\"\n  }, {\n    name: \"Amsterdam\",\n    country: \"Netherlands\",\n    description: \"Connue pour ses canaux, ses musées et sa vie nocturne.\",\n    image: \"./images/Amsterdam.jpg\"\n  }, {\n    name: \"Prague\",\n    country: \"Czech Republic\",\n    description: \"Une ville magique avec un magnifique centre-ville historique.\",\n    image: \"./images/Prague.jpg\"\n  }, {\n    name: \"Vienna\",\n    country: \"Austria\",\n    description: \"La ville de la musique classique et de l'histoire impériale.\",\n    image: \"./images/Vienne.jpg\"\n  }, {\n    name: \"Dublin\",\n    country: \"Ireland\",\n    description: \"Une ville animée avec une riche histoire culturelle.\",\n    image: \"./images/Dublin.jpg\"\n  }, {\n    name: \"Budapest\",\n    country: \"Hungary\",\n    description: \"Connue pour ses bains thermaux et ses monuments historiques.\",\n    image: \"./images/Budapest.jpg\"\n  }, {\n    name: \"Krakow\",\n    country: \"Poland\",\n    description: \"Une ville médiévale pleine de charme et d'histoire.\",\n    image: \"./images/Krakow.jpg\"\n  }, {\n    name: \"Edinburgh\",\n    country: \"United Kingdom\",\n    description: \"La capitale de l'Écosse, riche en histoire et en culture.\",\n    image: \"./images/Edinburgh.avif\"\n  }, {\n    name: \"Copenhagen\",\n    country: \"Denmark\",\n    description: \"Une ville moderne et progressive avec une belle architecture.\",\n    image: \"./images/Copenhagen.jpeg\"\n  }, {\n    name: \"Athens\",\n    country: \"Greece\",\n    description: \"La ville antique avec l'Acropole et une cuisine délicieuse.\",\n    image: \"./images/Athenes.jpg\"\n  }];\n  var citiesContainer = document.getElementById(\"cities-container\");\n  cities.forEach(function (city) {\n    var cityCard = createCityCard(city);\n    citiesContainer.appendChild(cityCard);\n  });\n});\n\n//# sourceURL=webpack://webpack_tp/./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_tp/./src/style.scss?");

/***/ }),

/***/ "./src/images/Amsterdam.jpg":
/*!**********************************!*\
  !*** ./src/images/Amsterdam.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Amsterdam.jpg\");\n\n//# sourceURL=webpack://webpack_tp/./src/images/Amsterdam.jpg?");

/***/ }),

/***/ "./src/images/Athenes.jpg":
/*!********************************!*\
  !*** ./src/images/Athenes.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Athenes.jpg\");\n\n//# sourceURL=webpack://webpack_tp/./src/images/Athenes.jpg?");

/***/ }),

/***/ "./src/images/Barcelone.jpg":
/*!**********************************!*\
  !*** ./src/images/Barcelone.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Barcelone.jpg\");\n\n//# sourceURL=webpack://webpack_tp/./src/images/Barcelone.jpg?");

/***/ }),

/***/ "./src/images/Budapest.jpg":
/*!*********************************!*\
  !*** ./src/images/Budapest.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Budapest.jpg\");\n\n//# sourceURL=webpack://webpack_tp/./src/images/Budapest.jpg?");

/***/ }),

/***/ "./src/images/Copenhagen.jpeg":
/*!************************************!*\
  !*** ./src/images/Copenhagen.jpeg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Copenhagen.jpeg\");\n\n//# sourceURL=webpack://webpack_tp/./src/images/Copenhagen.jpeg?");

/***/ }),

/***/ "./src/images/Dublin.jpg":
/*!*******************************!*\
  !*** ./src/images/Dublin.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Dublin.jpg\");\n\n//# sourceURL=webpack://webpack_tp/./src/images/Dublin.jpg?");

/***/ }),

/***/ "./src/images/Krakow.jpg":
/*!*******************************!*\
  !*** ./src/images/Krakow.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Krakow.jpg\");\n\n//# sourceURL=webpack://webpack_tp/./src/images/Krakow.jpg?");

/***/ }),

/***/ "./src/images/Paris.jpg":
/*!******************************!*\
  !*** ./src/images/Paris.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Paris.jpg\");\n\n//# sourceURL=webpack://webpack_tp/./src/images/Paris.jpg?");

/***/ }),

/***/ "./src/images/Prague.jpg":
/*!*******************************!*\
  !*** ./src/images/Prague.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Prague.jpg\");\n\n//# sourceURL=webpack://webpack_tp/./src/images/Prague.jpg?");

/***/ }),

/***/ "./src/images/Rome.jpg":
/*!*****************************!*\
  !*** ./src/images/Rome.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Rome.jpg\");\n\n//# sourceURL=webpack://webpack_tp/./src/images/Rome.jpg?");

/***/ }),

/***/ "./src/images/Vienne.jpg":
/*!*******************************!*\
  !*** ./src/images/Vienne.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Vienne.jpg\");\n\n//# sourceURL=webpack://webpack_tp/./src/images/Vienne.jpg?");

/***/ }),

/***/ "./src/images sync \\.(jpg%7Cjpeg%7Cpng%7Cgif%7Csvg)$":
/*!*************************************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(jpg%7Cjpeg%7Cpng%7Cgif%7Csvg)$ ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./Amsterdam.jpg\": \"./src/images/Amsterdam.jpg\",\n\t\"./Athenes.jpg\": \"./src/images/Athenes.jpg\",\n\t\"./Barcelone.jpg\": \"./src/images/Barcelone.jpg\",\n\t\"./Budapest.jpg\": \"./src/images/Budapest.jpg\",\n\t\"./Copenhagen.jpeg\": \"./src/images/Copenhagen.jpeg\",\n\t\"./Dublin.jpg\": \"./src/images/Dublin.jpg\",\n\t\"./Krakow.jpg\": \"./src/images/Krakow.jpg\",\n\t\"./Paris.jpg\": \"./src/images/Paris.jpg\",\n\t\"./Prague.jpg\": \"./src/images/Prague.jpg\",\n\t\"./Rome.jpg\": \"./src/images/Rome.jpg\",\n\t\"./Vienne.jpg\": \"./src/images/Vienne.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images sync \\\\.(jpg%7Cjpeg%7Cpng%7Cgif%7Csvg)$\";\n\n//# sourceURL=webpack://webpack_tp/./src/images/_sync_nonrecursive_\\.(jpg%257Cjpeg%257Cpng%257Cgif%257Csvg)$?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;