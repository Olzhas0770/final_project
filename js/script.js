const icon = document.getElementById('icon');

let rotationAngle = 0;

// Function to rotate the icon
function rotateIcon() {
rotationAngle += 1; // Adjust the rotation speed as needed
icon.style.transform = `rotate(${rotationAngle}deg)`;

// Call the function again after a short delay (e.g., 16ms for 60fps)
requestAnimationFrame(rotateIcon);
}

// Start the rotation animation
rotateIcon();