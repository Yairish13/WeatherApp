const axios = require("axios");
const config = require('../../config/default.json');
const apiKey = config['apiKey'];
const getWeatherOfCity = async (req, res) => {
  const {params} = req;
  const {city} = params;
  try {
    const {data} = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&hour`
      );
    res.status(200).send(data)
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};


module.exports = getWeatherOfCity;