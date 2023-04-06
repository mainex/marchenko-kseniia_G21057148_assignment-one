<?php
$hostname="vesta.uclan.ac.uk";
$username="kmarchenko";
$password="unvbezEy";
$database="kmarchenko";

$connection = mysqli_connect($hostname, $username, $password, $database);

if (mysqli_connect_errno()) {
    echo "ERROR: could not connect to database: " . mysqli_connect_error();
}

return $connection;