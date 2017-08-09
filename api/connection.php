<?php
	$url = parse_url(getenv("mysql://b1a5456e9a4c68:0028acd9@us-cdbr-iron-east-05.cleardb.net/heroku_f4ab3de69ce4142?reconnect=true"));

	$server = $url["host"];
	$username = $url["user"];
	$password = $url["pass"];
	$db = substr($url["path"], 1);

	$conn = new mysqli($server, $username, $password, $db);
?>