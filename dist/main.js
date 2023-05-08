/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/platform */ \"./src/scripts/platform.js\");\n/* harmony import */ var _scripts_scenery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/scenery */ \"./src/scripts/scenery.js\");\n/* harmony import */ var _assests_concrete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/concrete.png */ \"./assests/concrete.png\");\n/* harmony import */ var _assests_cityskyline_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assests/cityskyline.png */ \"./assests/cityskyline.png\");\n/* harmony import */ var _assests_toonblueeyes_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assests/toonblueeyes.png */ \"./assests/toonblueeyes.png\");\n// import Example from './scripts/example';\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // console.log('hello world')\n\n  // const main = document.getElementById('main');\n  // new Example(main);\n  const canvas = document.querySelector(\"#game-canvas\");\n  const ctx = canvas.getContext('2d');\n\n  // canvas.width = window.innerWidth\n  // canvas.height = window.innerHeight\n  canvas.width = 950;\n  canvas.height = 502;\n  const player = new _scripts_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    x: 0,\n    y: 0\n  }, canvas, ctx);\n  function createImage(imageSrc) {\n    const image = new Image();\n    image.src = imageSrc;\n    return image;\n  }\n  const platforms = [new _scripts_platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    x: -285,\n    y: 427\n  }, ctx, createImage(_assests_concrete_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"])), new _scripts_platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    x: 0,\n    y: 427\n  }, ctx, createImage(_assests_concrete_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"])), new _scripts_platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    x: 285,\n    y: 427\n  }, ctx, createImage(_assests_concrete_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"])), new _scripts_platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    x: 570,\n    y: 427\n  }, ctx, createImage(_assests_concrete_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"])), new _scripts_platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    x: 855,\n    y: 427\n  }, ctx, createImage(_assests_concrete_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"])), new _scripts_platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    x: 1140,\n    y: 427\n  }, ctx, createImage(_assests_concrete_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"])), new _scripts_platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    x: 1425,\n    y: 427\n  }, ctx, createImage(_assests_concrete_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]))];\n  const scenery = [new _scripts_scenery__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    x: 0,\n    y: 0\n  }, ctx, createImage(_assests_cityskyline_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), {\n    width: 1600,\n    height: 502\n  }), new _scripts_scenery__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    x: 750,\n    y: 50\n  }, ctx, createImage(_assests_toonblueeyes_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), {\n    width: 150,\n    height: 150\n  })];\n  const keys = {\n    ArrowRight: {\n      pressed: false\n    },\n    ArrowLeft: {\n      pressed: false\n    },\n    ArrowUp: {\n      pressed: false\n    }\n  };\n  let scrollOffset = 0;\n  function animate() {\n    window.requestAnimationFrame(animate);\n    ctx.fillStyle = 'lime';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    // scenery.draw();\n    // toonBlueEyes.draw();\n    scenery.forEach(scene => {\n      scene.draw();\n    });\n    platforms.forEach(platform => {\n      platform.draw();\n    });\n    player.update();\n    if (keys.ArrowRight.pressed && player.position.x < 400) {\n      player.velocity.x = 5;\n    } else if (keys.ArrowLeft.pressed && player.position.x > 100) {\n      player.velocity.x = -5;\n    } else {\n      player.velocity.x = 0;\n      if (keys.ArrowRight.pressed) {\n        scrollOffset += 4;\n        platforms.forEach(platform => {\n          platform.position.x -= 4;\n        });\n        scenery.forEach(scene => {\n          scene.position.x -= 3;\n        });\n      } else if (keys.ArrowLeft.pressed) {\n        scrollOffset -= 4;\n        platforms.forEach(platform => {\n          platform.position.x += 4;\n        });\n        scenery.forEach(scene => {\n          scene.position.x += 3;\n        });\n      }\n    }\n    console.log(scrollOffset);\n    if (keys.ArrowUp.pressed) {\n      player.jump();\n    }\n    platforms.forEach(platform => {\n      if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {\n        player.velocity.y = 0;\n        player.isJumping = false;\n      }\n    });\n  }\n  animate();\n  window.addEventListener('keydown', e => {\n    switch (e.key) {\n      case 'ArrowRight':\n        keys.ArrowRight.pressed = true;\n        break;\n      case 'ArrowLeft':\n        keys.ArrowLeft.pressed = true;\n        break;\n      case 'ArrowUp':\n        keys.ArrowUp.pressed = true;\n        break;\n    }\n  });\n  window.addEventListener('keyup', e => {\n    switch (e.key) {\n      case 'ArrowRight':\n        keys.ArrowRight.pressed = false;\n        break;\n      case 'ArrowLeft':\n        keys.ArrowLeft.pressed = false;\n        break;\n      case 'ArrowUp':\n        keys.ArrowUp.pressed = false;\n        break;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixJQUFJLENBQUNJLE9BQU8sQ0FBQ0YsT0FBTyxHQUFHLEtBQUs7UUFDNUI7SUFDUjtFQUNKLENBQUMsQ0FBQztBQUVOLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2luay1nYW1lLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9zY3JpcHRzL2V4YW1wbGUnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3NjcmlwdHMvcGxheWVyJztcbmltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL3NjcmlwdHMvcGxhdGZvcm0nO1xuaW1wb3J0IFNjZW5lcnkgZnJvbSAnLi9zY3JpcHRzL3NjZW5lcnknO1xuaW1wb3J0IGNvbmNyZXRlSW1hZ2UgZnJvbSAnLi4vYXNzZXN0cy9jb25jcmV0ZS5wbmcnO1xuaW1wb3J0IHNreWxpbmVJbWFnZSBmcm9tICcuLi9hc3Nlc3RzL2NpdHlza3lsaW5lLnBuZyc7XG5pbXBvcnQgdG9vbmJsdWVleWVzSW1hZ2UgZnJvbSAnLi4vYXNzZXN0cy90b29uYmx1ZWV5ZXMucG5nJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKVxuICAgIFxuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIC8vIG5ldyBFeGFtcGxlKG1haW4pO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZS1jYW52YXNcIilcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgLy8gY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgICAvLyBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgY2FudmFzLndpZHRoID0gOTUwXG4gICAgY2FudmFzLmhlaWdodCA9IDUwMlxuXG4gICAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcih7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgfSwgY2FudmFzLCBjdHgpXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJbWFnZSAoaW1hZ2VTcmMpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VTcmM7XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF0Zm9ybXMgPSBbXG4gICAgICAgIG5ldyBQbGF0Zm9ybSh7eDogLTI4NSwgeTogNDI3fSwgY3R4LCBjcmVhdGVJbWFnZShjb25jcmV0ZUltYWdlKSksXG4gICAgICAgIG5ldyBQbGF0Zm9ybSh7eDogMCwgeTogNDI3fSwgY3R4LCBjcmVhdGVJbWFnZShjb25jcmV0ZUltYWdlKSksXG4gICAgICAgIG5ldyBQbGF0Zm9ybSh7eDogMjg1LCB5OiA0Mjd9LCBjdHgsIGNyZWF0ZUltYWdlKGNvbmNyZXRlSW1hZ2UpKSxcbiAgICAgICAgbmV3IFBsYXRmb3JtKHt4OiA1NzAsIHk6IDQyN30sIGN0eCwgY3JlYXRlSW1hZ2UoY29uY3JldGVJbWFnZSkpLFxuICAgICAgICBuZXcgUGxhdGZvcm0oe3g6IDg1NSwgeTogNDI3fSwgY3R4LCBjcmVhdGVJbWFnZShjb25jcmV0ZUltYWdlKSksXG4gICAgICAgIG5ldyBQbGF0Zm9ybSh7eDogMTE0MCwgeTogNDI3fSwgY3R4LCBjcmVhdGVJbWFnZShjb25jcmV0ZUltYWdlKSksXG4gICAgICAgIG5ldyBQbGF0Zm9ybSh7eDogMTQyNSwgeTogNDI3fSwgY3R4LCBjcmVhdGVJbWFnZShjb25jcmV0ZUltYWdlKSlcbiAgICBdXG4gICAgXG4gICAgY29uc3Qgc2NlbmVyeSA9IFtcbiAgICAgICAgbmV3IFNjZW5lcnkoe3g6IDAsIHk6IDB9LCBjdHgsIGNyZWF0ZUltYWdlKHNreWxpbmVJbWFnZSksIHt3aWR0aDogMTYwMCwgaGVpZ2h0OiA1MDJ9KSxcbiAgICAgICAgbmV3IFNjZW5lcnkoe3g6IDc1MCwgeTogNTB9LCBjdHgsIGNyZWF0ZUltYWdlKHRvb25ibHVlZXllc0ltYWdlKSwge3dpZHRoOiAxNTAsIGhlaWdodDogMTUwfSlcbiAgICBdXG5cbiAgICBjb25zdCBrZXlzID0ge1xuICAgICAgICBBcnJvd1JpZ2h0OiB7XG4gICAgICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgQXJyb3dMZWZ0OiB7XG4gICAgICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgQXJyb3dVcDoge1xuICAgICAgICAgICAgcHJlc3NlZDogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc2Nyb2xsT2Zmc2V0ID0gMDsgXG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2xpbWUnO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAvLyBzY2VuZXJ5LmRyYXcoKTtcbiAgICAgICAgICAgIC8vIHRvb25CbHVlRXllcy5kcmF3KCk7XG4gICAgICAgICAgICBzY2VuZXJ5LmZvckVhY2goc2NlbmUgPT4ge1xuICAgICAgICAgICAgICAgIHNjZW5lLmRyYXcoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwbGF0Zm9ybXMuZm9yRWFjaChwbGF0Zm9ybSA9PiB7XG4gICAgICAgICAgICAgICAgcGxhdGZvcm0uZHJhdygpOyBcbiAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgcGxheWVyLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICBpZiAoa2V5cy5BcnJvd1JpZ2h0LnByZXNzZWQgJiYgcGxheWVyLnBvc2l0aW9uLnggPCA0MDApIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleXMuQXJyb3dMZWZ0LnByZXNzZWQgJiYgcGxheWVyLnBvc2l0aW9uLnggPiAxMDApIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IC01XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDBcblxuICAgICAgICAgICAgICAgIGlmIChrZXlzLkFycm93UmlnaHQucHJlc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxPZmZzZXQgKz0gNFxuICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybXMuZm9yRWFjaChwbGF0Zm9ybSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybS5wb3NpdGlvbi54IC09IDRcbiAgICAgICAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICAgICAgc2NlbmVyeS5mb3JFYWNoKHNjZW5lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUucG9zaXRpb24ueCAtPSAzXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2V5cy5BcnJvd0xlZnQucHJlc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxPZmZzZXQgLT0gNFxuICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybXMuZm9yRWFjaChwbGF0Zm9ybSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybS5wb3NpdGlvbi54ICs9IDRcbiAgICAgICAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICAgICAgc2NlbmVyeS5mb3JFYWNoKHNjZW5lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUucG9zaXRpb24ueCArPTNcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coc2Nyb2xsT2Zmc2V0KVxuXG4gICAgICAgICAgICBpZiAoa2V5cy5BcnJvd1VwLnByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuanVtcCgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBsYXRmb3Jtcy5mb3JFYWNoKHBsYXRmb3JtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnBvc2l0aW9uLnkgKyBwbGF5ZXIuaGVpZ2h0IDw9IHBsYXRmb3JtLnBvc2l0aW9uLnkgXG4gICAgICAgICAgICAgICAgICAgICYmIHBsYXllci5wb3NpdGlvbi55ICsgcGxheWVyLmhlaWdodCArIHBsYXllci52ZWxvY2l0eS55ID49IHBsYXRmb3JtLnBvc2l0aW9uLnlcbiAgICAgICAgICAgICAgICAgICAgJiYgcGxheWVyLnBvc2l0aW9uLnggKyBwbGF5ZXIud2lkdGggPj0gcGxhdGZvcm0ucG9zaXRpb24ueFxuICAgICAgICAgICAgICAgICAgICAmJiBwbGF5ZXIucG9zaXRpb24ueCA8PSBwbGF0Zm9ybS5wb3NpdGlvbi54ICsgcGxhdGZvcm0ud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueSA9IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmlzSnVtcGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9IH0pIFxuICAgICAgICB9XG5cbiAgICBhbmltYXRlKClcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAga2V5cy5BcnJvd1JpZ2h0LnByZXNzZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgIGtleXMuQXJyb3dMZWZ0LnByZXNzZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICBrZXlzLkFycm93VXAucHJlc3NlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICBrZXlzLkFycm93UmlnaHQucHJlc3NlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgIGtleXMuQXJyb3dMZWZ0LnByZXNzZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAga2V5cy5BcnJvd1VwLnByZXNzZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBcbn0pIl0sIm5hbWVzIjpbIlBsYXllciIsIlBsYXRmb3JtIiwiU2NlbmVyeSIsImNvbmNyZXRlSW1hZ2UiLCJza3lsaW5lSW1hZ2UiLCJ0b29uYmx1ZWV5ZXNJbWFnZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJwbGF5ZXIiLCJ4IiwieSIsImNyZWF0ZUltYWdlIiwiaW1hZ2VTcmMiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwicGxhdGZvcm1zIiwic2NlbmVyeSIsImtleXMiLCJBcnJvd1JpZ2h0IiwicHJlc3NlZCIsIkFycm93TGVmdCIsIkFycm93VXAiLCJzY3JvbGxPZmZzZXQiLCJhbmltYXRlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb3JFYWNoIiwic2NlbmUiLCJkcmF3IiwicGxhdGZvcm0iLCJ1cGRhdGUiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwiY29uc29sZSIsImxvZyIsImp1bXAiLCJpc0p1bXBpbmciLCJlIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/platform.js":
/*!*********************************!*\
  !*** ./src/scripts/platform.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Platform {\n  constructor(position, ctx, image) {\n    this.position = position;\n    this.ctx = ctx;\n    this.image = image;\n    this.width = 300;\n    this.height = 75;\n  }\n  draw() {\n    // this.ctx.fillStyle = 'blue'\n    // this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)\n    // // console.log(\"plat draw was here\")\n    this.ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Platform);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF0Zm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsUUFBUSxDQUFDO0VBQ1hDLFdBQVdBLENBQUNDLFFBQVEsRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUU7SUFDOUIsSUFBSSxDQUFDRixRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLEtBQUssR0FBRyxHQUFHO0lBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7RUFDcEI7RUFFQUMsSUFBSUEsQ0FBQSxFQUFHO0lBQ0g7SUFDQTtJQUNBO0lBQ0EsSUFBSSxDQUFDSixHQUFHLENBQUNLLFNBQVMsQ0FBQyxJQUFJLENBQUNKLEtBQUssRUFBRSxJQUFJLENBQUNGLFFBQVEsQ0FBQ08sQ0FBQyxFQUFFLElBQUksQ0FBQ1AsUUFBUSxDQUFDUSxDQUFDLEVBQUUsSUFBSSxDQUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7RUFDN0Y7QUFDSjtBQUVBLCtEQUFlTixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5rLWdhbWUvLi9zcmMvc2NyaXB0cy9wbGF0Zm9ybS5qcz84NmRkIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXRmb3JtIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgY3R4LCBpbWFnZSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlXG4gICAgICAgIHRoaXMud2lkdGggPSAzMDBcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA3NVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibHVlJ1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwicGxhdCBkcmF3IHdhcyBoZXJlXCIpXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF0Zm9ybTsiXSwibmFtZXMiOlsiUGxhdGZvcm0iLCJjb25zdHJ1Y3RvciIsInBvc2l0aW9uIiwiY3R4IiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImRyYXciLCJkcmF3SW1hZ2UiLCJ4IiwieSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/platform.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst CONSTANTS = {\n  gravity: 0.4\n};\nclass Player {\n  constructor(position, canvas, ctx) {\n    this.position = position;\n    this.velocity = {\n      x: 0,\n      y: 1\n    };\n    this.width = 50;\n    this.height = 50;\n    this.isJumping = false;\n    this.canvas = canvas;\n    this.ctx = ctx;\n  }\n  draw() {\n    this.ctx.fillStyle = 'red';\n    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n  update() {\n    this.draw();\n\n    // this.position.x += this.velocity.x\n    if (this.position.x + this.velocity.x >= 0 && this.position.x + this.velocity.x + this.width <= this.canvas.width) {\n      this.position.x += this.velocity.x;\n    }\n    this.position.y += this.velocity.y;\n    if (this.position.y + this.height + this.velocity.y < this.canvas.height) {\n      this.velocity.y += CONSTANTS.gravity;\n    } else {\n      this.velocity.y = 0;\n      this.isJumping = false;\n    }\n  }\n  jump() {\n    if (!this.isJumping) {\n      this.velocity.y = -10;\n      this.isJumping = true;\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFNBQVMsR0FBRztFQUNkQyxPQUFPLEVBQUU7QUFDYixDQUFDO0FBRUQsTUFBTUMsTUFBTSxDQUFDO0VBRVRDLFdBQVdBLENBQUNDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsSUFBSSxDQUFDRixRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDRyxRQUFRLEdBQUc7TUFDWkMsQ0FBQyxFQUFFLENBQUM7TUFDSkMsQ0FBQyxFQUFFO0lBQ1AsQ0FBQztJQUNELElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO0lBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEtBQUs7SUFDdEIsSUFBSSxDQUFDUCxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7RUFDbEI7RUFFQU8sSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsSUFBSSxDQUFDUCxHQUFHLENBQUNRLFNBQVMsR0FBRyxLQUFLO0lBQzFCLElBQUksQ0FBQ1IsR0FBRyxDQUFDUyxRQUFRLENBQUMsSUFBSSxDQUFDWCxRQUFRLENBQUNJLENBQUMsRUFBRSxJQUFJLENBQUNKLFFBQVEsQ0FBQ0ssQ0FBQyxFQUFFLElBQUksQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0VBQ2hGO0VBRUFLLE1BQU1BLENBQUEsRUFBRztJQUNMLElBQUksQ0FBQ0gsSUFBSSxDQUFDLENBQUM7O0lBRVg7SUFDQSxJQUFJLElBQUksQ0FBQ1QsUUFBUSxDQUFDSSxDQUFDLEdBQUcsSUFBSSxDQUFDRCxRQUFRLENBQUNDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDSixRQUFRLENBQUNJLENBQUMsR0FBRyxJQUFJLENBQUNELFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLElBQUksQ0FBQ0UsS0FBSyxJQUFJLElBQUksQ0FBQ0wsTUFBTSxDQUFDSyxLQUFLLEVBQUU7TUFDL0csSUFBSSxDQUFDTixRQUFRLENBQUNJLENBQUMsSUFBSSxJQUFJLENBQUNELFFBQVEsQ0FBQ0MsQ0FBQztJQUNwQztJQUVGLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxDQUFDLElBQUksSUFBSSxDQUFDRixRQUFRLENBQUNFLENBQUM7SUFDbEMsSUFBSSxJQUFJLENBQUNMLFFBQVEsQ0FBQ0ssQ0FBQyxHQUFHLElBQUksQ0FBQ0UsTUFBTSxHQUFHLElBQUksQ0FBQ0osUUFBUSxDQUFDRSxDQUFDLEdBQUcsSUFBSSxDQUFDSixNQUFNLENBQUNNLE1BQU0sRUFDcEU7TUFBQyxJQUFJLENBQUNKLFFBQVEsQ0FBQ0UsQ0FBQyxJQUFJVCxTQUFTLENBQUNDLE9BQU87SUFBQSxDQUFDLE1BRXRDO01BQUMsSUFBSSxDQUFDTSxRQUFRLENBQUNFLENBQUMsR0FBRyxDQUFDO01BQUUsSUFBSSxDQUFDRyxTQUFTLEdBQUcsS0FBSztJQUFBO0VBQ3BEO0VBRUFLLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQyxJQUFJLENBQUNMLFNBQVMsRUFBRTtNQUNqQixJQUFJLENBQUNMLFFBQVEsQ0FBQ0UsQ0FBQyxHQUFHLENBQUMsRUFBRTtNQUNyQixJQUFJLENBQUNHLFNBQVMsR0FBRyxJQUFJO0lBQ3pCO0VBQ0o7QUFDSjtBQUVBLCtEQUFlVixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5rLWdhbWUvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT05TVEFOVFMgPSB7XG4gICAgZ3Jhdml0eTogMC40LFxufVxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAxXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53aWR0aCA9IDUwXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNTBcbiAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZWQnXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5LnhcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMudmVsb2NpdHkueCA+PSAwICYmIHRoaXMucG9zaXRpb24ueCArIHRoaXMudmVsb2NpdHkueCArIHRoaXMud2lkdGggPD0gdGhpcy5jYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCArIHRoaXMudmVsb2NpdHkueSA8IHRoaXMuY2FudmFzLmhlaWdodClcbiAgICAgICAgICAgIHt0aGlzLnZlbG9jaXR5LnkgKz0gQ09OU1RBTlRTLmdyYXZpdHl9XG4gICAgICAgIGVsc2UgXG4gICAgICAgICAgICB7dGhpcy52ZWxvY2l0eS55ID0gMDsgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZX1cbiAgICB9XG5cbiAgICBqdW1wKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtMTBcbiAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7Il0sIm5hbWVzIjpbIkNPTlNUQU5UUyIsImdyYXZpdHkiLCJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsInBvc2l0aW9uIiwiY2FudmFzIiwiY3R4IiwidmVsb2NpdHkiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiaXNKdW1waW5nIiwiZHJhdyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidXBkYXRlIiwianVtcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/scenery.js":
/*!********************************!*\
  !*** ./src/scripts/scenery.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Scenery {\n  constructor(position, ctx, image, dimensions) {\n    this.position = position;\n    this.ctx = ctx;\n    this.image = image;\n    // this.width = 1500\n    // this.height = 502\n    this.dimensions = dimensions;\n  }\n  draw() {\n    // this.ctx.fillStyle = 'blue'\n    // this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)\n    // // console.log(\"plat draw was here\")\n    this.ctx.drawImage(this.image, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scenery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zY2VuZXJ5LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsUUFBUSxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFO0lBQzFDLElBQUksQ0FBQ0gsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEI7SUFDQTtJQUNBLElBQUksQ0FBQ0MsVUFBVSxHQUFHQSxVQUFVO0VBQ2hDO0VBRUFDLElBQUlBLENBQUEsRUFBRztJQUNIO0lBQ0E7SUFDQTtJQUNBLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxTQUFTLENBQUMsSUFBSSxDQUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDRixRQUFRLENBQUNNLENBQUMsRUFBRSxJQUFJLENBQUNOLFFBQVEsQ0FBQ08sQ0FBQyxFQUFFLElBQUksQ0FBQ0osVUFBVSxDQUFDSyxLQUFLLEVBQUUsSUFBSSxDQUFDTCxVQUFVLENBQUNNLE1BQU0sQ0FBQztFQUNuSDtBQUNKO0FBRUEsK0RBQWVYLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmstZ2FtZS8uL3NyYy9zY3JpcHRzL3NjZW5lcnkuanM/MjhjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTY2VuZXJ5IHtcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgY3R4LCBpbWFnZSwgZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlXG4gICAgICAgIC8vIHRoaXMud2lkdGggPSAxNTAwXG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gNTAyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmx1ZSdcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhcInBsYXQgZHJhdyB3YXMgaGVyZVwiKVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lcnk7Il0sIm5hbWVzIjpbIlNjZW5lcnkiLCJjb25zdHJ1Y3RvciIsInBvc2l0aW9uIiwiY3R4IiwiaW1hZ2UiLCJkaW1lbnNpb25zIiwiZHJhdyIsImRyYXdJbWFnZSIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/scenery.js\n");

/***/ }),

