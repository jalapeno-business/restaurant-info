const express = require('express');
const app = express();
const db = require('./db');
const parser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist')); 

app.use(parser.json());


app.get('/restaurant/:id/info', (req, res) => {
  db.getRestaurantById(req.params.id, (error, result) => {
    if (error) {
      throw error;
    } else {
      res.send(result);
    }
  });
});



app.get('/restaurant/:id/suggestions', (req, res) => {
  db.getRestaurantById(req.params.id, (error, result) => {
    if (error) {
      throw error;
    } else {
      let neighborhood = result.businessInfo.location.neighborhood;
      db.getRestaurantInNeighborhood(neighborhood, (err, restaurants) => {
        if (err) {
          throw err;
        } else {
          res.send(restaurants);
        }
      });
    }
  });
}); 





app.listen('1177', function() {
  console.log('listening on elevenseventyseven');
});