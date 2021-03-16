* look at file-upload, form-data, axios libraries

## Install app
```bash
git clone https://github.com/rajeshpv-docker/node-fileupload-example.git
cd node-fileupload-example
npm i

```
  
### start file server
* npm start

### test file upload - (browser as client)
* open file-post form  in browser (tested in chrome) http://localhost:8040/form 
* and upload a file
* you should find file put into ./uploads folder

### test file upload - (NodeJs as client)
```bash
node client.js ./csv-source/site-1.csv
ll ./uploads 

```