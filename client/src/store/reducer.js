import * as actionTypes from './actions';

const initialState = {
    message: "initial message",
    coords: [
        {
            "longitude": -122.3321,
            "latitude": 46.662,
        }

    ]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOG_MESSAGE:
            return {
                ...state,
                message: action.data.text
            }



        case actionTypes.LOG_NEW_TWEET:
            return {
                ...state,
                coords: state.coords.concat(action.newTweetCoords)
            }


        default:
            return state;
    }

};

export default reducer;