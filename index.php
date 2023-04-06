<?php
$connection = require __DIR__ . "/database.php";

$myQuery = "SELECT * FROM tbl_offers";
$result = mysqli_query($connection, $myQuery);
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    echo $row["offer_id"];
    echo ',';
    echo $row["offer_title"];
    echo ',';
    echo $row["offer_dec"];
    echo ";";
}