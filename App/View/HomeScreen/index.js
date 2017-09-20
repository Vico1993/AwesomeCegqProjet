import React, { Component } from "react";
import Home from "./Home.js";
import Camera from "../CameraScreen/index.js";
import Notification from "../NotificationScreen/index.js";
import SideBar from "./../../Componnents/SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: Home },
        Camera: { screen: Camera },
        Notification: { screen: Notification }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default HomeScreenRouter;
