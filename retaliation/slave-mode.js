import request from 'request';
import config from './config';

function run() {

    request({
        url: 'http://' + config().ipCluster + ':' + config().portCluster + '/register',
        method: "POST",
        headers: {
            "api-key": config().apiKeyClient
        }
    }, function (error, res) {
        
    });
}

export default {run};
