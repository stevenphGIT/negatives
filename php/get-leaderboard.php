<?php
session_start();

$servername = "localhost";
$dbUsername = "steven";
$dbPassword = "deoji123";
$dbName = "gamedb";

$conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

$stmt = $conn->prepare("SELECT username, score FROM users WHERE score > 0 ORDER BY score DESC LIMIT 10");

if (!$stmt) {
    header('Content-Type: application/json');
    echo json_encode(["status" => "error", "message" => $conn->error]);
    exit;
}

$stmt->execute();
$result = $stmt->get_result();
$leaderboard = [];

while ($row = $result->fetch_assoc()) {
    $leaderboard[] = $row;
}

header('Content-Type: application/json');
echo json_encode(["status" => "success", "leaderboard" => $leaderboard]);

$stmt->close();
$conn->close();
?>