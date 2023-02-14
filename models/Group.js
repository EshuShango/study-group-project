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
      validate: {
        len:[4],
        // isUnique:true,
      }
    },
    subject:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[4],
        // isUnique:true,
      }
    },
    date_time:{
      type:DataTypes.DATE,
      allowNull:false,
    },
    resource_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'resource',
        key:'id'
      },
      validate:{
        len:[1]
      }
    }

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

