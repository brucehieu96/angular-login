<?php  
 // include_once("db_connect.php");  
 // $sql = "SELECT file_name FROM images ORDER BY id DESC";  
 // $resultset = mysqli_query($conn, $sql) or die("database error:". mysqli_error($conn));
 // $total_records = [];
require_once 'DatabaseHelper.php';
$db = new DatabaseHelper();
$tableName = "images";
 // while($record = mysqli_fetch_array($resultset)) {  
 //     $total_records[] = $record;  
 // }
 $result = $db->getAllRecord('SELECT file_name FROM images ORDER BY id DESC');
 echo json_encode($result);  
 ?>  