import {TakeAwayListTypes} from './TakeAwayListTypes';
import { call, put, takeLatest, all } from "redux-saga/effects";
import {APIcall} from '../Network/APIcall';

export function * TakeAwayList_APIcall(action) {
    try {
        const postcode=yield call(APIcall.takeAwayList, action.payload)
        yield put({type:TakeAwayListTypes.TAKEAWAYLIST_API_SUCCESS,postcode})
    }
    catch (error) {
        yield put({type:TakeAwayListTypes.TAKEAWAYLIST_API_FAIL, error:action.payload})
    }
}
export function * WatchTakeAwayList_APIcall() {
    yield takeLatest(TakeAwayListTypes.TAKEAWAYLIST_API_REQUEST,TakeAwayList_APIcall)
}
