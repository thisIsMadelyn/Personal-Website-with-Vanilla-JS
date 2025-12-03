const form = document.getElementById('contactForm');

const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Παρακαλώ συμπλήρωσε όλα τα πεδία.');
        return;
    }

    if (message.length > 100) {
        alert('Το μήνυμα δεν μπορεί να υπερβαίνει τους 100 χαρακτήρες.');
        return;
    }

    form.style.display = 'none';
    successMessage.style.display = 'block';
});