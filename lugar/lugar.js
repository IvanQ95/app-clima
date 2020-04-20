//API LAT LON SEGUN CIUDAD
const axios = require('axios')

const getLugarLatLon = async (dir)=>{
    
    const encodeUri= encodeURI (dir); //toma los argumentos que le pasamos por el flag para poder cargarlos al URL
    //TOMA LA COMA EN EL TERMINAL Y MUESTRA LO QUE ESCRIBIMOS EN CONSOLA
    // console.log(encodeUri);
    
    const instance = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUri}`,
        headers:{'X-RapidAPI-key':'b3d6f2cf5bmshcfae4aa1676c578p193292jsn30eb469c60d9'},
    })
    
    //ESTO DEVUELVE LA RESPUESTA COMPLETA DE LA SOLICITUD
    // instance.get()
    //         .then(resp =>{
    //             console.log(resp.data.Results);
           
    //         })
    //         .catch(err=>{
    //             console.log('ERROR!!!', err);
                
    //         })

            const resp = await instance.get()
            if(resp.data.Results.length === 0){
             
                throw new Error (`No hay resultado para dirección para ${dir}`)
            }
            
            const data = resp.data.Results[0];
            const direccion = data.name;
            const lat = data.lat;
            const lon = data.lon;
            
            return {
                direccion,
                lat,
                lon
            }
}

module.exports ={
    getLugarLatLon
}