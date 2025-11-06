module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("user_device_link", [
      {
        userId: 1,
        deviceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        deviceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        deviceId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user_device_link", null, {});
  },
};
