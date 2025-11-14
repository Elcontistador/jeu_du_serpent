/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apple.js":
/*!**********************!*\
  !*** ./src/apple.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Apple)\n/* harmony export */ });\nclass Apple {\r\n    constructor(position = [10,10]) {\r\n        this.position = position;\r\n    }\r\n    \r\n\r\n    setNewPosition (widthInBlocks, heightInBlocks) {\r\n        const nexX = Math.round(Math.random() * (widthInBlocks-1)); /* Math.round = arrondi en nombre entier */ /* Math.random = nombre aléatoire */\r\n        const nexY = Math.round(Math.random() * (heightInBlocks-1));\r\n        this.position=[nexX, nexY];\r\n    };\r\n    isOnSnake (snakeToCheck) {\r\n        let isOnSnake = false;\r\n        for(let block of snakeToCheck.body) {\r\n            if(this.position[0] === block[0] && this.position[1] === block[1]) {\r\n                isOnSnake = true;\r\n            }\r\n        }\r\n        return isOnSnake;\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://jeu-serpent/./src/apple.js?\n}");

/***/ }),

/***/ "./src/drawing.js":
/*!************************!*\
  !*** ./src/drawing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Drawing)\n/* harmony export */ });\nclass Drawing {\r\n\r\n    static gameOver (ctx, centreX, centreY, blockSize) {\r\n        ctx.save();\r\n        ctx.font = \"bold \" + (blockSize * 2) + \"px sans-serif\"; // Taille de police dynamique\r\n        ctx.fillStyle = \"#000\";\r\n        ctx.textAlign = \"center\"; // Correction\r\n        ctx.textBaseline = \"middle\";\r\n        ctx.strokeStyle = \"white\";\r\n        ctx.lineWidth = 5;\r\n        ctx.strokeText(\"GAME OVER\", centreX, centreY - (blockSize * 3));\r\n        ctx.fillText(\"GAME OVER\", centreX, centreY - (blockSize * 3));\r\n        ctx.font = \"bold \" + (blockSize) + \"px sans-serif\"; // Taille de police dynamique\r\n        ctx.strokeText(\"Appuyer sur la touche 'espace' pour rejouer\", centreX, centreY - (blockSize * 1.5));\r\n        ctx.fillText(\"Appuyer sur la touche 'espace' pour rejouer\", centreX, centreY - (blockSize * 1.5));\r\n        ctx.restore();\r\n    }\r\n\r\n    static drawScore (ctx, score, centreX, centreY, blockSize) {\r\n        ctx.save();\r\n        ctx.font = \"bold \" + (blockSize * 6) + \"px sans-serif\"; // Taille de police dynamique\r\n        ctx.fillStyle = \"rgba(128, 128, 128, 0.3)\";\r\n        ctx.textAlign = \"center\"; // Correction\r\n        ctx.textBaseline = \"middle\";\r\n        ctx.fillText(score.toString(), centreX, centreY);\r\n        ctx.restore();\r\n    }\r\n\r\n    static drawSnake (ctx, snake, blockSize) {\r\n        ctx.save();\r\n        ctx.fillStyle=\"#ff0000\";\r\n        for (let block of snake.body) {\r\n            this.drawBlock(ctx, block, blockSize);\r\n        }\r\n        ctx.restore()\r\n    }\r\n\r\n    static drawApple (ctx, blockSize, apple) {\r\n        const radius = blockSize / 2; /* rayon du cercle */\r\n        const x = apple.position[0]*blockSize + radius;\r\n        const y = apple.position[1]*blockSize + radius;\r\n        ctx.save();\r\n        ctx.fillStyle = \"#33cc33\";\r\n        ctx.beginPath();\r\n        ctx.arc(x,y, radius, 0, Math.PI*2, true);\r\n        ctx.fill();\r\n        ctx.restore();\r\n    };\r\n\r\n    static drawBlock (ctx, position, blockSize) {\r\n        const [x,y] = position;\r\n        ctx.fillRect(x * blockSize, y * blockSize, blockSize,blockSize) /* x décalage largeur y décalage hauteur blocksize largeur blocksize hauteur */\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://jeu-serpent/./src/drawing.js?\n}");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake.js */ \"./src/snake.js\");\n/* harmony import */ var _apple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apple.js */ \"./src/apple.js\");\n/* harmony import */ var _drawing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawing.js */ \"./src/drawing.js\");\n\r\n\r\n\r\n\r\nclass Game {\r\n\r\n    constructor(canvasWidth = window.innerWidth * 0.8, canvasHeight= window.innerHeight * 0.8) {\r\n        this.canvas = document.createElement('canvas');\r\n        this.ctx = this.canvas.getContext('2d');\r\n        this.canvasWidth = canvasWidth; \r\n        this.canvasHeight = canvasHeight; \r\n        this.blockSize = Math.min(this.canvasWidth / 60, this.canvasHeight / 30); /* Calculer la taille des blocs de manière dynamique */\r\n        this.widthInBlocks = Math.floor(this.canvasWidth /this.blockSize);\r\n        this.heightInBlocks = Math.floor(this.canvasHeight / this.blockSize);\r\n        this.centreX = this.canvasWidth / 2;\r\n        this.centreY = this.canvasHeight / 2;\r\n\r\n        this.delay = 300;\r\n        this.snakee;\r\n        this.applee;\r\n        this.score;\r\n        this.timeout;\r\n\r\n        /* Déclare le canvas ici pour qu'il ne soit pas recréé */\r\n        this.canvas.style.margin = \"auto\";\r\n        this.canvas.style.display =\"block\";\r\n        this.canvas.style.backgroundColor = \"#ddd\"\r\n        document.body.appendChild(this.canvas);\r\n\r\n        window.addEventListener('resize', this.handleResize.bind(this));\r\n    }\r\n\r\n    handleResize() {\r\n        // 1. Annuler le timeout pour stopper le jeu en cours\r\n        clearTimeout(this.timeout);\r\n\r\n        // 2. Mettre à jour les propriétés de l'instance\r\n        this.canvasWidth = window.innerWidth * 0.8;\r\n        this.canvasHeight = window.innerHeight * 0.8;\r\n        // Recalculer les dimensions du bloc, car elles dépendent de la largeur/hauteur\r\n        this.blockSize = Math.min(this.canvasWidth / 60, this.canvasHeight / 30); \r\n        this.widthInBlocks = Math.floor(this.canvasWidth / this.blockSize);\r\n        this.heightInBlocks = Math.floor(this.canvasHeight / this.blockSize);\r\n        this.centreX = this.canvasWidth / 2;\r\n        this.centreY = this.canvasHeight / 2;\r\n\r\n        // 3. Appeler init() pour réinitialiser le canvas et redémarrer le jeu.\r\n        // init() doit se charger de mettre à jour canvas.width, canvas.height et le style.\r\n        this.init();\r\n}\r\n\r\n\r\n    init () {\r\n        /* Mettre à jour les dimensions du canvas et le style de la bordure */\r\n        this.canvas.width = this.canvasWidth;\r\n        this.canvas.height = this.canvasHeight;\r\n        this.canvas.style.border = (this.blockSize/2) + \"px solid gray\"; \r\n\r\n        /* Réinitialiser le jeu */\r\n        this.snakee = new _snake_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( \"right\", [6,4], [5,4], [4,4], [3,4], [2,4]);\r\n        this.applee = new _apple_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ();\r\n        this.score = 0;\r\n\r\n        do {\r\n            this.applee.setNewPosition(this.widthInBlocks, this.heightInBlocks); \r\n        }\r\n        while(this.applee.isOnSnake(this.snakee));\r\n\r\n        this.refreshCanvas();\r\n    }\r\n\r\n    refreshCanvas () {\r\n        this.snakee.advance();\r\n\r\n        if(this.snakee.checkCollision(this.widthInBlocks, this.heightInBlocks)){\r\n            _drawing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gameOver(this.ctx, this.centreX, this.centreY, this.blockSize);\r\n        }\r\n        else {\r\n            if(this.snakee.isEatingApple(this.applee)) {\r\n                this.score++;\r\n                this.snakee.ateApple = true;\r\n                do {\r\n                    this.applee.setNewPosition(this.widthInBlocks, this.heightInBlocks); \r\n                }\r\n            while(this.applee.isOnSnake(this.snakee));\r\n            \r\n            if(this.score % 5 == 0){\r\n                    this.speedUp();\r\n                }\r\n            }\r\n\r\n            this.ctx.clearRect(0,0,this.canvasWidth, this.canvasHeight);\r\n            _drawing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawScore(this.ctx, this.score, this.centreX, this.centreY, this.blockSize);\r\n            _drawing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawSnake(this.ctx, this.snakee, this.blockSize);\r\n            _drawing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawApple(this.ctx, this.blockSize, this.applee);\r\n            this.timeout = setTimeout(this.refreshCanvas.bind(this),this.delay);\r\n        }\r\n    }\r\n\r\n    speedUp () {\r\n        this.delay /= 2;\r\n    }\r\n\r\n    restart () {\r\n        clearTimeout(this.timeout);\r\n        this.init(); // Appeler init() pour réinitialiser le jeu\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://jeu-serpent/./src/game.js?\n}");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\r\n\r\nwindow.onload = () => {\r\n\r\n    let myGame = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    myGame.init();\r\n   \r\n    document.onkeydown = (e) => {\r\n        const key = e.key;\r\n        let newDirection;\r\n        switch (key) {\r\n            case 'ArrowLeft':\r\n            // Gérer la flèche gauche\r\n                newDirection = \"left\";\r\n                break;\r\n            case 'ArrowUp':\r\n            // Gérer la flèche haut\r\n                newDirection = \"up\";\r\n                break;\r\n            case 'ArrowRight':\r\n            // Gérer la flèche droite\r\n                newDirection = \"right\";\r\n                break;\r\n            case 'ArrowDown':\r\n            // Gérer la flèche bas\r\n                newDirection = \"down\";\r\n                break;\r\n            case ' ' :\r\n                myGame.restart();\r\n                return;\r\n            default:\r\n                return;\r\n        }\r\n        myGame.snakee.setDirection(newDirection);\r\n    };\r\n\r\n}\n\n//# sourceURL=webpack://jeu-serpent/./src/script.js?\n}");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Snake)\n/* harmony export */ });\nclass Snake {\r\n    constructor (direction, ...body) {\r\n    this.body = body;\r\n    this.direction = direction;\r\n    this.ateApple = false;\r\n    }\r\n\r\n    advance () {\r\n        const nextPosition = this.body[0].slice(); /* copie l'élément 1 du tableau */\r\n        switch(this.direction) {\r\n            case \"left\":\r\n                nextPosition[0] -=1;                    \r\n                break;\r\n            case \"right\":\r\n                nextPosition[0] +=1;\r\n                break;\r\n            case \"down\":\r\n                nextPosition[1] +=1;                    \r\n                break;\r\n            case \"up\":\r\n                nextPosition[1] -=1;                      \r\n                break;\r\n            default:\r\n                throw(\"Direction invalide\");\r\n        }\r\n\r\n        this.body.unshift(nextPosition); /* ajoute le nextposition à la 1ere position */\r\n        if(!this.ateApple) {\r\n        this.body.pop(); /* supprime le dernier élément du tableau */\r\n        }\r\n        else {\r\n            this.ateApple = false;\r\n        }\r\n    };\r\n\r\n    setDirection (newDirection) {\r\n        let allowedDirection;\r\n        switch(this.direction) {\r\n            case \"left\":             \r\n            case \"right\":\r\n                allowedDirection = [\"up\",\"down\"];\r\n                break;\r\n            case \"down\":\r\n            case \"up\":\r\n                allowedDirection =[\"left\",\"right\"];                      \r\n                break;\r\n                default:\r\n                throw(\"Direction invalide\");\r\n        }\r\n        if (allowedDirection.includes(newDirection)) {\r\n            this.direction = newDirection;\r\n        }\r\n        };\r\n\r\n    checkCollision (widthInBlocks, heightInBlocks) {\r\n        let wallCollision = false;\r\n        let snakeCollision = false;\r\n        const [head, ...rest] = this.body; /* head = 1er élément du tableau rest = le reste du tableau */\r\n        const [snakeX, snakeY] = head;\r\n        const minX = 0;\r\n        const minY = 0;\r\n        const maxX = widthInBlocks - 1;\r\n        const maxY = heightInBlocks - 1;\r\n        const isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX;\r\n        const isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY;\r\n\r\n        if(isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls) {\r\n            wallCollision = true;\r\n        }\r\n\r\n        for(let block of rest) {\r\n            if(snakeX === block[0] && snakeY === block[1]) {\r\n                snakeCollision = true;\r\n            }\r\n        }\r\n\r\n        return wallCollision || snakeCollision;\r\n\r\n        };\r\n\r\n    isEatingApple (appleToEat) {\r\n            const head = this.body[0];\r\n            if(head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1]) {\r\n                return true;\r\n            }\r\n            else {\r\n                return false;\r\n            }                   \r\n        };\r\n}\n\n//# sourceURL=webpack://jeu-serpent/./src/snake.js?\n}");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;