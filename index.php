<?php
session_start();
include_once("common.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <script src="index.js"></script>
    <link rel="stylesheet" href="shop.css">
</head>

<body>
<?php addHeader(); ?>

<div class="mainDiv">
    <h2>Offers</h2>
    <div id="listOffers" style="place-items: stretch;display: flex;"></div>
    <h2>Where opportunity creates success</h2>
    <p>Every student at the University of Central Lancashire is automatically member of Students' Union. We're here to
        make life better for students — inspiring you to succeed and achieve your goals.</p>
    <p>Everything you need to know about UClan Student's Union. Your membership starts here.</p>

    <h3>Together</h3>
    <iframe src="https://www.youtube.com/embed/0478w5CqJm0" title="Together"></iframe>

    <h3>Join our global community</h3>
    <iframe src="https://www.youtube.com/embed/i2CRunZv9CU" title="Join our global community"></iframe>

</div>

<?php addFooter(); ?>

</body>
</html>