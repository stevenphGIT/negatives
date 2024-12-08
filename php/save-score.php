<?php
session_start();

$servername = "localhost";
$dbUsername = "steven";
$dbPassword = "deoji123";
$dbName = "gamedb";

$conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

if (!isset($_SESSION['username'])) {
    echo json_encode(['status' => 'error', 'message' => 'User not logged in']);
    exit;
}

$userID = $_SESSION['userID'];
$score = $_POST['score'];

if (!isset($conn)) {
    die("Database connection not initialized.");
}

$stmt = $conn->prepare("UPDATE users SET score = ? WHERE UserID = ?");
if (!$stmt) {
    die("SQL error: " . $conn->error);
}
$stmt->bind_param("ii", $score, $userID);
$stmt->execute();

if ($stmt->affected_rows > 0) {
	echo json_encode(["status" => "success", "message" => "High score updated."]);
} else {
	echo json_encode(["status" => "error", "message" => "Failed to update high score."]);
}

$stmt->close();
$conn->close();
?>