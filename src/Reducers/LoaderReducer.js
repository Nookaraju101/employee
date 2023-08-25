import { LOADER } from "../Actions/Constants";

const intialState = {};
export default function (state = intialState, action) {
    switch (action?.type) {
        case LOADER:
            return {
                ...state,
                isLoading: action.isLoading,
            };
            default:
                return state;
    }
}