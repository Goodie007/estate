import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackScreenProps } from '../../../types';
// import { useRouter } from "solito/router";

interface LoginProps {
    navigation: any
}


const Login = () => {
    const  navigation  = useNavigation()
    
    return (
        <View
            style={{
                backgroundColor: '#fff',
                height: '100%'
            }}
        >
           <View
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    top: 150,
                }}
           >
            <Text
                style={{
                    color: '#4a3af2',
                    fontSize: 28,
                    fontWeight: '600'
                }}
            >Welcome to Your App</Text>
            <Text
                style={{
                    color: '#000',
                    fontSize: 14,
                }}
            >use this code base to build your own app</Text>
             <TouchableOpacity
                onPress={() => {
                    navigation.navigate('LoginPage')
                    console.log('pressed')
                }}
                style={{
                    top: 20,
                    backgroundColor: '#4a3af2',
                    width: 250,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,

                }}
             >
                <Text
                     style={{
                        color: '#fff',
                        fontSize: 14,
                    }}
                >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    top: 30,
                    backgroundColor: '#fff',
                    width: 250,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    borderColor: '#4a3af2',
                    borderWidth: 1,
                    

                }}
             >
                <Text
                     style={{
                        color: '#4a3af2',
                        fontSize: 14,
                    }}
                    onPress={() => {
                       navigation.navigate("SignUp")
                        console.log('pressed')
                    }}
                >Sign up</Text>
            </TouchableOpacity>
           
           </View>
        </View>
    )
}

export { Login };