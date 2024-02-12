let loginEmailInput = document.getElementById("loginEmail");
let loginPasswordInput = document.getElementById("loginPassword");
let loginBtn = document.getElementById("loginBtn");
let signupAnchor = document.getElementById("signupAnchor");

let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signIn() {
    console.log("Sign In function called");
    let loginEmail = loginEmailInput.value;
    let loginPassword = loginPasswordInput.value;
  
    if (loginEmailInput.value === "" || loginPasswordInput.value === "") {
      Swal.fire({
        text: "Please fill in all fields",
      });
      return;
    }
  
    if (isCorrectEmailAndPassword(loginEmail, loginPassword)) {
      window.location.href = "dummy_homepage.html";
    } else {
        console.log("Incorrect email or password");
      Swal.fire({
        text: "Incorrect email or password",
      });
    }
  }
  
  function isCorrectEmailAndPassword(email, password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        localStorage.setItem("userName", users[i].name);
        return true;
      }
    }
    return false;
  }
  
  loginBtn.addEventListener("click", function () {
    event.preventDefault();
    signIn();
  });
  
  signupAnchor.addEventListener("click", function () {
    window.location.href = "registerr.html";
  });