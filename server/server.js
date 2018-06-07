const express = require('express');
const reload = require('reload')
const properties = require('../properties');


console.log("ok", properties.TWITTER.CONSUMER_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express peeps there!' });
});


reload(app);
app.listen(port, () => console.log(`Listening on port ${port}`));