import request from 'request';
import config from './conf/config';

function run() {

  request({
    url: 'http://' + config().master.host + ':' + config().master.port + '/register',
    method: "POST",
    headers: {
      "api-key": config().apiKeyClient
    }
  }, function(error, res) {

  });
}

export default {run};
