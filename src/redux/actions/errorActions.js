//@flow
import * as actions from './../constants/index'
import {Action, Error} from '../../types/types'


export function addError(payload: Error): Action {
    return {type: actions.ADD_ERROR, payload}
}

