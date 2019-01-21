
module.exports = (sequelize, DataTypes) => {
  const Spaces = sequelize.define('Spaces', {
    spaceId: DataTypes.STRING,
    spaceType: DataTypes.STRING,
    roomsCount: DataTypes.INTEGER,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
  }, {});
  Spaces.associate = models => {
    Spaces.belongsTo(models.Users, {
      as: 'userspaces',
      foreignKey: 'userspaceId',
    });
    Spaces.hasMany(models.Reviews, {
      foreignKey: 'reviewerId',
    });
    Spaces.hasMany(models.Reports, {
      foreignKey: 'reportId',
    });
  };
  return Spaces;
};