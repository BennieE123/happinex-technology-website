
function welcomeVisitor() {
    console.log("Welcome to Happinex Technology Limited!");
}

welcomeVisitor();

// RESPONSIVE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("active");

        const isOpen = mainNav.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    // Close the menu after selecting a navigation link

    mainNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}

// HERO TITLE

const heroTitle = document.getElementById("hero-title");

// CONTACT FORM SUCCESS MESSAGE

const params = new URLSearchParams(window.location.search);
const successMessage = document.getElementById("form-success-message");

if (params.get("sent") === "1" && successMessage) {

    successMessage.style.display = "block";

    window.history.replaceState(
        {},
        document.title,
        window.location.pathname
    );

}
