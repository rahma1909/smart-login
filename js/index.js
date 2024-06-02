var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var inputName = document.getElementById("inputName");
var btn1 = document.getElementById("btn");
var btn2 = document.getElementById("btnn");
var signup = document.querySelector(".h5 .signup ");
var login = document.querySelector(".h5 .login");

var emails = [];
var currentEmailValue;
var currentPassValue;
var currentNameValue;

// ======================================check email====================================
function validEmailSignup(currentEmailValue) {
  currentEmailValue = input1.value.trim();
  var emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailpattern.test(currentEmailValue);
}

// ================================================check pass==========================================
function validPass(currentPassValue) {
  currentPassValue = input2.value.trim();
  var passpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passpattern.test(currentPassValue);
}
// ========================check name=========================================
function validName(currentNameValue) {
  currentNameValue = inputName.value.trim();
  var namePattern = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;
  return namePattern.test(currentNameValue);
}
// ==========================================push pass and email=============================================

function pushInDate() {
  var currentEmailValue = input1.value.trim();
  var currentPassValue = input2.value.trim();
  var currentNameValue = inputName.value.trim();

  if (
    validEmailSignup(currentEmailValue) &&
    validPass(currentPassValue) &&
    validName(currentNameValue)
  ) {
    var users = JSON.parse(localStorage.getItem("users"));
    if (users == null) {
      users = [];
    }

    var user = {
      email: currentEmailValue,
      password: currentPassValue,
      name: currentNameValue,
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "User registered successfully!",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "opps",
      text: "please enter valid email or pass",
    });
  }
}

function isexist() {
  currentEmailValue = input1.value.trim();
  if (users !== null) {
    var users = JSON.parse(localStorage.getItem("users")) || [];

    for (var i = 0; i < users.length; i++) {
      if (users[i]["email"] == currentEmailValue) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This email already exists",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        return;
      }
    }
  } else {
    users = [];
  }
}

// ==============================================LOGIN=============================================

function validEmailLognin() {
  var currentEmailValue = input1.value.trim();
  var users = JSON.parse(localStorage.getItem("users"));

  if (users !== null) {
    for (var i = 0; i < users.length; i++) {
      if (users[i]["email"] === currentEmailValue) {
        window.location.href =
          "indexx.html";
        return;
      }
    }

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You need to sign up",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No users found. Please sign up.",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  }
}

// ============================================================================================

signup.addEventListener("click", function () {
  login.classList.remove("d-none");
  signup.classList.add("d-none");
  inputName.classList.remove("d-none");
  btn2.classList.remove("d-none");
  btn1.classList.add("d-none");
});
btn2.addEventListener("click", function () {
  isexist();
  pushInDate();
});
login.addEventListener("click", function () {
  login.classList.add("d-none");
  signup.classList.remove("d-none");
  inputName.classList.add("d-none");
  btn2.classList.add("d-none");
  btn1.classList.remove("d-none");
  btn1.addEventListener("click", function () {});
});
btn1.addEventListener("click", function () {
  validEmailLognin();
});
