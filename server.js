const express = require('express')

const MongoClient = require('mongodb').MongoClient

const bodyParser = require('body-parser')
const app = express()
let db = {}

app.use(bodyParser.urlencoded({ extended: true }))
// app.get('/', function(req, res) {
//   res.send('Hello World')
// })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
  res.send('done')
})
// mongodb+srv://admin:<password>@cluster0-rhfch.mongodb.net/test?retryWrites=true

MongoClient.connect(
  'mongodb+srv://admin:admin123@cluster0-rhfch.mongodb.net/test?retryWrites=true',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) return console.log(err)
    db = client.db('star-wars-quotes') // whatever your database name is
    console.log('HELLO WORLD?')
    app.listen(3000, () => {
      console.log('listening on 3000')
    })
  }
)
