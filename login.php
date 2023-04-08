<?php
include_once("common.php");
$connection = require __DIR__ . "/database.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $connection = require __DIR__ . "/database.php";

    $sql = sprintf("SELECT * FROM tbl_users WHERE user_email = '%s'", $connection->real_escape_string($_POST["email"]));

    $result = mysqli_query($connection, $sql);
    $user = $result->fetch_assoc();

    if ($user) {
        if (password_verify($_POST["password"], $user["user_pass"])) {
            session_start();
            $_SESSION["user_id"]=$user["user_id"];
            $_SESSION["user_full_name"]=$user["user_full_name"];
            $_SESSION["user_address"]=$user["user_address"];
            header("Location: products.php");
            exit;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign up</title>
    <link rel="stylesheet" href="shop.css">
</head>
<body>

<?php addHeader();?>
<div class="mainDiv">
    <h2>Log in</h2>
    <form action="login.php" method="post">
        <div>
            <label for="email">Email:</label><br>
            <input type="text" id="email" name="email"><br>
        </div>
        <div>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br>
        </div>

        <button>Log in</button>
    </form>
    <p>Do not have an account yet? <a href="signup.php">Sign up</a></p>
</div>
<?php addFooter();?>
</body>
</html>