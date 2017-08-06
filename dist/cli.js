'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (!checkPackage('package.json')) return _consoler2.default.error('Docor.init(); `package.json` file not found');

  files.forEach(file => {
    docor.createFile(file, err => {
      if (err) return _consoler2.default.error(err);

      _consoler2.default.success(file + ' created');
    });
  });
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _consoler = require('consoler');

var _consoler2 = _interopRequireDefault(_consoler);

var _docor = require('./docor');

var docor = _interopRequireWildcard(_docor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const files = ['README.md', 'LICENSE'];

let checkPackage = f => {
  return _fs2.default.existsSync(_path2.default.join(process.cwd(), f));
};

// Add a `;` to prevent compile error.
// It's a bebel's bug ? XD
//# sourceMappingURL=cli.js.map