const mercadopago = require('mercadopago')

class BuyService {
  constructor() {}


  async buyOne({id_product, title, price, email, quantity, picture, description, category, name, lastName, area, phone, street, numberStreet, postal}) {

    try {
      let preference = {
/*         id: dev_24c65fb163bf11ea96500242ac130004, */
        items: [
          {
            title: title,
            unit_price: price,
            currency_id: 'ARS',
            quantity: quantity,
            id: id_product,
            picture_url: picture,
            description: description,
            category_id: category,
          },
        ],
        payer: {
          name: name,
          surname: lastName,
          email: email,
          phone: {
              area_code: area,
              number: phone
          },
          address: {
              street_name: street,
              street_number: numberStreet,
              zip_code: postal
          }
        },
        back_urls: {
          success: 'http://localhost:3010/api/buy/success',
          failure: 'http://localhost:3010/api/buy/failure',
          pendig: 'http://localhost:3010/api/buy/pendig',
        },
        auto_return: 'approved',
        binary_mode: true,
        payment_methods: {
          excluded_payment_methods: [
              {
                  id: "visa"
              }
          ],
          installments: 6
        },
        notification_url: "https://pf-voy-henry.vercel.app/",
        statement_descriptor: "Voy Henry"
      }
  
      const response = await mercadopago.preferences.create(preference);
  
      return response.body.init_point;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while creating preferences.');
    }
  } 


}

module.exports = BuyService;
/*     let preference = {
      id: dev_24c65fb163bf11ea96500242ac130004,
      items: [
        {
          title: title,
          unit_price: price,
          currency_id: 'ARS',
          quantity: quantity,
          id: id_product,
          picture_url: picture,
          description: description,
          category_id: category,
        },
      ],
      payer: {
        name: name,
        surname: lastName,
        email: email,
        phone: {
            area_code: area,
            number: phone
        },
        address: {
            street_name: street,
            street_number: numberStreet,
            zip_code: postal
        }
      },
      back_urls: {
        success: 'http://localhost:3010/api/success',
        failure: 'http://localhost:3010/api/failure',
        pendig: 'http://localhost:3010/api/pendig',
      },
      auto_return: 'approved',
      binary_mode: true,
      payment_methods: {
        excluded_payment_methods: [
            {
                id: "visa"
            }
        ],
        installments: 6
      },
      notification_url: "https://pf-voy-henry.vercel.app/",
      statement_descriptor: "Voy Henry"
    }; */