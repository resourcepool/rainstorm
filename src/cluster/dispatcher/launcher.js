import request from 'request';
import config from '../config'
const url = 'api/launchers';

export default class LauncherDispatcher {

    updateLauncher(launcher, name, cb) {
        json = {
            name: launcher.name,
            retaliationId: launcher.retaliationId,
            positions: {
                x: launcher.position.x,
                y: launcher.position.y,
                z: launcher.position.z
            }
        };

        request({
            url: launcher.retaliationId + ':3001/' + url + '/' + name,
            method: 'PUT',
            json: true,
            body: json,
            headers: {
                'api-key': config().apiKeyPrivate
            }
        }, function (error, response) {
            if (error) {
                cb(error);
            }
            cb(null, response);
        });
    }

}
