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


async function getStatus() {
  // you can override the config (see axios config options)
  let config = {baseUrl: 'https://proofofexistence.com'}
  status = proofx.getStatus(hash, config)

  return status
}

getStatus()
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });

async function getDocproofs() {
  let docproofs = proofx.docproofs(hash)
  return docproofs
}

getDocproofs()
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
