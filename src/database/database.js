const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://kayanmt:<K@1506Ka>@api-personagens.rhgnd.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Conectado!"))
    .catch((err) => console.log(`Erro ao conectar com o banco: ${err}`));
};

module.exports = connectDatabase;
