import React from "react";
import {View, Text} from 'react-native';
import { Categories } from "../components/UI/Categories";
import { Houses } from "../components/UI/Categories/Houses";

const Home = () => {
    return (
        <View
            style={{
                marginLeft: 10,
            }}
        >
            <Categories />
            <Houses />
        </View>
    )
}

export { Home };