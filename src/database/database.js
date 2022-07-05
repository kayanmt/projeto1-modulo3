const mongoose = require('mongoose');
function connectToDatabase() {}
function connectToDatabase() {
    mongoose.connect()
  }
  function connectToDatabase() {
    mongoose.connect('mongodb://localhost:27017/personagens-db')
  }
  function connectToDatabase() {
    mongoose.connect('mongodb://localhost:27017/personagens-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  function connectToDatabase() {
    mongoose
      .connect('mongodb://localhost:27017/personagens-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('MONGO DB CONECTADO');
      })
      .catch((err) => {
        return console.log(`Erro na conexao com o banco: ${err}`);
      });
  }

  module.exports = connectToDatabase;
