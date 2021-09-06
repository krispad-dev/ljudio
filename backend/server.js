import express from 'express';
import cors from 'cors';
import env from 'dotenv';

import { musicRouter, userRouter } from './routes/routes.js';

const app = express();
app.use(express.json());
app.use(cors());
env.config();

app.use('/api/music', musicRouter);
app.use('/api/users', userRouter);

app.listen(
  process.env.PORT || 7000,
  console.log({
    success: true,
    message: `Server listens  @${process.env.PORT || 7000}`,
  })
);
