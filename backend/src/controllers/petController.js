import Pet from '../models/Pet.js';

export const listarPets = async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    }   catch (err) {
        res.status(500).json({ message: 'Erro ao listar pets', error: err.message });
    }
};

export const cadastrarPet = async (req, res) => {
    try {
        const novoPet = new Pet(req.body);
        await novoPet.save();
        res.status(201).json(novoPet);  
    } catch (err) {
        res.status(500).json({ message: 'Erro ao cadastrar pet', error: err.message });
    }

};

export const atualizarPet = async (req, res) => {
    try {
        const petAtualizado = await Pet.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true }
        );
        res.json(petAtualizado);
    }   catch (err) {
        res.status(400).json({ message: 'Erro ao atualizar pet', error: err.message }); 

    }
};

export const deletarPet = async (req, res) => {
    try {
        await Pet.findByIdAndDelete(req.params.id);
        res.json({ message: 'Pet deletado com sucesso' });
    }   catch (err) {
        res.status(400).json({ message: 'Erro ao deletar pet', error: err.message });
    }  
};

