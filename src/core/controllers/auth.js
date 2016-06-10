import jwt from 'jsonwebtoken';

export default class Auth {

    constructor(config) {
        this.config = config;
    }

    /**
     * Authentication based on apiKeyClient setup in app config.
     * @param req
     * @param res
     * @returns return json web token if api key valid
     */
    authentication(req, res) {
        if (req.headers['api-key'] === this.config.apiKeyClient) {
            let token = jwt.sign(this.config.apiKeyClient, this.config.apiKeyPrivate);
            return res.json({message: 'Login success.', token: token});
        } else {
            return res.status(403).json({success: false, message: 'Invalid apiKey.'});
        }
    }

    /**
     * Token validation.
     * @param req
     * @param res
     * @param next
     * @returns return 403 error with message if token is invalid
     */
    isValidToken(req, res, next) {
        // check header or url parameters or post parameters for token
        let token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, this.config.apiKeyPrivate, function (err, decoded) {
                if (err) {
                    return res.status(403).json({success: false, message: 'Failed to authenticate token.'});
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });

        } else {
            // if there is no token
            // return an error
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        }
    }

    /**
     * Validation of the retaliation api key.
     * @param req
     * @param res
     * @param next
     * @returns {*}
     */
    isValidRetaliationApiKey(req, res, next) {
        if (req.headers['api-key'] === this.config.apiKeyRetaliation) {
            next();
        } else {
            return res.status(403).json({success: false, message: 'Invalid apiKey.'});
        }
    }

}
