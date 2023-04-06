<?php
include_once("common.php");
$connection = require __DIR__ . "/database.php";
$myQuery = "SELECT * FROM tbl_products";
$result = mysqli_query($connection, $myQuery);
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    echo $row["product_type"];
    echo ',';
    echo $row["product_desc"];
    echo ',';
    echo $row["product_price"];
    echo ',';
    echo $row["product_image"];
    echo ',';
    echo $row["product_title"];
    echo ',';
    echo $row["product_id"];
    echo ";";
}

