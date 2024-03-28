document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
    console.log("Document loaded");
});

document.addEventListener("scroll", function() {
    var scrollPosition = window.pageYOffset;
    var parallaxItems = document.querySelectorAll('.parallax-item');
    parallaxItems.forEach(function(item, index) {
        // Special handling for the logo to add rotation
        if(item.id === 'logo') {
            var rotate =  Math.min(-50 + scrollPosition * 0.3, 0); // Adjust rotation speed
            var scale = Math.min(0.7 + scrollPosition * 0.2, 1.4);
            var opacity = Math.min(0.7 + scrollPosition * 0.2, 1);
            var x = Math.min(-70 + scrollPosition * 0.1, -50)
            var y = Math.min(50 + scrollPosition * 0.3 , 40);
            item.style.transform = `scale(${scale}) translateX(${x}%) translateY(${y}vh) rotate(${rotate}deg)`;
            item.style.filter = `opacity(${opacity})`;
        }
        else {
            var speed = (index + 1) * 0.02; // Adjust speed for layering effect
            var distanceDown = Math.min(speed * scrollPosition, 40);
            var scale = Math.min(1 + scrollPosition * 0.005, 1.5); // Slight scale up
            var brightness = Math.min(100 + scrollPosition * 5, 150); // Increase brightness, capped at 150%
            var gradientOpacity = Math.min(scrollPosition * 0.6, 1); // Gradually increases opacity based on scroll
            var xMovement = - 50 + distanceDown * (index % 2 * 2 - 1);
            
            item.style.transform = `translateX(${xMovement}%) translateY(${distanceDown}vh) scale(${scale})`;
            item.style.filter = `saturate(${brightness}%)`;
            item.style.setProperty('--gradient-opacity', gradientOpacity); // Set the custom property
        }
    });

    var overlay = document.getElementById('overlay');
    var opacity = Math.min(scrollPosition * 0.02, 100);
    overlay.style.opacity = opacity;
});