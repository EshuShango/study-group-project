const loginFormBtn = document.getElementById('loginFormBtn');
const usernameField = document.getElementById('loginName');
const loginPasswordField = document.getElementById('loginPassword');


async function login(e) {
    console.log(e.target);
    e.stopPropagation();
    e.preventDefault();

    const obj = {
        "username": usernameField.value,
        "password": loginPasswordField.value
    };

    const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        usernameField.setCustomValidity('Invalid username or password');
    }
};

loginFormBtn.addEventListener('click', login);



















loginFormBtn.addEventListener('click', login);