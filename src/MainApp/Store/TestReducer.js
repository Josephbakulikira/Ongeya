import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../../component/test Area/testConstant";
import { createReducer } from "../common/util/ReducerUtil";

const initiate = {
    data: 20
}

const incrementCounter = (state) => {
    return {...state, data: state.data + 1}
}
const decrementCounter = (state) => {
    return {...state, data: state.data - 1}
}

// const TestReducer = (state = initiate, action) =>{
//     switch(action.type) {
//         case INCREMENT_COUNTER:
//             return {...state, data: state.data + 1};
//         case DECREMENT_COUNTER:
//             return{...state, data: state.data - 1}
//         default:
//             return state;     
//     }
    
// } 

export default createReducer(initiate,{ [INCREMENT_COUNTER]: incrementCounter, [DECREMENT_COUNTER]: decrementCounter}
    )
