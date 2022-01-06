<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transaction</title>
</head>
<body>
    <h1><center>Transaction History</center></h1>
    <div>
        <table>
            <tr>
                <th>ID</th>
                <th>Name Of the Game</th>
                <th>Date</th>
                <th>Item</th>
                <th>Amount</th>
            </tr>
            <?php
            $connect=mysqli_connect('127.0.0.1','root','','Transaction_History');
            $sql = "SELECT * FROM `table`";
            $result = $connect->query($sql);

            if($result-> num_rows > 0){
                while($row = $result->fetch_assoc()){
                    echo "<tr><td>" .$row["id"] . "</td><td>" .$row["Name"] . "</td><td>" .$row["Date"] . "</td><td>" .$row["Item"] . "</td><td>" .$row["Amount"] ."</td></tr>";
                }
            }
            else{
                echo "No Results";
            }
            $connect->close();
            ?>
        </table>
    </div>
</body>
<link rel="stylesheet" href="CSS_SECTION/Transaction_History.css">
<script src="J_SCRIPT_SECTION/Payment_Method.js"></script>
</html>