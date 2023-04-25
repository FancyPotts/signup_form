const passwordInput = document.getElementById("password1");
const passwordCriteria = document.getElementById("password-criteria");
const passwordInput2 = document.getElementById("password2");
const message = document.querySelector("p");
const button = document.querySelector("button");
const input = document.querySelectorAll("input");
const database = [];

const criteriaRegex = [
  /^.{8,20}$/,
  /[A-Z]/,
  /[a-z]/,
  /\d/
];

passwordInput.addEventListener("input", function() {
  const password = passwordInput.value;
  for (let i = 0; i < criteriaRegex.length; i++) {
    const regex = criteriaRegex[i];
    const criteriaItem = passwordCriteria.children[i];
    if (regex.test(password)) {
      criteriaItem.classList.remove("invalid");
      criteriaItem.classList.add("valid");
    } else {
      criteriaItem.classList.remove("valid");
      criteriaItem.classList.add("invalid");
    }
  }
});

passwordInput2.addEventListener("input", function() {
  if (passwordInput.value === passwordInput2.value) {
    message.classList.remove("invalid");
    message.classList.add("valid");
  } else {
    message.classList.remove("valid");
    message.classList.add("invalid");
  }
});

function UserSignUp(postFirstName, postLastName, postEmail, postPhoneNum) {
  this.firstName = postFirstName,
  this.lastName = postLastName,
  this.email = postEmail,
  this.phoneNum = postPhoneNum
};

button.addEventListener("click", () => {
  const firstNameInput = document.querySelector('#firstname');
  const lastNameInput = document.querySelector('#lastname');
  const emailInput = document.querySelector('#email');
  const phoneNumInput = document.querySelector('#phonenum');

  postFirstName = firstNameInput.value
  postLastName = lastNameInput.value
  postEmail = emailInput.value
  postPhoneNum = phoneNumInput.value

  const User = new UserSignUp(postFirstName, postLastName, postEmail, postPhoneNum);
  database.push(User);
});

input.forEach(function(input) {
  input.addEventListener("focus", function() {
    console.log('Input has focus');
  });
  input.addEventListener("blur", () => {
    console.log('Bye');
  });
});

button.addEventListener('click', function(e) {
  e.preventDefault();
});