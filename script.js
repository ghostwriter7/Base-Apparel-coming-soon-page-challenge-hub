const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  emailValue = email.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Cannot be blank!");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please provide a valid email address");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input, msg) {
  const formControls = input.closest(".form-controls");
  formControls.className = "form-controls error";
  formControls.querySelector("small").innerText = msg;
}

function setSuccessFor(input) {
  const formControls = input.closest(".form-controls");
  formControls.className = "form-controls success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
