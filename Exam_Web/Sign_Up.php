<?php
$connect=mysqli_connect('127.0.0.1','root','','user_population');
$User_Name=$_POST['User_Name'];
$Password = $_POST['Password'];
$query = "INSERT INTO `login_form` (`Email`,`Password`) VALUES ('$User_Name', '$Password')" ;
$run = mysqli_query($connect,$query);
if($run){
    header("Location: Log_In_Form.html");
    }
if($connect->connect_error){
    die('Connection Failed: ' .$connect->connect_error);
}

?>