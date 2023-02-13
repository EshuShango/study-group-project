//! WE HAVE TO FILL IN NECESSARY CODE etc
const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true,
    },
    user:{
      type:sequelize.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isUniqie: function (value,next){
          var self = this;
          User.find({where: {user: value}})
            .then(function (user) {
              if (user && self.id !== user.id) {
                return next("Email is already in use...");
              }
              return next();
            })
            .catch(function (err) {
              return next(err);
            });
        }
      }
    },
    password:{
      type:sequelize.STRING,
      allowNull:false,
      unique:false,
      validate:{
        //validate password length here, and any other requirements we 
        //and users to have for passwords
      }
    }
  }
)
