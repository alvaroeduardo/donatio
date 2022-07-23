'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('donations', { 
      id: Sequelize.STRING,
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      idGiver: Sequelize.STRING,
      picDonate: Sequelize.STRING,
      locate: Sequelize.STRING,
      coord: Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('donates');
  }
};
