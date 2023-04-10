<?php
$connection = require __DIR__ . "/database.php";
$myQuery = "SELECT * FROM tbl_reviews WHERE product_id='{$_GET["id"]}'";
$result = mysqli_query($connection, $myQuery);
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    echo $row["review_id"];
    echo ',';
    echo $row["user_id"];
    echo ',';
    echo $row["product_id"];
    echo ',';
    echo $row["review_title"];
    echo ',';
    echo $row["review_desc"];
    echo ',';
    echo $row["review_rating"];
    echo ";";
}