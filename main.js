const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

let formId = document.getElementById("login-form");

formId.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email === "admin@gmail.com" && pass === "admin") {
        console.log("logged in");
    } else {
        console.log("Wrong Pass");
    }
});
