const mongooose = require('mongoose');

const personagenschema = new mongooose.Schema({
  sabor: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  preco: { type: Number, required: true },
});

const personagens= mongooose.model('personagens', personagenschema);

module.exports = personagens;
