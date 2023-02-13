const { Group } = require('../models');

const studyGroupData = [
  { "id": 1, "name": "VanEck", "subject": "Drama", "chat_id": 1, "date_time": "9/4/2022", "resource_id": 1 },
  { "id": 2, "name": "SINOPEC", "subject": "Tech", "chat_id": 2, "date_time": "5/23/2022", "resource_id": 2 },
  { "id": 3, "name": "iShares", "subject": "Math", "chat_id": 3, "date_time": "6/18/2022", "resource_id": 3 },
  { "id": 4, "name": "Western", "subject": "Art", "chat_id": 4, "date_time": "12/28/2022", "resource_id": 4 },
  { "id": 5, "name": "State", "subject": "Physical Education", "chat_id": 5, "date_time": "9/11/2022", "resource_id": 5 },
  { "id": 6, "name": "PowerShares", "subject": "Software Development", "chat_id": 6, "date_time": "5/14/2022", "resource_id": 6 },
  { "id": 7, "name": "Equity", "subject": "SQL Coding", "chat_id": 7, "date_time": "8/5/2022", "resource_id": 7 },
  { "id": 8, "name": "Fastenal", "subject": "Psychology", "chat_id": 8, "date_time": "3/2/2022", "resource_id": 8 },
  { "id": 9, "name": "Ally", "subject": "Sociology", "chat_id": 9, "date_time": "10/28/2022", "resource_id": 9 },
  { "id": 10, "name": "Stone", "subject": "Business", "chat_id": 10, "date_time": "9/30/2022", "resource_id": 10 }
];

const seedStudyGroup = () => Group.bulkCreate(studyGroupData);

module.exports = seedStudyGroup;