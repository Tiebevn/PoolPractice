import * as actions from '../constants/index'
import {Action} from '../../types/types'


const initialState = {
    bouts: [],


}

function boutReducer(state = initialState, action: Action) {
    
    if (action.type === actions.ADD_BOUTS) {
        return {
            ...state,
            bouts: action.payload
        }
    }
    if (action.type === actions.UPDATE_BOUT) {
        
    }

    return state
}

export default boutReducer