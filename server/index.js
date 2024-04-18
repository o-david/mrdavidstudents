import express from 'express'
import cors from 'cors';
import {run} from './db.js';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';


dotenv.config()

const app = express();
const port = process.env.PORT;
run()


app.use(
    cors({
        origin: 'http://localhost:5173'
    })
)
app.use(express.json())

app.use('/user', userRoutes)




app.get('/', (req, res) => {
    res.sendStatus(201)
})

app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
})