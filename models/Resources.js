const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

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
      type: DataTypes.TEXT,
      validate: {
        isUrl: true,
      }
    },
    description:{
      type: DataTypes.TEXT,
    },
    user_id:{
      type: DataTypes.INTEGER,
      references: {
        model: "user",
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