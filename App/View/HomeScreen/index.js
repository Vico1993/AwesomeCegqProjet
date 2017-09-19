import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import Camera from "../CameraScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Camera: { screen: Camera }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default HomeScreenRouter;
