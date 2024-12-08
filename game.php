<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<?php
session_start();
if (!isset($_SESSION['username'])) {
    header('Refresh: 0, url = /negatives/login.html');
    exit();
}
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
	<link rel="stylesheet" href="css/style.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        canvas {
            border: 2px solid black;
        }
        button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
        #scoreText {
            margin: 10px;
            font-size: 20px;
            font-weight: bold;
        }
        #promptBox {
            font-size: 18px;
            margin: 20px auto;
            padding: 10px;
            width: 50%;
            background-color: #fff;
            border: 2px solid #000;
        }
        #deathReason {
            font-size: 16px;
            color: red;
            margin: 20px auto;
        }
		.gameButton {
		  width: 15%;
		  height: 15%;
		  cursor: pointer;
		  transition: transform 0.1s ease;
		}
		
    </style>
</head>
<body>
	<header>
		<div class="top-bar">
			<div class="dropdown">
				<button class="dropbtn">Menu</button>
				<div class="dropdown-content">
					<a href="index.php">Home</a>
					<a href="scoreboard.html">Leaderboard</a>
					<a href="about.html">About</a>
					<a href="contact.html">Contact</a>
				</div>
			</div>
			<div class="page-name">Game</div>
		</div>
	</header>
	<canvas id="bg"></canvas>
	<h1 id="headText">Click any button to begin!</h1>
	<img id="buttonRed" class="gameButton" src="images/button_red.png" alt="Red Button">
	<img id="buttonGreen" class="gameButton" src="images/button_green.png" alt="Green Button">
	<br>
	<img id="buttonYellow" class="gameButton" src="images/button_yellow.png" alt="Yellow Button">
	<img id="buttonBlue" class="gameButton" src="images/button_blue.png" alt="Blue Button">
	<h1 id="scoreText">Score: 0<br>High-score: 0</h1>
	<script src="js/game.js"></script>
</body>
</html>