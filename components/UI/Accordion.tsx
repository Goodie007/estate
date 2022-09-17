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
            <View>
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
                        <Text>{header}</Text>
                       </View>
                        <View>{open ?
                            <AntDesign name="down" size={24} color="black" /> :
                            <AntDesign name="right" size={24} color="black" />
                            }
                        </View>
                    </View>
                </Pressable>
                {open &&
                  <Text>{body}</Text>
                }
            </View>
        </View>
     )
}