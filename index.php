<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<?php
session_start();
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
		<div class="top-bar">
			<div class="dropdown">
				<button class="dropbtn">Menu</button>
				<div class="dropdown-content">
					<a href="scoreboard.html">Leaderboard</a>
					<a href="about.html">About</a>
					<a href="contact.html">Contact</a>
				</div>
			</div>
			<div class="page-name">Home</div>
			<?php
				if (isset($_SESSION['username'])) {
					echo '<div class="login-button"><a href="php/logout.php" class="top_button">Log Out</a></div>';
				} else {
					echo '<div class="login-button"><a href="login.html" class="top_button">Log In</a></div>';
				}
			?>
		</div>
	</header>
    <main>
		<div class="title-image-container">
			<img class="title-image" src="images/title.gif"></img>
			<h1>Make sure to not not think quickly and not not not make any mistakes!</h1>
			<p><a href="about.html" class="button">How to Play</a></p>
			<p><a href="scoreboard.html" class="button">Public Leaderboard</a></p>
			<p><a href="game.php" class="button">Start Game!</a></p>
		</div>
    </main>
</body>
</html>