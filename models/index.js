const Chat = require("./Chat");
const GroupUser = require("./GroupUser");
const Resource = require("./Resources");
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


User.hasMany(Resource, {
  foreginKey:"user_id",
  onDelete:"CASCADE",
});

Resource.belongsTo(User, {
  foreignKey: "user_id",
});

Group.hasOne(Chat, {
  foreignKey:"chat_id",
  onDelete:"CASCADE",
});

Chat.belongsTo(Group, {
  foreignKey:"chat_id",
});

Group.hasMany(Resource, {
  foreignKey:"group_id",
  onDelete:"CASCADE",
});

Resource.belongsTo(Group, {
  foreignKey:"group_id",
});
  
//bruh

module.exports = {
  User,
  Chat,
  Group,
  GroupUser,
  Resource,
};