<?php
$servername = "localhost";
$username = "root"; 
$password = "88553246@"; 
$dbname = "abc";

// สร้างการเชื่อมต่อ
$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("การเชื่อมต่อล้มเหลว: " . $conn->connect_error);
}
echo "เชื่อมต่อสำเร็จ";

// ตัวอย่างการใช้งาน: การดึงข้อมูลจากตาราง
$sql = "SELECT id FROM account";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // แสดงผลข้อมูล
    while ($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"] . "<br>";
    }
} else {
    echo "ไม่มีข้อมูล";
}

// ปิดการเชื่อมต่อ
$conn->close();
