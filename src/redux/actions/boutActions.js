import * as actions from './../constants/index'
import {Action} from '../../types/types'

export function addBouts(payload): Action {
    return {type: actions.ADD_BOUTS, payload}
}

export function updateBout(payload): Action {
    return {type: actions.UPDATE_BOUT, payload}
}