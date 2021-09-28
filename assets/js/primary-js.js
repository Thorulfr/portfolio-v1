// Get button from HTML
scrollButton = document.getElementById("scroll-to-top-button");

// Display button once user scrolls
window.onscroll = function() {showScrollButton()};

// Scroll to top when user clicks button
function scrollToTop() {
    // Safari
    document.body.scrollTop = 0;
    // Everything else
    document.documentElement.scrollTop = 0;
}

// Show/hide button, depending where user is on page
function showScrollButton() {
    if (document.body.scrollTop > 73 || document.documentElement.scrollTop > 73) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}