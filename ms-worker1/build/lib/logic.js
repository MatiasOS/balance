'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logic;

var _microserviceHelper = require('microservice-helper');

var _process = require('./pipes/process');

var process = _interopRequireWildcard(_process);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function logic() {
  var seneca = this;

  seneca.add('{cmd:process, target:msg}', _microserviceHelper.microservice.doFn(process.msg));
}
//# sourceMappingURL=logic.js.map