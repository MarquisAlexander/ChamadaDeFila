const connection = require('../database/connection');

module.exports = {
    async create(request,response) {
        const nome = "Caixa02";
        const n_caixa = "02" ;

        await connection('controller').insert({
            nome,
            n_caixa
        })

        return response.json({ nome, n_caixa})
    }
}