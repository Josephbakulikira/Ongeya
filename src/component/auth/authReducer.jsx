import { createReducer } from "../../MainApp/common/util/ReducerUtil"
import { LOGIN_USER, SIGN_OUT_USER } from "./AuthConstant"

const initialState = {
    authenticated: false,
    currentUser: null
}

const loginUser = (state, payload) => {
    return{
        authenticated: true,
        currentUser: payload.creds.email
    }
}
const signOutUser =() =>  {
    return{
        authenticated: false,
        currentUser: null
    }
}

export default createReducer(initialState, {
    [LOGIN_USER]: loginUser,
    [SIGN_OUT_USER]: signOutUser
})