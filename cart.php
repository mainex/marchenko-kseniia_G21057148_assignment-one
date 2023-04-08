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
        <p><?php
            if (isset($_SESSION["user_full_name"])) {
                echo "Dear {$_SESSION["user_full_name"]}! ";
            } ?>The items you've added to your shopping cart are: </p>
        <table id="cartTable"></table>
        <button class="buyBtn">
            <?php if (!isset($_SESSION["user_id"])) {
                echo "<a href=\"signup.php\">Sign in/ Log in</a>";
            } else {
                echo "Checkout";
            } ?>
        </button>
    </div>
</div>

<?php addFooter(); ?>


</body>
</html>