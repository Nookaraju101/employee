import { FETCH_ITEMS, LOGIN_ERR } from "../Actions/Constants";

const intialState = {
    emp_login: {}
};

export default function (state = {}, action) {
    switch (action?.type) {
        case FETCH_ITEMS: 
         return {
            ...state,
            data: action.user_info?.data,
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