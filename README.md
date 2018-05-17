# Proof of Existence API Client

## Development

```sh
npm install
npm start
```

## Usage

```js
async function test() {
  const hash = '15db6dbff590000ea13246e1c166802b690663c4e0635bfca78049d5a8762832'
  let register = proofx.register(hash)
  console.log(register.success) // true

  let status = proofx.status(hash)
  status  = proofx.update(hash)
  console.log(status.pending) // true

  let docproofs = proofx.docproofs(hash)
  console.log(docproofs.items) // []

  // you can override the config (see axios config options)
  let config = {baseUrl: 'https://proofofexistence.com'}
  status = proofx.status(hash, config)

  return status
}

test()
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error);
  });
```
