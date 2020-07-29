import * as actions from '../constants/index'



const initialState = {
    list: [],
    isLoading: true


}

function boutReducer(state = initialState, action) {
    
    if (action.type === actions.ADD_BOUTS) {
        return {
            ...state,
            list: action.payload,
            isLoading: false
        }
    }


    return state
}

export default boutReducer