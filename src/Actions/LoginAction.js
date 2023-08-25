import axios from "axios";
import { FETCH_ITEMS, LOADER, LOGIN_ERR } from "./Constants";
import { toast } from "react-toastify";
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";
import history from '../history';

export const LoginDetails = (emp_credentials, navigate) => dispatch => {
    console.log(emp_credentials);

    const url = "http://localhost:8080/users/login";

   axios.post(url, emp_credentials)
        .then((res) => {
            if (res.data.code === 1) {
                localStorage.setItem("token", res.data.token);
                dispatch({
                    type: FETCH_ITEMS,
                    user_info: res.data,
                });
                if (res.data.firstLogin) {
                    history.navigate('/changepwd');
                } else {
                    history.navigate('/home');

                }
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
        });
};