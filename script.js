document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Add loading state
        submitButton.classList.add('loading');
        submitButton.disabled = true;

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Remove loading state
        submitButton.classList.remove('loading');
        submitButton.disabled = false;

        // Clear form
        contactForm.reset();

        // Show success message (you can customize this)
        alert('Mensagem enviada com sucesso!');
    });
});