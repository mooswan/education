<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <title>วาดรูปสามเหลี่ยม XO</title>
    <style>
        .x {
            color: black;
        }

        .o {
            color: red;
        }
    </style>
</head>

<body>
    <form method="get">
        <label for="rows">จำนวนชั้นที่ต้องการ (5-50):</label>
        <input type="number" id="rows" name="rows" min="5" max="50" value="19">
        <input type="submit" value="Submit">
    </form>

    <?php
    if (isset($_GET['rows'])) {
        $rows = (int)$_GET['rows'];
        echo '<br>';
        if ($rows >= 5 && $rows <= 50) {
            for ($i = $rows; $i > 0; $i--) {
                for ($j = 0; $j < $i; $j++) {
                    if ($i % 5 == 0 || ($j + 1) % 5 == 0) {
                        echo '<span class="o">O</span>';
                    } else {
                        echo '<span class="x">X</span>';
                    }
                }
                echo '<br>';
            }
        } else {
            echo 'กรุณาใส่ตัวเลขระหว่าง 5 ถึง 50.';
        }
    }
    ?>
</body>

</html>
