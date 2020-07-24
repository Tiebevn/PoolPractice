import * as actions from '../constants/index'
import {Action} from '../../types/types'


const initialState = {
    list: [],
    isFetching: true,
    error: null
}

function competitorReducer(state = initialState, action) {
    
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
            //list: action.payload
            list: require('../../data/mockdata.json')
        }
    }
    if (action.type === actions.GET_DATA_ERROR) {
        return {
            ...state,
            isFetching: false,
            error: action.error,
            list: require('../../data/mockdata.json')
        }
    }
    return state
}

export default competitorReducer