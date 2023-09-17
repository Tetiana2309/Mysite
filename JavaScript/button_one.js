const signupButton = document.getElementById("signup-button");
const applicationFormSection = document.querySelector(".application-form");
signupButton.addEventListener("click", function() {
  applicationFormSection.scrollIntoView({ behavior: "smooth" });
});