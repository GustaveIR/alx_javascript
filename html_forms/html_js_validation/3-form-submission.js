document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('submitForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form field values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        // Validate form fields
        if (name === '' || email === '') {
            displayErrorMessage('Please fill in all required fields.');
        } else {
            // Form submission successful
            displaySuccessMessage('Form submitted successfully!');
        }
    });

    // Function to display error message
    function displayErrorMessage(message) {
        const errorElement = document.getElementById('error');
        errorElement.textContent = message;
        errorElement.style.color = 'red';
    }

    // Function to display success message
    function displaySuccessMessage(message) {
        const errorElement = document.getElementById('error');
        errorElement.textContent = message;
        errorElement.style.color = 'green';
    }
});
