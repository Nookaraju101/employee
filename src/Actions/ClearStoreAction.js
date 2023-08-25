import { CLEAR_DATA } from "./Constants";

export const clear_store = () => (dispatch) => {
    dispatch({
        type: CLEAR_DATA,
    });
}