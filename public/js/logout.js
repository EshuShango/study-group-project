const logoutBtn = document.querySelector('#logoutBtn');

const logout = async () => {
    const response = await fetch("/api/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/");
    } else {
        alert(response.statusText);
    }
};

logoutBtn.addEventListener("click", logout);
