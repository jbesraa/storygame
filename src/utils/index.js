import cardsData from '../data';

export const playersNames = ['Coko', 'Moma', 'Yanky', 'Goyo', 'Lopa', 'Lufi'];

export const turns = 2;

export const handleRounds = ({
  numberOfPlayers,
  currentPlayerIndex,
  currentCardIndex,
  rounds = turns,
}) => {
  const result = {
    newPlayerIndex: currentPlayerIndex,
    newCardIndex: currentCardIndex,
  };
  if (!rounds || !numberOfPlayers) {
    return result;
  }
  const isEndOfGame =
    currentPlayerIndex === numberOfPlayers && currentCardIndex === rounds - 1;
  const isNewRound =
    currentPlayerIndex === numberOfPlayers && currentCardIndex != rounds - 1;
  const isNextIterationInRound = currentPlayerIndex != numberOfPlayers;
  if (isEndOfGame) {
    // should do something
    return result;
  }
  if (isNewRound) {
    result.newPlayerIndex = 0;
    result.newCardIndex = currentCardIndex + 1;
  }
  if (isNextIterationInRound) {
    result.newPlayerIndex = currentPlayerIndex + 1;
    result.newCardIndex = currentCardIndex;
  }
  return result;
};

export const generateRandomCards = ({data = cardsData, rounds} = {}) => {
  const cards = [];
  const used = [];
  for (let i = 0; i < rounds; i++) {
    let random = randomInteger(0, rounds - 1);
    while (used.indexOf(random) > -1) {
      random = randomInteger(0, rounds - 1);
    }
    used.push(random);
    cards.push(data[random]);
  }

  return cards;
};

const playerInstance = ({name, cards} = {}) => {
  return {
    name: name || '',
    cards: cards || [],
  };
};

export const createPlayer = ({
  namesList = playersNames,
  pIndex,
  rounds,
} = {}) => {
  const player = playerInstance();
  const namesListLength = Array.isArray(namesList) && namesList.length;
  if (!namesListLength) {
    return player;
  }
  if (namesListLength > 0) {
    player.name = namesList[pIndex];
    player.cards = generateRandomCards({rounds});
  }

  return player;
};

export const generateUniquePlayers = ({namesList = playersNames, numOfPlayers}) => {
  const players = [];
  const used = [];
  for (let i = 0; i < numOfPlayers; i++) {
    let randomNameIndex = randomInteger(0, namesList.length - 1);
    while (used.indexOf(randomNameIndex) !== -1) {
      randomNameIndex = randomInteger(0, namesList.length - 1);
    }
    const p = createPlayer({namesList, rounds: 2, pIndex: randomNameIndex});
    used.push(randomNameIndex);
    players.push(p);
  }

  return players;
};

export const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
