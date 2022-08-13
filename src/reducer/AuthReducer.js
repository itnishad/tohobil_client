import {getUser} from '../services/auth-service'
export const initialState = getUser();
export const reducer = (state, action)=>{

    if(action.type === 'USER'){
        return action.payload;
    }

    return state;
}