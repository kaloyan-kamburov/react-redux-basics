const mathReducer = (state = {
    result: 1, 
    lastValues: [],
    username: "MAX"
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues]
            };
            state.lastValues.push(action.payload);
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues]
            };
            break;
    }

    return state;
};

export default mathReducer;