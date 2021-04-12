import {createStore, combineReducers,  } from 'redux';
import {profileReducer} from '../reducers/profile';
import { lessonsReducer } from "../reducers/lessons";
import { homeworksReducer } from "../reducers/homeworks"

// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(combineReducers({
    profileReducer,
    lessonsReducer,
    homeworksReducer,
    
   
}));

export default store; 
