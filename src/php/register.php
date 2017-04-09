<?php
	$user=isset($_POST['username'])?$_POST['username']:'';
	$pasw=isset($_POST['pasw'])?$_POST['pasw']:'';
	// print_r(66666);
	// print_r($user);
	// print_r($pasw);
	// $obj=array('username'=>$username,'pasw'=>$pasw);
	$servername='localhost';
	$username='root';
	$password='';
	$dbname='fruit garden';
	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
	    die("连接失败: " . $conn->connect_error);
	} 
	
	if($user!=''&&$pasw!=''){
	
		$sql = "INSERT INTO users (name, psw)
				values ('".$user."','".$pasw."')";
		
		if ($conn->query($sql) === TRUE) {
	
		    echo "ok";
		}
		//  else {

		//     echo "Error: " . $sql . "<br>" . $conn->error;
		// }
	}	



	// $name=isset($_POST['username'])?$_POST['username']:'';
	// $pasw=isset($_POST['pasw'])?$_POST['pasw']:'';
	// $name = $_REQUEST["username"];
	// $pasw = $_REQUEST["pasw"];
	// print_r(2221);
	// print_r($name);
	// print_r($pasw);
	// $obj=array('username'=>$username,'pasw'=>$pasw);
	// $servername='localhost';
	// $username='root';
	// $password='';
	// $dbname='fruit garden';
	// // 创建连接
	// $conn = new mysqli($servername, $username, $password, $dbname);
	// // 检测连接
	// if ($conn->connect_error) {
	//     die("连接失败: " . $conn->connect_error);
	// } 
	// print_r($name);
	// if($name!=''&&$pasw!=''){
	// 	print_r(222);
	// 	// 插入数据
	// 	$sql = "INSERT INTO users (name, psw)
	// 			values ('".$name."', '".$pasw."')";
	// 	//若能查询获取到数据库的数据，则插入数据成功		
	// 	if ($conn->query($sql) === TRUE) {
	// 		print_r(333);
	// 	    echo "数据插入成功";
	// 	} else {
	// 		print_r(4544);
	// 	    echo "Error: " . $sql . "<br>" . $conn->error;
	// 	}
	// }	
?>