  const personagens = require('../models/personagens'); 

  const findPersonagensService = async () => {
  const personagens = await Personagem.find();
  return personagens;
};
  
const findPersonagemByIdService = async (id) => {
  const personagem = await Personagem.findById(id);
  return personagem;
};

const createPersonagenservice = async (newPersonagem) => {
  const personagemCriada = await Personagem.create(newPersonagem)
  return personagemCriada;
};

const updatePersonagenservice = async (id, personagemEdited) => {
  const personagemAtualizada = await Personagemaleta.findByIdAndUpdate(id, personagemEdited);
  return personagemAtualizada;
};

const deletePersonagenservice = async (id) => {
  return await Personagem.findByIdAndDelete(id);
};
  
  module.exports = {
    findPersonagensService,
    findPersonagemByIdService,
    createPersonagenservice,
    updatePersonagenservice,
    deletePersonagenservice,
  };
