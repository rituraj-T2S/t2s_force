import {TakeAwayListTypes} from './TakeAwayListTypes';

export const PostCodeInputAction = (postcode) =>
{
    return{
        type: TakeAwayListTypes.POSTCODE_INPUT,
        payload: postcode
    }
}

export const  APIrequestAction = (postcode) =>
{
    return{
        type: TakeAwayListTypes.TAKEAWAYLIST_API_REQUEST,
        payload: postcode
    }
}
