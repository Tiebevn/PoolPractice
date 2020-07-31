import * as actions from './../constants/index'
import {Action} from '../../types/types'

export function addCompetitors(payload): Action {
    return {type: actions.ADD_COMPETITORS, payload}
}

export function changeCapacity(payload): Action {
    return {type: actions.CHANGE_CAPACITY, payload}
}