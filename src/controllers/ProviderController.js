const Provider = require('../models/Provider');

module.exports = {
    async index(req, res){
        const providers = await Provider.findAll();

        res.json(providers);
    },

    async store(req, res){
        const {name, email, phone, cnpj} = req.body;

        const provider = await Provider.create({
            name,
            email,
            phone,
            cnpj
        });

        return res.json(provider);
    }
}