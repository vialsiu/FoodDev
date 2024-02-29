document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("loginform");

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const userEmail = "user@email.com";
            const adminPassword = "1234";

            if (email === userEmail && password === adminPassword) {
                window.location.href = "main.html";
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    });