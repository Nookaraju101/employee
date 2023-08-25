import { ALERT_VAR } from "../Actions/Constants";

const intialState = {};
export default function (state=intialState, action) {
    switch(action?.type){
        case ALERT_VAR:
            return {
                ...state,
                redirectFrom: action.redirectFrom,
            };
        default:
            return state;
    }
}