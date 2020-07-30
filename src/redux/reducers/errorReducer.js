import * as actions from '../constants/index'



const initialState = {
    list: [],
}

function errorReducer(state = initialState, action) {
    
    if (action.type === actions.ADD_ERROR) {
        return {
            ...state,
            list: action.payload,

        }
    }


    return state
}

export default errorReducer