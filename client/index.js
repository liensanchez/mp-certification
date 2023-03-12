const mercadopago = new MercadoPago('APP_USR-ff96fe80-6866-4888-847e-c69250754d38', {
  locale: 'es-AR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
})


let button = document.getElementById('sendBuy')

button.addEventListener('click',buy )


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
    createCheckoutButton(preference.id);

  })
  .catch(error => console.error(error))
}


function createCheckoutButton(preferenceId) {
  // Initialize the checkout
  mercadopago.checkout({
    preference: {
      id: preferenceId
    }
  });
}


/* 
  fetch('http://localhost:3010/api/buy/pendig', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    console.log(error)
  })
*/

/* hay q agregar mp */