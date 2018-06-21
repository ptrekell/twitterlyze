import * as actionTypes from './actions';

const initialState = {
    coords: [],
    countriesObj: {},
    countriesArr: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LOG_NEW_TWEET: {

            let countriesObjTemp = { ...state.countriesObj };

            if (!countriesObjTemp[action.newTweetCoords.country]) {
                countriesObjTemp[action.newTweetCoords.country] = 0;
            }
            countriesObjTemp[action.newTweetCoords.country]++;

    


            let output = [];
   
            for (var key in countriesObjTemp) {             
                if (countriesObjTemp.hasOwnProperty(key) && key !== 'null') {
                        output.push([key, countriesObjTemp[key]])      
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
                countriesObj: countriesObjTemp,
                countriesArr: output
            }
        }

        default:
            return state;
    }

};

export default reducer;