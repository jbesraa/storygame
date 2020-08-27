import {playersNames} from './index';

test('player names has the correct length', () => {
  expect(playersNames).toHaveLength(6);
});
