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

const getRestaurantSuggestions = ((neighborhood, cuisine, callback) => {
  MongoClient.connect(
    url,
    { useNewUrlParser: true },
    (err, db) => {
      if (err) {
        console.log('error to the db');
        throw err;
      } else {
        console.log('success to the db for suggestions');
        const mdb = db.db('zagat');
        mdb.collection('restaurants').find( { 
          $and: [
            { 'businessInfo.location.neighborhood': neighborhood },
            { 'details.cuisine': cuisine }
          ]
        }).toArray((error, documents) => {
          if (error) {
            console.log('error converting to array');
            throw error;
          } else {
            callback(null, documents);
          }
        }
        );
      }
    }
  );
});
//   MongoClient.connect(
//     url,
//     { useNewUrlParser: true },
//     (err, db) => {
//       if (err) {
//         console.log('error to the db');
//         throw err;
//       } else {
//         console.log('success to the db for suggestions');
//         const mdb = db.db('zagat');
//         mdb.collection('restaurant').find( { 
//           $and: [
//             { 'businessInfo.location.neighborhood': neighborhood },
//             { 'details.cuisine': cuisine }
//           ]
//         }, (error, restaurants) => {
//           if (error) {
//             console.log('error getting restaurants');
//             throw error;
//           } else {
//             console.log('success getting restaurants');
//             console.log(restaurants.toArray((error, documents) => {
//               if (error) {
//                 console.log('error converting to array')
//                 throw error;
//               } else {
//                 console.log(documents);
//                 callback(null, documents);
//               }
//             }));
//           }
//         });
//       }
//     }
//   );
// });



module.exports.getRestaurantById = getRestaurantById;
module.exports.getRestaurantSuggestions = getRestaurantSuggestions;
