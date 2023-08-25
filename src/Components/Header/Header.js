import React, { useState } from "react";
import { clear_store } from "../../Actions/ClearStoreAction";
import "./Header.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Header(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emp_data = useSelector((state) => state.emp_login?.data);

    const [menu, setMenu] = useState(false);


    const iconClickHandler = () => {
        setMenu(!menu);
        props.onMenuClick(menu);
    };
    const signOutHandler = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/login');
        dispatch(clear_store());
    };
    return (
        <div className="header d-flex justify-content-between">
            <div className="more-icon-div">
                <i className="bi bi-list more-icon bi bi-menu-button"
                onClick={iconClickHandler} > </i>
            </div>
            <label className="header-text">Employee portal</label>
            <div className="icon-button">
            <a onClick={signOutHandler}>SignOut</a>
            </div>
        </div>
    )
}
