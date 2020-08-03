import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import io from 'socket.io';
import http from 'http';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
const server = http.createServer(app);

const ioconnection = io(server);
const connectedUsers = {};

ioconnection.sockets.on('connection', socket => {
  const { user_id } = socket.handshake.query;
  if (socket.id && user_id) {
    connectedUsers[user_id] = socket.id;
  }

  socket.on('disconnect', () => {
    delete connectedUsers[user_id];
  });
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));

app.use((req, res, next) => {
  req.io = ioconnection;
  req.connectedUsers = connectedUsers;

  return next();
});
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

server.listen(3333, () => {
  console.log('Server started on port 3333!');
});
