import config from '../config';

/**
 * Validation of the client api key.
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function isValidApiKey(req, res, next) {
    if (req.headers['api-key'] === config().apiKeyClient) {
        next();
    } else {
        return res.status(403).json({success: false, message: 'Invalid apiKey.'});
    }
}

export default {isValidApiKey}