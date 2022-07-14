const express = require('express');
const app = express();

const weatherRouter = require('./src/routes/v1/weather');
const cors = require('cors')



app.use(express.json());
app.use(cors());


app.use(weatherRouter);


const port= process.env.PORT || 3001;


app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(port, function () {
  console.log(`Fintek app listening on port ${port}!`);
});