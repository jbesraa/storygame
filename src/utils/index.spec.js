import {handleRounds, createPlayer, playersNames} from './index';

describe('playerNames', () => {
  test('player names has the correct length', () => {
    expect(playersNames).toHaveLength(6);
  });
});

describe('createPlayer', () => {
  test('creates player successfuly', () => {
    const names = ['testme'];
    const result = createPlayer(names);
    expect(result.name).toEqual('testme');
  });

  test('returns empty name and cards array for no names list', () => {
    const names = [];
    const result = createPlayer(names);
    expect(result.name).toEqual('');
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
