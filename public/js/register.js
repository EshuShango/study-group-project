const registerFormBtn = document.getElementById('registerBtn');
const firstNameField = document.getElementById('registerFirstName');
const lastNameField = document.getElementById('registerLastName');
const emailField = document.getElementById('registerEmail');
const registerPasswordField = document.getElementById('registerPassword');
const confirmPasswordField = document.getElementById('registerRepeatPassword');


function checkPasswords(e) {
    console.log(e.target);
    e.stopPropagation();
    e.preventDefault();
    if (registerPasswordField.value !== confirmPasswordField.value) {
        confirmPasswordField.setCustomValidity('Passwords do not match');
    } else {
        registerUser();
    }
};

async function registerUser() {
    const obj = {
        "first_name": firstNameField.value,
        "last_name": lastNameField.value,
        "username": emailField.value,
        "password": registerPasswordField.value
    };

    const response = await fetch('/api/user/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};


registerFormBtn.addEventListener('click', checkPasswords);