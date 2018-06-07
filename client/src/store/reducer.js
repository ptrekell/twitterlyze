import * as actionTypes from './actions';

const initialState = {
    message: "initial message"
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOG_MESSAGE:
            return {
                ...state,
                message: action.data.text
            }

        default:
            return state;
    }

};

export default reducer;