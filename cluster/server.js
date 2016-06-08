import express from 'express';
import expressValidation from 'express-validation';
import bodyParser from 'body-parser';
import passport from 'passport';
import httpStatus from 'http-status';
import cors from 'cors';

import config from './config';
import routes from './routes';
import APIError from './helpers/APIError';

// Create our Express application
const app = express();

// Setup config (default: development)
app.set('config', config());

// Use the body-parser package in our application
app.use(bodyParser.json());

// Use the passport package in our application
app.use(passport.initialize());

//Enable CORS
app.use(cors());

// Register all our routes with /api
app.use('/api', routes);

// If error is not an instanceOf APIError.js, convert it.
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

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new APIError('API not found', httpStatus.NOT_FOUND);
    next(err);
});

// Error handler
app.use((err, req, res, next) =>
    res.status(err.status).json({
        message: err.message,
        stack: err.stack
    })
);

// Start the server
app.listen(app.get('config').port, function () {
    console.info("Retaliation server is running on port: " + app.get('config').port);
});
