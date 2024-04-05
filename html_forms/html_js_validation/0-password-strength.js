// Function to validate password strength
function validatePassword() {
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
        errorElement.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

// Event listener for form submission
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    if (!validatePassword()) {
        event.preventDefault(); // Prevent form submission if password is invalid
    }
});
