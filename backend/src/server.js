import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import conectarBanco from './database/db.js';
import petRoutes from './routes/petRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/pets', petRoutes);


conectarBanco();

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});