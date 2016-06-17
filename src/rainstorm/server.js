import request from 'request';
import config from './conf/config';
const standaloneMode = require.resolve('./standalone-mode');
const slaveMode = require.resolve('./slave-mode');

/**
 * Checking which mode api has to setup
 */
if (config.mode !== 'standalone') {
  request({
    url: config.master.scheme + '://' + config.master.host + ':' + config.master.port + '/health-check',
    method: 'GET'
  }, function(error, res) {
    if (res && res.body.message !== 'OK') {
      console.info('--> SLAVE MODE ACTIVE: Master found');
      // FIXME add default.run() or better impl
      require(slaveMode);
    } else {
      console.error('--> SLAVE MODE FAILED: Master not reachable');
      throw '--> SLAVE MODE FAILED: Master not reachable';
    }
  });
} else {
  console.info('--> STANDALONE MODE ACTIVE');
  console.log(require(standaloneMode).default.run());
}


