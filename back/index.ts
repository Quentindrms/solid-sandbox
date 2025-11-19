import mainRouter from "./routes";
require('dotenv').config();

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(mainRouter)

app.listen(port, () => {
    console.log('Running on port : ', port);
    console.log('Environnement : ', process.env.ENV)
})
