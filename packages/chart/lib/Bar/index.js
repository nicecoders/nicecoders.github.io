"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Bar = function Bar(_ref) {
  var className = _ref.className,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'canvas' : _ref$type;
  var chartWidth = 480;
  var chartHeight = 200;
  var margin = 15;
  var containerWidth = chartWidth * margin * 2; // 容器宽度
  var containerHeight = chartHeight * margin * 2; // 容器高度
  var names = Array.from(data, function (d) {
    return d.name;
  }); // 键
  var values = Array.from(data, function (d) {
    return d.value;
  }); // 值
  var idx = Array.from(data, function (_, i) {
    return i;
  }); // 索引
  /**
   * 计算每一个bar左下角顶点横坐标坐标
   * 位置和idx有关
   */
  var step = chartWidth / names.length; // 图标分割为数据宽
  var barWidth = step * 0.8; // 柱状图宽度
  var xs = Array.from(idx, function (i) {
    return i * step;
  });
  var y = chartHeight; // 左下角纵坐标
  var vMax = Math.max.apply(Math, values); // 最高的bar值
  var barHeights = Array.from(values, function (v) {
    return chartHeight * (v / vMax);
  });
  // 获得每一个柱子的颜色
  var nameColor = {
    questions: "#5B8FF9",
    philosophers: "#61DDAA",
    schools: "#65789B"
  };
  var colors = Array.from(names, function (name) {
    return nameColor[name];
  });
  var initCanvas = function initCanvas() {
    var canvas = document.getElementById('barChart');
    // 设置 canvas 的宽高
    canvas.style.width = chartWidth + 'px';
    canvas.style.height = chartHeight + 'px';
    // 设置画布宽高
    canvas.width = chartWidth * 2;
    canvas.height = chartHeight * 2;
    // 获得绘制上下文
    var ctx = canvas.getContext("2d");
    // 抵消画布宽高的影响
    ctx.scale(2, 2);
    ctx.translate(margin, margin);
    for (var _i = 0, _idx = idx; _i < _idx.length; _i++) {
      var index = _idx[_i];
      // 将图绘制出来
      var color = colors[index];
      var x = xs[index];
      var barHeight = barHeights[index];
      var value = values[index];
      // 绘制bar
      ctx.fillStyle = color;
      ctx.fillRect(x, y - barHeight, barWidth, barHeight);
      // 绘制文字
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'white';
      ctx.font = '25px PingFangSC-Regular';
      ctx.fillText(String(value), x + barWidth / 2, y - barHeight / 2);
    }
  };
  var initSvg = function initSvg() {
    var svg = document.getElementById('barSvg');
    svg.style.width = chartWidth + 'px';
    svg.style.height = chartHeight + 'px';
    // 设置 svg 的坐标原点和大小
    svg.setAttribute('width', String(containerWidth));
    svg.setAttribute('height', String(containerHeight));
    // @ts-ignore
    svg.setAttribute('viewBox', [0, 0, chartWidth, chartHeight]);
    // 创建一个 g 元素用于平移
    var g = _createSVGElement('g');
    g.setAttribute('transform', "translate(".concat(margin, ", ").concat(margin, ")"));
    svg.appendChild(g);
    for (var _i2 = 0, _idx2 = idx; _i2 < _idx2.length; _i2++) {
      var index = _idx2[_i2];
      // 取得对应的属性
      var color = colors[index];
      var x = xs[index];
      var barHeight = barHeights[index];
      var value = values[index];
      // 绘制 bar
      var rect = _createSVGElement('rect');
      rect.setAttribute('x', String(x));
      rect.setAttribute('y', String(y - barHeight));
      rect.setAttribute('fill', String(color));
      rect.setAttribute('width', String(barWidth));
      rect.setAttribute('height', String(barHeight));
      g.appendChild(rect);
      // 绘制文字
      var text = _createSVGElement('text');
      text.textContent = String(value);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', 'white');
      text.setAttribute('font-family', 'PingFangSC-Regular');
      text.setAttribute('font-size', '25');
      text.setAttribute('alignment-baseline', 'middle');
      text.setAttribute('x', String(x + barWidth / 2));
      text.setAttribute('y', String(y - barHeight / 2));
      g.appendChild(text);
    }
  };
  var _createSVGElement = function _createSVGElement(type) {
    return document.createElementNS('http://www.w3.org/2000/svg', type);
  };
  (0, _react.useEffect)(function () {
    if (type === 'svg') {
      initSvg();
    } else {
      initCanvas();
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, type === 'canvas' ? /*#__PURE__*/_react.default.createElement("canvas", {
    id: "barChart"
  }) : /*#__PURE__*/_react.default.createElement("svg", {
    id: "barSvg"
  }));
};
var _default = Bar;
exports.default = _default;