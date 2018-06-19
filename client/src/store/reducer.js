import * as actionTypes from './actions';

const initialState = {
    message: "initial message",
    coords: [],
    countries: {}
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOG_MESSAGE:
            return {
                ...state,
                message: action.data.text
            }



        case actionTypes.LOG_NEW_TWEET:

            let countries = {...state.countries};
        
            if(!countries[action.newTweetCoords.country]){
                countries[action.newTweetCoords.country] = 0;
            }

            countries[action.newTweetCoords.country]++;

            return {
                ...state,
                coords: state.coords.concat(action.newTweetCoords),
                countries: countries
            }


        default:
            return state;
    }

};

export default reducer;