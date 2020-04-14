const { Model, DataTypes } = require('sequelize');

class ProviderAddress extends Model {
    static init(sequelize) {
        super.init(
            {
                street: DataTypes.STRING,
                number: DataTypes.INTEGER,
                city: DataTypes.STRING,
                zip_code: DataTypes.STRING
            },
            {
                sequelize
            }
        )
    }

    static associate(models){
        this.belongsTo(models.Provider, {foreignKey: 'provider_id', as: 'providerAddress'})
    }
}