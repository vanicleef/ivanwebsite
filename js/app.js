// Navigation and Page Transition Logic

// Function to navigate to a new page
function navigateTo(page) {
    // Logic to handle page transition (e.g., fade out, change content)
    fadeOutCurrentContent();
    loadNewPage(page);
    fadeInNewContent();
}

// Function to fade out the current content
function fadeOutCurrentContent() {
    const currentContent = document.getElementById('content');
    currentContent.style.opacity = 0;
    setTimeout(() => { currentContent.style.display = 'none'; }, 500);
}

// Function to load the new page content
function loadNewPage(page) {
    const newContent = document.getElementById('content');
    newContent.innerHTML = `<!-- Load ${page} content dynamically -->`;
}

// Function to fade in the new content
function fadeInNewContent() {
    const newContent = document.getElementById('content');
    newContent.style.display = 'block';
    newContent.style.opacity = 1;
}

// Event Listener Example:
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.getAttribute('href');
        navigateTo(page);
    });
});