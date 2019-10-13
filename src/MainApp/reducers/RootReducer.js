import { combineReducers } from "redux";
import TestReducer from "../Store/TestReducer";
import postReducer from "../../component/PostRedux/postReducer";

const RootReducer = combineReducers({
    test: TestReducer,
    posts: postReducer
})

export default RootReducer