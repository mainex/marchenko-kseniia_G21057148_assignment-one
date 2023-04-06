<?php

if (empty($_POST["fname"])) {
    die("Full name is required.");
}

if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    die("Valid email is required.");
}
if (empty($_POST["password"])) {
    die("Password is required.");
}
if ($_POST["password"] !== $_POST["confirmPassword"]) {
    die("Passwords must match.");
}
if (empty($_POST["address"])) {
    die("Address is required.");
}

$passwordHash = password_hash($_POST["password"], PASSWORD_DEFAULT);
print_r($_POST);
var_dump($passwordHash);

$connection = mysqli_connect("vesta.uclan.ac.uk", "kmarchenko", "unvbezEy", "kmarchenko");
if (mysqli_connect_errno()) {
    echo "ERROR: could not connect to database: " . mysqli_connect_error();
}
