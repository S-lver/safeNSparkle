// Wait for all assets (images, CSS) to finish loading before triggering the animation
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const heroElements = document.querySelectorAll('.hero-reveal');
    
    // Wait for the logo and line animation to finish (1.5 seconds)
    setTimeout(() => {
        // Slide the navy curtain up
        preloader.classList.add('hidden');
        
        // Trigger the hero elements to slide up gracefully
        setTimeout(() => {
            heroElements.forEach(el => el.classList.add('active'));
        }, 300); // Slight delay so the text appears as the curtain lifts

        // Completely remove the preloader from the DOM after the transition finishes
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 2000);
        
    }, 1500); // 1.5 seconds of loading animation before the reveal
});