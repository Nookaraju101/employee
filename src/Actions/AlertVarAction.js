import { ALERT_VAR } from "./Constants";

export const alret_var_action = (redirectFrom) = (dispatch) => {
    dispatch({
        type: ALERT_VAR,
        redirectFrom: redirectFrom,
    });
};