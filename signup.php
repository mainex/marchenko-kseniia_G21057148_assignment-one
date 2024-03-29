<?php
include_once("common.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign up</title>
    <link rel="stylesheet" href="shop.css">
</head>
<body>

<?php addHeader(); ?>
<div class="mainDiv">
    <h2>Sign up</h2>
    <form action="signupcheck.php" method="post" novalidate>
        <div>
            <label for="fname">Full name:</label><br>
            <input type="text" id="fname" name="fname"><br>
        </div>
        <div>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br>
        </div>
        <div>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br>
        </div>
        <div>
            <label for="confirmPassword">Confirm password:</label><br>
            <input type="password" id="confirmPassword" name="confirmPassword"><br>
        </div>
        <div>
            <label for="address">Address:</label><br>
            <input type="text" id="address" name="address"><br>
        </div>

        <button>Sign up</button>
    </form>
    <p>Already have an account? <a href="login.php">Log in</a></p>
</div>
<?php addFooter(); ?>

</body>
</html>