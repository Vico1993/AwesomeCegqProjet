import React, { Component } from "react";
import Notification from "./Notification.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator({
    Notification: { screen: Notification },
}));
