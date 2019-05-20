const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/', function(req, res) {
//   res.send('Hello World')
// })

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index.html'));
  // Note: __dirname is directory that contains the JavaScript source code
  // Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
});

app.post('/quotes', (req, res) => {
  res.send('done');
});
// mongodb+srv://admin:<password>@cluster0-rhfch.mongodb.net/test?retryWrites=true
MongoClient.connect(
  'mongodb+srv://admin:admin123@cluster0-rhfch.mongodb.net/test?retryWrites=true',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) return console.log(err);
    const db = client.db('star-wars-quotes'); // whatever your database name is
    console.log('HELLO WORLD? >> ' + db);
    return app.listen(3000, () => {
      console.log('listening on 3000');
    });
  },
);
