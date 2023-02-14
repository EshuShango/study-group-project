const Chat = require("./Chat");
const GroupUser = require("./GroupUser");
const Resources = require("./Resources");
const Group = require("./Group");
const User = require("./User");

User.hasMany(Chat,{
  foreignKey:"user_id",
});

Chat.belongsTo(User, {
  foreignKey: "user_id",
});


User.belongsToMany(Group, {
  through: { model: GroupUser },
  as: "group_users"
});


Group.belongsToMany(User, {
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

Group.hasOne(Chat, {
  foreignKey:"chat_id",
  onDelete:"CASCADE",
});

Chat.belongsTo(Group, {
  foreignKey:"chat_id",
});

Group.hasMany(Resources, {
  foreignKey:"resource_id",
  onDelete:"CASCADE",
});

Resources.belongsTo(Group, {
  foreignKey:"resource_id",
});
  
//bruh

module.exports = {
  User,
  Chat,
  Group,
  GroupUser,
  Resources,
};