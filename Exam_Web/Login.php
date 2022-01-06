
<?php
session_start();
$Email = $_POST['Email'];
$Password = $_POST['Password'];

$connection = new mysqli('localhost','root', '', 'user_population');
if($connection->connect_error){
    die('Connection Failed: ' .$connection->connect_error);
}
else{
    $statement = $connection->prepare("Select * from login_form where Email = ?");
    $statement->bind_param('s', $Email);
    $statement->execute();
    $statement_result = $statement->get_result();
    if($statement_result->num_rows > 0){
        $data = $statement_result->fetch_assoc();
        $Verification = $data['Password'];
        if($Verification === $Password){
                header("Location: Game_Master_Main_Page.html");
        } else {
            echo '<script>alert("Invalid Email or Password")</script>';
        }
    } else {
        echo '<script>alert("Invalid Email or Password")</script>';
    }
}
?>






