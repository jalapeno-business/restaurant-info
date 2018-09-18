const MongoClient = require('mongodb');
const dummyData = require('./zagat-data.json');

const url = 'mongodb://localhost:27017';

MongoClient.connect(
  url,
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      console.log('error to the db');
    } else {
      console.log('success to the db');
      const db = client.db('zagat');
      db.collection('restaurants').insertMany(dummyData, (err, res) => {
        if (err) {
          console.log('error', err);
        } else {
          console.log('success!');
          client.close();
        }
      });
    }
  },
);
