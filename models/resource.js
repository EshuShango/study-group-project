const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
const User = require('./user');

class Resource extends Model {}

Resource.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true,
    },
    url:{
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      }
    },
    description:{
      type: DataTypes.STRING,
    },
    user_id:{
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
        },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'resource',
  }
);

module.exports = Resource;