<?php
include_once("common.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Products</title>
    <script src="products.js"></script>
    <link rel="stylesheet" href="shop.css">
</head>
<body>
<?php addHeader();?>
<div class="mainDiv">
    <div id="btnContainer">
        <button class="filterBtn active" id="all" onclick='updateList("all")'>all products</button>
        <button class="filterBtn" id="UCLanHoodie" onclick='updateList("UCLan Hoodie")'>hoodies</button>
        <button class="filterBtn" id="UCLanLogoJumper" onclick='updateList("UCLan Logo Jumper")'>jumpers</button>
        <button class="filterBtn" id="UCLanLogoTshirt" onclick='updateList("UCLan Logo Tshirt")'>t-shirts</button>
    </div>
    <div id="list"></div>
</div>
<?php addFooter();?>
</body>
</html>