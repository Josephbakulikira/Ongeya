import { combineReducers } from "redux";
import TestReducer from "../Store/TestReducer";
import postReducer from "../../component/PostRedux/postReducer";
import { reducer as FormReducer} from "redux-form"
import ModalReducer from "../../component/Modals/ModalReducer";
import authReducer from "../../component/auth/authReducer";
import AsyncReducer from "../../component/async/AsyncReducer";
import {reducer as ToastrReducer} from 'react-redux-toastr'
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const RootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,  
    test: TestReducer,
    posts: postReducer,
    modals: ModalReducer,
    auth: authReducer,
    async: AsyncReducer,
    toastr: ToastrReducer
})

export default RootReducer