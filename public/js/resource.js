const resourceFormBtn = document.getElementById('addResource');
const launchVideoBtn = document.getElementById('launchVideo');
const urlField = document.getElementById('formurl');
const descriptionField = document.getElementById('formdescription');
// const userField = req.body.user_id;
// const groupField = req.body.group_id;

async function addResource() {
  const obj = {
      "url": urlField.value,
      "description": descriptionField.value,
    //   "user_id": userField.value,
    //   "group_id": groupField.value,
  };
  console.log(obj);
//   const response = await fetch('/api/resource/', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(obj)
    
});

if (response.ok) {
    document.location.replace('/');
} else {
    alert(response.statusText);
}
};


resourceFormBtn.addEventListener('click', addResource());

launchVideoBtn.addEventListener('click', () => {window.location.href="/videoroom"});
