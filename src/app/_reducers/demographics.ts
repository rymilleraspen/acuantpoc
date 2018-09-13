function demographics(state = {}, action){
    switch (action.type) {
        case '[DEMOGRAPHICS] UPDATE':
            return action.payload;
        default:
            return state;
    }
}

export default demographics;
