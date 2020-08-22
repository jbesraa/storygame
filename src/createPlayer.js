import {randomInteger} from './utils';
import cardsData from './data';

const playerTurns = 2;

const playerCards = () => {
  const cards = [];
  for (let i = 0; i < playerTurns; i++) {
    const random = randomInteger(0, 3);
    const data = cardsData[random];
    cards.push(data);
  }

  return cards;
};

const playersNames = ['Coko', 'Moma', 'Yanky', 'Goyo', 'Lopa', 'Lufi'];

const createPlayer = (list = playersNames) => {
  const random = randomInteger(0, 5);
  const name = list[random];
  const cards = playerCards();

  return {
    name,
    cards,
  };
};

export default createPlayer;
