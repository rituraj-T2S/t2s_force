import { TakeAwayListTypes } from '../TakeawayListTypes/TakeawayListTypes';
import { call, put, takeLatest, all } from "redux-saga/effects";
import { APICall } from '../../Network/ApiCall';

export function* TakeAwayListResponse(action) {
    try {

        const APIResponse=yield call(APICall.takeAwayList, action.payload)
        console.log('response',JSON.stringify(APIResponse.data.data[0]))
        yield put({type:TakeAwayListTypes.TAKEAWAYLIST_API_SUCCESS, payload:APIResponse.data})

    }
    catch (error) {
        yield put({ type: TakeAwayListTypes.TAKEAWAYLIST_API_FAIL, payload: error })
    }
}
export function* WatchTakeAwayList_APICall() {
    yield takeLatest(TakeAwayListTypes.TAKEAWAYLIST_API_REQUEST, TakeAwayListResponse)
}

