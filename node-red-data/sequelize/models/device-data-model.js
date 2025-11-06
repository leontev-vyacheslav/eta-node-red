'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeviceDataModel extends Model {
    static associate(models) {
      DeviceDataModel.belongsTo(models.FlowDataModel, { foreignKey: 'flowId', as: 'flow' });
      DeviceDataModel.hasMany(models.DeviceStateDataModel, { foreignKey: 'deviceId', as: 'states' });
    }
  }
  
  DeviceDataModel.init({
    name: DataTypes.STRING(32),
    flowId: DataTypes.INTEGER,
    settings: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'DeviceDataModel',
    tableName: 'device',
    freezeTableName: true,
  });

  return DeviceDataModel;
};

