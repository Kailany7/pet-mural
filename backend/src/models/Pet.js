import mongoose from 'mongoose';


const petSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    foto: { type: String, required: true }, // link da imagem
    especie: { type: String, required: true },
    bio: { type: String, required: true },
    tutor: { type: String, required: true },
 });

const Pet = mongoose.model('Pet', petSchema);

export default Pet;