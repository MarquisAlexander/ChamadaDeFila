const connection = require('../database/connection');

module.exports = {
    async index(request, response) {

        const caixas = await connection('controller')
        .select('*')
        .orderByRaw('id desc')
        .limit('1')

        return response.json(caixas);
    }
}