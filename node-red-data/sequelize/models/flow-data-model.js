"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FlowDataModel extends Model {
    static associate(models) {
      FlowDataModel.hasMany(models.DeviceDataModel, { foreignKey: "flowId", as: "devices" });
    }
  }

  FlowDataModel.init(
    {
      name: DataTypes.STRING(32),
      uid: DataTypes.STRING(16),
    },
    {
      sequelize,
      modelName: "FlowDataModel",
      tableName: "flow",
      freezeTableName: true,
    }
  );

  return FlowDataModel;
};
