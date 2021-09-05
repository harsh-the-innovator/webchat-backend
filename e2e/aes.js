const CryptoJS = require("crypto-js");

const secretKey = process.env.PRIVATE_KEY;

function encryptData(data) {
  data = JSON.stringify(data);
  const cipherText = CryptoJS.AES.encrypt(data, secretKey).toString();

  return cipherText;
}

function decryptData(cipherText) {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
}

module.exports = { encryptData, decryptData };
