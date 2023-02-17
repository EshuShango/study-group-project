const grpName = document.getElementById('formname');
const grpTopic = document.getElementById('formsubject');
const styDate = document.getElementById('formdate');
const styTime = document.getElementById('formtime');
const saveBtn = document.getElementById('create-group');

  async function addGroup(e) {
    e.preventDefault();
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
  














