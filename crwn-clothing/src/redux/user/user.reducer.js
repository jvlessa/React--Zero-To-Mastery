import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
};

// This default state parameters only works if state is UNDEFINED
// If state is NULL or ANY ANOTHER VALUE, the function will consider the value passed to the function as it should be
const userReducer = (state = INITIAL_STATE, action) => {

    // Depending of the type of action
    switch (action.type){
        case UserActionTypes.SET_CURRENT_USER: // Same string of the user.action.js
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;