<?php
include_once('db_connect.php');

echo'

<!doctype html>
<html>
<head>
<title>Guestbook</title>
<meta  charset="utf-8" />
<style src="style/style.css"></style>
</head>

<body>
<header>
<h1>Guestbook</h1>
</header>
<nav>

</nav>


<section id="content">

<form action="" method="post">
<label>Name:</label><input type="text" name="name" placeholder="name"> <br />
<label>Email:</label><input type="text" name="email" placeholder="email"> <br />
<textarea cols="20" rows="8" name="msg"></textarea>
<br />
<input type="submit" name="submit_post" value="Submit guestbook post">

</form>';

if(isset($_POST['submit_post'])){
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$msg = $_POST['msg'];
	
	echo'<P>Name: '.$name.'<br />Email: '.$email.'<br /> Message: '.$msg.'</P>';
	

}

echo'
</section>
</body>
</html>';