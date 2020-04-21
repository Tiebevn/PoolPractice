import * as actions from './../constants/index'
import {Action} from '../../types/types'


export function getDataPending(): Action {
    return {type: actions.GET_DATA_PENDING}
}

export function getDataSuccess(payload): Action {
    return {type: actions.GET_DATA_SUCCESS, payload:payload}
}

export function getDataError(error): Action{
    return {type: actions.GET_DATA_ERROR, error: error}
}