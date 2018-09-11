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
  db.getRestaurantInNeighborhood(req.params.id, (err, restaurants) => {
    if (error) {
      throw error;
    } else {
      res.send(restaurants);
    }
  });
});





app.listen('1177', () => console.log('listening on elevenseventyseven'));