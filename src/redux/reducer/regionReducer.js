import { RegionActionTypes } from "../type/regionType";

const initialState = {
    loading: false,
    error: '',
    regions: []
}

export const regionReducer = (state = initialState, action) => {
    switch(action.type) {
        case RegionActionTypes.FETCH_REGION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case RegionActionTypes.FETCH_REGION_SUCCESS:
            return {
                ...state,
                loading: false,
                regions: action.payload
            }
        case RegionActionTypes.FETCH_REGION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}