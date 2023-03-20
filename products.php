<?php
$connection = mysqli_connect("vesta.uclan.ac.uk", "kmarchenko", "unvbezEy", "kmarchenko");
if (mysqli_connect_errno()) {
    echo "ERROR: could not connect to database: " . mysqli_connect_error();
}
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
    echo $row["product_id"];
    echo ',';
    echo ";";
}

