import express from 'express'
import cors from  'cors'
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';
const port = 4000;
const app = express();

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/foods',foodRouter);
app.use('/images',express.static('uploads'))

app.get('/',(req,res)=>{
    res.send('app-----> http://localhost:'+port);
})

app.listen(port , ()=>{
    console.log('app-----> http://localhost:'+port)
})