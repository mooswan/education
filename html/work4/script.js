function showInfo() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    document.getElementById('output-name').innerText = name;
    document.getElementById('output-email').innerText = email;
    document.getElementById('output-age').innerText = age;

    document.getElementById('output').classList.remove('hidden');
}