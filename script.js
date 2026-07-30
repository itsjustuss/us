function checkPassword() {

    const username =
        document.getElementById("usernameInput").value;

    const password =
        document.getElementById("passwordInput").value;

    if (
        username.toLowerCase() === "sujit" &&
        password === "tan76jit68"
    ) {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("gallery").classList.remove("hidden");
    } else {
        document.getElementById("error").innerText =
            "Invalid username or password.";
    }
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".memory-card")
        .forEach(card => {

            card.addEventListener("click", () => {
                card.classList.toggle("flipped");
            });

        });

});


const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸ Pause";
    } else {
        music.pause();
        btn.innerHTML = "🎵Play";
    }
});

