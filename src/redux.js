import {combineReducers, createStore} from 'redux';
import playersReducer from './players/reducer';
import cardsReducer from './cards/reducer';

const rootReducer = combineReducers({
  players: playersReducer,
  cards: cardsReducer,
});

export const store = createStore(rootReducer);
