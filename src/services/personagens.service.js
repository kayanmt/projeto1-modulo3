const personagens = [
    {
      id: 1,
      sabor: 'Hulk',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/hulk.png',
    },
    {
      id: 2,
      sabor: 'Batman',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/batman.png',
    },
    {
      id: 3,
      sabor: 'Drácula',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/dracula.png',
    },
  ];
  
  const findPersonagensService = () => {
    return personagens;
  };
  
  const findPersonagemByIdService = (id) => {
    return personagens.find((personagem) => personagem.id == id);
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
