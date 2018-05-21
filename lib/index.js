const axios = require('axios')

const apiVersion = 'v1' || options.apiVersion

// default values
const baseURL = 'https://proofofexistence.com';

console.debug(
  'Init API client\n',
  `apiVersion : ${apiVersion}\n`,
  `baseURL : ${baseURL}`,
)

// URL parser
const getURL = (path, internal = false) => {
  const apiPath = internal
    ? `/api/internal/${path}`
    : `/api/${apiVersion}/${path}`
  return apiPath
}

/**
 * @typedef {Object} Registration
 * @property {string} digest the sha256 hash
 * @property {string} payment_address the BTC address
 * @property {boolean} pending if the paiment has been received
 * @property {string} network BTC netwotk 'testnet' or 'mainnet'
 * @property {boolean} success if the transaction has been recorded successfully
 * @property {string} timestamp the registration timestamp
 * @property {string} tx the BTC transaction id
 * @property {string} txstamp the BTC transaction timestamp
 * @property {string} blockstamp the BTC block timestamp
 * @property {string} price the price paid for the registration
 */

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({ baseURL : baseURL });


/**
 * Custom
 * @param {object} - an object containing the method and the URL to fetch
 * @returns {Promise} a JS promise
 */
const request = function(options) {
  const onSuccess = function(response) {
    // console.debug('Request Successful!', response);
    return response;
  }

  const onError = function(error) {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }

  return client(options)
            .then(onSuccess)
            .catch(onError);
}

/**
 * Get current config
 *
 * @async
 * @returns {Promise.<object>} the server config
 */
const getConfig = () => {
  return request({
    method: 'get',
    url: getURL('config')
  })
}

/**
 * Get all confirmed transactions
 * @returns {Promise.Array.<Registration>} an array of confirmed
 */
const getLatestConfirmed = () => {
  return request({
    method: 'get',
    url: getURL('latest/confirmed', true)
  })
}

/**
 * Get all transactions pending confirmation
 * @returns {Promise.Array.<Registration>} an array of confirmed
 */
const getLatestUnconfirmed = (callback) => {
  return request({
    method: 'get',
    url: getURL('latest/confirmed', true)
  })
}


/**
 * Register a new hash in the BTC blockchain
 * @param {string} - a valid Sha256 hash
 * @returns {Promise.<Registration>}
 */
const register = (hash) => {
  return request({
    method: 'get',
    url: getURL('register'),
    data : { d : hash }
  })
}

/**
 * Get current status of a registration
 * @param {string} - a valid Sha256 hash
 * @returns {Promise.<Registration>}
 */
const getStatus = (hash) => {
  return request({
    method: 'get',
    url: getURL(`status/${hash}`)
  })
}

/**
 * Update the current status of a registration
 * @param {string} - a valid Sha256 hash
 * @returns {Promise.<Registration>}
 */
const updateStatus = (hash) => {
  return request({
    method: 'post',
    url: getURL('status'),
    data: { d: hash }
  })
}

/**
* @typedef {Object} Docproof
* @property {string} blockchash the sha256 hash
* @property {number} confirmations number of times it has been confirmed in the BTC blockchain
* @property {string} txid the BTC transaction id
* @property {string} txstamp the BTC transaction timestamp
* @property {string} blockheight position of the block in the BTC blockchain
* @property {number} blocktime the BTC block timestamp
* @property {string} metadata the OP_RETURN data containing the sha256 and the protocol
*/

/**
 * Get current docproofs of the registration
 * @param {string} - a valid Sha256 hash
 * @returns {Promise.Array.<Docproof>}
 */
const docproofs = (hash) => {
  return request({
    method: 'get',
    url: getURL(`docproofs/${hash}`)
  })
}


const proofx = {
  getConfig,
  getLatestConfirmed,
  getLatestUnconfirmed,
  register,
  docproofs,
  getStatus,
  updateStatus
}

module.exports = proofx
