document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (users[username] && users[username] === password) {
                localStorage.setItem("loggedInUser", username);
                alert("Login successful!");
                window.location.href = "index.html";
            } else {
                alert("Invalid username or password.");
            }
        });
    }

    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        const loginButton = document.querySelector(".login-button");
        if (loginButton) loginButton.remove();

        const topBar = document.querySelector(".top-bar");
        const logoutButton = document.createElement("button");
        logoutButton.textContent = "Log Out";
        logoutButton.classList.add("btn");
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            alert("You have logged out.");
            location.reload();
        });
        topBar.appendChild(logoutButton);
    }
});