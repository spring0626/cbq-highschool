// Form
const form = document.querySelector(".form-wrapper");
const signUpLink = document.querySelector(".sign-up-link");
const loginLink = document.querySelector(".login-link");

signUpLink.addEventListener("click", () => {
    form.classList.add("sign-up");
});

loginLink.addEventListener("click", () => {
    form.classList.remove("sign-up");
});
