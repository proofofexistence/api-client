var proofx = require('../lib')

const hash = '15db6dbff590000ea13246e1c166802b690663c4e0635bfca78049d5a8762832'

let register = proofx.register(hash)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });

let status = proofx.getStatus(hash)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });

async function test() {
  let status = proofx.getStatus(hash)
  status  = proofx.updateStatus(hash)
  console.log(status.pending) // true

  let docproofs = proofx.docproofs(hash)
  console.log(docproofs.items) // []

  // you can override the config (see axios config options)
  let config = {baseUrl: 'https://proofofexistence.com'}
  status = proofx.getStatus(hash, config)

  return status
}

test()
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error);
  });
