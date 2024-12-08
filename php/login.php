<?php
	session_start();

	$servername = "localhost";
	$dbUsername = "steven";
	$dbPassword = "deoji123";
	$dbName = "gamedb";

	$conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
		header('Refresh: 3, url = /negatives/login.html');
	}

	$username = $_POST['username'] ?? '';
	$password = $_POST['password'] ?? '';

	if (empty($username) || empty($password)) {
		die("Username and password are required.");
		header('Refresh: 3, url = /negatives/login.html');
	}

	$sql = "SELECT UserID, Password FROM Users WHERE Username = ?";
	$stmt = $conn->prepare($sql);
	$stmt->bind_param("s", $username);
	$stmt->execute();
	$stmt->store_result();

	if ($stmt->num_rows === 0) {
		die("Invalid username or password.");
		header('Refresh: 3, url = /negatives/login.html');
	}

	$stmt->bind_result($userID, $storedPassword);
	$stmt->fetch();

	if ($password === $storedPassword) {
		$_SESSION['userID'] = $userID;
		$_SESSION['username'] = $username;

		header('Refresh: 0, url = /negatives/index.php');
		exit();
	} else {
		die("Invalid username or password.");
		header('Refresh: 3, url = /negatives/login.html');
	}

	$stmt->close();
	$conn->close();
?>