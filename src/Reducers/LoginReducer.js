import { FETCH_ITEMS, LOGIN_ERR } from "../Actions/Constants";

const intialState = {};

export default function (state = intialState, action) {
    switch (action?.type) {
        case FETCH_ITEMS: 
         return {
            ...state,
            emp_login: action.user_info,
         };
         case LOGIN_ERR:
            return {
                ...state,
                get_login_err: action.login_err
            };
        default:
            return state;
    }
}