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
 * Create an Axios Client with defaults
 */
const client = axios.create({ baseURL : baseURL });


/**
 * Request Wrapper with default success/error actions
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

/*
* CONFIG
*/
const getConfig = () => {
  return request({
    method: 'get',
    url: getURL('config')
  })
}

/*
* CONFIRMED / UNCONFIRMED
*/
const getLatestConfirmed = () => {
  return request({
    method: 'get',
    url: getURL('latest/confirmed', true)
  })
}

const getLatestUnconfirmed = (callback) => {
  return request({
    method: 'get',
    url: getURL('latest/confirmed', true)
  })
}

/*
* CREATE, SHOW, UPDATE based on hash
*/
const register = (hash) => {
  return request({
    method: 'get',
    url: getURL('register'),
    data : { d : hash }
  })
}

const getStatus = (hash) => {
  return request({
    method: 'get',
    url: getURL(`status/${hash}`)
  })
}

const docproofs = (hash) => {
  return request({
    method: 'get',
    url: getURL(`docproofs/${hash}`)
  })
}

const updateStatus = (hash) => {
  return request({
    method: 'post',
    url: getURL('status'),
    data: { d: hash }
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
