class Card {
  constructor(rank, suit, color) {
    this.rank = rank;
    this.suit = suit;
    this.color = color;
  }
}

class CardItems {
  cards = [];
  suiteSrc;
  rankSrc;
  color = "";

  createDeck() {
    for (let i = 2; i < 11; i++) {
      this.cards.push(new Card(i, "Hearts", "Red"));
      this.cards.push(new Card(i, "Diamonds", "Red"));
      this.cards.push(new Card(i, "Spades", "Black"));
      this.cards.push(new Card(i, "Clubs", "Black"));
    }
    this.cards.push(new Card("A", "Hearts", "Red"));
    this.cards.push(new Card("A", "Diamonds", "Red"));
    this.cards.push(new Card("A", "Spades", "Black"));
    this.cards.push(new Card("A", "Clubs", "Black"));

    this.cards.push(new Card("J", "Hearts", "Red"));
    this.cards.push(new Card("J", "Diamonds", "Red"));
    this.cards.push(new Card("J", "Spades", "Black"));
    this.cards.push(new Card("J", "Clubs", "Black"));

    this.cards.push(new Card("Q", "Hearts", "Red"));
    this.cards.push(new Card("Q", "Diamonds", "Red"));
    this.cards.push(new Card("Q", "Spades", "Black"));
    this.cards.push(new Card("Q", "Clubs", "Black"));

    this.cards.push(new Card("K", "Hearts", "Red"));
    this.cards.push(new Card("K", "Diamonds", "Red"));
    this.cards.push(new Card("K", "Spades", "Black"));
    this.cards.push(new Card("K", "Clubs", "Black"));
    console.log(this.cards);
    return this.cards;
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    return this.cards;
  }

  createCard() {
    const cardEl = document.createElement("div");
    cardEl.className = "game__card";
    if (this.cards[0].suit === "Hearts") {
      this.suiteSrc = "./img/heart.svg";
      this.color = "#C20000";
    } else if (this.cards[0].suit === "Diamonds") {
      this.suiteSrc = "./img/diamond.svg";
      this.color = "#C20000";
    } else if (this.cards[0].suit === "clubs") {
      this.suiteSrc = "./img/club.svg";
      this.color = "black";
    } else {
      this.suiteSrc = "./img/spade.svg";
      this.color = "black";
    }

    if (this.cards[0].rank === "J" && this.cards[0].color === "Black") {
      this.rankSrc = "./img/jack-black.svg";
    } else if (this.cards[0].rank === "J" && this.cards[0].color === "Red") {
      this.rankSrc = "./img/jack-red.svg";
    } else if (this.cards[0].rank === "Q" && this.cards[0].color === "Black") {
      this.rankSrc = "./img/queen-black.svg";
    } else if (this.cards[0].rank === "Q" && this.cards[0].color === "Red") {
      this.rankSrc = "./img/queen-red.svg";
    } else if (this.cards[0].rank === "K" && this.cards[0].color === "Black") {
      this.rankSrc = "./img/king-black.svg";
    } else if (this.cards[0].rank === "K" && this.cards[0].color === "Red") {
      this.rankSrc = "./img/king-red.svg";
    }

    cardEl.innerHTML = `
        <div class="card__top-section">
          <h2 class="card-rank top-section__card-rank" style="color:${
            this.color
          }">${this.cards[0].rank}</h2>

          <div class="top-section__card-suite-img-container">
            <img class="card-suite-img-container__card-suite" src="${
              this.suiteSrc
            }">
          </div>
        </div>

        <div class="card__mid-section">
          <div class="mid-section__card-img-container">
            <img class="card-img-container__card-img" src="${
              this.cards[0].rank === "A" ||
              this.cards[0].rank === 2 ||
              this.cards[0].rank === 3 ||
              this.cards[0].rank === 4 ||
              this.cards[0].rank === 5 ||
              this.cards[0].rank === 6 ||
              this.cards[0].rank === 7 ||
              this.cards[0].rank === 8 ||
              this.cards[0].rank === 9 ||
              this.cards[0].rank === 10
                ? this.suiteSrc
                : this.rankSrc
            }">
          </div>
        </div>

        <div class="card__bottom-section">
          <div class="bottom-section__card-suite-img-container">
            <img class="card-suite-img-container__card-suite" src="${
              this.suiteSrc
            }">
          </div>
          <h2 class="card-rank bottom-section__card-rank" style="color:${
            this.color
          }">${this.cards[0].rank}</h2>
        </div>
    `;
    return cardEl;
  }

