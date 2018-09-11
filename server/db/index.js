const MongoClient = require('mongodb');

const url = 'mongodb://localhost:27017/';


const getRestaurantById = (id, callback) => {
  MongoClient.connect(
    url,
    { useNewUrlParser: true },
    (err, db) => {
      if (err) {
        console.log('error to the db');
        throw err;
      } else {
        console.log('success to the db');
        const mdb = db.db('zagat');
        mdb.collection('restaurants').findOne({ id: Number(id) }, (error, restaurant) => {
          if (error) {
            console.log('error getting restaurant');
            throw error;
          } else {
            console.log('got the restaurant');
            callback(null, restaurant);
          }
        });
      }
    }
  );
};

const getRestaurantInNeighborhood = ((neighborhood, callback) => {
  MongoClient.connect(
    url,
    { useNewUrlParser: true },
    (err, db) => {
      if (err) {
        console.log('error to the db');
        throw err;
      } else {
        console.log('success to the db');
        const mdb = db.db('zagat');
        mdb.collection('restaurant').find({ businessInfo: {location: { neighborhood: neighborhood} } }, (error, restaurants) => {
          if (error) {
            console.log('error getting restaurants');
            throw error;
          } else {
            console.log('success getting restaurants');
            callback(null, restaurants);
          }
        });
      }
    }
  );
});



module.exports.getRestaurantById = getRestaurantById;
module.exports.getRestaurantInNeighborhood = getRestaurantInNeighborhood;
