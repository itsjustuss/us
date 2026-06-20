const PASSWORD = "tan76jit68";

function checkPassword() {
    const entered = document.getElementById("passwordInput").value;

    if (entered === PASSWORD) {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("gallery").classList.remove("hidden");
    } else {
        document.getElementById("error").innerText = "Wrong password 💔";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".memory-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });
});
