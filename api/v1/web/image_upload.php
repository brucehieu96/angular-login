<?php
include_once("db_connect.php");
if (!empty( $_FILES['file']['name'])){
	foreach($_FILES['file']['name'] as $key=>$val){        
		$upload_dir = "../../../upload/";
		$upload_file = $upload_dir.$_FILES['file']['name'][$key];
		$filename = $_FILES['file']['name'][$key];
		if(move_uploaded_file($_FILES['file']['tmp_name'][$key],$upload_file)){	
			$insert_sql = "INSERT INTO images(file_name) VALUES ('".$filename."')"; 
			mysqli_query($conn, $insert_sql) or die("database error: ". mysqli_error($conn));
		}
	}
	echo 'File uploaded and saved in database successfully.'; 
}
?>