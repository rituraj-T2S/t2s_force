import {TakeAwayListTypes} from '../TakeawayListTypes/TakeawayListTypes';



export const  APIRequestAction = (postcode) =>
{
    return{
        type: TakeAwayListTypes.TAKEAWAYLIST_API_REQUEST,
        payload : postcode
    }
}

export const  APISuccessAction = (response) => {
    return {
        type: TakeAwayListTypes.TAKEAWAYLIST_API_SUCCESS,
        payload:response
    }
}

export const APIFailureAction = (error) => {
    return {
        type:TakeAwayListTypes.TAKEAWAYLIST_API_FAIL,
        payload:error
    }
}
