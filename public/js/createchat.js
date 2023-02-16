const grpName = document.getElementById('formname');
const grpTopic = document.getElementById('formsubject');
const styDate = document.getElementById('formdate');
const styTime = document.getElementById('formtime');

// const styGrpLink = document.querySelectorAll('.stygrp-ctnr .stygrp-card ');

const saveBtn = document.getElementById('create-group');

  async function addGroup() {

      const obj = {
          name: grpName.value,
          subject: grpTopic.value,
          date: styDate.value,
          time: styTime.value,
      };

      console.log(obj);
      const response = await fetch('/api/group', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(obj)
  
      });
  
      if (response.ok) {
          document.location.replace('/chatroom');
      } else {
          alert(response.statusText);
      }
  };
  
  
  saveBtn.addEventListener('click', addGroup);
  











      // launchVideoBtn.addEventListener('click', () => { window.location.href = "/videoroom" })


//! Do i need them ? 
// const router = require('express').Router();
// const { Chat } = require('../../models');
// const app = express();

// app.get("/chatroom", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "chatroom.handlebars"));
  
// });

//& function to create unique id by time stamping 
// const getData = () => {
//   //? const db = fs.readFileSync(("../../models"));
//   //? const db = fs.readFileSync(({Chat}));
//   const db = fs.readFileSync(({Chat}));

//   const parsedJson = JSON.parse(db);
//   return parsedJson;
// };

// app.get("/chatroom", (req, res) => {
//   const db = getData();
//   res.json(db);
// });

// app.post("/chatroom", (req, res) => {
//   // console.log(req.body);
//   let chatObj = {
//     name : req.body.name,
//     topic: req.body.topic,
//     date: req.body.date,
//     time: req.body.time,
//     id: Date.now(),
//   };
//   // take data thats going into the request body
//   // make into a object
//   //add that to noteId
//   let db = getData();
//   // console.log(db);
//   db.push(chatObj);
//   const fileName = path.join(__dirname, "../../views/chatroom.handlebars");
//   fs.writeFileSync(fileName, JSON.stringify(db, null, 2));
//   res.json(db);
// });



// When pressed it should validate and
// Then Save data that was put into input fields
//? Validate if all fields are filled in/ selected or RoadMap ?


// let grpName;
// let grpTopic;
// let styDate;
// let styTime;

// let styGrpLink;

// if (window.location.pathname === '/chatroom') {
// };

// let styGrpCard = {};


//! idk but i think this how the group link will be stored 
// const getGrp = () =>
//   fetch('/api/chat', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/chatroom.handlebars',
//     },
//   });

  // const saveStyGrp = (stuLink) =>
  // fetch('/api/chat', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/chatroom.handlebars',
  //   },
  //   body: JSON.stringify(stuLink),
  // });

  // const renderActiveStyGrp = () => {
    
  //   if (styGrpCard.id) {
      
  //     // grpName = document.querySelector('.grp-name');
  //     // grpTopic = document.querySelector('.grp-topic');
  //     // styDate = document.querySelector('sty-date');
  //     // styTime = document.querySelector('sty-time');

  //     // let styGrpCard = {};

  //     grpName.setAttribute('readonly', true);
  //     grpTopic.setAttribute('readonly', true);
  //     styDate.setAttribute('readonly', true);
  //     styTime.setAttribute('readonly', true);

  //     grpName.value = styGrpCard.title;
  //     grpTopic.value = styGrpCard.text;
  //     styDate.value = styGrpCard.date;
  //     styTime.value = styGrpCard.time;

  //   } else {

  //     grpName.removeAttribute('readonly');
  //     grpTopic.removeAttribute('readonly');
  //     styDate.removeAttribute('readonly');
  //     styTime.removeAttribute('readonly');


  //     grpName.value = '';
  //     grpTopic.value = '';
  //     styDate.value = '';
  //     styDate.value = '';
  //   }
  // };

  // const handleStdyGrpSave = () => {
  //   const newStyGrp = {
  //    name: grpName.value,
  //     topic: grpTopic.value,
  //     date: styDate.value,
  //     time: styTime.value,
  //   };

  //   saveNote(newStyGrp).then(() => {
  //     getAndRenderNotes();
  //     renderActiveStyGrp();
  //   });
  // };

  
//^----------------------

  
  












