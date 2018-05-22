var proofx = require('../lib')

const hash = '15db6dbff590000ea13246e1c166802b690663c4e0635bfca78049d5a8762832'

async function test() {
  registration = await proofx.register(hash)
  status = await proofx.getStatus(hash)

  // you can override the config (see axios config options)
  let config = {baseUrl: 'https://proofofexistence.com'}

  docproofs = await proofx.docproofs(hash, config)

  return {status: status.data, docproofs: docproofs.data}
}

test()
  .then(function (results) {
    console.log('Status:', results.status)
    console.log('Docproofs:', results.docproofs)
  })
  .catch(function (error) {
    console.log(error);
  })
