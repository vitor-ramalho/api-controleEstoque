'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'products',
      'provider_id',{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'providers', key:'id'}
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'products',
      'provider'
    )
  }
};
