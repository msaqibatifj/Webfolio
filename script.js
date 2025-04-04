let images = document.querySelectorAll(".gallery img");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector("#modal-img");
let closeBtn = document.querySelector(".close");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next")
let currentIndex = 0
document.addEventListener("DOMContentLoaded", () => {
    const welcomeSection = document.querySelector("#welcome-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                welcomeSection.classList.add("visible");
            } else {
                welcomeSection.classList.remove("visible");
            }
        });
    });

    observer.observe(welcomeSection);
});
document.addEventListener("DOMContentLoaded", () => {
    const darkModeCheckbox = document.querySelector("#dark-mode-checkbox");
    const body = document.body;

    // Load dark mode preference from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeCheckbox.checked = true;
    }

    // Toggle dark mode
    darkModeCheckbox.addEventListener("change", () => {
        if (darkModeCheckbox.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("#navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // User is scrolling down, hide the navbar
            navbar.classList.add("hidden");
            navbar.classList.remove("visible");
        } else {
            // User is scrolling up, show the navbar
            navbar.classList.add("visible");
            navbar.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });
});
function showImage(index) {
    modal.style.display = "flex";
    modalImg.src = images[index].src;
    currentIndex = index;
}
images.forEach((img, index) => {
    img.addEventListener("click", () => showImage(index));
})
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
})
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
})
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});