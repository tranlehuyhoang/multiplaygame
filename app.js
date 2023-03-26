const mapData = {
  minX: 0,
  maxX: 34,
  minY: 0,
  maxY: 34,
  blockedSpaces: {
    // "7x4": true,
    // "1x11": true,
    // "12x10": true,
    // "4x7": true,
    // "5x7": true,
    // "6x7": true,
    // "8x6": true,
    // "9x6": true,
    // "10x6": true,
    // "7x9": true,
    // "8x9": true,
    // "9x9": true,
  },
};

// Options for Player Colors... these are in the same order as our sprite sheet
const playerColors = ["blue", "red", "orange", "yellow", "green", "purple"];

//Misc Helpers
function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function getKeyString(x, y) {
  return `${x}x${y}`;
}

function createName() {
  const prefix = randomFromArray([
    // "COOL",
    // "SUPER",
    // "HIP",
    // "SMUG",
    // "COOL",
    // "SILKY",
    // "GOOD",
    // "SAFE",
    // "DEAR",
    // "DAMP",
    // "WARM",
    // "RICH",
    // "LONG",
    // "DARK",
    // "SOFT",
    // "BUFF",
    // "DOPE",
    ""
  ]);
  const animal = randomFromArray([
    // "BEAR",
    // "DOG",
    // "CAT",
    // "FOX",
    // "LAMB",
    // "LION",
    // "BOAR",
    // "GOAT",
    // "VOLE",
    // "SEAL",
    // "PUMA",
    // "MULE",
    // "BULL",
    // "BIRD",
    // "BUG",
    ""
  ]);
  return `${prefix} ${animal}`;
}

function isSolid(x, y) {

  const blockedNextSpace = mapData.blockedSpaces[getKeyString(x, y)];
  return (
    blockedNextSpace ||
    x >= mapData.maxX ||
    x < mapData.minX ||
    y >= mapData.maxY ||
    y < mapData.minY
  )
}

