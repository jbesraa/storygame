import {createPlayer, playersNames} from './index';

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
