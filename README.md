# Calculator Web Application

A simple, responsive calculator web application built with HTML, CSS, and JavaScript. This calculator supports both mouse clicks and keyboard input for basic arithmetic operations.

## Live Demo
Try the calculator here: [Calculator App](https://calculator-app-gold-two.vercel.app/)

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Decimal point support
- Keyboard input support
- Error handling for invalid expressions
- Clear function (both 'C' button and Escape/Delete keys)
- Backspace support
- Prevents invalid input
- Responsive design that works on various screen sizes

## Files Structure

```
calculator/
│
├── index.html      # Main HTML file
├── styles.css      # CSS styling
├── index.js        # JavaScript functionality
└── README.md       # This file
```

## Dependencies

- [Math.js](https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.6.4/math.js) - For reliable mathematical calculations

## Usage

### Mouse Input
- Click number buttons (0-9) to input numbers
- Click operator buttons (+, -, *, /) for operations
- Click '.' for decimal points
- Click '=' to calculate result
- Click 'C' to clear the display

### Keyboard Support
- Numbers: 0-9
- Operators: +, -, *, /
- Decimal: .
- Calculate: Enter
- Clear: Escape or Delete
- Backspace: Removes last character

## Installation

1. Clone the repository or download the files
2. Open `index.html` in a web browser

Or visit the [live version](https://calculator-app-gold-two.vercel.app/) hosted on Vercel.

## Features Implementation

### JavaScript Functions

- `displayValue(val)`: Appends values to the calculator display
- `calculateResult()`: Evaluates the mathematical expression
- `clearDisplay()`: Clears the calculator display
- Event listeners for keyboard input and input validation

### Security Features

- Prevents direct text input in the result field
- Blocks paste functionality
- Validates all input before processing
- Error handling for invalid expressions

## Browser Compatibility

Tested and working on:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Author

Ameen