<?php
$connection = mysqli_connect("vesta.uclan.ac.uk", "kmarchenko", "unvbezEy", "kmarchenko");
if (mysqli_connect_errno()) {
    echo "ERROR: could not connect to database: " . mysqli_connect_error();
}
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