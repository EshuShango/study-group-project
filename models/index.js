const Chat = require("./Chat");
const GroupUser = require("./GroupUser");
const Resources = require("./Resource");
const StudyGroup = require("./StudyGroup");
const User = require("./User");

Chat.hasMany(User, {
  foreignKey: "User.id",
  onDelete:"CASCADE",
});

GroupUser.hasMany(User, {
  foreignKey:"User.id",
  onDelete:"CASCADE"
});



StudyGroup.hasMany(User, {
  foreignKey:"User.id",
  onDelete:"CASCADE",
  through:{model: GroupUser},
  as:"users_studygroup"
});

StudyGroup.hasOne(Chat, {
  foreignKey:"Chat.id",
  onDelete:"CASCADE",
});

StudyGroup.hasMany(Resources, {
  foreignKey:"Resource.id",
  onDelete:"CASCADE",
})


User.hasMany(Chat,{
  foreignKey:"Chat.id",
  onDelete:"CASCADE",
});

User.hasMany(StudyGroup, {
  foreignKey:"GroupUser.id",
  onDelete:"CASCADE",
});

User.hasMany(Resources, {
  foreginKey:"Resource.id",
  onDelete:"CASCADE",

});

//bruh