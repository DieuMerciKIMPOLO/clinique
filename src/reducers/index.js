import { createStore, combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import users from './users';
import signup from './signup';
import signin from './signin';

const rootReducer = combineReducers({
    users: users,
    signin:signin,
    signup:signup
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export default store



