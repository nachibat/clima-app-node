const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'e426665b92msha261772dea4b51dp1487dejsn63ad137388e7' }
    });

    const resp = await instance.get();

    if (resp.data.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.data[0];
    const direccion = data.name;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}