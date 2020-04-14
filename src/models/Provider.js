const { Model, DataTypes } = require('sequelize');

class Provider extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING,
                phone: DataTypes.STRING,
                cnpj: DataTypes.STRING
            },{
                sequelize
            }
        )
    }
}

module.exports = Provider;