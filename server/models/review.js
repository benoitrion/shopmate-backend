/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Review = sequelize.define('review', {
		review_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		customer_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		product_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		review: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		rating: {
			type: DataTypes.INTEGER(6),
			allowNull: false
		},
		created_on: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'review',
		classMethods: {
			associate: function (models) {
				Review.hasOne(models.Order),
				Review.hasOne(models.Product);
			}
		},
	});
	return Review;
};
