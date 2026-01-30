const buttons = document.querySelectorAll("button[data-target]");
const boxes = document.querySelectorAll("div[id^='box']");
const headers = document.querySelectorAll("[data-accordion-header]");
const form = document.getElementById("cta-form");
const burgerMenu = document.getElementById("burger-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("overlay");
const overlayContainer = document.getElementById("overlay-container");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(button => button.classList.remove("border-4"));

        const targetId = btn.getAttribute('data-target');

        btn.classList.add("border-4");

        boxes.forEach(box => {
            box.classList.toggle("opacity-100", box.id === targetId);
            box.classList.toggle("z-10", box.id === targetId);
            box.classList.toggle("opacity-0", box.id !== targetId);
            box.classList.toggle("z-0", box.id !== targetId);
        });
    });
});

headers.forEach(header => {
    header.addEventListener("click", () => {
        header.parentElement.classList.toggle("open");
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    const email = form.querySelector("[name='email']");
    const emailValue = email.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue) || !emailValue.trim()) {
        isValid = false;
    }

    if (isValid) {
        console.log('success');
        email.parentElement.classList.remove("err");
    }
    else {
        email.parentElement.classList.add("err");
    }
});

burgerMenu.addEventListener("click", () => {
    menu.parentElement.classList.add("menu");
})

closeBtn.addEventListener("click", () => {
    menu.parentElement.classList.remove("menu");
})

menu.addEventListener("click", (e) => {
    if (e.target === menu) {
        menu.parentElement.classList.remove("menu");
    }
})