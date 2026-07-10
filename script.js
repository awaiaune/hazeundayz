/* ==========================================
   AGE GATE
========================================== */

const ageGate = document.getElementById("age-gate");
const ageYes = document.getElementById("age-yes");
const ageNo = document.getElementById("age-no");

if (ageGate) {

    if (localStorage.getItem("ageConfirmed") !== "true") {
        ageGate.style.display = "flex";
    }

    if (ageYes) {
        ageYes.addEventListener("click", () => {
            localStorage.setItem("ageConfirmed", "true");
            ageGate.style.display = "none";
        });
    }

    if (ageNo) {
        ageNo.addEventListener("click", () => {
            window.location.href = "https://www.google.com";
        });
    }

}


/* ==========================================
   MOBILE MENU
========================================== */

const menuButton = document.getElementById("menu-button");
const menuPopup = document.getElementById("menu-popup");

if (menuButton && menuPopup) {

    menuButton.addEventListener("click", () => {
        menuPopup.classList.toggle("active");
    });

    menuPopup.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            menuPopup.classList.remove("active");
        });

    });

}


/* ==========================================
   HEADER SCROLL
========================================== */

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            header.classList.add("header-small");
        } else {
            header.classList.remove("header-small");
        }

    });

}


/* ==========================================
   FADE ANIMATION
========================================== */

const fades = document.querySelectorAll(".fade");

if (fades.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    fades.forEach(el => {
        observer.observe(el);
    });

}
