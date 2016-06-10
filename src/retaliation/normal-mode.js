import express from 'express';
import expressValidation from 'express-validation';
import bodyParser from 'body-parser';
import httpStatus from 'http-status';
import cors from 'cors';

import config from './config';
import routes from './routes';
import APIError from '../core/helpers/api-error';
import driver from '../driver/driver';

function run() {

    console.info('current devices', driver.getDevices());

    const app = express();
    app.set('config', config());
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/api/retaliation/', routes);

    app.use((err, req, res, next) => {
        if (err instanceof expressValidation.ValidationError) {
            // validation error contains errors which is an array of error each containing message[]
            const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
            const error = new APIError(unifiedErrorMessage, err.status);
            return next(error);
        } else if (!(err instanceof APIError)) {
            const apiError = new APIError(err.message, err.status);
            return next(apiError);
        }
        return next(err);
    });

    app.use((req, res, next) => {
        const err = new APIError('API not found', httpStatus.NOT_FOUND);
        next(err);
    });

    app.use((err, req, res, next) =>
        res.status(err.status).json({
            message: err.message,
            stack: err.stack
        })
    );

    app.listen(app.get('config').port, function () {
        console.info("Retaliation server is running on port: " + app.get('config').port);
    });

}

export default {run};

