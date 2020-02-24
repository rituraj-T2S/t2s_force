
import { all } from 'redux-saga/effects';
import {TakeAwayListResponse, WatchTakeAwayList_APICall} from "./TakeawayListSaga";

export default function* rootSaga(){
    console.log('saga')
    yield all ([TakeAwayListResponse(),WatchTakeAwayList_APICall()])
}
