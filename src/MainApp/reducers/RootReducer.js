import { combineReducers } from "redux";
import TestReducer from "../Store/TestReducer";
import postReducer from "../../component/PostRedux/postReducer";
import { reducer as FormReducer} from "redux-form"
import ModalReducer from "../../component/Modals/ModalReducer";
import authReducer from "../../component/auth/authReducer";

const RootReducer = combineReducers({
    form: FormReducer,  
    test: TestReducer,
    posts: postReducer,
    modals: ModalReducer,
    auth: authReducer
})

export default RootReducer