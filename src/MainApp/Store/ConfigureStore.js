import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools} from 'redux-devtools-extension'
import RootReducer from "../reducers/RootReducer"
import thunk from "redux-thunk";

export const ConfigureStore = () => {
    const middleWares = [thunk];
    
    const composedEnhancer = composeWithDevTools(applyMiddleware(...middleWares))

    const store = createStore(RootReducer, composedEnhancer)

    return store
}