import express from 'express';
import cors from 'cors'
import env from 'dotenv'

const app = express();
app.use(express.json());
app.use(cors()) 
env.config()
 

app.listen(
    process.env.PORT, 
    console.log({ success: true, message: `Server listens  @${process.env.PORT}` 
}));
