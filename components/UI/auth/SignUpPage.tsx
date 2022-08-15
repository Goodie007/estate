import React from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { ProfileImage } from "./ProfileImage";

interface SignUpPageProps {
    navigation: any;
}


const SignUpPage = ({navigation }: SignUpPageProps) => {
    return (
        <View
            style={{
                marginLeft: 30,
            }}
        >
           <View
               style={{
                justifyContent: 'flex-start'
               }}
           >
             <Text
                style={{
                    fontSize: 28,
                    fontWeight: '600',
                    color: '#4a3af2',
                    top: 20,
                    margin: 20,
                }}
             >Create new account</Text>
             <ProfileImage />
             <TextInput
                placeholder="First Name"
                style={{
                    borderWidth: 1,
                    height: 40,
                    width: '80%',
                    borderColor: 'grey',
                    borderRadius: 20,
                    margin: 20,
                    paddingLeft: 15,
                }} />
                 <TextInput
                    placeholder="Last Name"
                    style={{
                        borderWidth: 1,
                        height: 40,
                        width: '80%',
                        borderColor: 'grey',
                        borderRadius: 20,
                        marginTop: 0,
                        marginLeft: 20,
                        paddingLeft: 15,
                    }} />
                     <TextInput
                        placeholder="Email"
                        style={{
                            borderWidth: 1,
                            height: 40,
                            width: '80%',
                            borderColor: 'grey',
                            borderRadius: 20,
                            marginTop: 20,
                            marginLeft: 20,
                            paddingLeft: 15,
                        }} />
                     <TextInput
                        placeholder="Password"
                        style={{
                            borderWidth: 1,
                            height: 40,
                            width: '80%',
                            borderColor: 'grey',
                            borderRadius: 20,
                            marginTop: 20,
                            marginLeft: 20,
                            paddingLeft: 15,
                        }} />
                 <TouchableOpacity
                    style={{
                        top: 20,
                        backgroundColor: '#393096',
                        width: '80%',
                        height: 40,
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
                    >Sign Up</Text>
                 </TouchableOpacity>
           </View>
            
        </View>
    )
}

export { SignUpPage };