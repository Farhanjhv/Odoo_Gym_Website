// let formBtn = document.querySelector('#login-btn');
// let loginForm = document.querySelector('.login-form-container');
// let formClose = document.querySelector('#form-close');

// formBtn.addEventListener('click', () => {
//     loginForm.classList.add('active');
// });

// formClose.addEventListener('click', () => {
//     loginForm.classList.remove('active');
// });

document.addEventListener("DOMContentLoaded", () => {
    const loginFormContainer = document.getElementById("login-form-container");
    const registerFormContainer = document.getElementById("register-form-container");
    const loginBtn = document.getElementById("login-btn");
    const formClose = document.getElementById("form-close");
    const formCloseRegister = document.getElementById("form-close-register");
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");
  
    loginBtn.addEventListener("click", () => {
      loginFormContainer.classList.add("active");
    });
  
    formClose.addEventListener("click", () => {
      loginFormContainer.classList.remove("active");
    });
  
    formCloseRegister.addEventListener("click", () => {
      registerFormContainer.classList.remove("active");
    });
  
    showRegister.addEventListener("click", (e) => {
      e.preventDefault();
      loginFormContainer.classList.remove("active");
      registerFormContainer.classList.add("active");
    });
  
    showLogin.addEventListener("click", (e) => {
      e.preventDefault();
      registerFormContainer.classList.remove("active");
      loginFormContainer.classList.add("active");
    });
  
    // Handle form submission (add your own logic here)
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Handle login
      console.log("Logging in...");
    });
  
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Handle registration
      console.log("Registering...");
    });
  });
  