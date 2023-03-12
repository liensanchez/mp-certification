const mercadopago = require("mercadopago");
require('dotenv').config();
const {
  ACCES_TOKEN_TEST
} = process.env

function mercadopagoconfig() {
  
  // Agrega credenciales
  mercadopago.configure({
    access_token: ACCES_TOKEN_TEST
  });
  
}

module.exports = { mercadopagoconfig }