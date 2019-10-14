import { combineReducers } from "redux";
import TestReducer from "../Store/TestReducer";
import postReducer from "../../component/PostRedux/postReducer";
import { reducer as FormReducer} from "redux-form"
import ModalReducer from "../../component/Modals/ModalReducer";
import authReducer from "../../component/auth/authReducer";
import AsyncReducer from "../../component/async/AsyncReducer";

const RootReducer = combineReducers({
    form: FormReducer,  
    test: TestReducer,
    posts: postReducer,
    modals: ModalReducer,
    auth: authReducer,
    async: AsyncReducer
})

export default RootReducer