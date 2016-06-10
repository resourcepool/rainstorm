import request from 'request';
import config from './config';
import normalMode from './normal-mode';
import slaveMode from './slave-mode';
import events from './events/launcher';

/**
 * Checking which mode api has to setup
 */
let isValidIp = config().ipCluster.match('^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$');
if (isValidIp) {
    request({
        url: 'http://' + config().ipCluster + ':' + config().portCluster + '/health-check',
        method: "GET"
    }, function (error, res) {
        if (res && res.body.message !== 'OK') {
            console.info('--> SLAVE MODE ACTIVE: Cluster found');
            slaveMode.run();
        } else {
            console.info('--> NORMAL MODE ACTIVE: Cluster not reachable');
            normalMode.run();
        }
    });
} else {
    console.info('--> NORMAL MODE ACTIVE: IP invalid');
    normalMode.run();
}


