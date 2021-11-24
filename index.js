let gameboardDiv = document.getElementById("gameboard");
let resetBtn = document.getElementById("reset");
let boxes = document.querySelectorAll(".box");

let player = 1;

gameboardDiv.addEventListener("click", (e) => {
  handleClick(e);
});

resetBtn.addEventListener("click", () => {
    resetGame()
})

const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = "";
    })
    player = 1
};

const handleClick = (e) => {
  if (e.target.innerText === "") {
    if (player === 1) {
      e.target.innerText = "X";
      player = 2;
    } else {
      e.target.innerText = "O";
      player = 1;
    }
  }
};
