document.getElementById('number-form').addEventListener('submit', function(event) {
    event.preventDefault(); // หยุดการส่งฟอร์มแบบปกติ

    // รับค่าจาก input field
    var number = parseFloat(document.getElementById('number').value);

    // ตรวจสอบว่าเป็นเลขคู่หรือเลขคี่
    var result;
    if (number % 2 === 0) {
        result = 'เลข ' + number + ' เป็นเลขคู่';
    } else {
        result = 'เลข ' + number + ' เป็นเลขคี่';
    }

    // แสดงผลลัพธ์
    document.getElementById('result').textContent = result;
});
