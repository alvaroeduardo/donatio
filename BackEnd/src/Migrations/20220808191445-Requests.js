'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('requests', { 
      id: Sequelize.STRING,
      idApplicant: Sequelize.STRING,
      idGiver: Sequelize.STRING,
      idDonate: Sequelize.STRING,
      status: Sequelize.STRING
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('requests');
  }
};
