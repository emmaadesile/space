
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    reviewId: DataTypes.INTEGER,
    reviewerName: DataTypes.STRING,
    reviewBody: DataTypes.TEXT,
  }, {});
  Reviews.associate = models => {
    const { Users } = models;
    
    Reviews.belongsTo(Users, {
      foreignKey: 'reviwerId',
    })
  };
  return Reviews;
};