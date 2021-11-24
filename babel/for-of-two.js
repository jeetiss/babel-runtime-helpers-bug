"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

exports.__esModule = true;
exports.two = void 0;

var _createForOfIteratorHelperLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelperLoose"));

var two = function two(args) {
  var max = 0;

  for (var _iterator = (0, _createForOfIteratorHelperLoose2["default"])(args), _step; !(_step = _iterator()).done;) {
    var a = _step.value;
    max += a;
  }

  return max;
};

exports.two = two;