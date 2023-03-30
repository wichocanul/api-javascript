const axios = require('axios').default;

const index = async (req, res) => {

    try {
        const characters = await axios.get('https://rickandmortyapi.com/api/character');
        console.log(characters);
        res.send({
            status: charcters.status,
            data: characters.data.results
        })
    } catch (error) {
        res.status(500);
        res.send({
            error: {
                message: "algo salio mal",
                value: error.message,
            }
        })
        console.error(error);
    }


    /* axios.get('https://rickandmortyapi.om/api/character')
    .then(function (response) {
        console.log(response.status);
        res.send({
            status: response.status,
            data: response.data.results
        })
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // siempre sera ejecutado
    }); */ 
}

const create = async (req, res) => {
    try {
        const newItem = await axios.post('http://sap/items', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })

        res.status(newItem.status);
        res.send({
            data: newItem.data
        })
    } catch (error) {
        res.status(500);
        res.send({
            error: {
                message: "algo salio mal",
                value: error.message,
            }
        })
        console.error(error);
    }
}

module.exports = { index, create }