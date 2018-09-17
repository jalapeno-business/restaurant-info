const express = require('express');

const app = express();
const parser = require('body-parser');
const db = require('./db');

app.use(express.static(`${__dirname}/../client/dist`));

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
      const neighborhood = result.businessInfo.location.neighborhood;
      const cuisine = result.details.cuisine;
      db.getRestaurantSuggestions(neighborhood, cuisine, (err, restaurants) => {
        if (err) {
          console.log('error here');
          throw err;
        } else {
          res.send(restaurants);
        }
      });
    }
  });
});


app.listen('1177', () => {
  console.log('listening on elevenseventyseven');
});
