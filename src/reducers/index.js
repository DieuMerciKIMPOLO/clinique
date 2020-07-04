import { createStore, combineReducers } from 'redux'
import users from './users';

const reducer = combineReducers({
    users: users,
})

const store = createStore(reducer);
export default store