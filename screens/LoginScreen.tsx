import React from "react";
import {View, Text} from 'react-native';
import { Login } from "../components/UI/auth/Login";
import { LoginPage } from "../components/UI/auth/LoginPage";
import { SignUpPage } from "../components/UI/auth/SignUpPage";


const LoginScreen = () => {
    return (
        <View>
             <Login  /> 
            {/* <LoginPage />  */}
            {/* <SignUpPage /> */}
        </View>
    )
}

export { LoginScreen };