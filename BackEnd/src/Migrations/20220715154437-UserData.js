'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: Sequelize.STRING,
      name: Sequelize.STRING,
      cpf: Sequelize.STRING,
      address: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      isGiver: Sequelize.BOOLEAN,
      isAdmin: Sequelize.BOOLEAN,
      profilePic: Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};