/* =========================================================
   ICAMS 2027
   HOME — Main JavaScript
========================================================= */


/* =========================================================
   1. ELEMENTS
========================================================= */

const header = document.querySelector(".site-header");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

const modal = document.getElementById("comingSoonModal");
const modalClose = document.getElementById("modalClose");
const modalButton = document.getElementById("modalButton");

const futureLinks = document.querySelectorAll(".future-link");
const futureActions = document.querySelectorAll(".future-action");


/* =========================================================
   2. HEADER SCROLL EFFECT
========================================================= */

function updateHeader() {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }
}

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* =========================================================
   3. MOBILE NAVIGATION
========================================================= */

function toggleMobileMenu() {

    const isOpen =
        mainNav.classList.toggle("open");

    menuToggle.classList.toggle(
        "open",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );
}


menuToggle.addEventListener(
    "click",
    toggleMobileMenu
);


/* =========================================================
   4. CLOSE MOBILE MENU
========================================================= */

function closeMobileMenu() {

    mainNav.classList.remove("open");

    menuToggle.classList.remove("open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );
}


document.querySelectorAll(
    ".nav-link"
).forEach(link => {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});


/* =========================================================
   5. COMING SOON MODAL
========================================================= */

function openComingSoonModal(event) {

    event.preventDefault();

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

    modalClose.focus();
}


function closeComingSoonModal() {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


/* Future navigation items */

futureLinks.forEach(link => {

    link.addEventListener(
        "click",
        openComingSoonModal
    );

});


/* Future action buttons */

futureActions.forEach(button => {

    button.addEventListener(
        "click",
        openComingSoonModal
    );

});


/* Close button */

modalClose.addEventListener(
    "click",
    closeComingSoonModal
);

modalButton.addEventListener(
    "click",
    closeComingSoonModal
);


/* =========================================================
   6. CLOSE MODAL WHEN CLICKING OUTSIDE
========================================================= */

modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeComingSoonModal();

        }

    }
);


/* =========================================================
   7. CLOSE MODAL WITH ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeComingSoonModal();

        }

    }
);
