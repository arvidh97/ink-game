/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// import Example from './scripts/example';\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // console.log('hello world')\n\n  // const main = document.getElementById('main');\n  // new Example(main);\n  const canvas = document.querySelector(\"#game-canvas\");\n  const ctx = canvas.getContext('2d');\n\n  // canvas.width = window.innerWidth\n  // canvas.height = window.innerHeight\n  canvas.width = 1024;\n  canvas.height = 576;\n  const CONSTANTS = {\n    gravity: 0.4\n  };\n  class Player {\n    constructor(position) {\n      this.position = position;\n      this.velocity = {\n        x: 0,\n        y: 1\n      };\n      this.width = 50;\n      this.height = 50;\n      this.isJumping = false;\n    }\n    draw() {\n      ctx.fillStyle = 'red';\n      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n    }\n    update() {\n      this.draw();\n\n      // this.position.x += this.velocity.x\n      if (this.position.x + this.velocity.x >= 0 && this.position.x + this.velocity.x + this.width <= canvas.width) {\n        this.position.x += this.velocity.x;\n      }\n      this.position.y += this.velocity.y;\n      if (this.position.y + this.height + this.velocity.y < canvas.height) {\n        this.velocity.y += CONSTANTS.gravity;\n      } else {\n        this.velocity.y = 0;\n        this.isJumping = false;\n      }\n    }\n    jump() {\n      if (!this.isJumping) {\n        this.velocity.y = -10;\n        this.isJumping = true;\n      }\n    }\n  }\n  const player = new Player({\n    x: 0,\n    y: 0\n  });\n  const keys = {\n    ArrowRight: {\n      pressed: false\n    },\n    ArrowLeft: {\n      pressed: false\n    },\n    ArrowUp: {\n      pressed: false\n    }\n  };\n  function animate() {\n    window.requestAnimationFrame(animate);\n    ctx.fillStyle = 'lime';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    player.update();\n    player.velocity.x = 0;\n    if (keys.ArrowRight.pressed) {\n      player.velocity.x = 3;\n    } else if (keys.ArrowLeft.pressed) {\n      player.velocity.x = -3;\n    }\n    if (keys.ArrowUp.pressed) {\n      player.jump();\n    }\n  }\n  animate();\n  window.addEventListener('keydown', e => {\n    switch (e.key) {\n      case 'ArrowRight':\n        keys.ArrowRight.pressed = true;\n        break;\n      case 'ArrowLeft':\n        keys.ArrowLeft.pressed = true;\n        break;\n      case 'ArrowUp':\n        keys.ArrowUp.pressed = true;\n        break;\n    }\n  });\n  window.addEventListener('keyup', e => {\n    switch (e.key) {\n      case 'ArrowRight':\n        keys.ArrowRight.pressed = false;\n        break;\n      case 'ArrowLeft':\n        keys.ArrowLeft.pressed = false;\n        break;\n      case 'ArrowUp':\n        keys.ArrowUp.pressed = false;\n        break;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiQ09OU1RBTlRTIiwiZ3Jhdml0eSIsIlBsYXllciIsImNvbnN0cnVjdG9yIiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsIngiLCJ5IiwiaXNKdW1waW5nIiwiZHJhdyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidXBkYXRlIiwianVtcCIsInBsYXllciIsImtleXMiLCJBcnJvd1JpZ2h0IiwicHJlc3NlZCIsIkFycm93TGVmdCIsIkFycm93VXAiLCJhbmltYXRlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZSIsImtleSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5rLWdhbWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvZXhhbXBsZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkJylcbiAgICBcbiAgICAvLyBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICAvLyBuZXcgRXhhbXBsZShtYWluKTtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWUtY2FudmFzXCIpXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgIC8vIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgLy8gY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIGNhbnZhcy53aWR0aCA9IDEwMjRcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTc2XG5cbiAgICBjb25zdCBDT05TVEFOVFMgPSB7XG4gICAgICAgIGdyYXZpdHk6IDAuNCxcbiAgICB9XG5cbiAgICBjbGFzcyBQbGF5ZXIge1xuICAgICAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IDUwXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IDUwXG4gICAgICAgICAgICB0aGlzLmlzSnVtcGluZyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZHJhdygpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJ1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuXG4gICAgICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54XG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy52ZWxvY2l0eS54ID49IDAgJiYgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy52ZWxvY2l0eS54ICsgdGhpcy53aWR0aCA8PSBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueVxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy52ZWxvY2l0eS55IDwgY2FudmFzLmhlaWdodClcbiAgICAgICAgICAgICAgICB7dGhpcy52ZWxvY2l0eS55ICs9IENPTlNUQU5UUy5ncmF2aXR5fVxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICB7dGhpcy52ZWxvY2l0eS55ID0gMDsgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZX1cbiAgICAgICAgfVxuXG4gICAgICAgIGp1bXAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLTEwXG4gICAgICAgICAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICB9KVxuXG4gICAgY29uc3Qga2V5cyA9IHtcbiAgICAgICAgQXJyb3dSaWdodDoge1xuICAgICAgICAgICAgcHJlc3NlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIEFycm93TGVmdDoge1xuICAgICAgICAgICAgcHJlc3NlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIEFycm93VXA6IHtcbiAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdsaW1lJztcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgcGxheWVyLnVwZGF0ZSgpOyAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDBcbiAgICAgICAgICAgIGlmIChrZXlzLkFycm93UmlnaHQucHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gM1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5cy5BcnJvd0xlZnQucHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gLTNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGtleXMuQXJyb3dVcC5wcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLmp1bXAoKVxuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIGFuaW1hdGUoKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICBrZXlzLkFycm93UmlnaHQucHJlc3NlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAga2V5cy5BcnJvd0xlZnQucHJlc3NlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgIGtleXMuQXJyb3dVcC5wcmVzc2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIGtleXMuQXJyb3dSaWdodC5wcmVzc2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAga2V5cy5BcnJvd0xlZnQucHJlc3NlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICBrZXlzLkFycm93VXAucHJlc3NlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIFxufSkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQ7O0VBRUE7RUFDQTtFQUNBLE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBQ3JELE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFVLENBQUMsSUFBSSxDQUFDOztFQUVuQztFQUNBO0VBQ0FILE1BQU0sQ0FBQ0ksS0FBSyxHQUFHLElBQUk7RUFDbkJKLE1BQU0sQ0FBQ0ssTUFBTSxHQUFHLEdBQUc7RUFFbkIsTUFBTUMsU0FBUyxHQUFHO0lBQ2RDLE9BQU8sRUFBRTtFQUNiLENBQUM7RUFFRCxNQUFNQyxNQUFNLENBQUM7SUFDVEMsV0FBV0EsQ0FBQ0MsUUFBUSxFQUFFO01BQ2xCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQSxRQUFRO01BQ3hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHO1FBQ1pDLENBQUMsRUFBRSxDQUFDO1FBQ0pDLENBQUMsRUFBRTtNQUNQLENBQUM7TUFDRCxJQUFJLENBQUNULEtBQUssR0FBRyxFQUFFO01BQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtNQUNoQixJQUFJLENBQUNTLFNBQVMsR0FBRyxLQUFLO0lBQzFCO0lBRUFDLElBQUlBLENBQUEsRUFBRztNQUNIYixHQUFHLENBQUNjLFNBQVMsR0FBRyxLQUFLO01BQ3JCZCxH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\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmstZ2FtZS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;