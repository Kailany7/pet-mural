import express from 'express';
import {
    listarPets,
    criarPet,
    atualizarPet,
    deletarPet,
    cadastrarPet,
} from '../controllers/petController.js';

const router = express.Router();


router.get('/', listarPets); 
router.post('/', cadastrarPet);
router.put('/:id', atualizarPet);
router.delete('/:id', deletarPet);     

export default router;