<?php
$connection = require __DIR__ . "/database.php";
if (empty($_POST["fname"])) {
    die("Full name is required.");
}

if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    die("Valid email is required.");
}
if (empty($_POST["password"])) {
    die("Password is required.");
}

if (strlen($_POST["password"]) < 6) {
    die("Password must be at least 6 characters.");
}

if (!preg_match("/[a-z]/i", $_POST["password"])) {
    die("Password must contain at least 1 letter.");
}

if (!preg_match("/[0-9]/i", $_POST["password"])) {
    die("Password must contain at least 1 number.");
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

$connection = require __DIR__ . "/database.php";

$sql = "INSERT INTO tbl_users (user_full_name, user_address, user_email, user_pass) VALUES (?, ?, ?, ?)";

$stmt = $connection->stmt_init();

if (!$stmt->prepare($sql)) {
    die("SQL error: " . $connection->error);
}

$stmt->bind_param("ssss", $_POST["fname"], $_POST["address"], $_POST["email"], $passwordHash);

$stmt->execute();

header("Location: login.php");
