import React from 'react'
import {View, Text, Dimensions, Pressable} from 'react-native'

export default function Names() {
    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width

    return (
        <View
            style={{
                backgroundColor: '#f5f6fa',
                height,
            }}
        >
           <View
                style={{
                    paddingTop: 30,
                }}
           >
                <Text
                    style={{
                        fontWeight: '500',
                        color: 'lightgrey',
                        marginLeft: 10,
                        textTransform: 'uppercase'
                    }}
                >Public Profile</Text>
                <Pressable>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            backgroundColor: '#fff',
                            height: 50,
                            alignItems: 'center',
                            paddingLeft: 20,
                            paddingRight: 20,
                        }}
                    >
                        <Text>First Name</Text>
                        <Text>Mark</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View
                         style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            backgroundColor: '#fff',
                            height: 50,
                            alignItems: 'center',
                            paddingLeft: 20,
                            paddingRight: 20,
                            marginTop: 1,
                        }}
                    >
                        <Text>Last Name</Text>
                        <Text>Qwain</Text>
                    </View>
            </Pressable>
           </View>
            
           <View
                style={{
                    paddingTop: 30,
                }}
           >
                <Text
                    style={{
                        fontWeight: '500',
                        color: 'lightgrey',
                        marginLeft: 10,
                        textTransform: 'uppercase'
                    }}
                >Private Details</Text>
                <Pressable>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            backgroundColor: '#fff',
                            height: 50,
                            alignItems: 'center',
                            paddingLeft: 20,
                            paddingRight: 20,
                        }}
                    >
                        <Text>E-mail Address</Text>
                        <Text>whatever@gmail.com</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View
                         style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            backgroundColor: '#fff',
                            height: 50,
                            alignItems: 'center',
                            paddingLeft: 20,
                            paddingRight: 20,
                            marginTop: 1,
                        }}
                    >
                        <Text>Phone Number</Text>
                        <Text>Your Number</Text>
                    </View>
            </Pressable>
           </View>
            
        </View>
    )
}