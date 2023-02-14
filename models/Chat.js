const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Chat extends Model {}

// create fields/columns for Chat model
Chat.init (
  { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true

    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      underscored: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    message:{
      type: DataTypes.STRING,
      allowNull: false,
      
    }, 
    study_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model:'group',
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'chat'
  }

);

module.exports = Chat;