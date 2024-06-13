document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('showMessageButton');
    const message = document.getElementById('message');

    button.addEventListener('click', function() {
        message.textContent = 'Hello, World!';
    });
});
