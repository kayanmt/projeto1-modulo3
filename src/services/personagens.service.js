  const personagens = require('../models/personagens'); 

  const findPersonagensService = async () => {
  const personagens = await Personagem.find();
  return personagens;
};
  
const findPersonagemByIdService = async (id) => {
  const personagem = await Personagem.findById(id);
  return personagem;
};

  const createPersonagenservice = (newpersonagem) => {
    const newId = personagens.length + 1;
    newpersonagem.id = newId;
    personagens.push(newpersonagem);
    return newpersonagem;
  };

  const updatePersonagenservice = (id, personagemEdited) => {
    personagemEdited['id'] = id;
    const personagemIndex = personagens.findIndex((personagem) => personagem.id == id);
    personagens[personagemIndex] = personagemEdited;
    return personagemEdited;
  };

  const deletePersonagenservice = (id) => {
    const personagemIndex = personagens.findIndex((personagem) => personagem.id == id);
    return personagens.splice(personagemIndex, 1);
  };
  
  module.exports = {
    findPersonagensService,
    findPersonagemByIdService,
    createPersonagenservice,
    updatePersonagenservice,
    deletePersonagenservice,
  };