  updateCard() {
    this.usedCard = this.cards.splice(0, 1);
    this.cards.push(this.usedCard[0]);

    if (this.cards[0].suit === "Hearts") {
      this.suiteSrc = "./img/heart.svg";
      this.color = "#C20000";
    } else if (this.cards[0].suit === "Diamonds") {
      this.suiteSrc = "./img/diamond.svg";
      this.color = "#C20000";
    } else if (this.cards[0].suit === "clubs") {
      this.suiteSrc = "./img/club.svg";
      this.color = "black";
    } else {
      this.suiteSrc = "./img/spade.svg";
      this.color = "black";
    }

    if (this.cards[0].rank === "J" && this.cards[0].color === "Black") {
      this.rankSrc = "./img/jack-black.svg";
    } else if (this.cards[0].rank === "J" && this.cards[0].color === "Red") {
      this.rankSrc = "./img/jack-red.svg";
    } else if (this.cards[0].rank === "Q" && this.cards[0].color === "Black") {
      this.rankSrc = "./img/queen-black.svg";
    } else if (this.cards[0].rank === "Q" && this.cards[0].color === "Red") {
      this.rankSrc = "./img/queen-red.svg";
    } else if (this.cards[0].rank === "K" && this.cards[0].color === "Black") {
      this.rankSrc = "./img/king-black.svg";
    } else if (this.cards[0].rank === "K" && this.cards[0].color === "Red") {
      this.rankSrc = "./img/king-red.svg";
    }

    const cardRank = document.getElementsByClassName("card-rank");
    const cardSuite = document.getElementsByClassName(
      "card-suite-img-container__card-suite"
    );
    const cardImg = document.querySelector(".card-img-container__card-img");

    for (const card of cardRank) {
      card.innerHTML = this.cards[0].rank;

      card.style.color = this.color;
    }

    for (const card of cardSuite) {
      card.src = this.suiteSrc;
    }

    if (
      this.cards[0].rank === "A" ||
      this.cards[0].rank === 2 ||
      this.cards[0].rank === 3 ||
      this.cards[0].rank === 4 ||
      this.cards[0].rank === 5 ||
      this.cards[0].rank === 6 ||
      this.cards[0].rank === 7 ||
      this.cards[0].rank === 8 ||
      this.cards[0].rank === 9 ||
      this.cards[0].rank === 10
    ) {
      cardImg.src = this.suiteSrc;
    } else {
      cardImg.src = this.rankSrc;
    }
  }
}

class Gameboard extends CardItems {
  cards = [];
  usedCard;
  cardEl;
  score = 0;
  computerScore = 0;
  firstCardRank;
  secondCardRank;
  firstCardSuite;
  secondCardSuite;
  timeout;
  hook;

  constructor() {
    super();
  }

  newGameHandler() {
    const gameBoard = document.createElement("div");
    gameBoard.className = "container__game";
    this.hook = document.getElementById("container");
    this.createDeck();
    this.shuffle();
    this.createCard();
    this.cardEl = this.createCard();
    gameBoard.appendChild(this.cardEl);
    this.hook.appendChild(gameBoard);
    this.startGame();
    const controls = this.renderControls();
    gameBoard.appendChild(controls);

    const title = document.querySelector(".container__title");
    const newGameButton = document.querySelector(".container__new-game-button");
    title.style.display = "none";
    newGameButton.style.display = "none";
  }

  startGame() {
    setInterval(() => {
      this.updateCard();
      this.computer();
    }, 3000);
  }

  computer() {
    this.firstCardRank = this.cards[0].rank;
    this.secondCardRank = this.cards[this.cards.length - 1].rank;
    this.firstCardSuite = this.cards[0].suit;
    this.secondCardSuite = this.cards[this.cards.length - 1].suit;
    if (
      this.firstCardRank === this.secondCardRank ||
      this.firstCardSuite === this.secondCardSuite
    ) {
      this.timeout = setTimeout(() => {
        this.computerScore += 1;
        this.updateCard();
        console.log(`computer: ${this.computerScore}`);
        this.updateScore();
      }, 2000);
    }
  }

  snapbuttonHandler() {
    this.firstCardRank = this.cards[0].rank;
    this.secondCardRank = this.cards[this.cards.length - 1].rank;
    this.firstCardSuite = this.cards[0].suit;
    this.secondCardSuite = this.cards[this.cards.length - 1].suit;
    if (
      this.firstCardRank === this.secondCardRank ||
      this.firstCardSuite === this.secondCardSuite
    ) {
      this.score += 1;
      this.firstCardRank = 0;
      this.firstCardSuite = 0;
      console.log(`player: ${this.score}`);
      this.updateCard();
      this.updateScore();
      clearTimeout(this.timeout);
    } else {
      this.score <= 0 ? this.score : (this.score -= 1);
      console.log(`player: ${this.score}`);
      this.updateScore();
    }
  }

  updateScore() {
    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("computer-score");
    playerScore.innerText = `Player Score: ${this.score}`;
    computerScore.innerText = `Computer Score: ${this.computerScore}`;
  }

  renderControls() {
    const controls = document.createElement("div");
    controls.className = "container__controls";
    controls.innerHTML = `
    <button class="snap-button">SNAP</button>
    <p class="desc">Match either the rank or suite with the previous card!</p>
    <p id="player-score">Player Score: ${this.score}</p>
    <p id="computer-score">Computer Score: ${this.computerScore}</p>
    `;
    const snapButton = controls.querySelector(".snap-button");
    snapButton.addEventListener("click", this.snapbuttonHandler.bind(this));
    return controls;
  }

  render() {
    const gameBoard = document.createElement("main");
    gameBoard.id = "container";
    gameBoard.innerHTML = `
    <h1 class="container__title">Snap Game</h1>
    <button class="container__new-game-button">New Game</button>
    `;
    const newGameButton = gameBoard.querySelector(
      ".container__new-game-button"
    );
    newGameButton.addEventListener("click", this.newGameHandler.bind(this));

    return gameBoard;
  }
}

class App {
  static init() {
    const hook = document.querySelector("body");
    const gameBoard = new Gameboard();
    const gameBoardRend = gameBoard.render();
    hook.appendChild(gameBoardRend);
  }
  constructor() {}
  render() {}
}

App.init();
