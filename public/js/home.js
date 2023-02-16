const loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    window.location.href = '/login';
});
