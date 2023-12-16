const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    if (btn.innerHTML === "Hide") {
        btn.textContent = "Show";
        text.setAttribute("type", "password");
    } else {
        btn.textContent = "Hide";
        text.setAttribute("type", "text");
    }

})