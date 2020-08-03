declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
    courier: {
      id: string;
    };
    io: {
      to: Function;
      sockets: {
        in: Function;
        emit: Function;
      };
    };
    socket: {
      broadcast: string;
    };
    connectedUsers: {
      [key: string]: string;
    };
  }
}
