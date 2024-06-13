1.Print Numbers from 1 to 10<br>
1 2 3 4 5 6 7 8 9 10
<hr>
<?php
if (isset($_GET['cmd']) && $_GET['cmd'] == 1) {
    echo 'Answer : ';
    for ($i = 1; $i <= 10; $i++) {
        echo $i . " ";
    }
    echo '<hr>';
}
?>
2.Multiplication Table<br>
2 x 1 = 2<br>
2 x 2 = 4<br>
2 x 3 = 6<br>
2 x 4 = 8<br>
2 x 5 = 10<br>
2 x 6 = 12<br>
2 x 7 = 14<br>
2 x 8 = 16<br>
2 x 9 = 18<br>
2 x 10 = 20<br>
2 x 11 = 22<br>
2 x 12 = 24<br>
<hr>
<?php
/* $number = 2;
for ($i = 1; $i <= 12; $i++) {
    echo $number . " x " . $i . " = " . ($number * $i) . "<br>";
} */
?>
3.Reverse a String <br>
Original String: Hello, World!<br>
Reversed String: !dlroW ,olleH<br>
<hr>
<?php
/* $string = "Hello, World!";
$reversedString = strrev($string);
echo "Original String: " . $string . "<br>";
echo "Reversed String: " . $reversedString; */
?>

