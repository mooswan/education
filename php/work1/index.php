<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <title>วาดรูปสี่เหลี่ยม XO</title>
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
        <label for="rows">จำนวนชั้นที่ต้องการ:</label>
        <input type="number" id="rows" name="rows" value="20">
        <input type="submit" value="Submit">
    </form>
    <?php
	echo '<br>';
    if (isset($_GET['rows'])) {
        $rows = (int)$_GET['rows'];

        for ($i = 0; $i < $rows; $i++) { //แนวตั้ง
          for ($j = 0; $j <= $rows; $j++) { //แนวนอน
                if ($j <= $i) {
                    echo '<span class="x">X</span>';
                } else {
                    echo '<span class="o">O</span>';
                }
            } 
            echo '<br>';
        }
    }
    ?>
</body>

</html>
