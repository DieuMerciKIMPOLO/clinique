import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import users from './users';
import signup from './signup';
import signin from './signin';

const reducer = combineReducers({
    users: users,
    signin:signin,
    signup:signup
})

const store = createStore(reducer,applyMiddleware(thunk));
export default store