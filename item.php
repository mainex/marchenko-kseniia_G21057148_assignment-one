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
    <button class="buyBtn" type="button" onclick="addToCart()">Buy</button>
    <div <?php if (!isset($_SESSION["user_id"])) echo "style=\"display: none;\"" ?>>
        <h3>Submit a review</h3>
        <form action="review.php?id=<?php echo $_GET["id"]; ?>" method="post">
            <div>
                <label for="title">Title</label><br>
                <input type="text" id="title" name="title"><br>
            </div>
            <div>
                <label for="desc">Description</label><br>
                <input type="text" id="desc" name="desc"><br>
            </div>
            <div style="display: flex;">
                <input type="radio" id="1" name="rate" value="1">
                <label for="1">1</label><br>
                <input type="radio" id="2" name="rate" value="2">
                <label for="2">2</label><br>
                <input type="radio" id="3" name="rate" value="3">
                <label for="3">3</label>
                <input type="radio" id="4" name="rate" value="4">
                <label for="4">4</label>
                <input type="radio" id="5" name="rate" value="5">
                <label for="5">5</label>
            </div>
            <button>Submit</button>
        </form>
    </div>
    <div id="listOfReviews">
        <h3>Reviews</h3>

    </div>
</div>

<?php addFooter(); ?>

</body>
</html>