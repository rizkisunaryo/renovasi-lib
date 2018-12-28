function isStringEmpty (str) {
  return str === undefined || !str || str.trim() === ''
}

function isArrayEmpty (arr) {
  return !arr || arr.length < 1
}

function isObjectEmpty (obj) {
  return !obj || Object.keys(obj).length < 1
}

module.exports = {
  isStringEmpty,
  isArrayEmpty,
  isObjectEmpty
}
