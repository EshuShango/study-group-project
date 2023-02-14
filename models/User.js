//! WE HAVE TO FILL IN NECESSARY CODE etc
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//* below we create a async function to validate that a real email is put within
//* the Email input etc
const validateEmail = async (email) => {
  typeof email !== 'string' ? console.error('Email must be a string') : null;

  let atpos = email.indexOf('@');
  let dotpos = email.lastIndexOf('.com');

  return atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length
    ? false
    : true;
};
const email = '';
const result = validateEmail(email);
console.log(result);
//* ---DON'T HAVE TO USE just thought it be cool + experimenting etc ---

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        //validating email
        isEmail: true,
        //may not work
        validate: validateEmail,
      },
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        //validate password length here, and any other requirements we
        //and users to have for passwords
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
