
import { combineReducers } from 'redux';
import TakeAwayListReducer from "./TakeawayListReducer";

const rootReducer = combineReducers({
    takeAway: TakeAwayListReducer
});

export default rootReducer;
