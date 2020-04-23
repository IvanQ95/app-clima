//API TEMPERATURA
const axios = require('axios')

const getClima = async (lat,lon) => {
const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=665a925069f74d361a93c8ee0a9e295f&units=metric`)
 
const temp=resp.data.main.temp;
const viento=resp.data.wind.speed;
const humedad=resp.data.main.humidity;
return{ 
temp,
viento,
humedad,
}
}

module.exports={
    getClima
}

