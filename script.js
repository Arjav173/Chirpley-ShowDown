// script.js

// Function to animate images based on scroll
function animateImagesOnScroll() {
    // Define animations for img1, img2, and img3
    gsap.to('.img1', {
        scrollTrigger: {
            trigger: '.img1',
            start: 'top center', // Trigger animation when top of img1 reaches center of viewport
            end: 'bottom center', // End animation when bottom of img1 reaches center of viewport
            scrub: true, // Smoothly animates on scroll
        },
        rotation: -15, // Rotate img1 to -15 degrees
 // Optional: Adjust easing function
        duration: 0.3 , // Animation duration in seconds (adjust as needed)
    });

    gsap.to('.img2', {
        scrollTrigger: {
            trigger: '.img2',
            start: 'top center', // Trigger animation when top of img2 reaches center of viewport
            end: 'bottom center', // End animation when bottom of img2 reaches center of viewport
            scrub: true, // Smoothly animates on scroll
        },
        rotation: 8, // Rotate img2 to 8 degrees
         // Optional: Adjust easing function
        duration: 0.3, // Animation duration in seconds (adjust as needed)
    });

    gsap.to('.img3', {
        scrollTrigger: {
            trigger: '.img3',
            start: 'top center', // Trigger animation when top of img3 reaches center of viewport
            end: 'bottom center', // End animation when bottom of img3 reaches center of viewport
            scrub: true, // Smoothly animates on scroll
        },
        rotation: -8, // Rotate img3 to -8 degrees
        // Optional: Adjust easing function
        duration: 0.3, // Animation duration in seconds (adjust as needed)
    });
}

gsap.utils.toArray('.target > div').forEach((line, index) => {
    gsap.fromTo(
        line,
        {
            opacity: 0,
            y: 50,
        },
        {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: line,
                start: 'top 0%', // Adjust as needed
                end: 'bottom 0  0%', // Adjust as needed
                scrub: true,
            },
        }
    );
});
// Function to animate elements based on scroll
function animateOnScroll() {
    // Animation for eggCircle and video
    gsap.to('.eggCircle', {
        scale: 1, // Target scale (default size)
        scrollTrigger: {
            trigger: '.eggCircle',
            start: 'top 80%', // Start animation when top of .eggCircle is 80% from the top
            end: 'bottom 80%', // End animation when bottom of .eggCircle is 80% from the bottom
            scrub: true, // Smoothly animates on scroll
        },
        duration: 1, // Animation duration in seconds
        ease: 'power2.out', // Optional: Adjust easing function
    });

    // Optionally, animate the video element inside .eggCircle
    gsap.to('.eggCircle video', {
        scale: 1, // Target scale (default size)
        scrollTrigger: {
            trigger: '.eggCircle',
            start: 'top 80%', // Start animation when top of .eggCircle is 80% from the top
            end: 'bottom 80%', // End animation when bottom of .eggCircle is 80% from the bottom
            scrub: true, // Smoothly animates on scroll
        },
        duration: 1, // Animation duration in seconds
        ease: 'power2.out', // Optional: Adjust easing function
    });
}

// Call the function to initialize animations
animateOnScroll();

// Call the functions to initialize the animations
animateImagesOnScroll();
animateOnScroll();

