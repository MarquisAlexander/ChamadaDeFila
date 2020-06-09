const connection = require('../database/connection');

module.exports = {
    async create(request,response) {
        const nome = "Caixa";
        const {n_caixa} = request.body;

        await connection('controller').insert({
            nome,
            n_caixa
        })

        return response.json({ nome, n_caixa})
    }
}