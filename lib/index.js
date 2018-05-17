const axios = require('axios')

const apiVersion = 'v1' || options.apiVersion

// default values
axios.defaults.baseURL = 'https://proofofexistence.com';

console.log(
  'Init API client\n',
  `apiVersion : ${apiVersion}`
)

// URL parser
const getURL = (path, internal = false) => {
  const apiPath = internal
    ? `/api/internal/${path}`
    : `/api/${apiVersion}/${path}`
  return apiPath
}

/*
* CONFIG
*/
const getConfig = () => {
  const url = getURL('config')
  return axios.get(url)
}

/*
* CONFIRMED / UNCONFIRMED
*/
const getLatestConfirmed = () => {
  const url = getURL('latest/confirmed', true)
  return axios.get(url)
}

const getLatestUnconfirmed = (callback) => {
  const url = getURL('latest/confirmed', true)
  return axios.get(url)
}

/*
* CREATE, SHOW, UPDATE based on hash
*/
const register = (hash) => {
  const url = getURL('register')
  return axios.post(url, { d : hash })
}

const getStatus = (hash) => {
  const url = getURL(`status/${hash}`)
  return axios.get(url)
}

const docproofs = (hash) => {
  const url = getURL(`docproofs/${hash}`)
  return axios.get(url)
}

const updateStatus = (hash) => {
  const url = getURL('status')
  return axios.post(url, { d: hash })
}


const api = {
  getConfig,
  getLatestConfirmed,
  getLatestUnconfirmed,
  register,
  docproofs,
  getStatus,
  updateStatus
}

if (typeof window === 'undefined') {
  module.exports = api
} else {
  window.proofx = api
}
