'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    spacesUsed: DataTypes.INTEGER,
    spacesTaken: DataTypes.INTEGER,
    verified: DataTypes.BOOLEAN
  }, {});
  Users.associate = models => {
    const {Spaces, Reviews, Reports} = models;
    Users.hasMany(Spaces, {
      as: 'userspaces',
      foreignKey: 'userspaceId'
    });
    Users.hasMany(Reviews, {
      foreignKey: 'reviewerId'
    });
    Users.hasMany(Ratings, {
      foreignKey: 'userRatingId'
    });
    Users.hasMany(Reports, {
      foreignKey: 'reporterId'
    })
  };
  return Users;
};