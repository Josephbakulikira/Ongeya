import { combineReducers } from "redux";
import TestReducer from "../Store/TestReducer";
import postReducer from "../../component/PostRedux/postReducer";
import { reducer as FormReducer} from "redux-form"

const RootReducer = combineReducers({
    form: FormReducer,  
    test: TestReducer,
    posts: postReducer
})

export default RootReducer