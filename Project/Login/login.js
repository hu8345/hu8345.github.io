//讓密碼顯示
function togglePasswordVisibility(input) {
    var passwordInput = document.getElementById(input);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}