import express from 'express'
import cors from 'cors';
import {connectDB} from './db/db.js';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';


dotenv.config()

const app = express();
const port = process.env.PORT;
connectDB()


app.use(
    cors({
        origin: ['http://localhost:5173', 'https://www.mrdavidstudents.com.ng', 'https://mrdavidstudents.com.ng', 'https://dev.mrdavidstudents.com.ng', 'http://dev.localhost:5173'],
        credentials: true
    })
)
app.use(express.json())

app.use('/api/user', userRoutes)



app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
})