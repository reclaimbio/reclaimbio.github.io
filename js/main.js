// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                // Toggle the active class on the question
                this.classList.toggle('active');
                
                // Toggle the icon rotation
                const icon = this.querySelector('i');
                if (icon) {
                    icon.classList.toggle('rotate-180');
                }
                
                // Toggle the visibility of the answer
                const answer = this.nextElementSibling;
                if (answer) {
                    answer.classList.toggle('hidden');
                }
            });
        });
    }

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server
            // For now, we'll just show a success message
            
            // Get form data
            const formData = new FormData(contactForm);
            const formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            // Simple validation
            if (!formValues['first-name'] || !formValues['last-name'] || !formValues['email'] || !formValues['message']) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show success message (in a real implementation, this would happen after successful form submission)
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only process if it's a real anchor link (not just "#")
            if (href !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
