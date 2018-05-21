# Proof of Existence API Client

## Usage

```
npm i @proofofexistence/api-client
```

Import using ES6
```
import proofx from "@proofofexistence/api-client"
```

See the [./examples](examples) folder for more.

```js
import { getStatus } from "@proofofexistence/api-client"

let status = getStatus(hash)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
```

Please refer to the complete [API docs](./docs/api.md) for more details.

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

## Build the docs

```
npm run docs
```
