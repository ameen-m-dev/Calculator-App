// Global Variable: Result Field
const resultField = document.getElementById("resultField");

// Appends the given value to the calculator display
function displayValue(val) {
    resultField.value += val;
}

// Clears the calculator display and resets any stored values
function clearDisplay() {
    resultField.value = "";
}

// Evaluates the current expression and returns the result
function calculateResult() {
    try {
        // Evaluate the Mathematical Expression
        let result = math.evaluate(resultField.value);

        // Update the Display with the Result
        resultField.value = result;
    } catch (error) {
        // Handle Invalid Expression
        resultField.value = "Error";
    }
}

// Add Event Listener for Keyboard Inputs
document.addEventListener('keydown', function(event) {
    event.preventDefault();

    if (/^[\d+\-*/.]$/.test(event.key)) {
        displayValue(event.key); // Append valid keys
    } else if (event.key === 'Enter') {
        calculateResult(); // Evaluate result on Enter
    } else if (event.key === 'Escape' || event.key === 'Delete') {
        clearDisplay(); // Clear display on Escape or Delete
    } else if (event.key === 'Backspace') {
        resultField.value = resultField.value.slice(0, -1); // Handle Backspace
    }
});

// Prevent direct input and paste
resultField.addEventListener('input', (event) => event.preventDefault());
resultField.addEventListener('paste', (event) => event.preventDefault());
