// Add event listener to the button
document.querySelector('.hero button').addEventListener('click', () => {
    // Add animation to the button
    document.querySelector('.hero button').classList.add('animate');
    // Remove animation after 1 second
    setTimeout(() => {
        document.querySelector('.hero button').classList.remove('animate');
    }, 1000);
});

// Add event listener to the nav links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        // Prevent default behavior
        e.preventDefault();
        // Get the href attribute
        const href = link.getAttribute('href');
        // Scroll to the section
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
});