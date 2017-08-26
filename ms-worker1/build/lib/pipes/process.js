'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.msg = msg;

var _process = require('./filters/process');

function msg($pipe, $critical, state) {
  return $pipe(_process.processMsg, state, $critical).return('solvedBy');
} /**
   * @module
   */
//# sourceMappingURL=process.js.map