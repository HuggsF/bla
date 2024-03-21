import { body } from 'express-validator';

export const contactCreateValidations = [

  body('nome').notEmpty().withMessage('O campo nome é obrigatório'),

  body('email').isEmail().withMessage('O campo email deve ser um email válido'),

  body('telefone').isMobilePhone('pt-BR').withMessage('O campo telefone deve ser um número de telefone válido'),
  
];
