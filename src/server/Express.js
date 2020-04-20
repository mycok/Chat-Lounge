import path from 'path';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import generateMessage from '../utils/generateMessage';
import logger from '../utils/logger';

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
  logger.info('new client connection!!!');
  // emit this specific event and data to the sender's socket each time a new user joins the app
  socket.emit('newConnection', generateMessage('@admin', 'Welcome to chat-lounge'));
  socket.broadcast.emit('newConnection', generateMessage('@admin', 'A new user has joined'));
  // listen to a specific event from the client and perform more actions based on the recieved data
  socket.on('createMessage', (message, callback) => {
    logger.info('New message recieved', message);
    // emit the specific event and event data to a specific active connection / socket on the client
    // socket.emit('newMessage', generateMessage('@myckie', 'Hey man, how is everything'));
    // emit the event and event data to every active connection / socket
    // io.emit('createMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().toDateString(),
    // });
    // callback();
    // broadcast the event and data to every active socket other than
    //  the socket that triggered the event
    socket.broadcast.emit('createMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime(),
    });
    callback('This is from the server');
  });
  socket.on('disconnect', () => logger.info('client disconnected!!!'));
});

export default server;
