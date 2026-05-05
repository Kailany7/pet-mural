import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import petRoutes from './routes/petRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/pets', petRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado ao MongoDB!');
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error('Erro ao conectar:', err));