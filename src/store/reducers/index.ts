import { combineReducers } from "redux";
import showsReducer from "./shows";

const reducer = combineReducers({
  shows: showsReducer,
});

export default reducer;
