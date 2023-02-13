const { User } = require('../models');

const userData = [
  { "id": 1, "first_name": "Grata", "last_name": "Orts", "username": "gorts0@sitemeter.com", "password": "fa2CdqQ86Pa" },
  { "id": 2, "first_name": "Eugenie", "last_name": "Beche", "username": "ebeche1@liveinternet.ru", "password": "FrGXUaK" },
  { "id": 3, "first_name": "Claudius", "last_name": "Carstairs", "username": "ccarstairs2@hud.gov", "password": "3WwsmDwnk" },
  { "id": 4, "first_name": "Corri", "last_name": "Skyner", "username": "cskyner3@elpais.com", "password": "rADd79K" },
  { "id": 5, "first_name": "Cordy", "last_name": "Jirzik", "username": "cjirzik4@blogs.com", "password": "wE0BItMWu" },
  { "id": 6, "first_name": "Benedetta", "last_name": "Pritty", "username": "bpritty5@china.com.cn", "password": "OKjHeZOLwq1B" },
  { "id": 7, "first_name": "Eddy", "last_name": "Slayny", "username": "eslayny6@twitpic.com", "password": "pw89evl" },
  { "id": 8, "first_name": "Kaine", "last_name": "Stratten", "username": "kstratten7@issuu.com", "password": "jNny76aeIo" },
  { "id": 9, "first_name": "Yorgo", "last_name": "Northridge", "username": "ynorthridge8@blogs.com", "password": "qyP4qK" },
  { "id": 10, "first_name": "Garvy", "last_name": "Guile", "username": "gguile9@comsenz.com", "password": "NQze4JphEVU" },
  { "id": 11, "first_name": "Hewie", "last_name": "Garling", "username": "hgarlinga@t-online.de", "password": "Kgb22YP" },
  { "id": 12, "first_name": "Stanwood", "last_name": "Bothbie", "username": "sbothbieb@guardian.co.uk", "password": "XBttJTKM3Zj" },
  { "id": 13, "first_name": "Micki", "last_name": "Valentinuzzi", "username": "mvalentinuzzic@umn.edu", "password": "ok1mksRj" },
  { "id": 14, "first_name": "Betsy", "last_name": "Frank", "username": "bfrankd@mtv.com", "password": "0V208Izoh" },
  { "id": 15, "first_name": "Shannah", "last_name": "Carpenter", "username": "scarpentere@php.net", "password": "PHOyGk3" },
  { "id": 16, "first_name": "Velma", "last_name": "Wantling", "username": "vwantlingf@dailymail.co.uk", "password": "2uDpOV" },
  { "id": 17, "first_name": "Pearl", "last_name": "Foyston", "username": "pfoystong@utexas.edu", "password": "zurQ9T" },
  { "id": 18, "first_name": "Ruprecht", "last_name": "Hunnam", "username": "rhunnamh@sciencedirect.com", "password": "sLI9xSz" },
  { "id": 19, "first_name": "Jean", "last_name": "Stonman", "username": "jstonmani@google.com.br", "password": "kXQnVs" },
  { "id": 20, "first_name": "Kerwinn", "last_name": "Hymans", "username": "khymansj@google.ru", "password": "Gou41JeO1k" },
  { "id": 21, "first_name": "Ann", "last_name": "McGorley", "username": "amcgorleyk@moonfruit.com", "password": "ECNKog5YtQZY" },
  { "id": 22, "first_name": "Dana", "last_name": "Billam", "username": "dbillaml@fastcompany.com", "password": "KDM1vokh2Q" },
  { "id": 23, "first_name": "Freedman", "last_name": "Odo", "username": "fodom@dion.ne.jp", "password": "l66A6px" },
  { "id": 24, "first_name": "Virgil", "last_name": "Gilhooley", "username": "vgilhooleyn@reuters.com", "password": "Hgf8okHFvMC" },
  { "id": 25, "first_name": "Cathy", "last_name": "Keller", "username": "ckellero@oaic.gov.au", "password": "o4eSBi21" },
  { "id": 26, "first_name": "Jamal", "last_name": "Summersett", "username": "jsummersettp@seattletimes.com", "password": "w8oVc1dhGi2" },
  { "id": 27, "first_name": "Esmaria", "last_name": "Matthew", "username": "ematthewq@blogs.com", "password": "llcdoMUkSRm" },
  { "id": 28, "first_name": "Issiah", "last_name": "Heynen", "username": "iheynenr@yolasite.com", "password": "k66Cip0mT189" },
  { "id": 29, "first_name": "Madelyn", "last_name": "Island", "username": "mislands@a8.net", "password": "1sBn8jX" },
  { "id": 30, "first_name": "Jacob", "last_name": "Kneesha", "username": "jkneeshat@mtv.com", "password": "076QsY2" }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
