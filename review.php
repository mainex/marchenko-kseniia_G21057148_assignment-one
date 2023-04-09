<?php
session_start();
$connection = require __DIR__ . "/database.php";
if (empty($_POST["title"])) {
    die("Title is required.");
}

if (empty($_POST["desc"])) {
    die("Description is required.");
}

if (empty($_POST["rate"])) {
    die("Rate is required.");
}

$connection = require __DIR__ . "/database.php";

$sql = "INSERT INTO tbl_reviews (user_id, product_id, review_title, review_desc, review_rating) VALUES (?, ?, ?, ?, ?)";

$stmt = $connection->stmt_init();

if (!$stmt->prepare($sql)) {
    die("SQL error: " . $connection->error);
}

$stmt->bind_param("iissi", $_SESSION["user_id"], $_GET["id"], $_POST["title"], $_POST["desc"], $_POST["rate"]);

$stmt->execute();

header("Location: item.php?id={$_GET["id"]}");
