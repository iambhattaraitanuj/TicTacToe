let all_boxes = document.querySelectorAll(".box");
let turn = document.getElementById("turn");

turn.innerText = "Turn for O";
round = true;
let isGameRunning = true;
all_boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (isGameRunning) {
      let clickAudio = new Audio("clicksound.mp3");
      clickAudio.play();
      clickAudio.volume = 1;
      if (round) {
        box.innerText = "O";
        turn.innerText = "Turn for X";
        round = false;
      } else {
        box.innerText = "X";
        turn.innerText = "Turn for O";
        round = true;
      }
      checkWin();
    }
  });
});

let wincondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin() {
  wincondition.forEach((e) => {
    if (
      all_boxes[e[0]].innerText == all_boxes[e[1]].innerText &&
      all_boxes[e[0]].innerText == all_boxes[e[2]].innerText &&
      all_boxes[e[0]].innerText !== ""
    ) {
      turn.innerHTML = all_boxes[e[0]].innerText + " Won!";
      turn.style.fontSize = "35px";
      let winAudio = new Audio("winsound.mp3");
      winAudio.play();
      winAudio.volume = 1;
      isGameRunning = false;
    }

  });
}

let restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", () => {
  window.location.reload();
});
