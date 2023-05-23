import { combineReducers } from "redux";
import dataReducer from "./data/dataRedusers";

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
