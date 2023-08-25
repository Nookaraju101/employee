import React, { useState } from "react";
import './EmpLogin.scss';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import validate, { async } from "validate.js";
import { useDispatch } from "react-redux";
import  {AddAction, LoginDetails} from "../../Actions/LoginAction";
import { is_loading_action } from "../../Actions/LoadingAction";

export default function EmpLoginComponent(props) {
    // const [state, setState] = useState({username: "", password: "", errorMsgs: "" });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const constraints = {
        username: {
            presence: {
                message: "username cannot be blank"
            },
            length: {
                minimum: 6,
                message: "must be atleast 6 characterstics"
            },
        },
        password: {
            presence: {
                message: "username cannot be blank"
            },
            length: {
                minimum: 6,
                message: "must be atleast 6 characterstics"
            },
        },
    };
    const validateInput = (field, value) => {
        let object = {};
        object[field] = value;
        let constraint = constraints[field];
        let result = validate(object, { [field]: constraint });
        if (result) {
            return result[field][0];
        }
        return null;
    };

    // const HandleChange = (e) => {
    //     let errorMsgs= "";
    //     let key = e.target.name;
    //     let value = e.target.value;
    //     let errorMsg = validateInput(key, value)
    //     errorMsgs[key] = errorMsg;
    //     setState({
    //         [key]: value,
    //         errorMsgs: errorMsgs
    //     })
    // }

    const HandleForgot = (e) => {
        e.preventDefault();
    } 
    const HandleSubmit = async (e) => {
        e.preventDefault();
        let emp_credentials = {
            username: username,
            password: password
        };

       const data = await dispatch(LoginDetails(emp_credentials));
       console.log(data);
        // dispatch(is_loading_action(true))
        // navigate('/home')

    }

    return (
        <div className="d-flex">
            <div className="col-md-7 flex-row mt-5">
                <img src="./employee_portal.jpg" alt="login" className="emploginimg"></img>
            </div>
            <div className="col-md-5 flex-row-reverse login-container">
                <div>
                    <label className="emp-label">Employee Login</label>
                </div>
                <div className="col-7 container">
                    <form>
                        <div className="form-group row px-2">
                            <label className="label mt-3">User Name</label>
                            <input type="username" name="username" className="form-control col-xs-2 mt-1" value={username}
                                placeholder="Enter User Name" onChange={(e) => {setUsername(e.target.value)}} autoComplete="off" />
                            {/* {errorMsgs.username && (
                                <small className="form-text text-muted">{errorMsgs.username}</small>
                            )} */}
                        </div>
                        <div className="form-group row px-2">
                            <label
                                className="label mt-3 font-weight-bold" htmlFor="exampleInputPassword1"> Password</label>
                            <input type="password" name="password" className="form-control col-xs-2 mt-1" value={password} placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} autoComplete="off" />
                            {/* {errorMsgs.password && (
                                <small className="form-text text-muted">{errorMsgs.password}</small>
                            )} */}
                        </div>
                        <div className="form-group row text-center mt-3">
                            <a onClick={HandleForgot}><Link to='/forgot'>Forgot Password</Link></a>
                        </div>

                        <button
                            type="submit" className="btn btn-primary col-xs-2 form-control btn-submit mt-2 mb-3" onClick={HandleSubmit} disabled={(!username || !password)} > Login </button>
                    </form>
                </div>
            </div>
        </div >
    )
}