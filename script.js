/* ==========================================
   AGE GATE
========================================== */
localStorage.removeItem("ageConfirmed");

const ageGate = document.getElementById("age-gate");
const ageYes = document.getElementById("age-yes");
const ageNo = document.getElementById("age-no");

// 初回確認
if (localStorage.getItem("ageConfirmed") !== "true") {
    ageGate.style.display = "flex";
}

// 20歳以上
ageYes.addEventListener("click", () => {
    localStorage.setItem("ageConfirmed", "true");
    ageGate.style.display = "none";
});

// 20歳未満
ageNo.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
});

/* ==========================================
   MOBILE MENU
========================================== */

const menuButton = document.getElementById("menu-button");
const menuPopup = document.getElementById("menu-popup");

menuButton.addEventListener("click", () => {

    menuPopup.classList.toggle("active");

});


// メニュークリックで閉じる
menuPopup.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        menuPopup.classList.remove("active");

    });

});


/* ==========================================
   HEADER SCROLL
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("header-small");

    } else {

        header.classList.remove("header-small");

    }

});


/* ==========================================
   FADE ANIMATION
========================================== */

const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:.15,
    rootMargin:"0px 0px -40px 0px"
});

document.querySelectorAll(".fade").forEach(el=>{

    observer.observe(el);

});