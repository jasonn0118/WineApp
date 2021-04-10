import { fetchRegions } from '../../service/WinesService';
import { RegionActionTypes } from '../type/regionType';

export const fetchRegionRequest = () => ({
  type: RegionActionTypes.FETCH_REGION_REQUEST,
});

export const fetchRegionSuccess = (regions) => ({
  type: RegionActionTypes.FETCH_REGION_SUCCESS,
  payload: regions,
});

export const fetchRegionFailure = (error) => ({
  type: RegionActionTypes.FETCH_REGION_FAILURE,
  payload: error,
});

export const fetchRegionsAPI = () => {
  return (dispatch) => {
    dispatch(fetchRegionRequest);
    fetchRegions().then(
      (data) => {
        dispatch(fetchRegionSuccess(data));
        return data;
      },
      (error) => {
        dispatch(
          fetchRegionFailure(`Error while fetching Regions: ${error.message}`)
        );
      }
    );
  };
};
