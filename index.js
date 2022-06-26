import { combineReducers } from "redux";
import { expReducer } from "./reducer";

 const rootReducer=combineReducers({

expenses:expReducer,    

})

export default rootReducer;