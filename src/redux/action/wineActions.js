import { fetchSelectedWine, fetchWinesFrom } from '../../service/WinesService';
import { WineActionTypes, CurrentWineActionTypes } from '../type/wineType';

export const fetchWineRequest = () => ({
  type: WineActionTypes.FETCH_WINE_REQUEST,
});

export const fetchWineSuccess = (wines) => ({
  type: WineActionTypes.FETCH_WINE_SUCCESS,
  payload: wines,
});

export const fetchWineFailure = (error) => ({
  type: WineActionTypes.FETCH_WINE_FAILURE,
  payload: error,
});

export const fetchCurrentWineRequest = () => ({
  type: CurrentWineActionTypes.FETCH_CURRENT_WINE_REQUEST,
});

export const fetchCurrentWineSuccess = (wine) => ({
  type: CurrentWineActionTypes.FETCH_CURRENT_WINE_SUCCESS,
  payload: wine,
});

export const fetchCurrentWineFailure = (error) => ({
  type: CurrentWineActionTypes.FETCH_CURRENT_WINE_FAILURE,
  payload: error,
});

export const fetchWinesAPI = (region) => {
  return (dispatch) => {
    dispatch(fetchWineRequest);
    fetchWinesFrom(region).then(
      (data) => {
        dispatch(fetchWineSuccess(data));
        return data;
      },
      (error) => {
        dispatch(
          fetchWineFailure(`Error while fetching Wines: ${error.message}`)
        );
      }
    );
  };
};

export const fetchCurrentWineAPI = (wine) => {
  return (dispatch) => {
    dispatch(fetchCurrentWineRequest);
    fetchSelectedWine(wine).then(
      (data) => {
        dispatch(fetchCurrentWineSuccess(data));
        return data;
      },
      (error) => {
        dispatch(
          fetchCurrentWineFailure(`Error while fetching Wine: ${error.message}`)
        );
      }
    );
  };
};
