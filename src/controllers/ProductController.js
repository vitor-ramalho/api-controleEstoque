const User = require('../models/User');
const Product = require('../models/Product');
const Provider = require('../models/Provider')

module.exports = {
    //Exibe todos produtos
    async index(req, res) {
        const products = await Product.findAll();

        return res.json(products);
    },
    //exibe produtos criados por determinado funcionario
    async userProducts(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'products' }
        });

        return res.json(user);

    },
    //Cria novo produto
    async store(req, res) {
        const { user_id, provider_id } = req.params;
        const { name, stock, price } = req.body;

        const user = await User.findByPk(user_id);
        const provider = await Provider.findByPk(provider_id)

        if (!user) {
            return res.status(400).json({ error: 'User not Found' });
        }

        const product = await Product.create({
            name,
            stock,
            price,
            user_id,
            provider
        });

        return res.json(product);
    },
    async delete(req, res) {

    }
}