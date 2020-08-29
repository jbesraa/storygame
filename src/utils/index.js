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

const createRandomCards = ({data = cardsData, rounds} = {}) => {
  const cards = [];
  const used = [];
  for (let i = 0; i < rounds; i++) {
    let random = randomInteger(0, rounds);
    while (used.indexOf(random) > -1) {
      random = randomInteger(0, rounds);
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

export const createPlayer = ({list = playersNames, pIndex, rounds} = {}) => {
  const player = playerInstance();
  const noPlayerNames = !list.length;
  if (noPlayerNames) {
    return player;
  }
  if (list.length > 0) {
    player.name = list[pIndex];
    player.cards = createRandomCards({rounds});
  }

  return player;
};

export const generateUniquePlayers = ({numOfPlayers}) => {
  const players = [];
  const used = [];
  for (let i = 0; i < numOfPlayers; i++) {
    let randomNameIndex = randomInteger(0, playersNames.length - 1);
    while (used.indexOf(randomNameIndex) !== -1) {
      randomNameIndex = randomInteger(0, playersNames.length - 1);
    }
    const p = createPlayer({rounds: 2, pIndex: randomNameIndex});
    used.push(randomNameIndex);
    players.push(p);
  }

  return players;
};

export const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
