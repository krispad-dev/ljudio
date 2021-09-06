import express from 'express';
import cors from 'cors';
import env from 'dotenv';

import { musicRouter } from './routes/routes.js';

const app = express();
app.use(express.json());
app.use(cors());
env.config();
const PORT = process.env.PORT || 7000;

app.use('/api/music', musicRouter);

app.listen(
  PORT,
  console.log({
    success: true,
    message: `Server listens @${PORT}`,
  })
);
