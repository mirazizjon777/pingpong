const image = document.querySelector(".image");
const title = document.querySelector(".title");
const select = document.querySelector(".select");
const player1Title = document.querySelector(".player-one");
const player2Title = document.querySelector(".player-two");
const player1Btn = document.querySelector(".player-one-btn");
const player2Btn = document.querySelector(".player-two-btn");
const resetBtn = document.querySelector(".reset-btn");

let playOne = 0;
let playTwo = 0;
let gameFinish = 5;
let gameOver = false;
let audio = new Audio("audio/clap.wav");

select.addEventListener("change", ()=> {
  gameFinish = select.value
  console.log(select.value);
})

function randomImage() {
  let random = Math.trunc(Math.random() * 5 + 1);
  image.src = `/images/ping-pong-${random}.jpg`;
}
randomImage();

player1Btn.addEventListener("click", function () {
  if (!gameOver) {
    playOne++;
    player1Title.textContent = playOne;
    if (gameFinish == playOne) {
      audio.play();
      gameOver = !gameOver;
      title.textContent = "player 1 🏆Wins";
      player1Title.style.color = "green";
      player2Title.style.color = "red";
    }
  }
});

player2Btn.addEventListener("click", function () {
  if (!gameOver) {
    playTwo++;
    player2Title.textContent = playTwo;
    if (gameFinish == playTwo) {
      audio.play();
      gameOver = !gameOver;
      title.textContent = "player 2 🏆Wins";
      player2Title.style.color = "green";
      player1Title.style.color = "red";
    }
  }
});

resetBtn.addEventListener("click", function () {
  title.textContent = "Stol Tennis";
  player2Title.style.color = "#123456";
  player1Title.style.color = "#123456";
  playOne = 0;
  playTwo = 0;
  gameOver = false;
  player1Title.textContent = playOne;
  player2Title.textContent = playTwo;
  randomImage();
  audio.pause();
});


