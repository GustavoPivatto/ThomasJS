import express from 'express';
import filmeRoutes from './routes/filmes.js'
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", filmeRoutes)

app.listen(8800);