import React, { useEffect, useState } from "react";
import { is_loading_action } from "../../Actions/LoadingAction";
import Footer from "../Footer/Footer";
import "./HomePage.scss";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

export default function HomePageComponent() {
    const [menu, setMenu] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(is_loading_action(false));
        if (!localStorage.getItem("token")) {
            navigate('/login');
        }
    }, [])
    const menuClickHandler = (childData) => {
        setMenu(childData);
    }

    return (
        <div className="row m-0">
            <Header onMenuClick={menuClickHandler} ></Header>
            <div className="d-flex row">
                <div className="col-md-3">
                    <Sidebar dataToSidebar={menu} ></Sidebar>
                </div>
                <div className="col-md-9 content-div">

                </div>
                <h2>Welcome back!</h2>
            </div>
            <div className="row footer-section">
                <Footer></Footer>
            </div>
        </div>
    )
}