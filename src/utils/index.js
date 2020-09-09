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

const uniqueNumbers = (count) => {
  const result = [];
  const used = [];
  for(let i =0;i <count;i++) {
    let random = randomInteger(0,count -1);
    while(used.indexOf(random) > -1){
      random = randomInteger(0, count -1);
    }
    used.push(random);
    result.push(random);
  }
  return result;
};

const createPlayerCards = ({data = cardsData, indexes} = {}) => {
  const cards = [];
  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i];
    cards.push(data[index]);
  }

  return cards;
};

const playerInstance = ({id, name, cards} = {}) => {
  return {
    id: id,
    name: name || '',
    cards: cards || [],
  };
};


const createPlayerName = ({namesList, index}) => {
  const namesListLength = Array.isArray(namesList) && namesList.length;
  if(!namesListLength) {
    return '';
  }

  let result = namesList[index];

  return result;
};

const createPlayer = ({
  playerId
} = {}) => {
  let  pId= playerId ;
  const player = playerInstance({id : pId});
  return player;
};

export const generateUniquePlayers = 
  ({namesList = playersNames, cardsList = cardsData, numOfPlayers, rounds = turns}) => {
  if(numOfPlayers < 0 ){
    return [];
  }
  const players = [];
  const playersId = uniqueNumbers(numOfPlayers);
  const playersCardsIndexes = uniqueNumbers(numOfPlayers*rounds);
  let playerCards = {start:0, end: rounds};
  for (let i = 0; i < playersId.length; i++) {
    const playerId = playersId[i];

    const player = createPlayer({playerId});

    player.name = createPlayerName({namesList, index:player.id});

    const {start, end} = playerCards;
    const indexes = playersCardsIndexes.slice(start,end);
    player.cards = createPlayerCards({data: cardsList, indexes });
    playerCards.start = start + rounds;
    playerCards.end = end + rounds;

    players.push(player);
  }

  return players;
};

export const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
