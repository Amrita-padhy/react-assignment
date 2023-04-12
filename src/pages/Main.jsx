import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import SideDrawer from "../components/SideDrawer";
import { Provider } from "react-redux";
import store from "../store/store.js";

function Main() {
  return (
    <Provider store={store}>
      <div style={{ width: "100%", height: "auto" }}>
        <SideDrawer />
        <div style={{ marginLeft: "90px" }}>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </Provider>
  );
}

export default Main;
