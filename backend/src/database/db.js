import mongoose from 'mongoose';

async function conectarBanco() {
  try {
    console.log('Iniciando conexão com o banco de dados...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado ao MongoDB com sucesso!');
  } catch (erro) {
    console.error('Erro ao conectar ao banco:', erro);
  }
}

export default conectarBanco;