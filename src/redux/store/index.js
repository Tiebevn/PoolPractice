import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import competitorReducer from "../reducers/competitorReducer"

const rootReducer = combineReducers({
    competitors: competitorReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store