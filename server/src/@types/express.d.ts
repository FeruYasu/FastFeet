declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
    courier: {
      id: string;
    };
  }
}
