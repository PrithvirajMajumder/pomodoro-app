import { combineReducers } from "redux";
import alarmReducer from "./AlarmReducer";

const reducers = combineReducers({
    alarm: alarmReducer,
});

export default reducers;