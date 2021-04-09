const initialState = {
    loading: false,
    error: {},
    wine: {
        "id":"",
        "name": "",
        "type": "",
        "appellation": {},
        "grapes": []
      }
}

export const wineReducer = (state= {initialState}, action) =>{
    switch(action.type){
        default:
            return state;
    }
}