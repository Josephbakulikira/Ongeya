import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools} from 'redux-devtools-extension'
import RootReducer from "../reducers/RootReducer"
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import {reduxFirestore, getFirestore} from 'redux-firestore'
import firebase from '../Config/Firebase'

const rrfConfig = {
    userProfiles: "users",
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
    updateProfileOnLogin: false
}

export const ConfigureStore = () => {
    const middleWares = [thunk.withExtraArgument({getFirebase, getFirestore})];
    
    const composedEnhancer = composeWithDevTools(
        applyMiddleware(...middleWares), 
        reactReduxFirebase(firebase, rrfConfig),
        reduxFirestore (firebase));

    const store = createStore(RootReducer, composedEnhancer)

    return store;
}