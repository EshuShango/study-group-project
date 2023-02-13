const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class group extends Model {}

group.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    name:{
      type:DataTypes.VARCHAR[30],
      allowNull:false,
      validate: {
        len:[4],
        isUnique:true,
      }
    },
    subject:{
      type:DataTypes.VARCHAR[30],
      allowNull:false,
      validate:{
        len:[4],
        isUnique:true,
      }
    },
    chat_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        len:[1],
      }
    },
    date_time:{
      type:DataTypes.date_time,
      allowNull:false,
    },
    resource_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        len:[1]
      }
    }

  }
)

module.exports = group;