/***/ "./assests/cityskyline.png":
/*!*********************************!*\
  !*** ./assests/cityskyline.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/cityskyline.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3Nlc3RzL2NpdHlza3lsaW5lLnBuZy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUscUJBQXVCLDJCQUEyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2luay1nYW1lLy4vYXNzZXN0cy9jaXR5c2t5bGluZS5wbmc/ZDQxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2NpdHlza3lsaW5lLnBuZ1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assests/cityskyline.png\n");

/***/ }),

/***/ "./assests/concrete.png":
/*!******************************!*\
  !*** ./assests/concrete.png ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/concrete.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3Nlc3RzL2NvbmNyZXRlLnBuZy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUscUJBQXVCLHdCQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2luay1nYW1lLy4vYXNzZXN0cy9jb25jcmV0ZS5wbmc/ZTM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2NvbmNyZXRlLnBuZ1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assests/concrete.png\n");

/***/ }),

/***/ "./assests/toonblueeyes.png":
/*!**********************************!*\
  !*** ./assests/toonblueeyes.png ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/toonblueeyes.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3Nlc3RzL3Rvb25ibHVlZXllcy5wbmcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLHFCQUF1Qiw0QkFBNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmstZ2FtZS8uL2Fzc2VzdHMvdG9vbmJsdWVleWVzLnBuZz9lNGFlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdG9vbmJsdWVleWVzLnBuZ1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assests/toonblueeyes.png\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmstZ2FtZS8uL3NyYy9pbmRleC5zY3NzPzhlYjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
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
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;