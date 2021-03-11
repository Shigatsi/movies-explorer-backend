const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
  res.send('ITS ALIVE!')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listen on port ${PORT}`);
});
