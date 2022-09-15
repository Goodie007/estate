import React from "react";
import {View, Text, Dimensions} from 'react-native';
import { Categories } from "../components/UI/Categories";
import { Houses } from "../components/UI/Categories/Houses";

const Home = () => {
    const  height = Dimensions.get('window').height
    const width =  Dimensions.get('window').width
    return (
        <View
            style={{
                marginLeft: 10,
                height: height / 2,

            }}
        >
            <Categories />
            <Houses />
        </View>
    )
}

export { Home };