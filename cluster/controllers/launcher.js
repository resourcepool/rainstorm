import request from 'request';
import lokijs from 'lokijs';

/**
 * Get all launchers
 * @param req
 * @param res
 */
function getLaunchers(req, res) {
    request({
        url: "https://public.opendatasoft.com/api/datasets/1.0/search/?q=villettedanthon&rows=1",
        method: "GET"
    }, function (error, response) {
        res.json({message: 'This is the driver response.', data: JSON.parse(response.body)});
    });
}

function postLauncher(req, res) {
    res.json({message: 'Not implemented.'});
}

export default {getLaunchers, postLauncher};