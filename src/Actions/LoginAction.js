import axios from "axios";
import { FETCH_ITEMS, LOADER, LOGIN_ERR } from "./Constants";
import { toast } from "react-toastify";
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

export const LoginDetails = (emp_credentials, navigate) => async dispatch => {
    console.log(emp_credentials);

    const url = "http://localhost:8080/users/login";

    axios.post(url, emp_credentials)
        .then((res) => {
            if (res.data.code === 1) {
                localStorage.setItem("token", res.data.token);
                dispatch({
                    dispatch: FETCH_ITEMS,
                    user_info: res.data,
                });
                // if (res.data.firstLogin) {
                //     <Routes>
                //         <Route path="/change" element={<Navigate to="/change" replace />} />
                //     </Routes>
                // } else {
                //     <Routes>
                //     <Route path="/home" element={<Navigate to="/home" replace />} />
                // </Routes>
                // }
            } else {
                dispatch({
                    type: LOGIN_ERR,
                    login_err: true,
                });
                toast.warn("invalid credentilas! please try again", {
                    position: "top-center",
                });
                dispatch({
                    type: LOADER,
                    isLoading: false,
                });
            }
            
            return res.data;
        });
};