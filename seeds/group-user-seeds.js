const { GroupUser } = require('../models');

const groupUserData = [
  { "id":1, "study_id":1, "user_id":1},
  { "id":2, "study_id":1, "user_id":2},
  { "id":3, "study_id":1, "user_id":3},
  { "id":4, "study_id":1, "user_id":4},
  { "id":5, "study_id":1, "user_id":5},
  { "id":6, "study_id":1, "user_id":6},
  { "id":7, "study_id":1, "user_id":7},
  { "id":8, "study_id":1, "user_id":8},
  { "id":9, "study_id":1, "user_id":9},
  { "id":10, "study_id":1, "user_id":10},
  { "id":11, "study_id":1, "user_id":11},
  { "id":12, "study_id":1, "user_id":12},
  { "id":13, "study_id":1, "user_id":13},
  { "id":14, "study_id":1, "user_id":14},
  { "id":15, "study_id":1, "user_id":15},
  { "id":16, "study_id":2, "user_id":16},
  { "id":17, "study_id":2, "user_id":17},
  { "id":18, "study_id":2, "user_id":18},
  { "id":19, "study_id":2, "user_id":19},
  { "id":20, "study_id":2, "user_id":20},
  { "id":21, "study_id":2, "user_id":21},
  { "id":22, "study_id":2, "user_id":22},
  { "id":23, "study_id":2, "user_id":23},
  { "id":24, "study_id":2, "user_id":24},
  { "id":25, "study_id":2, "user_id":25},
  { "id":26, "study_id":2, "user_id":26},
  { "id":27, "study_id":2, "user_id":27},
  { "id":28, "study_id":2, "user_id":28},
  { "id":29, "study_id":2, "user_id":29},
  { "id":30, "study_id":2, "user_id":30},
]


const seedGroupUser = () => GroupUser.bulkCreate(groupUserData);

module.exports = seedGroupUser;