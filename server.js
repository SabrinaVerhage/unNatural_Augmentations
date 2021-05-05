const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs')
const port = 8000

// make all the files in 'public' available
app.use(express.static("public"));

app.get('/', (req, res) => {
  // res.send('WORKING!')
  res.sendFile(__dirname + "/views/index.html");
})

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'MyPassword'
}

const server = https.createServer(httpsOptions, app).listen(port, () => {
  console.log('server running at ' + port)
})