import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import http from 'http';
import cors from 'cors';

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

server.listen(port, () => console.log(`App is running on localhost:${port}`));

app.get('/', (req, res) =>
  res.status(200).json({ status: 'success', message: 'Space launched' }),
);

export default app;
