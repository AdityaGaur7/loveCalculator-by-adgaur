<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body onload="f()">

    <div class="navbar flex">
        <div class="left flex">
            <img src="img/logo.png" alt="sorry bro">
        </div>
        <div class="right flex">
            <li><a href="#w">CONTACT US</a></li>
            <li><a href="#">ABOUT US</a></li>
        </div>
    </div>
    <div class="bold">
        <h1>
            LOVE CALCULATOR
        </h1>

    </div>
    <div class="b">
        <div class="box">
            <div id="percent">
                <p id="lv"></p>
            </div>
        </div>
    </div>

    <div class="gifs">
        <div class="gif">
            <img src="" id="gif" alt="">
        </div>
    </div>
    <pre>


















</pre>

    <div class="box">
        <div class="container" >
            <div class="lefty" id="l">

                <!-- <input type="text" id="inp1"readonly> -->
            </div>
            <div class="righty" id="r">

                <!-- <input type="text" id="inp1"readonly> -->

            </div>
        </div>
        <div class="text">
            <h1 id="text-h1">YOU ARE AN ENGINEER JUST EXPRESS WHAT YOU FEEL DON'T BE AFRAID OF REJECTION </h1>
        </div>
    </div>
    <div class="new">
        <a href="index.php?"> <button type="button " id="btn1">TRY AGAIN</button></a>

    </div>
    <br>


    <footer class="bottom">
        <div class="foot">
            <p> Copyright © 2023 adgaur027@gmail.com</p>
        </div>
    </footer>


    <?php
    $name = $_POST['nm'];
    $crush = $_POST['crh'];
    $urinsta = $_POST['urid'];
    $crushinsta = $_POST['crshid'];



    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "iloveu";

    $conn = mysqli_connect($servername, $username, $password, $database);
    if (!$conn) {
        die("cant connect" . mysqli_connect_error());
    } else {
        echo "";
    }

    $sql = "INSERT INTO love(your_name,crush_name,ur_insta_id,crush_insta_id) VALUES('$name','$crush','$urinsta','$crushinsta')";
    if (mysqli_query($conn, $sql)) {
        echo "";
    } else {
        echo "error" . mysqli_error($conn);
    }
    mysqli_close($conn);



    ?>

</body>

</html>