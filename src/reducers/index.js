import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import users from './users';

const reducer = combineReducers({
    users: users,
})

const store = createStore(reducer,applyMiddleware(thunk));
export default store