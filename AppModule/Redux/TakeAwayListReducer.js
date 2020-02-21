import {combineReducers} from 'redux'
import {TakeAwayListTypes} from './TakeAwayListTypes';

const INITIAL_STATE = {
    postcode:''
}

const TakeAwayListReducer = (state=INITIAL_STATE, action) =>
{
    switch (action.type) {
        case TakeAwayListTypes.POSTCODE_INPUT:
            return(
                {
                    ...state,
                    postcode: action.payload
                }
            )
        case TakeAwayListTypes.TAKEAWAYLIST_API_REQUEST:
            return (
                {
                    ...state,
                    postcode: action.payload
                }
            )
        case TakeAwayListTypes.TAKEAWAYLIST_API_SUCCESS:
            return (
                {
                    ...state,
                    postcode: action.payload
                }
            )
    }
}

export default RootReducer = combineReducers({TakeAwayListReducer})
