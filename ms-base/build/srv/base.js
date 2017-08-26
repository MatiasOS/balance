'use strict';

var _seneca = require('seneca');

var _seneca2 = _interopRequireDefault(_seneca);

var _senecaDemoLogger = require('seneca-demo-logger');

var _senecaDemoLogger2 = _interopRequireDefault(_senecaDemoLogger);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tag = 'mesh';

_dotenv2.default.config();

if (!process.env.SENECA_BASE_HOST) {

  console.log('You must set: SENECA_BASE_HOST');

  process.exit(-1);
}

var host = process.env.SENECA_BASE_HOST;
var port = process.env.SENECA_BASE_PORT || process.argv[2] || 39999;
var timeout = process.env.SENECA_BASE_TIMEOUT;
var bases = process.env.SENECA_BASE_BASES || [host + ':' + port];
var silent = process.env.NODE_ENV === 'production';

var opts = {
  seneca: {
    tag: tag,
    internal: { logger: _senecaDemoLogger2.default },
    debug: { short_logs: true },
    transport: {
      web: {
        timeout: timeout
      }
    }
  },

  mesh: {
    isbase: true,
    port: port,
    host: host,
    bases: bases,
    pin: 'role:' + tag,
    monitor: true,
    sneeze: {
      silent: silent
    }
  }
};

(0, _seneca2.default)(opts.seneca).use('mesh', opts.mesh).ready(function () {
  console.log(this.id);
});
//# sourceMappingURL=base.js.map