import { createStore } from "redux";
import {devToolsEnhancer} from 'redux-devtools-extension'
import RootReducer from "../reducers/RootReducer"

export const ConfigureStore = () => {
    const store = createStore(RootReducer, devToolsEnhancer())

    return store
}