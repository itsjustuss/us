function checkPassword() {

const username =
    document.getElementById("usernameInput").value;

const password =
    document.getElementById("passwordInput").value;

const captcha =
    document.getElementById("captchaCheck").checked;

if (!captcha) {
    document.getElementById("error").innerText =
        "Please complete verification.";
    return;
}

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
