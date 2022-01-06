<?php
$connect=mysqli_connect('127.0.0.1','root','','Transaction_History');
$Title=$_POST['TITLE'];
$Date = $_POST['Current_Date'];
$Item_1=$_POST['Item_E'];
$Currency=$_POST['PHP_Currency'];
$query = "INSERT INTO `table` (`Name`,`Date`,`Item`,`Amount`) VALUES ('$Title', '$Date' , '$Item_1' , '$Currency')" ;
$run = mysqli_query($connect,$query);
if($run){
    header("Location: Game_Master_Main_Page.html");
    }
if($connect->connect_error){
    die('Connection Failed: ' .$connect->connect_error);
}

?>