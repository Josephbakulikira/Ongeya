import { createReducer } from "../../MainApp/common/util/ReducerUtil";
import { MODAL_OPEN, MODAL_CLOSE } from "./ModalConstant";

const initialState = null;

const openModal = (state, payload ) => {
    const{modalType, modalProps} = payload;
    return{modalType, modalProps}
}
const closeModal = (state) => {
    return null
}

export default createReducer(initialState, {
    [MODAL_OPEN]: openModal,
    [MODAL_CLOSE]: closeModal
});