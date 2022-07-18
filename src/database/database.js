const mongoose = require('mongoose');
  const connectToDatabase = () =>{
    mongoose
      .connect("mongodb+srv://kayanmt:<K@1506Ka>@api-personagens.rhgnd.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('MONGO DB CONECTADO');
      })
      .catch((err) => {
        return console.log(`Erro na conexao com o banco: ${err}`);
      });
  };

  module.exports = connectToDatabase;
