import * as actions from './../constants/index'
import {Action} from '../../types/types'

export function addBouts(payload): Action {
    return {type: actions.ADD_BOUTS, payload}
}
