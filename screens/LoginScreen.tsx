import React from "react";
import {View, Text} from 'react-native';
import { Login } from "../components/UI/auth/Login";
import { LoginPage } from "../components/UI/auth/LoginPage";


const LoginScreen = () => {
    return (
        <View>
            {/* <Login /> */}
            <LoginPage />
        </View>
    )
}

export { LoginScreen };