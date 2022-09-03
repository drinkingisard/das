<?php
header('Content-Type: text/html; charset=utf-8');
$mysqli = mysqli_connect("localhost", "fbevljpt_feedback", "12345", "fbevljpt_feedback");
if ($mysqli == false) {
    print("error");
} else {
   
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email =trim(mb_strtolower($_POST["email"])); 
$message = $_POST["message"];

$result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");
if ($result->num_rows != 0) {
    print("exist");
} else {
    $mysqli->query("INSERT INTO `feedback`(`firstname`, `lastname`, `email`, `message`) VALUES ('$firstname', '$lastname', '$email', '$message')");
    print("ok");
}
}
