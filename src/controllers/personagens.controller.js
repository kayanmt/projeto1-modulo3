const personagensService = require('../services/personagens.service');

const findPersonagensController = (req, res) => {
  const allpersonagens = personagensService.findPersonagensService();
  res.send(allpersonagens);
};

const findpersonagemByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenpersonagem = personagensService.findpersonagemByIdService(idParam);
  res.send(chosenpersonagem);
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
  findpersonagemByIdController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
