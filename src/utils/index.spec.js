import {
  handleRounds,
  createPlayer,
  playersNames,
  generateUniquePlayers,
  generateRandomCards,
} from './index';

describe('playerNames', () => {
  test('player names has the correct length', () => {
    expect(playersNames).toHaveLength(6);
  });
});

describe('createPlayer', () => {
  test('creates player successfuly', () => {
    const names = ['testme'];
    const result = createPlayer({namesList: names, pIndex: 0, rounds: 2});
    expect(result.name).toEqual('testme');
  });

  test('returns empty name and cards array for no names list', () => {
    const names = [];
    const result = createPlayer({namesList: names, pIndex: 0});
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

describe('generateUniquePlayers', () => {
  test('generates unique players successfully', () => {
    const namesList = ['p1', 'p2', 'p3', 'p4', 'p5'];
    const numOfPlayers = 5;
    const result = generateUniquePlayers({namesList, numOfPlayers});
    const names = result.map((p) => p.name);
    expect(names.indexOf(namesList[0]) > -1).toBeTruthy();
    expect(names.indexOf(namesList[1]) > -1).toBeTruthy();
    expect(names.indexOf(namesList[2]) > -1).toBeTruthy();
    expect(names.indexOf(namesList[3]) > -1).toBeTruthy();
    expect(names.indexOf(namesList[4]) > -1).toBeTruthy();
  });
});

describe('generateRandomCards', () => {
  test('generates unique players successfully', () => {
    const data = [
      {id: 'id0', name: 'name0', imgURL: 'img0'},
      {id: 'id1', name: 'name1', imgURL: 'img1'},
      {id: 'id2', name: 'name2', imgURL: 'img2'},
    ];
    const rounds = 3;
    const result = generateRandomCards({data, rounds});
    console.log('result', result);
    const names = result.map((p) => p.name);
    expect(names.indexOf(data[0].name) > -1).toBeTruthy();
    expect(names.indexOf(data[1].name) > -1).toBeTruthy();
    expect(names.indexOf(data[2].name) > -1).toBeTruthy();
  });
});
