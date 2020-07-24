import * as actions from '../constants/index'
import {Action} from '../../types/types'


const initialState = {
    bouts: [],


}

function boutReducer(state = initialState, action) {
    
    if (action.type === actions.ADD_BOUTS) {
        return {
            ...state,
            bouts: action.payload
        }
    }


    return state
}

export default boutReducer