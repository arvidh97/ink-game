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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n// import Example from './scripts/example';\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // console.log('hello world')\n\n  // const main = document.getElementById('main');\n  // new Example(main);\n  const canvas = document.querySelector(\"#game-canvas\");\n  const ctx = canvas.getContext('2d');\n\n  // canvas.width = window.innerWidth\n  // canvas.height = window.innerHeight\n  canvas.width = 950;\n  canvas.height = 502;\n\n  // const CONSTANTS = {\n  //     gravity: 0.4,\n  // }\n\n  // class Player {\n  //     constructor(position) {\n  //         this.position = position\n  //         this.velocity = {\n  //             x: 0,\n  //             y: 1\n  //         }\n  //         this.width = 50\n  //         this.height = 50\n  //         this.isJumping = false\n  //     }\n\n  //     draw() {\n  //         ctx.fillStyle = 'red'\n  //         ctx.fillRect(this.position.x, this.position.y, this.width, this.height)\n  //     }\n\n  //     update() {\n  //         this.draw();\n\n  //         // this.position.x += this.velocity.x\n  //         if (this.position.x + this.velocity.x >= 0 && this.position.x + this.velocity.x + this.width <= canvas.width) {\n  //             this.position.x += this.velocity.x;\n  //           }\n\n  //         this.position.y += this.velocity.y\n  //         if (this.position.y + this.height + this.velocity.y < canvas.height)\n  //             {this.velocity.y += CONSTANTS.gravity}\n  //         else \n  //             {this.velocity.y = 0; this.isJumping = false}\n  //     }\n\n  //     jump() {\n  //         if (!this.isJumping) {\n  //             this.velocity.y = -10\n  //             this.isJumping = true\n  //         }\n  //     }\n  // }\n\n  const player = new _scripts_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    x: 0,\n    y: 0\n  }, canvas, ctx);\n\n  // class Platform {\n  //     constructor() {\n\n  //     }\n  // }\n\n  const keys = {\n    ArrowRight: {\n      pressed: false\n    },\n    ArrowLeft: {\n      pressed: false\n    },\n    ArrowUp: {\n      pressed: false\n    }\n  };\n  function animate() {\n    window.requestAnimationFrame(animate);\n    ctx.fillStyle = 'lime';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    player.update();\n    player.velocity.x = 0;\n    if (keys.ArrowRight.pressed) {\n      player.velocity.x = 3;\n    } else if (keys.ArrowLeft.pressed) {\n      player.velocity.x = -3;\n    }\n    if (keys.ArrowUp.pressed) {\n      player.jump();\n    }\n  }\n  animate();\n  window.addEventListener('keydown', e => {\n    switch (e.key) {\n      case 'ArrowRight':\n        keys.ArrowRight.pressed = true;\n        break;\n      case 'ArrowLeft':\n        keys.ArrowLeft.pressed = true;\n        break;\n      case 'ArrowUp':\n        keys.ArrowUp.pressed = true;\n        break;\n    }\n  });\n  window.addEventListener('keyup', e => {\n    switch (e.key) {\n      case 'ArrowRight':\n        keys.ArrowRight.pressed = false;\n        break;\n      case 'ArrowLeft':\n        keys.ArrowLeft.pressed = false;\n        break;\n      case 'ArrowUp':\n        keys.ArrowUp.pressed = false;\n        break;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDL0I7TUFDSixLQUFLLFdBQVc7UUFDWkYsSUFBSSxDQUFDRyxTQUFTLENBQUNELE9BQU8sR0FBRyxLQUFLO1FBQzlCO01BQ0osS0FBSyxTQUFTO1FBQ1ZGLElBQUksQ0FBQ0ksT0FBTyxDQUFDRixPQUFPLEdBQUcsS0FBSztRQUM1QjtJQUNSO0VBQ0osQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5rLWdhbWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvZXhhbXBsZSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vc2NyaXB0cy9wbGF5ZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpXG4gICAgXG4gICAgLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgLy8gbmV3IEV4YW1wbGUobWFpbik7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lLWNhbnZhc1wiKVxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAvLyBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIC8vIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICBjYW52YXMud2lkdGggPSA5NTBcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTAyXG5cbiAgICAvLyBjb25zdCBDT05TVEFOVFMgPSB7XG4gICAgLy8gICAgIGdyYXZpdHk6IDAuNCxcbiAgICAvLyB9XG5cbiAgICAvLyBjbGFzcyBQbGF5ZXIge1xuICAgIC8vICAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgIC8vICAgICAgICAgICAgIHg6IDAsXG4gICAgLy8gICAgICAgICAgICAgeTogMVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgdGhpcy53aWR0aCA9IDUwXG4gICAgLy8gICAgICAgICB0aGlzLmhlaWdodCA9IDUwXG4gICAgLy8gICAgICAgICB0aGlzLmlzSnVtcGluZyA9IGZhbHNlXG4gICAgLy8gICAgIH1cbiAgICBcbiAgICAvLyAgICAgZHJhdygpIHtcbiAgICAvLyAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJ1xuICAgIC8vICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIHVwZGF0ZSgpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZHJhdygpO1xuXG4gICAgLy8gICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy52ZWxvY2l0eS54ID49IDAgJiYgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy52ZWxvY2l0eS54ICsgdGhpcy53aWR0aCA8PSBjYW52YXMud2lkdGgpIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgIC8vICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy52ZWxvY2l0eS55IDwgY2FudmFzLmhlaWdodClcbiAgICAvLyAgICAgICAgICAgICB7dGhpcy52ZWxvY2l0eS55ICs9IENPTlNUQU5UUy5ncmF2aXR5fVxuICAgIC8vICAgICAgICAgZWxzZSBcbiAgICAvLyAgICAgICAgICAgICB7dGhpcy52ZWxvY2l0eS55ID0gMDsgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZX1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGp1bXAoKSB7XG4gICAgLy8gICAgICAgICBpZiAoIXRoaXMuaXNKdW1waW5nKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLTEwXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSB0cnVlXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICB9LCBjYW52YXMsIGN0eClcblxuXG4gICAgLy8gY2xhc3MgUGxhdGZvcm0ge1xuICAgIC8vICAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgY29uc3Qga2V5cyA9IHtcbiAgICAgICAgQXJyb3dSaWdodDoge1xuICAgICAgICAgICAgcHJlc3NlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIEFycm93TGVmdDoge1xuICAgICAgICAgICAgcHJlc3NlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIEFycm93VXA6IHtcbiAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdsaW1lJztcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgcGxheWVyLnVwZGF0ZSgpOyAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gMFxuICAgICAgICAgICAgaWYgKGtleXMuQXJyb3dSaWdodC5wcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5LnggPSAzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXlzLkFycm93TGVmdC5wcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5LnggPSAtM1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoa2V5cy5BcnJvd1VwLnByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuanVtcCgpXG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIGtleXMuQXJyb3dSaWdodC5wcmVzc2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICBrZXlzLkFycm93TGVmdC5wcmVzc2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAga2V5cy5BcnJvd1VwLnByZXNzZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAga2V5cy5BcnJvd1JpZ2h0LnByZXNzZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICBrZXlzLkFycm93TGVmdC5wcmVzc2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgIGtleXMuQXJyb3dVcC5wcmVzc2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG4gICAgXG59KSJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwicGxheWVyIiwieCIsInkiLCJrZXlzIiwiQXJyb3dSaWdodCIsInByZXNzZWQiLCJBcnJvd0xlZnQiLCJBcnJvd1VwIiwiYW5pbWF0ZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidXBkYXRlIiwidmVsb2NpdHkiLCJqdW1wIiwiZSIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst CONSTANTS = {\n  gravity: 0.4\n};\nclass Player {\n  constructor(position, canvas, ctx) {\n    this.position = position;\n    this.velocity = {\n      x: 0,\n      y: 1\n    };\n    this.width = 50;\n    this.height = 50;\n    this.isJumping = false;\n    this.canvas = canvas;\n    this.ctx = ctx;\n  }\n  draw() {\n    this.ctx.fillStyle = 'red';\n    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n  update() {\n    this.draw();\n\n    // this.position.x += this.velocity.x\n    if (this.position.x + this.velocity.x >= 0 && this.position.x + this.velocity.x + this.width <= this.canvas.width) {\n      this.position.x += this.velocity.x;\n    }\n    this.position.y += this.velocity.y;\n    if (this.position.y + this.height + this.velocity.y < this.canvas.height) {\n      this.velocity.y += CONSTANTS.gravity;\n    } else {\n      this.velocity.y = 0;\n      this.isJumping = false;\n    }\n  }\n  jump() {\n    if (!this.isJumping) {\n      this.velocity.y = -10;\n      this.isJumping = true;\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFNBQVMsR0FBRztFQUNkQyxPQUFPLEVBQUU7QUFDYixDQUFDO0FBRUQsTUFBTUMsTUFBTSxDQUFDO0VBRVRDLFdBQVdBLENBQUNDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsSUFBSSxDQUFDRixRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDRyxRQUFRLEdBQUc7TUFDWkMsQ0FBQyxFQUFFLENBQUM7TUFDSkMsQ0FBQyxFQUFFO0lBQ1AsQ0FBQztJQUNELElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO0lBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEtBQUs7SUFDdEIsSUFBSSxDQUFDUCxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7RUFDbEI7RUFFQU8sSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsSUFBSSxDQUFDUCxHQUFHLENBQUNRLFNBQVMsR0FBRyxLQUFLO0lBQzFCLElBQUksQ0FBQ1IsR0FBRyxDQUFDUyxRQUFRLENBQUMsSUFBSSxDQUFDWCxRQUFRLENBQUNJLENBQUMsRUFBRSxJQUFJLENBQUNKLFFBQVEsQ0FBQ0ssQ0FBQyxFQUFFLElBQUksQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0VBQ2hGO0VBRUFLLE1BQU1BLENBQUEsRUFBRztJQUNMLElBQUksQ0FBQ0gsSUFBSSxDQUFDLENBQUM7O0lBRVg7SUFDQSxJQUFJLElBQUksQ0FBQ1QsUUFBUSxDQUFDSSxDQUFDLEdBQUcsSUFBSSxDQUFDRCxRQUFRLENBQUNDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDSixRQUFRLENBQUNJLENBQUMsR0FBRyxJQUFJLENBQUNELFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLElBQUksQ0FBQ0UsS0FBSyxJQUFJLElBQUksQ0FBQ0wsTUFBTSxDQUFDSyxLQUFLLEVBQUU7TUFDL0csSUFBSSxDQUFDTixRQUFRLENBQUNJLENBQUMsSUFBSSxJQUFJLENBQUNELFFBQVEsQ0FBQ0MsQ0FBQztJQUNwQztJQUdGLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxDQUFDLElBQUksSUFBSSxDQUFDRixRQUFRLENBQUNFLENBQUM7SUFDbEMsSUFBSSxJQUFJLENBQUNMLFFBQVEsQ0FBQ0ssQ0FBQyxHQUFHLElBQUksQ0FBQ0UsTUFBTSxHQUFHLElBQUksQ0FBQ0osUUFBUSxDQUFDRSxDQUFDLEdBQUcsSUFBSSxDQUFDSixNQUFNLENBQUNNLE1BQU0sRUFDcEU7TUFBQyxJQUFJLENBQUNKLFFBQVEsQ0FBQ0UsQ0FBQyxJQUFJVCxTQUFTLENBQUNDLE9BQU87SUFBQSxDQUFDLE1BRXRDO01BQUMsSUFBSSxDQUFDTSxRQUFRLENBQUNFLENBQUMsR0FBRyxDQUFDO01BQUUsSUFBSSxDQUFDRyxTQUFTLEdBQUcsS0FBSztJQUFBO0VBQ3BEO0VBRUFLLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQyxJQUFJLENBQUNMLFNBQVMsRUFBRTtNQUNqQixJQUFJLENBQUNMLFFBQVEsQ0FBQ0UsQ0FBQyxHQUFHLENBQUMsRUFBRTtNQUNyQixJQUFJLENBQUNHLFNBQVMsR0FBRyxJQUFJO0lBQ3pCO0VBQ0o7QUFDSjtBQUVBLCtEQUFlVixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5rLWdhbWUvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT05TVEFOVFMgPSB7XG4gICAgZ3Jhdml0eTogMC40LFxufVxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAxXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53aWR0aCA9IDUwXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNTBcbiAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZWQnXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5LnhcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMudmVsb2NpdHkueCA+PSAwICYmIHRoaXMucG9zaXRpb24ueCArIHRoaXMudmVsb2NpdHkueCArIHRoaXMud2lkdGggPD0gdGhpcy5jYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCArIHRoaXMudmVsb2NpdHkueSA8IHRoaXMuY2FudmFzLmhlaWdodClcbiAgICAgICAgICAgIHt0aGlzLnZlbG9jaXR5LnkgKz0gQ09OU1RBTlRTLmdyYXZpdHl9XG4gICAgICAgIGVsc2UgXG4gICAgICAgICAgICB7dGhpcy52ZWxvY2l0eS55ID0gMDsgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZX1cbiAgICB9XG5cbiAgICBqdW1wKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtMTBcbiAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7Il0sIm5hbWVzIjpbIkNPTlNUQU5UUyIsImdyYXZpdHkiLCJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsInBvc2l0aW9uIiwiY2FudmFzIiwiY3R4IiwidmVsb2NpdHkiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiaXNKdW1waW5nIiwiZHJhdyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidXBkYXRlIiwianVtcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmstZ2FtZS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;