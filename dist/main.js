/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const view = (() => {
  function setSearchResult(weatherData) {
    if (!weatherData || !weatherData.name) return;

    const searchResult = document.getElementById("searchResult");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const feelsLike = document.getElementById("feelsLike");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    searchResult.classList.add("active");

    cityName.textContent = `${weatherData.name}`;
    temperature.textContent = `Temperature: ${weatherData.main.temp}°C`;
    feelsLike.textContent = `Fells like: ${weatherData.main.feels_like}°C`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    wind.textContent = `Wind: ${weatherData.wind.speed} km/h`;
  }

  return { setSearchResult };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);


/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weather = (() => {
  async function getData(city) {
    try {
      if (city === "") throw new Error("Empty input");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`,
        { mode: "cors" },
      );

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  return { getData };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ "./src/modules/weather.js");
/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view */ "./src/modules/view.js");



const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
  const weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__.default.getData(searchInput.value);
  _modules_view__WEBPACK_IMPORTED_MODULE_1__.default.setSearchResult(weatherData);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDhCQUE4QixpQkFBaUI7QUFDL0MsOENBQThDLHNCQUFzQjtBQUNwRSwyQ0FBMkMsNEJBQTRCO0FBQ3ZFLHdDQUF3QywwQkFBMEI7QUFDbEUsZ0NBQWdDLHVCQUF1QjtBQUN2RDs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQsS0FBSztBQUNsRSxTQUFTLGVBQWU7QUFDeEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRCxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7VUN2QnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDTjs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsNEJBQTRCLDZEQUFlO0FBQzNDLEVBQUUsa0VBQW9CO0FBQ3RCLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZpZXcgPSAoKCkgPT4ge1xyXG4gIGZ1bmN0aW9uIHNldFNlYXJjaFJlc3VsdCh3ZWF0aGVyRGF0YSkge1xyXG4gICAgaWYgKCF3ZWF0aGVyRGF0YSB8fCAhd2VhdGhlckRhdGEubmFtZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoUmVzdWx0XCIpO1xyXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHlOYW1lXCIpO1xyXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBlcmF0dXJlXCIpO1xyXG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc0xpa2VcIik7XHJcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XHJcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kXCIpO1xyXG5cclxuICAgIHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubmFtZX1gO1xyXG4gICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgVGVtcGVyYXR1cmU6ICR7d2VhdGhlckRhdGEubWFpbi50ZW1wfcKwQ2A7XHJcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVsbHMgbGlrZTogJHt3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2V9wrBDYDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke3dlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHl9JWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQ6ICR7d2VhdGhlckRhdGEud2luZC5zcGVlZH0ga20vaGA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzZXRTZWFyY2hSZXN1bHQgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZpZXc7XHJcbiIsImNvbnN0IHdlYXRoZXIgPSAoKCkgPT4ge1xuICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGNpdHkgPT09IFwiXCIpIHRocm93IG5ldyBFcnJvcihcIkVtcHR5IGlucHV0XCIpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD0yOGZlN2I1ZjlhNzg4MzhjNjM5MTQzZmM1MTdlNDM0M2AsXG4gICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfSxcbiAgICAgICk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkNpdHkgbm90IGZvdW5kXCIpO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGdldERhdGEgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgd2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL3dlYXRoZXJcIjtcclxuaW1wb3J0IHZpZXcgZnJvbSBcIi4vbW9kdWxlcy92aWV3XCI7XHJcblxyXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hGb3JtXCIpO1xyXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIik7XHJcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnRuXCIpO1xyXG5cclxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlci5nZXREYXRhKHNlYXJjaElucHV0LnZhbHVlKTtcclxuICB2aWV3LnNldFNlYXJjaFJlc3VsdCh3ZWF0aGVyRGF0YSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9