console.log('Running script')


const passwordInput = document.getElementById("password1");
const passwordCriteria = document.getElementById("password-criteria");
const passwordInput2 = document.getElementById("password2");
const message = document.querySelector("p");
const button = document.querySelector("button");
const input = document.querySelectorAll("input");

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

button.addEventListener("click", () => {
  const firstNameInput = document.querySelector('#firstname');
  const lastNameInput = document.querySelector('#lastname');

  
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