const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

var filename = process.argv[2];
console.log(`filename=${filename}`);
(async function () {
  try {
const formData = new FormData();
formData.append('sampleFile', fs.createReadStream(filename));
const res = await axios.post('http://localhost:8040/upload', formData, {
  // You need to use `getHeaders()` in Node.js because Axios doesn't
  // automatically set the multipart form boundary in Node.
  headers: formData.getHeaders()
});

} catch (e) {
  console.error(e);
}
})();