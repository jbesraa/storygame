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

const createRandomCards = ({data = cardsData, length = turns} = {}) => {
  const cards = [];
  for (let i = 0; i < length; i++) {
    const random = randomInteger(0, data.length);
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

export const createPlayer = (list = playersNames) => {
  const player = playerInstance();
  if (list.length > 0) {
    const randomNameIndex = randomInteger(0, list.length);
    player.name = list[randomNameIndex];
    player.cards = createRandomCards();
  }

  return player;
};

export const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
