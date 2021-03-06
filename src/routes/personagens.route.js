const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));
const express = require('express');
const router = express.Router();

const personagensController = require('../controllers/personagens.controller');

router.get('/all-personagens', personagensController.findPersonagensController);
router.get('/personagem/:id', personagensController.findPersonagemByIdController);
router.post('/create', personagensController.createPersonagemController);
router.put('/update/:id', personagensController.updatePersonagemController);
router.delete('/delete/:id', personagensController.deletePersonagemController);

module.exports = router;
