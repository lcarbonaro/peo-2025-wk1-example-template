//
// JavaScript adds interactivity and dynamic content.
//

// 1. Get references to the HTML elements we need to interact with.
const button = document.getElementById('actionButton');
const greetingText = document.getElementById('greeting');

// 2. Define a function that will be executed when the button is clicked.
function handleClick() {
    // Change the text content of the paragraph element.
    greetingText.textContent = "You clicked the button! JS made this colour change!";
    
    // Optional: Add a style change for extra feedback (JS can modify CSS!)
    greetingText.style.color = "purple";
}

// 3. "Listen" for the click event on the button and run the function.
// This connects the user action (click) to the code logic (handleClick function).
button.addEventListener('click', handleClick);

// Console logging is a great tool for debugging!
console.log("JavaScript file is loaded and running!");