import request from 'request';
import config from '../config'
const url = 'api/launchers';

export default class LauncherDispatcher {

    updateLauncher(launcher, name, cb) {
        json = {
            name: launcher.name,
            rainstormId: launcher.rainstormId,
            positions: {
                x: launcher.position.x,
                y: launcher.position.y,
                z: launcher.position.z
            }
        };

        request({
            url: launcher.rainstormId + ':3001/' + url + '/' + name,
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
