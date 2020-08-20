import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import compression from 'compression';
import helmet from 'helmet';
import dotenv from 'dotenv';
import itemsRouter from "./api-routes/items.js";
import authRouter from "./api-routes/auth.js";
import itemGroupRouter from "./api-routes/itemGroup.js";
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || '5000';

// middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(cookieParser());


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

app.get('/', (req, res) => {
    res.send('hello wld');
})

// cookies
app.get('/set-cookies', (req, res) => {
    // res.setHeader('Set-Cookie', 'newUser=true');
    res.cookie('newUser', true, {httpOnly: true});
    res.send('you got the cookies');
});

app.get('/read-cookies', (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);

    res.json(cookies);
    // res.setHeader('Set-Cookie', 'newUser=true');
})

app.use((req, res) => {
    res.status(404).send('404 not found');
});

