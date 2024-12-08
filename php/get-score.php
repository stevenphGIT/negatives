<?php
session_start();

$servername = "localhost";
$dbUsername = "steven";
$dbPassword = "deoji123";
$dbName = "gamedb";

$conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

$userID = $_SESSION['userID'];

$stmt = $conn->prepare("SELECT score FROM users WHERE UserID = ?");
if (!$stmt) {
    die(json_encode(["status" => "error", "message" => $conn->error]));
}

$stmt->bind_param("i", $userID);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    echo json_encode(["status" => "success", "highScore" => $row['score']]);
} else {
    echo json_encode(["status" => "error", "message" => "No data found."]);
}
$stmt->close();
$conn->close();
?>