import cardsData from '../data';

const playersNames = ['Coko', 'Moma', 'Yanky', 'Goyo', 'Lopa', 'Lufi'];
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

const playerCards = () => {
  const cards = [];
  for (let i = 0; i < turns; i++) {
    const random = randomInteger(0, 3);
    const data = cardsData[random];
    cards.push(data);
  }

  return cards;
};

export const createPlayer = (list = playersNames) => {
  const random = randomInteger(0, 5);
  const name = list[random];
  const cards = playerCards();

  return {
    name,
    cards,
  };
};

export const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
