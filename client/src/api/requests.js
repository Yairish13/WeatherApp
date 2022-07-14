import axios from 'axios';


const baseUrl = 'http://localhost:3001';


export const getWeather = async (searchedCity)=> {
    try {
      const {data} = await axios.get(
        `${baseUrl}/${searchedCity}`
      )
      return data;
    } catch (error) {
      console.log(error)
      return error.message;
    }
  }