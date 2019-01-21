'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    reviewId: DataTypes.INTEGER,
    reviewerName: DataTypes.STRING,
    reviewBody: DataTypes.TEXT
  }, {});
  Reviews.associate = models => {
    // associations can be defined here
  };
  return Reviews;
};