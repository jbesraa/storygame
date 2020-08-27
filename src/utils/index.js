import cardsData from '../data';

export const playersNames = ['Coko', 'Moma', 'Yanky', 'Goyo', 'Lopa', 'Lufi'];

export const turns = 2;

export const handleTurn = ({players, currentPlayerIndex, currentCardIndex}) => {
  const numberOfPlayers = players.length - 1;
  // end of game
  if (
    currentPlayerIndex === numberOfPlayers &&
    currentCardIndex === turns - 1
  ) {
    return {newPlayerIndex: currentPlayerIndex, newCardIndex: currentCardIndex};
  }

  // new round
  if (currentPlayerIndex === numberOfPlayers) {
    return {newPlayerIndex: 0, newCardIndex: currentCardIndex + 1};
  }

  // iterate in round
  return {
    newPlayerIndex: currentPlayerIndex + 1,
    newCardIndex: currentCardIndex,
  };
};

const generatePlayerCards = (data = cardsData) => {
  const cards = [];
  for (let i = 0; i < turns; i++) {
    const random = randomInteger(0, data.length);
    cards.push(data[random]);
  }

  return cards;
};

const generatePlayer = ({name, cards} = {}) => {
  return {
    name: name || '',
    cards: cards || [],
  };
};

export const createPlayer = (list = playersNames) => {
  const player = generatePlayer();
  if (list.length > 0) {
    const randomNameIndex = randomInteger(0, list.length);
    player.name = list[randomNameIndex];
    player.cards = generatePlayerCards();
  }

  return player;
};

export const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
