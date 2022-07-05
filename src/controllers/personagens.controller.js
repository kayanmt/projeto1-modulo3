const mongoose = require('mongoose'); 
const personagensService = require('../services/personagens.service');

const findPersonagensController = async (req, res) => {
  const allPersonagens = await PersonagensService.findPersonagensService();
  res.send(allPersonagens);
};

const findPersonagemByIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res
      .status(400)
      .send({ message: 'ID inválido!' });
    return;
  }

  const chosenPersonagem = await personagensService.findPersonagemByIdService(idParam);

  if (!chosenPersonagem) {
    return res.status(404).send({ message: 'Personagem não encontrada!' });
  }

  res.send(chosenPersonagem);
};

const createPersonagemController = (req, res) => {
    const personagem = req.body;
    const newpersonagem = personagensService.createPersonagenservice(personagem);
    res.send(newpersonagem);
  };
  
  const updatePersonagemController = (req, res) => {
    const idParam = +req.params.id;
    const personagemEdit = req.body;
    const updatedpersonagem = personagensService.updatePersonagenservice(idParam, personagemEdit);
    res.send(updatedpersonagem);
  };
  
  const deletePersonagemController = (req, res) => {
    const idParam = req.params.id;
    personagensService.deletePersonagenservice(idParam);
    res.send({ message: 'personagem deletada com sucesso!' });
  };

module.exports = {
  findPersonagensController,
  findPersonagemByIdController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
