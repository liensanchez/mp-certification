const mp = new MercadoPago('TEST-36f687a5-55b1-4854-a4e1-34095d407ac5', {
  locale: 'es-AR'
});


let button = document.getElementById('sendBuy')

button.addEventListener('click', buy)


const data = {
  "id_product": 1234,
    "title": "mercadopago certificacion",
    "price": 2000,
    "email":"liensanchezppc@gmail.com",
    "quantity": 1,
    "picture": "https://agustinhansen.com/wp-content/uploads/2020/10/mercado-pago-peru.jpg",
    "description": "BackEnd for Certification",
    "category": "BackEnd",
    "name": "Lien",
    "lastName": "Sanchez",
    "area": "261",
    "phone": 2167506,
    "street": "jujuy",
    "numberStreet": 1910,
    "postal": "5506"
}


function buy () {
  fetch('http://localhost:3010/api/buy', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
    
  })
  .then(response => response.json())
  .then(function (preference) {
    console.log(preference)
    createCheckoutButton(preference.body.id);
  })
  .catch(error => console.error(error))
}


function createCheckoutButton(preferenceId) {
  // Initialize the checkout
  mp.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '#button-checkout', 
      label: 'Pagar!', 
    }
  });
}