function getRandomSafeSpot() {
  //We don't look things up by key here, so just return an x/y
  return randomFromArray([

    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 0, y: 3 },
    { x: 0, y: 4 },
    { x: 0, y: 5 },
    { x: 0, y: 6 },
    { x: 0, y: 7 },
    { x: 0, y: 8 },
    { x: 0, y: 9 },
    { x: 0, y: 10 },
    { x: 0, y: 11 },
    { x: 0, y: 12 },
    { x: 0, y: 13 },
    { x: 0, y: 14 },
    { x: 0, y: 15 },
    { x: 0, y: 16 },
    { x: 0, y: 17 },
    { x: 0, y: 18 },
    { x: 0, y: 19 },
    { x: 0, y: 20 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 1, y: 3 },
    { x: 1, y: 4 },
    { x: 1, y: 5 },
    { x: 1, y: 6 },
    { x: 1, y: 7 },
    { x: 1, y: 8 },
    { x: 1, y: 9 },
    { x: 1, y: 10 },
    { x: 1, y: 11 },
    { x: 1, y: 12 },
    { x: 1, y: 13 },
    { x: 1, y: 14 },
    { x: 1, y: 15 },
    { x: 1, y: 16 },
    { x: 1, y: 17 },
    { x: 1, y: 18 },
    { x: 1, y: 19 },
    { x: 1, y: 20 },
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 2, y: 3 },
    { x: 2, y: 4 },
    { x: 2, y: 5 },
    { x: 2, y: 6 },
    { x: 2, y: 7 },
    { x: 2, y: 8 },
    { x: 2, y: 9 },
    { x: 2, y: 10 },
    { x: 2, y: 11 },
    { x: 2, y: 12 },
    { x: 2, y: 13 },
    { x: 2, y: 14 },
    { x: 2, y: 15 },
    { x: 2, y: 16 },
    { x: 2, y: 17 },
    { x: 2, y: 18 },
    { x: 2, y: 19 },
    { x: 2, y: 20 },
    { x: 3, y: 0 },
    { x: 3, y: 1 },
    { x: 3, y: 2 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 3, y: 5 },
    { x: 3, y: 6 },
    { x: 3, y: 7 },
    { x: 3, y: 8 },
    { x: 3, y: 9 },
    { x: 3, y: 10 },
    { x: 3, y: 11 },
    { x: 3, y: 12 },
    { x: 3, y: 13 },
    { x: 3, y: 14 },
    { x: 3, y: 15 },
    { x: 3, y: 16 },
    { x: 3, y: 17 },
    { x: 3, y: 18 },
    { x: 3, y: 19 },
    { x: 3, y: 20 },
    { x: 4, y: 0 },
    { x: 4, y: 1 },
    { x: 4, y: 2 },
    { x: 4, y: 3 },
    { x: 4, y: 4 },
    { x: 4, y: 5 },
    { x: 4, y: 6 },
    { x: 4, y: 7 },
    { x: 4, y: 8 },
    { x: 4, y: 9 },
    { x: 4, y: 10 },
    { x: 4, y: 11 },
    { x: 4, y: 12 },
    { x: 4, y: 13 },
    { x: 4, y: 14 },
    { x: 4, y: 15 },
    { x: 4, y: 16 },
    { x: 4, y: 17 },
    { x: 4, y: 18 },
    { x: 4, y: 19 },
    { x: 4, y: 20 },
    { x: 5, y: 0 },
    { x: 5, y: 1 },
    { x: 5, y: 2 },
    { x: 5, y: 3 },
    { x: 5, y: 4 },
    { x: 5, y: 5 },
    { x: 5, y: 6 },
    { x: 5, y: 7 },
    { x: 5, y: 8 },
    { x: 5, y: 9 },
    { x: 5, y: 10 },
    { x: 5, y: 11 },
    { x: 5, y: 12 },
    { x: 5, y: 13 },
    { x: 5, y: 14 },
    { x: 5, y: 15 },
    { x: 5, y: 16 },
    { x: 5, y: 17 },
    { x: 5, y: 18 },
    { x: 5, y: 19 },
    { x: 5, y: 20 },
    { x: 6, y: 0 },
    { x: 6, y: 1 },
    { x: 6, y: 2 },
    { x: 6, y: 3 },
    { x: 6, y: 4 },
    { x: 6, y: 5 },
    { x: 6, y: 6 },
    { x: 6, y: 7 },
    { x: 6, y: 8 },
    { x: 6, y: 9 },
    { x: 6, y: 10 },
    { x: 6, y: 11 },
    { x: 6, y: 12 },
    { x: 6, y: 13 },
    { x: 6, y: 14 },
    { x: 6, y: 15 },
    { x: 6, y: 16 },
    { x: 6, y: 17 },
    { x: 6, y: 18 },
    { x: 6, y: 19 },
    { x: 6, y: 20 },
    { x: 7, y: 0 },
    { x: 7, y: 1 },
    { x: 7, y: 2 },
    { x: 7, y: 3 },
    { x: 7, y: 4 },
    { x: 7, y: 5 },
    { x: 7, y: 6 },
    { x: 7, y: 7 },
    { x: 7, y: 8 },
    { x: 7, y: 9 },
    { x: 7, y: 10 },
    { x: 7, y: 11 },
    { x: 7, y: 12 },
    { x: 7, y: 13 },
    { x: 7, y: 14 },
    { x: 7, y: 15 },
    { x: 7, y: 16 },
    { x: 7, y: 17 },
    { x: 7, y: 18 },
    { x: 7, y: 19 },
    { x: 7, y: 20 },
    { x: 8, y: 0 },
    { x: 8, y: 1 },
    { x: 8, y: 2 },
    { x: 8, y: 3 },
    { x: 8, y: 4 },
    { x: 8, y: 5 },
    { x: 8, y: 6 },
    { x: 8, y: 7 },
    { x: 8, y: 8 },
    { x: 8, y: 9 },
    { x: 8, y: 10 },
    { x: 8, y: 11 },
    { x: 8, y: 12 },
    { x: 8, y: 13 },
    { x: 8, y: 14 },
    { x: 8, y: 15 },
    { x: 8, y: 16 },
    { x: 8, y: 17 },
    { x: 8, y: 18 },
    { x: 8, y: 19 },
    { x: 8, y: 20 },
    { x: 9, y: 0 },
    { x: 9, y: 1 },
    { x: 9, y: 2 },
    { x: 9, y: 3 },
    { x: 9, y: 4 },
    { x: 9, y: 5 },
    { x: 9, y: 6 },
    { x: 9, y: 7 },
    { x: 9, y: 8 },
    { x: 9, y: 9 },
    { x: 9, y: 10 },
    { x: 9, y: 11 },
    { x: 9, y: 12 },
    { x: 9, y: 13 },
    { x: 9, y: 14 },
    { x: 9, y: 15 },
    { x: 9, y: 16 },
    { x: 9, y: 17 },
    { x: 9, y: 18 },
    { x: 9, y: 19 },
    { x: 9, y: 20 },
    { x: 10, y: 0 },
    { x: 10, y: 1 },
    { x: 10, y: 2 },
    { x: 10, y: 3 },
    { x: 10, y: 4 },
    { x: 10, y: 5 },
    { x: 10, y: 6 },
    { x: 10, y: 7 },
    { x: 10, y: 8 },
    { x: 10, y: 9 },
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    { x: 10, y: 12 },
    { x: 10, y: 13 },
    { x: 10, y: 14 },
    { x: 10, y: 15 },
    { x: 10, y: 16 },
    { x: 10, y: 17 },
    { x: 10, y: 18 },
    { x: 10, y: 19 },
    { x: 10, y: 20 },
    { x: 11, y: 0 },
    { x: 11, y: 1 },
    { x: 11, y: 2 },
    { x: 11, y: 3 },
    { x: 11, y: 4 },
    { x: 11, y: 5 },
    { x: 11, y: 6 },
    { x: 11, y: 7 },
    { x: 11, y: 8 },
    { x: 11, y: 9 },
    { x: 11, y: 10 },
    { x: 11, y: 11 },
    { x: 11, y: 12 },
    { x: 11, y: 13 },
    { x: 11, y: 14 },
    { x: 11, y: 15 },
    { x: 11, y: 16 },
    { x: 11, y: 17 },
    { x: 11, y: 18 },
    { x: 11, y: 19 },
    { x: 11, y: 20 },
    { x: 12, y: 0 },
    { x: 12, y: 1 },
    { x: 12, y: 2 },
    { x: 12, y: 3 },
    { x: 12, y: 4 },
    { x: 12, y: 5 },
    { x: 12, y: 6 },
    { x: 12, y: 7 },
    { x: 12, y: 8 },
    { x: 12, y: 9 },
    { x: 12, y: 10 },
    { x: 12, y: 11 },
    { x: 12, y: 12 },
    { x: 12, y: 13 },
    { x: 12, y: 14 },
    { x: 12, y: 15 },
    { x: 12, y: 16 },
    { x: 12, y: 17 },
    { x: 12, y: 18 },
    { x: 12, y: 19 },
    { x: 12, y: 20 },
    { x: 13, y: 0 },
    { x: 13, y: 1 },
    { x: 13, y: 2 },
    { x: 13, y: 3 },
    { x: 13, y: 4 },
    { x: 13, y: 5 },
    { x: 13, y: 6 },
    { x: 13, y: 7 },
    { x: 13, y: 8 },
    { x: 13, y: 9 },
    { x: 13, y: 10 },
    { x: 13, y: 11 },
    { x: 13, y: 12 },
    { x: 13, y: 13 },
    { x: 13, y: 14 },
    { x: 13, y: 15 },
    { x: 13, y: 16 },
    { x: 13, y: 17 },
    { x: 13, y: 18 },
    { x: 13, y: 19 },
    { x: 13, y: 20 },
    { x: 14, y: 0 },
    { x: 14, y: 1 },
    { x: 14, y: 2 },
    { x: 14, y: 3 },
    { x: 14, y: 4 },
    { x: 14, y: 5 },
    { x: 14, y: 6 },
    { x: 14, y: 7 },
    { x: 14, y: 8 },
    { x: 14, y: 9 },
    { x: 14, y: 10 },
    { x: 14, y: 11 },
    { x: 14, y: 12 },
    { x: 14, y: 13 },
    { x: 14, y: 14 },
    { x: 14, y: 15 },
    { x: 14, y: 16 },
    { x: 14, y: 17 },
    { x: 14, y: 18 },
    { x: 14, y: 19 },
    { x: 14, y: 20 },
    { x: 15, y: 0 },
    { x: 15, y: 1 },
    { x: 15, y: 2 },
    { x: 15, y: 3 },
    { x: 15, y: 4 },
    { x: 15, y: 5 },
    { x: 15, y: 6 },
    { x: 15, y: 7 },
    { x: 15, y: 8 },
    { x: 15, y: 9 },
    { x: 15, y: 10 },
    { x: 15, y: 11 },
    { x: 15, y: 12 },
    { x: 15, y: 13 },
    { x: 15, y: 14 },
    { x: 15, y: 15 },
    { x: 15, y: 16 },
    { x: 15, y: 17 },
    { x: 15, y: 18 },
    { x: 15, y: 19 },
    { x: 15, y: 20 },
    { x: 16, y: 0 },
    { x: 16, y: 1 },
    { x: 16, y: 2 },
    { x: 16, y: 3 },
    { x: 16, y: 4 },
    { x: 16, y: 5 },
    { x: 16, y: 6 },
    { x: 16, y: 7 },
    { x: 16, y: 8 },
    { x: 16, y: 9 },
    { x: 16, y: 10 },
    { x: 16, y: 11 },
    { x: 16, y: 12 },
    { x: 16, y: 13 },
    { x: 16, y: 14 },
    { x: 16, y: 15 },
    { x: 16, y: 16 },
    { x: 16, y: 17 },
    { x: 16, y: 18 },
    { x: 16, y: 19 },
    { x: 16, y: 20 },
    { x: 17, y: 0 },
    { x: 17, y: 1 },
    { x: 17, y: 2 },
    { x: 17, y: 3 },
    { x: 17, y: 4 },
    { x: 17, y: 5 },
    { x: 17, y: 6 },
    { x: 17, y: 7 },
    { x: 17, y: 8 },
    { x: 17, y: 9 },
    { x: 17, y: 10 },
    { x: 17, y: 11 },
    { x: 17, y: 12 },
    { x: 17, y: 13 },
    { x: 17, y: 14 },
    { x: 17, y: 15 },
    { x: 17, y: 16 },
    { x: 17, y: 17 },
    { x: 17, y: 18 },
    { x: 17, y: 19 },
    { x: 17, y: 20 },
    { x: 18, y: 0 },
    { x: 18, y: 1 },
    { x: 18, y: 2 },
    { x: 18, y: 3 },
    { x: 18, y: 4 },
    { x: 18, y: 5 },
    { x: 18, y: 6 },
    { x: 18, y: 7 },
    { x: 18, y: 8 },
    { x: 18, y: 9 },
    { x: 18, y: 10 },
    { x: 18, y: 11 },
    { x: 18, y: 12 },
    { x: 18, y: 13 },
    { x: 18, y: 14 },
    { x: 18, y: 15 },
    { x: 18, y: 16 },
    { x: 18, y: 17 },
    { x: 18, y: 18 },
    { x: 18, y: 19 },
    { x: 18, y: 20 },
    { x: 19, y: 0 },
    { x: 19, y: 1 },
    { x: 19, y: 2 },
    { x: 19, y: 3 },
    { x: 19, y: 4 },
    { x: 19, y: 5 },
    { x: 19, y: 6 },
    { x: 19, y: 7 },
    { x: 19, y: 8 },
    { x: 19, y: 9 },
    { x: 19, y: 10 },
    { x: 19, y: 11 },
    { x: 19, y: 12 },
    { x: 19, y: 13 },
    { x: 19, y: 14 },
    { x: 19, y: 15 },
    { x: 19, y: 16 },
    { x: 19, y: 17 },
    { x: 19, y: 18 },
    { x: 19, y: 19 },
    { x: 19, y: 20 },
    { x: 20, y: 0 },
    { x: 20, y: 1 },
    { x: 20, y: 2 },
    { x: 20, y: 3 },
    { x: 20, y: 4 },
    { x: 20, y: 5 },
    { x: 20, y: 6 },
    { x: 20, y: 7 },
    { x: 20, y: 8 },
    { x: 20, y: 9 },
    { x: 20, y: 10 },
    { x: 20, y: 11 },
    { x: 20, y: 12 },
    { x: 20, y: 13 },
    { x: 20, y: 14 },
    { x: 20, y: 15 },
    { x: 20, y: 16 },
    { x: 20, y: 17 },
    { x: 20, y: 18 },
    { x: 20, y: 19 },
    { x: 20, y: 20 }
  ]);
}


