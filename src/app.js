import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import http from 'http';
import cors from 'cors';

import routes from './routes';

const router = express.Router();
routes(router);

// initiliase the express app
const app = express();

app.use(logger('dev'));
app.use(cors());

// parse incoming http requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 9000;
app.set('port', port);

// create the server
const server = http.createServer(app);

// eslint-disable-next-line
server.listen(port, () => console.log(`Space is running on localhost:${port}`));

app.use('/api/v1', router);
routes(app);

export default app;
