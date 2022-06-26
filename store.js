import rootReducer from "./reducer"    
import thunk from "redux-thunk"
import { applyMiddleware } from "redux"
import { legacy_createStore as createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';



const middleware=[thunk]

const store=(initialstate={})=>{
    return createStore(
        rootReducer,
        initialstate,
        composeWithDevTools
        (applyMiddleware(...middleware)
        ))
}
export default store;