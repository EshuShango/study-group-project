const Chat = require("./Chat");
const GroupUser = require("./GroupUser");
const Resources = require("./Resources");
const StudyGroup = require("./StudyGroup");
const User = require("./User");

User.hasMany(Chat,{
  foreignKey:"user_id",
  onDelete:"CASCADE",
});

Chat.belongsTo(User, {
  foreignKey: "user_id",
});


User.belongsToMany(StudyGroup, {
  through: { model: GroupUser },
  as: "group_users"
});


StudyGroup.belongsToMany(User, {
  through: { model: GroupUser },
  as: "users_groups"
});


User.hasMany(Resources, {
  foreginKey:"user_id",
  onDelete:"CASCADE",
});

Resources.belongsTo(User, {
  foreignKey: "user_id",
});

StudyGroup.hasOne(Chat, {
  foreignKey:"chat_id",
  onDelete:"CASCADE",
});

Chat.belongsTo(StudyGroup, {
  foreignKey:"chat_id",
});

StudyGroup.hasMany(Resources, {
  foreignKey:"resource_id",
  onDelete:"CASCADE",
});

Resources.belongsTo(StudyGroup, {
  foreignKey:"resource_id",
});
  
//bruh