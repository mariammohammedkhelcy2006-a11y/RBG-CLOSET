const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you for contacting RBG CLOSET! We will get back to you soon.");

    contactForm.reset();
});