const axios = require('axios')
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv


const getInfo= async(direccion) => {
    // Salida
    try {
        //Crear constante coordenadas para extraer Latitud y Longitud
        const coords = await lugar.getLugarLatLon(direccion);
        
        //Crear constante para cargar los datos extraidos y sacar el y el clima
        const temp = await clima.getClima(coords.lat,coords.lon);
       
        return(`La temperatura de ${coords.direccion} es de ${temp.temp} grados, la velocidad del viento es de ${temp.viento} km/h y hay una humedad del ${temp.humedad}%`)
    } catch (error) {
        return (`No se pudo determinar la temperatura de ${direccion}`)
    
    }
    
}
//Cargamos dato del terminal a getInfo
getInfo(argv.direccion)
.then(console.log)
.catch(console.log)


//ASI SE USABA PARA SACAR TEMPERATURA ANTES DE UNIFICAR APIS
// clima.getClima(-32.4886188,-58.2234697)
// .then(console.log)
// .catch(console.log)

//node app -d "Concepción del uruguay"