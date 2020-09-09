import {
  handleRounds,
  playersNames,
  generateUniquePlayers,
} from './index';
import cardsData from '../data';

describe('playerNames', () => {
  test('player names has the correct length', () => {
    expect(playersNames).toHaveLength(6);
  });
});

describe('handleRounds', () => {
  test('handles 0 rounds', () => {
    const numberOfPlayers = 2;
    const currentCardIndex = 0;
    const currentPlayerIndex = 0;
    const rounds = 0;

    const result = handleRounds({
      numberOfPlayers,
      currentPlayerIndex,
      currentCardIndex,
      rounds,
    });
    expect(result.newPlayerIndex).toEqual(currentPlayerIndex);
    expect(result.newCardIndex).toEqual(currentCardIndex);
  });

  test('handles 0 players', () => {
    const numberOfPlayers = 0;
    const currentCardIndex = 2;
    const currentPlayerIndex = 3;
    const rounds = 5;

    const result = handleRounds({
      numberOfPlayers,
      currentPlayerIndex,
      currentCardIndex,
      rounds,
    });
    expect(result.newPlayerIndex).toEqual(currentPlayerIndex);
    expect(result.newCardIndex).toEqual(currentCardIndex);
  });

  test('iterate in round', () => {
    const numberOfPlayers = 3;
    const currentCardIndex = 2;
    const currentPlayerIndex = 1;
    const rounds = 5;

    const result = handleRounds({
      numberOfPlayers,
      currentPlayerIndex,
      currentCardIndex,
      rounds,
    });
    expect(result.newPlayerIndex).toEqual(currentPlayerIndex + 1);
    expect(result.newCardIndex).toEqual(currentCardIndex);
  });

  test('next round', () => {
    const numberOfPlayers = 3;
    const currentCardIndex = 2;
    const currentPlayerIndex = 3;
    const rounds = 5;

    const result = handleRounds({
      numberOfPlayers,
      currentPlayerIndex,
      currentCardIndex,
      rounds,
    });
    expect(result.newPlayerIndex).toEqual(0);
    expect(result.newCardIndex).toEqual(currentCardIndex + 1);
  });
  test('end of game', () => {
    const numberOfPlayers = 3;
    const currentCardIndex = 1;
    const currentPlayerIndex = 3;
    const rounds = 2;

    const result = handleRounds({
      numberOfPlayers,
      currentPlayerIndex,
      currentCardIndex,
      rounds,
    });
    expect(result.newPlayerIndex).toEqual(currentPlayerIndex);
    expect(result.newCardIndex).toEqual(currentCardIndex);
  });
});

describe('generateUniquePlayers', () => {
  test('generates unique players successfully', () => {
    const namesList = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'].sort();
    const numOfPlayers = 6;
    const rounds = 2;
    const inputCardsId = cardsData.map(c => c.id).sort();
    const result = generateUniquePlayers({namesList,rounds, cardsData, numOfPlayers});
    const names = result.map((p) => p.name).sort();
    const cardsId = [].concat.apply([], result.map((p) => p.cards)).map(c => c.id).sort();
    expect(cardsId).toEqual(inputCardsId);
    expect(names).toEqual(namesList);
  });
});
