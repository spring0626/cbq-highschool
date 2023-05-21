// Mobile menu
const main = document.querySelector(".main");
const footer = document.querySelector("#footer");
const headerMobi = document.querySelector(".header-mobile");
const menuMobiBtn = document.querySelector(".menu-mobile");
const closeMenuMobiBtn = document.querySelector(".close-menu-mobile");

menuMobiBtn.addEventListener("click", () => {
    headerMobi.classList.add("active");
})

function closeMenu() {
    headerMobi.classList.remove("active");
}

closeMenuMobiBtn.addEventListener("click", closeMenu);
main.addEventListener("click", closeMenu);
footer.addEventListener("click", closeMenu);


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


