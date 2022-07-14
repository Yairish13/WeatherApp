const express = require('express')
const weatherRouter = express.Router();
const getWeatherOfCity = require('../../controllers')

weatherRouter.get('/:city',getWeatherOfCity)


 module.exports = weatherRouter;