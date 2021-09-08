import express from 'express';
import cors from 'cors';
import env from 'dotenv';
import cookieParser from 'cookie-parser';

import {
  musicRouter,
  userRouter,
  authRouter,
} from './routes/routes.js';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
env.config();

const PORT = process.env.PORT || 7000;

app.use('/api/music', musicRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.listen(
  PORT,
  console.log({
    success: true,
    message: `Server listens @${PORT}`,
  })
);
