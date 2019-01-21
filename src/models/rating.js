
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    ratingId: DataTypes.STRING,
    stars: DataTypes.INTEGER,
  }, {});
  Rating.associate = models => {
    // associations can be defined here
    const { Users, Spaces } = models;
    Rating.belongsTo(Users, {
      as: 'userRatings',
      foreignKey: 'userRatingId',
    });
    Rating.belongsTo(Spaces, {
      as: 'userSpaces',
      foreignKey: 'ratingId',
    });
  };
  return Rating;
};