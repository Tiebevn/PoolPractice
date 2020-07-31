import * as actions from '../constants/index'


const initialState = {
    list: [],
    isFetching: true,
    error: null,
    capacity: 6
}

function competitorReducer(state = initialState, action) {
    

    if (action.type === actions.ADD_COMPETITORS) {
        return {
            ...state,
            isFetching: false,
            list: action.payload

        }
    }

    if (action.type === actions.CHANGE_CAPACITY) {
        return {
            ...state,
            capacity: action.payload
        }
    }

    return state
}

export default competitorReducer