(function () {

  let playerId;
  let playerRef;
  let players = {};
  let playerElements = {};
  let coins = {};
  let coinElements = {};

  const gameContainer = document.querySelector(".game-container");
  const playerNameInput = document.querySelector("#player-name");
  const playerColorButton = document.querySelector("#player-color");


  function placeCoin() {
    const { x, y } = getRandomSafeSpot();
    const coinRef = firebase.database().ref(`coins/${getKeyString(x, y)}`);
    coinRef.set({
      x,
      y,
    })

    const coinTimeouts = [2000, 3000, 4000, 5000];
    setTimeout(() => {
      placeCoin();
    }, randomFromArray(coinTimeouts));
  }

  function attemptGrabCoin(x, y) {
    const key = getKeyString(x, y);
    if (coins[key]) {
      // Remove this key from data, then uptick Player's coin count
      firebase.database().ref(`coins/${key}`).remove();
      playerRef.update({
        coins: players[playerId].coins + 1,
      })
    }
  }


  function handleArrowPress(xChange = 0, yChange = 0) {
    const newX = players[playerId].x + xChange;
    const newY = players[playerId].y + yChange;
    if (!isSolid(newX, newY)) {
      //move to the next space
      players[playerId].x = newX;
      players[playerId].y = newY;
      if (xChange === 1) {
        players[playerId].direction = "right";
      }
      if (xChange === -1) {
        players[playerId].direction = "left";
      }
      playerRef.set(players[playerId]);
      attemptGrabCoin(newX, newY);
    }
  }

  function initGame() {

    new KeyPressListener("ArrowUp", () => handleArrowPress(0, -1))
    new KeyPressListener("ArrowDown", () => handleArrowPress(0, 1))
    new KeyPressListener("ArrowLeft", () => handleArrowPress(-1, 0))
    new KeyPressListener("ArrowRight", () => handleArrowPress(1, 0))
    new KeyPressListener("KeyW", () => handleArrowPress(0, -1))
    new KeyPressListener("KeyS", () => handleArrowPress(0, 1))
    new KeyPressListener("KeyA", () => handleArrowPress(-1, 0))
    new KeyPressListener("KeyD", () => handleArrowPress(1, 0))
    document.querySelector('.len').addEventListener("click", () => handleArrowPress(0, -1));
    document.querySelector('.xuong').addEventListener("click", () => handleArrowPress(0, 1));
    document.querySelector('.trai').addEventListener("click", () => handleArrowPress(-1, 0));
    document.querySelector('.phai').addEventListener("click", () => handleArrowPress(1, 0));


    const allPlayersRef = firebase.database().ref(`players`);
    const allCoinsRef = firebase.database().ref(`coins`);

    allPlayersRef.on("value", (snapshot) => {
      //Fires whenever a change occurs
      players = snapshot.val() || {};
      Object.keys(players).forEach((key) => {
        const characterState = players[key];
        let el = playerElements[key];
        // Now update the DOM
        el.querySelector(".Character_name").innerText = characterState.name;


        el.querySelector(".Character_coins").innerText = characterState.coins;
        el.setAttribute("data-color", characterState.color);
        el.setAttribute("data-direction", characterState.direction);
        const left = 16 * characterState.x + "px";
        const top = 16 * characterState.y - 4 + "px";
        el.style.transform = `translate3d(${left}, ${top}, 0)`;
      })
    })
    allPlayersRef.on("child_added", (snapshot) => {
      //Fires whenever a new node is added the tree
      const addedPlayer = snapshot.val();
      const characterElement = document.createElement("div");
      characterElement.classList.add("Character", "grid-cell");
      if (addedPlayer.id === playerId) {
        characterElement.classList.add("you");
      }
      characterElement.innerHTML = (`
        <div class="Character_shadow grid-cell"></div>
        <div class="Character_sprite grid-cell"></div>
        <div class="Character_name-container">
          <span class="Character_name"></span>
          <span class="Character_coins">0</span>
        </div>
        <div class="Character_you-arrow"></div>
      `);
      playerElements[addedPlayer.id] = characterElement;

      //Fill in some initial state
      characterElement.querySelector(".Character_name").innerText = addedPlayer.name;
      characterElement.querySelector(".Character_coins").innerText = addedPlayer.coins;
      characterElement.setAttribute("data-color", addedPlayer.color);
      characterElement.setAttribute("data-direction", addedPlayer.direction);
      const left = 16 * addedPlayer.x + "px";
      const top = 16 * addedPlayer.y - 4 + "px";
      // characterElement.style.transform = `translate3d(${left}, ${top}, 0)`;
      gameContainer.appendChild(characterElement);
    })


    //Remove character DOM element after they leave
    allPlayersRef.on("child_removed", (snapshot) => {
      const removedKey = snapshot.val().id;
      gameContainer.removeChild(playerElements[removedKey]);
      delete playerElements[removedKey];
    })


    //New - not in the video!
    //This block will remove coins from local state when Firebase `coins` value updates
    allCoinsRef.on("value", (snapshot) => {
      coins = snapshot.val() || {};
    });
    //

    allCoinsRef.on("child_added", (snapshot) => {
      const coin = snapshot.val();
      const key = getKeyString(coin.x, coin.y);
      coins[key] = true;

      // Create the DOM Element
      const coinElement = document.createElement("div");
      coinElement.classList.add("Coin", "grid-cell");
      coinElement.innerHTML = `
        <div class="Coin_shadow grid-cell"></div>
        <div class="Coin_sprite grid-cell"></div>
      `;

      // Position the Element
      const left = 16 * coin.x + "px";
      const top = 16 * coin.y - 4 + "px";
      coinElement.style.transform = `translate3d(${left}, ${top}, 0)`;

      // Keep a reference for removal later and add to DOM
      coinElements[key] = coinElement;
      gameContainer.appendChild(coinElement);
    })
    allCoinsRef.on("child_removed", (snapshot) => {
      const { x, y } = snapshot.val();
      const keyToRemove = getKeyString(x, y);
      gameContainer.removeChild(coinElements[keyToRemove]);
      delete coinElements[keyToRemove];
    })


    //Updates player name with text input
    playerNameInput.addEventListener("change", (e) => {
      const newName = e.target.value || createName();
      playerNameInput.value = newName;
      playerRef.update({
        name: newName
      })
    })

    //Update player color on button click
    playerColorButton.addEventListener("click", () => {
      const mySkinIndex = playerColors.indexOf(players[playerId].color);
      const nextColor = playerColors[mySkinIndex + 1] || playerColors[0];
      playerRef.update({
        color: nextColor
      })
    })

    //Place my first coin
    placeCoin();

  }

  firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
    if (user) {
      //You're logged in!
      playerId = user.uid;
      playerRef = firebase.database().ref(`players/${playerId}`);

      const name = createName();
      playerNameInput.value = name;

      const { x, y } = getRandomSafeSpot();


      playerRef.set({
        id: playerId,
        name,
        direction: "right",
        color: randomFromArray(playerColors),
        x,
        y,
        coins: 0,
      })

      //Remove me from Firebase when I diconnect
      playerRef.onDisconnect().remove();

      //Begin the game now that we are signed in
      initGame();
    } else {
      //You're logged out.
    }
  })

  firebase.auth().signInAnonymously().catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode, errorMessage);
  });


})();
