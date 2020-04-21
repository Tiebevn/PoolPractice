import * as actions from '../constants/index'
import {Action} from '../../types/types'


const initialState = {
    list: [],
    isFetching: true,
    error: null
}

function competitorReducer(state = initialState, action: Action) {
    
    if (action.type === actions.GET_DATA_PENDING) {
        return {
            ...state,
            isFetching: true,
        }
    }
    if (action.type === actions.GET_DATA_SUCCESS) {
        return {
            ...state,
            isFetching: false,
            list: action.payload
        }
    }
    if (action.type === actions.GET_DATA_ERROR) {
        return {
            ...state,
            isFetching: false,
            error: action.error
        }
    }
    return state
}

export default competitorReducer