import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';


const Login = () => {
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
                    color: 'green',
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
                style={{
                    top: 20,
                    backgroundColor: 'green',
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
                    borderColor: 'green',
                    borderWidth: 1,
                    

                }}
             >
                <Text
                     style={{
                        color: 'green',
                        fontSize: 14,
                    }}
                    onPress={() => {
                    }}
                >Sign up</Text>
            </TouchableOpacity>
           
           </View>
        </View>
    )
}

export { Login };