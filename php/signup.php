<?php
session_start();

$servername = "localhost";
$dbUsername = "steven";
$dbPassword = "deoji123";
$dbName = "gamedb";

$conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';
$confirmPassword = $_POST['confirm_password'] ?? '';

if (empty($username) || empty($password) || empty($confirmPassword)) {
    die("All fields are required.");
}

if ($password !== $confirmPassword) {
    die("Passwords do not match.");
}

$sql = "SELECT UserID FROM Users WHERE Username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    die("Username is already taken.");
}

$sql = "INSERT INTO Users (Username, Password) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $password);

if ($stmt->execute()) {
    echo "Sign-up successful! Redirecting to login page...";
    header('Refresh: 2, url = /negatives/login.html');
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>