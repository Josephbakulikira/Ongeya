export const createReducer = (initiate, fnMap) => {
    return (state = initiate, {type, payload}) => {
        const handler =fnMap[type];

        return handler ? handler(state, payload) : state 
    }
}