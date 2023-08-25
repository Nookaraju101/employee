import { combineReducers } from "redux";
import LoaderReducer from "./LoaderReducer";
import AlertVarReducer from "./AlertVarReducer";
import LoginReducer from "./LoginReducer";
import { routerReducer } from 'react-router-redux'
// let newState = {
// emp_login: {},
// loader: {},
// alert_var: {}
// };

const rootReducer = combineReducers({
    routing: routerReducer,
    emp_login: LoginReducer,
    loader: LoaderReducer,
    alert_var: AlertVarReducer,
})

// const rootReducer = (state, action) => {
//     if(action?.type === 'CLEAR_DATA') {
//         return newReducer(newState, action)
//     }
//     return newReducer(state, action)
// }

export default rootReducer;