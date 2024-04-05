// Function to generate dynamic input fields
function generateInputFields(numFields) {
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear previous fields

    for (var i = 1; i <= numFields; i++) {
        var inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "Field " + i;
        inputContainer.appendChild(inputField);
    }
}

// Event listener for dropdown change
document.getElementById("numFields").addEventListener("change", function() {
    var numFields = parseInt(this.value);
    generateInputFields(numFields);
});

// Function to validate form before submission
function validateForm(event) {
    var inputs = document.querySelectorAll("#inputContainer input");
    var isValid = true;

    inputs.forEach(function(input) {
        if (input.value.trim() === "") {
            isValid = false;
        }
    });

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if any field is empty
        alert("Please fill in all fields.");
    }
}

// Event listener for form submission
document.getElementById("dynamicForm").addEventListener("submit", validateForm);
