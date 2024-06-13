document.getElementById('sum-form').addEventListener('submit', function(event) {
    event.preventDefault(); // หยุดการส่งฟอร์มแบบปกติ

    // รับค่าจาก input fields
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);

    // คำนวณผลรวม
    var sum = number1 + number2;

    // แสดงผลลัพธ์
    document.getElementById('result').textContent = 'ผลรวมคือ: ' + sum;
});
