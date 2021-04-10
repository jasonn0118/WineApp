import { CurrentWineActionTypes, WineActionTypes } from '../type/wineType';

const initialWinesState = {
  loading: false,
  error: '',
  wines: [],
};
const initialCurrentWineState = {
  loading: false,
  error: '',
  wine: {},
};

export const wineReducer = (state = initialWinesState, action) => {
  switch (action.type) {
    case WineActionTypes.FETCH_WINE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case WineActionTypes.FETCH_WINE_SUCCESS:
      return {
        ...state,
        loading: false,
        wines: action.payload,
      };
    case WineActionTypes.FETCH_WINE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const currentWineReducer = (state = initialCurrentWineState, action) => {
  switch (action.type) {
    case CurrentWineActionTypes.FETCH_CURRENT_WINE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CurrentWineActionTypes.FETCH_CURRENT_WINE_SUCCESS:
      return {
        ...state,
        loading: false,
        wine: action.payload,
      };
    case CurrentWineActionTypes.FETCH_CURRENT_WINE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
        return state;
  }
};
