document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('greetingForm');
    const nameInput = document.getElementById('nameInput');
    const greetingMessage = document.getElementById('greetingMessage');

    form.addEventListener('submit', function(event) {

        event.preventDefault();
        
        const name = nameInput.value;

        greetingMessage.textContent = `Hello, ${name}!`;

        nameInput.value = '';
    });
});
