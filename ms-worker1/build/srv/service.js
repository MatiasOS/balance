'use strict';

var _seneca = require('seneca');

var _seneca2 = _interopRequireDefault(_seneca);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _senecaDemoLogger = require('seneca-demo-logger');

var _senecaDemoLogger2 = _interopRequireDefault(_senecaDemoLogger);

var _logic = require('../lib/logic');

var _logic2 = _interopRequireDefault(_logic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module
 */
_dotenv2.default.config();

if (!process.env.BOILER_TAG || !process.env.BOILER_HOST || !process.env.BOILER_BASES || !process.env.BOILER_MONGO_URI || !process.env.BOILER_REDIS_TIMEOUT) {
  console.log('You must set:\n        BOILER_HOST \n        BOILER_BASES \n        BOILER_MONGO_URI \n        BOILER_REDIS_TIMEOUT ');

  process.exit(-1);
}
var tag = process.env.BOILER_TAG;
var dbname = process.env.BOILER_TAG;
var host = process.env.BOILER_HOST;
var bases = process.env.BOILER_BASES.split(',');
var mongoUri = process.env.BOILER_MONGO_URI + '/' + dbname;
var timeout = process.env.BOILER_TIMEOUT || 20000;
var silent = process.env.NODE_ENV === 'production';

var pin = 'role:' + tag;

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
    pin: pin,
    bases: bases,
    host: host,
    sneeze: {
      silent: silent
    }
  },
  mongo: {
    uri: mongoUri
  }
};

(0, _seneca2.default)(opts.seneca).use('entity').use('basic').use('mongo-store', opts.mongo).use(_logic2.default).use('mesh', opts.mesh).ready(function () {
  console.log(this.id);
});
//# sourceMappingURL=service.js.map