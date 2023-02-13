const seedChat = require('./chat-seeds');
const seedResource = require('./resource-seeds');
const seedStudyGroup = require('./study-group-seeds');
const seedUser = require('./user-seeds');
const seedGroupUser = require('./group-user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedChat();
  console.log('\n----- CHAT SEEDED -----\n');

  await seedResource();
  console.log('\n----- RESOURCE SEEDED -----\n');

  await seedStudyGroup();
  console.log('\n----- STUDY GROUP SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedGroupUser();
  console.log('\n----- GROUP USER SEEDED -----\n');

  process.exit(0);
};

seedAll();
