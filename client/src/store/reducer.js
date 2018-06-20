import * as actionTypes from './actions';

const initialState = {
    message: "initial message",
    coords: [],
    countriesObj: {},
    countriesArr: [['us', 1]]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOG_MESSAGE:
            return {
                ...state,
                message: action.data.text
            }



        case actionTypes.LOG_NEW_TWEET:

            let countriesObj = { ...state.countriesObj };

            if (!countriesObj[action.newTweetCoords.country]) {
                countriesObj[action.newTweetCoords.country] = 0;
            }
            countriesObj[action.newTweetCoords.country]++;



            var output = [['ok', 1]];

            for (var key in countriesObj) {
                if (countriesObj.hasOwnProperty(key) && key !== 'null') {
                    output.push([key, countriesObj[key]])
                }
            }

            output.sort(function (a, b) {
                var valueA, valueB;

                valueA = a[1]; // Where 1 is your index, from your example
                valueB = b[1];
                if (valueA > valueB) {
                    return -1;
                }
                else if (valueA < valueB) {
                    return 1;
                }
                return 0;
            });



            return {
                ...state,
                coords: state.coords.concat(action.newTweetCoords),
                countriesObj: countriesObj,
                countriesArr: output
            }


        default:
            return state;
    }

};

export default reducer;