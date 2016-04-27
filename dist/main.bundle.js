/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(1);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _stats = __webpack_require__(2);\n\nvar _stats2 = _interopRequireDefault(_stats);\n\nvar _snake = __webpack_require__(4);\n\nvar _snake2 = _interopRequireDefault(_snake);\n\nvar _frame = __webpack_require__(6);\n\nvar _frame2 = _interopRequireDefault(_frame);\n\nvar _map = __webpack_require__(7);\n\nvar _map2 = _interopRequireDefault(_map);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Created by wanghx on 4/23/16.\n *\n * main\n *\n */\n\nvar RAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {\n  window.setTimeout(callback, 1000 / 60);\n};\n\nvar canvas = document.getElementById('cas');\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\n\n// fps状态\nvar stats = new _stats2.default();\nstats.setMode(0);\nstats.domElement.style.position = 'absolute';\nstats.domElement.style.right = '0px';\nstats.domElement.style.top = '0px';\ndocument.body.appendChild(stats.domElement);\n\n// 初始化地图对象\n_map2.default.init({\n  canvas: canvas,\n  width: 3000,\n  height: 3000\n});\n\n// 初始化视窗对象\n_frame2.default.init({\n  x: 1000,\n  y: 1000,\n  width: canvas.width,\n  height: canvas.height\n});\n\n// 创建蛇类对象\nvar snake = new _snake2.default({\n  x: _frame2.default.x + _frame2.default.width / 2,\n  y: _frame2.default.y + _frame2.default.height / 2,\n  size: 80,\n  length: 60,\n  color: '#fff'\n});\n\n// 动画逻辑\nvar time = new Date(),\n    timeout = 0;\nfunction animate() {\n  var ntime = new Date();\n\n  if (ntime - time > timeout) {\n    _map2.default.clear();\n\n    // 让视窗跟随蛇的位置更改而更改\n    _frame2.default.track(snake);\n\n    _map2.default.render();\n\n    snake.render();\n\n    time = ntime;\n  }\n\n  stats.update();\n\n  RAF(animate);\n}\n\n/**\n * 事件绑定\n */\nfunction binds() {\n  window.onmousemove = function (e) {\n    e = e || window.event;\n\n    snake.moveTo(_frame2.default.x + e.clientX, _frame2.default.y + e.clientY);\n  };\n\n  window.onmousedown = function () {\n    snake.speedUp();\n  };\n\n  window.onmouseup = function () {\n    snake.speedDown();\n  };\n}\n\nbinds();\nanimate();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/main.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/main.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {\"use strict\";\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\n// stats.js - http://github.com/mrdoob/stats.js\nvar Stats = function Stats() {\n  function f(a, e, b) {\n    a = document.createElement(a);a.id = e;a.style.cssText = b;return a;\n  }function l(a, e, b) {\n    var c = f(\"div\", a, \"padding:0 0 3px 3px;text-align:left;background:\" + b),\n        d = f(\"div\", a + \"Text\", \"font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:\" + e);d.innerHTML = a.toUpperCase();c.appendChild(d);a = f(\"div\", a + \"Graph\", \"width:74px;height:30px;background:\" + e);c.appendChild(a);for (e = 0; 74 > e; e++) {\n      a.appendChild(f(\"span\", \"\", \"width:1px;height:30px;float:left;opacity:0.9;background:\" + b));\n    }return c;\n  }function m(a) {\n    for (var b = c.children, d = 0; d < b.length; d++) {\n      b[d].style.display = d === a ? \"block\" : \"none\";\n    }n = a;\n  }function p(a, b) {\n    a.appendChild(a.firstChild).style.height = Math.min(30, 30 - 30 * b) + \"px\";\n  }var q = self.performance && self.performance.now ? self.performance.now.bind(performance) : Date.now,\n      k = q(),\n      r = k,\n      t = 0,\n      n = 0,\n      c = f(\"div\", \"stats\", \"width:80px;opacity:0.9;cursor:pointer\");c.addEventListener(\"mousedown\", function (a) {\n    a.preventDefault();m(++n % c.children.length);\n  }, !1);var d = 0,\n      u = Infinity,\n      v = 0,\n      b = l(\"fps\", \"#0ff\", \"#002\"),\n      A = b.children[0],\n      B = b.children[1];c.appendChild(b);var g = 0,\n      w = Infinity,\n      x = 0,\n      b = l(\"ms\", \"#0f0\", \"#020\"),\n      C = b.children[0],\n      D = b.children[1];c.appendChild(b);if (self.performance && self.performance.memory) {\n    var h = 0,\n        y = Infinity,\n        z = 0,\n        b = l(\"mb\", \"#f08\", \"#201\"),\n        E = b.children[0],\n        F = b.children[1];c.appendChild(b);\n  }m(n);return { REVISION: 14, domElement: c, setMode: m, begin: function begin() {\n      k = q();\n    }, end: function end() {\n      var a = q();g = a - k;w = Math.min(w, g);x = Math.max(x, g);C.textContent = (g | 0) + \" MS (\" + (w | 0) + \"-\" + (x | 0) + \")\";p(D, g / 200);t++;if (a > r + 1E3 && (d = Math.round(1E3 * t / (a - r)), u = Math.min(u, d), v = Math.max(v, d), A.textContent = d + \" FPS (\" + u + \"-\" + v + \")\", p(B, d / 100), r = a, t = 0, void 0 !== h)) {\n        var b = performance.memory.usedJSHeapSize,\n            c = performance.memory.jsHeapSizeLimit;h = Math.round(9.54E-7 * b);y = Math.min(y, h);z = Math.max(z, h);E.textContent = h + \" MB (\" + y + \"-\" + z + \")\";p(F, b / c);\n      }return a;\n    }, update: function update() {\n      k = this.end();\n    } };\n};\"object\" === ( false ? \"undefined\" : _typeof(module)) && (module.exports = Stats);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/third/stats.min.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/third/stats.min.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = function(module) {\r\n\tif(!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tmodule.children = [];\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n}\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** (webpack)/buildin/module.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("/**\n * Created by wanghx on 4/23/16.\n *\n * snake\n *\n */\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _base = __webpack_require__(5);\n\nvar _base2 = _interopRequireDefault(_base);\n\nvar _map = __webpack_require__(7);\n\nvar _map2 = _interopRequireDefault(_map);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar BASE_ANGLE = Math.PI * 200; // 用于保证蛇的角度一直都是正数\n\n// 蛇头和蛇身的基类\n\nvar SnakeBase = function (_Base) {\n  _inherits(SnakeBase, _Base);\n\n  function SnakeBase(options) {\n    _classCallCheck(this, SnakeBase);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SnakeBase).call(this, options));\n\n    _this.speed = options.speed;\n    _this.aims = [];\n\n    // 皮肤颜色\n    _this.color_1 = options.color;\n    // 描边颜色\n    _this.color_2 = '#000';\n\n    // 垂直和水平速度\n    _this.vx = 0;\n    _this.vy = 0;\n\n    // 目标地址\n    _this.tox = _this.x;\n    _this.toy = _this.y;\n\n    // 生成元素图片镜像\n    _this.createImage();\n    return _this;\n  }\n\n  // 设置基类的速度\n\n\n  _createClass(SnakeBase, [{\n    key: 'createImage',\n\n\n    /**\n     * 生成图片镜像\n     */\n    value: function createImage() {\n      this.img = document.createElement('canvas');\n      this.img.width = this.width + 10;\n      this.img.height = this.height + 10;\n      this.imgctx = this.img.getContext('2d');\n\n      this.imgctx.lineWidth = 2;\n      this.imgctx.save();\n      this.imgctx.beginPath();\n      this.imgctx.arc(this.img.width / 2, this.img.height / 2, this.width / 2, 0, Math.PI * 2);\n      this.imgctx.fillStyle = this.color_1;\n      this.imgctx.strokeStyle = this.color_2;\n      this.imgctx.stroke();\n      this.imgctx.fill();\n      this.imgctx.restore();\n    }\n\n    /**\n     * 给予目标点, 计算速度\n     * @param x\n     * @param y\n     */\n\n  }, {\n    key: 'velocity',\n    value: function velocity(x, y) {\n      this.tox = x;\n      this.toy = y;\n\n      var dis_x = this.tox - this.x;\n      var dis_y = this.toy - this.y;\n      var dis = Math.hypot(dis_x, dis_y);\n\n      this.vy = dis_y * (this.speed / dis) || 0;\n      this.vx = dis_x * (this.speed / dis) || 0;\n    }\n\n    /**\n     * 更新位置\n     */\n\n  }, {\n    key: 'update',\n    value: function update() {\n      this.x += this.vx;\n      this.y += this.vy;\n    }\n\n    /**\n     * 渲染镜像图片\n     */\n\n  }, {\n    key: 'render',\n    value: function render() {\n      // 如果该元素在视窗内不可见, 则不进行绘制\n      if (!this.visible) return;\n\n      // 如果该对象有角度属性, 则使用translate来绘制, 因为要旋转\n      if (this.hasOwnProperty('angle')) {\n        _map2.default.ctx.save();\n        _map2.default.ctx.translate(this.paintX, this.paintY);\n        _map2.default.ctx.rotate(this.angle - BASE_ANGLE - Math.PI / 2);\n        _map2.default.ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2);\n        _map2.default.ctx.restore();\n      } else {\n        _map2.default.ctx.drawImage(this.img, this.paintX - this.img.width / 2, this.paintY - this.img.height / 2);\n      }\n    }\n  }, {\n    key: 'speed',\n    set: function set(val) {\n      var a = val - this._speed;\n      var b = Math.abs(this.vx) + Math.abs(this.vy);\n\n      this._speed = val;\n\n      if (!a) return;\n\n      // 更新速度\n      this.vx += a * this.vx / b;\n      this.vy += a * this.vy / b;\n    },\n    get: function get() {\n      return this._speed;\n    }\n  }]);\n\n  return SnakeBase;\n}(_base2.default);\n\n// 蛇的身躯类\n\n\nvar Body = function (_SnakeBase) {\n  _inherits(Body, _SnakeBase);\n\n  function Body(options) {\n    _classCallCheck(this, Body);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Body).call(this, options));\n  }\n\n  // 身躯跟头部的运动轨迹不同, 身躯要走完当前目标后才进入下一个目标\n\n\n  _createClass(Body, [{\n    key: 'moveTo',\n    value: function moveTo(x, y) {\n      this.aims.push({ x: x, y: y });\n\n      if (this.tox == this.x && this.toy == this.y) {\n        var naim = this.aims.shift();\n        this.velocity(naim.x, naim.y);\n      }\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      _get(Object.getPrototypeOf(Body.prototype), 'update', this).call(this);\n\n      // 到达目的地设置x为目标x\n      if (Math.abs(this.tox - this.x) <= this.speed) {\n        this.x = this.tox;\n      }\n\n      // 到达目的地设置y为目标y\n      if (Math.abs(this.toy - this.y) <= this.speed) {\n        this.y = this.toy;\n      }\n    }\n  }]);\n\n  return Body;\n}(SnakeBase);\n\n// 蛇头类\n\n\nvar Header = function (_SnakeBase2) {\n  _inherits(Header, _SnakeBase2);\n\n  function Header(options) {\n    _classCallCheck(this, Header);\n\n    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, options));\n\n    _this3.vx = _this3.speed;\n    _this3.angle = BASE_ANGLE + Math.PI / 2;\n    _this3.toa = _this3.angle;\n    return _this3;\n  }\n\n  /**\n   * 添加画眼睛的功能\n   */\n\n\n  _createClass(Header, [{\n    key: 'createImage',\n    value: function createImage() {\n      _get(Object.getPrototypeOf(Header.prototype), 'createImage', this).call(this);\n      var self = this;\n      var eye_r = this.width * 0.2;\n\n      // 画左眼\n      drawEye(this.img.width / 2 + this.width / 2 - eye_r, this.img.height / 2 - this.height / 2 + eye_r);\n\n      // 画右眼\n      drawEye(this.img.width / 2 + this.width / 2 - eye_r, this.img.height / 2 + this.height / 2 - eye_r);\n\n      function drawEye(eye_x, eye_y) {\n        self.imgctx.beginPath();\n        self.imgctx.fillStyle = '#fff';\n        self.imgctx.strokeStyle = self.color_2;\n        self.imgctx.arc(eye_x, eye_y, eye_r, 0, Math.PI * 2);\n        self.imgctx.fill();\n        self.imgctx.stroke();\n\n        self.imgctx.beginPath();\n        self.imgctx.fillStyle = '#000';\n        self.imgctx.arc(eye_x + eye_r / 2, eye_y, 3, 0, Math.PI * 2);\n        self.imgctx.fill();\n      }\n    }\n\n    /**\n     * 这里不进行真正的移动, 而是计算移动位置与目前位置的补间位置, 目的是为了让蛇的转弯不那么突兀\n     */\n\n  }, {\n    key: 'moveTo',\n    value: function moveTo(x, y) {\n      if (!this.aims.length) return this.aims.push({ x: x, y: y });\n\n      var olderAim = this.aims[this.aims.length - 1];\n      var dis_x = x - olderAim.x;\n      var dis_y = y - olderAim.y;\n      var dis = Math.hypot(dis_x, dis_y);\n      var min = 20;\n\n      if (dis > min) {\n        var part = ~ ~(dis / min);\n        for (var i = 1; i <= part; i++) {\n          // 记录的目标点不超过20个\n          if (this.aims.length > 30) this.aims.shift();\n\n          this.aims.push({\n            x: olderAim.x + dis_x * i / part,\n            y: olderAim.y + dis_y * i / part\n          });\n        }\n      } else {\n        this.aims[this.aims.length - 1] = { x: x, y: y };\n      }\n    }\n\n    /**\n     * 增加蛇头的逐帧逻辑\n     */\n\n  }, {\n    key: 'update',\n    value: function update() {\n      var time = new Date();\n\n      // 每隔一段时间获取一次目标位置集合中的数据, 进行移动\n      if ((!this.time || time - this.time > 30) && this.aims.length) {\n        var aim = this.aims.shift();\n\n        // 计算蛇头速度, 让蛇头朝目标移动\n        this.velocity(aim.x, aim.y);\n\n        // 根据新的目标位置, 更新toa\n        this.turnTo();\n\n        this.time = time;\n      }\n\n      // 让蛇转头\n      this.turnAround();\n\n      _get(Object.getPrototypeOf(Header.prototype), 'update', this).call(this);\n\n      // 不让蛇走出边界\n      var whalf = this.width / 2;\n      if (this.x < whalf) {\n        this.x = whalf;\n      } else if (this.x + whalf > _map2.default.width) {\n        this.x = _map2.default.width - whalf;\n      }\n\n      var hhalf = this.height / 2;\n      if (this.y < hhalf) {\n        this.y = hhalf;\n      } else if (this.y + hhalf > _map2.default.height) {\n        this.y = _map2.default.height - hhalf;\n      }\n    }\n\n    /**\n     * 根据蛇的目的地, 调整蛇头的目标角度\n     */\n\n  }, {\n    key: 'turnTo',\n    value: function turnTo() {\n      var olda = Math.abs(this.toa % (Math.PI * 2)); // 老的目标角度, 但是是小于360度的, 因为每次计算出来的目标角度也是0 - 360度\n      var rounds = ~ ~(this.toa / (Math.PI * 2)); // 转了多少圈\n      this.toa = Math.atan(this.vy / this.vx) + (this.vx < 0 ? Math.PI : 0) + Math.PI / 2; // 目标角度\n\n      if (olda >= Math.PI * 3 / 2 && this.toa <= Math.PI / 2) {\n        // 角度从第一象限左划至第四象限, 增加圈数\n        rounds++;\n      } else if (olda <= Math.PI / 2 && this.toa >= Math.PI * 3 / 2) {\n        // 角度从第四象限划至第一象限, 减少圈数\n        rounds--;\n      }\n\n      // 计算真实要转到的角度\n      this.toa += rounds * Math.PI * 2;\n    }\n\n    /**\n     * 让蛇头转角更加平滑, 渐增转头\n     */\n\n  }, {\n    key: 'turnAround',\n    value: function turnAround() {\n      var angle_dis = this.toa - this.angle;\n\n      if (angle_dis) {\n        this.angle += angle_dis * 0.2;\n\n        // 当转到目标角度, 重置蛇头角度\n        if (Math.abs(angle_dis) <= 0.01) {\n          this.toa = this.angle = BASE_ANGLE + this.toa % (Math.PI * 2);\n        }\n      }\n    }\n  }]);\n\n  return Header;\n}(SnakeBase);\n\n/**\n * 蛇类\n */\n\n\nvar Snake = function () {\n  function Snake(options) {\n    _classCallCheck(this, Snake);\n\n    options.speed = 3;\n\n    this.length = options.length; // 蛇的长度\n\n    // 创建脑袋\n    this.header = new Header(options);\n\n    // 创建身躯\n    this.bodys = [];\n    this.body_dis = this.header.width * 0.3;\n    for (var i = 0; i < this.length; i++) {\n      options.x -= this.body_dis;\n\n      this.bodys.push(new Body(options));\n    }\n  }\n\n  _createClass(Snake, [{\n    key: 'speedUp',\n\n\n    // 加速\n    value: function speedUp() {\n      var _this4 = this;\n\n      this.speedRecord = this.header.speed;\n      this.header.speed = 5;\n      this.bodys.forEach(function (b) {\n        return b.speed = _this4.header.speed;\n      });\n    }\n\n    // 减速\n\n  }, {\n    key: 'speedDown',\n    value: function speedDown() {\n      var _this5 = this;\n\n      this.header.speed = this.speedRecord;\n      this.bodys.forEach(function (b) {\n        return b.speed = _this5.header.speed;\n      });\n    }\n\n    /**\n     * 蛇的移动就是头部的移动\n     */\n\n  }, {\n    key: 'moveTo',\n    value: function moveTo(x, y) {\n      this.header.moveTo(x, y);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      // 蛇的身躯沿着蛇头的运动轨迹运动\n      for (var i = this.bodys.length - 1; i >= 0; i--) {\n        var body = this.bodys[i];\n        var front = this.bodys[i - 1] || this.header;\n\n        body.moveTo(front.x, front.y);\n        body.update();\n\n        //let dis_x = front.x - body.x;\n        //let dis_y = front.y - body.y;\n        //let dis = Math.hypot(dis_x, dis_y);\n        //let radio = (dis - this.body_dis) / dis;\n        //body.x += dis_x * radio;\n        //body.y += dis_y * radio;\n\n        body.render();\n      }\n\n      this.header.update();\n      this.header.render();\n    }\n  }, {\n    key: 'x',\n    get: function get() {\n      return this.header.x;\n    }\n  }, {\n    key: 'y',\n    get: function get() {\n      return this.header.y;\n    }\n  }]);\n\n  return Snake;\n}();\n\nexports.default = Snake;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/lib/snake.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/lib/snake.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("/**\n * Created by wanghx on 4/27/16.\n *\n * base    地图上的元素基础类, 默认为圆\n *\n * 基础属性:\n *  - x       元素的中心点x坐标\n *  - y       元素的中心店y坐标\n *  - width   元素宽度\n *  - height  元素高度\n *  - paintX  元素的绘制坐标,\n *  - paintY  元素的绘制坐标\n *  - visible 元素是否在视窗内可见\n *\n */\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _frame = __webpack_require__(6);\n\nvar _frame2 = _interopRequireDefault(_frame);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Base = function () {\n  function Base(options) {\n    _classCallCheck(this, Base);\n\n    this.x = options.x;\n    this.y = options.y;\n    this.width = options.size || options.width;\n    this.height = options.size || options.height;\n  }\n\n  /**\n   * 绘制时的x坐标, 要根据视窗来计算位置\n   * @returns {number}\n   */\n\n\n  _createClass(Base, [{\n    key: 'paintX',\n    get: function get() {\n      return this.x - _frame2.default.x;\n    }\n\n    /**\n     * 绘制时的y坐标, 要根据视窗来计算位置\n     * @returns {number}\n     */\n\n  }, {\n    key: 'paintY',\n    get: function get() {\n      return this.y - _frame2.default.y;\n    }\n\n    /**\n     * 在视窗内是否可见\n     * @returns {boolean}\n     */\n\n  }, {\n    key: 'visible',\n    get: function get() {\n      var paintX = this.paintX;\n      var paintY = this.paintY;\n      var halfWidth = this.width / 2;\n      var halfHeight = this.height / 2;\n\n      return paintX + halfWidth > 0 && paintX - halfWidth < _frame2.default.width && paintY + halfHeight > 0 && paintY - halfHeight < _frame2.default.height;\n    }\n  }]);\n\n  return Base;\n}();\n\nexports.default = Base;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/lib/base.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/lib/base.js?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("/**\n * Created by wanghx on 4/27/16.\n *\n * 视窗类 由于视窗在整个游戏中只有一个, 所以做成单例\n *\n */\n'use strict';\n\n// 视窗类\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Frame = function () {\n  function Frame() {\n    _classCallCheck(this, Frame);\n  }\n\n  _createClass(Frame, [{\n    key: 'init',\n    value: function init(options) {\n      this.x = options.x;\n      this.y = options.y;\n      this.width = options.width;\n      this.height = options.height;\n    }\n\n    /**\n     * 跟踪某个对象\n     */\n\n  }, {\n    key: 'track',\n    value: function track(obj) {\n      this.translate(obj.x - this.x - this.width / 2, obj.y - this.y - this.height / 2);\n    }\n\n    /**\n     * 移动视窗\n     * @param x\n     * @param y\n     */\n\n  }, {\n    key: 'translate',\n    value: function translate(x, y) {\n      this.x += x;\n      this.y += y;\n    }\n  }]);\n\n  return Frame;\n}();\n\nexports.default = new Frame();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/lib/frame.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/lib/frame.js?");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("/**\n * Created by wanghx on 4/25/16.\n *\n * 地图类 由于地图在整个游戏中只有一个, 所以做成单例\n *\n */\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _frame = __webpack_require__(6);\n\nvar _frame2 = _interopRequireDefault(_frame);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// 地图类\n\nvar Map = function () {\n  function Map() {\n    _classCallCheck(this, Map);\n\n    // 背景块的大小\n    this.block_w = 150;\n    this.block_h = 150;\n  }\n\n  /**\n   * 初始化map对象\n   * @param options\n   */\n\n\n  _createClass(Map, [{\n    key: 'init',\n    value: function init(options) {\n      this.canvas = options.canvas;\n      this.ctx = this.canvas.getContext('2d');\n\n      // 地图大小\n      this.width = options.width;\n      this.height = options.height;\n    }\n\n    /**\n     * 清空地图上的内容\n     */\n\n  }, {\n    key: 'clear',\n    value: function clear() {\n      this.ctx.clearRect(0, 0, _frame2.default.width, _frame2.default.height);\n    }\n\n    /**\n     * 渲染地图\n     */\n\n  }, {\n    key: 'render',\n    value: function render() {\n      var begin_x = _frame2.default.x < 0 ? -_frame2.default.x : -_frame2.default.x % this.block_w;\n      var begin_y = _frame2.default.y < 0 ? -_frame2.default.y : -_frame2.default.y % this.block_h;\n      var end_x = _frame2.default.x + _frame2.default.width > this.width ? this.width - _frame2.default.x : begin_x + _frame2.default.width + this.block_w;\n      var end_y = _frame2.default.y + _frame2.default.height > this.height ? this.height - _frame2.default.y : begin_y + _frame2.default.height + this.block_h;\n\n      // 铺底色\n      this.ctx.fillStyle = '#999';\n      this.ctx.fillRect(begin_x, begin_y, end_x - begin_x, end_y - begin_y);\n\n      // 画方格砖\n      this.ctx.strokeStyle = '#fff';\n      for (var x = begin_x; x <= end_x; x += this.block_w) {\n        for (var y = begin_y; y <= end_y; y += this.block_w) {\n          var cx = end_x - x;\n          var cy = end_y - y;\n          var w = cx < this.block_w ? cx : this.block_w;\n          var h = cy < this.block_h ? cy : this.block_h;\n          this.ctx.strokeRect(x, y, w, h);\n        }\n      }\n\n      // 画小地图\n      this.renderSmallMap();\n    }\n\n    /**\n     * 画小地图\n     */\n\n  }, {\n    key: 'renderSmallMap',\n    value: function renderSmallMap() {\n      // 小地图外壳, 圆圈\n      var margin = 30;\n      var smapr = 50;\n      var smapx = _frame2.default.width - smapr - margin;\n      var smapy = _frame2.default.height - smapr - margin;\n\n      // 地图在小地图中的位置和大小\n      var smrect = 50;\n      var smrectw = this.width > this.height ? smrect : this.width * smrect / this.height;\n      var smrecth = this.width > this.height ? this.height * smrect / this.width : smrect;\n      var smrectx = smapx - smrectw / 2;\n      var smrecty = smapy - smrecth / 2;\n\n      // 相对比例\n      var radio = smrectw / this.width;\n\n      // 视窗在小地图中的位置和大小\n      var smframex = _frame2.default.x * radio + smrectx;\n      var smframey = _frame2.default.y * radio + smrecty;\n      var smframew = _frame2.default.width * radio;\n      var smframeh = _frame2.default.height * radio;\n\n      this.ctx.save();\n      this.ctx.globalAlpha = 0.8;\n\n      // 画个圈先\n      this.ctx.beginPath();\n      this.ctx.arc(smapx, smapy, smapr, 0, Math.PI * 2);\n      this.ctx.fillStyle = '#000';\n      this.ctx.fill();\n      this.ctx.stroke();\n\n      // 画缩小版地图\n      this.ctx.fillStyle = '#999';\n      this.ctx.fillRect(smrectx, smrecty, smrectw, smrecth);\n\n      // 画视窗\n      this.ctx.strokeRect(smframex, smframey, smframew, smframeh);\n\n      // 画蛇蛇位置\n      this.ctx.fillStyle = '#f00';\n      this.ctx.fillRect(smframex + smframew / 2 - 1, smframey + smframeh / 2 - 1, 2, 2);\n\n      this.ctx.restore();\n    }\n  }]);\n\n  return Map;\n}();\n\nexports.default = new Map();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/lib/map.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/lib/map.js?");

/***/ }
/******/ ]);