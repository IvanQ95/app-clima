//API TEMPERATURA
const axios = require('axios')

const getClima = async (lat,lon) => {
const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=665a925069f74d361a93c8ee0a9e295f&units=metric`)
 
 return resp.data.main.temp
}

module.exports={
    getClima
}

