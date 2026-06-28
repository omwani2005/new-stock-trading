import {
    useEffect
}
    from "react";

import api from "../api";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {

    useEffect(() => {

        const verify = async () => {

            try {

                await api.get(
                    "/auth/verify"
                );

            }

            catch {

                localStorage.removeItem(
                    "token"
                );

                window.location.href =
                    "http://localhost:5173/Signup";

            }

        };

        verify();

    }, []);

    return (

        <div className="dashboard-container">

            <GeneralContextProvider>

                <WatchList />

                <div className="content">

                    <Routes>

                        <Route path="*" element={<Summary />} />

                        <Route path="orders" element={<Orders />} />

                        <Route path="holdings" element={<Holdings />} />

                        <Route path="positions" element={<Positions />} />

                        <Route path="funds" element={<Funds />} />

                        <Route path="apps" element={<Apps />} />

                    </Routes>

                </div>

            </GeneralContextProvider>

        </div>

    );

};

export default Dashboard;