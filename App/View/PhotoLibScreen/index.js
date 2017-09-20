import React, { Component } from "react";
import PhotoLib from "./PhotoLib.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator({
    PhotoLib: { screen: PhotoLib },
}));
