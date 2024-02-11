const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});



let formId = document.getElemenyById("login-form");

formId.addEventlistener('submit', (e)=>{
 let email = document.getElementById("email").value;
let pass = document.getElementByid("password").value;

  If(email === "admin@gmail.com" && pass === "admin"){
    console.log("logged in");
}
else
{
 console.log("Wrong Pass");
}
})