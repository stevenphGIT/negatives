//All sprites and code used were created by me, intended only for usage in this game.
//Sounds were made by me using the website sfxr.me
//Game idea inspired by Not Not by Alternative Shift, available on Android and iOS

var RedList = ["Press the Red button.", "Do not not press the Red button.", "Press the top-left button.", "Do not not press the top-left button."];
var GreenList = ["Press the Green button.", "Do not not press the Green button.", "Press the top-right button.", "Do not not press the top-right button."];
var YellowList = ["Press the Yellow button.", "Do not not press the Yellow button.", "Press the bottom-left button.", "Do not not press the bottom-left button."];
var BlueList = ["Press the Blue button.", "Do not not press the Blue button.", "Press the bottom-right button.", "Do not not press the bottom-right button."];

var NotRedList = ["Do not press the Red button.", "Do not not not press the Red button.", "Do not press the top-left button.", "Do not not not press the top-left button."];
var NotGreenList = ["Do not press the Green button.", "Do not not not press the Green button.", "Do not press the top-right button.", "Do not not not press the top-right button."];
var NotYellowList = ["Do not press the Yellow button.", "Do not not not press the Yellow button.", "Do not press the bottom-left button.", "Do not not not press the bottom-left button."];
var NotBlueList = ["Do not press the Blue button.", "Do not not not press the Blue button.", "Do not press the bottom-right button.", "Do not not not press the bottom-right button."];

var NothingList = ["Do nothing.", "Do not not do nothing."];
var NotNothingList = ["Do not do nothing.", "Do not not not do nothing."];

var randKey = -1;
var randList = -1;

var defaultIMax = 1000;
var iMax = 1000;
var i = iMax;
var score = 0;
var clockSpeed = 5;

var highScore = 0;

var date;
var month = "";
var days;
var hours;
var minutes;

var difficulty = "";
var gameStarted = false;
var shouldRestart = false;

var loop = false;

var intervalID = -1;

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 10;

getScore();

document.getElementById('buttonRed').addEventListener('click', () => {
	buttonClick("red");
  });

  document.getElementById('buttonGreen').addEventListener('click', () => {
	buttonClick("green");
  });

  document.getElementById('buttonYellow').addEventListener('click', () => {
	buttonClick("yellow");
  });

  document.getElementById('buttonBlue').addEventListener('click', () => {
	buttonClick("blue");
  });
  
 function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buttonClick(color)
{
	if(shouldRestart)
	{
		restartGame();
	}
	else if(!gameStarted)
	{
	  ctx.fillStyle = "red"
	  lineCountdown(clockSpeed);
	  gameStarted = true;
	  setPrompt();
	}
	else
	{
		if(randKey == 4 && randList == 0)
		{
			setText("headText", "You were supposed to do nothing! Final Score: " + score + "<br>Press any button to reset.");
			gameEnd();
		}
		else if(randKey == 4 && randList == 1)
		{
			correctClick();
		}
		else if((color == "red" && randKey == 0 && randList == 0 && gameStarted) || (color != "red" && randKey == 0 && randList == 1 && gameStarted))
		{
			correctClick();
		}
		else if((color == "green" && randKey == 1 && randList == 0 && gameStarted) || (color != "green" && randKey == 1 && randList == 1 && gameStarted))
		{
			correctClick();
		}
		else if((color == "yellow" && randKey == 2 && randList == 0 && gameStarted) || (color != "yellow" && randKey == 2 && randList == 1 && gameStarted))
		{
			correctClick();
		}
		else if((color == "blue" && randKey == 3 && randList == 0 && gameStarted) || (color != "blue" && randKey == 3 && randList == 1 && gameStarted))
		{
			correctClick();
		}
		else
		{
			if(gameStarted)
			{
			  setText("headText", "You pressed the wrong button! Final Score: " + score + "<br>Press any button to reset.");
			  gameEnd();
			}
		}
	}
}


function setPrompt()
{
  randKey = randomNumber(0, 4);
  
  randList = randomNumber(0, 1);
  
  if(randKey == 0)
  {
    if(randList == 0)
    {
      setText("headText", RedList[randomNumber(0, RedList.length - 1)]);
    }
    else
    {
      setText("headText", NotRedList[randomNumber(0, NotRedList.length - 1)]);
    }
  }
  else if(randKey == 1)
  {
    if(randList == 0)
    {
      setText("headText", GreenList[randomNumber(0, GreenList.length - 1)]);
    }
    else
    {
      setText("headText", NotGreenList[randomNumber(0, NotGreenList.length - 1)]);
    }
  }
  else if(randKey == 2)
  {
    if(randList == 0)
    {
      setText("headText", YellowList[randomNumber(0, YellowList.length - 1)]);
    }
    else
    {
      setText("headText", NotYellowList[randomNumber(0, NotYellowList.length - 1)]);
    }
  }
  else if(randKey == 3)
  {
    if(randList == 0)
    {
      setText("headText", BlueList[randomNumber(0, BlueList.length - 1)]);
    }
    else
    {
      setText("headText", NotBlueList[randomNumber(0, NotBlueList.length - 1)]);
    }
  }
  else if(randKey == 4 )
  {
    if(randList == 0)
    {
      setText("headText", NothingList[randomNumber(0, NothingList.length - 1)]);
    }
    else
    {
      setText("headText", NotNothingList[randomNumber(0, NotNothingList.length - 1)]);
    }
  }
}

function correctClick()
{
  score++;
  if(iMax > 300)
  {
	  iMax -= 20;
  }
  i = iMax;
  setPrompt();
  updateVars();
}

function lineCountdown(speed)
{
	intervalID = setInterval(drawLine, speed)
}

function drawLine()
{	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.fillRect(0, 0, canvas.width * (i / iMax), 10);
	ctx.stroke();
	i--;
	if(i <= -30)
	{
		if(randKey == 4)
		{
			correctClick();
		}
		else
		{
			setText("headText", "You took too long! Final Score: " + score + "<br>Press any button to reset.");
			gameEnd();
		}
	}
}

function gameEnd()
{
  clearInterval(intervalID);
  iMax = defaultIMax;
  i = iMax;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(score > highScore)
  {
	  highScore = score;
	  saveScore(highScore);
  }
  score = 0;
  gameStarted = false;
  updateVars();
  shouldRestart = true;
}

function restartGame()
{
	shouldRestart = false;
	setText("headText", "Click any button to begin!");
}

function updateVars() {
	setText("scoreText", "Score: " + score + "<br>High-score: " + highScore);
}

function setText(elementId, words) {
    document.getElementById(elementId).innerHTML = words;
}

async function getScore() {
    try {
        const response = await fetch('/negatives/php/get-score.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();

        if (data.status === "success") {
            highScore = data.highScore;
			updateVars();
        } else {
            console.error("Error fetching high score:", data.message);
        }
    } catch (error) {
        console.error("Error with fetch:", error);
    }
}

function saveScore(score) {
    fetch('/negatives/php/save-score.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `score=${encodeURIComponent(score)}`,
    })
    .then(response => response.text())
    .then(data => {
        console.log("Server Response:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

