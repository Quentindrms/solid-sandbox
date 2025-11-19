import {Express} from 'Express';

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port, () => {
    console.log('Running on port : ', port);
    console.log('Environnement : ', process.env.ENV)
})
