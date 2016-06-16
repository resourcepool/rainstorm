import request from 'request';
import config from '../config'
const url = 'api/users';

export default class UserDispatcher {

    updateUser(user, name, cb) {
        user.position.forEach((ip, position) => {
            request({
                url: ip + ':3001/' + url + '/' + name,
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
        });
    }

}
