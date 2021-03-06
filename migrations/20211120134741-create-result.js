module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("results", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      temp: {
        type: Sequelize.STRING,
      },
      trubidity: {
        type: Sequelize.STRING,
      },
      depth: {
        type: Sequelize.STRING,
      },
      coliform: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("results");
  },
};
