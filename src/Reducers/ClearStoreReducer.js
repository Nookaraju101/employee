import { clear_store } from "../Actions/ClearStoreAction";
import { CLEAR_DATA } from "../Actions/Constants";

const intialState = {};
export default function (state = intialState, action) {
    switch (action?.type) {
        case CLEAR_DATA:
            return {
                ...state
            };
        default:
            return state;
    }
}