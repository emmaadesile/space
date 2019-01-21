

module.exports = {
  up: (queryInterface, Sequelize) => 
   [
    queryInterface.addColumn(
      'Users',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    ),
    queryInterface.addColumn(
      'Users',
      'hash',
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    ),
  ],

  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('Users'),
};
