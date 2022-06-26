const personagens = [
    {
      id: 1,
      sabor: 'Açaí com Leite Condensado',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/acai-com-leite-condensado.png',
      preco: 10.0,
    },
    {
      id: 2,
      sabor: 'Banana com Nutella',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/banana-com-nutella.png',
      preco: 10.0,
    },
    {
      id: 3,
      sabor: 'Chocolate Belga',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/chocolate-belga.png',
      preco: 7.0,
    },
  ];
  
  const findpersonagensService = () => {
    return personagens;
  };
  
  const findpersonagemByIdService = (id) => {
    return personagens.find((personagem) => personagem.id == id);
  };

  const createpersonagenservice = (newpersonagem) => {
    const newId = personagens.length + 1;
    newpersonagem.id = newId;
    personagens.push(newpersonagem);
    return newpersonagem;
  };

  const updatepersonagenservice = (id, personagemEdited) => {
    personagemEdited['id'] = id;
    const personagemIndex = personagens.findIndex((personagem) => personagem.id == id);
    personagens[personagemIndex] = personagemEdited;
    return personagemEdited;
  };

  const deletepersonagenservice = (id) => {
    const personagemIndex = personagens.findIndex((personagem) => personagem.id == id);
    return personagens.splice(personagemIndex, 1);
  };
  
  module.exports = {
    findpersonagensService,
    findpersonagemByIdService,
    createpersonagenservice,
    updatepersonagenservice,
    deletepersonagenservice,
  };
