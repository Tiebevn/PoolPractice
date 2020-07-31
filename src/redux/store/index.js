import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import competitorReducer from "../reducers/competitorReducer"
import boutReducer from '../reducers/boutReducers'

const rootReducer = combineReducers({
    competitors: competitorReducer, bouts: boutReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store