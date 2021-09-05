import express from 'express';
import { searchMusic } from '../controllers/musicControllers.js';

export const musicRouter = express.Router();

musicRouter.get('/', searchMusic);
