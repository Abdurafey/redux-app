const initialState = 0;

const changeTheNumber = (state= initialState, action) =>{
    switch (action.type) {
        case "INCREMENT": return state +1;
        case "DECREMENT": return state - 1 >= 0 ? state - 1 : initialState;
        // case state<=0: return state;
        default:
            return state;
    }
}

export default changeTheNumber