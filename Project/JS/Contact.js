const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


//CLOSING EACH LIST AFTER CLICKING
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('newsletter-email').value;
    var errorElement = document.getElementById('newsletter-error');

    if (!validateEmail(email)) {
        errorElement.textContent = 'Please enter a valid email address.';
    } else {
        errorElement.textContent = '';
        alert('Thank you for subscribing!');
        // Reset the form
        this.reset();
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('contact-name').value;
    var email = document.getElementById('contact-email').value;
    var message = document.getElementById('contact-message').value;
    var errorElement = document.getElementById('contact-error');

    if (!name || !validateEmail(email) || !message) {
        errorElement.textContent = 'Please fill out all fields correctly.';
    } else {
        errorElement.textContent = '';
        alert('Thank you for your contacting us!');
        // Reset the form
        this.reset();
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Clear forms when the page loads
window.addEventListener('load', function() {
    document.getElementById('newsletter-form').reset();
    document.getElementById('contact-form').reset();
});