const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    spacesUsed: {
      type: DataTypes.INTEGER,
    },
    spacesTaken: {
      type: DataTypes.INTEGER,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    hooks: {
      beforeCreate: signupDetails => {
        signupDetails.hash = bcrypt.hashSync(signupDetails.hash, 10);
      },
    },
  });
  Users.associate = models => {
    const {Spaces, Reviews, Rating, Reports} = models;
    Users.hasMany(Spaces, {
      as: 'userspaces',
      foreignKey: 'userspaceId',
    });
    Users.hasMany(Reviews, {
      foreignKey: 'reviewerId',
    });
    Users.hasMany(Rating, {
      foreignKey: 'userRatingId',
    });
    Users.hasMany(Reports, {
      foreignKey: 'reporterId',
    });
  };
  return Users;
};