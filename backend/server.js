import express from 'express'
import cors from  'cors'
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
const port = 4000;
const app = express();

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/foods',foodRouter);
app.use('/api/user' , userRouter);
app.use('/images',express.static('uploads'))

app.get('/',(req,res)=>{
    res.send('app-----> http://localhost:'+port);
})

app.listen(port , ()=>{
    console.log('app-----> http://localhost:'+port)
})