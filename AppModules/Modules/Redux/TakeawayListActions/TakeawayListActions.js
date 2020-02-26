import { TakeAwayListTypes } from '../TakeawayListTypes/TakeawayListTypes';



export const APIRequestAction = (postcode) => {
    return {
        type: TakeAwayListTypes.TAKEAWAYLIST_API_REQUEST,
        payload: postcode
    }
}