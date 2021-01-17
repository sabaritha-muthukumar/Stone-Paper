// score
const game = () => {
  // player & computer scores
  let pScore = 0;
  let cScore = 0;

  // to fadein & out (like routing)
  // Start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    // if click let's play it should do some action
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //computer options
    const computerOptions = ["stone", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        console.log("computer option", computerChoice);
        setTimeout(() => {
          // we call compare hands
          compareHands(this.textContent, computerChoice);
          // update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png `;
        }, 2000);

        //animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");

    //for tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }

    //check for stone
    if (playerChoice === "stone") {
      if (computerChoice === "scissors") {
        winner.textContent = "player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    //check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "player Wins";
        pScore++;
        updateScore();
        return;
      }
    }

    //check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "stone") {
        winner.textContent = "computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "player Wins";
        pScore++;
        updateScore();
        return;
      }
    }

    // if (playerChoice === "stone") {
    //   if (computerChoice === "paper") {
    //     winner.textContent = "player Wins";
    //   } else {
    //     winner.textContent = "computer Wins";
    //     return;
    //   }
    // }
  };
  //  IS call all the inner functions
  startGame();
  playMatch();
};

//start the game function
{
  game();
}
