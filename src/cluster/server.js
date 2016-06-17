import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import config from './conf/config';
import route from './route';
import errorHandler from '../core/error-handler/errorHandler';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api', route);
app.use(errorHandler);

// Start the server
app.listen(config.port, function () {
    console.info('Cluster server is running on port: ' + config.port);
});
