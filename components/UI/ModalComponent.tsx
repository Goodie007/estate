import React, { useState } from 'react'
import { Modal, Pressable, Text, View } from 'react-native'

interface ModalProps {
    children: React.ReactNode;
    labelStyle?: any;
    onPress?: any;
}

export default function ModalComponent({children, labelStyle, onPress, ...props}: ModalProps) {
    const [ modalVisible, setModalVisible ] = useState(false)
    return (
        <View>
            <Modal
                transparent={true}
                visible={modalVisible}
            >
                <View
                    style={{
                        width: 100,
                        height: 100,
                    }}
                >
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text>Hello World</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    )
}