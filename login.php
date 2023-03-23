<?php
$connection = mysqli_connect("vesta.uclan.ac.uk", "kmarchenko", "unvbezEy", "kmarchenko");
if (mysqli_connect_errno()) {
    echo "ERROR: could not connect to database: " . mysqli_connect_error();
}
$myQuery = "SELECT * FROM tbl_users WHERE user_email='{$_POST["email"]}'";
$result = mysqli_query($connection, $myQuery);
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    if ($row["user_pass"] === $_POST["password"]) {
        header("Location: index.html");
    } else {
        header("Location: login.html");
    }
}