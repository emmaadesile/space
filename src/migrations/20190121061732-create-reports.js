/* eslint-disable */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reportId: {
        type: Sequelize.INTEGER,
      },
      reportTitle: {
        type: Sequelize.STRING,
      },
      reportReason: {
        type: Sequelize.STRING,
      },
      reportBody: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Reports'),
};