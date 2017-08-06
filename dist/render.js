'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (filename) {
  if (!filename) return;

  return _swig2.default.compileFile(_path2.default.join(templates, filename));
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _swig = require('swig');

var _swig2 = _interopRequireDefault(_swig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const templates = _path2.default.resolve(__dirname, '../templates');
//# sourceMappingURL=render.js.map