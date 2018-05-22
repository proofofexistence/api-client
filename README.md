# Proof of Existence API Client

[![npm version](https://badge.fury.io/js/%40proofofexistence%2Fapi-client.svg)](https://badge.fury.io/js/%40proofofexistence%2Fapi-client)

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
  .then( response => 
    console.log(response.data)
  )
  .catch( error => 
    console.log(error);
  )
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
