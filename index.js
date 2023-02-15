const express = require('express');
const app = express();
const port = 3001;
app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});
