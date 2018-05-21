# Proof of Existence API Client

## Development

```sh
npm install
npm start
```

You can run the examples with `npm start` and browse to http://localhost:8080/examples/


## Build

```sh
npm run build
```

## Test

```
npm test
```

## Usage

See the [./examples](examples) folder.

```js
let status = proofx.getStatus(hash)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
```

## API
