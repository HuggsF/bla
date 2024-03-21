import express from 'express';
import { validationResult } from 'express-validator';
import { contactCreateValidations } from './src/middlewares/createContactValidate';


const app = express();

app.use(express.json());

app.post('/contatos', contactCreateValidations , (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { nome, email, telefone } = req.body;
  
    res.status(200).json({ message: 'Dados de contato recebidos com sucesso!' });
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
