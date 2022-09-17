import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Accordion from '../Accordion'
import { Button } from '../Buttons/Button'


export default function Listing() {
    const [open, setOpen ] = useState('')
     return (
        <View>
            {/* <Text>Hello</Text> */}
           <View>
                <Accordion header='My Listing' body=''  />
                <Accordion header='My Favorites' body=''  />
                <Accordion header='Account Details' body=''  />
                <Accordion header='Settings' body=''  />
                <Accordion header='Contact Us' body=''  />
                <Accordion header='Admin Dashboard' body=''  />
           </View>
          <View
            style={{
                position: 'absolute',
                justifyContent: 'center',
                left: 20,
                top: 320,
            }}
          >
            <Button 
                    onPress={undefined} 
                    labelStyle={{ 
                        color: "#000",
                        borderRadius: 5, 
                        borderWidth: 1, 
                        borderColor: "#000",
                        width: 320,
                        height: 40,
                        paddingTop: 10,
                        alignContent: 'center',
                        textAlign: 'center',
                        justifyContent: 'center',
                        // marginRight: 5,
                        // marginTop: 50,
                        // position: 'absolute',
                        // top: 10,
                        }}  
                    label="Show all"
                />
          </View>

        </View>
     )
}