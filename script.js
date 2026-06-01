// ============================
// TYPING ANIMATION
// ============================

var typed = new Typed("#typing", {
    strings: [
        "AI & Data Science Engineer",
        "Machine Learning Enthusiast",
        "Data Analyst",
        "Power BI Developer",
        "SQL Developer",
        "Python Developer",
        "RAG Systems Builder"
    ],

    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});


// ============================
// DARK / LIGHT MODE
// ============================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");
    }

});


// ============================
// LOAD SAVED THEME
// ============================

window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

});


// ============================
// COUNTER ANIMATION
// ============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            Number(counter.getAttribute("data-target"));

        const current =
            Number(counter.innerText);

        const increment = Math.max(1,target / 100);

        if (current < target) {

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;
        }

    };

    updateCounter();

});


// ============================
// PROJECT FILTER
// ============================

const filterButtons =
    document.querySelectorAll(".filter-buttons button");

const projectCards =
    document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.getAttribute("data-filter");

        projectCards.forEach(card => {

            if (
                filter === "all" ||
                card.classList.contains(filter)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";
            }

        });

    });

});


// ============================
// ACTIVE NAV LINK
// ============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");
        }

    });

});


// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });


// ============================
// AOS ANIMATION
// ============================

AOS.init({

    duration: 1000,
    once: true

});


// ============================
// HERO IMAGE EFFECT
// ============================

const profileImage =
    document.querySelector(".hero-right img");

if (profileImage) {

    profileImage.addEventListener("mousemove", () => {

        profileImage.style.transform =
            "scale(1.03)";

    });

    profileImage.addEventListener("mouseleave", () => {

        profileImage.style.transform =
            "scale(1)";
    });

}


// ============================
// SCROLL TO TOP BUTTON
// ============================

const scrollBtn =
    document.createElement("button");

scrollBtn.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';

scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ============================
// CONSOLE MESSAGE
// ============================

console.log(
    "%cDheeraj Portfolio Loaded Successfully 🚀",
    "color:cyan;font-size:18px;font-weight:bold;"
);