const express = require('express');
const cors = require('cors');
const route = require('./src/routes/paletas.route');

const port = 3000;
const app = express();


app.use(express.json());
app.use(cors());
app.use('/paletas', routes);


  app.get('/paletas/todas-paletas', (req, res) =>{
    res.send(paletas);
  });

  app.get('/paletas/paleta/:id', (req, res) => {
    const idParam = Number(req.params.id);
    const chosenPaleta = paletas.find((paleta) => paleta.id === idParam);
    res.send(chosenPaleta);
  });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
