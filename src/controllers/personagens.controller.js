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

const createPersonagemController = async (req, res) => {
  const personagem = req.body;

  if (
    !personagem ||
    !personagem.nome ||
    !personagem.descricao ||
    !personagem.foto
  ) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os dados para adicionar uma nova personagem ao cardápio!',
    });
  }

  const newPersonagem = await personagenservice.createPersonagenservice(personagem);

  res.send(newPersonagem);
};
  
const updatePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  const personagemEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenPersonagem = await personagenservice.findPersonagemByIdService(idParam);

  if (!chosenPersonagem) {
    return res.status(404).send({ message: 'Personagem não encontrada!' });
  }

  if (
    !personagemEdit ||
    !personagemEdit.nome ||
    !personagemEdit.descricao ||
    !personagemEdit.foto ||
    !personagemEdit.preco
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar a personagem!',
    });
  }

  const updatedPersonagem = await personagenservice.updatePersonagenservice(
    idParam,
    personagemEdit,
  );

  res.send(updatedPersonagem);
};
  
const deletePersonagemController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenPersonagem = await personagenservice.findPersonagemByIdService(idParam);

  if (!chosenPersonagem) {
    return res.status(404).send({ message: 'Personagem não encontrada!' });
  }

  await personagenservice.deletePersonagenservice(idParam);

  res.send({ message: 'Personagem deletada com sucesso!' });
};

module.exports = {
  findPersonagensController,
  findPersonagemByIdController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
