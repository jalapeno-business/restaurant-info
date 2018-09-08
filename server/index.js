const MongoClient = require('mongodb');

const url = 'mongodb://localhost:27017';

MongoClient.connect(
  url,
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      console.log('error to the db');
    } else {
      console.log('success to the db');
      client.close();
    }
  });