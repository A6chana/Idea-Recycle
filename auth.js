// REGISTER FUNCTION
function register() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (!email || !password) {
        message.innerText = "Enter both email and password!";
        return;
    }

    // Save user credentials in localStorage
    let users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[email]) {
        message.innerText = "Email already registered!";
        return;
    }
    users[email] = password;
    localStorage.setItem("users", JSON.stringify(users));
    message.innerText = "Registration successful! You can now sign in.";
}

// LOGIN FUNCTION
function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (!email || !password) {
        message.innerText = "Enter both email and password!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[email] && users[email] === password) {
        localStorage.setItem("userEmail", email); // logged in
        window.location.href = "account.html";
    } else {
        message.innerText = "Invalid email or password!";
    }
}

// CHECK LOGIN STATUS (for protected pages)
function checkLogin() {
    const user = localStorage.getItem("userEmail");
    if (!user) {
        window.location.href = "signin.html";
    }
}

// LOGOUT FUNCTION
function logout() {
    localStorage.removeItem("userEmail");
    window.location.href = "signin.html";
}
