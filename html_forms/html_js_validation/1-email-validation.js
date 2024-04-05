// Function to validate email format
function validateEmail() {
    var email = document.getElementById("email").value;
    var errorElement = document.getElementById("error");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errorElement.textContent = "Please enter a valid email address.";
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

// Event listener for form submission
document.getElementById("emailForm").addEventListener("submit", function(event) {
    if (!validateEmail()) {
        event.preventDefault(); // Prevent form submission if email format is invalid
    }
});
