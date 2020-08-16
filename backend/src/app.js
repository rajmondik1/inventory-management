import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import compression from 'compression';
import helmet from 'helmet';
import dotenv from 'dotenv';
import itemsRouter from "./api-routes/items.js";
import authRouter from "./api-routes/auth.js";
import itemGroupRouter from "./api-routes/itemGroup.js";

dotenv.config();

const app = express();
const port = process.env.PORT || '5000';

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(compression());

let uri = process.env.MONGODB_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then(() => {
    console.log('MongoDB connection established successfully');
    app.listen(port, () => {
        console.log('Server is running on port:', 5000);
    });
});

app.use(authRouter);
app.use('/items', itemsRouter);
app.use('/item-groups', itemGroupRouter);

app.get('/', (req , res) => {
    res.send('hello wld');
})

app.use((req, res) => {
    res.status(404).send('404 not found');
});

