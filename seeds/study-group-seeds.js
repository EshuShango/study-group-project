const { Group } = require('../models');

const studyGroupData = [
  {"name": "VanEck", "subject": "Drama", "date": "9/4/2022", "time": "11:00", "resource_id": 1 },
  {"name": "SINOPEC", "subject": "Tech", "date": "5/23/2022", "time": "12:00", "resource_id": 2 },
  {"name": "iShares", "subject": "Math", "date": "6/18/2022", "time": "19:00","resource_id": 3 },
  {"name": "Western", "subject": "Art", "date": "12/28/2022","time": "20:00","resource_id": 4 },
  {"name": "State", "subject": "Physical Education", "date": "9/11/2022", "time": "19:00","resource_id": 5 },
  {"name": "PowerShares", "subject": "Software Development", "date": "5/14/2022", "time": "21:00","resource_id": 6 },
  {"name": "Equity", "subject": "SQL Coding", "date": "8/5/2022", "time": "10:00","resource_id": 7 },
  {"name": "Fastenal", "subject": "Psychology", "date": "3/2/2022", "time": "14:00","resource_id": 8 },
  {"name": "Ally", "subject": "Sociology", "date": "10/28/2022", "time": "15:00","resource_id": 9 },
  {"name": "Stone", "subject": "Business",  "date": "9/30/2022", "time": "16:00","resource_id": 10 }
];

const seedGroup = () => Group.bulkCreate(studyGroupData);

module.exports = seedGroup;