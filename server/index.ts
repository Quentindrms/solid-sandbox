import mainRouter from "./routes";
import path from "node:path";
import { createRequire } from "node:module";
import type {CorsOptions} from "cors";
import 'dotenv/config';
import Express from "express";
import { fileURLToPath } from "node:url";  

const app = Express();

const port = process.env.APP_PORT;

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const require = createRequire(import.meta.url);
const cors: typeof import('cors') = require('cors');

//N'autorise que les origines définies et active les cookies (credentials)
const CORS_OPTIONS: CorsOptions = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}

app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
app.use(cors(CORS_OPTIONS));

app.use(mainRouter)

app.listen(port, () => {
    console.log('Running on port : ', port);
    console.log('Environnement : ', process.env.ENV)
})

