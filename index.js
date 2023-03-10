//          _-.:.-_
//       .'-/_:-:_\-'.
//      /_'/__ |__'._'\
//     '__(___.)___ )_ '
//     (__(___ )___ )__)
//     .__(___.(__  )_ .
//      \__\__ )__ /__/
//       -__\ _(_ )__-
//        \ _\_)./_ /
//          \_.|_./
//           |_|_|
//             |
//            [_]

require('dotenv').config()
const app = require('./app')
const {PORT} = process.env



async function main() {
  try {
    console.log('Connection has been established successfully.')
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    });
  } catch (error) {
    console.error(error)
  }
}

main();