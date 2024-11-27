// Global Variable: Result Field
const resultField = document.getElementById("resultField");

// Appends the given value to the calculator display
function displayValue(val) {
    resultField.value += val;
}

// Add Event Listener to the Input Field
document.addEventListener('keydown', function(event) {
    event.preventDefault();
    
    // Using regex to check all valid inputs
    if (/^[\d+\-*/.']$/.test(event.key)) {
        displayValue(event.key);
    }
    else if (event.key === 'Enter') {
        calculateResult();
    }
    else if (event.key === 'Escape' || event.key === 'Delete') {
        clearDisplay();
    }
    else if (event.key === 'Backspace') {
        resultField.value = resultField.value.slice(0, -1);
    }
});

// Also prevent pasting and direct input
resultField.addEventListener('keydown', function(event) {
    event.preventDefault();
});

// Prevent paste
resultField.addEventListener('paste', function(event) {
    event.preventDefault();
});

// Clears the calculator display and resets any stored values
function clearDisplay(){
    resultField.value = "";
}

// Evaluates the current expression and returns the result
function calculateResult(){
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
