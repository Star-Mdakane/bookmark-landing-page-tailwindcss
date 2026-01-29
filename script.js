const buttons = document.querySelectorAll("button[data-target]");
const boxes = document.querySelectorAll("div[id^='box']");

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