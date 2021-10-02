const reducer = (state = null, action) => {
    switch (action.type) {
        case 'ALARM/SET_ALARM':            
            return action.payload;    
        case 'ALARM/DELETE_ALARM':            
            return null;    
        default:
            return state;
    }
}

export default reducer;