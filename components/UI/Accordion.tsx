import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Icons from './Icons';

interface AccordionProps {
    header: string;
    body: string;
}


export default function Accordion({header, body}: AccordionProps) {
    const [open, setOpen ] = useState(false)

     return (
        <View
            style={{
                paddingTop: 20,
            }}
        >
            <View
                // style={{
                //     paddingRight: 20,
                //     paddingLeft: 20,
                //     backgroundColor: '#000',
                    
                // }}
            >
                <Pressable
                    onPress={() => setOpen(!open)}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingRight: 20,
                            paddingLeft: 20,
                            alignItems: 'center'
                        }}
                    >
                       <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }} 
                       >
                        <Icons type="List" color='#fff' />
                        <Text
                            style={{
                                fontWeight: '500',
                            }}
                        >{header}</Text>
                       </View>
                        <View>{open ?
                            <AntDesign name="down" size={24} color="#545454" /> :
                            <AntDesign name="right" size={24} color="#545454" />
                            }
                        </View>
                    </View>
                </Pressable>
                <View
                    style={{
                        marginRight: 25,
                        marginLeft: 20,
                        // height: 10,
                        backgroundColor: '#e1e2e3',
                        
                    }}
                >
                    <Pressable>
                        {open &&
                            <Text>{body}</Text>
                        }
                    </Pressable>
                </View>
            </View>
        </View>
     )
}