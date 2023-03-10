const mercadopago = require('mercadopago')

class ProductsService {
  constructor() {}


  async buyOne({ id, title, price, email, quantity, picture, description, category, name, lastName, area, phone, street, numberStreet, postal }) {
    let preference = {
      id: dev_24c65fb163bf11ea96500242ac130004,
      items: [
        {
          title: title,
          unit_price: price,
          currency_id: 'ARS',
          quantity: quantity,
          id: id,
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
        success: `http://localhost:3001/api/v1/products/success?customer=${email}`,
        failure: 'http://localhost:3001/api/v1/products/fail',
        pendig: 'http://localhost:3001/api/v1/products/pendig',
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
    };

    const product = await productModel.findOne({
      where: {
        id: id,
      },
    });

    product.stock -= quantity;

    await product.save();

    const response = await mercadopago.preferences.create(preference);

    return response.body.init_point;
  }
}

module.exports = ProductsService;