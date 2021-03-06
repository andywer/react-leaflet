"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Leaflet = require("leaflet");

var _Leaflet2 = _interopRequireWildcard(_Leaflet);

var _BaseTileLayer2 = require("./BaseTileLayer");

var _BaseTileLayer3 = _interopRequireWildcard(_BaseTileLayer2);

var CanvasTileLayer = (function (_BaseTileLayer) {
  function CanvasTileLayer() {
    _classCallCheck(this, CanvasTileLayer);

    if (_BaseTileLayer != null) {
      _BaseTileLayer.apply(this, arguments);
    }
  }

  _inherits(CanvasTileLayer, _BaseTileLayer);

  _createClass(CanvasTileLayer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      _get(Object.getPrototypeOf(CanvasTileLayer.prototype), "componentWillMount", this).call(this);
      var _props = this.props;
      var map = _props.map;

      var props = _objectWithoutProperties(_props, ["map"]);

      this.leafletElement = _Leaflet2["default"].tileLayer.canvas(props);
    }
  }]);

  return CanvasTileLayer;
})(_BaseTileLayer3["default"]);

exports["default"] = CanvasTileLayer;
module.exports = exports["default"];