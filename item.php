<?php
session_start();
include_once("common.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Item</title>
    <link rel="stylesheet" href="shop.css">
</head>
<body>

<?php addHeader();
$connection = require __DIR__ . "/database.php";
$myQuery = "SELECT * FROM tbl_products WHERE product_id IN ({$_GET["id"]})";
$result = mysqli_query($connection, $myQuery);
$row = mysqli_fetch_array($result);
?>

<script src="item.js"></script>
<div class="mainDiv">
    <h2><?php echo $row["product_title"]; ?></h2>
    <p><?php echo $row["product_desc"]; ?></p>
    <img src="resources/<?php echo $row["product_image"]; ?>" alt="<?php echo $row["product_desc"]; ?>" width="100%">
    <h4><?php echo $row["product_price"]; ?></h4>
    <button class="buyBtn" type="button" onclick="addToCart(<?php echo $row["product_id"]; ?>)">Buy</button>
</div>

<?php addFooter(); ?>

</body>
</html>