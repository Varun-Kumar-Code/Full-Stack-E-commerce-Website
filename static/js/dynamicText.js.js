// Get the element that will display the moving text
var textElement = document.getElementById("movingText");

// Set the initial text and position
var text = "Dynamic Text Moving!";
var x = 0;
var speed = 2;

// Use setInterval to update the text position every 16ms (approximately 60fps)
setInterval(function() {
  // Update the text position
  x += speed;
  
  // Check if the text has moved off the screen, and if so, reset its position
  if (x > textElement.offsetWidth) {
    x = 0;
  }
  
  // Update the text element's style to reflect the new position
  textElement.style.transform = "translateX(" + x + "px)";
  
  // Update the text element's text content
  textElement.textContent = text;
}, 16);