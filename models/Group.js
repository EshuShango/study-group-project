const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Group extends Model {}

Group.init(

  {
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false,

      unique:true,
      // isUnique:true,
      validate: {
        len:[4],
      }
    },
    subject:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        len:[4],

      }
    },
    date:{
      type:DataTypes.DATEONLY,
      allowNull:false,
    },
    time:{
      type:DataTypes.STRING,
      allowNull:false,
    },
  },
  {
    sequelize,
    timestmaps:true,
    freezeTableName:true,
    uderscored:true,
    modelName:'group'
  }
);

module.exports = Group;

