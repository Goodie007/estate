import React, { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import ModalComponent from '../../ModalComponent'



export default function CategoryScreen () {
    const [ modalVisible, setModalVisible ] = useState(false)

    const Close = () => {
        setModalVisible(false)
    }
    return (
        <View>
            <Pressable
                onPress={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <Image
                    source={{ uri: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"}}
                    style={{
                        width: 360,
                        height: 300,
                        marginLeft: 0,
                    }}
                />
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '500',
                            color: '#545454',
                            marginLeft: 10,
                        }}
                    >Orogun</Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: '#545454',
                            marginLeft: 10,
                        }}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.{'\n'}
                        Nam aliquam aut nostrum alias nisi perferendis perspiciatis
                        incidunt quas deserunt id quam, ipsam inventore maiores 
                        asperiores corrupti repellat distinctio. Natus, voluptatum!
                    </Text>
                </View>
             </Pressable>
             <ModalComponent  visible={modalVisible} close={Close} />
        </View>
    )
}