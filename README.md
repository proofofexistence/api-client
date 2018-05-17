# Proof of Existence API Client

## Development

```sh
sudo npm install -g webpack-cli
npm install
webpack --mode development
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
