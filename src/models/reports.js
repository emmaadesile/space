'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reports = sequelize.define('Reports', {
    reportId: DataTypes.INTEGER,
    reportTitle: DataTypes.STRING,
    reportReason: DataTypes.STRING,
    reportBody: DataTypes.TEXT
  }, {});
  Reports.associate = models => {
    const { Spaces, Users } = models;
    Reports.belongsTo(Spaces, {
      as: 'report',
      foreignKey: 'reportId'
    });
    Reports.belongsTo(Users, {
      as: 'userId',
      foreignKey: 'reporterId'
    })
  };
  return Reports;
};