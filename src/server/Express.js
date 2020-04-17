import path from 'path';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('strict routing', true);

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../../client/build')));

io.on('connection', (socket) => {
  console.log('client connected!!!!');
  socket.on('disconnect', () => console.log('client disconnected!!!'));
});

export default server;
