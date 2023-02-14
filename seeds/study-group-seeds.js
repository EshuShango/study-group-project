const { Group } = require('../models');

const studyGroupData = [
  {"name": "VanEck", "subject": "Drama", "date_time": "9/4/2022", "resource_id": 1 },
  {"name": "SINOPEC", "subject": "Tech", "date_time": "5/23/2022", "resource_id": 2 },
  {"name": "iShares", "subject": "Math", "date_time": "6/18/2022", "resource_id": 3 },
  {"name": "Western", "subject": "Art", "date_time": "12/28/2022", "resource_id": 4 },
  {"name": "State", "subject": "Physical Education", "date_time": "9/11/2022", "resource_id": 5 },
  {"name": "PowerShares", "subject": "Software Development", "date_time": "5/14/2022", "resource_id": 6 },
  {"name": "Equity", "subject": "SQL Coding", "date_time": "8/5/2022", "resource_id": 7 },
  {"name": "Fastenal", "subject": "Psychology", "date_time": "3/2/2022", "resource_id": 8 },
  {"name": "Ally", "subject": "Sociology", "date_time": "10/28/2022", "resource_id": 9 },
  {"name": "Stone", "subject": "Business",  "date_time": "9/30/2022", "resource_id": 10 }
];

const seedGroup = () => Group.bulkCreate(studyGroupData);

module.exports = seedGroup;