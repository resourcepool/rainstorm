console.log("coucou");
import express from 'express';
import expressValidation from 'express-validation';
import bodyParser from 'body-parser';
import httpStatus from 'http-status';
import cors from 'cors';

import config from '../config';
import routes from './routes';
// import APIError from '/core/src/helpers/api-error';
//
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// // app.use('/api', routes);
//
// // If error is not an instanceOf APIError.js, convert it.
// app.use((err, req, res, next) => {
//     if (err instanceof expressValidation.ValidationError) {
//         // validation error contains errors which is an array of error each containing message[]
//         const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
//         const error = new APIError(unifiedErrorMessage, err.status);
//         return next(error);
//     } else if (!(err instanceof APIError)) {
//         const apiError = new APIError(err.message, err.status);
//         return next(apiError);
//     }
//     return next(err);
// });
//
// // Catch 404 and forward to error handler
// app.use((req, res, next) => {
//     const err = new APIError('API not found', httpStatus.NOT_FOUND);
//     next(err);
// });
//
// // Error handler
// app.use((err, req, res, next) =>
//     res.status(err.status).json({
//         message: err.message,
//         stack: err.stack
//     })
// );
//
// // Start the server
// app.listen(config().port, function () {
//     console.info("Cluster server is running on port: " + config().port);
// });
