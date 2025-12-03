/* MOBILE MENU */
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

/* CONTACT FORM SUCCESS MESSAGE */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        successMsg.style.display = "block";
        form.reset();
    });
});
