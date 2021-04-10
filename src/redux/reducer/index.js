import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { currentWineReducer, wineReducer } from './wineReducer';
import { regionReducer } from './regionReducer';

export const rootReducer = combineReducers({
  wines: wineReducer,
  regions: regionReducer,
  currentWine: currentWineReducer,
  routing: routerReducer,
});
