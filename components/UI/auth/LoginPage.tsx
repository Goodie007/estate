import React from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';



const LoginPage = () => {
    return (
        <View>
           <View
               style={{
                justifyContent: 'flex-start'
               }}
           >
             <Text
                style={{
                    fontSize: 28,
                    fontWeight: '600',
                    color: 'green',
                    top: 20,
                    margin: 20,
                }}
             >Sign In</Text>
             <TextInput
                placeholder="Email"
                style={{
                    borderWidth: 1,
                    height: 30,
                    width: '80%',
                    borderColor: 'grey',
                    borderRadius: 20,
                    margin: 20,
                    paddingLeft: 15,
                }} />
                 <TextInput
                    placeholder="Password"
                    style={{
                        borderWidth: 1,
                        height: 30,
                        width: '80%',
                        borderColor: 'grey',
                        borderRadius: 20,
                        marginTop: 0,
                        marginLeft: 20,
                        paddingLeft: 15,
                    }} />
                 <TouchableOpacity
                    style={{
                        top: 20,
                        backgroundColor: 'green',
                        width: '80%',
                        height: 35,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        marginLeft: 20,
                    }}
                    >
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 14,
                        }}
                    >Login</Text>
                 </TouchableOpacity>
           </View>
            
        </View>
    )
}

export { LoginPage };