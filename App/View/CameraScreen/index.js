import React, { Component } from "react";
import Camera from "./Camera.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator({
    Camera: { screen: Camera },
}));
