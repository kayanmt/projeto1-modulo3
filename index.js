require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/personagens.route');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3000;
const app = express();
connectToDatabase();


app.use(express.json());
app.use(cors());
app.use('/personagens', routes);


  app.get('/personagens/all-personagens', (req, res) =>{
    res.send(personagens);
  });

  app.get('/personagens/personagem/:id', (req, res) => {
    const idParam = Number(req.params.id);
    const chosenpersonagem = personagens.find((personagem) => personagem.id === idParam);
    res.send(chosenpersonagem);
  });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
