<?php
session_start();
include_once("common.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cart</title>
    <script src="cart.js"></script>
    <link rel="stylesheet" href="shop.css">
</head>

<body>

<?php addHeader(); ?>

<div class="mainDiv">
    <h2>Shopping Cart</h2>
    <div id="fullCartDiv">
        <p>The items you've added to your shopping cart are: </p>
        <table id="cartTable"></table>
    </div>
</div>

<?php addFooter(); ?>


</body>
</html>