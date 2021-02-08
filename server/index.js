const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(require('morgan')('dev'));

const { AIRTABLE_API_KEY, BASE_ID } = process.env;
const port = process.env.PORT || 5000;

app.post('/createEvent', (req, res) => {
  const event = req.body;
  const payload = {
    records: [
      {
        fields: event,
      },
    ],
  };
  console.log(event);
  fetch(`https://api.airtable.com/v0/${BASE_ID}/Events`, {
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/deleteEvent', (req, res) => {
  fetch(`https://api.airtable.com/v0/${BASE_ID}/Events/${req.body.id}`, {
    method: 'delete',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`🚀 Listening on port ${port}`);
});
