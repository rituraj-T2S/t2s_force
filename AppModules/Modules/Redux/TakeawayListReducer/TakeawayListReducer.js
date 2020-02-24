import {combineReducers} from 'redux'
import {TakeAwayListTypes} from '../TakeawayListTypes/TakeawayListTypes';

const INITIAL_STATE = {
    postcode:'',
    response:'',
    error:''
}

const TakeAwayListReducer = (state=INITIAL_STATE, action) =>
{
    console.log("action==>",action)
    switch (action.type) {


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
                    response: action.payload
                }
            )
        case TakeAwayListTypes.TAKEAWAYLIST_API_FAIL:
            return (
                {
                    ...state,
                    error:action.payload
                }
            )
        default:
            return  state
    }
}

export default  TakeAwayListReducer
