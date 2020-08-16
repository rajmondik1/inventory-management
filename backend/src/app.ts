import express, {Application, NextFunction, Request, Response} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {config} from 'dotenv';
import itemsRouter from "./api-routes/items";
import authRouter from "./api-routes/auth";

config();

const app: Application = express();
const port: string = process.env.PORT || '5000';

app.use(cors());
app.use(express.json());

let uri: string = process.env.MONGODB_URI!;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then(() => {
    console.log('MongoDB connection established successfully');
    app.listen(port, () => {
        console.log('Server is running on port:', 5000);
    });
});

app.use('/items', itemsRouter);
app.use(authRouter);

app.get('/', (req : Request, res: Response, next: NextFunction) => {
    res.send('hello wld');
})

app.use((req, res) => {
    res.status(404).send('404 not found');
});

