const signUpBtn = document.querySelector(".signupbtn");
const signInBtn = document.querySelector(".signinbtn");
const nameField = document.querySelector(".namefield");
const title = document.querySelector(".title");
const underline = document.querySelector(".underline");
const text = document.querySelector(".text");

signInBtn.addEventListener("click", () => {
  nameField.style.maxHeight = 0;
  title.innerHTML = "Sign In";
  text.innerHTML = "Forget Your Password";
  signUpBtn.classList.add("disabled");
  signInBtn.classList.remove("disabled");
  underline.style.transform = "translateX(45px)";
});
signUpBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  text.innerHTML = "Password Suggestions ";
  signUpBtn.classList.remove("disabled");
  signInBtn.classList.add("disabled");
  underline.style.transform = "translateX(0)";
});
