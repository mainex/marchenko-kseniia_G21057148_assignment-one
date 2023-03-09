<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cart</title>
    <script src="common.js"></script>
    <script src="cart.js"></script>
    <link rel="stylesheet" href="shop.css">
</head>

<body>

<script>addHeader();</script>

<div class="mainDiv">
    <h2>Shopping Cart</h2>
    <div id="fullCartDiv">
        <p>The items you've added to your shopping cart are: </p>
        <table id="cartTable"></table>
        <p>In order to check up you must log in.</p>
        <form>
            <label for="email">Email:</label><br>
            <input type="text" id="email" name="email"><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br><br>
            <input type="submit" value="Log in">
        </form>
    </div>
</div>
<?php

?>
<script>fillTheTable();
    addFooter();</script>

</body>
</html>