const MongoClient = require('mongodb');

const url = 'mongodb://localhost:27017/';

let db;

MongoClient.connect(
  url,
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      console.log('error to the db');
      throw err;
    } else {
      console.log('success to the db');
      db = client.db;
    }
  }
);

const getRestaurantById = (id, callback) => {
  db.collection('restaurant').find({ id: Number(id) }, (error, restaurant) => {
    if (error) {
      console.log('error getting restaurant');
      throw error;
    } else {
      console.log('got the restaurant');
      callback(restaurant);
    }
  });
};

const getRestaurantInNeighborhood = ((neighborhood, callback) => {
  db.collection('restaurant').find({ businessInfo: {location: { neighborhood: neighborhood} } }, (error, restaurants) => {
    if (error) {
      console.log('error getting restaurants');
      throw error;
    } else {
      console.log('success getting restaurants');
      callback(restaurants);
    }
  });
});

module.exports.getRestaurantById = getRestaurantById;
module.exports.getRestaurantInNeighborhood = getRestaurantInNeighborhood;
